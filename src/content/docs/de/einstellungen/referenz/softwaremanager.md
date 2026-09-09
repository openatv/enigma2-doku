---
title: "Updateeinstellungen"
description: "Updateeinstellungen: Optionen, Originalhilfe und Menüweg in openATV."
editUrl: false
pagefind: true
---

Diese Referenz enthält die vorhandenen Hilfetexte aus openATV. Je nach geöffnetem Dialog und gewählten Optionen ist nur ein Teil der Einträge sichtbar.

## Wo finde ich das?

**Hauptmenü → Einstellungen → Softwareverwaltung → Erweiterte Optionen → Updateeinstellungen**

Die Suche findet auch die englischen Bezeichnungen und technischen Schlüssel. [Zur Übersicht](../../)

<h2 id="option-8d0448a39f29">Softwareupdate auswählen</h2>

**English:** Select Software Update

<p>Den Aktualisierungsmodus auswählen.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.plugins.softwaremanager.updatetype`

Bedienebene: Experte.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-315e308db6c7">Konfigurationsdateien überschreiben?</h2>

**English:** Overwrite configuration files?

<p>Konfigurationsdateien beim Upgrade überschreiben?</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.plugins.softwaremanager.overwriteConfigFiles`

Bedienebene: Experte.

</details>

<h2 id="option-21e0d0e9c331">Einstellungsdateien überschreiben?</h2>

**English:** Overwrite Setting Files?

<p>Senderlisten beim Upgrade überschreiben?</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.plugins.softwaremanager.overwriteSettingsFiles`

Bedienebene: Experte.

</details>

<h2 id="option-00670fdf004b">Kernel/Treiber-Module überschreiben?</h2>

**English:** Overwrite Driver Files?

<p>Kernel/Treiber-Module beim Upgrade überschreiben?</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.plugins.softwaremanager.overwriteDriversFiles`

Bedienebene: Experte.

</details>

<h2 id="option-25dfa296cd8b">Softcamdateien überschreiben?</h2>

**English:** Overwrite Emu Files?

<p>Softcamdateien beim Upgrade überschreiben?</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.plugins.softwaremanager.overwriteEmusFiles`

Bedienebene: Experte.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-738b92c46461">Picons überschreiben?</h2>

**English:** Overwrite Picon Files?

<p>Picons beim Upgrade überschreiben?</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.plugins.softwaremanager.overwritePiconsFiles`

Bedienebene: Experte.

</details>

<h2 id="option-5e907c718178">Bootlogos überschreiben?</h2>

**English:** Overwrite Bootlogo Files?

<p>Bootlogos beim Upgrade überschreiben?</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.plugins.softwaremanager.overwriteBootlogoFiles`

Bedienebene: Experte.

</details>

<h2 id="option-14a8a3f19601">Spinnerdateien überschreiben?</h2>

**English:** Overwrite Spinner Files?

<p>Spinnerdateien beim Upgrade überschreiben?</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.plugins.softwaremanager.overwriteSpinnerFiles`

Bedienebene: Experte.

</details>

<h2 id="option-aae3a962c2e5">Modus für automatische Wiederherstellung</h2>

**English:** Mode for autorestore

<p>Turbo: Ein Neustart nach dem Flashen.<br />Schnell: Ein Neustart nach dem Flashen, ein weiterer nach Wiederherstellung.<br />Langsam: Ein Neustart nach dem Flashen, ein weiterer nach Wiederherstellen der Bedienoberfläche.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.plugins.softwaremanager.restoremode`

Bedienebene: Experte.

</details>

<h2 id="option-a10bd29e6e78">Ziel der Einstellungssicherung</h2>

**English:** Settings Backup Target

<p>Das Ziel für die Einstellungssicherung vorgeben. Bei &#x27;Benutzer fragen&#x27; kann es vor dem Ausführen der Sicherung geändert werden.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.plugins.softwaremanager.backuptarget`

Bedienebene: Experte.

</details>

---

Quelle: [openATV setup.xml](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/data/setup.xml) · `fdc9347241`.
