# Herkunft

## Enigma2-Texte und Menüstruktur

- Repository: https://github.com/openatv/enigma2
- Importierter Stand: `fdc9347241245fd18fd0b8bc93727237189c916c`
- Quellen: `data/setup.xml`, `data/menu.xml`, `po/de.po`, `lib/python/Screens/` und die in Artikeln genannten Dateien.
- Ursprüngliche Lizenz: GNU General Public License, Version 2; Originaltext in `LICENSE`.

Die generierten Referenzseiten enthalten Hilfetexte und Beschriftungen der ursprünglichen Autoren und Übersetzer. Die jeweiligen Referenzseiten verlinken auf den festgehaltenen Quellstand. Redaktionelle Anleitungen und Werkzeuge werden im Rahmen dieses Dokumentationsprojekts ergänzt.

## openATV-Branding

- `src/assets/openatv-logo.png` ist unverändert aus `enigma2/data/distro-logo.png` übernommen.
- `public/branding/openatv-icon.png` ist unverändert aus `enigma2/openatv.png` übernommen.

Die Dateien stammen aus demselben oben genannten Commit. Markenbezeichnungen und Kennzeichen verbleiben bei ihren jeweiligen Inhabern.

## Echte Bildschirmaufnahmen

Die Dateien unter `src/assets/captures/` sind unveränderte OSD-PNGs einer bereitgestellten openATV-Testbox mit MetrixHD. Die Auswahl und Prüfsummen stehen in `data/captures-review.json`; Aufnahmezeit, Image, Skin und Herkunftswerkzeug in `data/captures.json`. Die Website erzeugt daraus zusätzlich verkleinerte WebP-Dateien. Es wurden keine Bildschirme künstlich nachgebaut und keine Bedienoberflächen nachträglich in die Aufnahmen montiert.

Die Aufnahmen zeigen die Benutzeroberfläche von Enigma2, MetrixHD und den sichtbaren Erweiterungen. Deren Urheber- und Markenrechte verbleiben bei den jeweiligen Inhabern. Die dargestellte Fernbedienung stammt aus der laufenden Oberfläche und ist kein unterstütztes Modellprofil des Handbuchs.

Das separate Aufnahmeplugin basiert auf [openatv/enigma2-plugin-test](https://github.com/openatv/enigma2-plugin-test), GPL-3.0. Sein Quellcode wird nicht in dieses GPL-2.0-Dokumentationsrepository kopiert. Die Commitangabe im Bildinventar bezeichnet den lokalen Werkzeugstand; er muss separat hochgeladen werden, bevor er auf GitHub abrufbar ist.

## Website-Werkzeuge

Astro, Starlight, Pagefind und weitere Abhängigkeiten sind eigenständige Projekte mit eigenen Lizenzen. Ihre Paketversionen sind in `pnpm-lock.yaml` festgehalten. Es werden keine externen Schriftarten, Analytics-Dienste oder Live-Zugriffe auf eine Enigma2-Box in die Website eingebunden.
