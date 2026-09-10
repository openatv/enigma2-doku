---
title: "Network test, restart and DHCP renewal"
description: "Network test, restart and DHCP renewal – OpenATV Enigma2"
---

Select the adapter in **Network Overview** and press <kbd>MENU</kbd>. The context menu offers **Adapter Settings**, **Enable/Disable Adapter**, **Network Test**, **Restart Adapter** and **Restart Network**. <kbd>INFO</kbd> displays connection information. **Green enables/disables** the selected adapter or Wi-Fi connection; it is not a generic refresh button.

## Which restart action?

- **Restart Adapter:** Disconnects and reactivates the selected adapter. DHCP rebuilds automatic address configuration; the router may assign a different address.
- **Restart Network:** Affects networking more broadly and may interrupt several adapters/connections.
- **Restart a service:** Affects a component such as Samba or NFS without renewing the adapter IP. See [network services](../dienste/).
- **Restart GUI:** Restarts Enigma2 including OpenWebif; it is not a targeted DHCP renewal.

Perform the action at the TV so you can read the new IP after a disconnect. Finish NAS recordings, streams and transfers first, or choose a suitable maintenance window. Restarting networking cannot repair a powered-off NAS.

## Check the layers

1. **Link:** Adapter enabled, cable connected and switch/router port linked?
2. **Address:** Suitable IP and subnet mask? A self-assigned link-local address does not establish successful router DHCP.
3. **Local network/gateway:** Can you reach the router or another local device? Guest Wi-Fi, VLANs or client isolation can prevent local access.
4. **Internet:** Is an external target reachable? Firewalls may suppress ping; a single failed probe does not prove a complete Internet outage.
5. **DNS:** Can a server name be resolved? IP access may work while download hostnames fail.
6. **Service:** Correct port, running server, matching share and credentials? A reachable host does not establish that SMB or OpenWebif is running.

The native **Network Test** checks several of these steps. Results apply to its targets and the selected adapter. A successful DNS test does not verify NAS write permissions.

## Read-only SSH checks

```sh
ip address show dev eth0
ip route
cat /etc/resolv.conf
ping -c 3 192.168.1.1
nslookup github.com
```

Substitute your adapter and router address. IP output may include MAC and public IPv6 addresses; inspect before sharing it. `/etc/resolv.conf` shows effective resolvers, but configure them through the [DNS menus](../dns/). For NAS failures, then investigate [mount state and autofs](../autofs-fstab/).
