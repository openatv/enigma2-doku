---
title: Servicereferenzen – TV, Radio und IPTV ins Bouquet eintragen
description: Die Felder einer Enigma2-Servicereferenz lesen, 1 und 2 von 4097, 5001 und 5002 unterscheiden und IPTV-Beispiele sicher eintragen.
---

**Die erste Zahl wählt den Enigma2-Dienst. Die dritte Zahl beschreibt bei den hier gezeigten Einträgen den Sendertyp.** Deshalb bedeutet eine führende `2:` nicht „Radio“: Dienst 2 ist die Dateisystem-Factory.

## Die Felder lesen

```text
Dienst:Flags:Typ:SID:TSID:ONID:Namespace:Reserve:Reserve:Reserve:Pfad
4097  :0    :1  :0  :0   :0   :0        :0      :0      :0      :https%3a//media.example.org/live.m3u8
```

Die zweite Zeile ist nur eine ausgerichtete Erklärung, kein direkt einsetzbarer Eintrag. Die echte Syntax steht unten.

| Feld | Bedeutung |
| --- | --- |
| 1: Dienst | Dezimal: `1` DVB, `4097` ServiceMP3, `5001` gstplayer, `5002` exteplayer3. |
| 2: Flags | Dezimal: `0` im einfachen Senderbeispiel. Andere Werte kennzeichnen etwa Ordner, Marker oder Gruppen. |
| 3: Typ | Hexadezimal: `1` herkömmlicher TV-Typ, `2` Radio. Es gibt weitere DVB-TV-Typen, etwa `19` (hexadezimal) für einen HD-Typ; TV ist also nicht immer nur 1. |
| 4–7: SID, TSID, ONID, Namespace | Sender- und Netzwerkkennung; bei DVB nicht beliebig ändern. Auch IPTV-EPG und Picons können davon abhängen. |
| 8–10 | Weitere Datenfelder; im einfachen Beispiel 0, vorhandene Werte nicht pauschal löschen. |
| Ab Feld 11 | Dateipfad oder Stream-URL. Ein DVB-Live-Sender benötigt hier normalerweise keine URL. |

Die Felder 3–10 werden hexadezimal gelesen. **4097 ist dagegen dezimal** und entspricht intern `0x1001`. Schreibe in das erste Bouquet-Feld `4097`, nicht `1001`.

## Drei Player für denselben Beispielstream

Die Domain `example.org` ist ein Platzhalter. Ersetze sie durch eine von dir nutzbare echte Stream-Adresse; die Beispiele liefern kein Programm.

```text
#NAME IPTV Test
#SERVICE 4097:0:1:0:0:0:0:0:0:0:https%3a//media.example.org/live.m3u8
#DESCRIPTION Beispiel TV - Enigma2
#SERVICE 5001:0:1:0:0:0:0:0:0:0:https%3a//media.example.org/live.m3u8
#DESCRIPTION Beispiel TV - gstplayer
#SERVICE 5002:0:1:0:0:0:0:0:0:0:https%3a//media.example.org/live.m3u8
#DESCRIPTION Beispiel TV - exteplayer3
```

5001/5002 benötigen [ServiceApp samt Playern](../serviceapp/). 4097 kann durch ServiceApp bereits umgeleitet sein: Für einen echten Vergleich mit dem eingebauten GStreamer-Dienst muss das Wiedergabesystem dort auf **original** stehen.

Der Doppelpunkt der URL wird hier als `%3a` geschrieben, damit er nicht als Feld-/Namenstrenner behandelt wird. Auch ein zusätzlicher Doppelpunkt, etwa vor einer Portnummer, muss im codierten Format korrekt behandelt werden. Ein Bouquet-Editor kann das übernehmen. **Die URL nicht mehrfach codieren**; aus `%3a` darf nicht versehentlich `%253a` werden. Vorhandene Query-Parameter und Zugangsdaten müssen erhalten bleiben, gehören aber nicht in öffentliche Fehlerberichte.

Die Nullen sind nur ein minimales Wiedergabebeispiel. Für mehrere reale IPTV-Sender eindeutige, zur EPG-/Picon-Zuordnung passende Referenzen verwenden. Gleiche Namen oder lauter Nullkennungen stellen keine EPG-Verbindung her: [Fehlender EPG und IPTV](../../epg/fehlende-daten/).

## Radio richtig kennzeichnen

```text
#NAME IPTV Radio Test
#SERVICE 4097:0:2:0:0:0:0:0:0:0:https%3a//media.example.org/radio.mp3
#DESCRIPTION Beispiel Radio
```

Radio steht hier im **dritten** Feld als 2. Ein nativer DVB-Radiosender beginnt entsprechend beispielsweise mit `1:0:2:`; seine echten restlichen Kennungen kommen aus dem Sendersuchlauf. Ob ein Eintrag in der TV- oder Radiobouquetliste erscheint, hängt zusätzlich von der jeweiligen Bouquet-Datei und deren Registrierung ab.

## Ein eigenes Testbouquet anlegen

Am bequemsten einen Bouquet-Editor mit Enigma2-IPTV-Unterstützung verwenden: bestehende Listen von der Box laden, ein separates Testbouquet anlegen, URL und Diensttyp wählen, zurückübertragen und neu laden. Die genaue Oberfläche hängt vom Editor ab.

Für eine manuelle Textbearbeitung:

1. `/etc/enigma2/bouquets.tv` beziehungsweise `bouquets.radio` sowie betroffene `userbouquet.*`-Dateien lokal sichern. Eine [Settings-Sicherung](../../wartung/backup-restore/) ist ebenfalls sinnvoll.
2. In einem freien Zeitfenster die GUI per SSH mit `init 4` stoppen, damit Enigma2 die Dateien beim Beenden nicht überschreibt. Das unterbricht Wiedergabe und Aufnahmen.
3. Das TV-Beispiel als UTF-8-Text mit Unix-Zeilenenden nach `/etc/enigma2/userbouquet.iptvtest.tv` übertragen. Noch vorhandene Testdateien nicht versehentlich überschreiben.
4. In `bouquets.tv` eine zusätzliche Zeile ergänzen; den bestehenden Inhalt behalten:
```text
#SERVICE 1:7:1:0:0:0:0:0:0:0:FROM BOUQUET "userbouquet.iptvtest.tv" ORDER BY bouquet
```
5. Mit `init 3` starten und das neue Bouquet in der TV-Favoritenliste öffnen. Bei ausgeblendeten Mehrfachbouquets die entsprechende Senderlisten-Option prüfen.

Für Radio entsprechend `userbouquet.iptvtest.radio` erstellen und in `bouquets.radio` registrieren:
```text
#SERVICE 1:7:2:0:0:0:0:0:0:0:FROM BOUQUET "userbouquet.iptvtest.radio" ORDER BY bouquet
```

Die Registrierungszeile ist ein **Bouquet-Verweis** mit Flags 7; sie wählt keinen IPTV-Player. Nie durch ein globales Ersetzen sämtlicher führender Einsen die ganze Kanalliste verändern. Nach dem Test nur die eigene Bouquet-Datei und deren Verweis entfernen beziehungsweise die vorherige Version wiederherstellen.

Syntax geprüft anhand des [Enigma2-Parsers](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/lib/service/service.cpp) und der [Bouquet-Verarbeitung](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/lib/dvb/db.cpp). Die Beispiele wurden nicht in die Senderlisten der Testbox geschrieben.
