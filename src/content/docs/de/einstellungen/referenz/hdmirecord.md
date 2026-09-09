---
title: "HDMI-Aufnahme"
description: "HDMI-Aufnahme: Optionen, Originalhilfe und Menüweg in openATV."
editUrl: false
pagefind: true
---

Diese Referenz enthält die vorhandenen Hilfetexte aus openATV. Je nach geöffnetem Dialog und gewählten Optionen ist nur ein Teil der Einträge sichtbar.

## Wo finde ich das?

**Hauptmenü → Einstellungen → Aufnahmen / Timeshift → HDMI-IN-Aufnahmen**

Die Suche findet auch die englischen Bezeichnungen und technischen Schlüssel. [Zur Übersicht](../../)

<h2 id="option-b114f15b0e70">Bitrate</h2>

<p>Die Bitrate des Videoencoders. Ein größerer Wert verbessert die Qualität, erhöht aber die Dateigröße.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.hdmirecord.bitrate`

Bedienebene: Einfach.

</details>

<h2 id="option-a8ee366aa2b0">Breite</h2>

**English:** Width

<p>Die Breite des Bildes. Die Eingabe wird skaliert, um mit diesem Wert übereinzustimmen.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.hdmirecord.width`

Bedienebene: Einfach.

</details>

<h2 id="option-e5af364459e3">Höhe</h2>

**English:** Height

<p>Die Höhe des Bildes. Die Eingabe wird skaliert, um mit diesem Wert übereinzustimmen.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.hdmirecord.height`

Bedienebene: Einfach.

</details>

<h2 id="option-b126d94c058d">Bildwiederholrate</h2>

**English:** Frame rate

<p>Die Bildrate der Aufnahme. Idealerweise entspricht dies der Bildrate der Quelle oder einem ganzzahligen Vielfachen. Im Zweifelsfall auf 50 einstellen, was mit den meisten Quellen funktionieren sollte.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.hdmirecord.framerate`

Bedienebene: Einfach.

</details>

<h2 id="option-bd45a791d03b">Zeilensprungverfahren</h2>

**English:** Interlaced

<p>In den meisten Fällen sollte dies auf &#x27;Nein&#x27; eingestellt sein. Nur aktivieren, wenn ein ganz bestimmter Bedarf besteht.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.hdmirecord.interlaced`

Bedienebene: Experte.

</details>

<h2 id="option-223fe518bd5d">Seitenverhältnis</h2>

**English:** Aspect ratio

<p>Das Seitenverhältnis der Aufnahme.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.hdmirecord.aspectratio`

Bedienebene: Fortgeschritten.

</details>

---

Quelle: [openATV setup.xml](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/data/setup.xml) · `fdc9347241`.
