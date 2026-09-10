---
title: WLAN verbinden
description: Ein WLAN auswählen, den Netzwerkschlüssel eingeben und die Verbindung in OpenATV kontrollieren. Wi-Fi, SSID und Passwort erklärt.
---

WLAN verbindet OpenATV ohne Netzwerkkabel mit dem Router. Voraussetzung ist ein in der Netzwerkübersicht verfügbarer WLAN-Adapter.

## Menüweg

**Menü → Einstellungen → Netzwerk → Netzwerkübersicht**

## Ein Netzwerk hinzufügen

1. Markiere den WLAN-Adapter. Öffne bei Bedarf seine Einstellungen mit <kbd>OK</kbd> und aktiviere ihn.
2. Öffne mit <kbd>MENU</kbd> das Kontextmenü und wähle die Suche nach WLAN-Netzwerken (*Scan Wi-Fi Networks*).
3. Wähle dein Netzwerk aus der gefundenen Liste. Achte auf den richtigen Netzwerknamen, die **SSID**.
4. Prüfe die angebotene Verschlüsselung und gib den WLAN-Schlüssel deines Routers ein. Groß- und Kleinschreibung gehören zum Schlüssel.
5. Speichere das Profil und folge dem Verbindungsdialog. Bei einem bereits gespeicherten Profil wählst du die beschriftete Aktion **Verbinden**.
6. Prüfe die Netzwerkübersicht: Das Netzwerk soll als verbunden erscheinen und der Adapter eine IP-Adresse erhalten. Für die IP-Einstellungen ist zunächst DHCP geeignet.

## Die wichtigsten Begriffe

| Begriff | Bedeutung |
| --- | --- |
| SSID | Sichtbarer Name des WLANs |
| Verschlüsselung | Muss zur Konfiguration des Routers passen, zum Beispiel WPA2 oder WPA2/WPA3 |
| Schlüssel | WLAN-Passwort; nicht das Passwort der Router-Verwaltung |
| Gespeichertes Netzwerk | Profil mit den Verbindungsdaten für eine erneute Verbindung |
| Verstecktes Netzwerk | WLAN, dessen Name nicht in der normalen Suchliste erscheint |

Ein verstecktes Netzwerk kannst du über die angebotene Aktion zum Hinzufügen eines gespeicherten WLANs eintragen. Dafür benötigst du den exakten Namen und die passende Verschlüsselung.

## Wenn die Verbindung nicht gelingt

- **Kein WLAN-Adapter vorhanden:** Ohne einen erkannten Adapter kann keine WLAN-Verbindung eingerichtet werden. Nutze vorerst LAN; Adapterbesonderheiten gehören später in die Anhänge.
- **Netzwerk fehlt:** Suche erneut und prüfe, ob der Router das WLAN aktiviert hat.
- **Authentifizierung schlägt fehl:** Schlüssel und Verschlüsselung kontrollieren.
- **Verbunden, aber keine Internetverbindung:** [IP-Adresse, Gateway und DNS prüfen](../lan/).

Quelle: [Netzwerkübersicht und WLAN-Dialoge](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/lib/python/Screens/NetworkSetup.py). [Einzelne WLAN-Optionen nachschlagen](../../einstellungen/referenz/networkwifi/).
