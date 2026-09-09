---
title: "Timeshift"
description: "Timeshift: Optionen, Originalhilfe und Menüweg in openATV."
editUrl: false
pagefind: true
---

Diese Referenz enthält die vorhandenen Hilfetexte aus openATV. Je nach geöffnetem Dialog und gewählten Optionen ist nur ein Teil der Einträge sichtbar.

## Wo finde ich das?

**Hauptmenü → Einstellungen → Aufnahmen / Timeshift → Timeshift**

Die Suche findet auch die englischen Bezeichnungen und technischen Schlüssel. [Zur Übersicht](../../)

<h2 id="option-f4b991d30c86">Timeshiftverzeichnis</h2>

**English:** Time shift buffer location

<p>Das Standardverzeichnis für den Timeshiftpuffer auswählen.<br />OK drücken, um ein neues Verzeichnis hinzuzufügen.<br />Am Steuerkreuz Links/Rechts benutzen, um ein bestehendes Verzeichnis auszuwählen.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.timeshift.path`

Bedienebene: Experte.

</details>

<h2 id="option-1001c15ac73d">Automatisch Timeshift starten nach</h2>

**English:** Automatically start time shift after

<p>Wenn aktiviert, startet Timeshift automatisch nach der vorgegebenen Zeit.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.timeshift.startDelay`

Bedienebene: Fortgeschritten.

</details>

<h2 id="option-3d399f679151">Automatische Aufnahme aktivieren</h2>

**English:** Enable Autorecord

<p>&#x27;Ja&#x27; aktiviert die automatische Aufnahme für Timeshift im Hintergrund.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.timeshift.autorecord`

Bedienebene: Experte.

</details>

<h2 id="option-9af01ce2ab1c">Warnung anzeigen, wenn Timeshift gestoppt wird</h2>

**English:** Show warning when time shift is stopped

<p>Bei &#x27;Ja&#x27; wird eine Warnung angezeigt und Timeshift kann gestoppt oder fortgeführt werden.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.timeshift.check`

Bedienebene: Fortgeschritten.

</details>

<h2 id="option-ccf359c3ea69">Statusmeldungen beim Umschalten auf Live-TV anzeigen</h2>

**English:** Show status messages on switch to live TV

<p>Bei &#x27;Ja&#x27; werden Status- oder Fehlermeldungen angezeigt.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.timeshift.showLiveTVMsg`

Bedienebene: Experte.

</details>

<h2 id="option-505dad2e81a4">Timeshift speichern beim Umschalten</h2>

**English:** Time shift save action on zap

<p>Auswählen, wie sich Timeshift verhalten bzw. was mit der Timeshiftdatei nach dem Umschalten geschehen soll.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.timeshift.favoriteSaveAction`

Bedienebene: Experte.

</details>

<h2 id="option-732c092724a2">Timeshift während Aufnahme beenden</h2>

**English:** Stop time shift while recording

<p>Bei &#x27;Ja&#x27; wird Timeshift beendet, wenn eine Aufnahme läuft. Ratsam beim Verwenden eines USB-Sticks.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.timeshift.stopWhileRecording`

Bedienebene: Experte.

</details>

<h2 id="option-03f2d7b2a685">Bei Timeshift mittels Plugins nicht zur Liveübertragung springen</h2>

**English:** Skip jumping to live while timeshifting with plugins

<p>Bei &#x27;Ja&#x27; kann Timeshift mit alternativen Audio-Plugins verwendet werden.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.timeshift.skipReturnToLive`

Bedienebene: Experte.

</details>

<h2 id="option-9376181062b5">Timeshift-Suchleiste bei Timeshift verwenden</h2>

**English:** Use time shift SeekBar while time shifting

<p>Bei &#x27;Ja&#x27; kann innerhalb der Suchleiste zu jedem beliebigen Zeitpunkt vor- oder zurückgesprungen werden.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.timeshift.showInfoBar`

Bedienebene: Experte.

</details>

<h2 id="option-20f4871c1f30">Timeshift zwischenspeichern (in Stunden)</h2>

**English:** Time shift buffer limit

<p>Ältere Dateien im Timeshiftverzeichnis nach eingestellter Zeit automatisch löschen.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.timeshift.maxHours`

Bedienebene: Experte.

</details>

<h2 id="option-62490b332476">Timeshift auf eine Anzahl von Sendungen begrenzen</h2>

**English:** Time shift event limit

<p>&#x27;Puffer in Stunden&#x27; oder &#x27;Anzahl der letzten Ereignisse&#x27;. Priorität beim Löschen älterer Timeshiftdateien hat die zuerst eingetretene Bedingung.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.timeshift.maxEvents`

Bedienebene: Experte.

</details>

<h2 id="option-f2c83bf1398a">Timeshiftüberprüfung auf ältere Dateien (in Minuten)</h2>

**English:** Time shift checking for older files

<p>Zusätzlich zur Überprüfung bei Beginn eines Ereignisses kann diese Einstellung verwendet werden, damit die Prüfbedingungen auf das Pufferlimit und den freien Speicherplatz früher erkannt werden.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.timeshift.checkEvents`

Bedienebene: Experte.

</details>

<h2 id="option-57b7aba07f77">Timeshiftüberprüfung auf freien Speicherplatz</h2>

**English:** Time shift checking for free space

<p>Wenn der freie Speicherplatz kleiner als der eingestellte Wert ist, wird versucht, die alten Timeshiftdateien zu löschen.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.timeshift.checkFreeSpace`

Bedienebene: Experte.

</details>

<h2 id="option-b7cd8d893345">Timeshiftpuffer beim Umschalten löschen</h2>

**English:** Time shift buffer delete after zap

<p>Bei &#x27;Nein&#x27; bleiben Timeshiftaufnahmen nach dem Umschalten oder Beenden im Timeshiftverzeichnis erhalten.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.timeshift.deleteAfterZap`

Bedienebene: Experte.

</details>

<h2 id="option-bcfa23408e09">Timeshiftdateien sendungsbasiert aufteilen</h2>

**English:** Time shift event based file splitting

<p>Bei &#x27;Nein&#x27; wird nur eine Datei als Puffer verwendet. Es wird empfohlen, &#x27;Timeshiftüberprüfung auf ältere Dateien (in Minuten)&#x27; und &#x27;Timeshiftüberprüfung auf freien Speicherplatz&#x27; anzupassen.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.timeshift.fileSplitting`

Bedienebene: Experte.

</details>

<h2 id="option-6eafe3dc04c5">Streaming-Wiederstellungsverzögerung</h2>

**English:** Streaming recovery delay

<p>Die Dauer eingeben, die nach einem Streamingfehler zum Streamingpuffer hinzugefügt werden soll. Dieser zusätzliche Puffer kann dazu beitragen, weitere Streamingprobleme aufgrund von unzureichendem Pufferspeicherplatz zu vermeiden.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.timeshift.recoveryBufferDelay`

Bedienebene: Experte.

</details>

<h2 id="option-59d60ab91c37">Hardware-Latenzkorrektur</h2>

**English:** Hardware latency correction

<p>Die Kompensation der Hardware-Pufferlatenz für DM9x0 anpassen.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.timeshift.hwLatencyCorrection`

Bedienebene: Experte.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

---

Quelle: [openATV setup.xml](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/data/setup.xml) · `fdc9347241`.
