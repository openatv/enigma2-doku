---
title: "No picture, no sound or incorrect power behaviour"
description: "OpenATV: No picture, no sound or incorrect power behaviour. Settings, purpose, connection examples and troubleshooting."
---

**Change one setting per test and note the result.** Use a known channel or local recording to separate HDMI/audio faults from reception, networking and player issues.

| Symptom | Useful next test |
| --- | --- |
| Black after changing mode | Wait for confirmation timeout; do not confirm blindly. Check supported baseline, TV input and connection. |
| Menus visible, video black | Check service/player, reception, format and decoder. Visible OSD does not prove successful video decoding. |
| UHD/HDR missing behind AVR | Compare directly at the TV; check every intermediate device's capabilities/enhanced HDMI mode. |
| Washed-out picture or crushed blacks | Match RGB range/colour description at both ends; avoid untested HDR forcing. |
| Cropped menus | TV overscan/zoom first, then OSD calibration. |
| Brief blackouts on every zap | Compare fixed output with automatic resolution; consider negotiation and cables. |
| Uneven film pans | Compare film rate with fixed TV rate; exclude streaming/decoder problems separately. |
| Silence while stereo works | Check selected track, downmix/passthrough, destination decoder and TV forwarding for that exact format. |
| AVR reports PCM 2.0 only | Check for a stereo source, downmix or TV PCM conversion. PCM itself is not necessarily stereo. |
| Missing Atmos | Check an actual Atmos track, transport format, unchanged forwarding and supported player/decoder. |
| Volume bar moves with no effect | Control bitstream volume at the AVR or use working CEC forwarding. |
| Echo/double sound | Avoid TV speakers and sound system playing together with different delays. |
| Constant audio offset | Test [lip sync](../lipsync/) separately for PCM/compressed audio. |
| TV wakes overnight | Check CEC zap/wake-up task settings and incoming wake triggers. |
| Receiver sleeps when switching to a console | Check CEC response to other inputs; disable if unwanted. |
| TV/receiver immediately wakes again | Check both control directions and other CEC devices; capture a log before workarounds. |
| Missing CEC log | Check separate CEC debug switch, actual directory, space, clock and an exercised CEC event. |

Start with a direct receiver-TV connection and reintroduce AVR, soundbar or switch individually. Both HDMI cables in an AVR chain matter. Another working source on the same input is a comparison, not proof of identical format requirements.

Do not use unplanned deep standby as a test during recordings. Report settings, versions and repeatable steps with the [relevant log](../cec-logs/) through [support](../../hilfe/fehler-melden/). Codec problems need player/Enigma2 logs rather than CEC traffic alone.


[Picture and sound](../) · [Sources and verification](../quellen/)
