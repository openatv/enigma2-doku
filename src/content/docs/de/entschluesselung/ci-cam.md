---
title: "CI, CAM und Moduleinstellungen"
description: "CI, CAM und Moduleinstellungen – OpenATV Enigma2"
---

Ein **Common Interface (CI)** ist der Modulschacht. Das **CAM** ist das eingesteckte Entschlüsselungsmodul; je nach Angebot benötigt es zusätzlich eine passende Smartcard oder ist bereits mit einer Berechtigung gekoppelt. Ein eingebauter Kartenleser ist kein CI-Schacht. CI+ ergänzt CI um weitere Authentifizierungs- und Nutzungsregeln.

**Menü → Einstellungen → Entschlüsselung / Jugendschutz → CI-Einstellungen** erscheint bei erkannter CI-Hardware. Ohne Modul sind viele Optionen nicht sichtbar. Modulmenüs und PIN-Dialoge stammen zum Teil vom CAM und können anders aussehen als OpenATV-Menüs.

## Einstieg

1. Vor dem Einsetzen die Hinweise von Box-, Modul- und Kartenanbieter beachten; Einsteckrichtung und Kartenlage sind geräteabhängig.
2. Prüfen, ob das Modul erkannt und initialisiert wird. Danach gegebenenfalls das **Modulmenü/MMI** öffnen.
3. Zunächst einen einzelnen Sender mit gültiger Berechtigung testen. Ein freier Sender prüft Empfang und Bildweg, aber nicht das CAM.
4. Erst danach eine Aufnahme und paralleles Fernsehen testen. Tuner, CAM, Karte und Anbieter können die Zahl gleichzeitig entschlüsselbarer Dienste begrenzen.

CI-/CI+-Erweiterungen sind eine bewusste Entscheidung des Nutzers. Prüfe örtliche Gesetze, Anbieterbedingungen und Kompatibilität selbst; eine installierbare Erweiterung oder ein sichtbares Menü ist keine Zusage, dass jedes Modul funktioniert oder eine bestimmte Nutzung zulässig ist.

## Optionen verstehen

| Option/Aktion | Bedeutung |
| --- | --- |
| CI aktivieren | Schaltet den betreffenden Modulschacht ein oder aus; kann laufende Entschlüsselung beenden. |
| Modulmenü / MMI | Öffnet die vom Modul angebotenen Informationen, Berechtigungen und Dialoge. |
| Zurücksetzen / Initialisieren | Baut den Modulzustand neu auf. Währenddessen kann das Bild ausfallen; keine routinemäßige Maßnahme während einer Aufnahme. |
| Mehrere Sender entschlüsseln: Auto/Nein/Ja | Steuert die Behandlung paralleler Dienste. Ja erzeugt keine Mehrkanal-Fähigkeit, wenn Modul oder Anbieter sie nicht erlauben. Auto ist der normale Ausgangspunkt. |
| Hohe Bitrate: Normal/Hoch/gegebenenfalls Extra hoch | Transportstrom-Takt zum CI-Modul bei unterstützter Hardware; höhere Einstellung ist nicht pauschal besser. Bei Aussetzern mit Modulvorgaben abgleichen. |
| Nur relevante PIDs weiterleiten | Beschränkt bei unterstütztem Treiber die an das Modul geleiteten Daten. Kann Kompatibilität beeinflussen. |
| CI-Meldungen anzeigen | Steuert automatisch eingeblendete Modulmeldungen. Abschalten beseitigt die gemeldete Ursache nicht. |
| Statischen PIN verwenden / PIN | Kann einen hinterlegten **Modul-PIN** für passende CAM-Abfragen verwenden. Nicht mit Enigma2-Jugendschutz oder root-Passwort verwechseln. Den PIN nicht veröffentlichen. |
| Operator-Profil deaktivieren | Unterbindet die Verwendung des entsprechenden Anbieterprofils; nur ändern, wenn dieses Profil Probleme verursacht oder bewusst nicht genutzt werden soll. |
| Alternative CA-Behandlung | Varianten für Schließen des CA-Geräts am Programmende, versetzten Geräteindex oder beides. Kompatibilitätsoption für erfahrene Nutzer, kein universeller Empfangsgewinn. |
| CI-Verzögerung / Startverzögerung | Treiberabhängige Verzögerung beziehungsweise Wartezeit beim Start. Kann einem langsam initialisierenden Modul helfen und den Start verlängern. |
| CI+-Helper | Nur bei vorhandener Erweiterung: deren Aktivierung. Unterstützte Module und Anforderungen beim Erweiterungsanbieter prüfen. |

Die konkreten config-Namen und sichtbaren Felder stehen in der [CI-Referenz](../../einstellungen/referenz/ciselection/). Dienste-/Provider-/CAID-Zuordnungen können zusätzlich über eine installierte CI-Zuordnungserweiterung angeboten werden. Eine CAID bezeichnet ein Zugangs-/Verschlüsselungssystem, keinen persönlichen Freischaltcode. Solche Zuordnungen ersetzen keine gültige Berechtigung.

Quellen: [CI-Implementierung](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/lib/python/Screens/Ci.py) und [Prüfumfang](../../netzwerk/quellen/). Ein realer CAM-/CI+-Test ist für dieses Kapitel noch nicht erfolgt.
