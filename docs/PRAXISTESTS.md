# Prüfstand der Dokumentation und Bildserien

Stand: 9./10. September 2026. Dieses Protokoll beschreibt die konkrete Prüfung und behauptet keine vollständige Abdeckung aller Geräte oder Bedienabläufe.

## Grundlage

- Handbuchquellen: OpenATV Enigma2, Commit `fdc9347241245fd18fd0b8bc93727237189c916c`.
- Laufende Testumgebung: OpenATV 8.0.2-devel, MetrixHD, Einstellungsansicht „Experte“.
- Anschluss: kabelgebundenes LAN (`eth0`), Astra 19,2° Ost über einen herkömmlichen Sat-Anschluss, vorhandene CIFS-/autofs-Freigabe und eingehängte HDD.
- Keine WLAN-Hardware; FBC ist nicht Teil dieser Testserie.

## Erste Grundlage: tatsächlich geprüft

| Prüfung | Ergebnis |
| --- | --- |
| Aufnahme mit `/usr/bin/grab`, nur OSD | Erfolgreich; native PNGs mit 1280 × 720 Pixeln |
| Fünf Aufnahmeprofile, jeweils DE und EN | 34 von 34 erwarteten Bildern, vollständige Manifeste und passende Prüfsummen |
| Sprachwechsel | Neustart pro Sprache verhindert gemischte Auswahlbeschriftungen; ursprüngliches Deutsch anschließend wiederhergestellt |
| Ausgewählte Ansichten | 26 Bilder visuell geprüft und in acht Kapitel je Sprache eingebunden |
| Begrüßung und Netzwerkadapterwahl | Echte Assistentenansichten direkt geöffnet und geschlossen; kein kompletter Erststartdurchlauf |
| Tuneransicht | Einfach / Einzeln / Astra 19,2° Ost sichtbar; Tunerwerte nicht verändert |
| Pluginfeed | Paketkatalog erfolgreich geladen; Kategorien sichtbar, keine Paketinstallation durch dieses Profil |
| NAS-Schreiben und -Lesen | Kleine, eindeutig benannte Testdatei geschrieben, synchronisiert, gelesen und entfernt |
| HDD-Schreiben und -Lesen | Gleiche Prüfung im vorhandenen Aufnahmeordner erfolgreich; Testdatei entfernt |
| Konfigurationserhalt | Prüfsummen von Mountdefinitionen, autofs-Konfiguration, fstab, Netzwerkschnittstellen und den Tunerwerten vor/nach den Arbeiten identisch |

Die vorhandene NAS-Freigabe war über `/media/autofs/media` erreichbar. Daraus und aus dem geprüften `NetworkManager`-Quellcode wurde die Anleitung korrigiert: `autofs` nutzt `/media/autofs/NAME`; `fstab` nutzt `/media/net/NAME` beziehungsweise `/media/hdd` beim Festplattenersatz. Ein erfolgreicher Dateizugriff ist noch kein vollständiger Test einer TV-Aufnahme.

Es erfolgte kein Werksreset. Die vorhandenen NAS-, HDD-, LAN- und Tunerdefinitionen blieben bestehen. Für konsistente Aufnahmen wurde der Standardskin `MetrixHD/skin.xml` ausgewählt. Das Aufnahmeplugin bleibt auf der Testbox installiert und wartet ohne neuen Auftrag.

## Noch nicht praktisch vollständig geprüft

- Vollständiger Neuinstallationsassistent einschließlich aller Übergänge, Speichern und Abschluss.
- Kompletter Astra-Suchlauf und Kontrolle der gefundenen Sender; alternativ Installation einer passenden Senderliste.
- Auswahl und Installation eines konkreten Feedpakets bis zum erfolgreichen Start.
- Neue NAS-Freigabe vom leeren Formular bis zur Nutzung; NFS, andere SMB-Versionen und fstab-Varianten.
- TV-Aufnahme, Timeshift, Wiedergabe und EPG-Erhaltung über einen Neustart.
- WLAN und FBC auf anderer Testhardware; besondere Gerätefunktionen als spätere Anhänge.
- Separater Xvfb-Testworkflow des Pluginrepositories.

Die entsprechenden Anleitungen basieren bislang auf dem genannten Quellstand und den ausdrücklich beschriebenen Teilprüfungen. Die Aufnahmeprofile sind eine Grundlage für weitere Tests, keine automatische Bestätigung jeder Funktion eines geöffneten Dialogs.

## Website-Prüfungen der ersten Grundlage

- Astro-Prüfung: keine Fehler, Warnungen oder Hinweise.
- Handbuch: sechs Node-Tests und sechs Python-Tests erfolgreich, einschließlich Bildinventar, Prüfsummen und abgewiesener ungeprüfter Bildänderungen.
- Aufnahmeplugin: acht Python-Tests erfolgreich; alle neuen Module kompilierbar.
- Produktionsbuild: 168 HTML-Seiten, interne Links, Bilddateien, Sprungmarken und Sprachpaare geprüft.
- DE/EN-Suchanfragen gegen den tatsächlich erzeugten Pagefind-Index erfolgreich.
- GitHub-Projektpfad und Apache-Bereitstellung am Domain-Ursprung jeweils gebaut und geprüft.
- GitHub-Build einschließlich Originalbildern und optimierten Varianten: 11,82 MB, 475 Dateien; 1,18 % des verwendeten Budgets von 1.000.000.000 Bytes.

Eine Veröffentlichung auf GitHub wurde in diesem Arbeitsabschnitt nicht durchgeführt. Die Website-Prüfungen sind lokale Build-, Inhalts- und Suchprüfungen.

## Wiederholung und Herkunft

Die vollständigen Rohserien und lokalen Prüfprotokolle bleiben unter `.capture-private/`. Veröffentlichte Bildkennungen, Prüfsummen und Metadaten liegen unter `data/captures-review.json` und `data/captures.json`. Der Ablauf zum Wiederholen ist in [CAPTURE.md](CAPTURE.md) beschrieben. Zugangsadressen und Anmeldedaten werden für die Reproduzierbarkeit nicht öffentlich gespeichert.

## Erweiterung: MetrixHD und neutrale Bildserie

Stand: 10. September 2026. Die aktuelle öffentliche Auswahl ersetzt sämtliche Bilder der ersten Grundlage durch neue Aufnahmen mit gestoppter Wiedergabe und dem Bootlogo der Box als Hintergrund.

| Prüfung | Ergebnis |
| --- | --- |
| Aufnahmebackend `grab-logo` | OSD und Bootlogo mit `grab` aufgenommen; Wiedergabe vor und nach jeder Aufnahme geprüft |
| Vollständiger Satz der acht Profile in DE/EN | 96 erwartete Ansichten vollständig; öffentliche Auswahl 88 Bilder nach Sichtprüfung |
| MyMetrixLite | Neun Ansichten je Sprache: Hauptmenü, Schriften, Farben, Wetter, sonstige Optionen, Infobar, klassischer Listenstil, Skinparts und Sicherungen |
| Kanallisten-Bedienung | Kontextmenü und Einstellungsdialoge für klassischen sowie neuen Modus in beiden Sprachen |
| Klassische MetrixHD-Listen | Vier vorhandene native Panels aufgenommen, ohne persistente Skin-Dateien zu ändern |
| Neue Senderlisten | Alle 15 Kombinationen aus drei Bildschirmen und fünf Listenstilen in DE/EN aufgenommen |
| Aussagekräftige EPG-Anzeige | Bestehendes Bouquet und Sender mit Cache-Daten nur markiert; keine Wiedergabe gestartet, keine Programmdaten erfunden |
| Auflösungen | HD 1280 × 720 aufgenommen; FHD als reale Auswahl bestätigt; WQHD auf dieser Testbox nicht angeboten |
| Wetter und Skinparts | Formular mit temporärem Beispielort sowie vorhandener deaktivierter Skinpart samt Vorschau aufgenommen; keine Wetterabfrage oder Aktivierung getestet |
| Übergabe | Oberfläche wieder auf Deutsch, Aufnahmedienst bereit; abschließende einsprachige Serie beendet mit gestoppter Wiedergabe und Bootlogo |
| Bestehende Speicherpfade | NAS- und HDD-Verzeichnisse nach den Neustarts weiter erreichbar; kein Reset und keine Neuanlage der Mounts |

MetrixHD/MyMetrixLite wurde mit Quellstand `c26f35adc71480851291a44da243ec0ba7b8a400` abgeglichen. Das Aufnahmeplugin ist lokal als `32677d7566a1f07f68a11b353df6dbab378ac3fb` committed. Die Layoutadapter stellen ihre temporären Werte nach jedem Dialog wieder her. Die Galerie zeigt wirkliche Skinvorlagen; sie ersetzt keinen vollständigen Test des Speicherns, Anwendens und aller möglichen Kombinationen von Benutzeroptionen.

Die übernommenen Grund- und MetrixHD-Bilder stammen aus `logo-02`, die abschließend mit EPG-Daten wiederholten Kanallisten aus `logo-03`. Vorläufe und die zusätzliche Übergabeserie bleiben privat. Die Namen und Zeiten der Programme in den Bildern sind Beispielinhalte aus dem vorhandenen EPG, auch in der englischen Oberfläche.

### Website-Prüfungen dieser Bootlogo-Serie

- 182 HTML-Seiten mit vollständigen DE/EN-Gegenstücken; 15 bebilderte Kapitel pro Sprache.
- 88 geprüfte Original-PNGs plus responsive WebP-Varianten; alle Bilder mit neutralem Hintergrund protokolliert.
- Sechs Node-Tests und sechs Python-Tests im Handbuch sowie 13 Python-Tests im Aufnahmeplugin erfolgreich.
- Produktionsbuild für GitHub-Projektpfad und Apache am Domain-Ursprung erfolgreich; lokale Links, Bilder, Sprungmarken und Sprachpaare geprüft.
- 13 Suchanfragen gegen den erzeugten DE/EN-Index erfolgreich, darunter WQHD, Skinparts und Picture grid.
- Galerie verwendet aufklappbare HTML5-Gruppen und funktioniert ohne zusätzliches Galerie-JavaScript.
- Schreibweise **OpenATV** in allen erzeugten HTML-Seiten vereinheitlicht; technische Adressen und Originalpixel bleiben erhalten.
- Veröffentlichungsgröße mit Originalen und optimierten Bildern: rund 55,86 MB; deutlich innerhalb des 1-GB-Budgets.

Die offenen vollständigen Bedienabläufe, WLAN und FBC aus der ersten Grundlage bleiben als weitere Arbeitsschritte bestehen. Es wurde auch in diesem Abschnitt nichts nach GitHub gepusht.

## Ergänzung: Infobars und Menüoptionen mit Senderhintergrund

Stand: 10. September 2026, nach der Bootlogo-Serie. Der Betreiber hat KiKA HD während „Sendeschluss“ als Beispielsender ausgewählt und für diese Aufnahmen ausdrücklich das Senderbild mit Programminformationen gewünscht. Die vorhandenen 88 Bootlogo-Bilder bleiben erhalten; 26 neue Bilder ergänzen sie.

| Prüfung | Ergebnis |
| --- | --- |
| Zwei neue Profile in DE/EN | `infobars`: 8 und `menu-options`: 5 Bilder je Sprache; alle 26 vollständig und einzeln gesichtet |
| Infobar-Varianten | Standard, Lite, zweite INFO, zweite ECM und Sendungsinformationen als native Ansichten aufgenommen |
| OSD-Optionen | Zeitlimits/zweite Leiste, automatisches Einblenden, Zeit-/Inhaltsanzeige, Menüoptionen und Hilfe bebildert |
| Menüformen | Vertikale und horizontale native Menüs sowie Bearbeitungsmodus aufgenommen; kein Menüeintrag verschoben oder ausgeblendet |
| Hintergrundprüfung | `grab-service` prüft den erwarteten aktiven Sender vor und während der Aufnahme; kein Bootlogo eingesetzt |
| Sprache und Übergabe | DE/EN nach GUI-Neustarts, anschließend ursprüngliches Deutsch und gewählter Sender wiederhergestellt; Aufnahmedienst bereit |
| EPG und Wetter | Echte Senderdaten unverändert, auch in EN; das vorhandene Wetterwidget behält teils deutsche Tageskürzel aus seinem Cache. Im Artikel erklärt. |
| Vorübergehende Darstellung | Infobar-Skin, Zeitlimits und Menüdarstellung nach den Szenen zurückgestellt; danach Vertikal, Bild und Text, normale erste/ECM-zweite Infobar kontrolliert |
| Öffentliche Metadaten | Werkzeugstand je Bild; die bisherigen 88 Aufnahmen behalten ihren alten Commit. Keine Servicereferenz oder vollständigen Aufträge importiert |

Die veröffentlichten Ergänzungen stammen aus `infobar-01-de-infobars`, `infobar-01-en-infobars`, `infobar-01-de-menu-options` und `infobar-01-en-menu-options`. Aufnahmeplugin: `c6a9fbdb68dcef6a8323ee337feecf0556dda6f8`. Die zusätzliche Webremote-Probe lieferte zwar bestätigte Tastensendungen, zeigte im Kontrollbild aber nicht zuverlässig den erwarteten OSD-Zielzustand; sie wird nicht als erfolgreicher Ende-zu-Ende-Test der Tastenkette gewertet. Die dokumentierte MENU-Zuordnung wurde in `Screens/Menu.py`, `Components/ConfigList.py` und der Menüstruktur geprüft. Die Prüfung mit physischer Fernbedienung bleibt davon getrennt.

### Website-Prüfungen der Ergänzung

- 186 HTML-Seiten mit DE/EN-Gegenstücken; 17 bebilderte Kapitel je Sprache.
- 114 geprüfte Original-PNGs plus responsive WebP-Varianten.
- Astro-Prüfung ohne Fehler, Warnungen oder Hinweise; 6 Node-Tests und 7 Python-Tests im Handbuch erfolgreich.
- Aufnahmeplugin: 19 Python-Tests erfolgreich, einschließlich Senderwechsel/Abbruch und Wiederherstellung ohne Schließen der Live-TV-Infobar; Python-Dateien kompilierbar.
- GitHub-Pages-Build erfolgreich, interne Links, Bilddateien, Sprungmarken und Sprachpaare geprüft.
- 21 Suchanfragen gegen den erzeugten Index erfolgreich, einschließlich einfacher/zweiter Infobar, versteckter Menüoptionen und horizontaler Menüs in DE/EN.
- Rund 69,93 MB veröffentlichte Dateien; knapp 7 Prozent des konservativen 1-GB-Budgets.

Die Änderungen werden ausschließlich lokal committed. Die Website benötigt zur Veröffentlichung nur ihre eigenen eingecheckten Bilder und keinen Zugriff auf die Testbox.

## Ergänzung: Farbtasten, Langdruck, Sicherung, Flash, MultiBoot und Speicher

Am 10. September 2026 wurden sieben Kapitel je Sprache ergänzt: sechs bebilderte Anleitungen und ein aus der Standard-Keymap erzeugtes Langdruck-Verzeichnis. Die Standard-Keymap enthält 150 aktive Langdruck-Zuordnungen für 77 Tastencodes. Kontext und gerätespezifische Einschränkungen bleiben erhalten; das Verzeichnis verspricht nicht die Verfügbarkeit jeder Aktion in jedem Bildschirm.

| Prüfung | Ergebnis |
| --- | --- |
| Native Aufnahmeprofile | `buttons` 3, `backups` 4, `firmware` 2, `storage` 4 Bilder je Sprache |
| Bildserie | `maintenance-a-*`: alle 26 Aufnahmen vollständig, einzeln gesichtet und über Prüfsummen in DE/EN-Paaren importiert |
| Hintergrund | `grab-logo`, Wiedergabe während der Aufnahmen gestoppt; keine laufenden Fernsehbilder |
| Menüs | Hotkeys, Grundbelegung, Schnellstartmenü, Softwareverwaltung, Standard-Backup-Dateien, Imagesicherung, Flash-Liste, MultiBoot, USB- und Standby-Dialoge |
| Flash Online | Echte Feed-/lokale Image-Liste geladen. Kein Downloadauftrag, kein Flash und keine Änderung der Bootauswahl durch die Tour |
| MultiBoot | Slot 2 aktiv, Slot 4 leer; Belegung und Bootparameter privat geprüft. Die gleiche Root-Partition kann mehrere Slot-Verzeichnisse enthalten |
| Schutz des laufenden Images | Slot 2, `linuxrootfs2`, Kernel `mmcblk0p4` und laufendes Root-Dateisystem `mmcblk0p8` nach Abschluss unverändert |
| Backup/Restore | Native Auswahl- und Informationsdialoge geprüft. Kein vollständiges Backup und kein Restore ausgeführt |
| USB-Identifikation | Entfernbarer JetFlash/Transcend-2-GB-Stick am USB-Bus, Größe und sysfs-Elternpfad unmittelbar vor dem Eingriff geprüft |
| Autorisierte USB-Demo | Ausschließlich `/dev/sdb2`, vorhandene große Datenpartition, als ext4 mit Label `OPENATV_DEMO` formatiert. Die erste USB-Partition blieb erhalten |
| USB-Funktionsprüfung | Einhängen unter `/media/OPENATV_DEMO`, Schreiben/Lesen, Aushängen, `e2fsck -f -n` mit Exitcode 0, erneutes Einhängen erfolgreich |
| Durchführung der USB-Demo | Separate SSH-Wartungsaktion mit Geräte- und Schutzprüfungen, kein automatischer Speicherjob des Aufnahmeplugins. Die GUI-Bestätigungskette wurde nicht Ende zu Ende ausgeführt |
| HDD und NAS | HDD `/dev/sda2` weiterhin unter `/media/hdd`, HDD-Swap unverändert aktiv, vorhandenes NAS-autofs weiter verfügbar |
| Dauerhafte Mounts | SHA-256 von `/etc/fstab` vor/nach identisch. USB-Mount bleibt temporär; keine Start-Einbindung hinzugefügt |
| Übergabe | GUI wieder `de_DE`, Aufnahmedienst bereit, USB-Demo eingehängt, aktives Image erhalten |

Bildprovenienz: Aufnahmeplugin `60ebf969f22b9a2835190ef1f5abd7b7fcd0a6a3`. Die vorhandenen 114 Bilder behalten ihre vorherigen Werkzeugstände. Anschließend ergänzt `a9d148ff7c9592f43ad8dae8369e2540f83bd814` die Sperren für nummerierte QuickMenu-Aktionen und Slot-Erstellung. Die kurze rein betrachtende Kontrollserie `maintenance-guard-de-*` lief mit diesem Endstand erfolgreich; ihre fünf Bilder gehören nicht zur öffentlichen Bildauswahl. Rohdiagnosen, Geräteprüfungen und USB-Testprotokolle bleiben im ignorierten privaten Arbeitsverzeichnis.

### Website-Prüfung dieser Ergänzung

- 200 HTML-Seiten, 99 Inhalte je Sprache zuzüglich Einstieg/404; 23 bebilderte Kapitel je Sprache.
- 140 geprüfte Original-PNGs und 420 responsive WebP-Dateien; Herkunft und Sprachpaare geprüft.
- Astro: 16 Dateien geprüft, keine Fehler, Warnungen oder Hinweise.
- Handbuch: 6 Node-Tests und 8 Python-Tests bestanden. Der neue XML-Test unterscheidet Langdruck von Wiederholung/Loslassen und erhält Kontext/Gerätescope.
- Aufnahmeplugin: 21 Python-Tests bestanden, einschließlich gesperrtem Startaufruf und Warten auf echte Image-Slots.
- GitHub-Pages-Build erfolgreich, alle internen Links, Medien, Sprungmarken und DE/EN-Gegenstücke geprüft.
- 35 Suchprüfungen gegen den erzeugten Pagefind-Index erfolgreich, einschließlich Tasten, technischer Langdruck-Aktionen, Sicherung, Zielslot, MultiBoot und Dateisystemprüfung.
- Lokaler Vorschauabruf des neuen Farbtasten-Kapitels: HTTP 200. Kein zusätzlicher Website-Browsertest.
- Rund 83,10 MB in 997 veröffentlichten Dateien; 8,31 Prozent des konservativen 1-GB-Budgets.

Es wurde ausschließlich lokal committed. Die Website bleibt ohne Boxzugriff baubar; alle erzeugten privaten Dateien und Sicherungsarchive sind von der Veröffentlichung ausgeschlossen.

## Ergänzung: Neuinstallation, Fernzugriff, Logs und Support

Am 10. September 2026 wurden sieben weitere Kapitel je Sprache ergänzt: Downloads/Modelle, USB-Neuinstallation, Softwareupdate, AutoRestore, SSH/Dateizugriff/Passwort, Logs und Fehlerberichte. Die Anleitungen bleiben modellneutral. Einschaltfolgen und Recovery-Besonderheiten werden bewusst an die Hersteller-/Modellanleitungen im Forum angebunden.

| Prüfung | Ergebnis |
| --- | --- |
| Downloads und Modelle | Offizieller Einstieg mit `v=current` im Browser geöffnet; Gerätesuche, Hersteller und Versionswahl vorhanden. Keine feste Versions- oder Modellanzahl in die Anleitung kopiert |
| Forum | Herstellerbereich unter `viewforum.php?f=454` im Browser geprüft |
| Fehlerberichte | OpenATV-Enigma2- und OE-Alliance-Core-Issueseiten geprüft; Hinweis auf mögliche Einschränkungen beim Erstellen neuer Issues und Forum als Einstieg bei unklarer Zuordnung |
| Menü-/Quellprüfung | OpenATV-Enigma2 `fdc9347241245fd18fd0b8bc93727237189c916c`: Logs, Password Settings, SoftwareUpdate, FlashManager, BackupRestore, Benutzer-/Paketwiederherstellung und Crashlog-Pfade |
| FastRestore | Installiertes `/etc/init.d/settings-restore` gelesen: frühe Wiederherstellung, Modus-/Umfangsmarkierungen, Paketlisten, lokale IPKs und `/home/root/FastRestore.log` abgeglichen |
| SSH und SFTP | SSH lesend genutzt; SFTP-Anmeldung und Verzeichnisabfrage erfolgreich. Das Image enthält `openssh-sftp-server` neben Dropbear |
| Enigma2 starten/stoppen | Installierte `/etc/inittab` geprüft: GUI wird in Runlevel 3 überwacht, Runlevel 4 stoppt sie. SSH-/Telnet-/FTP-Dienste sind in beiden Runlevels eingerichtet |
| Log-Dateien | Bereits aktivierte ausführliche Protokollierung beobachtet; neue `*-enigma2-debug.log` unter `/home/root/logs/` vorhanden. Menübezeichnung `/home/root/` und tatsächlicher Unterordner getrennt erklärt |
| Neue Aufnahmen | Profil `diagnostics`: drei native Ansichten je Sprache; Log-Einstellungen, AutoRestore-Modus und Netzwerkmenü mit markiertem Passwort-Eintrag |
| Sichtprüfung | Alle sechs DE/EN-Bilder einzeln auf Ansicht, Beschriftung, Sprache und neutralen Bootlogo-Hintergrund geprüft; Prüfsummen vor Import abgeglichen |
| Unveränderte Einrichtung | Keine Log-Einstellung gespeichert, kein Root-Passwort geändert, kein Paketupgrade, Flash oder Restore ausgelöst. In dieser Ergänzung kein Laufwerk formatiert oder umkonfiguriert |
| Übergabe der Box | Nach den Sprachneustarts ursprüngliches `de_DE` wiederhergestellt; GUI und Aufnahmedienst wieder verfügbar |

Der Aufnahmeplugin-Stand ist `befcd21743810dcb4d603471649e3e64d1c3eef1`; seine 21 Python-Tests bestanden. Die sechs neuen Bilder aus `diagnostics-a-de-diagnostics` und `diagnostics-a-en-diagnostics` ergänzen die Bibliothek auf 146. Alle bisherigen Bilder behalten ihre jeweilige Provenienz. Der lokal gelesene Restore-Skriptstand hat SHA-256 `2d0ed4a0a7748497d97515ac9fd9cb945ceeed0acd5ceda0468a1b06858fc661`; das Skript und rohe Systemdaten werden nicht veröffentlicht.

### Website und korrigierter Repository-Name

Das Repository heißt jetzt **`openatv/enigma2-doku`**. Git-Remote, Pages-Basispfad, Workflow, GitHub-/Bearbeitungslinks, Vorschauanleitung und Testfälle verwenden diesen Namen. Das Remote war vom Betreiber bereits angepasst. Eine Suche im gebauten Ergebnis fand keinen Verweis mehr auf die frühere fehlerhafte Schreibweise.

- 214 HTML-Seiten, 106 Inhalte je Sprache und 27 bebilderte Kapitel je Sprache.
- 146 Original-PNGs und 438 responsive WebP-Dateien; Herkunft, Prüfsummen und DE/EN-Paare geprüft.
- Astro: 21 Dateien geprüft, keine Fehler, Warnungen oder Hinweise.
- Handbuch: alle 11 Node-Tests und 8 Python-Tests bestanden.
- Produktionsbuild für GitHub Pages unter `/enigma2-doku` sowie für Apache am Domain-Ursprung erfolgreich. Links, Medien, Sprungmarken und Sprachgegenstücke geprüft.
- Je 51 Suchprüfungen für beide Hosting-Varianten erfolgreich, einschließlich FAT32, AutoRestore, SFTP/Root-Passwort, FastRestore.log, Debug-Konfigurationsschlüssel, Modelle und Fehlerberichte.
- Deutsche Log-Anleitung im lokalen Browser unter dem neuen Projektpfad geöffnet; Kapiteltext, Bildlink, Navigation und GitHub-Bearbeitungslink kontrolliert. Suchergebnisse wurden automatisiert gegen den echten Pagefind-Index geprüft.
- Veröffentlichungsgröße: rund 89,95 MB in 1053 Dateien, etwa 9,00 Prozent des konservativen 1-GB-Budgets.

Ein vollständiger USB-Flash, AutoRestore, absichtlich ausgelöster Crash oder Root-Passwortwechsel wurde für diese Ergänzung nicht getestet. Die dokumentierten Abläufe unterscheiden diese Grenzen von den tatsächlich geprüften Menüansichten und Lesezugriffen. Änderungen werden ausschließlich lokal committed; der Upload erfolgt durch den Betreiber.

## Ergänzung: NFS, SMB, Windows 11 und NAS-Aufnahmen

Am 10. September 2026 wurden sieben neue Kapitel je Sprache ergänzt: NFS-Mounts, SMB/CIFS, Windows 11, autofs/fstab mit Offline-Verhalten, Enigma2 als NFS-Server, NAS-Aufnahmen und Dateisysteme. Der gemeinsame NAS-Einstieg, Navigation, Startseiten, Laufwerksanleitungen, FAQ und Log-Kapitel verweisen darauf.

| Prüfung | Ergebnis |
| --- | --- |
| Enigma2-Quellen | `NetworkMounts`, `NetworkManager`, NFS-Dienst/Exportdialog, Recording, Timeshift, UsageConfig und deutsche Beschriftungen im festgehaltenen Quellstand geprüft |
| Besondere Befunde | SMB3-Auswahl erzeugt `vers=3.0`; NFS-`timeo` ist in Zehntelsekunden; autofs-HDD-Ersatz bleibt unter `/media/autofs`; `preferredPath` berücksichtigt den Expertenmodus; der NFS-Dialog ersetzt die Datei ab `# OpenATV managed exports` |
| Externe Grundlagen | Verlinkte Microsoft-Dokumentation zu Windows 11, SMB-Signierung, Freigaben und Firewall sowie NFS-/CIFS-/autofs- und Dateisystem-Dokumentation abgeglichen |
| Neues Aufnahmeprofil | `network-shares`, vier native Ansichten je Sprache, alle acht PNGs vollständig und einzeln gesichtet |
| Beispieldaten | Dokumentationsadressen, Beispielnamen und leeres Passwort; Speichern und Exportauswahl gesperrt, keine neuen Mounts/Exporte eingerichtet |
| Werkzeugstand | `e1e6f83685c16dbe51ca7449607f506d98c559e2`; 23 Python-Tests des Aufnahmeplugins erfolgreich |
| Bestehende Konfiguration | SHA-256 von `/etc/fstab`, `/etc/auto.network`, `/etc/exports` und `/etc/nfs.conf` vor/nach der Serie identisch |
| Übergabe der Box | Enigma2 läuft, ursprüngliche Sprache `de_DE` wiederhergestellt; HDD und NAS-Einbindung erhalten |

Die Bilder aus `network-a-de-network-shares` und `network-a-en-network-shares` wurden als DE/EN-Paare mit Prüfsummen importiert. Die ersten 146 Aufnahmen behalten ihre jeweiligen Werkzeugstände. Der neue Bestand umfasst **154 Original-PNGs**, davon 128 mit Bootlogo und 26 mit dem zuvor gewählten Senderhintergrund. Es gibt **30 bebilderte Kapitel je Sprache**. Native Dialoge wurden verwendet; Beispiele wurden nicht als erfolgreich eingerichtete Verbindungen ausgegeben.

### Website-Prüfungen

- Astro: keine Fehler, Warnungen oder Hinweise.
- Handbuch: 11 Node- und 8 Python-Tests erfolgreich, einschließlich Bildinventar und Herkunft.
- Produktionsbuild für GitHub Pages und Apache am Domain-Ursprung erfolgreich; 228 HTML-Dateien, lokale Links, Bilder, Sprungmarken und Sprachpaare geprüft.
- 67 Suchprüfungen gegen den erzeugten Index erfolgreich, einschließlich NFSv4, SMB-Optionen, Windows-Privatprofil, Spinner, Root Squash, Aufnahmeziele und exFAT in DE/EN.
- Gebautes NFS-Kapitel in der lokalen Browseransicht kontrolliert: neue Navigation, Tabellen, Bildlinks, Kapitelübergänge und Sprachmenü vorhanden.
- 113 Inhalte je Sprache, 154 Screenshot-PNGs plus 462 responsive WebP-Varianten. GitHub-Build rund 95,08 MB, etwa 9,51 Prozent des verwendeten 1-GB-Budgets.

### Bewusst noch offene Praxistests

Auf dem Windows-PC wurden keine Konten, Freigaben, Profile oder Firewall-Regeln verändert. Ein vollständiger Windows-SMB-Aufnahmetest, neu eingerichtete NFS-Exporte mit Clientzugriff, NAS-Timer/Timeshift unter Last und ein absichtlich ausgelöster NAS-Ausfall wurden in diesem Abschnitt nicht durchgeführt. Die Anleitung nennt dafür konkrete Kontrollen, behauptet aber keine gemessenen Ausfallzeiten. Die vorhandene CIFS-Freigabe war bereits in der ersten Serie schreibend und lesend geprüft worden.

Es wurde kein Laufwerk formatiert, kein aktuelles Image überschrieben und keine Aufnahmeziel-Konfiguration umgestellt. Rohserien und private Prüfprotokolle bleiben lokal. Handbuch und Aufnahmeplugin werden jeweils nur lokal committed; kein Push und keine Veröffentlichung in diesem Abschnitt.

## Ergänzung: EPG, Timer, Aufgaben und Uhrzeit

Am 10. September 2026 wurden neun Kapitel je Sprache ergänzt: EPG-Ansichten/Primetime, INFO-/EPG-Tasten, EPGRefresh, EPGImport, fehlende Daten/IPTV, Aufnahme-/Umschalttimer, Aufgaben-/Ausschalttimer, Linux-Cron sowie Zeit/NTP/Aufwachen. Navigation, Startseiten, EPG-Einstieg, Add-ons, Langdruck-Kapitel und FAQ verweisen darauf.

### Quellen und Bildserie

| Prüfung | Ergebnis |
| --- | --- |
| Gemeinsamer Enigma2-Stand | `fdc9347241245fd18fd0b8bc93727237189c916c`: EPG-Aufrufe/-Ansichten, Keymap/Hotkeys, Setup-/Menütexte, Timer/Scheduler, Standby, NetworkTime und Hardware-Weckzugriff geprüft |
| EPGRefresh | Installierter Stand `0f1eab407ff699e0cbef9e58cce061d2bf7d461f`, Dialogversion 2.1.4; native Konfiguration und Sendereditor aufgenommen, Zeitfenster/Standby-/Weckablauf im Quellcode geprüft |
| EPGImport | Installierter XMLTV-Import-Stand `a32929f2d0`; Quellenpaket `4eaaa70fca`; Konfiguration, Quellen und Tageprofil aufgenommen, Kanal-ID-/Reference-Zuordnung und Filter geprüft |
| Aufnahmeplugin | `e6487baa4a3fe0d1d2cde8590a173eb9890305e9`; 27 Python-Tests bestanden, darunter Schutz der Formularobjekte, gebundene Skin-Callbacks und ARD-/ZDF-Auswahl |
| Neue Profile | `epg-views`: 8, `epg-tools`: 7, `timer-guides`: 4 Ansichten je Sprache; alle sechs `epg-e-…`-Läufe vollständig |
| Sichtprüfung | Alle 38 neuen PNGs einzeln auf Inhalt, Sprache und Lesbarkeit geprüft; native Texte und vorhandene Skin-Artefakte unverändert belassen |
| Senderauswahl | Vorhandenes Bouquet mit Das Erste HD, ZDF HD, 3sat HD und weiteren Diensten; echte Cache-Daten, keine erfundenen Sendungen und keine TV-Wiedergabe während der Bilder |
| Beispiel-Formulare | EPGRefresh-Auswahl mit Das Erste/ZDF und automatische Plugin-Felder nur lokal im Formular; Aufnahme-/Scheduler-Beispiel nie registriert, Speichern/Import/Quellenupdate gesperrt |
| Boxzustand | Enigma2 läuft; ursprüngliche Sprache `de_DE` nach den Sprachneustarts wiederhergestellt |

Der EPG-Cache enthält deutschsprachige Sendungstitel und Beschreibungen, die beim Wechsel auf Englisch erhalten bleiben. Die vorhandene Metadaten-Erweiterung ergänzt teilweise Bilder und Texte. Beim einfachen und erweiterten Einzel-EPG zeigt der aktive Skin dieselbe Grundgestaltung, einen angeschnittenen großen Hintergrundtitel und leere Metadatenklammern. Die Artikel benennen diese sichtbaren Artefakte; es erfolgte keine Pixelkorrektur. Frühere Versuche mit unpassenden Sendern, fehlenden Detailfeldern oder abgebrochenem Dialogaufbau wurden nicht importiert.

Die SHA-256-Werte von `timers.xml`, `scheduler.xml`, `epgrefresh.xml`, `/etc/crontab`, `/etc/fstab`, `/etc/auto.network`, `/etc/exports` und `/etc/nfs.conf` stimmten nach der endgültigen Serie mit den Ausgangswerten überein. HDD, NAS und aktuelles Image wurden nicht verändert.

### Besondere fachliche Befunde

- Lange INFO-/EPG-Standardaktionen bieten eine Erweiterungsauswahl nur bei passenden registrierten Plugins; andernfalls kann direkt der Einzel-EPG erscheinen. Die Aktivierung des QuickEPG ist auch in den Fernbedienungseinstellungen sichtbar.
- EPGRefresh fasst gleiche Transponderkennungen zusammen. Sein Abschalten ist im geprüften Stand an einen eigenen Aufwachlauf gebunden. EPGImport benötigt ausgewählte Quellen und passende Kennungen; Sendernamen allein sind keine Zuordnung.
- Aufnahmetimer, Scheduler-Aufgaben, Plugin-Zeitpläne und Linux-Cron werden ausdrücklich getrennt. Cron programmiert keine Hardware-Weckzeit und kennt laufende Enigma2-Aufnahmen nicht automatisch.
- Cronie 1.7.2 ist installiert. `/var/spool/cron/crontabs` verweist auf `/etc/cron/crontabs`. Der geprüfte Cronmanager verwendet beim Speichern jedoch noch `-c` als Verzeichnisoption, während Cronies Werkzeug eine andere Bedeutung hat. Deshalb beschreibt das Kapitel `crontab -e` als Ausweichweg und behauptet keinen getesteten GUI-Speicherablauf.
- Das Zeittutorial vermeidet die pauschale Aussage, alle Boxen hätten keine RTC. Systemuhr, gepufferte RTC, Frontprozessor, Standby und Deep-Standby werden unterschieden. NTP braucht einen erreichbaren Zeitserver, aber nicht zwingend einen öffentlichen Internetserver; gültige DVB-Zeit kann ohne Internet funktionieren.

### Website-Prüfungen und Grenzen

- Astro: 21 Dateien geprüft, keine Fehler, Warnungen oder Hinweise.
- Handbuch: 11 Node-Tests und 8 Python-Tests bestanden, einschließlich Inventar, SHA-256 und Sprachpaaren.
- Produktionsbuild für GitHub Pages und Apache am Domain-Ursprung erfolgreich. Je 246 HTML-Dateien, lokale Links, Assets, Sprungmarken und Sprachgegenstücke geprüft.
- Je 89 Suchprüfungen bestanden, darunter Primetime, INFO lang, tvg-id, custom.channels.xml, EPGRefresh, epgimport.log, Umschalttimer, scheduler.xml, crontab, Uhrendrift und NTP.
- Gebautes deutsches EPG-Kapitel im lokalen Browser geöffnet: neue Navigation, Tabelle, Bild-/Originaldateilinks, Quellen, Kapitelübergänge und Sprachmenü kontrolliert.
- 122 Inhalte je Sprache; 37 Kapitel je Sprache mit Bildern. Insgesamt 192 Original-PNGs, davon 166 mit Bootlogo und 26 aus der früheren Senderhintergrund-Serie, sowie 576 responsive WebP-Varianten. Pages-Build rund 115,83 MB in 1303 Dateien, etwa 11,58 Prozent des 1-GB-Budgets.

Es wurde kein neuer Aufnahme-, Scheduler- oder Cronauftrag gespeichert, kein Import ausgelöst, kein Konflikt künstlich erzeugt und kein automatischer Deep-Standby-/RTC-Wecklauf getestet. Die beschriebenen Anleitungen stützen sich auf native Dialoge und abgeglichene Quellen, nicht auf einen behaupteten vollständigen Praxistest aller Abläufe. Ein durchgehender Import mit Senderzuordnung und daraus folgender Testaufnahme sowie Hardware-Wecktests können später ergänzend protokolliert werden. Änderungen werden nur lokal committed; kein Push.

## MovieSelection, EMC und FileCommander – 10.09.2026

| Bereich | Geprüfter Umfang |
| --- | --- |
| Vergleich | EMC-Tastenübernahme und `ml_disable` im Sessionstart, Neustartbedarf sowie unabhängig initialisierte Hintergrundfunktionen im Quellcode geprüft |
| MovieSelection | Listen-/Setup-Klassen, Ordner, Sortierung, Tasten, Wiedergabe und Papierkorb mit der vorhandenen Das-Erste-Testaufnahme und dem Enigma2-Referenzstand abgeglichen |
| EMC | Installiertes Paket `4.0.+git1790+fc7fd610+fc7fd6181e-r0`, passender Quellstand `fc7fd6181e`; 135 aktive Hauptsetup-Einträge per AST gezählt, alle mit eigener Erklärung in DE/EN versehen; zusätzliche Cover-/Playlist-Dialoge erläutert |
| FileCommander | Installiertes Paket `8.0.2-devel+git35442+c446c390+c446c39a38-r1`; native Zwei-Spaltenansicht und alle 30 Setup-Einträge, Aufnahmegruppen-Rückfragen, Navigation und Hintergrundjobs im passenden Quellcode geprüft |
| Neue Bilder | 32 Original-PNGs aus den sechs `media-safe-…`-Läufen einzeln gesichtet, in DE/EN, Bootlogo bei gestoppter Wiedergabe |
| Aufnahmeplugin | `f7251392db31e5988b56a0938258bcae093b1b43`; 30 Python-Tests bestanden, einschließlich vier gezielt begrenzter EMC-Konfigurationsänderungen und Wiederherstellung fehlender Werte/Modulzustände |
| Erhalt vorhandener Daten | Neun Dateien per SHA-256 unverändert: Aufnahme-Begleitdateien, Timer-/Scheduler- und Mountdateien. Videodatei weiterhin 563403288 Bytes; beide Papierkörbe leer. Vier EMC-Originalwerte und deutsche GUI-Sprache wiederhergestellt. |

Ein erster erneuter Capture-Aufruf wurde von der automatischen Freigabeprüfung wegen aktiver EMC-Hintergrundreinigung abgewiesen. Daraufhin wurde das Verfahren um die Suspendierung der vier Automatiken bei gestoppter GUI, einen privaten Wiederherstellungssnapshot und die Laufzeitprüfung direkter Profilaufrufe ergänzt. Die geschützte Serie wurde freigegeben und erfolgreich ausgeführt; es besteht kein offener Freigabeblocker.

Die Tests belegen native Ansichten und Quelllogik. EMC-Deaktivierung über die physische Fernbedienung mit anschließendem Tastentest, alle Wiedergabe-/Sprachkombinationen, Cover-Downloads, Archive/Paketinstallation/Skripte sowie echte Kopier-, Lösch- oder automatische Bereinigungsläufe wurden damit nicht vollständig getestet. Die Aufnahmedatei wurde nicht zur Demonstration verändert. Modellabhängige Decoderfähigkeiten bleiben außerhalb der Basisanleitung.

### Website-Prüfungen

- Acht neue Artikel je Sprache: Vergleich, MovieSelection, fünf EMC-Kapitel einschließlich der vollständigen Hauptsetup-Referenz und FileCommander.
- Astro: 21 Dateien geprüft, keine Fehler, Warnungen oder Hinweise. Handbuch: 11 Node-Tests und 8 Python-Tests bestanden.
- Produktionsbuild für GitHub Pages und Apache am Domain-Ursprung erfolgreich. Je 262 HTML-Dateien, lokale Links, Assets, Sprungmarken und Sprachgegenstücke geprüft; je 103 Suchprüfungen bestanden.
- Gebaute Vergleichsseite, deutsches FileCommander-Kapitel und englische EMC-Optionsreferenz im Browser kontrolliert: Navigation, Tabellen, Originalbild mit Beschriftung und Sprachwechsel passen zum Inhalt. Breite Tabellen sind innerhalb des Inhalts horizontal scrollbar.
- 130 Inhalte und 43 bebilderte Kapitel je Sprache. Insgesamt 224 Original-PNGs und 672 responsive WebP-Varianten. Der abschließende Pages-Build umfasst 1465 Dateien und rund 132,79 MB, etwa 13,28 Prozent des vorsichtigen 1-GB-Budgets.

Die lokale Vorschau wurde abschließend wieder mit dem GitHub-Pages-Projektpfad `/enigma2-doku` gebaut. Änderungen werden lokal committed; kein Push.


## AutoTimer – 10.09.2026

- Installiertes Paket `V1.0-git1137+20859d70+20859d7ae9-r0`, Quellstand `20859d7ae9`, native Versionsanzeige 4.3.2. Der tatsächlich verwendete Einstellungsdialog enthält 24 Definitionen; `setup.xml` enthält nur 23 und lässt die eigene Abfrageeinheit aus.
- Zwei vollständige Läufe mit je neun nativen Ansichten, insgesamt 18 DE/EN-Originalbilder. Alle einzeln auf Sprache, Inhalt und Lesbarkeit geprüft. Lange Titel sind im nativen Skin teilweise gekürzt; keine Retusche.
- Aufnahmeplugin `ac3ca3d61d67dd89331366a2caa916f8a370a53c`: 33 Python-Tests bestanden. Abgetrennte Beispielobjekte, fehlende Parser-/Schreib-API der Übersicht und auf einen Schlüssel begrenzte Polling-Sicherung einschließlich Wiederherstellung fehlender Werte geprüft.
- AutoTimer-Polling und vier EMC-Automatiken vor den GUI-Starts suspendiert, ihre ursprünglichen Werte anschließend wiederhergestellt. Deutsche GUI-Sprache wiederhergestellt. SHA-256 von `autotimer.xml`, `timers.xml`, `epgrefresh.xml`, `fstab` und `auto.network` stimmt mit dem Ausgangsstand überein.
- `scheduler.xml` ist ausdrücklich nicht byteidentisch: Die Datei enthält fortgeschriebene Start-/Zustandsprotokolle einer bereits vorhandenen e2MDB-Aufgabe. Außerdem steht nach den Neustarts `config.plugins.autotimer.show_help=False` in der settings-Datei, zuvor fehlte diese Zeile auf Disk. Der ursprüngliche Live-Speicherwert war nicht separat erfasst; daraus wird keine Ursache oder vollständige Unverändertheit aller Einstellungen abgeleitet. Das Aufnahmeprofil registriert keine Scheduler-Aufgabe und unterdrückt die Erstaufrufhilfe seiner eigenen Übersicht.
- Quellabgleich: Vorschaupfad endet vor Dubletten-/Zähler-/Aufnahmekonfliktprüfungen; Text-Einschlussfilter werden per UND verknüpft; explizite Sender haben Vorrang vor Bouquets; Archivprüfung durchsucht das Aufnahmeziel nicht rekursiv. Der Löschblock für `check_eit_and_remove` ist im geprüften Stand auskommentiert. Diese Grenzen sind in beiden Sprachfassungen erklärt.

Es wurde keine AutoTimer-Regel gespeichert, kein Parserlauf ausgelöst und keine echte Aufnahme oder Konfliktauflösung getestet. Polling-Intervall, EPGRefresh-/EPGImport-Integration und Hardware-Aufwachen wurden anhand der jeweiligen Implementierung erklärt, nicht als vollständig praktisch getestete Kette dargestellt.


### Website-Prüfungen

- Zwei neue Kapitel je Sprache: AutoTimer-Anleitung und vollständige Referenz der 24 globalen Optionen. Navigation unter EPG, Timer & Zeit sowie Querverweise aus Add-ons, EPGRefresh, EPGImport und Aufnahmetimern ergänzt.
- Astro: 21 Dateien geprüft, keine Fehler, Warnungen oder Hinweise. 11 Node-Tests und 8 Python-Tests des Handbuchs bestanden.
- Pages- und Apache-Build erfolgreich: je 266 HTML-Dateien mit lokalen Links, Assets, Sprungmarken und Sprachgegenstücken geprüft; je 111 Suchprüfungen bestanden, neu unter anderem `autotimer.xml`, Abfrageeinheit und `check_eit_and_remove`.
- Deutsche Anleitung und englische Optionsreferenz im gebauten lokalen Browser geprüft: neue Navigation, Bilder mit Originaldateilink, Beschriftungen und Tabellen. Der abschließende Build verwendet wieder `/enigma2-doku` für GitHub Pages.
- 132 Inhalte und 45 bebilderte Kapitel je Sprache. Insgesamt 242 Original-PNGs (216 mit Bootlogo) und 726 responsive WebP-Varianten. Pages-Ausgabe rund 141,52 MB in 1545 Dateien, etwa 14,15 Prozent des 1-GB-Budgets.

Nur lokale Commits; kein Push.


## Wiedergabe und Untertitel – 10. September 2026

- Installierte Stände gelesen: MediaPlayer/DVDPlayer mit Enigma2 `c446c39a38`, ServiceApp `95e5a4f41d`, gstplayer2 0.2 (Laufzeitmeldung 10021), exteplayer3 `668859dd3c` (Laufzeitmeldung 181), Blu-ray Player `0962ee60f2`, SubsSupport 1.5.8 `7d583fe937`.
- 28 echte DE/EN-Bilder des Profils `playback-guides`, jeweils vollständiges Manifest und SHA-256 geprüft. Alle Bilder mit gestoppter Wiedergabe und Bootlogo; jedes Original visuell geprüft.
- Formularaktionen eingefroren. Keine neue Playlist, kein IPTV-Bouquet, kein Disc-Abspielen, keine Suche/Anmeldung bei Untertitelanbietern. Temporäre Auswahl für ServiceApp-4097 und Teletext-Expertenmodus restauriert; SubsSupport verwendet ungespeicherte abgetrennte Standardfelder.
- Originalsprache Deutsch wiederhergestellt. Vergleich vor/nach der Serie: `autotimer.xml`, `timers.xml`, `epgrefresh.xml`, `fstab`, `auto.network`, `tuxtxt2.conf`, `playlist.e2pls` und `serviceapp_replaceservicemp3` unverändert (einschließlich vorher fehlender Dateien). Erfasste MediaPlayer-, ServiceApp-, SubsSupport-, Teletext-, Sprach- und geschützte Automatikwerte ebenfalls unverändert. Daraus wird keine Bytegleichheit sämtlicher Systemdateien abgeleitet.
- Quellprüfung unterscheidet Dienst 1 von TV/Radio im dritten Feld, nativen ServiceMP3 von gstplayer2 sowie ServiceApp-Ersatz von expliziten 5001/5002-Referenzen. Der eigene SubsSupport-Parser unterstützt SRT/MicroDVD; native GStreamer-Untertitel haben einen anderen Funktionsumfang.
- Ausstehend: Abspielen echter DVD/Blu-ray-Medien und Menüs, optische Laufwerke, Provider-Downloads, Film-Synchronisation, Formate auf verschiedenen Hardwaredecodern sowie HiSilicon-Anhang. Die neue Dokumentation verspricht keine modellübergreifende Codec- oder DRM-Kompatibilität.


### Website-Prüfungen für Wiedergabe und Untertitel

- Neun neue Kapitel je Sprache, sechs davon mit Originalbildern: Player-Übersicht, MediaPlayer, DVD/Blu-ray, ServiceApp, Servicereferenzen, Untertitel, SubsSupport, Teletext und Formate. Eigener Navigationsbereich, Einstieg auf der Startseite und Querverweise aus Aufnahme-/Add-on-Übersicht, Senderlisten und IPTV-EPG.
- Astro-Check: 21 Dateien, keine Fehler, Warnungen oder Hinweise. 11 Node-Tests und 8 Python-Tests des Handbuchs bestanden; das Aufnahmeplugin hat 35 bestandene Tests.
- Pages- und Apache-Build: jeweils 284 HTML-Dateien einschließlich Links, Assets, Sprungmarken und Sprachgegenstücken sowie 133 echte Suchprüfungen bestanden. Neue Suchfälle umfassen unter anderem 5002, ServiceApp, MediaPlayer, MicroDVD, SubsSupport und die Teletext-Auflösung.
- Deutsche ServiceApp- und englische SubsSupport-Seite in der gebauten Browseransicht geprüft: Tabellen, Originalbilder, Beschriftungen, Sprachwechsel-Einstieg und Links zur Vergrößerung vorhanden. Abschließend wieder der GitHub-Pages-Pfad `/enigma2-doku`.
- 141 Inhalte und 51 bebilderte Kapitel je Sprache; insgesamt 270 Original-PNGs und 810 responsive WebP-Varianten. Pages-Ausgabe rund 156,50 MB in 1695 Dateien, etwa 15,65 Prozent des konservativen 1-GB-Budgets.

Nur lokale Commits; kein Push und keine Veröffentlichung.


## e2MDB – 10. September 2026

- Umfang: 34 Kapitel pro Sprache, vollständige englische Fassung, acht technische Anhänge, 47 einzeln beschriebene Hauptsetup-Optionen. Ursprüngliche deutsche Word-/JSON-Anleitung als Grundlage; keine Umbra-Bezüge in den veröffentlichten e2MDB-Inhalten.
- Plugin v1.0 auf OpenATV 8.0.2-devel/MetrixHD. SHA-256 von installiertem `plugin.py` und `setup.xml` stimmt mit e2MDB-Commit `7442e3d04aac25c741fa96b370c22994131928e2` überein.
- 24 endgültige native DE/EN-Aufnahmen einzeln visuell geprüft; API-Balken decken TMDb, TVDb, OMDb und FanArt ab. Erste Probeaufnahmen wurden verworfen, weil Enigma2 beim Anhängen abgetrennter Felder gespeicherte Werte nachlädt. Die korrigierte Reihenfolge und ein Abbruch bei fehlgeschlagener Verdeckung sind durch Regressionstests abgesichert. Aufnahmeplugin: 37 Tests bestanden.
- Alle Dialogaktionen deaktiviert, kein Scan, kein Cleanup, keine Dateiumbenennung und kein Speichern der e2MDB-Formulare ausgelöst. Bereits vorhandene Backend-Automatik durfte weiterarbeiten; deshalb verändern sich Laufzeit-/Queue-Zähler. Die GUI-Sprache wurde wieder auf Deutsch gesetzt.
- Vorher-/Nachher-Vergleich: `e2mdb/api_keys.json`, `e2mdb/paths.json`, `autotimer.xml`, `timers.xml`, `epgrefresh.xml`, `fstab`, `auto.network`, `tuxtxt2.conf`, `playlist.e2pls`, `serviceapp_replaceservicemp3` sowie erfasste e2MDB-/Player-/Automatik-/Sprachwerte unverändert. Öffentliche Textdateien gegen die vier privaten Schlüsselwerte geprüft: keine Treffer. Keine Behauptung über Bytegleichheit sämtlicher Laufzeitdateien.
- Native DB-Statusseite: Abfrage läuft in ein Timeout und zeigt als Ersatz „nicht vorhanden / 0 B“. Die vorhandene Datenbank und Editor-Datensätze beweisen, dass diese Fehleranzeige keine gültige Größenangabe ist. Diese beiden Aufnahmen wurden nach der Prüfung aussortiert und nicht in die Benutzeranleitung übernommen.
- Scannerbericht zeigt reale Einzelprobleme des vorherigen automatischen Workers. INFO ist im aktuellen Scanner nicht an die Berichtsklasse gebunden; die abweichende Angabe der Vorlage korrigiert.
- Web-Editor: vorhandenen Datensatz „21“ geöffnet, Cover, Jahr, Beschreibung und getrennte Umbenennfunktion geprüft und ein Bild gespeichert. Keine Wiedergabe und keine Datenänderung. Native Weboberfläche teilweise deutsch: Backend-Aktion `i18n` gibt ein leeres Wörterbuch zurück. Im Media Browser trat `a.localeCompare is not a function` bei Darstellerdaten auf; außerdem wurde ein Fehler bei einer `.length`-Abfrage auf `null` protokolliert. Diese Plugin-Probleme wurden dokumentiert, die Plugin-Websoftware selbst nicht geändert.
- Nicht als praktisch vollständig getestet: großer Bibliotheksscan, Provideranmeldung/-quoten, manuelle Alternativenübernahme, Umbenennen, nächtliche Gesamtkette, Datenbankwiederherstellung und komplette Web-Bibliotheksdarstellung. Technische Abläufe und Sicherheitsfolgen wurden mit dem Quellstand abgeglichen.


### Website-Prüfungen für e2MDB

- Beide Sprachfassungen enthalten genau 34 e2MDB-Kapitel und 47/47 dokumentierte Setup-Schlüssel. Je Sprache insgesamt 175 Inhalte und 62 bebilderte Kapitel.
- Astro-Check: 21 Dateien, keine Fehler, Warnungen oder Hinweise. 11 Node-Tests und 8 Python-Tests des Handbuchs bestanden. Aufnahmeplugin: 37 Tests bestanden.
- Pages- und Apache-Build: jeweils 352 HTML-Dateien mit lokalen Links, Assets, Sprungmarken und Sprachgegenstücken geprüft. Je 153 echte Suchprüfungen bestanden, davon 20 neue Fälle für e2MDB, API-Felder, Prefill-Limits, No-match-Retry, Converter, Dateinamen, Datenbank und Webport.
- 292 Original-Enigma2-PNGs, davon 266 mit Bootlogo; zusätzlich ein Web-Editor-PNG. Zusammen 879 responsive WebP-Varianten für diese Dokumentationsbilder. Die finale Pages-Ausgabe umfasst rund 173,16 MB in 1925 Dateien, etwa 17,32 Prozent des konservativen 1-GB-Budgets.
- Gebaute deutsche API-Anleitung und englisches Kapitel zur Trefferkorrektur im Browser visuell geprüft: schwarze API-Balken, eingebettete Originalbilder, lesbare Beschriftungen und übersetzte Navigation vorhanden.
- Zeichensatzfehler in beiden Optionsreferenzen bei der Browserprüfung gefunden und korrigiert. Anschließend Pages- und Apache-Build samt Link- und Suchprüfungen erneut erfolgreich; Umlaute und Sonderzeichen in der gebauten DE/EN-Referenz kontrolliert.
- Abschließender Build wieder unter `/enigma2-doku` für GitHub Pages. Keine zusätzlichen Serverlaufzeiten, Datenbank oder Verbindung zur Testbox beim Lesen des Handbuchs erforderlich.

Nur lokale Commits; kein Push und keine Veröffentlichung.

Die Benutzeranleitung enthält auf Wunsch keine Hinweise auf die beobachteten JavaScript-Bugs. Am e2MDB-Plugin selbst wurde nichts geändert. Von den 24 abschließend geprüften TV-Bildern wurden 22 veröffentlicht; die beiden DB-Timeout-Bilder bleiben privat.

## Umbra und e2MDB-Skinbeispiele – 10. September 2026

- Die vollständige Umbra-Vorlage 0.4.10 umfasst 189 Inhaltsblöcke, 18 Fachkapitel, 15 Tabellen und 16 Abbildungen. Kapitelzuordnung, Quellhash und Aktualisierungen stehen in `data/umbra-manual-coverage.json`. Beide Sprachen enthalten alle 18 Themen, alle 16 Bildreferenzen und alle 39 Stiloptionen. Vier zusätzliche Seiten ergeben 22 Umbra-Kapitel pro Sprache; die allgemeine Feed-Installation ist ein weiteres Kapitel.
- Lokaler Quellstand 0.4.23 mit `styles.py`, `theme.py` und `receiver/plugin.py` gegen die installierten Dateien geprüft: SHA-256 identisch. Die Paketdaten melden 0.4.17 und rund 5,8 MB Installed-Size; deshalb werden Paketbezeichnung und tatsächlicher Funktionsstand getrennt festgehalten. Es gibt keinen Größenvergleich mit allen anderen Skins.
- Neue Funktionsabschnitte anhand der zugehörigen Umbra-Quellen ergänzt: Auflösungsdichte seit 0.4.17, horizontales Menü, zweite Infoleiste/ECM, InfoBarLite und Infoleisten-EPG. FHD wurde für die aktuellen Einstellungsbilder verwendet; kein Live-WQHD-Test auf der Testbox.
- 14 neue native Bilder aus den beiden `umbra-a-…`-Läufen einzeln gesichtet, mit Manifest und SHA-256 geprüft und importiert. Die 16 Vorlagenabbildungen ebenfalls einzeln kontrolliert, vollständig kopiert und ihre Prüfsummen nochmals abgeglichen. Vier davon sind ausdrücklich berechnete Illustrationen.
- Umbra/FHD vorübergehend für die Serie aktiviert; ursprünglichen Skin `MetrixHD/skin.xml`, deutsche GUI und geschützte EMC-/AutoTimer-Werte abschließend wiederhergestellt. Der Adapter verändert nur ungespeicherte Formularwerte und sperrt Speichern, Export und Rücksetzen. Die Hauptfelder können aus dem sichtbaren Ausschnitt scrollen; die frühere Beschreibung als dauerhaft sichtbare Zeilen wurde korrigiert.
- Vergleich der erfassten Vorher-/Nachher-Zustände identisch: e2MDB-API-/Pfadwerte, Medien-/Automatikwerte, Sprache sowie Prüfsummen der erfassten Timer-, EPGRefresh-, Mount-, Teletext-, Playlist- und ServiceApp-Dateien. Dies belegt keine Bytegleichheit sämtlicher Enigma2-Einstellungen. HDD und NAS wurden für diese Serie nicht verändert.
- Umbra ist bereits installiert: Feed-Installation anhand des Enigma2-Quellstands und der vorhandenen Feed-/Skinauswahlansichten erklärt, keine Neuinstallation durchgeführt. Wetterwerte sind ungespeicherte Hamburg-Beispiele. Kein Wetterabruf, Stilexport, vollständiger Wechseltest aller Optionen oder modellübergreifender Auflösungstest behauptet. Umbra- und e2MDB-Pluginquellen außerhalb des Aufnahmehelfers wurden nicht geändert.
- e2MDB-Nachtrag: Alle vier ursprünglichen XML-Beispiele waren in DE/EN vorhanden. Direkte Verweise im Skinner-Einstieg ergänzt sowie ein fünftes Beispiel mit beiden Panel-Aufrufen. Die Umkehrung gilt für die vollständige Bedingung gemäß Skinparser. Die technischen Themen bleiben erhalten; nur die Umbra-Namenszuordnung entfällt.

### Website-Prüfungen für Umbra

- Astro-Check: 22 Dateien, keine Fehler, Warnungen oder Hinweise. 11 Node-Tests und 8 Python-Tests des Handbuchs bestanden; Aufnahmeplugin weiterhin 37 bestandene Tests.
- Pages- und Apache-Build erfolgreich: jeweils 398 HTML-Dateien mit lokalen Links, Assets, Sprungmarken und Sprachgegenstücken sowie 177 echten Suchprüfungen. Neu sind Suchfälle für Umbra, Wetter, RGB, Stilpakete, HD/FHD/WQHD und die e2MDB-Panel-Beispiele.
- Englisches Wetterkapitel mit neuem FHD-Bild, historischem CSS-Bildausschnitt, Originaldateilinks und Tabellen im Browser kontrolliert. Deutsche Optionsreferenz und englisches zusätzliches XML-Beispiel ebenfalls visuell geprüft. Ein fehlendes Leerzeichen in einer englischen Bildunterschrift wurde vor den abschließenden Builds korrigiert.
- 198 Inhalte und 76 bebilderte Kapitel pro Sprache. Insgesamt 306 native Enigma2-PNGs, zusätzlich ein Web-Editor-PNG und 16 Umbra-Vorlagenabbildungen. Finale Pages-Ausgabe rund 186,06 MB in 2151 Dateien: etwa 18,61 Prozent des konservativen 1-GB-Budgets.
- Abschließend wieder für `/enigma2-doku` gebaut. Nur lokale Commits; kein Push und keine Veröffentlichung.
