---
title: "WLAN-Einstellungen"
description: "WLAN-Einstellungen: Optionen, Originalhilfe und Menüweg in OpenATV."
editUrl: false
pagefind: true
---

Diese Referenz enthält die vorhandenen Hilfetexte aus OpenATV. Je nach geöffnetem Dialog und gewählten Optionen ist nur ein Teil der Einträge sichtbar.

## Wo finde ich das?

**Hauptmenü → Einstellungen → Netzwerk → Netzwerkübersicht → WLAN-Einstellungen**

Die Suche findet auch die englischen Bezeichnungen und technischen Schlüssel. [Zur Übersicht](../../)

<h2 id="option-b6f4f05f6442">Netzwerkname (SSID)</h2>

**English:** Network name (SSID)

<p>Den Netzwerknamen (SSID) des Drahtlosnetzwerks auswählen, mit dem sich der Receiver verbinden soll.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`self.cfgSsid`

Bedienebene: Einfach.

</details>

<h2 id="option-6bf633e4eefe">Aktiviert</h2>

**English:** Enabled

<p>Wenn aktiviert, wird beim Verbinden des WLAN-Adapters versucht, eine Verbindung über das gespeicherte Netzwerk herzustellen.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`self.cfgEnabled`

Bedienebene: Einfach.

</details>

<h2 id="option-c1ba45080d8d">Priorität</h2>

**English:** Priority

<p>Bevorzugte Verbindungspriorität, wenn mehrere WLAN-Profile konfiguriert sind. Niedrigere Zahlen haben eine höhere Priorität.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`self.cfgPriority`

Bedienebene: Einfach.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-536220f44c0f">Verstecktes Netzwerk</h2>

**English:** Hidden network

<p>Wenn aktiviert, wird die Verbindung zu Accesspoints ermöglicht, die ihre SSID nicht senden.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`self.cfgHidden`

Bedienebene: Fortgeschritten.

</details>

<h2 id="option-5bd604e6a235">Verschlüsselung</h2>

**English:** Encryption

<p>Das Sicherheitsprotokoll auswählen, das für den Zugriff auf das ausgewählte WLAN verwendet werden soll.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`self.cfgEncryption`

Bedienebene: Einfach.

</details>

<h2 id="option-4d82059b6737">Passwort / Schlüssel</h2>

**English:** Password / Key

<p>Das Passwort, die Passphrase oder den vorinstallierten Schlüssel (PSK) für das ausgewählte Drahtlosnetzwerk eingeben.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`self.cfgKey`

Bedienebene: Einfach.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

---

Quelle: [OpenATV setup.xml](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/data/setup.xml) · `fdc9347241`.
