---
title: "Softcam, AutoCam and Stream Relay"
description: "Softcam, AutoCam and Stream Relay – OpenATV Enigma2"
---

**Menu → Setup → Decryption & Parental Control → Softcam Settings** controls CAM software that is already installed. The [external feed](../softcam-feed/) and appropriate configuration are prerequisites, not image components.

## Select and restart

The list comes from available CAM startup scripts. **None** means no softcam is selected. An empty list, or one containing only None, is normal without an installed CAM package.

- Select an installed softcam with Left/Right and apply with **Green/Save**. This may interrupt ongoing decryption.
- **Yellow/Restart**, when shown, restarts the selected softcam. It neither restarts Enigma2 nor reinstalls the package.
- **Blue/Info** opens the corresponding OSCam/CCcam information or an available additional information panel.
- ECM information describes the latest available decryption data. Stale ECM data alone proves neither current reception nor valid entitlement. Keep credentials, card/account numbers and server addresses out of public screenshots.

Additional fields are covered by the [Softcam options reference](../../einstellungen/referenz/softcam/). Selecting a softcam cannot replace missing or expired viewing entitlement.

## AutoCam: select a CAM by channel

Enable automatic selection in **AutoCam Settings**. Choose the default softcam, add a channel with **Yellow** and assign an installed CAM. **Blue** removes the highlighted exception; **Green** saves. Assignment uses the service reference, not just the displayed channel name. Replacing a channel list can therefore make old entries obsolete.

AutoCam switches the CAM when changing channel. Frequent changes can delay picture startup and affect simultaneous decryption. Start with a working normal softcam configuration and add only necessary exceptions. AutoCam creates no recording timers and is different from the AutoTimer plugin.

## Cardserver and information menus

A **cardserver** is a separate process in some external CAM configurations. Its menu provides selection and restart controls; not every softcam needs it. OSCam and CCcam information screens display status and diagnostics for existing software. Consult the software supplier for reader, card or access configuration.

## Stream Relay and SoftCSA

**Stream Relay** routes selected services through a streaming relay path back into playback. The [Stream Relay reference](../../einstellungen/referenz/streamrelay/) covers the server address, port and switch delay. Compatible CAM configuration remains necessary. The switch delay allows tuner release before the next service; the extra route adds neither a tuner nor viewing entitlement.

On supported receivers, **SoftCSA** concerns software-assisted CSA processing of the transport stream. Available [SoftCSA options](../../einstellungen/referenz/softcsa/) depend on the image and hardware. This is neither a feed nor a source of keys or authorisation. Change settings for a specific requirement and first test one service you are entitled to receive.
