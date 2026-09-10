---
title: "OSD Settings"
description: "OSD Settings: options, built-in help and menu location in OpenATV."
editUrl: false
pagefind: true
---

This reference contains the help text provided by OpenATV. The open dialog and selected options determine which entries are visible.

## Where do I find it?

**Main Menu → Setup → Usage & GUI → OSD Settings**

Search also matches technical keys. [Back to the directory](../../)

<h2 id="option-6abd6095a506">Menu style</h2>

<p>Select the display design for menus.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.menuType`

Setup level: Simple.

</details>

<h2 id="option-2d16e4f32ae7">Menu entry style</h2>

<p>Select the display options for each menu entry item. If menu numbers are available, then the number buttons can be used to select the numbered menu entries directly.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.menuEntryStyle`

Setup level: Simple.

</details>

<h2 id="option-42decd075bc3">Menu entry sort order</h2>

<p>Select the sort order of the menu entries. User defined also allows the menu entries to be hidden.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.menuSortOrder`

Setup level: Simple.

</details>

<h2 id="option-785d7b73282a">Show screen menu path</h2>

<p>Select if the screen menu path history is displayed and, if so, how it is to be displayed.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.showScreenPath`

Setup level: Intermediate.

</details>

<h2 id="option-e3ca59b668f5">Sort Extension Menu</h2>

<p>Select the sort order of the Extension Menu entries.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.sortExtensionslist`

Setup level: Intermediate.

</details>

<h2 id="option-a0dc2ac0323d">Show Restart Network in Extensions *</h2>

<p>Enable to show the &#x27;Restart Network&#x27; entry in the Extension Menu screen.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.show_restart_network_extensionslist`

Setup level: Intermediate.

</details>

<h2 id="option-29b9aa179985">Sort Plugin Browser</h2>

<p>Select the sort order of the Plugin Browser menu entries. User defined also allows the menu entries to be hidden.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.plugins_sort_mode`

Setup level: Intermediate.

</details>

<h2 id="option-da2b84530802">Show Movie Selection in Main Menu</h2>

<p>Select &#x27;Yes&#x27; to show the &#x27;Movie Selection&#x27; entry in the Main Menu. This can provide access to the Movie Selection screen when there is no assigned button on the remote control.</p>

**After changing:** GUI restart required.

<details>
<summary>Reference & notes</summary>

`config.usage.movieSelectionInMenu`

Setup level: Simple.

</details>

<h2 id="option-7d94fe2a5beb">File sorting mode</h2>

<p>Control how files will be sorted in screens that show a file list. Case sensitive will group uppercase files first followed by lowercase files. Case insensitive will sort files alphabetically, ignoring case.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.fileSortCaseMode`

Setup level: Intermediate.

</details>

<h2 id="option-5decb61efbaf">Show setup default value</h2>

<p>Select if the default value for a setup entry is shown and, if so, where it is displayed in relation to the description.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.setupShowDefault`

Setup level: Intermediate.

</details>

<h2 id="option-5414aecd10a7">Show True/False as graphical switch</h2>

<p>Enable to display all True/False, Yes/No, On/Off and Enable/Disable setup options as a graphical switch.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.boolean_graphic`

Setup level: Expert.

</details>

<h2 id="option-e3769afbf595">Show additional slider value</h2>

<p>Enable to display the current value of the slider at end of the slider bar.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.show_slider_value`

Setup level: Expert.

</details>

<h2 id="option-29a3a4c1df84">Help screen style</h2>

<p>Choose the style/order in which items are displayed in help windows.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.helpSortOrder`

Setup level: Simple.

</details>

<h2 id="option-5c5da738f83f">Help animation speed</h2>

<p>Select the animation speed of the button indicators in the help screens. &#x27;Disabled&#x27; turns off animation so that indicators jump between buttons.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.helpAnimationSpeed`

Setup level: Simple.

</details>

<h2 id="option-0ea3f05aa476">Button error timeout</h2>

<p>Select how long to display the button error pop up. Button input is still permitted while the pop up is displayed.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.unhandledKeyTimeout`

Setup level: Simple.

</details>

<h2 id="option-d7af274cdc8a">Show animation while busy</h2>

<p>Show a spinning logo when the system is busy.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.show_spinner`

Setup level: Simple.

</details>

<h2 id="option-db6307dc8522">Show screen saver</h2>

<p>Select the duration of inactivity before the screen saver will be displayed.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.screenSaverStartTimer`

Setup level: Expert.

</details>

<h2 id="option-d969d559a90b">Screen saver mode</h2>

<p>Choose what appears when the screen saver is active.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.screenSaverMode`

Setup level: Expert.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-7f195bf1b2d2">Screen saver movement</h2>

<p>Select how long the screen saver image will stay in the same location on the screen before it will be moved.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.screenSaverMoveTimer`

Setup level: Expert.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-8158651370eb">Show all Information screens</h2>

<p>Enable this option to show all the available Information screens in the Information menu item list.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.informationShowAllMenuScreens`

Setup level: Expert.

</details>

<h2 id="option-e083c3078d4e">Show extra spacing in Information</h2>

<p>Enable to add some extra spacing to the Information screens. This can improve readability.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.informationExtraSpacing`

Setup level: Expert.

</details>

<h2 id="option-3c4aa9977a2b">1st InfoBar timeout</h2>

<p>Set the time to hide the InfoBar.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.infobar_timeout`

Setup level: Simple.

</details>

<h2 id="option-4247774a0f86">2nd InfoBar</h2>

<p>Enable and set the duration of the second InfoBar (press &#x27;OK&#x27; twice) that may include additional information.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.show_second_infobar`

Setup level: Simple.

</details>

<h2 id="option-8e5d5e3d86b8">2nd InfoBar timeout</h2>

<p>Set how long the second InfoBar stays visible. The second InfoBar also disappears when you press &#x27;OK&#x27;.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.second_infobar_timeout`

Setup level: Simple.

</details>

<h2 id="option-a05d3e50cab2">Show InfoBar picons</h2>

<p>Option to disable picons on the InfoBar.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.showpicon`

Setup level: Simple.

</details>

<h2 id="option-29a715fffb54">Show InfoBar lite</h2>

<p>Set the screen type you see on pressing &#x27;OK&#x27; when the InfoBar shows the second InfoBar Lite or event info.</p>

**After changing:** GUI restart required.

<details>
<summary>Reference & notes</summary>

`config.usage.show_infobar_lite`

Setup level: Simple.

</details>

<h2 id="option-a298ac816ec2">Enable InfoBar fade-out</h2>

<p>Fade the InfoBar on hide.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.show_infobar_do_dimming`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-8a62577d44d4">InfoBar fade-out speed</h2>

<p>Control the InfoBar fading speed.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.show_infobar_dimming_speed`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-43935dcfa00a">InfoBar EPG mode</h2>

<p>Select how to activate the Quick EPG mode.</p>

<details>
<summary>Reference & notes</summary>

`config.plisettings.InfoBarEpg_mode`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-1fa1f5c635ef">Time delay of the shutdown messages</h2>

<p>Set the time to wait before executing the default action in shutdown, standby or restart messages, e.g. used in RecordTimer, Scheduler, SleepTimer etc.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.shutdown_msgbox_timeout`

Setup level: Simple.

</details>

<h2 id="option-51c52fa1da9c">Show job tasks in Extension Menu</h2>

<p>With this option you can hide Job Tasks from the Extension Menu screen (BLUE button press).</p>

<details>
<summary>Reference & notes</summary>

`config.usage.jobtaksextensions`

Setup level: Intermediate.

</details>

<h2 id="option-c535e65e88bc">Show positioner movement</h2>

<p>Select whether or not to show an icon when a motorized dish is moving.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.showdish`

Setup level: Intermediate.

</details>

<h2 id="option-2dbace0c54f9">Alternative radio mode</h2>

<p>Use the alternative or the conventional radio mode.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.e1like_radio_mode`

Setup level: Intermediate.

</details>

<h2 id="option-552984d1c6b5">Position of finished Timers in Timerlist</h2>

<p>Control of the position how finished timer are shown in the Timer List.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.timerlist_finished_timer_position`

Setup level: Intermediate.

</details>

<h2 id="option-74469cc1620a">Show InfoBar on channel change</h2>

<p>Select &#x27;Yes&#x27; to display the InfoBar when changing channels.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.show_infobar_on_zap`

Setup level: Expert.

</details>

<h2 id="option-1a7fc27dd3a1">Show InfoBar on skip forward/backward</h2>

<p>Select &#x27;Yes, to display the InfoBar when fast forwarding or rewinding during media playback.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.show_infobar_on_skip`

Setup level: Intermediate.

</details>

<h2 id="option-84c93a1c6370">Show persistent InfoBar while paused</h2>

<p>Select &#x27;Yes&#x27; the keep the InfoBar displayed, with no timeout, while media playback is paused.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.show_infobar_locked_on_pause`

Setup level: Intermediate.

</details>

<h2 id="option-c120cdc867c5">Show InfoBar on event change</h2>

<p>Select &#x27;Yes&#x27; to display the InfoBar when a new event starts.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.show_infobar_on_event_change`

Setup level: Intermediate.

</details>

<h2 id="option-886bcdf7a578">Show channel number in InfoBar</h2>

<p>Select &#x27;Yes&#x27; to display the channel number in the InfoBar.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.show_infobar_channel_number`

Setup level: Intermediate.

</details>

<h2 id="option-fc3251b4d03a">Show picon background color</h2>

<p>This option allows you to choose the background color of transparent picons.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.show_picon_bkgrn`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-490e6f1ee8e8">Show event genre information</h2>

<p>This option allows you to choose whether or not to display genre information for the event.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.show_genre_info`

Setup level: Simple.

</details>

<h2 id="option-10cd00df0ee2">Show background in Radio Mode</h2>

<p>Show background when tuned to a radio channel.</p>

<details>
<summary>Reference & notes</summary>

`config.misc.showradiopic`

Setup level: Expert.

</details>

<h2 id="option-fa796c2171e1">Show time remaining/elapsed</h2>

<p>This option allows you to choose how to display the remaining time, the elapsed time, or both.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.swap_time_remaining_on_osd`

Setup level: Simple.

</details>

<h2 id="option-11ef823cd610">Show time elapsed as positive</h2>

<p>This option allows you to choose how to display elapsed time, as + or -.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.elapsed_time_positive_osd`

Setup level: Simple.

</details>

<h2 id="option-35b74281d918">Show transponder remaining/elapsed as</h2>

<p>This option allows you to choose how to display the remaining/elapsed time for live TV.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.swap_time_display_on_osd`

Setup level: Simple.

</details>

<h2 id="option-2e7c7a40f0b5">Show subservices</h2>

<p>This option allows you to choose the option for Subservice indicator or selection.</p>

**After changing:** GUI restart required.

<details>
<summary>Reference & notes</summary>

`config.usage.showInfoBarSubservices`

Setup level: Simple.

</details>

<h2 id="option-cd5de7852ff9">Media playback Remaining/Elapsed as</h2>

<p>This option allows you to choose how to display the remaining/elapsed time for media playback.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.swap_media_time_display_on_osd`

Setup level: Simple.

</details>

<h2 id="option-933622bd6a7b">Show crypto info in InfoBar</h2>

<p>Show encryption information in the InfoBar (when supported by the skin).</p>

<details>
<summary>Reference & notes</summary>

`config.usage.show_cryptoinfo`

Setup level: Expert.

</details>

<h2 id="option-cdcd17a27505">Hide softcam servername</h2>

<p>Select &#x27;Yes&#x27; to hide the server name and IP address of the server.</p>

<details>
<summary>Reference & notes</summary>

`config.softcam.hideServerName`

Setup level: Expert.

</details>

<h2 id="option-054c694d1b0c">InfoBar front end data source</h2>

<p>Configure the source of the frontend data as shown on the InfoBars. &#x27;Settings&#x27; is as stored on the settings. &#x27;Tuner&#x27; is as reported by the tuner.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.infobar_frontend_source`

Setup level: Expert.

</details>

<h2 id="option-910c30f32915">Swap SNR in &#x27;%&#x27; with SNR in &#x27;db&#x27;</h2>

<p>This option allows you to the SNR as a percentage (not all receivers support this).</p>

<details>
<summary>Reference & notes</summary>

`config.usage.swap_snr_on_osd`

Setup level: Expert.

</details>

<h2 id="option-fd72a132c325">Show PVR status in MoviePlayer InfoBar</h2>

<p>This option moves the PVR status display from a separate window into the MoviePlayer InfoBar.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.movieplayer_pvrstate`

Setup level: Intermediate.

</details>

<h2 id="option-9dd2f1509c40">Zap history sequence</h2>

<p>Select the display sequence of previously visited services.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.zapHistorySort`

Setup level: Simple.

</details>

<h2 id="option-15afcfa841c7">Hide zap errors</h2>

<p>Hide any zap error messages.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.hide_zap_errors`

Setup level: Expert.

</details>

<h2 id="option-dbb469eb7dcb">Hide CI messages</h2>

<p>Hide error messages from the Common Interface module.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.hide_ci_messages`

Setup level: Expert.

</details>

<h2 id="option-3837e1f7082a">Behavior of 0 key in PiP-mode</h2>

<p>Choose what you want the button &#x27;0&#x27; to do when PiP is active.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.pip_zero_button`

Setup level: Intermediate.

</details>

<h2 id="option-bc77999ba352">Close PiP on exit</h2>

<p>When enabled, the PiP can be closed by pressing the EXIT button.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.pip_hideOnExit`

Setup level: Expert.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-e882a00dee97">Remember last service in PiP</h2>

<p>Configure if and how long the latest service in the PiP will be remembered.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.pip_last_service_timeout`

Setup level: Expert.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-ce69e0230a0e">Show VCR SCART on main menu</h2>

<p>When enabled, the VCR SCART option will be shown on the main menu.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.show_vcr_scart`

Setup level: Expert.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-07a8183eca15">Spinner Position</h2>

<p>Set the top left location of the busy spinner. The coordinates are scaled such that the top left is at (0,0) and the bottom right is at (1260,700). Note that the position is the top left of the spinner and not the centre of the spinner.</p>

<details>
<summary>Reference & notes</summary>

`config.misc.spinnerPosition`

Setup level: Expert.

</details>

---

Source: [OpenATV setup.xml](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/data/setup.xml) · `fdc9347241`.
