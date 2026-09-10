---
title: "e2MDB – Anhang C Wartung und Datenpfade"
description: "OpenATV ab 8.0: Anhang C Wartung und Datenpfade. Einrichtung, Bedeutung und praktische Hinweise zu e2MDB."
---

## Erst prüfen dann ausführen

```text
python3 e2mdbctl.py cleanup status
python3 e2mdbctl.py cleanup dry-run
python3 e2mdbctl.py cache status
python3 e2mdbctl.py cache dry-run artwork_cache
```

Testläufe zeigen Kandidaten, ohne die angekündigte Bereinigung auszuführen. Auch sie können Arbeit verursachen und gehören bei großen Beständen in eine ruhige Phase. Kategoriebezeichnungen mit der installierten Hilfe vergleichen.

Die folgenden Befehle verändern Daten oder starten Arbeit. Sie sind Beispiele für eine bewusst gewählte Maßnahme und keine Befehlsfolge, die vollständig ausgeführt werden soll.

```text
# Schreibend: abgelaufene Live-/EPG-Daten bereinigen
python3 e2mdbctl.py cleanup run

# Schreibend: SQLite analysieren und komprimieren
python3 e2mdbctl.py db maintenance vacuum
```

Queue-Rücksetzen, No-match-Neuversuche, Cache-Löschungen und stop-Befehle nur gezielt verwenden. Ein Stop kann den zentralen aktiven Auftrag betreffen. Alte „scheduler …“- oder „refresh run“-Beispiele aus früheren Backend-Versionen nicht ungeprüft übernehmen; wiederkehrende Aufgaben werden in OpenATV geplant.

## Eine Online Sicherung der Datenbank

```text
# Voraussetzungen: sqlite3 vorhanden, Zielordner existiert, genug Platz.
# Beispielpfade an die eigene Installation anpassen.
sqlite3 /media/hdd/e2MDB/results.db \
  ".backup '/media/hdd/e2MDB-backup-2026-09-09.db'"
```

Die SQLite-Backupfunktion berücksichtigt den laufenden Datenbankzustand. Für jedes Backup einen eindeutigen Zielnamen wählen. Zusätzlich Konfiguration und bei Bedarf Artwork sichern; anschließend die Sicherung auf einen anderen Datenträger übertragen. Dieselbe HDD allein schützt nicht vor ihrem Ausfall.

| Pfad | Inhalt |
| --- | --- |
| /media/hdd/e2MDB/ | Beispiel für DB und Bildcache beim Cache-Pfad /media/hdd/. |
| /etc/enigma2/e2mdb/ | Exportierte Backend-Konfiguration und paths.json. Kann API-Schlüssel enthalten. |
| /etc/enigma2/settings | Enigma2-Einstellungen, ebenfalls mit möglichen Zugangsdaten. |
| /var/run/e2mdb/ | Socket, Status und Laufzeitkommunikation; kein dauerhafter Backup-Ersatz. |
| /home/root/logs/e2MDB.log | Plugin- und Backend-Diagnose, abhängig von den Logeinstellungen. |

[Zur e2MDB-Übersicht](../) · [Alle Einstellungen](../optionen/)


Die zentrale Datenbank heißt `results.db`. Eine konsistente Sicherung berücksichtigt auch den WAL-Zustand; eine einzelne Dateikopie während laufender Schreibzugriffe reicht dafür nicht.
