---
title: "Connect a TV, AVR and soundbar"
description: "OpenATV: Connect a TV, AVR and soundbar. Settings, purpose, connection examples and troubleshooting."
---

Choose the actual signal route first. Labels such as **HDMI IN**, **HDMI OUT** and **ARC/eARC** matter. A soundbar with only an ARC/eARC connector does not have a regular HDMI input for the OpenATV receiver.

| Connection | Audio processing | Setup |
| --- | --- | --- |
| Receiver → HDMI → TV | TV | Start with stereo/PCM or appropriate downmix. Use multichannel only if supported by the TV. |
| Receiver → AVR/soundbar HDMI IN → HDMI OUT → TV | AVR/soundbar | Select its receiver input. Pass supported formats from OpenATV. Every device must also support the video signal. |
| Receiver → TV; TV ARC/eARC → AVR/soundbar | TV forwards audio to the sound system | Select external audio and a suitable digital output mode on the TV. Connect the labelled return-channel ports; enable eARC when supported. |
| Receiver → HDMI → TV, plus receiver → S/PDIF → sound system | Sound system over optical/coaxial cable | Select its digital input. Use stereo PCM or supported AC3/DTS; do not assume TrueHD, DTS-HD or multichannel PCM support. |

## Connect the receiver directly to the AVR/soundbar

1. Connect the receiver to an **HDMI IN**, then connect the sound system's video output to the TV.
2. Select that input on the sound system. Receiver audio on this route does not require ARC.
3. Establish picture and sound with a known channel and simple output settings.
4. Enable supported bitstream output. Check the AVR's **input signal information**: an output listening mode called “Surround” does not prove that a 5.1 input track is present.
5. If HDR/UHD is missing, check the sound system's input, output and HDMI signal mode. A temporary direct TV connection helps isolate the cause.

## Receiver at the TV, soundbar over ARC/eARC

ARC/eARC carries **audio back from the TV** to the sound system. This covers TV apps and supported audio from HDMI sources. eARC supports higher-bandwidth audio, including multichannel PCM and lossless HD formats. The TV's forwarding function, sound system and source must still support the actual format. A TV may reject some input formats or convert them to stereo. [HDMI: eARC](https://www.hdmi.org/spec21sub/enhancedaudioreturnchannel).

TV options may be called “Digital audio output”, “Passthrough”, “Auto”, “PCM” or “External audio system”. Check that TV's manual for their precise meaning. Start with PCM to verify the connection, then select the appropriate forwarding mode for multichannel audio. ARC is often coupled to CEC. eARC transport and CEC volume control are separate functions.

## Two meanings of passthrough

**Audio passthrough in OpenATV** forwards supported compressed audio to a decoder in the TV/AVR. **HDMI passthrough while the AVR is in standby** instead forwards a selected HDMI input through the sleeping AVR to the TV. Enable standby forwarding and select its source on the AVR itself. OpenATV's downmix switch does not activate that function. A manufacturer example documents separate HDMI Audio Out, HDMI PassThrough and Pass Source settings: [HDMI setup](https://manuals.denon.com/AVRS760H/NA/EN/GFNFSYkabkahie.php).

An AVR may report different capabilities in standby and while operating. Recheck format compatibility when switching between TV speakers and the AVR. Standby forwarding may also increase standby power consumption.

## Volume and special connections

With bitstream output, control volume at the device driving the speakers, directly or through [CEC key forwarding](../hdmi-cec/). S/PDIF does not carry CEC; a parallel HDMI connection may still carry control messages. DVI adapters and HDMI splitters can restrict audio or EDID capabilities; check their actual features.


[Picture and sound](../) · [Sources and verification](../quellen/)
