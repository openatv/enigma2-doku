---
title: "Blindscan, FastScan, CableScan und weitere Suchmodule"
description: "OpenATV: Blindscan, FastScan, CableScan und weitere Suchmodule."
---


Plugins ergänzen **Menü → Einstellungen → Empfang**. Installiere sie über den [Plugin-Browser/Feed](../../plugins/installieren/), soweit für dein Image verfügbar. Ein Menüeintrag allein macht einen Empfangsteil nicht blindscan-fähig.

## Blindscan: unbekannte Transponder finden

Blindscan durchsucht einen Frequenz- und Symbolratenbereich. Dafür muss der Treiber bzw. das herstellerspezifische Hilfsprogramm den Tuner unterstützen. Manche Empfangswege, insbesondere bestimmte SCR- oder FBC-Kombinationen, sind nicht für denselben Blindscan-Ablauf geeignet. Vorhandene Einschränkungen im Plugin beachten.

| Option | Erklärung |
| --- | --- |
| Tuner / Satellit | Eingerichteten Empfangsweg auswählen |
| Suchart: Sendersuche | Gefundene Träger anschließend nach Diensten durchsuchen und speichern |
| Suchart: Transpondersuche | Träger zeigen und daraus gewünschte Transponder für weitere Suche auswählen |
| Start-/Endfrequenz | Zu prüfender Bereich in MHz; Grenzen hängen von Ku-/C-Band und LOF ab |
| LNB-Inversion | Für besondere LNBs mit LOF oberhalb der Empfangsfrequenz; nicht mit normaler Scan-Inversion verwechseln |
| Polarisation | H/V bzw. L/R und Kombinationen passend zur Anlage |
| Start-/Endsymbolrate | Hier in MSym/s; nicht ungeprüft kSym/s-Zahlen aus dem manuellen Scan eintragen |
| Schrittweite für unterstützte Geräte | Kleinere Schritte können gründlicher sein und länger dauern |
| Vor der Suche löschen / nur frei | Gleiche Grundentscheidung wie bei normaler Suche |
| Nur unbekannte Transponder | Gegen die bekannte Satellitenliste filtern |
| Abgleich mit bekannten Transpondern abschalten | Messwerte nicht an vorhandene Daten angleichen; Spezialfall |
| Duplikatentfernung abschalten | Doppelte Kandidaten behalten; kann unübersichtliche Ergebnisse erzeugen |
| Nachbarsatelliten ausfiltern | Bekannte Träger benachbarter Positionen ausschließen; setzt brauchbare Referenzlisten voraus |

Das Plugin legt Resultate im `satellites.xml`-Format unter **`/tmp`** ab; der genaue Dateiname steht im Ergebnisdialog. Das ersetzt nicht ungefragt die systemweite Liste. `/tmp` ist flüchtig: Benötigte Ergebnisse vor einem Neustart sichern. „XML öffnen“ zeigt ein vorhandenes Ergebnis, „Standards wiederherstellen“ verändert die Plugin-Optionen. [Blindscan-Quellstand](https://github.com/oe-alliance-plugins/Blindscan/blob/35aed6fadf8d2bd2c125237db675d8bae49f349a/src/Blindscan/plugin.py).

## FastScan

FastScan liest vorbereitete Dienst-/Bouquettabellen unterstützter Satellitenanbieter. Wähle **Tuner, Anbieter, HD-Liste, FastScan-Nummerierung und FastScan-Sendernamen**, bei Bedarf ein separates Radio-Bouquet. Automatischer FastScan und die Auswahl der automatisch zu aktualisierenden Anbieter steuern spätere Aktualisierungen. Ohne passende Anbieter-Ausstrahlung gibt es keine universelle Schnellsuche für Astra/Hotbird.

## CableScan

CableScan benötigt einen passenden Kabelanbieter mit dessen **Startfrequenz, Symbolrate, Modulation und Netzwerk-ID**. Optionen für offizielle Kanalnummerierung, HD-Liste und automatischen CableScan bestimmen die erzeugte Liste und deren Aktualisierung. Von normalen DVB-C-Bandsuchen unterscheiden: Ein gültiger Einstieg ins Anbieternetz ist erforderlich.

## Weitere Wege

**Satfinder** stimmt auf einen Transponder ab und zeigt Messwerte; er ersetzt nicht die vollständige Sendersuche. **PositionerSetup** dient zusätzlich der Motorsteuerung. **AutoBouquetsMaker** erzeugt Anbieter-Bouquets. **DAB+ Scan** verarbeitet DAB-Ensembles. Zusätzliche regionale Plugins können weitere Suchen anbieten; ihre Oberfläche ist nicht auf jeder Box installiert.

Frequenzdateien wie `satellites.xml`, `cables.xml` und `terrestrial.xml` liefern Startdaten. Bevorzugte lokale Dateien unter `/etc/tuxbox` und paketierte Daten unter `/usr/share` hängen von Image und Installationspfad ab; den vorhandenen Dateipfad bzw. Symlink prüfen. `lamedb`/`lamedb5` und `userbouquet.*` unter `/etc/enigma2` enthalten dagegen gefundene Dienste und ihre Ordnung. Nicht die eine Datei für den Zweck der anderen verwenden.

Weitere Quellen: [FastScan](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/lib/python/Plugins/SystemPlugins/FastScan/plugin.py), [CableScan](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/lib/python/Plugins/SystemPlugins/CableScan/plugin.py). [Vollständige Suchfeldreferenz](../scan-optionen/).

Einzelne Dialoge mit Feldern und Tasten: [Blindscan](../blindscan/), [FastScan](../fastscan/), [CableScan](../cablescan/) und [Signalfinder](../signalfinder/).
