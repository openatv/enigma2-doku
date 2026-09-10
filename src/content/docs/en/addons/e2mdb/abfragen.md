---
title: "e2MDB \u2013 Targeted read-only queries"
description: "OpenATV 8.0+: Targeted read-only queries. Detailed e2MDB instructions, purpose and practical examples."
---

The examples below read data. Use small limits and quote search terms containing spaces. Copy IDs and `source_key` values from actual responses; the capitalised placeholders are not real identifiers.

## Media and artwork

~~~sh
python3 e2mdbctl.py recordings 10
python3 e2mdbctl.py browser status
python3 e2mdbctl.py browser list 10 "21"
python3 e2mdbctl.py browser list-all 10 "Series Title"
python3 e2mdbctl.py editor list 10 "Film Title"
python3 e2mdbctl.py browser item "ID_FROM_LIST"
python3 e2mdbctl.py recording "/media/hdd/mkv/21-clip.mkv"
python3 e2mdbctl.py browser debug-artwork 10 "21"
~~~

**browser list** returns browser-ready items. **list-all** also includes unfinished items. For a missing tile, check `provider_lookup_status`, `browser_ready`, image paths and grouping. Several files or series episodes can belong to one browser object.

The filename above is an example. Use the exact path of an existing file on your receiver.

## Live TV and queue

~~~sh
python3 e2mdbctl.py live-queue status
python3 e2mdbctl.py live-queue list 10 pending
python3 e2mdbctl.py live-queue list 10 all "Programme Title"
python3 e2mdbctl.py live-results 10 "Programme Title"
python3 e2mdbctl.py live-result "SOURCE_KEY_FROM_RESPONSE"
python3 e2mdbctl.py live-artwork "SOURCE_KEY_FROM_RESPONSE"
python3 e2mdbctl.py live-worker status
~~~

| State | Interpretation |
| --- | --- |
| pending / queued | Waiting for processing or the next permitted attempt. |
| running | Work is active; verify a real stall before resetting anything. |
| done / ok | Processing succeeded, although optional fields may be absent. |
| no_match | No suitable match; check title and provider. |
| failed / error | Processing or provider access failed; inspect the error. |
| ended_skipped | An event was skipped, for example because of its time context. |

The exact state set differs between jobs, media and the live queue. A web filter need not expose every internal state. Use **all** when a broader view is needed.

For schema/performance investigation the tool also offers **db schema**, **media status** and **browser debug-performance**. These are inspection tools; do not infer permission or a need to modify the schema from an example. Installed-version behaviour is authoritative.


[Back to e2MDB](../) · [All settings](../optionen/)
