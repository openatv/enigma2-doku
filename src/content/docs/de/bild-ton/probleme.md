---
title: "Kein Bild, kein Ton oder falsches Einschalten"
description: "OpenATV: Kein Bild, kein Ton oder falsches Einschalten. Einstellungen, Bedeutung, Anschlussbeispiele und Fehlersuche."
---

**Ändere pro Versuch nur eine Einstellung und notiere das Ergebnis.** Einen bekannten Sender beziehungsweise eine lokale Testaufnahme verwenden. So trennst du HDMI-/Audioprobleme von Empfang, Netzwerk und Player.

| Beobachtung | Nächster sinnvoller Test |
| --- | --- |
| Schwarz direkt nach Moduswechsel | Bestätigungszeit abwarten; nicht blind bestätigen. Unterstützten Grundmodus, richtigen TV-Eingang und Verbindung prüfen. |
| Menüs sichtbar, nur Video schwarz | Sender/Player, Empfang, Dateiformat und Decoder prüfen. Ein sichtbares OSD beweist keine erfolgreiche Videodecodierung. |
| UHD/HDR fehlt hinter AVR | Direkt am TV vergleichen; Fähigkeiten und erweiterten HDMI-Modus aller Zwischenstationen prüfen. |
| Blasses Bild oder abgesoffenes Schwarz | RGB-Bereich und Farbprofil an beiden Enden passend einstellen, HDR nicht ungeprüft erzwingen. |
| Menüs abgeschnitten | TV-Overscan/Zoom zuerst, danach OSD-Kalibrierung. |
| Ständig kurze Bildaussetzer beim Zappen | Feste Ausgabe gegen Autoresolution testen; HDMI-Aushandlung und Kabel berücksichtigen. |
| Ruckelnde Filmschwenks | Filmrate gegen feste TV-Rate prüfen; Stream-/Decoderprobleme separat ausschließen. |
| Kein Ton, aber Stereo funktioniert | Ausgewählte Tonspur, Downmix/Passthrough, Zieldecoder und TV-Durchleitung für genau dieses Format prüfen. |
| AVR zeigt nur PCM 2.0 | Prüfen, ob Stereoquelle, Downmix oder TV-PCM-Ausgabe verantwortlich ist. PCM allein ist nicht grundsätzlich Stereo. |
| Atmos fehlt | Tatsächliche Atmos-Spur, Transportformat, unveränderte Weiterleitung und unterstützten Player/Decoder prüfen. |
| Lautstärkebalken bewegt sich ohne Wirkung | Bitstream-Pegel am AVR regeln oder funktionierende CEC-Weiterleitung verwenden. |
| Echo / doppelter Ton | TV-Lautsprecher und Audiosystem nicht gleichzeitig mit abweichendem Delay betreiben. |
| Dauerhaft versetzter Ton | [Lipsync](../lipsync/) getrennt für PCM/komprimierten Ton testen. |
| TV wacht nachts auf | CEC-Ereignisse für Umschalt-/Aufwachaufgaben und Weckauslöser prüfen. |
| Box schläft beim Wechsel zu einer Spielkonsole | CEC-Reaktion auf fremde Eingänge prüfen; bei Bedarf deaktivieren. |
| TV/Box schaltet sofort wieder ein | Beide Steuerrichtungen und andere CEC-Geräte prüfen; Log vor Workarounds erstellen. |
| Keine CEC-Logdatei | Eigenen CEC-Debugschalter, tatsächlichen Logpfad, Speicherplatz, Uhrzeit und einen ausgelösten CEC-Test prüfen. |

Bleibt ein Problem offen, mit direktem Box-TV-Anschluss beginnen und AVR, Soundbar oder Switch nacheinander wieder hinzufügen. Beide HDMI-Kabel einer AVR-Kette gehören zum Test. Ein anderes Gerät am gleichen Port ist ein Vergleich, aber kein Beweis für identische Formatanforderungen.

Bei laufenden Aufnahmen keinen ungeplanten Deep-Standby als Test verwenden. Einstellungen, Versionsstand und reproduzierbare Schritte zusammen mit dem [passenden Log](../cec-logs/) im [Support](../../hilfe/fehler-melden/) melden. Für Codecprobleme sind Player-/Enigma2-Logs hilfreicher als alleiniger CEC-Verkehr.


[Bild und Ton](../) · [Quellen und Prüfumfang](../quellen/)
