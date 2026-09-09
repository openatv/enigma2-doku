# Bildserien aus einer laufenden Enigma2-Oberfläche

Wir verwenden das vorhandene [ScreenshotTour-Repository](https://github.com/openatv/enigma2-plugin-test) mit einem zusätzlichen Dokumentationsmodus. Es öffnet eine festgelegte Liste echter Enigma2-Bildschirme und nimmt deren OSD über `grab` auf. Die Website bleibt vollständig statisch.

## Aufbau

1. **Aufnahmeplugin auf der Testbox:** öffnet die freigegebenen Ansichten, wartet auf ihre Bereitschaft, erzeugt PNGs und schließt die Ansicht wieder.
2. **Lokales Python-Werkzeug:** übermittelt Profile per SSH, koordiniert die Sprachen und lädt die Ergebnisse samt Manifest herunter.
3. **Sichtprüfung:** wählt geeignete Bilder aus und hält ihre Prüfsummen fest.
4. **Import ins Handbuch:** übernimmt nur ausgewählte DE/EN-Paare und begrenzte Herkunftsmetadaten.
5. **Website-Build:** optimiert die Bilder und macht die erklärenden Artikel gemeinsam mit allen anderen Kapiteln durchsuchbar.

Stabile Bildkennungen verbinden die Stufen. Neue Skins, Erweiterungen oder Anhänge können eigene Profile und Artikel erhalten. Die gemeinsame Grunddokumentation beschreibt Menübezeichnungen und Funktionen; die konkrete Testhardware ist keine Voraussetzung für die Leser.

## Voraussetzungen und Installation

Das Plugin benötigt einen passenden openATV-8.0-Stand, Python 3, `/usr/bin/grab` und SSH. Auf dem PC werden Python 3.10 oder neuer sowie `ssh` und `scp` benötigt. Für die dokumentierte Serie wurde MetrixHD verwendet. Der lokale Pluginstand ist in `data/captures.json` angegeben; ein ausschließlich lokaler Commit ist noch nicht auf GitHub verfügbar.

Im separaten Repository `enigma2-plugin-test` ausführen; `BOX` durch die Testbox ersetzen:

```sh
ssh root@BOX 'mkdir -p /usr/lib/enigma2/python/Plugins/Extensions/ScreenshotTour'
scp -O Plugins/Extensions/ScreenshotTour/*.py root@BOX:/usr/lib/enigma2/python/Plugins/Extensions/ScreenshotTour/
```

Anschließend die Enigma2-Oberfläche neu starten. Das Plugin wartet auf einen ausdrücklich erstellten lokalen Auftrag. Seine Installation startet keine automatische Tour durch alle Menüs. Die bisherige breite CI-Tour im Testrepository verwendet weiterhin ihren eigenen Workflow.

## Aufnehmen

Die Box muss für den gesamten Lauf frei sein. Die bestehende Netzwerkkonfiguration und die gewünschten Beispielanschlüsse vorher einrichten. Für die aktuelle Serie bleiben NAS, HDD und Tuner erhalten. Eine Rücksetzung ist nicht erforderlich.

```sh
python tools/capture.py --host root@BOX --run-prefix handbuch-001 \
  --profiles foundation onboarding connections satellite-single plugins \
  --restart-languages
```

Die SSH-Hostkennung muss bereits bekannt sein. Eine getrennte bekannte Hostdatei kann über `--known-hosts PFAD` angegeben werden. Das Werkzeug speichert keine Adresse und keine Zugangsdaten im Repository.

| Profil | Aufnahmen je Sprache | Inhalt |
| --- | ---: | --- |
| `foundation` | 7 | Hauptmenü, Einstellungen, Bedienung/Oberfläche, Netzwerk, EPG und Konfigurationsdialoge |
| `onboarding` | 2 | Begrüßung und Adapterauswahl des echten Startassistenten |
| `connections` | 4 | LAN und vorhandene Netzwerkfreigabe |
| `satellite-single` | 2 | Empfangsmenü und herkömmlicher Sat-Anschluss |
| `plugins` | 2 | Erweiterungsübersicht und Paketfeed |

Die Serie erzeugt 34 Bilder in Deutsch und Englisch. Enigma2 wird für jede Sprache neu gestartet, weil bereits angelegte Auswahlwerte sonst in der vorherigen Sprache bleiben können. Das Werkzeug stellt die vier ursprünglichen Spracheinstellungen anschließend wieder her. Die Details zu Abbruch und Wiederherstellung stehen in der README des Pluginrepositories.

Die Profile öffnen Ansichten und speichern keine darin gezeigten Konfigurationen. Das Paketprofil aktualisiert den Katalog, installiert jedoch kein Paket. Die beiden Assistentenbilder belegen die jeweiligen Ansichten; sie ersetzen keinen Test des gesamten Assistentenablaufs.

## Ergebnisse prüfen und übernehmen

Auf der Box und dem PC liegt pro Lauf ein eigener Ordner mit `manifest.json` und Sprachordner. Ergebnisse zunächst in `.capture-private/` des Handbuchrepositories ablegen. Der Ordner bleibt außerhalb von Git.

Vor der Übernahme jedes Bild öffnen und prüfen:

- Richtige Ansicht, Sprache und lesbare Beschriftung; keine Mischsprache bei Auswahlwerten.
- Aussagekräftiger Bezug zum Artikel und passende Bildunterschrift.
- Keine Zugangsdaten oder unnötigen persönlichen Informationen. Auch maskierte Passwortfelder und Testwerte verdienen eine Prüfung.
- Keine irreführende Empfehlung durch eine spezielle Testkonfiguration. Vorhandene NAS-Werte müssen nicht für neue Freigaben geeignet sein.

Die freigegebenen Dateien stehen in `data/captures-review.json`:

```json
[
  {
    "language": "de",
    "id": "main-menu",
    "run": "handbuch-001-de-foundation",
    "sha256": "vollständige SHA-256-Prüfsumme der geprüften PNG-Datei"
  }
]
```

Dies ist nur ein Formbeispiel; der echte Eintrag benötigt die tatsächliche Prüfsumme und sein englisches Gegenstück. Die aktuelle Datei enthält 26 ausdrücklich ausgewählte Bilder. NAS-Einstellungen, Netzwerkübersicht, Pluginübersicht und ein zusätzliches Systemmenü bleiben in der ersten Ausgabe außerhalb der öffentlichen Bildauswahl.

Im Handbuchrepository importieren:

```sh
python scripts/import-captures.py --source .capture-private \
  --review data/captures-review.json \
  --tool-commit 3df80b90a8ae776c770c58c0fcb3975afd182a32
```

Bei einer neuen Pluginversion ihren tatsächlichen Commit verwenden. Der Importer prüft erfolgreiche Läufe, Bildpfade, Prüfsummen und vollständige Sprachpaare, bevor er Dateien kopiert. Bereits veröffentlichte Bilder, die aus der Auswahl entfernt werden, müssen bewusst aus dem Assetordner gelöscht werden; der Importer meldet solche Reste. Er exportiert keine vollständigen Rohmanifeste und keine Verbindungsdaten.

## Bilder im Artikel

Für einen Artikel unter `src/content/docs/de/netzwerk/` lautet der relative Import:

```mdx
import Capture from '../../../../components/Capture.astro';

<Capture
  id="lan-settings"
  language="de"
  alt="LAN-Adapter mit aktivierter automatischer Adressvergabe"
  caption="DHCP übernimmt die Adressvergabe vom Router."
/>
```

Der Dateiname endet auf `.mdx`. Der englische Artikel verwendet dieselbe Kennung mit `language="en"` und übersetzten Texten. Bei anderer Ordnertiefe den Komponentenimport anpassen. Bilder möglichst direkt nach dem zugehörigen Schritt platzieren und die sichtbaren Einstellungen im Text erklären.

Astro liefert WebP-Bilder in passenden Größen; ein Link öffnet das unveränderte Original-PNG. Beide Varianten sind normale statische Dateien und funktionieren auf GitHub Pages und Apache2.

## Nächste Profile

Der [Prüfstand](PRAXISTESTS.md) hält die bisherige Abdeckung fest. Als nächste Abläufe bieten sich vollständige Ersteinrichtung, Settings-Auswahl oder Sat-Suchlauf, Aufnahmeziele und weitere EPG-Ansichten an. Für WLAN und FBC folgen getrennte Tests mit geeigneter Hardware. Neue Profile benötigen erkennbare Start- und Endzustände sowie einen definierten Abbruch; zusätzliche Bildschirmklassen müssen vorab auf Seiteneffekte geprüft werden.

Plugin und Website bleiben getrennte Repositories mit ihren jeweiligen Lizenzen. Für eine Veröffentlichung beider Änderungen müssen beide lokalen Commits separat hochgeladen werden. Die Website ist mit den eingecheckten Bildern auch ohne veröffentlichtes Plugin baubar.
