---
title: "Fernbedienungseinstellungen"
description: "Fernbedienungseinstellungen: Optionen, Originalhilfe und Menüweg in openATV."
editUrl: false
pagefind: true
---

Diese Referenz enthält die vorhandenen Hilfetexte aus openATV. Je nach geöffnetem Dialog und gewählten Optionen ist nur ein Teil der Einträge sichtbar.

## Wo finde ich das?

**Hauptmenü → Einstellungen → Bedienung / Oberfläche → Fernbedienungseinstellungen**

Die Suche findet auch die englischen Bezeichnungen und technischen Schlüssel. [Zur Übersicht](../../)

<h2 id="option-2993a2d6635d">Tastaturbelegung *</h2>

**English:** Use key map \*

<p>Die aktuelle Tastaturbelegungsdatei konfigurieren.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.usage.keymap`

Bedienebene: Experte.

</details>

<h2 id="option-20fe7f09b9be">Ausschalttaste</h2>

**English:** Action on short POWER button press

<p>Auswählen, was kurzes Drücken der Ausschalttaste bewirken soll.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.usage.on_short_powerpress`

Bedienebene: Fortgeschritten.

</details>

<h2 id="option-3949ee980fea">Ausschalttaste länger gedrückt</h2>

**English:** Action on long POWER button press

<p>Auswählen, was langes Drücken der Ausschalttaste bewirken soll.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.usage.on_long_powerpress`

Bedienebene: Fortgeschritten.

</details>

<h2 id="option-6de6328debb6">Taste EPG</h2>

**English:** EPG button mode

<p>Auswählen, was die Taste EPG bewirken soll.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.plisettings.PLIEPG_mode`

Bedienebene: Einfach.

</details>

<h2 id="option-99c3f6743b59">Taste INFO</h2>

**English:** INFO button mode

<p>Auswählen, was die Taste INFO (HELP bei manchen Receivern) bewirken soll.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.plisettings.PLIINFO_mode`

Bedienebene: Einfach.

</details>

<h2 id="option-3ba4d2c15372">Taste OK</h2>

**English:** OK button mode

<p>Auswählen, was die Taste OK bewirken soll.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.usage.okbutton_mode`

Bedienebene: Einfach.

</details>

<h2 id="option-808ec11ed05c">Taste GRÜN – Unterkanalmodus</h2>

**English:** Subservice mode (GREEN button)

<p>Auswählen, ob Unterkanäle aktiviert werden sollen.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.usage.subservice`

Bedienebene: Einfach.

</details>

<h2 id="option-6e146c87083c">Grafischen Infoleisten-EPG aufrufen</h2>

**English:** QuickEPG mode

<p>Auswählen, wie der grafische Infoleisten-EPG aufgerufen werden soll.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.plisettings.InfoBarEpg_mode`

Bedienebene: Einfach.

</details>

<h2 id="option-e539f508517b">Taste TV</h2>

**English:** TV button mode

<p>Auswählen, was die Taste TV bewirken soll.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.usage.tvradiobutton_mode`

Bedienebene: Einfach.

</details>

<h2 id="option-ac4ef7a999c8">Taste Verlauf</h2>

**English:** History buttons mode

<p>Auswählen, was die Tasten &lt; und &gt; bewirken sollen.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.usage.historymode`

Bedienebene: Fortgeschritten.

</details>

<h2 id="option-a283fbfbe1e7">Tasten P+/CH+ und P-/CH-</h2>

**English:** Channel +/- button mode

<p>Auswählen, was die Tasten P+/CH+ und P-/CH- bewirken sollen.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.usage.channelbutton_mode`

Bedienebene: Einfach.

</details>

<h2 id="option-8892bc31b085">Tasten Hoch/Runter</h2>

**English:** UP/DOWN button mode

<p>Auswählen, was die Tasten Hoch/Runter bewirken sollen.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.usage.updownbutton_mode`

Bedienebene: Einfach.

</details>

<h2 id="option-81d4636fb804">Taste BLAU kurz/lang</h2>

**English:** BLUE switch: BLUE/BLUE long

<p>BLAU kurz (Schnellstartmenü) mit BLAU lang (Erweiterungen) tauschen.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.workaround.blueswitch`

Bedienebene: Einfach.

</details>

<h2 id="option-ff8adfc077aa">Emulation &#x27;Langer-Druck&#x27; mit Taste</h2>

**English:** Long press emulation with button

<p>Diese hier eingestellte Taste emuliert einen langen Tastendruck, gefolgt von der ausgewählten Taste (diese Funktion hat Vorrang vor anderen Tastenzuweisungen).</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.usage.long_press_emulation_key`

Bedienebene: Einfach.

</details>

<h2 id="option-fdc11058eca1">Ursprüngliche Links/Rechts-Aktionen</h2>

**English:** Add legacy LEFT/RIGHT actions

<p>&#x27;Ja&#x27; auswählen, um mit LINKS/RECHTS eine Seite Auf/Ab zu blättern, allerdings nur, solange die Tasten LINKS/RECHTS nicht anderweitig belegt sind. Das ermöglicht herkömmliche Navigation, falls diese bevorzugt wird.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.misc.actionLeftRightToPageUpPageDown`

Bedienebene: Einfach.

</details>

---

Quelle: [openATV setup.xml](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/data/setup.xml) · `fdc9347241`.
