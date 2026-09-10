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
| `buttons` | 3 | Hotkeys, Grundbelegung und Schnellstartmenü |
| `backups` | 4 | Softwareverwaltung, Sicherungslisten und Imagesicherung |
| `firmware` | 2 | Flash-Manager und MultiBoot |
| `storage` | 4 | USB-/Dateisystem- und Laufwerksoptionen |
| `diagnostics` | 3 | Log-Einstellungen, AutoRestore-Modus und Netzwerkmenü mit Passwort-Eintrag |
| `network-shares` | 4 | Ungespeicherte NFS-/SMB-Mountbeispiele und NFS-Serveroptionen |

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

Dies ist nur ein Formbeispiel; der echte Eintrag benötigt die tatsächliche Prüfsumme, einen gültigen Werkzeug-Commit und sein englisches Gegenstück. Die aktuelle Datei enthält 224 ausdrücklich ausgewählte Bilder. NAS-Einstellungen, Netzwerkübersicht, Pluginübersicht und ein zusätzliches Systemmenü bleiben außerhalb der öffentlichen Bildauswahl.

Im Handbuchrepository importieren:

```sh
python scripts/import-captures.py --source .capture-private \
  --review data/captures-review.json \
  --tool-commit befcd21743810dcb4d603471649e3e64d1c3eef1
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

## Diagnose- und AutoRestore-Serie

`diagnostics` ergänzt drei native Ansichten je Sprache. Die sechs Bilder aus `diagnostics-a-de-diagnostics` und `diagnostics-a-en-diagnostics` wurden einzeln gesichtet und mit dem Aufnahmeplugin-Commit `befcd21743810dcb4d603471649e3e64d1c3eef1` importiert. Der Bestand umfasst damit 146 Originalbilder; alle früheren Bilder behalten ihre jeweiligen Werkzeugstände.

```sh
python tools/capture.py --host root@BOX --run-prefix diagnostics-001 --profiles diagnostics --restart-languages --bootlogo
```

Die Tour zeigt die bereits eingestellte Log-Stufe und den Restore-Modus, speichert jedoch keine Änderung. Im geschützten Netzwerkmenü wird „Passwort einrichten“ nur markiert; ein Passwortdialog wird nicht ausgefüllt und kein Netzwerkdienst verändert. Der Hintergrund ist das Bootlogo bei gestoppter Wiedergabe. Die ursprüngliche Sprache wird nach den Aufnahmen wiederhergestellt.

Die Bilder belegen die Menüs, keinen ausgeführten Flash, Restore oder Passwortwechsel. Eine im Original fehlende Übersetzung einzelner Zusatzbeschriftungen wird nicht in die Bildpixel hineinkorrigiert.

## Langdruck-Verzeichnis aktualisieren

```sh
python scripts/import-keymap.py ../enigma2
```

Im Handbuch-Repository ausführen. Der Import liest XML-Daten, führt keinen Enigma2-Code aus und hält Commit und SHA-256 fest. Er übernimmt ausschließlich aktive Einträge mit Flag `l`, einschließlich Kontext und eingeschränkter Gerätezuordnungen. `LongKeys.astro` rendert die mit beiden Sprachen durchsuchbare Referenz. Bei Änderungen auch die redaktionellen Beispiele und Mengenangaben prüfen.

## Nächste Profile

Der [Prüfstand](PRAXISTESTS.md) hält die bisherige Abdeckung fest. Als nächste Abläufe bieten sich vollständige Ersteinrichtung, Settings-Auswahl oder Sat-Suchlauf, Aufnahmeziele und weitere EPG-Ansichten an. Für WLAN und FBC folgen getrennte Tests mit geeigneter Hardware. Neue Profile benötigen erkennbare Start- und Endzustände sowie einen definierten Abbruch; zusätzliche Bildschirmklassen müssen vorab auf Seiteneffekte geprüft werden.

Plugin und Website bleiben getrennte Repositories mit ihren jeweiligen Lizenzen. Für eine Veröffentlichung beider Änderungen müssen beide lokalen Commits separat hochgeladen werden. Die Website ist mit den eingecheckten Bildern auch ohne veröffentlichtes Plugin baubar.

## NFS- und SMB-Beispiele

Das Profil `network-shares` erzeugt vier Bilder je Sprache: NFS-Mount, weitere NFS-Optionen, SMB-Mount und NFS-Server. Die acht freigegebenen Bilder aus `network-a-de-network-shares` und `network-a-en-network-shares` stammen vom Werkzeugstand `e1e6f83685c16dbe51ca7449607f506d98c559e2`. Zusammen sind 154 Originalbilder veröffentlicht; der Profilkatalog umfasst 16 Profile mit 81 Ansichten je Sprache, einschließlich nicht veröffentlichter Ansichten.

```sh
python tools/capture.py --host root@BOX --run-prefix network-001 --profiles network-shares --restart-languages --bootlogo
```

Diese Beispiele verwenden die nativen Dialogklassen mit lokalen, ungespeicherten Formularwerten. Die Dokumentationsadressen `192.0.2.10` und `192.0.2.50`, Freigabenamen und Benutzerbeispiele sind keine erreichbaren Testserver. Das Passwort bleibt leer. Speichern ist gesperrt; beim NFS-Server zusätzlich die Verzeichnisauswahl. Die Tour erstellt weder Client-Mounts noch Serverexporte und startet keinen Netzwerkdienst. Der Serverdialog benötigt das bereits installierte NFS-Paket.

Alle acht PNGs wurden einzeln auf Inhalt, Sprache und Lesbarkeit geprüft. Native Hilfetexte, einschließlich der sichtbaren Legacy-SMB1-Auswahl, bleiben in den Pixeln erhalten; der Artikel erklärt ausdrücklich, warum SMB1 kein Einrichtungsweg ist. Die Prüfsummen von `fstab`, `auto.network`, `exports` und `nfs.conf` waren vor und nach der Serie identisch. Die ursprüngliche Sprache wurde wiederhergestellt.

## EPG, Timer und Zeit

Die Profile `epg-views` (8), `epg-tools` (7) und `timer-guides` (4) ergänzen 19 Ansichten je Sprache. Der Katalog enthält jetzt 19 Profile mit 100 Szenen. Die 38 geprüften Bilder der sechs `epg-e-…`-Läufe wurden vollständig und einzeln gesichtet; zusammen sind 192 Originalbilder freigegeben. Werkzeugstand: `e6487baa4a3fe0d1d2cde8590a173eb9890305e9`.

```sh
python tools/capture.py --host root@BOX --run-prefix epg-001 --profiles epg-views epg-tools timer-guides --restart-languages --bootlogo
```

Die Auswahl bevorzugt ein vorhandenes Bouquet mit echtem Das-Erste-/ARD-EPG und ZDF. Im EPG werden keine Ereignisse erzeugt und keine Sender eingeschaltet. Die native MetrixHD-Anzeige bleibt einschließlich vorhandener Metadaten und kleiner Darstellungsartefakte unverändert. Das EPGRefresh-Formular zeigt eine ungespeicherte Das-Erste-/ZDF-Auswahl. Aufnahme- und Scheduler-Objekte werden nie an die laufenden Timerlisten übergeben. Automatische Plugin-Optionen werden nur mit abgetrennten Formularfeldern sichtbar gemacht; Speichern, Import, Quellenupdate, Geolokalisierung und Timerstart sind gesperrt.

Die ursprüngliche Sprache wurde wiederhergestellt. Die Serie ist kein Nachweis eines erfolgreichen manuellen/automatischen Imports, einer Aufnahme, eines Cronjobs oder eines Hardware-Wecklaufs. Die genaue Abgrenzung und Quellstände stehen in [PRAXISTESTS.md](PRAXISTESTS.md). Frühere Rohserien wurden wegen unpassender Senderwahl, Darstellung oder eines abgebrochenen Dialogaufbaus nicht importiert.

## Medienlisten und Dateimanager

Die Profile `movie-libraries` (5), `emc-options` (7) und `file-commander` (4) ergänzen 16 Ansichten je Sprache. Der Katalog umfasst jetzt 22 Profile und 116 Szenen. Die 32 neuen Bilder wurden einzeln geprüft; es werden ausschließlich die sechs vollständigen `media-safe-…`-Läufe übernommen. Insgesamt sind 224 Bilder freigegeben. Werkzeugstand: `f7251392db31e5988b56a0938258bcae093b1b43`.

```sh
python tools/capture.py --host root@receiver.local --run-prefix media-demo --profiles movie-libraries emc-options file-commander --restart-languages --bootlogo --output .capture-private
```

Voraussetzung sind vorhandene Testmedien unter `/media/hdd/movie`, eine vorhandene native `.Trash` bei aktiviertem Papierkorb und das bewusst vorbereitete temporäre Beispielverzeichnis `/tmp/handbook-filemanager`. Die Artikel nennen diese Pfade als Beispiele. Der Aufnahmelauf erstellt keine Videodateien und startet keine Wiedergabe, Dateioperation, Cover-Suche oder Skriptausführung.

Medienprofile verlangen `--restart-languages`, auch bei nur einer Sprache. Vor dem Start der GUI suspendiert `receiver_media.py` ausschließlich die vier EMC-Schlüssel `movie_trashcan_clean`, `movie_finished_clean`, `timer_autocln` und `restart`. Die ursprünglichen Werte werden bei gestopptem Enigma2 gelesen und zuerst lokal in `<run-prefix>-media-state.json` gesichert. Nach der Serie werden sie im `finally`-Ablauf wiederhergestellt. Bei hartem Abbruch oder Verbindungsverlust den privaten Snapshot für die Wiederherstellung mit `receiver_media.py restore` aufbewahren; Details stehen im Aufnahmeplugin-README. Direkte Szenenaufrufe mit aktiven Automatiken werden abgewiesen.

Die ActionMaps sind während der Ansichten gesperrt. Temporäre Pfade, Listenkonfiguration und Modul-/Klassenattribute werden zurückgesetzt. Die Bildunterschriften müssen die deaktivierte Automatik erklären. Die Menüoption selbst zu zeigen gilt nicht als Test einer tatsächlichen Bereinigung. Weder Aufnahmeordner noch bestehende Mounts werden für ein aufgeräumtes Bild ersetzt.

Die EMC-Liste zeigt im aufgenommenen Stand den Papierkorbeintrag markiert und die vorhandene Aufnahme darunter; daraus wird keine Behauptung über einen geöffneten Aufnahme-Detaildialog abgeleitet. FileCommander zeigt die markierte TS-Datei mit verfügbaren Farbtasten. `DUMMY CONFIGSECTION`, vereinzelte `HELP_…`-Texte und native Textkürzungen sind im Original vorhanden.
