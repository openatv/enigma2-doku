import hashlib
import importlib.util
import json
from pathlib import Path
import tempfile
import unittest
from unittest.mock import patch

spec = importlib.util.spec_from_file_location('import_captures', Path(__file__).resolve().parents[1] / 'scripts/import-captures.py')
importer = importlib.util.module_from_spec(spec)
spec.loader.exec_module(importer)


class CaptureImportTests(unittest.TestCase):
    def setUp(self):
        self.temp = tempfile.TemporaryDirectory()
        self.addCleanup(self.temp.cleanup)
        self.root = Path(self.temp.name)
        self.source = self.root / 'private'
        self.output = self.root / 'public'
        self.output.mkdir()
        self.review = self.root / 'review.json'
        self.items = []
        for language in ('de', 'en'):
            folder = self.source / f'run-{language}'
            (folder / language).mkdir(parents=True)
            data = language.encode()
            digest = hashlib.sha256(data).hexdigest()
            (folder / language / 'menu.png').write_bytes(data)
            entry = dict(id='menu', language=language, article='erste-schritte/bedienung', screen_key='mainmenu',
                         captured_at='2026-09-09T21:55:00+00:00', width=1280, height=720, sha256=digest,
                         file=f'{language}/menu.png', field_labels=['Private draft label'])
            manifest = dict(status='complete', captures=[entry], image={'distro': 'openatv'}, skin='MetrixHD/skin.xml',
                            private_connection='Not for publication')
            (folder / 'manifest.json').write_text(json.dumps(manifest), encoding='utf-8')
            self.items.append(dict(language=language, id='menu', run=f'run-{language}', sha256=digest))
        self.review.write_text(json.dumps(self.items), encoding='utf-8')

    def run_import(self):
        with patch.object(importer, 'ROOT', self.output):
            importer.import_review(self.source, self.review, 'a' * 40)

    def test_only_reviewed_images_and_public_metadata_are_copied(self):
        self.run_import()
        result = json.loads((self.output / 'data/captures.json').read_text(encoding='utf-8'))
        self.assertEqual(len(result['captures']), 2)
        self.assertEqual((self.output / 'src/assets/captures/en/menu.png').read_bytes(), b'en')
        self.assertNotIn('Private', json.dumps(result))
        self.assertNotIn('private_connection', json.dumps(result))

    def test_changed_last_image_aborts_before_any_public_copy(self):
        (self.source / 'run-en/en/menu.png').write_bytes(b'changed after review')
        with self.assertRaisesRegex(ValueError, 'Reviewed image changed'):
            self.run_import()
        self.assertEqual(list(self.output.iterdir()), [])

    def test_missing_translation_and_incomplete_run_are_rejected(self):
        self.review.write_text(json.dumps(self.items[:1]), encoding='utf-8')
        with self.assertRaisesRegex(ValueError, 'DE/EN counterparts'):
            self.run_import()
        self.review.write_text(json.dumps(self.items), encoding='utf-8')
        manifest = self.source / 'run-en/manifest.json'
        value = json.loads(manifest.read_text(encoding='utf-8'))
        value['status'] = 'failed'
        manifest.write_text(json.dumps(value), encoding='utf-8')
        with self.assertRaisesRegex(ValueError, 'Incomplete capture run'):
            self.run_import()
        self.assertEqual(list(self.output.iterdir()), [])


if __name__ == '__main__':
    unittest.main()
