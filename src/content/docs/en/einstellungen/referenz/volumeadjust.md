---
title: "Volume Adjust Settings"
description: "Volume Adjust Settings: options, built-in help and menu location in OpenATV."
editUrl: false
pagefind: true
---

This reference contains the help text provided by OpenATV. The open dialog and selected options determine which entries are visible.

## Where do I find it?

**Main Menu → Setup → Audio → Volume Adjust Settings**

Search also matches technical keys. [Back to the directory](../../)

<h2 id="option-a212bf6f2bc7">Volume adjustment mode</h2>

<p>Select &#x27;Disabled&#x27; to disable all automated volume adjustments. Select &#x27;Defined volume offsets&#x27; to assign a specified offset to the service&#x27;s volume level. Select &#x27;Last used/set volume&#x27; to remember the volume level last used for each service.</p>

<details>
<summary>Reference & notes</summary>

`config.volumeAdjust.adjustMode`

Setup level: Simple.

</details>

<h2 id="option-734470d15d57">Default volume offset</h2>

<p>This is the initial / default volume offset applied to any services added to the volume adjust list.</p>

<details>
<summary>Reference & notes</summary>

`config.volumeAdjust.defaultOffset`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-cac1f0e6b725">Default Dolby Digital / Dolby AC-3 offset</h2>

<p>This offset will only be used if the channel does not have its own volume offset.</p>

<details>
<summary>Reference & notes</summary>

`config.volumeAdjust.dolbyOffset`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-4a4638f0cf73">Auto show volume level</h2>

<p>Select &#x27;Yes&#x27; to show the volume level on any automated changes of volume level.</p>

<details>
<summary>Reference & notes</summary>

`config.volumeAdjust.showVolumeBar`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

---

Source: [OpenATV setup.xml](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/data/setup.xml) · `fdc9347241`.
