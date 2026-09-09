---
title: "DAB+ Settings"
description: "DAB+ Settings: Optionen, Originalhilfe und Menüweg in openATV."
editUrl: false
pagefind: true
---

Diese Referenz enthält die vorhandenen Hilfetexte aus openATV. Je nach geöffnetem Dialog und gewählten Optionen ist nur ein Teil der Einträge sichtbar.

## Wo finde ich das?

Der direkte Menüweg ist in dieser Grundfassung noch nicht zugeordnet. Suche im jeweiligen Funktionsdialog nach **DAB+ Settings**.

Die Suche findet auch die englischen Bezeichnungen und technischen Schlüssel. [Zur Übersicht](../../)

<h2 id="option-09ed5a017aa1">Enable DAB+ mode</h2>

<p>Enable a selected RTL-SDR USB receiver for DAB+ reception. DVB-T and DAB+ cannot use the same receiver at the same time.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.dab.rtlsdr.enabled`

Bedienebene: Einfach.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-0b2f86476c0c">Block RTL2832 DVB kernel driver</h2>

<p>Create or remove the RTL2832 DVB module blacklist. A full receiver reboot is required; while enabled, this USB tuner is available for DAB+ but not for DVB-T/T2.</p>

**Nach Änderung:** Neustart erforderlich.

<details>
<summary>Zuordnung & Hinweise</summary>

`self.dvbKernelBlacklist`

Bedienebene: Einfach.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-9ff58aa370d2">Select tuner</h2>

<p>Select the RTL-SDR USB tuner to be used for DAB+ reception.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.dab.rtlsdr.device`

Bedienebene: Einfach.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-68b3df34ca8f">Scan region</h2>

<p>Limit a DAB+ USB scan to the frequency blocks defined for this region in the &#x27;dab.xml&#x27; file.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.dab.rtlsdr.region`

Bedienebene: Einfach.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-1cc00d555dc2">Automatic gain</h2>

<p>Let the tuner select its RF gain automatically.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.dab.rtlsdr.automaticGain`

Bedienebene: Einfach.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-84500e284d16">RF gain</h2>

<p>Position in the tuner&#x27;s supported gain range. The back end selects the closest gain step.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.dab.rtlsdr.gain`

Bedienebene: Einfach.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-297722488215">Frequency correction offset</h2>

<p>Adjust the tuner oscillator offset to refine the DAB+ signal reception.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.dab.rtlsdr.ppm`

Bedienebene: Einfach.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

---

Quelle: [openATV setup.xml](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/data/setup.xml) · `fdc9347241`.
