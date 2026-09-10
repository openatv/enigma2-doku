"""Import public menu/help metadata without importing or executing Enigma2 code.

Usage: python scripts/import-settings.py ../enigma2
Only generated files below einstellungen/referenz/ and data/catalog.json are owned
by this importer. Editorial guides are deliberately kept separate.
"""
import ast
import hashlib
import html
import json
import re
import subprocess
import sys
import xml.etree.ElementTree as ET
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def read_po(path):
    messages, entry, field = {}, {}, None
    fuzzy = False

    def flush():
        if entry.get('msgid') and entry.get('msgstr') and not fuzzy and 'msgctxt' not in entry:
            messages[entry['msgid']] = entry['msgstr']

    for line in path.read_text(encoding='utf-8-sig').splitlines() + ['']:
        if not line.strip():
            flush()
            entry, field, fuzzy = {}, None, False
        elif line.startswith('#,') and 'fuzzy' in line:
            fuzzy = True
        elif line.startswith('#'):
            continue
        elif line.startswith(('msgid ', 'msgstr ', 'msgctxt ')):
            field, value = line.split(' ', 1)
            entry[field] = ast.literal_eval(value)
        elif line.startswith('"') and field:
            entry[field] += ast.literal_eval(line)
        else:
            field = None
    return messages


def slug(value):
    return re.sub(r'[^a-z0-9]+', '-', value.lower()).strip('-')


def quote(text):
    return json.dumps(text, ensure_ascii=False)


def md(text):
    # Escape markup in source help strings; preserve intentional line breaks.
    text = text.replace('\\n', '\n').replace('%s %s', 'OpenATV')
    return re.sub(r'([\\`*_{}\[\]<>#|])', r'\\\1', text).replace('\n', '  \n')


def collect(source):
    setup_file = source / 'data/setup.xml'
    tree = ET.parse(setup_file).getroot()
    menus = ET.parse(source / 'data/menu.xml').getroot()
    translations = read_po(source / 'po/de.po')
    routes = {}

    def walk_menu(node, parents):
        parents = parents + ([node.get('text')] if node.tag in ('menu', 'item') and node.get('text') else [])
        for child in node:
            if child.tag == 'setup' and child.get('setupKey'):
                routes.setdefault(child.get('setupKey'), []).append(parents)
            elif child.tag == 'screen' and child.get('module'):
                screen_file = source / 'lib/python/Screens' / (child.get('module') + '.py')
                if screen_file.exists():
                    code = screen_file.read_text(encoding='utf-8')
                    name = child.get('screen') or child.get('module')
                    match = re.search(r'^class ' + re.escape(name) + r'\b.*?(?=^class |\Z)', code, re.M | re.S)
                    if match:
                        for key in re.findall(r'Setup\.__init__\([^\n]*?setup\s*=\s*[\'"]([^\'"]+)', match.group()):
                            routes.setdefault(key, []).append(parents)
            elif child.tag in ('menu', 'item'):
                walk_menu(child, parents)
    walk_menu(menus, [])

    # These screens are opened through an intermediate list, verified in source.
    nested_routes = {
        'NetworkAdapter': ['Main Menu', 'Setup', 'Network', 'Network Overview', 'Network Adapter Settings'],
        'NetworkWiFi': ['Main Menu', 'Setup', 'Network', 'Network Overview', 'Network Wi-Fi Settings'],
        'NetworkMounts': ['Main Menu', 'Setup', 'Network', 'Network Mounts Overview', 'Network Mount Settings'],
        'PluginBrowser': ['Main Menu', 'Plugin Browser'],
    }
    routes.update({key: [path] for key, path in nested_routes.items() if key not in routes})
    setups = []
    for section in tree.findall('setup'):
        items = []
        heading = ''

        def walk(parent, inherited):
            nonlocal heading
            branch_conditions = list(inherited)
            for node in parent:
                # Include every branch in the inventory, never evaluate conditions.
                conditions = list(branch_conditions)
                for attr in ('requires', 'conditional'):
                    if node.get(attr):
                        conditions.append(f'{attr}: {node.get(attr)}')
                if node.tag == 'if':
                    walk(node, conditions)
                elif node.tag in ('else', 'elif'):
                    branch_conditions = inherited + [f'alternative branch: {node.get("conditional", "else")}']
                elif node.tag == 'item':
                    expression = (node.text or '').strip()
                    if not expression:
                        heading = node.get('text', '')
                        continue
                    if not re.match(r'^(config\.|self\.)', expression):
                        continue
                    identifier = hashlib.sha1((section.get('key') + ':' + expression).encode()).hexdigest()[:12]
                    items.append({
                        'id': 'option-' + identifier,
                        'expression': expression,
                        'label': node.get('text', ''),
                        'help': node.get('description', ''),
                        'group': heading,
                        'level': int(node.get('level', '0')),
                        'restart': node.get('restart', ''),
                        'conditions': conditions,
                    })
        walk(section, [])
        if not items:
            continue
        # Duplicate references in a section retain the same address and list all conditions.
        unique = {}
        for item in items:
            if item['id'] in unique:
                existing = unique[item['id']]
                existing['conditions'] = list(dict.fromkeys(existing['conditions'] + item['conditions']))
            else:
                unique[item['id']] = item
        setups.append({'key': section.get('key'), 'slug': slug(section.get('key')), 'title': section.get('title', section.get('key')),
                       'routes': routes.get(section.get('key'), []), 'items': list(unique.values())})
    commit = subprocess.check_output(['git', '-C', str(source), 'rev-parse', 'HEAD'], text=True).strip()
    return {'source': 'https://github.com/openatv/enigma2', 'commit': commit, 'image': 'OpenATV 8.0',
            'setups': setups, 'translations': translations}


def render(catalog, language):
    tr = (lambda value: catalog['translations'].get(value, value)) if language == 'de' else (lambda value: value)
    directory = ROOT / 'src/content/docs' / language / 'einstellungen/referenz'
    directory.mkdir(parents=True, exist_ok=True)
    expected = set()
    for section in catalog['setups']:
        target = directory / (section['slug'] + '.md')
        expected.add(target)
        title = tr(section['title'])
        description = (f'{title}: Optionen, Originalhilfe und Menüweg in OpenATV.' if language == 'de' else f'{title}: options, built-in help and menu location in OpenATV.')
        lines = ['---', f'title: {quote(title)}', f'description: {quote(description)}', 'editUrl: false', 'pagefind: true', '---', '',
                 ('Diese Referenz enthält die vorhandenen Hilfetexte aus OpenATV. Je nach geöffnetem Dialog und gewählten Optionen ist nur ein Teil der Einträge sichtbar.' if language == 'de' else 'This reference contains the help text provided by OpenATV. The open dialog and selected options determine which entries are visible.'), '',
                 ('## Wo finde ich das?' if language == 'de' else '## Where do I find it?'), '']
        if section['routes']:
            lines += ['**' + ' → '.join(md(tr(part)) for part in path) + '**' for path in section['routes']]
        else:
            lines += [('Der direkte Menüweg ist in dieser Grundfassung noch nicht zugeordnet. Suche im jeweiligen Funktionsdialog nach **' if language == 'de' else 'The direct menu location has not yet been mapped in this first edition. Look for **') + md(title) + '**.']
        lines += ['', ('Die Suche findet auch die englischen Bezeichnungen und technischen Schlüssel. [Zur Übersicht](../../)' if language == 'de' else 'Search also matches technical keys. [Back to the directory](../../)'), '']
        for item in section['items']:
            lines += [f'<h2 id="{item["id"]}">{html.escape(tr(item["label"]))}</h2>', '']
            if language == 'de' and tr(item['label']) != item['label']:
                lines += ['**English:** ' + md(item['label']), '']
            if item['help']:
                help_text = tr(item['help']).replace('\\n', '\n').replace('%s %s', 'OpenATV')
                lines += ['<p>' + html.escape(help_text).replace('\n', '<br />') + '</p>', '']
            else:
                lines += [('Zu dieser Option enthält die Quelle noch keinen Hilfetext.' if language == 'de' else 'The source does not yet provide help text for this option.'), '']
            if item['restart'] in ('gui', 'system'):
                lines += [('**Nach Änderung:** ' if language == 'de' else '**After changing:** ') + ({'gui': 'GUI-Neustart erforderlich.', 'system': 'Neustart erforderlich.'}[item['restart']] if language == 'de' else {'gui': 'GUI restart required.', 'system': 'Restart required.'}[item['restart']]), '']
            lines += ['<details>', '<summary>' + ('Zuordnung & Hinweise' if language == 'de' else 'Reference & notes') + '</summary>', '',
                      f'`{item["expression"]}`', '',
                      ('Bedienebene: ' if language == 'de' else 'Setup level: ') + ({0:'Einfach',1:'Fortgeschritten',2:'Experte'}.get(item['level'], str(item['level'])) if language == 'de' else {0:'Simple',1:'Intermediate',2:'Expert'}.get(item['level'], str(item['level']))) + '.', '']
            if item['conditions']:
                lines += [('Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.' if language == 'de' else 'Visibility depends on other options or the dialog.'), '']
            lines += ['</details>', '']
        url = f'{catalog["source"]}/blob/{catalog["commit"]}/data/setup.xml'
        lines += ['---', '', ('Quelle: ' if language == 'de' else 'Source: ') + f'[OpenATV setup.xml]({url}) · `{catalog["commit"][:10]}`.']
        target.write_text(('\n'.join(lines) + '\n').replace('openATV', 'OpenATV'), encoding='utf-8')
    for stale in directory.glob('*.md'):
        if stale not in expected:
            stale.unlink()  # Only importer-owned generated files, inside the validated directory.


def main():
    source = Path(sys.argv[1] if len(sys.argv) > 1 else '../enigma2').resolve()
    if not (source / 'data/setup.xml').is_file():
        raise SystemExit('Expected an Enigma2 checkout with data/setup.xml')
    catalog = collect(source)
    # Persist only translations actually used by the catalog, not the entire PO.
    strings = set()
    for section in catalog['setups']:
        strings.add(section['title'])
        for path in section['routes']:
            strings.update(path)
        for item in section['items']:
            strings.update([item['label'], item['help'], item['group']])
    catalog['translations'] = {key: value for key, value in catalog['translations'].items() if key in strings}
    (ROOT / 'data').mkdir(exist_ok=True)
    (ROOT / 'data/catalog.json').write_text(json.dumps(catalog, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
    for language in ('de', 'en'):
        render(catalog, language)
    print(json.dumps({'sections': len(catalog['setups']), 'entries': sum(len(x['items']) for x in catalog['setups']),
                      'mapped_sections': sum(bool(x['routes']) for x in catalog['setups']), 'commit': catalog['commit']}))


if __name__ == '__main__':
    main()
