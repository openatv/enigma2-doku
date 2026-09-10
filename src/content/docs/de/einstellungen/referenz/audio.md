---
title: "Toneinstellungen"
description: "Toneinstellungen: Optionen, Originalhilfe und Menüweg in OpenATV."
editUrl: false
pagefind: true
---

Diese Referenz enthält die vorhandenen Hilfetexte aus OpenATV. Je nach geöffnetem Dialog und gewählten Optionen ist nur ein Teil der Einträge sichtbar.

## Wo finde ich das?

**Hauptmenü → Einstellungen → Ton → Toneinstellungen**

Die Suche findet auch die englischen Bezeichnungen und technischen Schlüssel. [Zur Übersicht](../../)

<h2 id="option-39b5e2e12edb">Lautstärkeschritte bei Taste VOL +/-</h2>

**English:** Volume steps

<p>Lautstärkeschritte bei Druck auf die Taste VOL +/- auswählen.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.volumeControl.pressStep`

Bedienebene: Fortgeschritten.

</details>

<h2 id="option-bdac87c98e31">Lautstärkeschritte bei VOL +/- lang</h2>

**English:** Long press volume steps

<p>Lautstärkeschritte bei dauerhaftem Druck auf die Taste VOL +/- auswählen.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.volumeControl.longStep`

Bedienebene: Fortgeschritten.

</details>

<h2 id="option-edf0954efca9">Anzeigedauer der Lautstärke/Stummschaltung</h2>

**English:** Volume/Mute display timer

<p>Auswählen, wie viele Sekunden das Lautstärkesymbol oder die Stummschaltung angezeigt werden sollen, bevor sie ausgeblendet werden.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.volumeControl.hideTimer`

Bedienebene: Fortgeschritten.

</details>

<h2 id="option-9ac712427d7b">PCM-Mehrkanal</h2>

**English:** PCM Multichannel

<p>Auswählen, ob Mehrkanalton als PCM ausgegeben werden soll.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.av.pcm_multichannel`

Bedienebene: Fortgeschritten.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-36e8c5491ff5">AC3-Downmix</h2>

**English:** AC3 downmix

<p>Auswählen, ob AC3-Tonspuren (Dolby Digital) zu Stereo heruntergerechnet werden sollen.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.av.downmix_ac3`

Bedienebene: Fortgeschritten.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-bbef0e4c76af">Audioverzögerung beim Durchschleifen von AC3</h2>

**English:** Passthrough audio handling delay AC3

<p>Dient zur Definition der Verzögerung beim Umschalten und aktiviertem Durchschleifen von AC3.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.av.passthrough_fix_short`

Bedienebene: Fortgeschritten.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-475af74562bf">Audioverzögerung beim Durchschleifen von AC3+</h2>

**English:** Passthrough audio handling delay AC3+

<p>Dient zur Definition der Verzögerung beim Umschalten und aktiviertem Durchschleifen von AC3+/Atmos.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.av.passthrough_fix_long`

Bedienebene: Fortgeschritten.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-6b757f9810e5">AC3+-Transkodierung</h2>

**English:** AC3 plus transcoding

<p>Auswählen, ob AC3+-Tonspuren nach AC3 transkodiert werden sollen.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.av.transcodeac3plus`

Bedienebene: Fortgeschritten.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-2c847846e54d">AC4</h2>

<p>Auswählen, ob AC4 (Dolby Atmos) Tonspuren an den AVR durchgeschleift, auf Stereo heruntergemischt, oder automatisch, entsprechend der HDMI-Empfangsfähigkeit, zugewiesen werden sollen.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.av.ac4`

Bedienebene: Fortgeschritten.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-d60d994fdaae">DTS-Downmix</h2>

**English:** DTS downmix

<p>Auswählen, ob DTS-Tonspuren zu Stereo heruntergerechnet werden sollen.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.av.downmix_dts`

Bedienebene: Fortgeschritten.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-9c259024084b">DTS/DTS-HD HR/DTS-HD MA/DTS:X</h2>

<p>Auswählen, ob DTS-Tonspuren zu Stereo heruntergerechnet oder transkodiert werden sollen.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.av.dtshd`

Bedienebene: Fortgeschritten.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-5d98ce42e416">Dolby TrueHD</h2>

<p>Auswählen, ob Dolby-TrueHD-Tonspuren durchgeschleift oder decodiert werden sollen.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.av.truehd`

Bedienebene: Fortgeschritten.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-18f92ee99f9c">WMA Pro</h2>

<p>Auswählen, ob WMA-Pro-Tonspuren zu Stereo heruntergerechnet oder transkodiert werden sollen.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.av.wmapro`

Bedienebene: Fortgeschritten.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-035da4401017">AAC-Downmix</h2>

**English:** AAC downmix

<p>Auswählen, ob Mehrkanalton zu Stereo heruntergerechnet werden soll.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.av.downmix_aac`

Bedienebene: Fortgeschritten.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-bc5a82826524">AAC+-Downmix</h2>

**English:** AAC plus downmix

<p>Auswählen, ob Mehrkanalton zu Stereo heruntergerechnet werden soll.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.av.downmix_aacplus`

Bedienebene: Fortgeschritten.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-8da0d13a6b3c">AAC-Transkodierung</h2>

**English:** AAC transcoding

<p>Auswählen, ob AAC-Tonspuren transkodiert werden sollen.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.av.transcodeaac`

Bedienebene: Fortgeschritten.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-47837b48b01d">Tonquelle</h2>

**English:** Audio Source

<p>Auswählen, ob Mehrkanaltonspuren in PCM oder SPDIF umgewandelt werden sollen.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.av.audio_source`

Bedienebene: Fortgeschritten.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-d688a322c838">Allgemeine AC3-Verzögerung</h2>

**English:** General AC3 delay

<p>Die allgemeine Audioverzögerung von Dolby-Digital-Tonspuren einstellen.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.av.generalAC3delay`

Bedienebene: Fortgeschritten.

</details>

<h2 id="option-d6ca020fda42">Allgemeine PCM-Verzögerung</h2>

**English:** General PCM delay

<p>Die allgemeine Audioverzögerung von MPEG2-Tonspuren einstellen.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.av.generalPCMdelay`

Bedienebene: Fortgeschritten.

</details>

<h2 id="option-a970fbaea43e">3D-Surround</h2>

**English:** 3D Surround

<p>Die Ausgabe von 3D-Surround-Sound aktivieren.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.av.surround_3d`

Bedienebene: Fortgeschritten.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-b77e2afe945c">3D-Surround-Lautsprecherposition</h2>

**English:** 3D Surround Speaker Position

<p>Die virtuelle Position der Lautsprecher ändern.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.av.surround_3d_speaker`

Bedienebene: Fortgeschritten.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-849c837394b2">Automatische Lautstärkeanpassung</h2>

**English:** Audio Auto Volume Level

<p>Die automatische Lautstärkeanpassung einstellen.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.av.autovolume`

Bedienebene: Fortgeschritten.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-35e8daef87ca">Bluetooth-Audio aktivieren</h2>

**English:** Enable BT audio

<p>Den Ton auf die Bluetooth-Lautsprecher umleiten.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.av.btaudio`

Bedienebene: Fortgeschritten.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-6a581bfd469b">Allgemeine Bluetooth-Audioverzögerung</h2>

**English:** General BT audio delay

<p>Die allgemeine Audioverzögerung für Bluetooth-Lautsprecher einstellen.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.av.btaudiodelay`

Bedienebene: Fortgeschritten.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

---

Quelle: [OpenATV setup.xml](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/data/setup.xml) · `fdc9347241`.
