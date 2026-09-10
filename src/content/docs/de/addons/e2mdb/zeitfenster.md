---
title: "e2MDB – Zeitfenster sinnvoll planen"
description: "OpenATV ab 8.0: Zeitfenster sinnvoll planen. Einrichtung, Bedeutung und praktische Hinweise zu e2MDB."
---

Das Endfenster begrenzt unter anderem, wie lange ein Auftrag bei belegtem Backend noch gestartet werden darf. Es ist nicht mit einer garantierten Fertigstellung aller Metadaten zu dieser Uhrzeit gleichzusetzen. Einen großen Bibliotheksscan separat planen.

| Aufgabe | Beispiel für eine kleine Auswahl |
| --- | --- |
| EPGRefresh | Täglich 02:30 bis 03:30; tatsächliche Laufzeit vorher messen. |
| e2MDB-Prefill | Danach, beispielsweise 03:45 bis 05:30. Reserve nach dem EPG-Lauf einplanen. |
| Live-/EPG-Cleanup | Einmal täglich in einem freien Zeitfenster, nicht parallel zum Hauptscan. |
| Medien-Refresh | Nach neuen Aufnahmen oder regelmäßig zu einer eigenen Zeit; große Erstscans manuell überwachen. |
| SQLite-Wartung | Beispielsweise wöchentlich nach abgeschlossenen Jobs und bei ausreichend freiem Platz. |

Dies ist ein Planungsbeispiel, keine universelle Zeitempfehlung. Große Bouquets, langsame Anbieter und NAS-Zugriffe brauchen deutlich längere Fenster. Bereits vorhandene Timer berücksichtigen und Überschneidungen vermeiden.

Standby ist nicht Deep-Standby. Im ausgeschalteten Zustand laufen weder Enigma2-Prefill noch der normale Backend-Prozess weiter. Für Nachtaufgaben die Aufwach- und Standbyfunktionen der Box passend planen und den ersten vollständigen Ablauf kontrollieren.

Ein Prefill-Timer benötigt neben seiner eigenen Aktivierung weiterhin eine funktionierende e2MDB-Konfiguration, passende Sender und vorhandene EPG-Ereignisse. Mehrere Wiederholungsmechanismen beschleunigen denselben Worker nicht.

[Zur e2MDB-Übersicht](../) · [Alle Einstellungen](../optionen/)
