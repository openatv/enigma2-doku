---
title: File systems and network protocols
description: Compare ext4, NTFS, exFAT and FAT32 for disks and USB devices; distinguish NFS and SMB access from the NAS's own file system.
---

A **file system** organises files on a partition. A **network protocol** carries file operations between devices. **ext4 and NTFS** are file systems; **NFS and SMB/CIFS** are network protocols. A NAS may use Btrfs internally and offer the same folder through both SMB and NFS.

## Recording disk, data stick or installation stick?

| Purpose | Useful starting point |
| --- | --- |
| HDD or SSD permanently connected to the receiver for recordings | **ext4**, if the image supports it for the device. It provides Linux permissions, large files and hardlinks. |
| USB storage for exchanging files with Windows | NTFS or exFAT after checking read/write support on both devices; see the differences below. |
| USB stick for installing an image | The format required by the manufacturer for that flashing procedure, often FAT32. This is a different purpose from recording storage. |
| Recording folder on a NAS | Keep the existing NAS file system and configure a suitable SMB or NFS share. |

Available formats and drivers depend on the image and kernel. Recognising a readable disk does not establish write access or time shift suitability. The receiver's [Device Manager](../formatieren-pruefen/) shows which formatting choices it offers. **Formatting erases data**; switching from SMB to NFS does not require formatting the NAS.

## Common formats

| File system | Features | Meaning for the receiver |
| --- | --- | --- |
| **ext4** | Linux permissions, hardlinks, large files and a file system metadata journal. | A good foundation for a permanent local recording disk. Windows does not mount ext4 in Explorer like an ordinary NTFS disk; accessing the receiver's network share avoids that local format issue. |
| **ext3 / ext2** | Older Linux file systems. ext3 has a journal; ext2 does not. | An existing readable disk does not need reformatting solely because its format is older. Back up and check support before making changes. |
| **NTFS** | Windows file system with large files, journaling, permissions and hardlinks. | Suitable for large exchange files when the Linux driver supports the required writes. Windows permissions and their Linux mapping are not simply identical. |
| **exFAT** | Large files and widespread exchange support; no journal or hardlinks. | Useful for supported data sticks. The lack of hardlinks is an obstacle for the inspected OpenATV time shift path. |
| **FAT32** | Broad device support; each file is limited to **4 GiB minus 1 byte**. No journal or hardlinks. | Long recordings may reach the file limit. FAT32 may nevertheless be the correct choice for an installation stick. |

Microsoft documents [file sizes, journaling and hardlink support](https://learn.microsoft.com/en-us/windows/win32/fileio/filesystem-functionality-comparison). A journal helps recover file system structure after an interruption. It does not guarantee the full contents of the recording being written or provide a backup against failure or deletion. The usual ext4 mode primarily journals metadata: [ext4 journal](https://docs.kernel.org/filesystems/ext4/journal.html).

### Why 4 GiB can be small for recordings

The FAT32 limit applies **per file**, not to total share size or free space. At an illustrative 20 Mbit/s, 4 GiB is reached after roughly 29 minutes. Actual channel bitrates vary; do not assume every recording function will split files appropriately. Use a suitable file system without this limit for longer recordings.

## XFS, Btrfs and NAS features

**XFS** is a Linux file system with journaling and support for large files and file systems. **Btrfs** offers features including copy-on-write, checksums and snapshots. The NAS software determines which features are exposed and how they are managed. These are not instructions to rebuild a working NAS for OpenATV. Sources: [XFS](https://docs.kernel.org/admin-guide/xfs.html), [Btrfs](https://btrfs.readthedocs.io/en/latest/Introduction.html).

A snapshot preserves an earlier state but may remain on the same storage. Depending on the arrangement, RAID can tolerate a disk failure; it does not generally protect against deletion, malware or loss of the entire NAS. Important data needs an independent backup.

## What does OpenATV see over the network?

The receiver sees an **NFS or CIFS mount**, rather than directly mounting the NAS's internal file system. A Windows PC therefore does not need an ext4 or Btrfs driver to open that NAS's SMB share. Conversely, a modern SMB dialect cannot remove the file size limit of an underlying FAT32 disk.

Available operations depend on the complete connection: server file system, share configuration, protocol and client. Even if the NAS file system supports hardlinks, they must work through the share. That actual access is what matters for [time shift and NAS recording](../nas-aufnahmen/).

## Permissions, mount points and file system checks

- **`rw` does not mean “anyone can write”:** SMB account permissions, NFS UID/GID mapping or local file permissions still apply. See [SMB](../../netzwerk/smb-cifs/) and [NFS](../../netzwerk/nfs/).
- **A mount point is a directory name:** `/media/hdd` does not tell you whether the underlying storage is ext4, NTFS or a network share.
- **UUIDs and labels identify local file systems:** Recheck permanent [mount point assignments](../laufwerke/) after reformatting.
- **Repair belongs on the storage owner:** Check a local file system using the appropriate Device Manager after stopping access. Check NAS storage through its own administration tools, not by running local `fsck` against `/media/autofs/...`.

**Verification:** These principles were checked against the linked documentation and OpenATV's path checks. ext4 on the demonstration USB stick was previously tested in practice. No disk was reformatted for this chapter; this does not establish support for every format on every receiver.
