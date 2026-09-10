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

## MetrixHD und MyMetrixLite

Die ergänzenden Anleitungen wurden anhand von [openatv/MetrixHD](https://github.com/openatv/MetrixHD/tree/c26f35adc71480851291a44da243ec0ba7b8a400) erstellt. Der installierte und für die Dialoge geprüfte Stand ist `c26f35adc71480851291a44da243ec0ba7b8a400`. Die MyMetrixLite-Quelldateien nennen Creative Commons BY-NC-SA 3.0; ihre Autoren- und Lizenzhinweise bleiben beim Originalprojekt. Die Originalmodule werden nicht in dieses Repository kopiert. Die Anleitungen sind redaktionell geschrieben und verlinken ihre Quellen. Screenshots enthalten die Gestaltung des Skins, Senderlogos und gegebenenfalls Programmbilder mit den jeweiligen Rechten ihrer Urheber.

Die Schreibweise des Produktnamens wurde in den Handbuchtexten auf **OpenATV** vereinheitlicht. Technische Bezeichner, Quelladressen und Bildpixel bleiben unverändert.

## Website-Abhängigkeiten

Astro, Starlight, Pagefind und weitere Abhängigkeiten sind eigenständige Projekte mit eigenen Lizenzen. Ihre Paketversionen sind in `pnpm-lock.yaml` festgehalten. Es werden keine externen Schriftarten, Analytics-Dienste oder Live-Zugriffe auf eine Enigma2-Box in die Website eingebunden.

## Optionale automatische Übersetzung

Die Sprachbezeichnungen in `data/translation-languages.json` stammen aus `styles/all/theme/gt_full.js` der vom Betreiber bereitgestellten phpBB-Erweiterung `hifikabin/gtranslate` 3.3.1. Deren `composer.json` nennt James Newcombe als Entwickler, [GTranslate](https://gtranslate.io/) als Quelle des Übersetzungscodes und GPL-2.0-only als Lizenz. DE, EN und die automatische Spracherkennung wurden aus dieser Liste entfernt; DE und EN werden separat als Originalfassungen angeboten.

Die Website verwendet eine eigene Integration des Google-Translate-Widgets nach dem in dieser Erweiterung verwendeten Prinzip. Das minifizierte Forumskript, seine Domain-Cookies und die phpBB-Vorlagen wurden nicht übernommen. Google-Skripte werden ausschließlich nach Auswahl einer zusätzlichen Sprache zur Laufzeit geladen und nicht im Repository verteilt. Google Translate und seine Kennzeichen gehören ihren jeweiligen Inhabern. Funktionsweise und externe Verbindung sind in [Weitere Sprachen](docs/TRANSLATION.md) beschrieben.
