---
title: "DAB+ Settings"
description: "DAB+ Settings: options, built-in help and menu location in openATV."
editUrl: false
pagefind: true
---

This reference contains the help text provided by openATV. The open dialog and selected options determine which entries are visible.

## Where do I find it?

The direct menu location has not yet been mapped in this first edition. Look for **DAB+ Settings**.

Search also matches technical keys. [Back to the directory](../../)

<h2 id="option-09ed5a017aa1">Enable DAB+ mode</h2>

<p>Enable a selected RTL-SDR USB receiver for DAB+ reception. DVB-T and DAB+ cannot use the same receiver at the same time.</p>

<details>
<summary>Reference & notes</summary>

`config.dab.rtlsdr.enabled`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-0b2f86476c0c">Block RTL2832 DVB kernel driver</h2>

<p>Create or remove the RTL2832 DVB module blacklist. A full receiver reboot is required; while enabled, this USB tuner is available for DAB+ but not for DVB-T/T2.</p>

**After changing:** Restart required.

<details>
<summary>Reference & notes</summary>

`self.dvbKernelBlacklist`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-9ff58aa370d2">Select tuner</h2>

<p>Select the RTL-SDR USB tuner to be used for DAB+ reception.</p>

<details>
<summary>Reference & notes</summary>

`config.dab.rtlsdr.device`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-68b3df34ca8f">Scan region</h2>

<p>Limit a DAB+ USB scan to the frequency blocks defined for this region in the &#x27;dab.xml&#x27; file.</p>

<details>
<summary>Reference & notes</summary>

`config.dab.rtlsdr.region`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-1cc00d555dc2">Automatic gain</h2>

<p>Let the tuner select its RF gain automatically.</p>

<details>
<summary>Reference & notes</summary>

`config.dab.rtlsdr.automaticGain`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-84500e284d16">RF gain</h2>

<p>Position in the tuner&#x27;s supported gain range. The back end selects the closest gain step.</p>

<details>
<summary>Reference & notes</summary>

`config.dab.rtlsdr.gain`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-297722488215">Frequency correction offset</h2>

<p>Adjust the tuner oscillator offset to refine the DAB+ signal reception.</p>

<details>
<summary>Reference & notes</summary>

`config.dab.rtlsdr.ppm`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

---

Source: [openATV setup.xml](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/data/setup.xml) · `fdc9347241`.
