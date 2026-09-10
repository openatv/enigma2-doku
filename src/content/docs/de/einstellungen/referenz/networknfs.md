---
title: "NFS-Dateiserver"
description: "NFS-Dateiserver: Optionen, Originalhilfe und Menüweg in OpenATV."
editUrl: false
pagefind: true
---

Diese Referenz enthält die vorhandenen Hilfetexte aus OpenATV. Je nach geöffnetem Dialog und gewählten Optionen ist nur ein Teil der Einträge sichtbar.

## Wo finde ich das?

**Hauptmenü → Einstellungen → Netzwerk → NFS-Dateiserver**

Die Suche findet auch die englischen Bezeichnungen und technischen Schlüssel. [Zur Übersicht](../../)

<h2 id="option-45de33bafecb">NFS-Threads</h2>

**English:** NFS threads

<p>Die Anzahl der NFS-Server-Threads auswählen, die zugewiesen/verwendet werden sollen. Höhere Werte verbessern die Leistung bei mehreren Clients, verbrauchen jedoch mehr Arbeitsspeicher.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`self.nfsThreads`

Bedienebene: Einfach.

</details>

<h2 id="option-608035aeef63">NFSv3 aktivieren</h2>

**English:** Enable NFSv3

<p>Mit &#x27;Ja&#x27; wird die Verwendung der NFS Version 3 Protokolle zugelassen.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`self.nfsVers3`

Bedienebene: Einfach.

</details>

<h2 id="option-a9fc6001cc6d">NFSv4 aktivieren</h2>

**English:** Enable NFSv4

<p>Mit &#x27;Ja&#x27; wird die Verwendung der NFS Version 4 Protokolle zugelassen.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`self.nfsVers4`

Bedienebene: Einfach.

</details>

<h2 id="option-1ca52df88005">Zugriffsmodus</h2>

**English:** Access mode

<p>Den Zugriffsmodus auswählen, der für alle exportierten Verzeichnisse gilt.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`self.nfsAccessMode`

Bedienebene: Einfach.

</details>

<h2 id="option-004fd73a2293">Erlaubte Clients</h2>

**English:** Allowed clients

<p>Die IP-Adresse oder das Subnetz (z. B. 192.168.1.0/24) eingeben, für das der Zugriff auf den NFS-Host gewährt werden soll. Mit &#x27;*&#x27; (Standardwert) wird der Zugriff für alle Hosts zugelassen.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`self.nfsClients`

Bedienebene: Einfach.

</details>

<h2 id="option-de78d02a4fd4">Root Squash</h2>

**English:** Root squash

<p>Wenn aktiviert, wird &#x27;root&#x27; auf &#x27;nobody&#x27; abgebildet (sicherer). Wenn nicht, steht der volle Root-Zugriff zur Verfügung.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`self.nfsRootSquash`

Bedienebene: Einfach.

</details>

---

Quelle: [OpenATV setup.xml](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/data/setup.xml) · `fdc9347241`.
