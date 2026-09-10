---
title: "Sources and verification: network and access"
---

Verified **10 September 2026**. This expansion adds 21 chapters per language: six on decryption/parental control, seven on network tasks, seven on OpenWebif and this source page. Existing LAN, NFS, SMB, password and share guides are retained and linked.

## Sources

- Enigma2 documentation revision: `fdc9347241245fd18fd0b8bc93727237189c916c`. Inspected network, CI, CAM and parental-control Python files match the test receiver package revision `c446c39a38957950de9989538e87c6278d2470cc`. Two differences in the overall XML files concern package-source menu routing and an Umbra picon condition, not these network chapters.
- [Adapters and DNS](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/lib/python/Screens/NetworkSetup.py), [service dialogues](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/lib/python/Screens/NetworkServices.py), [22 services](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/data/networkdaemons.xml).
- [Parental control](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/lib/python/Components/ParentalControl.py), [CI](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/lib/python/Screens/Ci.py), [Softcam menus](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/lib/python/Screens/SoftcamSetup.py).
- OpenWebif **2.4.0**, commit `cacd3f69d065fb0eae326aebf456273dc957d2fa`, matching the installed package. The [setup.xml with 23 fields](https://github.com/oe-alliance/OpenWebif/blob/cacd3f69d065fb0eae326aebf456273dc957d2fa/plugin/setup.xml) SHA-256 matches the receiver.
- The [external feed](../../entschluesselung/softcam-feed/) was only downloaded and read. HTTP redirected to SusanOV/softcamfeed on GitHub; HTTPS on the original host returned 404. Script size: 3949 bytes; SHA-256 `022d29264ff1ed566a22b909485222852ca7484975cea3d3a3d7c6370dcc2c1b`. A hash records that retrieval, not a general assessment of trustworthiness.

## Captures and limits

26 native DE/EN images show real forms with playback stopped and the bootlogo. Another 16 browser images show Classic/Modern, channels, recordings, timers, settings and installed editors. Native IP, DNS, parental-control and HTTPS examples were not saved. Browser captures involved no zapping, form submission, package installation or file changes.

No softcam or external feed was installed. CI+/CAM operation, VPN, DNSCrypt and all optional servers were not fully functionally tested. A visible menu is not treated as proof of compatibility. Practical Wi-Fi and FBC coverage still awaits suitable hardware.

German and original automation settings were restored after GUI language changes. Network addresses, selected configuration and inspected network packages are unchanged. 75 of 76 protected path states (file hash or absence), including timers, channel lists, mounts, root account files and e2MDB, match by hash; only the complete Enigma2 settings file was rewritten by the GUI. The capture helper passes 42 tests. No passwords, PINs or API keys are visible in published captures.

Machine-readable sources and capture reviews are in the documentation repository: `data/network-security-sources.json`, `data/network-services.json`, `data/openwebif-settings.json`, `data/captures-review.json` and `data/openwebif-captures-review.json`.
