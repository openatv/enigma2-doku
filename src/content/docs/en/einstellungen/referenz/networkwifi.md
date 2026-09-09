---
title: "Network Wi-Fi Settings"
description: "Network Wi-Fi Settings: options, built-in help and menu location in openATV."
editUrl: false
pagefind: true
---

This reference contains the help text provided by openATV. The open dialog and selected options determine which entries are visible.

## Where do I find it?

**Main Menu → Setup → Network → Network Overview → Network Wi-Fi Settings**

Search also matches technical keys. [Back to the directory](../../)

<h2 id="option-b6f4f05f6442">Network name (SSID)</h2>

<p>Select the network name (SSID) of the wireless network to which the receiver should connect.</p>

<details>
<summary>Reference & notes</summary>

`self.cfgSsid`

Setup level: Simple.

</details>

<h2 id="option-6bf633e4eefe">Enabled</h2>

<p>When enabled, connection via saved network is attempted when the Wi-Fi adapter connects.</p>

<details>
<summary>Reference & notes</summary>

`self.cfgEnabled`

Setup level: Simple.

</details>

<h2 id="option-c1ba45080d8d">Priority</h2>

<p>Preferred connection priority when multiple Wi-Fi profiles are configured. Lower numbers have a higher priority.</p>

<details>
<summary>Reference & notes</summary>

`self.cfgPriority`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-536220f44c0f">Hidden network</h2>

<p>When enabled, allow connection to access points that don&#x27;t broadcast their SSID.</p>

<details>
<summary>Reference & notes</summary>

`self.cfgHidden`

Setup level: Intermediate.

</details>

<h2 id="option-5bd604e6a235">Encryption</h2>

<p>Select the security protocol that will be used to access the selected wireless network.</p>

<details>
<summary>Reference & notes</summary>

`self.cfgEncryption`

Setup level: Simple.

</details>

<h2 id="option-4d82059b6737">Password / Key</h2>

<p>Enter the password, pass-phrase or pre-shared key for the selected wireless network.</p>

<details>
<summary>Reference & notes</summary>

`self.cfgKey`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

---

Source: [openATV setup.xml](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/data/setup.xml) · `fdc9347241`.
