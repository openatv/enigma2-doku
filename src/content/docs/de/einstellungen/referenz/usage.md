---
title: "Systemeinstellungen"
description: "Systemeinstellungen: Optionen, Originalhilfe und Menüweg in OpenATV."
editUrl: false
pagefind: true
---

Praktische Erklärung: [Bedienung / Oberfläche – Customize System Settings](../../../bedienung/systemanpassen/).

Diese Referenz enthält die vorhandenen Hilfetexte aus OpenATV. Je nach geöffnetem Dialog und gewählten Optionen ist nur ein Teil der Einträge sichtbar.

## Wo finde ich das?

**Hauptmenü → Einstellungen → Bedienung / Oberfläche → Systemeinstellungen**

Die Suche findet auch die englischen Bezeichnungen und technischen Schlüssel. [Zur Übersicht](../../)

<h2 id="option-45b02fc15633">Einstellungsansicht</h2>

**English:** Settings mode

<p>Die Ansicht für Menüs/Einstellungen auswählen. &#x27;Experte&#x27; zeigt alle Punkte.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.usage.setup_level`

Bedienebene: Einfach.

</details>

<h2 id="option-5362ed69fe7d">Scrollposition eingeben</h2>

**English:** Input scroll position

<p>Wenn der Eingabecursor diesen Punkt erreicht (Prozentsatz der Breite, von beiden Seiten), den Text zum Cursor scrollen.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.usage.cursorscroll`

Bedienebene: Einfach.

</details>

<h2 id="option-2ccd34369ed6">Videotext-Zwischenspeicher aktivieren</h2>

**English:** Enable teletext caching

<p>Bei &#x27;Ja&#x27; werden Videotextseiten für einen schnelleren Zugriff im Hintergrund gespeichert.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.usage.enable_tt_caching`

Bedienebene: Fortgeschritten.

</details>

<h2 id="option-d1e86c18cc8f">Videotext-Zeichensatz/Auflösung</h2>

**English:** Teletext font and resolution

<p>Bestimmt die Bildschirmauflösung und den Zeichensatz für die Videotextdarstellung.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.usage.tuxtxt_font_and_res`

Bedienebene: Fortgeschritten.

</details>

<h2 id="option-caf3947c971b">Videotext-UseTTF (0=Bitmap-Zeichensatz, 1=TrueType-Zeichensatz)</h2>

**English:** Teletext UseTTF (0=fixed font, 1=TrueType)

<p>Bestimmt, ob ein fester Zeichensatz oder ein skalierbarer TrueType-Zeichensatz für die Videotextdarstellung verwendet wird.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.usage.tuxtxt_UseTTF`

Bedienebene: Fortgeschritten.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-ebcc68bc2170">Videotext-TTFBold (0=normal, 1=fett)</h2>

**English:** Teletext TTFBold (0=normal, 1=bold)

<p>Bestimmt, ob ein regulärer oder ein fetter TrueType-Zeichensatz für die Videotextdarstellung verwendet wird.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.usage.tuxtxt_TTFBold`

Bedienebene: Fortgeschritten.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-904ce2b59c52">Videotext-TTFScreenResX (Bildschirmauflösung in X)</h2>

**English:** Teletext TTFScreenResX (screen X resolution)

<p>Bestimmt die Videotextbildschirmauflösung (nicht alle Skins unterstützen Full-HD-Videotext).</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.usage.tuxtxt_TTFScreenResX`

Bedienebene: Fortgeschritten.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-b8fd186b4710">Videotext-StartX (linker Rand)</h2>

**English:** Teletext StartX (left border)

<p>Bestimmt die X-Startkoordinate des Anzeigebereichs für Videotext.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.usage.tuxtxt_StartX`

Bedienebene: Fortgeschritten.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-92586233de76">Videotext-EndX (rechter Rand)</h2>

**English:** Teletext EndX (right border)

<p>Bestimmt die X-Endkoordinate des Anzeigebereichs für Videotext.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.usage.tuxtxt_EndX`

Bedienebene: Fortgeschritten.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-ce6d5ad00ae3">Videotext-StartY (unterer Rand)</h2>

**English:** Teletext StartY (lower border)

<p>Bestimmt die Y-Startkoordinate des Anzeigebereichs für Videotext.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.usage.tuxtxt_StartY`

Bedienebene: Fortgeschritten.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-ddd4b95f6227">Videotext-EndY (oberer Rand)</h2>

**English:** Teletext EndY (upper border)

<p>Bestimmt die Y-Endkoordinate des Anzeigebereichs für Videotext.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.usage.tuxtxt_EndY`

Bedienebene: Fortgeschritten.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-ab36065609df">Videotext-TTFShiftY (vertikale Zeichenposition)</h2>

**English:** Teletext TTFShiftY (vertical letter position)

<p>Die vertikale Position der Zeichen für die Videotextdarstellung anpassen.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.usage.tuxtxt_TTFShiftY`

Bedienebene: Fortgeschritten.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-2bc12d5770c9">Videotext-TTFShiftX (horizontale Zeichenposition)</h2>

**English:** Teletext TTFShiftX (horizontal letter position)

<p>Die horizontale Position der Zeichen für die Videotextdarstellung anpassen.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.usage.tuxtxt_TTFShiftX`

Bedienebene: Fortgeschritten.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-d6a1cac72520">Videotext-TTFWidthFactor16 (Breite der TrueType-Zeichen)</h2>

**English:** Teletext TTFWidthFactor16 (TrueType letter width)

<p>Bestimmt die Breite der Zeichen des TrueType-Zeichensatzes für die Videotextdarstellung.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.usage.tuxtxt_TTFWidthFactor16`

Bedienebene: Fortgeschritten.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-3ef4669e54f3">Videotext-TTFHeightFactor16 (Höhe der TrueType-Zeichen)</h2>

**English:** Teletext TTFHeightFactor16 (TrueType letter height)

<p>Bestimmt die Höhe der Zeichen des TrueType-Zeichensatzes für die Videotextdarstellung.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.usage.tuxtxt_TTFHeightFactor16`

Bedienebene: Fortgeschritten.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-2ab56a988da8">Videotext-CleanAlgo (Algorithmus zum Rücksetzen der Auflösung)</h2>

**English:** Teletext CleanAlgo (resolution reset algorithm)

<p>Bestimmt die Methode, wie die Bildschirmauflösung und der Bildspeicher beim Verlassen des Videotexts zurückgesetzt werden.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.usage.tuxtxt_CleanAlgo`

Bedienebene: Fortgeschritten.

</details>

<h2 id="option-8b2ea404aa9b">Tunerpriorität bei alternativen Sendern</h2>

**English:** Alternative services tuner priority

<p>Die bevorzugte Empfangsart einstellen, wenn mehrere für einen Sender verfügbar sind.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.usage.alternatives_priority`

Bedienebene: Experte.

</details>

<h2 id="option-0510352733c3">ECM in HTTP-Streams integrieren</h2>

**English:** Include ECM in http streams

<p>Bei &#x27;Ja&#x27; werden ECM-Daten in den Stream eingefügt. Dies ermöglicht einem Clientreceiver, den Stream selbst zu entschlüsseln.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.streaming.stream_ecm`

Bedienebene: Experte.

</details>

<h2 id="option-fc78cd9bb1d4">HTTP-Streams entschlüsseln</h2>

**English:** Unscramble http streams

<p>Bei &#x27;Ja&#x27; wird das Entschlüsseln eines Streams aktiviert (wenn ECM-Daten im Stream enthalten sind und eine Karte vorhanden ist).</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.streaming.descramble`

Bedienebene: Experte.

</details>

<h2 id="option-a5325073e401">Empfangene HTTP-Streams entschlüsseln</h2>

**English:** Unscramble receiving http streams

<p>Bei &#x27;Ja&#x27; werden empfangene HTTP-Streams immer entschlüsselt. Dies verbraucht mehr Ressourcen (Demuxer). Diese Option also nur aktivieren, wenn sie notwendig ist. Individuelle Streams sind immer entschlüsselt, wenn 0x100 zum Servicetyp hinzugefügt wurde, unabhängig von dieser Einstellung.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.streaming.descramble_client`

Bedienebene: Experte.

</details>

<h2 id="option-9f9139c61ef9">Verlange Authentifizierung für HTTP-Streams</h2>

**English:** Require authentication for http streams

<p>Bei &#x27;Ja&#x27; ist eine Authentifizierung erforderlich, um HTTP-Streams anzusehen.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.streaming.authentication`

Bedienebene: Experte.

</details>

<h2 id="option-3930e4810688">Startverzögerung für http(s)-Streams</h2>

**English:** Http(s) stream start delay

<p>Legt die zusätzliche Verzögerung in Millisekunden vor dem Start von http(s)-Streams fest.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.usage.http_startdelay`

Bedienebene: Experte.

</details>

<h2 id="option-1d80f7b8f0df">Nach Stromausfall</h2>

**English:** After power loss

<p>Auswählen, was geschehen soll, nachdem OpenATV nicht ordnungsgemäß heruntergefahren wurde (z. B. nach einem Stromausfall).</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.usage.shutdownNOK_action`

Bedienebene: Fortgeschritten.

</details>

<h2 id="option-e5ea3d1ce5a4">Startmodus</h2>

**English:** Boot-up action

<p>Auswählen, was geschehen soll, wenn OpenATV gestartet wird.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.usage.boot_action`

Bedienebene: Fortgeschritten.

</details>

<h2 id="option-8da4f84761a0">Aufwachzeit bevor ein Timer beginnt</h2>

**English:** Wake up time before a timer begins

<p>Die Standardeinstellung ist 5 Minuten vor Timerbeginn aus dem Deep-Standby aufzuwachen. Dies eventuell anpassen, falls die Aufwachzeit zu kurz oder zu lang ist (z. B. beim Warten auf Netzwerklaufwerke).</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.workaround.wakeuptime`

Bedienebene: Experte.

</details>

<h2 id="option-526b68a607b8">Workaround für das Aufwachen aus dem Deep-Standby</h2>

**English:** Use workaround for wake up from deep-standby

<p>Wenn aktiviert, kann ein Zeitfenster eingestellt werden, um ein durch einen Timer ausgelöstes Aufwachen aus dem Deep-Standby zu erkennen.<br />Andernfalls wird ein spezielles Signal vom Receiver verwendet. Manche Geräte senden jedoch ein falsches oder gar kein Signal, wodurch die Erkennung fehlschlägt.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.workaround.deeprecord`

Bedienebene: Fortgeschritten.

</details>

<h2 id="option-5fe5f744f25c">Zeitfenster zur Erkennung des Aufwachens durch einen Timer (Min)</h2>

**English:** Time window for detection of the wake up by a timer \[mins\]

<p>Die Standardeinstellungen sind Aufwachzeit -5 Minuten und Timerbeginn +5 Minuten. Diese Einstellung verändert das Zeitfenster vor der Aufwachzeit. So kann das Aufwachen durch einen Timer auch bei sehr früh startenden Receivern erkannt werden.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.workaround.wakeupwindow`

Bedienebene: Experte.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-5d9dd8029902">Schnittdateiunterstützung für nicht &#x27;.ts&#x27;-Dateien aktivieren</h2>

**English:** Enable cut file support for non \*.ts files

<p>Bei &#x27;Ja&#x27; wird die Unterstützung von Schnittdateien für nicht &#x27;.ts&#x27;-Dateien (z. B. MP4) aktiviert.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.usage.useVideoCuesheet`

Bedienebene: Experte.

</details>

<h2 id="option-55d4d9afc85e">Schnittdateiunterstützung für Audiodateien aktivieren</h2>

**English:** Enable cut file support for audio files

<p>Bei &#x27;Ja&#x27; wird die Unterstützung von Schnittdateien für Audiodateien (z. B. MP3) aktiviert.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.usage.useAudioCuesheet`

Bedienebene: Experte.

</details>

<h2 id="option-05e9037ae16d">Erweiterte Schnittdateiunterstützung aktivieren</h2>

**English:** Enable extended cut file support

<p>Bei &#x27;Ja&#x27; wird die erweiterte Unterstützung von Schnittdateien aktiviert. Dadurch wird der Schnitt mit weiteren Informationen und nicht nur mit einem Marker versehen.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.usage.nativeCuesheetSupport`

Bedienebene: Experte.

</details>

<h2 id="option-ed2068ab6202">Kapitelunterstützung für Videodateien aktivieren</h2>

**English:** Enable chapter support for video files

<p>Bei &#x27;Ja&#x27; werden Kapitelpositionen für unterstützte Videodateien angezeigt (ab GStreamer Version 1).</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.usage.useChapterInfo`

Bedienebene: Experte.

</details>

---

Quelle: [OpenATV setup.xml](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/data/setup.xml) · `fdc9347241`.
