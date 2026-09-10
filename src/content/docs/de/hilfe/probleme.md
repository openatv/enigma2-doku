---
title: Häufige Fragen
description: Eine Einstellung fehlt, Netzwerk oder EPG funktioniert nicht? Die passenden Prüfungen und Anleitungen finden.
---

## Wo stellt man das ein?

Nutze die Suche oben oder das [Einstellungsverzeichnis](../../einstellungen/). Versuche auch einen anderen Begriff: **NAS**, **Freigabe**, **SMB**, **CIFS** und **mounten** führen beispielsweise zur Netzwerkspeicherung. Englische Menübezeichnungen sind in den deutschen Referenzeinträgen enthalten.

## Warum fehlt ein Menüpunkt?

Prüfe den [Einstellungsmodus](../../erste-schritte/bedienung/). Einige Optionen erscheinen erst in der Expertenansicht, nach dem Einschalten einer übergeordneten Funktion oder im jeweiligen Plugin. Ein Skin kann außerdem die Anordnung verändern. Folge den Beschriftungen des Menüs.

## Warum gibt es zwei Arten von „Settings“?

Der Begriff kann Systemeinstellungen oder vorbereitete Senderlisten meinen. Lies vor einer Installation die Paketbeschreibung. [Settings und Bouquets unterscheiden](../../settings/senderlisten/).

## Das NAS funktioniert, aber Plugins lassen sich nicht herunterladen

Ein lokales NAS kann auch ohne funktionierenden Internetzugang erreichbar sein. Prüfe Gateway und DNS. [LAN und IP-Einstellungen](../../netzwerk/lan/).

## Eine Freigabe ist gespeichert, aber nicht gemountet

Bei **autofs** wird sie beim Öffnen ihres lokalen Verzeichnisses eingebunden. Prüfe zuerst diesen Zugriff. [Netzwerkfreigaben einbinden](../../netzwerk/freigaben/).

## Der Programmführer ist leer

Prüfe Empfang, die gelieferten Programmdaten und gegebenenfalls die zusätzliche EPG-Quelle. Ein anderer EPG-Anzeigemodus erzeugt keine fehlenden Daten. [EPG einrichten](../../epg/grundlagen/).

## Das Bild sieht anders aus als in einer Anleitung

Ein Skin verändert die Darstellung. Dieses Handbuch erklärt die gemeinsame Oberfläche anhand der Menütexte und Aktionen. [Skins verstehen](../../skins/).

## Wo finde ich Logs und wohin melde ich einen Fehler?

Normale Enigma2-Logs liegen standardmäßig unter **`/home/root/logs/`**. Das frühe Restore-Protokoll liegt separat unter **`/home/root/FastRestore.log`**. [Logs aktivieren und finden](../logs-diagnose/) erklärt auch abweichende Speicherorte und die Übertragung auf den PC. [Fehler melden](../fehler-melden/) nennt die passenden Forum-/GitHub-Adressen und eine Berichtsvorlage.

## Wie komme ich an das richtige neue Image?

Nutze [Downloads und Modelle](../downloads-modelle/) für den offiziellen Einstieg und die modellspezifische Flash-Anleitung. [Softwareupdate oder Flash Online?](../../wartung/software-update/), [USB-Neuinstallation](../../wartung/usb-installation/) und [AutoRestore](../../wartung/autorestore/) führen durch Auswahl, Vorbereitung und Rückübernahme.

## Wie setze ich ein Passwort oder starte Enigma2 per Konsole neu?

[SSH, Dateien und Root-Passwort](../../netzwerk/fernzugriff/) erklärt das Netzwerkmenü, `passwd`, `init 4` / `init 3` und SFTP/FTP. Die Anleitung unterscheidet einen GUI-Neustart vom Neustart der ganzen Box.

## Welche Teile sind bereits geprüft?

Die Grundanleitungen wurden anhand des OpenATV-8.0-Quellstands erstellt. Das Verzeichnis übernimmt vorhandene Hilfetexte und zeigt noch nicht zugeordnete Menüwege offen an. Eine vollständige Prüfung aller Abläufe auf einer laufenden Installation ist damit nicht behauptet. Angaben zum Quellstand stehen an den jeweiligen Artikeln.
