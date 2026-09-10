---
title: "Audio Settings"
description: "Audio Settings: options, built-in help and menu location in OpenATV."
editUrl: false
pagefind: true
---

This reference contains the help text provided by OpenATV. The open dialog and selected options determine which entries are visible.

## Where do I find it?

**Main Menu → Setup → Audio → Audio Settings**

Search also matches technical keys. [Back to the directory](../../)

<h2 id="option-39b5e2e12edb">Volume steps</h2>

<p>Select the size of the volume step when the VOLUME buttons are pressed.</p>

<details>
<summary>Reference & notes</summary>

`config.volumeControl.pressStep`

Setup level: Intermediate.

</details>

<h2 id="option-bdac87c98e31">Long press volume steps</h2>

<p>Select the size of the volume steps when the VOLUME buttons are held down.</p>

<details>
<summary>Reference & notes</summary>

`config.volumeControl.longStep`

Setup level: Intermediate.

</details>

<h2 id="option-edf0954efca9">Volume/Mute display timer</h2>

<p>Select how long, in seconds, that the volume and mute displays are shown before they automatically hide.</p>

<details>
<summary>Reference & notes</summary>

`config.volumeControl.hideTimer`

Setup level: Intermediate.

</details>

<h2 id="option-9ac712427d7b">PCM Multichannel</h2>

<p>Select whether multichannel audio tracks should be output as PCM.</p>

<details>
<summary>Reference & notes</summary>

`config.av.pcm_multichannel`

Setup level: Intermediate.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-36e8c5491ff5">AC3 downmix</h2>

<p>Select whether AC3 audio tracks should be downmixed to stereo.</p>

<details>
<summary>Reference & notes</summary>

`config.av.downmix_ac3`

Setup level: Intermediate.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-bbef0e4c76af">Passthrough audio handling delay AC3</h2>

<p>Used to specify delay when switching between services and AC3 passthrough is enabled.</p>

<details>
<summary>Reference & notes</summary>

`config.av.passthrough_fix_short`

Setup level: Intermediate.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-475af74562bf">Passthrough audio handling delay AC3+</h2>

<p>Used to specify delay when switching between services and AC3+/Atmos passthrough is enabled.</p>

<details>
<summary>Reference & notes</summary>

`config.av.passthrough_fix_long`

Setup level: Intermediate.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-6b757f9810e5">AC3 plus transcoding</h2>

<p>Select whether AC3 Plus audio tracks should be transcoded to AC3.</p>

<details>
<summary>Reference & notes</summary>

`config.av.transcodeac3plus`

Setup level: Intermediate.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-2c847846e54d">AC4</h2>

<p>Select whether AC4 (Dolby Atmos) audio tracks should be passed through to the AVR, downmixed to stereo, or auto-routed based on HDMI sink capability.</p>

<details>
<summary>Reference & notes</summary>

`config.av.ac4`

Setup level: Intermediate.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-d60d994fdaae">DTS downmix</h2>

<p>Select whether DTS channel audio tracks should be downmixed to stereo.</p>

<details>
<summary>Reference & notes</summary>

`config.av.downmix_dts`

Setup level: Intermediate.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-9c259024084b">DTS/DTS-HD HR/DTS-HD MA/DTS:X</h2>

<p>Select whether DTS channel audio tracks should be downmixed or transcoded.</p>

<details>
<summary>Reference & notes</summary>

`config.av.dtshd`

Setup level: Intermediate.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-5d98ce42e416">Dolby TrueHD</h2>

<p>Select whether Dolby TrueHD audio tracks should be passed through or decoded.</p>

<details>
<summary>Reference & notes</summary>

`config.av.truehd`

Setup level: Intermediate.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-18f92ee99f9c">WMA Pro</h2>

<p>Select whether WMA Pro channel audio tracks should be downmixed or transcoded.</p>

<details>
<summary>Reference & notes</summary>

`config.av.wmapro`

Setup level: Intermediate.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-035da4401017">AAC downmix</h2>

<p>Select whether multichannel audio tracks should be downmixed to stereo.</p>

<details>
<summary>Reference & notes</summary>

`config.av.downmix_aac`

Setup level: Intermediate.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-bc5a82826524">AAC plus downmix</h2>

<p>Select whether multichannel audio tracks should be downmixed to stereo.</p>

<details>
<summary>Reference & notes</summary>

`config.av.downmix_aacplus`

Setup level: Intermediate.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-8da0d13a6b3c">AAC transcoding</h2>

<p>Select whether AAC audio tracks should be transcoded.</p>

<details>
<summary>Reference & notes</summary>

`config.av.transcodeaac`

Setup level: Intermediate.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-47837b48b01d">Audio Source</h2>

<p>Select whether multichannel audio tracks should be converted to PCM or SPDIF.</p>

<details>
<summary>Reference & notes</summary>

`config.av.audio_source`

Setup level: Intermediate.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-d688a322c838">General AC3 delay</h2>

<p>This option selects the general audio delay of Dolby Digital sound tracks.</p>

<details>
<summary>Reference & notes</summary>

`config.av.generalAC3delay`

Setup level: Intermediate.

</details>

<h2 id="option-d6ca020fda42">General PCM delay</h2>

<p>This option selects the general audio delay of stereo sound tracks.</p>

<details>
<summary>Reference & notes</summary>

`config.av.generalPCMdelay`

Setup level: Intermediate.

</details>

<h2 id="option-a970fbaea43e">3D Surround</h2>

<p>This option allows you to enable 3D Surround Sound.</p>

<details>
<summary>Reference & notes</summary>

`config.av.surround_3d`

Setup level: Intermediate.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-b77e2afe945c">3D Surround Speaker Position</h2>

<p>This option allows you to change the virtual loudspeaker position.</p>

<details>
<summary>Reference & notes</summary>

`config.av.surround_3d_speaker`

Setup level: Intermediate.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-849c837394b2">Audio Auto Volume Level</h2>

<p>This option allows you to set the Auto Volume Level output.</p>

<details>
<summary>Reference & notes</summary>

`config.av.autovolume`

Setup level: Intermediate.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-35e8daef87ca">Enable BT audio</h2>

<p>This option allows you to switch Audio to Bluetooth speakers.</p>

<details>
<summary>Reference & notes</summary>

`config.av.btaudio`

Setup level: Intermediate.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-6a581bfd469b">General BT audio delay</h2>

<p>This option configures the audio delay value for Bluetooth speakers.</p>

<details>
<summary>Reference & notes</summary>

`config.av.btaudiodelay`

Setup level: Intermediate.

Visibility depends on other options or the dialog.

</details>

---

Source: [OpenATV setup.xml](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/data/setup.xml) · `fdc9347241`.
