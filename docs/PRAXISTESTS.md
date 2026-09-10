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
