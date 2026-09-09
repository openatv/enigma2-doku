---
title: Mount a NAS or network share
description: Mount network storage in openATV. Understand SMB, CIFS, NFS, autofs and local paths.
---

A network share makes a folder on a NAS or server available in openATV. **Mounting** connects the remote share to a local directory, allowing applications to access it much like an attached storage device.

## What you need

- A working [network connection](../lan/).
- A share that has already been configured on the NAS or server.
- The server name or IP address, share name or NFS export path, and suitable access permissions.
- For SMB, a NAS username and password if required.

The server must allow access to the share. Adding it in openATV does not create a folder or grant permissions on the NAS.

## Menu location

**Menu → Setup → Network → Network Mounts Overview**

Choose **Browse** to look for shares. If you know the server details, you can also add a share manually.

## Add an SMB share manually

1. Open the network mounts overview and press <kbd>MENU</kbd>.
2. Choose **Add Mount Manually**.
3. Enter your share details. `nas` and `Recordings` below are examples only.

| Field | Example and meaning |
| --- | --- |
| Enabled | Yes – use this definition |
| Protocol | SMB / CIFS – these names refer to Windows-style network shares here |
| Server | `nas` or the actual NAS IP address |
| Remote path | `Recordings` – the share name on the NAS; keep server and share in separate fields |
| Local share | `nas-recordings` – the local mount directory name |
| Mount mode | Mount on first access (*autofs*) for the initial setup |
| Username / Password | The NAS user's credentials |
| SMB version | SMB3 if supported by the server; the inspected dialog uses it as the default for new shares |
| Access mode | Read/Write for recording; Read-Only is enough for playing existing files |
| Use as HDD replacement | Leave disabled for this first example |

4. Save the definition using the labelled save action.
5. Open `/media/net/nas-recordings` in the file selector of the application where you want to use the share. With **autofs**, accessing the directory triggers the mount.
6. Check that the share's files are visible. To record to it, also select the intended folder in recording settings and test a short recording.

## SMB or NFS?

SMB normally uses a share name and a user account. For NFS, enter the export path provided by the server. The NFS server must allow the box to access it; the SMB login fields do not control that permission. Use the export path provided by the server's administration interface.

## Understand the main options

- **autofs:** Mounts on the first file access. A share that does not appear actively mounted beforehand is not necessarily broken.
- **fstab:** Mounts at boot time, when the server must be reachable as required.
- **HDD replacement:** Uses `/media/hdd` instead of a separate path below `/media/net`. This affects applications using that central storage location. Enable it deliberately only after verifying reliable access.
- **Optional arguments:** Additional mount parameters. Leave empty initially unless there is a specific requirement.

## Troubleshooting

| Problem | Check first |
| --- | --- |
| Server cannot be found | Server address and network; try its known IP address if name resolution is failing |
| Access denied | Username, password and server-side share permissions |
| Files are visible but recording fails | Write permissions, free space and the selected recording directory |
| No manual mount action | For autofs, open the local directory instead |

[All network mount options](../../einstellungen/referenz/networkmounts/) · [Common questions](../../hilfe/probleme/)

Source: [Mount dialog and new-share defaults](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/lib/python/Screens/NetworkMounts.py). This procedure is based on source inspection.
