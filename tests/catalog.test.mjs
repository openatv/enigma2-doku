import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
const catalog = JSON.parse(await readFile(new URL('../data/catalog.json', import.meta.url), 'utf8'));

test('catalog identifies its source and preserves stable ids in both languages', async () => {
  assert.match(catalog.commit, /^[a-f0-9]{40}$/);
  const paths = new Set();
  for (const section of catalog.setups) {
    assert.ok(!paths.has(section.slug), `Duplicate section ${section.slug}`);
    paths.add(section.slug);
    assert.equal(new Set(section.items.map(item => item.id)).size, section.items.length);
    for (const lang of ['de', 'en']) {
      const text = await readFile(new URL(`../src/content/docs/${lang}/einstellungen/referenz/${section.slug}.md`, import.meta.url), 'utf8');
      for (const item of section.items) assert.ok(text.includes(`id="${item.id}"`));
    }
  }
});
test('catalog includes nested fields and contextual network fields without live values', () => {
  const mount = catalog.setups.find(section => section.key === 'NetworkMounts');
  assert.ok(mount.items.some(item => item.expression === 'self.password'));
  assert.ok(mount.items.some(item => item.expression === 'self.nfsSoft' && item.conditions.length));
  assert.ok(catalog.setups.find(section => section.key === 'EPG').items.some(item => item.expression === 'config.epg.saveepg'));
  assert.ok(catalog.setups.every(section => section.items.every(item => !('value' in item))));
});
