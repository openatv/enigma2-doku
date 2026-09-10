---
title: "Infoleisten-EPG"
description: "Infoleisten-EPG: Optionen, Originalhilfe und Menüweg in OpenATV."
editUrl: false
pagefind: true
---

Diese Referenz enthält die vorhandenen Hilfetexte aus OpenATV. Je nach geöffnetem Dialog und gewählten Optionen ist nur ein Teil der Einträge sichtbar.

## Wo finde ich das?

**Hauptmenü → Einstellungen → EPG → Infoleisten-EPG**

Die Suche findet auch die englischen Bezeichnungen und technischen Schlüssel. [Zur Übersicht](../../)

<h2 id="option-27135d78fa89">Anzeigemodus</h2>

**English:** View mode

<p>Das Aussehen vom EPG (Text oder Grafik) einstellen.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.epgselection.infobar_type_mode`

Bedienebene: Experte.

</details>

<h2 id="option-4b455f8fa9d7">Sendervorschaumodus</h2>

**English:** Channel preview mode

<p>Wenn aktiviert, wird mit OK im Hintergrund auf den markierten Sender umgeschaltet. Ein zweites OK beendet den EPG und zeigt diesen Sender, EXIT dagegen beendet den EPG und schaltet zum ursprünglichen Sender zurück.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.epgselection.infobar_preview_mode`

Bedienebene: Experte.

</details>

<h2 id="option-5043add91211">Sender ohne EPG überspringen</h2>

**English:** Skip empty services

<p>Bei &#x27;Ja&#x27; werden Sender ohne EPG nicht angezeigt.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.epgselection.overjump`

Bedienebene: Experte.

</details>

<h2 id="option-345133cc4ce9">Liste sortieren nach</h2>

**English:** Sort list by

<p>Die Liste kann nach Zeit oder alphanumerisch sortiert werden.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.epgselection.sort`

Bedienebene: Experte.

</details>

<h2 id="option-188696ed19da">Taste OK kurz</h2>

**English:** OK button (short)

<p>Auswählen, was die Taste bewirken soll.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.epgselection.infobar_ok`

Bedienebene: Experte.

</details>

<h2 id="option-2da608df70c2">Taste OK lang</h2>

**English:** OK button (long)

<p>Auswählen, was die Taste bewirken soll.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.epgselection.infobar_oklong`

Bedienebene: Experte.

</details>

<h2 id="option-daffe85d8946">Anzahl der Zeilen</h2>

**English:** Number of rows

<p>Die Anzahl der anzuzeigenden Zeilen einstellen.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.epgselection.infobar_itemsperpage`

Bedienebene: Experte.

</details>

<h2 id="option-ef676c7037f8">Schriftgröße für Sendungsnamen</h2>

**English:** Event font size

<p>Die Schriftgröße relativ zur Skingröße einstellen, so dass diese bei 1 um 1 Punktgröße zunimmt und bei -1 um 1 Punktgröße abnimmt.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.epgselection.infobar_eventfs`

Bedienebene: Experte.

</details>

---

Quelle: [OpenATV setup.xml](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/data/setup.xml) · `fdc9347241`.
