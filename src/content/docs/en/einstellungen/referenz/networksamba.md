---
title: "Samba Server Settings"
description: "Samba Server Settings: options, built-in help and menu location in OpenATV."
editUrl: false
pagefind: true
---

This reference contains the help text provided by OpenATV. The open dialog and selected options determine which entries are visible.

## Where do I find it?

**Main Menu → Setup → Network → Samba Server Settings**

Search also matches technical keys. [Back to the directory](../../)

<h2 id="option-323666c86b4c">Enable automatic shares</h2>

<p>When enabled, allow each storage device detected to be automatically exported as a Samba share.</p>

<details>
<summary>Reference & notes</summary>

`config.samba.enableAutoShare`

Setup level: Simple.

</details>

<h2 id="option-33ed0ed69d1a">Access mode</h2>

<p>Select the mode of access, Read/Write or Read-Only, applied to all automatically exported Samba shares.</p>

<details>
<summary>Reference & notes</summary>

`config.samba.autoShareAccess`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-e57b0831abfc">Allow guest access</h2>

<p>When enabled, allow Samba network access without a password.</p>

<details>
<summary>Reference & notes</summary>

`self.guest`

Setup level: Simple.

</details>

<h2 id="option-0033a4c1d1ea">Workgroup name</h2>

<p>Enter the workgroup name to be used by this server for Samba based connections. (Default is &#x27;WORKGROUP&#x27;.)</p>

<details>
<summary>Reference & notes</summary>

`self.workgroup`

Setup level: Simple.

</details>

---

Source: [OpenATV setup.xml](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/data/setup.xml) · `fdc9347241`.

Guide: [Receiver as a Samba server](../../../netzwerk/samba-server/).
