---
title: "Tunereinstellungen"
description: "Tunereinstellungen: Optionen, Originalhilfe und Menüweg in OpenATV."
editUrl: false
pagefind: true
---

Diese Referenz enthält die vorhandenen Hilfetexte aus OpenATV. Je nach geöffnetem Dialog und gewählten Optionen ist nur ein Teil der Einträge sichtbar.

## Wo finde ich das?

**Hauptmenü → Einstellungen → Empfang → Tunereinstellungen**

Die Suche findet auch die englischen Bezeichnungen und technischen Schlüssel. [Zur Übersicht](../../)

<h2 id="option-f13acfda23e9">LNB Power erzwingen</h2>

**English:** Force LNB Power

<p>Einstellung für LNB Power.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.tunermisc.forceLnbPower`

Bedienebene: Fortgeschritten.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-1e1aa3aed941">Toneburst erzwingen</h2>

**English:** Force ToneBurst

<p>Einstellung für Toneburst.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.tunermisc.forceToneBurst`

Bedienebene: Fortgeschritten.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-4d2171fb2cdf">12V-Ausgang</h2>

**English:** 12V output

<p>12V-Ausgang.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.usage.output_12V`

Bedienebene: Fortgeschritten.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-5f2c718dfc3c">Bevorzugter Tuner</h2>

**English:** Preferred tuner

<p>Den bevorzugten Tuner einstellen, wenn mehr als ein Tuner verfügbar ist. Bei &#x27;Automatisch&#x27; wird zuerst der Tuner mit den wenigsten Sendern/Satelliten genommen.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.usage.frontend_priority`

Bedienebene: Experte.

</details>

<h2 id="option-a0ebf09b7a8f">Bevorzugter Tuner bei Aufnahmen</h2>

**English:** Preferred tuner for recordings

<p>Den bevorzugten Tuner für Aufnahmen einstellen, wenn mehr als ein Tuner verfügbar ist. &#x27;Deaktiviert&#x27; verwendet den bevorzugten Tuner, der unter &#x27;Anpassen&#x27; eingestellt ist. &#x27;Automatisch&#x27; wählt den Tuner nach E2-Regeln und ignoriert die Einstellung in &#x27;Anpassen&#x27;.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.usage.recording_frontend_priority`

Bedienebene: Experte.

</details>

<h2 id="option-f89be0802b41">Bevorzugte Tuner bei Aufnahmen</h2>

**English:** Preferred tuners for recordings, multiple selection allowed

<p>Im Expertenmodus einstellen, welche Tuner für Aufnahmen bevorzugt werden sollen, wenn mehr als ein Tuner verfügbar ist.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.usage.recording_frontend_priority_multiselect`

Bedienebene: Experte.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-abc3af483997">Exp.: Beschränkung auf bevorzugte Tuner bei Aufnahmen</h2>

**English:** Experimental: strict limitation to preferred tuners for recordings

<p>Legt fest, ob bei Aufnahmen ein weiterer bevorzugter Tuner belegt wird, selbst wenn ein anderer Tuner mit verwendet werden könnte, der den gleichen Sender live empfängt.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.usage.recording_frontend_priority_strictly`

Bedienebene: Experte.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-76de1ec1db2f">Suchlauf im Hintergrund deaktivieren</h2>

**English:** Disable background scanning

<p>Wenn ein Sender eingestellt ist, durchsucht das System den Transponder nach Änderungen und speichert diese. &#x27;Ja&#x27; nur auswählen, wenn die Auswirkungen bekannt sind.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.misc.disable_background_scan`

Bedienebene: Experte.

</details>

<h2 id="option-b8fcb7c8c2a4">DVB-S-Subnetzwerk ignorieren</h2>

**English:** Ignore DVB-S namespace sub network

<p>Bei &#x27;Ja&#x27; werden Subnetzwerk-Frequenzen bei gültigen ONIDs ignoriert.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.usage.subnetwork`

Bedienebene: Experte.

</details>

<h2 id="option-d48731b679a1">DVB-C-Subnetzwerk ignorieren</h2>

**English:** Ignore DVB-C namespace sub network

<p>Bei &#x27;Ja&#x27; werden Subnetzwerk-Frequenzen bei gültigen ONIDs ignoriert.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.usage.subnetwork_cable`

Bedienebene: Experte.

</details>

<h2 id="option-c66cd49766bb">DVB-T-Subnetzwerk ignorieren</h2>

**English:** Ignore DVB-T namespace sub network

<p>Bei &#x27;Ja&#x27; werden Subnetzwerk-Frequenzen bei gültigen ONIDs ignoriert.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.usage.subnetwork_terrestrial`

Bedienebene: Experte.

</details>

<h2 id="option-ffc47a2e55c0">Problemumgehung für Verteilersystem</h2>

**English:** Delivery system workaround

<p>Nur auf &#x27;Ja&#x27; stellen, wenn es Probleme mit Multituner gibt.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.usage.enable_delivery_system_workaround`

Bedienebene: Fortgeschritten.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

---

Quelle: [OpenATV setup.xml](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/data/setup.xml) · `fdc9347241`.
