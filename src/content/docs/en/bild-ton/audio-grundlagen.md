---
title: "PCM, downmix and audio passthrough"
description: "OpenATV: PCM, downmix and audio passthrough. Settings, purpose, connection examples and troubleshooting."
---

**The selected audio track and the signal actually output are different things.** With downmix enabled, an AC3 track can leave the receiver as stereo PCM. Disabling downmix does not turn a stereo source into a 5.1 recording.

| Term | What happens? |
| --- | --- |
| Decode | The receiver or sound system reconstructs audio samples from compressed audio. |
| PCM | Already decoded audio, potentially stereo or multichannel. “PCM” alone does not identify channel count. |
| Downmix | Combines channels into fewer channels, usually stereo, for stereo speakers. |
| Passthrough / bitstream | Forwards supported compressed audio to a downstream decoder. |
| Transcoding | Converts to another compressed codec, such as E-AC3 → AC3. Requires implementation support and can lose information. |
| Upmix / listening mode | Distributes existing audio across more speakers. It does not make the original track discrete multichannel audio. |

## Recognise formats

| Label | Meaning |
| --- | --- |
| MPEG audio / AAC / HE-AAC | Common broadcast/stream formats; decoding and forwarding depend on receiver and destination. |
| AC3 / Dolby Digital | Often stereo or 5.1. Enabling downmix normally produces stereo; disabling it allows bitstream on a supported route. |
| AC3+ / E-AC3 / Dolby Digital Plus | Separate format with different requirements from AC3. Options may include forwarding, multichannel PCM or AC3 conversion. |
| DTS / DTS-HD / DTS:X | Different transport/decoder requirements. DTS-HD is not equivalent to basic DTS. |
| Dolby TrueHD | Losslessly compressed audio. Do not assume support in every Enigma2 driver/player. |
| AC4 | A separate format. An AC4 option does not mean every file plays or every track contains Atmos. |

**Dolby Atmos** describes immersive content and can be carried by Dolby Digital Plus, TrueHD, AC4 or MAT, among others. Not every track using those formats includes Atmos. Conversion to ordinary AC3 or stereo does not generally preserve that information. [Dolby: Atmos transport formats](https://ott.dolby.com/browser_test_kit/help_files/topics/g_311.html), [Dolby: audio formats](https://professional.dolby.com/technologies/dolby-audio/).

## Choose settings for the destination

- **TV speakers:** Start with an available stereo track or downmix. If AC3 is silent, check whether the receiver can decode it and the TV accepts the actual output.
- **Compatible AVR/soundbar:** Disable AC3/DTS downmix for supported bitstreams; configure AC3+, AAC and HD formats separately. One switch does not cover every codec.
- **Multichannel PCM:** Useful when the receiver can decode the codec into multiple channels and the complete connection supports that PCM mode. S/PDIF is not a general route for it.
- **Older sound system:** Supported AC3 output may be a useful transcoding target. Selecting a mode cannot add a missing encoder/decoder.

With passthrough, the AVR or soundbar usually controls volume. The receiver's volume display may move without changing bitstream level. [Volume and CEC](../lautstaerke/).

## Players and recordings

Native DVB/TS, ServiceMP3/GStreamer and external players can have different codec and passthrough paths. See [ServiceApp](../../wiedergabe/serviceapp/) and [players/formats](../../wiedergabe/formate/). Selecting passthrough does not guarantee compatibility with every IPTV file.

Downmix and HDMI level affect playback. A normal DVB-TS recording keeps its recorded audio tracks; playing it in stereo does not rewrite it as a stereo recording. Transcoded recordings and special streaming services are separate cases.


[Picture and sound](../) · [Sources and verification](../quellen/)
