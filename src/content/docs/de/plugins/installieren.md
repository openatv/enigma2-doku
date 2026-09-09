---
title: Plugins installieren und verwalten
description: Erweiterungen in openATV finden, installieren, öffnen und entfernen. Plugin-Browser und Softwareverwaltung erklärt.
---

Plugins ergänzen Enigma2 um zusätzliche Funktionen. Die Installation macht ein Plugin verfügbar; anschließend kann es eigene Einstellungen oder einen eigenen Menüeintrag besitzen.

## Voraussetzungen

Eine funktionierende Internetverbindung und ausreichend freier Speicher. Der Paketkatalog muss zum installierten Image passen.

## Über die Erweiterungen installieren

**Menü → Erweiterungen**

1. Öffne die Erweiterungsübersicht.
2. Wähle die beschriftete Aktion **Plugins installieren**. Im normalen Anzeigemodus ist sie der grünen Taste zugeordnet.
3. Warte, bis der Paketkatalog geladen ist.
4. Öffne die passende Kategorie und markiere das gewünschte Plugin. Lies den Namen und die Beschreibung.
5. Starte die Installation über die angebotene Aktion und bestätige die angezeigte Auswahl.
6. Warte auf den Abschluss. Führe einen angeforderten GUI-Neustart aus.
7. Öffne die Erweiterungsübersicht erneut und starte das Plugin, sofern es dort einen Eintrag anbietet.

Farbtasten können im Bearbeitungsmodus andere Funktionen haben. Orientiere dich immer an der aktuellen Beschriftung.

## Installieren, aktualisieren oder entfernen

Ein weiterer Einstieg ist **Menü → Einstellungen → Softwareverwaltung → Plugins verwalten**. Dort kannst du Pakete einzeln verwalten. Entferne ein Paket nur, wenn du es nicht mehr benötigst, und lies Hinweise auf abhängige Pakete.

**Software-Update** aktualisiert die installierte Software über einen eigenen Ablauf. Es ist nicht dasselbe wie das Installieren eines einzelnen zusätzlichen Plugins.

## Wo finde ich das installierte Plugin?

Nicht jede Erweiterung hat einen Eintrag in der Erweiterungsübersicht. Manche ergänzen bestehende Menüs oder liefern Inhalte wie Skins oder Senderlisten. Prüfe die Paketbeschreibung und die jeweilige Anleitung.

| Problem | Nächster Schritt |
| --- | --- |
| Paketliste wird nicht geladen | [Netzwerk und DNS prüfen](../../netzwerk/lan/) |
| Paket lässt sich nicht installieren | Fehlermeldung lesen und freien Speicher prüfen |
| Plugin fehlt nach Installation | Installationsergebnis und einen verlangten GUI-Neustart prüfen |
| Nur ein lokales Paket vorhanden | Unter Softwareverwaltung die lokale Erweiterungsinstallation verwenden; das Paket muss zum Image passen |

Weiter: [Skins](../../skins/) · [Add-ons](../../addons/)

Quelle: [Plugin-Browser und Paketverwaltung](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/lib/python/Screens/PluginBrowser.py).
