---
title: "Logs"
description: "Logs: Optionen, Originalhilfe und Menüweg in openATV."
editUrl: false
pagefind: true
---

Diese Referenz enthält die vorhandenen Hilfetexte aus openATV. Je nach geöffnetem Dialog und gewählten Optionen ist nur ein Teil der Einträge sichtbar.

## Wo finde ich das?

**Hauptmenü → Einstellungen → System → Logs**

Die Suche findet auch die englischen Bezeichnungen und technischen Schlüssel. [Zur Übersicht](../../)

<h2 id="option-649e43e70947">Speicherort für Logs</h2>

**English:** Logs location

<p>Speicherort für Crash- und Debug-Logs auswählen.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.crash.debug_path`

Bedienebene: Experte.

</details>

<h2 id="option-b15f4b882ad8">Umgang mit Python-Abstürzen</h2>

**English:** Handle Python crashes

<p>Bei Softwarefehlern wird versucht, die Bedienoberfläche nicht neu zu starten.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.crash.bsodpython`

Bedienebene: Experte.

</details>

<h2 id="option-a4b9da28e517">Wie oft Absturzinfo anzeigen und Crash-Log erstellen</h2>

**English:** Show crash info on screen and write crash log for x times

<p>Bei &#x27;niemals&#x27; wird beim ersten Absturz trotzdem ein Crash-Log geschrieben.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.crash.bsodhide`

Bedienebene: Experte.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-c67bf2132242">Bedienoberfläche nach x Abstürzen neu starten</h2>

**English:** Restart GUI after x crashes

<p>Bei &#x27;niemals&#x27; wird nach 100 Abstürzen trotzdem ein Neustart erzwungen.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.crash.bsodmax`

Bedienebene: Experte.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-c47bb645d01e">Debug-Log aktivieren *</h2>

**English:** Enable debug log \*

<p>Ein aktiviertes Debug-Log enthält detaillierte Informationen zu allen Vorgängen des Systems.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.crash.debugLevel`

Bedienebene: Experte.

</details>

<h2 id="option-c9d273a5e91e">Inklusive internationaler Daten *</h2>

**English:** Include international data \*

<p>Aktivieren, um dem Debug-Log internationale Sprach- und Länderinformationen hinzuzufügen, die während des Systemstarts erkannt wurden.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.crash.debugInternational`

Bedienebene: Experte.

</details>

<h2 id="option-3cb07208a444">Inklusive MultiBoot-Daten *</h2>

**English:** Include MultiBoot data \*

<p>Aktivieren, um dem Debug-Log während des Systemstarts erkannte MultiBoot-Informationen hinzuzufügen.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.crash.debugMultiBoot`

Bedienebene: Experte.

</details>

<h2 id="option-4449fb492d54">Inklusive Tastaturdaten</h2>

**English:** Include keyboard data

<p>Aktivieren, um dem Debug-Log Tastaturdaten hinzuzufügen.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.crash.debugKeyboards`

Bedienebene: Experte.

</details>

<h2 id="option-eac06c0d6791">Fernbedienungsdaten einschließen</h2>

**English:** Include remote control data

<p>Aktivieren, um dem Debug-Log Fernbedienungsdaten hinzuzufügen.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.crash.debugRemoteControls`

Bedienebene: Experte.

</details>

<h2 id="option-ef3bba6fda10">Inklusive ActionMap-Daten</h2>

**English:** Include action map data

<p>Aktivieren, um dem Debug-Log ActionMap-Daten hinzuzufügen.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.crash.debugActionMaps`

Bedienebene: Experte.

</details>

<h2 id="option-ffeb8da2103d">Inklusive Screendaten</h2>

**English:** Include screen load data

<p>Aktivieren, um dem Debug-Log Bildschirmnamen und Auflösungsdaten hinzuzufügen.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.crash.debugScreens`

Bedienebene: Experte.

</details>

<h2 id="option-b84a55bd08d2">Opkg-Ausgabedaten einschließen</h2>

**English:** Include opkg output data

<p>Aktivieren, um dem Debug-Log &#x27;opkg&#x27;-Ausgabedaten hinzuzufügen.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.crash.debugOpkg`

Bedienebene: Experte.

</details>

<h2 id="option-15f1794e3df3">Timerdaten einschließen</h2>

**English:** Include timer data

<p>Aktivieren, um dem Debug-Log Timerdaten hinzuzufügen.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.crash.debugTimers`

Bedienebene: Experte.

</details>

<h2 id="option-c1094c236e2e">Include seek data</h2>

<p>Enable this option to add seek/time shift debugging data to the debug log file.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.crash.debugSeek`

Bedienebene: Experte.

</details>

<h2 id="option-e15c4ba41834">Inklusive EPG-Daten</h2>

**English:** Include EPG data

<p>Aktivieren, um dem Debug-Log zusätzlich EPG-Daten hinzuzufügen.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.crash.debugEPG`

Bedienebene: Experte.

</details>

<h2 id="option-2acb3cb43d88">Include DAB+ data</h2>

<p>Enable this option to add detailed DAB+ receiver, packet, MOT and SPI information to the debug log file.</p>

**Nach Änderung:** GUI-Neustart erforderlich.

<details>
<summary>Zuordnung & Hinweise</summary>

`config.crash.debugDAB`

Bedienebene: Experte.

</details>

<h2 id="option-b6c7d77360e9">Inklusive DVB-Scandaten</h2>

**English:** Include DVB scan data

<p>Aktivieren, um dem Debug-Log zusätzlich DVB-Scandaten hinzuzufügen.</p>

**Nach Änderung:** GUI-Neustart erforderlich.

<details>
<summary>Zuordnung & Hinweise</summary>

`config.crash.debugDVBScan`

Bedienebene: Experte.

</details>

<h2 id="option-8b4629235b09">Inklusive DVB-Timesyncdaten</h2>

**English:** Include DVB timesync data

<p>Aktivieren, um dem Debug-Log zusätzlich DVB-Timesyncdaten hinzuzufügen.</p>

**Nach Änderung:** GUI-Neustart erforderlich.

<details>
<summary>Zuordnung & Hinweise</summary>

`config.crash.debugDVBTime`

Bedienebene: Experte.

</details>

<h2 id="option-07e003e7852c">Inklusive DVB-Details</h2>

**English:** Include DVB details

<p>Aktivieren, um dem Debug-Log zusätzlich DVB-Details hinzuzufügen.</p>

**Nach Änderung:** GUI-Neustart erforderlich.

<details>
<summary>Zuordnung & Hinweise</summary>

`config.crash.debugDVB`

Bedienebene: Experte.

</details>

<h2 id="option-37db1c2d9d70">Inklusive Videotextdetails</h2>

**English:** Include teletext details

<p>Aktivieren, um dem Debug-Log zusätzlich Videotextdetails hinzuzufügen.</p>

**Nach Änderung:** GUI-Neustart erforderlich.

<details>
<summary>Zuordnung & Hinweise</summary>

`config.crash.debugTeletext`

Bedienebene: Experte.

</details>

<h2 id="option-29529c08b707">Inklusive Datenträgerdaten</h2>

**English:** Include storage device data

<p>Aktivieren, um während des Bootvorgangs oder per Hot-Plug ermittelte Informationen zu Datenträgern im Debug-Log anzuzeigen.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.crash.debugStorage`

Bedienebene: Experte.

</details>

<h2 id="option-0a6d8d1ef62b">Inklusive Favoriten-Datenbankdaten</h2>

**English:** Include bouquet DB data

<p>Aktivieren, um dem Debug-Log Favoriten-Datenbankinformationen hinzuzufügen.</p>

**Nach Änderung:** GUI-Neustart erforderlich.

<details>
<summary>Zuordnung & Hinweise</summary>

`config.crash.debugDVBDB`

Bedienebene: Experte.

</details>

<h2 id="option-596777871078">Textkodierungsdaten einschließen</h2>

**English:** Include text encoding data

<p>Aktivieren, um Informationen zur Textkodierung in die Debug-Protokolldatei aufzunehmen.</p>

**Nach Änderung:** GUI-Neustart erforderlich.

<details>
<summary>Zuordnung & Hinweise</summary>

`config.crash.debugTextEncoding`

Bedienebene: Experte.

</details>

<h2 id="option-7ad46a6fdfe2">Netzwerkdaten einschließen</h2>

**English:** Include network data

<p>Aktivieren, um dem Debug-Log Netzwerkinformationen hinzuzufügen.</p>

**Nach Änderung:** GUI-Neustart erforderlich.

<details>
<summary>Zuordnung & Hinweise</summary>

`config.crash.debugNetwork`

Bedienebene: Experte.

</details>

<h2 id="option-979d9d1ae15b">Include SEC/DiSEqC data</h2>

<p>Enable this option to add verbose SEC/DiSEqC debug data to the debug log file.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.crash.debugSec`

Bedienebene: Experte.

</details>

<h2 id="option-d95b9a1ab2f8">Debug-Log-Größenbegrenzung (MB)</h2>

**English:** Limit debug log size (MB)

<p>Maximale Größe in Megabyte (MB) des Debug-Logs festlegen. Wenn diese Größe erreicht ist, wird eine neue Datei erstellt.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.crash.debugloglimit`

Bedienebene: Experte.

</details>

<h2 id="option-460879cf64d9">Logverwaltung in Erweiterungen anzeigen</h2>

**English:** Show Log Manager in Extension Menu

<p>Die Logverwaltung unter Erweiterungen (Taste BLAU) anzeigen oder verbergen.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.logmanager.showinextensions`

Bedienebene: Experte.

</details>

<h2 id="option-191e01d9d316">Maximale Anzahl von Tagen:</h2>

**English:** Maximum no of days

<p>Logdateien, die älter sind als diese Anzahl von Tagen, werden gelöscht.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.crash.daysloglimit`

Bedienebene: Experte.

</details>

<h2 id="option-364850864b38">Maximale Speicherplatznutzung (MB):</h2>

**English:** Maximum space used (MB)

<p>Wenn die Logdateien zu viel Speicher belegen, werden die ältesten Dateien gelöscht.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.crash.sizeloglimit`

Bedienebene: Experte.

</details>

<h2 id="option-55d2add5de92">Auch bei Skinfehlern abstürzen</h2>

**English:** Crash at skin error for debug reasons

<p>Bei &#x27;Nein&#x27; gibt es bei Fehlern im Skin nur einen Eintrag im Debug-Log.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.crash.skin_error_crash`

Bedienebene: Experte.

</details>

<h2 id="option-d0d24ffcc662">Bei Spinner Python-Stack-Trace loggen</h2>

**English:** Log python stack trace on spinner

<p>Aktivieren, um die Ursache eines Spinners (Beschäftigungsanzeige) zu ermitteln.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.crash.pystackonspinner`

Bedienebene: Experte.

</details>

<h2 id="option-02bf61c15122">Debug-Log-Zeitformat *</h2>

**English:** Debug log time format \*

<p>Das Präfix für die Zeilen im Debug-Log einstellen. &#x27;Bootzeit&#x27; sind die Sekunden, seit dem openATV gestartet wurde.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.crash.debugTimeFormat`

Bedienebene: Experte.

</details>

<h2 id="option-242e879d2783">GStreamer Debug-Log aktivieren *</h2>

**English:** Enable GStreamer debug log \*

<p>Ein aktiviertes GStreamer-Debug-Log enthält detaillierte Informationen zu allen Vorgängen des GStreamer-Systems.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.crash.gstdebug`

Bedienebene: Experte.

</details>

<h2 id="option-fe54a1220d1d">GStreamer-Debug-Log-Kategorie *</h2>

**English:** GStreamer debug log category \*

<p>Nur Meldungen der ausgewählten GStreamer-Kategorie schreiben. * Bedeutet alle.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.crash.gstdebugcategory`

Bedienebene: Experte.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-0ecc8d6aa530">GStreamer-Debug-Log-Meldungstyp *</h2>

**English:** GStreamer debug log level \*

<p>Umfang des GStreamer-Logs.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.crash.gstdebuglevel`

Bedienebene: Experte.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-d41506f3d5d0">GStreamer Pipeline Graphs aktivieren *</h2>

**English:** Enable GStreamer pipeline graphs \*

<p>Ein aktiviertes GStreamer Pipeline Graphs erstellt &#x27;.dot&#x27;-Dateien, die die Struktur der Pipeline und die zwischen den Verbindungen ausgehandelten Eigenschaften enthalten.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.crash.gstdot`

Bedienebene: Experte.

</details>

<h2 id="option-ecf8dd0044d4">Core-Dumps aktivieren *</h2>

**English:** Enable core dumps \*

<p>Core-Dumps sind für Entwickler im Falle eines &#x27;FATAL SIGNAL&#x27;-Absturzes im C++-Code hilfreich. Die typische Größe eines Core-Dumps beträgt 110 MB. Daher den maximal zu verwendenden Speicherplatz anpassen und den richtigen Speicherort auswählen.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.crash.coredump`

Bedienebene: Experte.

</details>

---

Quelle: [openATV setup.xml](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/data/setup.xml) · `fdc9347241`.
