---
title: "HDMI Recording Settings"
description: "HDMI Recording Settings: options, built-in help and menu location in OpenATV."
editUrl: false
pagefind: true
---

This reference contains the help text provided by OpenATV. The open dialog and selected options determine which entries are visible.

## Where do I find it?

**Main Menu → Setup → Playback, Recording & Time Shift → HDMI-In Recording Settings**

Search also matches technical keys. [Back to the directory](../../)

<h2 id="option-b114f15b0e70">Bitrate</h2>

<p>Set the bitrate of the video encoder. Larger values improve the quality and also increases the file size.</p>

<details>
<summary>Reference & notes</summary>

`config.hdmirecord.bitrate`

Setup level: Simple.

</details>

<h2 id="option-a8ee366aa2b0">Width</h2>

<p>The width of the picture. The input will be scaled to match this value.</p>

<details>
<summary>Reference & notes</summary>

`config.hdmirecord.width`

Setup level: Simple.

</details>

<h2 id="option-e5af364459e3">Height</h2>

<p>The height of the picture. The input will be scaled to match this value.</p>

<details>
<summary>Reference & notes</summary>

`config.hdmirecord.height`

Setup level: Simple.

</details>

<h2 id="option-b126d94c058d">Frame rate</h2>

<p>The frame rate of the recording. Ideally, this will match the frame rate of the source or be an integer multiple. If in doubt, set to 60, which should work with most sources.</p>

<details>
<summary>Reference & notes</summary>

`config.hdmirecord.framerate`

Setup level: Simple.

</details>

<h2 id="option-bd45a791d03b">Interlaced</h2>

<p>In most cases this should be set to &#x27;No&#x27;. Only set to &#x27;Yes&#x27; if you have a very specific need.</p>

<details>
<summary>Reference & notes</summary>

`config.hdmirecord.interlaced`

Setup level: Expert.

</details>

<h2 id="option-223fe518bd5d">Aspect ratio</h2>

<p>The aspect ratio of the recording.</p>

<details>
<summary>Reference & notes</summary>

`config.hdmirecord.aspectratio`

Setup level: Intermediate.

</details>

---

Source: [OpenATV setup.xml](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/data/setup.xml) · `fdc9347241`.
