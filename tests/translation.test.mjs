import { test } from 'node:test';
import assert from 'node:assert/strict';
import { languageUrl, localePath, requestedLanguage, resetCookies, isTranslationLanguage } from '../src/lib/translation.mjs';

test('extra languages always open the matching English chapter under either hosting base', () => {
  for (const base of ['/', '/enigma2-doku', '/handbook/']) {
    const prefix = base.replace(/\/$/, '');
    const url = languageUrl(`https://docs.example.org${prefix}/de/skins/metrixhd/?q=FHD#auflösung`, 'en', base, 'fr');
    assert.equal(url.pathname, `${prefix}/en/skins/metrixhd/`);
    assert.equal(url.search, '?q=FHD&translate=fr');
    assert.equal(url.hash, ''); // Translated DE headings have different anchor IDs.
  }
});

test('native return removes machine selection while preserving English section links', () => {
  const current = 'https://openatv.github.io/enigma2-doku/en/epg/grundlagen/?translate=fr#save-epg';
  assert.equal(languageUrl(current, 'en', '/enigma2-doku').href,
    'https://openatv.github.io/enigma2-doku/en/epg/grundlagen/#save-epg');
  const de = languageUrl(current, 'de', '/enigma2-doku', 'fr');
  assert.equal(de.pathname, '/enigma2-doku/de/epg/grundlagen/');
  assert.equal(de.search + de.hash, '');
});

test('unrelated paths cannot be mistaken for chapters with the same prefix', () => {
  for (const path of ['/enigma2-doku-old/de/chapter/', '/outside/en/chapter/', '/enigma2-doku/_astro/image.png']) {
    assert.equal(localePath(path, 'en', '/enigma2-doku'), '/enigma2-doku/en/');
  }
});

test('explicit native or invalid selections override remembered translation', () => {
  const url = new URL('https://example.org/en/');
  assert.equal(requestedLanguage(url, null), null);
  assert.equal(requestedLanguage(url, 'fr'), 'fr');
  url.searchParams.set('translate', 'ar');
  assert.equal(requestedLanguage(url, 'fr'), 'ar');
  for (const value of ['off', 'de', 'en', '', 'auto', '__proto__', 'constructor', 'fr; Path=/']) {
    url.searchParams.set('translate', value);
    assert.equal(requestedLanguage(url, 'fr'), null);
    assert.equal(isTranslationLanguage(value), false);
  }
});

test('reset works on Pages, custom hosts and root deployments without forum-specific domains', () => {
  for (const host of ['openatv.github.io', 'docs.example.org', '127.0.0.1']) {
    const cookies = resetCookies(host, '/enigma2-doku/');
    assert.ok(cookies.some(cookie => cookie === 'googtrans=; Max-Age=0; Path=/; SameSite=Lax'));
    assert.ok(cookies.some(cookie => cookie.includes('Path=/enigma2-doku;')));
    assert.ok(cookies.some(cookie => cookie.includes('Path=/enigma2-doku/;')));
    assert.ok(cookies.every(cookie => cookie.startsWith('googtrans=; Max-Age=0;')));
    assert.ok(cookies.every(cookie => !cookie.includes('Domain=') || cookie.endsWith(`Domain=${host}`) || cookie.endsWith(`Domain=.${host}`)));
  }
  assert.ok(resetCookies('docs.example.org', '/').every(cookie => cookie.includes('Path=/;')));
});
