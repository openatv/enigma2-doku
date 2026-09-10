---
title: "e2MDB – Grundlagen und Speicher"
description: "OpenATV ab 8.0: Grundlagen und Speicher. Einrichtung, Bedeutung und praktische Hinweise zu e2MDB."
---

e2MDB besteht aus dem Enigma2-Plugin, einem Hintergrunddienst und den gespeicherten Metadaten. Das Plugin liefert den Bedienbildschirm und den Bezug zur ausgewählten Sendung oder Datei. Der Hintergrunddienst übernimmt Scans, Internetabfragen, Bilddownloads und Datenbankarbeiten.

## Was benötigt wird

- Ein zur Plugin-Version passendes OpenATV-Image mit installiertem e2MDB und seinen Paketabhängigkeiten, insbesondere Python- und SQLite-Unterstützung.
- Eine zuverlässig eingehängte HDD oder SSD mit Schreibzugriff und ausreichend freiem Platz für Datenbank, Bilder, Protokolle und Wartung.
- Netzwerkzugriff und funktionierende Namensauflösung für Metadatenanbieter. Die Uhrzeit der Box muss stimmen.
- Ein Skin mit e2MDB-Unterstützung, wenn Cover und Zusatzinformationen außerhalb der Plugin-Seiten erscheinen sollen.

## Medienpfad und Cache sind verschieden

| Ort | Bedeutung |
| --- | --- |
| Medienpfade | Hier liegen Aufnahmen, Filme und Serien. Es dürfen mehrere lokale oder Netzwerkverzeichnisse sein. |
| Cache-Pfad | Basisverzeichnis für die e2MDB-Daten. Bei /media/hdd/ liegt die Datenbank unter /media/hdd/e2MDB/results.db. |
| Enigma2-Konfiguration | Einstellungen und Scanpfade liegen getrennt von den Medien unter /etc/enigma2/. |

Der Cache-Pfad ist nicht die Liste der zu scannenden Ordner. Ein neuer Medienordner wird über „Pfade“ hinzugefügt, nicht durch Umstellen des Cache-Pfads.

## Speicher zuverlässig betreiben

Für Datenbank und Bildcache ist ein lokaler Datenträger die robuste Wahl. Mediendateien können auf einem NAS liegen. Eine nicht erreichbare Freigabe darf nicht als leere Mediensammlung missverstanden werden. Vor einem Scan oder einer Bereinigung deshalb Mount und Netzwerk prüfen.

Den Cache nicht in /tmp oder unbemerkt im internen Flash anlegen. Ein vorhandenes Verzeichnis /media/hdd beweist allein noch keinen eingehängten Datenträger. Datenbankgröße und Bildbestand wachsen mit der Sammlung; eine feste Mindestgröße lässt sich nicht für jede Nutzung angeben. Für SQLite-Wartung zusätzlichen freien Platz vorsehen.

Einen bestehenden Cache nicht während eines Scans verschieben. Vor einem Datenträgerwechsel Aufgaben beenden, Daten konsistent sichern und danach den neuen Pfad prüfen. Das Ändern der Einstellung ist keine zugesicherte automatische Datenmigration.

[Zur e2MDB-Übersicht](../) · [Alle Einstellungen](../optionen/)
