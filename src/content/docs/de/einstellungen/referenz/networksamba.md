---
title: "Samba"
description: "Samba: Optionen, Originalhilfe und Menüweg in openATV."
editUrl: false
pagefind: true
---

Diese Referenz enthält die vorhandenen Hilfetexte aus openATV. Je nach geöffnetem Dialog und gewählten Optionen ist nur ein Teil der Einträge sichtbar.

## Wo finde ich das?

**Hauptmenü → Einstellungen → Netzwerk → Samba**

Die Suche findet auch die englischen Bezeichnungen und technischen Schlüssel. [Zur Übersicht](../../)

<h2 id="option-323666c86b4c">Auto-Share aktivieren</h2>

**English:** Enable automatic shares

<p>Bei &#x27;Ja&#x27; wird jeder Datenträger automatisch als Samba-Freigabe erstellt.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.samba.enableAutoShare`

Bedienebene: Einfach.

</details>

<h2 id="option-33ed0ed69d1a">Zugriffsmodus</h2>

**English:** Access mode

<p>Den Zugriffsmodus für die automatisch exportierten Samba-Freigaben auswählen.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.samba.autoShareAccess`

Bedienebene: Einfach.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-e57b0831abfc">Gastzugang erlauben</h2>

**English:** Allow guest access

<p>Wenn aktiviert, wird der Samba-Netzwerkzugriff ohne Passwort zugelassen.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`self.guest`

Bedienebene: Einfach.

</details>

<h2 id="option-0033a4c1d1ea">Name der Arbeitsgruppe</h2>

**English:** Workgroup name

<p>Den Namen der Arbeitsgruppe eingeben, die dieser Receiver für Samba-basierte Verbindungen verwenden soll. (Standard ist &#x27;WORKGROUP&#x27;.)</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`self.workgroup`

Bedienebene: Einfach.

</details>

---

Quelle: [openATV setup.xml](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/data/setup.xml) · `fdc9347241`.
