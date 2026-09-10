---
title: "DVB-S FBC – Grundlage und geplante Erweiterung"
description: "OpenATV: DVB-S FBC – Grundlage und geplante Erweiterung."
---


**FBC (Full Band Capture) kann mehrere Demodulatoren aus einem breit erfassten Eingangssignal versorgen.** Das erhöht die Zahl gleichzeitig nutzbarer Transponder/Multiplexe, hebt aber Anschluss- und Treibergrenzen nicht auf.

Dieses Kapitel wird mit einer geeigneten **DVB-S FBC-Box** um native Einstellungsbilder und geprüfte Aufnahmeszenarien erweitert. Die bisherigen Single-Tuner-Beispiele sind keine vollständige FBC-Anleitung.

Bei SAT ist entscheidend, ob klassische Ebenen über ein/zwei Kabel oder Unicable mit ausreichend zugeteilten User Bands bereitstehen. Ein konventionelles Kabel liefert weiterhin nur die gewählte Ebene; mehrere Demodulatoren können daraus passende Transponder empfangen. Interne Verbindungen, Root-Tuner und SCR-Zuteilungen werden später konkret gezeigt.

Die Erweiterung enthält Verkabelungsbilder, Eingang-/Tuner-Zuordnung, vollständige Optionsbeispiele, Parallelaufnahmen und typische Fehler. Bis dahin helfen [Anschlussgrundlagen](../verkabelung/) und [Single-Tuner-Grenzen](../single-tuner/); keine erfundenen Tunerbuchstaben oder Modellwerte übernehmen.

Quellstand: [OpenATV Satconfig.py](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/lib/python/Screens/Satconfig.py).
