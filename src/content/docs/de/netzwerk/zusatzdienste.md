---
title: "DLNA, DynDNS, VPN und weitere Dienste"
description: "DLNA, DynDNS, VPN und weitere Dienste – OpenATV Enigma2"
---

Der [Dienstekatalog](../dienste/) startet und installiert Komponenten. Deren eigentliche Aufgabe benötigt oft eine zusätzliche Konfiguration. Im Netzwerkmenü erscheinen **Inadyn**, **MiniDLNA**, **uShare**, **NFS**, **Samba** und **ZeroTier** abhängig von den vorhandenen Paketen.

## MiniDLNA und uShare: Medien im Heimnetz anbieten

Diese Server präsentieren ausgewählte Dateien für passende UPnP-/DLNA-Clients, etwa Fernseher oder Medien-Apps. Sie sind weder die Aufnahmeliste noch ein allgemeiner Dateimanager und garantieren keine Umwandlung unbekannter Codecs.

Bei **MiniDLNA** Dienst installieren, **MiniDLNA-Einstellungen** öffnen, Name, Netzwerkinterface und Port prüfen. Mit **Gelb/Freigaben** nur die gewünschten Medienordner auswählen, speichern und Dienst starten beziehungsweise seine Konfiguration neu laden. Die Felder werden aus `/etc/minidlna.conf` aufgebaut.

| MiniDLNA-Option | Zweck |
| --- | --- |
| Name | Anzeigename bei den Clients |
| Interface | Netzwerkadapter, über den das Angebot erreichbar sein soll |
| Port | Dienstport; Konflikte mit anderen Webdiensten vermeiden |
| Seriennummer | Dienst-/Gerätekennung; keine Freischaltung |
| Inotify-Überwachung | Dateiveränderungen automatisch beobachten; Netzwerkdateisysteme melden Änderungen nicht immer gleich zuverlässig |
| TiVo-Unterstützung | Zusätzliche Kompatibilität für entsprechende Clients |
| Striktes DLNA | Standardkonformität/Kompatibilitätsverhalten; bei Bedarf anhand des Zielclients prüfen |
| Freigaben | Tatsächlich angebotene Medienordner |

Bei **uShare** stehen entsprechend Name, Interface, Dienstport und Ordner zur Verfügung. Weitere Schalter betreffen die eigene Weboberfläche, den eigenen Telnet-Kontrollzugang samt Port sowie Xbox-/PS3-Kompatibilität. Das ist nicht derselbe Telnet-Dienst wie die Linux-Shell der Box. Die Konfiguration steht in `/etc/ushare.conf`. Nur benötigte Funktionen aktivieren.

Nach der Einrichtung am Client das Medienangebot öffnen und eine bekannte Datei testen. Bei leerer Liste zuerst Pfad, Mount und Index prüfen; bei fehlender Wiedergabe anschließend [Container, Codecs und Player](../../wiedergabe/formate/). Ein NAS als Medienquelle muss während Scan und Wiedergabe erreichbar sein.

## Inadyn: dynamischer DNS-Name

Inadyn aktualisiert einen beim Anbieter vorhandenen Hostnamen, wenn sich die öffentliche Adresse ändert. Der Dialog verwendet `/etc/inadyn.conf`: **Benutzername**, **Passwort/Token**, **Alias**, **Aktualisierungsintervall in Minuten**, **System aktivieren** und **System/Anbieter**. Angebotene historische Anbieternamen bedeuten nicht, dass der heutige Anbieter dieses Verfahren noch unterstützt.

Zugangsdaten beim gewählten Anbieter erzeugen, unterstütztes Verfahren prüfen, Felder eintragen, speichern und den Dienst starten. Das Protokoll kann unter `/var/log/inadyn.log` liegen. DynDNS öffnet keine Firewall, erzeugt kein VPN und umgeht keine fehlende öffentliche Erreichbarkeit durch CGNAT.

## OpenVPN und ZeroTier

**OpenVPN** benötigt ein zum eigenen VPN passendes Profil mit Zertifikaten/Schlüsseln und gegebenenfalls Zugangsdaten. Installation/Start im Dienstemenü ersetzt das Profil nicht. Nach dem Verbinden prüfen, welche Netze und DNS-Server über den Tunnel benutzt werden; ein Tunnel kann sonst die Route zum NAS verändern. Das katalogisierte Log ist `/etc/openvpn/openvpn.log`.

**ZeroTier** hat einen eigenen Dialog. Die **Netzwerk-ID** besteht aus 16 Zeichen; danach muss das Gerät im betreffenden virtuellen Netzwerk gegebenenfalls vom Administrator freigegeben werden. Beitreten, Verlassen, Adress-/Mitgliederstatus und zugelassene Routen prüfen. Eine Netzwerk-ID allein ist noch keine Autorisierung. Details der Felder: [ZeroTier-Referenz](../../einstellungen/referenz/networkzerotier/).

Für Zugriff von unterwegs bevorzugt den bereits verwalteten VPN-Zugang im Router/Netz verwenden und die Box über ihre interne Adresse aufrufen. Die Box muss dafür nicht zwangsläufig selbst VPN-Server sein. Die OpenWebif-Option „Zugriff aus VPNs“ erstellt keinen Tunnel.

## Weitere Aufgaben

**Avahi**, **LLMNR** und **wsdd2** unterstützen unterschiedliche Erkennungs-/Namensverfahren; kein Dienst davon ersetzt Samba oder NFS. **SATPI** stellt unterstützte Tuner als SAT>IP bereit und teilt sich Empfangsressourcen mit anderen Nutzungen. **SABnzbd** hat eine eigene Downloadverwaltung; Speicherziel und Zugang gesondert einrichten. **SMART monitoring** beobachtet unterstützte Laufwerke, ohne ein Backup oder eine erfolgreiche Reparatur zu garantieren. **Chrony** und **Cron** sind unter [Uhrzeit](../../system/zeit-aufwachen/) und [Linux-Aufgaben](../../timer/cron/) erklärt.

Quellen und getestete Grenzen: [Prüfumfang](../quellen/). Diese optionalen Dienste wurden für die Anleitung nicht alle installiert oder funktional getestet.
