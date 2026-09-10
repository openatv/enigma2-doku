---
title: "SoftCSA-Einstellungen"
description: "SoftCSA-Einstellungen: Optionen, Originalhilfe und Menüweg in OpenATV."
editUrl: false
pagefind: true
---

Diese Referenz enthält die vorhandenen Hilfetexte aus OpenATV. Je nach geöffnetem Dialog und gewählten Optionen ist nur ein Teil der Einträge sichtbar.

## Wo finde ich das?

**Hauptmenü → Einstellungen → Entschlüsselung / Jugendschutz → SoftCSA-Einstellungen**

Die Suche findet auch die englischen Bezeichnungen und technischen Schlüssel. [Zur Übersicht](../../)

<h2 id="option-652ebcf68063">Strategie zur Freigabe des Decoders</h2>

**English:** Decoder release strategy

<p>Den Hardware-Decoder freigeben, wenn zur Software-Entschlüsselung gewechselt wird. &#x27;Schnell&#x27; gibt ihn sofort frei (schnelleres Umschalten). &#x27;Normal&#x27; führt zuerst ein sauberes Herunterfahren durch (bei einigen Receivern stabiler). &#x27;Aggressiv&#x27; führt zwischen verschlüsselten Kanälen einen vollständigen Entschlüsseler-Reset durch.</p>

**Nach Änderung:** GUI-Neustart erforderlich.

<details>
<summary>Zuordnung & Hinweise</summary>

`config.softcsa.decoderRelease`

Bedienebene: Einfach.

</details>

<h2 id="option-dac71671b32d">Synchronisierungsmodus</h2>

**English:** Sync mode

<p>Auswählen, wie der entschlüsselte Datenstrom verarbeitet werden soll. &#x27;Automatisch&#x27; verwendet asynchrone Schreibvorgänge (geringere CPU-Auslastung) mit automatischer Umschaltung auf synchron, wenn Kernel-AIO nicht unterstützt wird. &#x27;Synchron&#x27; erzwingt blockierende Schreibvorgänge (stabil und am kompatibelsten).</p>

**Nach Änderung:** GUI-Neustart erforderlich.

<details>
<summary>Zuordnung & Hinweise</summary>

`config.softcsa.syncMode`

Bedienebene: Einfach.

</details>

<h2 id="option-e9558a3cd3e7">Decoderstart-Timeout</h2>

**English:** Decoder start timeout

<p>Maximale Wartezeit für den ersten Entschlüsselungsschlüssel (CW) vor dem Start des Decoders. Bei „Deaktiviert” startet der Decoder sofort ohne Wartezeit.</p>

**Nach Änderung:** GUI-Neustart erforderlich.

<details>
<summary>Zuordnung & Hinweise</summary>

`config.softcsa.waitForDataTimeout`

Bedienebene: Experte.

</details>

<h2 id="option-fdbbab323b3e">Decoderstartverzögerung</h2>

**English:** Decoder start delay

<p>Die Verzögerung auswählen, mit der die entschlüsselten Daten vor Beginn der Wiedergabe gepuffert werden. Damit können AC3-Tonunterbrechungen reduziert werden, da sichergestellt wird, dass beim Start des Decoders genügend Daten verfügbar sind. Höhere Werte sind stabiler, verlängern jedoch die Senderumschaltzeit.</p>

**Nach Änderung:** GUI-Neustart erforderlich.

<details>
<summary>Zuordnung & Hinweise</summary>

`config.softcsa.bufferTime`

Bedienebene: Experte.

</details>

---

Quelle: [OpenATV setup.xml](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/data/setup.xml) · `fdc9347241`.
