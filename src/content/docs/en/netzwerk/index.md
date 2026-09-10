---
title: "Network: configure, connect and manage"
description: "Network: configure, connect and manage – OpenATV Enigma2"
---

**Menu → Setup → Network** is the central entry point. Adapters, name resolution, file shares and server services each perform different jobs.

| Task | Start here |
| --- | --- |
| Connect the receiver by cable | [LAN with DHCP](./lan/) |
| Set a fixed address and adapter-specific DNS | [Manual IP](./manuelle-ip/) |
| Resolve names and choose DNS servers | [DNS and DNSCrypt](./dns/) |
| Test connectivity or renew DHCP | [Network test and restart](./neustart-test/) |
| Connect Wi-Fi | [Wi-Fi: adapter, multiple profiles and options](./wlan/) |
| Install, start and enable services at boot | [All 22 network services](./dienste/) |
| Access a NAS/Windows share from the receiver | [Shares](./freigaben/), [NFS](./nfs/), [SMB/CIFS](./smb-cifs/), [Windows 11](./windows11/) |
| Share receiver files with other devices | [Samba server](./samba-server/), [NFS server](./nfs-server/) |
| Transfer files and set the root password | [SSH, SFTP, FTP and Telnet](./fernzugriff/) |
| Control the receiver in a browser | [OpenWebif tour](./openwebif/) |
| Use DLNA, dynamic DNS or a VPN | [Additional services and configuration](./zusatzdienste/) |

**Client** means the receiver accesses another device. **Server** means other devices access the receiver. A NAS mount therefore does not require an NFS or Samba server on the receiver. autofs mounts remote storage on demand; it does not replace the NAS server.

An active adapter does not guarantee Internet access. Check the physical link, IP address, gateway, DNS and target service in that order. An offline NAS can leave file access and Enigma2 menus waiting; see [autofs, fstab and the spinner](./autofs-fstab/).

This handbook is static and can be hosted on GitHub Pages or Apache. **OpenWebif runs on your receiver**. The public documentation website does not establish access to your receiver.
