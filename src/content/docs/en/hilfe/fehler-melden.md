---
title: Report a problem in the forum or on GitHub
description: Choose the right support channel, distinguish Enigma2 from OE-Alliance issues and write a reproducible bug report with useful logs.
---

A useful bug report states **what you did, what you expected and what actually happened**. Add the precise image version and relevant log so others can investigate without guessing your setup.

## Where should I ask?

| Destination | Suitable topics |
| --- | --- |
| [OpenATV forum](https://www.opena.tv/) | Setup, usage, faults with an unknown cause and help from other users. Start here when unsure. |
| [Manufacturers and models in the forum](https://www.opena.tv/viewforum.php?f=454) | Model-specific flashing instructions, connections, boot/recovery procedures and hardware-specific problems. |
| [OpenATV Enigma2 Issues](https://github.com/openatv/enigma2/issues) | Reproducible faults in the Enigma2 interface and its functions, such as a crash when opening a menu or saving a setting. |
| [OE-Alliance Core Issues](https://github.com/oe-alliance/oe-alliance-core/issues) | Shared image/build infrastructure: recipes, packages, dependencies and integration of system or driver components. A driver problem is not automatically fixable in this repository. |
| The relevant plugin/skin project or support topic | Problems specific to an extension or third-party skin. Its information screen or installation source often links to its project. |

A black screen alone does not identify the responsible project. An error in an Enigma2 log can originate in a plugin or missing system library. Describe the observation first; contributors can help establish ownership.

**GitHub access:** Posting requires a signed-in GitHub account and permission. Some projects restrict new issues. If **New issue** is unavailable or creation is restricted, use the forum and link the relevant project. Follow the destination project's templates and rules before the general template below.

## Check before reporting

1. Search the forum or **open and closed issues** for the error text, menu, plugin or package. Add useful evidence to an existing matching report instead of creating a duplicate.
2. Record the model, exact OpenATV version, image/build date and Enigma2 version from the information screens. “Latest image” is insufficient because downloads change over time.
3. Describe the installation: fresh flash or software update, additional plugins, skin, and whether AutoRestore restored settings or plugins.
4. Check repeatability. Change one thing at a time. For a suspected skin/plugin fault, comparison with the default skin or without that extension may help.
5. Collect the relevant [debug or crash log](../logs-diagnose/) and note the incident time. For restore problems, also check **`/home/root/FastRestore.log`**.

A clean comparison image can help with persistent problems, but is not the required first step for every report. With supported [MultiBoot](../../wartung/multiboot/), use another suitable slot and keep the running image. [Flash Online](../../wartung/flash-online/) explains target selection.

## Create the report

Use a title naming the function and trigger, for example **“Channel list: GUI crash after MENU with layout …”**. A title such as “Doesn't work” gives little context.

Create a topic in the appropriate forum section or an issue in the relevant GitHub project, when available. Keep each report focused on one problem. English is helpful for GitHub collaboration; use this template or the project's own issue form.

```text
Title: [function] – [fault] after [trigger]

Receiver model and hardware variant:
OpenATV version and image/build date:
Enigma2 version/revision:
Installation: fresh / software update / Flash Online
Settings/plugins restored: no / yes, which selection?
Skin and relevant plugins with versions:

Steps to reproduce:
1.
2.
3.

Expected result:
Actual result / exact error message:
Frequency: always / sometimes / once
Incident time and time zone:
Last known working version, if known:

Checks already performed, with each result:
Attached logs and their relevant timestamps:
Link to an existing forum topic or issue:
```

Although this handbook is model neutral, a bug report needs the actual model: tuners, drivers, storage and boot procedures can affect the cause. Include reception type and tuner setup for reception faults, or connection type and mount protocol for network faults. Do not include public credentials.

## Which attachments help?

- **GUI crash:** Crash log including the complete traceback, plus the preceding debug log where available.
- **Freeze or incorrect behaviour:** Debug log with a short reproduction sequence and timestamp. A crash log may not exist.
- **AutoRestore:** `FastRestore.log`, missing package name and selected restore mode/options.
- **Update or installation failure:** Exact package and error text, with relevant output; a screenshot can supplement the dialog.
- **Display problem:** Screenshot, skin, resolution and affected setting. Include logs for technical faults too.

Attach text logs as files or ZIP archives if required by the portal. Do not blindly publish entire backups, `/etc/enigma2/settings`, `/etc/shadow` or private network files. Inspect a copy for passwords, tokens and personal data, keeping the original locally. See [log paths and file transfer](../logs-diagnose/#where-are-the-logs-on-the-receiver) for where to collect files.

## Follow up

Add requested details to the same topic. If moving between forum and GitHub, cross-link them so the existing investigation remains visible. Test a proposed fix and report the image version and result. Mark the topic solved or close your issue when appropriate under the project's rules.

For choosing a download and model-specific installation guidance, see [Downloads, supported models and support](../downloads-modelle/).
