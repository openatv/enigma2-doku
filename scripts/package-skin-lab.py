"""Build a deterministic download ZIP from the reviewed Skin Lab source.

Run node scripts/sync-developers.mjs as well when changing standalone downloads.
"""
from pathlib import Path
from shutil import copyfile
from zipfile import ZipFile, ZipInfo, ZIP_DEFLATED

root = Path(__file__).resolve().parents[1]
source = root / 'examples/skinning/HandbookSkinLab'
output = root / 'public/downloads/skinning'
output.mkdir(parents=True, exist_ok=True)
with ZipFile(output/'HandbookSkinLab.zip', 'w', ZIP_DEFLATED) as archive:
    for file in sorted(source.rglob('*')):
        if not file.is_file() or '__pycache__' in file.parts:
            continue
        info = ZipInfo('HandbookSkinLab/' + file.relative_to(source).as_posix(), (2026, 10, 10, 0, 0, 0))
        info.compress_type = ZIP_DEFLATED
        archive.writestr(info, file.read_bytes())
copyfile(root/'data/skin-lab-captures.json', output/'capture-manifest.json')
print('Packaged Skin Lab sources and capture provenance.')
