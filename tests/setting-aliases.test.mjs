import assert from 'node:assert/strict';
import { test } from 'node:test';
import { annotateSettingAlias } from '../scripts/setting-search-aliases.mjs';

test('qualified setting/source names expose a searchable short name without changing visible code', () => {
  const code = text => ({ type: 'element', tagName: 'code', properties: {}, children: [{ type: 'text', value: text }] });
  const setting = code('config.plugins.umbra.color_recording');
  const source = code('session.Event_Now');
  const statement = code('config.foo = 1');
  const prose = { type: 'text', value: 'config.plugins.umbra.color_recording' };
  const tree = { type: 'root', children: [setting, source, statement, prose] };
  const setProperty = (node, name, value) => { node.properties[name] = value; };
  for (const node of tree.children) annotateSettingAlias(node, setProperty);
  for (const node of tree.children) annotateSettingAlias(node, setProperty);
  assert.equal(setting.properties['data-setting-name'], 'color_recording');
  assert.equal(source.properties['data-setting-name'], 'Event_Now');
  assert.equal(setting.children[0].value, 'config.plugins.umbra.color_recording');
  assert.equal(setting.properties['data-pagefind-index-attrs'], 'data-setting-name');
  assert.deepEqual(statement.properties, {});
  assert.equal(prose.properties, undefined);
});
