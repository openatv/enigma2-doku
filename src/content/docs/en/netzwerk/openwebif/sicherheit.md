---
title: "Secure and troubleshoot OpenWebif access"
description: "Secure and troubleshoot OpenWebif access – OpenATV Enigma2"
---

OpenWebif can remotely control the receiver and change actual configuration, timers and files. Use suitable access protection even on your home network.

## Password and authentication

1. Set a root password through **Menu → Setup → Network → Password Settings**, or run `passwd` over SSH. See the [remote-access guide](../../fernzugriff/).
2. Enable **HTTP Authentication** in OpenWebif. If HTTPS is enabled, check its **separate authentication** too.
3. Use a fresh private browser window to verify that unauthenticated access is rejected. An already authenticated session is not a suitable test.
4. If you stream, configure **Authentication for streaming** and test your actual player. The web and streaming ports are separate access paths.

The root password is neither the Enigma2 parental PIN nor automatically every plugin's password. Samba, NAS access, DNSCrypt monitoring and other services can use separate credentials. The inspected **Disable remote access for root** code exempts private/local networks; it is not a blanket root restriction.

## HTTPS and certificates

HTTPS encrypts the web connection. A valid certificate must match the requested name, and the receiver needs correct time. This Webif version can use custom PEM files at **`/etc/enigma2/cert.pem`** and **`/etc/enigma2/key.pem`**. Never publish the private key. **Client certificates** are an additional, separately configured requirement, distinct from the server certificate. Source: [OpenWebif certificates](https://github.com/oe-alliance/OpenWebif#custom-ssl-certificate).

HTTPS for OpenWebif does not automatically encrypt FTP, Telnet or every stream. HTTP Basic authentication alone does not encrypt transport. For access away from home, use a managed **VPN** rather than broad router port forwards for Webif, SSH, FTP and streams. A VPN option in Webif does not replace a VPN service.

## Parental control

**Enable Parental Control** applies [Enigma2 protection](../../../entschluesselung/jugendschutz/) to supported Webif functions. Test restricted channels, recording directories and the players you use. A PIN does not automatically restrict Samba/NFS file access. Remote control, the terminal and additional plugins also provide powerful access paths.

## Connection or display problems

| Symptom | Check |
| --- | --- |
| Page unreachable | Current IP, port, protocol, adapter, running Enigma2 and enabled OpenWebif? Is the receiver in deep standby? |
| IP works, hostname fails | DNS/mDNS and hostname; [DNS guide](../../dns/) |
| 401 / repeated login | Account/password and authentication on the chosen HTTP/HTTPS connection. Start a fresh browser session. |
| 403 / access denied | Network scope, unauthenticated access, VPN option and root restrictions. Do not simply disable all protection. |
| Certificate warning | Name, trust chain and time; do not permanently disable certificate checks. |
| Webif works, stream fails | Stream port/authentication, tuner allocation, format and player. |
| Controls missing after an update | Fully reload the page; check cache/extensions and distinguish Classic/Modern. |
| Plugin page absent | Is the plugin and Webif integration installed? A missing page is not automatically a network problem. |
| Error page / traceback | Reproduce, temporarily enable debug traceback if needed, remove sensitive details before sharing, then disable debug again. |

A useful report includes Webif/image versions, browser/version, Classic/Modern, affected feature and exact steps. Review logs/images before publishing. [OpenWebif issues](https://github.com/oe-alliance/OpenWebif/issues) concern this plugin; [OpenATV support routes](../../../hilfe/fehler-melden/) help route other problems.
