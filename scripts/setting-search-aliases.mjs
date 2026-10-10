// A displayed config.plugins.umbra.color_recording should also be found by
// color_recording. Keep that alias indexed without changing the visible code.
export function annotateSettingAlias(node, setProperty) {
  if (node.type !== 'element' || node.tagName !== 'code' ||
      !node.children?.every(child => child.type === 'text')) return;
  const text = node.children.map(child => child.value).join('').trim();
  if (!/^(?:config|session|global)\.[A-Za-z0-9_]+(?:\.[A-Za-z0-9_]+)*$/.test(text)) return;
  const indexed = String(node.properties?.['data-pagefind-index-attrs'] || '').split(',').filter(Boolean);
  if (!indexed.includes('data-setting-name')) indexed.push('data-setting-name');
  setProperty(node, 'data-pagefind-index-attrs', indexed.join(','));
  setProperty(node, 'data-setting-name', text.slice(text.lastIndexOf('.') + 1));
}

export default function settingSearchAliases() {
  return {
    name: 'openatv-setting-search-aliases',
    hooks: {
      'astro:config:setup': ({ config }) => {
        const plugins = config.markdown.processor.options.hastPlugins;
        if (!Array.isArray(plugins)) throw new Error('Expected the configured Satteri Markdown processor');
        plugins.push(() => ({
          name: 'setting-search-aliases',
          element: [{
            filter: ['code'],
            visit(node, context) {
              annotateSettingAlias(node, (target, name, value) => context.setProperty(target, name, value));
            },
          }],
        }));
      },
    },
  };
}
