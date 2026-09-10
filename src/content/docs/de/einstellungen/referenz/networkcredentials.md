---
title: "Netzwerkanmeldedaten"
description: "Netzwerkanmeldedaten: Optionen, Originalhilfe und Menüweg in OpenATV."
editUrl: false
pagefind: true
---

Diese Referenz enthält die vorhandenen Hilfetexte aus OpenATV. Je nach geöffnetem Dialog und gewählten Optionen ist nur ein Teil der Einträge sichtbar.

## Wo finde ich das?

Der direkte Menüweg ist in dieser Grundfassung noch nicht zugeordnet. Suche im jeweiligen Funktionsdialog nach **Netzwerkanmeldedaten**.

Die Suche findet auch die englischen Bezeichnungen und technischen Schlüssel. [Zur Übersicht](../../)

<h2 id="option-4fe3508e14a5">Gastanmeldung verwenden</h2>

**English:** Use guest login

<p>Wenn aktiviert, werden die Freigaben dieses Hosts anonym (als Gast) aufgelistet, wobei der unten angegebene Benutzername und das Passwort ignoriert werden.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`self.useGuest`

Bedienebene: Einfach.

</details>

<h2 id="option-204cb5226230">Benutzername</h2>

**English:** Username

<p>Den Benutzernamen eingeben, der für den Zugriff auf die Freigaben dieses Hosts verwendet werden soll.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`self.username`

Bedienebene: Einfach.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-1052a8d0d0d1">Passwort</h2>

**English:** Password

<p>Das Passwort eingeben, das für den Zugriff auf die Freigaben dieses Hosts verwendet werden soll.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`self.password`

Bedienebene: Einfach.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

---

Quelle: [OpenATV setup.xml](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/data/setup.xml) · `fdc9347241`.
