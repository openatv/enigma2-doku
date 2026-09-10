// Run the generated Pagefind search engine against local build files.
// No browser, network access or running Enigma2 instance is required.
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import assert from 'node:assert/strict';
import { normaliseBase } from './build-utils.mjs';

const root = path.resolve('dist');
const base = normaliseBase(process.env.BASE_PATH || '/enigma2-doku');
let language = 'de';
globalThis.document = {
  currentScript: null,
  querySelector: selector => selector === 'html' ? { getAttribute: key => key === 'lang' ? language : null } : null,
};
globalThis.fetch = async input => {
  const url = new URL(typeof input === 'string' ? input : input.url || input.href, 'https://search-test.invalid');
  assert.equal(url.origin, 'https://search-test.invalid');
  assert.ok(url.pathname.startsWith(`${base}/pagefind/`));
  const relative = decodeURIComponent(url.pathname.slice(base.length + 1));
  const file = path.resolve(root, relative);
  assert.ok(file.startsWith(root + path.sep));
  const body = await readFile(file);
  return new Response(body, { status: 200, headers: { 'content-type': file.endsWith('.json') ? 'application/json' : 'application/octet-stream' } });
};
const pagefind = await import(pathToFileURL(path.join(root, 'pagefind/pagefind.js')));
const checks = [
  ['de', 'Primetime', '/de/epg/ansichten/'],
  ['en', 'prime time', '/en/epg/ansichten/'],
  ['de', 'INFO lang', '/de/epg/tasten/'],
  ['en', 'long INFO', '/en/epg/tasten/'],
  ['de', 'tvg-id', '/de/epg/fehlende-daten/'],
  ['en', 'tvg-id', '/en/epg/fehlende-daten/'],
  ['de', 'custom.channels.xml', '/de/epg/fehlende-daten/'],
  ['en', 'custom.channels.xml', '/en/epg/fehlende-daten/'],
  ['de', 'EPGRefresh', '/de/addons/epgrefresh/'],
  ['en', 'EPGRefresh', '/en/addons/epgrefresh/'],
  ['de', 'epgimport.log', '/de/addons/epgimport/'],
  ['en', 'epgimport.log', '/en/addons/epgimport/'],
  ['de', 'Umschalttimer', '/de/timer/aufnahmen/'],
  ['en', 'zap timer', '/en/timer/aufnahmen/'],
  ['de', 'scheduler.xml', '/de/timer/aufgaben/'],
  ['en', 'scheduler.xml', '/en/timer/aufgaben/'],
  ['de', 'crontab', '/de/timer/cron/'],
  ['en', 'crontab', '/en/timer/cron/'],
  ['de', 'Uhrendrift', '/de/system/zeit-aufwachen/'],
  ['en', 'clock drift', '/en/system/zeit-aufwachen/'],
  ['de', 'NTP', '/de/system/zeit-aufwachen/'],
  ['en', 'NTP', '/en/system/zeit-aufwachen/'],
  ['de', 'NFSv4', '/de/netzwerk/nfs/'],
  ['en', 'NFSv4', '/en/netzwerk/nfs/'],
  ['de', 'ntlmsspi', '/de/netzwerk/smb-cifs/'],
  ['en', 'ntlmsspi', '/en/netzwerk/smb-cifs/'],
  ['de', 'Windows 11', '/de/netzwerk/windows11/'],
  ['en', 'Windows 11', '/en/netzwerk/windows11/'],
  ['de', 'Privates Netzwerk', '/de/netzwerk/windows11/'],
  ['en', 'Private network', '/en/netzwerk/windows11/'],
  ['de', 'Spinner', '/de/netzwerk/autofs-fstab/'],
  ['en', 'spinner', '/en/netzwerk/autofs-fstab/'],
  ['de', 'root_squash', '/de/netzwerk/nfs-server/'],
  ['en', 'root_squash', '/en/netzwerk/nfs-server/'],
  ['de', 'Timeraufnahmeverzeichnis', '/de/speicher/nas-aufnahmen/'],
  ['en', 'Timer recording location', '/en/speicher/nas-aufnahmen/'],
  ['de', 'exFAT', '/de/speicher/dateisysteme/'],
  ['en', 'exFAT', '/en/speicher/dateisysteme/'],
  ['de', 'FAT32', '/de/wartung/usb-installation/'],
  ['en', 'FAT32', '/en/wartung/usb-installation/'],
  ['de', 'AutoRestore', '/de/wartung/autorestore/'],
  ['en', 'AutoRestore', '/en/wartung/autorestore/'],
  ['de', 'Softwareupdate', '/de/wartung/software-update/'],
  ['en', 'software update', '/en/wartung/software-update/'],
  ['de', 'SFTP', '/de/netzwerk/fernzugriff/'],
  ['en', 'root password', '/en/netzwerk/fernzugriff/'],
  ['de', 'FastRestore.log', '/de/hilfe/logs-diagnose/'],
  ['en', 'FastRestore.log', '/en/hilfe/logs-diagnose/'],
  ['de', 'config.crash.debugLevel', '/de/hilfe/logs-diagnose/'],
  ['en', 'config.crash.debugLevel', '/en/hilfe/logs-diagnose/'],
  ['de', 'Fehlerbericht', '/de/hilfe/fehler-melden/'],
  ['en', 'bug report', '/en/hilfe/fehler-melden/'],
  ['de', 'Modelle', '/de/hilfe/downloads-modelle/'],
  ['en', 'supported models', '/en/hilfe/downloads-modelle/'],
  ['de', 'Blau lang', '/de/erste-schritte/farbtasten-langdruck/'],
  ['en', 'long Blue', '/en/erste-schritte/farbtasten-langdruck/'],
  ['de', 'displayHelpLong', '/de/anhaenge/langtasten/'],
  ['en', 'power_long', '/en/anhaenge/langtasten/'],
  ['de', 'Wiederherstellung', '/de/wartung/backup-restore/'],
  ['en', 'settings backup', '/en/wartung/backup-restore/'],
  ['de', 'Zielslot', '/de/wartung/flash-online/'],
  ['en', 'target slot', '/en/wartung/flash-online/'],
  ['de', 'MultiBoot', '/de/wartung/multiboot/'],
  ['en', 'MultiBoot', '/en/wartung/multiboot/'],
  ['de', 'Einhängepunkt', '/de/speicher/laufwerke/'],
  ['en', 'mount point', '/en/speicher/laufwerke/'],
  ['de', 'Dateisystem prüfen', '/de/speicher/formatieren-pruefen/'],
  ['en', 'filesystem check', '/en/speicher/formatieren-pruefen/'],
  ['de', 'NAS', '/de/netzwerk/freigaben/'],
  ['de', 'mounten', '/de/netzwerk/freigaben/'],
  ['de', 'config.epg.saveepg', '/de/einstellungen/referenz/epg/'],
  ['de', 'DHCP', '/de/netzwerk/lan/'],
  ['en', 'network share', '/en/netzwerk/freigaben/'],
  ['en', 'config.epg.saveepg', '/en/einstellungen/referenz/epg/'],
  ['en', 'skin', '/en/skins/'],
  ['de', 'WQHD', '/de/skins/metrixhd/aufloesung/'],
  ['de', 'Skinparts', '/de/skins/metrixhd/skinparts/'],
  ['de', 'Kanalliste', '/de/settings/kanalliste/'],
  ['en', 'WQHD', '/en/skins/metrixhd/aufloesung/'],
  ['en', 'Skinparts', '/en/skins/metrixhd/skinparts/'],
  ['en', 'Picture grid', '/en/settings/kanalliste/'],
  ['de', 'Einfache Infoleiste', '/de/erste-schritte/infobar/'],
  ['de', 'Zweite Infoleiste', '/de/erste-schritte/infobar/'],
  ['de', 'Versteckte Menüoptionen', '/de/erste-schritte/menue-anpassen/'],
  ['de', 'horizontal', '/de/erste-schritte/menue-anpassen/'],
  ['en', 'Simple Infobar', '/en/erste-schritte/infobar/'],
  ['en', 'Second Infobar', '/en/erste-schritte/infobar/'],
  ['en', 'Hidden menu options', '/en/erste-schritte/menue-anpassen/'],
  ['en', 'horizontal', '/en/erste-schritte/menue-anpassen/'],
];
for (const lang of ['de', 'en']) {
  language = lang;
  const instance = pagefind.createInstance({ basePath: `${base}/pagefind/`, baseUrl: `${base}/` });
  await instance.init();
  for (const [, query, expected] of checks.filter(check => check[0] === lang)) {
    const result = await instance.search(query);
    const documents = await Promise.all(result.results.slice(0, 30).map(hit => hit.data()));
    assert.ok(documents.some(document => document.url.includes(expected)), `${lang} search "${query}" did not return ${expected}`);
    assert.ok(documents.every(document => document.url.includes(`/${lang}/`)), `${lang} search leaked another language`);
    console.log(`Search OK: ${lang} "${query}"`);
  }
  await instance.destroy();
}
