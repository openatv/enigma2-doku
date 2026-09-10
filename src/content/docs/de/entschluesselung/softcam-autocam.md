---
title: "Softcam, AutoCam und Stream Relay"
description: "Softcam, AutoCam und Stream Relay – OpenATV Enigma2"
---

**Menü → Einstellungen → Entschlüsselung / Jugendschutz → Softcam-Einstellungen** steuert bereits installierte CAM-Software. Der [externe Feed](../softcam-feed/) und die passende Konfiguration sind Voraussetzungen, keine Bestandteile des Images.

## Auswählen und neu starten

Die Auswahl stammt aus vorhandenen CAM-Startskripten. **Keine / None** bedeutet, dass keine Softcam ausgewählt ist. Eine leere beziehungsweise nur aus None bestehende Auswahl ist ohne installiertes CAM-Paket normal.

- Mit Links/Rechts die gewünschte installierte Softcam wählen und mit **Grün/Speichern** übernehmen. Das kann laufende Entschlüsselung unterbrechen.
- **Gelb/Neustart**, sofern eingeblendet, startet die gewählte Softcam neu. Das ist kein Neustart von Enigma2 und keine Neuinstallation.
- **Blau/Info** öffnet bei passender Software die OSCam-/CCcam-Information oder eine angebotene zusätzliche Informationsseite.
- Die ECM-Anzeige beschreibt zuletzt verfügbare Entschlüsselungsinformationen. Alte ECM-Daten allein beweisen weder aktuellen Empfang noch eine gültige Berechtigung. Zugangsdaten, Karten-/Accountnummern und Serveradressen gehören nicht in öffentliche Fehlerbilder.

Weitere sichtbare Zeilen stehen in der [Softcam-Optionsreferenz](../../einstellungen/referenz/softcam/). Eine Softcam auswählen kann keine fehlende oder abgelaufene Empfangsberechtigung ersetzen.

## AutoCam: CAM nach Sender wählen

In **AutoCam-Einstellungen** wird die automatische Auswahl aktiviert. Lege eine Standard-Softcam fest, füge mit **Gelb** einen Sender hinzu und ordne ihm eine installierte CAM zu. **Blau** entfernt die markierte Sonderzuordnung; **Grün** speichert. Die Zuordnung erfolgt über die Servicereferenz, nicht nur über den angezeigten Sendernamen. Nach Ersetzen einer Senderliste können alte Einträge daher unpassend sein.

AutoCam schaltet beim Senderwechsel die CAM entsprechend um. Häufige CAM-Wechsel können den Bildaufbau verzögern und parallele Entschlüsselung beeinflussen. Beginne mit einer funktionierenden normalen Softcam-Konfiguration und ergänze nur benötigte Ausnahmen. AutoCam erstellt keine Aufnahme-Timer und ist nicht das Plugin AutoTimer.

## Cardserver und Informationsmenüs

Ein **Cardserver** ist bei manchen externen CAM-Konzepten ein separater Prozess. Der Menüeintrag dient dessen Auswahl und Neustart; er ist nicht für jede Softcam nötig. OSCam- und CCcam-Informationen sind Status-/Diagnoseansichten vorhandener Software. Konkrete Reader-, Karten- oder Zugangskonfigurationen gehören zur Dokumentation des jeweiligen Anbieters.

## Stream Relay und SoftCSA

**Stream Relay** führt ausgewählte Dienste über einen Streaming-Relay-Weg zur Wiedergabe zurück. Die [Stream-Relay-Referenz](../../einstellungen/referenz/streamrelay/) erläutert die Serveradresse, den Port und die Umschaltverzögerung. Eine dazu passende CAM-Konfiguration bleibt erforderlich. Die Umschaltverzögerung gibt den Tuner vor dem nächsten Dienst frei; der Umweg schafft keinen Tuner und keine Berechtigung.

**SoftCSA** betrifft bei unterstützten Geräten die softwaregestützte CSA-Verarbeitung des Transportstroms. Die [SoftCSA-Optionen](../../einstellungen/referenz/softcsa/) sind abhängig vom Image-/Hardwareangebot. Auch das ist weder ein Feed noch eine Quelle für Schlüssel oder Freischaltungen. Einstellungen nur für einen konkreten Bedarf ändern und zuerst einen einzelnen berechtigt empfangbaren Sender testen.
