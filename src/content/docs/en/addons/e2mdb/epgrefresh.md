---
title: "e2MDB \u2013 Set up EPGRefresh"
description: "OpenATV 8.0+: Set up EPGRefresh. Detailed e2MDB instructions, purpose and practical examples."
---

**EPGRefresh is a separate plugin.** It visits services so Enigma2 can receive broadcast programme listings. e2MDB then adds metadata to these events. EPGRefresh does not require an e2MDB API key.

## Configure the EPG source

1. Install EPGRefresh from the OpenATV feed. Restart the GUI if necessary after installation.
2. Open **MENU → Setup → EPG → EPGRefresh**. Depending on its settings, it may also appear in Plugins.
3. Enable automatic EPG refresh and set the dwell time and earliest/latest refresh times for the selected services.
4. Choose a supported refresh method. Main-picture refresh can change the visible channel. PiP or background methods depend on tuner resources and the receiver's capabilities.
5. Open **Blue/Channels** and select services or bouquets. Save both the selection and the main settings.

A dwell time of **120 seconds** can be a starting point. Reduce it only after checking actual EPG coverage; a very short visit may not collect enough data.

## Start action versus setup

The **Refresh EPG now** action available through the extension menu, often reached with a long Blue press, starts a run. It is not the setup page. A forced test can affect current viewing.

Check future programmes in the normal EPG before starting metadata prefill. A successful e2MDB setup cannot compensate for missing EPG data.

The full [EPGRefresh guide](../../epgrefresh/) includes native DE/EN settings and channel-selection screenshots. The next chapter explains how to coordinate those settings with e2MDB.


[Back to e2MDB](../) · [All settings](../optionen/)
