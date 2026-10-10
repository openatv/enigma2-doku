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
            self.assertEqual(names, {'greeting'} if scene=='hello' else set())
            self.assertEqual(sources, {'message','duration'} if scene=='data' else set())
            for widget in screen.iter('ePixmap'):
                self.assertTrue(widget.get('pixmap').startswith('~/'))
                self.assertTrue((LAB/widget.get('pixmap')[2:]).is_file())

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
