---
title: "e2MDB – Medienbrowser und Werkzeuge"
description: "OpenATV ab 8.0: Medienbrowser und Werkzeuge. Einrichtung, Bedeutung und praktische Hinweise zu e2MDB."
---

## Media Browser

Nach Titel, Medientyp, Jahr oder Genre suchen. Eine Darstellersuche ist möglich, soweit entsprechende Daten vorliegen. Vorschläge und verfügbare Filter hängen vom aufgebauten Index ab. Serien können mit Staffeln und Folgen zusammengefasst sein; dieselbe Datei erscheint deshalb nicht zwingend als eigenständige Kachel.

Eintrag wählen, Detaildaten ansehen und vorhandene Bilder prüfen. „Abspielen“ startet die Datei auf dem Receiver, nicht als Videostream im Browser. „Stop“ beeinflusst die Wiedergabe auf der Box. Diese Tasten nicht für eine reine Metadatenkontrolle verwenden.

## Werkzeuge

| Bereich | Was dort möglich ist |
| --- | --- |
| Backend-Jobs | Aktuellen Auftrag, Queue und Verlauf lesen; zusätzlich Aufträge starten oder stoppen. |
| DB- und Medienstatus | Datenbank- und Medienzähler laden, ohne einen neuen Bibliotheksscan auszulösen. |
| Live-/EPG-Queue | Zustände und einzelne Ereignisse prüfen. Rücksetzen und Leeren sind schreibende Aktionen. |
| Wartung | SQLite-Wartung, Cleanup-Testlauf, echte Bereinigung und Cache-Werkzeuge. |
| Scanpfade | Aktuell wirksame Medienpfade und ihre Erreichbarkeit prüfen. |

„Status laden“ oder „Alles aktualisieren“ erneuert die angezeigten Statuswerte. „Scan starten“, „Cleanup starten“ und „Cache bereinigen“ verändern dagegen den Arbeitszustand beziehungsweise gespeicherte Daten. Beschriftungen genau beachten.

[Zur e2MDB-Übersicht](../) · [Alle Einstellungen](../optionen/)
