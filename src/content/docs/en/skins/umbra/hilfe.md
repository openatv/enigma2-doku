---
title: "Umbra – Help with common questions"
description: "OpenATV 8.0+: Help with common questions. Complete Umbra instructions with settings and examples."
---

## Why does changing the pack not change the colour?

A personal override has priority. Choose From style pack or clear the relevant RGB field. Yellow resets all style overrides; Green applies the result.

## Why are Cover and Panorama missing from the menu?

Check e2MDB and the EventInfo converter. If the menu exists but no image appears, also check the database, metadata switches and match for that programme.

## Why is no weather visible?

The full Infobar must be shown. Check weather mode, location, coordinate order and decimal points. Without valid data, the overlay intentionally stays hidden. The Lite Infobar does not include this weather panel.

## Why is the Infobar full of technical details?

Video/audio information, status icons, tuner information and encryption details are separate controls. Disable only the groups you do not need.

## Why are picons missing or distorted?

Check picon files and their OpenATV configuration. Select the appropriate aspect ratio in Umbra. The skin is not a picon downloader.

## Why does a plugin not fit the skin?

It may use another screen name or its own runtime widgets. Report plugin name/version, screen title, steps, OSD resolution and an image. Not every adapted template has been tested live with every feed version.

## Why is a restart offered?

Native reload may be unavailable or incomplete. Consider current recordings and other receiver activity before restarting the GUI. Wait for the apply process to finish before pressing Save again.

## What if my custom colours are hard to read?

Return to pack values. Change individual roles afterwards and test ordinary rows, selected entries, recording marking and TV transparency.

## Where should I ask for help?

Use the [OpenATV forum](https://www.opena.tv/) and provide version information and a clear reproduction. [Logs and diagnosis](../../../hilfe/logs-diagnose/) and [reporting problems](../../../hilfe/fehler-melden/) explain useful attachments.

The guide is based on the original 0.4.10 manual, the 39 implemented style options, the installed settings logic and later documented display changes. It is model neutral and does not certify every receiver, resolution or plugin combination.

[Umbra overview](../) · [All 39 style options](../optionen/)
