import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { buildSkinDictionary, matchesSkinEntry } from '../src/lib/skin-dictionary.mjs';

const json = async name => JSON.parse(await readFile(new URL(`../data/${name}.json`, import.meta.url), 'utf8'));
const [skin, widgets, help, xml] = await Promise.all(['skin-api','widget-api','skin-attribute-help','skin-xml-help'].map(json));
const entries = buildSkinDictionary(skin, widgets, help, xml);

test('authoring help partitions every imported attribute and preserves canonical migrations', () => {
  assert.equal(help.revision, skin.revision);
  assert.equal(xml.revision, skin.revision);
  const names = skin.attributes.map(item => item.name).sort();
  assert.deepEqual([...Object.keys(help.attributes), ...Object.keys(help.migrations)].sort(), names);
  for (const item of skin.attributes) {
    const migration = help.migrations[item.name];
    if (migration) {
      assert.ok(help.attributes[migration.replacement], item.name);
      assert.equal(migration.status, item.deprecated ? 'deprecated' : 'compatibility');
      assert.ok(migration.note.length > 20);
    } else {
      const detail = help.attributes[item.name];
      for (const key of ['values','default','context']) assert.ok(detail[key].length > 10, `${item.name}.${key}`);
      assert.deepEqual(detail.widgets, widgets.native.filter(widget => widget.attributes.some(attr => attr.name === item.name)).map(widget => widget.name));
      assert.ok(detail.example || detail.notes.length, `${item.name} needs an example or explicit limitation`);
      if (detail.example) assert.ok(detail.example.includes(`${item.name}="`), item.name);
    }
  }
});

test('dictionary covers every source inventory and each direct/inherited Python handler', () => {
  for (const item of skin.attributes) assert.ok(entries.some(entry => entry.name === item.name && entry.category === 'attributes'));
  for (const item of widgets.native) assert.ok(entries.some(entry => entry.name === item.name && entry.category === 'widgets'));
  for (const kind of ['renderers','converters','components']) for (const item of widgets[kind]) {
    assert.ok(entries.some(entry => entry.name === item.name && entry.context === item.id));
    for (const name of [...item.custom_attributes, ...item.inherited_attribute_handlers.flatMap(parent => parent.names)]) {
      assert.ok(entries.some(entry => entry.name === name && entry.context === item.id), `${item.id}.${name}`);
    }
  }
  assert.equal(new Set(xml.entries.map(item=>item.id)).size, xml.entries.length);
  for (const item of xml.entries) for (const name of Object.keys(item.attributes)) assert.ok(entries.some(entry=>entry.name===name && entry.href===`../xml/#xml-${item.id}`));
});

test('search distinguishes template meanings and keeps compatibility names opt-in', () => {
  assert.ok(entries.filter(entry=>matchesSkinEntry(entry, 'underline')).some(entry=>entry.name==='flags' && entry.category==='xml'));
  assert.ok(entries.filter(entry=>matchesSkinEntry(entry, 'showOnDemandShrink')).some(entry=>entry.name==='scrollbarMode'));
  const old = entries.find(entry=>entry.name==='noWrap' && entry.category==='attributes');
  assert.equal(matchesSkinEntry(old, 'noWrap'), false);
  assert.equal(matchesSkinEntry(old, 'noWrap', '', true), true);
  assert.match(old.href, /deprecated/);
  assert.ok(entries.some(entry=>entry.name==='foregroundGradient' && entry.category==='xml' && matchesSkinEntry(entry,'foregroundGradient')));
  assert.ok(entries.filter(entry=>matchesSkinEntry(entry, 'font', 'xml')).every(entry=>entry.category==='xml'));
  assert.equal(entries.filter(entry=>matchesSkinEntry(entry,'there-is-no-such-attribute')).length, 0);
});

test('migration semantics and examples preserve important context differences', () => {
  assert.match(help.migrations.noWrap.note, /noWrap="1" becomes wrap="noWrap"/);
  assert.match(help.migrations.selectionDisabled.note, /selectionDisabled="1" becomes selection="0"/);
  assert.equal(help.migrations.textOffset.replacement, 'padding');
  for (const name of ['backgroundGradient', 'backgroundGradientSelected', 'foregroundGradient']) {
    assert.match(help.migrations[name].exampleValue, /^#[0-9A-F]{8},#[0-9A-F]{8},(?:horizontal|vertical)$/);
  }
  assert.match(help.attributes.underline.example, /<eLabel[^>]*underline="1"/);
  assert.match(xml.entries.find(entry=>entry.id==='template-text').example, /font="0" flags="underline"/);
  assert.match(help.attributes.scrollbarMode.example, /scrollbarMode="showOnDemandShrink"/);
  assert.ok(!help.attributes.scrollbarMode.values.includes('showLeft,'));
  assert.ok(!help.attributes.scale.values.includes('scaleKeepAspect'));
});

test('central visual examples select widgets that support the demonstrated attribute', () => {
  const byName = new Map(skin.attributes.map(item => [item.name, item]));
  for (const [name, detail] of Object.entries(help.attributes)) {
    if (!detail.example || byName.get(name).no_op) continue;
    const tag = detail.example.match(/^<([\w]+)/)[1];
    const renderer = detail.example.match(/render="([^"]+)"/)?.[1];
    const native = renderer ? widgets.renderers.find(item=>item.name===renderer).widget : tag === 'widget' ? 'eListbox' : tag === 'screen' ? 'eWindow' : tag;
    assert.ok(detail.widgets.includes(native), `${name}: ${native} does not support this attribute`);
  }
});
