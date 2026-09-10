---
title: "DNS-Einstellungen"
description: "DNS-Einstellungen: Optionen, Originalhilfe und Menüweg in OpenATV."
editUrl: false
pagefind: true
---

Diese Referenz enthält die vorhandenen Hilfetexte aus OpenATV. Je nach geöffnetem Dialog und gewählten Optionen ist nur ein Teil der Einträge sichtbar.

## Wo finde ich das?

**Hauptmenü → Einstellungen → Netzwerk → DNS-Einstellungen**

Die Suche findet auch die englischen Bezeichnungen und technischen Schlüssel. [Zur Übersicht](../../)

<h2 id="option-2806f28dc8ff">Hostname</h2>

<p>Hostnamen eingeben, mit dem dieser Receiver identifiziert werden soll.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`self.hostname`

Bedienebene: Einfach.

</details>

<h2 id="option-ba6870de6209">Domainname</h2>

**English:** Domain name

<p>Das Netzwerk-DNS-Suffix angeben, das verwendet werden soll, wenn nur der Hostname angegeben ist. Dies hilft dem DNS-Resolver, den angeforderten Host zu finden.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.usage.dnsSuffix`

Bedienebene: Einfach.

</details>

<h2 id="option-76be456611b3">DNS-Protokollmodus</h2>

**English:** DNS protocol mode

<p>Auswählen, ob IPv4, IPv6 oder beide Protokolle verwendet werden sollen. Welches soll bevorzugt werden, wenn beide aktiviert sind?</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.usage.dnsMode`

Bedienebene: Einfach.

</details>

<h2 id="option-aed883785324">DNS-Rotation verwenden</h2>

**English:** Use DNS rotation

<p>Mit &#x27;Ja&#x27; wird das Durchwechseln der DNS-Einträge aktiviert. Dies ändert die Abfolge, in der die DNS-Serverliste verwendet wird, und kann Probleme vermeiden, wenn ein DNS-Server aus der Liste nicht mehr verfügbar ist.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.usage.dnsRotate`

Bedienebene: Einfach.

</details>

<h2 id="option-3ad31f82dee2">DNS-Datenquelle</h2>

**English:** DNS data source

<p>DNS-Server zum Nachschlagen des Hostnamens auswählen, um die IP-Adresse zu ermitteln.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.usage.dns`

Bedienebene: Einfach.

</details>

<h2 id="option-78fe2e0037e7">DNSCrypt-Server verwenden</h2>

**English:** Use DNSCrypt servers

<p>Nur DNS-Server verwenden, die das DNSCrypt-Protokoll implementieren.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.usage.DNSCryptProtocol`

Bedienebene: Einfach.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-8af955638549">DoH-Server verwenden</h2>

**English:** Use DoH servers

<p>Nur DNS-Server verwenden, die das DNS-over-HTTPS-Protokoll implementieren. Dadurch werden DNS-Lookups über das verschlüsselte HTTPS-Protokoll durchgeführt.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.usage.DNSCryptDoH`

Bedienebene: Einfach.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-e4ecb14c9da4">ODoH-Server verwenden</h2>

**English:** Use ODoH servers

<p>Nur DNS-Server verwenden, die das Oblivious-DNS-over-HTTPS-Protokoll implementieren. Dies sorgt für zusätzliche Privatsphäre, indem eine Proxy-Ebene zur DNS-over-HTTPS-Anfrage hinzugefügt wird.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.usage.DNSCryptODoH`

Bedienebene: Einfach.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-b52287e6c73b">Nur DNSSEC-Server verwenden</h2>

**English:** Use only DNSSEC servers

<p>Der Server muss DNS Security Extensions (DNSSEC) unterstützen. Hierbei handelt es sich um eine Option zur Datensignierung, die die Integrität der DNS-Daten vor Kompromittierungen wie Cache-Poisoning schützt.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.usage.DNSCryptDNSSEC`

Bedienebene: Einfach.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-9c45204124b2">Nur No-Log-Server verwenden</h2>

**English:** Use only no-log servers

<p>Der Server darf keine Benutzeranfragen protokollieren (deklarativ). Dies kann die Privatsphäre bei DNS-Lookups verbessern, da die Anfrage nicht auf dem Server protokolliert wird, der die Daten bereitstellt.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.usage.DNSCryptNoLog`

Bedienebene: Einfach.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-a32179466555">Nur Server ohne Filter verwenden</h2>

**English:** Use only no-filter servers

<p>Der Server darf keine eigene Sperrliste durchsetzen. Einige Server implementieren sie aber möglicherweise, um Websites aus Gründen der Kindersicherung, der Werbeblockierung usw. zu sperren.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.usage.DNSCryptNoFilter`

Bedienebene: Einfach.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-ee1cca3946fa">DNS-Cache verwenden</h2>

**English:** Use DNS cache

<p>Einen DNS-Cache verwenden, um die letzten DNS-Lookups lokal zu speichern, die Leistung zu verbessern, die Latenz zu reduzieren und den ausgehenden Datenverkehr zu verringern.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.usage.DNSCryptCache`

Bedienebene: Einfach.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-80971ec84681">Überwachungs-UI aktivieren</h2>

**English:** Enable monitoring UI

<p>&#x27;Ja&#x27; auswählen, um die Überwachungs-UI-Webschnittstelle für das DNSCrypt-Subsystem zu aktivieren.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.usage.DNSCryptUI`

Bedienebene: Einfach.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-ece63905f424">Benutzername</h2>

**English:** Username

<p>Den Benutzernamen für die Webschnittstelle der Überwachungs-UI festlegen.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.usage.DNSCryptUsername`

Bedienebene: Einfach.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-34e1c486083f">Passwort</h2>

**English:** Password

<p>Das Passwort für die Webschnittstelle der Überwachungs-UI festlegen.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.usage.DNSCryptPassword`

Bedienebene: Einfach.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-1a40201b1e3c">Port</h2>

<p>Die Portadresse (8080–9999) für die Webschnittstelle der Überwachungs-UI festlegen.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.usage.DNSCryptPort`

Bedienebene: Einfach.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-4b79dd063aee">Datenschutzstufe</h2>

**English:** Privacy level

<p>Die Datenschutzstufe für die Webschnittstelle der Überwachungs-UI festlegen.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.usage.DNSCryptPrivacy`

Bedienebene: Einfach.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

---

Quelle: [OpenATV setup.xml](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/data/setup.xml) · `fdc9347241`.
