---
title: "Umbra – Auflösung und Voraussetzungen"
description: "OpenATV ab 8.0: Auflösung und Voraussetzungen. Vollständige Umbra-Anleitung mit Auswahlwerten und Beispielen."
---

| OSD Auflösung | Bedeutung im aktuellen Stand |
| --- | --- |
| HD   1280 × 720 | Ausgangspunkt für die Gestaltung; größere Bedienelemente bei kleinerer OSD-Fläche. |
| FHD   1920 × 1080 | Oberfläche in nativer Auflösung mit höherer Listenkapazität. Die neuen Einstellungsbilder zeigen FHD. |
| WQHD   2560 × 1440 | Nur wählen, wenn die Box beziehungsweise der Framebuffer diesen Modus unterstützt. Auf der verwendeten Testbox nicht live geprüft. |

Die OSD-Auflösung bestimmt die Bedienoberfläche, nicht automatisch das HDMI-Ausgabeformat. Ein 1920 × 1080 großer Screenshot mit TV-Bild beweist keine FHD-OSD-Auflösung. Stilpakete ändern die Auflösung nicht.

## Mehr Inhalt in höheren Auflösungen

Die ursprüngliche Anleitung zu 0.4.10 beschrieb noch überwiegend skalierte HD-Gerüste. Seit 0.4.17 gelten getrennte Dichteprofile. Bei Standard-Textgröße ergeben sich folgende Kapazitäten:

| Ansicht | HD | FHD | WQHD |
| --- | ---: | ---: | ---: |
| Senderliste Standard | 7 | 8 | 9 |
| Senderliste Kompakt | 13 | 14 | 15 |
| Senderliste Erweitert | 5 | 6 | 6 |
| Sendergalerie / Plugin-Raster | 5×3 | 6×3 | 7×4 |
| Sender-Spaltenansicht | 5 | 6 | 7 |
| Hauptmenü, maximale Zeilen | 10 | 11 | 12 |
| Standard-Setup | 8 | 9 | 10 |
| Timerliste | 8 | 9 | 10 |
| Plugin-Listenansicht | 7 | 8 | 8 |
| Verzeichniswahl, obere Dateiliste | 7 | 8 | 8 |

Das sind XML-Kapazitäten, keine Anzahl vorhandener Daten. Ganze Zeilen erklären, warum nicht jede Ansicht bei jedem Auflösungsschritt eine zusätzliche Zeile gewinnt. Plugin-eigene Listen mit fester Geometrie können abweichen. Das native EPG behält die eingestellte Anzahl „Einträge pro Seite“.

Die Auflösung wird im Umbra-Plugin separat gewählt und mit Grün angewendet. Einen funktionierenden Skin und eine unterstützte Auflösung als Rückweg behalten. Bei einer Neustartabfrage laufende Aufnahmen und andere Aktivitäten berücksichtigen.

Umbra ist auf geringen Speicherbedarf ausgelegt: Native Flächen sowie gemeinsame Fonts und Bilddateien bedienen alle drei Auflösungen. Die installierte Paketinformation nennt rund **5,8 MB**; tatsächliche Dateisystembelegung und spätere Versionen können abweichen. Das ist keine Messung des Arbeitsspeichers oder ein Vergleich mit sämtlichen anderen Skins.

## Was zusätzlich erforderlich sein kann

| Funktion | Voraussetzung |
| --- | --- |
| Native Gestaltung und Live-Reload | Eine zu Umbra passende aktuelle OpenATV-Basis einschließlich der benötigten Skin-/Grafikfunktionen und des Iconfonts. |
| Medienoptionen | e2MDB, E2MDBEventInfo-Converter, aktivierte Metadaten und passende Daten. |
| Wetter | OEA-Wetterpaket, gültiger Ort, Koordinaten und erreichbarer Wetterdienst. |
| Picons | Ein installierter und korrekt angebundener Picon-Satz; Beschaffung separat. |
| Plugin-Screens | Das jeweilige Plugin in einer unterstützten Screen-Version. |

Zusätzliche Sprachfonts, Font-Download und eine RTL-Umschaltung sind noch keine Umbra-Menüfunktionen. Auch Display-Skins am Frontpanel, native Untertiteloptionen und die RCU-Tastenbelegung werden an anderer Stelle verwaltet.

[Umbra-Übersicht](../) · [Alle 39 Stiloptionen](../optionen/)
