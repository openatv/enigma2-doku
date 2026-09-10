---
title: "PCM, Downmix und Audio-Passthrough"
description: "OpenATV: PCM, Downmix und Audio-Passthrough. Einstellungen, Bedeutung, Anschlussbeispiele und Fehlersuche."
---

**Die gewählte Tonspur und die tatsächlich ausgegebene Tonart sind zwei verschiedene Dinge.** Eine AC3-Spur kann die Box als Stereo-PCM verlassen, wenn Downmix aktiv ist. Umgekehrt macht ausgeschalteter Downmix aus einer Stereoquelle keine 5.1-Aufnahme.

| Begriff | Was geschieht? |
| --- | --- |
| Decodieren | Die Box oder das Audiosystem berechnet aus dem komprimierten Ton die Audiosamples. |
| PCM | Bereits decodierter Ton. PCM kann Stereo oder mehrkanalig sein; „PCM“ allein sagt nichts über die Kanalzahl. |
| Downmix | Mehrere Kanäle werden auf weniger Kanäle, meist Stereo, zusammengemischt. Geeignet für Stereo-TV oder Stereoanlage. |
| Passthrough / Bitstream | Ein unterstützter komprimierter Tonstrom wird zum Decoder im nachfolgenden Gerät weitergereicht. |
| Transcoding | Umwandeln in einen anderen komprimierten Codec, etwa E-AC3 → AC3. Benötigt passende Implementierung und kann Informationen verlieren. |
| Upmix / Klangprogramm | Das Audiosystem verteilt vorhandenen Ton auf mehr Lautsprecher. Die ursprüngliche Spur wird dadurch nicht zu echtem diskretem Mehrkanalton. |

## Formate erkennen

| Anzeige | Einordnung |
| --- | --- |
| MPEG-Audio / AAC / HE-AAC | Häufige TV-/Streamformate. Decoder- und Durchleitungsunterstützung sind je nach Box und Ziel unterschiedlich. |
| AC3 / Dolby Digital | Häufig Stereo oder 5.1. AC3-Downmix ein ergibt normalerweise Stereo; aus erlaubt auf unterstütztem Weg Bitstream. |
| AC3+ / E-AC3 / Dolby Digital Plus | Eigenes Format mit anderen Anforderungen als AC3. Gegebenenfalls direkte Durchleitung, Mehrkanal-PCM oder Umwandlung zu AC3 wählen. |
| DTS / DTS-HD / DTS:X | Unterschiedliche Übertragungs-/Decoderanforderungen. DTS-HD ist nicht gleichbedeutend mit einfachem DTS. |
| Dolby TrueHD | Verlustfrei komprimiertes Audio. Keine pauschale Unterstützung aller Enigma2-Treiber/Player ableiten. |
| AC4 | Eigenständiges Format. Ein AC4-Feld bedeutet nicht, dass jede Datei decodierbar oder jede Spur Atmos ist. |

**Dolby Atmos** beschreibt immersive Audioinhalte und kann unter anderem über Dolby Digital Plus, TrueHD, AC4 oder MAT transportiert werden. Nicht jede Spur in diesen Formaten enthält Atmos. Eine Umwandlung zu einfachem AC3 oder Stereo erhält diese Informationen nicht allgemein. [Dolby: Atmos und Transportformate](https://ott.dolby.com/browser_test_kit/help_files/topics/g_311.html), [Dolby: Audioformate](https://professional.dolby.com/technologies/dolby-audio/).

## Praktische Einstellungen nach Ziel

- **TV-Lautsprecher:** Mit einer verfügbaren Stereo-Spur oder Downmix beginnen. Bleibt AC3 stumm, prüfen, ob die Box decodieren kann und der TV das tatsächlich ausgegebene Format akzeptiert.
- **AVR/Soundbar mit passendem Decoder:** AC3-/DTS-Downmix für unterstützte Bitstreams ausschalten; AC3+/AAC/HD-Formate jeweils separat einstellen. Ein einzelner Schalter deckt nicht alle Formate ab.
- **Mehrkanal-PCM:** Geeignet, wenn die Box den Codec mehrkanalig decodieren und die gesamte Verbindung diesen PCM-Modus übertragen kann. S/PDIF ist dafür kein allgemeiner Weg.
- **Älteres Audiosystem:** Unterstützte AC3-Ausgabe kann eine passende Transcoding-Option sein. Fehlt ein Encoder/Decoder, ersetzt die Auswahl keine fehlende Hardwarefunktion.

Bei Passthrough regelt gewöhnlich der AVR oder die Soundbar die Lautstärke. Das Lautstärkesymbol der Box kann sich ändern, obwohl der Bitstream-Pegel gleich bleibt. [Lautstärke und CEC](../lautstaerke/).

## Player und Aufnahmen

Native DVB-/TS-Wiedergabe, ServiceMP3/GStreamer und externe Player können unterschiedliche Codec- und Passthrough-Wege besitzen. [ServiceApp](../../wiedergabe/serviceapp/) und [Player/Formate](../../wiedergabe/formate/) ergänzen diesen Bereich. Die Auswahl „Passthrough“ garantiert keinen funktionierenden Weg für jede IPTV-Datei.

Downmix und HDMI-Pegel betreffen die Wiedergabe. Eine gewöhnliche DVB-TS-Aufnahme behält ihre aufgenommenen Tonspuren; das Abspielen mit Stereoausgabe schreibt sie nicht in eine Stereoaufnahme um. Transcoding-Aufnahmen oder besondere Streamingdienste sind davon zu unterscheiden.


[Bild und Ton](../) · [Quellen und Prüfumfang](../quellen/)
