---
title: "Bedienung / Oberfläche: Quellen und Prüfumfang"
---

Stand: **10. September 2026**. Der Bereich verbindet alle **13 festen Menüeinträge** aus `menu.xml` mit vorhandenen und ergänzten Anleitungen. Die **225 bereits vorhandenen Setup-Referenzeinträge** werden weiterverwendet; es entsteht kein zweiter Optionskatalog. Dynamische Geräte-/Hotkey-/Sprachdialoge werden zusätzlich anhand ihres Python-Codes beschrieben.

Grundlage: OpenATV Enigma2 `fdc9347241245fd18fd0b8bc93727237189c916c`; installierte Paketrevision `c446c39a38957950de9989538e87c6278d2470cc`. Die geprüften Pythondateien entsprechen dieser Paketrevision. Abweichungen in der gesamten setup.xml/menu.xml betreffen die schon dokumentierte Upgrade-Menüroute und eine Umbra-Piconbedingung. Der Picon-Hintergrund ist deshalb ausdrücklich als skinabhängig beschrieben. Quellen und einzelne Referenzanker stehen in `data/usage-gui-coverage.json`.

## Originalbilder und Grenzen

Das Aufnahmeprofil `usage-gui` lieferte **14 Bilder pro Sprache**, alle mit gestoppter Wiedergabe und neutralem Bootlogo. Alle 28 PNGs wurden einzeln angesehen und mit SHA-256 geprüft. Screensaver, Aufwach-Workaround, Mehrfachpfadmodus und aktivierte Eingabegerätebearbeitung sind gekennzeichnete ungespeicherte Formularbeispiele. Die normale Boxkonfiguration blieb erhalten.

Vor/nachher wurden 57 geschützte Pfadzustände verglichen: 56 identisch; die ganze settings-Datei wurde beim Sprach-/GUI-Neustart neu geschrieben. Die 30 erfassten Bedienungs-/Tuner-/Sprachkonfigurationszeilen, Paketliste und Mountliste stimmen überein. NAS, HDD, Sender- und Timerdaten wurden erhalten. Originalsprache Deutsch sowie EMC-/AutoTimer-Werte wurden wiederhergestellt.

Die Bilder sind keine vollständigen Funktionstests aller Hardwarekombinationen. Kein IR-Codewechsel, kein physischer Keyboardtest, kein PiP-/LED-Hardwaretest und keine Installation/Entfernung von Sprachpaketen. Vorhandene Infobar-, Menü-, Hotkey-, Skin- und Kanallistengalerien werden weiterverwendet.

## Quellstellen

- [Menüstruktur](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/data/menu.xml) und [Setup-Felder](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/data/setup.xml)
- [Auswahlwerte und Vorgaben](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/lib/python/Components/UsageConfig.py)
- [Picon-Dialog](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/lib/python/Screens/Picon.py) und [Picon-Suche](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/lib/python/Components/Renderer/Picon.py)
- [Eingabegeräte und Tastatur](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/lib/python/Screens/InputDeviceSetup.py)
- [Sprachverwaltung](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/lib/python/Screens/LocaleSelection.py)
- [Skinauswahl](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/lib/python/Screens/SkinSelection.py) und [Infobar/PiP/Bildschirmschoner](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/lib/python/Screens/InfoBarGenerics.py)
