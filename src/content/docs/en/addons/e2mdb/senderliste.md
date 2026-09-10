---
title: "e2MDB \u2013 Channel lists with artwork"
description: "OpenATV 8.0+: Channel lists with artwork. Detailed e2MDB instructions, purpose and practical examples."
---

Open the channel list, press **MENU**, then open **Settings**. **Channel list / screen** chooses the overall screen layout; **Channel list / list** chooses how entries are drawn. A skin may offer a single-line list, image list, columns or a grid.

MetrixHD offers layouts such as **List and event details**, **Single-line list** and image-oriented templates. Exact names come from the skin. The e2MDB metadata switches still have to be enabled, and the selected template must support the image fields.

## Check three layers

1. In the normal EPG, confirm that the selected channel has the correct programme.
2. In e2MDB, enable live/EPG metadata and ChannelSelection integration, then check that metadata and artwork exist.
3. In channel-list settings, select a compatible screen/list combination.

The plugin registers additional channel-list INFO choices such as **e2MDB EventView** and **e2MDB Single EPG** on a compatible Enigma2 build. These choices control the information action, while the screen/list styles control presentation. They are separate settings.

## Picon fallback is intentional

A picon in place of a programme image is a useful fallback when suitable artwork is unavailable. Do not replace it with an arbitrary cover. A portrait cover, landscape backdrop and episode preview/still are different image types and can legitimately differ between views.

The skin and resolution determine image size and the number of visible entries. The [channel-list styles guide](../../../settings/kanalliste/) contains native examples. [Skinner list integration](../skinner-listen/) explains how event-related artwork reaches templates without requiring provider requests during drawing.


[Back to e2MDB](../) · [All settings](../optionen/)
