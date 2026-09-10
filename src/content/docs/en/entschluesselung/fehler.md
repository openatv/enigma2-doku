---
title: "Encrypted channel stays black"
description: "Encrypted channel stays black – OpenATV Enigma2"
---

Work from reception towards entitlement. A black picture can result from missing signal, an incorrect service reference, missing rights, a CAM fault or a playback problem.

| Check | Next step |
| --- | --- |
| A free-to-air service on the same reception system also fails | Check [reception diagnostics](../../tuner/signaldiagnose/), tuner allocation and channel data. |
| Only one encrypted offering fails | Check provider entitlement, card/module status and the correct channel version. |
| Softcam selection contains only None | Check external package availability and installation; OpenATV does not include a CAM. |
| CAM process runs but no current decryption | Check status with the package/card supplier. A running process proves neither a working reader nor entitlement. |
| One service works but a second simultaneous service fails | Check tuner limits and multiple-service decryption limits of the module/card/provider. |
| Failure occurs after changing channels | Check AutoCam mappings, CAM switching and any Stream Relay configuration. |
| A PIN prompt appears | Distinguish Enigma2 parental control from the module PIN; a restriction is not necessarily a reception fault. |
| External package fails after update/flash | Check supplier compatibility notes for this exact image version. |

Consider ongoing recordings before restarting a CAM or resetting a module. A useful report includes image, software/module versions, service, reception path and reproducible steps. Never publish keys, credentials, card serial numbers or complete private CAM configuration files. Use the [appropriate support route](../../hilfe/fehler-melden/) for OpenATV defects and the external supplier for softcam-specific problems.
