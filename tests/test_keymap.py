import importlib.util
from pathlib import Path
import unittest

spec = importlib.util.spec_from_file_location('keymap_import', Path(__file__).resolve().parents[1] / 'scripts/import-keymap.py')
module = importlib.util.module_from_spec(spec)
spec.loader.exec_module(module)


class KeymapTest(unittest.TestCase):
    def test_only_long_flags_with_original_context_and_device_scope(self):
        xml = '''<keymap><map context="ColorActions">
        <key id="KEY_BLUE" mapto="blue" flags="b" />
        <key id="KEY_BLUE" mapto="bluelong" flags="l" />
        <key id="KEY_UP" mapto="up" flags="mr" />
        <key id="KEY_EXIT" mapto="stop" flags="s" />
        <!-- <key id="KEY_RED" mapto="not-active" flags="l" /> -->
        <device name="example remote"><key id="KEY_BLUE" mapto="special" flags="ml" /></device>
        </map><map context="Other"><key id="KEY_BLUE" mapto="different" flags="l" /></map></keymap>'''
        rows = module.extract(xml)
        self.assertEqual(len(rows), 3)
        self.assertEqual({row['action'] for row in rows}, {'bluelong', 'special', 'different'})
        self.assertEqual([row['device'] for row in rows if row['action'] == 'special'], ['example remote'])
        self.assertEqual([row['context'] for row in rows if row['action'] == 'different'], ['Other'])
