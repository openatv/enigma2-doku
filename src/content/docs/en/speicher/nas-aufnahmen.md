---
title: Record to a NAS
description: Use network storage for recordings, choose timer and instant recording paths, understand HDD replacement and configure time shift separately.
---

A NAS can store recordings centrally for several devices. **The network mount, write permissions and recording destination** must all agree. Adding a mount does not change existing timers.

## Prepare the share and recording folder

1. Set up [SMB/CIFS](../../netzwerk/smb-cifs/) or [NFS](../../netzwerk/nfs/) first. Leave **Use as HDD replacement** disabled when adding a NAS alongside an existing disk.
2. Open the local mount path. This example uses an autofs share named `nas-recordings`: `/media/autofs/nas-recordings`.
3. Create a `movie` folder on the share if needed. The recording destination is then `/media/autofs/nas-recordings/movie/`. If the shared directory itself is already your movie folder, another subfolder is unnecessary.
4. Check writing, reading and deleting with a small disposable test file. The account also needs permission to create recording sidecar files. Check free space **and the account's NAS quota**.

A **Read-Only** mount is suitable for playback, not recording. SMB requires suitable server share and file permissions; NFS requires matching user mappings and export permissions. [File systems and network protocols](../dateisysteme/) explains the difference.

## Find the right settings

Open **Menu → Setup → Playback, Recording & Time Shift**. Enable [Expert mode](../../erste-schritte/bedienung/) if the path options are missing. In the inspected version, these settings are located here:

| Submenu and setting | Effect |
| --- | --- |
| **Playback Settings → Default movie selection location** | Base location of the movie browser; also used by the “Default movie location” recording choice. |
| **Recording Settings → Timer recording location** | Default for new timers. An individual timer may have its own saved destination. |
| **Recording Settings → Instant recording location** | Destination for a recording started directly. |
| **Recording Settings → Time shift save location** | Destination for a time shift file saved as a recording. |
| **Time Shift Settings → Time shift buffer location** | Working directory for the live time shift buffer, separate from a finished recording's destination. |

Select a path field and press **OK** to choose a directory. Left/Right switches between previously added locations. Choose the **complete local path**, for example `/media/autofs/nas-recordings/movie/`, and save. The [Recording](../../einstellungen/referenz/recording/) and [Time Shift](../../einstellungen/referenz/timeshift/) references list further options.

Recording destinations also offer dynamic choices:

| Choice | Resolved path |
| --- | --- |
| Default movie location (`<default>`) | The default movie location configured above. |
| Current movie list location (`<current>`) | The last location used in the movie list. Browsing another folder can therefore change the recording destination. |
| Last timer location (`<timer>`) | The last directory used for a timer. |

Start with a fixed path for a predictable NAS destination. Check **every existing timer** and any timer plugin's defaults. Changing default values does not rewrite all saved timers. See [recording settings and path resolution](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/lib/python/Screens/Recording.py).

Keep **Expert mode** enabled for separate recording destinations: in the inspected version, the shared path resolver falls back to the default movie location below that level. This affects use of the defaults, not just their visibility. Source: [Preferred recording locations](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/lib/python/Components/UsageConfig.py).

## Do I need HDD replacement?

An explicit recording directory is sufficient for NAS recordings. **Use as HDD replacement** mainly matters when applications expect `/media/hdd`:

| Mount mode | Path in the inspected OpenATV version |
| --- | --- |
| autofs | `/media/autofs/nas-recordings`, including when HDD replacement is enabled. |
| fstab without HDD replacement | `/media/net/nas-recordings`. |
| fstab with HDD replacement | `/media/hdd`. A movie subfolder would be `/media/hdd/movie/`. |

Keep an existing HDD at `/media/hdd`: do not put a second share on that path. Mounting over it can hide existing files and redirect applications to another device. If you deliberately replace the main disk later, also check backup, EPG and plugin paths. [Mount modes and HDD path selection](../../netzwerk/autofs-fstab/) provides more detail.

An existing directory does not prove that the NAS is mounted. A failed mount can leave a local folder with the same name. Do not bypass a warning by recording into that folder: it may fill internal flash. OpenATV's path checks detect several unsuitable destinations, but do not replace testing the actual share.

## Plan time shift separately

An existing local HDD or SSD is usually the more robust choice for the live time shift buffer. Time shift writes continuously and reads at the same time during delayed viewing; a network interruption then directly affects operation. The NAS can still store finished recordings.

OpenATV also checks whether the time shift path supports **hardlinks**. A hardlink gives the same data another filename within one file system. A NAS may support large files while the selected share does not provide the hardlink operations needed here. Test this through the actual mount; knowing the NAS's disk format alone is insufficient. Do not ignore the corresponding path warning. Source: [time shift path checks](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/lib/python/Screens/Timeshift.py).

## Bandwidth, sleep and unavailable servers

The **sum of concurrent streams** must fit the network and NAS with headroom. Example calculation: three recordings at 20 Mbit/s each require 60 Mbit/s, or 7.5 MB/s of payload. Protocol overhead, peaks, additional playback and other NAS users add to this. These numbers are illustrative, not fixed channel bitrates or a receiver guarantee.

Use a stable wired connection and test your intended simultaneous load. The NAS must be ready before a timer starts. Disk spin-up, NAS sleep or a sleeping Windows PC can delay the first access. **autofs does not automatically wake a powered-off server** or queue a failed recording until it returns. See [autofs and fstab](../../netzwerk/autofs-fstab/) for startup delays, `stat()` accesses and spinners.

## Check your setup

1. Start a short instant recording and inspect the destination folder on the NAS.
2. Stop it normally, play it back and test seeking.
3. Create a short timer with the same destination and check its result after the box and NAS have entered their intended standby states.
4. Then test the number of simultaneous recordings and playbacks you expect to use.
5. Recheck the mount and destination after a normal reboot. Do not unplug the network during an important recording to perform this check.

A recording on a NAS is not an additional backup. RAID and snapshots also do not replace an independent copy of important films. See [Backup and restore](../../wartung/backup-restore/) for receiver settings backups.

**Verification:** Paths and settings logic were checked in the source. The existing CIFS/autofs test share was previously checked by writing and reading a small file. Recording destinations were not changed for this chapter; NAS timer, load and outage tests remain outstanding.
