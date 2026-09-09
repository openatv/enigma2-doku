---
title: "Software Manager Settings"
description: "Software Manager Settings: options, built-in help and menu location in openATV."
editUrl: false
pagefind: true
---

This reference contains the help text provided by openATV. The open dialog and selected options determine which entries are visible.

## Where do I find it?

**Main Menu → Setup → Software Management → Advanced Options → Software Manager Settings**

Search also matches technical keys. [Back to the directory](../../)

<h2 id="option-8d0448a39f29">Select Software Update</h2>

<p>Select how your receiver will upgrade.</p>

<details>
<summary>Reference & notes</summary>

`config.plugins.softwaremanager.updatetype`

Setup level: Expert.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-315e308db6c7">Overwrite configuration files?</h2>

<p>Overwrite configuration files during software upgrade?</p>

<details>
<summary>Reference & notes</summary>

`config.plugins.softwaremanager.overwriteConfigFiles`

Setup level: Expert.

</details>

<h2 id="option-21e0d0e9c331">Overwrite Setting Files?</h2>

<p>Overwrite setting files (channellist) during software upgrade?</p>

<details>
<summary>Reference & notes</summary>

`config.plugins.softwaremanager.overwriteSettingsFiles`

Setup level: Expert.

</details>

<h2 id="option-00670fdf004b">Overwrite Driver Files?</h2>

<p>Overwrite driver files during software upgrade?</p>

<details>
<summary>Reference & notes</summary>

`config.plugins.softwaremanager.overwriteDriversFiles`

Setup level: Expert.

</details>

<h2 id="option-25dfa296cd8b">Overwrite Emu Files?</h2>

<p>Overwrite softcam files during software upgrade?</p>

<details>
<summary>Reference & notes</summary>

`config.plugins.softwaremanager.overwriteEmusFiles`

Setup level: Expert.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-738b92c46461">Overwrite Picon Files?</h2>

<p>Overwrite picon files during software upgrade?</p>

<details>
<summary>Reference & notes</summary>

`config.plugins.softwaremanager.overwritePiconsFiles`

Setup level: Expert.

</details>

<h2 id="option-5e907c718178">Overwrite Bootlogo Files?</h2>

<p>Overwrite bootlogo files during software upgrade?</p>

<details>
<summary>Reference & notes</summary>

`config.plugins.softwaremanager.overwriteBootlogoFiles`

Setup level: Expert.

</details>

<h2 id="option-14a8a3f19601">Overwrite Spinner Files?</h2>

<p>Overwrite spinner files during software upgrade?</p>

<details>
<summary>Reference & notes</summary>

`config.plugins.softwaremanager.overwriteSpinnerFiles`

Setup level: Expert.

</details>

<h2 id="option-aae3a962c2e5">Mode for autorestore</h2>

<p>Turbo: One reboot after flash; Fast: One reboot after flash, one reboot after restore; Slow: One reboot after flash, one reboot after restore in GUI.</p>

<details>
<summary>Reference & notes</summary>

`config.plugins.softwaremanager.restoremode`

Setup level: Expert.

</details>

<h2 id="option-a10bd29e6e78">Settings Backup Target</h2>

<p>Define the default settings backup target location. Select &#x27;Ask user&#x27; to prompt the user for the target location when the backup is run.</p>

<details>
<summary>Reference & notes</summary>

`config.plugins.softwaremanager.backuptarget`

Setup level: Expert.

</details>

---

Source: [openATV setup.xml](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/data/setup.xml) · `fdc9347241`.
