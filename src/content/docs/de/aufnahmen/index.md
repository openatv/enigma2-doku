---
title: MovieSelection, EMC oder Dateimanager?
description: Welche Aufnahmeliste erscheint, was EMC ergänzt und wann FileCommander das passende Werkzeug ist.
---

**MovieSelection ist die eingebaute Aufnahmeliste von OpenATV. EnhancedMovieCenter (EMC) ist eine zusätzliche Filmbibliothek. FileCommander ist ein allgemeiner Dateimanager.** Alle können mit Dateien auf HDD, USB oder einem eingehängten NAS arbeiten; sie haben unterschiedliche Aufgaben und Einstellungen.

| Aufgabe | MovieSelection | EMC | FileCommander |
| --- | --- | --- | --- |
| Aufnahmen auswählen und abspielen | Eingebaute Funktion | Eigene Bibliothek und Wiedergabeoberfläche | Kann Mediendateien öffnen; Schwerpunkt bleibt Dateiverwaltung |
| Sendungstitel, Beschreibung, Fortsetzen, Gesehen-Status | In die Aufnahmeliste integriert | Viele zusätzliche Anzeige- und Wiedergabeoptionen | Zeigt Dateien, Verzeichnisse und Dateiinformationen |
| Sortieren, Ordner, Kopieren, Verschieben, Löschen | Über Listenmenü und belegbare Tasten | Über EMC-Menü, Mehrfachauswahl und Tasten | Zwei Spalten: aktive Quelle und gegenüberliegendes Ziel |
| Cover, Vorschau, Wiedergabelisten | Umfang durch Skin/Erweiterungen geprägt | Eigene Optionen für Cover, Vorschau und Playlists | Bildbetrachter und Dateiaktionen; keine EMC-Bibliothek |
| Papierkorb | Eigene Einstellungen, üblicherweise `.Trash` | Eigene Einstellungen und Papierkorbpfad | Löschen ist eine Dateioperation; kein automatischer MovieSelection-/EMC-Papierkorb |
| Textdateien, Skripte, Archive, Berechtigungen | Keine allgemeine Systemverwaltung | Auf Medien ausgerichtet | Hierfür vorgesehen; manche Werkzeuge müssen nachinstalliert werden |

## Welche Liste öffnet die PVR-/VIDEO-Taste?

Ohne Übernahme durch ein Plugin öffnet die Aufnahmetaste die native MovieSelection. EMC kann diesen Einstieg beim Start von Enigma2 ersetzen. In **Erweiterungen → Enhanced Movie Center (Konfiguration/Setup)** bestimmen **EMC deaktivieren** und **Starte EMC mit**, ob und welche Taste EMC übernimmt. Nach dem Ändern speichern und den angebotenen **GUI-/Enigma2-Neustart** durchführen.

Bei **EMC deaktivieren = Ja** wird der EMC-Tastenaufruf nach diesem Neustart nicht mehr eingebaut. Die normale Aufnahmetaste führt dann wieder zur MovieSelection, sofern keine andere Erweiterung oder eigene [Tastenbelegung](../erste-schritte/farbtasten-langdruck/) den Aufruf ersetzt. EMC muss dafür nicht deinstalliert werden. Die Option kann bei einfacher Bedienebene fehlen: auf **Fortgeschritten** oder **Experte** umstellen.

**Ein Wechsel verschiebt keine Aufnahmen und übernimmt nicht die Einstellungen der anderen Liste.** Falls Filme scheinbar fehlen, zuerst Startverzeichnis, Filter, Sortierung und die Erreichbarkeit des [Netzlaufwerks](../netzwerk/freigaben/) vergleichen. MovieSelection und EMC können dieselben Aufnahmedateien und Begleitinformationen lesen; unterschiedlich dargestellte Zustände bedeuten nicht zwingend verschiedene Dateien.

EMC deaktivieren ist im geprüften Stand **kein vollständiges Abschalten seiner Hintergrundfunktionen**: Der Sessionstart ruft die EMC-Initialisierung unabhängig von der Tastenübernahme auf. Prüfe deshalb auch [automatische Papierkorbreinigung und tägliche Aktionen](../addons/emc-papierkorb/), wenn EMC künftig nicht mehr benutzt werden soll.

## Weiter mit der passenden Anleitung

- [MovieSelection bedienen und einstellen](./movieselection/)
- [EMC installieren, öffnen und bedienen](../addons/emc/)
- [EMC-Bibliothek, Cover und Darstellung](../addons/emc-bibliothek/)
- [EMC-Wiedergabe und Sprachen](../addons/emc-wiedergabe/)
- [EMC-Papierkorb, NAS und Hintergrundaktionen](../addons/emc-papierkorb/)
- [Alle Optionen des EMC-Hauptsetups suchen](../addons/emc-optionen/)
- [FileCommander als Dateimanager benutzen](../addons/filecommander/)

Quellabgleich: [MovieSelection](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/lib/python/Screens/MovieSelection.py), [EMC-Einstieg und Sessionstart](https://github.com/oe-mirrors/EnhancedMovieCenter/blob/fc7fd6181e/src/plugin.py), [FileCommander](https://github.com/openatv/enigma2/blob/c446c39a38/lib/python/Plugins/Extensions/FileCommander/plugin.py).
