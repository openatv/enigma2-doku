---
title: "FastScan: provider lists and automatic updates"
description: "OpenATV: FastScan: provider lists and automatic updates."
---


**FastScan** is a quick provider-specific scan using broadcast tables. It is not installed on every receiver and does not support every satellite position or provider. Its extension adds the menu entry under Reception.

1. Configure the satellite connection and verify that the required provider is receivable.
2. Open FastScan and choose a tuner and supported provider.
3. Set HD, numbering and naming options, then run a manual scan.
4. Check the result before enabling automatic updates.

| Field | Effect |
| --- | --- |
| Tuner | Reception path for provider tables |
| Provider | Matching FastScan data source |
| HD list | Provider HD list variant where offered |
| FastScan channel numbering | Adopt official list positions |
| FastScan channel names | Use names from the tables |
| Separate radio bouquet | Put radio in its own favourites list |
| Enable auto fast scan | Allow later automatic runs |
| Enable auto fast scan for provider | Select individual providers for automatic scans |

**OK/Scan** starts the search; **EXIT/Cancel** leaves the form according to its key labels. Automatic runs are plugin features with standby/timing conditions; they are neither ordinary Enigma2 recording timers nor Linux cron entries. Account for provider availability, recordings and personal bouquet edits.

The [reference](../scan-optionen/#fastscan) covers all eight field variants from the OpenATV source revision. FastScan was not executed on the current test installation; no provider result is claimed. Use [manual](../manueller-suchlauf/) or [automatic scanning](../automatischer-suchlauf/) for general frequency searches.

Source revision: [OpenATV plugin.py](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/lib/python/Plugins/SystemPlugins/FastScan/plugin.py).
