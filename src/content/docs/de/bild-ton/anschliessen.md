---
title: "TV, AVR und Soundbar anschließen"
description: "OpenATV: TV, AVR und Soundbar anschließen. Einstellungen, Bedeutung, Anschlussbeispiele und Fehlersuche."
---

Wähle zunächst den tatsächlichen Signalweg. Die Bezeichnungen **HDMI IN**, **HDMI OUT** und **ARC/eARC** am Gerät sind entscheidend. Eine Soundbar mit ausschließlich ARC/eARC-Anschluss hat keinen normalen HDMI-Eingang für die Box.

| Anschlussweg | Wo wird der Ton verarbeitet? | Was einstellen? |
| --- | --- | --- |
| Box → HDMI → TV | Fernseher | Für den Einstieg Stereo/PCM beziehungsweise passenden Downmix. Mehrkanal nur bei nachgewiesener TV-Unterstützung. |
| Box → HDMI IN am AVR/Soundbar → HDMI OUT → TV | AVR/Soundbar | Dort den Box-Eingang wählen. In OpenATV unterstützte Formate durchreichen. Video muss ebenfalls alle Geräte durchlaufen können. |
| Box → TV; TV ARC/eARC → AVR/Soundbar | Ton läuft durch den TV zum Audiosystem | Am TV externes Audiosystem und geeignete digitale Tonausgabe wählen. Beide Rückkanalanschlüsse verbinden; eARC bei Unterstützung aktivieren. |
| Box → HDMI → TV und Box → S/PDIF → Audiosystem | Audiosystem über optisches/koaxiales Kabel | Richtigen Digitaleingang wählen. PCM-Stereo oder unterstütztes AC3/DTS; keine allgemeine TrueHD-/DTS-HD-/Mehrkanal-PCM-Erwartung. |

## Box direkt am AVR oder an der Soundbar

1. Box an einen **HDMI IN** anschließen, den Bildausgang des Audiosystems an den Fernseher.
2. AVR/Soundbar auf diesen Eingang stellen. Für Box-Ton wird hier kein ARC-Rückkanal benötigt.
3. Mit einem bekannten Sender und zunächst einfacher Video-/Audioausgabe Bild und Ton prüfen.
4. Erst dann unterstützte Bitstream-Ausgabe wählen. In der **Eingangssignalanzeige** des AVR prüfen, was ankommt; ein Klangprogrammname wie „Surround“ beweist keine 5.1-Eingangsspur.
5. Bei fehlendem HDR/UHD prüfen, ob Eingang, Ausgang und HDMI-Signalmodus des Audiosystems den gewünschten Videomodus unterstützen. Ein direkter Anschluss an den TV hilft beim Eingrenzen.

## Box am TV, Soundbar über ARC/eARC

ARC/eARC führt **Ton vom TV zurück** zum Audiosystem. Das betrifft TV-Apps ebenso wie geeignete Signale eines HDMI-Quellgeräts. eARC unterstützt auch höhere Audiobandbreiten, etwa Mehrkanal-PCM und verlustfreie HD-Formate. Trotzdem müssen TV-Durchleitung, Audiosystem und Quelle das konkrete Format unterstützen. Ein TV kann bestimmte Eingangsformate blockieren oder in Stereo umwandeln. [HDMI: eARC](https://www.hdmi.org/spec21sub/enhancedaudioreturnchannel).

Am TV heißen relevante Optionen beispielsweise „Digitaler Audioausgang“, „Passthrough“, „Auto“, „PCM“ oder „Externes Audiosystem“. Ihre genaue Bedeutung steht in dessen Handbuch. Für eine erste Funktionsprüfung PCM wählen; für Mehrkanal anschließend den passenden Durchleitungsmodus. ARC ist häufig mit CEC gekoppelt. eARC-Transport und CEC-Lautstärkesteuerung bleiben getrennte Funktionen.

## Zwei Bedeutungen von Passthrough

**Audio-Passthrough in OpenATV** reicht einen unterstützten komprimierten Tonstrom zum Decoder im TV/AVR weiter. **HDMI-Passthrough im AVR-Standby** lässt dagegen einen ausgewählten HDMI-Eingang durch den schlafenden AVR zum TV passieren. Hierzu müssen Standby-Durchleitung und deren Quelleneingang am AVR passen. Die OpenATV-Downmix-Option schaltet diese AVR-Funktion nicht ein. Ein Herstellerbeispiel erklärt die getrennten Einstellungen für HDMI Audio Out, HDMI PassThrough und Pass Source: [HDMI-Konfiguration](https://manuals.denon.com/AVRS760H/NA/EN/GFNFSYkabkahie.php).

Ein AVR kann im Standby andere Fähigkeiten an die Box melden als im Betrieb. Deshalb beim Wechsel zwischen TV-Lautsprechern und AVR erneut prüfen, ob das ausgegebene Tonformat noch passt. Standby-Durchleitung kann außerdem mehr Bereitschaftsstrom benötigen.

## Lautstärke und Sonderfälle

Bei Bitstream-Ausgabe den Pegel am Gerät mit den Lautsprechern regeln, direkt oder per [CEC-Tastenweiterleitung](../hdmi-cec/). S/PDIF überträgt keine CEC-Steuerung. Eine zusätzlich vorhandene HDMI-Verbindung kann trotzdem CEC-Nachrichten führen. DVI-Adapter und HDMI-Splitter können Audio-/EDID-Fähigkeiten einschränken; ihre tatsächliche Ausstattung prüfen.


[Bild und Ton](../) · [Quellen und Prüfumfang](../quellen/)
