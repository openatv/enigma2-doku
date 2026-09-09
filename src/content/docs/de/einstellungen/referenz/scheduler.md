---
title: "Aufgabeneinstellungen"
description: "Aufgabeneinstellungen: Optionen, Originalhilfe und Menüweg in openATV."
editUrl: false
pagefind: true
---

Diese Referenz enthält die vorhandenen Hilfetexte aus openATV. Je nach geöffnetem Dialog und gewählten Optionen ist nur ein Teil der Einträge sichtbar.

## Wo finde ich das?

Der direkte Menüweg ist in dieser Grundfassung noch nicht zugeordnet. Suche im jeweiligen Funktionsdialog nach **Aufgabeneinstellungen**.

Die Suche findet auch die englischen Bezeichnungen und technischen Schlüssel. [Zur Übersicht](../../)

<h2 id="option-caa2b0fcac01">Timerart</h2>

**English:** Timer type

<p>Den Typ dieses Timers auswählen.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`self.timerType`

Bedienebene: Einfach.

</details>

<h2 id="option-61c40f9cffe5">Ausführungsbedingung</h2>

**English:** Execution condition

<p>Die Einstellung &#x27;Ohne Rückfrage&#x27; ist das gleiche wie &#x27;Standard&#x27;, aber ohne zusätzliche Bestätigungsabfrage. Alle anderen Abhängigkeiten (z. B. Aufnahmen, Zeitbereich) bleiben bestehen.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`self.timerActiveInStandby`

Bedienebene: Einfach.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-fc0e32715876">Einschlafverzögerung</h2>

**English:** Sleep delay

<p>Die Verzögerung auswählen, bevor der Timer aktiviert wird.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`self.timerSleepDelay`

Bedienebene: Einfach.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-43e2d454c376">Wiederholungstyp</h2>

**English:** Repeat type

<p>Auswählen, ob dieser Timer wiederholt werden soll.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`self.timerAutoSleepRepeat`

Bedienebene: Einfach.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-ab760b3b9bf7">Den aktiven Zeitbereich einschränken</h2>

**English:** Restrict the active time range

<p>Auswählen, ob es ein Zeitfenster geben soll, in dem dieser Timer aktiv sein kann.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`self.timerSleepWindow`

Bedienebene: Einfach.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-6352ee3d2283">Startzeit</h2>

**English:** Start time

<p>Die Zeit auswählen, nach der dieser Timer starten kann.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`self.timerSleepStart`

Bedienebene: Einfach.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-0fb9031000d7">Endzeit</h2>

**English:** End time

<p>Die Zeit auswählen, vor der dieser Timer enden soll.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`self.timerSleepEnd`

Bedienebene: Einfach.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-747396d8bf35">Erweiterte Einstellungen anzeigen</h2>

**English:** Show advanced settings

<p>&#x27;Ja&#x27; auswählen, um die erweiterten Einstellungen anzuzeigen.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`self.timerShowExtended`

Bedienebene: Einfach.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-4e93d2b63173">Überprüfung der Netzwerkdatenübertragung aktivieren</h2>

**English:** Enable network traffic check

<p>&#x27;Ja&#x27; auswählen, wenn der Netzwerkverkehr vor der Aktivierung des Timers überprüft werden soll.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`self.timerNetTraffic`

Bedienebene: Einfach.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-76556f0348c1">Untergrenze in Kilobit pro Sekunde [kbit/s]</h2>

**English:** Lower limit (in kilobits per seconds)

<p>Die Netzwerkdatenrate auswählen, unterhalb derer der Timer wie angegeben aktiviert werden soll. Bei Datenverkehr über dieser Rate wird der Timer deaktiviert.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`self.timerNetTrafficLimit`

Bedienebene: Einfach.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-f6f4e4874906">Überprüfung von IP-Adressen aktivieren</h2>

**English:** Enable Network IP address check

<p>&#x27;Ja&#x27; auswählen, um zu prüfen, ob zum Zeitpunkt der Aktivierung des Timers Netzwerkverbindungen von den angegebenen IP-Adressen ausgehen. Ist dies der Fall, wird der Timer deaktiviert.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`self.timerNetIP`

Bedienebene: Einfach.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-973c34ad375a">Anzahl der IP-Adressen</h2>

**English:** Number of IP Addresses

<p>Eingeben, wie viele IP-Adressen auf aktive Verbindungen überprüft werden sollen.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`self.timerNetIPCount`

Bedienebene: Einfach.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-a61233aa1c40">IP-Adresse 1</h2>

**English:** IP Address 1

<p>IP-Adresse, die bei der Aktivierung des Timers überprüft werden soll.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`self.timerIPAddress[0]`

Bedienebene: Einfach.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-269cb9d81e5c">IP-Adresse 2</h2>

**English:** IP Address 2

<p>IP-Adresse, die bei der Aktivierung des Timers überprüft werden soll.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`self.timerIPAddress[1]`

Bedienebene: Einfach.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-2fdc4ee3b3ba">IP-Adresse 3</h2>

**English:** IP Address 3

<p>IP-Adresse, die bei der Aktivierung des Timers überprüft werden soll.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`self.timerIPAddress[2]`

Bedienebene: Einfach.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-b4ae88fbc20d">IP-Adresse 4</h2>

**English:** IP Address 4

<p>IP-Adresse, die bei der Aktivierung des Timers überprüft werden soll.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`self.timerIPAddress[3]`

Bedienebene: Einfach.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-a4c9a047d8a6">IP-Adresse 5</h2>

**English:** IP Address 5

<p>IP-Adresse, die bei der Aktivierung des Timers überprüft werden soll.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`self.timerIPAddress[4]`

Bedienebene: Einfach.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-ade224f32b38">Wiederholungstyp</h2>

**English:** Repeat type

<p>Auswählen, ob dieser Timer wiederholt werden soll.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`self.timerRepeat`

Bedienebene: Einfach.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-9cf8e4c87923">Datum</h2>

**English:** Date

<p>Das Datum auswählen, an dem der Timer aktiviert werden soll.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`self.timerRepeatStartDate`

Bedienebene: Einfach.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-1f850b964277">Wiederholungen</h2>

**English:** Repeats

<p>Auswählen, wie dieser Timer wiederholt werden soll.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`self.timerRepeatPeriod`

Bedienebene: Einfach.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-0b238b4305b9">Wochentag</h2>

**English:** Day of week

<p>Den Wochentag auswählen, an dem dieser Timer aktiviert werden soll.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`self.timerWeekday`

Bedienebene: Einfach.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-2ca616d9e4b4">Montag</h2>

**English:** Monday

<p>Auswählen, ob dieser Timer an einem Montag aktiviert werden soll.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`self.timerDay['Mon']`

Bedienebene: Einfach.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-48dd03c6b6ba">Dienstag</h2>

**English:** Tuesday

<p>Auswählen, ob dieser Timer an einem Dienstag aktiviert werden soll.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`self.timerDay['Tue']`

Bedienebene: Einfach.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-ddfd39127606">Mittwoch</h2>

**English:** Wednesday

<p>Auswählen, ob dieser Timer an einem Mittwoch aktiviert werden soll.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`self.timerDay['Wed']`

Bedienebene: Einfach.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-5815b35f2e50">Donnerstag</h2>

**English:** Thursday

<p>Auswählen, ob dieser Timer an einem Donnerstag aktiviert werden soll.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`self.timerDay['Thu']`

Bedienebene: Einfach.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-53b0128dbdca">Freitag</h2>

**English:** Friday

<p>Auswählen, ob dieser Timer an einem Freitag aktiviert werden soll.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`self.timerDay['Fri']`

Bedienebene: Einfach.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-b3969a82af5f">Samstag</h2>

**English:** Saturday

<p>Auswählen, ob dieser Timer an einem Samstag aktiviert werden soll.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`self.timerDay['Sat']`

Bedienebene: Einfach.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-adf14d972ee1">Sonntag</h2>

**English:** Sunday

<p>Auswählen, ob dieser Timer an einem Sonntag aktiviert werden soll.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`self.timerDay['Sun']`

Bedienebene: Einfach.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-9a2036a52845">Timerstartfenster</h2>

**English:** Timer start window

<p>Die Startzeit auswählen, nach der dieser Timer aktiviert werden kann. Vor diesem Zeitpunkt wird der Timer nicht aktiviert, auch wenn andere Bedingungen erfüllt sind.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`self.timerStartTime`

Bedienebene: Einfach.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-43be884aaa34">Timerendfenster</h2>

**English:** Timer end window

<p>Die Endzeit auswählen, bevor dieser Timer aktiviert werden kann. Nach Ablauf dieser Zeit wird der Timer nicht mehr aktiviert, auch wenn andere Bedingungen erfüllt sind.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`self.timerEndTime`

Bedienebene: Einfach.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-19eeb5dd60b9">Nach dem Ereignis</h2>

**English:** After event

<p>Aktion auswählen, die nach Ablauf des Timers ausgeführt werden soll.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`self.timerAfterEvent`

Bedienebene: Einfach.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-4cf377cbc590">Endzeit eingeben</h2>

**English:** Set end time

<p>&#x27;Ja&#x27; auswählen, wenn eine Endzeit für diesen Timer erforderlich ist.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`self.timerSetEndTime`

Bedienebene: Einfach.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-9b09578628c4">Standbyausführung</h2>

**English:** Standby execution

<p>Auswählen, wie der Zeitplan im Standby behandelt werden soll.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`self.timerFunctionStandby`

Bedienebene: Einfach.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-84ad75657143">Wiederholung starten</h2>

**English:** Start retry

<p>&#x27;Ja&#x27; auswählen, um die Aufgabe auf den Zeitpunkt zu verschieben, zu dem der Empfänger in Standby wechselt bzw. diesen verlässt. Die Statusänderung muss innerhalb des Zeitfensters für die Aufgabe erfolgen, sonst wird die Aufgabe nicht ausgeführt.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`self.timerFunctionStandbyRetry`

Bedienebene: Einfach.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-c1d712d29050">Anzahl Fehlerversuche</h2>

**English:** Error Retry count

<p>Die Anzahl der Wiederholungsversuche für eine Aufgabe auswählen, wenn bei der Ausführung der Aufgabe ein Fehler auftritt.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`self.timerFunctionRetryCount`

Bedienebene: Einfach.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-9b24352ac6c4">Wartezeit bei Fehlerwiederholung</h2>

**English:** Error Retry delay

<p>Die Wartezeit nach einem Aufgabenfehler auswählen, bevor die Aufgabe erneut ausgeführt wird.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`self.timerFunctionRetryDelay`

Bedienebene: Einfach.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

---

Quelle: [openATV setup.xml](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/data/setup.xml) · `fdc9347241`.
