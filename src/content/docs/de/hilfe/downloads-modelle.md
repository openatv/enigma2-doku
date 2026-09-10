---
title: Downloads, Modelle und Support
description: Das richtige OpenATV-Image finden, unterstützte Geräte nachschlagen und Flash-Anleitungen sowie Hilfe im Forum finden.
---

Die Bedienung von Enigma2 ist weitgehend gemeinsam. **Die Image-Datei muss trotzdem genau zum Receiver passen.** Modellzusätze wie Plus, SE, V2, Combo oder eine abweichende Hardwareversion können entscheidend sein.

## Wo lade ich OpenATV herunter?

Öffne die [OpenATV-Image-Downloads](https://images.mynonpublic.com/openatv/index.php?v=current). Dort kannst du nach dem Gerät suchen, einen Hersteller wählen und die angebotenen Versionen wechseln. Nach Auswahl eines Geräts erscheinen seine verfügbaren Dateien mit Datum und Imageart.

1. Lies die genaue Modellbezeichnung am Gerät beziehungsweise in seinen Geräteinformationen ab.
2. Suche dieses Modell auf der Downloadseite und prüfe auch den Hersteller.
3. Wähle die vorgesehene Version und lies die zugehörigen Hinweise im Forum.
4. Wähle das **für deinen Installationsweg** passende Archiv. Bezeichnungen wie USB, MMC, Multi oder Recovery beschreiben unterschiedliche Pakete; sie sind nicht beliebig austauschbar.
5. Notiere Dateiname und Datum. Diese Angaben helfen später bei einer Supportfrage.

Der Link `v=current` ist ein beweglicher Einstieg. Er bedeutet nicht, dass jeder Receiver jede neuere Versionsreihe unterstützt. Ein älteres Archiv ist außerdem kein Beleg dafür, dass dieses Gerät in jeder aktuellen Version noch gebaut wird.

## Welche Modelle werden unterstützt?

Die **Gerätesuche der Downloadseite** ist das laufend gepflegte Verzeichnis der angebotenen Images. Dieses Handbuch kopiert keine feste Modellanzahl oder Liste, die nach dem nächsten neuen Gerät bereits veraltet wäre. Prüfe die Verfügbarkeit in der von dir gewählten Versionsreihe. Wenn ein Modell fehlt, kontrolliere Schreibweise und Hardwarezusatz sowie den passenden Forenbereich. Installiere kein Image für ein ähnlich benanntes Gerät.

Die Anleitungen hier bleiben modellneutral. Ein sichtbarer Modellname in einem Bildschirmbild bezeichnet nur die Beispielbox.

## Wo finde ich die Flash-Anleitung für meine Box?

Im [OpenATV-Forum](https://www.opena.tv/) führt der Weg über **OpenATV Images → Hersteller → Hersteller beziehungsweise Modell**. Der [Herstellerbereich](https://www.opena.tv/viewforum.php?f=454) ist direkt erreichbar. Suche dort nach angehefteten Anleitungen sowie den Begriffen **Flashen**, **USB**, **Recovery** und deiner genauen Modellbezeichnung.

Dort gehören die gerätespezifischen Fragen hin: erforderliches Dateisystem des Sticks, Ordnername, USB-Anschluss, Taste beim Einschalten, Displaymeldung und Auswahl im Boot-/Recovery-Menü. Die gemeinsame Vorbereitung steht unter [Neuinstallation per USB](../../wartung/usb-installation/).

## Eine hilfreiche Supportfrage stellen

Die Anleitung [Fehler im Forum oder auf GitHub melden](../fehler-melden/) hilft bei der Zuordnung zu Enigma2, OE-Alliance oder einem Plugin und enthält eine kopierbare Vorlage.

Suche zunächst im passenden Modell- oder Themenbereich. Beschreibe bei einer neuen Frage:

- genaues Modell, OpenATV-Version und Build-Datum;
- verwendeten Skin und betroffene Erweiterung;
- die Schritte, die den Fehler auslösen, und das erwartete Ergebnis;
- Neuinstallation, Softwareupdate oder Flash Online sowie eine eventuell durchgeführte Wiederherstellung;
- bei Empfangs-/Netzwerkproblemen die relevante Anschlussart;
- passende Fehlermeldung und den Zeitpunkt im [Debug- oder Crash-Log](../logs-diagnose/).

Ein Beispiel für einen Titel ist **„Nach Flash Online: NAS-Mount fehlt nach AutoRestore“**. Dazu gehören die oben genannten Versions- und Gerätedaten. Veröffentliche keine Passwörter, Zugangstokens oder vollständigen Einstellungssicherungen. Prüfe ein Log auf persönliche Daten und lass den Fehlerzusammenhang erhalten. Eine Textdatei als Anhang ist für Logs besser lesbar als ein Foto des Fernsehers.

Für spätere modellspezifische Ergänzungen ist der Bereich [Anhänge](../../anhaenge/) vorgesehen. Die gemeinsame Grundlage bleibt für alle Geräte gleich.
