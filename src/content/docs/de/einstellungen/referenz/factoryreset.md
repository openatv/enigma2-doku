---
title: "Werkseinstellungen"
description: "Werkseinstellungen: Optionen, Originalhilfe und Menüweg in OpenATV."
editUrl: false
pagefind: true
---

Diese Referenz enthält die vorhandenen Hilfetexte aus OpenATV. Je nach geöffnetem Dialog und gewählten Optionen ist nur ein Teil der Einträge sichtbar.

## Wo finde ich das?

**Hauptmenü → Einstellungen → System → Werkseinstellungen**

Die Suche findet auch die englischen Bezeichnungen und technischen Schlüssel. [Zur Übersicht](../../)

<h2 id="option-84493b7d3d84">Vollständiges Zurücksetzen auf Werkseinstellungen</h2>

**English:** Full factory reset

<p>&#x27;Ja&#x27; auswählen, um alle Einstellungen, Empfangsdaten, Timer, Fortsetzungszeiger usw. zu entfernen. Die Konfiguration wird auf die ursprünglichen Einstellungen zurückgesetzt. Dies ist die zuverlässigste Form für die Werkseinstellungen.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.factory.resetFull`

Bedienebene: Einfach.

</details>

<h2 id="option-e1fefb9ae4aa">Netzwerkkonfiguration zurücksetzen</h2>

**English:** Reset network configuration

<p>Mit &#x27;Ja&#x27; die Netzwerkkonfiguration auf die Standardwerte zurücksetzen. Der Ethernet-Anschluss wird aktiviert, sofern er vorhanden ist, und der Empfänger auf die Verwendung von DHCP eingestellt. Alle anderen Netzwerkschnittstellen werden gelöscht!</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.factory.resetNetwork`

Bedienebene: Einfach.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-d270103560f3">Alle Favoriten-/Senderdaten löschen</h2>

**English:** Remove all bouquet/tuning data

<p>&#x27;Ja&#x27; auswählen, um alle Empfangsdaten zu löschen. Es werden alle Empfangs- und Bouquetdaten gelöscht und Timer sind nicht funktionsfähig, bis der Empfänger neu eingestellt wurde!</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.factory.resetBouquets`

Bedienebene: Einfach.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-55b88be9aa6e">Alle GUI-Daten löschen</h2>

**English:** Remove all user interface data

<p>&#x27;Ja&#x27; auswählen, um alle Daten der Bedienoberfläche zu entfernen. Es werden alle Tastaturbelegungs-, Menü- und Setup-Überschreibungsdaten entfernt und die Standarddefinitionen wiederhergestellt.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.factory.resetUserInterfaces`

Bedienebene: Einfach.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-0423c38de518">Alle Netzlaufwerkdaten löschen</h2>

**English:** Remove all network mount data

<p>&#x27;Ja&#x27; auswählen, um alle Netzlaufwerkdaten zu entfernen. Es werden alle Netzwerkdaten einschließlich Autoaktivierungen und Netzwerkverbindungsdaten inklusive Verbindungskonten und Passwörter entfernt. Dies kann dazu führen, dass einige Enigma2-Funktionen fehlschlagen, wenn sie für die Verwendung dieser Netzwerkressourcen konfiguriert sind.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.factory.resetMounts`

Bedienebene: Einfach.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-dbc9df9c4488">Alle Plugineinstellungsdaten löschen</h2>

**English:** Remove all plugin setting data

<p>&#x27;Ja&#x27; auswählen, um alle Plugin-Konfigurationsdaten zu entfernen. Es werden alle Plugin-Konfigurationsdaten, die im Enigma2-Konfigurationsordner gespeichert sind, gelöscht und alle betroffenen Plugins auf die Standardeinstellungen zurückgesetzt. Dies kann dazu führen, dass einige Plugins erst nach dem Konfigurieren wieder funktionieren.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.factory.resetPlugins`

Bedienebene: Einfach.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-88780bda6fe8">Alle Aufnahmefortsetzungsdaten löschen</h2>

**English:** Remove all resume point data

<p>&#x27;Ja&#x27; auswählen, um alle Fortsetzungsdaten des Mediaplayers zu entfernen. Es werden die Daten entfernt, mit denen die Wiedergabe von Mediendateien an der Stelle fortgesetzt werden kann, an der sie zuletzt gestoppt wurden. Die Wiedergabeposition von Aufnahmen ist davon nicht betroffen.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.factory.resetResumePoints`

Bedienebene: Einfach.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-46cca821810d">Alle Einstellungen löschen</h2>

**English:** Remove all settings data

<p>&#x27;Ja&#x27; auswählen, um alle Konfigurationsdaten zu löschen. Es werden alle Enigma2-Einstellungen auf die Standardwerte zurückgesetzt und beim Neustart dann der Willkommensassistent ausführt.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.factory.resetSettings`

Bedienebene: Einfach.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-fdf84cacbd67">Alle Skindaten löschen</h2>

**English:** Remove all skin data

<p>&#x27;Ja&#x27; auswählen, um alle Benutzeranpassungen der Skindaten zu entfernen. Es werden alle benutzerbasierten Skinanpassungen entfernt. Alle betroffenen Skins werden auf die Standardeinstellungen zurückgesetzt. Auch werden alle benutzerdefinierten Bootlogos und Hintergrundbilder gelöscht!</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.factory.resetSkins`

Bedienebene: Einfach.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-e2cc7ba33468">Alle Timer löschen</h2>

**English:** Remove all timer data

<p>&#x27;Ja&#x27; löscht alle Timer-Konfigurationsdaten. Es werden alle Aufnahmetimer, AutoTimer und Zeitplaneraufgaben gelöscht!</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.factory.resetTimers`

Bedienebene: Einfach.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-d1076ae7a7ab">Alle anderen Daten löschen</h2>

**English:** Remove all other data

<p>&#x27;Ja&#x27; auswählen, um alle anderen Dateien und Verzeichnisse zu entfernen, die nicht von den oben genannten Optionen abgedeckt werden.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.factory.resetOthers`

Bedienebene: Einfach.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

---

Quelle: [OpenATV setup.xml](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/data/setup.xml) · `fdc9347241`.
