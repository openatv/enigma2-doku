---
title: "System and start wizard: sources and verification"
---

Reviewed **10 September 2026**. The System overview maps all **nine fixed leaf entries** to a guide. Device Manager, Swap and Flash Expander belong to Storage Devices. It reuses **95 setup fields** from seven existing references: HardDisk 4, HDMI-CEC 29, Time 7, Logs 37, RFModulator 6, FactoryReset 11 and FlashExpander 1. Dynamic actions and selection dialogs are explained separately.

The source basis is Enigma2 `fdc9347241245fd18fd0b8bc93727237189c916c`; the installed package revision is `c446c39a38957950de9989538e87c6278d2470cc`. The relevant wizard and System Python sources match that package revision. `data/system-coverage.json` records menu mapping, references, file checksums and the 32 start-wizard XML steps plus seven video and two language steps. These include conditional and transition steps; they do not mean every receiver displays 41 pages.

## Actual first-start test

- Stopped Enigma2, renamed settings and restarted with defaults; used real German and English GUI sessions.
- Completed language, HDMI output, EDID selection, 1080p/50 Hz, welcome, Ethernet/DHCP, connection status, DNS, existing mount points, time and tuners.
- Connected one Astra 19.2°E satellite input; other inputs remained unconfigured or unconnected in the example.
- Viewed the default channel-list offer but did not install it on the scanning path. Inspected the manual scan form; executed the automatic Astra scan without clearing services first.
- Returned to the normal interface. This build did not display an additional completion page.

This was **repeated first startup on an existing installation**, not a new image flash. Installed plugins and separate mount files were already present. Automatic jobs/timers were additionally suspended for the series. The guide explicitly identifies this distinction.

## System screens and practical limits

The System/Storage menus, existing swap status, Flash Expander target selection, Script Manager and full/selective Factory Reset are shown as native screens. Action triggers are blocked and form settings isolated from the running configuration for these pictures. No factory reset or drive formatting was performed, no swap was changed and no Flash Expander was activated.

Wi-Fi, FBC, RF modulation and SmallFlash/low-memory branches were not tested as complete hardware scenarios. Those descriptions rely on source and the existing specialist chapters. The pictured interface uses MetrixHD; labels and functions matter more than the illustrated receiver model.

Image identifiers and checksums are in `data/captures.json`. Raw series, recovery backups and private audit files remain outside the published files. The final state comparison is recorded in the project's `docs/PRAXISTESTS.md`.

## Source locations

- [System menu](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/data/menu.xml) and [setup options](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/data/setup.xml)
- [Swap Manager](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/lib/python/Screens/SwapManager.py), [Flash Expander](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/lib/python/Screens/FlashExpander.py), [Script Manager](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/lib/python/Screens/ScriptRunner.py)
- [Factory Reset](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/lib/python/Screens/FactoryReset.py) and [RF modulator](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/lib/python/Components/RFmod.py)
- [Startup order and AutoRestore](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/lib/python/StartEnigma.py), [wizard base class](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/lib/python/Screens/Wizard.py)
- [Start-wizard steps](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/data/startwizard.xml), [start/language wizard](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/lib/python/Screens/WizardStart.py), [video selection](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/data/videowizard.xml), [default channel lists and package installation](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/lib/python/Screens/WizardInstall.py)
