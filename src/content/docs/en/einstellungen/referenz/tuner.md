---
title: "Tuner Settings"
description: "Tuner Settings: options, built-in help and menu location in openATV."
editUrl: false
pagefind: true
---

This reference contains the help text provided by openATV. The open dialog and selected options determine which entries are visible.

## Where do I find it?

**Main Menu → Setup → Tuners, Scanning & Reception → Tuner Settings**

Search also matches technical keys. [Back to the directory](../../)

<h2 id="option-f13acfda23e9">Force LNB Power</h2>

<p>Force LNB Tuner Power settings.</p>

<details>
<summary>Reference & notes</summary>

`config.tunermisc.forceLnbPower`

Setup level: Intermediate.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-1e1aa3aed941">Force ToneBurst</h2>

<p>Force LNB Tuner ToneBurst settings.</p>

<details>
<summary>Reference & notes</summary>

`config.tunermisc.forceToneBurst`

Setup level: Intermediate.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-4d2171fb2cdf">12V output</h2>

<p>12V output.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.output_12V`

Setup level: Intermediate.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-5f2c718dfc3c">Preferred tuner</h2>

<p>Configure which tuner will be preferred, when more than one tuner is available. If set to &#x27;auto&#x27; the system will give priority to the tuner having the lowest number of channels/satellites.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.frontend_priority`

Setup level: Expert.

</details>

<h2 id="option-a0ebf09b7a8f">Preferred tuner for recordings</h2>

<p>Configure which tuner will be preferred for recordings, when more than one tuner is available. &#x27;Disabled&#x27; would select a tuner based on preferred tuner in customize screen. &#x27;Auto&#x27; would choose based on E2&#x27;s default rules, ignoring preferred tuner in customize screen.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.recording_frontend_priority`

Setup level: Expert.

</details>

<h2 id="option-f89be0802b41">Preferred tuners for recordings, multiple selection allowed</h2>

<p>In expert mode, configure which tuners will be preferred for recordings, when more than one tuner is available.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.recording_frontend_priority_multiselect`

Setup level: Expert.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-abc3af483997">Experimental: strict limitation to preferred tuners for recordings</h2>

<p>Configure whether another tuner from the preferred list is allocated for recordings instead of sharing a tuner that is already active receiving the same live TV channel.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.recording_frontend_priority_strictly`

Setup level: Expert.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-76de1ec1db2f">Disable background scanning</h2>

<p>When tuned to a service, the system normally scans the transponder for changes and saves them. Enable only if you know what you&#x27;re doing.</p>

<details>
<summary>Reference & notes</summary>

`config.misc.disable_background_scan`

Setup level: Expert.

</details>

<h2 id="option-b8fcb7c8c2a4">Ignore DVB-S namespace sub network</h2>

<p>On valid ONIDs, ignore frequency sub network part.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.subnetwork`

Setup level: Expert.

</details>

<h2 id="option-d48731b679a1">Ignore DVB-C namespace sub network</h2>

<p>On valid ONIDs, ignore frequency sub network part.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.subnetwork_cable`

Setup level: Expert.

</details>

<h2 id="option-c66cd49766bb">Ignore DVB-T namespace sub network</h2>

<p>On valid ONIDs, ignore frequency sub network part.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.subnetwork_terrestrial`

Setup level: Expert.

</details>

<h2 id="option-ffc47a2e55c0">Delivery system workaround</h2>

<p>Workaround for old tuner driver.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.enable_delivery_system_workaround`

Setup level: Intermediate.

Visibility depends on other options or the dialog.

</details>

---

Source: [openATV setup.xml](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/data/setup.xml) · `fdc9347241`.
