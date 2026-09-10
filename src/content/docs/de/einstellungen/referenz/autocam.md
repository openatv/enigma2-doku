---
title: "AutoCam-Einstellungen"
description: "AutoCam-Einstellungen: Optionen, Originalhilfe und Menüweg in OpenATV."
editUrl: false
pagefind: true
---

Diese Referenz enthält die vorhandenen Hilfetexte aus OpenATV. Je nach geöffnetem Dialog und gewählten Optionen ist nur ein Teil der Einträge sichtbar.

## Wo finde ich das?

**Hauptmenü → Einstellungen → Entschlüsselung / Jugendschutz → AutoCam-Einstellungen**

Die Suche findet auch die englischen Bezeichnungen und technischen Schlüssel. [Zur Übersicht](../../)

<h2 id="option-27b5553beca7">AutoCam verwenden</h2>

**English:** Use AutoCam

<p>Wenn aktiviert, kann jedem verschlüsselten Sender eine bestimmte Softcam zugeordnet werden.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.misc.autocamEnabled`

Bedienebene: Einfach.

</details>

<h2 id="option-48a048e56d89">Standard-Softcam für AutoCam</h2>

**English:** Select AutoCam default Softcam

<p>Eine Softcam aus der verfügbaren Liste als Standard für AutoCam festlegen.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`self.autocamDefault`

Bedienebene: Einfach.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

---

Quelle: [OpenATV setup.xml](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/data/setup.xml) · `fdc9347241`.
