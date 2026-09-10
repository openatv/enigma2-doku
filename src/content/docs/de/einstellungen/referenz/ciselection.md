---
title: "Common Interface"
description: "Common Interface: Optionen, Originalhilfe und Menüweg in OpenATV."
editUrl: false
pagefind: true
---

Diese Referenz enthält die vorhandenen Hilfetexte aus OpenATV. Je nach geöffnetem Dialog und gewählten Optionen ist nur ein Teil der Einträge sichtbar.

## Wo finde ich das?

**Hauptmenü → Einstellungen → Entschlüsselung / Jugendschutz → CI-Einstellungen**

Die Suche findet auch die englischen Bezeichnungen und technischen Schlüssel. [Zur Übersicht](../../)

<h2 id="option-946acac5df2d">CI+-Helper*</h2>

**English:** CI+ Helper\*

<p>&#x27;Aktivieren&#x27; auswählen, um den CI+ Helper zu starten.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.cimisc.cihelperenabled`

Bedienebene: Einfach.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-b95257081a97">DVB-CI-Verzögerung</h2>

**English:** DVB CI Delay

<p>DVB-CI-Verzögerung einstellen.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.cimisc.dvbCiDelay`

Bedienebene: Einfach.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-e5773ba30cb3">CI-Bootverzögerung</h2>

**English:** CI Boot Delay

<p>CI-Boot-Verzögerung einstellen.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.cimisc.bootDelay`

Bedienebene: Einfach.

</details>

---

Quelle: [OpenATV setup.xml](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/data/setup.xml) · `fdc9347241`.

Grundlagen und Grenzen: [CI, CAM und Moduleinstellungen](../../../entschluesselung/ci-cam/).
