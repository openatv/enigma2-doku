---
title: Linux-Cron und Enigma2-Timer
description: CronTimer einrichten, fünf Zeitfelder lesen, crontab prüfen und Grenzen bei Deep-Standby, Aufnahmen und Sommerzeit verstehen.
---

**Cron startet Linux-Befehle nach einem Kalenderplan.** Es kennt weder EPG-Sendungen noch automatisch die Aufnahmezustände von Enigma2. Für Aufnahmen verwendest du [Aufnahmetimer](../aufnahmen/), für Aufwachen und geregelte Energieaktionen die [Aufgabenplanung](../aufgaben/).

| Eigenschaft | Enigma2-Timer/Aufgaben | Linux-Cron |
| --- | --- | --- |
| Kennt Sender und EPG | Aufnahmetimer können Sendungen übernehmen | Nein |
| Berücksichtigt Enigma2-Zustände | Je nach Aktion Aufnahme-, Standby- und weitere Prüfungen | Nur, wenn ein eigenes Skript dies ausdrücklich implementiert |
| Wecken aus Deep-Standby | Unterstützte Wecktermine werden beim Herunterfahren an die Hardware übergeben | Ein normaler Cronjob programmiert keine Weckzeit |
| Läuft bei gestoppter GUI | Enigma2-Timer benötigen Enigma2 | Ja, wenn Linux und der Cron-Dienst weiterlaufen |
| Läuft ohne Strom | Nein | Nein |

## In der Oberfläche einrichten

Öffne **Menü → Timer → CronTimer**. Falls der Manager die Installation von Cronie anbietet, wird dafür das passende Paket aus dem Feed benötigt. **Dienst gestartet** und **Autostart aktiviert** sind zwei verschiedene Zustände: Ein gespeicherter Eintrag läuft nicht, wenn der Dienst gestoppt bleibt.

Über **Hinzufügen** wählst du den Rhythmus, beispielsweise täglich, und die Uhrzeit. Als Befehl ist eine eigene Kommandozeile oder ein angebotenes Skript möglich; der geprüfte Manager sucht vordefinierte Skripte unter `/usr/script`. Verwende absolute Pfade. Ein Skript muss passende Ausführungsrechte und einen gültigen Interpreter haben.

Prüfe nach dem Speichern die Übersicht, den laufenden Dienst und einen tatsächlichen Testlauf. Ein Eintrag in der Oberfläche ist noch kein Nachweis, dass Cron ihn ausgeführt hat.

## Die fünf Zeitfelder

```text
Minute Stunde Tag-des-Monats Monat Wochentag Befehl
15     5      *              *     *         /bin/date >> /tmp/e2-cron-demo.log 2>&1
```

Das Beispiel schreibt **täglich um 05:15** die aktuelle Zeit in eine lokale Testdatei. Es stellt die Uhr nicht um. In der Oberfläche gibst du nur den Befehl ab `/bin/date` ein, weil der Manager die Zeitfelder erzeugt.

Ein `*` bedeutet jeden zulässigen Wert im betreffenden Feld. `*/15` im Minutenfeld bedeutet Minute 0, 15, 30 und 45 jeder Stunde. `*/35` bedeutet dagegen 0 und 35, **keinen durchgehenden 35-Minuten-Abstand**. Eine Ausführung am 31. entfällt in Monaten ohne diesen Tag. In der Benutzer-Crontab steht **kein zusätzliches `root`-Feld**; Systemdateien wie `/etc/crontab` besitzen eine andere Form mit Benutzerangabe. [Cron-Syntax](https://www.man7.org/linux/man-pages/man5/crontab.5.html).

## Über SSH prüfen und bearbeiten

Als angemeldeter Root-Benutzer zeigt dieser Befehl dessen Tabelle:

```sh
crontab -l
```

Zum kontrollierten Bearbeiten bestehender Einträge:

```sh
crontab -e
```

Ergänze nur die gewünschte Zeile, speichere sie im geöffneten Editor und prüfe anschließend erneut mit `crontab -l`. **`crontab -r` löscht die ganze Benutzertabelle** und ist kein Befehl zum Entfernen nur eines Testeintrags. Für die Testausgabe genügt `cat /tmp/e2-cron-demo.log`; `/tmp` wird nicht als dauerhaftes Archiv verwendet. Nach dem Test die einzelne Demozeile wieder entfernen. [Crontab-Werkzeug](https://www.man7.org/linux/man-pages/man1/crontab.1.html).

Im geprüften OpenATV-Stand verwendet die Oberfläche **`/etc/cron/crontabs/root`**. Das installierte Cronie verwendet `/var/spool/cron/crontabs`, das auf dieser Box auf denselben Ordner verweist. Andere Images können abweichen: `crontab -l` ist die bessere erste Prüfung als ein geratenes Dateiverzeichnis.

**Versionshinweis:** Der geprüfte Enigma2-Cronmanager enthält noch einen Aufruf mit `-c` als Verzeichnisargument. Diese Bedeutung passt nicht zu Cronies `crontab`. Deshalb wird der GUI-Speicherablauf hier nicht als vollständig getestet freigegeben. Verwende bei Problemen `crontab -e` und melde den genauen Image-/Cronie-Stand; kopiere keine BusyBox-Optionen ungeprüft auf Cronie.

## Warum ein Job ausfällt oder hängen bleibt

- **Deep-Standby zum Termin:** Linux läuft nicht. Ein gewöhnlicher Cronjob holt den verpassten Termin beim Booten nicht automatisch nach. Anacron ist ein eigener Mechanismus und ersetzt keine minutengenaue Aufnahmeplanung.
- **Nur im Terminal erfolgreich:** Cron hat eine andere, reduzierte Umgebung. Prüfe Interpreter, absolute Pfade, Berechtigungen und Ausgaben; verlasse dich nicht auf das aktuelle Arbeitsverzeichnis einer SSH-Sitzung.
- **NAS offline:** Ein Dateizugriff kann warten. Ein häufig wiederholter Job kann sich dann überlappen. Verwende eine geeignete Sperre und einen nachvollziehbaren Fehlerpfad, bevor du regelmäßige NAS-Skripte produktiv nutzt.
- **Aufnahme läuft:** Cron wartet deswegen nicht automatisch. Keine pauschalen Neustart-/Herunterfahrbefehle als Ersatz für Enigma2-Aufgaben planen.
- **Sommerzeit oder Uhrkorrektur:** Verhalten hängt von Cron-Implementierung und Art des Eintrags ab. Cronie behandelt kleinere Zeitsprünge für bestimmte feste Uhrzeiten gesondert; daraus folgt keine allgemeine Nachholgarantie bei ausgeschalteter Box. [Cronie-Verhalten](https://www.man7.org/linux/man-pages/man8/crond.8.html).

**Prüfstand:** Menüzuordnung, Quellcode, installiertes Cronie und dessen Pfadzuordnung geprüft. Kein Cronjob angelegt oder gestartet und der GUI-Speicherablauf nicht praktisch ausgeführt.

Quelle für die OpenATV-Oberfläche: [CronTimer](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/lib/python/Screens/CronTimer.py).
