import path from 'node:path';
import { sizes } from './build-utils.mjs';

const entries = await sizes(path.resolve('dist'));
const total = entries.reduce((sum, entry) => sum + entry.bytes, 0);
const pagesBudget = 1_000_000_000;
console.log(`Published build: ${(total / 1_000_000).toFixed(2)} MB, ${entries.length} files; ${(total / pagesBudget * 100).toFixed(2)}% of a conservative 1 GB Pages budget.`);
console.log('Largest files:');
for (const entry of entries.sort((a, b) => b.bytes - a.bytes).slice(0, 5)) {
  console.log(`${(entry.bytes / 1_000_000).toFixed(2)} MB  ${path.relative('dist', entry.file)}`);
}
if (total >= pagesBudget * .8) console.warn('Approaching the Pages limit. Review image sizes or use the documented Apache deployment.');
if (process.argv.includes('--pages') && total >= pagesBudget) {
  console.error('Pages budget exceeded. The build remains usable for Apache; Pages deployment is stopped.');
  process.exitCode = 1;
}
