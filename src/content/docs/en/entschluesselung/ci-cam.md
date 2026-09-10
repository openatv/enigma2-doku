---
title: "CI, CAM and module settings"
description: "CI, CAM and module settings – OpenATV Enigma2"
---

A **Common Interface (CI)** is a module slot. The **CAM** is the inserted decryption module; depending on the service, it needs a compatible smartcard or already has an associated entitlement. An internal card reader is not a CI slot. CI+ adds authentication and usage rules to CI.

**Menu → Setup → Decryption & Parental Control → Common Interface Settings** appears when CI hardware is detected. Many options stay hidden without a module. Module menus and PIN prompts partly originate from the CAM and may look different from OpenATV menus.

## Getting started

1. Follow receiver, module and card instructions before insertion; orientation and card placement depend on the equipment.
2. Check whether the module is detected and initialised, then open the **module menu/MMI** if needed.
3. Test one service with valid entitlement first. A free-to-air service tests reception and the picture path, but not the CAM.
4. Then test recording alongside live viewing. The tuner, CAM, card and provider can each limit simultaneous decryption.

Using CI/CI+ extensions is the receiver user's deliberate decision. Check local law, provider terms and compatibility; an installable extension or visible menu does not establish universal module compatibility or permission for a particular use.

## Options explained

| Option/action | Purpose |
| --- | --- |
| Enable CI | Enables or disables the module slot; may terminate ongoing decryption. |
| Module menu / MMI | Opens information, entitlement details and dialogues supplied by the module. |
| Reset / Initialise | Rebuilds the module state. The picture may disappear temporarily; avoid doing this routinely during a recording. |
| Descramble multiple services: Auto/No/Yes | Controls handling of simultaneous services. Yes cannot add a capability prohibited or unsupported by the module/provider. Auto is the usual starting point. |
| High bitrate: Normal/High/possibly Extra High | CI transport-stream clock on supported hardware. A higher value is not always better; compare with module requirements if reception breaks up. |
| Relevant PIDs routing | Limits data routed to the module on supported drivers; can affect compatibility. |
| Show CI messages | Controls automatic module messages. Hiding them does not resolve their cause. |
| Use static PIN / PIN | Can supply a saved **module PIN** to supported CAM prompts. Distinct from Enigma2 parental control and the root password. Never publish it. |
| Disable operator profile | Disables use of the corresponding provider profile; change only when it causes problems or is deliberately unwanted. |
| Alternative CA handling | Variants close the CA device at programme end, offset its index, or do both. An advanced compatibility setting, not a universal reception improvement. |
| CI delay / Boot delay | Driver-specific delay or startup waiting period. May help a slowly initialising module while increasing startup time. |
| CI+ helper | Offered only with the corresponding extension: enables that component. Check supported modules and requirements with its supplier. |

The [CI reference](../../einstellungen/referenz/ciselection/) lists config names and fields. An installed CI-assignment extension may additionally offer service/provider/CAID mappings. A CAID identifies a conditional-access system, not a personal activation code. Mappings do not replace valid entitlement.

Sources: [CI implementation](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/lib/python/Screens/Ci.py) and [verification](../../netzwerk/quellen/). No physical CAM/CI+ test has been performed for this chapter yet.
