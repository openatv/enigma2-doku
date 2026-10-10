"""Check the source/image/download contract without importing native Enigma2."""
import ast
import json
from pathlib import Path
import unittest
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
                                'signals':{'available','unavailable'}}
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
        with ZipFile(ROOT/'public/downloads/skinning/HandbookSkinLab.zip') as archive:
            self.assertEqual(set(archive.namelist()),set(expected))
            for name,path in expected.items():
                self.assertEqual(archive.read(name),path.read_bytes(),name)

    def test_public_manifest_does_not_contain_a_receiver_address_or_credentials(self):
        text=(ROOT/'data/skin-lab-captures.json').read_text()
        self.assertNotIn('192.168.',text)
        self.assertNotIn('password',text.lower())
        self.assertEqual(json.loads(text)['status'],'complete')


if __name__=='__main__':
    unittest.main()
