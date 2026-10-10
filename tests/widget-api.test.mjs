import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const api = JSON.parse(await readFile(new URL('../data/widget-api.json', import.meta.url), 'utf8'));
const skin = JSON.parse(await readFile(new URL('../data/skin-api.json', import.meta.url), 'utf8'));
const widget = name => api.native.find(entry => entry.name === name);
const attrs = name => widget(name).attributes.map(entry => entry.name);
const variants = (name, attr) => widget(name).attributes.find(entry => entry.name === attr)?.variants.map(entry => entry.value);

test('native attribute contracts distinguish text, images, lists and slider overloads', () => {
  assert.equal(api.revision, skin.revision);
  assert.equal(api.native.length, 16);
  assert.equal(attrs('eLabel').length, 39);
  assert.equal(attrs('ePixmap').length, 23);
  assert.equal(attrs('eListbox').length, 83);
  assert.ok(attrs('eLabel').includes('font'));
  assert.ok(!attrs('ePixmap').includes('font'));
  assert.ok(!attrs('eCanvas').includes('font'));
  assert.ok(attrs('eListbox').includes('listOrientation'));
  assert.ok(!attrs('eListbox').includes('orientation'));
  assert.ok(attrs('eSlider').includes('orientation'));
  assert.ok(!attrs('eSlider').includes('listOrientation'));
  assert.deepEqual(variants('eLabel', 'foregroundColor'), ['solid colour']);
  assert.deepEqual(variants('eSlider', 'foregroundColor'), ['solid colour', 'gradient']);
  assert.equal(widget('eLabel').methods.setBorderWidth.owner, 'eLabel');
  assert.equal(widget('eButton').methods.setBorderWidth.owner, 'eLabel');
  assert.equal(widget('ePixmap').methods.setBorderWidth.owner, 'eWidget');
  assert.match(widget('eButton').attributes.find(a => a.name === 'alphatest').note, /both on and blend/);
  assert.ok(attrs('eWindow').includes('flags'));
  assert.ok(!attrs('eLabel').includes('flags'));
});

test('every native attribute has parser and native declaration evidence; no no-op or structural count', () => {
  const known = new Map(skin.attributes.map(entry => [entry.name, entry]));
  const files = new Set(api.files.map(entry => entry.path));
  for (const entry of api.native) {
    assert.equal(new Set(attrs(entry.name)).size, entry.attributes.length);
    for (const attr of entry.attributes) {
      assert.ok(known.has(attr.name));
      assert.equal(known.get(attr.name).no_op, false);
      assert.ok(!['name', 'source', 'render', 'layout', 'animationPaused'].includes(attr.name));
      for (const variant of attr.variants) for (const call of variant.calls) {
        assert.ok(entry.methods[call], `${entry.name}.${attr.name} -> ${call}`);
        assert.ok(files.has(entry.methods[call].path));
        assert.ok(entry.methods[call].line > 0);
      }
    }
  }
});

test('renderer and converter inheritance preserves contracts and distinguishes helpers', () => {
  assert.equal(api.renderers.length, 41);
  assert.equal(api.converters.length, 63);
  const byName = (group, name) => api[group].find(entry => entry.name === name);
  const time = byName('converters', 'EventTime');
  assert.ok(time.effective_properties.text.owner.endsWith('.EventInfo'));
  assert.ok(time.contracts.some(c => c.owner.endsWith('.EventInfo') && c.name === '__init__'));
  assert.equal(byName('converters', 'Poll').is_converter, false);
  assert.equal(byName('renderers', 'FrontpanelLed').is_renderer, false);
  assert.equal(byName('renderers', 'EtAnalogClockLCD').widget, 'eCanvas');
  assert.deepEqual(byName('renderers', 'Pixmap').custom_attributes, ['pixmaps']);
  assert.deepEqual(byName('renderers', 'RatingIconLabel').custom_attributes, ['colors', 'extendDirection', 'sidesMargin']);
  assert.ok(byName('renderers', 'RunningText').custom_attributes.includes('options'));
  assert.ok(byName('converters', 'ClockToText').values.TIME_OPTIONS.includes('WithSeconds'));
});

test('named components record constructor-selected widgets, composite construction and legacy handlers', () => {
  assert.equal(api.components.length, 55);
  const find = name => api.components.find(entry => entry.name === name);
  assert.deepEqual(find('Input').created_widgets, ['eLabel']);
  assert.deepEqual(find('TunerInfo').created_widgets, ['eLabel', 'eSlider']);
  assert.equal(find('ScrollLabel').widget, null);
  assert.ok(find('ScrollLabel').contracts.some(c => c.name === 'GUIcreate'));
  assert.equal(find('ServiceListLegacy').custom_attributes.length, 38);
  assert.ok(find('ServiceListLegacy').custom_attributes.includes('serviceNameFont'));
  for (const group of ['components', 'converters', 'renderers']) {
    assert.equal(new Set(api[group].map(entry => entry.id)).size, api[group].length);
    for (const entry of api[group]) {
      assert.ok(api.files.some(file => file.path === entry.path));
      for (const contract of entry.contracts) {
        assert.ok(contract.code.includes(`def ${contract.name}(`));
        assert.ok(api.files.some(file => file.path === contract.path));
      }
    }
  }
});
