---
title: "Factory Reset"
description: "Factory Reset: options, built-in help and menu location in OpenATV."
editUrl: false
pagefind: true
---

This reference contains the help text provided by OpenATV. The open dialog and selected options determine which entries are visible.

## Where do I find it?

**Main Menu → Setup → System → Factory Reset**

Search also matches technical keys. [Back to the directory](../../)

<h2 id="option-84493b7d3d84">Full factory reset</h2>

<p>Select &#x27;Yes&#x27; to remove all settings, tuning data, timers, resume pointers etc. Selecting this option will restore the configuration to the initial settings before any configuration settings were applied. This is the most reliable form of Factory Reset.</p>

<details>
<summary>Reference & notes</summary>

`config.factory.resetFull`

Setup level: Simple.

</details>

<h2 id="option-e1fefb9ae4aa">Reset network configuration</h2>

<p>Select &#x27;Yes&#x27; to reset network configuration to the default. This will enable the Ethernet port if it exists and set the receiver to use DHCP. All other network interfaces will be deleted.</p>

<details>
<summary>Reference & notes</summary>

`config.factory.resetNetwork`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-d270103560f3">Remove all bouquet/tuning data</h2>

<p>Select &#x27;Yes&#x27; to remove all tuning data. Selecting this option will remove all tuning and bouquet data and will make timers non functional until the receiver is retuned.</p>

<details>
<summary>Reference & notes</summary>

`config.factory.resetBouquets`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-55b88be9aa6e">Remove all user interface data</h2>

<p>Select &#x27;Yes&#x27; to remove all user interface data. Selecting this option will remove all key map, menu and setup override data and restore the default definitions.</p>

<details>
<summary>Reference & notes</summary>

`config.factory.resetUserInterfaces`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-0423c38de518">Remove all network mount data</h2>

<p>Select &#x27;Yes&#x27; to remove all network mount data. Selecting this option will remove all network data including automounts and network connection data including connection accounts and passwords. This could cause some Enigma2 functions to fail if they are configured to use these network resources.</p>

<details>
<summary>Reference & notes</summary>

`config.factory.resetMounts`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-dbc9df9c4488">Remove all plugin setting data</h2>

<p>Select &#x27;Yes&#x27; to remove all plugin configuration data. Selecting this option will remove all plugin configuration data that is stored in the Enigma2 configuration folder. This will cause all affected plugins to return to their default settings. This could cause some plugins to not function until configured.</p>

<details>
<summary>Reference & notes</summary>

`config.factory.resetPlugins`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-88780bda6fe8">Remove all resume point data</h2>

<p>Select &#x27;Yes&#x27; to remove all media player resume data. Selecting this option will remove the data used to allow playback of media files to resume from the position where playback was last stopped. Playback position of recordings is not affected.</p>

<details>
<summary>Reference & notes</summary>

`config.factory.resetResumePoints`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-46cca821810d">Remove all settings data</h2>

<p>Select &#x27;Yes&#x27; to remove all main settings configuration data. Selecting this option will set all Enigma2 settings back to their default values. This will also cause Enigma2 to run the Welcome Wizard on restart.</p>

<details>
<summary>Reference & notes</summary>

`config.factory.resetSettings`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-fdf84cacbd67">Remove all skin data</h2>

<p>Select &#x27;Yes&#x27; to remove all user customizations of skin data. Selecting this option will remove all user based skin customizations. All affected skins will return to their standard settings. This will also clear any customized boot logos and backdrops.</p>

<details>
<summary>Reference & notes</summary>

`config.factory.resetSkins`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-e2cc7ba33468">Remove all timer data</h2>

<p>Select &#x27;Yes&#x27; to remove all timer configuration data. Selecting this option will clear all timers, autotimers and schedules.</p>

<details>
<summary>Reference & notes</summary>

`config.factory.resetTimers`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-d1076ae7a7ab">Remove all other data</h2>

<p>Select &#x27;Yes&#x27; to remove all other files and directories not covered by the options above.</p>

<details>
<summary>Reference & notes</summary>

`config.factory.resetOthers`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

---

Source: [OpenATV setup.xml](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/data/setup.xml) · `fdc9347241`.
