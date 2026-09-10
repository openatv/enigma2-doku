---
title: "DAB+: option reference"
description: "OpenATV: DAB+: option reference."
---


This reference covers form variants in the reviewed revision. Hardware and selection determine which subset is shown. Identically named fields can appear in different places. **Technical expressions are source-code search aids, not commands to paste into the receiver.** `nim` denotes a tuner, `currLnb` the selected LNB profile, and `Sat` a satellite assignment. Configure through the menu.

[Reception overview](../) · [Wiring drawings](../verkabelung/)

The following eight base fields are supplemented by dynamic satellite checkboxes, a DVB driver blacklist option where offered, and USB diagnostic rows. These variable entries and the Refresh action are explained in the [DAB+ chapter](../dabplus/); they are not additional universal setup keys.

## RTLSDR

<h3 id="rtlsdr-1">Show DAB+ slideshow</h3>

<p>Replace the static radio background with pictures transmitted by the current DAB+ station.</p>

`config.dab.slideshow`

<h3 id="rtlsdr-2">Reception sources to scan</h3>

<p>Scan the USB tuner, available DAB+ satellite feeds, or both.</p>

`config.dab.scanSource`


## RTLSDRSetup

<h3 id="rtlsdrsetup-1">Enable DAB+ mode</h3>

<p>Enable a selected RTL-SDR USB receiver for DAB+ reception. DVB-T and DAB+ cannot use the same receiver at the same time.</p>

`config.dab.rtlsdr.enabled`

<h3 id="rtlsdrsetup-2">Select tuner</h3>

<p>Select the RTL-SDR USB tuner to be used for DAB+ reception.</p>

`config.dab.rtlsdr.device`

<h3 id="rtlsdrsetup-3">Scan region</h3>

<p>Limit a DAB+ USB scan to the frequency blocks defined for this region in the &#x27;dab.xml&#x27; file.</p>

`config.dab.rtlsdr.region`

<h3 id="rtlsdrsetup-4">Automatic gain</h3>

<p>Let the tuner select its RF gain automatically.</p>

`config.dab.rtlsdr.automaticGain`

<h3 id="rtlsdrsetup-5">RF gain</h3>

<p>Position in the tuner&#x27;s supported gain range. The back end selects the closest gain step.</p>

`config.dab.rtlsdr.gain`

<h3 id="rtlsdrsetup-6">Frequency correction offset</h3>

<p>Adjust the tuner oscillator offset to refine the DAB+ signal reception.</p>

`config.dab.rtlsdr.ppm`

Further reading: [Unicable](../unicable/), [manual scanning](../manueller-suchlauf/), [ABM](../autobouquetsmaker/) and [DAB+](../dabplus/).

Sources and verification: [Empfang](../quellen/).
