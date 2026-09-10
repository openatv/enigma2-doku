---
title: "DLNA, dynamic DNS, VPN and other services"
description: "DLNA, dynamic DNS, VPN and other services – OpenATV Enigma2"
---

The [service catalogue](../dienste/) installs and starts components. Their actual task often needs further configuration. **Inadyn**, **MiniDLNA**, **uShare**, **NFS**, **Samba** and **ZeroTier** entries appear in the Network menu according to installed packages.

## MiniDLNA and uShare: share media at home

These servers present selected files to compatible UPnP/DLNA clients such as TVs and media apps. They are neither the recording list nor general file managers, and do not guarantee transcoding of unknown codecs.

For **MiniDLNA**, install the service, open **MiniDLNA Settings** and check name, interface and port. Use **Yellow/Shares** to select only the intended media folders, save and start the service or reload its configuration. Fields are built from `/etc/minidlna.conf`.

| MiniDLNA option | Purpose |
| --- | --- |
| Name | Name shown to clients |
| Interface | Adapter through which the service should be reachable |
| Port | Service port; avoid conflicts with other web services |
| Serial number | Service/device identifier, not activation |
| Inotify monitoring | Automatically watch file changes; network file systems may not report them as reliably |
| TiVo support | Additional compatibility for those clients |
| Strict DLNA | Standards/compatibility behaviour; assess against the target client if needed |
| Shares | Media folders actually published |

**uShare** likewise offers name, interface, service port and folders. Additional switches control its own web interface, its own Telnet control access and port, and Xbox/PS3 compatibility. That Telnet control service is different from the receiver's Linux shell. Configuration resides in `/etc/ushare.conf`. Enable only required features.

After setup, open the media server on a client and test a known file. If the list is empty, check paths, mounts and indexing first; if playback fails, check [containers, codecs and players](../../wiedergabe/formate/). A NAS media source must remain accessible during indexing and playback.

## Inadyn: dynamic DNS name

Inadyn updates an existing provider-hosted name when the public address changes. Its dialogue uses `/etc/inadyn.conf`: **username**, **password/token**, **alias**, **update interval in minutes**, **enable system** and **system/provider**. Listed historical provider names do not prove current provider support for that method.

Obtain credentials from the selected provider, verify its supported method, enter the fields, save and start the service. Its log may be `/var/log/inadyn.log`. Dynamic DNS opens no firewall, creates no VPN and cannot bypass a lack of public reachability caused by CGNAT.

## OpenVPN and ZeroTier

**OpenVPN** needs a profile matching your VPN, including certificates/keys and possibly credentials. Installing/starting the service does not provide that profile. After connecting, check the tunnel's routes and DNS: it may otherwise change access to your NAS. The catalogue specifies `/etc/openvpn/openvpn.log`.

**ZeroTier** has a dedicated dialogue. Its **network ID** contains 16 characters; the virtual network's administrator may then need to authorise the receiver. Check join/leave state, addresses, member status and allowed routes. Possessing the network ID alone is not authorisation. Fields: [ZeroTier reference](../../einstellungen/referenz/networkzerotier/).

For access away from home, prefer your managed router/network VPN and use the receiver's internal address. The receiver does not necessarily need to run its own VPN server. OpenWebif's VPN-access option creates no tunnel.

## Other tasks

**Avahi**, **LLMNR** and **wsdd2** support different discovery/name mechanisms; none replaces Samba or NFS. **SATPI** exposes supported tuners through SAT>IP and shares reception resources with other uses. **SABnzbd** has separate download management; configure its storage and access independently. **SMART monitoring** observes supported drives without guaranteeing backup or repair. **Chrony** and **Cron** are explained under [time](../../system/zeit-aufwachen/) and [Linux tasks](../../timer/cron/).

Sources and tested limits: [verification](../quellen/). Not all these optional services were installed or functionally tested for the handbook.
