---
title: "AutoDiSEqC: Satelliten an Schalterports erkennen"
description: "OpenATV: AutoDiSEqC: Satelliten an Schalterports erkennen."
---


**AutoDiSEqC prüft bekannte Testtransponder und ordnet erkannte Satelliten den Schalterports zu.** Es ist kein Blindscan und kein Messgerät, das jede weltweit vorhandene Satellitenposition findet.

## So wird die Erkennung verwendet

1. Im einfachen Tuner-Dialog den passenden Modus Einzeln, A/B oder A/B/C/D auswählen.
2. An den zu erkennenden Ports die Satellitenauswahl auf **Automatisch** setzen.
3. Falls eingeblendet, die **Auto-DiSEqC-Suchreihenfolge** bzw. Satellitengruppe passend zur Anlage auswählen. Das begrenzt die Kandidaten und verkürzt die Prüfung.
4. Mit Speichern die vorgesehene Erkennung auslösen. Sie benötigt den Tuner und kann den Empfang unterbrechen.
5. Erkannte Zuordnung kontrollieren und speichern; anschließend den normalen Sendersuchlauf durchführen.

Für Astra/Hotbird muss der Test beide angeschlossenen Ports erkennen können. Ein nicht erkannter Port beweist nicht, dass dort kein Signal liegt: Ein geänderter Testtransponder, falsche Ausrichtung oder eine ungeeignete Schalterkaskade kann die Erkennung verhindern. Trage bei bekannter Anlage die Ports dann manuell ein.

## Grenzen

Die hinterlegte Liste enthält ausgewählte Positionen und Referenzdaten. Die Software prüft neben Lock auch Sendernetz-Kennungen. Eine veraltete Referenz kann deshalb trotz nutzbaren Empfangs scheitern. **Unicable-User-Bands, PINs und Motor-Standortdaten werden damit nicht automatisch ermittelt.** Diese Werte kommen vom Anlagenbetreiber. AutoDiSEqC auf einer fremden Gemeinschaftsanlage nicht als Ersatz für dessen Anschlussdaten verwenden.

Quellstand: [OpenATV AutoDiseqc.py](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/lib/python/Screens/AutoDiseqc.py).
