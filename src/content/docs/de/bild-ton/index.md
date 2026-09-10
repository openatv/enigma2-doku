---
title: "Bild und Ton einrichten"
description: "OpenATV: Bild und Ton einrichten. Einstellungen, Bedeutung, Anschlussbeispiele und Fehlersuche."
---

**Hier richtest du den Weg von der OpenATV-Box bis zu Bildschirm und Lautsprechern ein.** Die Kapitel gelten unabhängig vom Modell. Einträge erscheinen abhängig von Anschlüssen, Treiber, installierten Erweiterungen und gewählter Bedienebene. Eine fehlende Option lässt sich nicht allein durch die Expertenansicht nachrüsten.

## In welcher Reihenfolge anfangen?

1. [Anschlussweg bestimmen](./anschliessen/): Fernseher direkt, AVR, Soundbar oder optischer Ausgang.
2. [Stabile Videoausgabe einstellen](./video/), danach bei Bedarf [automatische Auflösung](./autoresolution/).
3. [PCM, Downmix und Passthrough verstehen](./audio-grundlagen/) und [Audiooptionen einstellen](./audio-optionen/).
4. [Tonspuren und Sprache](./tonspuren/), [Lautstärke](./lautstaerke/) und [Lippensynchronität](./lipsync/) prüfen.
5. Erst anschließend [HDMI-CEC](./hdmi-cec/) für Einschalten, Eingangswahl und Fernbedienung einrichten.

## Wo finde ich was?

| Aufgabe | Menü / Kapitel |
| --- | --- |
| Auflösung, Bildrate, Seitenverhältnis | Einstellungen → Bild → [Bildeinstellungen](./video/) |
| HDR, HDMI-Farbraum und Farbtiefe | [HDMI und HDR](./hdmi-hdr/), vollständige [Video-Optionsreferenz](./video-optionen/) |
| Abgeschnittene Menüs, Schärfe, Kontrast | Einstellungen → Bild → [OSD-Kalibrierung / Bildverbesserung](./bildanpassung/) |
| Downmix, Audioausgabe, Verzögerung | Einstellungen → Ton → [Toneinstellungen](./audio-optionen/) |
| Tonspur je Sender, Audiodeskription | [AUDIO-Taste und automatische Sprachwahl](./tonspuren/) |
| Pegel je Sender | Einstellungen → Ton → [Lautstärkeanpassung](./lautstaerke/) |
| Fernseher/AVR gemeinsam steuern | Einstellungen → System → [HDMI-CEC-Einstellungen](./hdmi-cec/) |
| Einzelne CEC-Option nachschlagen | [Alle 29 CEC-Einstellungen und Adresswahl](./cec-optionen/) |
| Einschaltprobleme und CEC-Verkehr | [CEC-Logs](./cec-logs/) |
| Schwarzes Bild, kein Ton, Aussetzer | [Systematische Fehlersuche](./probleme/) |

„AVR“ bezeichnet hier den Audio-/Video-Verstärker im Heimkino. Die OpenATV-Box ist das Quellgerät. **HDMI-Audio, ARC/eARC und CEC erfüllen unterschiedliche Aufgaben:** Tontransport, Tonrückkanal und Steuerbefehle. Ein funktionierender Einschaltbefehl beweist daher noch keine funktionierende Mehrkanalausgabe.

Native Beispielbilder zeigen erreichbare Menüs. Sie belegen keinen Test sämtlicher Audioformate, HDR-Modi oder angeschlossener TV-/AVR-Kombinationen. [Quellen und Prüfumfang](./quellen/).
