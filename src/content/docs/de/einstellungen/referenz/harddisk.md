---
title: "Festplatteneinstellungen"
description: "Festplatteneinstellungen: Optionen, Originalhilfe und Menüweg in OpenATV."
editUrl: false
pagefind: true
---

Diese Referenz enthält die vorhandenen Hilfetexte aus OpenATV. Je nach geöffnetem Dialog und gewählten Optionen ist nur ein Teil der Einträge sichtbar.

## Wo finde ich das?

Der direkte Menüweg ist in dieser Grundfassung noch nicht zugeordnet. Suche im jeweiligen Funktionsdialog nach **Festplatteneinstellungen**.

Die Suche findet auch die englischen Bezeichnungen und technischen Schlüssel. [Zur Übersicht](../../)

<h2 id="option-5f2c3cb88eaa">Festplatten-Standby nach</h2>

**English:** Hard disk Standby after

<p>Die Leerlaufzeit einstellen, nach der die Festplatte in den Ruhezustand wechseln soll.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.usage.hdd_standby`

Bedienebene: Einfach.

</details>

<h2 id="option-c3663875d809">Festplatten-Standby, wenn Receiver im Standby nach</h2>

**English:** Hard disk Standby in receiver Standby after

<p>Die Leerlaufzeit einstellen, nach der die Festplatte in den Ruhezustand wechseln soll, wenn sich der Receiver im Standby befindet.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.usage.hdd_standby_in_standby`

Bedienebene: Einfach.

</details>

<h2 id="option-22ced303777b">Internen Standbytimer der Festplatte verwenden</h2>

**English:** Use Harddisk Hardware Standby Timer

<p>Bei &#x27;Ja&#x27; wird der interne Standbytimer der Festplatte verwendet.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.usage.hdd_timer`

Bedienebene: Einfach.

</details>

<h2 id="option-d7db49f4fb29">Unbekannte Geräte anzeigen</h2>

**English:** Show unknown devices

<p>Aktivieren, um auch unbekannte Datenträger in der Geräteverwaltung anzuzeigen.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.usage.showUnknownDevices`

Bedienebene: Experte.

</details>

---

Quelle: [OpenATV setup.xml](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/data/setup.xml) · `fdc9347241`.
