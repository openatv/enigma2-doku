---
title: "Single-Tuner: aufnehmen und gleichzeitig fernsehen"
description: "OpenATV: Single-Tuner: aufnehmen und gleichzeitig fernsehen."
---


**Ein einzelner Tuner empfängt zur gleichen Zeit eine eingestellte Frequenz bzw. einen Transponder/Multiplex.** Darin können mehrere Fernseh- und Radioprogramme gemeinsam übertragen werden. Das ist bei Satellit, Kabel und terrestrischem DVB grundsätzlich ähnlich.

| Situation mit einem Empfangsteil | Was normalerweise möglich ist |
| --- | --- |
| Aufnahme und Live-TV desselben Senders | Ja, der Datenstrom kann gemeinsam verwendet werden |
| Zwei Sender im selben Sat-Transponder | Häufig gleichzeitig möglich |
| Zwei Sender im selben DVB-C-Multiplex | Ebenfalls häufig möglich; nicht auf nur den gerade gewählten Sender beschränkt |
| Zwei Sender im selben DVB-T-Multiplex | Häufig möglich |
| DVB-T2 mit unterschiedlichen PLPs | Zusätzlich von PLP, Frontend und Treiber abhängig; dieselbe RF-Frequenz allein garantiert keine gemeinsame Nutzung |
| Zwei verschiedene Frequenzen / Transponder | Mit nur einem normalen Tuner nicht gleichzeitig |
| DVB-C und DVB-T2 am selben Hybrid-Tuner | Nur abwechselnd, auch mit externem Umschalter |
| Vorhandene Aufnahme von HDD ansehen | Benötigt für die Wiedergabe keinen Empfangstuner; Decoderressourcen bleiben relevant |

**Beispiel ohne veraltende Senderfrequenzen:** Multiplex M enthält Programme A, B und C. Eine Aufnahme von A kann B weiterhin erlauben. Programm D liegt auf Multiplex N und benötigt für parallelen Empfang einen weiteren nutzbaren Tuner. Die Senderzugehörigkeit findest du in den Transponder-/Serviceinformationen.

## Warum ist ein Sender trotzdem grau?

Enigma2 berücksichtigt belegte Tuner, Verkabelung und Empfangsparameter. Zusätzlich können Entschlüsselung/CAM, Demux-/Decodergrenzen, Bild-in-Bild und Treiber den Parallelbetrieb begrenzen. Zwei gleichzeitig speicherbare Datenströme bedeuten nicht automatisch, dass zwei Bilder gleichzeitig decodiert werden können.

Bei SAT mit klassischem Kabel kommen **Polarisation und Band** hinzu: Zwei durchgeschleifte Tuner sind von der gemeinsam angeforderten Ebene abhängig. Ein einzelner Tuner empfängt dadurch trotzdem nicht zwei Transponder. „Gleich wie Tuner A“ kopiert Konfigurationsdaten; es erzeugt weder ein Kabel noch zusätzliche Empfangshardware.

## Praktisch prüfen

Eine kurze Aufnahme auf einem frei empfangbaren Sender starten, Senderliste öffnen und verfügbare Programme beachten. Bei einem zweiten Timer die [Konfliktprüfung](../../timer/aufnahmen/) verwenden. Für unabhängige Empfangswege helfen passende zusätzliche Anschlüsse bzw. korrekt zugeteilte [Unicable-Bänder](../unicable/). Die FBC-Erweiterungen folgen [für SAT](../fbc-sat/) und [für Kabel](../fbc-kabel/).

Grundlage: [DVB zu Transportströmen und Multiplexen](https://dvb.org/solutions/coding-transport/).

Quellstand: [OpenATV dvb.cpp](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/lib/dvb/dvb.cpp).
