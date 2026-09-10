---
title: "Service scanning: automatic, manual or provider lists"
description: "OpenATV: Service scanning: automatic, manual or provider lists."
---


**Configure reception before scanning.** A scan requires a working signal and writes discovered services into the service database. Bouquets organise these services; they are distinct from the frequency list used to start a scan.

## Choose a method

| Method | Purpose |
| --- | --- |
| [Automatic scan](../automatischer-suchlauf/) | Search configured positions/networks using their scan data |
| [Manual: single transponder](../manueller-suchlauf/) | Test a new or changed frequency directly |
| Manual: predefined transponder | Select an entry from a prepared frequency list |
| Single satellite / multiple satellites | Choose the scope of satellite scanning |
| [Blindscan](../blindscan/) | Discover carriers without knowing all frequencies first; requires suitable hardware/backend |
| [FastScan](../fastscan/) / [CableScan](../cablescan/) | Read tables supplied by a supported provider |
| [AutoBouquetsMaker](../autobouquetsmaker/) | Process provider information and regularly generate bouquets |
| [DAB+ Scan](../dabplus/) | Receive ensembles from supported satellite feeds or RTL-SDR |
| Channel-list package from the feed | Install prepared database/bouquets; does not verify reception at your location |

## Run an automatic scan

Open Menu → Setup → Tuners, Scanning & Reception → **Automatic Scan**. Check the selected networks/positions. Multiple tuners receiving the same network do not necessarily need to scan identical frequencies repeatedly. Enabled reception types on a hybrid tuner are handled separately.

1. [Back up settings](../../wartung/backup-restore/) if you need to preserve your own lists.
2. Check **Clear before scan** before starting. Normally choose **No** for an additive scan; a form may select a different default.
3. Select the networks and start the labelled scan action.
4. Wait for progress, service count and any errors. A full scan can take much longer than testing one transponder.
5. Check results under All/Satellites/Providers in the channel list and add services to your bouquet.

## Clearing, network scan and free services

| Option | Effect |
| --- | --- |
| Clear before scan: No | Add/update discovered services; old entries may remain |
| Yes | Remove services in the affected scan scope and discover them again; beware of incomplete reception data |
| Yes, keep feeds | Clearing variant that exempts services/transponders treated as feeds; not blanket protection for all favourites |
| Network scan / NIT | Read additional transponder information from the received network; not an IP/LAN search |
| Only free scan | Filter recorded services using broadcast encryption signalling; does not decrypt anything |

The exact clearing scope depends on scan type and flags. A bouquet can still point to a removed service and no longer provide a working channel. A slow scan is not a reason to change reception settings while it runs. Account for active recordings first.

Details: [manual parameters](../manueller-suchlauf/), [scan modules](../scan-module/), [ABM](../autobouquetsmaker/), [DAB+](../dabplus/), [all scan fields](../scan-optionen/).

Source revision: [OpenATV ScanSetup.py](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/lib/python/Screens/ScanSetup.py).
