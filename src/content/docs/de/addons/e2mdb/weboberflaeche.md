---
title: "e2MDB – OpenWebif und Weboberfläche"
description: "OpenATV ab 8.0: OpenWebif und Weboberfläche. Einrichtung, Bedeutung und praktische Hinweise zu e2MDB."
---

Im Browser die Adresse der eigenen Box öffnen, zum Beispiel http://192.168.1.50/. Unter „Extras“ führt „e2MDB“ zur eigenen Weboberfläche. Der Standardport ist 6066, zum Beispiel http://192.168.1.50:6066/. IP-Adresse und Port an die eigene Installation anpassen.

## Schlüssel am Computer eingeben

1. In OpenWebif „Extras → Einstellungen“ öffnen.
2. „e2MDB-Einstellungen“ auswählen. Die Felder entsprechen der Plugin-Konfiguration.
3. Anbieter und API-Schlüssel sorgfältig eintragen. Der Editor-Suchtext ist nicht das Feld für API-Schlüssel.
4. Unten „Speichern“ wählen. Bei einer gleichzeitig geöffneten TV-Einstellungsseite vermeiden, dass dort anschließend alte Werte zurückgespeichert werden.
5. Die gespeicherten Werte und einen bekannten Testtitel im Plugin prüfen.

## Nur im vertrauenswürdigen Netz

Die e2MDB-Weboberfläche ist ein eigener Dienst. Ein OpenWebif-Passwort schützt nicht automatisch einen direkt erreichbaren anderen Port. Die Oberfläche und Telnet nicht ungeprüft ins Internet weiterleiten. Für Fernzugriff einen abgesicherten Zugang, etwa VPN, verwenden.

Konfigurationsexporte enthalten Zugangsdaten. Auch Protokolle können URLs, Suchbegriffe und Pfade enthalten. Vor jeder Weitergabe prüfen und sensible Werte entfernen. Öffentliche Bildschirmbilder niemals mit sichtbaren API-Keys erstellen.

[Zur e2MDB-Übersicht](../) · [Alle Einstellungen](../optionen/)

## Sprachstand der Weboberfläche

Die Weboberfläche verwendet in diesem Plugin-Stand teilweise deutsche Bezeichnungen. Die Anleitung erklärt ihre Bedienung vollständig auf Deutsch und Englisch. Die Bildschirmbilder der Enigma2-Dialoge liegen in beiden Menüsprachen vor.
