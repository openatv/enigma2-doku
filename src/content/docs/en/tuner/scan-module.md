---
title: "Blindscan, FastScan, CableScan and other scan modules"
description: "OpenATV: Blindscan, FastScan, CableScan and other scan modules."
---


Plugins extend **Menu → Setup → Tuners, Scanning & Reception**. Install them through the [plugin browser/feed](../../plugins/installieren/) where available for your image. A menu entry alone does not make a frontend blindscan-capable.

## Blindscan: discover unknown transponders

Blindscan searches a frequency and symbol-rate range. The driver or manufacturer-specific helper must support the tuner. Some reception paths, including certain SCR or FBC combinations, cannot use the same blindscan process. Follow restrictions reported by the plugin.

| Option | Meaning |
| --- | --- |
| Tuner / satellite | Select a configured reception path |
| Search type: channel scan | Search discovered carriers for services and save them |
| Search type: transponder scan | Display carriers and select transponders for further scanning |
| Start/stop frequency | Range in MHz; limits depend on Ku/C band and LOF |
| LNB inversion | For special LNBs whose LOF exceeds the reception frequency; distinct from normal scan inversion |
| Polarisation | H/V or L/R and combinations appropriate to the system |
| Start/stop symbol rate | MSym/s here; do not copy kSym/s numbers from manual scan blindly |
| Step size on supported devices | Smaller steps can be more thorough and take longer |
| Clear before scan / only free | Same basic decisions as for a normal scan |
| Only unknown transponders | Filter against the known satellite list |
| Disable sync with known transponders | Keep measured parameters without matching existing data; specialist use |
| Disable remove duplicates | Retain duplicate candidates; can clutter the results |
| Filter adjacent satellites | Exclude known carriers from neighbouring positions; requires useful reference lists |

The plugin writes results in `satellites.xml` format under **`/tmp`**; the result dialog shows the filename. This does not automatically replace the system list. `/tmp` is temporary: save wanted results before rebooting. Open XML displays existing results; Restore defaults changes plugin settings. [Blindscan source revision](https://github.com/oe-alliance-plugins/Blindscan/blob/35aed6fadf8d2bd2c125237db675d8bae49f349a/src/Blindscan/plugin.py).

## FastScan

FastScan reads prepared service/bouquet tables from supported satellite providers. Choose **tuner, provider, HD list, FastScan numbering and FastScan channel names**, plus a separate radio bouquet if wanted. Automatic FastScan and its provider selection control later updates. Without a matching provider transmission, it is not a universal shortcut for Astra/Hotbird.

## CableScan

CableScan requires a supported cable provider and its **initial frequency, symbol rate, modulation and Network ID**. Official channel numbering, HD list and automatic CableScan control the generated list and updates. This differs from a normal DVB-C band search: a valid entry carrier for that network is required.

## Other tools

**Satfinder** tunes a transponder and displays signal values; it does not replace a full scan. **PositionerSetup** additionally controls a motor. **AutoBouquetsMaker** generates provider bouquets. **DAB+ Scan** processes DAB ensembles. Regional plugins may add further methods; these are not installed on every receiver.

Frequency files such as `satellites.xml`, `cables.xml` and `terrestrial.xml` provide starting data. Preferred local files under `/etc/tuxbox` and packaged data under `/usr/share` depend on the image and installation layout; check the existing path or symlink. In contrast, `lamedb`/`lamedb5` and `userbouquet.*` under `/etc/enigma2` contain discovered services and their ordering. Do not substitute one type of file for the other.

Further sources: [FastScan](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/lib/python/Plugins/SystemPlugins/FastScan/plugin.py), [CableScan](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/lib/python/Plugins/SystemPlugins/CableScan/plugin.py). [Full scan field reference](../scan-optionen/).

Individual dialogs, fields and buttons: [Blindscan](../blindscan/), [FastScan](../fastscan/), [CableScan](../cablescan/) and [Signal Finder](../signalfinder/).
