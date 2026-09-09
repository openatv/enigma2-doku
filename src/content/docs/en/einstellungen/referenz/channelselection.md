---
title: "Channel Selection Settings"
description: "Channel Selection Settings: options, built-in help and menu location in openATV."
editUrl: false
pagefind: true
---

This reference contains the help text provided by openATV. The open dialog and selected options determine which entries are visible.

## Where do I find it?

**Main Menu → Setup → Usage & GUI → Channel Selection Settings**

Search also matches technical keys. [Back to the directory](../../)

<h2 id="option-5deb62b2cc26">Channel Selection Screen</h2>

<p>Select the screen layout, from the options provided by the skin, to be used for the ChannelSelection screen.</p>

<details>
<summary>Reference & notes</summary>

`config.channelSelection.screenStyle`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-6fde9d0ad9ad">Channel Selection List</h2>

<p>Select the layout of the information in the services list, from the options provided by the skin, displayed within the ChannelSelection screen.</p>

<details>
<summary>Reference & notes</summary>

`config.channelSelection.widgetStyle`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-437ed7d3d1f5">Include CI assignment</h2>

<p>Set CI assignment for detection of available services.</p>

<details>
<summary>Reference & notes</summary>

`config.misc.use_ci_assignment`

Setup level: Simple.

</details>

<h2 id="option-7e6928bc72de">Numbering mode</h2>

<p>Select &#x27;Unique numbering&#x27; to assign unique numbers for every service in every bouquet. Use &#x27;Bouquets start at 1&#x27; to start numbering each bouquet from 1. Use &#x27;LCN numbering&#x27; to use consistent service LCNs where ever that service is used.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.numberMode`

Setup level: Intermediate.

</details>

<h2 id="option-4344437b2b1f">Always show bouquets</h2>

<p>Select &#x27;Yes&#x27; to always show the bouquet screen first when opening the channel list. Select &#x27;No&#x27; to open the channel list using the current bouquet.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.show_bouquetalways`

Setup level: Intermediate.

</details>

<h2 id="option-c69d18f30284">Change bouquets in quickzap</h2>

<p>When enabled, continue to the next bouquet when the last channel of the current bouquet is reached while changing channels.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.quickzap_bouquet_change`

Setup level: Intermediate.

</details>

<h2 id="option-62f478f2c6f7">Channel list preview</h2>

<p>Select &#x27;Yes&#x27; to enable preview of channels while in the EPG list. Press &#x27;OK&#x27; to preview the currently selected channel. Press &#x27;OK&#x27; again to exit the EPG and zap to the selected channel. Press &#x27;EXIT&#x27; to exit the EPG and return to the previously selected channel.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.servicelistpreview_mode`

Setup level: Intermediate.

</details>

<h2 id="option-1930f7fc43e8">Channel list show MiniTV*</h2>

<p>Channel list show MiniTV when Skin use.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.use_pig`

Setup level: Intermediate.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-d011ea6f3958">Channel list service mode*</h2>

<p>This option allows you to choose from the two channel lists that are available.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.servicelist_mode`

Setup level: Intermediate.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-0a4c856981ea">Channel list on mode change</h2>

<p>Select &#x27;Yes&#x27; to show the channel list after switching between Radio and TV modes.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.show_servicelist`

Setup level: Intermediate.

</details>

<h2 id="option-15242b9d5b14">Channel list cursor behavior</h2>

<p>Configure the cursor behavior in the channel selection list. When opening the channel selection list you can remain on the current service or already select up/down and you are able to revert the B+/B- buttons.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.servicelist_cursor_behavior`

Setup level: Intermediate.

</details>

<h2 id="option-73b6bc937fd1">Enable multiple bouquets</h2>

<p>Services may be grouped in bouquets. When enabled, you can use more than one bouquet.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.multibouquet`

Setup level: Intermediate.

</details>

<h2 id="option-b48277df14f1">Load unlinked user bouquets</h2>

<p>Select &#x27;Yes&#x27; to enable the loading of unlinked user bouquets. That is, user bouquets that are not included in the bouquets.tv or bouquets.radio files will be loaded. This allows you to, for example, create bouquets that do not conflict with, or get replaced by, bouquets that came from settings packages.</p>

<details>
<summary>Reference & notes</summary>

`config.misc.load_unlinked_userbouquets`

Setup level: Expert.

</details>

<h2 id="option-cb6910aee064">Hide number markers</h2>

<p>When enabled, number markers will be hidden.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.hide_number_markers`

Setup level: Intermediate.

</details>

<h2 id="option-eb356a6064fb">Enable panic button</h2>

<p>When enabled, pressing &#x27;0&#x27; will zap you to the first channel in your first bouquet and delete your zap-history.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.panicbutton`

Setup level: Intermediate.

</details>

<h2 id="option-f1bd58e3a7f9">Panic channel</h2>

<p>Pressing the panic button will zap you to this channel number in your first bouquet.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.panicchannel`

Setup level: Intermediate.

</details>

<h2 id="option-10eba6b80b0d">Show picons in quickzap</h2>

<p>Configure if service picons will be shown in quickzap.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.numzappicon`

Setup level: Expert.

</details>

<h2 id="option-be774bc7d46f">Jump first press in channel selection</h2>

<p>This option allows you to choose what the first button press jumps to in channel list screen, (so pressing &#x27;2&#x27; jumps to &#x27;A&#x27; or &#x27;2&#x27; first), when &#x27;Quick Actions&#x27; preset actions are performed.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.show_channel_jump_in_servicelist`

Setup level: Intermediate.

</details>

<h2 id="option-90a08fc387e1">Show channel numbers in channel selection</h2>

<p>When enabled, show channel numbers in the channel selection screen.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.show_channel_numbers_in_servicelist`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-cf4d6751f779">Show picons in service list</h2>

<p>Configure if service picons will be shown in the service list.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.service_icon_enable`

Setup level: Intermediate.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-b877db33e757">Service picons aspect ratio</h2>

<p>Set the aspect ratio of the service picons.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.servicelist_picon_ratio`

Setup level: Intermediate.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-86e84db52ac2">Service picons downsize</h2>

<p>Reduce the size of the service picons for more line spacing between them.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.servicelist_picon_downsize`

Setup level: Intermediate.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-006ea1e565fe">Show service type icons</h2>

<p>Configure if and how service type icons will be shown.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.servicetype_icon_mode`

Setup level: Intermediate.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-b7c327e88791">Show crypto icons</h2>

<p>Configure if and how crypto icons will be shown in the channel selection list.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.crypto_icon_mode`

Setup level: Intermediate.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-6dee9820252b">Show record indicator</h2>

<p>Configure if and how the record indicator will be shown in the channel selection list.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.record_indicator_mode`

Setup level: Intermediate.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-66e81b859f9e">Show two lines per entry</h2>

<p>Show service name and event description among each other instead of side by side. After a change, an adjustment of the number of lines is required.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.servicelist_twolines`

Setup level: Intermediate.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-0a7ec44d7bd1">Alignment channel number</h2>

<p>Vertical alignment for the service number.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.servicelist_servicenumber_valign`

Setup level: Intermediate.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-86f5af272c0e">Alignment event-progress</h2>

<p>Vertical alignment for the event-progress.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.servicelist_eventprogress_valign`

Setup level: Intermediate.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-4093d398518f">Show event-progress in channel selection</h2>

<p>Set the type of the progress indication in the channel selection screen.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.servicelist_eventprogress_view_mode`

Setup level: Intermediate.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-d249c53cdd92">Show event-progress in channel selection</h2>

<p>Set the type of the progress indication in the channel selection screen.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.show_event_progress_in_servicelist`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-ae9367a948e0">Show columns</h2>

<p>Configure if and how wide the service name column will be shown in the channel selection list.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.servicelist_column`

Setup level: Intermediate.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-c085a78abced">Number of rows</h2>

<p>This allows you to change the number of rows shown.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.serviceitems_per_page_twolines`

Setup level: Intermediate.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-e3e6a1dd868e">Number of rows</h2>

<p>This allows you to change the number of rows shown.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.serviceitems_per_page`

Setup level: Intermediate.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-2c47a11592fd">Service number font size</h2>

<p>This allows you to change the font size relative to skin size, so 1 increases by 1 point size, and -1 decreases by 1 point size.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.servicenum_fontsize`

Setup level: Intermediate.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-c148208bb167">Service name font size</h2>

<p>This allows you to change the font size relative to skin size, so 1 increases by 1 point size, and -1 decreases by 1 point size.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.servicename_fontsize`

Setup level: Intermediate.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-d054488f1622">Service info font size</h2>

<p>This allows you to change the font size relative to skin size, so 1 increases by 1 point size, and -1 decreases by 1 point size.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.serviceinfo_fontsize`

Setup level: Intermediate.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-c7b440c7318e">Progress info font size</h2>

<p>This allows you to change the font size relative to skin size, so 1 increases by 1 point size, and -1 decreases by 1 point size.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.progressinfo_fontsize`

Setup level: Intermediate.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-66de82c57468">Show channel numbers in channel selection</h2>

<p>When enabled, show channel numbers in the channel selection screen.</p>

<details>
<summary>Reference & notes</summary>

`config.channelSelection.showNumber`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-e62cbf6f6bb2">Show picons in service list</h2>

<p>Configure if service picons will be shown in the service list.</p>

<details>
<summary>Reference & notes</summary>

`config.channelSelection.showPicon`

Setup level: Intermediate.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-f915e9481931">Service picons aspect ratio</h2>

<p>Set the aspect ratio of the service picons.</p>

<details>
<summary>Reference & notes</summary>

`config.channelSelection.piconRatio`

Setup level: Intermediate.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-8ce4387e4990">Show service type icons</h2>

<p>Configure if service type icons will be shown.</p>

<details>
<summary>Reference & notes</summary>

`config.channelSelection.showServiceTypeIcon`

Setup level: Intermediate.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-44db08dbc9f7">Show crypto icons</h2>

<p>Configure if crypto icons will be shown in the channel selection list.</p>

<details>
<summary>Reference & notes</summary>

`config.channelSelection.showCryptoIcon`

Setup level: Intermediate.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-acebfeb799dc">Show record indicator</h2>

<p>Configure if and how the record indicator will be shown in the channel selection list.</p>

<details>
<summary>Reference & notes</summary>

`config.channelSelection.recordIndicatorMode`

Setup level: Intermediate.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-043fd3f3f510">Zap mode</h2>

<p>Setup how to control the channel changing.</p>

<details>
<summary>Reference & notes</summary>

`config.misc.zapmode`

Setup level: Intermediate.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-42cc746670de">Number of digits in service number</h2>

<p>This allows you to set the maximum number of digits in a service number, up to 6.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.numberZapDigits`

Setup level: Expert.

</details>

<h2 id="option-739b7b00d295">Service zap screen contents</h2>

<p>Select the preferred service information to display, in addition to the service number, for the service selection pop up screen.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.numberZapDisplay`

Setup level: Expert.

</details>

<h2 id="option-20d686626ad7">Service zap delay mode</h2>

<p>Select if data entry timeouts are to be applied when entering digits into the service selection pop up screen. When a timeout is exceeded the currently entered number will be used for the service selection. The default timeouts are first digit 3 seconds, other digits 1 second.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.numberZapTimeouts`

Setup level: Expert.

</details>

<h2 id="option-0d1a89e0291d">Service zap first button delay</h2>

<p>Select the delay to wait after pressing the first digit button to select a new service.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.numberZapTimeoutFirst`

Setup level: Expert.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-0639d2dd3a5b">Service zap other button delay</h2>

<p>Select the delay to wait after pressing more digit buttons to select a new service.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.numberZapTimeoutOther`

Setup level: Expert.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-4b449e785e56">Set action for &#x27;Info&#x27; key</h2>

<p>Here you can set what is called when pressing the &#x27;Info&#x27; key.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.servicelist_infokey`

Setup level: Simple.

</details>

---

Source: [openATV setup.xml](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/data/setup.xml) · `fdc9347241`.
