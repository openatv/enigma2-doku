import { languages, isTranslationLanguage, cleanBase, languageUrl, localePath, requestedLanguage, resetCookies, translationParam } from '../lib/translation.mjs';

declare global {
  interface Window {
    google?: { translate?: { TranslateElement: new (options: { pageLanguage: string; autoDisplay: boolean }, id: string) => unknown } };
    openatvTranslateReady?: () => void;
  }
}

const controls = document.querySelector<HTMLElement>('[data-translation-controls]');
if (controls) initialize(controls.dataset.base || '/');

function initialize(base: string) {
  const preferenceKey = `openatv-handbook-translation:${cleanBase(base)}`;
  const current = new URL(location.href);
  let saved: string | null = null;
  try { saved = sessionStorage.getItem(preferenceKey); } catch { /* URL still carries the selection. */ }
  const target = requestedLanguage(current, saved);
  function remember(value: string | null) {
    try {
      if (value) sessionStorage.setItem(preferenceKey, value);
      else sessionStorage.removeItem(preferenceKey);
    } catch { /* Navigation also carries the explicit language. */ }
  }
  function clearGoogle() {
    for (const cookie of resetCookies(location.hostname, base)) document.cookie = cookie;
  }
  function openOriginal(language: 'de' | 'en') {
    remember(null);
    clearGoogle();
    location.assign(languageUrl(location.href, language, base));
  }
  document.querySelectorAll<HTMLSelectElement>('[data-native-language]').forEach(select => {
    if (target) select.value = ''; // English must remain selectable while translating its document.
    select.addEventListener('change', () => openOriginal(select.value === 'de' ? 'de' : 'en'));
  });
  document.querySelectorAll<HTMLSelectElement>('[data-machine-language]').forEach(select => {
    select.value = target || '';
    select.addEventListener('change', () => {
      if (!isTranslationLanguage(select.value)) return;
      remember(select.value);
      // A full English document load selects English screenshots before Google runs.
      clearGoogle();
      location.assign(languageUrl(location.href, 'en', base, select.value));
    });
  });
  document.querySelectorAll<HTMLAnchorElement>('[data-native-link]').forEach(link => {
    link.addEventListener('click', event => {
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey || event.button !== 0) return;
      event.preventDefault();
      openOriginal(link.dataset.nativeLink === 'de' ? 'de' : 'en');
    });
  });
  document.addEventListener('keydown', event => {
    if (event.key !== 'Escape') return;
    const menus = document.querySelectorAll<HTMLDetailsElement>('.machine-languages[open]');
    if (menus.length) event.preventDefault(); // Keep the surrounding mobile navigation open.
    menus.forEach(menu => {
      menu.open = false;
      menu.querySelector('summary')?.focus();
    });
  });
  document.addEventListener('click', event => {
    document.querySelectorAll<HTMLDetailsElement>('.machine-languages[open]').forEach(menu => {
      if (event.target instanceof Node && !menu.contains(event.target)) menu.open = false;
    });
  });
  window.addEventListener('pageshow', event => {
    // Back/forward cache must not resurrect a translated DOM after Original was chosen.
    if (event.persisted) location.reload();
  });
  if (!target) {
    remember(null);
    clearGoogle();
    if (current.searchParams.has(translationParam)) {
      current.searchParams.delete(translationParam);
      history.replaceState(null, '', current);
    }
    return; // No external script, image or request on untouched DE/EN pages.
  }
  remember(target);
  if (current.pathname !== localePath(current.pathname, 'en', base)) {
    location.replace(languageUrl(current, 'en', base, target));
    return;
  }
  // Google's toolbar shifts body content. Fixed Starlight controls need the same offset.
  function syncToolbarOffset() {
    const offset = Math.max(0, parseFloat(document.body.style.top) || 0);
    document.documentElement.style.setProperty('--atv-translation-offset', `${offset}px`);
  }
  new MutationObserver(syncToolbarOffset).observe(document.body, { attributes: true, attributeFilter: ['style'] });
  syncToolbarOffset();
  current.searchParams.set(translationParam, target);
  history.replaceState(null, '', current);
  // Keep the query in links, including when sessionStorage is blocked or a link is shared.
  function carryLanguage(link: HTMLAnchorElement) {
    if (link.hasAttribute('data-native-link') || !link.hasAttribute('href')) return;
    const url = new URL(link.href, location.href);
    if (url.origin === location.origin && url.pathname === localePath(url.pathname, 'en', base)) {
      url.searchParams.set(translationParam, target!);
      link.href = url.href;
    }
  }
  document.querySelectorAll<HTMLAnchorElement>('a[href]').forEach(carryLanguage);
  document.querySelectorAll('site-search').forEach(search => {
    search.setAttribute('lang', 'en');
    search.setAttribute('dir', 'ltr');
    // Shared and middle-clicked result links also retain the selected language.
    new MutationObserver(() => search.querySelectorAll<HTMLAnchorElement>('a[href]').forEach(carryLanguage))
      .observe(search, { childList: true, subtree: true });
  });
  document.addEventListener('click', event => {
    const link = event.target instanceof Element ? event.target.closest<HTMLAnchorElement>('a[href]') : null;
    if (link) carryLanguage(link); // Also handles Pagefind's dynamically created result links.
  }, true);
  document.querySelectorAll('pre, code, kbd, .site-title, site-search, .pagefind-ui').forEach(element => {
    element.classList.add('notranslate');
    element.setAttribute('translate', 'no');
  });
  const notice = document.querySelector<HTMLElement>('[data-translation-notice]');
  const status = document.querySelector<HTMLElement>('[data-translation-status]');
  const retry = document.querySelector<HTMLButtonElement>('[data-translation-retry]');
  if (notice) notice.hidden = false;
  let loading = false;
  async function translate() {
    if (loading) return;
    loading = true;
    if (retry) retry.hidden = true;
    if (status) status.textContent = 'Loading automatic translation from English…';
    clearGoogle();
    try {
      // Pagefind chooses its index from <html lang> on first use. Initialise it
      // while this is still the English document, before Google changes lang.
      if (!import.meta.env.DEV) {
        try {
          const path = `${cleanBase(base).replace(/\/$/, '')}/pagefind/pagefind.js`;
          const pagefind = await import(/* @vite-ignore */ path);
          await pagefind.init();
        } catch (error) { console.warn('English search could not be initialised', error); }
      }
      const combo = await loadGoogle();
      if (![...combo.options].some(option => option.value === target)) throw new Error('Language unavailable');
      // Explicitly override any source/target inherited from another Google widget.
      document.cookie = `googtrans=/en/${target}; Path=${cleanBase(base)}; SameSite=Lax${location.protocol === 'https:' ? '; Secure' : ''}`;
      if (status) status.textContent = `Automatic translation from English: ${languages[target as keyof typeof languages]}`;
      combo.value = target!;
      combo.dispatchEvent(new Event('change', { bubbles: true }));
      await waitForTranslation(target!);
    } catch {
      if (status) status.textContent = 'Translation could not be loaded. The English original is still available. Try again or check whether Google Translate is blocked.';
      if (retry) retry.hidden = false;
    } finally { loading = false; }
  }
  retry?.addEventListener('click', translate);
  void translate();
}

function waitForTranslation(language: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const root = document.documentElement;
    const observer = new MutationObserver(check);
    const timer = setTimeout(() => { observer.disconnect(); reject(new Error('Translation timed out')); }, 20000);
    function check() {
      if (root.lang !== language || !root.matches('.translated-ltr, .translated-rtl')) return;
      observer.disconnect();
      clearTimeout(timer);
      // Starlight marks the main content with its source language/direction, too.
      const main = document.querySelector('main');
      if (main) {
        main.lang = language;
        main.dir = root.classList.contains('translated-rtl') ? 'rtl' : 'ltr';
      }
      resolve();
    }
    observer.observe(root, { attributes: true, attributeFilter: ['lang', 'class'] });
    check();
  });
}

function loadGoogle(): Promise<HTMLSelectElement> {
  return new Promise((resolve, reject) => {
    const id = 'openatv-google-translate';
    let widget = document.getElementById(id);
    if (!widget) {
      widget = document.createElement('div');
      widget.id = id;
      widget.hidden = true;
      widget.className = 'notranslate';
      document.body.append(widget);
    }
    const deadline = Date.now() + 20000;
    let ended = false;
    let timer: ReturnType<typeof setTimeout>;
    function finish(error?: Error, combo?: HTMLSelectElement) {
      if (ended) return;
      ended = true;
      clearTimeout(timer);
      if (error) reject(error);
      else resolve(combo!);
    }
    function ready() {
      if (ended) return;
      const combo = widget!.querySelector<HTMLSelectElement>('select.goog-te-combo');
      if (combo?.options.length) finish(undefined, combo);
      else if (Date.now() >= deadline) finish(new Error('Translation timed out'));
      else timer = setTimeout(ready, 150);
    }
    window.openatvTranslateReady = () => {
      if (ended) return;
      if (!widget!.querySelector('select') && window.google?.translate?.TranslateElement) {
        new window.google.translate.TranslateElement({ pageLanguage: 'en', autoDisplay: false }, id);
      }
    };
    if (window.google?.translate?.TranslateElement) window.openatvTranslateReady();
    else {
      document.getElementById('openatv-google-loader')?.remove();
      const script = document.createElement('script');
      script.id = 'openatv-google-loader';
      script.src = 'https://translate.google.com/translate_a/element.js?cb=openatvTranslateReady';
      script.async = true;
      script.onerror = () => finish(new Error('Translation script blocked'));
      document.body.append(script);
    }
    ready();
  });
}
