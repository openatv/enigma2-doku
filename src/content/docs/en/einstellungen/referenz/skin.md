---
title: "Skin Settings"
description: "Skin Settings: options, built-in help and menu location in OpenATV."
editUrl: false
pagefind: true
---

Practical guide: [Usage & GUI – Skin Settings](../../../skins/installieren/).

This reference contains the help text provided by OpenATV. The open dialog and selected options determine which entries are visible.

## Where do I find it?

The direct menu location has not yet been mapped in this first edition. Look for **Skin Settings**.

Search also matches technical keys. [Back to the directory](../../)

<h2 id="option-07dcd174cb7a">GUI Skin</h2>

<p>Choose the skin to be used for the graphical user interface (GUI). Press &#x27;GREEN&#x27; to activate the skin.</p>

<details>
<summary>Reference & notes</summary>

`config.skin.guiSkin`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-397a548c72d6">LCD/Front panel</h2>

<p>Choose the skin to be used for the LCD/front panel interface. Press &#x27;GREEN&#x27; to activate the skin.</p>

**After changing:** GUI restart required.

<details>
<summary>Reference & notes</summary>

`config.skin.lcdSkin`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-d4175eea95c5">Fallback Font</h2>

<p>Choose the fallback font.</p>

<details>
<summary>Reference & notes</summary>

`config.skin.FallbackFont`

Setup level: Simple.

</details>

<h2 id="option-21965a007285">Channel Selection Screen</h2>

<p>Select the screen layout, from the options provided by the skin, to be used for the ChannelSelection screen.</p>

<details>
<summary>Reference & notes</summary>

`config.channelSelection.screenStyle`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-844c245e13f1">Channel Selection List</h2>

<p>Select the layout of the information in the services list, from the options provided by the skin, displayed within the ChannelSelection screen.</p>

<details>
<summary>Reference & notes</summary>

`config.channelSelection.widgetStyle`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-95f698115960">AutoRefresh</h2>

<p>Enable autorefresh templates.</p>

<details>
<summary>Reference & notes</summary>

`config.skin.autorefresh`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-af9477d85472">Fast Skin Reload</h2>

<p>Reload the skin without restarting the GUI when switching skins.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.fastSkinReload`

Setup level: Simple.

</details>

---

Source: [OpenATV setup.xml](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/data/setup.xml) · `fdc9347241`.
