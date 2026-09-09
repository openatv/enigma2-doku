"""Copy explicitly reviewed capture files into the public handbook assets."""
import argparse
import hashlib
import json
from pathlib import Path
import re
import shutil

ROOT = Path(__file__).resolve().parents[1]


def import_review(source, review, tool_commit):
    if not re.fullmatch(r'[0-9a-f]{40}', tool_commit):
        raise ValueError('Capture tool commit must be a full Git commit hash')
    approved = json.loads(review.read_text(encoding='utf-8'))
    if not isinstance(approved, list) or not approved:
        raise ValueError('Review must contain at least one DE/EN image pair')
    pending = []
    ids = set()
    for item in approved:
        language, name, run = item['language'], item['id'], item['run']
        if language not in ('de', 'en') or not all(re.fullmatch(r'[a-z0-9][a-z0-9-]*', x) for x in (name, run)):
            raise ValueError('Invalid reviewed capture identifier')
        if (language, name) in ids:
            raise ValueError('Duplicate reviewed capture')
        ids.add((language, name))
        folder = (source / run).resolve()
        if not folder.is_relative_to(source.resolve()):
            raise ValueError('Capture path escapes source')
        manifest = json.loads((folder / 'manifest.json').read_text(encoding='utf-8'))
        if manifest['status'] != 'complete':
            raise ValueError(f'Incomplete capture run: {run}')
        matches = [entry for entry in manifest['captures'] if (entry['language'], entry['id']) == (language, name)]
        if len(matches) != 1:
            raise ValueError('Capture must exist exactly once in its manifest')
        entry = matches[0]
        relative = f'{language}/{name}.png'
        if entry['file'] != relative:
            raise ValueError('Unexpected path in capture manifest')
        image = (folder / relative).resolve()
        if not image.is_relative_to(folder):
            raise ValueError('Image path escapes capture folder')
        digest = hashlib.sha256(image.read_bytes()).hexdigest()
        if digest != entry['sha256'] or digest != item['sha256']:
            raise ValueError(f'Reviewed image changed: {relative}')
        metadata = {key: entry[key] for key in ('id', 'language', 'article', 'screen_key', 'captured_at', 'width', 'height', 'sha256')}
        metadata.update({'file': relative, 'image': manifest['image'], 'skin': manifest['skin'], 'reviewed': True})
        pending.append((image, metadata))
    if {name for lang, name in ids if lang == 'de'} != {name for lang, name in ids if lang == 'en'}:
        raise ValueError('Reviewed images must have matching DE/EN counterparts')
    existing = ROOT / 'src/assets/captures'
    unexpected = {file.relative_to(existing).as_posix() for file in existing.rglob('*.png')} - {metadata['file'] for _, metadata in pending}
    if unexpected:
        raise ValueError('Remove previously published images missing from the new review explicitly: ' + ', '.join(sorted(unexpected)))
    # Validate every image before copying any of them.
    for image, metadata in pending:
        destination = ROOT / 'src/assets/captures' / metadata['file']
        destination.parent.mkdir(parents=True, exist_ok=True)
        shutil.copyfile(image, destination)
    output = {'schema': 1, 'capture_tool': 'https://github.com/openatv/enigma2-plugin-test', 'capture_tool_commit': tool_commit,
              'captures': [metadata for _, metadata in pending]}
    (ROOT / 'data').mkdir(exist_ok=True)
    (ROOT / 'data/captures.json').write_text(json.dumps(output, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
    print(f'Imported {len(pending)} reviewed screenshots in matching DE/EN pairs.')


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--source', type=Path, required=True)
    parser.add_argument('--review', type=Path, required=True)
    parser.add_argument('--tool-commit', required=True)
    args = parser.parse_args()
    if not re.fullmatch(r'[0-9a-f]{40}', args.tool_commit):
        parser.error('--tool-commit must be a full Git commit hash')
    import_review(args.source, args.review, args.tool_commit)
