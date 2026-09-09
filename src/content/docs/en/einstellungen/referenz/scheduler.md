---
title: "Scheduler Settings"
description: "Scheduler Settings: options, built-in help and menu location in openATV."
editUrl: false
pagefind: true
---

This reference contains the help text provided by openATV. The open dialog and selected options determine which entries are visible.

## Where do I find it?

The direct menu location has not yet been mapped in this first edition. Look for **Scheduler Settings**.

Search also matches technical keys. [Back to the directory](../../)

<h2 id="option-caa2b0fcac01">Timer type</h2>

<p>Select the type of this timer.</p>

<details>
<summary>Reference & notes</summary>

`self.timerType`

Setup level: Simple.

</details>

<h2 id="option-61c40f9cffe5">Execution condition</h2>

<p>The setting &#x27;Without query&#x27; is the same as &#x27;Standard&#x27; without additional confirmation query. All other dependencies (e.g. recordings, time range) persist.</p>

<details>
<summary>Reference & notes</summary>

`self.timerActiveInStandby`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-fc0e32715876">Sleep delay</h2>

<p>Select the delay before the timer activates.</p>

<details>
<summary>Reference & notes</summary>

`self.timerSleepDelay`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-43e2d454c376">Repeat type</h2>

<p>Select if this timer is to be repeated.</p>

<details>
<summary>Reference & notes</summary>

`self.timerAutoSleepRepeat`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-ab760b3b9bf7">Restrict the active time range</h2>

<p>Select if there is to be a time window within which this timer can be active.</p>

<details>
<summary>Reference & notes</summary>

`self.timerSleepWindow`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-6352ee3d2283">Start time</h2>

<p>Select the time after which this timer can start.</p>

<details>
<summary>Reference & notes</summary>

`self.timerSleepStart`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-0fb9031000d7">End time</h2>

<p>Select the time before which this timer should end.</p>

<details>
<summary>Reference & notes</summary>

`self.timerSleepEnd`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-747396d8bf35">Show advanced settings</h2>

<p>Select &#x27;Yes&#x27; to show the advanced setting options.</p>

<details>
<summary>Reference & notes</summary>

`self.timerShowExtended`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-4e93d2b63173">Enable network traffic check</h2>

<p>Select &#x27;Yes&#x27; if network traffic should be checked before activating the timer.</p>

<details>
<summary>Reference & notes</summary>

`self.timerNetTraffic`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-76556f0348c1">Lower limit (in kilobits per seconds)</h2>

<p>Select the network data rate below which the timer should activate as specified. Traffic above this rate with deactivate the timer.</p>

<details>
<summary>Reference & notes</summary>

`self.timerNetTrafficLimit`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-f6f4e4874906">Enable Network IP address check</h2>

<p>Select &#x27;Yes&#x27; to check if network connections are coming from nominated IP Addresses at the activation time of the timer. If so, the timer will be deactivated.</p>

<details>
<summary>Reference & notes</summary>

`self.timerNetIP`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-973c34ad375a">Number of IP Addresses</h2>

<p>Nominate how many IP Addresses are to be checked for active connections.</p>

<details>
<summary>Reference & notes</summary>

`self.timerNetIPCount`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-a61233aa1c40">IP Address 1</h2>

<p>IP Address to be checked on timer activation.</p>

<details>
<summary>Reference & notes</summary>

`self.timerIPAddress[0]`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-269cb9d81e5c">IP Address 2</h2>

<p>IP Address to be checked on timer activation.</p>

<details>
<summary>Reference & notes</summary>

`self.timerIPAddress[1]`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-2fdc4ee3b3ba">IP Address 3</h2>

<p>IP Address to be checked on timer activation.</p>

<details>
<summary>Reference & notes</summary>

`self.timerIPAddress[2]`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-b4ae88fbc20d">IP Address 4</h2>

<p>IP Address to be checked on timer activation.</p>

<details>
<summary>Reference & notes</summary>

`self.timerIPAddress[3]`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-a4c9a047d8a6">IP Address 5</h2>

<p>IP Address to be checked on timer activation.</p>

<details>
<summary>Reference & notes</summary>

`self.timerIPAddress[4]`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-ade224f32b38">Repeat type</h2>

<p>Select if this timer is to be repeated.</p>

<details>
<summary>Reference & notes</summary>

`self.timerRepeat`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-9cf8e4c87923">Date</h2>

<p>Select the date when this timer will activate.</p>

<details>
<summary>Reference & notes</summary>

`self.timerRepeatStartDate`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-1f850b964277">Repeats</h2>

<p>Select how often this timer is to be repeated.</p>

<details>
<summary>Reference & notes</summary>

`self.timerRepeatPeriod`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-0b238b4305b9">Day of week</h2>

<p>Select the day of the week that this timer will activate.</p>

<details>
<summary>Reference & notes</summary>

`self.timerWeekday`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-2ca616d9e4b4">Monday</h2>

<p>Select if this timer activates on a Monday.</p>

<details>
<summary>Reference & notes</summary>

`self.timerDay['Mon']`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-48dd03c6b6ba">Tuesday</h2>

<p>Select if this timer activates on a Tuesday.</p>

<details>
<summary>Reference & notes</summary>

`self.timerDay['Tue']`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-ddfd39127606">Wednesday</h2>

<p>Select if this timer activates on a Wednesday.</p>

<details>
<summary>Reference & notes</summary>

`self.timerDay['Wed']`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-5815b35f2e50">Thursday</h2>

<p>Select if this timer activates on a Thursday.</p>

<details>
<summary>Reference & notes</summary>

`self.timerDay['Thu']`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-53b0128dbdca">Friday</h2>

<p>Select if this timer activates on a Friday.</p>

<details>
<summary>Reference & notes</summary>

`self.timerDay['Fri']`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-b3969a82af5f">Saturday</h2>

<p>Select if this timer activates on a Saturday.</p>

<details>
<summary>Reference & notes</summary>

`self.timerDay['Sat']`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-adf14d972ee1">Sunday</h2>

<p>Select if this timer activates on a Sunday.</p>

<details>
<summary>Reference & notes</summary>

`self.timerDay['Sun']`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-9a2036a52845">Timer start window</h2>

<p>Select the start time after which this timer can be activated. Before this time the timer won&#x27;t be activated even if other conditions are met.</p>

<details>
<summary>Reference & notes</summary>

`self.timerStartTime`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-43be884aaa34">Timer end window</h2>

<p>Select the end time before which this timer can be activated. After this time the timer won&#x27;t be activated even if other conditions are met.</p>

<details>
<summary>Reference & notes</summary>

`self.timerEndTime`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-19eeb5dd60b9">After event</h2>

<p>Select the action to perform when the timer ends.</p>

<details>
<summary>Reference & notes</summary>

`self.timerAfterEvent`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-4cf377cbc590">Set end time</h2>

<p>Select &#x27;Yes&#x27; if an end time is required for this timer.</p>

<details>
<summary>Reference & notes</summary>

`self.timerSetEndTime`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-9b09578628c4">Standby execution</h2>

<p>Select how the schedule is handled with respect to Standby.</p>

<details>
<summary>Reference & notes</summary>

`self.timerFunctionStandby`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-84ad75657143">Start retry</h2>

<p>Select &#x27;Yes&#x27; to reschedule the task to run when the receiver enters or exits Standby. The state change must occur within the task&#x27;s scheduled window or the task will not be run.</p>

<details>
<summary>Reference & notes</summary>

`self.timerFunctionStandbyRetry`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-c1d712d29050">Error Retry count</h2>

<p>Select the number of times to retry a task if an error occurs when running the task.</p>

<details>
<summary>Reference & notes</summary>

`self.timerFunctionRetryCount`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-9b24352ac6c4">Error Retry delay</h2>

<p>Select the amount of time to wait, after a task error, before trying to run the task again.</p>

<details>
<summary>Reference & notes</summary>

`self.timerFunctionRetryDelay`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

---

Source: [openATV setup.xml](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/data/setup.xml) · `fdc9347241`.
