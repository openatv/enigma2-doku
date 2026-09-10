---
title: "Subtitle Settings"
description: "Subtitle Settings: options, built-in help and menu location in OpenATV."
editUrl: false
pagefind: true
---

This reference contains the help text provided by OpenATV. The open dialog and selected options determine which entries are visible.

## Where do I find it?

**Main Menu → Setup → Audio → Subtitle Settings**

Search also matches technical keys. [Back to the directory](../../)

<h2 id="option-65fc7d9daedc">AI Translation enabled</h2>

<p>Select &#x27;Yes&#x27; to enable AI-Powered Translation for all teletext and DVB subtitles.</p>

<details>
<summary>Reference & notes</summary>

`config.subtitles.ai_enabled`

Setup level: Expert.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-2ebded023800">AI Translation language</h2>

<p>Select the AI-Powered Translation target language.</p>

<details>
<summary>Reference & notes</summary>

`config.subtitles.ai_translate_to`

Setup level: Expert.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-3e48b96eb8f0">AI Translation color</h2>

<p>Select the color to be used for the AI-Powered Translation text.</p>

<details>
<summary>Reference & notes</summary>

`config.subtitles.ai_subtitle_colors`

Setup level: Expert.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-10fe90526a89">AI Translation optimization</h2>

<p>The AI-Powered Translation service will be optimized to provide the best performance based on the Internet connection upload speed selected.</p>

<details>
<summary>Reference & notes</summary>

`config.subtitles.ai_connection_speed`

Setup level: Expert.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-86de83e59b2c">AI Translation subscription code</h2>

<p>Enter the subscription code to fully enable the AI-Powered Translation plugin, the unified code for trial is 15.</p>

<details>
<summary>Reference & notes</summary>

`config.subtitles.ai_subscription_code`

Setup level: Expert.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-f53d8d32fbba">AI Translation mode</h2>

<p>The AI mode used for translating languages. You can choose the one that gives the most accurate translation for your target language.</p>

<details>
<summary>Reference & notes</summary>

`config.subtitles.ai_mode`

Setup level: Expert.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-c8c517bc2db3">Teletext subtitle color</h2>

<p>Configure the color of the teletext subtitles.</p>

<details>
<summary>Reference & notes</summary>

`config.subtitles.ttx_subtitle_colors`

Setup level: Expert.

</details>

<h2 id="option-d6d34f9be20e">Use original teletext position</h2>

<p>When enabled, teletext subtitles will be displayed at their original position.</p>

<details>
<summary>Reference & notes</summary>

`config.subtitles.ttx_subtitle_original_position`

Setup level: Expert.

</details>

<h2 id="option-0893e6f86bbb">Rewrap subtitles</h2>

<p>When enabled, reformat subtitles to match the width of the screen.</p>

<details>
<summary>Reference & notes</summary>

`config.subtitles.subtitle_rewrap`

Setup level: Expert.

</details>

<h2 id="option-d369a6ed19ab">Subtitle position</h2>

<p>Configure the vertical position of the subtitles, measured from the bottom of the screen.</p>

<details>
<summary>Reference & notes</summary>

`config.subtitles.subtitle_position`

Setup level: Expert.

</details>

<h2 id="option-214b6a2008a1">Subtitle alignment</h2>

<p>Configure the horizontal alignment of the subtitles.</p>

<details>
<summary>Reference & notes</summary>

`config.subtitles.subtitle_alignment`

Setup level: Expert.

</details>

<h2 id="option-c165105c0ac6">Subtitle border width</h2>

<p>Configure the border width of the subtitles. The dark border makes the subtitles easier to read on a light background.</p>

<details>
<summary>Reference & notes</summary>

`config.subtitles.subtitle_borderwidth`

Setup level: Expert.

</details>

<h2 id="option-73656483f04d">Subtitle black transparency</h2>

<p>Configure the transparency of the black background of subtitles.</p>

<details>
<summary>Reference & notes</summary>

`config.subtitles.subtitles_backtrans`

Setup level: Simple.

</details>

<h2 id="option-87c38d406ec0">Subtitle font size</h2>

<p>Configure the font size of the subtitles.</p>

<details>
<summary>Reference & notes</summary>

`config.subtitles.subtitle_fontsize`

Setup level: Expert.

</details>

<h2 id="option-d5518f538bc6">Subtitle delay when timing lacks</h2>

<p>Configure the subtitle delay when timing information is not available.</p>

<details>
<summary>Reference & notes</summary>

`config.subtitles.subtitle_noPTSrecordingdelay`

Setup level: Expert.

</details>

<h2 id="option-8ece4ca542d2">DVB subtitles color</h2>

<p>Graphical DVB subtitles will be displayed in the selected color, instead of the original colors.</p>

<details>
<summary>Reference & notes</summary>

`config.subtitles.dvb_subtitles_color`

Setup level: Expert.

</details>

<h2 id="option-fca0d582891f">Use original DVB subtitle position</h2>

<p>When enabled, graphical DVB subtitles will be displayed at their original position.</p>

<details>
<summary>Reference & notes</summary>

`config.subtitles.dvb_subtitles_original_position`

Setup level: Expert.

</details>

<h2 id="option-31699cab6cca">Subtitle delay when timing is bad</h2>

<p>Configure an additional delay to improve subtitle synchronization.</p>

<details>
<summary>Reference & notes</summary>

`config.subtitles.subtitle_bad_timing_delay`

Setup level: Expert.

</details>

<h2 id="option-2a48e727fd8b">DVB subtitle black transparency</h2>

<p>Configure the transparency of the black background of graphical DVB subtitles.</p>

<details>
<summary>Reference & notes</summary>

`config.subtitles.dvb_subtitles_backtrans`

Setup level: Expert.

</details>

<h2 id="option-2d5c015de58e">External subtitle color</h2>

<p>Configure the color of the external subtitles, alternative (normal in white, italic in yellow, bold in cyan, underscore in green), white or yellow.</p>

<details>
<summary>Reference & notes</summary>

`config.subtitles.pango_subtitle_colors`

Setup level: Expert.

</details>

<h2 id="option-503ad8e869b0">External subtitle switch fonts</h2>

<p>Configure if the subtitle should switch between normal, italic, bold and bold italic.</p>

<details>
<summary>Reference & notes</summary>

`config.subtitles.pango_subtitle_fontswitch`

Setup level: Expert.

</details>

<h2 id="option-f8538e93c6e7">External subtitle dialog colorization</h2>

<p>Replace `- ` in dialogs with colored text per speaker (like teletext subtitles for the hearing impaired).</p>

<details>
<summary>Reference & notes</summary>

`config.subtitles.colourise_dialogs`

Setup level: Expert.

</details>

<h2 id="option-d43396cd9de5">Delay for external subtitles</h2>

<p>Configure an additional delay to improve external subtitle synchronization.</p>

<details>
<summary>Reference & notes</summary>

`config.subtitles.pango_subtitles_delay`

Setup level: Expert.

</details>

<h2 id="option-4a995abe73e7">Set fps for external subtitles</h2>

<p>Can be used for different fps between external subtitles and video.</p>

<details>
<summary>Reference & notes</summary>

`config.subtitles.pango_subtitles_fps`

Setup level: Expert.

</details>

<h2 id="option-ab77aa248160">HI-cleanup for external subtitles</h2>

<p>Remove texts for the hearing impaired from external subtitles (instrumental music or environmental sounds, e.g., when a doorbell rings or a gun shot is heard).</p>

<details>
<summary>Reference & notes</summary>

`config.subtitles.pango_subtitle_removehi`

Setup level: Expert.

</details>

<h2 id="option-175003486ac1">Automatically turn on external subtitles</h2>

<p>When enabled, external subtitles will be always turned on for playback movie.</p>

<details>
<summary>Reference & notes</summary>

`config.subtitles.pango_autoturnon`

Setup level: Expert.

</details>

---

Source: [OpenATV setup.xml](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/data/setup.xml) · `fdc9347241`.
