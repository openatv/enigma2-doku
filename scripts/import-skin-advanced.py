"""Pin sources and specialised channel-list contracts for advanced skinning.

Usage: python scripts/import-skin-advanced.py ../enigma2
Only parses files; never imports Enigma2 modules.
"""
import ast
import hashlib
import json
from pathlib import Path
import subprocess
import sys

root = Path(__file__).resolve().parents[1]
source = Path(sys.argv[1]).resolve()
def git(*args):
    return subprocess.check_output(['git','-c','core.fsmonitor=false','-C',str(source),*args],text=True).strip()
revision = git('rev-parse','HEAD')
if git('status','--porcelain'):
    raise SystemExit('Use a clean Enigma2 source checkout')
if revision != json.loads((root/'data/skin-api.json').read_text())['revision']:
    raise SystemExit('Update the foundational skin API snapshot first')
paths = [
    'lib/python/skin.py', 'lib/python/Screens/SessionGlobals.py',
    'lib/python/Screens/InfoBar.py', 'lib/python/Screens/InfoBarGenerics.py',
    'lib/python/Screens/ChannelSelection.py', 'lib/python/Screens/Screen.py',
    'lib/python/Components/UsageConfig.py', 'lib/python/Components/ServiceList.py',
    'lib/python/Components/Pixmap.py', 'lib/python/Components/Element.py',
    'lib/python/Components/Sources/FrontendStatus.py', 'lib/python/Components/Sources/FrontendInfo.py',
    'lib/python/Components/Sources/CurrentService.py', 'lib/python/Components/Sources/EventInfo.py',
    'lib/python/Components/Sources/RecordState.py',
    'lib/python/Components/Converter/EventInfo.py', 'lib/python/Components/Converter/ServiceInfo.py',
    'lib/python/Components/Converter/ServiceName.py', 'lib/python/Components/Converter/FrontendInfo.py',
    'lib/python/Components/Converter/ClockToText.py', 'lib/python/Components/Converter/ConditionalShowHide.py',
    'lib/python/Components/Renderer/Label.py', 'lib/python/Components/Renderer/FixedLabel.py',
    'lib/python/Components/Renderer/Progress.py', 'lib/python/Components/Renderer/Picon.py',
    'data/fonts/enigma2icons.ttf',
]
module = ast.parse((source/'lib/python/Components/ServiceList.py').read_text())
parser = next(n for n in module.body if isinstance(n,ast.ClassDef) and n.name=='ServiceListTemplateParser')
reader = next(n for n in parser.body if isinstance(n,ast.FunctionDef) and n.name=='readTemplate')
maps = {n.targets[0].id:ast.literal_eval(n.value) for n in reader.body if isinstance(n,ast.Assign) and isinstance(n.targets[0],ast.Name) and n.targets[0].id in ('indexMapping','eventIndexMapping')}
legacy = next(n for n in module.body if isinstance(n,ast.ClassDef) and n.name=='ServiceListLegacy')
apply = next(n for n in legacy.body if isinstance(n,ast.FunctionDef) and n.name=='applySkin')
result = dict(revision=revision, files=[dict(path=p,sha256=hashlib.sha256((source/p).read_bytes()).hexdigest()) for p in paths],
              service_indexes=maps['indexMapping'],event_indexes=maps['eventIndexMapping'],
              legacy_attributes=[n.name for n in apply.body if isinstance(n,ast.FunctionDef)],
              icon_font=dict(alias='enigma2icons',glyphs={
                  'E914':'check_circle','E918':'cancel','E9FE':'wifi_device','EA5A':'lan',
                  'EA68':'cloud','EA77':'signal_wifi_4_bar','EA78':'signal_wifi_bad','EA79':'signal_wifi_off'}))
(root/'data/skin-advanced-source.json').write_text(json.dumps(result,indent=2)+'\n',encoding='utf-8')
print(f'Pinned {len(paths)} source files and channel-list contracts at {revision[:10]}.')
