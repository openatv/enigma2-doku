---
title: Aufnahmen auf dem NAS speichern
description: Ein NAS als Aufnahmelaufwerk nutzen, Timer- und Sofortaufnahmeordner wählen, HDD-Ersatz verstehen und Timeshift getrennt einrichten.
---

Ein NAS kann Aufnahmen zentral für mehrere Geräte speichern. Dafür müssen **Netzwerkfreigabe, Schreibrechte und Aufnahmeziel** zusammenpassen. Das Einbinden einer Freigabe allein ändert keine bestehenden Timer.

## Freigabe und Aufnahmeordner vorbereiten

1. Richte zuerst [SMB/CIFS](../../netzwerk/smb-cifs/) oder [NFS](../../netzwerk/nfs/) ein. Für eine zusätzliche NAS-Freigabe lässt du **Als Festplattenersatz verwenden** ausgeschaltet.
2. Öffne den lokalen Mountpfad. Im Beispiel heißt die Freigabe `nas-recordings` und verwendet autofs: `/media/autofs/nas-recordings`.
3. Lege auf der Freigabe einen Ordner `movie` an, falls er noch fehlt. Das Aufnahmeziel ist dann `/media/autofs/nas-recordings/movie/`. Wenn bereits der freigegebene Ordner selbst dein Filmordner ist, brauchst du keinen weiteren Unterordner.
4. Prüfe Schreiben, Lesen und Löschen mit einer entbehrlichen kleinen Testdatei. Der Benutzer benötigt auch Rechte für die Begleitdateien einer Aufnahme. Kontrolliere freien Platz **und das Kontingent des Benutzers** auf dem NAS.

Eine Freigabe mit **Nur Lesen** eignet sich zum Abspielen, nicht zum Aufnehmen. Bei SMB gelten Freigabe- und Dateirechte auf dem Server; bei NFS müssen die Benutzerzuordnung und Exportrechte passen. [Dateisysteme und Netzwerkprotokolle](../dateisysteme/) erklären die Unterschiede.

## Die richtigen Einstellungen finden

Öffne **Menü → Einstellungen → Aufnahmen / Timeshift**. Fehlen die Pfadoptionen, aktiviere die [Expertenansicht](../../erste-schritte/bedienung/). Im geprüften Stand liegen die Einstellungen an diesen Stellen:

| Untermenü und Einstellung | Wirkung |
| --- | --- |
| **Wiedergabe → Standardfilmverzeichnis** | Grundverzeichnis der Filmauswahl; wird auch von der Aufnahmeauswahl „Standardfilmverzeichnis“ verwendet. |
| **Aufnahmen → Timeraufnahmeverzeichnis** | Vorgabe für neue Timer. Ein einzelner Timer kann ein anderes Ziel gespeichert haben. |
| **Aufnahmen → Sofortaufnahmeverzeichnis** | Ziel für eine direkt gestartete Aufnahme. |
| **Aufnahmen → Timeshiftspeicherort** | Ziel einer als Aufnahme gespeicherten Timeshift-Datei. |
| **Timeshift → Timeshiftverzeichnis** | Arbeitsverzeichnis für den laufenden Timeshift-Puffer; getrennt vom Speicherort einer fertigen Aufnahme. |

Markiere das jeweilige Pfadfeld und drücke **OK**, um den Ordner auszuwählen. Bereits hinterlegte Orte lassen sich mit Links/Rechts wechseln. Wähle den **vollständigen lokalen Pfad**, beispielsweise `/media/autofs/nas-recordings/movie/`, und speichere die Einstellung. Die Einstellungsreferenzen [Aufnahmen](../../einstellungen/referenz/recording/) und [Timeshift](../../einstellungen/referenz/timeshift/) führen die weiteren Optionen auf.

Bei Aufnahmezielen gibt es außerdem dynamische Auswahlwerte:

| Auswahl | Aufgelöster Pfad |
| --- | --- |
| Standardfilmverzeichnis (`<default>`) | Das oben eingestellte Standardfilmverzeichnis. |
| Aktuelles Filmauswahlverzeichnis (`<current>`) | Zuletzt verwendeter Ort der Filmliste. Ein späterer Ordnerwechsel kann damit auch das Aufnahmeziel verändern. |
| Letztes Timerverzeichnis (`<timer>`) | Zuletzt verwendeter Timerordner. |

Für ein vorhersehbares NAS-Ziel wählst du zunächst einen festen Pfad. Kontrolliere **jeden bereits vorhandenen Timer** und gegebenenfalls die Vorgaben eines Timer-Plugins. Eine Änderung der Standardwerte schreibt nicht alle gespeicherten Timer um. Siehe [Aufnahmedialog und Pfadauflösung](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/lib/python/Screens/Recording.py).

Behalte für getrennte Aufnahmeziele die **Expertenansicht** bei: Im geprüften Stand greift die gemeinsame Pfadauflösung unterhalb dieser Stufe auf das Standardfilmverzeichnis zurück. Das betrifft die Verwendung der Vorgaben, nicht nur ihre Sichtbarkeit. Quelle: [Bevorzugte Aufnahmeorte](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/lib/python/Components/UsageConfig.py).

## Brauche ich den HDD-Ersatz?

Für Aufnahmen auf dem NAS reicht ein expliziter Aufnahmeordner. Die Option **Als Festplattenersatz verwenden** ist vor allem relevant, wenn Anwendungen `/media/hdd` erwarten:

| Mountmodus | Pfad im geprüften OpenATV-Stand |
| --- | --- |
| autofs | `/media/autofs/nas-recordings`, auch mit gesetztem HDD-Ersatz. |
| fstab ohne HDD-Ersatz | `/media/net/nas-recordings`. |
| fstab mit HDD-Ersatz | `/media/hdd`. Ein Film-Unterordner wäre `/media/hdd/movie/`. |

Eine vorhandene HDD unter `/media/hdd` bleibt dort: Lege keine zweite Freigabe auf denselben Pfad. Ein darüber gelegter Mount kann vorhandene Dateien verdecken und Anwendungen auf ein anderes Laufwerk umleiten. Prüfe auch Sicherungs-, EPG- und Plugin-Pfade, wenn du ein Hauptlaufwerk später bewusst ersetzt. [Mountmodi und HDD-Pfadzuordnung](../../netzwerk/autofs-fstab/) erklären das genauer.

Ein vorhandener Ordner beweist nicht, dass das NAS eingehängt ist. Nach einem fehlgeschlagenen Mount kann ein gleichnamiger lokaler Ordner zurückbleiben. Schreibe dort keine Aufnahme hinein, um die Warnung zu umgehen: Sonst kann interner Flash gefüllt werden. Die OpenATV-Pfadprüfung erkennt verschiedene ungeeignete Ziele, ersetzt aber keinen Test der tatsächlichen Freigabe.

## Timeshift separat planen

Für den laufenden Timeshift-Puffer ist eine vorhandene lokale HDD oder SSD meist die robustere Wahl. Timeshift schreibt laufend und liest beim zeitversetzten Fernsehen gleichzeitig; Netzwerkunterbrechungen betreffen dann unmittelbar die Bedienung. Das NAS kann trotzdem das Ziel gespeicherter Aufnahmen bleiben.

OpenATV prüft beim Timeshift-Pfad auch, ob **Hardlinks** möglich sind. Ein Hardlink ist ein weiterer Dateiname für dieselben Daten innerhalb eines Dateisystems. Ein NAS kann große Dateien speichern und trotzdem über die gewählte Freigabe keine passenden Hardlinks anbieten. Prüfe diese Fähigkeit über den tatsächlich verwendeten Mount; eine Liste der NAS-Dateisysteme genügt dafür nicht. Ignoriere eine entsprechende Pfadwarnung nicht. Quelle: [Timeshift-Pfadprüfung](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/lib/python/Screens/Timeshift.py).

## Bandbreite, Standby und Offline-Verhalten

Die **Summe der gleichzeitigen Datenströme** muss mit Reserve über Netzwerk und NAS passen. Rechenbeispiel: Drei Aufnahmen mit jeweils 20 Mbit/s benötigen zusammen 60 Mbit/s, also 7,5 MB/s reine Nutzdaten. Protokollverkehr, Spitzen, zusätzliche Wiedergabe und andere NAS-Nutzer kommen hinzu. Das Beispiel ist keine feste Senderbitrate oder Gerätegarantie.

Nutze eine stabile LAN-Verbindung und teste die geplante gleichzeitige Last. Das NAS muss vor dem Timer bereit sein. Plattenanlauf, NAS-Ruhezustand oder ein schlafender Windows-PC können den ersten Zugriff verzögern. **autofs weckt keinen ausgeschalteten Server automatisch** und puffert eine ausgefallene Aufnahme nicht bis zur Rückkehr des NAS. Details zu Startverzögerungen, `stat()`-Zugriffen und Spinnern stehen unter [autofs und fstab](../../netzwerk/autofs-fstab/).

## So prüfst du deine Einrichtung

1. Starte eine kurze Sofortaufnahme und kontrolliere das Zielverzeichnis auf dem NAS.
2. Beende sie regulär, spiele sie ab und teste Vor-/Zurückspringen.
3. Lege einen kurzen Timer mit demselben Ziel an und prüfe dessen Ergebnis nach dem vorgesehenen Standby von Box und NAS.
4. Teste erst danach die im Alltag gewünschte Zahl gleichzeitiger Aufnahmen und Wiedergaben.
5. Prüfe nach einem normalen Neustart erneut den Mount und den Zielpfad. Ziehe für diesen Test nicht während einer wichtigen Aufnahme das Netzwerkkabel ab.

Eine NAS-Aufnahme ist noch keine zusätzliche Sicherung. Auch RAID und Snapshots ersetzen keine unabhängige Kopie wichtiger Filme. Zum Sichern der Box-Einstellungen siehe [Backup und Wiederherstellung](../../wartung/backup-restore/).

**Prüfstand:** Pfade und Einstellungslogik wurden im Quellcode geprüft. Die vorhandene CIFS-/autofs-Testfreigabe wurde zuvor mit einer kleinen Datei schreibend und lesend geprüft. Aufnahmeziele wurden für dieses Kapitel nicht umgestellt; Timer-, Last- und Ausfalltests auf dem NAS sind noch offen.
