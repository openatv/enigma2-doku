"""Index skin.py without importing Enigma2 or executing skin expressions.

Usage: python scripts/import-skin-api.py ../enigma2
The committed catalogue makes ordinary website builds independent of the checkout.
"""
import ast
import hashlib
import json
from pathlib import Path
import re
import subprocess
import sys

ROOT = Path(__file__).resolve().parents[1]
source = Path(sys.argv[1]).resolve()
path = source / 'lib/python/skin.py'
raw = path.read_bytes()
tree = ast.parse(raw.decode('utf-8'))
revision = subprocess.check_output(['git', '-C', str(source), 'rev-parse', 'HEAD'], text=True).strip()
if subprocess.check_output(['git', '-c', 'core.fsmonitor=false', '-C', str(source), 'status', '--porcelain', '--', 'lib/python/skin.py'], text=True).strip():
    raise SystemExit('skin.py must be clean before indexing a pinned source revision')
notes = json.loads((ROOT/'data/skin-api-notes.json').read_text(encoding='utf-8'))

def signature(node):
    return node.name + '(' + ast.unparse(node.args) + ')'

def summary(node):
    return ast.get_docstring(node) or ''

def entry(node, kind):
    return dict(name=node.name, kind=kind, signature=signature(node) if isinstance(node, (ast.FunctionDef,ast.AsyncFunctionDef)) else node.name,
                line=node.lineno, end_line=node.end_lineno, doc=summary(node))

functions = [entry(n, 'function') for n in tree.body if isinstance(n,ast.FunctionDef)]
classes = [dict(**entry(n, 'class'), methods=[entry(m,'method') for m in n.body if isinstance(m,ast.FunctionDef)]) for n in tree.body if isinstance(n,ast.ClassDef)]
parser = next(n for n in tree.body if isinstance(n,ast.ClassDef) and n.name=='AttributeParser')
helpers = {'__init__','applyAll','applyOne','applyHorizontalScale','applyVerticalScale'}
attributes=[]
for method in parser.body:
    if not isinstance(method,ast.FunctionDef) or method.name in helpers:
        continue
    item=entry(method,'attribute')
    item['calls']=sorted(set(ast.unparse(n.func) for n in ast.walk(method) if isinstance(n,ast.Call)))
    item['native_calls']=[call.removeprefix('self.guiObject.') for call in item['calls'] if call.startswith('self.guiObject.')]
    item['parsers']=[call for call in item['calls'] if call.startswith('parse')]
    item['alias']=next((n.func.attr for n in ast.walk(method) if isinstance(n,ast.Call) and isinstance(n.func,ast.Attribute) and isinstance(n.func.value,ast.Name) and n.func.value.id=='self' and n.func.attr not in helpers),None)
    item['no_op']=all(isinstance(n,ast.Pass) for n in method.body)
    item['deprecated']=any(isinstance(n,ast.Call) and isinstance(n.func,ast.Name) and n.func.id=='attribDeprecationWarning' for n in ast.walk(method))
    item.update(notes['attributes'].get(item['name'],{}))
    attributes.append(item)
missing=[item['name'] for item in attributes if not item.get('summary')]
if missing:
    raise SystemExit('Missing attribute explanations: '+', '.join(missing))
for item in functions:
    item.update(notes['functions'].get(item['name'],{}))
    node=next(n for n in tree.body if isinstance(n,ast.FunctionDef) and n.name==item['name'])
    options=[]
    if item['name'].startswith('parse'):
        for child in ast.walk(node):
            if isinstance(child,ast.Dict):
                options.extend(k.value for k in child.keys if isinstance(k,ast.Constant) and isinstance(k.value,str))
        for child in ast.walk(node):
            if isinstance(child,ast.MatchValue) and isinstance(child.value,ast.Constant) and isinstance(child.value.value,str):
                options.append(child.value.value)
    item['tokens']=list(dict.fromkeys(options))
missing=[item['name'] for item in functions if not item.get('summary')]
if missing:
    raise SystemExit('Missing function explanations: '+', '.join(missing))
for item in classes:
    item.update(notes['classes'].get(item['name'],{}))
    if not item.get('summary'):
        raise SystemExit('Missing class explanation: '+item['name'])
components=[]
for category in ('Sources','Converter','Renderer'):
    for file in sorted((source/'lib/python/Components'/category).glob('*.py')):
        if file.name=='__init__.py':
            continue
        component_tree=ast.parse(file.read_text(encoding='utf-8'))
        own_classes=[n for n in component_tree.body if isinstance(n,ast.ClassDef)]
        for cls in own_classes:
            if cls.name!=file.stem:
                continue
            properties=[]
            for node in cls.body:
                if isinstance(node,ast.Assign) and isinstance(node.value,ast.Call) and isinstance(node.value.func,ast.Name) and node.value.func.id=='property':
                    properties.extend(ast.unparse(t) for t in node.targets)
                if isinstance(node,ast.FunctionDef) and any(isinstance(d,ast.Name) and d.id=='property' for d in node.decorator_list):
                    properties.append(node.name)
            components.append(dict(name=cls.name,category=category,path=file.relative_to(source).as_posix(),line=cls.lineno,
                                   bases=[ast.unparse(b) for b in cls.bases],properties=properties,
                                   sha256=hashlib.sha256(file.read_bytes()).hexdigest()))
data=dict(schema=1, repository='https://github.com/openatv/enigma2',revision=revision,
          path='lib/python/skin.py',sha256=hashlib.sha256(raw).hexdigest(),
          attributes=attributes,functions=functions,classes=classes,components=components)
(ROOT/'data/skin-api.json').write_text(json.dumps(data,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
print(f'Indexed {len(attributes)} attributes, {len(functions)} functions, {len(classes)} classes and {len(components)} source/converter/renderer classes at {revision[:10]}.')
