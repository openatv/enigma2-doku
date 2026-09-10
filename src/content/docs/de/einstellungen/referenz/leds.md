---
title: "LED-Einstellungen"
description: "LED-Einstellungen: Optionen, Originalhilfe und Menüweg in OpenATV."
editUrl: false
pagefind: true
---

Praktische Erklärung: [Bedienung / Oberfläche – LED Settings](../../../bedienung/display-led/).

Diese Referenz enthält die vorhandenen Hilfetexte aus OpenATV. Je nach geöffnetem Dialog und gewählten Optionen ist nur ein Teil der Einträge sichtbar.

## Wo finde ich das?

**Hauptmenü → Einstellungen → Bedienung / Oberfläche → LEDs der Vorderseite einstellen**

Die Suche findet auch die englischen Bezeichnungen und technischen Schlüssel. [Zur Übersicht](../../)

<h2 id="option-d7dc7c659f9e">LED-Farbe</h2>

**English:** LED Running color

<p>Die Farbe der Power-LED für den Normalbetrieb auswählen. Die LED kann aber auch deaktiviert oder ausgeschaltet werden.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.fp.led.default_color`

Bedienebene: Fortgeschritten.

</details>

<h2 id="option-cf0e547f592c">LED-Helligkeit</h2>

**English:** LED Running brightness

<p>Die Helligkeit der Power-LED für den Normalbetrieb auswählen.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.fp.led.default_brightness`

Bedienebene: Fortgeschritten.

</details>

<h2 id="option-9dab1b24ae37">LED-Standby-Farbe</h2>

**English:** LED Standby color

<p>Die Farbe der vorderseitigen Power-LED für den Standby-Modus des Receivers auswählen. Mit dieser Option lässt sich die LED auch deaktivieren bzw. ausschalten.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.fp.led.standby_color`

Bedienebene: Fortgeschritten.

</details>

<h2 id="option-10988823911d">LED-Helligkeit im Standby</h2>

**English:** LED Standby brightness

<p>Die Helligkeit der Power-LED für den Standy-Modus auswählen.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.fp.led.standby_brightness`

Bedienebene: Fortgeschritten.

</details>

<h2 id="option-2311559e80ec">LED-Deep-Standby-Farbe</h2>

**English:** LED Deep Standby color

<p>Die Farbe der vorderseitigen Power-LED für den Deep-Standby-Modus des Receivers auswählen.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.fp.led.shutdown_color`

Bedienebene: Fortgeschritten.

</details>

---

Quelle: [OpenATV setup.xml](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/data/setup.xml) · `fdc9347241`.
