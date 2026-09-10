---
title: "e2MDB – OpenATV Aufgabenplanung"
description: "OpenATV ab 8.0: OpenATV Aufgabenplanung. Einrichtung, Bedeutung und praktische Hinweise zu e2MDB."
---

Wiederkehrende e2MDB-Aufgaben werden in der OpenATV-Aufgabenplanung eingerichtet: „Hauptmenü → Timer → Aufgabenplanung“. Nicht im normalen Aufnahmetimer und nicht bei CronTimer nach den Funktionen suchen.

| Funktion | Sichtbarer Eintrag beziehungsweise Bedeutung |
| --- | --- |
| e2MDB Refresh | e2MDB-Medienordner scannen. Erfasst konfigurierte Medienpfade und ergänzt Metadaten. |
| e2MDB Live/EPG Prefill | Ausgewählte/bevorzugte Live-/EPG-Metadaten vorbefüllen. |
| e2MDB Live/EPG Cleanup | Abgelaufene Live-/EPG-Metadaten und Warteschlangeneinträge entfernen. |
| e2MDB SQLite Maintenance | e2MDB-Datenbank optimieren. Datenbankwartung, kein neuer Medienscan. |

1. In der Zeitplanerübersicht Grün „Hinzufügen“ drücken.
2. Bei „Timerart“ die gewünschte e2MDB-Funktion auswählen; gegebenenfalls mit OK die vollständige Auswahl öffnen.
3. Wiederholung, Startdatum, Timerstartfenster und Timerendfenster festlegen.
4. Standbyausführung und Verhalten nach dem Ereignis bewusst wählen. Für erste Tests „Keine Änderung“ nach dem Ereignis verwenden.
5. Mit Grün speichern und prüfen, ob die Aufgabe aktiviert ist. Status und Protokoll nach dem ersten Lauf kontrollieren.

Fehlen die Funktionen nach einer Installation, zuerst Plugin und GUI-Neustart prüfen. Keine alten Backend-Scheduler-Dateien als Ersatz anlegen: Die zeitliche Planung gehört in diesem Stand zu Enigma2.

[Zur e2MDB-Übersicht](../) · [Alle Einstellungen](../optionen/)
