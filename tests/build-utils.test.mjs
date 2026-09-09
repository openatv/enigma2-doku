import { test } from 'node:test';
import assert from 'node:assert/strict';
import { localTarget } from '../scripts/build-utils.mjs';

test('project-hosted language links keep the repository base', () => {
  assert.deepEqual(localTarget('../../einstellungen/', '/enimga2-doku/de/netzwerk/lan/', '/enimga2-doku'),
    { relative: 'de/einstellungen/index.html', hash: '' });
  assert.deepEqual(localTarget('#option-a', '/enimga2-doku/de/einstellungen/referenz/epg/', '/enimga2-doku'),
    { relative: 'de/einstellungen/referenz/epg/index.html', hash: 'option-a' });
});
test('an Apache root deployment needs no repository prefix', () => {
  assert.deepEqual(localTarget('/en/netzwerk/lan/', '/de/', '/', 'https://docs.example.org'),
    { relative: 'en/netzwerk/lan/index.html', hash: '' });
});
test('reject paths escaping the deployment base and ignore external destinations', () => {
  assert.ok(localTarget('/de/', '/enimga2-doku/de/', '/enimga2-doku').error);
  assert.equal(localTarget('https://github.com/openatv/enigma2', '/enimga2-doku/de/', '/enimga2-doku'), null);
});
