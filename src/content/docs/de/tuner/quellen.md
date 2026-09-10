---
title: "Empfang: Quellen und Prüfumfang"
description: "OpenATV: Empfang: Quellen und Prüfumfang."
---


Die Empfangsanleitung beschreibt gemeinsame OpenATV-Funktionen. Sie ist kein Versprechen, dass jeder der unterstützten Receiver sämtliche Demodulationsverfahren oder Anschlüsse besitzt.

## Geprüfte Grundlage

- Enigma2-Quellstand **fdc9347241245fd18fd0b8bc93727237189c916c**; die ausgewerteten Empfangsdateien unterscheiden sich nicht vom entsprechenden installierten c446c39a38-Stand.
- AutoBouquetsMaker **ba6010b90b57e7ae9f72efbf283955c880c9351c** und Blindscan **35aed6fadf8d2bd2c125237db675d8bae49f349a**, passend zu den auf der Testbox gemeldeten Paketständen.
- Ein konventioneller, angeschlossener Sat-Empfangsweg für Astra 19.2°E. Die zusätzlich erreichbaren C/T2-Formulare belegen die Oberfläche, keinen angeschlossenen Kabel-/Antennenempfang.
- **19 native Ansichten je Sprache**: Tunerformen, Empfangsmenü, automatische/manuelle Suche, Signalfinder, CableScan, Blindscan, ABM und DAB+.
- **Acht eigene Verkabelungszeichnungen je Sprache** und das vom Betreiber bereitgestellte unveränderte SPAUN-Foto.

Die Beispielwerte der Formulare waren von der laufenden Empfangskonfiguration getrennt. Die Serie startete weder Scan noch Motorbewegung und übernahm keine Beispielkonfiguration. Beim Signalfinder wurde nicht abgestimmt; N/A ist ausdrücklich keine Messung. Neu hinzugekommene DAB+-Bezeichnungen sind im installierten deutschen Image teilweise noch Englisch; die Originalbilder bleiben unverändert, die Webtexte erklären sie auf Deutsch.

Nach der Serie stimmten Tunerwerte, Sprache, Skin sowie Prüfsummen der Senderdatenbank/Bouquets, Timer, Mountdateien und geschützten e2MDB-Dateien mit dem Ausgangszustand überein. Die komplette Settings-Datei wird bei GUI-Neustarts neu geschrieben und ist nicht als bytegleich ausgewiesen.

**Noch kein praktischer Empfangstest:** Hotbird/DiSEqC-Schalter, Unicable, Motor, SPAUN-C/T-Umschaltung, terrestrisches USB-DAB+ und FBC. Die entsprechenden Kapitel erklären Topologie und Optionen. Die neue [DVB-S-FBC-Serie](../fbc-sat/) und [DVB-C-FBC-Serie](../fbc-kabel/) zeigen inzwischen die nativen Menüs eines achtfachen SAT- und Kabelblocks. Ihre Anschlussbilder erklären zusätzlich ein/zwei Universal-Kabel sowie acht eigene Unicable-SCRs; ein HF-Parallelempfangstest ist nicht Teil dieser Konfigurationsserie.

## Nachvollziehbare Quellen

| Thema | Primärquelle |
| --- | --- |
| Tunerformulare | [Satconfig.py](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/lib/python/Screens/Satconfig.py) |
| LNB, SCR, Motor und Treiberzuordnung | [NimManager.py](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/lib/python/Components/NimManager.py) |
| Manuelle/automatische Suche | [ScanSetup.py](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/lib/python/Screens/ScanSetup.py) |
| AutoDiSEqC | [AutoDiseqc.py](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/lib/python/Screens/AutoDiseqc.py) |
| DAB+-Formular und Backend | [RTLSDRSetup.py](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/lib/python/Screens/RTLSDRSetup.py), [DABScan.py](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/lib/python/Screens/DABScan.py) |
| ABM | [Setup](https://github.com/oe-alliance/AutoBouquetsMaker/blob/ba6010b90b57e7ae9f72efbf283955c880c9351c/AutoBouquetsMaker/src/setup.py) |
| Blindscan | [Plugin](https://github.com/oe-alliance-plugins/Blindscan/blob/35aed6fadf8d2bd2c125237db675d8bae49f349a/src/Blindscan/plugin.py) |
| SPAUN TAR 5 | [Herstellerkatalog, Seiten 99/135](https://cdn.centralpoint.nl/objects/pdf/0/008/1350021543_1.pdf) |
| Multiplex/PLP | [DVB Coding & Transport](https://dvb.org/solutions/coding-transport/) |
| Einkabelprofile | [Inverto-Gerätebeispiel](https://www.inverto.tv/lnb/192/programmable-lnb-with-32-ub) |

Die Optionsdaten werden im Repository unter `data/reception-settings.json` mit Quellenprüfsummen geführt; Bildfreigaben stehen in den Capture-Metadaten. Versionsunterschiede können weitere oder anders benannte Optionen bringen.
