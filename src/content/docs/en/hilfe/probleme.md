---
title: Common questions
description: Find the right checks and guides when a setting is missing or networking and EPG do not work as expected.
---

## Where do I change this?

Use the search above or the [settings directory](../../einstellungen/). Try related terms: **NAS**, **share**, **SMB**, **CIFS** and **mount** all lead to network storage information. Technical configuration keys are searchable as well.

## Why is a menu item missing?

Check the [settings mode](../../erste-schritte/bedienung/). Some entries appear only in expert mode, after enabling a related feature or inside a particular plugin. A skin can also change the layout. Follow menu labels.

## Why does “settings” mean two different things?

It can mean system configuration or prepared channel lists. Read a package's description before installing it. [Understand settings and bouquets](../../settings/senderlisten/).

## The NAS works but plugin downloads fail

A local NAS may be reachable even without working internet access. Check the gateway and DNS. [LAN and IP settings](../../netzwerk/lan/).

## A share is saved but not mounted

With **autofs**, opening the local directory triggers mounting. Check that access first. [Mount a network share](../../netzwerk/freigaben/).

## The programme guide is empty

Check reception, the available programme data and any additional EPG source. Switching EPG views does not create missing data. [Set up EPG](../../epg/grundlagen/).

## The screen looks different from the guide

A skin changes presentation. This handbook explains the shared interface using menu labels and actions. [Understand skins](../../skins/).

## Where are the logs and where should I report a fault?

The default Enigma2 log directory is **`/home/root/logs/`**. The early-restore log is separate at **`/home/root/FastRestore.log`**. [Enable and find logs](../logs-diagnose/) also covers alternative destinations and downloading files. [Report a problem](../fehler-melden/) links the relevant forum/GitHub destinations and provides a report template.

## How do I find the right new image?

Use [Downloads and models](../downloads-modelle/) for the official downloads and model-specific flashing instructions. [Software update or Flash Online?](../../wartung/software-update/), [USB installation](../../wartung/usb-installation/) and [AutoRestore](../../wartung/autorestore/) explain selection, preparation and restoring your setup.

## How do I set a password or restart Enigma2 from a console?

[SSH, files and the root password](../../netzwerk/fernzugriff/) explains the network menu, `passwd`, `init 4` / `init 3` and SFTP/FTP. It distinguishes a GUI restart from rebooting the whole receiver.

## What has been checked?

The foundation guides were written against the OpenATV 8.0 source snapshot. The directory imports existing help text and marks unmapped menu locations. This does not imply that every workflow has been tested on a running installation. Articles link to their source snapshot.
