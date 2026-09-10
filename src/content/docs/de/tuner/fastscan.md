---
title: "FastScan: Anbieterlisten und automatische Aktualisierung"
description: "OpenATV: FastScan: Anbieterlisten und automatische Aktualisierung."
---


**FastScan** ist eine schnelle, anbieterspezifische Suche anhand ausgestrahlter Tabellen. Es ist nicht auf jeder Box installiert und nicht für jede Satellitenposition oder jeden Anbieter geeignet. Der Menüpunkt wird von der entsprechenden Erweiterung im Empfangsbereich ergänzt.

1. Den passenden Sat-Anschluss konfigurieren und den benötigten Anbieter empfangen können.
2. FastScan öffnen, Tuner und tatsächlich unterstützten Anbieter wählen.
3. HD-/Nummerierungs-/Namensoptionen festlegen und einen manuellen Lauf durchführen.
4. Ergebnis prüfen, bevor automatische Aktualisierungen aktiviert werden.

| Formularfeld | Wirkung |
| --- | --- |
| Tuner | Empfangsweg für die Anbietertabellen |
| Anbieter | Passende FastScan-Datenquelle |
| HD-Liste | HD-Variante der Liste, soweit angeboten |
| FastScan-Sendernummerierung | Offizielle Listenpositionen übernehmen |
| FastScan-Sendernamen | Namen aus den Tabellen übernehmen |
| Separates Radio-Bouquet | Radio in einer eigenen Favoritenliste ablegen |
| Automatischen FastScan aktivieren | Automatische spätere Läufe zulassen |
| Automatischen FastScan für Anbieter aktivieren | Die Anbieter für die Automatik einzeln auswählen |

**OK/Suchlauf** startet die Suche, **EXIT/Abbrechen** verlässt die Ansicht gemäß Tastenbeschriftung. Automatische Läufe sind Plugin-Funktionen mit Standby-/Zeitbedingungen; sie sind kein gewöhnlicher Enigma2-Aufnahmetimer und kein Linux-Cron-Eintrag. Erreichbarkeit des Anbieters, Aufnahmebelegung und eigene Bouquet-Anpassungen berücksichtigen.

Die [Referenz](../scan-optionen/#fastscan) dokumentiert alle acht Feldvarianten aus dem OpenATV-Quellstand. Auf der bisherigen Testinstallation wurde FastScan nicht ausgeführt; es wird kein Anbieterergebnis behauptet. Für universelle Frequenzsuche stehen [manueller](../manueller-suchlauf/) und [automatischer Suchlauf](../automatischer-suchlauf/) bereit.

Quellstand: [OpenATV plugin.py](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/lib/python/Plugins/SystemPlugins/FastScan/plugin.py).
