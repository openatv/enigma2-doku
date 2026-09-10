---
title: "e2MDB – Dateien gut organisieren"
description: "OpenATV ab 8.0: Dateien gut organisieren. Einrichtung, Bedeutung und praktische Hinweise zu e2MDB."
---

Eine eindeutige Ablage verbessert die Trefferquote stärker als zusätzliche Grafiken im Skin. e2MDB kann technische Zusätze bereinigen, aber fehlende Titel, falsche Jahre oder widersprüchliche Episodennummern nicht zuverlässig erraten.

## Filme

```text
/media/hdd/Filme/
  Filmtitel (2008)/
    Filmtitel (2008).mkv
  Anderer Film (2021)/
    Anderer Film (2021).mp4
```

Titel und Jahr zusammen verwenden. Das hilft besonders bei Neuverfilmungen und gleichnamigen Werken. Nicht nur „film1.mkv“ oder einen reinen Release-Code als Dateinamen verwenden. Wenn möglich einen Film pro Ordner ablegen.

## Serien

```text
/media/hdd/Serien/
  Serientitel/
    Season 01/
      Serientitel - S01E01 - Episodentitel.mkv
      Serientitel - S01E02 - Episodentitel.mkv
    Season 02/
      Serientitel - S02E01 - Episodentitel.mkv
```

Serienname, Staffel und Episode gehören zusammen. S01E02 ist eindeutiger als „Folge 2“. Der Parser versteht weitere Schreibweisen, dennoch sollte eine Bibliothek ein einheitliches Schema verwenden. Staffelordner allein reichen bei unklaren Dateinamen nicht immer aus.

## Anime und Spezialfolgen

Anime kann nach absoluten Folgen, Staffeln oder einer abweichenden Anbieterreihenfolge sortiert sein. Den Pfadtyp und die Nummerierung auf den gewünschten Anbieter abstimmen. Sonderfolgen und mehrteilige Dateien zunächst einzeln prüfen. Nicht wahllos Staffelnummern ergänzen, nur um einen Treffer zu erzwingen.

## Enigma2 Aufnahmen

Bei TS-Aufnahmen die zugehörigen .meta-, .eit- und weiteren Begleitdateien zusammen mit der Aufnahme erhalten. Sie können Titel, Beschreibung und Ereignisbezug liefern. Beim Umbenennen oder Verschieben über externe Werkzeuge darf diese Zuordnung nicht verloren gehen.

Generische Namen wie „Filme“, „Serien“, „MKV“ oder „1080p“ sind keine Werktitel. Die Option „Ignorierte Ordnernamen-Muster“ hilft bei der Namensauswertung; sie ist nicht mit einem Scan-Ausschluss gleichzusetzen. Für tatsächliche Ausschlüsse den Pfadmodus verwenden.

[Zur e2MDB-Übersicht](../) · [Alle Einstellungen](../optionen/)
