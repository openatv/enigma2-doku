---
title: "Recording Settings"
description: "Recording Settings: options, built-in help and menu location in openATV."
editUrl: false
pagefind: true
---

This reference contains the help text provided by openATV. The open dialog and selected options determine which entries are visible.

## Where do I find it?

**Main Menu → Setup → Playback, Recording & Time Shift → Recording Settings**

Search also matches technical keys. [Back to the directory](../../)

<h2 id="option-077acf9b2be1">Timer recording location</h2>

<p>Set the default recording location for your timers. Press &#x27;OK&#x27; to add new locations, press &#x27;LEFT&#x27;/&#x27;RIGHT&#x27; to select from previously defined locations.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.timer_path`

Setup level: Expert.

</details>

<h2 id="option-f947b4bf9f2b">Instant recording location</h2>

<p>Set the default location for your instant recordings. Press &#x27;OK&#x27; to add new locations, press &#x27;LEFT&#x27;/&#x27;RIGHT&#x27; to select from previously defined locations.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.instantrec_path`

Setup level: Expert.

</details>

<h2 id="option-db4c10363531">Time shift save location</h2>

<p>Set the default location to save your time shift recording files. Press &#x27;OK&#x27; to add new locations, press LEFT/RIGHT to select from previously defined locations.</p>

<details>
<summary>Reference & notes</summary>

`config.timeshift.recordingPath`

Setup level: Expert.

</details>

<h2 id="option-3d881cb2faa7">Preferred tuner for recordings</h2>

<p>Configure which tuner for recordings will be preferred, when more than one tuner is available.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.recording_frontend_priority`

Setup level: Expert.

</details>

<h2 id="option-31ab66ad1089">Preferred tuners for recordings, multiple selection allowed</h2>

<p>In expert mode, configure which tuners will be preferred for recordings, when more than one tuner is available.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.recording_frontend_priority_multiselect`

Setup level: Expert.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-b8e8828550dc">Experimental: strict limitation to preferred tuners for recordings</h2>

<p>Configure whether another tuner from the preferred list is allocated for recordings instead of sharing a tuner that is already active receiving the same live TV channel.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.recording_frontend_priority_strictly`

Setup level: Expert.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-04f3e0c336ce">Recordings always have priority</h2>

<p>When enabled, a recording is allowed to interrupt live TV, when there are no free tuners.</p>

<details>
<summary>Reference & notes</summary>

`config.recording.asktozap`

Setup level: Intermediate.

</details>

<h2 id="option-9f14e0887d21">Recordings abort PiP</h2>

<p>When enabled, a recording is allowed to abort picture-in-picture mode, when there are no free tuners.</p>

<details>
<summary>Reference & notes</summary>

`config.recording.ask_to_abort_pip`

Setup level: Intermediate.

</details>

<h2 id="option-e6ce40e02c93">Recordings abort pseudo recordings</h2>

<p>When enabled, a recording is allowed to abort pseudo recordings, when there are no free tuners.</p>

<details>
<summary>Reference & notes</summary>

`config.recording.ask_to_abort_pseudo_rec`

Setup level: Intermediate.

</details>

<h2 id="option-db69a6b89291">Recordings abort streaming</h2>

<p>When enabled, a recording is allowed to abort streaming, when there are no free tuners.</p>

<details>
<summary>Reference & notes</summary>

`config.recording.ask_to_abort_streaming`

Setup level: Intermediate.

</details>

<h2 id="option-eeb8a73acb81">Preparation time for recording</h2>

<p>During this time, the transmitter and recording destination are checked. If the destination (e.g., NAS) isn&#x27;t ready in time, this time can be increased.</p>

<details>
<summary>Reference & notes</summary>

`config.recording.prepare_time`

Setup level: Simple.

</details>

<h2 id="option-ed33d00a15ac">Margin before recording</h2>

<p>When nonzero, a recording will start the nominated period before the starting time indicated in the EPG.</p>

<details>
<summary>Reference & notes</summary>

`config.recording.margin_before`

Setup level: Simple.

</details>

<h2 id="option-e730e528639c">Margin after recording</h2>

<p>When nonzero, a recording will stop the nominated period after the ending time indicated in the EPG.</p>

<details>
<summary>Reference & notes</summary>

`config.recording.margin_after`

Setup level: Simple.

</details>

<h2 id="option-506ce3518a9e">Use Zap timer end times</h2>

<p>Select &#x27;Yes&#x27; to enable new Zap timers to have an end time turned on and defined by default.</p>

<details>
<summary>Reference & notes</summary>

`config.recording.zap_has_endtime`

Setup level: Simple.

</details>

<h2 id="option-ad628113300b">Margin before zap</h2>

<p>When nonzero, a zap timer will start the nominated period before the starting time indicated in the EPG.</p>

<details>
<summary>Reference & notes</summary>

`config.recording.zap_margin_before`

Setup level: Simple.

</details>

<h2 id="option-26fc2bf6b2a1">Margin after zap</h2>

<p>When nonzero, a zap timer will stop the nominated period after the ending time indicated in the EPG.</p>

<details>
<summary>Reference & notes</summary>

`config.recording.zap_margin_after`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-72dc1d2348f9">Confirm Zap</h2>

<p>Select a time period to display a confirmation prompt before a Zap timer changes the current service. This allows the user to cancel the Zap. Select &#x27;Disabled&#x27; to allow the Zap to proceed without confirmation.</p>

<details>
<summary>Reference & notes</summary>

`config.recording.confirmZapDelay`

Setup level: Simple.

</details>

<h2 id="option-749a23247c5d">Default &#x27;Timer type&#x27; *</h2>

<p>Configure default setting for new timers. Need a restart after changing.</p>

<details>
<summary>Reference & notes</summary>

`config.recording.default_timertype`

Setup level: Expert.

</details>

<h2 id="option-2c4dad98a2e6">Default &#x27;After event&#x27; *</h2>

<p>Configure default setting for new timers. Need a restart after changing.</p>

<details>
<summary>Reference & notes</summary>

`config.recording.default_afterevent`

Setup level: Expert.

</details>

<h2 id="option-ae24f164687e">Remove completed timers after</h2>

<p>Configure the number of days old timers are kept before they are automatically removed from the timer list.</p>

<details>
<summary>Reference & notes</summary>

`config.recording.keep_timers`

Setup level: Expert.

</details>

<h2 id="option-729c305fdada">Show free space in timer view</h2>

<p>When &#x27;Enabled&#x27;, the timer view will show the free space on the target device. This will wake the device from sleep mode.</p>

<details>
<summary>Reference & notes</summary>

`config.recording.timerviewshowfreespace`

Setup level: Expert.

</details>

<h2 id="option-f86a87ed98ac">Limit character set for recording filenames</h2>

<p>Limit the characters that can be used in recording filenames to (7 bit) ASCII. This ensures compatibility with operating systems or file systems with limited character sets.</p>

<details>
<summary>Reference & notes</summary>

`config.recording.ascii_filenames`

Setup level: Expert.

</details>

<h2 id="option-4c711437ccbe">Composition of the recording filenames</h2>

<p>Configure how recording filenames are constructed. Standard: Date Time - Channel - Title Very very short: Title Very short: Title - Date Time Short with time: Date Time - Title Short: Date - Title Long: Date Time - Channel - Title - Info.</p>

<details>
<summary>Reference & notes</summary>

`config.recording.filename_composition`

Setup level: Expert.

</details>

<h2 id="option-874f49977f73">Include AIT in recordings</h2>

<p>If enabled, AIT data is included in recordings.</p>

<details>
<summary>Reference & notes</summary>

`config.recording.include_ait`

Setup level: Expert.

</details>

<h2 id="option-96f172e5b7c0">Purge &#x27;Trash&#x27; after</h2>

<p>Configure the number of days after which items are automatically removed from the trashcan.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.movielist_trashcan_days`

Setup level: Intermediate.

</details>

<h2 id="option-507f7b82f3f4">Clean network &#x27;Trash&#x27;</h2>

<p>When enabled, network trashcans are probed for cleaning.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.movielist_trashcan_network_clean`

Setup level: Intermediate.

</details>

<h2 id="option-4c398bf59fc8">Space to reserve for recordings (GB)</h2>

<p>Configure the minimum amount of disk space to be available for recordings. When the amount of space drops below this value, deleted items will be removed from the trashcan.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.movielist_trashcan_reserve`

Setup level: Intermediate.

</details>

<h2 id="option-3049fbd770c3">Background delete option</h2>

<p>Configure on which devices the background delete option should be used.</p>

<details>
<summary>Reference & notes</summary>

`config.misc.erase_flags`

Setup level: Expert.

</details>

<h2 id="option-bc122d469c3a">Background delete speed</h2>

<p>Configure the speed of the background deletion process. Lower speed will consume less hard disk drive performance.</p>

<details>
<summary>Reference & notes</summary>

`config.misc.erase_speed`

Setup level: Expert.

</details>

<h2 id="option-0a98c9580e8f">Always include ECM in recordings</h2>

<p>Always include ECM messages in recordings. This overrides the individual timer settings globally. It allows recordings to be always decrypted afterwards (sometimes called offline decoding), if supported by your receiver.</p>

<details>
<summary>Reference & notes</summary>

`config.recording.always_ecm`

Setup level: Expert.

</details>

<h2 id="option-8c68312fff7d">Never decrypt while recording</h2>

<p>Never decrypt the content while recording. This overrides the individual timer settings globally. If enabled, recordings are stored in crypted presentation and must be decrypted afterwards (sometimes called offline decoding).</p>

<details>
<summary>Reference & notes</summary>

`config.recording.never_decrypt`

Setup level: Expert.

</details>

<h2 id="option-4f0fa3196395">Offline decode delay (ms)</h2>

<p>Configure the offline decoding delay in milliseconds. The configured delay is observed at each control word parity change.</p>

<details>
<summary>Reference & notes</summary>

`config.recording.offline_decode_delay`

Setup level: Expert.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-0773f099843b">Default recording type</h2>

<p>&#x27;Unscramble &amp; record ECM&#x27; gives the option to unscramble afterwards if unscrambling on recording failed. &#x27;Don&#x27;t unscramble, record ECM&#x27; save a scramble recording that can be unscrambled on playback. &#x27;Normal&#x27; means unscramble the recording and don&#x27;t record ECM.</p>

<details>
<summary>Reference & notes</summary>

`config.recording.ecm_data`

Setup level: Expert.

</details>

<h2 id="option-42233995d30f">Descramble in Standby</h2>

<p>Set to &#x27;Enabled&#x27; to descramble queued scrambled recordings in Standby.</p>

<details>
<summary>Reference & notes</summary>

`config.recording.standbyDescramble`

Setup level: Expert.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-289029d2b72a">Descramble recordings before Deep Standby</h2>

<p>Set to &#x27;Enabled&#x27; to descramble queued scrambled recordings in Standby before Deep Standby.</p>

<details>
<summary>Reference & notes</summary>

`config.recording.standbyDescrambleShutdown`

Setup level: Expert.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-0cd50a9025ea">Descramble start time</h2>

<p>Select a time, when in Standby, after which the descramble can proceed.</p>

<details>
<summary>Reference & notes</summary>

`config.recording.standbyDescrambleStart`

Setup level: Expert.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-47ebe74b17ff">Descramble end time</h2>

<p>Select a time, when in Standby, before which descramble can proceed.</p>

<details>
<summary>Reference & notes</summary>

`config.recording.standbyDescrambleEnd`

Setup level: Expert.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-33a865b80f6e">Show message when recording starts</h2>

<p>When enabled, a pop up message will be shown when a recording starts.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.show_message_when_recording_starts`

Setup level: Expert.

</details>

<h2 id="option-fd75cf41ceb6">Show recording symbol</h2>

<p>Configure whether the &#x27;recording&#x27; symbol (in the display skin and LCD skin) is visible for real recordings only or also for streaming and pseudo recordings (like in EPGrefresh).</p>

<details>
<summary>Reference & notes</summary>

`config.recording.show_rec_symbol_for_rec_types`

Setup level: Expert.

</details>

<h2 id="option-a5cbb2d7622f">Show warning before restart</h2>

<p>Configure for which types of recordings a warning about active recordings is shown when attempting to restart the receiver or the GUI.</p>

<details>
<summary>Reference & notes</summary>

`config.recording.warn_box_restart_rec_types`

Setup level: Expert.

</details>

---

Source: [openATV setup.xml](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/data/setup.xml) · `fdc9347241`.
