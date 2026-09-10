---
title: "e2MDB – EPGRefresh einrichten"
description: "OpenATV ab 8.0: EPGRefresh einrichten. Einrichtung, Bedeutung und praktische Hinweise zu e2MDB."
---

EPGRefresh ist ein separates Plugin. Es besucht geeignete Sender, damit Enigma2 deren ausgestrahlte Programmdaten empfangen kann. e2MDB ergänzt anschließend die Ereignisse um Medieninformationen. EPGRefresh selbst benötigt keinen e2MDB-API-Key.

1. Über den OpenATV-Feed EPGRefresh installieren. Nach der Installation bei Bedarf die GUI neu starten, damit die Erweiterung vollständig registriert wird.
2. Unter „Einstellungen → EPG → EPGRefresh“ öffnen. Je nach Plugin-Einstellung gibt es auch einen Eintrag in den Erweiterungen.
3. „EPG automatisch aktualisieren“ aktivieren. Verweildauer sowie früheste und späteste Uhrzeit passend zur Senderauswahl festlegen.
4. Unter „Aktualisiere unter Verwendung von“ eine zur Box passende Methode wählen. Hauptbild kann den sichtbaren Sender wechseln; PiP oder eine Hintergrundmethode stehen nur bei passender Hardware und Konfiguration zur Verfügung.
5. Über Blau die Sender oder Bouquets festlegen. Die Auswahl im folgenden Kapitel prüfen und anschließend beide Einstellungsseiten speichern.

Als Anfangswert kann die angezeigte Verweildauer von 120 Sekunden dienen. Erst nach einem erfolgreichen Test reduzieren. Ein zu kurzer Besuch liefert unter Umständen keinen ausreichenden EPG.

**Blau lang nicht verwechseln:** Der Eintrag „EPG-Refresh jetzt aktualisieren“ im Erweiterungsmenü startet einen Lauf. Er ist nicht die Einstellungsseite. Ein erzwungener Testlauf kann laufendes Fernsehen beeinflussen.

[Zur e2MDB-Übersicht](../) · [Alle Einstellungen](../optionen/)
