---
title: "Stream Relay Settings"
description: "Stream Relay Settings: options, built-in help and menu location in openATV."
editUrl: false
pagefind: true
---

This reference contains the help text provided by openATV. The open dialog and selected options determine which entries are visible.

## Where do I find it?

**Main Menu → Setup → Decryption & Parental Control → Stream Relay Settings**

Search also matches technical keys. [Back to the directory](../../)

<h2 id="option-ea7165a0befe">Stream Relay URL</h2>

<p>IP address of the Stream Relay server used to descramble services that can only be decrypted via Stream Relay.</p>

<details>
<summary>Reference & notes</summary>

`config.misc.softcam_streamrelay_url`

Setup level: Expert.

</details>

<h2 id="option-bbe4768a0e15">Stream Relay port</h2>

<p>Port number for the Stream Relay server used to descramble services that can only be decrypted via Stream Relay.</p>

<details>
<summary>Reference & notes</summary>

`config.misc.softcam_streamrelay_port`

Setup level: Expert.

</details>

<h2 id="option-34c19fa4aea3">Stream Relay switch delay</h2>

<p>Select the delay to use when closing a Stream Relay service before reallocating the tuner for another service. Using &#x27;0&#x27; is only recommended for receivers with multiple satellite tuners.</p>

<details>
<summary>Reference & notes</summary>

`config.misc.softcam_streamrelay_delay`

Setup level: Expert.

</details>

---

Source: [openATV setup.xml](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/data/setup.xml) · `fdc9347241`.
