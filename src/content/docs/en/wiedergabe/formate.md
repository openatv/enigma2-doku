---
title: Media formats – containers, codecs and playback problems
description: Distinguish MKV, MP4, TS, HLS, video and audio codecs, and investigate IPTV, hardware decoding, sound, subtitles and seeking.
---

**“The receiver supports MKV” is not enough information.** A file needs a readable container, supported video/audio tracks and a suitable output path. Two files with the same extension can behave very differently.

## Distinguish four layers

| Layer | Examples | What it determines |
| --- | --- | --- |
| Container | MPEG-TS, Matroska/MKV, MP4, AVI, WebM | How video, audio, subtitles and timing are packaged together. |
| Video codec | MPEG-2, H.264/AVC, H.265/HEVC, VP9, AV1 | How the picture is compressed. Profile, level, bit depth, chroma sampling, resolution and frame rate also matter. |
| Audio codec | MPEG Audio, AAC, AC3, E-AC3, DTS, MP3, FLAC, PCM | How sound is stored; decoder, downmix and HDMI/AV-receiver output must match. |
| Transport | Local file, HTTP/HTTPS, HLS, DASH, RTSP | How data arrives, whether authentication is required and what access/seeking the server offers. |

**HLS** uses playlists, often `.m3u8`, pointing to media segments and possibly several qualities. **DASH** uses a manifest, often `.mpd`. These names alone do not identify the audio/video codecs or required DRM support. An ordinary M3U channel list can contain URLs using many different transports.

## Understand common files

| File/structure | Meaning |
| --- | --- |
| Your own `.ts` recording | Usually a DVB transport stream; start with native recording playback. Sidecar files hold additional Enigma2 information. |
| `.mkv` | Flexible container with multiple audio/subtitle tracks; recognising MKV does not mean every track is decodable. |
| `.mp4` / `.mov` | Container family with different possible tracks; not automatically H.264 with AAC. |
| `.avi` | Older container, also allowing different codecs. |
| `.webm` | Web-oriented container; check required VP8/VP9/AV1 and audio support. |
| `.mp3`, `.flac`, `.wav` | Audio; for WAV, also check the audio format actually stored inside. |
| `.iso`, `VIDEO_TS`, `BDMV` | Disc image/structure. [DVD/Blu-ray navigation](../dvd-bluray/) involves more than playing one video file. |

Renaming converts nothing. **Remuxing** packages existing tracks into another container without changing the video codec. **Transcoding** creates newly encoded tracks, uses processing power and can reduce quality. Remuxing an unsuitable HEVC track from MKV to TS does not turn it into H.264.

## Hardware, drivers and players

A hardware decoder handles only supported variants. “HEVC support”, for example, does not guarantee every bit depth, resolution, frame rate or profile combination. Setting HDMI output to 1080p does not change the source codec or its decoding requirements.

[ServiceMP3, gstplayer and exteplayer3](../) can differ in container handling, protocols, buffering and audio while often sharing device-output limits. The audio software decoders in [ServiceApp](../serviceapp/) do not unlock general software video playback. A PC player's or FFmpeg's format list is not a decoder list for every OpenATV receiver.

For sound, distinguish **decoding/downmix**, which can produce stereo PCM, from **passthrough**, which forwards compressed audio to a suitable output chain. A picture without sound can therefore result from audio-track or output selection while video works correctly.

## Narrow down a problem

| Symptom | Useful next comparison |
| --- | --- |
| File missing from list | Check path, mount, extension and filters. Use FileCommander to confirm the file exists. |
| File visible but does not start | Check container/codec, read permissions, completeness and player log. For ISO, check the structure. |
| Sound without picture | Check video codec, profile, bit depth and resolution; compare another known file. |
| Picture without sound | Select another audio track; check downmix/passthrough and supported audio formats. |
| Stuttering or repeated buffering | Compare the same medium locally versus NAS/Internet; check bitrate/network. Try a lower HLS quality. |
| Slow startup | Is the NAS available? Check autofs mount, DNS, server response, authentication and [buffering](../serviceapp/). |
| No seeking / unknown duration | Live stream without a time window, missing index or limited server/player support. |
| Missing/wrong subtitles | Check track, format, renderer, filename, encoding and timing; see [subtitles](../untertitel/). |
| Picture works but EPG missing | Check service reference and EPGImport mapping; [IPTV EPG](../../epg/fehlende-daten/). |
| Same stream works on a PC | Confirms only that PC path. Browsers can use different codecs, DRM, cookies or protocols. |

IPTV providers can require expiring URLs, credentials, specific HTTP headers or a maximum number of simultaneous streams. Changing the player neither grants access nor extends an expired URL. For protected streaming services, copying an address into a bouquet often cannot reproduce their intended playback path.

## Useful details for a bug report

Record image/player version, service **1/4097/5001/5002**, container, video/audio codec, resolution, frame rate, bit depth, subtitle format and local/network source. Describe results with a second known medium and, if tested, a second player. Model details help an individual support case even though this handbook remains model-neutral.

A media-analysis tool on a PC can identify tracks. With FFmpeg installed, this command only inspects a local file:

```sh
ffprobe -v error -show_format -show_streams -of json "Film.mkv"
```

This is not an instruction to install FFmpeg on every receiver. Output can include paths and metadata; remove private details from your [report](../../hilfe/fehler-melden/). Attach a short [log from the error time](../../hilfe/logs-diagnose/).

Technical basis: [GStreamer playbin](https://gstreamer.freedesktop.org/documentation/playback/playbin.html), [FFprobe documentation](https://ffmpeg.org/ffprobe.html) and the OpenATV/player sources linked in the [overview](../). These do not establish universal codec support across receiver models.
