---
title: "Tuner-Optionsreferenz: alle 124 Formularvarianten"
description: "OpenATV: Tuner-Optionsreferenz: alle 124 Formularvarianten."
---


Diese Referenz erfasst die Formularvarianten des geprüften Quellstands. Abhängig von Hardware und Auswahl erscheint nur ein Teil davon. Gleich benannte Felder können an mehreren Stellen vorkommen. **Die technischen Ausdrücke sind Suchhilfen aus dem Quellcode, keine Befehle zum Einfügen in die Box.** `nim` bezeichnet einen Tuner, `currLnb` das gewählte LNB-Profil, `Sat` die Satellitenzuordnung. Konfiguriere über das Menü.

[Zur Empfangsübersicht](../) · [Verkabelungsbilder](../verkabelung/)

## Satconfig

<h3 id="satconfig-1">Aktuell gemessen</h3>

**English:** Measured current

<p>Stromversorgung für den LNB und Rotor.</p>

`self.inputPowerValue`

<h3 id="satconfig-2">Übernommenes User Band</h3>

**English:** Inherited User Band

<p>Nur Anzeige: Kanal und Frequenz werden für dieselbe Einkabelanlage vom zugeordneten LNB-Profil übernommen.</p>

`ConfigSelection(choices=[('inherited', value)], default='inherited')`

<h3 id="satconfig-3">Spezielle Motoroptionen</h3>

**English:** Extra motor options

<p>Mit zusätzlichen Motoroptionen können Details aus dem Datenblatt des Motors eingegeben werden, so dass berechnet werden kann, wie lange es dauert, die Antenne von einem Satelliten zum anderen zu bewegen.</p>

`self.additionalMotorOptions`

<h3 id="satconfig-4">Konfiguration / Empfangsart</h3>

**English:** Configuration / reception type

<p>Empfangsart aktivieren oder einfachen/erweiterten Sat-Modus und reale Tuner-Verknüpfung auswählen.</p>

`configMode`

<h3 id="satconfig-5">LNB</h3>

**English:** LNB

<p>Dem physikalischen LNB, der konfiguriert wurde, eine Nummer zuweisen. Dieser LNB kann erneut für andere Satelliten (zum Beispiel motorisierte) ausgewählt werden, um die Einrichtung desselben LNBs mehrere Male zu speichern.</p>

`Sat.lnb`

<h3 id="satconfig-6">Konfiguration</h3>

**English:** Configuration mode

<p>Einfachen oder erweiterten Sat-Modus passend zur Anlage auswählen.</p>

`self.nimConfig.dvbs.configMode`

<h3 id="satconfig-7">Satellit</h3>

**English:** Satellite

<p>Orbitalposition aus der bereits konfigurierten Anlage wählen.</p>

`self.nimConfig.dvbs.advanced.sats`

<h3 id="satconfig-8">Satellit</h3>

**English:** Satellite

<p>Den Satelliten auswählen, von dem der Receiver Signale empfängt. Falls unsicher, &#x27;Automatisch&#x27; auswählen und der Receiver wird versuchen, dies zu ermitteln.</p>

`nim.diseqcA`

<h3 id="satconfig-9">OK drücken, um Satelliten auszuwählen</h3>

**English:** Press OK to select satellites

<p>OK drücken, um eine Gruppe von Satelliten auszuwählen, die in einem Block konfiguriert werden sollen.</p>

`nim.pressOKtoList`

<h3 id="satconfig-10">Längengrad</h3>

**English:** Longitude

<p>Den aktuellen Längengrad eingeben. Dies ist die Anzahl der Grade (als Dezimalzahl) der Entfernung zum Nullmeridian.</p>

`nim.longitude`

<h3 id="satconfig-11">Längengrad: Ost/West</h3>

**English:** Longitude hemisphere

<p>Eingeben, ob sich der Receiver in der östlichen oder westlichen Hemisphäre befindet.</p>

`nim.longitudeOrientation`

<h3 id="satconfig-12">Breitengrad</h3>

**English:** Latitude

<p>Den aktuellen Breitengrad eingeben. Dies ist die Anzahl der Grade (als Dezimalzahl) der Entfernung zum Äquator.</p>

`nim.latitude`

<h3 id="satconfig-13">Breitengrad: Nord/Süd</h3>

**English:** Latitude hemisphere

<p>Eingeben, ob sich der Receiver nördlich oder südlich des Äquators befindet.</p>

`nim.latitudeOrientation`

<h3 id="satconfig-14">Stromaufnahme messen</h3>

**English:** Use power measurement

<p>Rotorbewegung anhand des Stromverbrauchs erkennen.</p>

`nim.powerMeasurement`

<h3 id="satconfig-15">LNB / Gerätetyp</h3>

**English:** Type of LNB/Device

<p>Den Typ des verwendeten LNB/Gerätes auswählen (normalerweise &#x27;Universal&#x27;). Wenn der LNB-Typ nicht verfügbar ist, &#x27;Benutzerdefiniert&#x27; auswählen.</p>

`currLnb.lof`

<h3 id="satconfig-16">DiSEqC senden</h3>

**English:** Send DiSEqC

<p>Wenn ein Multiswitch verwendet wird, der ein DiSEqC-Port-A-Befehlssignal benötigt &#x27;Ja&#x27; auswählen, ansonsten &#x27;Nein&#x27;.</p>

`nim.simpleSingleSendDiSEqC`

<h3 id="satconfig-17">Port A</h3>

**English:** Port A

<p>Den Satelliten auswählen, der an Port A des Switches angeschlossen ist. Falls unsicher, &#x27;Automatisch&#x27; auswählen und der Receiver wird versuchen, dies zu ermitteln. Ist dieser Port nicht belegt, &#x27;Nichts angeschlossen&#x27; auswählen.</p>

`nim.diseqcA`

<h3 id="satconfig-18">Port B</h3>

**English:** Port B

<p>Den Satelliten auswählen, der an Port B des Switches angeschlossen ist. Falls unsicher, &#x27;Automatisch&#x27; auswählen und der Receiver wird versuchen, dies zu ermitteln. Ist dieser Port nicht belegt, &#x27;Nichts angeschlossen&#x27; auswählen.</p>

`nim.diseqcB`

<h3 id="satconfig-19">Automatische DiSEqC-Suchreihenfolge</h3>

**English:** Auto DiSEqC search order

<p>Die Suche auf die Satellitengruppe beschränken, die normalerweise verwendet wird.</p>

`autoOrder`

<h3 id="satconfig-20">Rotor Drehgeschwindigkeit</h3>

**English:** Rotor turning speed

<p>Auswählen, wie schnell sich die Antenne zwischen den Satelliten bewegen soll.</p>

`nim.turningSpeed`

<h3 id="satconfig-21">Drehgeschwindigkeit H</h3>

**English:** H turning speed

<p>Im Datenblatt des Motors für diese Information nachsehen oder die Standardeinstellung belassen.</p>

`nim.turningspeedH`

<h3 id="satconfig-22">Drehgeschwindigkeit V</h3>

**English:** V turning speed

<p>Im Datenblatt des Motors für diese Information nachsehen oder die Standardeinstellung belassen.</p>

`nim.turningspeedV`

<h3 id="satconfig-23">Motor-Schrittweite</h3>

**English:** Motor step size

<p>Im Datenblatt des Motors für diese Information nachsehen oder die Standardeinstellung belassen.</p>

`nim.tuningstepsize`

<h3 id="satconfig-24">Motorpositionen</h3>

**English:** Motor positions

<p>Im Datenblatt des Motors für diese Information nachsehen oder die Standardeinstellung belassen.</p>

`nim.rotorPositions`

<h3 id="satconfig-25">Modus</h3>

**English:** Mode

<p>Auswählen, wie die Satellitenschüssel eingerichtet ist (feste Schüssel, einzelner LNB, DiSEqC-Schalter, Rotor usw.).</p>

`nimConfig.diseqcMode`

<h3 id="satconfig-26">Verwendeter Suchlauf</h3>

**English:** Used service scan type

<p>&#x27;Anbieter&#x27; auswählen, um aus der vordefinierten Liste von Kabelmultiplexen zu scannen, &#x27;Bänder&#x27;, um nur bestimmte Teile des Spektrums zu scannen, oder &#x27;Schritte&#x27;, um in Schritten einer bestimmten Frequenzbandbreite zu scannen.</p>

`self.nimConfig.dvbc.scan_type`

<h3 id="satconfig-27">Region</h3>

**English:** Region

<p>Die Region auswählen. Wenn nicht verfügbar, &#x27;Land&#x27; in &#x27;Alle&#x27; ändern und eine der Standardalternativen auswählen.</p>

`self.terrestrialRegions`

<h3 id="satconfig-28">Ursprünglichen Signalstatus erzwingen</h3>

**English:** Force Legacy Signal stats

<p>Bei &#x27;Ja&#x27; werden die Signalwerte (SNR usw.) aus API V3 berechnet.
Dies ist eine alte API-Version, die jetzt ersetzt wurde.</p>

`self.nimConfig.force_legacy_signal_stats`

<h3 id="satconfig-29">Priorität</h3>

**English:** Priority

<p>Diese Einstellung ist nur für spezielle Konfigurationen vorgesehen. Sie weist diesem LNB eine höhere Priorität zu als anderen LNBs mit niedrigeren Werten. Der verfügbare LNB mit der höchsten Priorität wird zuerst für das Tuning von Sendern verwendet.</p>

`currLnb.prio`

<h3 id="satconfig-30">Unicable-Gerätetyp</h3>

**English:** Unicable device type

<p>SCR-LNB, SCR-Matrix oder benutzerdefinierte Einkabelanlage auswählen.</p>

`currLnb.unicable`

<h3 id="satconfig-31">Extern angetrieben</h3>

**English:** Externally powered

<p>Aktivieren, wenn das Unicable-Gerät über einen Power-Inserter oder eine externe Stromversorgung mit Strom versorgt wird.</p>

`currLnb.powerInserter`

<h3 id="satconfig-32">Tuning-Algorithmus</h3>

**English:** Tuning algorithm

<p>Timingeinstellung, in Verbindung mit Unicabledose und Betrieb mehrerer Geräte über einem Kabel.</p>

`currLnb.unicableTuningAlgo`

<h3 id="satconfig-33">Erhöhte Spannung</h3>

**English:** Increased voltage

<p>Bei Umschaltproblemen des LNBs (vertikal/horizontal), sehr langen Antennenkabeln oder Kabeln mit sehr dünnem Innenleiter die Voltzahl, normalerweise 14/18 Volt, erhöhen.</p>

`currLnb.increased_voltage`

<h3 id="satconfig-34">DiSEqC-Modus</h3>

**English:** DiSEqC mode

<p>&#x27;1.0&#x27; für Standard-Commit-Switches auswählen, &#x27;1.1&#x27; für nicht zugewiesene Switches und &#x27;1.2&#x27; für Systeme, die einen Rotor verwenden.</p>

`currLnb.diseqcMode`

<h3 id="satconfig-35">Toneburst</h3>

**English:** Tone burst

<p>&#x27;A&#x27; oder &#x27;B&#x27; auswählen, wenn das Antennensystem dies erfordert. Andernfalls, oder falls unsicher, &#x27;Keine&#x27; auswählen.</p>

`currLnb.toneburst`

<h3 id="satconfig-36">DiSEqC 1.0 Befehl</h3>

**English:** DiSEqC 1.0 command

<p>Wenn ein zugewiesener DiSEqC-Commit-Switch verwendet wird, den Portbuchstaben eingeben, der für den Zugriff auf den für diesen Satelliten verwendeten LNB erforderlich ist.</p>

`currLnb.commitedDiseqcCommand`

<h3 id="satconfig-37">Circularen LNB verwenden</h3>

**English:** Use circular LNB

<p>Wird ein zirkular polarisierter LNB verwendet &#x27;Ja&#x27; auswählen, andernfalls &#x27;Nein&#x27;.</p>

`nim.simpleDiSEqCSetCircularLNB`

<h3 id="satconfig-38">Port C</h3>

**English:** Port C

<p>Den Satelliten auswählen, der an Port C des Switches angeschlossen ist. Falls unsicher, &#x27;Automatisch&#x27; auswählen und der Receiver wird versuchen, dies zu ermitteln. Ist dieser Port nicht belegt, &#x27;Nichts angeschlossen&#x27; auswählen.</p>

`nim.diseqcC`

<h3 id="satconfig-39">Port D</h3>

**English:** Port D

<p>Den Satelliten auswählen, der an Port D des Switches angeschlossen ist. Falls unsicher, &#x27;Automatisch&#x27; auswählen und der Receiver wird versuchen, dies zu ermitteln. Ist dieser Port nicht belegt, &#x27;Nichts angeschlossen&#x27; auswählen.</p>

`nim.diseqcD`

<h3 id="satconfig-40">Spannung und 22 kHz setzen</h3>

**English:** Set voltage and 22KHz

<p>Diese Einstellung auf &#x27;Ja&#x27; belassen, es sei denn, es wird vollständig verstanden, warum sie angepasst wird.</p>

`nim.simpleDiSEqCSetVoltageTone`

<h3 id="satconfig-41">DiSEqC nur bei Satellitenwechsel senden</h3>

**English:** Send DiSEqC only on satellite change

<p>&#x27;Ja&#x27;, um nur dann den DiSEqC-Befehl zu senden, wenn von einem Satelliten zu einem anderen gewechselt wird. Bei &#x27;Nein&#x27; wird der DiSEqC-Befehl bei jedem Senderwechsel gesendet.</p>

`nim.simpleDiSEqCOnlyOnSatChange`

<h3 id="satconfig-42">Schwellwert Stromverbrauch in mA</h3>

**English:** Power threshold in mA

<p>Mindestunterschied zwischen Leerlauf und aktueller Bewegung.</p>

`nim.powerThreshold`

<h3 id="satconfig-43">Anfangszeit</h3>

**English:** Begin time

<p>Bewegen der Satellitenschüssel erst nach dieser Stunde.</p>

`nim.fastTurningBegin`

<h3 id="satconfig-44">Endzeit</h3>

**English:** End time

<p>Bewegen der Satellitenschüssel erst kurz vor dieser Stunde.</p>

`nim.fastTurningEnd`

<h3 id="satconfig-45">Konfiguration</h3>

**English:** Configuration mode

<p>Kabelempfang am vorhandenen Anschluss aktivieren. Bei einem Hybrid-Empfangsteil werden C und T abwechselnd verwendet.</p>

`self.nimConfig.dvbc.configMode`

<h3 id="satconfig-46">Tonamplitude</h3>

**English:** Tone amplitude

<p>Der Receiver kann die Tonamplitude verwenden. Weitere Informationen befinden sich im Handbuch des Receivers.</p>

`nimConfig.toneAmplitude`

<h3 id="satconfig-47">SCPC optimierter Suchbereich</h3>

**English:** SCPC optimized search range

<p>Der Receiver kann SCPC-optimierten Suchbereich verwenden. Weitere Informationen befinden sich im Handbuch des Receivers.</p>

`nimConfig.scpcSearchRange`

<h3 id="satconfig-48">T2MI-RAW-Mode</h3>

**English:** T2MI RAW Mode

<p>Ist der T2MI-RAW-Modus deaktiviert (Standard), kann man eine einzelne T2MI-PLP-Entkapselung verwenden. Mit aktiviertem T2MI-RAW-Modus kann man Astra-SM zur Analyse von T2MI verwenden</p>

`nimConfig.t2miRawMode`

<h3 id="satconfig-49">Anschluss</h3>

**English:** Connector

<p>Den gewünschten Anschluss auswählen.</p>

`nimConfig.input`

<h3 id="satconfig-50">Netzwerk-ID (0 – alle Netzwerke)</h3>

**English:** Network ID

<p>Diese Einstellung hängt vom Kabelanbieter und Standort ab. Wenn die richtige Einstellung nicht bekannt ist, im Menü des offiziellen Kabelreceivers nachsehen, beim Kabelanbieter nachfragen, oder Hilfe über das Internetforum suchen.</p>

`self.nimConfig.dvbc.scan_networkid`

<h3 id="satconfig-51">Region</h3>

**English:** Region

<p>Den Anbieter und die Region auswählen. Wenn sie in dieser Liste nicht vorhanden sind, muss einer der anderen Suchläufe ausgewählt werden.</p>

`self.cableRegions`

<h3 id="satconfig-52">Land</h3>

**English:** Country

<p>Das Land auswählen. Wenn nicht verfügbar, &#x27;Alle&#x27; auswählen.</p>

`self.terrestrialCountries`

<h3 id="satconfig-53">ATSC-Anbieter</h3>

**English:** ATSC provider

<p>Den ATSC-Anbieter auswählen.</p>

`self.nimConfig.atsc.atsc`

<h3 id="satconfig-54">LOF/L</h3>

**English:** LOF/L

<p>Die Frequenz des lokalen Low-Band-Oszillators eingeben. Weitere Informationen befinden sich im Datenblatt des LNBs.</p>

`currLnb.lofl`

<h3 id="satconfig-55">LOF/H</h3>

**English:** LOF/H

<p>Die Frequenz des lokalen High-Band-Oszillators eingeben. Weitere Informationen befinden sich im Datenblatt des LNBs.</p>

`currLnb.lofh`

<h3 id="satconfig-56">Schwellwert</h3>

**English:** Threshold

<p>Die Frequenz eingeben, mit der der LNB zwischen Low- und High-Band wechselt. Weitere Informationen befinden sich im Datenblatt des LNBs.</p>

`currLnb.threshold`

<h3 id="satconfig-57">User-Band für LNB 1 verwenden</h3>

**English:** Use LNB 1 User Band

<p>&#x27;Ja&#x27; auswählen, um denselben User-Band-Kanal und dieselbe Frequenz wie bei LNB 1 zu verwenden. Dies ist für mehrere Satellitenpositionen vorgesehen, die über dasselbe Unicable-System bereitgestellt werden.</p>

`currLnb.unicableUseLnb1UserBand`

<h3 id="satconfig-58">Diktion</h3>

**English:** Diction

<p>Das Protokoll des Unicable/SCR-Gerätes auswählen. &#x27;SCR Unicable&#x27; (Unicable I-Format) oder &#x27;SCR JESS&#x27; (Unicable II-Format).</p>

`currLnb.dictionuser`

<h3 id="satconfig-59">PIN verwenden</h3>

**English:** Use PIN

<p>Aktivieren, wenn das User-Band in einer Unicable-Installation für Mehrfamilienhäuser durch eine PIN geschützt ist.</p>

`currLnb.unicable_use_pin`

<h3 id="satconfig-60">Über anderen Tuner verbunden</h3>

**English:** Connected through another tuner

<p>&#x27;Ja&#x27; auswählen, wenn dieser Tuner über einen anderen Tuner mit dem Unicable/SCR-Gerät verbunden ist, andernfalls &#x27;Nein&#x27;.</p>

`nimConfig_advanced.unicableconnected`

<h3 id="satconfig-61">Spannungsmodus</h3>

**English:** Voltage mode

<p>&#x27;Polarisation&#x27; auswählen, wenn ein &#x27;Universal LNB&#x27; verwendet wird, andernfalls im LNB-Datenblatt nachsehen.</p>

`Sat.voltage`

<h3 id="satconfig-62">Tonmodus</h3>

**English:** Tone mode

<p>&#x27;Band&#x27; auswählen, wenn ein &#x27;Universal LNB&#x27; verwendet wird, andernfalls im LNB-Datenblatt nachsehen.</p>

`Sat.tonemode`

<h3 id="satconfig-63">Schnelles DiSEqC</h3>

**English:** Fast DiSEqC

<p>&#x27;Ja&#x27; auswählen, wenn das Antennensystem schnelles DiSEqC unterstützt. Andernfalls, oder falls unsicher, &#x27;Nein&#x27; auswählen.</p>

`currLnb.fastDiseqc`

<h3 id="satconfig-64">DiSEqC 1.1 Befehl</h3>

**English:** DiSEqC 1.1 command

<p>Wenn ein nicht zugewiesener DiSEqC-Switch verwendet wird, die Portnummer eingeben, die für den Zugriff auf den für diesen Satelliten verwendeten LNB erforderlich ist.</p>

`currLnb.uncommittedDiseqcCommand`

<h3 id="satconfig-65">Befehlsfolge</h3>

**English:** Command order

<p>In dieser Reihenfolge werden DiSEqC-Befehle an das Antennensystem gesendet. Die Reihenfolge muss genau der Reihenfolge entsprechen, in der die physikalischen Geräte entlang des Signalkabels angeordnet sind (ausgehend vom Empfängerende).</p>

`currLnb.commandOrder`

<h3 id="satconfig-66">Sequenz-Wiederholung</h3>

**English:** Sequence repeat

<p>Die Sequenzeinstellung wird wiederholt, wenn das Antennensystem dies erfordert. Normalerweise (bei korrekter Konfiguration) sind Sequenzwiederholungen nicht notwendig. Wenn dies jedoch der Fall ist, erneut überprüfen, ob die Befehlsreihenfolge richtig eingestellt ist.</p>

`currLnb.sequenceRepeat`

<h3 id="satconfig-67">USALS für diesen Satelliten verwenden</h3>

**English:** Use USALS for this sat

<p>USALS bewegt automatisch eine motorisierte Schüssel auf den richtigen Satelliten, basierend auf den vom Benutzer eingegebenen Koordinaten. Ohne USALS muss jeder Satellit individuell eingerichtet und gespeichert werden.</p>

`Sat.usals`

<h3 id="satconfig-68">Konfiguration</h3>

**English:** Configuration mode

<p>&#x27;Aktiviert&#x27; auswählen, wenn an diesem Tuner ein Signalkabel angeschlossen ist, andernfalls &#x27;Nichts angeschlossen&#x27;.</p>

`self.nimConfig.dvbt.configMode`

<h3 id="satconfig-69">Tuner</h3>

**English:** Tuner

<p>Diese Einstellung ermöglicht es, die Tunerkonfiguration eines anderen bereits konfigurierten Tuners zu duplizieren.</p>

`nimConfig.connectedTo`

<h3 id="satconfig-70">Land</h3>

**English:** Country

<p>Das Land auswählen. Wenn nicht verfügbar, &#x27;Alle&#x27; auswählen.</p>

`self.cableCountries`

<h3 id="satconfig-71">5 Volt für aktive Antenne aktivieren</h3>

**English:** Enable 5V for active antenna

<p>Diese Einstellung aktivieren, wenn das Antennensystem Strom benötigt.</p>

`self.nimConfig.dvbt.terrestrial_5V`

<h3 id="satconfig-72">Unicable-Position</h3>

**English:** Unicable position

<p>Diese Einstellung auf &#x27;0&#x27; belassen, um die Position anhand der LNB-Nummer und des Geräteprofils abzuleiten. Nur Werte zwischen &#x27;1&#x27; und &#x27;64&#x27; eingeben, wenn es sich um ein neu programmiertes Unicable-Gerät handelt.</p>

`currLnb.unicablePosition`

<h3 id="satconfig-73">Kanal</h3>

**English:** Channel

<p>Den Unicable-Kanal auswählen, der diesem Tuner zugeordnet werden soll. Das ist eine eindeutige Nummer. Sicherstellen, dass kein anderes Gerät im System demselben Kanal zugeordnet wurde.</p>

`satcr`

<h3 id="satconfig-74">Hersteller</h3>

**English:** Manufacturer

<p>Den Hersteller des Unicable/SCR-Gerätes auswählen. Wenn der Hersteller nicht aufgeführt ist, &#x27;SCR&#x27; auf &#x27;Benutzerdefiniert&#x27; setzen und die Geräteparameter gemäß dem zugehörigen Datenblatt manuell eingeben.</p>

`currLnb.unicableMatrixManufacturer`

<h3 id="satconfig-75">Stromaufnahme messen</h3>

**English:** Use power measurement

<p>Rotorbewegung anhand des Stromverbrauchs erkennen.</p>

`currLnb.powerMeasurement`

<h3 id="satconfig-76">Konfiguration</h3>

**English:** Configuration mode

<p>&#x27;Aktiviert&#x27; auswählen, wenn an diesem Tuner ein Signalkabel angeschlossen ist, andernfalls &#x27;Nichts angeschlossen&#x27;.</p>

`self.nimConfig.atsc.configMode`

<h3 id="satconfig-77">Durchsuchen: EU VHF I-Band</h3>

**English:** Scan EU VHF I band

<p>Diesen Band-, Modulations- oder Symbolratenkandidaten bei der Kabelsuche berücksichtigen. Zusätzliche Symbolraten nur nach Anbieterdaten eintragen.</p>

`self.nimConfig.dvbc.scan_band_EU_VHF_I`

<h3 id="satconfig-78">Durchsuchen: EU MID-Band</h3>

**English:** Scan EU MID band

<p>Diesen Band-, Modulations- oder Symbolratenkandidaten bei der Kabelsuche berücksichtigen. Zusätzliche Symbolraten nur nach Anbieterdaten eintragen.</p>

`self.nimConfig.dvbc.scan_band_EU_MID`

<h3 id="satconfig-79">Durchsuchen: EU VHF III-Band</h3>

**English:** Scan EU VHF III band

<p>Diesen Band-, Modulations- oder Symbolratenkandidaten bei der Kabelsuche berücksichtigen. Zusätzliche Symbolraten nur nach Anbieterdaten eintragen.</p>

`self.nimConfig.dvbc.scan_band_EU_VHF_III`

<h3 id="satconfig-80">Durchsuchen: EU UHF IV-Band</h3>

**English:** Scan EU UHF IV band

<p>Diesen Band-, Modulations- oder Symbolratenkandidaten bei der Kabelsuche berücksichtigen. Zusätzliche Symbolraten nur nach Anbieterdaten eintragen.</p>

`self.nimConfig.dvbc.scan_band_EU_UHF_IV`

<h3 id="satconfig-81">Durchsuchen: EU UHF V-Band</h3>

**English:** Scan EU UHF V band

<p>Diesen Band-, Modulations- oder Symbolratenkandidaten bei der Kabelsuche berücksichtigen. Zusätzliche Symbolraten nur nach Anbieterdaten eintragen.</p>

`self.nimConfig.dvbc.scan_band_EU_UHF_V`

<h3 id="satconfig-82">Durchsuchen: EU SUPER-Band</h3>

**English:** Scan EU SUPER band

<p>Diesen Band-, Modulations- oder Symbolratenkandidaten bei der Kabelsuche berücksichtigen. Zusätzliche Symbolraten nur nach Anbieterdaten eintragen.</p>

`self.nimConfig.dvbc.scan_band_EU_SUPER`

<h3 id="satconfig-83">Durchsuchen: EU HYPER-Band</h3>

**English:** Scan EU HYPER band

<p>Diesen Band-, Modulations- oder Symbolratenkandidaten bei der Kabelsuche berücksichtigen. Zusätzliche Symbolraten nur nach Anbieterdaten eintragen.</p>

`self.nimConfig.dvbc.scan_band_EU_HYPER`

<h3 id="satconfig-84">Durchsuchen: US LOW-Band</h3>

**English:** Scan US LOW band

<p>Diesen Band-, Modulations- oder Symbolratenkandidaten bei der Kabelsuche berücksichtigen. Zusätzliche Symbolraten nur nach Anbieterdaten eintragen.</p>

`self.nimConfig.dvbc.scan_band_US_LOW`

<h3 id="satconfig-85">Durchsuchen: US MID-Band</h3>

**English:** Scan US MID band

<p>Diesen Band-, Modulations- oder Symbolratenkandidaten bei der Kabelsuche berücksichtigen. Zusätzliche Symbolraten nur nach Anbieterdaten eintragen.</p>

`self.nimConfig.dvbc.scan_band_US_MID`

<h3 id="satconfig-86">Durchsuchen: US HIGH-Band</h3>

**English:** Scan US HIGH band

<p>Diesen Band-, Modulations- oder Symbolratenkandidaten bei der Kabelsuche berücksichtigen. Zusätzliche Symbolraten nur nach Anbieterdaten eintragen.</p>

`self.nimConfig.dvbc.scan_band_US_HIGH`

<h3 id="satconfig-87">Durchsuchen: US SUPER-Band</h3>

**English:** Scan US SUPER band

<p>Diesen Band-, Modulations- oder Symbolratenkandidaten bei der Kabelsuche berücksichtigen. Zusätzliche Symbolraten nur nach Anbieterdaten eintragen.</p>

`self.nimConfig.dvbc.scan_band_US_SUPER`

<h3 id="satconfig-88">Durchsuchen: US HYPER-Band</h3>

**English:** Scan US HYPER band

<p>Diesen Band-, Modulations- oder Symbolratenkandidaten bei der Kabelsuche berücksichtigen. Zusätzliche Symbolraten nur nach Anbieterdaten eintragen.</p>

`self.nimConfig.dvbc.scan_band_US_HYPER`

<h3 id="satconfig-89">Durchsuchen: QAM16</h3>

**English:** Scan QAM16

<p>Diesen Band-, Modulations- oder Symbolratenkandidaten bei der Kabelsuche berücksichtigen. Zusätzliche Symbolraten nur nach Anbieterdaten eintragen.</p>

`self.nimConfig.dvbc.scan_mod_qam16`

<h3 id="satconfig-90">Durchsuchen: QAM32</h3>

**English:** Scan QAM32

<p>Diesen Band-, Modulations- oder Symbolratenkandidaten bei der Kabelsuche berücksichtigen. Zusätzliche Symbolraten nur nach Anbieterdaten eintragen.</p>

`self.nimConfig.dvbc.scan_mod_qam32`

<h3 id="satconfig-91">Durchsuchen: QAM64</h3>

**English:** Scan QAM64

<p>Diesen Band-, Modulations- oder Symbolratenkandidaten bei der Kabelsuche berücksichtigen. Zusätzliche Symbolraten nur nach Anbieterdaten eintragen.</p>

`self.nimConfig.dvbc.scan_mod_qam64`

<h3 id="satconfig-92">Durchsuchen: QAM128</h3>

**English:** Scan QAM128

<p>Diesen Band-, Modulations- oder Symbolratenkandidaten bei der Kabelsuche berücksichtigen. Zusätzliche Symbolraten nur nach Anbieterdaten eintragen.</p>

`self.nimConfig.dvbc.scan_mod_qam128`

<h3 id="satconfig-93">Durchsuchen: QAM256</h3>

**English:** Scan QAM256

<p>Diesen Band-, Modulations- oder Symbolratenkandidaten bei der Kabelsuche berücksichtigen. Zusätzliche Symbolraten nur nach Anbieterdaten eintragen.</p>

`self.nimConfig.dvbc.scan_mod_qam256`

<h3 id="satconfig-94">Durchsuchen: 6900 kSym/s</h3>

**English:** Scan 6900 kSym/s

<p>Diesen Band-, Modulations- oder Symbolratenkandidaten bei der Kabelsuche berücksichtigen. Zusätzliche Symbolraten nur nach Anbieterdaten eintragen.</p>

`self.nimConfig.dvbc.scan_sr_6900`

<h3 id="satconfig-95">Durchsuchen: 6875 kSym/s</h3>

**English:** Scan 6875 kSym/s

<p>Diesen Band-, Modulations- oder Symbolratenkandidaten bei der Kabelsuche berücksichtigen. Zusätzliche Symbolraten nur nach Anbieterdaten eintragen.</p>

`self.nimConfig.dvbc.scan_sr_6875`

<h3 id="satconfig-96">Weitere SR durchsuchen</h3>

**English:** Scan additional SR

<p>Diesen Band-, Modulations- oder Symbolratenkandidaten bei der Kabelsuche berücksichtigen. Zusätzliche Symbolraten nur nach Anbieterdaten eintragen.</p>

`self.nimConfig.dvbc.scan_sr_ext1`

<h3 id="satconfig-97">Weitere SR durchsuchen</h3>

**English:** Scan additional SR

<p>Diesen Band-, Modulations- oder Symbolratenkandidaten bei der Kabelsuche berücksichtigen. Zusätzliche Symbolraten nur nach Anbieterdaten eintragen.</p>

`self.nimConfig.dvbc.scan_sr_ext2`

<h3 id="satconfig-98">Frequenz</h3>

**English:** Frequency

<p>Die User-Band-Frequenz auswählen, die diesem Empfänger zugewiesen werden soll. Dies ist die Frequenz, die der SCR-Switch oder SCR-LNB verwendet, um den angeforderten Transponder an den Empfänger zu übertragen.</p>

`stcrvco`

<h3 id="satconfig-99">LNB/Switch-Startzeit [ms]</h3>

**English:** LNB/Switch Bootup time [ms]

<p>Startzeit des SCR-LNB/Schalters in Millisekunden; erst nach Geräteangabe ändern.</p>

`currLnb.bootuptimeuser`

<h3 id="satconfig-100">Modell</h3>

**English:** Model

<p>Das Modell des Unicable/SCR-Gerätes auswählen. Wenn der Hersteller nicht aufgeführt ist, &#x27;SCR&#x27; auf &#x27;Benutzerdefiniert&#x27; setzen und die Geräteparameter gemäß dem zugehörigen Datenblatt manuell eingeben.</p>

`manufacturer.product`

<h3 id="satconfig-101">Hersteller</h3>

**English:** Manufacturer

<p>Den Hersteller des Unicable/SCR-Gerätes auswählen. Wenn der Hersteller nicht aufgeführt ist, &#x27;SCR&#x27; auf &#x27;Benutzerdefiniert&#x27; setzen und die Geräteparameter gemäß dem zugehörigen Datenblatt manuell eingeben.</p>

`currLnb.unicableLnbManufacturer`

<h3 id="satconfig-102">PIN</h3>

**English:** PIN

<p>Die PIN zwischen 0 und 255 eingeben, die diesem User-Band zugewiesen wurde.</p>

`currLnb.unicable_pin`

<h3 id="satconfig-103">Verbunden mit</h3>

**English:** Connected to

<p>Den Tuner auswählen, an dem das Signalkabel des Unicable/SCR-Gerätes angeschlossen ist.</p>

`nimConfig_advanced.unicableconnectedTo`

<h3 id="satconfig-104">Befehlsfolge</h3>

**English:** Command order

<p>In dieser Reihenfolge werden DiSEqC-Befehle an das Antennensystem gesendet. Die Reihenfolge muss genau der Reihenfolge entsprechen, in der die physikalischen Geräte entlang des Signalkabels angeordnet sind (ausgehend vom Empfängerende).</p>

`currLnb.commandOrder1_0`

<h3 id="satconfig-105">DiSEqC 1.1 Wiederholungen</h3>

**English:** DiSEqC 1.1 repeats

<p>Wenn mehrere nicht zugewiesene Switches verwendet werden, müssen die DiSEqC-Befehle mehrmals gesendet werden. Die Anzahl der nicht zugewiesenen Switches in der Kette minus eins festlegen.</p>

`currLnb.diseqcRepeats`

<h3 id="satconfig-106">Rotor Drehgeschwindigkeit</h3>

**English:** Rotor turning speed

<p>Auswählen, wie schnell sich die Antenne zwischen den Satelliten bewegen soll.</p>

`currLnb.turningSpeed`

<h3 id="satconfig-107">Längengrad</h3>

**English:** Longitude

<p>Den aktuellen Längengrad eingeben. Dies ist die Anzahl der Grade (als Dezimalzahl) der Entfernung zum Nullmeridian.</p>

`currLnb.longitude`

<h3 id="satconfig-108">Längengrad: Ost/West</h3>

**English:** Longitude hemisphere

<p>Eingeben, ob sich der Receiver in der östlichen oder westlichen Hemisphäre befindet.</p>

`currLnb.longitudeOrientation`

<h3 id="satconfig-109">Breitengrad</h3>

**English:** Latitude

<p>Den aktuellen Breitengrad eingeben. Dies ist die Anzahl der Grade (als Dezimalzahl) der Entfernung zum Äquator.</p>

`currLnb.latitude`

<h3 id="satconfig-110">Breitengrad: Nord/Süd</h3>

**English:** Latitude hemisphere

<p>Eingeben, ob sich der Receiver nördlich oder südlich des Äquators befindet.</p>

`currLnb.latitudeOrientation`

<h3 id="satconfig-111">Gespeicherte Position</h3>

**English:** Stored position

<p>Die Nummer eingeben, die im Stellungsregler für diesen Satelliten gespeichert ist.</p>

`Sat.rotorposition`

<h3 id="satconfig-112">Drehgeschwindigkeit H</h3>

**English:** H turning speed

<p>Im Datenblatt des Motors für diese Information nachsehen oder die Standardeinstellung belassen.</p>

`currLnb.turningspeedH`

<h3 id="satconfig-113">Drehgeschwindigkeit V</h3>

**English:** V turning speed

<p>Im Datenblatt des Motors für diese Information nachsehen oder die Standardeinstellung belassen.</p>

`currLnb.turningspeedV`

<h3 id="satconfig-114">Motor-Schrittweite</h3>

**English:** Motor step size

<p>Im Datenblatt des Motors für diese Information nachsehen oder die Standardeinstellung belassen.</p>

`currLnb.tuningstepsize`

<h3 id="satconfig-115">Motorpositionen</h3>

**English:** Motor positions

<p>Im Datenblatt des Motors für diese Information nachsehen oder die Standardeinstellung belassen.</p>

`currLnb.rotorPositions`

<h3 id="satconfig-116">Verbunden mit</h3>

**English:** Connected to

<p>Den Tuner auswählen, von dem diese Durchschleifung abhängt.</p>

`nimConfig.connectedTo`

<h3 id="satconfig-117">Frequenzschrittweite beim Suchlauf (kHz)</h3>

**English:** Frequency scan step size(khz)

<p>Die Frequenzschrittgröße eingeben, die der Tuner bei der Suche nach Kabelmultiplexen verwenden soll. Weitere Informationen befinden sich in der Dokumentation des Kabelanbieters.</p>

`self.nimConfig.dvbc.scan_frequency_steps`

<h3 id="satconfig-118">Kanal</h3>

**English:** Channel

<p>Den User-Band-Kanal auswählen, der diesem Tuner zugewiesen werden soll. Dies ist die Frequenz, die der SCR-Schalter verwendet, um den angeforderten Transponder an den Tuner zu übergeben.</p>

`manufacturer.scr[product_name]`

<h3 id="satconfig-119">Schwellwert Stromverbrauch in mA</h3>

**English:** Power threshold in mA

<p>Mindestunterschied zwischen Leerlauf und aktueller Bewegung.</p>

`currLnb.powerThreshold`

<h3 id="satconfig-120">Anfangszeit</h3>

**English:** Begin time

<p>Bewegen der Satellitenschüssel erst nach dieser Stunde.</p>

`currLnb.fastTurningBegin`

<h3 id="satconfig-121">Endzeit</h3>

**English:** End time

<p>Bewegen der Satellitenschüssel erst kurz vor dieser Stunde.</p>

`currLnb.fastTurningEnd`

<h3 id="satconfig-122">Satellit</h3>

**English:** Satellite

<p>Den Satelliten auswählen, der konfiguriert werden soll. Sobald dieser konfiguriert ist, können andere Satelliten ausgewählt und konfiguriert werden, auf die mit demselben Tuner zugegriffen wird.</p>

`nimConfig.advanced.sats`

<h3 id="satconfig-123">Frequenz</h3>

**English:** Frequency

<p>Die User-Band-Frequenz auswählen, die diesem Tuner zugewiesen werden soll. Mit dieser Frequenz leitet der Unicable-Switch den angeforderten Transponder an den Tuner weiter.</p>

`manufacturer.vco[product_name][manufacturer.scr[product_name].index]`

<h3 id="satconfig-124">OK drücken, um Satelliten auszuwählen</h3>

**English:** Press OK to select satellites

<p>Hiermit kann eine Gruppe von Satelliten in einem Block konfiguriert werden.</p>

`nimConfig.pressOKtoList`

Ergänzend: [Unicable](../unicable/), [manuelle Suche](../manueller-suchlauf/), [ABM](../autobouquetsmaker/) und [DAB+](../dabplus/).

Quellen und Prüfumfang: [Empfang](../quellen/).
