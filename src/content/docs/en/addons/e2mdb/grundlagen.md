---
title: "e2MDB \u2013 Storage and architecture"
description: "OpenATV 8.0+: Storage and architecture. Detailed e2MDB instructions, purpose and practical examples."
---

e2MDB consists of the Enigma2 plugin, a background service and stored metadata. The plugin provides the controls and the connection to the selected programme or file. The backend performs media scans, provider requests, artwork downloads and database work.

## Requirements

- OpenATV **8.0 or newer** with an e2MDB package compatible with the image and its Python/SQLite dependencies.
- A reliably mounted HDD or SSD with write access and space for the database, artwork, logs and maintenance.
- Working network access, DNS and a correct receiver clock for online providers.
- A skin with e2MDB support when information should appear outside the plugin's own screens.

## Media folders and cache have different purposes

| Location | Purpose |
| --- | --- |
| Media paths | Recordings, films and series to scan. Several local and network folders can be configured. |
| Cache path | Base directory for e2MDB data. With `/media/hdd/`, the database is `/media/hdd/e2MDB/results.db`. |
| Enigma2 configuration | Settings and scan paths are stored separately under `/etc/enigma2/`. |

Adding a media folder means using **Paths**. Changing the cache path does not add that folder to the library.

## Reliable storage

Use local storage for the database and artwork cache where possible. Media files may remain on a NAS. Before scanning or cleaning up, check that the network share is actually mounted: an unavailable NAS must not be mistaken for an empty collection.

Avoid placing the cache in `/tmp` or unintentionally in internal flash. The mere existence of `/media/hdd` does not prove a disk is mounted there. Storage use grows with the library and artwork; there is no universal minimum capacity. SQLite maintenance needs additional working space.

Do not move an active cache. Finish jobs, create a consistent backup, move data with the accessing services stopped and verify the new path. Changing the setting does not guarantee automatic migration. See [drives and mount points](../../../speicher/laufwerke/) and [network mounts](../../../netzwerk/freigaben/).


[Back to e2MDB](../) · [All settings](../optionen/)
