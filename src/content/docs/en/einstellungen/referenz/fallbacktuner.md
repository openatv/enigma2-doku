---
title: "Fallback Tuner Setup"
description: "Fallback Tuner Setup: options, built-in help and menu location in OpenATV."
editUrl: false
pagefind: true
---

This reference contains the help text provided by OpenATV. The open dialog and selected options determine which entries are visible.

## Where do I find it?

The direct menu location has not yet been mapped in this first edition. Look for **Fallback Tuner Setup**.

Search also matches technical keys. [Back to the directory](../../)

<h2 id="option-b3f0bca5bce6">Enable fallback remote receiver</h2>

<p>Enable remote receiver to be tried to tune into services that can&#x27;t be tuned into locally (e.g. tuner is occupied or service type is unavailable on the local tuner). Specify complete URL including http:// and port number (normally ...:8001), e.g. http://second_receiver:8001.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.remote_fallback_enabled`

Setup level: Simple.

</details>

<h2 id="option-6381bf2834f9">Import from remote receiver URL</h2>

<p>Import channels and/or EPG from remote receiver URL when receiver is booted.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.remote_fallback_import`

Setup level: Simple.

</details>

<h2 id="option-a4fc53cdef48">Enable import timer from fallback tuner</h2>

<p>When enabled, the timer from the fallback tuner is imported.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.remote_fallback_external_timer`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-da32da0a844d">Select the timer from the fallback tuner by default</h2>

<p>When enabled, the timer from the fallback tuner is the default timer.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.remote_fallback_external_timer_default`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-a49a4092e7be">Fallback remote receiver</h2>

<p>Destination of fallback remote receiver.</p>

<details>
<summary>Reference & notes</summary>

`self.avahiselect`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-94ea878b33a6">Fallback remote receiver IP</h2>

<p>Configure the IP of the fallback remote receiver.</p>

<details>
<summary>Reference & notes</summary>

`self.ip`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-6185bb00468a">Fallback remote receiver Port</h2>

<p>Configure the Port of the fallback remote receiver.</p>

<details>
<summary>Reference & notes</summary>

`self.port`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-886eedf54b15">Fallback remote receiver URL</h2>

<p>Configure the URL of the fallback remote receiver.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.remote_fallback`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-05eb3f9ea34a">Import remote receiver URL</h2>

<p>Configure the URL of the fallback remote receiver.</p>

<details>
<summary>Reference & notes</summary>

`self.avahiselect_seperate`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-7757c0191fce">Fallback remote receiver IP</h2>

<p>Configure the IP of the fallback remote receiver.</p>

<details>
<summary>Reference & notes</summary>

`self.ip_seperate`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-8846deed0f80">Fallback remote receiver Port</h2>

<p>Configure the Port of the fallback remote receiver.</p>

<details>
<summary>Reference & notes</summary>

`self.port_seperate`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-6bc5d4ed8a4f">Fallback remote receiver URL</h2>

<p>Configure the URL of the fallback remote receiver.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.remote_fallback_import_url`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-66d90da76c80">Also import at reboot/restart</h2>

<p>Import channels and/or EPG from remote receiver URL when receiver or GUI is restarted.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.remote_fallback_import_restart`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-55cf7d37e944">Also import when leaving Standby</h2>

<p>Import channels and/or EPG from the remote receiver URL, even when the receiver is coming out of Standby.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.remote_fallback_import_standby`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-7faabd583a53">Also import from the extension menu</h2>

<p>Make it possible to manually initiate the channels import and/or EPG via the extension menu.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.remote_fallback_extension_menu`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-27d57ad81d32">Show notification when import channels was successful</h2>

<p>Show notification when import channels and/or EPG from remote receiver URL is completed.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.remote_fallback_ok`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-34ee4664bca7">Show notification when import channels was not successful</h2>

<p>Show notification when import channels and/or EPG from remote receiver URL did not complete.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.remote_fallback_nok`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-5f2e8aee662a">Customize OpenWebIF settings for fallback tuner</h2>

<p>When enabled, you can customize the OpenWebIf settings for the fallback tuner.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.remote_fallback_openwebif_customize`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-51a795371345">User ID</h2>

<p>Set the User ID of the OpenWebif from your fallback tuner.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.remote_fallback_openwebif_userid`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-2617dca73c21">Password</h2>

<p>Set the password of the OpenWebif from your fallback tuner.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.remote_fallback_openwebif_password`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-b453f6d7eec0">Port</h2>

<p>Set the port of the OpenWebif from your fallback tuner.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.remote_fallback_openwebif_port`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-985ef07ce58b">Alternative URLs for DVB-T/C or ATSC</h2>

<p>Set alternative fallback tuners for DVB-T/C or ATSC</p>

<details>
<summary>Reference & notes</summary>

`config.usage.remote_fallback_alternative`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-019c23f86a15">Fallback remote receiver for DVB-T</h2>

<p>Destination of fallback remote receiver for DVB-T</p>

<details>
<summary>Reference & notes</summary>

`self.avahi_dvb_t`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-e74dfdadb0f0">Fallback remote receiver IP</h2>

<p>Configure the IP of the fallback remote receiver.</p>

<details>
<summary>Reference & notes</summary>

`self.ip_dvb_t`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-e2a45676b735">Fallback remote receiver Port</h2>

<p>Configure the Port of the fallback remote receiver.</p>

<details>
<summary>Reference & notes</summary>

`self.port_dvb_t`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-8eabf17fbddd">Fallback remote receiver URL</h2>

<p>Configure the URL of the fallback remote receiver.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.remote_fallback_dvb_t`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-a0a575dd9002">Fallback remote receiver for DVB-C</h2>

<p>Destination of fallback remote receiver for DVB-C</p>

<details>
<summary>Reference & notes</summary>

`self.avahi_dvb_c`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-a3c56229982d">Fallback remote receiver IP</h2>

<p>Configure the IP of the fallback remote receiver.</p>

<details>
<summary>Reference & notes</summary>

`self.ip_dvb_c`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-288cf50222c7">Fallback remote receiver Port</h2>

<p>Configure the Port of the fallback remote receiver.</p>

<details>
<summary>Reference & notes</summary>

`self.port_dvb_c`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-e139ad90ad61">Fallback remote receiver URL</h2>

<p>Configure the URL of the fallback remote receiver.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.remote_fallback_dvb_c`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-f4e9bbb95182">Fallback remote receiver for ATSC</h2>

<p>Destination of fallback remote receiver for ATSC</p>

<details>
<summary>Reference & notes</summary>

`self.avahi_atsc`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-cee23676d99c">Fallback remote receiver IP</h2>

<p>Configure the IP of the fallback remote receiver.</p>

<details>
<summary>Reference & notes</summary>

`self.ip_atsc`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-a28588df26cd">Fallback remote receiver Port</h2>

<p>Configure the Port of the fallback remote receiver.</p>

<details>
<summary>Reference & notes</summary>

`self.port_atsc`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-91c85f59c27e">Fallback remote receiver URL</h2>

<p>Configure the URL of the fallback remote receiver.</p>

<details>
<summary>Reference & notes</summary>

`config.usage.remote_fallback_atsc`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

---

Source: [OpenATV setup.xml](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/data/setup.xml) · `fdc9347241`.
