---
title: "e2MDB – Quellen und Begriffe"
description: "OpenATV ab 8.0: Quellen und Begriffe. Einrichtung, Bedeutung und praktische Hinweise zu e2MDB."
---

Dokumentationsstand: September 2026. Grundlage sind die bereitgestellte deutsche e2MDB-Anleitung, Plugin und Backend aus openatv/e2MDB, der Converter E2MDBEventInfo und die native OpenATV-Testinstallation. Dieser Bereich beschreibt das neue Add-on ab OpenATV 8.0. Technische Einzelheiten sind an den unten genannten Quellstand gebunden.

## Offizielle Anbieterseiten

- [TMDb API Zugang und Authentifizierung](https://developer.themoviedb.org/docs/authentication-application)
- [TMDb API Einstellungen im Benutzerkonto](https://www.themoviedb.org/settings/api)
- [TheTVDB API Informationen und Registrierung](https://www.thetvdb.com/api-information/signup)
- [TheTVDB Hilfe zum API Zugang](https://support.thetvdb.com/kb/faq.php?id=62)
- [OMDb API Informationen](https://www.omdbapi.com/)
- [FanArt API Informationen](https://api.fanart.tv/)
- [FanArt API Key anfordern](https://fanart.tv/get-an-api-key/)
- [EPGRefresh im offiziellen oe alliance Plugin Projekt](https://github.com/oe-alliance/enigma2-plugins/tree/master/epgrefresh)

## Begriffe kurz erklärt

| Begriff | Bedeutung |
| --- | --- |
| Backend | Hintergrunddienst für Erfassung, Anbieterzugriffe und Datenbankarbeit. |
| Provider | Anbieter von Metadaten oder Bildern. |
| Artwork | Sammelbegriff für Cover, Backdrops, Vorschauen und Titelgrafiken. |
| Prefill | Vorbereitung zusätzlicher Daten für bereits bekannte kommende EPG-Ereignisse. |
| Queue | Warteschlange noch zu bearbeitender Aufgaben oder Ereignisse. |
| Fallback | Bewusster Ersatz, wenn die bevorzugte Information fehlt, etwa ein Picon statt eines Sendungsbilds. |
| WAL | SQLite-Schreibprotokoll neben der Hauptdatenbank. Für konsistente Sicherungen berücksichtigen. |
| Template und Panel | Wiederverwendbare Listenbeschreibung beziehungsweise Skinbestandteile. |

Metadaten und Bilder bleiben Inhalte ihrer jeweiligen Anbieter und Rechteinhaber. Verfügbarkeit, Sprachumfang und Zugangsbedingungen können sich ändern. Bei Problemen mit einer neueren Version zuerst die installierten Optionen und die aktuellen Hinweise des Anbieters prüfen.

## Geprüfter Quellstand

- [openatv/e2MDB, Commit 7442e3d](https://github.com/openatv/e2MDB/tree/7442e3d04aac25c741fa96b370c22994131928e2)
- Native Installation: OpenATV 8.0.2-devel, e2MDB v1.0, MetrixHD. `plugin.py` und `setup.xml` stimmen per SHA-256 mit diesem Quellstand überein.
- Die allgemeinen Abläufe gelten geräteübergreifend. Hardwareabhängige Funktionen und neuere Plugin-Versionen können abweichen.
- Die neue DE/EN-Bildserie zeigt die echte Oberfläche. Es wurden keine API-Schlüssel veröffentlicht, keine Medien umbenannt und keine Bereinigungsaktionen ausgelöst.

[Zur e2MDB-Übersicht](../) · [Alle Einstellungen](../optionen/)
