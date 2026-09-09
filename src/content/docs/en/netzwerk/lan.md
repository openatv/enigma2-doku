---
title: LAN and IP settings
description: Connect openATV with a network cable and understand DHCP, IP addresses, gateways and DNS.
---

A network connection is used for plugin downloads, network shares and access through OpenWebif. For a first setup, let the router provide the addresses automatically.

## Menu location

**Menu → Setup → Network → Network Overview**

Select the wired adapter and press <kbd>OK</kbd> to open **Network Adapter Settings**.

## Connect using DHCP

1. Connect a network cable from the box to the router or a connected switch.
2. Open the adapter settings and enable the adapter.
3. Enable **Use DHCP**. Basic IPv4 network settings will be obtained automatically.
4. Leave custom DNS settings disabled initially unless your network requires them.
5. Save using the action labelled in the dialog.
6. Return to the network overview and check for a connection and an IP address. Press <kbd>INFO</kbd> for further connection details.

## What do the addresses mean?

| Setting | Purpose |
| --- | --- |
| DHCP | Obtains the IP address and other network settings automatically |
| IP address | Identifies the box on the local network |
| Subnet mask | Defines which IPv4 addresses are in the local network |
| Default gateway | Provides access to other networks, usually through the router |
| DNS | Resolves a name, such as a download server, to an IP address |

## Keep a fixed address

A DHCP reservation in the router can provide a consistent address while leaving DHCP enabled on the box. Alternatively, disable DHCP on the adapter and enter the IP address, subnet mask and gateway yourself. Choose an address that belongs to your network and is not already in use.

Global DNS settings are under **Menu → Setup → Network → DNS Settings**. If you enable a DNS override for an adapter, it uses its own values.

## Check the result and narrow down problems

- **No IP address:** Check the cable, router port, adapter activation and DHCP.
- **Local devices work but downloads fail:** Check the gateway and DNS. Reaching a NAS does not by itself confirm internet access.
- **Repeated disconnections:** Check the cable and connection before changing specialist options such as link speed.

Next: [Wi-Fi](../wlan/) · [NAS and shares](../freigaben/) · [All adapter options](../../einstellungen/referenz/networkadapter/)

Source: [openATV network settings](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/lib/python/Screens/NetworkSetup.py).
