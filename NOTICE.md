# Herkunft

## Enigma2-Texte und Menüstruktur

- Repository: https://github.com/openatv/enigma2
- Importierter Stand: `fdc9347241245fd18fd0b8bc93727237189c916c`
- Quellen: `data/setup.xml`, `data/menu.xml`, `po/de.po`, `lib/python/Screens/` und die in Artikeln genannten Dateien.
- Ursprüngliche Lizenz: GNU General Public License, Version 2; Originaltext in `LICENSE`.

Die generierten Referenzseiten enthalten Hilfetexte und Beschriftungen der ursprünglichen Autoren und Übersetzer. Die jeweiligen Referenzseiten verlinken auf den festgehaltenen Quellstand. Redaktionelle Anleitungen und Werkzeuge werden im Rahmen dieses Dokumentationsprojekts ergänzt.

## OpenATV-Branding

- `src/assets/openatv-logo.png` ist unverändert aus `enigma2/data/distro-logo.png` übernommen.
- `public/branding/openatv-icon.png` ist unverändert aus `enigma2/openatv.png` übernommen.

Die Dateien stammen aus demselben oben genannten Commit. Markenbezeichnungen und Kennzeichen verbleiben bei ihren jeweiligen Inhabern.

## Echte Bildschirmaufnahmen

Die Dateien unter `src/assets/captures/` sind unveränderte PNG-Aufnahmen einer bereitgestellten OpenATV-Testbox mit MetrixHD. Die bisherigen 88 Aufnahmen zeigen das echte OSD zusammen mit dem Bootlogo bei gestoppter Wiedergabe. Die 26 ergänzenden Infobar-/Menüaufnahmen zeigen den vom Betreiber gewählten Sender KiKA HD während „Sendeschluss“ mit seinen EPG-Daten. Die Auswahl und Prüfsummen stehen in `data/captures-review.json`; Aufnahmezeit, Image, Skin, Hintergrund und Werkzeugstand je Bild in `data/captures.json`. Die Website erzeugt daraus zusätzlich verkleinerte WebP-Dateien. Es wurden keine Bildschirme künstlich nachgebaut und keine Bedienoberflächen nachträglich in die Aufnahmen montiert.

Die Aufnahmen zeigen die Benutzeroberfläche von Enigma2, MetrixHD und den sichtbaren Erweiterungen. Deren Urheber- und Markenrechte verbleiben bei den jeweiligen Inhabern. Die dargestellte Fernbedienung stammt aus der laufenden Oberfläche und ist kein unterstütztes Modellprofil des Handbuchs.

Das separate Aufnahmeplugin basiert auf [openatv/enigma2-plugin-test](https://github.com/openatv/enigma2-plugin-test), GPL-3.0. Sein Quellcode wird nicht in dieses GPL-2.0-Dokumentationsrepository kopiert. Die Commitangabe im Bildinventar bezeichnet den lokalen Werkzeugstand; er muss separat hochgeladen werden, bevor er auf GitHub abrufbar ist.

## MetrixHD und MyMetrixLite

Die ergänzenden Anleitungen wurden anhand von [openatv/MetrixHD](https://github.com/openatv/MetrixHD/tree/c26f35adc71480851291a44da243ec0ba7b8a400) erstellt. Der installierte und für die Dialoge geprüfte Stand ist `c26f35adc71480851291a44da243ec0ba7b8a400`. Die MyMetrixLite-Quelldateien nennen Creative Commons BY-NC-SA 3.0; ihre Autoren- und Lizenzhinweise bleiben beim Originalprojekt. Die Originalmodule werden nicht in dieses Repository kopiert. Die Anleitungen sind redaktionell geschrieben und verlinken ihre Quellen. Screenshots enthalten die Gestaltung des Skins, Senderlogos und gegebenenfalls Programmbilder mit den jeweiligen Rechten ihrer Urheber.

Die Schreibweise des Produktnamens wurde in den Handbuchtexten auf **OpenATV** vereinheitlicht. Technische Bezeichner, Quelladressen und Bildpixel bleiben unverändert.

## Website-Abhängigkeiten

Astro, Starlight, Pagefind und weitere Abhängigkeiten sind eigenständige Projekte mit eigenen Lizenzen. Ihre Paketversionen sind in `pnpm-lock.yaml` festgehalten. Es werden keine externen Schriftarten, Analytics-Dienste oder Live-Zugriffe auf eine Enigma2-Box in die Website eingebunden.
