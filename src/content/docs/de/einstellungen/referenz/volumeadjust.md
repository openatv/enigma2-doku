---
title: "Lautstärkeanpassung"
description: "Lautstärkeanpassung: Optionen, Originalhilfe und Menüweg in openATV."
editUrl: false
pagefind: true
---

Diese Referenz enthält die vorhandenen Hilfetexte aus openATV. Je nach geöffnetem Dialog und gewählten Optionen ist nur ein Teil der Einträge sichtbar.

## Wo finde ich das?

**Hauptmenü → Einstellungen → Ton → Lautstärkeanpassung**

Die Suche findet auch die englischen Bezeichnungen und technischen Schlüssel. [Zur Übersicht](../../)

<h2 id="option-a212bf6f2bc7">Lautstärkeanpassung-Modus</h2>

**English:** Volume adjustment mode

<p>&#x27;Deaktiviert&#x27;: Keine automatische Lautstärkeanpassung. &#x27;Definierter Lautstärkeoffset&#x27;: Den Sendern bestimmte Lautstärkepegel zuweisen. &#x27;Zuletzt verwendete/eingestellte Lautstärke&#x27;: Die zuletzt verwendeten Lautstärkepegel für die Sender verwenden.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.volumeAdjust.adjustMode`

Bedienebene: Einfach.

</details>

<h2 id="option-734470d15d57">Standardlautstärkeoffset</h2>

**English:** Default volume offset

<p>Dies ist der standardmäßige Lautstärkeoffset, der auf alle Sender angewandt wird, die der Liste hinzugefügt werden.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.volumeAdjust.defaultOffset`

Bedienebene: Einfach.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-cac1f0e6b725">Standard-Dolby-Digital-Offset</h2>

**English:** Default Dolby Digital / Dolby AC-3 offset

<p>Dieser Offset wird nur verwendet, wenn der Sender keinen eigenen Lautstärkeoffset hat.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.volumeAdjust.dolbyOffset`

Bedienebene: Einfach.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-4a4638f0cf73">Lautstärkepegel automatisch anzeigen</h2>

**English:** Auto show volume level

<p>&#x27;Ja&#x27; auswählen, um den Lautstärkepegel bei jeder automatischen Änderung anzuzeigen.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.volumeAdjust.showVolumeBar`

Bedienebene: Einfach.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

---

Quelle: [openATV setup.xml](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/data/setup.xml) · `fdc9347241`.
