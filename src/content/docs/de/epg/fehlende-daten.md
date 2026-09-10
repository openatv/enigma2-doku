---
title: Fehlende EPG-Daten und IPTV-Zuordnung
description: DVB-EIT, XMLTV, Service-Reference, tvg-id und Sendernamen unterscheiden und einen leeren oder zeitlich falschen IPTV-EPG eingrenzen.
---

Ein empfangbares Bild beweist nicht, dass auch Programminformationen vorhanden sind. **Senderliste, Videostream und EPG sind unterschiedliche Daten.** Die [EPG-Ansicht](../ansichten/) zeigt nur, was im Cache dem betreffenden Dienst zugeordnet wurde.

## Welche Art von Daten fehlt?

| Datenweg | Herkunft | Typische Grenze |
| --- | --- | --- |
| DVB-EIT | Programminformationen im empfangenen DVB-Transportstrom | Anbieter senden unterschiedlich viele Tage und Beschreibungen; Empfang ist nötig. |
| Jetzt/Danach | Informationen zur laufenden und nächsten Sendung | Zwei Einträge sind noch kein mehrtägiger Programmführer. |
| Anbieterbezogene DVB-Verfahren | Zusätzliche EPG-Daten für bestimmte Angebote | Nur passende Quellen aktivieren; nicht jeder Schalter hilft bei jedem Sender. |
| XMLTV über EPGImport | Externe Programmdatei plus Zuordnung zu Diensten | Netzwerk, aktuelle Quelldatei und passende Kanal-IDs erforderlich. |
| `epg.dat` | Gespeicherter Enigma2-Cache | Speichern erhält bereits geladene Daten; es beschafft keine neuen Sendungen. |

EPGRefresh automatisiert das DVB-Einsammeln. EPGImport lädt externe Daten. Beide können denselben Cache füllen; konkurrierende Quellen für dieselben Sender erschweren die Fehlersuche. Beginne mit einem bekannten Sender und einer nachvollziehbaren Quelle.

## DVB: systematisch eingrenzen

1. Schalte auf einen empfangbaren Sender und warte auf seine Daten. Vergleiche Das Erste HD und ZDF HD sowie einen zweiten Zeitpunkt.
2. Prüfe **Datum, Uhrzeit und Zeitzone**, insbesondere nach einem längeren Ausschalten.
3. Prüfe die Quelle und den Zeitraum im EPG. Daten von gestern oder nur Jetzt/Danach sprechen nicht für einen defekten Skin.
4. Kontrolliere bei EPGRefresh die ausgewählten Dienste und den letzten Lauf, bei EPGImport Quellen, Filter und Log.
5. Prüfe bei nach jedem Start leerem EPG dessen Speicherort und ob die Cache-Datei gespeichert und wieder geladen werden kann.

Lösche `epg.dat` beziehungsweise den laufenden Cache erst gezielt nach der Diagnose. Das beseitigt keine falsche Zuordnung, fehlende Internetverbindung oder falsche Uhr und entfernt zunächst vorhandene Informationen.

## IPTV: Name, XMLTV-ID und Service-Reference

Für einen typischen XMLTV-Import müssen drei Teile zusammenpassen:

| Teil | Beispiel/Zweck |
| --- | --- |
| XMLTV-Kanal-ID | Der Wert von `channel` in einem XMLTV-Programmeintrag, etwa `demo.example`. |
| Enigma2-Service-Reference | Kennung des tatsächlich verwendeten Bouquet-Eintrags; darüber werden die Daten dem Dienst zugeordnet. |
| Sendername | Lesbarer Anzeigename wie „Beispiel HD“. Gleicher Text allein stellt diese Zuordnung nicht her. |

Ein M3U-Attribut **`tvg-id`** kann einem Bouquet-Generator helfen, die XMLTV-ID zu übernehmen. Ob daraus die nötige Enigma2-Zuordnung entsteht, hängt vom verwendeten IPTV-Plugin ab. **`tvg-name`**, ein umbenannter Bouquet-Eintrag oder ein passendes Picon ersetzen die Zuordnung nicht.

Vergleiche auch Programmversion und Region: HD/SD, Regionalfenster oder ein zeitversetzter Sender können trotz ähnlicher Namen andere Sendungen zeigen. Ändert der Listenanbieter Service-References bei jeder Aktualisierung, muss auch die Zuordnung stabil erzeugt beziehungsweise erneuert werden.

## Eigene XMLTV-Quelle: Dateien als Vorlage

Im geprüften EPGImport liegen Definitionen unter **`/etc/epgimport/`**. Dieses Beispiel enthält absichtlich eine nicht erreichbare Dokumentationsadresse und eine auszutauschende Kennung. Es ist **keine direkt nutzbare Senderkonfiguration**.

`handbook.sources.xml`:

```xml
<?xml version="1.0" encoding="utf-8"?>
<sources>
  <sourcecat sourcecatname="My guide">
    <source type="gen_xmltv" channels="handbook.channels.xml">
      <description>My XMLTV guide</description>
      <url>https://example.invalid/guide.xml.gz</url>
    </source>
  </sourcecat>
</sources>
```

`handbook.channels.xml`:

```xml
<?xml version="1.0" encoding="utf-8"?>
<channels>
  <channel id="demo.example">SERVICE_REFERENCE_FROM_YOUR_BOUQUET</channel>
</channels>
```

Ersetze die URL durch eine zulässige, erreichbare XMLTV-Quelle, `demo.example` durch deren echte Kanal-ID und den Platzhalter durch die vollständige passende Service-Reference. Sonderzeichen müssen XML-gerecht maskiert sein, beispielsweise `&amp;` für ein kaufmännisches Und. Kopiere Kennungen aus deiner eigenen Liste, nicht aus einer Anleitung für einen anderen Dienst. IPTV-Referenzen können Streamadressen und Zugangsdaten enthalten; solche Dateien vor dem Teilen bereinigen.

**`custom.channels.xml`** ist zusätzlich ein vom geprüften Plugin gelesener Ort für eigene Zuordnungen. Regeln in **`channel_id_filter.conf`** können diese Einträge je nach Einstellung filtern. Prüfe zuerst einen Kanal mit einem manuellen Import und öffne genau dessen Bouquet-Eintrag. Danach erst weitere Sender ergänzen. Ersetze Service-Typen oder numerische Kennungen nicht wahllos, nur damit ein Import scheinbar passt.

## Import erfolgreich, Sender trotzdem leer oder um Stunden verschoben

- **Gesamtzahl größer null, ein Sender leer:** Quell-ID, Reference, Bouquet-/IPTV-Filter und den tatsächlich geöffneten Eintrag vergleichen.
- **Nur Beschreibungen fehlen:** Quelle und Begrenzung für lange Beschreibungen prüfen; kurze Datensätze müssen keinen Langtext enthalten.
- **Alle Sender/Uhranzeigen falsch:** [Zeiteinstellungen](../../system/zeit-aufwachen/) prüfen.
- **Nur eine XMLTV-Quelle versetzt:** Zeitstempel und Zeitzonenangaben dieser Quelle untersuchen. Nicht die gesamte Box-Uhr verstellen, um einen fehlerhaften Feed auszugleichen.
- **Nach Listenupdate wieder leer:** Geänderte Kennungen und Generator-Einstellungen prüfen.

Für einen [Fehlerbericht](../../hilfe/fehler-melden/) sind Plugin-Version, betroffene Quelle, Zeitpunkt, Importlog und ein bereinigtes Beispiel einer Zuordnung hilfreich. Private Stream-URLs und Zugangsdaten gehören nicht ins öffentliche Forum.

Quellen: [Enigma2-EPG-Cache](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/lib/dvb/epgcache.cpp), [EPGImport-Quellen und Kanal-IDs](https://github.com/oe-alliance/XMLTV-Import/blob/a32929f2d0/src/EPGImport/EPGConfig.py), [Filter und Importablauf](https://github.com/oe-alliance/XMLTV-Import/blob/a32929f2d0/src/EPGImport/plugin.py).

## IPTV-Player und Servicereferenzen

[TV/Radio-Felder, 4097/5001/5002 und fertige Bouquet-Beispiele](../../wiedergabe/servicereferenzen/) erklären, wie Wiedergabedienst und Senderkennung zusammenhängen. [ServiceApp](../../wiedergabe/serviceapp/) konfiguriert die zusätzlichen Player.
