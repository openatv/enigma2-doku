---
title: "Customize System Settings"
description: "Customize System Settings: options, built-in help and menu location in openATV."
editUrl: false
pagefind: true
---

This reference contains the help text provided by openATV. The open dialog and selected options determine which entries are visible.

## Where do I find it?

**Main Menu → Setup → Usage & GUI → Customize System Settings**

Search also matches technical keys. [Back to the directory](../../)

<h2 id="option-45b02fc15633">Settings mode</h2>

<p>Choose which level of menu/setting&#x27;s to display. &#x27;Expert&#x27;-level shows all items.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.setup_level`

Setup level: Simple.

</details>

<h2 id="option-5362ed69fe7d">Input scroll position</h2>

<p>When the input cursor reaches this point (percentage of the width, from either side) scroll the text to the cursor.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.cursorscroll`

Setup level: Simple.

</details>

<h2 id="option-2ccd34369ed6">Enable teletext caching</h2>

<p>When enabled, teletext pages will be cached, allowing faster access.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.enable_tt_caching`

Setup level: Intermediate.

</details>

<h2 id="option-d1e86c18cc8f">Teletext font and resolution</h2>

<p>Configure the display resolution and the font used for teletext.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.tuxtxt_font_and_res`

Setup level: Intermediate.

</details>

<h2 id="option-caf3947c971b">Teletext UseTTF (0=fixed font, 1=TrueType)</h2>

<p>Configure whether a fixed font or a scalable TrueType font is used for teletext.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.tuxtxt_UseTTF`

Setup level: Intermediate.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-ebcc68bc2170">Teletext TTFBold (0=normal, 1=bold)</h2>

<p>Configure whether a bold TrueType font is used for teletext.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.tuxtxt_TTFBold`

Setup level: Intermediate.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-904ce2b59c52">Teletext TTFScreenResX (screen X resolution)</h2>

<p>Configure the teletext screen resolution. Note: Full-HD teletext is not supported by all skins.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.tuxtxt_TTFScreenResX`

Setup level: Intermediate.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-b8fd186b4710">Teletext StartX (left border)</h2>

<p>Configure the start coordinate in x of the teletext display area.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.tuxtxt_StartX`

Setup level: Intermediate.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-92586233de76">Teletext EndX (right border)</h2>

<p>Configure the end coordinate in x of the teletext display area.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.tuxtxt_EndX`

Setup level: Intermediate.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-ce6d5ad00ae3">Teletext StartY (lower border)</h2>

<p>Configure the start coordinate in y of the teletext display area.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.tuxtxt_StartY`

Setup level: Intermediate.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-ddd4b95f6227">Teletext EndY (upper border)</h2>

<p>Configure the end coordinate in y of the teletext display area.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.tuxtxt_EndY`

Setup level: Intermediate.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-ab36065609df">Teletext TTFShiftY (vertical letter position)</h2>

<p>Adjust the vertical position of the letters used for teletext.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.tuxtxt_TTFShiftY`

Setup level: Intermediate.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-2bc12d5770c9">Teletext TTFShiftX (horizontal letter position)</h2>

<p>Adjust the horizontal position of the letters used for teletext.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.tuxtxt_TTFShiftX`

Setup level: Intermediate.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-d6a1cac72520">Teletext TTFWidthFactor16 (TrueType letter width)</h2>

<p>Configure the width of the TrueType font letters used for teletext.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.tuxtxt_TTFWidthFactor16`

Setup level: Intermediate.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-3ef4669e54f3">Teletext TTFHeightFactor16 (TrueType letter height)</h2>

<p>Configure the height of the TrueType font letters used for teletext.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.tuxtxt_TTFHeightFactor16`

Setup level: Intermediate.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-2ab56a988da8">Teletext CleanAlgo (resolution reset algorithm)</h2>

<p>Select the method of restoring screen resolution and framebuffer when leaving teletext.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.tuxtxt_CleanAlgo`

Setup level: Intermediate.

</details>

<h2 id="option-8b2ea404aa9b">Alternative services tuner priority</h2>

<p>Configure which tuner type will be preferred, when the same service is available on different types of tuners.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.alternatives_priority`

Setup level: Expert.

</details>

<h2 id="option-0510352733c3">Include ECM in http streams</h2>

<p>ECM data will be included in the stream. This enables a client receiver to decode it.</p>

<details>
<summary>Reference & notes</summary>

`config.streaming.stream_ecm`

Setup level: Expert.

</details>

<h2 id="option-fc78cd9bb1d4">Unscramble http streams</h2>

<p>Enables a feature so that the receiver can decrypt streams (if the ECM data is included in the stream and a valid card is available).</p>

<details>
<summary>Reference & notes</summary>

`config.streaming.descramble`

Setup level: Expert.

</details>

<h2 id="option-a5325073e401">Unscramble receiving http streams</h2>

<p>Enable to always unscramble received HTTP streams. Uses more resources due to demuxers. Streams with 0x100 in the service type are always unscrambled, regardless of this setting.</p>

<details>
<summary>Reference & notes</summary>

`config.streaming.descramble_client`

Setup level: Expert.

</details>

<h2 id="option-9f9139c61ef9">Require authentication for http streams</h2>

<p>When enabled, authentication is required to watch http streams.</p>

<details>
<summary>Reference & notes</summary>

`config.streaming.authentication`

Setup level: Expert.

</details>

<h2 id="option-3930e4810688">Http(s) stream start delay</h2>

<p>Define additional delay in milliseconds before start of http(s) streams.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.http_startdelay`

Setup level: Expert.

</details>

<h2 id="option-1d80f7b8f0df">After power loss</h2>

<p>Select what should be done when the openATV was shut down incorrectly, or after power was lost.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.shutdownNOK_action`

Setup level: Intermediate.

</details>

<h2 id="option-e5ea3d1ce5a4">Boot-up action</h2>

<p>Select what should be done when the openATV was boot-up, normal playing or goto Standby.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.boot_action`

Setup level: Intermediate.

</details>

<h2 id="option-8da4f84761a0">Wake up time before a timer begins</h2>

<p>Default wake-up is 5 minutes prior to timer start to wake up from Deep Standby. Adjust if the wake-up is too early or late, e.g., for network drives.</p>

<details>
<summary>Reference & notes</summary>

`config.workaround.wakeuptime`

Setup level: Expert.

</details>

<h2 id="option-526b68a607b8">Use workaround for wake up from deep-standby</h2>

<p>If enabled, a time window is used to detect wake-ups from Deep Standby triggered by a timer. The default setting is disabled, which uses a special signal from the receiver. However, some devices send an incorrect or no signal, causing wake-up detection to fail.</p>

<details>
<summary>Reference & notes</summary>

`config.workaround.deeprecord`

Setup level: Intermediate.

</details>

<h2 id="option-5fe5f744f25c">Time window for detection of the wake up by a timer [mins]</h2>

<p>The default settings are wake up time - 5 minutes and timer begin time + 5 minutes. This setting changed the time window before the wake up time. So can be detected a wake up by a timer even at very early starting receivers.</p>

<details>
<summary>Reference & notes</summary>

`config.workaround.wakeupwindow`

Setup level: Expert.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-5d9dd8029902">Enable cut file support for non *.ts files</h2>

<p>Enable cut file support for non *.ts files, e.g. mp4.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.useVideoCuesheet`

Setup level: Expert.

</details>

<h2 id="option-55d4d9afc85e">Enable cut file support for audio files</h2>

<p>Enable cut file support for audio files, e.g. mp3.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.useAudioCuesheet`

Setup level: Expert.

</details>

<h2 id="option-05e9037ae16d">Enable extended cut file support</h2>

<p>Enable extended cut file support. This will write cut with more information and not only marker.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.nativeCuesheetSupport`

Setup level: Expert.

</details>

<h2 id="option-ed2068ab6202">Enable chapter support for video files</h2>

<p>Show chapter positions for supported video files.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.useChapterInfo`

Setup level: Expert.

</details>

---

Source: [openATV setup.xml](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/data/setup.xml) · `fdc9347241`.
