---
title: "Logs Settings"
description: "Logs Settings: options, built-in help and menu location in OpenATV."
editUrl: false
pagefind: true
---

This reference contains the help text provided by OpenATV. The open dialog and selected options determine which entries are visible.

## Where do I find it?

**Main Menu → Setup → System → Logs Settings**

Search also matches technical keys. [Back to the directory](../../)

<h2 id="option-649e43e70947">Logs location</h2>

<p>Choose the location for crash and debug logs.</p>

<details>
<summary>Reference & notes</summary>

`config.crash.debug_path`

Setup level: Expert.

</details>

<h2 id="option-b15f4b882ad8">Handle Python crashes</h2>

<p>Try to prevent reboots for software errors and maintain of the availability for the receiver.</p>

<details>
<summary>Reference & notes</summary>

`config.crash.bsodpython`

Setup level: Expert.

</details>

<h2 id="option-a4b9da28e517">Show crash info on screen and write crash log for x times</h2>

<p>If &#x27;never&#x27;, will write crash log despite that for the first crash.</p>

<details>
<summary>Reference & notes</summary>

`config.crash.bsodhide`

Setup level: Expert.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-c67bf2132242">Restart GUI after x crashes</h2>

<p>If &#x27;never&#x27;, will force restart despite that after 100 crashes.</p>

<details>
<summary>Reference & notes</summary>

`config.crash.bsodmax`

Setup level: Expert.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-c47bb645d01e">Enable debug log *</h2>

<p>Allows you to enable the debug log. They contain very detailed information of everything the system does.</p>

<details>
<summary>Reference & notes</summary>

`config.crash.debugLevel`

Setup level: Expert.

</details>

<h2 id="option-c9d273a5e91e">Include international data *</h2>

<p>Enable this option to add international language and country load information detected during system boot to the debug log file.</p>

<details>
<summary>Reference & notes</summary>

`config.crash.debugInternational`

Setup level: Expert.

</details>

<h2 id="option-3cb07208a444">Include MultiBoot data *</h2>

<p>Enable this option to add MultiBoot information detected during system boot to the debug log file.</p>

<details>
<summary>Reference & notes</summary>

`config.crash.debugMultiBoot`

Setup level: Expert.

</details>

<h2 id="option-4449fb492d54">Include keyboard data</h2>

<p>Enable this option to add keyboard key map data to the debug log file.</p>

<details>
<summary>Reference & notes</summary>

`config.crash.debugKeyboards`

Setup level: Expert.

</details>

<h2 id="option-eac06c0d6791">Include remote control data</h2>

<p>Enable this option to add remote control data to the debug log file.</p>

<details>
<summary>Reference & notes</summary>

`config.crash.debugRemoteControls`

Setup level: Expert.

</details>

<h2 id="option-ef3bba6fda10">Include action map data</h2>

<p>Enable this option to add action map / remote control mapping data to the debug log file.</p>

<details>
<summary>Reference & notes</summary>

`config.crash.debugActionMaps`

Setup level: Expert.

</details>

<h2 id="option-ffeb8da2103d">Include screen load data</h2>

<p>Enable this option to add screen names and resolution data to the debug log file.</p>

<details>
<summary>Reference & notes</summary>

`config.crash.debugScreens`

Setup level: Expert.

</details>

<h2 id="option-b84a55bd08d2">Include opkg output data</h2>

<p>Enable this option to add opkg output data to the debug log file.</p>

<details>
<summary>Reference & notes</summary>

`config.crash.debugOpkg`

Setup level: Expert.

</details>

<h2 id="option-15f1794e3df3">Include timer data</h2>

<p>Enable this option to add timer debugging data to the debug log file.</p>

<details>
<summary>Reference & notes</summary>

`config.crash.debugTimers`

Setup level: Expert.

</details>

<h2 id="option-c1094c236e2e">Include seek data</h2>

<p>Enable this option to add seek/time shift debugging data to the debug log file.</p>

<details>
<summary>Reference & notes</summary>

`config.crash.debugSeek`

Setup level: Expert.

</details>

<h2 id="option-e15c4ba41834">Include EPG data</h2>

<p>Enable this option to add extra EPG data to the debug log file.</p>

<details>
<summary>Reference & notes</summary>

`config.crash.debugEPG`

Setup level: Expert.

</details>

<h2 id="option-2acb3cb43d88">Include DAB+ data</h2>

<p>Enable this option to add detailed DAB+ receiver, packet, MOT and SPI information to the debug log file.</p>

**After changing:** GUI restart required.

<details>
<summary>Reference & notes</summary>

`config.crash.debugDAB`

Setup level: Expert.

</details>

<h2 id="option-b6c7d77360e9">Include DVB scan data</h2>

<p>Enable this option to add extra DVB scan data to the debug log file.</p>

**After changing:** GUI restart required.

<details>
<summary>Reference & notes</summary>

`config.crash.debugDVBScan`

Setup level: Expert.

</details>

<h2 id="option-8b4629235b09">Include DVB timesync data</h2>

<p>Enable this option to add extra DVB time sync data to the debug log file.</p>

**After changing:** GUI restart required.

<details>
<summary>Reference & notes</summary>

`config.crash.debugDVBTime`

Setup level: Expert.

</details>

<h2 id="option-07e003e7852c">Include DVB details</h2>

<p>Enable this option to add extra DVB details to the debug log file.</p>

**After changing:** GUI restart required.

<details>
<summary>Reference & notes</summary>

`config.crash.debugDVB`

Setup level: Expert.

</details>

<h2 id="option-37db1c2d9d70">Include teletext details</h2>

<p>Enable this option to add extra teletext details to the debug log file.</p>

**After changing:** GUI restart required.

<details>
<summary>Reference & notes</summary>

`config.crash.debugTeletext`

Setup level: Expert.

</details>

<h2 id="option-29529c08b707">Include storage device data</h2>

<p>Enable this option to add storage device information detected during system boot and hot plug events to the debug log file.</p>

<details>
<summary>Reference & notes</summary>

`config.crash.debugStorage`

Setup level: Expert.

</details>

<h2 id="option-0a6d8d1ef62b">Include bouquet DB data</h2>

<p>Enable this option to add bouquet database information to the debug log file.</p>

**After changing:** GUI restart required.

<details>
<summary>Reference & notes</summary>

`config.crash.debugDVBDB`

Setup level: Expert.

</details>

<h2 id="option-596777871078">Include text encoding data</h2>

<p>Enable this option to add text encoding information to the debug log file.</p>

**After changing:** GUI restart required.

<details>
<summary>Reference & notes</summary>

`config.crash.debugTextEncoding`

Setup level: Expert.

</details>

<h2 id="option-7ad46a6fdfe2">Include network data</h2>

<p>Enable this option to add network information to the debug log file.</p>

**After changing:** GUI restart required.

<details>
<summary>Reference & notes</summary>

`config.crash.debugNetwork`

Setup level: Expert.

</details>

<h2 id="option-979d9d1ae15b">Include SEC/DiSEqC data</h2>

<p>Enable this option to add verbose SEC/DiSEqC debug data to the debug log file.</p>

<details>
<summary>Reference & notes</summary>

`config.crash.debugSec`

Setup level: Expert.

</details>

<h2 id="option-d95b9a1ab2f8">Limit debug log size (MB)</h2>

<p>Allows you to set the maximum size of the Debug log size (MB). When that size is reached, a new file will be created.</p>

<details>
<summary>Reference & notes</summary>

`config.crash.debugloglimit`

Setup level: Expert.

</details>

<h2 id="option-460879cf64d9">Show Log Manager in Extension Menu</h2>

<p>Allows you to show/hide Log Manager in the Extension Menu screen (BLUE button).</p>

<details>
<summary>Reference & notes</summary>

`config.logmanager.showinextensions`

Setup level: Expert.

</details>

<h2 id="option-191e01d9d316">Maximum no of days</h2>

<p>Logs older then the set no of days will be deleted.</p>

<details>
<summary>Reference & notes</summary>

`config.crash.daysloglimit`

Setup level: Expert.

</details>

<h2 id="option-364850864b38">Maximum space used (MB)</h2>

<p>If logs are using the set maximum space used the eldest will be deleted.</p>

<details>
<summary>Reference & notes</summary>

`config.crash.sizeloglimit`

Setup level: Expert.

</details>

<h2 id="option-55d2add5de92">Crash at skin error for debug reasons</h2>

<p>Select &#x27;No&#x27; to only write a log message to the debug log file.</p>

<details>
<summary>Reference & notes</summary>

`config.crash.skin_error_crash`

Setup level: Expert.

</details>

<h2 id="option-d0d24ffcc662">Log python stack trace on spinner</h2>

<p>Set to yes for debugging the root cause of a spinner.</p>

<details>
<summary>Reference & notes</summary>

`config.crash.pystackonspinner`

Setup level: Expert.

</details>

<h2 id="option-02bf61c15122">Debug log time format *</h2>

<p>This sets the prefix for each line in the debug log. The &#x27;Boot time&#x27; is the number of seconds since your OpenATV was last booted.</p>

<details>
<summary>Reference & notes</summary>

`config.crash.debugTimeFormat`

Setup level: Expert.

</details>

<h2 id="option-242e879d2783">Enable GStreamer debug log *</h2>

<p>Allows you to enable the GStreamer debug log. They contain very detailed information of everything the GStreamer system does.</p>

<details>
<summary>Reference & notes</summary>

`config.crash.gstdebug`

Setup level: Expert.

</details>

<h2 id="option-fe54a1220d1d">GStreamer debug log category *</h2>

<p>Only log debug information of GStreamer category. * means all categories.</p>

<details>
<summary>Reference & notes</summary>

`config.crash.gstdebugcategory`

Setup level: Expert.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-0ecc8d6aa530">GStreamer debug log level *</h2>

<p>Detail of GStreamer log.</p>

<details>
<summary>Reference & notes</summary>

`config.crash.gstdebuglevel`

Setup level: Expert.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-d41506f3d5d0">Enable GStreamer pipeline graphs *</h2>

<p>Allows you to enable the GStreamer pipeline graphs. These are .dot files that describe the topology of your pipeline, along with the caps negotiated in each link.</p>

<details>
<summary>Reference & notes</summary>

`config.crash.gstdot`

Setup level: Expert.

</details>

<h2 id="option-ecf8dd0044d4">Enable core dumps *</h2>

<p>Core dumps are helpful for developers in case of a FATAL SIGNAL crash in the C++ code. Typical core dump size is 110 MB so adjust maximum space used and choose proper location.</p>

<details>
<summary>Reference & notes</summary>

`config.crash.coredump`

Setup level: Expert.

</details>

---

Source: [OpenATV setup.xml](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/data/setup.xml) · `fdc9347241`.
