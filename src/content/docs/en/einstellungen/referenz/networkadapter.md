---
title: "Network Adapter Settings"
description: "Network Adapter Settings: options, built-in help and menu location in openATV."
editUrl: false
pagefind: true
---

This reference contains the help text provided by openATV. The open dialog and selected options determine which entries are visible.

## Where do I find it?

**Main Menu → Setup → Network → Network Overview → Network Adapter Settings**

Search also matches technical keys. [Back to the directory](../../)

<h2 id="option-65600f7e26c9">Enabled</h2>

<p>When enabled, this adapter will be initialized and activated at boot time.</p>

<details>
<summary>Reference & notes</summary>

`self.cfgEnabled`

Setup level: Simple.

</details>

<h2 id="option-fbc3c6f81dcd">WoW only</h2>

<p>When enabled, this Wi-Fi adapter is kept in Wake-on-WiFi mode only and will not be used to connect to any network.</p>

<details>
<summary>Reference & notes</summary>

`self.cfgWowOnly`

Setup level: Intermediate.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-ce96c23e5d89">IP protocol</h2>

<p>Select which IP protocols can be used with this adapter.</p>

<details>
<summary>Reference & notes</summary>

`self.cfgIpMode`

Setup level: Intermediate.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-830d8d7e3f63">Use DHCP</h2>

<p>When enabled, obtain the IP address, subnet mask, gateway, and DNS settings automatically via DHCP.</p>

<details>
<summary>Reference & notes</summary>

`self.cfgDhcp`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-5976918f4eff">IP address</h2>

<p>Enter the fixed/static IPv4 address to be used for this network adapter.</p>

<details>
<summary>Reference & notes</summary>

`self.cfgIp`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-d2810a89ca8e">Subnet mask</h2>

<p>Enter the subnet mask to be used for this network adapter. (e.g. 255.255.255.0)</p>

<details>
<summary>Reference & notes</summary>

`self.cfgNetmask`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-e824b947aefa">Default gateway</h2>

<p>Enter the IP address to be used as the gateway to other networks for this adapter. Typically this is the IP address of your router.</p>

<details>
<summary>Reference & notes</summary>

`self.cfgGateway`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-e8dbc905a9dc">Network metric</h2>

<p>Select the network metric for this adapter. When multiple adapters are active, the one with the lowest network metric is used as the default route for network traffic.</p>

<details>
<summary>Reference & notes</summary>

`self.cfgMetric`

Setup level: Intermediate.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-96b0eb7fe963">DNS override</h2>

<p>When enabled, specify custom DNS settings for this adapter instead of using the global DNS settings.</p>

<details>
<summary>Reference & notes</summary>

`self.cfgDnsOverride`

Setup level: Intermediate.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-df614a3afb59">Primary DNS (IPv4)</h2>

<p>Enter the primary IPv4 DNS server for this adapter.</p>

<details>
<summary>Reference & notes</summary>

`self.cfgDns1v4`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-a95c0893b808">Secondary DNS (IPv4)</h2>

<p>Enter the secondary IPv4 DNS server for this adapter. (Optional)</p>

<details>
<summary>Reference & notes</summary>

`self.cfgDns2v4`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-5c41892cfe59">Primary DNS (IPv6)</h2>

<p>Enter the primary IPv6 DNS server for this adapter. (Optional)</p>

<details>
<summary>Reference & notes</summary>

`self.cfgDns1v6`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-2365e828337a">Secondary DNS (IPv6)</h2>

<p>Enter the secondary IPv6 DNS server for this adapter. (Optional)</p>

<details>
<summary>Reference & notes</summary>

`self.cfgDns2v6`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-7612631b33aa">Wake-on-LAN</h2>

<p>When enabled, allow the receiver to be powered on by a remote Wake-on-LAN network signal (Magic Packet).</p>

<details>
<summary>Reference & notes</summary>

`config.network.wol`

Setup level: Intermediate.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-d3fbd7fb6bb5">Link speed</h2>

<p>Force a specific network link speed/duplex mode instead of auto-negotiation. Only change this if you have a specific reason for the change as an incorrect setting can break network connectivity.</p>

<details>
<summary>Reference & notes</summary>

`self.cfgLinkSpeed`

Setup level: Expert.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-fd4fa6ef1ecf">Wake-on-WiFi</h2>

<p>When enabled, keep the Wi-Fi adapter in low-power scan mode during Standby to allow the receiver to be powered on by a remote network signal (Magic Packet).</p>

<details>
<summary>Reference & notes</summary>

`self.cfgWakeOnWiFi`

Setup level: Intermediate.

Visibility depends on other options or the dialog.

</details>

---

Source: [openATV setup.xml](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/data/setup.xml) · `fdc9347241`.
