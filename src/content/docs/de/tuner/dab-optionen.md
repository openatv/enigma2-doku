---
title: "DAB+: Optionsreferenz"
description: "OpenATV: DAB+: Optionsreferenz."
---


Diese Referenz erfasst die Formularvarianten des geprüften Quellstands. Abhängig von Hardware und Auswahl erscheint nur ein Teil davon. Gleich benannte Felder können an mehreren Stellen vorkommen. **Die technischen Ausdrücke sind Suchhilfen aus dem Quellcode, keine Befehle zum Einfügen in die Box.** `nim` bezeichnet einen Tuner, `currLnb` das gewählte LNB-Profil, `Sat` die Satellitenzuordnung. Konfiguriere über das Menü.

[Zur Empfangsübersicht](../) · [Verkabelungsbilder](../verkabelung/)

Die acht folgenden Grundfelder werden durch dynamische Satelliten-Häkchen, eine gegebenenfalls angebotene DVB-Treibersperre und USB-Diagnosezeilen ergänzt. Diese variablen Einträge sowie die Aktualisieren-Aktion erklärt das [DAB+-Kapitel](../dabplus/#alle-einstellungen); sie sind keine acht weiteren universellen Setup-Schlüssel.

## RTLSDR

<h3 id="rtlsdr-1">DAB+-Slideshow anzeigen</h3>

**English:** Show DAB+ slideshow

<p>Übertragene Bilder der DAB+-Station statt des statischen Radiohintergrunds anzeigen.</p>

`config.dab.slideshow`

<h3 id="rtlsdr-2">Empfangsquellen durchsuchen</h3>

**English:** Reception sources to scan

<p>USB-Tuner, verfügbare DAB+-Satellitenfeeds oder beide durchsuchen.</p>

`config.dab.scanSource`


## RTLSDRSetup

<h3 id="rtlsdrsetup-1">DAB+-Modus aktivieren</h3>

**English:** Enable DAB+ mode

<p>Gewählten RTL-SDR für DAB+ aktivieren. DVB-T und DAB+ können denselben Empfänger nicht gleichzeitig verwenden.</p>

`config.dab.rtlsdr.enabled`

<h3 id="rtlsdrsetup-2">Tuner auswählen</h3>

**English:** Select tuner

<p>Den für DAB+ zu verwendenden RTL-SDR-USB-Tuner auswählen.</p>

`config.dab.rtlsdr.device`

<h3 id="rtlsdrsetup-3">Scanregion</h3>

**English:** Scan region

<p>USB-Suche auf die in dab.xml für diese Region definierten DAB-Blöcke begrenzen.</p>

`config.dab.rtlsdr.region`

<h3 id="rtlsdrsetup-4">Automatische Verstärkung</h3>

**English:** Automatic gain

<p>RF-Verstärkung automatisch vom Tuner auswählen lassen.</p>

`config.dab.rtlsdr.automaticGain`

<h3 id="rtlsdrsetup-5">RF-Verstärkung</h3>

**English:** RF gain

<p>Position im unterstützten Verstärkungsbereich; das Backend wählt den nächsten verfügbaren Schritt.</p>

`config.dab.rtlsdr.gain`

<h3 id="rtlsdrsetup-6">Frequenzkorrektur</h3>

**English:** Frequency correction offset

<p>Oszillatorabweichung für besseren DAB+-Empfang gezielt korrigieren.</p>

`config.dab.rtlsdr.ppm`

Ergänzend: [Unicable](../unicable/), [manuelle Suche](../manueller-suchlauf/), [ABM](../autobouquetsmaker/) und [DAB+](../dabplus/).

Quellen und Prüfumfang: [Empfang](../quellen/).
