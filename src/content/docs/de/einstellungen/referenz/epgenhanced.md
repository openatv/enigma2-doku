---
title: "Einzel-EPG"
description: "Einzel-EPG: Optionen, Originalhilfe und Menüweg in openATV."
editUrl: false
pagefind: true
---

Diese Referenz enthält die vorhandenen Hilfetexte aus openATV. Je nach geöffnetem Dialog und gewählten Optionen ist nur ein Teil der Einträge sichtbar.

## Wo finde ich das?

**Hauptmenü → Einstellungen → EPG → Einzel-EPG**

Die Suche findet auch die englischen Bezeichnungen und technischen Schlüssel. [Zur Übersicht](../../)

<h2 id="option-a81c617b21bd">Sendervorschaumodus</h2>

**English:** Channel preview mode

<p>Wenn aktiviert, wird mit OK im Hintergrund auf den markierten Sender umgeschaltet. Ein zweites OK beendet den EPG und zeigt diesen Sender, EXIT dagegen beendet den EPG und schaltet zum ursprünglichen Sender zurück.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.epgselection.enhanced_preview_mode`

Bedienebene: Experte.

</details>

<h2 id="option-19383dd13b32">Sender ohne EPG überspringen</h2>

**English:** Skip empty services

<p>Bei &#x27;Ja&#x27; werden Sender ohne EPG nicht angezeigt.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.epgselection.overjump`

Bedienebene: Experte.

</details>

<h2 id="option-2d11dba51a00">Liste sortieren nach</h2>

**English:** Sort list by

<p>Die Liste kann nach Zeit oder alphanumerisch sortiert werden.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.epgselection.sort`

Bedienebene: Experte.

</details>

<h2 id="option-db00453cd8b2">Taste OK kurz</h2>

**English:** OK button (short)

<p>Auswählen, was die Taste bewirken soll.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.epgselection.enhanced_ok`

Bedienebene: Experte.

</details>

<h2 id="option-ccbda5a55f4e">Taste OK lang</h2>

**English:** OK button (long)

<p>Auswählen, was die Taste bewirken soll.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.epgselection.enhanced_oklong`

Bedienebene: Experte.

</details>

<h2 id="option-5a25f4c8b18b">Anzahl der Zeilen</h2>

**English:** Number of rows

<p>Die Anzahl der anzuzeigenden Zeilen einstellen.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.epgselection.enhanced_itemsperpage`

Bedienebene: Experte.

</details>

<h2 id="option-c3cd051f34f2">Schriftgröße für Sendungsnamen</h2>

**English:** Event font size

<p>Die Schriftgröße relativ zur Skingröße einstellen, so dass diese bei 1 um 1 Punktgröße zunimmt und bei -1 um 1 Punktgröße abnimmt.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.epgselection.enhanced_eventfs`

Bedienebene: Experte.

</details>

---

Quelle: [openATV setup.xml](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/data/setup.xml) · `fdc9347241`.
