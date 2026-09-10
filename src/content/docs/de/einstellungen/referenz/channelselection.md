---
title: "Senderliste"
description: "Senderliste: Optionen, Originalhilfe und Menüweg in OpenATV."
editUrl: false
pagefind: true
---

Praktische Erklärung: [Bedienung / Oberfläche – Channel Selection Settings](../../../settings/kanalliste/).

Diese Referenz enthält die vorhandenen Hilfetexte aus OpenATV. Je nach geöffnetem Dialog und gewählten Optionen ist nur ein Teil der Einträge sichtbar.

## Wo finde ich das?

**Hauptmenü → Einstellungen → Bedienung / Oberfläche → Senderliste**

Die Suche findet auch die englischen Bezeichnungen und technischen Schlüssel. [Zur Übersicht](../../)

<h2 id="option-5deb62b2cc26">Senderliste / Bildschirm</h2>

**English:** Channel Selection Screen

<p>Die Darstellung der Senderliste anhand der Skinoptionen auswählen.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.channelSelection.screenStyle`

Bedienebene: Einfach.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-6fde9d0ad9ad">Senderliste / Liste</h2>

**English:** Channel Selection List

<p>Die Darstellung für Informationen in der Senderliste anhand der Skinoptionen auswählen.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.channelSelection.widgetStyle`

Bedienebene: Einfach.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-437ed7d3d1f5">Berücksichtigung der CI-Zuweisung</h2>

**English:** Include CI assignment

<p>Bei &#x27;Ja&#x27; Ermittlung verfügbarer Sender inklusive Berücksichtigung der CI-Zuweisung.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.misc.use_ci_assignment`

Bedienebene: Einfach.

</details>

<h2 id="option-7e6928bc72de">Nummerierungsmodus</h2>

**English:** Numbering mode

<p>&#x27;Eindeutige Nummerierung&#x27; auswählen, um allen Sendern in allen Bouquets eine eindeutige Nummer zuzuweisen. Bei &#x27;Favoriten beginnen bei 1&#x27; beginnen die Sendernummern in jedem Bouquet mit der Nummer 1. &#x27;LCN-Nummerierung&#x27; auswählen, um konsistente Sender-LCNs zu verwenden, wo immer dieser Dienst verwendet wird.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.usage.numberMode`

Bedienebene: Fortgeschritten.

</details>

<h2 id="option-4344437b2b1f">Favoritenlisten anzeigen</h2>

**English:** Always show bouquets

<p>Bei &#x27;Ja&#x27; wird bei Aufruf der Senderliste stattdessen die Favoritenliste gezeigt, bei &#x27;Nein&#x27; die aktuelle Senderliste geöffnet.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.usage.show_bouquetalways`

Bedienebene: Fortgeschritten.

</details>

<h2 id="option-c69d18f30284">Favoritenliste beim QuickZap wechseln</h2>

**English:** Change bouquets in quickzap

<p>Mit &#x27;Ja&#x27; wird beim Umschalten des Senders zur nächsten Favoritenliste gewechselt, sobald der letzte Sender der aktuellen Liste erreicht ist.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.usage.quickzap_bouquet_change`

Bedienebene: Fortgeschritten.

</details>

<h2 id="option-62f478f2c6f7">Sendervorschaumodus</h2>

**English:** Channel list preview

<p>Bei &#x27;Ja&#x27; wird in der Senderliste mit OK im Hintergrund auf den markierten Sender umgeschaltet. Ein zweites OK beendet die Senderliste und zeigt diesen Sender, EXIT dagegen beendet die Senderliste und schaltet zum ursprünglichen Sender zurück.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.usage.servicelistpreview_mode`

Bedienebene: Fortgeschritten.

</details>

<h2 id="option-1930f7fc43e8">MiniTV in der Senderliste anzeigen *</h2>

**English:** Channel list show MiniTV\*

<p>Bei &#x27;Ja&#x27; wird MiniTV in der Senderliste angezeigt, wenn der Skin es ermöglicht.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.usage.use_pig`

Bedienebene: Fortgeschritten.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-d011ea6f3958">Servicemodus *</h2>

**English:** Channel list service mode\*

<p>Das Aussehen der verfügbaren Senderlisten einstellen.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.usage.servicelist_mode`

Bedienebene: Fortgeschritten.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-0a4c856981ea">Senderliste bei Moduswechsel</h2>

**English:** Channel list on mode change

<p>Bei &#x27;Ja&#x27; wird die Senderliste angezeigt, wenn zwischen Fernsehen und Radio gewechselt wird.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.usage.show_servicelist`

Bedienebene: Fortgeschritten.

</details>

<h2 id="option-15242b9d5b14">Cursorverhalten</h2>

**English:** Channel list cursor behavior

<p>Die Position des Cursors beim Öffnen der Senderliste festlegen. Auf dem laufenden Sender, oder, bei &#x27;Standard&#x27;, einen Eintrag darüber oder darunter positionieren. Außerdem kann die Belegung der Tasten P+/CH+ und P-/CH- getauscht werden.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.usage.servicelist_cursor_behavior`

Bedienebene: Fortgeschritten.

</details>

<h2 id="option-73b6bc937fd1">Mehrere Favoritenlisten erlauben</h2>

**English:** Enable multiple bouquets

<p>Sender können in Favoriten eingeordnet werden.<br />Bei &#x27;Ja&#x27; kann mehr als eine Favoritenliste verwendet werden.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.usage.multibouquet`

Bedienebene: Fortgeschritten.

</details>

<h2 id="option-b48277df14f1">Nicht eingebundene Favoritenlisten laden</h2>

**English:** Load unlinked user bouquets

<p>Bei &#x27;Ja&#x27; werden alle vorhandenen Favoritenlisten geladen, auch wenn sie nicht in &#x27;bouquets.tv&#x27; oder &#x27;bouquets.radio&#x27; enthalten sind. Dies ermöglicht zum Beispiel die eigenen Favoritenlisten zu erhalten, während die Einstellungen aktualisiert werden.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.misc.load_unlinked_userbouquets`

Bedienebene: Experte.

</details>

<h2 id="option-cb6910aee064">Nummerierte Marker verbergen</h2>

**English:** Hide number markers

<p>Bei &#x27;Ja&#x27; werden nummerierte Marker ausgeblendet.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.usage.hide_number_markers`

Bedienebene: Fortgeschritten.

</details>

<h2 id="option-eb356a6064fb">Paniktaste aktivieren</h2>

**English:** Enable panic button

<p>Bei &#x27;Ja&#x27; wird mit &#x27;0&#x27; zum ersten Sender der ersten Favoritenliste umgeschaltet und der Umschaltverlauf gelöscht.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.usage.panicbutton`

Bedienebene: Fortgeschritten.

</details>

<h2 id="option-f1bd58e3a7f9">Paniksender</h2>

**English:** Panic channel

<p>Die Sendernummer (in der ersten Favoritenliste) einstellen, zu der beim Drücken der Paniktaste umgeschaltet wird.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.usage.panicchannel`

Bedienebene: Fortgeschritten.

</details>

<h2 id="option-10eba6b80b0d">Picons beim QuickZap anzeigen</h2>

**English:** Show picons in quickzap

<p>Bei &#x27;Ja&#x27; werden Picons beim QuickZap angezeigt.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.usage.numzappicon`

Bedienebene: Experte.

</details>

<h2 id="option-be774bc7d46f">Zuerst in Senderliste springen</h2>

**English:** Jump first press in channel selection

<p>Einstellen, was der erste Tastendruck in der Senderliste bewirken soll. Bei &#x27;2&#x27; zum Beispiel wird zu &#x27;2&#x27; gesprungen, wenn Sendernummern sichtbar sind, ansonsten zum ersten Sender der mit &#x27;A&#x27; anfängt.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.usage.show_channel_jump_in_servicelist`

Bedienebene: Fortgeschritten.

</details>

<h2 id="option-90a08fc387e1">Sendernummer anzeigen</h2>

**English:** Show channel numbers in channel selection

<p>Bei &#x27;Ja&#x27; werden Sendernummern in der Senderliste angezeigt.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.usage.show_channel_numbers_in_servicelist`

Bedienebene: Einfach.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-cf4d6751f779">Picons anzeigen</h2>

**English:** Show picons in service list

<p>Bei &#x27;Ja&#x27; werden Picons in der Senderliste angezeigt.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.usage.service_icon_enable`

Bedienebene: Fortgeschritten.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-b877db33e757">Picon-Seitenverhältnis</h2>

**English:** Service picons aspect ratio

<p>Das Seitenverhältnis der Picons einstellen.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.usage.servicelist_picon_ratio`

Bedienebene: Fortgeschritten.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-86e84db52ac2">Picons verkleinern</h2>

**English:** Service picons downsize

<p>Für einen größeren Zeilenabstand die Picongröße reduzieren.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.usage.servicelist_picon_downsize`

Bedienebene: Fortgeschritten.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-006ea1e565fe">Servicetyp-Symbole anzeigen</h2>

**English:** Show service type icons

<p>Die Anzeige der Servicetyp-Symbole einstellen.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.usage.servicetype_icon_mode`

Bedienebene: Fortgeschritten.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-b7c327e88791">Verschlüsselungssymbole anzeigen</h2>

**English:** Show crypto icons

<p>Die Anzeige des Verschlüsselungssymbols in der Senderliste einstellen.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.usage.crypto_icon_mode`

Bedienebene: Fortgeschritten.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-6dee9820252b">Aufnahmeindikator anzeigen</h2>

**English:** Show record indicator

<p>Die Anzeige des Aufnahmeindikators in der Senderliste einstellen.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.usage.record_indicator_mode`

Bedienebene: Fortgeschritten.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-66e81b859f9e">Zwei Zeilen pro Eintrag anzeigen</h2>

**English:** Show two lines per entry

<p>&#x27;Ja&#x27; zeigt den Namen des Senders und die Sendungsbeschreibung untereinander statt nebeneinander an.<br />Nach einer Änderung ist eine Anpassung der Zeilenanzahl erforderlich.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.usage.servicelist_twolines`

Bedienebene: Fortgeschritten.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-0a7ec44d7bd1">Ausrichtung der Sendernummer</h2>

**English:** Alignment channel number

<p>Vertikale Ausrichtung der Sendernummer.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.usage.servicelist_servicenumber_valign`

Bedienebene: Fortgeschritten.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-86f5af272c0e">Ausrichtung Sendungsfortschritt</h2>

**English:** Alignment event-progress

<p>Vertikale Ausrichtung des Sendungsfortschrittes.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.usage.servicelist_eventprogress_valign`

Bedienebene: Fortgeschritten.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-4093d398518f">Sendungsfortschritt in der Senderauswahl anzeigen</h2>

**English:** Show event-progress in channel selection

<p>Die Anzeige der Fortschrittsanzeige in der Senderliste einstellen.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.usage.servicelist_eventprogress_view_mode`

Bedienebene: Fortgeschritten.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-d249c53cdd92">Sendungsfortschritt in der Senderauswahl anzeigen</h2>

**English:** Show event-progress in channel selection

<p>Die Anzeige der Fortschrittsanzeige in der Senderliste einstellen.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.usage.show_event_progress_in_servicelist`

Bedienebene: Einfach.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-ae9367a948e0">Spalten einblenden</h2>

**English:** Show columns

<p>Die Anzeige des Sendernamens in der Senderliste einstellen.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.usage.servicelist_column`

Bedienebene: Fortgeschritten.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-c085a78abced">Anzahl der Zeilen</h2>

**English:** Number of rows

<p>Die Anzahl der angezeigten Zeilen einstellen.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.usage.serviceitems_per_page_twolines`

Bedienebene: Fortgeschritten.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-e3e6a1dd868e">Anzahl der Zeilen</h2>

**English:** Number of rows

<p>Die Anzahl der angezeigten Zeilen einstellen.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.usage.serviceitems_per_page`

Bedienebene: Fortgeschritten.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-2c47a11592fd">Schriftgröße für Sendernummern</h2>

**English:** Service number font size

<p>Die Schriftgröße relativ zu den Skineinstellungen ändern, wobei 1 die Größe um 1 erhöht und -1 die Größe um 1 verringert.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.usage.servicenum_fontsize`

Bedienebene: Fortgeschritten.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-c148208bb167">Schriftgröße für Sendernamen</h2>

**English:** Service name font size

<p>Die Schriftgröße relativ zu den Skineinstellungen ändern, wobei 1 die Größe um 1 erhöht und -1 die Größe um 1 verringert.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.usage.servicename_fontsize`

Bedienebene: Fortgeschritten.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-d054488f1622">Schriftgröße für Sendungsinformationen</h2>

**English:** Service info font size

<p>Die Schriftgröße relativ zu den Skineinstellungen ändern, wobei 1 die Größe um 1 erhöht und -1 die Größe um 1 verringert.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.usage.serviceinfo_fontsize`

Bedienebene: Fortgeschritten.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-c7b440c7318e">Schriftgröße für Fortschrittsinformationen</h2>

**English:** Progress info font size

<p>Die Schriftgröße relativ zu den Skineinstellungen ändern, wobei 1 die Größe um 1 erhöht und -1 die Größe um 1 verringert.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.usage.progressinfo_fontsize`

Bedienebene: Fortgeschritten.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-66de82c57468">Sendernummer anzeigen</h2>

**English:** Show channel numbers in channel selection

<p>Bei &#x27;Ja&#x27; werden Sendernummern in der Senderliste angezeigt.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.channelSelection.showNumber`

Bedienebene: Einfach.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-e62cbf6f6bb2">Picons anzeigen</h2>

**English:** Show picons in service list

<p>Bei &#x27;Ja&#x27; werden Picons in der Senderliste angezeigt.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.channelSelection.showPicon`

Bedienebene: Fortgeschritten.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-f915e9481931">Picon-Seitenverhältnis</h2>

**English:** Service picons aspect ratio

<p>Das Seitenverhältnis der Picons einstellen.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.channelSelection.piconRatio`

Bedienebene: Fortgeschritten.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-8ce4387e4990">Servicetyp-Symbole anzeigen</h2>

**English:** Show service type icons

<p>Auswählen, ob Sendertyp-Symbole angezeigt werden sollen.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.channelSelection.showServiceTypeIcon`

Bedienebene: Fortgeschritten.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-44db08dbc9f7">Verschlüsselungssymbole anzeigen</h2>

**English:** Show crypto icons

<p>Auswählen, ob Verschlüsselungssymbole in der Senderliste angezeigt werden sollen.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.channelSelection.showCryptoIcon`

Bedienebene: Fortgeschritten.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-acebfeb799dc">Aufnahmeindikator anzeigen</h2>

**English:** Show record indicator

<p>Die Anzeige des Aufnahmeindikators in der Senderliste einstellen.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.channelSelection.recordIndicatorMode`

Bedienebene: Fortgeschritten.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-043fd3f3f510">Umschaltmodus</h2>

**English:** Zap mode

<p>Das Verhalten beim Umschalten einstellen, bis der nächste Sender verfügbar ist.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.misc.zapmode`

Bedienebene: Fortgeschritten.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-42cc746670de">Anzahl der Stellen in der Sendernummer</h2>

**English:** Number of digits in service number

<p>Dies legt die maximale Anzahl der Ziffern einer Sendernummer fest, bis zu 6 Stellen.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.usage.numberZapDigits`

Bedienebene: Experte.

</details>

<h2 id="option-739b7b00d295">Bildschirminhalt beim Umschalten</h2>

**English:** Service zap screen contents

<p>Bevorzugte Senderinformationen auswählen, die zusätzlich zur Sendernummer auf dem Popup-Bildschirm für die Senderauswahl angezeigt werden sollen.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.usage.numberZapDisplay`

Bedienebene: Experte.

</details>

<h2 id="option-20d686626ad7">Umschaltverzögerung</h2>

**English:** Service zap delay mode

<p>Einstellen, ob es bei der Eingabe von Ziffern in das Popup-Fenster für die Sendernummer ein Zeitlimit geben soll. Wenn dieses überschritten wird, wird die aktuell eingegebene Zahl als Sendernummer verwendet.<br />Das Zeitlimit beträgt für die erste Ziffer 3 Sekunden und für die anderen Ziffern je 1 Sekunde.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.usage.numberZapTimeouts`

Bedienebene: Experte.

</details>

<h2 id="option-0d1a89e0291d">Umschaltverzögerung der ersten Ziffer</h2>

**English:** Service zap first button delay

<p>Die Umschaltverzögerung der ersten Zifferntaste einstellen.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.usage.numberZapTimeoutFirst`

Bedienebene: Experte.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-0639d2dd3a5b">Umschaltverzögerung weiterer Ziffern</h2>

**English:** Service zap other button delay

<p>Die Umschaltverzögerung der weiteren Zifferntasten einstellen.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.usage.numberZapTimeoutOther`

Bedienebene: Experte.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-4b449e785e56">Aktion der Taste INFO einstellen</h2>

**English:** Set action for 'Info' key

<p>Einstellen, was beim Betätigen der Taste INFO aufgerufen werden soll.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.usage.servicelist_infokey`

Bedienebene: Einfach.

</details>

---

Quelle: [OpenATV setup.xml](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/data/setup.xml) · `fdc9347241`.
