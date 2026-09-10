---
title: "AutoCam Settings"
description: "AutoCam Settings: options, built-in help and menu location in OpenATV."
editUrl: false
pagefind: true
---

This reference contains the help text provided by OpenATV. The open dialog and selected options determine which entries are visible.

## Where do I find it?

**Main Menu → Setup → Decryption & Parental Control → AutoCam Settings**

Search also matches technical keys. [Back to the directory](../../)

<h2 id="option-27b5553beca7">Use AutoCam</h2>

<p>When set to &#x27;Yes&#x27; a specific Softcam can be assigned to each encrypted service.</p>

<details>
<summary>Reference & notes</summary>

`config.misc.autocamEnabled`

Setup level: Simple.

</details>

<h2 id="option-48a048e56d89">Select AutoCam default Softcam</h2>

<p>Select a Softcam from the available list as the default for AutoCam.</p>

<details>
<summary>Reference & notes</summary>

`self.autocamDefault`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

---

Source: [OpenATV setup.xml](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/data/setup.xml) · `fdc9347241`.
