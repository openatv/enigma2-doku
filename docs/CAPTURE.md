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

Das Plugin benötigt einen passenden OpenATV-8.0-Stand, Python 3, `/usr/bin/grab` und SSH. Auf dem PC werden Python 3.10 oder neuer sowie `ssh` und `scp` benötigt. Für die dokumentierte Serie wurde MetrixHD verwendet. Die drei zusätzlichen MetrixHD-/Kanallisten-Profile benötigen außerdem MyMetrixLite und die aktuellen MetrixHD-Listenvorlagen. Der lokale Pluginstand ist in `data/captures.json` angegeben; ein ausschließlich lokaler Commit ist noch nicht auf GitHub verfügbar.

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
  --profiles foundation onboarding connections satellite-single plugins metrix channel-controls channel-styles \
  --restart-languages --bootlogo
```

Die SSH-Hostkennung muss bereits bekannt sein. Eine getrennte bekannte Hostdatei kann über `--known-hosts PFAD` angegeben werden. Das Werkzeug speichert keine Adresse und keine Zugangsdaten im Repository.

| Profil | Aufnahmen je Sprache | Inhalt |
| --- | ---: | --- |
| `foundation` | 7 | Hauptmenü, Einstellungen, Bedienung/Oberfläche, Netzwerk, EPG und Konfigurationsdialoge |
| `onboarding` | 2 | Begrüßung und Adapterauswahl des echten Startassistenten |
| `connections` | 4 | LAN und vorhandene Netzwerkfreigabe |
| `satellite-single` | 2 | Empfangsmenü und herkömmlicher Sat-Anschluss |
| `plugins` | 2 | Erweiterungsübersicht und Paketfeed |
| `metrix` | 9 | MyMetrixLite, Schriften, Farben, Wetter, sonstige Optionen, Skinparts und Sicherungen |
| `channel-controls` | 3 | Kontextmenü und die zwei Modi der Senderlisten-Einstellungen |
| `channel-styles` | 19 | Vier klassische MetrixHD-Varianten und drei neue Bildschirme mit je fünf Listenstilen |
| `infobars` | 8 | Normale Infobar, Lite, zweite INFO/ECM, Sendungsinformationen und drei OSD-Gruppen |
| `menu-options` | 5 | Vertikales/horizontales Menü, Bearbeitungsmodus, Menü- und Hilfeoptionen |

Die oben gezeigte Bootlogo-Serie mit den bisherigen acht Profilen erzeugt 96 Bilder in Deutsch und Englisch. Die zwei neuen Profile ergänzen 26 Bilder mit Senderhintergrund. Enigma2 wird für jede Sprache neu gestartet, weil bereits angelegte Auswahlwerte sonst in der vorherigen Sprache bleiben können. Das Werkzeug stellt die vier ursprünglichen Spracheinstellungen anschließend wieder her. Die Details zu Abbruch und Wiederherstellung stehen in der README des Pluginrepositories.

`--bootlogo` benötigt zusätzlich `/usr/bin/showiframe` und `/usr/share/bootlogo.mvi`. Dieser Modus stoppt die Wiedergabe und nimmt OSD plus Bootlogo auf. Er prüft vor und nach der Aufnahme, dass kein Sender aktiv ist, und verwirft ein Bild bei gestarteter Wiedergabe. Ein nicht empfangbarer Startsender verhindert zwischen den Sprachneustarts laufendes TV. Für die neutrale Übergabe nach dem letzten Neustart nochmals ein einzelnes Profil in der ursprünglichen Sprache mit `--bootlogo` ausführen.

Die Senderlisten-Galerie markiert für aussagekräftige Spalten vorhandene Sender mit EPG-Daten, ohne sie einzuschalten. MetrixHD-Einstellungen und native Layoutvorlagen werden dafür vorübergehend im Arbeitsspeicher gewählt und nach jedem Dialog wiederhergestellt. Das Wetterbild verwendet einen ungespeicherten Beispielort; Skinparts werden für die Aufnahme nicht aktiviert.

Die Profile öffnen Ansichten und speichern keine darin gezeigten Konfigurationen. Das Paketprofil aktualisiert den Katalog, installiert jedoch kein Paket. Die beiden Assistentenbilder belegen die jeweiligen Ansichten; sie ersetzen keinen Test des gesamten Assistentenablaufs.

## Ergebnisse prüfen und übernehmen

### Infobar-Serie mit Senderinformationen

Für die Infobar vorab einen geeigneten Beispielsender mit EPG auswählen und die Serie im Pluginrepository starten:

```sh
python tools/capture.py --host root@BOX --run-prefix infobar-001 \
  --profiles infobars menu-options --languages de en \
  --restart-languages --service-background
```

Dieser Modus benötigt den lokalen OpenWebif-Zugang der Box. Er hält den gewählten Sender aktiv und stellt ihn nach den Sprachneustarts wieder ein. `--bootlogo` und `--service-background` schließen sich aus. Der Hintergrund wird nicht eingefroren; Sender und Zeitraum müssen für die geplanten Bilder geeignet sein.

Die erste Infobar wird an der bestehenden InfoBar-Instanz mit nativen Skinvorlagen aufgenommen. Temporäre Darstellung und Zeitlimits werden zurückgesetzt. Zweite Infobars und Sendungsinformationen verwenden die originalen Enigma2-Dialoge. Es wird weder eine zweite InfoBar-Singleton-Instanz erzeugt noch ein Timer angelegt. Beim Menü-Bearbeitungsbild werden keine Einträge verschoben oder ausgeblendet.

Der Client prüft, dass der ausgewählte Sender vor und während der Bilder aktiv bleibt. Die Servicereferenz und der Ausgangszustand stehen nur in privaten Dateien. Der öffentliche Import übernimmt lediglich die festgelegte Hintergrundbeschreibung, niemals die vollständigen Aufträge.

### Sichtprüfung und Import

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
    "sha256": "vollständige SHA-256-Prüfsumme der geprüften PNG-Datei",
    "tool_commit": "vollständiger Git-Commit des Aufnahmeplugins für dieses Bild"
  }
]
```

Dies ist nur ein Formbeispiel; der echte Eintrag benötigt die tatsächliche Prüfsumme, einen gültigen Werkzeug-Commit und sein englisches Gegenstück. Die aktuelle Datei enthält 114 ausdrücklich ausgewählte Bilder. NAS-Einstellungen, Netzwerkübersicht, Pluginübersicht und ein zusätzliches Systemmenü bleiben außerhalb der öffentlichen Bildauswahl.

Im Handbuchrepository importieren:

```sh
python scripts/import-captures.py --source .capture-private \
  --review data/captures-review.json \
  --tool-commit c6a9fbdb68dcef6a8323ee337feecf0556dda6f8
```

Bei einer neuen Pluginversion ihren tatsächlichen Commit verwenden. `tool_commit` je Prüfeintrag bewahrt den Werkzeugstand älterer Bilder; fehlt es, gilt der Wert von `--tool-commit`. Das öffentliche Inventar nennt den tatsächlichen Stand je Bild als `capture_tool_commit`; der gleichnamige Wert auf oberster Ebene ist die Importvorgabe. Der Importer prüft erfolgreiche Läufe, Bildpfade, Prüfsummen und vollständige Sprachpaare, bevor er Dateien kopiert. Bereits veröffentlichte Bilder, die aus der Auswahl entfernt werden, müssen bewusst aus dem Assetordner gelöscht werden; der Importer meldet solche Reste. Er exportiert keine vollständigen Rohmanifeste und keine Verbindungsdaten.

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

## Tasten- und Wartungsserie

Die Profile `buttons` (3), `backups` (4), `firmware` (2) und `storage` (4) erzeugen 13 Bilder je Sprache. Die 26 freigegebenen Aufnahmen aus `maintenance-a-*` verwenden `grab-logo` und den Aufnahmeplugin-Commit `60ebf969f22b9a2835190ef1f5abd7b7fcd0a6a3`. Alle Bilder wurden einzeln auf Sprache, Lesbarkeit und Inhalt geprüft. Die Bibliothek umfasst damit 140 Original-PNGs; die ersten 114 behalten ihre früheren Herkunftsangaben.

```sh
python tools/capture.py --host root@BOX --run-prefix maintenance-001 \
  --profiles buttons backups firmware storage --restart-languages --bootlogo
```

Die Wartungsprofile starten keine Sicherung, Wiederherstellung, Formatierung oder Installation und ändern keinen Bootslot. Die Geräteansichten erfordern genau einen entfernbaren USB-Datenträger mit vorhandener Datenpartition; der Adapter wählt deren größte Nicht-Swap-Partition anhand der Geräteübersicht und sysfs. Die Konfiguration der Box wird dadurch nicht auf diese Beispielwerte gesetzt. Der Flash-Manager wartet auf die echte Image-Liste, Imagesicherung und MultiBoot auf die gelesenen Slots.

Die eigentliche USB-Formatierung wurde getrennt von der Screenshot-Tour ausdrücklich autorisiert und protokolliert. Es gibt dafür keinen ausführbaren Formatierbefehl im öffentlichen Handbuch oder im Aufnahmeauftrag. Private `boot-slots.json`-Dateien dienen der Kontrolle des aktuellen Slots und werden nicht importiert. Eine nachfolgende Schutzkorrektur im Plugin blockiert zusätzlich nummerierte Schnellstart-Aktionen und den Einstieg zur Slot-Erstellung; sie verändert die veröffentlichten Bildinhalte nicht.

## Langdruck-Verzeichnis aktualisieren

```sh
python scripts/import-keymap.py ../enigma2
```

Im Handbuch-Repository ausführen. Der Import liest XML-Daten, führt keinen Enigma2-Code aus und hält Commit und SHA-256 fest. Er übernimmt ausschließlich aktive Einträge mit Flag `l`, einschließlich Kontext und eingeschränkter Gerätezuordnungen. `LongKeys.astro` rendert die mit beiden Sprachen durchsuchbare Referenz. Bei Änderungen auch die redaktionellen Beispiele und Mengenangaben prüfen.

## Nächste Profile

Der [Prüfstand](PRAXISTESTS.md) hält die bisherige Abdeckung fest. Als nächste Abläufe bieten sich vollständige Ersteinrichtung, Settings-Auswahl oder Sat-Suchlauf, Aufnahmeziele und weitere EPG-Ansichten an. Für WLAN und FBC folgen getrennte Tests mit geeigneter Hardware. Neue Profile benötigen erkennbare Start- und Endzustände sowie einen definierten Abbruch; zusätzliche Bildschirmklassen müssen vorab auf Seiteneffekte geprüft werden.

Plugin und Website bleiben getrennte Repositories mit ihren jeweiligen Lizenzen. Für eine Veröffentlichung beider Änderungen müssen beide lokalen Commits separat hochgeladen werden. Die Website ist mit den eingecheckten Bildern auch ohne veröffentlichtes Plugin baubar.
