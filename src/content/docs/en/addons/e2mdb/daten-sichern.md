---
title: "e2MDB \u2013 Backups and data paths"
description: "OpenATV 8.0+: Backups and data paths. Detailed e2MDB instructions, purpose and practical examples."
---

## Inspect before changing data

~~~sh
python3 e2mdbctl.py cleanup status
python3 e2mdbctl.py cleanup dry-run
python3 e2mdbctl.py cache status
python3 e2mdbctl.py cache dry-run artwork_cache
~~~

Run these from the [plugin directory](../terminal/). Dry runs report candidates without carrying out the proposed cleanup. They can still require work, so use a quiet period for large libraries. Compare category names with the installed tool's help.

The following commands **change data or start maintenance**. They are independent examples for a deliberately chosen operation, not a sequence to execute in full.

~~~sh
# Changes data: clean expired Live/EPG records
python3 e2mdbctl.py cleanup run

# Changes data: analyse and compact SQLite
python3 e2mdbctl.py db maintenance vacuum
~~~

Resetting queues, retrying no matches, deleting caches and stopping work should be targeted actions. A stop can affect the central active job. Do not copy old **scheduler …** or **refresh run** examples blindly; recurring jobs are scheduled in OpenATV in this version.

## Online database backup

The receiver needs the **sqlite3** command, an existing destination directory and sufficient free space. Adapt the paths and use a new destination filename each time.

~~~sh
sqlite3 /media/hdd/e2MDB/results.db \
  ".backup '/media/hdd/e2MDB-backup-2026-09-10.db'"
~~~

SQLite's backup facility accounts for the live database state, including the effects of WAL. Also back up configuration and, if desired, artwork. Transfer the resulting backup to another drive; a copy on the same HDD does not protect against that HDD failing.

A database backup is not a backup of the film files. To restore, stop all accessing services, use a compatible e2MDB version and restore the intended consistent data set before restarting. Do not replace an active database while its old WAL remains in use.

## Data locations

| Path | Contents |
| --- | --- |
| /media/hdd/e2MDB/ | Example database/artwork directory when Cache path is /media/hdd/. |
| /etc/enigma2/e2mdb/ | Backend configuration, including paths.json and possible API credentials. |
| /etc/enigma2/settings | Enigma2 settings; can also contain credentials. |
| /var/run/e2mdb/ | Socket, status and runtime communication; not a persistent backup substitute. |
| /home/root/logs/e2MDB.log | Plugin/backend diagnostics, according to log settings. |

Store backups containing credentials privately. Use [general backup and restore](../../../wartung/backup-restore/) for the broader receiver configuration.


[Back to e2MDB](../) · [All settings](../optionen/)


The central database is named `results.db`. A consistent backup includes the effects of WAL; copying the main file alone during active writes is insufficient.
