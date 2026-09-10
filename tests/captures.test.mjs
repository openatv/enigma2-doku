import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { readFile, readdir } from 'node:fs/promises';
import test from 'node:test';

const root = new URL('../', import.meta.url);

test('published screenshots match the reviewed inventory and have both languages', async () => {
  const metadata = JSON.parse(await readFile(new URL('data/captures.json', root), 'utf8'));
  const review = JSON.parse(await readFile(new URL('data/captures-review.json', root), 'utf8'));
  assert.match(metadata.capture_tool_commit, /^[0-9a-f]{40}$/);
  assert.ok(metadata.captures.length > 0);
  const expected = new Map(review.map(item => [`${item.language}/${item.id}.png`, item.sha256]));
  const toolCommits = new Map(review.map(item => [`${item.language}/${item.id}.png`, item.tool_commit || metadata.capture_tool_commit]));
  assert.equal(expected.size, review.length, 'duplicate review entries');
  assert.equal(metadata.captures.length, review.length);
  const seen = new Set();
  const languageIds = { de: [], en: [] };
  for (const item of metadata.captures) {
    assert.match(item.file, /^(de|en)\/[a-z0-9][a-z0-9-]*\.png$/);
    assert.equal(item.file, `${item.language}/${item.id}.png`);
    assert.equal(item.reviewed, true);
    assert.equal(item.sha256, expected.get(item.file));
    assert.equal(item.capture_tool_commit, toolCommits.get(item.file));
    assert.match(item.capture_tool_commit, /^[0-9a-f]{40}$/);
    if (item.backend === 'grab-service') {
      assert.equal(item.background, 'operator-selected service; playback preserved');
      assert.ok(!('expected_service' in item), 'private selected service leaked');
    }
    assert.ok(!seen.has(item.file), 'duplicate capture metadata');
    seen.add(item.file);
    languageIds[item.language].push(item.id);
    const data = await readFile(new URL(`src/assets/captures/${item.file}`, root));
    assert.equal(createHash('sha256').update(data).digest('hex'), item.sha256, item.file);
    assert.equal(data.subarray(0, 8).toString('hex'), '89504e470d0a1a0a');
    assert.equal(data.readUInt32BE(16), item.width);
    assert.equal(data.readUInt32BE(20), item.height);
  }
  assert.deepEqual(languageIds.de.sort(), languageIds.en.sort());
  const files = await readdir(new URL('src/assets/captures/', root), { recursive: true });
  const pngs = files.filter(file => file.endsWith('.png')).map(file => file.replaceAll('\\', '/')).sort();
  assert.deepEqual(pngs, [...expected.keys()].sort(), 'unreviewed or missing public images');
});
