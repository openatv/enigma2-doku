import { readFile, access } from 'node:fs/promises';
import path from 'node:path';
import { walk, localTarget, normaliseBase } from './build-utils.mjs';

const root = path.resolve('dist');
const base = normaliseBase(process.env.BASE_PATH || '/enimga2-doku');
const origin = process.env.SITE_URL || 'https://openatv.github.io';
const files = await walk(root);
const known = new Set(files.map(file => path.relative(root, file).split(path.sep).join('/')));
const ids = new Map();
const errors = [];
const htmlFiles = files.filter(file => file.endsWith('.html'));

for (const file of htmlFiles) {
  const html = await readFile(file, 'utf8');
  const relative = path.relative(root, file).split(path.sep).join('/');
  const anchors = [...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]);
  if (new Set(anchors).size !== anchors.length) errors.push(`${relative}: duplicate HTML ids`);
  ids.set(relative, new Set(anchors));
}

for (const file of htmlFiles) {
  const html = await readFile(file, 'utf8');
  const relative = path.relative(root, file).split(path.sep).join('/');
  const fromPath = `${base}/${relative.replace(/index\.html$/, '')}`;
  for (const match of html.matchAll(/<(?:a|link|script|img|source)\b[^>]*?\b(?:href|src)="([^"]+)"/g)) {
    const target = localTarget(match[1], fromPath, base, origin);
    if (!target) continue;
    if (target.error) { errors.push(`${relative}: ${target.error}`); continue; }
    if (!known.has(target.relative)) errors.push(`${relative}: missing ${match[1]} → ${target.relative}`);
    else if (target.hash && ids.has(target.relative) && !ids.get(target.relative).has(target.hash)) {
      errors.push(`${relative}: missing anchor ${match[1]}`);
    }
  }
}
const de = htmlFiles.filter(file => path.relative(root, file).startsWith('de' + path.sep));
const en = htmlFiles.filter(file => path.relative(root, file).startsWith('en' + path.sep));
if (!de.length || de.length !== en.length) errors.push(`Language page counts differ: de=${de.length}, en=${en.length}`);
await access(path.join(root, 'pagefind/pagefind.js')).catch(() => errors.push('Missing Pagefind search bundle'));
const index = JSON.parse(await readFile(path.join(root, 'pagefind/pagefind-entry.json'), 'utf8').catch(() => '{}'));
for (const lang of ['de', 'en']) if (!index.languages?.[lang]) errors.push(`Missing ${lang} search index`);
if (errors.length) {
  console.error([...new Set(errors)].slice(0, 60).join('\n'));
  throw new Error(`${errors.length} build validation errors`);
}
console.log(`Verified ${htmlFiles.length} HTML files, local links/assets/anchors, language parity and DE/EN search indexes.`);
