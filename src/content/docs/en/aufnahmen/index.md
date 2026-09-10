---
title: MovieSelection, EMC or file manager?
description: Understand the recording list, what EMC adds and when to use FileCommander.
---

**MovieSelection is OpenATV's built-in recording list. EnhancedMovieCenter (EMC) adds its own media library. FileCommander is a general file manager.** They can access HDD, USB and mounted NAS storage, but their purposes and settings differ.

| Task | MovieSelection | EMC | FileCommander |
| --- | --- | --- | --- |
| Select and play recordings | Built in | Dedicated library and playback interface | Opens media files; file management remains its main purpose |
| Programme titles, descriptions, resume and watched status | Integrated into the recording list | Extensive display and playback options | Displays files, directories and file information |
| Sort, browse, copy, move and delete | List menu and configurable buttons | EMC menu, multiple selection and buttons | Two columns: active source and opposite destination |
| Covers, previews and playlists | Depends on skin/extensions | Dedicated cover, preview and playlist options | Image viewer and file actions; not an EMC library |
| Trash | Separate settings, usually `.Trash` | Separate settings and trash path | File deletion does not automatically use either library's trash |
| Text files, scripts, archives and permissions | Not a general system manager | Media oriented | Designed for these tasks; some tools require installation |

## Which list does PVR/VIDEO open?

Without a plugin overriding it, the recordings button opens MovieSelection. EMC can replace that entry point when Enigma2 starts. Open **Plugins → Enhanced Movie Center (Setup)**: **Disable EMC** and **Start EMC with** control whether and which button EMC takes over. Save changes and accept the requested **GUI/Enigma2 restart**.

With **Disable EMC = Yes**, the EMC button override is no longer installed after that restart. The normal recordings button opens MovieSelection again, provided another extension or [custom key assignment](../erste-schritte/farbtasten-langdruck/) does not replace it. Uninstalling EMC is unnecessary. If the option is hidden at the simple setup level, select **Intermediate** or **Expert**.

**Switching lists does not move recordings or transfer one list's settings to the other.** If movies appear to be missing, compare their starting folders, filters, sorting and [network mount](../netzwerk/freigaben/) availability. MovieSelection and EMC can read the same recordings and sidecar information; different presentation does not necessarily mean different files.

In the checked version, disabling EMC **does not disable all its background functions**: session startup initializes EMC independently of the button override. Review [automatic trash cleanup and daily actions](../addons/emc-papierkorb/) as well if you stop using EMC.

## Choose a guide

- [Using and configuring MovieSelection](./movieselection/)
- [Installing, opening and using EMC](../addons/emc/)
- [EMC library, covers and appearance](../addons/emc-bibliothek/)
- [EMC playback and languages](../addons/emc-wiedergabe/)
- [EMC trash, NAS and background actions](../addons/emc-papierkorb/)
- [Search all main EMC setup options](../addons/emc-optionen/)
- [Using FileCommander](../addons/filecommander/)

Source checks: [MovieSelection](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/lib/python/Screens/MovieSelection.py), [EMC entry points and session startup](https://github.com/oe-mirrors/EnhancedMovieCenter/blob/fc7fd6181e/src/plugin.py), [FileCommander](https://github.com/openatv/enigma2/blob/c446c39a38/lib/python/Plugins/Extensions/FileCommander/plugin.py).
