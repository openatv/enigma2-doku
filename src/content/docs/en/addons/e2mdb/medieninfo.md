---
title: "e2MDB \u2013 Use media information"
description: "OpenATV 8.0+: Use media information. Detailed e2MDB instructions, purpose and practical examples."
---

A film or episode's data can be checked in the e2MDB web editor. Supported Enigma2 information screens and skins can display the same database's cover, description, year, genre, runtime and cast.

## From a movie list

Select a recording or media file and open the information action offered by that movie list. Enable e2MDB's **media EventView** integration and use a supported entry point.

EMC and other movie players can supply their own information screens. An e2MDB switch does not automatically replace every third-party INFO dialog. If a normal information page appears, check the player, entry point and availability of actual metadata before changing the skin.

## In the InfoBar and EPG

The skin decides whether to display a cover, a wide backdrop, a compact information line or a longer description. Optional media layouts depend on that skin. Its ordinary view should remain usable when e2MDB is missing or disabled.

A series poster may describe the whole series, while a preview/still belongs to a specific episode. A backdrop is a wide background image. These differences explain why views need not show identical artwork.

Missing cast, runtime or rating does not automatically indicate a skin bug. Check whether the provider supplied the field in the record. During fast channel changes, the old programme image must not remain as a substitute for unavailable new data.

e2MDB supplies metadata; the selected [playback service](../../../wiedergabe/) determines whether a recording or stream can actually be played.


[Back to e2MDB](../) · [All settings](../optionen/)
