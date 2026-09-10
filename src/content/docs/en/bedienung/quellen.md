---
title: "Usage & GUI: sources and verification"
---

Reviewed **10 September 2026**. This section connects all **13 fixed menu entries** from `menu.xml` to existing and expanded guides. The **225 existing setup-reference entries** are reused; no second options catalogue is created. Dynamic input/hotkey/language dialogs are additionally described from their Python implementation.

Basis: OpenATV Enigma2 `fdc9347241245fd18fd0b8bc93727237189c916c`; installed package revision `c446c39a38957950de9989538e87c6278d2470cc`. Reviewed Python files match that package revision. Differences in the complete setup.xml/menu.xml concern the previously documented upgrade-menu route and an Umbra picon condition. Picon background is therefore explicitly described as skin-dependent. Sources and individual reference anchors are in `data/usage-gui-coverage.json`.

## Original images and limitations

The `usage-gui` capture profile produced **14 images per language**, all with playback stopped and the neutral bootlogo. All 28 PNGs were individually reviewed and verified by SHA-256. Screen saver, wakeup workaround, multi-path mode and enabled input-device editing are labelled unsaved form examples. Normal receiver settings were retained.

Before/after comparison covered 57 protected path states: 56 identical; the complete settings file was rewritten during language/GUI restarts. The 30 captured usage/tuner/language configuration lines, package list and mount list match. NAS, HDD, channel and timer data were retained. Original German language and EMC/AutoTimer values were restored.

The images do not establish functionality on all hardware combinations. No IR-code change, physical keyboard test, PiP/LED hardware test or language-package installation/removal was performed. Existing Infobar, menu, hotkey, skin and channel-list galleries are reused.

## Source locations

- [Menu structure](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/data/menu.xml) and [setup fields](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/data/setup.xml)
- [Choices and defaults](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/lib/python/Components/UsageConfig.py)
- [Picon dialog](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/lib/python/Screens/Picon.py) and [picon lookup](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/lib/python/Components/Renderer/Picon.py)
- [Input devices and keyboard](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/lib/python/Screens/InputDeviceSetup.py)
- [Language management](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/lib/python/Screens/LocaleSelection.py)
- [Skin selection](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/lib/python/Screens/SkinSelection.py) and [Infobar/PiP/screen saver](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/lib/python/Screens/InfoBarGenerics.py)
