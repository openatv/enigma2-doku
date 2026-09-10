---
title: "e2MDB \u2013 Media Browser and tools"
description: "OpenATV 8.0+: Media Browser and tools. Detailed e2MDB instructions, purpose and practical examples."
---

## Media Browser

Search by title, media type, year or genre. Cast searches depend on available metadata. Suggestions and filters depend on the built index.

Series may be grouped into seasons and episodes; one imported file therefore does not necessarily correspond to one top-level tile. **Imported** is not the same as **browser ready**. If a file seems absent, inspect processing state and grouping before rescanning everything.

Select a record to inspect details and available artwork. **Play** starts the file **on the receiver**, not as a browser video stream. **Stop** affects receiver playback. These are unnecessary when only checking metadata.

## Tools

| Area | What it does |
| --- | --- |
| Backend jobs | Display the current job, queue and history; also offers start/stop actions. |
| Database/media status | Read counters without starting a new library scan. |
| Live/EPG queue | Inspect events and states. Resetting or clearing changes stored work. |
| Maintenance | SQLite maintenance, cleanup dry runs, real cleanup and cache tools. |
| Scan paths | Inspect configured media folders and their availability. |

**Load status** or **Refresh all** updates the displayed status values. **Start scan**, **Run cleanup** and **Clean cache** change backend work or saved data. Read the exact action label before using it.

For incorrect title matches, use the [Editor workflow](../treffer-korrigieren/). For gaps between imported and browser-ready counts, use [database status](../status/) and [targeted queries](../abfragen/).


[Back to e2MDB](../) · [All settings](../optionen/)
