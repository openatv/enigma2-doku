---
title: "RF output: analogue modulator"
---

**Menu → Setup → System → RF Output Settings** appears only when Enigma2 detects a built-in **RF modulator**. It carries the receiver's output picture and sound on an analogue television channel, for example for an older TV with an aerial input.

A regular **ANT OUT / LOOP OUT** often only passes through the incoming aerial signal. This does not generate an analogue TV channel containing the receiver's current picture. HDMI, DVB-C channel scanning and DVB-T antenna power are separate functions.

| Option | Purpose |
| --- | --- |
| Modulator | Enable or disable RF modulation. |
| Test mode | Enable the hardware test signal to help tune the analogue TV channel. |
| Sound | Enable or disable the modulator's audio output. |
| Sound carrier | Match the TV and its analogue television standard: the source offers 4.5 / 5.5 / 6.0 / 6.5 MHz. |
| Channel | Choose the analogue UHF output channel; the source offers 21–69 with a default of 36. This is not a number in the digital channel list. |
| Fine-tune | Apply a small frequency adjustment for analogue reception; slider 1–10, default 5. |

The TV must support the same analogue channel and a matching sound standard. A digital-only DVB-T2 scan will not find an analogue modulator signal. Usable values depend on the hardware.

The test receiver has no RF modulator. This is therefore a **source-based description without a hardware test or simulated screenshot**. [All six reference fields](../../einstellungen/referenz/rfmodulator/), [RFmod.py source](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/lib/python/Components/RFmod.py).
