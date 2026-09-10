---
title: "Netzwerktest, Neustart und DHCP erneuern"
description: "Netzwerktest, Neustart und DHCP erneuern – OpenATV Enigma2"
---

In **Netzwerkübersicht** den Adapter markieren und <kbd>MENU</kbd> drücken. Das Kontextmenü bietet **Adaptereinstellungen**, **Adapter aktivieren/deaktivieren**, **Netzwerktest**, **Adapter neu starten** und **Netzwerk neu starten**. <kbd>INFO</kbd> zeigt Verbindungsinformationen. **Grün aktiviert/deaktiviert** den markierten Adapter beziehungsweise die WLAN-Verbindung; die Taste ist kein allgemeiner Aktualisieren-Knopf.

## Welche Neustart-Aktion?

- **Adapter neu starten:** Trennt und reaktiviert den ausgewählten Adapter. Bei DHCP wird die automatische Adresskonfiguration erneut aufgebaut; der Router kann eine andere Adresse vergeben.
- **Netzwerk neu starten:** Betrifft die Netzwerkanbindung insgesamt und kann mehrere Adapter/Verbindungen unterbrechen.
- **Dienst neu starten:** Betrifft nur beispielsweise Samba oder NFS; die Adapter-IP wird dadurch nicht erneuert. Siehe [Netzwerkdienste](../dienste/).
- **GUI neu starten:** Startet Enigma2 einschließlich OpenWebif neu; dies ist keine gezielte DHCP-Erneuerung.

Die Aktion am TV durchführen, damit du bei einem Verbindungsabbruch die neue IP ablesen kannst. NAS-Aufnahmen, Streams und Dateiübertragungen vorher beenden beziehungsweise einen geeigneten Zeitpunkt wählen. Ein Netzwerkneustart repariert kein ausgeschaltetes NAS.

## Fehler in Schichten prüfen

1. **Link:** Adapter aktiviert, Kabel eingesteckt, Switch-/Routerport verbunden?
2. **Adresse:** Passende IP und Netzmaske vorhanden? Eine selbst zugewiesene Link-Local-Adresse ist kein Nachweis für erfolgreiches Router-DHCP.
3. **Lokales Netz/Gateway:** Router beziehungsweise anderes lokales Gerät erreichbar? Gäste-WLAN, VLAN oder Client-Isolation können lokale Zugriffe verhindern.
4. **Internet:** Externes Ziel erreichbar? Ein Ping kann von Firewalls unterdrückt werden; ein fehlgeschlagener Einzeltest beweist keinen vollständigen Internetausfall.
5. **DNS:** Lässt sich ein Servername auflösen? IP-Zugriff kann funktionieren, obwohl Downloadnamen nicht aufgelöst werden.
6. **Dienst:** Richtiger Port, gestarteter Dienst, passende Freigabe und Zugangsdaten? Ein erreichbarer Host bedeutet nicht, dass SMB oder OpenWebif läuft.

Der native **Netzwerktest** prüft mehrere dieser Schritte. Seine Ergebnisse beziehen sich auf die verwendeten Ziele und den ausgewählten Adapter. Eine grüne DNS-Prüfung bestätigt keine NAS-Schreibrechte.

## Lesende Prüfung per SSH

```sh
ip address show dev eth0
ip route
cat /etc/resolv.conf
ping -c 3 192.168.1.1
nslookup github.com
```

`eth0` und die Routeradresse anpassen. IP-Ausgabe kann MAC-Adressen und öffentliche IPv6-Adressen enthalten; vor dem Teilen prüfen. `/etc/resolv.conf` zeigt wirksame Resolver, sollte aber über die [DNS-Menüs](../dns/) konfiguriert werden. Bei NAS-Problemen danach gezielt [Mountstatus und autofs](../autofs-fstab/) untersuchen.
