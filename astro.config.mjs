import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: process.env.SITE_URL || 'https://openatv.github.io',
  base: process.env.BASE_PATH || '/enimga2-doku',
  output: 'static',
  trailingSlash: 'always',
  integrations: [starlight({
    title: { de: 'OpenATV Handbuch', en: 'OpenATV Handbook' },
    description: 'Enigma2 verstehen. Einstellungen finden. Schritt für Schritt einrichten.',
    logo: { src: './src/assets/openatv-logo.png', alt: 'OpenATV', replacesTitle: true },
    favicon: '/branding/openatv-icon.png',
    defaultLocale: 'de',
    locales: { de: { label: 'Deutsch', lang: 'de' }, en: { label: 'English', lang: 'en' } },
    customCss: ['./src/styles/custom.css'],
    social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/openatv/enimga2-doku' }],
    editLink: { baseUrl: 'https://github.com/openatv/enimga2-doku/edit/main/' },
    sidebar: [
      { label: 'Handbuch', translations: { en: 'Handbook' }, items: [
        { slug: '', label: 'Übersicht', translations: { en: 'Overview' } },
        { slug: 'erste-schritte/ersteinrichtung', label: 'Erste Einrichtung', translations: { en: 'First setup' } },
        { slug: 'erste-schritte/bedienung', label: 'Bedienung & Menüs', translations: { en: 'Controls & menus' } },
        { slug: 'erste-schritte/menue-anpassen', label: 'Menüoptionen & OSD', translations: { en: 'Menu options & OSD' } },
        { slug: 'erste-schritte/infobar', label: 'Infobar verstehen', translations: { en: 'Understand the Infobar' } },
      ] },
      { label: 'Einrichten', translations: { en: 'Set up' }, items: [
        { slug: 'tuner/konfiguration', label: 'Tuner & Sendersuche', translations: { en: 'Tuners & channel scan' } },
        { slug: 'netzwerk/lan', label: 'LAN & IP-Einstellungen', translations: { en: 'LAN & IP settings' } },
        { slug: 'netzwerk/wlan', label: 'WLAN verbinden', translations: { en: 'Connect Wi-Fi' } },
        { slug: 'netzwerk/freigaben', label: 'NAS & Netzwerkfreigaben', translations: { en: 'NAS & network shares' } },
        { slug: 'plugins/installieren', label: 'Plugins installieren', translations: { en: 'Install plugins' } },
        { slug: 'settings/senderlisten', label: 'Settings & Senderlisten', translations: { en: 'Settings & channel lists' } },
        { slug: 'settings/kanalliste', label: 'Kanalliste & Stile', translations: { en: 'Channel list & styles' } },
        { slug: 'epg/grundlagen', label: 'EPG einrichten', translations: { en: 'Set up EPG' } },
      ] },
      { label: 'Nachschlagen', translations: { en: 'Reference' }, items: [
        { slug: 'einstellungen', label: 'Einstellung finden', translations: { en: 'Find a setting' } },
        { slug: 'hilfe/probleme', label: 'Häufige Fragen', translations: { en: 'Common questions' } },
      ] },
      { label: 'Erweitern', translations: { en: 'Extend' }, items: [
        { slug: 'skins', label: 'Skins', translations: { en: 'Skins' } },
        { label: 'MetrixHD', collapsed: true, items: [
          { slug: 'skins/metrixhd', label: 'MyMetrixLite – Einstieg', translations: { en: 'MyMetrixLite – getting started' } },
          { slug: 'skins/metrixhd/aufloesung', label: 'HD, FHD & WQHD', translations: { en: 'HD, FHD & WQHD' } },
          { slug: 'skins/metrixhd/wetter', label: 'Wetter', translations: { en: 'Weather' } },
          { slug: 'skins/metrixhd/skinparts', label: 'Skinparts', translations: { en: 'Skinparts' } },
          { slug: 'skins/metrixhd/gestaltung', label: 'Schriften & Farben', translations: { en: 'Fonts & colours' } },
          { slug: 'skins/metrixhd/sonstiges', label: 'Infobar & weitere Optionen', translations: { en: 'Infobar & more options' } },
        ] },
        { slug: 'addons', label: 'Add-ons', translations: { en: 'Add-ons' } },
        { slug: 'anhaenge', label: 'Anhänge', translations: { en: 'Appendices' } },
      ] },
    ],
    credits: false,
    disable404Route: true,
    pagination: true,
    tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 3 },
  })],
});
