"""Extract network skin contracts as data, without importing receiver code."""
import ast
import hashlib
import json
from pathlib import Path
import subprocess
import sys
from xml.etree.ElementTree import fromstring

root = Path(__file__).resolve().parents[1]
source = Path(sys.argv[1]).resolve()
def git(*args):
    return subprocess.check_output(['git', '-c', 'core.fsmonitor=false', '-C', str(source), *args], text=True).strip()
revision = git('rev-parse', 'HEAD')
if git('status', '--porcelain') or revision != json.loads((root/'data/skin-api.json').read_text())['revision']:
    raise SystemExit('Use the clean source revision pinned by skin-api.json')
paths = ['lib/python/Screens/' + name + '.py' for name in (
    'NetworkSetup', 'NetworkMounts', 'NetworkServices', 'RestartNetwork', 'Setup', 'Information')]
paths += ['lib/python/' + name for name in ('skin.py', 'Components/Sources/List.py',
    'Components/Converter/XmlMultiContent.py', 'Components/Renderer/Listbox.py',
    'Components/NetworkManager.py', 'Components/ConfigList.py')]
paths += ['lib/gui/elistboxcontent.cpp', 'lib/gui/elistbox.cpp', 'data/setup.xml']
paths += ['lib/python/Screens/Processing.py']
screens = []
for path in paths[:4]:
    text = (source/path).read_text(encoding='utf-8')
    module = ast.parse(text)
    for cls in (n for n in module.body if isinstance(n, ast.ClassDef)):
        if not any(isinstance(base, ast.Name) and base.id in ('Screen', 'Setup', 'ScreenSummary', 'InformationNetwork') for base in cls.bases):
            continue
        constants = {}
        for n in cls.body:
            if isinstance(n, ast.Assign) and isinstance(n.targets[0], ast.Name):
                try:
                    constants[n.targets[0].id] = ast.literal_eval(n.value)
                except (ValueError, TypeError):
                    pass
        components, lists = {}, {}
        setup = None
        init = next((n for n in cls.body if isinstance(n, ast.FunctionDef) and n.name == '__init__'), None)
        mapping = {}
        if init:
            for n in ast.walk(init):
                if isinstance(n, ast.Assign):
                    for target in n.targets:
                        if isinstance(target, ast.Name) and target.id == 'indexNames' and isinstance(n.value, ast.Dict):
                            mapping = {ast.literal_eval(k): (constants[v.attr] if isinstance(v, ast.Attribute) else ast.literal_eval(v)) for k,v in zip(n.value.keys,n.value.values)}
                        if isinstance(target, ast.Subscript) and isinstance(target.value, ast.Name) and target.value.id == 'self' and isinstance(target.slice, ast.Constant):
                            name = target.slice.value
                            if isinstance(n.value, ast.Call):
                                kind = ast.unparse(n.value.func)
                            else:
                                kind = ast.unparse(n.value)
                            components[name] = kind
                            if kind == 'List':
                                lists[name] = dict(mapping)
                if isinstance(n, ast.Call) and ast.unparse(n.func) == 'Setup.__init__':
                    value = next((k.value for k in n.keywords if k.arg=='setup'), None)
                    if value is None and len(n.args) > 2:
                        value = n.args[2]
                    if isinstance(value, ast.Constant):
                        setup = value.value
        xml = constants.get('skin')
        if xml:
            fromstring(xml.strip())
        screens.append(dict(name=cls.name, path=path, line=cls.lineno,
            bases=[ast.unparse(b) for b in cls.bases], setup=setup,
            components=components, lists=lists, xml=xml.strip() if xml else None))
result = dict(revision=revision, files=[dict(path=p, sha256=hashlib.sha256((source/p).read_bytes()).hexdigest()) for p in paths], screens=screens)
(root/'data/network-skin.json').write_text(json.dumps(result, indent=2, ensure_ascii=False)+'\n', encoding='utf-8')
print(f'Pinned {len(screens)} network screen contracts and {len(paths)} source files.')
