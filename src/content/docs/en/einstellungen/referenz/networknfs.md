---
title: "NFS Server Settings"
description: "NFS Server Settings: options, built-in help and menu location in OpenATV."
editUrl: false
pagefind: true
---

This reference contains the help text provided by OpenATV. The open dialog and selected options determine which entries are visible.

## Where do I find it?

**Main Menu → Setup → Network → NFS Server Settings**

Search also matches technical keys. [Back to the directory](../../)

<h2 id="option-45de33bafecb">NFS threads</h2>

<p>Enter the number of NFS server threads to be allocated/used. Higher values improve performance with multiple clients but uses more memory.</p>

<details>
<summary>Reference & notes</summary>

`self.nfsThreads`

Setup level: Simple.

</details>

<h2 id="option-608035aeef63">Enable NFSv3</h2>

<p>When enabled, allow usage of the NFS version 3 protocols.</p>

<details>
<summary>Reference & notes</summary>

`self.nfsVers3`

Setup level: Simple.

</details>

<h2 id="option-a9fc6001cc6d">Enable NFSv4</h2>

<p>When enabled, allow usage of the NFS version 4 protocols.</p>

<details>
<summary>Reference & notes</summary>

`self.nfsVers4`

Setup level: Simple.

</details>

<h2 id="option-1ca52df88005">Access mode</h2>

<p>Select the mode of access, Read/Write or Read-Only, applied to all exported directories.</p>

<details>
<summary>Reference & notes</summary>

`self.nfsAccessMode`

Setup level: Simple.

</details>

<h2 id="option-004fd73a2293">Allowed clients</h2>

<p>Enter the IP address or subnet (e.g. 192.168.1.0/24) to which NFS host access is granted. Enter &#x27;*&#x27;, the default, for all host access.</p>

<details>
<summary>Reference & notes</summary>

`self.nfsClients`

Setup level: Simple.

</details>

<h2 id="option-de78d02a4fd4">Root squash</h2>

<p>When enabled, map root to nobody (more secure). When disabled, full root access is available.</p>

<details>
<summary>Reference & notes</summary>

`self.nfsRootSquash`

Setup level: Simple.

</details>

---

Source: [OpenATV setup.xml](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/data/setup.xml) · `fdc9347241`.
