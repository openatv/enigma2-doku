import importlib.util
from pathlib import Path
import tempfile
import unittest

spec = importlib.util.spec_from_file_location('import_settings', Path(__file__).resolve().parents[1] / 'scripts/import-settings.py')
importer = importlib.util.module_from_spec(spec)
spec.loader.exec_module(importer)


class TranslationTests(unittest.TestCase):
    def test_multiline_translations_and_fuzzy_fallback(self):
        text = '''msgid "Network "
"Overview"
msgstr "Netzwerkübersicht"

#, fuzzy
msgid "Old label"
msgstr "Ungeprüft"

msgid "No translation"
msgstr ""
'''
        with tempfile.TemporaryDirectory() as directory:
            source = Path(directory) / 'de.po'
            source.write_text(text, encoding='utf-8')
            result = importer.read_po(source)
        self.assertEqual(result, {'Network Overview': 'Netzwerkübersicht'})

    def test_source_markup_is_not_executed(self):
        text = importer.md('<script>danger()</script> [link](file)')
        self.assertIn(r'\<script\>', text)
        self.assertIn(r'\[link\]', text)

    def test_contextual_slugs_are_stable(self):
        self.assertEqual(importer.slug('NetworkMounts'), 'networkmounts')
        self.assertEqual(importer.slug('OSD3DCalibration'), 'osd3dcalibration')


if __name__ == '__main__':
    unittest.main()
