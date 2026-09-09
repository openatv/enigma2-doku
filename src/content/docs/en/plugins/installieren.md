---
title: Install and manage plugins
description: Find, install, open and remove openATV extensions using the plugin browser and software management.
---

Plugins add functions to Enigma2. Installing a plugin makes it available; it may then provide its own settings or menu entry.

## Before you start

You need a working internet connection and sufficient free storage. The package feed must match the installed image.

## Install from the plugin browser

**Menu → Plugin Browser**

1. Open the plugin browser.
2. Choose the labelled **Install Plugins** action. In normal browsing mode it is assigned to the green button.
3. Wait for the package list to load.
4. Open the appropriate category and select a plugin. Read its name and description.
5. Start installation using the offered action and confirm the displayed selection.
6. Wait for completion and perform a GUI restart if requested.
7. Open the plugin browser again and start the plugin if it provides an entry there.

Colour buttons can perform different actions in edit mode. Always follow their current labels.

## Install, update or remove

Another entry point is **Menu → Setup → Software Management → Manage Plugins**. It lets you manage individual packages. Remove a package only when you no longer need it and read any dependency messages.

**Software Update** updates installed software through a separate workflow. It is different from installing one additional plugin.

## Where is the installed plugin?

Not every extension appears in the plugin browser. Some add entries to existing menus or provide content such as skins and channel lists. Check the package description and its guide.

| Problem | Next step |
| --- | --- |
| Package list does not load | [Check networking and DNS](../../netzwerk/lan/) |
| Package fails to install | Read the error message and check free storage |
| Plugin missing after installation | Check the installation result and any requested GUI restart |
| You have a local package file | Use local extension installation in Software Management; the package must match the image |

Next: [Skins](../../skins/) · [Add-ons](../../addons/)

Source: [Plugin browser and package management](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/lib/python/Screens/PluginBrowser.py).
