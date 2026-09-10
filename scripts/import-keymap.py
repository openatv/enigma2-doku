"""Import actual long-press bindings, preserving action context and device scope."""
import argparse
import hashlib
import json
import subprocess
from pathlib import Path
from xml.etree import ElementTree as ET


def extract(source):
    root = ET.fromstring(source)
    bindings = []
    for mapping in root.findall('map'):
        for group in [mapping, *mapping.findall('device')]:
            for key in group.findall('key'):
                if 'l' in key.get('flags', ''):
                    bindings.append({'key': key.attrib['id'], 'context': mapping.attrib['context'],
                                     'action': key.attrib['mapto'], 'flags': key.attrib['flags'],
                                     'device': group.get('name') if group is not mapping else None})
    return sorted(bindings, key=lambda row: (row['key'], row['context'], row['device'] or '', row['action']))


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('source', type=Path)
    args = parser.parse_args()
    source = args.source / 'data/keymap.xml'
    commit = subprocess.check_output(['git', '-c', 'core.fsmonitor=false', '-C', str(args.source), 'rev-parse', 'HEAD'], text=True).strip()
    result = {'source': 'https://github.com/openatv/enigma2/blob/' + commit + '/data/keymap.xml',
              'commit': commit, 'sha256': hashlib.sha256(source.read_bytes()).hexdigest(), 'bindings': extract(source.read_bytes())}
    output = Path(__file__).resolve().parents[1] / 'data/keymap-long.json'
    output.write_text(json.dumps(result, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
    print(f"{len(result['bindings'])} bindings, {len({row['key'] for row in result['bindings']})} keys: {output}")


if __name__ == '__main__':
    main()
