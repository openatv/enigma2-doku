"""Build the widget/renderer/converter API from a clean Enigma2 checkout.

Usage: python scripts/import-widget-api.py ../enigma2
No receiver code, converter expressions or C++ code is executed.
"""
import ast
from copy import deepcopy
import hashlib
import json
from pathlib import Path
import re
import subprocess
import sys
import textwrap

ROOT = Path(__file__).resolve().parents[1]
SOURCE = Path(sys.argv[1]).resolve()
skin = json.loads((ROOT / 'data/skin-api.json').read_text(encoding='utf-8'))
notes = json.loads((ROOT / 'data/widget-api-notes.json').read_text(encoding='utf-8'))
revision = subprocess.check_output(['git', '-C', str(SOURCE), 'rev-parse', 'HEAD'], text=True).strip()
assert revision == skin['revision'], 'Regenerate the skin.py reference before changing source revisions'
dirty = subprocess.check_output(['git', '-c', 'core.fsmonitor=false', '-C', str(SOURCE), 'status', '--porcelain', '--', 'lib/gui', 'lib/python/Components', 'lib/python/skin.py'], text=True)
assert not dirty.strip(), 'The indexed source must be clean'
files = {}


def read(path):
    raw = path.read_bytes()
    relative = path.relative_to(SOURCE).as_posix()
    files[relative] = hashlib.sha256(raw).hexdigest()
    return raw.decode('utf-8-sig')


def mask_cpp(text):
    # Keep offsets and newlines, but hide comments and string/character literals.
    return re.sub(r'//[^\n]*|/\*[\s\S]*?\*/|"(?:\\.|[^"\\])*"|\'(?:\\.|[^\'\\])*\'',
                  lambda m: re.sub(r'[^\n]', ' ', m[0]), text)


read(SOURCE / 'lib/python/skin.py')
assert files['lib/python/skin.py'] == skin['sha256'], 'skin.py hash differs from the attribute catalogue'
# The slider's compatibility colour setter has a stale header comment; the body
# is the evidence for the explanatory exception in widget-api-notes.json.
read(SOURCE / 'lib/gui/eslider.cpp')
read(SOURCE / 'lib/gui/elabel.cpp')
native = {}
for path in sorted((SOURCE / 'lib/gui').glob('*.h')):
    original = path.read_text(encoding='utf-8')
    masked = mask_cpp(original)
    for match in re.finditer(r'\bclass\s+(e\w+)\s*(?::\s*([^;{]+))?\s*\{', masked):
        name = match[1]
        bases = re.findall(r'\b(e\w+)\b', match[2] or '')
        if name != 'eWidget' and not bases:
            continue
        depth, pos, start, access = 1, match.end(), match.end(), 'private'
        methods = {}
        while depth:
            char = masked[pos]
            if depth == 1:
                prefix = masked[start:pos].strip()
                if char == ':' and prefix in ('public', 'protected', 'private'):
                    access, start = prefix, pos + 1
                elif char in ';{':
                    function = re.search(r'\b(\w+)\s*\([^;{}]*\)\s*(?:const\s*)?(?:override\s*)?(?:=\s*0\s*)?$', prefix)
                    if function and access == 'public' and function[1] != name:
                        line_start = start + len(masked[start:pos]) - len(masked[start:pos].lstrip())
                        methods.setdefault(function[1], dict(line=original.count('\n', 0, line_start) + 1,
                                                            signature=re.sub(r'\s+', ' ', original[line_start:pos]).strip()))
                    start = pos + 1
            if char == '{':
                depth += 1
            elif char == '}':
                depth -= 1
                if depth == 1:
                    start = pos + 1
            pos += 1
        native[name] = dict(name=name, bases=bases, path=path.relative_to(SOURCE).as_posix(),
                            line=original.count('\n', 0, match.start()) + 1, methods=methods)


def is_widget(name):
    return name == 'eWidget' or any(is_widget(base) for base in native.get(name, {}).get('bases', []))


native = {name: record for name, record in native.items() if is_widget(name)}
native_declared = {name: deepcopy(record['methods']) for name, record in native.items()}


def native_methods(name):
    result = {}
    for base in native[name]['bases']:
        if base in native:
            result.update(native_methods(base))
    result.update({method: dict(**record, owner=name, path=native[name]['path']) for method, record in native_declared[name].items()})
    return result


attributes = {item['name']: item for item in skin['attributes']}


def handler(name):
    item = attributes[name]
    return handler(item['alias']) if item['alias'] and not item['native_calls'] else item


for name, record in native.items():
    read(SOURCE / record['path'])
    methods = native_methods(name)
    supported = []
    for attribute in skin['attributes']:
        resolved = handler(attribute['name'])
        calls = resolved['native_calls']
        variants = []
        if not calls:
            continue
        # These attributes dispatch to alternative setters depending on the value.
        if resolved['name'] in ('backgroundColor', 'backgroundColorSelected', 'foregroundColor'):
            for call in calls:
                if call in methods:
                    variants.append(dict(value='gradient' if 'Gradient' in call else 'solid colour', calls=[call]))
        elif all(call in methods for call in calls):
            # eListbox and eSlider use different enums AND argument counts.
            if resolved['name'] == 'orientation' and name != 'eSlider':
                continue
            if resolved['name'] == 'listOrientation' and name != 'eListbox':
                continue
            variants.append(dict(value='standard syntax', calls=calls))
        if variants:
            exceptions = notes.get('attribute_exceptions', {})
            setter_owner = methods[variants[0]['calls'][0]]['owner']
            supported.append(dict(name=attribute['name'], variants=variants,
                                  note=exceptions.get(name + '.' + attribute['name'],
                                       exceptions.get(name + '.' + resolved['name'],
                                       exceptions.get(setter_owner + '.' + resolved['name'], '')))))
    record['attributes'] = supported
    record['methods'] = methods
    record['summary'] = notes['native'][name]


registry = {}
for path in sorted((SOURCE / 'lib/python/Components').rglob('*.py')):
    text = path.read_text(encoding='utf-8-sig')
    tree = ast.parse(text)
    module = path.relative_to(SOURCE / 'lib/python').with_suffix('').as_posix().replace('/', '.')
    imports = {}
    for node in tree.body:
        if isinstance(node, ast.ImportFrom) and node.module:
            for alias in node.names:
                imports[alias.asname or alias.name] = node.module + '.' + alias.name
    for cls in tree.body:
        if not isinstance(cls, ast.ClassDef):
            continue
        ident = module + '.' + cls.name
        methods = {}
        properties = {}
        values = {}
        widget = None
        for node in cls.body:
            if isinstance(node, (ast.FunctionDef, ast.AsyncFunctionDef)):
                methods[node.name] = dict(name=node.name, signature=node.name + '(' + ast.unparse(node.args) + ')',
                                          line=node.lineno, doc=ast.get_docstring(node) or '',
                                          code=textwrap.dedent(''.join(text.splitlines(keepends=True)[node.lineno - 1:node.end_lineno])))
                if any(isinstance(d, ast.Name) and d.id == 'property' for d in node.decorator_list):
                    properties[node.name] = ast.unparse(node)
            if isinstance(node, ast.Assign):
                for target in node.targets:
                    if not isinstance(target, ast.Name):
                        continue
                    if target.id == 'GUI_WIDGET':
                        widget = ast.unparse(node.value)
                    if isinstance(node.value, ast.Call) and ast.unparse(node.value.func) == 'property':
                        properties[target.id] = ast.unparse(node.value)
                    else:
                        values[target.id] = ast.unparse(node.value)
        inputs = set()
        optional_inputs = set()
        for node in ast.walk(cls):
            if isinstance(node, ast.Attribute) and ast.unparse(node.value) == 'self.source':
                inputs.add(node.attr)
            if isinstance(node, ast.Call) and isinstance(node.func, ast.Name) and node.func.id in ('getattr', 'hasattr') and len(node.args) >= 2 and ast.unparse(node.args[0]) == 'self.source' and isinstance(node.args[1], ast.Constant) and isinstance(node.args[1].value, str):
                optional_inputs.add(node.args[1].value)
        custom = set()
        apply = next((n for n in cls.body if isinstance(n, ast.FunctionDef) and n.name == 'applySkin'), None)
        if apply:
            for node in ast.walk(apply):
                if isinstance(node, ast.Compare) and isinstance(node.left, ast.Name) and node.left.id in ('attr', 'attrib', 'attribute'):
                    for comparator in node.comparators:
                        custom.update(n.value for n in ast.walk(comparator) if isinstance(n, ast.Constant) and isinstance(n.value, str))
                if isinstance(node, ast.Match) and isinstance(node.subject, ast.Name) and node.subject.id in ('attr', 'attrib', 'attribute'):
                    for case in node.cases:
                        custom.update(n.value.value for n in ast.walk(case.pattern) if isinstance(n, ast.MatchValue) and isinstance(n.value, ast.Constant) and isinstance(n.value.value, str))
            # Legacy applySkin implementations dispatch XML names to local functions.
            if 'locals()' in ast.unparse(apply):
                custom.update(n.name for n in apply.body if isinstance(n, ast.FunctionDef))
        create = next((n for n in cls.body if isinstance(n, ast.FunctionDef) and n.name == 'createWidget'), None)
        created_widgets = sorted({n.func.id for n in ast.walk(create) if isinstance(n, ast.Call) and isinstance(n.func, ast.Name) and n.func.id in native}) if create else []
        registry[ident] = dict(name=cls.name, id=ident, module=module, path=path.relative_to(SOURCE).as_posix(),
                              line=cls.lineno, bases=[imports.get(ast.unparse(b), module + '.' + ast.unparse(b)) for b in cls.bases],
                              base_names=[ast.unparse(b) for b in cls.bases], widget=widget, methods=methods,
                              properties=properties, values=values, source_reads=sorted(inputs), source_probes=sorted(optional_inputs),
                              custom_attributes=sorted(custom), created_widgets=created_widgets, doc=ast.get_docstring(cls) or '')


def lineage(ident):
    """C3 order, treating non-Components bases as opaque leaves."""
    bases = registry.get(ident, {}).get('bases', [])
    seqs = [lineage(base)[:] for base in bases] + [bases[:]]
    result = [ident]
    while any(seqs):
        seqs = [s for s in seqs if s]
        candidate = next((s[0] for s in seqs if not any(s[0] in other[1:] for other in seqs)), None)
        if candidate is None:
            raise ValueError('Cannot resolve class hierarchy: ' + ident)
        result.append(candidate)
        for seq in seqs:
            if seq[0] == candidate:
                seq.pop(0)
    return result


groups = dict(renderers=[], converters=[], components=[])
for ident, item in registry.items():
    mro = lineage(ident)
    category = None
    if item['module'].startswith('Components.Renderer.') and item['name'] == item['module'].split('.')[-1]:
        category = 'renderers'
    elif item['module'].startswith('Components.Converter.') and item['name'] == item['module'].split('.')[-1]:
        category = 'converters'
    elif 'Components.GUIComponent.GUIComponent' in mro and not item['module'].startswith('Components.Renderer.'):
        category = 'components'
    if not category:
        continue
    item = deepcopy(item)
    inherited_methods, inherited_properties, inherited_values = {}, {}, {}
    for ancestor in reversed(mro):
        if ancestor not in registry:
            continue
        parent = registry[ancestor]
        read(SOURCE / parent['path'])
        for field, dest in [('methods', inherited_methods), ('properties', inherited_properties), ('values', inherited_values)]:
            for key, value in parent[field].items():
                dest[key] = dict(value=value, owner=ancestor, path=parent['path'], line=parent['line'])
    item['lineage'] = mro
    item['widget'] = next((registry[a]['widget'] for a in mro if a in registry and registry[a]['widget']), None)
    item['created_widgets'] = next((registry[a]['created_widgets'] for a in mro if a in registry and registry[a]['created_widgets']), [])
    item['inherited_attribute_handlers'] = [dict(owner=a, names=registry[a]['custom_attributes']) for a in mro[1:] if a in registry and registry[a]['custom_attributes']]
    item['inherited_source_reads'] = [dict(owner=a, reads=registry[a]['source_reads'], probes=registry[a]['source_probes']) for a in mro[1:] if a in registry and (registry[a]['source_reads'] or registry[a]['source_probes'])]
    item['effective_properties'] = inherited_properties
    item['effective_values'] = {k: v for k, v in inherited_values.items() if k in ('range', 'GUI_WIDGET')}
    item['inherited_methods'] = [dict(name=k, signature=v['value']['signature'], path=v['path'], line=v['value']['line'], owner=v['owner'])
                                 for k, v in inherited_methods.items() if v['owner'] != ident and not k.startswith('_')]
    item['contracts'] = []
    # Follow delegation through base constructors/applySkin, not just a one-line subclass.
    for method in ('__init__', 'applySkin', 'createWidget', 'GUIcreate'):
        for ancestor in mro:
            parent = registry.get(ancestor, {})
            if method in parent.get('methods', {}):
                item['contracts'].append(dict(**parent['methods'][method], owner=ancestor, path=parent['path']))
    item['is_base'] = item['name'] in ('Renderer', 'Converter', 'Poll', 'GUIComponent')
    item['is_converter'] = 'Components.Converter.Converter.Converter' in mro
    item['is_renderer'] = 'Components.Renderer.Renderer.Renderer' in mro
    item['summary'] = notes.get(category, {}).get(item['name'], '')
    # Method bodies are available via pinned source links; only configuration contracts are embedded.
    item['methods'] = [{k: v for k, v in method.items() if k != 'code'} for method in item['methods'].values()]
    item['values'] = {k: v for k, v in item['values'].items() if not k.startswith('_') and k != 'GUI_WIDGET'}
    groups[category].append(item)

data = dict(schema=1, repository=skin['repository'], revision=revision,
            derivation='Native public method declarations plus inheritance, skin.py dispatch and reviewed overload exceptions; Python AST with C3 inheritance. No-op skin handlers are excluded.',
            native=sorted(native.values(), key=lambda x: x['name']), **groups,
            files=[dict(path=k, sha256=v) for k, v in sorted(files.items())])
(ROOT / 'data/widget-api.json').write_text(json.dumps(data, ensure_ascii=False, indent=2) + '\n', encoding='utf-8', newline='\n')
print('Indexed', ', '.join(f'{len(data[k])} {k}' for k in ('native', *groups)), 'from', len(files), 'files at', revision[:10])
