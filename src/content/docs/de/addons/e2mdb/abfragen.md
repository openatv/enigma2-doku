---
title: "e2MDB – Anhang B Gezielte Abfragen"
description: "OpenATV ab 8.0: Anhang B Gezielte Abfragen. Einrichtung, Bedeutung und praktische Hinweise zu e2MDB."
---

Die folgenden Beispiele lesen Daten. Kleine Limits verwenden und Suchbegriffe mit Leerzeichen in Anführungszeichen setzen. IDs und source_key-Werte aus der tatsächlich gelieferten Antwort übernehmen.

## Medien und Bilder

```text
python3 e2mdbctl.py recordings 10
python3 e2mdbctl.py browser status
python3 e2mdbctl.py browser list 10 "21"
python3 e2mdbctl.py browser list-all 10 "Serientitel"
python3 e2mdbctl.py editor list 10 "Filmtitel"
python3 e2mdbctl.py browser item "ID_AUS_DER_LISTE"
python3 e2mdbctl.py recording "/media/hdd/mkv/21-clip.mkv"
python3 e2mdbctl.py browser debug-artwork 10 "21"
```

browser list zeigt browserbereite Einträge. list-all bezieht auch noch nicht fertige Einträge ein. Bei fehlender Kachel provider_lookup_status, browser_ready, Bildpfade und Gruppierung prüfen. Mehrere Dateien oder Serienfolgen können zu einem Browserobjekt gehören.

## Live TV und Warteschlange

```text
python3 e2mdbctl.py live-queue status
python3 e2mdbctl.py live-queue list 10 pending
python3 e2mdbctl.py live-queue list 10 all "Sendungstitel"
python3 e2mdbctl.py live-results 10 "Sendungstitel"
python3 e2mdbctl.py live-result "SOURCE_KEY_AUS_DER_ANTWORT"
python3 e2mdbctl.py live-artwork "SOURCE_KEY_AUS_DER_ANTWORT"
python3 e2mdbctl.py live-worker status
```

| Zustand | Einordnung |
| --- | --- |
| pending / queued | Wartet auf Bearbeitung oder auf den nächsten zulässigen Versuch. |
| running | Ein Auftrag arbeitet. Vor einem Rücksetzen prüfen, ob er wirklich festhängt. |
| done / ok | Verarbeitung erfolgreich; einzelne optionale Felder können trotzdem fehlen. |
| no_match | Keine passende Zuordnung gefunden. Titel und Provider prüfen. |
| failed / error | Fehler bei Verarbeitung oder Anbieterzugriff. Fehlermeldung auswerten. |
| ended_skipped | Ereignis wurde beispielsweise wegen seines Zeitbezugs nicht weiter verarbeitet. |

Die genaue Zustandsmenge unterscheidet sich zwischen Jobs, Medien und Live-Queue. Ein Filter in einer Webmaske muss nicht jeden internen Zustand einzeln anbieten. Für eine vollständige Einordnung bei Bedarf „all“ verwenden.

Für Schema- und Performancefragen stehen unter anderem „db schema“, „media status“ und „browser debug-performance“ bereit. Keine Schemaänderungen aus einem Beispiel ableiten; die installierte Version ist maßgeblich.

[Zur e2MDB-Übersicht](../) · [Alle Einstellungen](../optionen/)
