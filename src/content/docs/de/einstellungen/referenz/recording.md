---
title: "Aufnahmen"
description: "Aufnahmen: Optionen, Originalhilfe und Menüweg in openATV."
editUrl: false
pagefind: true
---

Diese Referenz enthält die vorhandenen Hilfetexte aus openATV. Je nach geöffnetem Dialog und gewählten Optionen ist nur ein Teil der Einträge sichtbar.

## Wo finde ich das?

**Hauptmenü → Einstellungen → Aufnahmen / Timeshift → Aufnahmen**

Die Suche findet auch die englischen Bezeichnungen und technischen Schlüssel. [Zur Übersicht](../../)

<h2 id="option-077acf9b2be1">Timeraufnahmeverzeichnis</h2>

**English:** Timer recording location

<p>Das Standardverzeichnis für Timeraufnahmen auswählen.<br />OK drücken, um ein neues Verzeichnis hinzuzufügen.<br />Am Steuerkreuz Links/Rechts benutzen, um ein bestehendes Verzeichnis auszuwählen.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.usage.timer_path`

Bedienebene: Experte.

</details>

<h2 id="option-f947b4bf9f2b">Sofortaufnahmeverzeichnis</h2>

**English:** Instant recording location

<p>Das Standardverzeichnis für Sofortaufnahmen auswählen.<br />OK drücken, um ein neues Verzeichnis hinzuzufügen.<br />Am Steuerkreuz Links/Rechts benutzen, um ein bestehendes Verzeichnis auszuwählen.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.usage.instantrec_path`

Bedienebene: Experte.

</details>

<h2 id="option-db4c10363531">Timeshiftspeicherort</h2>

**English:** Time shift save location

<p>Das Standardverzeichnis für Timeshiftaufnahmen auswählen.<br />OK drücken, um ein neues Verzeichnis hinzuzufügen.<br />Am Steuerkreuz Links/Rechts benutzen, um ein bestehendes Verzeichnis auszuwählen.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.timeshift.recordingPath`

Bedienebene: Experte.

</details>

<h2 id="option-3d881cb2faa7">Bevorzugter Tuner bei Aufnahmen</h2>

**English:** Preferred tuner for recordings

<p>Den bevorzugten Tuner für Aufnahmen einstellen, wenn mehr als ein Tuner verfügbar ist.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.usage.recording_frontend_priority`

Bedienebene: Experte.

</details>

<h2 id="option-31ab66ad1089">Bevorzugte Tuner bei Aufnahmen</h2>

**English:** Preferred tuners for recordings, multiple selection allowed

<p>Im Expertenmodus einstellen, welche Tuner für Aufnahmen bevorzugt werden sollen, wenn mehr als ein Tuner verfügbar ist.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.usage.recording_frontend_priority_multiselect`

Bedienebene: Experte.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-b8e8828550dc">Exp.: Beschränkung auf bevorzugte Tuner bei Aufnahmen</h2>

**English:** Experimental: strict limitation to preferred tuners for recordings

<p>Legt fest, ob bei Aufnahmen ein weiterer bevorzugter Tuner belegt wird, selbst wenn ein anderer Tuner mit verwendet werden könnte, der den gleichen Sender live empfängt.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.usage.recording_frontend_priority_strictly`

Bedienebene: Experte.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-04f3e0c336ce">Aufnahmen haben immer Vorrang</h2>

**English:** Recordings always have priority

<p>Bei &#x27;Ja&#x27; darf eine Aufnahme das Live-TV unterbrechen, falls kein freier Tuner verfügbar ist.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.recording.asktozap`

Bedienebene: Fortgeschritten.

</details>

<h2 id="option-9f14e0887d21">Bild-im-Bild bei Aufnahmen beenden</h2>

**English:** Recordings abort PiP

<p>Wenn aktiviert, darf eine Aufnahme das Bild-im-Bild unterbrechen, falls kein freier Tuner verfügbar ist.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.recording.ask_to_abort_pip`

Bedienebene: Fortgeschritten.

</details>

<h2 id="option-e6ce40e02c93">Pseudoaufnahmen bei Aufnahmen beenden</h2>

**English:** Recordings abort pseudo recordings

<p>Wenn aktiviert, darf eine Aufnahme die Pseudoaufnahme unterbrechen, falls kein freier Tuner verfügbar ist.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.recording.ask_to_abort_pseudo_rec`

Bedienebene: Fortgeschritten.

</details>

<h2 id="option-db69a6b89291">Streaming bei Aufnahmen beenden</h2>

**English:** Recordings abort streaming

<p>Wenn aktiviert, darf eine Aufnahme das Streaming unterbrechen, falls kein freier Tuner verfügbar ist.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.recording.ask_to_abort_streaming`

Bedienebene: Fortgeschritten.

</details>

<h2 id="option-eeb8a73acb81">Vorbereitungszeit für die Aufnahme</h2>

**English:** Preparation time for recording

<p>Während dieser Zeit werden der Sender und das Aufnahmeziel überprüft. Ist das Aufnahmeziel (z. B. NAS) nicht rechtzeitig bereit, kann diese Zeit verlängert werden.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.recording.prepare_time`

Bedienebene: Einfach.

</details>

<h2 id="option-ed33d00a15ac">Vorlauf vor Aufnahme</h2>

**English:** Margin before recording

<p>Die Vorlaufzeit in Minuten einstellen, die eine Aufnahme vor dem eigentlichen Aufnahmebeginn starten soll.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.recording.margin_before`

Bedienebene: Einfach.

</details>

<h2 id="option-e730e528639c">Nachlauf nach Aufnahme</h2>

**English:** Margin after recording

<p>Die Nachlaufzeit in Minuten einstellen, die eine Aufnahme nach dem eigentlichen Aufnahmeende noch weiter laufen soll.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.recording.margin_after`

Bedienebene: Einfach.

</details>

<h2 id="option-506ce3518a9e">Endzeiten der Umschalttimer verwenden</h2>

**English:** Use Zap timer end times

<p>Bei &#x27;Ja&#x27; bekommen neue Umschalttimer die per Voreinstellung festgelegte Endzeit.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.recording.zap_has_endtime`

Bedienebene: Einfach.

</details>

<h2 id="option-ad628113300b">Vorlauf vor Umschalten</h2>

**English:** Margin before zap

<p>Die Vorlaufzeit in Minuten einstellen, wann der Umschalttimer vor dem eigentlichen Beginn starten soll.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.recording.zap_margin_before`

Bedienebene: Einfach.

</details>

<h2 id="option-26fc2bf6b2a1">Nachlauf nach Umschalten</h2>

**English:** Margin after zap

<p>Die Nachlaufzeit in Minuten einstellen, wie lange der Umschalttimer nach dem eigentlichen Ende noch weiter laufen soll.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.recording.zap_margin_after`

Bedienebene: Einfach.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-72dc1d2348f9">Umschalten bestätigen</h2>

**English:** Confirm Zap

<p>Einen Zeitraum auswählen, nach dessen Ablauf eine Bestätigungsaufforderung angezeigt wird, bevor ein Umschalttimer den aktuellen Sender wechselt. So kann man das Umschalten abbrechen. &#x27;Deaktiviert&#x27; auswählen, damit das Umschalten ohne Bestätigung fortgesetzt wird.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.recording.confirmZapDelay`

Bedienebene: Einfach.

</details>

<h2 id="option-749a23247c5d">Voreinstellung für &#x27;Timerart&#x27; *</h2>

**English:** Default 'Timer type' \*

<p>Standardwerte für neue Timer konfigurieren. Nach einer Änderung ist ein Neustart erforderlich.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.recording.default_timertype`

Bedienebene: Experte.

</details>

<h2 id="option-2c4dad98a2e6">Voreinstellung für &#x27;Nach der Aufnahme&#x27; *</h2>

**English:** Default 'After event' \*

<p>Standardwerte für neue Timer konfigurieren. Nach einer Änderung ist ein Neustart erforderlich.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.recording.default_afterevent`

Bedienebene: Experte.

</details>

<h2 id="option-ae24f164687e">Abgeschlossene Timer nach x Tagen entfernen</h2>

**English:** Remove completed timers after

<p>Legt die Vorhaltezeit in Tagen für abgelaufene Timer fest, nach der diese automatisch aus der Timerliste gelöscht werden.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.recording.keep_timers`

Bedienebene: Experte.

</details>

<h2 id="option-729c305fdada">Freien Speicher in der Timeransicht anzeigen</h2>

**English:** Show free space in timer view

<p>Wenn aktiviert, wird in der Timeransicht der freie Speicher des Aufnahmegerätes angezeigt, wofür dieses, falls nötig, aufgeweckt werden muss.<br />Falls das nicht gewünscht ist, diese Funktion deaktivieren.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.recording.timerviewshowfreespace`

Bedienebene: Experte.

</details>

<h2 id="option-f86a87ed98ac">Zeichensatz für Dateinamen der Aufnahmen begrenzen</h2>

**English:** Limit character set for recording filenames

<p>Bei &#x27;Ja&#x27; werden die Zeichen, die in Aufnahmedateinamen (7 Bit ASCII) verwendet werden können, begrenzt. Dies gewährleistet die Kompatibilität mit Betriebssystemen oder Dateisystemen mit begrenztem Zeichenvorrat.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.recording.ascii_filenames`

Bedienebene: Experte.

</details>

<h2 id="option-4c711437ccbe">Dateinamen für Aufnahmen</h2>

**English:** Composition of the recording filenames

<p>Zusammensetzung des Dateinamens: Standard: Datum Zeit – Sender – Titel, extrem kurz: Titel, sehr kurz: Titel – Datum Zeit, kurz mit Zeit: Datum Zeit – Titel, kurz: Datum – Titel, lang: Datum Zeit – Sender – Titel – Info.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.recording.filename_composition`

Bedienebene: Experte.

</details>

<h2 id="option-874f49977f73">AIT-Daten in Aufnahmen integrieren</h2>

**English:** Include AIT in recordings

<p>Bei &#x27;Ja&#x27; sind in den Aufnahmen AIT-Daten enthalten.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.recording.include_ait`

Bedienebene: Experte.

</details>

<h2 id="option-96f172e5b7c0">Papierkorb nach x Tagen leeren</h2>

**English:** Purge 'Trash' after

<p>Legt fest, wie viele Tage der Inhalt vom Papierkorb erhalten bleiben soll, bevor er automatisch gelöscht wird.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.usage.movielist_trashcan_days`

Bedienebene: Fortgeschritten.

</details>

<h2 id="option-507f7b82f3f4">Netzwerk-Papierkörbe leeren</h2>

**English:** Clean network 'Trash'

<p>Bei &#x27;Ja&#x27; werden auch die Netzwerk-Papierkörbe geleert.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.usage.movielist_trashcan_network_clean`

Bedienebene: Fortgeschritten.

</details>

<h2 id="option-4c398bf59fc8">Für Aufnahmen reservierter Speicher (in GB)</h2>

**English:** Space to reserve for recordings (GB)

<p>Den erforderlichen Speicherplatz einstellen, der für Aufnahmen verfügbar sein soll. Wird der Wert erreicht, werden Inhalte aus dem Papierkorb gelöscht.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.usage.movielist_trashcan_reserve`

Bedienebene: Fortgeschritten.

</details>

<h2 id="option-3049fbd770c3">Option zum Löschen im Hintergrund</h2>

**English:** Background delete option

<p>Die Geräte einstellen, auf denen die Hintergrund-Löschoption verwendet werden darf.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.misc.erase_flags`

Bedienebene: Experte.

</details>

<h2 id="option-bc122d469c3a">Geschwindigkeit beim Löschen im Hintergrund</h2>

**English:** Background delete speed

<p>Die Geschwindigkeit des Hintergrundlöschvorgangs einstellen. Eine niedrigere Geschwindigkeit beansprucht weniger Festplattenleistung.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.misc.erase_speed`

Bedienebene: Experte.

</details>

<h2 id="option-0a98c9580e8f">ECM immer mit aufnehmen</h2>

**English:** Always include ECM in recordings

<p>Bei &#x27;Ja&#x27; setzt diese Funktion die Timereinstellung außer Kraft. Aufnahmen werden immer verschlüsselt gespeichert und nachträglich entschlüsselt, wenn die Hardware diese Funktion unterstützt.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.recording.always_ecm`

Bedienebene: Experte.

</details>

<h2 id="option-8c68312fff7d">Bei der Aufnahme niemals entschlüsseln</h2>

**English:** Never decrypt while recording

<p>Bei &#x27;Ja&#x27; setzt diese Funktion die Timereinstellung außer Kraft. Aufnahmen werden immer verschlüsselt gespeichert und müssen nachträglich entschlüsselt werden.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.recording.never_decrypt`

Bedienebene: Experte.

</details>

<h2 id="option-4f0fa3196395">Offline-Decodierungsverzögerung (ms)</h2>

**English:** Offline decode delay (ms)

<p>Die Verzögerung (in ms) der Offline-Entschlüsselung einstellen. Diese wird bei jedem Control Word Wechsel berücksichtigt.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.recording.offline_decode_delay`

Bedienebene: Experte.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-0773f099843b">Standardaufnahmetyp</h2>

**English:** Default recording type

<p>&#x27;Entschlüsseln und ECM aufnehmen&#x27; ermöglicht es, die Aufnahme beim Abspielen zu entschlüsseln, falls die Entschlüsselung der Aufnahme fehlschlägt. &#x27;Nicht entschlüsseln, ECM aufnehmen&#x27; kann beim Abspielen entschlüsselt werden. &#x27;Normal&#x27; entschlüsselt die Aufnahme, ohne ECMs aufzunehmen.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.recording.ecm_data`

Bedienebene: Experte.

</details>

<h2 id="option-42233995d30f">Im Standby entschlüsseln</h2>

**English:** Descramble in Standby

<p>Aktivieren, um verschlüsselte Aufnahmen in der Warteschlange im Standby zu entschlüsseln.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.recording.standbyDescramble`

Bedienebene: Experte.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-289029d2b72a">Aufnahmen vor dem Herunterfahren entschlüsseln</h2>

**English:** Descramble recordings before Deep Standby

<p>Aktivieren, um verschlüsselte Aufnahmen in der Warteschlange im Standby vor dem Herunterfahren zu entschlüsseln.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.recording.standbyDescrambleShutdown`

Bedienebene: Experte.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-0cd50a9025ea">Startzeit für Entschlüsselung</h2>

**English:** Descramble start time

<p>Die Zeit auswählen, nach der die Entschlüsselung im Standby fortgesetzt werden soll.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.recording.standbyDescrambleStart`

Bedienebene: Experte.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-47ebe74b17ff">Endzeit für Entschlüsselung</h2>

**English:** Descramble end time

<p>Die Zeit auswählen, bevor die Entschlüsselung im Standby fortgesetzt werden soll.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.recording.standbyDescrambleEnd`

Bedienebene: Experte.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-33a865b80f6e">Benachrichtigung anzeigen, wenn eine Aufnahme startet</h2>

**English:** Show message when recording starts

<p>Bei &#x27;Ja&#x27; wird eine Information angezeigt, sobald eine Aufnahme startet.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.usage.show_message_when_recording_starts`

Bedienebene: Experte.

</details>

<h2 id="option-fd75cf41ceb6">Aufnahmesymbol anzeigen für</h2>

**English:** Show recording symbol

<p>Legt fest, ob das Aufnahmesymbol auf Bildschirm und Display nur bei echten Aufnahmen oder auch bei Streaming- bzw. Pseudoaufnahmen (beispielsweise in EPG-Refresh) sichtbar ist.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.recording.show_rec_symbol_for_rec_types`

Bedienebene: Experte.

</details>

<h2 id="option-a5cbb2d7622f">Warnung vor Neustart anzeigen für</h2>

**English:** Show warning before restart

<p>Legt fest, ob beim Neustart eine Warnung wegen laufender Aufnahmen nur bei echten Aufnahmen oder auch bei Streaming- bzw. Pseudoaufnahmen (beispielsweise in EPG-Refresh) erfolgt.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.recording.warn_box_restart_rec_types`

Bedienebene: Experte.

</details>

---

Quelle: [openATV setup.xml](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/data/setup.xml) · `fdc9347241`.
