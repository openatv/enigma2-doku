---
title: "Wiedergabe"
description: "Wiedergabe: Optionen, Originalhilfe und Menüweg in OpenATV."
editUrl: false
pagefind: true
---

Diese Referenz enthält die vorhandenen Hilfetexte aus OpenATV. Je nach geöffnetem Dialog und gewählten Optionen ist nur ein Teil der Einträge sichtbar.

## Wo finde ich das?

**Hauptmenü → Einstellungen → Aufnahmen / Timeshift → Wiedergabe**

Die Suche findet auch die englischen Bezeichnungen und technischen Schlüssel. [Zur Übersicht](../../)

<h2 id="option-a60ba917efc5">Standardfilmverzeichnis</h2>

**English:** Default movie selection location

<p>Das Standardverzeichnis für Aufnahmen auswählen.<br />OK drücken, um ein neues Verzeichnis hinzuzufügen.<br />Am Steuerkreuz Links/Rechts benutzen, um ein bestehendes Verzeichnis auszuwählen.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.usage.default_path`

Bedienebene: Einfach.

</details>

<h2 id="option-38acdf779b3c">Filmlängen in der Filmauswahl anzeigen</h2>

**English:** Show movie lengths in movie list

<p>Wenn aktiviert, wird die Länge jeder Aufnahme in der Filmauswahl angezeigt (dies kann zu einer etwas längeren Ladezeit führen).</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.usage.load_length_of_movies_in_moviellist`

Bedienebene: Experte.

</details>

<h2 id="option-f1e56ee1c857">Statusanzeige in der Filmauswahl anzeigen</h2>

**English:** Show watch status

<p>Den Typ der Statusanzeige in der Filmauswahl einstellen.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.usage.show_icons_in_movielist`

Bedienebene: Experte.

</details>

<h2 id="option-a74927db0a38">Movieplayer mit EXIT beenden</h2>

**English:** Allow quit movie player with exit

<p>Wenn aktiviert, kann der Movieplayer mit EXIT beendet werden.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.usage.leave_movieplayer_onExit`

Bedienebene: Experte.

</details>

<h2 id="option-356d5209e2bb">Verhalten beim Start eines Films</h2>

**English:** Behavior when a movie is started

<p>Das Verhalten beim Start eines Films einstellen.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.usage.on_movie_start`

Bedienebene: Experte.

</details>

<h2 id="option-7f26348f454d">Verhalten beim Stoppen eines Films</h2>

**English:** Behavior when a movie is stopped

<p>Das Verhalten beim Stoppen eines Films einstellen.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.usage.on_movie_stop`

Bedienebene: Experte.

</details>

<h2 id="option-24ce83af3572">Verhalten bei Filmende</h2>

**English:** Action at end of media

<p>Das Verhalten bei Filmende einstellen.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.usage.on_movie_eof`

Bedienebene: Experte.

</details>

<h2 id="option-ebd4a57009ae">Info anzeigen, bevor der nächste Film abgespielt wird</h2>

**English:** Display message before playing next movie

<p>Bei &#x27;Ja&#x27; wird eine Information angezeigt, sobald ein Film beendet ist und der nächste beginnt.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.usage.next_movie_msg`

Bedienebene: Experte.

</details>

<h2 id="option-80cb10511cfa">ServiceHiSilicon deaktivieren</h2>

**English:** Disable ServiceHiSilicon

<p>&#x27;Ja&#x27;, um das ServiceHiSilicon-Plugin zu deaktivieren und den standardmäßigen internen Mediaplayercode zu verwenden.</p>

**Nach Änderung:** GUI-Neustart erforderlich.

<details>
<summary>Zuordnung & Hinweise</summary>

`config.misc.disableServiceHiSilicon`

Bedienebene: Experte.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-f698e3717cce">Infoleiste beim Spulen anzeigen</h2>

**English:** Show InfoBar on skip forward/backward

<p>Bei &#x27;Ja&#x27; wird die Infoleiste bei schnellem Vor- und Rücklauf bei Medienwiedergabe angezeigt.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.usage.show_infobar_on_skip`

Bedienebene: Fortgeschritten.

</details>

<h2 id="option-dc764c69fa12">PVR-Status in der Movieplayer-Infoleiste anzeigen</h2>

**English:** Show PVR status in MoviePlayer InfoBar

<p>Bei &#x27;Ja&#x27; wird der PVR-Status aus einem separaten Fenster in die Infoleiste des Movieplayers verschoben.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.usage.movieplayer_pvrstate`

Bedienebene: Fortgeschritten.

</details>

<h2 id="option-5b1fbb97b886">Verhalten der Play oder Play/Pausetaste bei Standbild</h2>

**English:** Behavior of 'pause' when paused

<p>Das Verhalten der Play- oder Play-/Pausetaste bei Standbild einstellen.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.seek.on_pause`

Bedienebene: Experte.

</details>

<h2 id="option-24ad09d2a6f8">Infoleiste während Pause dauerhaft anzeigen</h2>

**English:** Show persistent InfoBar while paused

<p>Bei &#x27;Ja&#x27; wird die Infoleiste im pausierten Zustand nicht ausgeblendet, sondern dauerhaft angezeigt.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.usage.show_infobar_locked_on_pause`

Bedienebene: Fortgeschritten.

</details>

<h2 id="option-015fc1433bc4">Aktivierung der Suchleiste</h2>

**English:** SeekBar activation

<p>Die Tasten für die Suchleistenaktivierung einstellen, Pfeil Links/Rechts lang oder &lt;&lt;/&gt;&gt; lang.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.seek.baractivation`

Bedienebene: Experte.

</details>

<h2 id="option-241674cb7158">Pfeiltasten-Sprungmodus</h2>

**English:** Arrow skip mode

<p>Das Verhalten der Tasten &#x27;Hoch&#x27;, &#x27;Runter, &#x27;Links&#x27; und &#x27;Rechts&#x27; für die Sprungaktionen auswählen.</p>

**Nach Änderung:** GUI-Neustart erforderlich.

<details>
<summary>Zuordnung & Hinweise</summary>

`config.seek.arrowSkipMode`

Bedienebene: Experte.

</details>

<h2 id="option-791a7147bdf6">Skip sensibility for &#x27;%s&#x27; button</h2>

<p>Set the skip percentage for the &#x27;%s&#x27; button. Positive numbers skip forward, negative numbers skip backward.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.seek.sensibilities["UP"]`

Bedienebene: Experte.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-7e1789157d61">Skip sensibility for &#x27;%s&#x27; button</h2>

<p>Set the skip percentage for the &#x27;%s&#x27; button. Positive numbers skip forward, negative numbers skip backward.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.seek.sensibilities["LEFT"]`

Bedienebene: Experte.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-a76995356abd">Skip sensibility for &#x27;%s&#x27; button</h2>

<p>Set the skip percentage for the &#x27;%s&#x27; button. Positive numbers skip forward, negative numbers skip backward.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.seek.sensibilities["RIGHT"]`

Bedienebene: Experte.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-adcb7fd02a47">Skip sensibility for &#x27;%s&#x27; button</h2>

<p>Set the skip percentage for the &#x27;%s&#x27; button. Positive numbers skip forward, negative numbers skip backward.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.seek.sensibilities["DOWN"]`

Bedienebene: Experte.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-35af5ab9932f">Sprungzeit für die Taste &#x27;%s&#x27;</h2>

**English:** Skip time for '%s' button

<p>Set the skip time interval for the &#x27;%s&#x27; button. Positive numbers skip forward, negative numbers skip backward.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.seek.defined["UP"]`

Bedienebene: Experte.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-50e73ab4ac5e">Sprungzeit für die Taste &#x27;%s&#x27;</h2>

**English:** Skip time for '%s' button

<p>Set the skip time interval for the &#x27;%s&#x27; button. Positive numbers skip forward, negative numbers skip backward.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.seek.defined["LEFT"]`

Bedienebene: Experte.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-b951b7c7a9d4">Sprungzeit für die Taste &#x27;%s&#x27;</h2>

**English:** Skip time for '%s' button

<p>Set the skip time interval for the &#x27;%s&#x27; button. Positive numbers skip forward, negative numbers skip backward.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.seek.defined["RIGHT"]`

Bedienebene: Experte.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-bb485cc0efda">Sprungzeit für die Taste &#x27;%s&#x27;</h2>

**English:** Skip time for '%s' button

<p>Set the skip time interval for the &#x27;%s&#x27; button. Positive numbers skip forward, negative numbers skip backward.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.seek.defined["DOWN"]`

Bedienebene: Experte.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-5b7751c7afe1">Numerischer Sprungmodus</h2>

**English:** Numeric skip mode

<p>Das Verhalten der Nummerntasten für die Sprungaktionen auswählen.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.seek.numberSkipMode`

Bedienebene: Experte.

</details>

<h2 id="option-fbb11f9949fe">Sprungzeit für die Tasten &#x27;%s&#x27;/&#x27;%s&#x27;</h2>

**English:** Skip time for '%s'/'%s' buttons

<p>Die Sprungzeit für die Tasten &#x27;%s&#x27;/&#x27;%s&#x27; festlegen.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.seek.defined[13]`

Bedienebene: Experte.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-e4936aa74be5">Sprungzeit für die Tasten &#x27;%s&#x27;/&#x27;%s&#x27;</h2>

**English:** Skip time for '%s'/'%s' buttons

<p>Die Sprungzeit für die Tasten &#x27;%s&#x27;/&#x27;%s&#x27; festlegen.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.seek.defined[46]`

Bedienebene: Experte.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-aef7efcb1761">Sprungzeit für die Tasten &#x27;%s&#x27;/&#x27;%s&#x27;</h2>

**English:** Skip time for '%s'/'%s' buttons

<p>Die Sprungzeit für die Tasten &#x27;%s&#x27;/&#x27;%s&#x27; festlegen.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.seek.defined[79]`

Bedienebene: Experte.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-552114824609">Sprungzeit für die Taste &#x27;%s&#x27;</h2>

**English:** Skip time for '%s' button

<p>Set the skip time interval for the &#x27;%s&#x27; button. Positive numbers skip forward, negative numbers skip backward.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.seek.defined[1]`

Bedienebene: Experte.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-bc4d7161fa16">Sprungzeit für die Taste &#x27;%s&#x27;</h2>

**English:** Skip time for '%s' button

<p>Set the skip time interval for the &#x27;%s&#x27; button. Positive numbers skip forward, negative numbers skip backward.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.seek.defined[2]`

Bedienebene: Experte.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-5307aef69440">Sprungzeit für die Taste &#x27;%s&#x27;</h2>

**English:** Skip time for '%s' button

<p>Set the skip time interval for the &#x27;%s&#x27; button. Positive numbers skip forward, negative numbers skip backward.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.seek.defined[3]`

Bedienebene: Experte.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-7283e77ce669">Sprungzeit für die Taste &#x27;%s&#x27;</h2>

**English:** Skip time for '%s' button

<p>Set the skip time interval for the &#x27;%s&#x27; button. Positive numbers skip forward, negative numbers skip backward.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.seek.defined[4]`

Bedienebene: Experte.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-a4b38bed1a68">Sprungzeit für die Taste &#x27;%s&#x27;</h2>

**English:** Skip time for '%s' button

<p>Set the skip time interval for the &#x27;%s&#x27; button. Positive numbers skip forward, negative numbers skip backward.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.seek.defined[5]`

Bedienebene: Experte.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-e498dffefb9b">Sprungzeit für die Taste &#x27;%s&#x27;</h2>

**English:** Skip time for '%s' button

<p>Set the skip time interval for the &#x27;%s&#x27; button. Positive numbers skip forward, negative numbers skip backward.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.seek.defined[6]`

Bedienebene: Experte.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-6d0b90c6428e">Sprungzeit für die Taste &#x27;%s&#x27;</h2>

**English:** Skip time for '%s' button

<p>Set the skip time interval for the &#x27;%s&#x27; button. Positive numbers skip forward, negative numbers skip backward.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.seek.defined[7]`

Bedienebene: Experte.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-b2e957c54f05">Sprungzeit für die Taste &#x27;%s&#x27;</h2>

**English:** Skip time for '%s' button

<p>Set the skip time interval for the &#x27;%s&#x27; button. Positive numbers skip forward, negative numbers skip backward.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.seek.defined[8]`

Bedienebene: Experte.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-37b14621c1ab">Sprungzeit für die Taste &#x27;%s&#x27;</h2>

**English:** Skip time for '%s' button

<p>Set the skip time interval for the &#x27;%s&#x27; button. Positive numbers skip forward, negative numbers skip backward.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.seek.defined[9]`

Bedienebene: Experte.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-332f568ba2f5">Sprungzeit für die Taste &#x27;%s&#x27;</h2>

**English:** Skip time for '%s' button

<p>Set the skip time interval for the &#x27;%s&#x27; button. Positive numbers skip forward, negative numbers skip backward.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.seek.defined[0]`

Bedienebene: Experte.

Wird abhängig von anderen Optionen oder dem Dialog eingeblendet.

</details>

<h2 id="option-b0a617331d26">CutList-Sprungzeit für die Taste &#x27;%s&#x27;</h2>

**English:** CutList skip time for '%s' button

<p>Die Sprungzeit für die Taste &#x27;%s&#x27; festlegen.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.seek.defined["CUT_UP"]`

Bedienebene: Experte.

</details>

<h2 id="option-ea3dc63fbe9f">CutList-Sprungzeit für die Taste &#x27;%s&#x27;</h2>

**English:** CutList skip time for '%s' button

<p>Die Sprungzeit für die Taste &#x27;%s&#x27; festlegen.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.seek.defined["CUT_LEFT"]`

Bedienebene: Experte.

</details>

<h2 id="option-85b849bcf51c">CutList-Sprungzeit für die Taste &#x27;%s&#x27;</h2>

**English:** CutList skip time for '%s' button

<p>Die Sprungzeit für die Taste &#x27;%s&#x27; festlegen.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.seek.defined["CUT_RIGHT"]`

Bedienebene: Experte.

</details>

<h2 id="option-28748161d9f1">CutList-Sprungzeit für die Taste &#x27;%s&#x27;</h2>

**English:** CutList skip time for '%s' button

<p>Die Sprungzeit für die Taste &#x27;%s&#x27; festlegen.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.seek.defined["CUT_DOWN"]`

Bedienebene: Experte.

</details>

<h2 id="option-99d8b4604752">CutList-Sprungzeit für die Tasten &#x27;%s&#x27;/&#x27;%s&#x27;</h2>

**English:** CutList skip time for '%s'/'%s' buttons

<p>CutList-Editor-Sprungzeit für die Tasten &#x27;%s&#x27;/&#x27;%s&#x27; festlegen.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.seek.defined["CUT_13"]`

Bedienebene: Experte.

</details>

<h2 id="option-07aebae93084">CutList-Sprungzeit für die Tasten &#x27;%s&#x27;/&#x27;%s&#x27;</h2>

**English:** CutList skip time for '%s'/'%s' buttons

<p>CutList-Editor-Sprungzeit für die Tasten &#x27;%s&#x27;/&#x27;%s&#x27; festlegen.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.seek.defined["CUT_46"]`

Bedienebene: Experte.

</details>

<h2 id="option-3cf2f60b71ea">CutList-Sprungzeit für die Tasten &#x27;%s&#x27;/&#x27;%s&#x27;</h2>

**English:** CutList skip time for '%s'/'%s' buttons

<p>CutList-Editor-Sprungzeit für die Tasten &#x27;%s&#x27;/&#x27;%s&#x27; festlegen.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.seek.defined["CUT_79"]`

Bedienebene: Experte.

</details>

<h2 id="option-d6b3a1bc8d92">Sprungweite der Suchleiste</h2>

**English:** SeekBar sensibility

<p>Die Sprungweite für die Suchleiste einstellen.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.seek.sensibility`

Bedienebene: Experte.

</details>

<h2 id="option-e6ee39fcfa1e">Benutzerdefinierte Sprungzeit für die Tasten &#x27;1&#x27; und &#x27;3&#x27;</h2>

**English:** Custom skip time for '1'/'3' buttons

<p>Das Zeitintervall (in Sekunden) für das Springen mit den Tasten &#x27;1&#x27; und &#x27;3&#x27; einstellen.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.seek.selfdefined_13`

Bedienebene: Experte.

</details>

<h2 id="option-096b963480ea">Benutzerdefinierte Sprungzeit für die Tasten &#x27;4&#x27; und &#x27;6&#x27;</h2>

**English:** Custom skip time for '4'/'6' buttons

<p>Das Zeitintervall (in Sekunden) für das Springen mit den Tasten &#x27;4&#x27; und &#x27;6&#x27; einstellen.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.seek.selfdefined_46`

Bedienebene: Experte.

</details>

<h2 id="option-44615c978405">Benutzerdefinierte Sprungzeit für die Tasten &#x27;7&#x27; und &#x27;9&#x27;</h2>

**English:** Custom skip time for '7'/'9' buttons

<p>Das Zeitintervall (in Sekunden) für das Springen mit den Tasten &#x27;7&#x27; und &#x27;9&#x27; einstellen.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.seek.selfdefined_79`

Bedienebene: Experte.

</details>

<h2 id="option-15b0f69c7747">Vorlaufgeschwindigkeiten</h2>

**English:** Fast forward speeds

<p>Die Vorlaufgeschwindigkeiten einstellen.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.seek.speeds_forward`

Bedienebene: Experte.

</details>

<h2 id="option-e48fa45e52eb">Rücklaufgeschwindigkeiten</h2>

**English:** Rewind speeds

<p>Die Rücklaufgeschwindigkeiten einstellen.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.seek.speeds_backward`

Bedienebene: Experte.

</details>

<h2 id="option-15787fc6caee">Zeitlupengeschwindigkeit</h2>

**English:** Slow motion speeds

<p>Die Zeitlupengeschwindigkeiten einstellen.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.seek.speeds_slowmotion`

Bedienebene: Experte.

</details>

<h2 id="option-d4c0c81338d0">Anfängliche Vorlaufgeschwindigkeit</h2>

**English:** Initial fast forward speed

<p>Den Anfangswert der Vorlaufgeschwindigkeit einstellen. Mit diesem Wert wird begonnen, wenn die Taste für den schnellen Vorlauf gedrückt wird.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.seek.enter_forward`

Bedienebene: Experte.

</details>

<h2 id="option-8e1594b52973">Anfängliche Rücklaufgeschwindigkeit</h2>

**English:** Initial rewind speed

<p>Den Anfangswert der Rücklaufgeschwindigkeit einstellen. Mit diesem Wert wird begonnen, wenn die Taste für den schnellen Rücklauf gedrückt wird.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.seek.enter_backward`

Bedienebene: Experte.

</details>

<h2 id="option-5558223fc918">Zeitsprünge für schnellen Vorlauf/Rücklauf (&#x27;&gt;&gt;&#x27;/&#x27;&lt;&lt;&#x27;) benutzen</h2>

**English:** Use time jumps for fast forward/backward

<p>Bei &#x27;Ja&#x27; werden beim schnellen Vorlauf/Rücklauf Zeitsprünge von x Sekunden verwendet.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.seek.withjumps`

Bedienebene: Experte.

</details>

<h2 id="option-550e9b4a0ab9">Zeitsprünge: Normalen Vorlauf benutzen für</h2>

**English:** Time jump: Use normal fast forward for speeds

<p>Legt fest, welche Schnellvorlaufgeschwindigkeiten normales Spulen verwendet. Alle anderen Vorlauf- und Rücklaufgeschwindigkeiten verwenden Zeitsprünge.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.seek.withjumps_after_ff_speed`

Bedienebene: Experte.

</details>

<h2 id="option-1d5cdce73b5c">Zeitsprung Multiplikator für schnellen Vorlauf</h2>

**English:** Time jump multiplier for fast forward

<p>Legt die Sprungweite für Vorwärtssprünge fest. Der Wert wird mit der Vorlaufgeschwindigkeit (z. B. 4×) multipliziert. Werte deutlich unter 4 Sekunden funktionieren möglicherweise nicht mit allen Mediendateien.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.seek.withjumps_forwards_ms`

Bedienebene: Experte.

</details>

<h2 id="option-85fcc5ba237e">Zeitsprung Multiplikator für schnellen Rücklauf</h2>

**English:** Time jump multiplier for fast backward

<p>Legt die Sprungweite für Rückwärtssprünge fest. Der Wert wird mit der Rücklaufgeschwindigkeit (z. B. -4×) multipliziert. Werte deutlich unter 2 Sekunden funktionieren möglicherweise nicht mit allen Mediendateien.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.seek.withjumps_backwards_ms`

Bedienebene: Experte.

</details>

<h2 id="option-0cb78dccd447">Zeitsprünge: Wdh.-Intervall für schnellen Vor-/Rücklauf</h2>

**English:** Time jump repeat interval for fast forward/backward

<p>Legt fest, in wie schneller Folge Zeitsprünge erfolgen. Werte unter 500ms können mit NAS problematisch sein.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.seek.withjumps_repeat_ms`

Bedienebene: Experte.

</details>

<h2 id="option-ae01f310f3ba">Zeitsprünge: Hängenbleiben vermeiden</h2>

**English:** Time jump avoid zero step size

<p>Bei &#x27;Ja&#x27; wird ein Hängenbleiben beim Spulen verhindert, wenn die Sprungweite kleiner ist als die Zeit zwischen den I-Frames (ein gewisses Ruckeln ist dabei unvermeidbar).</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.seek.withjumps_avoid_zero`

Bedienebene: Experte.

</details>

<h2 id="option-f8988de729a6">Papierkorb in der Filmauswahl verwenden</h2>

**English:** Use 'Trash' in movie list

<p>Bei &#x27;Ja&#x27; werden gelöschte Aufnahmen in den Papierkorb verschoben, bei &#x27;Nein&#x27; sofort und unwiderruflich gelöscht.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.usage.movielist_trashcan`

Bedienebene: Fortgeschritten.

</details>

<h2 id="option-b24bafcc57c0">Papierkorb nach x Tagen leeren</h2>

**English:** Purge 'Trash' after

<p>Legt fest, wie viele Tage der Inhalt vom Papierkorb erhalten bleiben soll, bevor er automatisch gelöscht wird.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.usage.movielist_trashcan_days`

Bedienebene: Fortgeschritten.

</details>

<h2 id="option-a587830f42ad">Netzwerk-Papierkörbe leeren</h2>

**English:** Clean network 'Trash'

<p>Bei &#x27;Ja&#x27; werden auch die Netzwerk-Papierkörbe geleert.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.usage.movielist_trashcan_network_clean`

Bedienebene: Fortgeschritten.

</details>

<h2 id="option-f577ec021bd6">Für Aufnahmen reservierter Speicher (in GB)</h2>

**English:** Space to reserve for recordings (GB)

<p>Den erforderlichen Speicherplatz einstellen, der für Aufnahmen verfügbar sein soll. Wird der Wert erreicht, werden Inhalte aus dem Papierkorb gelöscht.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.usage.movielist_trashcan_reserve`

Bedienebene: Fortgeschritten.

</details>

<h2 id="option-0312a2ce14a7">Option zum Löschen im Hintergrund</h2>

**English:** Background delete option

<p>Die Geräte einstellen, auf denen die Hintergrund-Löschoption verwendet werden darf.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.misc.erase_flags`

Bedienebene: Experte.

</details>

<h2 id="option-be430200d837">Geschwindigkeit beim Löschen im Hintergrund</h2>

**English:** Background delete speed

<p>Die Geschwindigkeit des Hintergrundlöschvorgangs einstellen. Eine niedrigere Geschwindigkeit beansprucht weniger Festplattenleistung.</p>

<details>
<summary>Zuordnung & Hinweise</summary>

`config.misc.erase_speed`

Bedienebene: Experte.

</details>

---

Quelle: [OpenATV setup.xml](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/data/setup.xml) · `fdc9347241`.
