---
title: "EPG"
description: "EPG: Optionen, Originalhilfe und Menüweg in OpenATV."
editUrl: false
pagefind: true
---

Diese Referenz enthält die vorhandenen Hilfetexte aus OpenATV. Je nach geöffnetem Dialog und gewählten Optionen ist nur ein Teil der Einträge sichtbar.

## Wo finde ich das?

**Hauptmenü → Einstellungen → EPG → EPG**

Die Suche findet auch die englischen Bezeichnungen und technischen Schlüssel. [Zur Übersicht](../../)

<h2 id="option-8500723391e5">EPG-Speicherort</h2>

**English:** EPG location

<p>Ort zur Speicherung der EPG-Daten auswählen, wenn OpenATV ausgeschaltet wird. Dieser Ort muss beim Start verfügbar sein!</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.misc.epgcachepath`

Bedienebene: Experte.

</details>

<h2 id="option-747704d58ac2">EPG-Dateiname</h2>

**English:** EPG filename

<p>Dateinamen für die EPG-Daten auswählen, wenn OpenATV ausgeschaltet wird. Das kann nützlich sein, wenn mehrere Receiver verwendet werden.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.misc.epgcachefilename`

Bedienebene: Experte.

</details>

<h2 id="option-20673f1b78f5">Geplantes Laden der &#x27;epg.dat&#x27;</h2>

**English:** Scheduled load of 'epg.dat'

<p>&#x27;Ja&#x27; erlaubt regelmäßiges Lesen der EPG-Daten aus der unter &#x27;EPG-Dateiname&#x27; eingestellten Datei.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.epg.cacheloadsched`

Bedienebene: Experte.

</details>

<h2 id="option-ec653907007c">Aktualisierungsintervall</h2>

**English:** Refresh every

<p>OpenATV liest die gespeicherten EPG-Daten nach der eingestellten Zeit erneut ein.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.epg.cacheloadtimer`

Bedienebene: Experte.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-ae33bcb18363">EPG-Daten speichern</h2>

**English:** Save EPG data

<p>&#x27;Ja&#x27; erlaubt die Speicherung der EPG-Daten.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.epg.saveepg`

Bedienebene: Experte.

</details>

<h2 id="option-3c0f1cbfe23d">Geplantes Speichern der &#x27;epg.dat&#x27;</h2>

**English:** Scheduled save of 'epg.dat'

<p>&#x27;Ja&#x27; erlaubt regelmäßiges Schreiben der EPG-Daten in die unter &#x27;EPG-Dateiname&#x27; eingestellte Datei.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.epg.cachesavesched`

Bedienebene: Experte.

</details>

<h2 id="option-d72f3a8f21cc">Sicherungsintervall</h2>

**English:** Save every

<p>OpenATV speichert die EPG-Daten automatisch nach der eingestellten Zeit.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.epg.cachesavetimer`

Bedienebene: Experte.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-2a0655d41143">EIT Jetzt/Nächstes in der Infoleiste anzeigen</h2>

**English:** Show EIT Now/Next event data in the InfoBar

<p>Bei &#x27;Ja&#x27; werden EIT-EPG-Informationen Jetzt/Nächstes in der Infoleiste angezeigt.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.usage.show_eit_nownext`

Bedienebene: Experte.

</details>

<h2 id="option-f47ae0f77090">EIT-EPG aktivieren</h2>

**English:** Enable EIT EPG

<p>Bei &#x27;Ja&#x27; werden EIT-EPG-Informationen verwendet, wenn sie verfügbar sind.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.epg.eit`

Bedienebene: Experte.

</details>

<h2 id="option-0e2280e812df">MHW-EPG aktivieren</h2>

**English:** Enable MHW EPG

<p>Bei &#x27;Ja&#x27; werden MHW-EPG-Informationen verwendet, wenn sie verfügbar sind.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.epg.mhw`

Bedienebene: Experte.

</details>

<h2 id="option-a8e23b044fd6">Freesat-EPG aktivieren</h2>

**English:** Enable FreeSat EPG

<p>Bei &#x27;Ja&#x27; werden Freesat-EPG-Informationen verwendet, wenn sie verfügbar sind.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.epg.freesat`

Bedienebene: Experte.

</details>

<h2 id="option-da8d514295b2">ViaSat-EPG aktivieren</h2>

**English:** Enable ViaSat EPG

<p>Bei &#x27;Ja&#x27; werden ViaSat-EPG-Informationen verwendet, wenn sie verfügbar sind.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.epg.viasat`

Bedienebene: Experte.

</details>

<h2 id="option-fd64170a8b4f">Netmed-EPG aktivieren</h2>

**English:** Enable Netmed EPG

<p>Bei &#x27;Ja&#x27; werden Netmed-EPG-Informationen verwendet, wenn sie verfügbar sind.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.epg.netmed`

Bedienebene: Experte.

</details>

<h2 id="option-28884aa94c7f">Virgin-EPG aktivieren</h2>

**English:** Enable Virgin EPG

<p>Bei &#x27;Ja&#x27; werden Virgin-EPG-Informationen verwendet, wenn sie verfügbar sind.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.epg.virgin`

Bedienebene: Experte.

</details>

<h2 id="option-8cd03a9e4ff8">OpenTV-EPG aktivieren</h2>

**English:** Enable OpenTV EPG

<p>Bei &#x27;Ja&#x27; werden OpenTV-EPG-Informationen verwendet.<br />Dazu muss allerdings ein spezieller Transponder abgesucht werden!</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.epg.opentv`

Bedienebene: Experte.

</details>

<h2 id="option-2ddd43d167e4">Maximale Anzahl von Tagen im EPG</h2>

**English:** Maximum number of days in EPG

<p>Die Vorhaltezeit in Tagen des EPGs einstellen.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.epg.maxdays`

Bedienebene: Experte.

</details>

<h2 id="option-c9ff86534a97">EPG-Historie</h2>

**English:** EPG history

<p>Auswählen, ob und wie viele historische EPG-Daten gespeichert werden sollen. Diese Daten können in jeder der EPG-Ansichten durchsucht werden. Dies kann nützlich sein, wenn Informationen über ein beendetes Ereignis benötigt werden.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.epg.histminutes`

Bedienebene: Experte.

</details>

<h2 id="option-5fb2e68745a9">EIT in HTTP-Streams integrieren</h2>

**English:** Include EIT in http streams

<p>Bei &#x27;Ja&#x27; werden EIT-Daten in HTTP-Streams eingefügt. Dies ermöglicht einem Clientreceiver einen EPG anzuzeigen.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.streaming.stream_eit`

Bedienebene: Experte.

</details>

<h2 id="option-f6cce59d6b41">AIT in HTTP-Streams integrieren</h2>

**English:** Include AIT in http streams

<p>Bei &#x27;Ja&#x27; werden AIT-Daten in HTTP-Streams eingefügt. Dies ermöglicht einem Clientreceiver HbbTV zu nutzen.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.streaming.stream_ait`

Bedienebene: Experte.

</details>

<h2 id="option-4150c85a1d83">SDT und BAT in HTTP-Streams integrieren</h2>

**English:** Include SDT and BAT in http streams

<p>Wenn aktiviert, werden Daten von SDT (Service Description Table – Programmbeschreibungstabelle) und BAT (Bouquet Association Table – Bouquetbeschreibungstabelle) in HTTP-Streams eingefügt.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.streaming.stream_sdtbat`

Bedienebene: Experte.

</details>

<h2 id="option-e0f3dfa8862c">Land für EPG-Ereignisbewertungsinformationen</h2>

**English:** Country for EPG event rating information

<p>Länderschema zum Dekodieren von Bewertungsinformationen in EPG-Ereignissen auswählen.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.misc.epgratingcountry`

Bedienebene: Experte.

</details>

<h2 id="option-24a604c19379">Land für EPG-Genre-Informationen</h2>

**English:** Country for EPG event genre information

<p>Länderschema zum Dekodieren von Genre-Informationen in EPG-Ereignissen auswählen.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.misc.epggenrecountry`

Bedienebene: Experte.

</details>

<h2 id="option-d3db2cbfe126">Ungültige EPG-Daten korrigieren</h2>

**English:** Correct invalid EPG data

<p>Option zur Korrektur ungültiger EPG-Daten auswählen.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.usage.correct_invalid_epgdata`

Bedienebene: Experte.

</details>

---

Quelle: [OpenATV setup.xml](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/data/setup.xml) · `fdc9347241`.
