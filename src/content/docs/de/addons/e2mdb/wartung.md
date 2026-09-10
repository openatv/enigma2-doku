---
title: "e2MDB – Wartung und Sicherung"
description: "OpenATV ab 8.0: Wartung und Sicherung. Einrichtung, Bedeutung und praktische Hinweise zu e2MDB."
---

Wartung soll einen funktionierenden Bestand pflegen. Cache oder Datenbank vollständig zu löschen ist keine regelmäßige Wartungsstrategie. Erst Status lesen, dann die kleinste passende Maßnahme wählen.

| Maßnahme | Wirkung | Wann sinnvoll |
| --- | --- | --- |
| Live-/EPG-Cleanup | Entfernt abgelaufene Metadaten und bereinigbare Queue-Einträge gemäß Regeln. | Regelmäßig in einem freien Zeitfenster. |
| SQLite-Wartung | Optimiert Datenbankstrukturen; ANALYZE, optional VACUUM oder REINDEX. | Nach Bedarf oder in einem ruhigen regelmäßigen Fenster. |
| VACUUM | Baut die Datenbank neu auf und kann ungenutzten Platz freigeben. | Nach größeren Bereinigungen; Platz und Zeit einplanen. |
| REINDEX | Baut Indizes neu auf. | Gezielt bei begründetem Bedarf, nicht als täglicher Pflichtlauf. |
| Fehlende Metadaten erneut suchen | Ergänzt fehlende Zuordnungen und Bilder. | Nach korrigiertem Zugang, Providerproblem oder unvollständigem Scan. |
| Cache leeren | Entfernt je nach gewählter Kategorie Bilder oder weitere Cache-Daten. | Nur bewusst zur Fehlerbehebung oder zum Neuaufbau. |
| Datenbank oder alles löschen | Verwirft gespeicherte Zuordnungen und eventuell den gesamten e2MDB-Bestand. | Nur mit Sicherung und geplantem Neuaufbau. |

## Ein einfacher Wartungsplan

- Nach neuen Medien: gezielten Scan und einige Stichproben durchführen.
- Regelmäßig: freien Speicher, Providerfehler und Queue-Rückstand prüfen; abgelaufene Live-/EPG-Daten bereinigen.
- Vor Updates oder Datenträgerwechsel: Konfiguration und Daten konsistent sichern.
- Ausführliches Logging nur so lange aktiv lassen, wie es für die Diagnose benötigt wird.

## SQLite konsistent sichern

Die Datenbank läuft im WAL-Modus. Eine beliebige Kopie von results.db während eines aktiven Schreibvorgangs ist keine verlässliche vollständige Sicherung. Entweder eine SQLite-Online-Sicherung verwenden oder alle zugreifenden Prozesse kontrolliert beenden und den vollständigen Bestand konsistent sichern. Die technische Anleitung zeigt eine Online-Sicherung.

API-Konfiguration, Scanpfade und optional der Bildcache gehören ebenfalls zur Wiederherstellung. Eine Datenbanksicherung sichert nicht automatisch die eigentlichen Filme. Wiederherstellung nur bei gestoppten zugreifenden Diensten und mit passender Plugin-Version durchführen.

[Zur e2MDB-Übersicht](../) · [Alle Einstellungen](../optionen/)
