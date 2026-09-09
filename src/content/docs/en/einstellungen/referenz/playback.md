---
title: "Playback Settings"
description: "Playback Settings: options, built-in help and menu location in openATV."
editUrl: false
pagefind: true
---

This reference contains the help text provided by openATV. The open dialog and selected options determine which entries are visible.

## Where do I find it?

**Main Menu → Setup → Playback, Recording & Time Shift → Playback Settings**

Search also matches technical keys. [Back to the directory](../../)

<h2 id="option-a60ba917efc5">Default movie selection location</h2>

<p>Set the default movie selection location for your media files. Press &#x27;OK&#x27; to add new locations, press &#x27;LEFT&#x27;/&#x27;RIGHT&#x27; to select from previously defined locations.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.default_path`

Setup level: Simple.

</details>

<h2 id="option-38acdf779b3c">Show movie lengths in movie list</h2>

<p>When enabled, the length of each recording will be shown in the movie list (this might cause some additional loading time).</p>

<details>
<summary>Reference & notes</summary>

`config.usage.load_length_of_movies_in_moviellist`

Setup level: Expert.

</details>

<h2 id="option-f1e56ee1c857">Show watch status</h2>

<p>Configure the type of status indication icons shown in the movie list.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.show_icons_in_movielist`

Setup level: Expert.

</details>

<h2 id="option-a74927db0a38">Allow quit movie player with exit</h2>

<p>When enabled, it is possible to leave the movie player with exit.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.leave_movieplayer_onExit`

Setup level: Expert.

</details>

<h2 id="option-356d5209e2bb">Behavior when a movie is started</h2>

<p>Configure the behavior when movie playback is started.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.on_movie_start`

Setup level: Expert.

</details>

<h2 id="option-7f26348f454d">Behavior when a movie is stopped</h2>

<p>Configure the behavior when movie playback is manually stopped.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.on_movie_stop`

Setup level: Expert.

</details>

<h2 id="option-24ce83af3572">Action at end of media</h2>

<p>Configure the behavior when reaching the end of a movie, during movie playback.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.on_movie_eof`

Setup level: Expert.

</details>

<h2 id="option-ebd4a57009ae">Display message before playing next movie</h2>

<p>When enabled, a pop up message will be shown when a movie has finished and the next one will start.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.next_movie_msg`

Setup level: Expert.

</details>

<h2 id="option-80cb10511cfa">Disable ServiceHiSilicon</h2>

<p>Select &#x27;Yes&#x27; to disable the ServiceHiSilicon plugin to allow use of the default internal media player code.</p>

**After changing:** GUI restart required.

<details>
<summary>Reference & notes</summary>

`config.misc.disableServiceHiSilicon`

Setup level: Expert.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-f698e3717cce">Show InfoBar on skip forward/backward</h2>

<p>Select &#x27;Yes, to display the InfoBar when fast forwarding or rewinding during media playback.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.show_infobar_on_skip`

Setup level: Intermediate.

</details>

<h2 id="option-dc764c69fa12">Show PVR status in MoviePlayer InfoBar</h2>

<p>This option moves the PVR status display from a separate window into the MoviePlayer InfoBar.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.movieplayer_pvrstate`

Setup level: Intermediate.

</details>

<h2 id="option-5b1fbb97b886">Behavior of &#x27;pause&#x27; when paused</h2>

<p>Configure the behavior of the &#x27;pause&#x27; key when movie playback is already paused.</p>

<details>
<summary>Reference & notes</summary>

`config.seek.on_pause`

Setup level: Expert.

</details>

<h2 id="option-24ad09d2a6f8">Show persistent InfoBar while paused</h2>

<p>Select &#x27;Yes&#x27; the keep the InfoBar displayed, with no timeout, while media playback is paused.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.show_infobar_locked_on_pause`

Setup level: Intermediate.

</details>

<h2 id="option-015fc1433bc4">SeekBar activation</h2>

<p>Select SeekBar to be activated by arrow LEFT/RIGHT (long) or &lt;&lt; &gt;&gt; (long).</p>

<details>
<summary>Reference & notes</summary>

`config.seek.baractivation`

Setup level: Expert.

</details>

<h2 id="option-241674cb7158">Arrow skip mode</h2>

<p>Select how the arrow buttons &#x27;UP&#x27;, &#x27;DOWN&#x27;, &#x27;LEFT&#x27; or &#x27;RIGHT&#x27; will act during seek actions.</p>

**After changing:** GUI restart required.

<details>
<summary>Reference & notes</summary>

`config.seek.arrowSkipMode`

Setup level: Expert.

</details>

<h2 id="option-791a7147bdf6">Skip sensibility for &#x27;%s&#x27; button</h2>

<p>Set the skip percentage for the &#x27;%s&#x27; button. Positive numbers skip forward, negative numbers skip backward.</p>

<details>
<summary>Reference & notes</summary>

`config.seek.sensibilities["UP"]`

Setup level: Expert.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-7e1789157d61">Skip sensibility for &#x27;%s&#x27; button</h2>

<p>Set the skip percentage for the &#x27;%s&#x27; button. Positive numbers skip forward, negative numbers skip backward.</p>

<details>
<summary>Reference & notes</summary>

`config.seek.sensibilities["LEFT"]`

Setup level: Expert.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-a76995356abd">Skip sensibility for &#x27;%s&#x27; button</h2>

<p>Set the skip percentage for the &#x27;%s&#x27; button. Positive numbers skip forward, negative numbers skip backward.</p>

<details>
<summary>Reference & notes</summary>

`config.seek.sensibilities["RIGHT"]`

Setup level: Expert.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-adcb7fd02a47">Skip sensibility for &#x27;%s&#x27; button</h2>

<p>Set the skip percentage for the &#x27;%s&#x27; button. Positive numbers skip forward, negative numbers skip backward.</p>

<details>
<summary>Reference & notes</summary>

`config.seek.sensibilities["DOWN"]`

Setup level: Expert.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-35af5ab9932f">Skip time for &#x27;%s&#x27; button</h2>

<p>Set the skip time interval for the &#x27;%s&#x27; button. Positive numbers skip forward, negative numbers skip backward.</p>

<details>
<summary>Reference & notes</summary>

`config.seek.defined["UP"]`

Setup level: Expert.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-50e73ab4ac5e">Skip time for &#x27;%s&#x27; button</h2>

<p>Set the skip time interval for the &#x27;%s&#x27; button. Positive numbers skip forward, negative numbers skip backward.</p>

<details>
<summary>Reference & notes</summary>

`config.seek.defined["LEFT"]`

Setup level: Expert.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-b951b7c7a9d4">Skip time for &#x27;%s&#x27; button</h2>

<p>Set the skip time interval for the &#x27;%s&#x27; button. Positive numbers skip forward, negative numbers skip backward.</p>

<details>
<summary>Reference & notes</summary>

`config.seek.defined["RIGHT"]`

Setup level: Expert.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-bb485cc0efda">Skip time for &#x27;%s&#x27; button</h2>

<p>Set the skip time interval for the &#x27;%s&#x27; button. Positive numbers skip forward, negative numbers skip backward.</p>

<details>
<summary>Reference & notes</summary>

`config.seek.defined["DOWN"]`

Setup level: Expert.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-5b7751c7afe1">Numeric skip mode</h2>

<p>Select how the number buttons will act during seek actions.</p>

<details>
<summary>Reference & notes</summary>

`config.seek.numberSkipMode`

Setup level: Expert.

</details>

<h2 id="option-fbb11f9949fe">Skip time for &#x27;%s&#x27;/&#x27;%s&#x27; buttons</h2>

<p>Set the skip time interval for the &#x27;%s&#x27;/&#x27;%s&#x27; buttons.</p>

<details>
<summary>Reference & notes</summary>

`config.seek.defined[13]`

Setup level: Expert.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-e4936aa74be5">Skip time for &#x27;%s&#x27;/&#x27;%s&#x27; buttons</h2>

<p>Set the skip time interval for the &#x27;%s&#x27;/&#x27;%s&#x27; buttons.</p>

<details>
<summary>Reference & notes</summary>

`config.seek.defined[46]`

Setup level: Expert.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-aef7efcb1761">Skip time for &#x27;%s&#x27;/&#x27;%s&#x27; buttons</h2>

<p>Set the skip time interval for the &#x27;%s&#x27;/&#x27;%s&#x27; buttons.</p>

<details>
<summary>Reference & notes</summary>

`config.seek.defined[79]`

Setup level: Expert.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-552114824609">Skip time for &#x27;%s&#x27; button</h2>

<p>Set the skip time interval for the &#x27;%s&#x27; button. Positive numbers skip forward, negative numbers skip backward.</p>

<details>
<summary>Reference & notes</summary>

`config.seek.defined[1]`

Setup level: Expert.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-bc4d7161fa16">Skip time for &#x27;%s&#x27; button</h2>

<p>Set the skip time interval for the &#x27;%s&#x27; button. Positive numbers skip forward, negative numbers skip backward.</p>

<details>
<summary>Reference & notes</summary>

`config.seek.defined[2]`

Setup level: Expert.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-5307aef69440">Skip time for &#x27;%s&#x27; button</h2>

<p>Set the skip time interval for the &#x27;%s&#x27; button. Positive numbers skip forward, negative numbers skip backward.</p>

<details>
<summary>Reference & notes</summary>

`config.seek.defined[3]`

Setup level: Expert.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-7283e77ce669">Skip time for &#x27;%s&#x27; button</h2>

<p>Set the skip time interval for the &#x27;%s&#x27; button. Positive numbers skip forward, negative numbers skip backward.</p>

<details>
<summary>Reference & notes</summary>

`config.seek.defined[4]`

Setup level: Expert.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-a4b38bed1a68">Skip time for &#x27;%s&#x27; button</h2>

<p>Set the skip time interval for the &#x27;%s&#x27; button. Positive numbers skip forward, negative numbers skip backward.</p>

<details>
<summary>Reference & notes</summary>

`config.seek.defined[5]`

Setup level: Expert.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-e498dffefb9b">Skip time for &#x27;%s&#x27; button</h2>

<p>Set the skip time interval for the &#x27;%s&#x27; button. Positive numbers skip forward, negative numbers skip backward.</p>

<details>
<summary>Reference & notes</summary>

`config.seek.defined[6]`

Setup level: Expert.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-6d0b90c6428e">Skip time for &#x27;%s&#x27; button</h2>

<p>Set the skip time interval for the &#x27;%s&#x27; button. Positive numbers skip forward, negative numbers skip backward.</p>

<details>
<summary>Reference & notes</summary>

`config.seek.defined[7]`

Setup level: Expert.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-b2e957c54f05">Skip time for &#x27;%s&#x27; button</h2>

<p>Set the skip time interval for the &#x27;%s&#x27; button. Positive numbers skip forward, negative numbers skip backward.</p>

<details>
<summary>Reference & notes</summary>

`config.seek.defined[8]`

Setup level: Expert.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-37b14621c1ab">Skip time for &#x27;%s&#x27; button</h2>

<p>Set the skip time interval for the &#x27;%s&#x27; button. Positive numbers skip forward, negative numbers skip backward.</p>

<details>
<summary>Reference & notes</summary>

`config.seek.defined[9]`

Setup level: Expert.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-332f568ba2f5">Skip time for &#x27;%s&#x27; button</h2>

<p>Set the skip time interval for the &#x27;%s&#x27; button. Positive numbers skip forward, negative numbers skip backward.</p>

<details>
<summary>Reference & notes</summary>

`config.seek.defined[0]`

Setup level: Expert.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-b0a617331d26">CutList skip time for &#x27;%s&#x27; button</h2>

<p>Set the skip time interval for the &#x27;%s&#x27; button.</p>

<details>
<summary>Reference & notes</summary>

`config.seek.defined["CUT_UP"]`

Setup level: Expert.

</details>

<h2 id="option-ea3dc63fbe9f">CutList skip time for &#x27;%s&#x27; button</h2>

<p>Set the skip time interval for the &#x27;%s&#x27; button.</p>

<details>
<summary>Reference & notes</summary>

`config.seek.defined["CUT_LEFT"]`

Setup level: Expert.

</details>

<h2 id="option-85b849bcf51c">CutList skip time for &#x27;%s&#x27; button</h2>

<p>Set the skip time interval for the &#x27;%s&#x27; button.</p>

<details>
<summary>Reference & notes</summary>

`config.seek.defined["CUT_RIGHT"]`

Setup level: Expert.

</details>

<h2 id="option-28748161d9f1">CutList skip time for &#x27;%s&#x27; button</h2>

<p>Set the skip time interval for the &#x27;%s&#x27; button.</p>

<details>
<summary>Reference & notes</summary>

`config.seek.defined["CUT_DOWN"]`

Setup level: Expert.

</details>

<h2 id="option-99d8b4604752">CutList skip time for &#x27;%s&#x27;/&#x27;%s&#x27; buttons</h2>

<p>Set the CutList Editor skip time interval for the &#x27;%s&#x27;/&#x27;%s&#x27; buttons.</p>

<details>
<summary>Reference & notes</summary>

`config.seek.defined["CUT_13"]`

Setup level: Expert.

</details>

<h2 id="option-07aebae93084">CutList skip time for &#x27;%s&#x27;/&#x27;%s&#x27; buttons</h2>

<p>Set the CutList Editor skip time interval for the &#x27;%s&#x27;/&#x27;%s&#x27; buttons.</p>

<details>
<summary>Reference & notes</summary>

`config.seek.defined["CUT_46"]`

Setup level: Expert.

</details>

<h2 id="option-3cf2f60b71ea">CutList skip time for &#x27;%s&#x27;/&#x27;%s&#x27; buttons</h2>

<p>Set the CutList Editor skip time interval for the &#x27;%s&#x27;/&#x27;%s&#x27; buttons.</p>

<details>
<summary>Reference & notes</summary>

`config.seek.defined["CUT_79"]`

Setup level: Expert.

</details>

<h2 id="option-d6b3a1bc8d92">SeekBar sensibility</h2>

<p>Set the jump-size of the SeekBar.</p>

<details>
<summary>Reference & notes</summary>

`config.seek.sensibility`

Setup level: Expert.

</details>

<h2 id="option-e6ee39fcfa1e">Custom skip time for &#x27;1&#x27;/&#x27;3&#x27; buttons</h2>

<p>Configure the skip time interval for the &#x27;1&#x27;/&#x27;3&#x27; buttons.</p>

<details>
<summary>Reference & notes</summary>

`config.seek.selfdefined_13`

Setup level: Expert.

</details>

<h2 id="option-096b963480ea">Custom skip time for &#x27;4&#x27;/&#x27;6&#x27; buttons</h2>

<p>Configure the skip time interval for the &#x27;4&#x27;/&#x27;6&#x27; buttons.</p>

<details>
<summary>Reference & notes</summary>

`config.seek.selfdefined_46`

Setup level: Expert.

</details>

<h2 id="option-44615c978405">Custom skip time for &#x27;7&#x27;/&#x27;9&#x27; buttons</h2>

<p>Configure the skip time interval for the &#x27;7&#x27;/&#x27;9&#x27; buttons.</p>

<details>
<summary>Reference & notes</summary>

`config.seek.selfdefined_79`

Setup level: Expert.

</details>

<h2 id="option-15b0f69c7747">Fast forward speeds</h2>

<p>Configure the possible fast forward speeds.</p>

<details>
<summary>Reference & notes</summary>

`config.seek.speeds_forward`

Setup level: Expert.

</details>

<h2 id="option-e48fa45e52eb">Rewind speeds</h2>

<p>Configure the possible rewind speeds.</p>

<details>
<summary>Reference & notes</summary>

`config.seek.speeds_backward`

Setup level: Expert.

</details>

<h2 id="option-15787fc6caee">Slow motion speeds</h2>

<p>Configure the slow motion speeds.</p>

<details>
<summary>Reference & notes</summary>

`config.seek.speeds_slowmotion`

Setup level: Expert.

</details>

<h2 id="option-d4c0c81338d0">Initial fast forward speed</h2>

<p>Configure the initial fast forward speed. When you press the fast forward button, winding will start at this speed.</p>

<details>
<summary>Reference & notes</summary>

`config.seek.enter_forward`

Setup level: Expert.

</details>

<h2 id="option-8e1594b52973">Initial rewind speed</h2>

<p>Configure the initial rewind speed. When you press the rewind button, winding will start at this speed.</p>

<details>
<summary>Reference & notes</summary>

`config.seek.enter_backward`

Setup level: Expert.

</details>

<h2 id="option-5558223fc918">Use time jumps for fast forward/backward</h2>

<p>This will go fast forward/backward with time frames of x secs.</p>

<details>
<summary>Reference & notes</summary>

`config.seek.withjumps`

Setup level: Expert.

</details>

<h2 id="option-550e9b4a0ab9">Time jump: Use normal fast forward for speeds</h2>

<p>Defines which fast forward speeds are using normal cueing. All other forward speeds and all rewind speeds use time jumps.</p>

<details>
<summary>Reference & notes</summary>

`config.seek.withjumps_after_ff_speed`

Setup level: Expert.

</details>

<h2 id="option-1d5cdce73b5c">Time jump multiplier for fast forward</h2>

<p>Defines the jump distance for forward jumps. The value is multiplied by the wind speed, e.g. 4x. Values significantly lower than 4s may not work with all media files.</p>

<details>
<summary>Reference & notes</summary>

`config.seek.withjumps_forwards_ms`

Setup level: Expert.

</details>

<h2 id="option-85fcc5ba237e">Time jump multiplier for fast backward</h2>

<p>Defines the jump distance for backward jumps. The value is multiplied by the rewind speed, e.g. -4x. Values significantly lower than 2s may not work with all media files.</p>

<details>
<summary>Reference & notes</summary>

`config.seek.withjumps_backwards_ms`

Setup level: Expert.

</details>

<h2 id="option-0cb78dccd447">Time jump repeat interval for fast forward/backward</h2>

<p>Defines how fast the time jumps are repeated. Values lower than 500ms may be problematic with NAS.</p>

<details>
<summary>Reference & notes</summary>

`config.seek.withjumps_repeat_ms`

Setup level: Expert.

</details>

<h2 id="option-ae01f310f3ba">Time jump avoid zero step size</h2>

<p>Avoid getting stuck (at the expense of some stuttering) when the jump time is smaller than the time between I-frames.</p>

<details>
<summary>Reference & notes</summary>

`config.seek.withjumps_avoid_zero`

Setup level: Expert.

</details>

<h2 id="option-f8988de729a6">Use &#x27;Trash&#x27; in movie list</h2>

<p>When enabled, deleted recordings are moved to the trashcan, instead of being deleted immediately.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.movielist_trashcan`

Setup level: Intermediate.

</details>

<h2 id="option-b24bafcc57c0">Purge &#x27;Trash&#x27; after</h2>

<p>Configure the number of days after which items are automatically removed from the trashcan.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.movielist_trashcan_days`

Setup level: Intermediate.

</details>

<h2 id="option-a587830f42ad">Clean network &#x27;Trash&#x27;</h2>

<p>When enabled, network trashcans are probed for cleaning.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.movielist_trashcan_network_clean`

Setup level: Intermediate.

</details>

<h2 id="option-f577ec021bd6">Space to reserve for recordings (GB)</h2>

<p>Configure the minimum amount of disk space to be available for recordings. When the amount of space drops below this value, deleted items will be removed from the trashcan.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.movielist_trashcan_reserve`

Setup level: Intermediate.

</details>

<h2 id="option-0312a2ce14a7">Background delete option</h2>

<p>Configure on which devices the background delete option should be used.</p>

<details>
<summary>Reference & notes</summary>

`config.misc.erase_flags`

Setup level: Expert.

</details>

<h2 id="option-be430200d837">Background delete speed</h2>

<p>Configure the speed of the background deletion process. Lower speed will consume less hard disk drive performance.</p>

<details>
<summary>Reference & notes</summary>

`config.misc.erase_speed`

Setup level: Expert.

</details>

---

Source: [openATV setup.xml](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/data/setup.xml) · `fdc9347241`.
