---
title: "Externer Softcam-Feed"
description: "Externer Softcam-Feed – OpenATV Enigma2"
---

Ein **Feed** ist eine Paketquelle. Seine Installation fügt zunächst das Angebot eines externen Betreibers hinzu; danach wählst du ein verfügbares Paket über den Plugin-Browser. OpenATV stellt selbst keine Softcams bereit und supportet sie nicht. Die Nutzung setzt deine Prüfung der örtlichen Rechtslage, gültiger Berechtigungen und Anbieterbedingungen voraus. Für Fragen zu diesen Paketen ist deren Anbieter zuständig.

## Voraussetzungen und Befehl

Die Box braucht Internet, funktionierendes DNS und ausreichend freien Flash-Speicher. Verbinde dich als `root` per [SSH](../../netzwerk/fernzugriff/). Telnet kann denselben Shell-Befehl ausführen, überträgt die Sitzung aber unverschlüsselt.

Der vom Projektbetreiber für diese Anleitung genannte Aufruf lautet:

```sh
wget --no-check-certificate -O - -q http://updates.mynonpublic.com/oea/feed | bash
```

`wget` lädt das Skript, `-O -` schreibt es in die Pipe, und `bash` führt es sofort mit deinen root-Rechten aus. `-q` unterdrückt Downloadmeldungen. `--no-check-certificate` schaltet die Zertifikatsprüfung für eine eventuelle HTTPS-Verbindung aus; die Ausgangsadresse ist ohnehin HTTP. Damit wird fremder Code ohne vorherige Sichtprüfung ausgeführt und seine Herkunft nicht durchgehend abgesichert. Nutze das nur, wenn du dem Betreiber und dem Übertragungsweg vertraust.

Beim dokumentierten Abruf leitete diese Adresse zum GitHub-Projekt **SusanOV/softcamfeed** weiter. Die gleiche ursprüngliche Adresse mit `https://` lieferte dagegen 404; ein bloßes Ersetzen des Protokolls war keine funktionierende Alternative. Der Inhalt und die Weiterleitung können sich ändern.

## Vor dem Ausführen ansehen

Wer das Skript zuerst prüfen möchte, kann es als Datei laden. Die folgenden Befehle laden und zeigen es zunächst nur:

```sh
wget -O /tmp/feed http://updates.mynonpublic.com/oea/feed
cat /tmp/feed
bash -n /tmp/feed
```

Nur nach erfolgreichem Download, eigener Prüfung und bewusster Entscheidung zur Installation:

```sh
bash /tmp/feed
```

Der Dateiname `/tmp/feed` ist hier absichtlich gewählt: Der geprüfte Installer berücksichtigt auch seinen Aufrufnamen. `bash -n` prüft ausschließlich Shell-Syntax, nicht Vertrauenswürdigkeit oder Funktion. Schlägt der Download fehl, keine eventuell vorhandene alte Datei ausführen.

## Was verändert der Installer?

Der geprüfte Stand erkennt Image-/OE-Version und Architektur, ersetzt bestimmte alte externe Feed-Dateien unter `/etc/opkg/`, legt eine neue Paketquelle an, aktualisiert die Paketlisten und installiert beziehungsweise erneuert `softcam-feed-universal`. Er enthält außerdem Aufräumarbeiten für ältere CAM-Startkonfigurationen. Das ist eine Systemänderung, kein bloßer Menüschalter.

1. Nach dem Installer die Ausgabe auf Download- und Paketfehler prüfen.
2. **Erweiterungen → Plugins herunterladen** öffnen und nach dem angebotenen Softcam-Bereich suchen. Kategorien und Pakete bestimmt der externe Feed.
3. Nur ein zur Image-Version und Architektur passendes Paket installieren.
4. Anschließend die [Softcam-Einstellungen](../softcam-autocam/) prüfen. Paketinstallation und die nötige, berechtigte CAM-Konfiguration sind getrennte Schritte.

Der Installer kann trotz unterdrückter Paketfehler eine Erfolgsmeldung ausgeben. Prüfe deshalb tatsächlich Paketangebot und installierte Pakete. Bei 404, DNS- oder Signaturfehlern nicht wahllos weitere fremde Feeds mischen. Nach einem Imagewechsel die Kompatibilität erneut prüfen. Ein Autorestore alter Pakete garantiert sie nicht.

Für die Dokumentation wurde das Skript als Text untersucht, **nicht auf der Testbox ausgeführt**. Quelle: [externer Installer](https://github.com/SusanOV/softcamfeed/blob/main/oea/feed); Abruf und Hash stehen im [Prüfumfang](../../netzwerk/quellen/).
