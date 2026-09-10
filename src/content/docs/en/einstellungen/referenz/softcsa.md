---
title: "SoftCSA Settings"
description: "SoftCSA Settings: options, built-in help and menu location in OpenATV."
editUrl: false
pagefind: true
---

This reference contains the help text provided by OpenATV. The open dialog and selected options determine which entries are visible.

## Where do I find it?

**Main Menu → Setup → Decryption & Parental Control → SoftCSA Settings**

Search also matches technical keys. [Back to the directory](../../)

<h2 id="option-652ebcf68063">Decoder release strategy</h2>

<p>How to release the hardware decoder when switching to software descrambling. &#x27;Quick&#x27; releases immediately (faster zapping). &#x27;Normal&#x27; performs a clean shutdown first (more stable on some boxes). &#x27;Aggressive&#x27; performs a full descrambler reset between encrypted channels.</p>

**After changing:** GUI restart required.

<details>
<summary>Reference & notes</summary>

`config.softcsa.decoderRelease`

Setup level: Simple.

</details>

<h2 id="option-dac71671b32d">Sync mode</h2>

<p>Select how the descrambled data stream is processed. &#x27;Automatic&#x27; uses asynchronous writes (lower CPU usage) with automatic fallback to synchronous if kernel AIO is not supported. &#x27;Synchronous&#x27; forces blocking writes (stable, most compatible).</p>

**After changing:** GUI restart required.

<details>
<summary>Reference & notes</summary>

`config.softcsa.syncMode`

Setup level: Simple.

</details>

<h2 id="option-e9558a3cd3e7">Decoder start timeout</h2>

<p>Maximum time to wait for the first descrambling key (CW) before starting the decoder. &#x27;Disabled&#x27; starts the decoder immediately without waiting.</p>

**After changing:** GUI restart required.

<details>
<summary>Reference & notes</summary>

`config.softcsa.waitForDataTimeout`

Setup level: Expert.

</details>

<h2 id="option-fdbbab323b3e">Decoder start delay</h2>

<p>Select the delay to buffer descrambled data before starting playback. This can reduce AC3 audio dropouts by ensuring enough data is available when the decoder starts. Higher values are more stable but increase channel switch time.</p>

**After changing:** GUI restart required.

<details>
<summary>Reference & notes</summary>

`config.softcsa.bufferTime`

Setup level: Expert.

</details>

---

Source: [OpenATV setup.xml](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/data/setup.xml) · `fdc9347241`.
