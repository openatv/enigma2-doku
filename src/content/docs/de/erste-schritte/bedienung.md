---
title: Bedienung und Menüs
description: Fernbedienung, Farbtasten, Speichern und Expertenansicht in openATV verstehen.
---

Viele Dialoge funktionieren nach demselben Muster. Die Beschriftung im geöffneten Bildschirm ist dabei entscheidend: Eine Farbtaste kann in einem anderen Dialog eine andere Aufgabe haben.

## Die wichtigsten Tasten

| Taste | Übliche Verwendung |
| --- | --- |
| MENU | Hauptmenü öffnen; innerhalb einer Liste oft weitere Aktionen aufrufen |
| Pfeile hoch/runter | Eintrag auswählen |
| Pfeile links/rechts | Einen angebotenen Einstellungswert ändern oder zwischen Bereichen wechseln |
| OK | Auswahl öffnen oder bestätigen |
| EXIT | Zurückgehen oder einen Dialog verlassen; Hinweise zu ungespeicherten Änderungen beachten |
| Farbtasten | Die am unteren Bildschirmrand beschriftete Aktion ausführen |
| HELP | Verfügbare Bedienhilfe öffnen, sofern der Dialog sie anbietet |

Eine Anleitung mit **Menü → Einstellungen → Netzwerk** meint: erst das Menü öffnen, dann „Einstellungen“ und anschließend „Netzwerk“ auswählen. Ein fett gedruckter Begriff ist eine Beschriftung; ein Wert in `Schreibmaschinenschrift` ist beispielsweise ein Dateipfad oder technischer Schlüssel.

## Ändern und speichern

1. Markiere die gewünschte Option.
2. Lies den Hilfetext zur markierten Zeile.
3. Ändere den Wert mit den angezeigten Tasten oder öffne das Eingabefeld.
4. Verwende die beschriftete Aktion **Speichern**, wenn die Änderung übernommen werden soll. Das bloße Verlassen des Dialogs ist nicht immer gleichbedeutend mit Speichern.
5. Beachte einen angebotenen GUI- oder Systemneustart.

## Eine Einstellung wird nicht angezeigt

Unter **Menü → Einstellungen → Bedienung / Oberfläche → Systemeinstellungen** findest du die **Einstellungsansicht** (englisch: *Settings mode*).

| Ebene | Bedeutung |
| --- | --- |
| Einfach | Weniger Optionen für die grundlegende Einrichtung |
| Fortgeschritten | Zusätzliche Einstellungsmöglichkeiten |
| Experte | Auch die als Expertenoptionen eingestuften Einträge |

Die Expertenansicht macht zusätzliche Optionen sichtbar. Sie ändert deren Werte nicht automatisch. Manche Einträge erscheinen erst nach der Auswahl einer übergeordneten Funktion oder innerhalb eines bestimmten Plugins.

Nutze [Einstellung finden](../../einstellungen/), um den passenden Bereich zu suchen. Das Handbuch orientiert sich an Menübezeichnungen, damit es mit unterschiedlichen Skins nutzbar bleibt.

Quelle: [Darstellung der Einstellungen](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/lib/python/Screens/Setup.py) und [Menüstruktur](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/data/menu.xml).
