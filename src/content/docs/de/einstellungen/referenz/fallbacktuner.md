---
title: "Reservetunereinstellungen"
description: "Reservetunereinstellungen: Optionen, Originalhilfe und Menüweg in OpenATV."
editUrl: false
pagefind: true
---

Diese Referenz enthält die vorhandenen Hilfetexte aus OpenATV. Je nach geöffnetem Dialog und gewählten Optionen ist nur ein Teil der Einträge sichtbar.

## Wo finde ich das?

Der direkte Menüweg ist in dieser Grundfassung noch nicht zugeordnet. Suche im jeweiligen Funktionsdialog nach **Reservetunereinstellungen**.

Die Suche findet auch die englischen Bezeichnungen und technischen Schlüssel. [Zur Übersicht](../../)

<h2 id="option-b3f0bca5bce6">Reservereceiver aktivieren</h2>

**English:** Enable fallback remote receiver

<p>Mit &#x27;Ja&#x27; den Reservereceiver aktivieren, der versucht wird, wenn ein Sender lokal nicht empfangen werden kann (z. B. wenn der Tuner belegt oder der Sender lokal nicht verfügbar ist). Die komplette URL inklusive &#x27;http://&#x27; und Portnummer (normalerweise &#x27;8001&#x27;) angeben, also z. B. &#x27;http://zweiter_receiver:8001&#x27;.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.usage.remote_fallback_enabled`

Bedienebene: Einfach.

</details>

<h2 id="option-6381bf2834f9">Von Reservereceiver-URL importieren</h2>

**English:** Import from remote receiver URL

<p>Sender und/oder EPG von der Reservereceiver-URL importieren, wenn der Receiver neu gestartet wird.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.usage.remote_fallback_import`

Bedienebene: Einfach.

</details>

<h2 id="option-a4fc53cdef48">Den Importtimer vom Reservetuner aktivieren</h2>

**English:** Enable import timer from fallback tuner

<p>Wenn aktiviert, wird der Timer vom Reservetuner importiert.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.usage.remote_fallback_external_timer`

Bedienebene: Einfach.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-da32da0a844d">Wenn aktiviert, wird der Timer vom Reservetuner importiert</h2>

**English:** Select the timer from the fallback tuner by default

<p>Wenn aktiviert, wird der Timer vom Reservetuner als Timer verwendet.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.usage.remote_fallback_external_timer_default`

Bedienebene: Einfach.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-a49a4092e7be">Reservereceiver</h2>

**English:** Fallback remote receiver

<p>Den Reservereceiver auswählen.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`self.avahiselect`

Bedienebene: Einfach.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-94ea878b33a6">Reservereceiver-IP</h2>

**English:** Fallback remote receiver IP

<p>Die IP des Reservereceivers einstellen.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`self.ip`

Bedienebene: Einfach.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-6185bb00468a">Reservereceiver-Port</h2>

**English:** Fallback remote receiver Port

<p>Den Port des Reservereceivers einstellen.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`self.port`

Bedienebene: Einfach.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-886eedf54b15">URL des Reservereceivers</h2>

**English:** Fallback remote receiver URL

<p>Die URL des Reservereceivers einstellen.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.usage.remote_fallback`

Bedienebene: Einfach.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-05eb3f9ea34a">Reservereceiver-URL importieren</h2>

**English:** Import remote receiver URL

<p>Die URL des Reservereceivers einstellen.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`self.avahiselect_seperate`

Bedienebene: Einfach.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-7757c0191fce">Reservereceiver-IP</h2>

**English:** Fallback remote receiver IP

<p>Die IP des Reservereceivers einstellen.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`self.ip_seperate`

Bedienebene: Einfach.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-8846deed0f80">Reservereceiver-Port</h2>

**English:** Fallback remote receiver Port

<p>Den Port des Reservereceivers einstellen.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`self.port_seperate`

Bedienebene: Einfach.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-6bc5d4ed8a4f">URL des Reservereceivers</h2>

**English:** Fallback remote receiver URL

<p>Die URL des Reservereceivers einstellen.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.usage.remote_fallback_import_url`

Bedienebene: Einfach.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-66d90da76c80">Auch beim Neustart importieren</h2>

**English:** Also import at reboot/restart

<p>Sender und/oder EPG von der Reservereceiver-URL importieren, wenn der Receiver oder Enigma2 neu gestartet wird.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.usage.remote_fallback_import_restart`

Bedienebene: Einfach.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-55cf7d37e944">Auch beim Verlassen des Standby importieren</h2>

**English:** Also import when leaving Standby

<p>Sender und/oder EPG von der Reservereceiver-URL importieren, auch wenn der Receiver Standby verlässt.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.usage.remote_fallback_import_standby`

Bedienebene: Einfach.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-7faabd583a53">Auch aus dem Erweiterungsmenü importieren</h2>

**English:** Also import from the extension menu

<p>Erlaubt es, den Senderimport und/oder EPG manuell über das Erweiterungsmenü zu starten.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.usage.remote_fallback_extension_menu`

Bedienebene: Einfach.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-27d57ad81d32">Benachrichtigung anzeigen, wenn der Import von Sendern erfolgreich war.</h2>

**English:** Show notification when import channels was successful

<p>Benachrichtigung anzeigen, wenn der Import von Sendern und/oder EPG von der Reservereceiver-URL abgeschlossen ist.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.usage.remote_fallback_ok`

Bedienebene: Einfach.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-34ee4664bca7">Benachrichtigung anzeigen, wenn der Import von Sendern nicht erfolgreich war.</h2>

**English:** Show notification when import channels was not successful

<p>Benachrichtigung anzeigen, wenn der Import von Sendern und/oder EPG von der Reservereceiver-URL nicht abgeschlossen wurde.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.usage.remote_fallback_nok`

Bedienebene: Einfach.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-5f2e8aee662a">OpenWebif-Einstellungen des Reservetuners konfigurieren</h2>

**English:** Customize OpenWebIF settings for fallback tuner

<p>Wenn aktiviert, lassen sich die OpenWebif-Einstellungen für den Reservetuner einstellen.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.usage.remote_fallback_openwebif_customize`

Bedienebene: Einfach.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-51a795371345">Benutzer-ID</h2>

**English:** User ID

<p>Die Benutzer-ID vom OpenWebif des Reservetuners eintragen.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.usage.remote_fallback_openwebif_userid`

Bedienebene: Einfach.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-2617dca73c21">Passwort</h2>

**English:** Password

<p>Das Passwort vom OpenWebif des Reservetuners eintragen.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.usage.remote_fallback_openwebif_password`

Bedienebene: Einfach.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-b453f6d7eec0">Port</h2>

<p>Den Port vom OpenWebif des Reservetuners eintragen.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.usage.remote_fallback_openwebif_port`

Bedienebene: Einfach.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-985ef07ce58b">Alternative URLs für DVB-T / C oder ATSC</h2>

**English:** Alternative URLs for DVB-T/C or ATSC

<p>Alternativen Reservetuner für DVB-T / C oder ATSC auswählen</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.usage.remote_fallback_alternative`

Bedienebene: Einfach.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-019c23f86a15">Reservereceiver für DVB-T</h2>

**English:** Fallback remote receiver for DVB-T

<p>Bestimmungsort vom Reservereceiver für DVB-T</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`self.avahi_dvb_t`

Bedienebene: Einfach.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-e74dfdadb0f0">Reservereceiver-IP</h2>

**English:** Fallback remote receiver IP

<p>Die IP des Reservereceivers einstellen.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`self.ip_dvb_t`

Bedienebene: Einfach.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-e2a45676b735">Reservereceiver-Port</h2>

**English:** Fallback remote receiver Port

<p>Den Port des Reservereceivers einstellen.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`self.port_dvb_t`

Bedienebene: Einfach.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-8eabf17fbddd">URL des Reservereceivers</h2>

**English:** Fallback remote receiver URL

<p>Die URL des Reservereceivers einstellen.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.usage.remote_fallback_dvb_t`

Bedienebene: Einfach.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-a0a575dd9002">Reservereceiver für DVB-C</h2>

**English:** Fallback remote receiver for DVB-C

<p>Bestimmungsort vom Reservereceiver für DVB-C</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`self.avahi_dvb_c`

Bedienebene: Einfach.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-a3c56229982d">Reservereceiver-IP</h2>

**English:** Fallback remote receiver IP

<p>Die IP des Reservereceivers einstellen.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`self.ip_dvb_c`

Bedienebene: Einfach.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-288cf50222c7">Reservereceiver-Port</h2>

**English:** Fallback remote receiver Port

<p>Den Port des Reservereceivers einstellen.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`self.port_dvb_c`

Bedienebene: Einfach.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-e139ad90ad61">URL des Reservereceivers</h2>

**English:** Fallback remote receiver URL

<p>Die URL des Reservereceivers einstellen.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.usage.remote_fallback_dvb_c`

Bedienebene: Einfach.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-f4e9bbb95182">Reservereceiver für ATSC</h2>

**English:** Fallback remote receiver for ATSC

<p>Bestimmungsort vom Reservereceiver für ATSC</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`self.avahi_atsc`

Bedienebene: Einfach.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-cee23676d99c">Reservereceiver-IP</h2>

**English:** Fallback remote receiver IP

<p>Die IP des Reservereceivers einstellen.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`self.ip_atsc`

Bedienebene: Einfach.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-a28588df26cd">Reservereceiver-Port</h2>

**English:** Fallback remote receiver Port

<p>Den Port des Reservereceivers einstellen.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`self.port_atsc`

Bedienebene: Einfach.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-91c85f59c27e">URL des Reservereceivers</h2>

**English:** Fallback remote receiver URL

<p>Die URL des Reservereceivers einstellen.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.usage.remote_fallback_atsc`

Bedienebene: Einfach.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

---

Quelle: [OpenATV setup.xml](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/data/setup.xml) · `fdc9347241`.
