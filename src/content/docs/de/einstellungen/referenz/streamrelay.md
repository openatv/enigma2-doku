---
title: "Stream-Relay-Einstellungen"
description: "Stream-Relay-Einstellungen: Optionen, Originalhilfe und Menüweg in OpenATV."
editUrl: false
pagefind: true
---

Diese Referenz enthält die vorhandenen Hilfetexte aus OpenATV. Je nach geöffnetem Dialog und gewählten Optionen ist nur ein Teil der Einträge sichtbar.

## Wo finde ich das?

**Hauptmenü → Einstellungen → Entschlüsselung / Jugendschutz → Stream-Relay-Einstellungen**

Die Suche findet auch die englischen Bezeichnungen und technischen Schlüssel. [Zur Übersicht](../../)

<h2 id="option-ea7165a0befe">Stream-Relay-URL</h2>

**English:** Stream Relay URL

<p>IP-Adresse des Stream-Relay-Servers, um Sender zu entschlüsseln, die nur über Stream Relay entschlüsselt werden können.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.misc.softcam_streamrelay_url`

Bedienebene: Experte.

</details>

<h2 id="option-bbe4768a0e15">Stream-Relay-Port</h2>

**English:** Stream Relay port

<p>Port-Nummer des Stream-Relay-Servers, um Dienste zu entschlüsseln, die nur über Stream Relay entschlüsselt werden können.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.misc.softcam_streamrelay_port`

Bedienebene: Experte.

</details>

<h2 id="option-34c19fa4aea3">Stream-Relay-Umschaltverzögerung</h2>

**English:** Stream Relay switch delay

<p>Die Verzögerung auswählen, die beim Wechsel von einem Stream-Relay-Sender verwendet wird, bevor der Tuner auf einen anderen Sender wechselt. Die Verwendung von &#x27;0&#x27; wird nur für Receiver mit mehreren Satelliten-Tunern empfohlen.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.misc.softcam_streamrelay_delay`

Bedienebene: Experte.

</details>

---

Quelle: [OpenATV setup.xml](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/data/setup.xml) · `fdc9347241`.
