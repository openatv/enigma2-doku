---
title: "Suchlauf-Optionsreferenz"
description: "OpenATV: Suchlauf-Optionsreferenz."
---


Diese Referenz erfasst die Formularvarianten des geprüften Quellstands. Abhängig von Hardware und Auswahl erscheint nur ein Teil davon. Gleich benannte Felder können an mehreren Stellen vorkommen. **Die technischen Ausdrücke sind Suchhilfen aus dem Quellcode, keine Befehle zum Einfügen in die Box.** `nim` bezeichnet einen Tuner, `currLnb` das gewählte LNB-Profil, `Sat` die Satellitenzuordnung. Konfiguriere über das Menü.

[Zur Empfangsübersicht](../) · [Verkabelungsbilder](../verkabelung/)

## ScanSetup

<h3 id="scansetup-1">Tuner</h3>

**English:** Tuner

<p>Empfangsteil auswählen, dessen Anschluss das gewünschte Signal liefert.</p>

`self.scan_nims`

<h3 id="scansetup-2">Tunerart</h3>

**English:** Tuner type

<p>Empfangsart des unterstützten Hybrid-Tuners wählen; das ist keine zusätzliche Hardware.</p>

`multiType`

<h3 id="scansetup-3">Art des Suchlaufs</h3>

**English:** Type of scan

<p>Einzeltransponder, vordefinierte Frequenz oder eine vollständige Position/Netzliste auswählen.</p>

`self.scan_type`

<h3 id="scansetup-4">Netzwerksuchlauf</h3>

**English:** Network scan

<p>NIT-Informationen für weitere Frequenzen auswerten; benötigt einen empfangbaren Einstiegsträger.</p>

`self.scan_networkScan`

<h3 id="scansetup-5">Vor der Suche löschen</h3>

**English:** Clear before scan

<p>Nein ergänzt; Ja entfernt Dienste im betroffenen Suchbereich; Feeds behalten ist nur eine spezielle Ausnahme.</p>

`self.scan_clearallservices`

<h3 id="scansetup-6">Suche nur freie Sender</h3>

**English:** Only free scan

<p>Nur als frei signalisierte Dienste übernehmen; keine Entschlüsselungsfunktion.</p>

`self.scan_onlyfree`

<h3 id="scansetup-7">Art des Suchlaufs</h3>

**English:** Type of scan

<p>Einzeltransponder, vordefinierte Frequenz oder eine vollständige Position/Netzliste auswählen.</p>

`self.scan_typecable`

<h3 id="scansetup-8">Art des Suchlaufs</h3>

**English:** Type of scan

<p>Einzeltransponder, vordefinierte Frequenz oder eine vollständige Position/Netzliste auswählen.</p>

`self.scan_typeterrestrial`

<h3 id="scansetup-9">System</h3>

**English:** System

<p>DVB-S/S2, DVB-T/T2 oder ATSC passend zu Ausstrahlung und Empfangsteil auswählen.</p>

`self.scan_sat.system`

<h3 id="scansetup-10">Satellit</h3>

**English:** Satellite

<p>Orbitalposition aus der bereits konfigurierten Anlage wählen.</p>

`self.scan_satselection[index_to_scan]`

<h3 id="scansetup-11">Frequenz</h3>

**English:** Frequency

<p>Frequenz in der angezeigten Einheit eingeben. Bei normaler Suche ist das die RF-Frequenz, bei Unicable das ausdrücklich zugeteilte User Band.</p>

`self.scan_sat.frequency`

<h3 id="scansetup-12">Inversion</h3>

**English:** Inversion

<p>Spektralinversion passend zur Übertragung; Auto verwenden, soweit sinnvoll unterstützt.</p>

`self.scan_sat.inversion`

<h3 id="scansetup-13">Symbolrate</h3>

**English:** Symbol rate

<p>Symbolgeschwindigkeit des Trägers nach Betreiberdaten. kSym/s und MSym/s nicht verwechseln.</p>

`self.scan_sat.symbolrate`

<h3 id="scansetup-14">Polarisation</h3>

**English:** Polarization

<p>H/V oder L/R passend zu Dienst und LNB.</p>

`self.scan_sat.polarization`

<h3 id="scansetup-15">Frequenz- oder Sendersuchlauf</h3>

**English:** Use frequency or channel

<p>Terrestrischen Träger über Frequenz oder regionale Kanalnummer angeben.</p>

`self.scan_input_as`

<h3 id="scansetup-16">Art des Suchlaufs</h3>

**English:** Type of scan

<p>Einzeltransponder, vordefinierte Frequenz oder eine vollständige Position/Netzliste auswählen.</p>

`self.scan_typeatsc`

<h3 id="scansetup-17">FEC</h3>

**English:** FEC

<p>Fehlerkorrekturrate des Trägers; richtige Systemvariante und gegebenenfalls Auto verwenden.</p>

`self.scan_sat.fec`

<h3 id="scansetup-18">Modulation</h3>

**English:** Modulation

<p>Modulationsverfahren des Trägers, etwa QPSK/8PSK oder QAM, passend auswählen.</p>

`self.scan_sat.modulation`

<h3 id="scansetup-19">Transponder</h3>

**English:** Transponder

<p>Vorbereiteten Eintrag aus der Frequenzliste wählen; seine Daten können veralten.</p>

`self.preDefTransponders`

<h3 id="scansetup-20">Frequenz</h3>

**English:** Frequency

<p>Frequenz in der angezeigten Einheit eingeben. Bei normaler Suche ist das die RF-Frequenz, bei Unicable das ausdrücklich zugeteilte User Band.</p>

`self.scan_cab.frequency`

<h3 id="scansetup-21">Inversion</h3>

**English:** Inversion

<p>Spektralinversion passend zur Übertragung; Auto verwenden, soweit sinnvoll unterstützt.</p>

`self.scan_cab.inversion`

<h3 id="scansetup-22">Symbolrate</h3>

**English:** Symbol rate

<p>Symbolgeschwindigkeit des Trägers nach Betreiberdaten. kSym/s und MSym/s nicht verwechseln.</p>

`self.scan_cab.symbolrate`

<h3 id="scansetup-23">Modulation</h3>

**English:** Modulation

<p>Modulationsverfahren des Trägers, etwa QPSK/8PSK oder QAM, passend auswählen.</p>

`self.scan_cab.modulation`

<h3 id="scansetup-24">FEC</h3>

**English:** FEC

<p>Fehlerkorrekturrate des Trägers; richtige Systemvariante und gegebenenfalls Auto verwenden.</p>

`self.scan_cab.fec`

<h3 id="scansetup-25">FEC</h3>

**English:** FEC

<p>Fehlerkorrekturrate des Trägers; richtige Systemvariante und gegebenenfalls Auto verwenden.</p>

`self.scan_sat.fec_s2`

<h3 id="scansetup-26">Roll-off</h3>

**English:** Roll-off

<p>Formung des S2-Signals gemäß Übertragungsdaten.</p>

`self.scan_sat.rolloff`

<h3 id="scansetup-27">Pilot</h3>

**English:** Pilot

<p>S2-Pilotsymbole nach Ausstrahlung oder unterstützt automatisch erkennen.</p>

`self.scan_sat.pilot`

<h3 id="scansetup-28">Transportstreamtyp</h3>

**English:** Transport Stream Type

<p>Single- oder Multistream-Empfang auswählen; MIS benötigt passende Hardware und Parameter.</p>

`self.scan_sat.is_id_bool`

<h3 id="scansetup-29">T2MI-PLP</h3>

**English:** T2MI PLP

<p>Zusätzliche Auswahl des T2-MI-Pfads einblenden, wenn Dienst und Hardware ihn unterstützen.</p>

`self.scan_sat.t2mi_plp_id_bool`

<h3 id="scansetup-30">Transponder</h3>

**English:** Transponder

<p>Vorbereiteten Eintrag aus der Frequenzliste wählen; seine Daten können veralten.</p>

`self.CableTransponders`

<h3 id="scansetup-31">System</h3>

**English:** System

<p>DVB-S/S2, DVB-T/T2 oder ATSC passend zu Ausstrahlung und Empfangsteil auswählen.</p>

`self.scan_ter.system`

<h3 id="scansetup-32">Inversion</h3>

**English:** Inversion

<p>Spektralinversion passend zur Übertragung; Auto verwenden, soweit sinnvoll unterstützt.</p>

`self.scan_ter.inversion`

<h3 id="scansetup-33">Bandbreite</h3>

**English:** Bandwidth

<p>Breite des terrestrischen Kanals, beispielsweise 6/7/8 MHz je Übertragung.</p>

`self.scan_ter.bandwidth`

<h3 id="scansetup-34">Informationsrate HP</h3>

**English:** Code rate HP

<p>Fehlerkorrektur des hoch priorisierten DVB-T-Datenstroms.</p>

`self.scan_ter.fechigh`

<h3 id="scansetup-35">Informationsrate LP</h3>

**English:** Code rate LP

<p>Fehlerkorrektur des niedrig priorisierten DVB-T-Datenstroms bei hierarchischer Übertragung.</p>

`self.scan_ter.feclow`

<h3 id="scansetup-36">Modulation</h3>

**English:** Modulation

<p>Modulationsverfahren des Trägers, etwa QPSK/8PSK oder QAM, passend auswählen.</p>

`self.scan_ter.modulation`

<h3 id="scansetup-37">Übertragungsmodus</h3>

**English:** Transmission mode

<p>OFDM-Übertragungsmodus passend zum terrestrischen Multiplex.</p>

`self.scan_ter.transmission`

<h3 id="scansetup-38">Überwachungsintervall</h3>

**English:** Guard Interval

<p>Schutzintervall gegen Laufzeitunterschiede; muss zur Ausstrahlung passen.</p>

`self.scan_ter.guard`

<h3 id="scansetup-39">Hierarchieinfo</h3>

**English:** Hierarchy info

<p>Hierarchische DVB-T-Modulation nach Ausstrahlungsdaten.</p>

`self.scan_ter.hierarchy`

<h3 id="scansetup-40">Region</h3>

**English:** Region

<p>Passende regionale Frequenz- bzw. Anbieterdefinition auswählen.</p>

`self.TerrestrialRegion`

<h3 id="scansetup-41">System</h3>

**English:** System

<p>DVB-S/S2, DVB-T/T2 oder ATSC passend zu Ausstrahlung und Empfangsteil auswählen.</p>

`self.scan_ats.system`

<h3 id="scansetup-42">Kanal</h3>

**English:** Channel

<p>Beim terrestrischen Scan die RF-Kanalnummer; beim SCR-Setup die zugeteilte UB-Kennung.</p>

`self.scan_ter.channel`

<h3 id="scansetup-43">Frequenz</h3>

**English:** Frequency

<p>Frequenz in der angezeigten Einheit eingeben. Bei normaler Suche ist das die RF-Frequenz, bei Unicable das ausdrücklich zugeteilte User Band.</p>

`self.scan_ter.frequency`

<h3 id="scansetup-44">PLP-ID</h3>

**English:** PLP ID

<p>Physical Layer Pipe des DVB-T2-Multiplexes; keine Programmnummer.</p>

`self.scan_ter.plp_id`

<h3 id="scansetup-45">Transponder</h3>

**English:** Transponder

<p>Vorbereiteten Eintrag aus der Frequenzliste wählen; seine Daten können veralten.</p>

`self.TerrestrialTransponders`

<h3 id="scansetup-46">Frequenz</h3>

**English:** Frequency

<p>Frequenz in der angezeigten Einheit eingeben. Bei normaler Suche ist das die RF-Frequenz, bei Unicable das ausdrücklich zugeteilte User Band.</p>

`self.scan_ats.frequency`

<h3 id="scansetup-47">Inversion</h3>

**English:** Inversion

<p>Spektralinversion passend zur Übertragung; Auto verwenden, soweit sinnvoll unterstützt.</p>

`self.scan_ats.inversion`

<h3 id="scansetup-48">Modulation</h3>

**English:** Modulation

<p>Modulationsverfahren des Trägers, etwa QPSK/8PSK oder QAM, passend auswählen.</p>

`self.scan_ats.modulation`

<h3 id="scansetup-49">Input Stream ID</h3>

**English:** Input Stream ID

<p>Kennung des zu empfangenden MIS-Teilstroms.</p>

`self.scan_sat.is_id`

<h3 id="scansetup-50">PLS-Modus</h3>

**English:** PLS mode

<p>Physical-Layer-Scrambling-Verfahren des Signals.</p>

`self.scan_sat.pls_mode`

<h3 id="scansetup-51">PLS-Code</h3>

**English:** PLS code

<p>Zum Dienst gehörender Physical-Layer-Scrambling-Code; kein Entschlüsselungsschlüssel.</p>

`self.scan_sat.pls_code`

<h3 id="scansetup-52">T2MI-PLP-ID</h3>

**English:** T2MI PLP ID

<p>Gewünschte PLP innerhalb des transportierten T2-MI-Signals.</p>

`self.scan_sat.t2mi_plp_id`

<h3 id="scansetup-53">T2MI-PID</h3>

**English:** T2MI PID

<p>PID, die T2-MI-Daten im Transportstrom führt.</p>

`self.scan_sat.t2mi_pid`

<h3 id="scansetup-54">Satellit für Suche aktivieren</h3>

**English:** Satellite enabled for scan

<p>Diese konfigurierte Position in die Multisat-Suche aufnehmen oder auslassen.</p>

`sat`

<h3 id="scansetup-55">Transponder</h3>

**English:** Transponder

<p>Vorbereiteten Eintrag aus der Frequenzliste wählen; seine Daten können veralten.</p>

`self.ATSCTransponders`

<h3 id="scansetup-56">Netz für Suche aktivieren</h3>

**English:** Network enabled for scan

<p>Dieses verfügbare Netz in den automatischen Suchlauf aufnehmen.</p>

`nimconfig`


## Positioner

<h3 id="positioner-1">ONID</h3>

**English:** ONID

<p>Original Network ID des Referenztransponders zur Identitätsprüfung.</p>

`self.transponderOnid`

<h3 id="positioner-2">TSID</h3>

**English:** TSID

<p>Transport Stream ID des Referenztransponders zur Identitätsprüfung.</p>

`self.transponderTsid`

<h3 id="positioner-3">Abstimmen</h3>

**English:** Tune

<p>Manuell eingegebene oder vordefinierte Referenzfrequenz verwenden.</p>

`self.tuning.type`

<h3 id="positioner-4">Satellit</h3>

**English:** Satellite

<p>Orbitalposition aus der bereits konfigurierten Anlage wählen.</p>

`self.tuning.sat`

<h3 id="positioner-5">Frequenz</h3>

**English:** Frequency

<p>Frequenz in der angezeigten Einheit eingeben. Bei normaler Suche ist das die RF-Frequenz, bei Unicable das ausdrücklich zugeteilte User Band.</p>

`self.scan_sat.frequency`

<h3 id="positioner-6">Polarisation</h3>

**English:** Polarization

<p>H/V oder L/R passend zu Dienst und LNB.</p>

`self.scan_sat.polarization`

<h3 id="positioner-7">Symbolrate</h3>

**English:** Symbol rate

<p>Symbolgeschwindigkeit des Trägers nach Betreiberdaten. kSym/s und MSym/s nicht verwechseln.</p>

`self.scan_sat.symbolrate`

<h3 id="positioner-8">Transponder</h3>

**English:** Transponder

<p>Vorbereiteten Eintrag aus der Frequenzliste wählen; seine Daten können veralten.</p>

`self.tuning.transponder`

<h3 id="positioner-9">System</h3>

**English:** System

<p>DVB-S/S2, DVB-T/T2 oder ATSC passend zu Ausstrahlung und Empfangsteil auswählen.</p>

`self.scan_sat.system`

<h3 id="positioner-10">FEC</h3>

**English:** FEC

<p>Fehlerkorrekturrate des Trägers; richtige Systemvariante und gegebenenfalls Auto verwenden.</p>

`self.scan_sat.fec`

<h3 id="positioner-11">Inversion</h3>

**English:** Inversion

<p>Spektralinversion passend zur Übertragung; Auto verwenden, soweit sinnvoll unterstützt.</p>

`self.scan_sat.inversion`

<h3 id="positioner-12">Modulation</h3>

**English:** Modulation

<p>Modulationsverfahren des Trägers, etwa QPSK/8PSK oder QAM, passend auswählen.</p>

`self.scan_sat.modulation`

<h3 id="positioner-13">FEC</h3>

**English:** FEC

<p>Fehlerkorrekturrate des Trägers; richtige Systemvariante und gegebenenfalls Auto verwenden.</p>

`self.scan_sat.fec_s2`

<h3 id="positioner-14">Roll-off</h3>

**English:** Roll-off

<p>Formung des S2-Signals gemäß Übertragungsdaten.</p>

`self.scan_sat.rolloff`

<h3 id="positioner-15">Pilot</h3>

**English:** Pilot

<p>S2-Pilotsymbole nach Ausstrahlung oder unterstützt automatisch erkennen.</p>

`self.scan_sat.pilot`

<h3 id="positioner-16">T2MI-PLP-ID</h3>

**English:** T2MI PLP ID

<p>Gewünschte PLP innerhalb des transportierten T2-MI-Signals.</p>

`self.scan_sat.t2mi_plp_id`

<h3 id="positioner-17">T2MI-PID</h3>

**English:** T2MI PID

<p>PID, die T2-MI-Daten im Transportstrom führt.</p>

`self.scan_sat.t2mi_pid`

<h3 id="positioner-18">Input Stream ID</h3>

**English:** Input Stream ID

<p>Kennung des zu empfangenden MIS-Teilstroms.</p>

`self.scan_sat.is_id`

<h3 id="positioner-19">PLS-Modus</h3>

**English:** PLS mode

<p>Physical-Layer-Scrambling-Verfahren des Signals.</p>

`self.scan_sat.pls_mode`

<h3 id="positioner-20">PLS-Code</h3>

**English:** PLS code

<p>Zum Dienst gehörender Physical-Layer-Scrambling-Code; kein Entschlüsselungsschlüssel.</p>

`self.scan_sat.pls_code`


## CableScan

<h3 id="cablescan-1">Tuner</h3>

**English:** Tuner

<p>Empfangsteil auswählen, dessen Anschluss das gewünschte Signal liefert.</p>

`self.scan_nims`

<h3 id="cablescan-2">Frequenz</h3>

**English:** Frequency

<p>Frequenz in der angezeigten Einheit eingeben. Bei normaler Suche ist das die RF-Frequenz, bei Unicable das ausdrücklich zugeteilte User Band.</p>

`config.plugins.CableScan.frequency`

<h3 id="cablescan-3">Symbolrate</h3>

**English:** Symbol rate

<p>Symbolgeschwindigkeit des Trägers nach Betreiberdaten. kSym/s und MSym/s nicht verwechseln.</p>

`config.plugins.CableScan.symbolrate`

<h3 id="cablescan-4">Modulation</h3>

**English:** Modulation

<p>Modulationsverfahren des Trägers, etwa QPSK/8PSK oder QAM, passend auswählen.</p>

`config.plugins.CableScan.modulation`

<h3 id="cablescan-5">Netzwerk-ID (0 – alle Netzwerke)</h3>

**English:** Network ID

<p>Kennung des Anbieternetzes nach regionaler Betreiberangabe.</p>

`config.plugins.CableScan.networkid`

<h3 id="cablescan-6">Offizielle Sendernummerierung verwenden</h3>

**English:** Use official channel numbering

<p>Die vom unterstützten Anbieter vorgegebene Nummerierung übernehmen.</p>

`config.plugins.CableScan.keepnumbering`

<h3 id="cablescan-7">HD-Liste</h3>

**English:** HD list

<p>HD-Variante der Anbieterliste auswählen, falls angeboten.</p>

`config.plugins.CableScan.hdlist`

<h3 id="cablescan-8">Täglich automatisch suchen</h3>

**English:** Enable auto cable scan

<p>Spätere automatische CableScan-Aktualisierung aktivieren; Zeit- und Standbyverhalten beachten.</p>

`config.plugins.CableScan.auto`


## FastScan

<h3 id="fastscan-1">Tuner</h3>

**English:** Tuner

<p>Empfangsteil auswählen, dessen Anschluss das gewünschte Signal liefert.</p>

`self.scan_nims`

<h3 id="fastscan-2">Anbieter</h3>

**English:** Provider

<p>Tatsächlich empfangbaren und vom Modul unterstützten Anbieter auswählen.</p>

`self.scan_provider`

<h3 id="fastscan-3">HD-Liste</h3>

**English:** HD list

<p>HD-Variante der Anbieterliste auswählen, falls angeboten.</p>

`self.scan_hd`

<h3 id="fastscan-4">Sendernummerierung des Schnellsuchlaufs verwenden</h3>

**English:** Use fastscan channel numbering

<p>Kanalnummern aus den FastScan-Tabellen übernehmen.</p>

`self.scan_keepnumbering`

<h3 id="fastscan-5">Sendernamen des Schnellsuchlaufs verwenden</h3>

**English:** Use fastscan channel names

<p>Sendernamen aus den FastScan-Tabellen verwenden.</p>

`self.scan_keepsettings`

<h3 id="fastscan-6">Separates Radiobouquet erstellen</h3>

**English:** Create separate radio user bouquet

<p>Radiosender in ein eigenes Benutzerbouquet eintragen.</p>

`self.scan_create_radio_bouquet`

<h3 id="fastscan-7">Automatische Schnellsuche aktivieren</h3>

**English:** Enable auto fast scan

<p>Automatische Aktualisierung unterstützter Anbieter aktivieren.</p>

`config.misc.fastscan.auto`

<h3 id="fastscan-8">Automatischen FastScan für Anbieter aktivieren</h3>

**English:** Enable auto fast scan for provider

<p>Diesen Anbieter für automatische FastScan-Läufe auswählen.</p>

`self.config_autoproviders[provider[0]]`


## Blindscan

<h3 id="blindscan-1">Tuner</h3>

**English:** Tuner

<p>Empfangsteil auswählen, dessen Anschluss das gewünschte Signal liefert.</p>

`self.scan_nims`

<h3 id="blindscan-2">Satellit</h3>

**English:** Satellite

<p>Wählen Sie den Satelliten, den Sie durchsuchen möchten</p>

`self.scan_satselection[self.getSelectedSatIndex(index_to_scan)]`

<h3 id="blindscan-3">Suchmodus</h3>

**English:** Search type

<p>&quot;Sender Suche&quot; sucht nach Sendern und speichert sie auf dem Receiver; &quot;Transponder Suche&quot; sucht nach Transpondern und zeigt das Resultat zur Auswahl an. Bei beiden Optionen werden die Ergebnisse in der satellites.xml unter /tmp gespeichert.</p>

`config.blindscan.search_type`

<h3 id="blindscan-4">Nur unbekannte Transponder durchsuchen</h3>

**English:** Only scan unknown transponders

<p>Wenn &quot;Ja&quot;, werden nur Transponder gesucht, die nicht in satellites.xml stehen</p>

`config.blindscan.dont_scan_known_tps`

<h3 id="blindscan-5">Transponder für Suche auswählen</h3>

**English:** Transponder selected for scan

<p>Gefundenen Blindscan-Transponder für die anschließende Dienstesuche markieren.</p>

`cb`

<h3 id="blindscan-6">Polarisation</h3>

**English:** Polarisation

<p>Suchgrenze innerhalb des zum LNB passenden Bereichs setzen; die im Dialog angezeigten MHz-Grenzen beachten.</p>

`config.blindscan.polarization`

<h3 id="blindscan-7">Startsymbolrate für Suche</h3>

**English:** Scan start symbolrate

<p>Symbolraten sind in Megasymbolen, geben Sie einen Wert zwischen 1 und 44 ein</p>

`config.blindscan.start_symbol`

<h3 id="blindscan-8">Endsymbolrate für Suche</h3>

**English:** Scan stop symbolrate

<p>Symbolraten sind in Megasymbolen, geben Sie einen Wert zwischen 2 und 45 ein</p>

`config.blindscan.stop_symbol`

<h3 id="blindscan-9">Vor der Suche löschen</h3>

**English:** Clear before scan

<p>Nein ergänzt; Ja entfernt Dienste im betroffenen Suchbereich; Feeds behalten ist nur eine spezielle Ausnahme.</p>

`config.blindscan.clearallservices`

<h3 id="blindscan-10">Suche nur freie Sender</h3>

**English:** Only free scan

<p>Wenn Sie &quot;Ja&quot; wählen, speichert der Scan nur Kanäle, die nicht verschlüsselt sind; &quot;Nein&quot; findet verschlüsselte und nicht verschlüsselte Kanäle.</p>

`config.blindscan.onlyFTA`

<h3 id="blindscan-11">Deaktivieren Sie das Entfernen von Duplikaten</h3>

**English:** Disable remove duplicates

<p>Doppelte Trägerkandidaten behalten; normalerweise werden Duplikate entfernt.</p>

`config.blindscan.disable_remove_duplicate_tps`

<h3 id="blindscan-12">Angrenzende Satelliten heraus filtern</h3>

**English:** Filter out adjacent satellites

<p>Wenn ein benachbarter Satellit sehr stark ist, vermeidet dies die Suche nach Transpondern, die bekanntermaßen vom benachbarten Satelliten kommen.</p>

`config.blindscan.filter_off_adjacent_satellites`

<h3 id="blindscan-13">Startfrequenz für Suche</h3>

**English:** Scan start frequency

<p>Untere Suchgrenze in MHz innerhalb des zum LNB passenden Bereichs. Den im Dialog genannten Grenzwert beachten.</p>

`self.blindscan_C_band_start_frequency`

<h3 id="blindscan-14">Endfrequenz für Suche</h3>

**English:** Scan stop frequency

<p>Obere Suchgrenze in MHz innerhalb des zum LNB passenden Bereichs. Sie muss über der Startfrequenz liegen.</p>

`self.blindscan_C_band_stop_frequency`

<h3 id="blindscan-15">Scan Schritt in MHz (TBS5925)</h3>

**English:** Scan Step in MHz(TBS5925)

<p>Kleinere Schritte dauern länger, aber das Scannen ist gründlicher</p>

`config.blindscan.step_mhz_tbs5925`

<h3 id="blindscan-16">Deaktivieren Sie die Synchronisierung mit bekannten Transpondern</h3>

**English:** Disable sync with known transponders

<p>Gemessene Parameter nicht mit bekannten Transpondern abgleichen; normalerweise deaktiviert lassen.</p>

`config.blindscan.disable_sync_with_known_tps`

<h3 id="blindscan-17">Startfrequenz für Suche</h3>

**English:** Scan start frequency

<p>Untere Suchgrenze in MHz innerhalb des zum LNB passenden Bereichs. Den im Dialog genannten Grenzwert beachten.</p>

`self.blindscan_Ku_band_start_frequency`

<h3 id="blindscan-18">Endfrequenz für Suche</h3>

**English:** Scan stop frequency

<p>Obere Suchgrenze in MHz innerhalb des zum LNB passenden Bereichs. Sie muss über der Startfrequenz liegen.</p>

`self.blindscan_Ku_band_stop_frequency`

<h3 id="blindscan-19">LNB-Inversion</h3>

**English:** LNB inversion

<p>Nur für ein invertierendes LNB wählen, dessen Oszillator über der Empfangsfrequenz liegt. Normal ist die übliche Vorgabe.</p>

`config.blindscan.user_defined_lnb_inversion`

<h3 id="blindscan-20">Startfrequenz für Suche</h3>

**English:** Scan start frequency

<p>Untere Suchgrenze in MHz innerhalb des zum LNB passenden Bereichs. Den im Dialog genannten Grenzwert beachten.</p>

`self.blindscan_user_defined_lnb_inverted_start_frequency`

<h3 id="blindscan-21">Endfrequenz für Suche</h3>

**English:** Scan stop frequency

<p>Obere Suchgrenze in MHz innerhalb des zum LNB passenden Bereichs. Sie muss über der Startfrequenz liegen.</p>

`self.blindscan_user_defined_lnb_inverted_stop_frequency`

<h3 id="blindscan-22">Startfrequenz für Suche</h3>

**English:** Scan start frequency

<p>Untere Suchgrenze in MHz innerhalb des zum LNB passenden Bereichs. Den im Dialog genannten Grenzwert beachten.</p>

`self.blindscan_user_defined_lnb_start_frequency`

<h3 id="blindscan-23">Endfrequenz für Suche</h3>

**English:** Scan stop frequency

<p>Obere Suchgrenze in MHz innerhalb des zum LNB passenden Bereichs. Sie muss über der Startfrequenz liegen.</p>

`self.blindscan_user_defined_lnb_stop_frequency`

Ergänzend: [Unicable](../unicable/), [manuelle Suche](../manueller-suchlauf/), [ABM](../autobouquetsmaker/) und [DAB+](../dabplus/).

Quellen und Prüfumfang: [Empfang](../quellen/).
