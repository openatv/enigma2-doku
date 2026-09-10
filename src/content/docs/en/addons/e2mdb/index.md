---
title: "e2MDB – media database for OpenATV 8.0+"
description: "e2MDB: Setup, 47 settings, media, EPG, web editor, maintenance and skinner reference."
---

**e2MDB adds descriptions, covers and other metadata to films, series, recordings and TV programmes.** This extensive section covers the new add-on **for OpenATV 8.0 and newer** and applies across receiver models. **Displaying e2MDB information in the Infobar, channel list and other Enigma2 views requires an adapted skin, such as [Umbra](../../skins/umbra/) or [MetrixHD](../../skins/metrixhd/).** The particular skin version and view must support e2MDB. Database processing, scans and the plugin's own screens/web pages are separate functions.

A working display follows this sequence: **storage → providers and language → media paths or existing EPG → processing → supported view**. e2MDB does not download complete EPG listings or replace a video player.

Start with [first setup](./einrichtung/). To locate a particular option, open [all 47 settings](./optionen/) or use the website search. German and English are maintained as separate native editions.

## Chapters and reading paths

### Set up and understand

- [Storage and architecture](./grundlagen/)
- [First setup](./einrichtung/)
- [API keys](./api-schluessel/)
- [Providers and languages](./anbieter-sprache/)
- [Media paths](./medienpfade/)
- [File and folder names](./dateinamen/)


### Library and EPG

- [Scanning and progress](./scannen/)
- [Check and correct matches](./treffer-korrigieren/)
- [Live TV and EPG](./live-epg/)
- [Prefill settings](./vorbefuellung/)
- [Select prefill channels](./senderauswahl/)
- [Set up EPGRefresh](./epgrefresh/)
- [EPGRefresh channels and sequence](./epgrefresh-ablauf/)


### Scheduling and daily use

- [Schedule e2MDB tasks](./aufgabenplanung/)
- [Plan time windows](./zeitfenster/)
- [Channel lists with artwork](./senderliste/)
- [Use media information](./medieninfo/)
- [OpenWebif and web access](./weboberflaeche/)
- [Media Browser and tools](./medienbrowser/)


### Status, maintenance and help

- [Read database and queue status](./status/)
- [Maintenance and recovery](./wartung/)
- [Common problems](./probleme/)
- [Troubleshoot step by step](./diagnose/)


### Technical appendices

- [Terminal and backend status](./terminal/)
- [Targeted read-only queries](./abfragen/)
- [Backups and data paths](./daten-sichern/)
- [Skinner: sources and requirements](./skinner-grundlagen/)
- [Skinner: covers and text](./skinner-bilder/)
- [Skinner: optional panels](./skinner-panels/)
- [E2MDBEventInfo reference](./converter/)
- [Skinner: lists and performance](./skinner-listen/)

## Reference

- [All 47 setup options](./optionen/)
- [Sources, reviewed version and glossary](./quellen/)

The technical appendices are for experienced users and skinners. Normal setup needs no Python or SQL changes. Native screenshots use MetrixHD; colours and wording may differ. Values come from a test installation and are not universal recommendations.
