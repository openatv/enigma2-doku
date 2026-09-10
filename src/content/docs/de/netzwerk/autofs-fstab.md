---
title: autofs, fstab und ein nicht erreichbares NAS
description: Mounten bei Bedarf oder beim Start, Startverzögerungen, stat-Zugriffe, NAS-Ausfälle und Enigma2-Spinner richtig einordnen.
---

**NFS oder SMB** legt fest, wie Daten übertragen werden. **autofs oder fstab** legt im OpenATV-Mountdialog fest, wann die Verbindung eingebunden wird. Diese Entscheidungen sind unabhängig: Beide Protokolle lassen sich mit beiden Modi verwenden.

## Welcher Modus passt?

| | autofs – beim ersten Zugriff | fstab – beim Start |
| --- | --- | --- |
| Einbinden | Ein Zugriff auf den Freigabepfad löst den Mount aus | Die Startskripte versuchen die konfigurierte Einbindung |
| NAS beim Start ausgeschaltet | Ohne Zugriff muss der entfernte Export zunächst nicht gemountet werden | Verbindungsversuche können den Start verzögern |
| NAS kommt später online | Ein späterer Zugriff kann erneut einen Mount auslösen | Gegebenenfalls erneutes Einbinden erforderlich |
| Nicht mehr benutzt | Kann nach Leerlauf aushängen, wenn keine Nutzung das verhindert | Bleibt normalerweise bis zum Aushängen eingebunden |
| NAS fällt während Zugriff aus | Die laufende NFS-/SMB-Verbindung kann warten oder Fehler liefern | Ebenfalls abhängig vom Protokoll und seinen Fehler-/Wiederholungsregeln |

Für ein zeitweise ausgeschaltetes NAS ist **autofs ein guter Ausgangspunkt**. Es ist aber kein Versprechen eines immer schnellen Starts: Öffnet ein Plugin, eine Filmliste oder eine Speicherprüfung den NAS-Pfad schon beim Start, wird der Zugriff dann trotzdem ausgelöst.

## Lokale Pfade und HDD-Ersatz

| Auswahl im geprüften OpenATV-Stand | Zugriffspfad |
| --- | --- |
| autofs | `/media/autofs/NAME` |
| fstab, ohne HDD-Ersatz | `/media/net/NAME` |
| fstab, mit HDD-Ersatz | `/media/hdd` |

`NAME` ist die **Lokale Freigabe**. Bei autofs bleibt der Pfad unter `/media/autofs`, auch wenn HDD-Ersatz ausgewählt wurde. Verwende für NAS-Aufnahmen vorzugsweise den konkreten [Aufnahmepfad](../../speicher/nas-aufnahmen/). Ein schon von einer lokalen HDD belegtes `/media/hdd` ist kein freies Ziel.

## Welche Dateien gehören dazu?

Der geprüfte Manager liest und schreibt Netzwerk-Mounts in **`/etc/auto.network`** und **`/etc/fstab`**. Ältere Anleitungen nennen oft `/etc/enigma2/automounts.xml`; im hier geprüften Quellstand ist dessen Import standardmäßig abgeschaltet. Übertrage alte Anleitungen deshalb nicht ungeprüft auf den neuen Manager.

Die Datei **`/etc/auto.master`** ordnet die Map ihrem Basispfad zu. Auf der Testbox steht:

```text
/media/autofs /etc/auto.network --ghost
```

`--ghost` kann Verzeichnisnamen schon sichtbar machen, bevor der jeweilige Server gemountet ist. Ein angezeigter Ordner beweist daher keine Verbindung.

Diese zwei Beispiele zeigen **alternative** NFS-Definitionen für dieselbe Freigabe. Adresse und Exportpfad ersetzen; nicht beide zugleich anlegen:

```text
# /etc/auto.network
nas-recordings -fstype=nfs,rw,proto=tcp 192.0.2.10:/srv/recordings
```

```text
# /etc/fstab
192.0.2.10:/srv/recordings /media/net/nas-recordings nfs _netdev,rw,proto=tcp 0 0
```

`_netdev` kennzeichnet ein Netzwerkdateisystem; es begrenzt keine Wartezeit. Die letzten beiden `0` gehören zum fstab-Format, nicht zur autofs-Map. Verwende den Menüeditor für normale Änderungen. Er kann erkannte manuelle Netzwerkzeilen beim Speichern neu erzeugen; keine widersprüchlichen Definitionen über mehrere Werkzeuge pflegen. SMB-Mountdateien können zusätzlich Passwörter enthalten.

Das geprüfte Image verwendet klassische Init-Skripte. Optionen wie `x-systemd.automount` aus einer systemd-Anleitung sind kein Ersatz für diesen OpenATV-autofs-Aufbau. Auch `nofail` ist keine allgemeine Abkürzung für „warte niemals auf das NAS“.

## Warum erscheint ein Spinner?

Schon eine Ordnerprüfung kann Netzwerkzugriff auslösen. Dazu gehören das Öffnen der Filmliste, Vorschaubilder, die Prüfung von freiem Speicher und **`stat()`** beziehungsweise Existenzprüfungen eines Pfads. Der geprüfte Freigabemanager prüft autofs-Ziele mit einer solchen Existenzabfrage.

Wartet eine dieser Operationen im Ablauf der Oberfläche, kann Enigma2 den **Spinner** anzeigen. Ein Spinner bedeutet zunächst „beschäftigt“ und beweist weder einen Crash noch einen defekten Skin. Auch die Ermittlung einer Dateigröße kann bei fehlendem NAS verzögert sein.

Ein autofs-Leerlauf-Timeout bestimmt, wann eine **unbenutzte** Einbindung auslaufen darf. Es ist kein Zeitlimit für einen gerade blockierten Dateizugriff. NFS-`timeo`, Wiederholungen und Soft/Hard betreffen andere Ebenen; [NFS-Optionen](../nfs/) erklären den Unterschied. Eine laufende Aufnahme hält den Speicher aktiv und verhindert normalerweise das Aushängen wegen Leerlauf.

## Vorgehen bei ausgefallenem NAS

1. Notiere, ob Aufnahme, Wiedergabe oder Timeshift lief und wann der Fehler begann. Vermeide weitere Zugriffe auf denselben nicht erreichbaren Pfad.
2. Prüfe NAS, Switch/Router, Kabel und Adresse. Stelle nach Möglichkeit denselben Server und Export wieder bereit; das kann wartende Zugriffe freigeben.
3. Sobald die Oberfläche reagiert, beende betroffene Anwendungen kontrolliert. Starte keine neuen Aufnahmen auf das ausgefallene Ziel.
4. Bleibt das NAS länger aus, stelle Aufnahme-, Timeshift-, EPG- und Pluginpfade auf ein erreichbares Ziel um und deaktiviere die unbenötigte Mountdefinition.
5. Sichere bei wiederkehrenden Problemen [Debug- und Kernelhinweise](../../hilfe/logs-diagnose/) für einen [Fehlerbericht](../../hilfe/fehler-melden/). Ein GUI-Neustart beseitigt keinen noch im Kernel wartenden Netzwerkzugriff zuverlässig.

Eine lesende Übersicht der registrierten Netzwerk-Mounts über SSH:

```sh
grep -E ' (nfs|nfs4|cifs|autofs) ' /proc/mounts
```

Diese Liste beweist nicht, dass der Server jetzt antwortet. Ein ungezieltes `df -h`, `ls` oder `stat` kann dagegen gerade die ausgefallene Freigabe ansprechen und selbst warten. Erzwinge kein Aushängen während laufender Schreibzugriffe. Ein Ausfall kann eine Aufnahme bereits beschädigt haben, selbst wenn die Oberfläche später weiterläuft.

**Prüfstand:** Dateizuordnung und autofs-Konfiguration geprüft. Der bestehende NAS-Mount wurde für diese Anleitung nicht absichtlich unterbrochen; Verzögerungen werden nicht als gemessene feste Sekundenwerte dargestellt.

Quellen: [OpenATV-Mountverwaltung und Statusprüfung](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/lib/python/Components/NetworkManager.py), [autofs-Master-Map](https://man7.org/linux/man-pages/man5/auto.master.5.html).
