---
title: "e2MDB \u2013 OpenWebif and web access"
description: "OpenATV 8.0+: OpenWebif and web access. Detailed e2MDB instructions, purpose and practical examples."
---

Open your receiver's address in a browser, for example **http://192.168.1.50/**. In OpenWebif, **Extras → e2MDB** links to the plugin's own web interface.

The default e2MDB port is **6066**, giving an example address of **http://192.168.1.50:6066/**. Replace the IP address and port with those of your installation. The handbook itself is a static website; these receiver controls run on your own box.

## Enter keys from a computer

1. In OpenWebif, open **Extras → Settings**.
2. Select **e2MDB Settings**. The fields correspond to the plugin configuration.
3. Enable the providers you need and enter their API keys. The media editor's search input is not a key field.
4. Choose **Save** at the bottom.
5. Avoid subsequently saving a TV setup page that still holds older values.
6. Verify the saved configuration and a known title in the plugin.

Use [API keys](../api-schluessel/) to distinguish TMDb keys, access tokens and TheTVDB PINs.

## Separate services and access

The e2MDB interface is a separate service. An OpenWebif password does **not automatically protect another directly accessible port**. Keep it on a trusted network; use a protected remote-access method such as a VPN instead of forwarding receiver administration ports to the internet.

Configuration exports can contain credentials. Logs may contain URLs, search terms and private file paths. Review and remove sensitive values before sharing. Public screenshots must not contain API keys.

The [Editor](../treffer-korrigieren/) changes metadata and can rename files; the [Media Browser](../medienbrowser/) can start playback on the receiver. Their buttons affect the box, not just the browser display.


[Back to e2MDB](../) · [All settings](../optionen/)

## Web interface language in this version

Parts of the web interface use German labels in this plugin version. The handbook explains its controls fully in English and German. Screenshots of the Enigma2 dialogs are available in both menu languages.
