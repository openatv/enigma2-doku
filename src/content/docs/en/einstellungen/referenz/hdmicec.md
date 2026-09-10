---
title: "HDMI-CEC Settings"
description: "HDMI-CEC Settings: options, built-in help and menu location in OpenATV."
editUrl: false
pagefind: true
---

This reference contains the help text provided by OpenATV. The open dialog and selected options determine which entries are visible.

## Where do I find it?

**Main Menu → Setup → System → HDMI-CEC Settings**

Search also matches technical keys. [Back to the directory](../../)

<h2 id="option-ca248b58c35e">Enabled</h2>

<p>Enable or disable using HDMI-CEC.</p>

<details>
<summary>Reference & notes</summary>

`config.hdmicec.enabled`

Setup level: Simple.

</details>

<h2 id="option-ac5ce291c877">Advanced Settings</h2>

<p>Enable the advanced HDMI-CEC setting options.</p>

<details>
<summary>Reference & notes</summary>

`config.hdmicec.advanced_settings`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-4597c686df91">Regard Deep Standby as Standby</h2>

<p>Set to &#x27;Yes&#x27; to enable sending the same TV commands for Deep Standby as for regular Standby.</p>

<details>
<summary>Reference & notes</summary>

`config.hdmicec.handle_deepstandby_events`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-ea7a71e7b87e">Wait for timesync at startup</h2>

<p>If the Deep Standby workaround is enabled wait until the system time is synchronized. Depending on the requirement the device wake up will continuing after a maximum of 2 minutes.</p>

<details>
<summary>Reference & notes</summary>

`config.hdmicec.deepstandby_waitfortimesync`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-c1842cf70ee8">Put TV in Standby</h2>

<p>Automatically put the TV in Standby whenever the receiver goes into Standby or Deep Standby.</p>

<details>
<summary>Reference & notes</summary>

`config.hdmicec.control_tv_standby`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-af62565bb2e8">Even if TV has another input active?</h2>

<p>You can skip this function and turn off the TV when you wake the receiver from Standby and immediately switch back to Standby.</p>

<details>
<summary>Reference & notes</summary>

`config.hdmicec.tv_standby_notinputactive`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-4b7cf3094e0a">Wake up TV from Standby</h2>

<p>When the receiver wakes from Standby or Deep Standby it will send a command to the TV to bring it out of Standby.</p>

<details>
<summary>Reference & notes</summary>

`config.hdmicec.control_tv_wakeup`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-02452dd956f7">Even if a &#x27;Zap&#x27; recording timer starting?</h2>

<p>Select &#x27;Yes&#x27; if you want to wake the TV for a &#x27;Zap&#x27; recording timer is starting.</p>

<details>
<summary>Reference & notes</summary>

`config.hdmicec.tv_wakeup_zaptimer`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-077d99f061f8">Even if a &#x27;Zap and Record&#x27; recording timer starting?</h2>

<p>Select &#x27;Yes&#x27; if you want to wake the TV for a &#x27;Zap and Record&#x27; recording timer is starting.</p>

<details>
<summary>Reference & notes</summary>

`config.hdmicec.tv_wakeup_zapandrecordtimer`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-3eb7c90a4a4b">Even if a &#x27;Wakeup&#x27; scheduled task starting?</h2>

<p>Select &#x27;Yes&#x27; if you want to wake the TV when a &#x27;Wakeup&#x27; scheduled task is starting.</p>

<details>
<summary>Reference & notes</summary>

`config.hdmicec.tv_wakeup_wakeuppowertimer`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-4740be7fb5aa">Switch TV to correct input</h2>

<p>When the receiver wakes from Standby, send active source, stream path and routing commands so the TV switches to the HDMI input connected to the receiver.</p>

<details>
<summary>Reference & notes</summary>

`config.hdmicec.report_active_source`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-a6c6b1df116e">Switch off the TV to correct input</h2>

<p>Some TVs can&#x27;t switch to the correct input if another HDMI port is active. This setting puts the TV into Standby before switching. If the TV does not turn back on, a slower transmission interval or repeating the wake-up command may be required.</p>

<details>
<summary>Reference & notes</summary>

`config.hdmicec.workaround_activesource`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-5a60f329ae84">Handle wake up from TV</h2>

<p>When enabled, the receiver will automatically wake from Standby when the TV is turned on.</p>

<details>
<summary>Reference & notes</summary>

`config.hdmicec.handle_tv_wakeup`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-10c499524845">Handle Standby from TV</h2>

<p>When enabled, the receiver will automatically return to Standby when the TV is turned off.</p>

<details>
<summary>Reference & notes</summary>

`config.hdmicec.handle_tv_standby`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-5e7048273ce8">Process action from TV</h2>

<p>Select the receiver action when the TV switches away from the receiver input.</p>

<details>
<summary>Reference & notes</summary>

`config.hdmicec.handle_tv_input`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-53d4b0e49e44">Time delay until Standby or Deep Standby</h2>

<p>&#x27;Handle Standby from TV&#x27; has a higher priority than &#x27;Handle input from TV&#x27;.</p>

<details>
<summary>Reference & notes</summary>

`config.hdmicec.handle_tv_delaytime`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-00b4f07602f1">Use TV remote control</h2>

<p>Allows the TV remote to be used to control the receiver.</p>

<details>
<summary>Reference & notes</summary>

`config.hdmicec.report_active_menu`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-a31888d3bcbb">Forward volume keys</h2>

<p>Volume keys on the receiver remote will control the TV, AV receiver or soundbar volume over HDMI-CEC. If this feature is not supported the volume keys have no function!</p>

<details>
<summary>Reference & notes</summary>

`config.hdmicec.volume_forwarding`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-cf2ee9da2d46">Put your AV Receiver or Soundbar in Standby</h2>

<p>When enabled, the connected AV receiver or soundbar will automatically be switched off.</p>

<details>
<summary>Reference & notes</summary>

`config.hdmicec.control_receiver_standby`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-02c9ff846070">Wake up your AV Receiver or Soundbar from Standby</h2>

<p>When enabled, the connected AV receiver or soundbar will automatically be switched on.</p>

<details>
<summary>Reference & notes</summary>

`config.hdmicec.control_receiver_wakeup`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-cc770306883a">Minimum send interval</h2>

<p>Optional delay between CEC commands when sending a series of commands. Leave disabled unless a device requires slower transmission.</p>

<details>
<summary>Reference & notes</summary>

`config.hdmicec.minimum_send_interval`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-ddf3a778a9f7">Repeat the sent standby and wake up commands</h2>

<p>Try to send repeated commands if not all commands were executed (e.g. TV wake up, but not switched to correct input).</p>

<details>
<summary>Reference & notes</summary>

`config.hdmicec.messages_repeat`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-6965a1af00bb">Time delay for the repeated transmission</h2>

<p>The time is multiplied by the current repeat counter.</p>

<details>
<summary>Reference & notes</summary>

`config.hdmicec.messages_repeat_slowdown`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-83f367f87db7">Repeat the standby commands</h2>

<p>The command to wake from Standby will be sent multiple times.</p>

<details>
<summary>Reference & notes</summary>

`config.hdmicec.messages_repeat_standby`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-ff921b98d335">Check power and input state from TV</h2>

<p>An attempt is made to capture the current TV status. If status messages are incorrect or missing, the receiver may respond unexpectedly. Otherwise, it helps the receiver handle different operating conditions more effectively.</p>

<details>
<summary>Reference & notes</summary>

`config.hdmicec.check_tv_state`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-7e6a4020d24a">Ignore unexpectedly wake up and stay in Standby</h2>

<p>This is a workaround for devices that wake up immediately after entering Standby. Wake-up commands from other devices are ignored for a few seconds.</p>

<details>
<summary>Reference & notes</summary>

`config.hdmicec.workaround_turnbackon`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-3e1163c976a5">Use HDMI-preemphasis</h2>

<p>This setting can help improve signal quality or prevent issues with longer HDMI cables.</p>

<details>
<summary>Reference & notes</summary>

`config.hdmicec.preemphasis`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-4a8314ff396c">Enable command line function</h2>

<p>Activate a way to send individual or specific internal HDMI-CEC commands from the command line.</p>

<details>
<summary>Reference & notes</summary>

`config.hdmicec.commandline`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-fed22dd87a69">Enable debug log</h2>

<p>If enabled, a log will be kept of CEC protocol traffic. The log files are located with the other log files but named &#x27;Enigma2-hdmicec-[date].log&#x27;.</p>

<details>
<summary>Reference & notes</summary>

`config.hdmicec.debug`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

---

Source: [OpenATV setup.xml](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/data/setup.xml) · `fdc9347241`.
