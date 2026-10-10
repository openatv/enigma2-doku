"""Check the source/image/download contract without importing native Enigma2."""
import ast
import json
import importlib.util
from pathlib import Path
import sys
from types import ModuleType
import unittest
from unittest.mock import patch
from xml.etree.ElementTree import fromstring
from zipfile import ZipFile

ROOT = Path(__file__).resolve().parents[1]
LAB = ROOT / 'examples/skinning/HandbookSkinLab'


class SkinExamplesTests(unittest.TestCase):
    def test_every_scene_is_valid_xml_with_matching_python_component_contract(self):
        module = ast.parse((LAB/'plugin.py').read_text())
        scenes = next(ast.literal_eval(node.value) for node in module.body if isinstance(node,ast.Assign) and any(isinstance(t,ast.Name) and t.id=='SCENES' for t in node.targets))
        self.assertEqual(set(scenes), {p.stem for p in (LAB/'screens').glob('*.xml')})
        for scene in scenes:
            screen=fromstring((LAB/'screens'/f'{scene}.xml').read_text())
            self.assertEqual(screen.tag,'screen')
            self.assertEqual(screen.get('resolution'),'1280,720')
            names={w.get('name') for w in screen.iter('widget') if w.get('name')}
            sources={w.get('source') for w in screen.iter('widget') if w.get('source')}
            expected_names = {'hello':{'greeting'}, 'service-legacy':{'list'}, 'service-rows':{'list'},
                              'service-grid':{'list'}, 'icon-states':{'state0','state1','state2'}}
            expected_sources = {'data':{'message','duration'}, 'infobar':{'demoService','demoEvent','demoNext','demoSignal','demoRecording'},
                                'signals':{'available','unavailable'},
                                'network-overview':{'adapterList','savedLabel','savedList'},
                                'network-profiles':{'adapterList','savedLabel','savedList'},
                                'network-wifi':{'list'},'network-shares':{'list'},
                                'network-mounts':{'mountList'},'network-test':{'list'}}
            self.assertEqual(names, expected_names.get(scene,set()),scene)
            self.assertEqual(sources, expected_sources.get(scene,set()),scene)
            for widget in screen.iter('ePixmap'):
                self.assertTrue(widget.get('pixmap').startswith('~/'))
                self.assertTrue((LAB/widget.get('pixmap')[2:]).is_file())

    def test_modern_examples_use_registered_modes_and_valid_font_and_field_indexes(self):
        reference=json.loads((ROOT/'data/skin-advanced-source.json').read_text())
        for scene in ('service-rows','service-grid'):
            screen=fromstring((LAB/'screens'/f'{scene}.xml').read_text())
            template=screen.find('.//template')
            self.assertEqual(template.get('component'),'serviceList')
            self.assertEqual({m.get('name') for m in template.findall('mode')},{'services','bouquets','other'})
            fonts=template.get('fonts').split(',')
            for item in template.iter('text'):
                self.assertLess(int(item.get('font')),len(fonts))
                if item.get('index'):
                    self.assertIn(item.get('index'),reference['service_indexes'])

    def test_shared_panels_and_icon_states_have_complete_contracts(self):
        panels=fromstring((LAB/'panels.xml').read_text())
        names={p.get('name') for p in panels}
        self.assertEqual({w.get('source') for w in panels.iter('widget')},{'pageTitle','keyHint'})
        for scene in ('panel-list','panel-detail'):
            screen=fromstring((LAB/'screens'/f'{scene}.xml').read_text())
            self.assertEqual({p.get('name') for p in screen.iter('panel')},names)
        icons=fromstring((LAB/'screens/icon-states.xml').read_text())
        for widget in icons.iter('widget'):
            self.assertEqual(len(widget.get('iconGlyphs').split(',')),3)
            self.assertEqual(len(widget.get('iconColors').split(',')),3)
            for point in widget.get('iconGlyphs').split(','):
                self.assertIn(f'{int(point,0):X}',json.loads((ROOT/'data/skin-advanced-source.json').read_text())['icon_font']['glyphs'])

    def test_zip_contains_exact_current_sources_and_no_extra_files(self):
        expected={f'HandbookSkinLab/{p.relative_to(LAB).as_posix()}':p for p in LAB.rglob('*') if p.is_file() and '__pycache__' not in p.parts}
        for path in expected.values():
            if path.suffix in ('.py','.xml','.json','.md','.svg'):
                self.assertNotIn(b'\r\n',path.read_bytes(),f'Use LF so capture hashes survive Git checkout: {path.name}')
        with ZipFile(ROOT/'public/downloads/skinning/HandbookSkinLab.zip') as archive:
            self.assertEqual(set(archive.namelist()),set(expected))
            for name,path in expected.items():
                self.assertEqual(archive.read(name),path.read_bytes(),name)

    def test_network_fixtures_match_native_template_field_types_and_row_selectors(self):
        # Execute only the standalone fixture module with native UI imports stubbed.
        # This catches tuple/index mismatches and text passed to numeric colour slots.
        class FakeList:
            def __init__(self, rows, indexNames):
                self.list=rows; self.indexNames=indexNames
            def setList(self, rows):
                self.list=rows
        class FakeScreen(dict):
            def __init__(self):
                super().__init__(); self.onLayoutFinish=[]
        class RGB:
            def __init__(self,value): self.value=value
            def argb(self): return self.value
        modules={name:ModuleType(name) for name in ('enigma','Components','Components.Sources','Components.Sources.List','Components.Sources.StaticText')}
        modules['enigma'].gRGB=RGB
        modules['Components.Sources.List'].List=FakeList
        modules['Components.Sources.StaticText'].StaticText=lambda text:text
        with patch.dict(sys.modules,modules):
            spec=importlib.util.spec_from_file_location('handbook_network_fixture',LAB/'network.py')
            module=importlib.util.module_from_spec(spec); spec.loader.exec_module(module)
        for scene,owner in module.OWNERS.items():
            screen=FakeScreen();module.configure(screen,scene)
            xml=fromstring((LAB/'screens'/f'{scene}.xml').read_text())
            for widget in xml.findall('widget'):
                name=widget.get('source')
                if name not in module.CONTRACTS[owner]: continue
                component=screen[name];mapping=component.indexNames
                template=widget.find('template')
                if template is None:
                    template=widget.find('templates/template')
                self.assertIsNotNone(template)
                row_templates=template.findall('rowtemplate')
                fonts=template.get('fonts').split(',')
                for values in component.list:
                    self.assertEqual(len(values),len(mapping),scene)
                    layout=row_templates[values[0]] if row_templates else template
                    for text in layout.iter('text'):
                        self.assertLess(int(text.get('font')),len(fonts))
                        field=text.get('index')
                        if field:
                            self.assertIn(field,mapping)
                            self.assertIsInstance(values[mapping[field]],str,(scene,field))
                        for attr in ('foregroundColor','foregroundColorSelected'):
                            color=text.get(attr,'')
                            if color.startswith('+'):
                                self.assertIn(color[1:],mapping)
                                self.assertIsInstance(values[mapping[color[1:]]],int,(scene,color))
            self.assertEqual(len(screen.onLayoutFinish),1)

    def test_public_manifest_does_not_contain_a_receiver_address_or_credentials(self):
        text=(ROOT/'data/skin-lab-captures.json').read_text()
        self.assertNotIn('192.168.',text)
        self.assertNotIn('password',text.lower())
        self.assertEqual(json.loads(text)['status'],'complete')


if __name__=='__main__':
    unittest.main()
