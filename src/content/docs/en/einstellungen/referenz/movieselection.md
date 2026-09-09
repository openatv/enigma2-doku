---
title: "Movie Selection Settings"
description: "Movie Selection Settings: options, built-in help and menu location in openATV."
editUrl: false
pagefind: true
---

This reference contains the help text provided by openATV. The open dialog and selected options determine which entries are visible.

## Where do I find it?

The direct menu location has not yet been mapped in this first edition. Look for **Movie Selection Settings**.

Search also matches technical keys. [Back to the directory](../../)

<h2 id="option-62959ff795b0">Use &#x27;Trash&#x27; in movie list</h2>

<p>When enabled, deleted recordings are moved to the trashcan, instead of being deleted immediately.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.movielist_trashcan`

Setup level: Simple.

</details>

<h2 id="option-369ebb395248">Purge &#x27;Trash&#x27; after</h2>

<p>Configure the number of days after which items are automatically removed from the trashcan.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.movielist_trashcan_days`

Setup level: Simple.

</details>

<h2 id="option-6dda28537985">Clean network &#x27;Trash&#x27;</h2>

<p>When enabled, network trashcans are probed for cleaning.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.movielist_trashcan_network_clean`

Setup level: Simple.

</details>

<h2 id="option-fe242a6b56f5">Space to reserve for recordings (GB)</h2>

<p>Configure the minimum amount of disk space to be available for recordings. When the amount of space drops below this value, deleted items will be removed from the trashcan.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.movielist_trashcan_reserve`

Setup level: Simple.

</details>

<h2 id="option-6a47cfbea044">Background delete option</h2>

<p>Configure on which devices the background delete option should be used.</p>

<details>
<summary>Reference & notes</summary>

`config.misc.erase_flags`

Setup level: Simple.

</details>

<h2 id="option-4bc69d775d1c">Background delete speed</h2>

<p>Configure the speed of the background deletion process. Lower speed will consume less hard disk drive performance.</p>

<details>
<summary>Reference & notes</summary>

`config.misc.erase_speed`

Setup level: Simple.

</details>

<h2 id="option-df07d1c5600c">Font size</h2>

<p>This allows you to change the font size relative to skin size, so 1 increases by 1 point size, and -1 decreases by 1 point size.</p>

<details>
<summary>Reference & notes</summary>

`config.movielist.fontsize`

Setup level: Simple.

</details>

<h2 id="option-11a6bc7ae221">Number of rows</h2>

<p>Number of rows to display.</p>

<details>
<summary>Reference & notes</summary>

`config.movielist.itemsperpage`

Setup level: Simple.

</details>

<h2 id="option-b5b8dbc4bd53">Use small screen</h2>

<p>Use an alternative smaller screen.</p>

<details>
<summary>Reference & notes</summary>

`config.movielist.useslim`

Setup level: Simple.

</details>

<h2 id="option-b8d899fcd194">Use extended List</h2>

<p>Use the extended List</p>

<details>
<summary>Reference & notes</summary>

`config.movielist.useextlist`

Setup level: Simple.

</details>

<h2 id="option-166820e9cb52">Update delay for Events in List</h2>

<p>Update delay for events in list. Scrolling in list is faster with higher delay, especially on big lists!</p>

<details>
<summary>Reference & notes</summary>

`config.movielist.eventinfo_delay`

Setup level: Simple.

</details>

<h2 id="option-0938c61532cb">Sort</h2>

<p>Set the default sorting method.</p>

<details>
<summary>Reference & notes</summary>

`config.movielist.moviesort`

Setup level: Simple.

</details>

<h2 id="option-1dd02a48564e">Show extended description</h2>

<p>Show or hide the extended description. This functionality may be skin dependent.</p>

<details>
<summary>Reference & notes</summary>

`config.movielist.description`

Setup level: Simple.

</details>

<h2 id="option-473f9f98c90c">Use per directory settings</h2>

<p>When set each folder will show the previous state used, when off the default values will be shown.</p>

<details>
<summary>Reference & notes</summary>

`config.movielist.settings_per_directory`

Setup level: Simple.

</details>

<h2 id="option-a1d18c57ae88">Action at end of media</h2>

<p>Select what action to take when reaching the end of a media file during playback.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.on_movie_eof`

Setup level: Simple.

</details>

<h2 id="option-6d7328c8e7f1">Stop service on return to movie list</h2>

<p>Stop previous broadcasted service on return to movie list.</p>

<details>
<summary>Reference & notes</summary>

`config.movielist.stop_service`

Setup level: Simple.

</details>

<h2 id="option-23c2649d0707">Show watch status</h2>

<p>Shows the watched status of the media.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.show_icons_in_movielist`

Setup level: Simple.

</details>

<h2 id="option-af50689b89f9">Show icon for new/unseen items</h2>

<p>Shows the icons when new/unseen, else will not show an icon.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.movielist_unseen`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-49b686c7491d">Play audio in background</h2>

<p>Keeps MovieList open whilst playing audio files.</p>

<details>
<summary>Reference & notes</summary>

`config.movielist.play_audio_internal`

Setup level: Simple.

</details>

<h2 id="option-f1cae2c368a3">Show live TV when movie stopped</h2>

<p>When set the PIG will return to live after a movie has stopped playing.</p>

<details>
<summary>Reference & notes</summary>

`config.movielist.show_live_tv_in_movielist`

Setup level: Simple.

</details>

<h2 id="option-2a10ca003467">Root directory</h2>

<p>Sets the root directory of media list. This removes the &#x27;..&#x27; entry from being shown in that directory.</p>

<details>
<summary>Reference & notes</summary>

`config.movielist.root`

Setup level: Simple.

</details>

<h2 id="option-e644d4d0b432">Hide known extensions</h2>

<p>Allows you to hide the extensions of known file types.</p>

<details>
<summary>Reference & notes</summary>

`config.movielist.hide_extensions`

Setup level: Simple.

</details>

<h2 id="option-3006a4187a27">Show underscore characters</h2>

<p>Set to &#x27;Disabled&#x27; to replace underscore characters, &#x27;_&#x27;, in file and directory names with spaces.</p>

<details>
<summary>Reference & notes</summary>

`config.movielist.show_underscores`

Setup level: Simple.

</details>

<h2 id="option-93c3b688c8e8">RED button</h2>

<p>Select the function to be assigned to this button.</p>

<details>
<summary>Reference & notes</summary>

`config.movielist.btn_red`

Setup level: Simple.

</details>

<h2 id="option-709e23b49904">GREEN button</h2>

<p>Select the function to be assigned to this button.</p>

<details>
<summary>Reference & notes</summary>

`config.movielist.btn_green`

Setup level: Simple.

</details>

<h2 id="option-481afdd1138a">YELLOW button</h2>

<p>Select the function to be assigned to this button.</p>

<details>
<summary>Reference & notes</summary>

`config.movielist.btn_yellow`

Setup level: Simple.

</details>

<h2 id="option-9bd99946321f">BLUE button</h2>

<p>Select the function to be assigned to this button.</p>

<details>
<summary>Reference & notes</summary>

`config.movielist.btn_blue`

Setup level: Simple.

</details>

<h2 id="option-3502cb8b53a5">RED long</h2>

<p>Select the function to be assigned to this button.</p>

<details>
<summary>Reference & notes</summary>

`config.movielist.btn_redlong`

Setup level: Simple.

</details>

<h2 id="option-db82ff80c062">GREEN long</h2>

<p>Select the function to be assigned to this button.</p>

<details>
<summary>Reference & notes</summary>

`config.movielist.btn_greenlong`

Setup level: Simple.

</details>

<h2 id="option-b88ae425ad24">YELLOW long</h2>

<p>Select the function to be assigned to this button.</p>

<details>
<summary>Reference & notes</summary>

`config.movielist.btn_yellowlong`

Setup level: Simple.

</details>

<h2 id="option-e505b27271c4">BLUE long</h2>

<p>Select the function to be assigned to this button.</p>

<details>
<summary>Reference & notes</summary>

`config.movielist.btn_bluelong`

Setup level: Simple.

</details>

<h2 id="option-12f42a33ce3c">RADIO</h2>

<p>Select the function to be assigned to this button.</p>

<details>
<summary>Reference & notes</summary>

`config.movielist.btn_radio`

Setup level: Simple.

</details>

<h2 id="option-9227dee01dec">TV</h2>

<p>Select the function to be assigned to this button.</p>

<details>
<summary>Reference & notes</summary>

`config.movielist.btn_tv`

Setup level: Simple.

</details>

<h2 id="option-3e8d262c949c">TEXT</h2>

<p>Select the function to be assigned to this button.</p>

<details>
<summary>Reference & notes</summary>

`config.movielist.btn_text`

Setup level: Simple.

</details>

<h2 id="option-0e75817ba1b7">F1</h2>

<p>Select the function to be assigned to this button.</p>

<details>
<summary>Reference & notes</summary>

`config.movielist.btn_F1`

Setup level: Simple.

</details>

<h2 id="option-1f14d6a2017d">F2</h2>

<p>Select the function to be assigned to this button.</p>

<details>
<summary>Reference & notes</summary>

`config.movielist.btn_F2`

Setup level: Simple.

</details>

<h2 id="option-c7a15da2ef72">F3</h2>

<p>Select the function to be assigned to this button.</p>

<details>
<summary>Reference & notes</summary>

`config.movielist.btn_F3`

Setup level: Simple.

</details>

---

Source: [openATV setup.xml](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/data/setup.xml) · `fdc9347241`.
