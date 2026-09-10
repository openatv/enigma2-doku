---
title: "e2MDB – Häufige Probleme"
description: "OpenATV ab 8.0: Häufige Probleme. Einrichtung, Bedeutung und praktische Hinweise zu e2MDB."
---

| Beobachtung | Zuerst prüfen | Geeigneter nächster Schritt |
| --- | --- | --- |
| Kein e2MDB-Menü | Paket installiert, Abhängigkeiten vorhanden, Plugin nicht ausgeblendet? | Erweiterungen prüfen; nach Installation gegebenenfalls GUI neu starten. |
| Kein Backend | Dienststatus, SQLite-Abhängigkeiten, Datenträger und Log. | Statusabfrage aus Anhang A; Ursache beheben, nicht den Skin verändern. |
| Keine Dateien gefunden | Pfad, Mount, Modus, Rekursiv und Markierungen. | Einen kleinen bekannten Ordner testen. |
| Viele Dateien aber kaum Cover | Providerphase noch aktiv? Schlüssel und Limits korrekt? | Fortschritt und Providerstatus prüfen; später gezielt Fehlendes nachsuchen. |
| Falscher Film oder falsche Folge | Titel, Jahr, Pfadtyp und Nummerierung. | Im Editor eine passende Zuordnung suchen und kontrollieren. |
| Vorbefüllung bleibt leer | EPG vorhanden, Sender gewählt, Funktion aktiv, Limits und Sperren? | Erst EPGRefresh-Ergebnis prüfen, dann Prefill-Diagnose. |
| Nur Picons in der Senderliste | Bildvorlage gewählt, e2MDB-Integration aktiv, Artwork vorhanden? | Bildmodus und Datensatz prüfen; Picon kann korrekter Fallback sein. |
| Nur eine normale Medieninfo | Eigene Info-Seite von EMC oder anderem Player? | Unterstützten Aufrufweg und Skin prüfen; der Plugin-Schalter ersetzt nicht jede Fremdansicht. |
| Timerart nicht gefunden | Aufnahmetimer statt Aufgabenplanung geöffnet? | Timer → Aufgabenplanung → Timerart; auch nach beschreibendem Funktionsnamen suchen. |
| Weboberfläche nicht erreichbar | Box-IP, Port, Dienst und Netzwerk. | OpenWebif-Link und direkten konfigurierten Port vergleichen. |
| Webbestand wirkt veraltet | Seite oder Status seit Scanbeginn unverändert? | Ansicht aktualisieren und Indexstatus prüfen, keinen zusätzlichen Vollscan auslösen. |

Ein Netzwerkfehler, No-match und ein fehlendes Bild sind unterschiedliche Zustände. Große Wiederholungen oder Cache-Löschungen verdecken häufig die Ursache. Mit einem konkreten Titel und einem konkreten Fehler beginnen.

[Zur e2MDB-Übersicht](../) · [Alle Einstellungen](../optionen/)
