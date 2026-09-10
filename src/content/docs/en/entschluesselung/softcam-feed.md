---
title: "External softcam feed"
description: "External softcam feed – OpenATV Enigma2"
---

A **feed** is a package source. Adding it first makes an external operator's packages available; you then select an available package in the plugin browser. OpenATV neither supplies nor supports softcams. You must check local law, valid entitlements and provider terms before use. Refer package-specific support questions to their supplier.

## Requirements and command

The receiver needs Internet access, working DNS and sufficient free flash space. Connect as `root` using [SSH](../../netzwerk/fernzugriff/). Telnet can execute the same shell command, but transmits the session without encryption.

The command supplied by the project operator for this handbook is:

```sh
wget --no-check-certificate -O - -q http://updates.mynonpublic.com/oea/feed | bash
```

`wget` downloads the script, `-O -` sends it into the pipe, and `bash` immediately executes it with your root privileges. `-q` suppresses download messages. `--no-check-certificate` disables certificate validation for any HTTPS connection involved; the initial URL already uses HTTP. This executes external code without prior inspection and does not authenticate its origin throughout the transfer. Only use it if you trust the operator and the transfer path.

At the documented retrieval, this URL redirected to **SusanOV/softcamfeed** on GitHub. The original URL with `https://` instead returned 404; simply replacing the scheme was not a working alternative. The script and redirect may change.

## Inspect before executing

To inspect the script first, download a file. These commands initially only download, display and syntax-check it:

```sh
wget -O /tmp/feed http://updates.mynonpublic.com/oea/feed
cat /tmp/feed
bash -n /tmp/feed
```

Only after a successful download, your own review and a deliberate decision to install:

```sh
bash /tmp/feed
```

The `/tmp/feed` filename is deliberate: the inspected installer also checks its invocation name. `bash -n` checks shell syntax only, not trustworthiness or correct operation. If the download fails, do not execute an old file that might remain at that path.

## What does the installer change?

The inspected version detects the image/OE version and architecture, replaces certain old external feed files in `/etc/opkg/`, adds a package source, updates package lists and installs or reinstalls `softcam-feed-universal`. It also cleans up some legacy CAM startup configuration. This changes the system; it is more than enabling a menu.

1. Check the output for download and package errors.
2. Open **Plugins → Download plugins** and look for the offered softcam category. The external feed determines categories and packages.
3. Install only a package compatible with your image version and architecture.
4. Check [Softcam Settings](../softcam-autocam/). Package installation and the necessary authorised CAM configuration are separate steps.

The installer may print a success message despite suppressed package failures. Verify the actual package listing and installed packages. For 404, DNS or signature errors, do not indiscriminately mix more external feeds. Recheck compatibility after flashing a different image; restoring old packages does not establish compatibility.

For this handbook the script was inspected as text and **was not executed on the receiver**. Source: [external installer](https://github.com/SusanOV/softcamfeed/blob/main/oea/feed); retrieval details and hash are in [verification](../../netzwerk/quellen/).
