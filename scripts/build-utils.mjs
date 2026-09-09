import { readdir, stat } from 'node:fs/promises';
import path from 'node:path';

export async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const groups = await Promise.all(entries.map(async entry => {
    const file = path.join(directory, entry.name);
    return entry.isDirectory() ? walk(file) : [file];
  }));
  return groups.flat().sort();
}

export function normaliseBase(base = '/enimga2-doku') {
  const result = '/' + base.replace(/^\/+|\/+$/g, '');
  return result === '/' ? '' : result;
}

export function localTarget(href, fromPath, base, origin = 'https://openatv.github.io') {
  if (!href || /^(?:mailto:|tel:|data:|javascript:)/i.test(href)) return null;
  let url;
  try { url = new URL(href.replaceAll('&amp;', '&'), new URL(fromPath, origin)); }
  catch { return { error: `Malformed URL: ${href}` }; }
  if (url.origin !== new URL(origin).origin) return null;
  const prefix = normaliseBase(base);
  if (prefix && url.pathname !== prefix && !url.pathname.startsWith(prefix + '/')) {
    return { error: `Outside deployment base: ${url.pathname}` };
  }
  let relative = decodeURIComponent(url.pathname.slice(prefix.length)).replace(/^\/+/, '');
  if (!relative || relative.endsWith('/')) relative += 'index.html';
  else if (!path.posix.extname(relative)) relative += '/index.html';
  return { relative, hash: decodeURIComponent(url.hash.slice(1)) };
}

export async function sizes(directory) {
  return Promise.all((await walk(directory)).map(async file => ({ file, bytes: (await stat(file)).size })));
}
