import { test } from 'node:test';
import assert from 'node:assert/strict';
import { localTarget } from '../scripts/build-utils.mjs';

test('project-hosted language links keep the repository base', () => {
  assert.deepEqual(localTarget('../../einstellungen/', '/enigma2-doku/de/netzwerk/lan/', '/enigma2-doku'),
    { relative: 'de/einstellungen/index.html', hash: '' });
  assert.deepEqual(localTarget('#option-a', '/enigma2-doku/de/einstellungen/referenz/epg/', '/enigma2-doku'),
    { relative: 'de/einstellungen/referenz/epg/index.html', hash: 'option-a' });
});
test('an Apache root deployment needs no repository prefix', () => {
  assert.deepEqual(localTarget('/en/netzwerk/lan/', '/de/', '/', 'https://docs.example.org'),
    { relative: 'en/netzwerk/lan/index.html', hash: '' });
});
test('reject paths escaping the deployment base and ignore external destinations', () => {
  assert.ok(localTarget('/de/', '/enigma2-doku/de/', '/enigma2-doku').error);
  assert.equal(localTarget('https://github.com/openatv/enigma2', '/enigma2-doku/de/', '/enigma2-doku'), null);
});
