# openATV Enigma2-Handbuch

Die gemeinsame, modellneutrale Grunddokumentation für openATV: Deutsch und Englisch, durchsuchbare Anleitungen und ein Verzeichnis der vorhandenen Einstellungen. Mit originalem openATV-Logo aus dem Enigma2-Repository.

## Inhalt dieser ersten Ausgabe

- Erste Einrichtung und grundlegende Bedienung
- Tuner und Sendersuche
- LAN, WLAN, NAS und Netzwerkfreigaben
- Plugins, Settings/Senderlisten und EPG
- Einstellungsreferenz mit vorhandenen Beschriftungen und Originalhilfetexten
- Erweiterbare Bereiche für Skins, Add-ons und spätere Anhänge

Die Anleitungen wurden anhand des openATV-8.0-Quellstands `fdc9347241245fd18fd0b8bc93727237189c916c` erstellt. Ein vollständiger Praxistest aller beschriebenen Abläufe und eine bebilderte Ersteinrichtungsserie sind noch offen. Es wurden keine Tuner-, Netzwerk- oder anderen Einstellungen auf der bereitgestellten Box verändert. Das Capture-Plugin ist kein Bestandteil dieser Grundlage.

Das automatisch erzeugte Verzeichnis enthält 68 Bereiche und 968 Einstellungsreferenzen, einschließlich dialoglokaler Felder. 44 Bereiche haben einen aus dem Quellcode zugeordneten Menüweg. Weitere dynamische Menüs sind noch nicht vollständig erfasst. Der Originalhilfetext ist keine zusätzliche redaktionelle Prüfung. Deutsche Übersetzungen kommen aus `po/de.po`; fehlt eine passende Übersetzung, bleibt die englische Quellbezeichnung erhalten.

## Lokal starten

Voraussetzungen: Node.js 24 und pnpm 11.19.0. Python 3.10 oder neuer wird nur für den Quellimport und dessen Tests benötigt.

```sh
npm install --global pnpm@11.19.0
pnpm install --frozen-lockfile
pnpm dev
```

Die Vorschauadresse wird im Terminal ausgegeben. Öffne unter diesem Host `/enimga2-doku/de/` oder `/enimga2-doku/en/`. Der Repository-Name **enimga2-doku** enthält dieselbe Schreibweise wie das vorhandene Git-Remote.

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
5. Nach erfolgreicher Bereitstellung die Adresse aus **Settings → Pages** öffnen. Erwarteter Einstieg: [openATV-Handbuch](https://openatv.github.io/enimga2-doku/de/). Dieser Link ist erst nach einer erfolgreichen Veröffentlichung verfügbar.

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

`pnpm size` meldet die Größe von `dist/`. Die Pages-Veröffentlichung verwendet vorsichtshalber ein Budget von 1.000.000.000 Bytes und warnt ab 80 Prozent. Rohbilder, `node_modules` und `.git` werden nicht veröffentlicht.

Bei einem Wechsel auf Apache2 wird dieselbe Website für die neue Adresse gebaut. Sie benötigt dort nur statische Dateiauslieferung. [Apache2-Bereitstellung](docs/APACHE2.md).

## Quellen und Lizenzen

Der Inhalt basiert auf dem [openATV-Enigma2-Projekt](https://github.com/openatv/enigma2). Herkunft der übernommenen Texte und Markenassets: [NOTICE.md](NOTICE.md). Dieses Repository verwendet GPL-2.0; siehe [LICENSE](LICENSE). Drittanbieterpakete behalten ihre jeweiligen Lizenzen. Die Bezeichnung und das Logo von openATV dienen der Zuordnung dieses Handbuchs und werden dadurch nicht zu einer neuen frei verwendbaren Marke.
