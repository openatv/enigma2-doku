---
title: "Netzwerk: einrichten, verbinden und verwalten"
description: "Netzwerk: einrichten, verbinden und verwalten – OpenATV Enigma2"
---

**Menü → Einstellungen → Netzwerk** ist die zentrale Anlaufstelle. Adapter, Namensauflösung, Dateifreigaben und Serverdienste haben jeweils eine eigene Aufgabe.

| Aufgabe | Einstieg |
| --- | --- |
| Box per Kabel verbinden | [LAN mit DHCP](./lan/) |
| Feste IP und eigene Adapter-DNS festlegen | [Manuelle IP](./manuelle-ip/) |
| Namen auflösen, DNS-Anbieter auswählen | [DNS und DNSCrypt](./dns/) |
| Verbindung testen oder DHCP neu beziehen | [Netzwerktest und Neustart](./neustart-test/) |
| WLAN anschließen | [WLAN: Adapter, Profile und Optionen](./wlan/) |
| Dienste installieren, starten und beim Booten aktivieren | [Alle 22 Netzwerkdienste](./dienste/) |
| NAS/Windows-Freigabe auf der Box nutzen | [Freigaben](./freigaben/), [NFS](./nfs/), [SMB/CIFS](./smb-cifs/), [Windows 11](./windows11/) |
| Dateien der Box für andere Geräte anbieten | [Samba-Server](./samba-server/), [NFS-Server](./nfs-server/) |
| Dateien übertragen, root-Passwort setzen | [SSH, SFTP, FTP und Telnet](./fernzugriff/) |
| Box im Browser bedienen | [OpenWebif-Rundgang](./openwebif/) |
| DLNA, DynDNS oder VPN einsetzen | [Weitere Dienste und Konfiguration](./zusatzdienste/) |

**Client** bedeutet: Die Box greift auf ein anderes Gerät zu. **Server** bedeutet: Andere Geräte greifen auf die Box zu. Für ein NAS-Mount muss daher kein NFS- oder Samba-Server auf der Box laufen. autofs kann einen entfernten Datenträger bei Bedarf einhängen; es ersetzt nicht den NAS-Server.

Ein aktiver Netzwerkadapter garantiert noch keinen Internetzugang. Kabelverbindung, IP-Adresse, Gateway, DNS und erreichbarer Dienst werden nacheinander geprüft. Ist ein NAS offline, können Dateizugriffe und damit Enigma2-Menüs warten; siehe [autofs, fstab und Spinner](./autofs-fstab/).

Das Web-Handbuch selbst ist statisch und kann auf GitHub Pages oder Apache bereitgestellt werden. **OpenWebif läuft dagegen auf deiner Box**. Die öffentliche Dokumentationsseite stellt keinen Zugang zu deinem Receiver her.
