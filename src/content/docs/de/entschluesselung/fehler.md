---
title: "Verschlüsselter Sender bleibt dunkel"
description: "Verschlüsselter Sender bleibt dunkel – OpenATV Enigma2"
---

Arbeite vom Empfang zur Berechtigung. Ein schwarzes Bild kann durch fehlendes Signal, eine falsche Servicereferenz, fehlende Rechte, ein CAM-Problem oder eine Wiedergabestörung entstehen.

| Prüfung | Nächster Schritt |
| --- | --- |
| Freier Sender auf derselben Empfangsanlage funktioniert nicht | [Empfangsdiagnose](../../tuner/signaldiagnose/), Tunerbelegung und Senderdaten prüfen. |
| Nur ein verschlüsseltes Angebot fehlt | Anbieterberechtigung, Karten-/Modulstatus und richtige Kanalversion prüfen. |
| Softcam-Auswahl enthält nur None | Externes Paketangebot und Installation prüfen; OpenATV liefert keine CAM mit. |
| CAM läuft, aber keine aktuelle Entschlüsselung | Status beim Paket-/Kartenanbieter prüfen. Prozessstatus allein beweist keinen funktionierenden Reader und keine Berechtigung. |
| Ein Sender geht, ein zweiter parallel nicht | Tunergrenzen sowie Mehrfachentschlüsselung von Modul/Karte/Anbieter prüfen. |
| Bild fällt erst nach Senderwechsel aus | AutoCam-Zuordnung, CAM-Wechsel und ggf. Stream-Relay-Konfiguration prüfen. |
| PIN-Dialog erscheint | Enigma2-Jugendschutz und Modul-PIN unterscheiden; nicht jede Sperre ist ein Empfangsfehler. |
| Nach Update/Flash funktioniert das externe Paket nicht | Kompatibilität und Anbieterhinweise für genau diese Image-Version prüfen. |

Vor CAM-Neustart oder Modul-Reset laufende Aufnahmen berücksichtigen. Für eine Fehlermeldung Image-Version, Software-/Modulversion, Sender, Empfangsweg und einen reproduzierbaren Ablauf angeben. Keine Schlüssel, Zugangsdaten, Kartenseriennummern oder vollständigen privaten CAM-Konfigurationen veröffentlichen. OpenATV-Fehler gehören zu den [passenden Supportwegen](../../hilfe/fehler-melden/); externe Softcam-Probleme zum jeweiligen Anbieter.
