---
title: "Time Shift Settings"
description: "Time Shift Settings: options, built-in help and menu location in openATV."
editUrl: false
pagefind: true
---

This reference contains the help text provided by openATV. The open dialog and selected options determine which entries are visible.

## Where do I find it?

**Main Menu → Setup → Playback, Recording & Time Shift → Time Shift Settings**

Search also matches technical keys. [Back to the directory](../../)

<h2 id="option-f4b991d30c86">Time shift buffer location</h2>

<p>Set the default location to store your time shift buffer files. Press &#x27;OK&#x27; to add new locations, press &#x27;LEFT&#x27;/&#x27;RIGHT&#x27; to select from previously defined locations.</p>

<details>
<summary>Reference & notes</summary>

`config.timeshift.path`

Setup level: Expert.

</details>

<h2 id="option-1001c15ac73d">Automatically start time shift after</h2>

<p>When enabled, time shift starts automatically in background after specified time.</p>

<details>
<summary>Reference & notes</summary>

`config.timeshift.startDelay`

Setup level: Intermediate.

</details>

<h2 id="option-3d399f679151">Enable Autorecord</h2>

<p>Set to &#x27;Yes&#x27;, to enable automatic recording of the background time shift buffer.</p>

<details>
<summary>Reference & notes</summary>

`config.timeshift.autorecord`

Setup level: Expert.

</details>

<h2 id="option-9af01ce2ab1c">Show warning when time shift is stopped</h2>

<p>When enabled, a warning will be displayed and the user will get an option to stop or to continue the time shift.</p>

<details>
<summary>Reference & notes</summary>

`config.timeshift.check`

Setup level: Intermediate.

</details>

<h2 id="option-ccf359c3ea69">Show status messages on switch to live TV</h2>

<p>When enabled, show status or error messages.</p>

<details>
<summary>Reference & notes</summary>

`config.timeshift.showLiveTVMsg`

Setup level: Expert.

</details>

<h2 id="option-505dad2e81a4">Time shift save action on zap</h2>

<p>Select if time shift must continue when set to record.</p>

<details>
<summary>Reference & notes</summary>

`config.timeshift.favoriteSaveAction`

Setup level: Expert.

</details>

<h2 id="option-732c092724a2">Stop time shift while recording</h2>

<p>Stops time shift being used if a recording is in progress. This is advisable for USB sticks.</p>

<details>
<summary>Reference & notes</summary>

`config.timeshift.stopWhileRecording`

Setup level: Expert.

</details>

<h2 id="option-03f2d7b2a685">Skip jumping to live while timeshifting with plugins</h2>

<p>If set to &#x27;Yes&#x27;, allows the use of time shift with alternative audio plugins.</p>

<details>
<summary>Reference & notes</summary>

`config.timeshift.skipReturnToLive`

Setup level: Expert.

</details>

<h2 id="option-9376181062b5">Use time shift SeekBar while time shifting</h2>

<p>Select &#x27;Yes&#x27; to allow use of the SeekBar to jump to a selected point within the event.</p>

<details>
<summary>Reference & notes</summary>

`config.timeshift.showInfoBar`

Setup level: Expert.

</details>

<h2 id="option-20f4871c1f30">Time shift buffer limit</h2>

<p>Older files in the time shift directory are removed on every event change.</p>

<details>
<summary>Reference & notes</summary>

`config.timeshift.maxHours`

Setup level: Expert.

</details>

<h2 id="option-62490b332476">Time shift event limit</h2>

<p>&#x27;Buffer in hours&#x27; or &#x27;number of last events&#x27;. For deleting older time shift files, the condition which occurred first has priority.</p>

<details>
<summary>Reference & notes</summary>

`config.timeshift.maxEvents`

Setup level: Expert.

</details>

<h2 id="option-f2c83bf1398a">Time shift checking for older files</h2>

<p>In addition to the check at an event start, a repetitive check can be used, so that the conditions &#x27;buffer limit in hours&#x27; or &#x27;check free space&#x27; are detected earlier.</p>

<details>
<summary>Reference & notes</summary>

`config.timeshift.checkEvents`

Setup level: Expert.

</details>

<h2 id="option-57b7aba07f77">Time shift checking for free space</h2>

<p>If the free space is less than setting value, then an attempt is made to delete the old time shift files.</p>

<details>
<summary>Reference & notes</summary>

`config.timeshift.checkFreeSpace`

Setup level: Expert.

</details>

<h2 id="option-b7cd8d893345">Time shift buffer delete after zap</h2>

<p>Select &#x27;No&#x27; to save older events even after zapping or interrupting time shifting.</p>

<details>
<summary>Reference & notes</summary>

`config.timeshift.deleteAfterZap`

Setup level: Expert.

</details>

<h2 id="option-bcfa23408e09">Time shift event based file splitting</h2>

<p>Select &#x27;No&#x27; to make time shift use a single buffer file. Use &#x27;Time shift checking for older files [in minutes]&#x27; and &#x27;Time shift checking for free space?&#x27; to control the size of the buffer file.</p>

<details>
<summary>Reference & notes</summary>

`config.timeshift.fileSplitting`

Setup level: Expert.

</details>

<h2 id="option-6eafe3dc04c5">Streaming recovery delay</h2>

<p>Enter the duration to be added to the streaming buffer after a streaming error. This extra buffer can help to avoid further streaming issues due to a lack of buffer space.</p>

<details>
<summary>Reference & notes</summary>

`config.timeshift.recoveryBufferDelay`

Setup level: Expert.

</details>

<h2 id="option-59d60ab91c37">Hardware latency correction</h2>

<p>Adjusts compensation for hardware buffer latency for DM9x0.</p>

<details>
<summary>Reference & notes</summary>

`config.timeshift.hwLatencyCorrection`

Setup level: Expert.

Visibility depends on other options or the dialog.

</details>

---

Source: [openATV setup.xml](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/data/setup.xml) · `fdc9347241`.
