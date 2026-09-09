---
title: "Time Settings"
description: "Time Settings: options, built-in help and menu location in openATV."
editUrl: false
pagefind: true
---

This reference contains the help text provided by openATV. The open dialog and selected options determine which entries are visible.

## Where do I find it?

**Main Menu → Setup → System → Time Settings**

Search also matches technical keys. [Back to the directory](../../)

<h2 id="option-28495fd3edec">Time zone area</h2>

<p>Select your time zone area or region.</p>

<details>
<summary>Reference & notes</summary>

`config.timezone.area`

Setup level: Simple.

</details>

<h2 id="option-1945139337fc">Time zone</h2>

<p>Select the time zone within the area or region.</p>

<details>
<summary>Reference & notes</summary>

`config.timezone.val`

Setup level: Simple.

</details>

<h2 id="option-2f0d1aaf4050">Sync time using</h2>

<p>Synchronize system time using transponder or Internet.</p>

<details>
<summary>Reference & notes</summary>

`config.misc.SyncTimeUsing`

Setup level: Simple.

</details>

<h2 id="option-eaec3eb7ea8d">NTP server</h2>

<p>Configure your NTP server.</p>

<details>
<summary>Reference & notes</summary>

`config.misc.NTPserver`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-cbeb5821c09e">Sync NTP every</h2>

<p>Setup network time synchronization interval.</p>

<details>
<summary>Reference & notes</summary>

`config.misc.useNTPminutes`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-ec083097f2d3">Date style</h2>

<p>Choose the display formatting style for dates. &#x27;D&#x27;/&#x27;DD&#x27; is the date and &#x27;M&#x27;/&#x27;MM&#x27; is the month in digits. (&#x27;DD&#x27; and &#x27;MM&#x27; have leading zeros for single digit values.) The screen display will be based on your choice but can be influenced by the skin.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.date.dayfull`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-e31189e925f6">Time style</h2>

<p>Choose the display formatting style for times. &#x27;H&#x27;/&#x27;HH&#x27; is the hour for a 24 hour clock, &#x27;h&#x27;/&#x27;hh&#x27; is the hour for a 12 hour clock, &#x27;mm&#x27; is the minutes and &#x27;ss&#x27; is the seconds. (&#x27;HH&#x27; and &#x27;hh&#x27; have leading zeros for single digit values.) The screen display will be based on your choice but can be influenced by the skin.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.time.long`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

---

Source: [openATV setup.xml](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/data/setup.xml) · `fdc9347241`.
