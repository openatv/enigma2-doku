---
title: "Startassistent erneut starten und Settings wiederherstellen"
---

Für einen kontrollierten erneuten Erststart kannst du **Enigma2 stoppen, `/etc/enigma2/settings` umbenennen und Enigma2 neu starten**. Ohne die bisherigen Werte verwendet Enigma2 seine Vorgaben; die Erststart-Schalter sind dann wieder aktiv. Das wurde für die [deutsche und englische Bildserie](../startassistent/) praktisch durchgeführt.

Diese Methode setzt sehr viel mehr als einen Begrüßungsbildschirm zurück: Die Settings enthalten unter anderem Tuner-, Bild-, Bedienungs-, Skin- und viele Pluginoptionen. Für das Ändern einer einzelnen Einstellung ist der normale Menüweg einfacher.

## 1. Vorbereiten und sichern

1. Aufnahmen, Timeshift und laufende Aufgaben beenden. Vorhandene Timer und automatische Plugin-Aufgaben beachten: Ihre separaten Dateien werden durch das Umbenennen der Settings nicht entfernt.
2. Eine vollständige [Einstellungssicherung](../../wartung/backup-restore/) erstellen und auf einen anderen Rechner kopieren. Sie kann Zugangsdaten enthalten und gehört nicht in ein öffentliches Repository.
3. Netzwerkadresse, Mountpunkte und die eigenen Empfangsdaten bereithalten. Die Fernbedienung muss für den neuen Assistenten verfügbar sein.
4. Über [SSH](../../netzwerk/fernzugriff/) anmelden. Eine lokale Ethernet-Verbindung erleichtert den Test.

**Installierte Plugins bleiben installiert.** Ihre Vorgaben können nach dem Reset andere automatische Aktionen aktivieren. In unserem Dokumentationstest wurden solche Hintergrundaufgaben und bestehende Timer zusätzlich vorübergehend ausgesetzt. Das bloße Umbenennen der Settings erledigt das nicht automatisch.

## 2. Enigma2 stoppen

```sh
init 4
```

Kurz warten und kontrollieren:

```sh
pidof enigma2
```

Erst wenn **keine Prozessnummer** mehr ausgegeben wird, die Datei verändern. Solange Enigma2 läuft, hält es Werte im Arbeitsspeicher und kann die Settings beim Beenden erneut schreiben. Der TV zeigt während des Stopps unter Umständen weiter das letzte Bild; das beweist nicht, dass Enigma2 noch läuft.

`init 4` beendet in diesem OpenATV-Ablauf die Oberfläche; Linux und die bestehende SSH-Verbindung bleiben normalerweise erreichbar. Es ist kein Ausschalten der Box.

## 3. Datei umbenennen und neu starten

Die folgenden Zeilen schützen eine eventuell schon vorhandene Sicherungsdatei vor versehentlichem Überschreiben:

```sh
if [ -e /etc/enigma2/settings.before-wizard ]; then
    echo 'settings.before-wizard exists: check the previous backup first.'
else
    mv /etc/enigma2/settings /etc/enigma2/settings.before-wizard && init 3
fi
```

Bei einer Fehlermeldung nicht mit einer leeren oder geratenen Datei fortfahren. Den Pfad und die Sicherung prüfen. Die Kopie **außerhalb der Box** bleibt wichtig: `settings.before-wizard` allein ist kein vollständiges Backup und liegt weiterhin im Konfigurationsverzeichnis.

Nach `init 3` den [vollständigen Startassistenten](../startassistent/) am Fernseher durchlaufen. Sprache, Videoausgabe und Tuner entsprechen zunächst den Vorgaben des Images. Vorhandene Bouquets, Mountdateien und Pluginpakete sind durch diesen Vorgang nicht verschwunden; Änderungen während des Assistenten können diese Daten aber beeinflussen.

## 4. Bisherige Settings wieder verwenden

Enigma2 erneut mit `init 4` stoppen und mit `pidof enigma2` prüfen. Danach kannst du die neu erstellten Settings als Testergebnis aufheben und die vorherigen zurückkopieren:

```sh
if [ ! -f /etc/enigma2/settings.before-wizard ]; then
    echo 'Original settings are missing: stop and check your backup.'
elif [ -e /etc/enigma2/settings.wizard-result ]; then
    echo 'settings.wizard-result exists: preserve it before continuing.'
else
    cp -p /etc/enigma2/settings /etc/enigma2/settings.wizard-result &&
    cp -p /etc/enigma2/settings.before-wizard /etc/enigma2/settings &&
    init 3
fi
```

**Nur die Settings zurückzuspielen macht einen Suchlauf, eine Mountänderung oder eine Plugininstallation nicht rückgängig.** Wurden solche Aktionen ausgeführt, die betroffenen Daten zusätzlich aus der vollständigen Sicherung wiederherstellen. Für unsere Aufnahme wurden deshalb auch Sender-/Timerdateien und externe Netzwerk-/Mountkonfigurationen gesichert und anschließend geprüft.

Das Root-Passwort liegt nicht in dieser Settings-Datei. Diese Methode ist kein Passwort-Reset. Ebenso bleibt das installierte Image einschließlich des aktuellen MultiBoot-Slots erhalten.

## Wenn der Assistent nicht erscheint

| Beobachtung | Mögliche Ursache / nächster Schritt |
| --- | --- |
| Die alte Konfiguration ist sofort wieder da | [AutoRestore](../../wartung/autorestore/) prüfen. Ein vorbereitetes `/media/…/images/config/settings` kann den Restore-Ablauf auslösen. Eine benötigte Sicherung nicht unbesehen löschen. |
| Settings wurden sofort neu geschrieben | Enigma2 war möglicherweise noch aktiv. Stoppen und Prozesskontrolle wiederholen. |
| Nur ein Teil der Assistenten erscheint | In einer vorhandenen Settings-Datei können `config.misc.firstrun`, `config.misc.videowizardenabled` oder `config.misc.wizardLanguageEnabled` bereits auf `False` stehen. Nicht nur einen einzelnen Schalter mit einem vollständigen Erststart verwechseln. |
| SSH ist nach einer Netzänderung weg | Neue Adresse im Router prüfen und wieder verbinden; gegebenenfalls den Netzwerkdialog am TV nutzen. |
| Oberfläche startet nicht mehr | Die geprüfte ursprüngliche Konfiguration bei gestopptem Enigma2 wiederherstellen; [Logs auswerten](../../hilfe/logs-diagnose/). |

Ein erneuter Assistentenlauf ersetzt weder [Werkseinstellungen](../../system/werkseinstellungen/) noch eine [Neuinstallation](../../wartung/usb-installation/). Jeder dieser Wege verändert einen anderen Umfang an Daten.
