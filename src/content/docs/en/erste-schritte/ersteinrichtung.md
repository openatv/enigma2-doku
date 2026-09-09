---
title: First setup
description: Complete the first start of openATV – language, network, reception and channels, step by step.
---

On first start, openATV guides you through its basic configuration. You do not need to understand every setting yet. Start with a readable interface, a working connection and a usable channel list.

## Before you start

- Have your remote control ready and select the connected input on your television.
- For internet access, use a network cable to your router or have your Wi-Fi credentials ready.
- Use the reception details for your own installation. Do not copy unknown values from someone else's setup.

This guide starts with an image that is already running. Installing or flashing the image is a separate task.

## Work through the wizard

1. **Check language and picture.** Choose your language and follow the offered video setup steps. Confirm a display setting only when the picture is clearly visible.
2. **Start basic setup.** At the welcome screen, choose to use the wizard. Select items with <kbd>↑</kbd>/<kbd>↓</kbd>, change offered values with <kbd>←</kbd>/<kbd>→</kbd> and press <kbd>OK</kbd> to continue.
3. **Connect the network.** Select an adapter. Automatic address configuration through DHCP is suitable for a first setup. For Wi-Fi, also select the network and enter its key. Check the resulting connection. You can configure networking later if needed.
4. **Handle any additional steps.** The wizard may offer storage or installation dialogs. Read each prompt carefully; formatting erases data on the selected storage device.
5. **Set up reception and channels.** Use the configuration required by your installation. The offered steps may let you install a channel list or run a channel scan.
6. **Finish the wizard.** Follow the final message. If a restart is requested, allow it to finish.

The exact sequence can vary. You do not need to run the wizard again to change a single setting later.

## Check the result

- Are menus and help text in the selected language?
- Can you open the channel list and select an available channel?
- Do you have a picture and sound?
- Does the network overview show a connection and an IP address?

## Next steps

- [Controls and menus](../bedienung/)
- [Tuners and channel scanning](../../tuner/konfiguration/)
- [Configure LAN](../../netzwerk/lan/) or [connect Wi-Fi](../../netzwerk/wlan/)
- [Mount a network share](../../netzwerk/freigaben/)

Source: [openATV first-run wizard](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/data/startwizard.xml). This first guide was checked against source code; a complete wizard screenshot series will be added separately.
