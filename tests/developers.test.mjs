import assert from 'node:assert/strict';
import { test } from 'node:test';
import { readFile, readdir } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';

const root = new URL('../', import.meta.url);
const read = file => readFile(new URL(file, root));
const json = async file => JSON.parse(await read(file));
const hash = bytes => createHash('sha256').update(bytes).digest('hex');

test('English developer mirrors and standalone downloads match their canonical files', () => {
  execFileSync(process.execPath, ['scripts/sync-developers.mjs', '--check'], { cwd: new URL('../', import.meta.url) });
});

test('native developer examples bind each reviewed image to its exact executable XML', async () => {
  const manifest = await json('data/skin-lab-captures.json');
  assert.equal(manifest.status, 'complete');
  assert.equal(manifest.reviewed, true);
  assert.equal(manifest.backend, 'grab -o -d -p');
  assert.match(manifest.locale, /^en_/);
  assert.equal(manifest.captures.length, 27);
  const ids = new Set();
  for (const item of manifest.captures) {
    assert.match(item.id, /^[a-z]+(?:-[a-z]+)*$/);
    assert.ok(!ids.has(item.id)); ids.add(item.id);
    assert.equal(item.language, 'en');
    assert.ok(item.review.includes('visually reviewed'));
    const image = await read(`src/assets/developers/skinning/${item.id}.png`);
    assert.equal(hash(image), item.sha256);
    assert.equal(image.subarray(0, 8).toString('hex'), '89504e470d0a1a0a');
    assert.equal(image.readUInt32BE(16), item.width);
    assert.equal(image.readUInt32BE(20), item.height);
    const xml = await read(`examples/skinning/HandbookSkinLab/screens/${item.id}.xml`);
    assert.equal(hash(xml), item.xml_sha256, `${item.id}: recapture after changing example XML`);
    assert.match(xml.toString(), /<!-- example:start -->[\s\S]+<!-- example:end -->/);
  }
  const images = await readdir(new URL('src/assets/developers/skinning/', root));
  assert.deepEqual(images.sort(), [...ids].map(id => `${id}.png`).sort());
  assert.equal(manifest.schema, 2);
  assert.ok(Object.hasOwn(manifest.dependencies, 'advanced.py'));
  assert.ok(Object.hasOwn(manifest.dependencies, 'panels.xml'));
  assert.ok(Object.hasOwn(manifest.dependencies, 'network.py'));
  assert.ok(Object.hasOwn(manifest.dependencies, 'assets/network-contracts.json'));
  for (const [file, expected] of Object.entries(manifest.dependencies)) {
    assert.match(file, /^[a-zA-Z0-9_./-]+$/);
    assert.ok(!file.includes('..'));
    assert.equal(hash(await read(`examples/skinning/HandbookSkinLab/${file}`)), expected, `Shared dependency changed: ${file}`);
  }
});

test('network screen contracts preserve the pinned source and named list indexes', async () => {
  const network = await json('data/network-skin.json');
  const foundation = await json('data/skin-api.json');
  assert.equal(network.revision, foundation.revision);
  assert.equal(network.screens.length, 24);
  assert.equal(network.files.length, 16);
  for (const file of network.files) assert.match(file.sha256, /^[0-9a-f]{64}$/);
  const fixture = await json('examples/skinning/HandbookSkinLab/assets/network-contracts.json');
  let lists = 0;
  for (const screen of network.screens) {
    if (Object.keys(screen.lists).length) assert.deepEqual(fixture[screen.name], screen.lists);
    for (const fields of Object.values(screen.lists)) {
      lists++;
      assert.deepEqual(Object.values(fields).sort((a,b) => a-b), Array.from({length:Object.keys(fields).length}, (_,i) => i));
    }
  }
  assert.equal(lists, 6);
});

test('advanced source contracts have a matching revision and searchable field coverage', async () => {
  const advanced = await json('data/skin-advanced-source.json');
  const foundation = await json('data/skin-api.json');
  assert.equal(advanced.revision, foundation.revision);
  assert.equal(advanced.files.length, 26);
  for (const file of advanced.files) assert.match(file.sha256, /^[0-9a-f]{64}$/);
  const legacy = (await read('docs/developer-content/skinning/advanced/channel-classic.mdx')).toString();
  for (const attribute of advanced.legacy_attributes) assert.ok(legacy.includes(attribute), attribute);
  const modern = (await read('docs/developer-content/skinning/advanced/template-reference.mdx')).toString();
  for (const field of [...Object.keys(advanced.service_indexes), ...Object.keys(advanced.event_indexes)]) assert.ok(modern.includes(field), field);
  const icons = (await read('docs/developer-content/skinning/advanced/icon-fonts.mdx')).toString();
  for (const glyph of Object.keys(advanced.icon_font.glyphs)) assert.ok(icons.includes(glyph), glyph);
});

test('API snapshot is pinned, explained, unique and has resolvable parser and alias references', async () => {
  const api = await json('data/skin-api.json');
  assert.match(api.revision, /^[a-f0-9]{40}$/);
  assert.match(api.sha256, /^[a-f0-9]{64}$/);
  const attributeNames = new Set(api.attributes.map(entry => entry.name));
  const functions = new Set(api.functions.map(entry => entry.name));
  for (const group of ['attributes', 'functions', 'classes']) {
    assert.equal(new Set(api[group].map(entry => entry.name)).size, api[group].length);
    for (const entry of api[group]) {
      assert.ok(entry.summary.trim().length > 0, entry.name);
      assert.ok(entry.line > 0 && entry.end_line >= entry.line, entry.name);
    }
  }
  for (const entry of api.attributes) {
    if (entry.alias) assert.ok(attributeNames.has(entry.alias), entry.alias);
    for (const parser of entry.parsers) assert.ok(functions.has(parser), parser);
  }
  assert.equal(new Set(api.components.map(entry => `${entry.category}-${entry.name}`)).size, api.components.length);
});
