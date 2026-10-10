"""Import an entire reviewed English Skin Lab run, binding PNGs to current XML.

Usage: python scripts/import-skin-lab-captures.py RUN_DIR --reviewed
RUN_DIR must contain the receiver manifest.json and every native scene PNG.
Use --reviewed only after visually checking each image and demonstrated effect.
"""
import argparse
import ast
import hashlib
import json
from pathlib import Path
from shutil import copyfile

root = Path(__file__).resolve().parents[1]
parser = argparse.ArgumentParser(description=__doc__)
parser.add_argument('run', type=Path)
parser.add_argument('--reviewed', action='store_true', required=True)
parser.add_argument('--image-version', required=True)
parser.add_argument('--image-build', required=True)
args = parser.parse_args()
lab = root/'examples/skinning/HandbookSkinLab'
module = ast.parse((lab/'plugin.py').read_text())
scenes = next(ast.literal_eval(n.value) for n in module.body if isinstance(n, ast.Assign) and any(isinstance(t,ast.Name) and t.id=='SCENES' for t in n.targets))
manifest = json.loads((args.run/'manifest.json').read_text())
if manifest['status'] != 'complete' or not manifest['locale'].startswith('en_'):
    raise SystemExit('Expected a complete capture with English receiver locale')
items = manifest['captures']
dependencies = manifest.get('dependencies', {})
expected_dependencies = {str(p.relative_to(lab)).replace('\\','/'):p for p in lab.rglob('*')
                         if p.is_file() and (p.suffix=='.py' or p.name=='panels.xml' or p.parent.name=='assets')}
if set(dependencies) != set(expected_dependencies):
    raise SystemExit('Missing or unexpected shared example dependencies')
for name, path in expected_dependencies.items():
    if path.suffix in ('.py', '.xml', '.json', '.md', '.svg') and b'\r\n' in path.read_bytes():
        raise SystemExit('Use canonical LF line endings before capture: '+name)
    if hashlib.sha256(path.read_bytes()).hexdigest() != dependencies[name]:
        raise SystemExit('Shared dependency changed; recapture: '+name)
if len(items) != len(scenes) or {i['id'] for i in items} != set(scenes):
    raise SystemExit('Missing, duplicated or unknown scenes')
for item in items:
    if item['file'] != item['id'] + '.png':
        raise SystemExit('Invalid image filename')
    png = (args.run/item['file']).read_bytes()
    xml = (lab/'screens'/(item['id']+'.xml')).read_bytes()
    if b'\r\n' in xml:
        raise SystemExit('Use canonical LF XML before capture: '+item['id'])
    if hashlib.sha256(png).hexdigest() != item['sha256'] or hashlib.sha256(xml).hexdigest() != item['xml_sha256']:
        raise SystemExit('Image/XML mismatch; recapture '+item['id'])
    if png[:8] != b'\x89PNG\r\n\x1a\n' or [int.from_bytes(png[16:20],'big'),int.from_bytes(png[20:24],'big')] != [item['width'],item['height']]:
        raise SystemExit('Invalid PNG dimensions')
# Validate the whole run before copying anything into the public inventory.
target = root/'src/assets/developers/skinning'
target.mkdir(parents=True,exist_ok=True)
for item in items:
    copyfile(args.run/item['file'],target/item['file'])
    item['review']='Native image visually reviewed: layout, demonstrated effect, English labels and no television video.'
    item['language']='en'
manifest.update(image=dict(version=args.image_version,build=args.image_build),backend='grab -o -d -p',reviewed=True,
                scope='Twelve foundation, nine advanced and six network skin examples with fixture data; API catalogue coverage does not imply all attributes were visually tested.')
(root/'data/skin-lab-captures.json').write_text(json.dumps(manifest,indent=2)+'\n',encoding='utf-8')
print(f'Imported {len(items)} reviewed English examples for both handbook routes.')
