---
title: Erste Einrichtung
description: Den ersten Start von openATV abschließen – Sprache, Netzwerk, Empfang und Sender Schritt für Schritt einrichten.
---

Nach dem ersten Start führt dich openATV durch die grundlegende Einrichtung. Du musst dabei nicht jede Einstellung kennen. Ziel ist zunächst eine verständliche Oberfläche, eine funktionierende Verbindung und eine nutzbare Senderliste.

## Vorbereiten

- Halte die Fernbedienung bereit und schalte den Fernseher auf den angeschlossenen Eingang.
- Für Internetzugriff benötigst du ein Netzwerkkabel zum Router oder die Zugangsdaten deines WLANs.
- Für den Empfang benötigst du die Angaben zu deinem Anschluss. Übernimm unbekannte Werte nicht von einer fremden Installation.

Diese Anleitung beginnt beim laufenden Image. Das Installieren beziehungsweise Flashen des Images ist ein eigener Vorgang.

## Durch den Assistenten gehen

1. **Sprache und Bild prüfen.** Wähle deine Sprache und folge den angebotenen Schritten für die Bildausgabe. Bestätige eine Anzeigeeinstellung erst, wenn das Bild korrekt sichtbar ist.
2. **Die grundlegende Einrichtung starten.** Wähle im Begrüßungsdialog die Einrichtung mit dem Assistenten. Mit <kbd>↑</kbd>/<kbd>↓</kbd> markierst du einen Eintrag, mit <kbd>←</kbd>/<kbd>→</kbd> änderst du angebotene Werte. <kbd>OK</kbd> führt zum nächsten Schritt.
3. **Netzwerk verbinden.** Wähle einen Adapter. Für den Einstieg ist die automatische Adressvergabe per DHCP geeignet. Bei WLAN wählst du zusätzlich das Netzwerk und gibst dessen Schlüssel ein. Prüfe anschließend die angezeigte Verbindung. Du kannst das Netzwerk auch später einrichten.
4. **Weitere angebotene Schritte bearbeiten.** Der Assistent kann zusätzliche Speicher- oder Installationsdialoge anzeigen. Lies jeweils die angezeigte Aufgabe; eine Formatierung löscht Daten auf dem ausgewählten Datenträger.
5. **Empfang und Sender einrichten.** Verwende die Einstellungen deines Anschlusses. Je nach angebotener Auswahl kannst du eine Senderliste installieren oder eine Sendersuche durchführen.
6. **Assistenten abschließen.** Folge der Abschlussmeldung. Wenn ein Neustart angeboten oder verlangt wird, lasse ihn vollständig durchlaufen.

Die angebotenen Schritte können sich unterscheiden. Du musst den Assistenten nicht erneut starten, um später eine einzelne Einstellung zu ändern.

## Das Ergebnis prüfen

- Sind Menüs und Hilfetexte in der gewünschten Sprache?
- Lässt sich die Senderliste öffnen und ein verfügbarer Sender auswählen?
- Wird ein Bild angezeigt und ist Ton hörbar?
- Zeigt die Netzwerkübersicht eine Verbindung und eine IP-Adresse?

## Danach weiter

- [Bedienung und Menüs verstehen](../bedienung/)
- [Tuner und Sendersuche](../../tuner/konfiguration/)
- [LAN einrichten](../../netzwerk/lan/) oder [WLAN verbinden](../../netzwerk/wlan/)
- [Netzwerkfreigaben einbinden](../../netzwerk/freigaben/)

Quelle: [openATV-Ersteinrichtungsassistent](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/data/startwizard.xml). Diese Grundfassung wurde anhand des Quellcodes erstellt; eine vollständige Bildserie des Assistenten folgt separat.
