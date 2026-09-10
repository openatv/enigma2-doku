---
title: "e2MDB \u2013 Maintenance and recovery"
description: "OpenATV 8.0+: Maintenance and recovery. Detailed e2MDB instructions, purpose and practical examples."
---

Maintenance should preserve a useful library. Deleting the entire cache or database is not a routine maintenance strategy. Read status first, then choose the smallest appropriate action.

## Choose an action

| Action | Effect | When useful |
| --- | --- | --- |
| Live/EPG cleanup | Removes expired metadata and eligible queue entries according to retention rules. | In a free recurring window. |
| SQLite maintenance | Optimises database structures; ANALYZE, optionally VACUUM or REINDEX. | As needed or in a quiet recurring window. |
| VACUUM | Rebuilds the database and can release unused space. | After substantial cleanup; allow disk space and time. |
| REINDEX | Rebuilds indexes. | For a specific reason, not a mandatory daily action. |
| Retry missing metadata/artwork | Attempts missing matches and pictures again. | After fixing credentials, provider access or incomplete processing. |
| Clean cache | Deletes images or other cache data according to the selected category. | Deliberate troubleshooting or rebuilding. |
| Delete database / everything | Discards matches and potentially the entire e2MDB dataset. | Only with a backup and a planned rebuild. |

## A practical routine

- After adding media, run a suitable scan and check a few results.
- Regularly check disk space, provider errors and queue backlog; clean expired live/EPG records.
- Before updates or storage changes, make consistent backups.
- Keep verbose logging enabled only while diagnosing a problem.

## Consistent SQLite backups

The database uses **WAL** mode. Copying only `results.db` during active writes is not a reliable complete backup. Use SQLite's online backup facility, or stop all accessing processes in a controlled way before copying the complete consistent state.

Provider configuration, scan paths and optionally artwork also belong in a recovery plan. A database backup does not back up the actual films. Restore with accessing services stopped and a compatible plugin version. The [backup appendix](../daten-sichern/) provides an online backup example and exact data locations.


[Back to e2MDB](../) · [All settings](../optionen/)
