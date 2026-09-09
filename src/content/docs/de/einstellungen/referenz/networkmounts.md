---
title: "Netzwerkfreigabeeinstellungen"
description: "Netzwerkfreigabeeinstellungen: Optionen, Originalhilfe und Menüweg in openATV."
editUrl: false
pagefind: true
---

Diese Referenz enthält die vorhandenen Hilfetexte aus openATV. Je nach geöffnetem Dialog und gewählten Optionen ist nur ein Teil der Einträge sichtbar.

## Wo finde ich das?

**Hauptmenü → Einstellungen → Netzwerk → Netzwerkfreigabeübersicht → Netzwerkfreigabeeinstellungen**

Die Suche findet auch die englischen Bezeichnungen und technischen Schlüssel. [Zur Übersicht](../../)

<h2 id="option-ddfd373bc897">Aktiviert</h2>

**English:** Enabled

<p>Diese Netzwerkfreigabe aktivieren oder deaktivieren. Ein Deaktivieren der Freigabe löscht nicht deren Definition.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`self.enabled`

Bedienebene: Einfach.

</details>

<h2 id="option-bf65d0a227f5">Protokoll</h2>

**English:** Protocol

<p>Das zu verwendende Freigabeprotokoll auswählen. SMB (Freigaben nach Windows-Art) oder NFS (Mac- und Linux-Freigaben).</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`self.protocol`

Bedienebene: Einfach.

</details>

<h2 id="option-d84add72d6b7">Server</h2>

<p>Den Hostnamen oder die IP-Adresse des Servers der Netzwerkfreigabe eingeben.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`self.server`

Bedienebene: Einfach.

</details>

<h2 id="option-7e6a6a90d86c">Remote-Pfad</h2>

**English:** Remote path

<p>Den Namen der Remote-Freigabe (SMB) oder den exportierten Pfad (NFS) auf dem Server eingeben.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`self.remotePath`

Bedienebene: Einfach.

</details>

<h2 id="option-5ba9ec234a61">Lokale Freigabe</h2>

**English:** Local share

<p>Den Namen des lokalen Verzeichnisses eingeben, das als lokaler Einhängepunkt für die Remote-Freigabe dienen soll.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`self.shareName`

Bedienebene: Einfach.

</details>

<h2 id="option-9528c75e5622">Einhängemodus</h2>

**English:** Mount mode

<p>Auswählen, wann und wie die Remote-Freigabe eingebunden werden soll. Für die meisten Anwendungsfälle wird &#x27;autofs&#x27; empfohlen.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`self.mode`

Bedienebene: Einfach.

</details>

<h2 id="option-8efcd57c4d53">Als Festplattenersatz verwenden</h2>

**English:** Use as HDD replacement

<p>Ist diese Freigabe aktiviert, wird sie unter &#x27;/media/hdd&#x27; statt unter ihrem eigenen Pfad &#x27;/media/net&#x27; eingebunden.<br />Nur verwenden, wenn die Freigabe zuverlässig verfügbar ist!</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`self.hddReplacement`

Bedienebene: Einfach.

</details>

<h2 id="option-d71ac0495eec">Zugriffsmodus</h2>

**English:** Access mode

<p>Den Zugriffsmodus – &#x27;Lesen/Schreiben&#x27; oder &#x27;Nur Lesen&#x27; – für diese Freigabe-Einbindung auswählen.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`self.accessMode`

Bedienebene: Einfach.

</details>

<h2 id="option-06d5df43dada">NFS-Version</h2>

**English:** NFS version

<p>Eine bestimmte NFS-Version auswählen, um eine spezifische NFS-Protokollversion zu erzwingen, anstatt eine automatische Aushandlung zuzulassen.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`self.nfsVersion`

Bedienebene: Einfach.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-8d06ead8596b">NFS-Dateisperren verwenden</h2>

**English:** Use NFS file locking

<p>Auswählen, ob eine Dateisperrung verfügbar ist. &#x27;Nein&#x27;, um &#x27;nolock&#x27; zu den Einstellungen hinzuzufügen, was mit älteren/einfacheren NFS-Servern am besten kompatibel ist.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`self.nfsLocking`

Bedienebene: Einfach.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-155dd83f3fd0">Leseblockgröße</h2>

**English:** Read block size

<p>Die Einhängeoption für die Puffergröße beim Lesen (rsize) auswählen. &#x27;Automatisch&#x27; auswählen, damit Kernel und Server die optimale Größe aushandeln können.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`self.nfsRsize`

Bedienebene: Einfach.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-1089951c3eff">Schreibblockgröße</h2>

**English:** Write block size

<p>Die Einhängeoption für die Puffergröße beim Schreiben (wsize) auswählen. &#x27;Automatisch&#x27; auswählen, damit Kernel und Server die optimale Größe aushandeln können.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`self.nfsWsize`

Bedienebene: Einfach.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-1e83c59da8e9">Timeout</h2>

<p>Angeben, wie lange auf eine Antwort gewartet werden soll, bevor ein erneuter Versuch unternommen wird (oder der Vorgang fehlschlägt - siehe &#x27;Bei Nichterreichbarkeit aufgeben&#x27; weiter unten).<br />&#x27;0&#x27; eingeben, um den internen Standardwert des Kernels anstelle eines festen Werts zu verwenden.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`self.nfsTimeo`

Bedienebene: Einfach.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-b8fba7006bb9">Soft Mount</h2>

**English:** Soft mount

<p>&#x27;Soft Mount&#x27; auswählen, damit beim Zugriff auf Dateien ein Fehler zurückgegeben wird, sobald der Server nicht mehr reagiert, anstatt endlos weitere Versuche zu unternehmen. Die Option &#x27;Hard Mount&#x27; (Standardeinstellung) schützt vor unbemerktem Datenverlust, kann jedoch dazu führen, dass Programme, die auf diese Freigabe zugreifen, hängen bleiben, solange der Server nicht erreichbar ist.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`self.nfsSoft`

Bedienebene: Einfach.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-53c01de79c98">Benutzername</h2>

**English:** Username

<p>Den Benutzernamen eingeben, der für den Zugriff auf die Freigaben dieses Hosts verwendet werden soll, falls Authentifizierungsdaten erforderlich sind.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`self.username`

Bedienebene: Einfach.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-fb39a45260b7">Passwort</h2>

**English:** Password

<p>Das Passwort eingeben, das für den Zugriff auf die Freigaben dieses Hosts verwendet werden soll, sofern diese Authentifizierungsdaten erfordern.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`self.password`

Bedienebene: Einfach.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-ccce3a5a0384">SMB-Version</h2>

**English:** SMB version

<p>Eine bestimmte SMB-Protokollversion auswählen, anstatt eine automatische Aushandlung zuzulassen. &#x27;Legacy (SMB1)&#x27; nur für ältere Server verwenden, die die neueren und sichereren SMB2-/SMB3-Protokolle nicht unterstützen.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`self.smbVersion`

Bedienebene: Einfach.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-d9533be6d359">Zeichensatz</h2>

**English:** Character set

<p>Den Zeichensatz (iocharset) auswählen, der zum Abgleichen bzw. Übersetzen von Dateinamen auf dem Reservereceiver verwendet werden soll.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`self.smbCharset`

Bedienebene: Einfach.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-0a8d81c36752">Optionale Einstellungen</h2>

**English:** Optional arguments

<p>Optionale Mount-Argumente eingeben, die in den obigen Konfigurationseinstellungen nicht vorgesehen sind. Mehrere Argumente sollten durch Kommas getrennt werden. Ungültige oder ungeeignete Einträge können dazu führen, dass der Mount-Vorgang fehlschlägt!</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`self.options`

Bedienebene: Einfach.

</details>

---

Quelle: [openATV setup.xml](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/data/setup.xml) · `fdc9347241`.
