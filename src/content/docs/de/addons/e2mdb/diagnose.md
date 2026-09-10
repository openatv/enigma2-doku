---
title: "e2MDB – Fehler gezielt eingrenzen"
description: "OpenATV ab 8.0: Fehler gezielt eingrenzen. Einrichtung, Bedeutung und praktische Hinweise zu e2MDB."
---

## Vom Inhalt bis zur Anzeige prüfen

1. Bei Medien: existiert die Datei unter dem eingestellten Pfad? Bei Live-TV: existiert das passende Ereignis im EPG?
2. Wurde daraus ein Datensatz beziehungsweise ein Queue-Eintrag erzeugt?
3. Ist die Anbieterzuordnung erfolgreich, noch offen, fehlgeschlagen oder ohne Treffer?
4. Sind die benötigten Bildpfade oder Textfelder vorhanden?
5. Verwendet der Skin den richtigen Datentyp und die passende Quelle?
6. Verschwindet der Fehler nach erneutem Öffnen der Ansicht, oder ist er mit einem bestimmten Titel reproduzierbar?

## Unterstützung mit brauchbaren Angaben

- Boxmodell, OpenATV-Stand, e2MDB-Version und verwendeten Skin nennen.
- Die betroffene Funktion und die genaue Tastenfolge beschreiben.
- Bei Medien einen aussagekräftigen Beispielnamen, Typ und Pfad nennen; private Verzeichnisnamen gegebenenfalls anonymisieren.
- Bei Live-TV Sender, Sendung und Uhrzeit sowie vorhandene EPG-Abdeckung angeben.
- Statusausgabe, relevante kurze Logstelle und ein Bild des Problems beifügen. Keine komplette Sammlung oder unbereinigte Konfiguration veröffentlichen.

## Logs sparsam verwenden

Der Logmodus bietet Aus, Ein und Ausführlich. Für eine kurze Reproduktion kann Ausführlich helfen. Danach auf die benötigte Stufe zurückstellen. Das Plugin kann in e2MDB.log, das Enigma2-Debuglog oder beide Ziele schreiben.

Die normale e2MDB-Logdatei liegt in diesem Stand unter /home/root/logs/e2MDB.log. Größe und Rotation sind konfigurierbar. Vor dem Teilen nach Schlüsseln, Tokens, vollständigen URLs und privaten Pfaden suchen. Ein sichtbarer Fehlertext allein kann bereits genug sein.

## Was nicht sofort geändert werden sollte

Keine direkten SQL-Änderungen an laufenden Datenbanken, keine massenhaften Cache-Löschungen und keine Änderungen an Standard-Picon-Renderern als erste Maßnahme. Ein Anzeigeproblem kann aus einer Skinquelle, einem Format oder einem noch nicht fertigen Datenbestand entstehen.

Bei Versionswechseln Screenshots und Befehle mit der installierten Version vergleichen. Ältere Anleitungen können andere Cachepfade, Tastenbelegungen oder einen inzwischen entfernten Backend-Scheduler beschreiben.

[Zur e2MDB-Übersicht](../) · [Alle Einstellungen](../optionen/)
