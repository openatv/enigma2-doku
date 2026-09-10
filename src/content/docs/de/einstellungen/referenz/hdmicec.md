---
title: "HDMI-CEC-Einstellungen"
description: "HDMI-CEC-Einstellungen: Optionen, Originalhilfe und Menüweg in OpenATV."
editUrl: false
pagefind: true
---

Diese Referenz enthält die vorhandenen Hilfetexte aus OpenATV. Je nach geöffnetem Dialog und gewählten Optionen ist nur ein Teil der Einträge sichtbar.

## Wo finde ich das?

**Hauptmenü → Einstellungen → System → HDMI-CEC-Einstellungen**

Die Suche findet auch die englischen Bezeichnungen und technischen Schlüssel. [Zur Übersicht](../../)

<h2 id="option-ca248b58c35e">Aktiviert</h2>

**English:** Enabled

<p>Verwendung von HDMI-CEC ein-/ausschalten.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.hdmicec.enabled`

Bedienebene: Einfach.

</details>

<h2 id="option-ac5ce291c877">Erweiterte Einstellungen</h2>

**English:** Advanced Settings

<p>Erweiterte HDMI-CEC-Einstellungen aktivieren.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.hdmicec.advanced_settings`

Bedienebene: Einfach.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-4597c686df91">Deep-Standby wie Standby behandeln</h2>

**English:** Regard Deep Standby as Standby

<p>Bei &#x27;Ja&#x27; werden bei Deep-Standby-Ereignissen dieselben Befehle an den Fernseher gesendet wie bei normalen Standby-Ereignissen.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.hdmicec.handle_deepstandby_events`

Bedienebene: Einfach.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-ea7a71e7b87e">Beim Systemstart auf die Zeitsynchronisierung warten</h2>

**English:** Wait for timesync at startup

<p>Wenn der Deep-Standby-Workaround aktiviert ist, wird gewartet, bis die Systemzeit synchronisiert wurde. Je nach Erfordernis wird das Aufwecken der Geräte in maximal 2 Minuten fortgesetzt.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.hdmicec.deepstandby_waitfortimesync`

Bedienebene: Einfach.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-c1842cf70ee8">TV in Standby versetzen</h2>

**English:** Put TV in Standby

<p>Den Fernseher automatisch zusammen mit dem Receiver in Standby versetzen oder herunterfahren.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.hdmicec.control_tv_standby`

Bedienebene: Einfach.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-af62565bb2e8">Auch wenn der TV einen anderen Eingang aktiviert hat?</h2>

**English:** Even if TV has another input active?

<p>Diese Funktion kann übersprungen und der TV ausgeschaltet werden, wenn der Receiver aus Standby aufgeweckt und sofort wieder darin versetzt wird.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.hdmicec.tv_standby_notinputactive`

Bedienebene: Einfach.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-4b7cf3094e0a">TV aus Standby aufwecken</h2>

**English:** Wake up TV from Standby

<p>Wenn der Receiver aus Standby oder Deep-Standby aufwacht, wird auch dem Fernseher ein Signal geschickt, um ihn einzuschalten.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.hdmicec.control_tv_wakeup`

Bedienebene: Einfach.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-02452dd956f7">Auch wenn ein &#x27;Umschalten&#x27;-Aufnahmetimer startet?</h2>

**English:** Even if a 'Zap' recording timer starting?

<p>&#x27;Ja&#x27;, wenn der TV beim Start eines &#x27;Umschalten&#x27;-Aufnahmetimers aufgeweckt werden soll.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.hdmicec.tv_wakeup_zaptimer`

Bedienebene: Einfach.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-077d99f061f8">Auch wenn ein &#x27;Umschalten und Aufnehmen&#x27;-Aufnahmetimer startet?</h2>

**English:** Even if a 'Zap and Record' recording timer starting?

<p>&#x27;Ja&#x27;, wenn der TV beim Start eines &#x27;Umschalten und Aufnehmen&#x27;-Aufnahmetimers aufgeweckt werden soll.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.hdmicec.tv_wakeup_zapandrecordtimer`

Bedienebene: Einfach.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-3eb7c90a4a4b">Auch wenn eine &#x27;Aufwecken&#x27;-Zeitplaneraufgabe startet?</h2>

**English:** Even if a 'Wakeup' scheduled task starting?

<p>&#x27;Ja&#x27;, wenn der TV beim Start einer Zeitplaneraufgabe aufgeweckt werden soll.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.hdmicec.tv_wakeup_wakeuppowertimer`

Bedienebene: Einfach.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-4740be7fb5aa">TV auf korrekten Eingang umschalten</h2>

**English:** Switch TV to correct input

<p>Wenn der Receiver aus Standby aufwacht, werden Befehle für aktive Quelle, Streampfad und Routing gesendet, damit der Fernseher auf den an den Receiver angeschlossenen HDMI-Eingang umschaltet.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.hdmicec.report_active_source`

Bedienebene: Einfach.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-a6c6b1df116e">TV ausschalten, um den Eingang zu korrigieren</h2>

**English:** Switch off the TV to correct input

<p>Einige TV-Geräte wechseln nicht den Eingang wenn ein anderer HDMI-Port aktiv ist. Diese Einstellung schaltet den TV zuvor in Standby. Wenn sich der TV nicht wieder einschaltet, ist möglicherweise ein langsameres Sendeintervall oder die Wiederholung von Aufwachbefehlen erforderlich.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.hdmicec.workaround_activesource`

Bedienebene: Einfach.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-5a60f329ae84">TV-Wakeup verwalten</h2>

**English:** Handle wake up from TV

<p>Wenn aktiviert, wird der Receiver automatisch aus Standby aufwachen, wenn der Fernseher eingeschaltet wird.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.hdmicec.handle_tv_wakeup`

Bedienebene: Einfach.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-10c499524845">TV-Standby verwalten</h2>

**English:** Handle Standby from TV

<p>Wenn aktiviert, wird der Receiver automatisch in Standby versetzt, wenn der Fernseher ausgeschaltet wird.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.hdmicec.handle_tv_standby`

Bedienebene: Einfach.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-5e7048273ce8">TV-Eingänge verwalten</h2>

**English:** Process action from TV

<p>Die Aktion auswählen, wenn der Fernseher vom Receivereingang wegschaltet.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.hdmicec.handle_tv_input`

Bedienebene: Einfach.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-53d4b0e49e44">Zeitverzögerung bis zum Standby oder Deep-Standby</h2>

**English:** Time delay until Standby or Deep Standby

<p>&#x27;TV-Standby verwalten&#x27; besitzt eine höhere Priorität als &#x27;TV-Eingänge verwalten&#x27;.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.hdmicec.handle_tv_delaytime`

Bedienebene: Einfach.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-00b4f07602f1">TV-Fernbedienung benutzen</h2>

**English:** Use TV remote control

<p>Den Receiver mit der Fernbedienung des Fernsehers steuern.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.hdmicec.report_active_menu`

Bedienebene: Einfach.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-a31888d3bcbb">Weiterleiten der Lautstärketasten</h2>

**English:** Forward volume keys

<p>Mit den Lautstärketasten auf der Receiver-Fernbedienung lässt sich die Lautstärke des Fernsehers, des AV-Receivers oder der Soundbar über HDMI-CEC regeln. Wird diese Funktion nicht unterstützt, haben die Lautstärketasten keine Funktion!</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.hdmicec.volume_forwarding`

Bedienebene: Einfach.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-cf2ee9da2d46">AV-Receiver oder Soundbar in Standby versetzen</h2>

**English:** Put your AV Receiver or Soundbar in Standby

<p>Wenn aktiviert, wird der angeschlossene AV-Receiver oder die Soundbar automatisch ausgeschaltet.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.hdmicec.control_receiver_standby`

Bedienebene: Einfach.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-02c9ff846070">AV-Receiver oder Soundbar aus Standby aufwecken</h2>

**English:** Wake up your AV Receiver or Soundbar from Standby

<p>Wenn aktiviert, wird der angeschlossene AV-Receiver oder die Soundbar automatisch eingeschaltet.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.hdmicec.control_receiver_wakeup`

Bedienebene: Einfach.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-cc770306883a">Minimaler Sendeintervall</h2>

**English:** Minimum send interval

<p>Verzögerung zwischen CEC-Befehlen, wenn mehrere Befehle hintereinander gesendet werden. Deaktiviert lassen, es sei denn, ein Gerät erfordert eine langsamere Übertragung.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.hdmicec.minimum_send_interval`

Bedienebene: Einfach.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-ddf3a778a9f7">Gesendete Aufwach- und Standbybefehle wiederholen</h2>

**English:** Repeat the sent standby and wake up commands

<p>Versuchen, Befehle wiederholt zu senden, falls nicht alle Befehle ausgeführt wurden (z. B. TV aufwecken, aber es wird nicht auf den korrekten Eingang geschaltet).</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.hdmicec.messages_repeat`

Bedienebene: Einfach.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-6965a1af00bb">Zeitverzögerung für die wiederholte Übertragung</h2>

**English:** Time delay for the repeated transmission

<p>Die Zeit wird mit dem aktuellen Wiederholungszähler multipliziert.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.hdmicec.messages_repeat_slowdown`

Bedienebene: Einfach.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-83f367f87db7">Auch die Standbybefehle wiederholen</h2>

**English:** Repeat the standby commands

<p>Das Aufwachkommando vom Standby wird wiederholend gesendet.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.hdmicec.messages_repeat_standby`

Bedienebene: Einfach.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-ff921b98d335">Betriebszustand vom TV überprüfen</h2>

**English:** Check power and input state from TV

<p>Es wird versucht, den aktuellen TV-Status zu erfassen. Sollten Statusmeldungen falsch sein oder fehlen, kann der Receiver unerwartet reagieren. Andererseits wird versucht, auf verschiedene Betriebszustände besser zu reagieren.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.hdmicec.check_tv_state`

Bedienebene: Einfach.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-7e6a4020d24a">Unerwartetes Aufwachen ignorieren und im Standby bleiben</h2>

**English:** Ignore unexpectedly wake up and stay in Standby

<p>Dies ist ein Workaround für einige Geräte, die nach dem Umschalten in Standby wieder geweckt werden. Damit wird das Aufwecken durch andere Geräte für einige Sekunden ignoriert.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.hdmicec.workaround_turnbackon`

Bedienebene: Einfach.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-3e1163c976a5">HDMI-Preemphasis verwenden</h2>

**English:** Use HDMI-preemphasis

<p>Diese Einstellung kann dabei helfen, die Signalqualität zu verbessern oder Probleme zu beseitigen, die bei längeren HDMI-Kabeln auftreten können.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.hdmicec.preemphasis`

Bedienebene: Einfach.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-4a8314ff396c">Befehlszeilenfunktion aktivieren</h2>

**English:** Enable command line function

<p>Die Möglichkeit aktivieren, individuelle oder festgelegte interne HDMI-CEC-Befehle von der Befehlszeile zu senden.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.hdmicec.commandline`

Bedienebene: Einfach.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-fed22dd87a69">Debug-Log aktivieren</h2>

**English:** Enable debug log

<p>Bei &#x27;Ja&#x27; wird ein Log des CEC-Protokolls erstellt. Die Logdateien befinden sich zusammen mit den anderen Logs, haben jedoch den Namen &#x27;Enigma2-hdmicec-[Datum].log&#x27;.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.hdmicec.debug`

Bedienebene: Einfach.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

---

Quelle: [OpenATV setup.xml](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/data/setup.xml) · `fdc9347241`.
