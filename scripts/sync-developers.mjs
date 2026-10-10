// One English editorial source, two independently searchable handbook routes.
import { readdir, readFile, writeFile, mkdir, copyFile } from 'node:fs/promises';
import path from 'node:path';
const root = path.resolve('.');
const canonical = path.join(root, 'docs/developer-content');
const check = process.argv.includes('--check');
async function walk(dir) { const entries = await readdir(dir, { withFileTypes: true }); return (await Promise.all(entries.map(e => e.isDirectory() ? walk(path.join(dir, e.name)) : [path.join(dir, e.name)]))).flat(); }
let count = 0;
for (const source of (await walk(canonical)).filter(file => file.endsWith('.mdx'))) {
  const relative = path.relative(canonical, source);
  const text = await readFile(source, 'utf8');
  const match = text.match(/^(---\r?\n[\s\S]*?\r?\n---)\r?\n([\s\S]*)$/);
  if (!match) throw new Error(`Missing frontmatter: ${relative}`);
  for (const locale of ['de', 'en']) {
    const target = path.join(root, 'src/content/docs', locale, 'developers', relative);
    const imports = ['DeveloperContent', 'SkinExample', 'SkinApi'].map(name => {
      const location = path.relative(path.dirname(target), path.join(root, 'src/components', `${name}.astro`)).split(path.sep).join('/');
      return `import ${name} from '${location}';`;
    }).join('\n');
    const output = `${match[1]}\n${imports}\n\n{/* Generated from docs/developer-content/${relative.split(path.sep).join('/')}. Edit the shared English source. */}\n<DeveloperContent>\n\n${match[2].trim()}\n\n</DeveloperContent>\n`;
    if (check) { if (await readFile(target, 'utf8') !== output) throw new Error(`Outdated developer mirror: ${target}`); }
    else { await mkdir(path.dirname(target), { recursive: true }); await writeFile(target, output); }
    count++;
  }
}
for (const source of await walk(path.join(root, 'examples/skinning/HandbookSkinLab'))) {
  if (source.includes('__pycache__')) continue;
  const relative = path.relative(path.join(root, 'examples/skinning'), source);
  const target = path.join(root, 'public/downloads/skinning', relative);
  if (check) { if (!(await readFile(source)).equals(await readFile(target))) throw new Error(`Outdated downloadable sample: ${relative}`); }
  else { await mkdir(path.dirname(target), { recursive: true }); await copyFile(source, target); }
}
console.log(`${check ? 'Verified' : 'Updated'} ${count} English developer routes and downloadable source files.`);
