---
title: Dateisysteme und Netzwerkprotokolle unterscheiden
description: ext4, NTFS, exFAT und FAT32 für HDD und USB vergleichen; NFS und SMB als Zugriffsprotokolle sowie NAS-Dateisysteme einordnen.
---

Ein **Dateisystem** organisiert Dateien auf einer Partition. Ein **Netzwerkprotokoll** transportiert Dateizugriffe zwischen Geräten. **ext4 und NTFS** sind Dateisysteme; **NFS und SMB/CIFS** sind Netzwerkprotokolle. Ein NAS kann intern beispielsweise Btrfs verwenden und denselben Ordner per SMB und NFS anbieten.

## HDD, Datenstick oder Installationsstick?

| Verwendung | Sinnvoller Ausgangspunkt |
| --- | --- |
| HDD oder SSD dauerhaft an der Box für Aufnahmen | **ext4**, sofern das Image es für das Laufwerk unterstützt. Es passt zu Linux-Dateirechten, großen Dateien und Hardlinks. |
| USB-Datenträger für Dateiaustausch mit Windows | NTFS oder exFAT nach geprüftem Lese-/Schreibsupport der beteiligten Geräte; siehe Unterschiede unten. |
| USB-Stick zum Installieren eines Images | Das vom Hersteller für diesen Flash-Vorgang verlangte Format; häufig FAT32. Das ist ein anderer Zweck als ein Aufnahmelaufwerk. |
| Aufnahmeordner auf einem NAS | Vorhandenes NAS-Dateisystem beibehalten und eine passende SMB- oder NFS-Freigabe einrichten. |

Die verfügbaren Formate und Treiber hängen vom Image und Kernel ab. Ein lesbar erkanntes Laufwerk ist nicht automatisch beschreibbar oder für Timeshift geeignet. Welche Formatierung die Box anbietet, zeigt ihre [Geräteverwaltung](../formatieren-pruefen/). **Formatieren löscht Daten**; ein Wechsel von SMB zu NFS erfordert keine Formatierung des NAS.

## Die häufigsten Formate

| Dateisystem | Eigenschaften | Bedeutung für die Box |
| --- | --- | --- |
| **ext4** | Linux-Dateirechte, Hardlinks, große Dateien und Journal für Dateisystem-Metadaten. | Gute Grundlage für ein dauerhaftes lokales Aufnahmelaufwerk. Windows bindet ext4 nicht wie einen normalen NTFS-Datenträger im Explorer ein; über die Netzwerkfreigabe der Box ist das lokale Format unerheblich. |
| **ext3 / ext2** | Ältere Linux-Dateisysteme. ext3 hat ein Journal, ext2 nicht. | Vorhandene lesbare Laufwerke müssen nicht allein wegen des Alters neu formatiert werden. Vor Änderungen Daten sichern und Unterstützung prüfen. |
| **NTFS** | Windows-Dateisystem mit großen Dateien, Journal, Rechten und Hardlinks. | Geeignet für große Austauschdateien, wenn der Linux-Treiber den benötigten Schreibzugriff unterstützt. Windows-Berechtigungen und ihre Abbildung unter Linux sind nicht einfach identisch. |
| **exFAT** | Große Dateien und verbreiteter Austausch zwischen Systemen; kein Journal und keine Hardlinks. | Für unterstützte Datensticks praktisch. Die fehlenden Hardlinks sind für den geprüften OpenATV-Timeshift-Pfad ein Hindernis. |
| **FAT32** | Breite Geräteunterstützung; eine einzelne Datei darf höchstens **4 GiB minus 1 Byte** groß sein. Kein Journal und keine Hardlinks. | Lange Aufnahmen können die Dateigrenze erreichen. Für einen Flash-Stick kann FAT32 trotzdem genau richtig sein. |

Microsoft beschreibt die Unterschiede bei [Dateigrößen, Journaling und Hardlinks](https://learn.microsoft.com/en-us/windows/win32/fileio/filesystem-functionality-comparison). Ein Journal hilft nach einer Unterbrechung, die Dateisystemstruktur wiederherzustellen. Es garantiert weder den vollständigen Inhalt der gerade geschriebenen Aufnahme noch eine Sicherung gegen Defekt oder Löschen. Beim üblichen ext4-Modus werden vor allem Metadaten protokolliert: [ext4-Journal](https://docs.kernel.org/filesystems/ext4/journal.html).

### Warum 4 GiB für Aufnahmen wenig sein können

Die Grenze von FAT32 gilt **pro Datei**, nicht für die gesamte Freigabe oder den freien Platz. Bei angenommenen 20 Mbit/s sind 4 GiB schon nach ungefähr 29 Minuten erreicht. Die tatsächliche Senderbitrate schwankt; verlasse dich nicht darauf, dass jede Aufnahmefunktion automatisch passend teilt. Nutze für längere Aufnahmen ein geeignetes Dateisystem ohne diese Grenze.

## XFS, Btrfs und NAS-Funktionen

**XFS** ist ein Linux-Dateisystem mit Journal und Unterstützung für große Dateien und Dateisysteme. **Btrfs** bietet unter anderem Copy-on-Write, Prüfsummen und Snapshots. Ob ein NAS diese Funktionen verfügbar macht und wie es sie verwaltet, entscheidet dessen Software. Das sind keine Vorgaben, ein funktionierendes NAS für OpenATV umzubauen. Quellen: [XFS](https://docs.kernel.org/admin-guide/xfs.html), [Btrfs](https://btrfs.readthedocs.io/en/latest/Introduction.html).

Ein Snapshot hält einen früheren Zustand fest; er kann sich weiterhin auf demselben Speicher befinden. RAID kann je nach Aufbau einen Laufwerksausfall abfangen, schützt aber nicht allgemein vor Löschen, Schadsoftware oder Verlust des ganzen NAS. Wichtige Daten benötigen eine unabhängige Sicherung.

## Was sieht OpenATV über das Netzwerk?

Die Box sieht einen **NFS- oder CIFS-Mount**, nicht unmittelbar das interne Dateisystem des NAS. Ein Windows-PC braucht deshalb keinen ext4- oder Btrfs-Treiber, um eine SMB-Freigabe dieses NAS zu öffnen. Umgekehrt erweitert ein moderner SMB-Dialekt nicht die Dateigrößengrenze eines darunterliegenden FAT32-Laufwerks.

Die nutzbaren Funktionen ergeben sich aus der gesamten Verbindung: Server-Dateisystem, Freigabekonfiguration, Protokoll und Client. Auch wenn ein NAS-Dateisystem Hardlinks unterstützt, müssen sie über die Freigabe tatsächlich funktionieren. Für [Timeshift und NAS-Aufnahmen](../nas-aufnahmen/) wird genau dieser Zugriff benötigt.

## Rechte, Mountpunkte und Dateisystemprüfung

- **`rw` bedeutet nicht „jeder darf schreiben“:** SMB-Benutzerrechte, NFS-UID/GID-Zuordnung oder lokale Dateirechte gelten zusätzlich. Siehe [SMB](../../netzwerk/smb-cifs/) und [NFS](../../netzwerk/nfs/).
- **Ein Mountpunkt ist ein Ordnername:** `/media/hdd` sagt nicht, ob dahinter ext4, NTFS oder eine Netzwerkfreigabe steckt.
- **UUID und Label identifizieren lokale Dateisysteme:** Nach einer Neuformatierung kontrollierst du die dauerhafte [Mountpunkt-Zuordnung](../laufwerke/) erneut.
- **Reparaturen gehören zum Speicherbesitzer:** Ein lokales Dateisystem prüfst du mit der passenden Geräteverwaltung und beendetem Zugriff. Das Dateisystem eines NAS prüfst du über dessen Verwaltung, nicht mit einem lokalen `fsck` auf `/media/autofs/...`.

**Prüfstand:** Die Grundlagen wurden anhand der verlinkten Dokumentation und der OpenATV-Pfadprüfung abgeglichen. ext4 auf dem Demo-USB-Stick wurde zuvor praktisch geprüft. Es wurde für dieses Kapitel kein Laufwerk umformatiert; alle Formate auf allen unterstützten Receivern sind damit nicht getestet.
