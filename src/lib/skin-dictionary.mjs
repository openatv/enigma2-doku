// Build the index from the same inventories used by the reference pages.
export function buildSkinDictionary(skin, widgets, help, xml) {
  const entries = [];
  for (const item of skin.attributes) {
    const migration = help.migrations[item.name];
    const detail = help.attributes[migration?.replacement || item.name];
    entries.push({ name: item.name, context: 'Central widget / structural handler', category: 'attributes', legacy: Boolean(migration),
      summary: migration ? `Use ${migration.replacement}. ${migration.note}` : item.summary,
      search: `${detail?.values || ''} ${detail?.notes.join(' ') || ''} ${detail?.widgets.join(' ') || ''}`,
      href: `../${migration ? 'deprecated' : 'attributes'}/#attributes-${item.name}` });
  }
  for (const item of xml.entries) {
    const href = `../xml/#xml-${item.id}`;
    entries.push({ name: item.name, context: item.context, category: 'xml', summary: item.summary, href });
    for (const [name, summary] of Object.entries(item.attributes)) entries.push({ name, context: `${item.name} — ${item.context}`, category: 'xml', summary, href });
  }
  for (const item of widgets.native) entries.push({ name: item.name, context: 'Native widget class', category: 'widgets', summary: item.summary, href: `../widgets/#${item.name}` });
  const routes = { renderers: 'renderers', converters: 'converters', components: 'gui-components' };
  for (const [kind, route] of Object.entries(routes)) {
    for (const item of widgets[kind]) {
      const href = `../${route}/#${item.id.replaceAll('.', '-')}`;
      entries.push({ name: item.name, context: item.id, category: kind, summary: item.summary || item.doc || `Class contract for ${item.name}.`, href });
      const handlers = [{ owner: item.id, names: item.custom_attributes }, ...item.inherited_attribute_handlers];
      const seen = new Set();
      for (const handler of handlers) for (const name of handler.names) {
        if (seen.has(name)) continue;
        seen.add(name);
        entries.push({ name, context: item.id, category: 'component-attributes',
          summary: `Handled by ${handler.owner}. Use this class's syntax and defaults; it can override the central meaning.`, href });
      }
    }
  }
  for (const item of skin.components.filter(item => item.category === 'Sources')) entries.push({ name: item.name, context: 'Source class', category: 'sources', summary: 'Supplies data created by the screen; declaring a source name in XML does not construct it.', href: `../components/#components-Sources-${item.name}` });
  return entries.sort((a, b) => a.name.localeCompare(b.name, 'en') || a.context.localeCompare(b.context, 'en'));
}

export function matchesSkinEntry(entry, query, category = '', includeLegacy = false) {
  if (entry.legacy && !includeLegacy || category && entry.category !== category) return false;
  const haystack = `${entry.name} ${entry.context} ${entry.summary} ${entry.search || ''}`.toLocaleLowerCase();
  return query.trim().toLocaleLowerCase().split(/\s+/).filter(Boolean).every(word => haystack.includes(word));
}
