---
title: Fehler im Forum oder auf GitHub melden
description: Den passenden Supportbereich wählen, Enigma2- und OE-Alliance-Probleme zuordnen und einen nachvollziehbaren Fehlerbericht mit Logs erstellen.
---

Ein guter Fehlerbericht beschreibt **was du getan hast, was du erwartet hast und was tatsächlich passiert ist**. Ergänze den genauen Image-Stand und das passende Log. So können andere das Problem nachvollziehen, ohne deine gesamte Einrichtung erraten zu müssen.

## Wo gehört meine Frage hin?

| Anlaufstelle | Passende Themen |
| --- | --- |
| [OpenATV-Forum](https://www.opena.tv/) | Einrichtung, Bedienung, unbekannte Fehlerursachen und Unterstützung durch andere Nutzer. Bei Unsicherheit hier beginnen. |
| [Hersteller und Modelle im Forum](https://www.opena.tv/viewforum.php?f=454) | Gerätespezifische Flash-Anleitung, Anschlüsse, Boot-/Recovery-Verfahren und Probleme eines bestimmten Modells. |
| [OpenATV Enigma2 Issues](https://github.com/openatv/enigma2/issues) | Nachvollziehbare Fehler der Enigma2-Oberfläche und ihrer Funktionen, etwa ein reproduzierbarer Absturz beim Öffnen eines Menüs oder Speichern einer Einstellung. |
| [OE-Alliance Core Issues](https://github.com/oe-alliance/oe-alliance-core/issues) | Fehler der gemeinsamen Image-/Build-Grundlage: Rezepte, Pakete, Abhängigkeiten und Integration von System- oder Treiberkomponenten. Ein Treiberproblem wird dadurch nicht automatisch in diesem Repository lösbar. |
| Projekt oder Supportthema des jeweiligen Plugins/Skins | Fehler, die an einer bestimmten Erweiterung oder einem fremden Skin hängen. Den Projektlink findest du häufig in dessen Information oder Installationsquelle. |

Ein schwarzer Bildschirm allein sagt noch nicht, welches Projekt verantwortlich ist. Auch ein im Enigma2-Log sichtbarer Fehler kann aus einem Plugin oder einer fehlenden Systembibliothek stammen. Beschreibe zunächst die Beobachtung; die Zuordnung lässt sich anschließend gemeinsam klären.

**GitHub-Zugang:** Zum Schreiben brauchst du ein angemeldetes GitHub-Konto und die entsprechende Berechtigung. Manche Projekte beschränken neue Issues. Wird **New issue** nicht angeboten oder ist die Erstellung gesperrt, nutze das Forum und verlinke das betreffende Projekt. Vorlagen und Regeln des Zielprojekts haben Vorrang vor der allgemeinen Vorlage unten.

## Vor dem Melden prüfen

1. Suche im Forum oder in den **offenen und geschlossenen Issues** nach Fehlermeldung, betroffenem Menü, Plugin oder Paket. Gibt es bereits denselben Fehler, ergänze dort deine nachvollziehbaren Angaben, statt ein Duplikat zu eröffnen.
2. Notiere Modell, genaue OpenATV-Version, Image-/Build-Datum und Enigma2-Version aus den Informationsanzeigen. „Aktuelles Image“ reicht nicht, weil sich Downloads laufend ändern.
3. Beschreibe die Installation: frisch geflasht oder Softwareupdate, aktive Zusatzplugins, Skin und ob Einstellungen beziehungsweise Plugins per AutoRestore übernommen wurden.
4. Prüfe, ob das Problem wiederholbar ist. Verändere nur eine Sache auf einmal. Bei Skin-/Plugin-Verdacht kann ein Vergleich mit dem Standardskin beziehungsweise ohne diese Erweiterung helfen.
5. Erfasse ein passendes [Debug- oder Crashlog](../logs-diagnose/) und notiere den Fehlerzeitpunkt. Für Restore-Probleme prüfe zusätzlich **`/home/root/FastRestore.log`**.

Ein sauberes Vergleichsimage kann bei hartnäckigen Fehlern helfen, ist aber kein notwendiger erster Schritt für jede Meldung. Bei unterstütztem [MultiBoot](../../wartung/multiboot/) kannst du dafür einen anderen geeigneten Slot nutzen und das laufende Image behalten. Das [Flash-Online-Kapitel](../../wartung/flash-online/) erklärt die Zielauswahl.

## Einen Bericht erstellen

Wähle einen Titel mit betroffener Funktion und Auslöser, zum Beispiel **„Kanalliste: GUI-Absturz nach MENU bei Layout …“**. Ein Titel wie „Geht nicht“ ist schlecht zuzuordnen.

Eröffne im passenden Forumsbereich ein Thema oder im zuständigen GitHub-Projekt ein Issue, sofern möglich. Ein Bericht sollte ein klar abgegrenztes Problem behandeln. Für GitHub ist eine englische Beschreibung hilfreich; die [englische Fassung dieser Vorlage](../../../en/hilfe/fehler-melden/) lässt sich direkt verwenden.

```text
Titel: [Funktion] – [Fehler] nach [Auslöser]

Gerät und Hardwarevariante:
OpenATV-Version und Image-/Build-Datum:
Enigma2-Version/Revision:
Installation: frisch / Softwareupdate / Flash Online
Einstellungen/Plugins wiederhergestellt: nein / ja, welche Auswahl?
Skin und relevante Plugins mit Version:

Schritte zum Nachstellen:
1.
2.
3.

Erwartetes Ergebnis:
Tatsächliches Ergebnis / genaue Fehlermeldung:
Häufigkeit: immer / manchmal / einmal
Fehlerzeitpunkt und Zeitzone:
Letzter bekannter funktionierender Stand, falls bekannt:

Bereits geprüft, jeweils mit Ergebnis:
Angehängte Logs und zugehöriger Zeitpunkt:
Link zu einem vorhandenen Forumsthema oder Issue:
```

Obwohl das Handbuch modellneutral ist, gehört das konkrete Modell in einen Fehlerbericht: Die Ursache kann von Tuner, Treiber, Speicher oder Bootverfahren abhängen. Bei Empfangsproblemen ergänze Empfangsart und Tuner-Konfiguration; bei Netzwerkproblemen Verbindungsart und Mount-Protokoll. Öffentliche Zugangsdaten sind dafür nicht nötig.

## Welche Anhänge helfen?

- **GUI-Absturz:** Crashlog einschließlich vollständigem Traceback und gegebenenfalls Debug-Log unmittelbar davor.
- **Hänger oder falsches Verhalten:** Debug-Log mit kurzer reproduzierbarer Schrittfolge und Uhrzeit. Ein Crashlog ist nicht immer vorhanden.
- **AutoRestore:** `FastRestore.log`, fehlender Paketname und die gewählte Wiederherstellungsart.
- **Update-/Installationsfehler:** Exakte Paket- und Fehlermeldung sowie relevante Ausgabe; ein Screenshot kann den Dialog ergänzen.
- **Darstellungsfehler:** Screenshot plus Skin, Auflösung und betroffene Einstellung. Für technische Fehler zusätzlich das Log bereitstellen.

Lade Textlogs als Datei oder, wenn vom Portal verlangt, als ZIP hoch. Kopiere nicht unbesehen ganze Backups, `/etc/enigma2/settings`, `/etc/shadow` oder private Netzwerkdateien in ein öffentliches Thema. Prüfe eine Kopie auf Passwörter, Tokens und personenbezogene Daten; bewahre das Original lokal auf. Die benötigten [Log-Pfade und die Dateiübertragung](../logs-diagnose/#wo-liegen-die-logs-auf-der-box) sind separat beschrieben.

## Nach Rückfragen oder einer Korrektur

Ergänze die angefragten Angaben im gleichen Thema. Verlinke einen Wechsel zwischen Forum und GitHub, damit der bisherige Befund auffindbar bleibt. Teste eine angebotene Korrektur und melde Image-Stand sowie Ergebnis zurück. Markiere das Thema gegebenenfalls als gelöst beziehungsweise schließe dein Issue nach den Projektregeln.

Für Download-Auswahl und modellbezogene Installationshinweise siehe [Downloads, Modelle und Support](../downloads-modelle/).
