---
title: "HF-Ausgang: analoger Modulator"
---

**Menü → Einstellungen → System → HF-Ausgangseinstellungen** erscheint nur bei Geräten mit einem von Enigma2 erkannten **HF-Modulator**. Er moduliert das ausgegebene Bild und den Ton auf einen analogen Fernsehkanal, etwa für einen älteren Fernseher mit Antenneneingang.

Ein gewöhnlicher **ANT OUT / LOOP OUT** ist häufig lediglich ein Durchschleifausgang für das empfangene Antennensignal. Er erzeugt dadurch noch keinen analogen Kanal mit dem gerade auf der Box angezeigten Bild. HDMI, DVB-C-Sendersuche und die Antennenspannung eines DVB-T-Tuners sind andere Funktionen.

| Option | Zweck |
| --- | --- |
| Modulator | HF-Modulation ein- oder ausschalten. |
| Testmodus | Hardware-Testsignal aktivieren, um den analogen TV-Kanal leichter abzugleichen. |
| Ton | Audioausgabe des Modulators ein- oder ausschalten. |
| Tonträger | Zum Fernseher beziehungsweise dessen analogem TV-Standard passend auswählen: im Quellstand 4,5 / 5,5 / 6,0 / 6,5 MHz. |
| Kanal | Analogen UHF-Ausgabekanal wählen; der Quellkatalog bietet 21 bis 69, Vorgabe 36. Keine Kanalnummer der digitalen Senderliste. |
| Feinabstimmung | Kleine Frequenzkorrektur für den analogen Empfang; Schieberegler 1 bis 10 mit mittlerer Vorgabe 5. |

Das Fernsehgerät muss denselben analogen Kanal und einen passenden Tonstandard unterstützen. Ein heutiger reiner DVB-T2-Suchlauf findet das analoge Modulatorsignal nicht. Die tatsächlich nutzbaren Werte hängen von der Hardware ab.

Die Testbox hat keinen HF-Modulator. Deshalb gibt es hier eine **Quellenbeschreibung ohne Hardware-Funktionstest oder nachgebildetes Bildschirmfoto**. [Alle sechs Referenzfelder](../../einstellungen/referenz/rfmodulator/), [Quelle RFmod.py](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/lib/python/Components/RFmod.py).
