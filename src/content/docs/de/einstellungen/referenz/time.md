---
title: "Zeit"
description: "Zeit: Optionen, Originalhilfe und Menüweg in openATV."
editUrl: false
pagefind: true
---

Diese Referenz enthält die vorhandenen Hilfetexte aus openATV. Je nach geöffnetem Dialog und gewählten Optionen ist nur ein Teil der Einträge sichtbar.

## Wo finde ich das?

**Hauptmenü → Einstellungen → System → Zeit**

Die Suche findet auch die englischen Bezeichnungen und technischen Schlüssel. [Zur Übersicht](../../)

<h2 id="option-28495fd3edec">Zeitzonengebiet</h2>

**English:** Time zone area

<p>Die Zeitzone oder Region auswählen.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.timezone.area`

Bedienebene: Einfach.

</details>

<h2 id="option-1945139337fc">Zeitzone</h2>

**English:** Time zone

<p>Zeitzone innerhalb der Region auswählen.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.timezone.val`

Bedienebene: Einfach.

</details>

<h2 id="option-2f0d1aaf4050">Zeitsynchronisierung mit</h2>

**English:** Sync time using

<p>Auswählen, ob die Zeitsynchronisierung über die Transponderzeit oder über einen NTP-Server erfolgen soll.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.misc.SyncTimeUsing`

Bedienebene: Einfach.

</details>

<h2 id="option-eaec3eb7ea8d">NTP-Server</h2>

**English:** NTP server

<p>Den NTP-Server zur Zeitsynchronisierung auswählen.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.misc.NTPserver`

Bedienebene: Einfach.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-cbeb5821c09e">Synchronisierungsintervall mit NTP-Server</h2>

**English:** Sync NTP every

<p>Hier kann das Synchronisierungsintervall des NTP-Servers eingestellt werden.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.misc.useNTPminutes`

Bedienebene: Einfach.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-ec083097f2d3">Datumsformat</h2>

**English:** Date style

<p>Das Format für das Datum auswählen. &#x27;T&#x27;/&#x27;TT&#x27; ist der Tag, &#x27;M&#x27;/&#x27;MM&#x27; der Monat. Bei &#x27;TT&#x27; und &#x27;MM&#x27; wird einstelligen Werten eine &#x27;0&#x27; vorangestellt.<br />Nicht jeder Skin unterstützt jede Einstellung.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.usage.date.dayfull`

Bedienebene: Einfach.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-e31189e925f6">Zeitformat</h2>

**English:** Time style

<p>Das Format für die Uhrzeit auswählen. &#x27;H&#x27;/&#x27;HH&#x27; zeigt sie im 24-Stunden-Format, &#x27;h&#x27;/&#x27;hh&#x27; im 12-Stunden-Format an. Bei &#x27;HH&#x27; oder &#x27;hh&#x27; wird einstelligen Werten eine &#x27;0&#x27; vorangestellt.<br />Nicht jeder Skin unterstützt jede Einstellung.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.usage.time.long`

Bedienebene: Einfach.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

---

Quelle: [openATV setup.xml](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/data/setup.xml) · `fdc9347241`.
