---
title: Connect Wi-Fi
description: Select a Wi-Fi network, enter its key and check the connection in OpenATV. Understand SSIDs, encryption and saved networks.
---

Wi-Fi connects OpenATV to your router without a network cable. A recognised Wi-Fi adapter must be available in the network overview.

## Menu location

**Menu → Setup → Network → Network Overview**

## Add a network

1. Select the Wi-Fi adapter. If needed, open its settings with <kbd>OK</kbd> and enable it.
2. Press <kbd>MENU</kbd> and choose **Scan Wi-Fi Networks** from the context menu.
3. Select your network from the results. Check its exact name, the **SSID**.
4. Check the offered encryption and enter the router's Wi-Fi key. The key is case-sensitive.
5. Save the profile and follow the connection dialog. For a previously saved profile, choose the labelled **Connect** action.
6. Check the network overview: the network should be connected and the adapter should have an IP address. DHCP is suitable for the initial address configuration.

## Main terms

| Term | Meaning |
| --- | --- |
| SSID | The Wi-Fi network name |
| Encryption | Must match the router configuration, for example WPA2 or WPA2/WPA3 |
| Key | The Wi-Fi password, not the router administration password |
| Saved network | A profile containing the details needed to connect again |
| Hidden network | A network whose name is not shown in a normal scan |

Use the offered action for adding a saved Wi-Fi network to enter a hidden network. You will need its exact name and encryption settings.

## If connecting fails

- **No Wi-Fi adapter:** A connection cannot be configured without a recognised adapter. Use LAN initially; adapter-specific details will belong in the appendices.
- **Network missing:** Scan again and check that Wi-Fi is enabled on the router.
- **Authentication fails:** Check the key and encryption setting.
- **Connected without internet access:** [Check the IP address, gateway and DNS](../lan/).

Source: [Network overview and Wi-Fi dialogs](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/lib/python/Screens/NetworkSetup.py). [Look up individual Wi-Fi options](../../einstellungen/referenz/networkwifi/).
