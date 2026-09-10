---
title: Playback – which player does what?
description: Understand MediaPlayer, MovieSelection, EMC, DVD, Blu-ray, TS, ServiceMP3, GStreamer and ServiceApp.
---

**The user interface selects a movie; a playback service reads and plays it.** A file can appear in several libraries while using the same playback service. Changing the skin or movie list does not add missing hardware codecs.

| Entry point | Purpose | Guide |
| --- | --- | --- |
| MovieSelection | Select, resume and manage Enigma2 recordings | [Recording list](../aufnahmen/movieselection/) |
| EnhancedMovieCenter (EMC) | Movie library with its own list, cover and playback options | [EMC](../addons/emc/) |
| MediaPlayer | Play media files and music from a playlist | [MediaPlayer and seven setup options](./mediaplayer/) |
| DVD Player | Navigate DVD titles, chapters and disc menus | [DVD and Blu-ray](./dvd-bluray/) |
| Blu-ray Player | Open a Blu-ray folder or ISO and select a title | [DVD and Blu-ray](./dvd-bluray/) |
| FileCommander | Manage files and open them in an appropriate viewer/player | [File manager](../addons/filecommander/) |

## TS playback and ServiceMP3

**DVB recordings stored as `.ts`** normally use Enigma2's built-in DVB service. It reads the transport stream and works with the demultiplexer, decoder and manufacturer drivers. Recording features include tracks, cut/jump marks and resume, where offered by the interface. You do not need to install a “TS Player” plugin for this. An unrelated file ending in `.ts` is not necessarily equivalent to a playable DVB recording.

**ServiceMP3 / servicemp3**, despite its historical name, is the general GStreamer playback service for many media formats and network streams. Its identifier is **4097**. GStreamer assembles a chain from the source, container reader, audio/video processing and output components. On a receiver, output often still depends on the device's decoders and drivers.

`File or stream → read container/tracks → decode audio/video → output picture, sound and subtitles`

**gstplayer** is an additional player; the executable on the test receiver is called **gstplayer2**. It also uses GStreamer but is connected through ServiceApp, so it is not the same implementation as built-in ServiceMP3. **exteplayer3** uses FFmpeg components to read/process media and separate output paths. It does not automatically provide CPU decoding for every video codec. Its correct package name is `exteplayer3`, not “ext3player”.

| First number of the service reference | Service |
| --- | --- |
| `1` | Native DVB service, also used for normal TS recording playback |
| `4097` | Normally Enigma2/ServiceMP3 with GStreamer; ServiceApp can replace it |
| `5001` | ServiceApp with gstplayer |
| `5002` | ServiceApp with exteplayer3 |

[Configure ServiceApp](./serviceapp/) explains individual tests and replacing 4097. [Service references and bouquets](./servicereferenzen/) shows where the numbers belong. **TV/radio 1/2 belongs to a different field.**

## What should I try first?

1. Play your own DVB recording normally in MovieSelection or EMC.
2. Use MediaPlayer for music and mixed file playlists.
3. For a troublesome file, follow [formats and troubleshooting](./formate/), then compare the same file through ServiceApp if appropriate.
4. For missing subtitles, check the track and renderer: [native subtitles](./untertitel/), [SubsSupport](./subssupport/) and [teletext](./teletext/) serve different purposes.

A working IPTV picture does not guarantee recording, timeshift or seeking. These depend on the stream, server and service. HiSilicon-specific services will receive a separate appendix once suitable test hardware is available.

Source basis: [Enigma2 service identifiers](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/lib/service/iservice.h), [DVB service](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/lib/service/servicedvb.cpp), [ServiceApp](https://github.com/oe-mirrors/serviceapp/tree/95e5a4f41d455986a35b8cdd0f132ea4ba6d245f), [exteplayer3](https://github.com/oe-alliance/exteplayer3/tree/668859dd3c2ffaa189b09e46c0ef99d16d4a0149).
