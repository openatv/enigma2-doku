---
title: "Netzwerkadaptereinstellungen"
description: "Netzwerkadaptereinstellungen: Optionen, Originalhilfe und Menüweg in openATV."
editUrl: false
pagefind: true
---

Diese Referenz enthält die vorhandenen Hilfetexte aus openATV. Je nach geöffnetem Dialog und gewählten Optionen ist nur ein Teil der Einträge sichtbar.

## Wo finde ich das?

**Hauptmenü → Einstellungen → Netzwerk → Netzwerkübersicht → Netzwerkadaptereinstellungen**

Die Suche findet auch die englischen Bezeichnungen und technischen Schlüssel. [Zur Übersicht](../../)

<h2 id="option-65600f7e26c9">Aktiviert</h2>

**English:** Enabled

<p>Wenn aktiviert, wird dieser Adapter beim Systemstart aktiviert und initialisiert.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`self.cfgEnabled`

Bedienebene: Einfach.

</details>

<h2 id="option-fbc3c6f81dcd">Nur WoW</h2>

**English:** WoW only

<p>Wenn aktiviert, bleibt dieser WLAN-Adapter ausschließlich im Wake-on-WLAN-Modus und wird nicht für die Verbindung mit einem Netzwerk verwendet.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`self.cfgWowOnly`

Bedienebene: Fortgeschritten.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-ce96c23e5d89">IP-Protokoll</h2>

**English:** IP protocol

<p>Auswählen, welche IP-Protokolle mit diesem Adapter verwendet werden können.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`self.cfgIpMode`

Bedienebene: Fortgeschritten.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-830d8d7e3f63">Adresse automatisch beziehen (DHCP)</h2>

**English:** Use DHCP

<p>Wenn aktiviert, werden IP-Adresse, Subnetzmaske, Gateway und DNS-Einstellungen automatisch per DHCP bezogen.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`self.cfgDhcp`

Bedienebene: Einfach.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-5976918f4eff">IP-Adresse</h2>

**English:** IP address

<p>Die feste/statische IPv4-Adresse eingeben, die für diesen Netzwerkadapter verwendet werden soll.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`self.cfgIp`

Bedienebene: Einfach.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-d2810a89ca8e">Subnetzmaske</h2>

**English:** Subnet mask

<p>Die für diesen Netzwerkadapter zu verwendende Subnetzmaske eingeben, zum Beispiel 255.255.255.0.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`self.cfgNetmask`

Bedienebene: Einfach.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-e824b947aefa">Standard-Gateway</h2>

**English:** Default gateway

<p>Die IP-Adresse eingeben, die für diesen Adapter als Gateway zu anderen Netzwerken verwendet werden soll. Es ist normalerweise die IP-Adresse des Routers.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`self.cfgGateway`

Bedienebene: Einfach.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-e8dbc905a9dc">Netzwerkmetrik</h2>

**English:** Network metric

<p>Die Netzwerkmetrik für diesen Adapter auswählen. Wenn mehrere Adapter aktiv sind, wird derjenige mit der niedrigsten Netzwerkmetrik als Standardroute für den Netzwerkverkehr verwendet.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`self.cfgMetric`

Bedienebene: Fortgeschritten.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-96b0eb7fe963">DNS überschreiben</h2>

**English:** DNS override

<p>Wenn aktiviert, benutzerdefinierte DNS-Einstellungen für diesen Adapter anstelle der globalen DNS-Einstellungen eingeben.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`self.cfgDnsOverride`

Bedienebene: Fortgeschritten.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-df614a3afb59">Primärer DNS (IPv4)</h2>

**English:** Primary DNS (IPv4)

<p>Die primäre IPv4-DNS-Einstellung für diesen Adapter eingeben.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`self.cfgDns1v4`

Bedienebene: Einfach.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-a95c0893b808">Sekundärer DNS (IPv4)</h2>

**English:** Secondary DNS (IPv4)

<p>Die sekundäre IPv4-DNS-Einstellung für diesen Adapter eingeben. (Optional)</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`self.cfgDns2v4`

Bedienebene: Einfach.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-5c41892cfe59">Primärer DNS (IPv6)</h2>

**English:** Primary DNS (IPv6)

<p>Die primäre IPv6-DNS-Einstellung für diesen Adapter eingeben. (Optional)</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`self.cfgDns1v6`

Bedienebene: Einfach.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-2365e828337a">Sekundärer DNS (IPv6)</h2>

**English:** Secondary DNS (IPv6)

<p>Die sekundäre IPv6-DNS-Einstellung für diesen Adapter eingeben. (Optional)</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`self.cfgDns2v6`

Bedienebene: Einfach.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-7612631b33aa">Wake-on-LAN</h2>

<p>Wenn aktiviert, kann der Receiver durch ein Wake-on-LAN-Netzwerksignal (Magic Packet) aus der Ferne eingeschaltet werden.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.network.wol`

Bedienebene: Fortgeschritten.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-d3fbd7fb6bb5">Verbindungsgeschwindigkeit</h2>

**English:** Link speed

<p>Eine bestimmte Netzwerkverbindungsgeschwindigkeit bzw. einen Duplex-Modus anstelle der automatischen Aushandlung erzwingen. Diese Einstellung nur ändern, wenn es einen konkreten Grund dafür gibt, da eine falsche Einstellung die Netzwerkverbindung unterbrechen kann.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`self.cfgLinkSpeed`

Bedienebene: Experte.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-fd4fa6ef1ecf">Wake-on-WLAN</h2>

**English:** Wake-on-WiFi

<p>Wenn aktiviert, bleibt der WLAN-Adapter während des Standby im energiesparenden Scanmodus, damit der Receiver durch ein Netzwerksignal (Magic Packet) eingeschaltet werden kann.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`self.cfgWakeOnWiFi`

Bedienebene: Fortgeschritten.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

---

Quelle: [openATV setup.xml](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/data/setup.xml) · `fdc9347241`.
