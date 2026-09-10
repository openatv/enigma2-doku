# Herkunft

## Enigma2-Texte und Menüstruktur

- Repository: https://github.com/openatv/enigma2
- Importierter Stand: `fdc9347241245fd18fd0b8bc93727237189c916c`
- Quellen: `data/setup.xml`, `data/menu.xml`, `data/keymap.xml`, `po/de.po`, `lib/python/Screens/` und die in Artikeln genannten Dateien.
- Ursprüngliche Lizenz: GNU General Public License, Version 2; Originaltext in `LICENSE`.

Die generierten Referenzseiten enthalten Hilfetexte und Beschriftungen der ursprünglichen Autoren und Übersetzer. Die jeweiligen Referenzseiten verlinken auf den festgehaltenen Quellstand. Redaktionelle Anleitungen und Werkzeuge werden im Rahmen dieses Dokumentationsprojekts ergänzt.

`data/keymap-long.json` übernimmt die aktiven Langdruck-Tastencodes, Aktionsnamen, Kontexte und Gerätezuordnungen aus `data/keymap.xml` desselben Quellstands. Das daraus gerenderte Verzeichnis enthält keine ausgelesenen persönlichen Hotkey-Einstellungen einer Box.

## OpenATV-Branding

- `src/assets/openatv-logo.png` ist unverändert aus `enigma2/data/distro-logo.png` übernommen.
- `public/branding/openatv-icon.png` ist unverändert aus `enigma2/openatv.png` übernommen.

Die Dateien stammen aus demselben oben genannten Commit. Markenbezeichnungen und Kennzeichen verbleiben bei ihren jeweiligen Inhabern.

## Echte Bildschirmaufnahmen

Die Dateien unter `src/assets/captures/` sind unveränderte PNG-Aufnahmen einer bereitgestellten OpenATV-Testbox mit MetrixHD. Die bisherigen 88 Aufnahmen zeigen das echte OSD zusammen mit dem Bootlogo bei gestoppter Wiedergabe. Die 26 ergänzenden Infobar-/Menüaufnahmen zeigen den vom Betreiber gewählten Sender KiKA HD während „Sendeschluss“ mit seinen EPG-Daten. Die Auswahl und Prüfsummen stehen in `data/captures-review.json`; Aufnahmezeit, Image, Skin, Hintergrund und Werkzeugstand je Bild in `data/captures.json`. Die Website erzeugt daraus zusätzlich verkleinerte WebP-Dateien. Es wurden keine Bildschirme künstlich nachgebaut und keine Bedienoberflächen nachträglich in die Aufnahmen montiert.

Die Aufnahmen zeigen die Benutzeroberfläche von Enigma2, MetrixHD und den sichtbaren Erweiterungen. Deren Urheber- und Markenrechte verbleiben bei den jeweiligen Inhabern. Die dargestellte Fernbedienung stammt aus der laufenden Oberfläche und ist kein unterstütztes Modellprofil des Handbuchs.

Weitere 26 Aufnahmen aus der Tasten-/Wartungsserie ergänzen diesen Bestand auf 140. Sie verwenden wieder das Bootlogo bei gestoppter Wiedergabe. Der für diese Serie verwendete Aufnahmeplugin-Commit ist `60ebf969f22b9a2835190ef1f5abd7b7fcd0a6a3`. Die bestehenden Bilder behalten ihre ursprünglichen Werkzeugstände. Die USB-Beispielpartition und Mountpunkte sind reale Testzustände; keine Backup-Archive, Zugangsdaten, vollständigen Aufträge oder privaten Bootslot-Diagnosen werden mit veröffentlicht.

Das separate Aufnahmeplugin basiert auf [openatv/enigma2-plugin-test](https://github.com/openatv/enigma2-plugin-test), GPL-3.0. Sein Quellcode wird nicht in dieses GPL-2.0-Dokumentationsrepository kopiert. Die Commitangabe im Bildinventar bezeichnet den lokalen Werkzeugstand; er muss separat hochgeladen werden, bevor er auf GitHub abrufbar ist.

Weitere sechs Bilder der Diagnose-Serie ergänzen den Bestand auf 146. Sie zeigen Log-Einstellungen, AutoRestore-Modus und Netzwerkmenü in DE/EN mit neutralem Bootlogo. Werkzeugstand: `befcd21743810dcb4d603471649e3e64d1c3eef1`. Es werden keine tatsächlichen Logdateien, Passwörter oder Sicherungsarchive veröffentlicht. Die Anleitung zur frühen Wiederherstellung wurde zusätzlich mit dem installierten Startskript der Testbox abgeglichen; das Skript selbst wird nicht in dieses Repository kopiert.

Weitere acht NFS-/SMB-Bilder ergänzen den Bestand auf 154. Sie zeigen native Dialoge mit ungespeicherten Dokumentationsadressen, Beispielnamen und leerem Passwortfeld, keine neuen tatsächlich eingerichteten Freigaben. Werkzeugstand: `e1e6f83685c16dbe51ca7449607f506d98c559e2`. Alle acht verwenden das neutrale Bootlogo; vorhandene Export- und Mountdateien wurden nicht verändert.

## MetrixHD und MyMetrixLite

Die ergänzenden Anleitungen wurden anhand von [openatv/MetrixHD](https://github.com/openatv/MetrixHD/tree/c26f35adc71480851291a44da243ec0ba7b8a400) erstellt. Der installierte und für die Dialoge geprüfte Stand ist `c26f35adc71480851291a44da243ec0ba7b8a400`. Die MyMetrixLite-Quelldateien nennen Creative Commons BY-NC-SA 3.0; ihre Autoren- und Lizenzhinweise bleiben beim Originalprojekt. Die Originalmodule werden nicht in dieses Repository kopiert. Die Anleitungen sind redaktionell geschrieben und verlinken ihre Quellen. Screenshots enthalten die Gestaltung des Skins, Senderlogos und gegebenenfalls Programmbilder mit den jeweiligen Rechten ihrer Urheber.

Die Schreibweise des Produktnamens wurde in den Handbuchtexten auf **OpenATV** vereinheitlicht. Technische Bezeichner, Quelladressen und Bildpixel bleiben unverändert.

## Website-Abhängigkeiten

Astro, Starlight, Pagefind und weitere Abhängigkeiten sind eigenständige Projekte mit eigenen Lizenzen. Ihre Paketversionen sind in `pnpm-lock.yaml` festgehalten. Es werden keine externen Schriftarten, Analytics-Dienste oder Live-Zugriffe auf eine Enigma2-Box in die Website eingebunden.

## Optionale automatische Übersetzung

Die Sprachbezeichnungen in `data/translation-languages.json` stammen aus `styles/all/theme/gt_full.js` der vom Betreiber bereitgestellten phpBB-Erweiterung `hifikabin/gtranslate` 3.3.1. Deren `composer.json` nennt James Newcombe als Entwickler, [GTranslate](https://gtranslate.io/) als Quelle des Übersetzungscodes und GPL-2.0-only als Lizenz. DE, EN und die automatische Spracherkennung wurden aus dieser Liste entfernt; DE und EN werden separat als Originalfassungen angeboten.

Die Website verwendet eine eigene Integration des Google-Translate-Widgets nach dem in dieser Erweiterung verwendeten Prinzip. Das minifizierte Forumskript, seine Domain-Cookies und die phpBB-Vorlagen wurden nicht übernommen. Google-Skripte werden ausschließlich nach Auswahl einer zusätzlichen Sprache zur Laufzeit geladen und nicht im Repository verteilt. Google Translate und seine Kennzeichen gehören ihren jeweiligen Inhabern. Funktionsweise und externe Verbindung sind in [Weitere Sprachen](docs/TRANSLATION.md) beschrieben.

## EPG-Erweiterungen und öffentliche Programme

Die 38 EPG-/Timerbilder ergänzen den Bestand auf 192 Original-PNGs. Sie stammen von nativen Dialogen und vorhandenem EPG für Das Erste HD, ZDF HD und weitere Dienste; kein laufendes Fernsehbild wurde erfasst. Sichtbare Programmtitel, Texte, Senderlogos und vorhandene Metadatenbilder bleiben ihren jeweiligen Rechteinhabern zugeordnet. Quelle der Aufnahme ist die bereitgestellte Testbox; es wurden keine Sendungsdaten erfunden oder Screenshotpixel retuschiert. Werkzeugstand: `e6487baa4a3fe0d1d2cde8590a173eb9890305e9`.

Die redaktionellen Plugin-Anleitungen wurden mit [EPGRefresh](https://github.com/oe-alliance-plugins/EPGRefresh/tree/0f1eab407ff699e0cbef9e58cce061d2bf7d461f) und [XMLTV-Import](https://github.com/oe-alliance/XMLTV-Import/tree/a32929f2d0) abgeglichen. Die README des geprüften EPGRefresh-Projekts nennt CC BY-NC-SA 3.0. Originalmodule werden nicht in dieses Dokumentationsrepository kopiert; die Lizenzen und Autorenhinweise bleiben beim jeweiligen Upstream-Projekt. Weitere verlinkte Linux-/NTP-/Cronie-Dokumentation dient als Quelle der eigenständig formulierten Erklärungen.

## MovieSelection, EMC und FileCommander

32 weitere Originalbilder der sechs `media-safe-…`-Läufe ergänzen den Bestand auf 224 (198 mit Bootlogo, 26 mit früherem Senderhintergrund). Aufnahmeplugin: `f7251392db31e5988b56a0938258bcae093b1b43`. Die neue Serie zeigt dieselbe vorhandene Testaufnahme von Das Erste HD in MovieSelection, EMC und FileCommander sowie ihre nativen Einstellungsdialoge. Programmtexte der vorhandenen Aufnahme bleiben auch bei englischer Oberfläche in der Sprache des Senders. Ein eigener, temporärer Beispielordner wird in FileCommander als zweite Spalte gezeigt.

EMC-Quellstand: [oe-mirrors/EnhancedMovieCenter, fc7fd6181e](https://github.com/oe-mirrors/EnhancedMovieCenter/tree/fc7fd6181e), GPL-3.0-or-later, Autoren unter anderem Coolman, betonme und Swiss-MAD. Die Referenz nennt die 135 aktiven Hauptsetup-Beschriftungen und technischen Schlüssel mit eigenen redaktionellen Erklärungen; deutsche Optionsnamen wurden mit dem installierten Übersetzungskatalog abgeglichen. EMC-Quellmodule und seine langen Originalhilfetexte werden nicht in das Handbuch kopiert. Die Texte erläutern zusätzlich die eigenen Cover-/Filminformations-/Playlist-Dialoge.

FileCommander wurde mit dem installierten OpenATV-Enigma2-Stand [c446c39a38](https://github.com/openatv/enigma2/tree/c446c39a38/lib/python/Plugins/Extensions/FileCommander) einschließlich aller 30 Setup-Einträge abgeglichen. MovieSelection nutzt den oben genannten Enigma2-Referenzstand.

Die Bildunterschriften kennzeichnen die während der geschützten Serie vorübergehend abgeschaltete EMC-Automatik. Native Abschnittsplatzhalter und fehlende englische Hilfetextübersetzungen wurden nicht retuschiert. Vorserien bleiben privat und sind nicht Bestandteil der Bildfreigabe.


## AutoTimer

18 Originalbilder der beiden `autotimer-a-…`-Läufe ergänzen den Bestand auf 242 Bilder, davon 216 mit Bootlogo. Werkzeugstand: `ac3ca3d61d67dd89331366a2caa916f8a370a53c`. Die Tagesschau-Regel ist ein ausdrücklich gekennzeichnetes, ungespeichertes Beispiel; die Senderreferenz stammt von Das Erste HD aus der Testbox. Es wurden weder Fernsehbilder noch erfundene EPG-Ereignisse erfasst. Die native Oberfläche einschließlich gekürzter Fenstertitel und ihrer Übersetzungen bleibt unverändert.

Abgleich mit [oe-alliance-plugins/AutoTimer, 20859d7ae9](https://github.com/oe-alliance-plugins/AutoTimer/tree/20859d7ae9). Das Projekt nennt in `LICENSE.txt` CC BY-NC-SA 3.0 sowie eine alternative Bedingung für von Dream Multimedia lizenzierte Hardware; seine Lizenz wird durch dieses Handbuch nicht ersetzt. AutoTimer-Originalmodule und lange Originalhilfetexte werden nicht in das Handbuch kopiert. Die Artikel und 24 Optionsbeschreibungen sind eigenständig formuliert; deutsche Optionsnamen sind mit dem installierten Übersetzungskatalog abgeglichen.


## Wiedergabe, ServiceApp und SubsSupport

28 Originalbilder aus `playback-a-de-playback-guides` und `playback-a-en-playback-guides` ergänzen den Bestand auf 270 Bilder, davon 244 mit Bootlogo. Aufnahmeplugin: `19ede8572d6efae8b5969492a085fd9f1099af27`. Alle Bilder wurden einzeln geprüft. Temporäre 4097-Ersatzwahl, Teletext-Expertenmodus und abgetrennte SubsSupport-Standardfelder sind als ungespeicherte Beispiele erläutert. Der native MetrixHD-Fallback benennt den Blu-ray-Browser als „DVD-Dateimanager / DVD File Browser“; dieser Titel wurde im Bild nicht retuschiert. Der native Zeilenumbruch der deutschen SubsSupport-Standardtaste bleibt erhalten.

Die Texte sind eigenständige Erklärungen mit Optionsnamen und verlinkten Primärquellen. Quellstände: Enigma2 `fdc9347241245fd18fd0b8bc93727237189c916c` (Katalogbasis), installiertes Enigma2-Paket `c446c39a38`; [ServiceApp](https://github.com/oe-mirrors/serviceapp/tree/95e5a4f41d455986a35b8cdd0f132ea4ba6d245f), [Blu-ray Player](https://github.com/oe-alliance-mirrors/enigma2-plugin-blurayplayer/tree/0962ee60f26acea8e6e50fc3a9603dfcd4fef428), [SubsSupport](https://github.com/oe-mirrors/subssupport/tree/7d583fe93736c860ee1d806f64fe5b4524acdef1) und [exteplayer3](https://github.com/oe-alliance/exteplayer3/tree/668859dd3c2ffaa189b09e46c0ef99d16d4a0149). ServiceApp-, Blu-ray- und SubsSupport-Rezepte nennen GPL-2.0-only; ihre Programmlizenzen werden durch dieses Handbuch nicht ersetzt. Fremde Plugin-Originalmodule werden nicht in der statischen Website ausgeliefert.


## e2MDB

Die 34 Kapitel je Sprache basieren auf der vom Betreiber bereitgestellten deutschen e2MDB-Anleitung (September 2026), redaktioneller Erweiterung und vollständiger englischer Ausarbeitung. Die ursprünglichen Umbra-Bezüge wurden durch allgemeine Skin- und Panelbeispiele ersetzt. Die bestehende Word-Datei außerhalb dieses Repositorys wurde nicht verändert.

Technischer Abgleich: [openatv/e2MDB, 7442e3d04aac25c741fa96b370c22994131928e2](https://github.com/openatv/e2MDB/tree/7442e3d04aac25c741fa96b370c22994131928e2). Optionsnamen, Standardwerte, Auswahlwerte und Hilfen in der 47-Felder-Referenz stammen aus `src/e2MDB/setup.xml`, `__init__.py` und dem deutschen Übersetzungskatalog; Abweichungen zwischen Hilfetext und Backend-Verhalten sind ausdrücklich erläutert. Original-Pluginmodule werden nicht mit der Website ausgeliefert.

22 native Bildschirmbilder aus `e2mdb-c-de-e2mdb-guides` und `e2mdb-c-en-e2mdb-guides`, Werkzeugstand `a1975fd067ba56fbe624151b5e789fb9862aed9f`, ergänzen den Bestand auf 292 Enigma2-PNGs. Alle API-Felder werden als getrennte Platzhalter aufgebaut und vor dem Grab-Vorgang von schwarzen Flächen überdeckt. Die endgültigen Bilder enthalten keine echten API-Werte. Die älteren verworfenen Aufnahmeläufe bleiben ausschließlich im ignorierten privaten Arbeitsbereich.

`src/assets/e2mdb-web/editor.png` zeigt die echte Plugin-Weboberfläche mit einem vorhandenen Testclip und den Metadaten zu „21“; Browserauswahl ohne Umbenennen oder Abspielen. Beide Handbuchsprachen verwenden dieses Bild mit einer Erklärung des nativen Web-Sprachstands. Prüfsumme und Sichtprüfung stehen in `data/e2mdb-web-review.json`. Poster, Hintergrundbilder, Programmnamen, Texte und Kennzeichen bleiben den jeweiligen Anbietern und Rechteinhabern zugeordnet.

## Umbra

Die 22 Kapitel je Sprache basieren auf der vom Betreiber bereitgestellten Datei `Umbra_Benutzerhandbuch_0.4.10.docx`, deren 18 Fachkapiteln sowie den begleitenden Quellen aus `Umbra/docs`. SHA-256 der Word-Vorlage: `d385afd904c928f58b64b9cd9c389d95f04d59ab333e9ff31ae21c05e9e1e0b7`. Die Vorlage wurde nicht verändert. Deutsche Texte und Tabellen wurden für die Website übernommen und aktualisiert, die englischen Texte vollständig ausgearbeitet. Die Zuordnung der Quellblöcke und Kapitel steht in `data/umbra-manual-coverage.json`.

Alle 16 Abbildungen bleiben unter `src/assets/umbra/` erhalten, einschließlich vier berechneter Vergleiche. `data/umbra-figures.json` hält ursprünglichen Dateinamen, Beschriftung, Bildausschnitt, SHA-256 und Sichtprüfung fest. Die Komponente `ManualFigure` stellt vorhandene Ausschnitte über CSS dar und verlinkt das unveränderte vollständige Original. Historische Versionsstände und deutsche Beschriftungen werden in beiden Sprachfassungen erläutert. Programmbilder, Sendernamen, Wetterdaten und sonstige Kennzeichen bleiben den jeweiligen Rechteinhabern zugeordnet.

Der technische Abgleich umfasst `styles.py`, `theme.py` und `receiver/plugin.py` im lokalen Umbra-Stand 0.4.23 sowie die Dokumente `RESOLUTION_DENSITY.md`, `HORIZONTAL_MENU.md`, `INFOBAR_OPTIONS.md` und `INFOBAR_EPG.md`. Die auf der Box gelesenen drei Dateien sind identisch; die Paketmetadaten melden davon abweichend 0.4.17. Prüfsummen und alle 39 Stiloptionen stehen in `data/umbra-settings.json`. Originale Pluginmodule werden nicht mit der Website ausgeliefert.

14 zusätzliche native Bilder aus `umbra-a-de-umbra-guides` und `umbra-a-en-umbra-guides` stammen vom Aufnahmeplugin `2b3281e0c8c00286cd128227f0942c1c3d075cc1`. Sie zeigen Umbra/FHD bei gestoppter Wiedergabe. Alle wurden einzeln gesichtet und mit Prüfsumme importiert. Umbra-Feldnamen bleiben auch in der englischen GUI überwiegend deutsch; die Bildbeschriftungen weisen darauf hin. Der gesamte native Bestand umfasst jetzt 306 Enigma2-PNGs.
