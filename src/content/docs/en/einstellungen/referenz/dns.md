---
title: "DNS Settings"
description: "DNS Settings: options, built-in help and menu location in OpenATV."
editUrl: false
pagefind: true
---

This reference contains the help text provided by OpenATV. The open dialog and selected options determine which entries are visible.

## Where do I find it?

**Main Menu → Setup → Network → DNS Settings**

Search also matches technical keys. [Back to the directory](../../)

<h2 id="option-2806f28dc8ff">Hostname</h2>

<p>Enter the network hostname to be used to identify this receiver.</p>

<details>
<summary>Reference & notes</summary>

`self.hostname`

Setup level: Simple.

</details>

<h2 id="option-ba6870de6209">Domain name</h2>

<p>Enter the network domain name suffix to be added to the hostname above. This helps the DNS resolver find other network devices on the network.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.dnsSuffix`

Setup level: Simple.

</details>

<h2 id="option-76be456611b3">DNS protocol mode</h2>

<p>Select whether IPv4, IPv6, or both protocols should be used. If both are enabled then select which should be preferred.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.dnsMode`

Setup level: Simple.

</details>

<h2 id="option-aed883785324">Use DNS rotation</h2>

<p>Select &#x27;Yes&#x27; to enable DNS entry rotation. This rotation changes the order in which the list of DNS servers is used and can avoid issues if a DNS server in the list becomes unavailable.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.dnsRotate`

Setup level: Simple.

</details>

<h2 id="option-3ad31f82dee2">DNS data source</h2>

<p>Select the DNS server(s) that will be used to lookup hostnames to resolve IP addresses.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.dns`

Setup level: Simple.

</details>

<h2 id="option-78fe2e0037e7">Use DNSCrypt servers</h2>

<p>Only use DNS servers implementing the DNSCrypt protocol.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.DNSCryptProtocol`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-8af955638549">Use DoH servers</h2>

<p>Only use DNS servers implementing the DNS-over-HTTPS protocol. This causes DNS lookups to be made via the encrypted HTTPS protocol.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.DNSCryptDoH`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-e4ecb14c9da4">Use ODoH servers</h2>

<p>Only use DNS servers implementing the Oblivious DNS-over-HTTPS protocol. This adds another layer of privacy by adding a proxy layer to the DNS-over-HTTPS request.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.DNSCryptODoH`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-b52287e6c73b">Use only DNSSEC servers</h2>

<p>Server must support DNS Security Extensions (DNSSEC). This is a data signing option that protects the integrity of the DNS data against compromises like cache poisoning.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.DNSCryptDNSSEC`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-9c45204124b2">Use only no-log servers</h2>

<p>Server must not log user queries (declarative). This can improve the privacy of DNS lookups by not logging the request on the server providing the data.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.DNSCryptNoLog`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-a32179466555">Use only no-filter servers</h2>

<p>Server must not enforce its own blacklist. Some servers may implement their own blacklists to block sites for parental control, ad blocking, etc. reasons.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.DNSCryptNoFilter`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-ee1cca3946fa">Use DNS cache</h2>

<p>Use a DNS cache to locally store recent DNS lookups to improve performance, reduce latency and outgoing traffic.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.DNSCryptCache`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-80971ec84681">Enable monitoring UI</h2>

<p>Select &#x27;Yes&#x27; to enable the monitoring UI web interface for the DNSCrypt subsystem.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.DNSCryptUI`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-ece63905f424">Username</h2>

<p>Set the username for the monitoring UI web interface.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.DNSCryptUsername`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-34e1c486083f">Password</h2>

<p>Set the password for the monitoring UI web interface.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.DNSCryptPassword`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-1a40201b1e3c">Port</h2>

<p>Set the port address (8080-9999) for the monitoring UI web interface.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.DNSCryptPort`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-4b79dd063aee">Privacy level</h2>

<p>Set the privacy level for the monitoring UI web interface.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.DNSCryptPrivacy`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

---

Source: [OpenATV setup.xml](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/data/setup.xml) · `fdc9347241`.

Editorial explanation: [DNS, name resolution and DNSCrypt](../../../netzwerk/dns/).
