# Prüfstand der ersten Bildserie

Stand: 9./10. September 2026. Dieses Protokoll beschreibt die konkrete Prüfung und behauptet keine vollständige Abdeckung aller Geräte oder Bedienabläufe.

## Grundlage

- Handbuchquellen: openATV Enigma2, Commit `fdc9347241245fd18fd0b8bc93727237189c916c`.
- Laufende Testumgebung: openATV 8.0.2-devel, MetrixHD, Einstellungsansicht „Experte“.
- Anschluss: kabelgebundenes LAN (`eth0`), Astra 19,2° Ost über einen herkömmlichen Sat-Anschluss, vorhandene CIFS-/autofs-Freigabe und eingehängte HDD.
- Keine WLAN-Hardware; FBC ist nicht Teil dieser Testserie.

## Tatsächlich geprüft

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

## Website-Prüfungen

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
