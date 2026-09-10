---
title: "Umbra – Hilfe bei typischen Fragen"
description: "OpenATV ab 8.0: Hilfe bei typischen Fragen. Vollständige Umbra-Anleitung mit Auswahlwerten und Beispielen."
---

## Warum ändert das neue Paket die Farbe nicht

Eine eigene Abweichung hat Vorrang. Wähle „Vom Stilpaket“ oder leere das passende RGB-Feld. Gelb setzt alle Stilabweichungen zurück.

## Warum fehlen Cover und Panorama im Menü

Prüfe e2MDB und den EventInfo-Converter. Bei vorhandenem Menü, aber fehlendem Bild zusätzlich die Datenbank, Metadaten-Schalter und Treffer zur Sendung prüfen.

## Warum sehe ich kein Wetter

Die Infobar muss eingeblendet sein. Prüfe Wettermodus, Ort, Koordinatenreihenfolge und Dezimalpunkt. Ohne gültige Daten bleibt die Anzeige absichtlich verborgen.

## Warum ist die Infobar technisch so voll

Video-/Audioinformationen, Statussymbole, Tuner- und Verschlüsselungsinfos sind getrennte Optionen. Schalte gezielt die nicht benötigten Gruppen aus.

## Warum fehlen Picons oder passen ihre Proportionen nicht

Picon-Dateien und deren OpenATV-Anbindung prüfen. Das Seitenverhältnis im Umbra-Menü passend zum Satz wählen. Umbra ist kein Picon-Downloader.

## Warum passt ein Plugin noch nicht zum Skin

Das Plugin kann einen anderen Screen-Namen oder eigene Laufzeit-Widgets verwenden. Pluginname, Version, Screen-Titel, Ablauf, Auflösung und ein Bild melden. Nicht alle übernommenen Vorlagen sind bereits live getestet.

## Warum steht ein Neustart zur Auswahl

Der native Reload war nicht verfügbar oder wurde nicht vollständig abgeschlossen. Vor einem Neustart laufende Aufnahmen und andere Box-Aktivitäten berücksichtigen.

## Was tun bei schlecht lesbaren eigenen Farben

Zum Paketwert zurückgehen. Danach nur einzelne Rollen ändern und normale sowie ausgewählte Einträge, Aufnahme-Markierung und TV-Durchsicht prüfen.

Dokumentationsbasis: Umbra 0.4.10, die implementierten 39 Optionen in umbra/styles.py, die Bedienlogik von UmbraSettings sowie die lokalen Stil-, Medien- und Receivertestberichte. Es handelt sich um eine Benutzerdokumentation des aktuellen Entwicklungsstands, nicht um eine Vollabnahme aller Receiver und Plugins.

[Umbra-Übersicht](../) · [Alle 39 Stiloptionen](../optionen/)
