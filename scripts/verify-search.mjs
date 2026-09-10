// Run the generated Pagefind search engine against local build files.
// No browser, network access or running Enigma2 instance is required.
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import assert from 'node:assert/strict';
import { normaliseBase } from './build-utils.mjs';

const root = path.resolve('dist');
const base = normaliseBase(process.env.BASE_PATH || '/enimga2-doku');
let language = 'de';
globalThis.document = {
  currentScript: null,
  querySelector: selector => selector === 'html' ? { getAttribute: key => key === 'lang' ? language : null } : null,
};
globalThis.fetch = async input => {
  const url = new URL(typeof input === 'string' ? input : input.url || input.href, 'https://search-test.invalid');
  assert.equal(url.origin, 'https://search-test.invalid');
  assert.ok(url.pathname.startsWith(`${base}/pagefind/`));
  const relative = decodeURIComponent(url.pathname.slice(base.length + 1));
  const file = path.resolve(root, relative);
  assert.ok(file.startsWith(root + path.sep));
  const body = await readFile(file);
  return new Response(body, { status: 200, headers: { 'content-type': file.endsWith('.json') ? 'application/json' : 'application/octet-stream' } });
};
const pagefind = await import(pathToFileURL(path.join(root, 'pagefind/pagefind.js')));
const checks = [
  ['de', 'NAS', '/de/netzwerk/freigaben/'],
  ['de', 'mounten', '/de/netzwerk/freigaben/'],
  ['de', 'config.epg.saveepg', '/de/einstellungen/referenz/epg/'],
  ['de', 'DHCP', '/de/netzwerk/lan/'],
  ['en', 'network share', '/en/netzwerk/freigaben/'],
  ['en', 'config.epg.saveepg', '/en/einstellungen/referenz/epg/'],
  ['en', 'skin', '/en/skins/'],
  ['de', 'WQHD', '/de/skins/metrixhd/aufloesung/'],
  ['de', 'Skinparts', '/de/skins/metrixhd/skinparts/'],
  ['de', 'Kanalliste', '/de/settings/kanalliste/'],
  ['en', 'WQHD', '/en/skins/metrixhd/aufloesung/'],
  ['en', 'Skinparts', '/en/skins/metrixhd/skinparts/'],
  ['en', 'Picture grid', '/en/settings/kanalliste/'],
];
for (const lang of ['de', 'en']) {
  language = lang;
  const instance = pagefind.createInstance({ basePath: `${base}/pagefind/`, baseUrl: `${base}/` });
  await instance.init();
  for (const [, query, expected] of checks.filter(check => check[0] === lang)) {
    const result = await instance.search(query);
    const documents = await Promise.all(result.results.slice(0, 30).map(hit => hit.data()));
    assert.ok(documents.some(document => document.url.includes(expected)), `${lang} search "${query}" did not return ${expected}`);
    assert.ok(documents.every(document => document.url.includes(`/${lang}/`)), `${lang} search leaked another language`);
    console.log(`Search OK: ${lang} "${query}"`);
  }
  await instance.destroy();
}
