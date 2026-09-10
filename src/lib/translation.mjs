import languages from '../../data/translation-languages.json' with { type: 'json' };

export { languages };
export const translationParam = 'translate';
/** @param {unknown} value */
export function isTranslationLanguage(value) {
  return typeof value === 'string' && Object.hasOwn(languages, value);
}
/** @param {string} base */
export function cleanBase(base) { return '/' + base.replace(/^\/+|\/+$/g, ''); }
/** @param {string} pathname @param {'de' | 'en'} language @param {string} base */
export function localePath(pathname, language, base) {
  const prefix = cleanBase(base).replace(/\/$/, '');
  const path = pathname.startsWith(prefix + '/') ? pathname.slice(prefix.length) : '/';
  const match = path.match(/^\/(?:de|en)(\/.*)?$/);
  return `${prefix}/${language}${match?.[1] || '/'}`;
}
/** Preserve English anchors; translated DE headings have different IDs.
 * @param {string | URL} current @param {'de' | 'en'} language @param {string} base @param {string | null} target
 */
export function languageUrl(current, language, base, target = null) {
  const url = new URL(current);
  const path = localePath(url.pathname, language, base);
  if (path !== url.pathname) url.hash = '';
  url.pathname = path;
  url.searchParams.delete(translationParam);
  if (language === 'en' && isTranslationLanguage(target)) url.searchParams.set(translationParam, /** @type {string} */ (target));
  return url;
}
/** A shared Google cookie alone is never consent to load translation here.
 * @param {URL} url @param {string | null} saved
 */
export function requestedLanguage(url, saved) {
  const value = url.searchParams.has(translationParam) ? url.searchParams.get(translationParam) : saved;
  return isTranslationLanguage(value) ? value : null;
}
/** Expire only Google's translation cookie, including host/domain variants.
 * @param {string} hostname @param {string} base
 */
export function resetCookies(hostname, base) {
  const paths = new Set(['/', cleanBase(base), cleanBase(base).replace(/\/$/, '') + '/']);
  const domains = ['', hostname, '.' + hostname];
  return [...paths].flatMap(path => domains.map(domain =>
    `googtrans=; Max-Age=0; Path=${path}; SameSite=Lax${domain ? '; Domain=' + domain : ''}`));
}
