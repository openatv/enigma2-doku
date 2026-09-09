---
title: "EPG Settings"
description: "EPG Settings: options, built-in help and menu location in openATV."
editUrl: false
pagefind: true
---

This reference contains the help text provided by openATV. The open dialog and selected options determine which entries are visible.

## Where do I find it?

**Main Menu → Setup → EPG → EPG Settings**

Search also matches technical keys. [Back to the directory](../../)

<h2 id="option-8500723391e5">EPG location</h2>

<p>Choose the location where the EPG data will be stored when the openATV is shut down. The location must be available at boot time.</p>

<details>
<summary>Reference & notes</summary>

`config.misc.epgcachepath`

Setup level: Expert.

</details>

<h2 id="option-747704d58ac2">EPG filename</h2>

<p>Choose the name of the file that holds the EPG data when the openATV is shut down. This can be handy to differentiate between several receivers.</p>

<details>
<summary>Reference & notes</summary>

`config.misc.epgcachefilename`

Setup level: Expert.

</details>

<h2 id="option-20673f1b78f5">Scheduled load of &#x27;epg.dat&#x27;</h2>

<p>Allows the openATV to read the stored EPG data regularly.</p>

<details>
<summary>Reference & notes</summary>

`config.epg.cacheloadsched`

Setup level: Expert.

</details>

<h2 id="option-ec653907007c">Refresh every</h2>

<p>The openATV reads the stored EPG data every selected number of hours.</p>

<details>
<summary>Reference & notes</summary>

`config.epg.cacheloadtimer`

Setup level: Expert.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-ae33bcb18363">Save EPG data</h2>

<p>Configure if &#x27;epg.dat&#x27; should be saved at all.</p>

<details>
<summary>Reference & notes</summary>

`config.epg.saveepg`

Setup level: Expert.

</details>

<h2 id="option-3c0f1cbfe23d">Scheduled save of &#x27;epg.dat&#x27;</h2>

<p>Allows the openATV to store the EPG data regularly.</p>

<details>
<summary>Reference & notes</summary>

`config.epg.cachesavesched`

Setup level: Expert.

</details>

<h2 id="option-d72f3a8f21cc">Save every</h2>

<p>The openATV stores the EPG data every selected number of hours.</p>

<details>
<summary>Reference & notes</summary>

`config.epg.cachesavetimer`

Setup level: Expert.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-2a0655d41143">Show EIT Now/Next event data in the InfoBar</h2>

<p>Display the EIT Now/Next event data in the InfoBar.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.show_eit_nownext`

Setup level: Expert.

</details>

<h2 id="option-f47ae0f77090">Enable EIT EPG</h2>

<p>Use EIT EPG information when it is available.</p>

<details>
<summary>Reference & notes</summary>

`config.epg.eit`

Setup level: Expert.

</details>

<h2 id="option-0e2280e812df">Enable MHW EPG</h2>

<p>Use MHW EPG information when it is available.</p>

<details>
<summary>Reference & notes</summary>

`config.epg.mhw`

Setup level: Expert.

</details>

<h2 id="option-a8e23b044fd6">Enable FreeSat EPG</h2>

<p>Use FreeSat EPG information when it is available.</p>

<details>
<summary>Reference & notes</summary>

`config.epg.freesat`

Setup level: Expert.

</details>

<h2 id="option-da8d514295b2">Enable ViaSat EPG</h2>

<p>Use ViaSat EPG information when it is available.</p>

<details>
<summary>Reference & notes</summary>

`config.epg.viasat`

Setup level: Expert.

</details>

<h2 id="option-fd64170a8b4f">Enable Netmed EPG</h2>

<p>Use Netmed EPG information when it is available.</p>

<details>
<summary>Reference & notes</summary>

`config.epg.netmed`

Setup level: Expert.

</details>

<h2 id="option-28884aa94c7f">Enable Virgin EPG</h2>

<p>Use Virgin EPG information when it is available.</p>

<details>
<summary>Reference & notes</summary>

`config.epg.virgin`

Setup level: Expert.

</details>

<h2 id="option-8cd03a9e4ff8">Enable OpenTV EPG</h2>

<p>Use OpenTV EPG. Requires tuning to specific transponder to absorb EPG.</p>

<details>
<summary>Reference & notes</summary>

`config.epg.opentv`

Setup level: Expert.

</details>

<h2 id="option-2ddd43d167e4">Maximum number of days in EPG</h2>

<p>Use for load only x days in EPG.</p>

<details>
<summary>Reference & notes</summary>

`config.epg.maxdays`

Setup level: Expert.

</details>

<h2 id="option-c9ff86534a97">EPG history</h2>

<p>Select how much EPG history, if any, to keep in the EPG cache. This historic data can be browsed in any of the EPG views. This can be useful for information about an event which has finished.</p>

<details>
<summary>Reference & notes</summary>

`config.epg.histminutes`

Setup level: Expert.

</details>

<h2 id="option-5fb2e68745a9">Include EIT in http streams</h2>

<p>When enabled, EIT data will be included in http streams. This allows a client receiver to show EPG.</p>

<details>
<summary>Reference & notes</summary>

`config.streaming.stream_eit`

Setup level: Expert.

</details>

<h2 id="option-f6cce59d6b41">Include AIT in http streams</h2>

<p>When enabled, AIT data will be included in http streams. This allows a client receiver to use HbbTV.</p>

<details>
<summary>Reference & notes</summary>

`config.streaming.stream_ait`

Setup level: Expert.

</details>

<h2 id="option-4150c85a1d83">Include SDT and BAT in http streams</h2>

<p>When enabled, SDT and BAT data will be included in http streams.</p>

<details>
<summary>Reference & notes</summary>

`config.streaming.stream_sdtbat`

Setup level: Expert.

</details>

<h2 id="option-e0f3dfa8862c">Country for EPG event rating information</h2>

<p>Choose a country scheme for decoding rating information in EPG events.</p>

<details>
<summary>Reference & notes</summary>

`config.misc.epgratingcountry`

Setup level: Expert.

</details>

<h2 id="option-24a604c19379">Country for EPG event genre information</h2>

<p>Choose a country scheme for decoding genre information in EPG events.</p>

<details>
<summary>Reference & notes</summary>

`config.misc.epggenrecountry`

Setup level: Expert.

</details>

<h2 id="option-d3db2cbfe126">Correct invalid EPG data</h2>

<p>Choose the option to correct invalid EPG data.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.correct_invalid_epgdata`

Setup level: Expert.

</details>

---

Source: [openATV setup.xml](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/data/setup.xml) · `fdc9347241`.
