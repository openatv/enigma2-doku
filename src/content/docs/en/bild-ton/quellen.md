---
title: "Picture and sound: sources and verification"
description: "OpenATV: Picture and sound: sources and verification. Settings, purpose, connection examples and troubleshooting."
---

The explanations were checked against OpenATV Enigma2 **`c446c39a38`**, matching the test installation's package revision. Full revision, source SHA-256 hashes and field mappings are stored in `data/av-settings.json` in the repository.

- [VideoSetup / automatic resolution](https://github.com/openatv/enigma2/blob/c446c39a38/lib/python/Screens/VideoMode.py)
- [AVSwitch: choices and drivers](https://github.com/openatv/enigma2/blob/c446c39a38/lib/python/Components/AVSwitch.py)
- [Audio, CEC, OSD and language fields](https://github.com/openatv/enigma2/blob/c446c39a38/data/setup.xml)
- [CEC setup](https://github.com/openatv/enigma2/blob/c446c39a38/lib/python/Screens/HDMICEC.py) and [CEC control/logging](https://github.com/openatv/enigma2/blob/c446c39a38/lib/python/Components/HdmiCec.py)
- [Audio tracks](https://github.com/openatv/enigma2/blob/c446c39a38/lib/python/Screens/AudioSelection.py), [volume and service mappings](https://github.com/openatv/enigma2/blob/c446c39a38/lib/python/Screens/VolumeControl.py)
- [OSD calibration](https://github.com/openatv/enigma2/blob/c446c39a38/lib/python/Screens/OSDCalibration.py), [video enhancement](https://github.com/openatv/enigma2/blob/c446c39a38/lib/python/Plugins/SystemPlugins/VideoEnhancement/plugin.py)

Relevant chapters link HDMI/Dolby definitions and AVR standby passthrough to manufacturer/standards sources. A device named in a source explains terminology; it is not a purchase recommendation or a restriction to that model.

## Practical verification

26 new native images: per language, three video views, audio formats, delay, volume adjustment, language selection, four CEC views, OSD calibration and picture enhancement. Captures use MetrixHD, the respective GUI language and the bootlogo with playback stopped.

AV/CEC capture forms use detached values without driver notifiers. Enabled CEC and one repeat are **unsaved display examples**, not CEC bus changes. Simple automatic resolution and volume offsets were not applied either. The shown 720p source-group defaults are not universal recommendations. HDMI output remained 1080p50.

Captured AV, CEC, skin, OSD, picture-processing and automation values, plus protected timer/mount/e2MDB files, compare unchanged before/after. German GUI was restored. Each image was reviewed; hardware-dependent fields absent on this receiver are explained from source.

These captures do not establish acoustic compatibility with every codec, CEC power cycles across TVs/AVRs, ARC/eARC, HDR picture quality, Bluetooth pairing or calibration on the physical TV. The chapters provide setup and diagnostic procedures without a blanket compatibility promise.


[Picture and sound](../) · [Sources and verification](../quellen/)
