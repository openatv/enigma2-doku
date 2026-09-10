---
title: "System und Startassistent: Quellen und Prüfumfang"
---

Stand: **10. September 2026**. Die Systemübersicht ordnet alle **neun festen Endpunkte** des Systemmenüs einer Anleitung zu. Geräteverwaltung, Swap und Flash Expander liegen im Untermenü Datenträger. Die vorhandenen **95 Setup-Felder** aus sieben Referenzen werden weiterverwendet: HardDisk 4, HDMI-CEC 29, Time 7, Logs 37, RFModulator 6, FactoryReset 11 und FlashExpander 1. Dynamische Aktionen und Auswahldialoge sind zusätzlich beschrieben.

Grundlage ist Enigma2 `fdc9347241245fd18fd0b8bc93727237189c916c`, installierte Paketrevision `c446c39a38957950de9989538e87c6278d2470cc`. Die verwendeten Wizard- und System-Pythonquellen entsprechen dieser Paketrevision. `data/system-coverage.json` dokumentiert Menüzuordnung, Referenzen, Dateiprüfsummen und die 32 Schritte der Startwizard-XML sowie sieben Video- und zwei Sprachwizard-Schritte. Das sind Quellschritte einschließlich Bedingungen und Übergängen, nicht 41 sichtbare Seiten auf jeder Box.

## Praktisch erfasster Erststart

- Enigma2 gestoppt, Settings umbenannt, mit Vorgaben neu gestartet; jeweils echte deutsche und englische GUI.
- Sprache, HDMI-Ausgang, EDID-Auswahl, 1080p/50 Hz, Begrüßung, LAN/DHCP, Verbindungsstatus, DNS, vorhandene Mountpunkte, Zeit und Tuner durchlaufen.
- Ein Astra-19,2°-Eingang verbunden; weitere Eingänge im Beispiel unkonfiguriert beziehungsweise unverbunden.
- Standard-Senderliste angeboten, für den Suchlaufzweig nicht eingespielt. Manuellen Suchlaufdialog besichtigt; automatischen Astra-Suchlauf ohne vorheriges Löschen ausgeführt.
- Der Durchlauf führte zur normalen Oberfläche. Eine zusätzliche Abschlussseite erschien im getesteten Stand nicht.

Das war ein **erneuter Erststart auf einer vorhandenen Installation**, kein neues Flashen. Bereits installierte Plugins und separate Mountdateien waren vorhanden. Automatische Aufgaben/Timer wurden für die Serie zusätzlich ausgesetzt. Die Anleitung nennt diesen Unterschied ausdrücklich.

## Systemansichten und Grenzen

System-/Speichermenü, vorhandener Swap-Status, Flash-Expander-Zielauswahl, Skriptverwaltung und vollständige/teilweise Werkseinstellungen werden als native Dialoge gezeigt. Für diese Ansichten sind die Aktionsauslöser gesperrt und Formularwerte von der laufenden Konfiguration getrennt. Es wurde kein Werksreset ausgeführt, kein Laufwerk formatiert, kein Swap verändert und kein Flash Expander aktiviert.

WLAN, FBC, HF-Modulator und der SmallFlash-/Speicherknappheitszweig wurden nicht als vollständige Hardwarefälle getestet. Hier gelten Quellenbeschreibung und die bereits vorhandenen Spezialkapitel. Die gezeigte Oberfläche ist MetrixHD; Bezeichnungen und Funktionen stehen im Vordergrund, nicht das abgebildete Modell.

Bildkennungen und Prüfsummen stehen in `data/captures.json`. Die vollständigen Rohserien, Wiederherstellungssicherungen und private Prüfprotokolle bleiben außerhalb der veröffentlichten Dateien. Der abschließende Vergleich ist im Projekt unter `docs/PRAXISTESTS.md` festgehalten.

## Quellstellen

- [Systemmenü](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/data/menu.xml) und [Setup-Optionen](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/data/setup.xml)
- [Swap-Verwaltung](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/lib/python/Screens/SwapManager.py), [Flash Expander](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/lib/python/Screens/FlashExpander.py), [Skriptverwaltung](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/lib/python/Screens/ScriptRunner.py)
- [Werkseinstellungen](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/lib/python/Screens/FactoryReset.py) und [HF-Modulator](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/lib/python/Components/RFmod.py)
- [Startreihenfolge und AutoRestore](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/lib/python/StartEnigma.py), [Wizard-Grundklasse](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/lib/python/Screens/Wizard.py)
- [Startwizard-Schritte](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/data/startwizard.xml), [Start-/Sprachwizard](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/lib/python/Screens/WizardStart.py), [Videoauswahl](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/data/videowizard.xml), [Standard-Senderliste und Paketinstallation](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/lib/python/Screens/WizardInstall.py)
