---
title: "AutoBouquetsMaker: all 28 form variants"
description: "OpenATV: AutoBouquetsMaker: all 28 form variants."
---


This reference covers form variants in the reviewed revision. Hardware and selection determine which subset is shown. Identically named fields can appear in different places. **Technical expressions are source-code search aids, not commands to paste into the receiver.** `nim` denotes a tuner, `currLnb` the selected LNB profile, and `Sat` a satellite assignment. Configure through the menu.

[Reception overview](../) · [Wiring drawings](../verkabelung/)

## ABM

<h3 id="abm-1">Schedule scan</h3>

<p>Allows you to set a schedule to perform a scan </p>

`config.autobouquetsmaker.schedule`

<h3 id="abm-2">Keep all non-ABM bouquets</h3>

<p>When disabled this will enable the &#x27;Keep bouquets&#x27; option in the main menu, allowing you to hide some &#x27;existing&#x27; bouquets.</p>

`config.autobouquetsmaker.keepallbouquets`

<h3 id="abm-3">Add provider name to bouquets</h3>

<p>This option will add the provider&#x27;s name to bouquet names.</p>

`config.autobouquetsmaker.addprefix`

<h3 id="abm-4">Add provider markers</h3>

<p>This option places markers in the bouquet index to group all bouquets of each provider.</p>

`config.autobouquetsmaker.markersinindex`

<h3 id="abm-5">Style of bouquet marker</h3>

<p>Choose the style of the markers that separate channels into groups in the channel lists.</p>

`config.autobouquetsmaker.bouquetmarkerstyle`

<h3 id="abm-6">Place bouquets at</h3>

<p>This option will allow you choose where to place the created bouquets.</p>

`config.autobouquetsmaker.placement`

<h3 id="abm-7">Skip services on not configured sats</h3>

<p>If a service is carried on a satellite that is not configured, &#x27;yes&#x27; means the channel will not appear in the channel list, &#x27;no&#x27; means the channel will show in the channel list but be greyed out and not be accessible.</p>

`config.autobouquetsmaker.skipservices`

<h3 id="abm-8">Extra debug</h3>

<p>This feature is for development only. Requires debug logs to be enabled or enigma2 to be started in console mode.</p>

`config.autobouquetsmaker.extra_debug`

<h3 id="abm-9">Show DVB-T frequency finder</h3>

<p>Select &quot;yes&quot; to show the &quot;DVB-T frequency finder&quot; tool in the main menu. This tool is used to create a working provider file for difficult areas of the UK, e.g. areas covered by repeaters, etc.</p>

`config.autobouquetsmaker.frequencyfinder`

<h3 id="abm-10">Show in extensions</h3>

<p>When enabled, allows you start a scan from the extensions list.</p>

`config.autobouquetsmaker.extensions`

<h3 id="abm-11">Provider enabled</h3>

<p>This option enables the current selected provider.</p>

`self.providers_configs[provider]`

<h3 id="abm-12">Schedule time of day</h3>

<p>Set the time of day to perform a scan.</p>

`config.autobouquetsmaker.scheduletime`

<h3 id="abm-13">Schedule days of the week</h3>

<p>Press OK to select which days to perform a scan.</p>

`config.autobouquetsmaker.dayscreen`

<h3 id="abm-14">Schedule wake from deep standby</h3>

<p>If the receiver is in &#x27;Deep Standby&#x27; when the schedule is due, wake it up to perform a scan.</p>

`config.autobouquetsmaker.schedulewakefromdeep`

<h3 id="abm-15">Style of provider marker</h3>

<p>Choose the style of markers that separate one provider from another in bouquet indexes.</p>

`config.autobouquetsmaker.indexmarkerstyle`

<h3 id="abm-16">Weekday enabled</h3>

<p>Allow scheduled ABM scanning on this weekday.</p>

`self.config.days[i]`

<h3 id="abm-17">Schedule return to deep standby</h3>

<p>If the receiver was woken from &#x27;Deep Standby&#x27; and is currently in &#x27;Standby&#x27; and no recordings are in progress return it to &#x27;Deep Standby&#x27; once the scan has completed.</p>

`config.autobouquetsmaker.scheduleshutdown`

<h3 id="abm-18">Region</h3>

<p>This option allows you to choose what region of the country you live in, so it populates the correct channels for your region.</p>

`self.providers_area[provider]`

<h3 id="abm-19">FTA only</h3>

<p>This affects all bouquets. Select &#x27;no&#x27; to scan in all services. Select &#x27;yes&#x27; to skip encrypted ones.</p>

`self.providers_FTA_only[provider]`

<h3 id="abm-20">Create main bouquet</h3>

<p>This option has several choices &quot;Yes&quot;, (create a bouquet with all the channels in it), &quot;Yes HD only&quot;, (will group all HD channels into this bouquet), &quot;Custom&quot;, (allows you to select your own bouquet), &quot;No&quot;, (do not use a main bouquet)</p>

`self.providers_makemain[provider]`

<h3 id="abm-21">Custom bouquet for main</h3>

<p>Select your own bouquet from the list, please note that the only the first 100 channels for this bouquet will be used.</p>

`self.providers_custommain[provider]`

<h3 id="abm-22">Create sections bouquets</h3>

<p>This option will create bouquets for each type of channel, ie Entertainment, Movies, Documentary.</p>

`self.providers_makesections[provider]`

<h3 id="abm-23">Create HD bouquet</h3>

<p>This option will create a High Definition bouquet, it will group all HD channels into this bouquet.</p>

`self.providers_makehd[provider]`

<h3 id="abm-24">Create FTA bouquet</h3>

<p>This option will create a FreeToAir bouquet, it will group all free channels into this bouquet.</p>

`self.providers_makefta[provider]`

<h3 id="abm-25">Create FTA HD bouquet</h3>

<p>This option will create a FreeToAir High Definition bouquet, it will group all FTA HD channels into this bouquet.</p>

`self.providers_makeftahd[provider]`

<h3 id="abm-26">Swap channels</h3>

<p>This option will swap SD versions of channels with HD versions. (eg BBC One SD with BBC One HD, Channel Four SD with with Channel Four HD)</p>

`self.providers_swapchannels[provider]`

<h3 id="abm-27">Custom mode</h3>

<p>Enable custom mode to apply provider-specific channel adjustments such as adding, removing or renaming channels.</p>

`self.providers_custom_list[provider]`

<h3 id="abm-28">Include non-indexed channels</h3>

<p>When a search finds extra channels that do not have an allocated channel number, &#x27;yes&#x27; will add these at the end of the channel list, and &#x27;no&#x27; means these will not be included.</p>

`self.providers_extraservices[provider]`

Further reading: [Unicable](../unicable/), [manual scanning](../manueller-suchlauf/), [ABM](../autobouquetsmaker/) and [DAB+](../dabplus/).

Sources and verification: [Empfang](../quellen/).
