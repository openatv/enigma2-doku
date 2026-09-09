---
title: "Skinauswahl"
description: "Skinauswahl: Optionen, Originalhilfe und Menüweg in openATV."
editUrl: false
pagefind: true
---

Diese Referenz enthält die vorhandenen Hilfetexte aus openATV. Je nach geöffnetem Dialog und gewählten Optionen ist nur ein Teil der Einträge sichtbar.

## Wo finde ich das?

Der direkte Menüweg ist in dieser Grundfassung noch nicht zugeordnet. Suche im jeweiligen Funktionsdialog nach **Skinauswahl**.

Die Suche findet auch die englischen Bezeichnungen und technischen Schlüssel. [Zur Übersicht](../../)

<h2 id="option-07dcd174cb7a">Skin der Bedienoberfläche</h2>

**English:** GUI Skin

<p>Skin für die Bedienoberfläche auswählen und mit GRÜN aktivieren.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.skin.guiSkin`

Bedienebene: Einfach.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-397a548c72d6">Displayskin</h2>

**English:** LCD/Front panel

<p>Displayskin auswählen und mit GRÜN aktivieren.</p>

**Nach Änderung:** GUI-Neustart erforderlich.

<details>
<summary>Zuordnung & Hinweise</summary>

`config.skin.lcdSkin`

Bedienebene: Einfach.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-d4175eea95c5">Ersatzschriftart</h2>

**English:** Fallback Font

<p>Die Ersatzschriftart auswählen.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.skin.FallbackFont`

Bedienebene: Einfach.

</details>

<h2 id="option-21965a007285">Senderliste / Bildschirm</h2>

**English:** Channel Selection Screen

<p>Die Darstellung der Senderliste anhand der Skinoptionen auswählen.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.channelSelection.screenStyle`

Bedienebene: Einfach.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-844c245e13f1">Senderliste / Liste</h2>

**English:** Channel Selection List

<p>Die Darstellung für Informationen in der Senderliste anhand der Skinoptionen auswählen.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.channelSelection.widgetStyle`

Bedienebene: Einfach.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-95f698115960">Auto-Refresh</h2>

**English:** AutoRefresh

<p>Auto-Refresh der Vorlagen aktivieren.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.skin.autorefresh`

Bedienebene: Einfach.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-af9477d85472">Schnelles Neuladen des Skins</h2>

**English:** Fast Skin Reload

<p>Den Skin neu laden ohne die Benutzeroberfläche beim Skinwechsel neu zu starten.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.usage.fastSkinReload`

Bedienebene: Einfach.

</details>

---

Quelle: [openATV setup.xml](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/data/setup.xml) · `fdc9347241`.
