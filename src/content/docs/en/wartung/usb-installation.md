---
title: Prepare a USB stick for a new installation
description: Choose an OpenATV image, prepare USB media, handle ZIP files correctly and decide between a clean setup and restoring settings.
---

A new installation writes a complete image. If Enigma2 still runs, [Flash Online](../flash-online/) is often more convenient. USB is also used for first installations and receivers that no longer boot. **The actual procedure for starting the flash is device specific.**

## Decide before downloading

| Goal | Preparation |
| --- | --- |
| Keep your existing setup | Make a fresh [settings backup](../backup-restore/) and copy it to the PC. Plan [AutoRestore](../autorestore/), including plugins. |
| Investigate a fault with a fresh image | Keep the backup, but start without restoring it automatically. Recover only the data you need later. |
| Retain a working image | Check another suitable [MultiBoot slot](../multiboot/). A USB or recovery procedure is not automatically limited to that slot. |

Record the image version, reception connection, network details and required extensions. Recordings and NAS data need their own backup strategy; a settings archive does not include them.

## Choose the right image

Use the [official downloads](https://images.mynonpublic.com/openatv/index.php?v=current) and select the **manufacturer, exact model and image type**. Before preparing the stick, read the guide in the forum's [manufacturer/model section](https://www.opena.tv/viewforum.php?f=454).

A Flash Online ZIP, a USB package and a recovery package may serve different purposes. **Depending on the boot system, recovery may also change partitioning and other slots.** To retain the current image, use only a procedure that explicitly supports another destination slot. Do not mix bootloader files or files from different models or builds.

## Prepare the USB stick

1. Identify the intended stick unambiguously. Copy any files you still need to the PC. Formatting erases data on the selected medium.
2. Check the model guide for its required filesystem and, where relevant, partition scheme. Many USB flash procedures use **FAT32**, but that is not a rule for every device. An **ext4** recording drive is not automatically suitable as flash media.
3. If FAT32 is required and Windows offers it, open **This PC → right-click the USB drive → Format → FAT32**. Check its drive letter and capacity before choosing **Start**. If FAT32 is unavailable, do not simply substitute NTFS or exFAT; use suitable smaller media or the method described in the model guide.
4. Download the complete image to the PC and open the archive. If a checksum is provided, compare it with the downloaded file.
5. Transfer the files according to the distinction below, then eject the stick safely.

### Extract the ZIP or copy it unchanged?

| Procedure required by the guide | What to do with the download |
| --- | --- |
| Classic USB flashing using a directory/file structure | Extract the ZIP and copy the **required structure** into the stick's root directory. Avoid adding an extra enclosing directory named after the ZIP. |
| Flash Online/local from running Enigma2 | Normally keep the matching ZIP **unextracted** on accessible media. The flash manager extracts it. See [local images](../flash-online/#local-images-and-image-backups). |
| Boot menu, recovery or a special raw-image procedure | Follow the model guide exactly. Some methods expect an archive, others particular files or differently prepared media. |

An OpenATV ZIP is not automatically a PC installation ISO. Do not write it raw to a stick with an arbitrary ISO tool. Only rename files such as `force` or `noforce` when the guide for that exact model requires it.

For a classic procedure, check in the file manager that the expected image directories and files are at the **top level**. Do not leave old flash files for other devices or builds alongside them.

## Flash the receiver

Finish recordings and timeshift. Follow the model guide: shut down, use the specified USB port, hold a power-on button if required and confirm the flash message or boot menu. There is no universal OpenATV button sequence for this.

Check any destination choice again. While the image is being written, wait for an explicit completion message and keep power connected. Remove the stick or restart when instructed. Otherwise the receiver may offer to install the image again.

## First start afterwards

[Restoration](../autorestore/) can begin during the first boot when suitable backup media and preparation are present. **Copying an arbitrary backup to a USB stick does not by itself guarantee FastRestore.** Preserve the backup directory and restore selection as explained in that guide.

For a clean installation, decline restoration and follow [First setup](../../erste-schritte/ersteinrichtung/). Backup media containing previous automatic-restore markers can instead start a restore before the wizard appears; check their preparation first.

Then verify the version, reception, channel lists, network, root password, HDD/NAS mounts and any plugins. You do not need to format the existing HDD or NAS data for these checks.

## If the stick is not detected

Check the exact model/image type, archive completeness, directory structure, filesystem, required USB port and power-on sequence. Another suitable stick may help, but cannot replace correct preparation. Include the exact filename and displayed message in a [support request](../../hilfe/downloads-modelle/).

**Verification:** The download entry point and manufacturer forum section were checked. This shared guide does not claim a USB flashing test on every device. Exact power-on and recovery procedures remain in the model guides.
