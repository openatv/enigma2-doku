---
title: "e2MDB \u2013 EPGRefresh channels and sequence"
description: "OpenATV 8.0+: EPGRefresh channels and sequence. Detailed e2MDB instructions, purpose and practical examples."
---

## Select EPGRefresh services

1. Open EPGRefresh and press **Blue/Channels**. Use the edit selector to switch between services and bouquets.
2. Press **Blue/New** to add entries. Individual channels are precise; bouquets can be easier to maintain for a larger selection.
3. **Yellow** removes an entry from the refresh selection. It does not delete that channel from Enigma2's normal channel list.
4. Press **Green** and also save the main configuration.
5. After a suitable test run, open the normal EPG and verify several future events on the intended channels. Only then request e2MDB prefill.

## Coordinate the two stages

Run **EPGRefresh first**, leave a margin, then run **e2MDB prefill**. EPG coverage must extend beyond the currently tuned channel. With several reception paths or encrypted services, separately check reception, tuner availability and the data the broadcaster supplies.

Do not automatically include every bouquet. Huge selections take time even if many channels are never used in the skin. One service may supply EPG for other services, but coverage depends on the broadcaster and reception. The actual EPG result is the deciding factor.

If EPGImport or another plugin already supplies these channels reliably, an additional EPGRefresh run is not always necessary. The TVSpielfilm metadata provider inside e2MDB is separate from any plugin that updates EPG listings.

After bouquet changes, review **both** EPGRefresh's selection and e2MDB's prefill selection. Saving one does not synchronise the other.

See [EPGRefresh settings and pictures](../../epgrefresh/) and [a coordinated time-window example](../zeitfenster/).


[Back to e2MDB](../) · [All settings](../optionen/)
