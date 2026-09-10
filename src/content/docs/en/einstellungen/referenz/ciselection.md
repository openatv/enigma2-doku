---
title: "Common Interface"
description: "Common Interface: options, built-in help and menu location in OpenATV."
editUrl: false
pagefind: true
---

This reference contains the help text provided by OpenATV. The open dialog and selected options determine which entries are visible.

## Where do I find it?

**Main Menu → Setup → Decryption & Parental Control → Common Interface Settings**

Search also matches technical keys. [Back to the directory](../../)

<h2 id="option-946acac5df2d">CI+ Helper*</h2>

<p>Select &#x27;Enable&#x27; to start the CI+ helper.</p>

<details>
<summary>Reference & notes</summary>

`config.cimisc.cihelperenabled`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-b95257081a97">DVB CI Delay</h2>

<p>Set DVB CI delay.</p>

<details>
<summary>Reference & notes</summary>

`config.cimisc.dvbCiDelay`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-e5773ba30cb3">CI Boot Delay</h2>

<p>Set CI Boot delay.</p>

<details>
<summary>Reference & notes</summary>

`config.cimisc.bootDelay`

Setup level: Simple.

</details>

---

Source: [OpenATV setup.xml](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/data/setup.xml) · `fdc9347241`.

Fundamentals and limits: [CI, CAM and module settings](../../../entschluesselung/ci-cam/).
