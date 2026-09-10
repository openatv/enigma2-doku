---
title: "e2MDB \u2013 Plan time windows"
description: "OpenATV 8.0+: Plan time windows. Detailed e2MDB instructions, purpose and practical examples."
---

An end window can limit how long a busy task may keep trying to start. It is not a guarantee that every queued metadata request finishes at that exact time. Schedule a large library scan separately.

## Example for a small channel selection

| Task | Example |
| --- | --- |
| EPGRefresh | Daily 02:30–03:30; measure the actual duration first. |
| e2MDB prefill | Afterwards, for example 03:45–05:30, allowing a margin after EPG collection. |
| Live/EPG cleanup | Daily in a free window, away from the main scan. |
| Media refresh | After adding recordings or at a separate recurring time; supervise the first large scan. |
| SQLite maintenance | For example weekly, after jobs have finished and with enough disk space. |

These times are a planning example, not universal recommendations. Large bouquets, slow providers and NAS access may need much longer. Consider existing timers and avoid overlapping large jobs.

## Standby and shutdown

**Standby is different from deep standby.** While fully shut down, neither Enigma2 prefill nor the normal backend daemon continues working. For overnight tasks, arrange the receiver's wakeup and standby behaviour and check the first complete sequence.

A scheduler entry needs a working e2MDB configuration, relevant services and existing EPG events in addition to being enabled itself. Several triggers do not make a single worker faster.

Correct time, timezone and network access matter. Consult [time, NTP and wakeup](../../../system/zeit-aufwachen/) when a receiver misses its window or fails to wake. Hardware-specific wakeup capabilities remain outside this common e2MDB guide.


[Back to e2MDB](../) · [All settings](../optionen/)
