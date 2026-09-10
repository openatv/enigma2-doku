---
title: "e2MDB – Anhang H Listen und Performance"
description: "OpenATV ab 8.0: Anhang H Listen und Performance. Einrichtung, Bedeutung und praktische Hinweise zu e2MDB."
---

## Native ServiceList statt Converter pro Eintrag

Die moderne OpenATV-ServiceList bietet ereignisbezogene Bildfelder. Bildorientierte Vorlagen können ImageOrPicon1 verwenden. Die 1 bezeichnet das erste Ereignis des Eintrags. Die Vorlage muss zu einer nativen ServiceList gehören; eine beliebige Plugin-Listbox kennt diese Feldnamen nicht automatisch.

```xml
<!-- Ausschnitt innerhalb eines nativen ServiceList-Template-Modus -->
<pixmap index="ImageOrPicon1"
    position="8,8" size="222,111"
    alpha="blend" scale="centerScaled" />
<text index="Title1"
    position="8,125" size="222,44"
    font="0" verticalAlignment="center" />
```

Schriften, Itemhöhe, weitere Felder und Modi gehören zur umgebenden Vorlage. Für reine Bilder ohne Picon-Ersatz steht im entsprechenden Vertrag Image1 zur Verfügung. Die tatsächlichen Indizes im jeweiligen E2-Stand prüfen. CoverOrPicon ist in diesem Converter kein gültiges Token und sollte nicht aus älteren Beispielen übernommen werden.

## Die Oberfläche reaktionsfähig halten

- Keine Provideranfragen, rekursiven Dateisuchen oder SQL-Arbeit in paint-, Converter- oder Selection-Callbacks starten.
- Kein synchrones Prüfen langsamer NAS-Pfade bei jedem Neuzeichnen. Metadaten und Bildpfade aus dem vorbereiteten Datenbestand nutzen.
- Große Bilder nur dort vorsehen, wo sie wirklich sichtbar sind. Bildflächen mit passendem Seitenverhältnis und sinnvoller Größe planen.
- Farben, Verläufe und einfache Flächen mit nativen Skin- und Grafikfunktionen zeichnen; dafür keine großen Hintergrund-PNGs erzeugen.
- Wiederkehrende Screenbestandteile als Panels und Listenaufbauten als Templates gemeinsam verwenden.

## Prüfliste vor Veröffentlichung

- Ohne Plugin, mit nur .pyc-Dateien und bei deaktivierter e2MDB-Funktion testen.
- Leere EPG-Daten, No-match, vorhandenen Text ohne Bild sowie fehlendes Picon prüfen.
- Schnell zwischen Sendern und Ereignissen wechseln; alte Cover und Texte dürfen nicht stehen bleiben.
- HD, FHD und WQHD prüfen: lange Titel, verschiedene Bildformate, alle Listenmodi und vollständige letzte Zeilen.
- Mit laufendem Scan testen. Eine noch leere Metadatenfläche darf weder blockieren noch einen Skinfehler auslösen.

[Zur e2MDB-Übersicht](../) · [Alle Einstellungen](../optionen/)
