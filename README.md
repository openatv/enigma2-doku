# OpenATV Enigma2-Handbuch

Die gemeinsame, modellneutrale Grunddokumentation für OpenATV: Deutsch und Englisch, durchsuchbare Anleitungen und ein Verzeichnis der vorhandenen Einstellungen. Mit originalem OpenATV-Logo aus dem Enigma2-Repository.

Über **Weitere Sprachen / More languages** lassen sich die englischen Kapitel automatisch mit Google Translate lesen. Die englischen Bilder bleiben erhalten; DE und EN sind weiterhin direkt als Original verfügbar. Bedienung, Suche und Hosting: [Weitere Sprachen](docs/TRANSLATION.md).

## Inhalt dieser ersten Ausgabe

- Erste Einrichtung und grundlegende Bedienung
- Infobar: Symbole, einfache Infoleiste, zweite INFO/ECM, Sendungsinformationen und OSD-Optionen
- Versteckte Menüoptionen über MENU → MENU, vertikale/horizontale Menüs und Bearbeitungsmodus
- Farbtasten, eigene Hotkeys und Langdruck-Verzeichnis aus der Keymap: 150 Zuordnungen für 77 Tastencodes
- Backup/Wiederherstellung, Flash Online und MultiBoot mit Erhalt des aktuellen Images
- Downloads und unterstützte Modelle, USB-Neuinstallation sowie Softwareupdate im Vergleich zu Flash Online
- AutoRestore mit Turbo/Fast/Slow, Rückübernahme von Einstellungen, Plugins, Feeds und lokalen Add-ons
- SSH/Telnet, Enigma2 stoppen/starten, Root-Passwort und Dateiübertragung mit SFTP/FTP
- Debug-/Crashlogs aktivieren und auf der Box finden; Fehlerberichte im Forum, bei OpenATV Enigma2 oder OE-Alliance
- HDD/USB: Einhängen, Aushängen, Mountpunkte, Formatieren und Dateisystemprüfung
- Tuner und Sendersuche
- LAN und WLAN; NAS-Freigaben über NFS und SMB/CIFS mit Optionen und Berechtigungen
- Windows 11: privates Netzwerk, eigener Benutzer mit Passwort, Freigaben, gezielte Firewall-Regeln und Explorer-Zugriff
- Enigma2 als NFS-Server, Exportdateien, autofs/fstab, Offline-Verhalten und Spinner
- NAS-Aufnahmen, getrennte Timer-/Timeshift-Pfade und Unterschiede der Dateisysteme
- MovieSelection und EMC: Einstieg, Unterschiede, Listen, Wiedergabe, Tasten, Papierkorb und NAS
- Vollständige Referenz der 135 EMC-Hauptsetup-Optionen; Cover-/Playlist-Zusatzdialoge
- FileCommander: zwei Spalten, Aufnahme-Begleitdateien, Dateiaktionen und alle 30 Setup-Einträge
- Plugins und Settings/Senderlisten
- EPG-Ansichten mit ARD/ZDF, Primetime, INFO-/EPG-Belegung und Langdruck
- EPGRefresh, EPGImport, XMLTV-Quellen und fehlender IPTV-EPG mit Service-Reference-Zuordnung
- Aufnahme-/Umschalttimer, Aufgabenplanung, Ausschalttimer und Linux-Cron
- Uhrzeit, NTP, DVB-Zeit, Zeitzonen, Drift, RTC und Grenzen beim Aufwachen
- MetrixHD/MyMetrixLite: HD/FHD/WQHD, Wetter, Skinparts, Schriften, Farben und Infobar
- Kanallisten-Menü und Galerie mit vier klassischen sowie 15 neuen Layoutkombinationen
- Einstellungsreferenz mit vorhandenen Beschriftungen und Originalhilfetexten
- Erweiterbare Bereiche für Skins, Add-ons und spätere Anhänge

Die Anleitungen wurden anhand des OpenATV-8.0-Quellstands `fdc9347241245fd18fd0b8bc93727237189c916c` erstellt. 43 Kapitel pro Sprache enthalten echte Bildschirmaufnahmen: insgesamt 224 ausgewählte Bilder mit OpenATV 8.0.2-devel und MetrixHD. Davon zeigen 198 das Bootlogo bei gestoppter Wiedergabe und 26 den vom Betreiber ausgewählten Beispielsender mit vorhandenen EPG-Daten. Die Texte erklären die sichtbaren Optionen und verweisen auf die Einstellungsreferenz. Der MetrixHD-Quellstand `c26f35adc71480851291a44da243ec0ba7b8a400` liefert die Grundlage für die zusätzlichen Skin-Kapitel.

Die vorhandene NAS-Freigabe und die HDD wurden auf Schreib- und Lesezugriff geprüft. Ihre Einbindung sowie Tuner- und LAN-Konfiguration blieben erhalten. Für einheitliche Bilder wurde MetrixHD verwendet; nach den DE/EN-Läufen wurde die ursprüngliche Sprache wiederhergestellt. Einzelne Assistentenansichten sind bebildert, der vollständige Neuinstallationsablauf ist noch nicht durchgetestet. WLAN und FBC folgen auf passender Hardware. Der [Prüfstand](docs/PRAXISTESTS.md) trennt aufgenommene Ansichten von vollständig getesteten Bedienabläufen.

Das bestehende [ScreenshotTour-Projekt](https://github.com/openatv/enigma2-plugin-test) wurde in einem separaten Repository um Aufnahmeprofile, `grab`, DE/EN-Läufe und Prüfsummen erweitert. Installation, Bildprüfung und Übernahme ins Handbuch: [Bildserien erstellen](docs/CAPTURE.md). Die Website benötigt das Plugin und die Testbox nur zum Erstellen neuer Bilder, nicht beim Build oder beim Lesen.

Das automatisch erzeugte Verzeichnis enthält 68 Bereiche und 968 Einstellungsreferenzen, einschließlich dialoglokaler Felder. 44 Bereiche haben einen aus dem Quellcode zugeordneten Menüweg. Weitere dynamische Menüs sind noch nicht vollständig erfasst. Der Originalhilfetext ist keine zusätzliche redaktionelle Prüfung. Deutsche Übersetzungen kommen aus `po/de.po`; fehlt eine passende Übersetzung, bleibt die englische Quellbezeichnung erhalten.

## Lokal starten

Voraussetzungen: Node.js 24 und pnpm 11.19.0. Python 3.10 oder neuer wird für die Quell-/Bildimporte und deren Tests benötigt.

```sh
npm install --global pnpm@11.19.0
pnpm install --frozen-lockfile
pnpm dev
```

Die Vorschauadresse wird im Terminal ausgegeben. Öffne unter diesem Host `/enigma2-doku/de/` oder `/enigma2-doku/en/`. Repository, GitHub-Pages-Projektpfad und Bearbeitungslinks verwenden **enigma2-doku**.

Die vollständige Suche steht im gebauten Ergebnis zur Verfügung:

```sh
pnpm check
pnpm test
python -m unittest discover -s tests -p "test_*.py"
pnpm build
pnpm size
pnpm preview
```

## GitHub Pages testen

1. Mit GitHub Free das Repository **öffentlich** machen, bevor Pages genutzt wird. Die Sichtbarkeit wird durch dieses Projekt nicht verändert.
2. Im Repository **Settings → Pages → Build and deployment → Source → GitHub Actions** wählen.
3. Den lokalen Commit nach `main` hochladen.
4. Unter **Actions → Build and publish handbook** den Lauf prüfen. Falls Pages erst nach dem Upload aktiviert wurde, den Workflow über **Run workflow** erneut ausführen.
5. Nach erfolgreicher Bereitstellung die Adresse aus **Settings → Pages** öffnen. Erwarteter Einstieg: [OpenATV-Handbuch](https://openatv.github.io/enigma2-doku/de/). Dieser Link ist erst nach einer erfolgreichen Veröffentlichung verfügbar.

Der Workflow installiert die festgelegten Abhängigkeiten, prüft Quellcode und Katalog, baut beide Sprachen, kontrolliert interne Links und den Suchindex, prüft die Größe und veröffentlicht. Pull Requests werden nur gebaut und geprüft. Erst Änderungen auf `main` beziehungsweise ein manueller Lauf auf dem vorgesehenen Branch veröffentlichen. Die `github-pages`-Umgebung sollte in GitHub auf `main` beschränkt werden.

Für den Standardworkflow sind kein persönlicher Zugriffstoken, keine FTP-Zugangsdaten und kein eigener Webserver nötig. Wenn Organisationsregeln Actions einschränken, muss ein Administrator die verwendeten Actions freigeben.

## Änderungen an Inhalten

Artikel liegen in `src/content/docs/de/` und `src/content/docs/en/`. Beide Sprachfassungen nutzen denselben relativen Dateinamen. Die sichtbaren Titel werden übersetzt. Markdown und MDX sind unterstützt.

Neue Artikel in `skins/`, `addons/` und `anhaenge/` werden beim Build automatisch durchsucht. Verlinke sie außerdem von der jeweiligen Übersichtsseite; für neue Hauptkapitel wird die Seitenleiste in `astro.config.mjs` ergänzt. Vorlagen liegen unter `templates/`. Weitere Hinweise: [CONTRIBUTING.md](CONTRIBUTING.md).

## Einstellungsverzeichnis aktualisieren

Das benachbarte Enigma2-Repository wird nur für einen neuen Import benötigt, nicht für den regulären Build oder GitHub Actions:

```sh
python scripts/import-settings.py ../enigma2
```

Der Import liest `data/setup.xml`, `data/menu.xml`, `po/de.po` und die darin verknüpften Bildschirmquellen. Python-Code aus Enigma2 wird nicht ausgeführt. Importiert werden Metadaten, keine Werte von einer Box. Der Import aktualisiert `data/catalog.json` und die generierten Dateien unter `einstellungen/referenz/`. Handgeschriebene Anleitungen liegen außerhalb dieses Bereichs und werden nicht überschrieben.

Nach einem Import den Diff prüfen, neue oder geänderte Optionen redaktionell bearbeiten und die Prüfungen erneut ausführen. Der festgehaltene Commit dokumentiert die Quelle, nicht automatisch die Gültigkeit für jede andere Image-Version.

## Platzbedarf und Apache2

`pnpm size` meldet die Größe von `dist/`. Die Pages-Veröffentlichung verwendet vorsichtshalber ein Budget von 1.000.000.000 Bytes und warnt ab 80 Prozent. Ungeprüfte Rohserien, `node_modules` und `.git` werden nicht veröffentlicht. Für die 224 freigegebenen Aufnahmen enthält die Website das Original-PNG zum Vergrößern und automatisch erzeugte WebP-Versionen für die Artikelseite. Der geprüfte Build mit 130 Inhalten je Sprache und zusätzlicher Sprachauswahl belegt rund 132,79 MB, etwa 13,28 Prozent des Budgets.

Bei einem Wechsel auf Apache2 wird dieselbe Website für die neue Adresse gebaut. Sie benötigt dort nur statische Dateiauslieferung. [Apache2-Bereitstellung](docs/APACHE2.md).

## Quellen und Lizenzen

Der Inhalt basiert auf dem [OpenATV-Enigma2-Projekt](https://github.com/openatv/enigma2). Herkunft der übernommenen Texte und Markenassets: [NOTICE.md](NOTICE.md). Dieses Repository verwendet GPL-2.0; siehe [LICENSE](LICENSE). Drittanbieterpakete behalten ihre jeweiligen Lizenzen. Die Bezeichnung und das Logo von OpenATV dienen der Zuordnung dieses Handbuchs und werden dadurch nicht zu einer neuen frei verwendbaren Marke.
