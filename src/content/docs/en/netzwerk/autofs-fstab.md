---
title: autofs, fstab and an unavailable NAS
description: Mount on demand or at startup; understand boot delays, stat calls, NAS outages and Enigma2 spinners.
---

**NFS or SMB** determines how files are transferred. **autofs or fstab** determines when the OpenATV mount dialog arranges the connection. Either protocol can use either mode.

## Choose a mode

| | autofs – first access | fstab – startup |
| --- | --- | --- |
| Mount trigger | Access to the share path | Startup scripts attempt the configured mount |
| NAS off during boot | No remote export needs mounting until accessed | Connection attempts can delay startup |
| NAS becomes available later | A later access can attempt mounting again | May require mounting again |
| No longer used | Can expire after inactivity if nothing keeps it busy | Normally remains mounted until unmounted |
| NAS fails during access | The active NFS/SMB connection can wait or return errors | Also depends on protocol failure/retry handling |

**autofs is a useful starting point** for a NAS that is sometimes off. It does not guarantee fast boot: a plugin, movie list or storage check accessing that path during startup still triggers the connection then.

## Local paths and HDD replacement

| Checked OpenATV selection | Path |
| --- | --- |
| autofs | `/media/autofs/NAME` |
| fstab, without HDD replacement | `/media/net/NAME` |
| fstab, with HDD replacement | `/media/hdd` |

`NAME` is **Local share**. With autofs the path remains under `/media/autofs` even if HDD replacement was selected. Prefer the explicit [recording directory](../../speicher/nas-aufnahmen/) for NAS recordings. `/media/hdd` is not available for another mount when a local HDD already uses it.

## Relevant configuration files

The checked manager reads and writes network mounts in **`/etc/auto.network`** and **`/etc/fstab`**. Older guides often mention `/etc/enigma2/automounts.xml`; its import is disabled by default in this source version. Do not assume old configuration recipes apply to the new manager.

**`/etc/auto.master`** connects the map to its base path. The test receiver uses:

```text
/media/autofs /etc/auto.network --ghost
```

`--ghost` can make directory names visible before the remote server is mounted. A visible folder does not establish connectivity.

These are **alternative** NFS definitions for one share. Replace address and export path; do not create both:

```text
# /etc/auto.network
nas-recordings -fstype=nfs,rw,proto=tcp 192.0.2.10:/srv/recordings
```

```text
# /etc/fstab
192.0.2.10:/srv/recordings /media/net/nas-recordings nfs _netdev,rw,proto=tcp 0 0
```

`_netdev` identifies a network filesystem; it does not cap waiting time. The final two `0` fields belong to fstab, not an autofs map. Use the menu editor for ordinary changes. Saving can regenerate recognised manual network entries, so avoid conflicting definitions maintained through multiple tools. SMB mount files may also contain passwords.

The checked image uses classic init scripts. `x-systemd.automount` from systemd instructions is not a replacement for this autofs arrangement. `nofail` is not a general instruction to never wait for the NAS either.

## Why does a spinner appear?

Even checking a directory can trigger network access. Opening a movie list, thumbnails, free-space checks and **`stat()`** or path-existence queries can all do so. The checked mount manager uses such an existence check for autofs targets.

If an operation waits in the interface's execution path, Enigma2 can display its **spinner**. This initially means busy; it does not establish a crash or faulty skin. Even retrieving a file's size can be delayed by an unavailable NAS.

An autofs idle timeout controls expiry of an **unused** mount. It is not a deadline for a blocked file operation. NFS `timeo`, retries and soft/hard mounts operate at other levels; see [NFS options](../nfs/). An active recording keeps storage busy and normally prevents idle expiry.

## During an outage

1. Note whether recording, playback or timeshift was active and when the fault began. Avoid further access to the same unavailable path.
2. Check the NAS, switch/router, cable and address. Restore the same server and export where possible; this can release waiting requests.
3. Once the interface responds, stop affected applications normally. Do not start new recordings on the failed destination.
4. If the NAS will remain off, move recording, timeshift, EPG and plugin paths to reachable storage and disable the unused mount definition.
5. Collect [debug and kernel evidence](../../hilfe/logs-diagnose/) for recurring problems and [report the fault](../../hilfe/fehler-melden/). A GUI restart does not reliably remove a network request still waiting in the kernel.

Read registered network mounts through SSH:

```sh
grep -E ' (nfs|nfs4|cifs|autofs) ' /proc/mounts
```

This list does not prove that the server currently responds. Unrestricted `df -h`, `ls` or `stat` may access the failed share and wait themselves. Do not force unmounting during writes. An outage may already have damaged a recording even if the interface later resumes.

**Verification:** File mappings and autofs configuration checked. The existing NAS mount was not deliberately interrupted; no fixed delay is presented as a measured result.

Sources: [OpenATV mount management and status checks](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/lib/python/Components/NetworkManager.py), [autofs master map](https://man7.org/linux/man-pages/man5/auto.master.5.html).
