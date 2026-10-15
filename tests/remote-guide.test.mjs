import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import * as definitions from '../data/remote-guide.mjs';
import { compileGuide, eventText, hydrateModels, matchesScreen, matchesSearch, packModels, readSelection, remapKey } from '../src/lib/remote-guide.mjs';

const reference = JSON.parse(await readFile(new URL('../data/remote-reference.json', import.meta.url), 'utf8'));
const guides = Object.fromEntries(['de', 'en'].map(lang => [lang, compileGuide(reference, definitions, lang)]));
const entry = (screen, key) => guides.en[0].screens.find(item => item.id === screen).entries.find(item => item.id === key);

test('pilot model uses original licensed remote asset, coordinates and ordered model remaps', async () => {
  assert.equal(reference.models.length, 1);
  assert.equal(reference.models[0].id, 'vuduo4klite');
  assert.equal(reference.models[0].remote, 'vu6');
  assert.equal(reference.models[0].rcType, '0');
  const remote = reference.remotes.vu6;
  assert.equal(remote.buttons.length, 44);
  assert.equal(new Set(remote.buttons.map(button => button.id)).size, 44);
  for (const button of remote.buttons) {
    assert.ok(button.position[0] > 0 && button.position[0] < remote.width);
    assert.ok(button.position[1] > 0 && button.position[1] < remote.height);
  }
  const png = await readFile(new URL('../public/remotes/vu6.png', import.meta.url));
  assert.equal(createHash('sha256').update(png).digest('hex'), reference.remoteFiles['png/vu6.png'].sha256);
  assert.equal(png.readUInt32BE(16), remote.width);
  assert.equal(png.readUInt32BE(20), remote.height);
  assert.match(await readFile(new URL('../public/remotes/LICENSE.txt', import.meta.url), 'utf8'), /GNU GENERAL PUBLIC LICENSE\s+Version 3/);
  assert.equal(remapKey('KEY_HELP', reference.models[0].remaps), 'KEY_INFO');
  assert.equal(remapKey('KEY_INFO', reference.models[0].remaps), 'KEY_EPG');
  assert.equal(remapKey('KEY_EDIT', reference.models[0].remaps), 'KEY_TIME');
  assert.equal(remapKey('KEY_PROGRAM', reference.models[0].remaps), 'KEY_PROGRAM');
});

test('every editorial contract has a keymap binding and source evidence in both languages', () => {
  for (const screen of [...definitions.screens, { rules: definitions.globals }]) for (const rule of screen.rules) {
    assert.ok(rule.text.de && rule.text.en);
    assert.ok(reference.bindings.some(binding => binding.context === rule.context && binding.action === rule.action), `${rule.context}/${rule.action}`);
    const source = reference.sources[rule.source.file];
    assert.match(source.sha256, /^[a-f0-9]{64}$/);
    if (rule.source.symbol) assert.ok(source.functions[rule.source.symbol]);
    else {
      const owner = source.classes[rule.source.className];
      assert.ok(owner);
      if (rule.method) assert.ok(owner.methods[rule.method], `${rule.source.className}.${rule.method}`);
    }
  }
  for (const lang of ['de', 'en']) {
    assert.ok(guides[lang][0].screens.length > 80);
    assert.equal(guides[lang][0].buttons.length, 46);
    for (const screen of guides[lang][0].screens) for (const row of screen.entries) for (const action of row.actions) {
      assert.match(action.flags, /^[mbrls]+$/);
      assert.ok(action.event && action.text);
      assert.ok(action.source.includes(reference.enigmaRevision));
    }
  }
});

test('native C++ zero-long is global, conditional and linked to its real handler', () => {
  const native = reference.bindings.find(binding => binding.context === 'NativeOSD');
  assert.equal(native.origin, 'native');
  assert.equal(native.key, 'KEY_0');
  assert.equal(native.flags, 'l');
  for (const screen of guides.en[0].screens) {
    const zero = screen.entries.find(entry => entry.id === 'KEY_0').actions;
    const hold = zero.find(action => action.flags === 'l');
    assert.ok(hold?.native && hold.global, screen.id);
    assert.match(hold.condition, /Requires Automatically hide OSD/);
    assert.match(hold.text, /hold 0 again/);
    assert.match(hold.source, /lib\/driver\/avcontrol.cpp#L\d+/);
  }
});

test('deep menu paths remain distinct, searchable and share profiles without duplicated payloads', () => {
  const model = guides.de[0];
  const logs = model.screens.find(screen => screen.id === 'route-mainmenu-setup-extended-logs_setup');
  assert.equal(logs.profile, 'setup');
  assert.ok(matchesScreen(logs, 'system logs'));
  const epg = model.screens.find(screen => screen.id === 'route-mainmenu-setup-epg-setup_epggraphical');
  assert.equal(epg.profile, 'setup');
  assert.match(epg.menuSource, /data\/menu.xml#L\d+/);
  const raw = JSON.parse(JSON.stringify(packModels(guides.de)));
  assert.ok(raw[0].screens.filter(screen => screen.profile).every(screen => !screen.entries));
  const hydrated = hydrateModels(raw);
  assert.deepEqual(readSelection(hydrated, `?screen=${logs.id}&key=KEY_0`).screen.entries, JSON.parse(JSON.stringify(logs.entries)));
  assert.ok(!model.screens.some(screen => screen.id.includes('flash_online'))); // No guessed Setup mapping.
  assert.equal(new Set(model.screens.map(screen => screen.id)).size, model.screens.length);
});

test('subdialog states override parent shortcuts and distinguish running and finished operations', () => {
  const actions = (screen, key) => entry(screen, key).actions.filter(action => !action.global).map(action => action.action);
  assert.deepEqual(actions('scan-running', 'KEY_OK'), []);
  assert.deepEqual(actions('scan-finished', 'KEY_OK'), ['ok']);
  assert.deepEqual(actions('manual-scan', 'KEY_OK'), ['ok']);
  assert.deepEqual(actions('manual-scan', 'KEY_MENU'), ['menu']);
  assert.deepEqual(actions('tuner-config', 'KEY_YELLOW'), ['changetype']);
  assert.match(entry('tuner-config', 'KEY_BLUE').actions[0].text, /Reset unsaved/);
  assert.match(entry('tuner-list', 'KEY_LEFT').actions[0].source, /lib\/gui\/elistbox.cpp/);
  assert.deepEqual(actions('network-adapter', 'KEY_HELP'), ['info']);
  assert.deepEqual(actions('network-password', 'KEY_YELLOW'), ['yellow']);
  assert.match(entry('network-password', 'KEY_YELLOW').actions[0].text, /random password/i);
  assert.match(entry('dns', 'KEY_YELLOW').actions[0].text, /Move DNS/);
  assert.match(entry('plugins', 'KEY_RED').actions[0].text, /removal/);
  assert.match(entry('plugins-edit', 'KEY_RED').actions[0].text, /sort order/);
  assert.equal(entry('network', 'KEY_EXIT').actions.find(action => action.action === 'close').flags, 'l');
  assert.equal(entry('timer-log', 'KEY_EXIT').actions.some(action => action.flags === 'l'), false);
});

test('printed HELP and EPG stay distinct across screen contexts', () => {
  assert.equal(guides.en[0].buttons.find(button => button.id === 'KEY_INFO').label, 'EPG');
  assert.equal(entry('tv', 'KEY_HELP').actions[0].action, 'info');
  assert.equal(entry('tv', 'KEY_INFO').actions[0].action, 'epg');
  assert.deepEqual(entry('channels', 'KEY_HELP').actions.map(action => action.action), ['showEventInfo']);
  assert.deepEqual(entry('channels', 'KEY_INFO').actions.map(action => action.action), ['showEPGList']);
  assert.equal(entry('timers', 'KEY_HELP').actions[0].action, 'log');
  assert.equal(entry('keyboard', 'KEY_HELP').actions[0].action, 'toggleOverwrite');
});

test('screen priorities and conditions prevent false unions', () => {
  assert.deepEqual(entry('tv', 'KEY_PLAY').actions.map(action => action.action), ['timeshiftStart']);
  // InfobarActions (prio 0) consumes PLAY before MovielistSeekActions (prio 5).
  assert.deepEqual(entry('movies', 'KEY_PLAY').actions.map(action => action.action), ['showMovies']);
  assert.deepEqual(entry('movies', 'KEY_TV').actions.map(action => [action.action, action.flags]), [['showTv', 'b'], ['leavePlayer', 'm']]);
  assert.deepEqual(entry('keyboard', 'KEY_PREVIOUS').actions.map(action => action.action), ['first']);
  assert.deepEqual(entry('keyboard', 'KEY_NEXT').actions.map(action => action.action), ['last']);
  assert.deepEqual(entry('setup', 'KEY_VIDEO').actions.map(action => action.action), ['menu', 'erase']);
  assert.ok(entry('setup', 'KEY_VIDEO').actions.every(action => action.condition));
  assert.ok(!entry('setup', 'KEY_POWER').actions.some(action => action.action === 'power_long'));
  assert.ok(entry('setup', 'KEY_POWER').actions.some(action => action.action === 'power_up'));
  for (const id of ['TV_POWER', 'AV']) assert.equal(entry('tv', id).actions.length, 0);
  for (const screen of guides.en[0].screens) for (const row of screen.entries) {
    for (const flag of 'mbrls') {
      const overlap = row.actions.filter(action => action.flags.includes(flag));
      if (overlap.length > 1) assert.ok(overlap.every(action => action.condition), `${screen.id}/${row.id}/${flag}: unqualified overlap`);
    }
  }
});

test('same key has screen-specific actions and press/release/long remain separate', () => {
  assert.equal(entry('tv', 'KEY_MENU').actions[0].action, 'showMenu');
  assert.equal(entry('menu', 'KEY_MENU').actions[0].action, 'menu');
  assert.equal(entry('channels', 'KEY_MENU').actions[0].action, 'contextMenu');
  assert.deepEqual(entry('tv', 'KEY_VIDEO').actions.map(action => action.flags), ['b', 'l']);
  assert.deepEqual(entry('tv', 'KEY_VOLUMEUP').actions.map(action => action.flags), ['mr', 'l', 's']);
  assert.match(eventText('s', 'en'), /after long/);
  assert.match(eventText('b', 'en'), /short release/);
  assert.ok(entry('tv', 'KEY_PROGRAM').actions.some(action => action.action === 'openAutoTimerList' && action.flags === 'l'));
});

test('localized function search and URL defaults preserve the selected screen and physical key', () => {
  const model = guides.de[0];
  const screen = model.screens.find(screen => screen.id === 'tv');
  const subtitle = model.buttons.find(button => button.id === 'KEY_SUBTITLE');
  assert.ok(matchesSearch(subtitle, screen.entries.find(entry => entry.id === subtitle.id), 'untertitel'));
  assert.ok(!matchesSearch(subtitle, screen.entries.find(entry => entry.id === subtitle.id), 'not-a-function-999'));
  const selected = readSelection(guides.en, '?model=vuduo4klite&screen=keyboard&key=KEY_HELP');
  assert.equal(selected.screen.id, 'keyboard');
  assert.equal(selected.button.key, 'KEY_INFO');
  const fallback = readSelection(guides.en, '?model=unknown&screen=__proto__&key=<script>');
  assert.equal(fallback.model.id, 'vuduo4klite');
  assert.equal(fallback.screen.id, 'tv');
  assert.equal(fallback.button.id, 'KEY_MENU');
});

test('handset labels stay separate from model remapping when extending the registry', () => {
  const extended = structuredClone(reference);
  extended.models.push({ ...extended.models[0], id: 'test-model-no-remap', remaps: [] });
  const other = compileGuide(extended, definitions, 'en')[1];
  assert.equal(other.buttons.find(button => button.id === 'KEY_INFO').label, 'EPG');
  assert.equal(other.buttons.find(button => button.id === 'KEY_INFO').key, 'KEY_INFO');
  assert.equal(other.buttons.find(button => button.id === 'KEY_HELP').key, 'KEY_HELP');
  extended.remotes.testRemote = { ...extended.remotes.vu6 };
  extended.models[1].remote = 'testRemote';
  const unknownHandset = compileGuide(extended, definitions, 'en')[1];
  assert.equal(unknownHandset.buttons.length, 44);
  assert.equal(unknownHandset.buttons.find(button => button.id === 'KEY_INFO').label, 'INFO');
});
