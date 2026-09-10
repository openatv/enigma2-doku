---
title: "Reception: sources and verification"
description: "OpenATV: Reception: sources and verification."
---


This reception guide documents shared OpenATV functions. It does not promise that every supported receiver provides every demodulation system or connector.

## Verified basis

- Enigma2 source **fdc9347241245fd18fd0b8bc93727237189c916c**; the reviewed reception files do not differ from the corresponding installed c446c39a38 revision.
- AutoBouquetsMaker **ba6010b90b57e7ae9f72efbf283955c880c9351c** and Blindscan **35aed6fadf8d2bd2c125237db675d8bae49f349a**, matching package revisions reported by the receiver.
- One connected conventional satellite path for Astra 19.2°E. Available C/T2 forms demonstrate the interface, not a connected cable or aerial signal.
- **19 native views per language**: tuner forms, reception menu, automatic/manual scan, Signal Finder, CableScan, Blindscan, ABM and DAB+.
- **Eight original wiring drawings per language** and the unchanged operator-supplied SPAUN photograph.

Form examples were separated from the active reception configuration. The series started no scan or motor movement and saved no example setup. Signal Finder was not tuned; N/A explicitly represents no measurement. Some new DAB+ labels are still English in the installed German image; native images remain unchanged while the handbook explains them in German.

After capture, tuner values, language, skin and hashes of service database/bouquets, timers, mount files and protected e2MDB files matched the initial state. The complete settings file is rewritten across GUI restarts and is not claimed to be byte-identical.

**Not yet tested with an actual signal:** Hotbird/DiSEqC switches, Unicable, motor, SPAUN C/T switching, terrestrial USB DAB+ and FBC. Those chapters explain topology and options. The new [DVB-S FBC series](../fbc-sat/) and [DVB-C FBC series](../fbc-kabel/) now show native menus of eight-way satellite and cable blocks. Additional wiring diagrams explain one/two universal feeds and eight individual Unicable SCRs; an RF parallel-reception test is not part of this configuration series.

## Traceable sources

| Topic | Primary source |
| --- | --- |
| Tuner forms | [Satconfig.py](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/lib/python/Screens/Satconfig.py) |
| LNB, SCR, motor and driver mapping | [NimManager.py](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/lib/python/Components/NimManager.py) |
| Manual/automatic scan | [ScanSetup.py](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/lib/python/Screens/ScanSetup.py) |
| AutoDiSEqC | [AutoDiseqc.py](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/lib/python/Screens/AutoDiseqc.py) |
| DAB+ form and backend | [RTLSDRSetup.py](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/lib/python/Screens/RTLSDRSetup.py), [DABScan.py](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/lib/python/Screens/DABScan.py) |
| ABM | [Setup](https://github.com/oe-alliance/AutoBouquetsMaker/blob/ba6010b90b57e7ae9f72efbf283955c880c9351c/AutoBouquetsMaker/src/setup.py) |
| Blindscan | [Plugin](https://github.com/oe-alliance-plugins/Blindscan/blob/35aed6fadf8d2bd2c125237db675d8bae49f349a/src/Blindscan/plugin.py) |
| SPAUN TAR 5 | [Manufacturer catalogue, pages 99/135](https://cdn.centralpoint.nl/objects/pdf/0/008/1350021543_1.pdf) |
| Multiplex/PLP | [DVB Coding & Transport](https://dvb.org/solutions/coding-transport/) |
| Single-cable profiles | [Inverto device example](https://www.inverto.tv/lnb/192/programmable-lnb-with-32-ub) |

The repository records option data and source hashes in `data/reception-settings.json`; capture metadata records image reviews. Other revisions may add or rename options.
