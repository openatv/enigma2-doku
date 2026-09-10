---
title: "Sendersuche: automatisch, manuell oder Anbieterlisten"
description: "OpenATV: Sendersuche: automatisch, manuell oder Anbieterlisten."
---


**Erst den Empfang konfigurieren, dann suchen.** Ein Scan benötigt ein funktionierendes Signal und schreibt gefundene Dienste in die Senderdatenbank. Bouquets ordnen diese Dienste; sie sind nicht dasselbe wie die Frequenzliste, von der eine Suche startet.

## Welches Verfahren passt?

| Verfahren | Einsatz |
| --- | --- |
| [Automatischer Suchlauf](../automatischer-suchlauf/) | Eingerichtete Positionen/Netze mit ihren Suchdaten durchsuchen |
| [Manuell: einzelner Transponder](../manueller-suchlauf/) | Neue oder geänderte Frequenz gezielt prüfen |
| Manuell: vordefinierter Transponder | Eintrag aus der vorbereiteten Frequenzliste auswählen |
| Einzelner Satellit / mehrere Satelliten | Umfang der Sat-Suche selbst bestimmen |
| [Blindscan](../blindscan/) | Träger im Spektrum suchen, ohne alle Frequenzen vorher zu kennen; benötigt geeignete Hardware/Backend |
| [FastScan](../fastscan/) / [CableScan](../cablescan/) | Tabellen eines unterstützten Anbieters übernehmen |
| [AutoBouquetsMaker](../autobouquetsmaker/) | Anbieterinformationen auswerten und daraus regelmäßig Bouquets erzeugen |
| [DAB+ Scan](../dabplus/) | DAB-Ensembles aus unterstützten Satellitenfeeds bzw. RTL-SDR empfangen |
| Senderlistenpaket vom Feed | Vorbereitete Datenbank/Bouquets installieren; kein Nachweis des eigenen Empfangs |

## Automatische Suche durchführen

Menü → Einstellungen → Empfang → **Automatischer Suchlauf**. Prüfe die ausgewählten Netze/Positionen. Mehrere Tuner mit demselben Empfangsweg müssen nicht zwingend dieselben Frequenzen mehrfach durchsuchen. Bei einem Hybrid-Tuner werden die aktivierten Empfangsarten getrennt behandelt.

1. Bestehende [Settings sichern](../../wartung/backup-restore/), wenn eigene Listen erhalten bleiben sollen.
2. Vor dem Start **„Vor der Suche löschen“** prüfen. Für ergänzende Suche gewöhnlich **Nein** verwenden; ein Dialog kann einen anderen Standard vorbelegen.
3. Gewünschte Netze markieren und die beschriftete Scan-Aktion starten.
4. Fortschritt, gefundene Dienste und eventuelle Fehler abwarten. Ein vollständiger Suchlauf kann deutlich länger dauern als ein Einzeltransponder-Test.
5. Ergebnis in „Alle“/„Satelliten“/„Anbieter“ der Senderliste prüfen und Programme dem eigenen Bouquet zuordnen.

## Löschen, Netzwerksuche und freie Sender

| Option | Wirkung |
| --- | --- |
| Vor der Suche löschen: Nein | Gefundene Dienste ergänzen/aktualisieren; alte Einträge können verbleiben |
| Ja | Dienste im vom Scan betroffenen Bereich entfernen und neu erfassen; Vorsicht bei unvollständigen Empfangsdaten |
| Ja, Feeds behalten | Löschvariante mit Ausnahmen für als Feeds behandelte Dienste/Transponder; kein vollständiger Schutz aller eigenen Favoriten |
| Netzwerksuche / NIT | Aus dem empfangenen Netz zusätzliche Transponderinformationen übernehmen; ist keine IP-/LAN-Suche |
| Nur frei empfangbare | Beschränkt die erfassten Dienste anhand der ausgestrahlten Verschlüsselungsinformationen; entschlüsselt nichts |

Die konkrete Löschreichweite hängt von Suchtyp und Scan-Flags ab. Ein Bouquet kann anschließend noch auf einen entfernten Dienst verweisen und zeigt dann keinen nutzbaren Sender. Ein langsamer Scan ist kein Grund, währenddessen weitere Empfangseinstellungen zu verändern. Laufende Aufnahmen zuerst berücksichtigen.

Vertiefung: [Manuelle Parameter](../manueller-suchlauf/), [Suchmodule](../scan-module/), [ABM](../autobouquetsmaker/), [DAB+](../dabplus/), [alle Suchfelder](../scan-optionen/).

Quellstand: [OpenATV ScanSetup.py](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/lib/python/Screens/ScanSetup.py).
