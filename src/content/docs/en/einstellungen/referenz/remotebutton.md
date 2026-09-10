---
title: "Remote Control Button Settings"
description: "Remote Control Button Settings: options, built-in help and menu location in OpenATV."
editUrl: false
pagefind: true
---

Practical guide: [Usage & GUI – Remote Control Button Settings](../../../erste-schritte/farbtasten-langdruck/).

This reference contains the help text provided by OpenATV. The open dialog and selected options determine which entries are visible.

## Where do I find it?

**Main Menu → Setup → Usage & GUI → Remote Control Button Settings**

Search also matches technical keys. [Back to the directory](../../)

<h2 id="option-2993a2d6635d">Use key map *</h2>

<p>Configure the current key map file.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.keymap`

Setup level: Expert.

</details>

<h2 id="option-20fe7f09b9be">Action on short POWER button press</h2>

<p>Configure the function of a short press on the power button.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.on_short_powerpress`

Setup level: Intermediate.

</details>

<h2 id="option-3949ee980fea">Action on long POWER button press</h2>

<p>Configure the function of a long press on the power button.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.on_long_powerpress`

Setup level: Intermediate.

</details>

<h2 id="option-6de6328debb6">EPG button mode</h2>

<p>Select what you want the EPG button to activate.</p>

<details>
<summary>Reference & notes</summary>

`config.plisettings.PLIEPG_mode`

Setup level: Simple.

</details>

<h2 id="option-99c3f6743b59">INFO button mode</h2>

<p>Select what you want the INFO button to activate.</p>

<details>
<summary>Reference & notes</summary>

`config.plisettings.PLIINFO_mode`

Setup level: Simple.

</details>

<h2 id="option-3ba4d2c15372">OK button mode</h2>

<p>Select what you want the OK button to activate.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.okbutton_mode`

Setup level: Simple.

</details>

<h2 id="option-808ec11ed05c">Subservice mode (GREEN button)</h2>

<p>Select if you want the Subservice mode to be activated.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.subservice`

Setup level: Simple.

</details>

<h2 id="option-6e146c87083c">QuickEPG mode</h2>

<p>Select how to activate the Quick EPG mode.</p>

<details>
<summary>Reference & notes</summary>

`config.plisettings.InfoBarEpg_mode`

Setup level: Simple.

</details>

<h2 id="option-e539f508517b">TV button mode</h2>

<p>Select what you want the TV button to activate.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.tvradiobutton_mode`

Setup level: Simple.

</details>

<h2 id="option-ac4ef7a999c8">History buttons mode</h2>

<p>Configure the function of the &lt; and &gt; buttons.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.historymode`

Setup level: Intermediate.

</details>

<h2 id="option-a283fbfbe1e7">Channel +/- button mode</h2>

<p>Select what you want the Channel +/- button to activate.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.channelbutton_mode`

Setup level: Simple.

</details>

<h2 id="option-8892bc31b085">UP/DOWN button mode</h2>

<p>Select what you want the UP/DOWN button to activate.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.updownbutton_mode`

Setup level: Simple.

</details>

<h2 id="option-81d4636fb804">BLUE switch: BLUE/BLUE long</h2>

<p>Switch BLUE short (QuickMenu) with BLUE long (Extension Menu).</p>

<details>
<summary>Reference & notes</summary>

`config.workaround.blueswitch`

Setup level: Simple.

</details>

<h2 id="option-ff8adfc077aa">Long press emulation with button</h2>

<p>Press this button to emulate a long press on a button pressed afterwards (this also overrides any other actions assigned to emulation button).</p>

<details>
<summary>Reference & notes</summary>

`config.usage.long_press_emulation_key`

Setup level: Simple.

</details>

<h2 id="option-fdc11058eca1">Add legacy LEFT/RIGHT actions</h2>

<p>Select &#x27;Yes&#x27; to enable use of the LEFT/RIGHT buttons to move PageUp/PageDown when the LEFT/RIGHT buttons are otherwise undefined. This provides legacy navigation for users who prefer it.</p>

<details>
<summary>Reference & notes</summary>

`config.misc.actionLeftRightToPageUpPageDown`

Setup level: Simple.

</details>

---

Source: [OpenATV setup.xml](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/data/setup.xml) · `fdc9347241`.
