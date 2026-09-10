---
title: Wiedergabe – welcher Player macht was?
description: MediaPlayer, MovieSelection, EMC, DVD, Blu-ray, TS, ServiceMP3, GStreamer und ServiceApp verständlich unterscheiden.
---

**Die Oberfläche wählt einen Film aus; der Wiedergabedienst liest und spielt ihn ab.** Eine Datei kann in mehreren Listen auftauchen und dabei mit demselben Dienst laufen. Ein anderer Skin oder eine andere Filmliste ergänzt keine fehlenden Hardware-Codecs.

| Einstieg | Aufgabe | Anleitung |
| --- | --- | --- |
| MovieSelection | Enigma2-Aufnahmen auswählen, fortsetzen und verwalten | [Aufnahmeliste](../aufnahmen/movieselection/) |
| EnhancedMovieCenter (EMC) | Filmbibliothek mit eigenen Listen-, Cover- und Wiedergabeoptionen | [EMC](../addons/emc/) |
| MediaPlayer | Dateien und Musik in einer Wiedergabeliste abspielen | [MediaPlayer und sieben Setup-Optionen](./mediaplayer/) |
| DVD Player | DVD-Struktur mit Titeln, Kapiteln und DVD-Menü bedienen | [DVD und Blu-ray](./dvd-bluray/) |
| Blu-ray Player | Blu-ray-Ordner oder ISO öffnen und Titel auswählen | [DVD und Blu-ray](./dvd-bluray/) |
| FileCommander | Dateien verwalten; zum Öffnen einen passenden Betrachter/Player aufrufen | [Dateimanager](../addons/filecommander/) |

## TS-Wiedergabe und ServiceMP3

**DVB-Aufnahmen als `.ts`** laufen normalerweise über Enigma2s eingebauten DVB-Dienst. Dieser liest den Transportstrom und arbeitet mit Demultiplexer, Decoder und Herstellertreibern. Dazu gehören die typischen Funktionen für Aufnahmen, etwa Spuren, Schnitt-/Sprungmarken und Fortsetzen, soweit die Oberfläche sie anbietet. Dafür muss kein „TS Player“-Plugin installiert werden. Nicht jede fremde Datei mit Endung `.ts` entspricht einer problemlos abspielbaren DVB-Aufnahme.

**ServiceMP3 / servicemp3** ist trotz des historischen Namens der allgemeine GStreamer-Wiedergabedienst für viele Medienformate und Netzwerkstreams. Seine Kennung ist **4097**. GStreamer setzt den Ablauf aus Quelle, Containerleser, Audio-/Videoverarbeitung und Ausgabe zusammen. Auf einer Receiverbox bleibt die Ausgabe oft an die Decoder und Treiber des Geräts gebunden.

`Datei oder Stream → Container/Spuren lesen → Audio/Video decodieren → Bild, Ton und Untertitel ausgeben`

**gstplayer** ist ein zusätzlicher Player; das auf der Testbox verwendete Programm heißt **gstplayer2**. Es verwendet ebenfalls GStreamer, läuft aber über die ServiceApp-Anbindung und ist nicht identisch mit dem eingebauten ServiceMP3. **exteplayer3** verwendet FFmpeg-Bausteine zum Lesen/Verarbeiten der Medien und eigene Ausgabepfade. Auch er macht nicht automatisch jeden Videocodec per CPU abspielbar. Der korrekte Paketname ist `exteplayer3`, nicht „ext3player“.

| Erste Zahl der Servicereferenz | Dienst |
| --- | --- |
| `1` | Nativer DVB-Dienst, auch für die übliche TS-Aufnahmewiedergabe |
| `4097` | Normalerweise Enigma2/ServiceMP3 mit GStreamer; durch ServiceApp ersetzbar |
| `5001` | ServiceApp mit gstplayer |
| `5002` | ServiceApp mit exteplayer3 |

[ServiceApp konfigurieren](./serviceapp/) erklärt einzelne Player-Tests und das Ersetzen von 4097. [Servicereferenzen und Bouquets](./servicereferenzen/) zeigt, wo diese Zahlen stehen. **TV/Radio 1/2 ist ein anderes Feld.**

## Was zuerst ausprobieren?

1. Eine eigene DVB-Aufnahme zunächst mit MovieSelection oder EMC normal abspielen.
2. Für Musik und gemischte Dateilisten den MediaPlayer verwenden.
3. Bei einer problematischen Datei [Formate und Fehlersuche](./formate/) prüfen. Danach gegebenenfalls dieselbe Datei über ServiceApp vergleichen.
4. Bei fehlenden Untertiteln zuerst Spur und Renderer prüfen: [native Untertitel](./untertitel/), [SubsSupport](./subssupport/) und [Teletext](./teletext/) haben unterschiedliche Aufgaben.

Ein laufendes IPTV-Bild garantiert weder Aufnahme, Timeshift noch Spulen. Das hängt zusätzlich von Stream, Server und Dienst ab. HiSilicon-spezifische Dienste bekommen später einen eigenen Anhang, wenn passende Testhardware vorliegt.

Quellgrundlage: [Enigma2-Dienstkennungen](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/lib/service/iservice.h), [DVB-Dienst](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/lib/service/servicedvb.cpp), [ServiceApp](https://github.com/oe-mirrors/serviceapp/tree/95e5a4f41d455986a35b8cdd0f132ea4ba6d245f), [exteplayer3](https://github.com/oe-alliance/exteplayer3/tree/668859dd3c2ffaa189b09e46c0ef99d16d4a0149).
