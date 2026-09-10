---
title: "e2MDB \u2013 Common problems"
description: "OpenATV 8.0+: Common problems. Detailed e2MDB instructions, purpose and practical examples."
---

| Symptom | Check first | Next step |
| --- | --- | --- |
| No e2MDB menu | Installed package, dependencies and hidden plugin/menu entry | Check Plugins and restart the GUI after installation if needed. |
| Backend unavailable | Service status, SQLite dependencies, storage and logs | Use [terminal status](../terminal/) and fix the underlying cause. |
| No files found | Path, mount, mode, recursive setting and scanner selection | Test one small known folder. |
| Many files, few covers | Provider phase still active; valid keys and available quota | Read progress and provider status, then retry missing data. |
| Wrong film or episode | Title, year, type and numbering | Correct one match in the Editor. |
| Empty prefill | Existing EPG, selected channels, enabled function, limits and retry suppression | Verify EPG coverage, then inspect prefill diagnostics. |
| Only picons in channel list | Artwork template, integration switches and existing image data | Check layout and record. A picon can be the correct fallback. |
| Only normal movie information | EMC/another player uses its own INFO screen | Check the supported entry point and skin. |
| Missing timer type | Recording timers opened instead of Scheduler | Open Timer → Scheduler and look for descriptive function names. |
| Web interface unavailable | Receiver IP, configured port, service and network | Compare the OpenWebif link with the direct configured port. |
| Web collection looks stale | Old page/status values or unfinished index | Refresh the view and inspect index state before starting another full scan. |

A network error, no-match result and missing picture are different conditions. Repeated large scans or cache deletion can obscure the cause. Begin with **one reproducible title and one specific symptom**.

Use the [diagnosis sequence](../diagnose/) to follow a file or EPG event through import, provider lookup and skin display.


[Back to e2MDB](../) · [All settings](../optionen/)
