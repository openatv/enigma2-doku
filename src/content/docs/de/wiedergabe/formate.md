---
title: Medienformate – Container, Codecs und Wiedergabeprobleme
description: MKV, MP4, TS, HLS, Video- und Audiocodecs unterscheiden und Probleme mit IPTV, Hardwaredecodierung, Ton, Untertiteln und Spulen eingrenzen.
---

**„Die Box kann MKV“ reicht als Aussage nicht aus.** Eine Datei braucht einen lesbaren Container, unterstützte Video-/Audiospuren und einen passenden Ausgabepfad. Zwei Dateien mit derselben Endung können sich völlig unterschiedlich verhalten.

## Vier Ebenen unterscheiden

| Ebene | Beispiele | Was sie bestimmt |
| --- | --- | --- |
| Container | MPEG-TS, Matroska/MKV, MP4, AVI, WebM | Wie Video, Ton, Untertitel und Zeitinformationen gemeinsam verpackt sind. |
| Videocodec | MPEG-2, H.264/AVC, H.265/HEVC, VP9, AV1 | Wie das Bild komprimiert wird. Profil, Level, Bit-Tiefe, Farbabtastung, Auflösung und Bildrate zählen zusätzlich. |
| Audiocodec | MPEG Audio, AAC, AC3, E-AC3, DTS, MP3, FLAC, PCM | Wie Ton gespeichert ist; Decoder, Downmix und HDMI-/AV-Receiver-Ausgabe müssen passen. |
| Übertragung | Lokale Datei, HTTP/HTTPS, HLS, DASH, RTSP | Wie Daten ankommen, ob Anmeldung erforderlich ist und welche Zugriffs-/Sprungmöglichkeiten der Server anbietet. |

**HLS** verwendet Playlists, häufig `.m3u8`, die auf Mediensegmente und gegebenenfalls mehrere Qualitäten verweisen. **DASH** verwendet ein Manifest, häufig `.mpd`. Diese Namen sagen allein nichts über Video-/Audiocodec oder eine erforderliche DRM-Unterstützung aus. Eine normale M3U-Senderliste kann wiederum URLs zu ganz unterschiedlichen Übertragungsarten enthalten.

## Typische Dateien richtig einordnen

| Datei/Struktur | Einordnung |
| --- | --- |
| Eigene `.ts`-Aufnahme | Üblicherweise DVB-Transportstrom; zuerst native Aufnahmewiedergabe verwenden. Begleitdateien enthalten zusätzliche Enigma2-Informationen. |
| `.mkv` | Flexibler Container mit mehreren Audio-/Untertitelspuren; „MKV erkannt“ bedeutet nicht „jede Spur decodierbar“. |
| `.mp4` / `.mov` | Containerfamilie mit unterschiedlichen möglichen Spuren; nicht automatisch H.264 mit AAC. |
| `.avi` | Älterer Container, ebenfalls verschiedene Codecs möglich. |
| `.webm` | Weborientierter Container; benötigte VP8/VP9/AV1- und Audiospur-Unterstützung prüfen. |
| `.mp3`, `.flac`, `.wav` | Audio; bei WAV zusätzlich die tatsächlich enthaltene Audioform prüfen. |
| `.iso`, `VIDEO_TS`, `BDMV` | Disc-Abbild/-Struktur. [DVD/Blu-ray-Navigation](../dvd-bluray/) ist mehr als eine einzelne Videodatei abzuspielen. |

Umbenennen konvertiert nichts. **Remuxen** verpackt vorhandene Spuren in einen anderen Container, ohne den Videocodec zu ändern. **Transcodieren** erzeugt neu codierte Spuren, benötigt Rechenleistung und kann Qualität kosten. Eine für die Box ungeeignete HEVC-Spur wird durch Remuxen von MKV nach TS nicht zu H.264.

## Hardware, Treiber und Player

Ein Hardwaredecoder verarbeitet nur seine unterstützten Varianten. „HEVC vorhanden“ garantiert beispielsweise nicht jede Bit-Tiefe, Auflösung, Bildrate oder Profilkombination. Die HDMI-Ausgabe auf 1080p zu stellen ändert nicht den Codec und die Decodieranforderungen der Quelldatei.

[ServiceMP3, gstplayer und exteplayer3](../) können sich beim Containerlesen, Protokollen, Puffern und Ton unterscheiden, teilen aber oft dieselben Grenzen der Geräteausgabe. Die Audio-Softwaredecoder in [ServiceApp](../serviceapp/) sind keine Freischaltung für allgemeine Software-Videowiedergabe. Eine Formatliste eines PC-Players oder von FFmpeg ist keine Decoderliste aller OpenATV-Boxen.

Beim Ton unterscheiden: **Decodieren/Downmix** erzeugt beispielsweise Stereo-PCM; **Passthrough** reicht einen komprimierten Audiostrom zur geeigneten Ausgabekette weiter. Nur ein Bild ohne Ton kann daher an der gewählten Audiospur oder Ausgabe liegen, obwohl das Video korrekt läuft.

## Ein Problem systematisch eingrenzen

| Symptom | Nächster sinnvoller Vergleich |
| --- | --- |
| Datei fehlt in der Liste | Pfad, Mount, Dateiendung und Filter prüfen. Mit FileCommander kontrollieren, ob die Datei wirklich vorhanden ist. |
| Datei sichtbar, startet aber nicht | Container/Codec, Leserechte, Vollständigkeit und Player-Log prüfen. Bei ISO die Struktur beachten. |
| Ton, aber kein Bild | Videocodec samt Profil/Bit-Tiefe/Auflösung prüfen; andere bekannte Datei vergleichen. |
| Bild, aber kein Ton | Andere Audiospur wählen; Downmix/Passthrough und unterstützte Audioformate prüfen. |
| Ruckeln oder regelmäßiges Nachladen | Gleiches Medium lokal versus NAS/Internet vergleichen, Bitrate und Netzwerk prüfen. Bei HLS bewusst niedrigere Qualität testen. |
| Lange Startzeit | NAS erreichbar? Autofs-Mount, DNS, Serverantwort, Anmeldung und [Puffer](../serviceapp/) prüfen. |
| Kein Spulen / unbekannte Dauer | Live-Stream ohne Zeitfenster, fehlender Index oder begrenzte Server-/Player-Unterstützung. |
| Untertitel fehlen/falsch | Vorhandene Spur, Format, Renderer, Dateiname, Codierung und Timing prüfen; [Untertitel-Anleitung](../untertitel/). |
| EPG fehlt, Bild läuft | Servicereferenz und EPGImport-Zuordnung prüfen; [EPG für IPTV](../../epg/fehlende-daten/). |
| Derselbe Stream läuft am PC | Bestätigt nur diesen PC-Pfad. Browser können andere Codecs, DRM, Cookies oder Protokolle nutzen. |

IPTV-Anbieter können zeitlich begrenzte URLs, Zugangsdaten, bestimmte HTTP-Header oder eine maximale Anzahl gleichzeitiger Streams verlangen. Ein Playerwechsel erzeugt keine Berechtigung und verlängert keine abgelaufene URL. Bei geschützten Streamingdiensten reicht eine in ein Bouquet kopierte Adresse häufig nicht für deren vorgesehenen Wiedergabeweg.

## Gute Angaben für einen Fehlerbericht

Notiere Image-/Player-Version, verwendeten Dienst **1/4097/5001/5002**, Container, Video-/Audiocodec, Auflösung, Bildrate, Bit-Tiefe, Untertitelformat und ob lokale Datei oder Netzwerk. Beschreibe das Ergebnis mit einem zweiten bekannten Medium und, wenn getestet, einem zweiten Player. Modellangaben sind für den konkreten Supportfall sinnvoll, obwohl dieses Handbuch modellneutral bleibt.

Am PC kann ein Medienanalysewerkzeug die Spuren anzeigen. Mit installiertem FFmpeg lässt sich eine lokale Datei beispielsweise so nur untersuchen:

```sh
ffprobe -v error -show_format -show_streams -of json "Film.mkv"
```

Das ist kein Befehl zum Nachinstallieren von FFmpeg auf jeder Box. Die Ausgabe kann Dateipfade und Metadaten enthalten; beim [Fehlerbericht](../../hilfe/fehler-melden/) private Daten entfernen. Dazu ein kurzes [Log vom Fehlerzeitpunkt](../../hilfe/logs-diagnose/) beilegen.

Technische Grundlagen: [GStreamer playbin](https://gstreamer.freedesktop.org/documentation/playback/playbin.html), [FFprobe-Dokumentation](https://ffmpeg.org/ffprobe.html) und die in der [Player-Übersicht](../) verlinkten OpenATV-/Player-Quellen. Eine modellübergreifende Codec-Garantie lässt sich daraus nicht ableiten.
