---
title: Tuner und Sendersuche
description: Die Tuner-Konfiguration finden, Empfang vorbereiten und in openATV einen automatischen Sendersuchlauf durchführen.
---

Die Tuner-Konfiguration legt fest, wie openATV deinen Empfangsanschluss nutzt. Eine Sendersuche findet anschließend die darüber verfügbaren Sender. Eine installierte Senderliste allein ersetzt keine passende Tuner-Konfiguration.

## Tuner konfigurieren

**Menü → Einstellungen → Empfang → Tuner**

1. Wähle den Tuner, an dem der Empfang eingerichtet werden soll.
2. Öffne seine Konfiguration mit <kbd>OK</kbd>.
3. Wähle die zu deinem Anschluss passende Konfiguration. Welche Werte erforderlich sind, hängt von der angeschlossenen Empfangsanlage beziehungsweise dem Anbieter ab.
4. Trage die benötigten Angaben ein und lies die Hilfe zur jeweiligen Zeile. Speichere anschließend.

| Einstellungsthema | Was du dafür wissen musst |
| --- | --- |
| Konfigurationsmodus | Wie der Anschluss verwendet wird; „nicht eingerichtet“ aktiviert keinen nutzbaren Empfang für diesen Anschluss |
| Satellit / Empfangsposition | Welche Positionen an deinem Anschluss tatsächlich bereitstehen |
| Anbieter / Suchparameter | Die Angaben deines Kabel- oder terrestrischen Anbieters, soweit der Dialog sie benötigt |
| Weitere Tuner | Ob und wie sie angeschlossen sind; Werte nicht allein wegen gleicher Bezeichnungen kopieren |

Spezielle Empfangsanlagen werden später in Anhängen behandelt. Für die Grundanleitung ist entscheidend, die Daten der eigenen Installation zu verwenden.

## Automatischen Suchlauf starten

**Menü → Einstellungen → Empfang → Automatischer Suchlauf**

1. Prüfe, welche eingerichteten Empfangswege beziehungsweise Tuner durchsucht werden sollen.
2. Lies die Optionen zur Behandlung vorhandener Sender. Starte keinen Löschvorgang, wenn du bestehende Listen behalten möchtest.
3. Starte den Suchlauf mit der beschrifteten Aktion und warte auf den Abschluss.
4. Prüfe die Anzahl gefundener Sender und öffne danach die Senderliste.
5. Wähle einen verfügbaren, frei empfangbaren Sender zum Test.

## Ergebnis prüfen

- **Keine Sender gefunden:** Empfangsanschluss und Tuner-Konfiguration prüfen. Eine erneute Suche mit denselben unpassenden Werten behebt das nicht.
- **Sender vorhanden, aber kein Bild:** Prüfe einen frei empfangbaren Sender und dessen Verfügbarkeit. Ein Listeneintrag bedeutet nicht, dass der Sender am aktuellen Anschluss empfangbar ist.
- **Sender schwer zu finden:** [Senderlisten und Bouquets](../../settings/senderlisten/) helfen beim Ordnen.

Die **allgemeinen Tunereinstellungen** sind ein eigener Bereich neben der Anschlusskonfiguration. [Diese Optionen nachschlagen](../../einstellungen/referenz/tuner/).

Quellen: [Tuner-Dialoge](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/lib/python/Screens/Satconfig.py), [Sendersuche](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/lib/python/Screens/ScanSetup.py).
