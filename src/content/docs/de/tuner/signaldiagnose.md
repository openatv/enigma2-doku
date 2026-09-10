---
title: "Empfang prüfen: Lock, SNR, BER und typische Fehler"
description: "OpenATV: Empfang prüfen: Lock, SNR, BER und typische Fehler."
---


**Ein hoher Signalpegel allein beweist keinen richtigen Empfang.** Wähle einen bekannten frei empfangbaren Dienst und öffne Signal-/Transponderinformationen oder **Satfinder** im Empfangsmenü, soweit installiert.

| Anzeige | Einordnung |
| --- | --- |
| Lock | Tuner hat sich auf einen passenden Träger synchronisiert; sagt noch nichts über Entschlüsselung oder Videocodec |
| SNR / C/N in dB | Verhältnis Nutzsignal zu Störung; für Vergleiche derselben Anlage hilfreicher als uneinheitliche Prozentwerte |
| SNR in Prozent | Treiberspezifische Skalierung; nicht zwischen beliebigen Boxen vergleichen |
| AGC / Signalstärke | Pegel-/Verstärkungsinformation; „mehr“ ist nicht automatisch „besser“ |
| BER | Bitfehleranzeige, wenn Treiber sie liefert; fehlende oder dauerhaft null meldende Anzeige allein ist kein Qualitätsnachweis |
| Frequenz, Polarisation, SR, Netz-IDs | Prüfen, ob tatsächlich der erwartete Multiplex empfangen wird |

Satfinder kann beim Öffnen einen Tuner belegen bzw. Live-TV unterbrechen. Einen passenden Transponder auswählen und stabile Werte beobachten. Auf einer Motoranlage kann die Auswahl einer anderen Position eine Fahrt auslösen. Nicht während wichtiger Aufnahmen experimentieren.

## Fehler systematisch eingrenzen

| Symptom | Zuerst prüfen |
| --- | --- |
| Überall kein Lock | Richtiger Eingang, Kabel, Tuner aktiviert, LNB-/Anlagenart und aktuelle Testfrequenz |
| Nur Astra oder nur Hotbird | DiSEqC-Portbelegung, Ausrichtung und verwendeter Schalterausgang |
| Nur H oder V / nur Low oder High | Spannung, 22 kHz, Quattro-Ebenen, LNB-Daten |
| Ausfall beim Zappen einer zweiten Box | Unicable-UB doppelt, ungeeigneter Verteiler oder gemeinsam geschaltete Legacy-Ebene |
| Kabel klappt, Antenne am TAR 5 nicht | 5-V-Option und tatsächliche Ausgabe, richtige TAR-5-Buchse, Antenne und DC-Sperre |
| Antenne klappt, Kabel nicht | Rückschalten auf 0 V, CATV-Zuleitung und Kabel-Suchdaten |
| Lock und Sendername, aber kein Bild | Verschlüsselung, Programmverfügbarkeit, [Player/Codec](../../wiedergabe/formate/) |
| Sender fehlt nach Suche | Richtige Position/Region, Suchumfang, NIT, Nur-FTA-Filter, alte Frequenzliste |
| Aussetzer bei Wetter oder dauerhaft | Ausrichtung, Stecker, Feuchtigkeit, Pegel/Übersteuerung, Versorgung |

Für eine Fehlermeldung Empfangsart, Anschlusszeichnung, relevante Tuneroptionen, Frequenzdaten, Signalwerte und den genauen Ausfall beschreiben. PINs und private Daten schwärzen. [Fehler im Forum oder Issue melden](../../hilfe/fehler-melden/).

Quellstand: [OpenATV plugin.py](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/lib/python/Plugins/SystemPlugins/Satfinder/plugin.py).
