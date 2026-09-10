---
title: "e2MDB \u2013 Schedule e2MDB tasks"
description: "OpenATV 8.0+: Schedule e2MDB tasks. Detailed e2MDB instructions, purpose and practical examples."
---

Create recurring e2MDB work in **MENU → Timer → Scheduler**. These are function tasks in OpenATV's scheduler, not recording timers or Linux cron jobs.

## Available functions

| Function identifier | Purpose |
| --- | --- |
| e2MDB Refresh | Scan configured media folders and enrich their metadata. |
| e2MDB Live/EPG Prefill | Prepare metadata for selected/preferred live/EPG services. |
| e2MDB Live/EPG Cleanup | Remove expired live/EPG metadata and eligible queue records. |
| e2MDB SQLite Maintenance | Optimise the database; does not perform a new media scan. |

The displayed task type may use a descriptive name such as **Scan e2MDB media folders**. It does not necessarily start with the internal function identifier above.

## Create a task

1. Open the scheduler list and press **Green/Add**.
2. At **Timer type**, choose the required e2MDB function. Press OK to open the full selection if needed.
3. Set repetition, start date, start window and end window.
4. Choose standby execution and the after-event action deliberately. For initial tests, use **Do nothing/No change** after the event.
5. Save with Green and verify that the task is enabled.
6. Check its status and log after the first run.

If the functions are missing after installation, verify the package and restart the GUI. Do not recreate old backend scheduler files: this version places recurring planning in Enigma2.

The [general scheduler guide](../../../timer/aufgaben/) explains windows and power behaviour with native screenshots. Linux cron has a [separate role](../../../timer/cron/) and does not automatically inherit Enigma2's task integration.


[Back to e2MDB](../) · [All settings](../optionen/)
