---
title: "Quellen und Prüfumfang: Netzwerk und Zugang"
---

Stand: **10. September 2026**. Der Bereich ergänzt 21 Kapitel je Sprache: sechs zu Entschlüsselung/Jugendschutz, sieben zu Netzwerkaufgaben, sieben zu OpenWebif und diese Quellenseite. Vorhandene LAN-, NFS-, SMB-, Passwort- und Freigabekapitel bleiben erhalten und sind verknüpft.

## Quellen

- Enigma2-Dokumentationsstand: `fdc9347241245fd18fd0b8bc93727237189c916c`. Die geprüften Netzwerk-, CI-, CAM- und Jugendschutz-Pythondateien stimmen mit der Paketrevision `c446c39a38957950de9989538e87c6278d2470cc` der Testinstallation überein. Die zwei Abweichungen in den gesamten XML-Dateien betreffen den Paketquellen-Menüaufruf und einen Umbra-Picon-Schalter, nicht diese Netzwerkkapitel.
- [Netzwerkadapter und DNS](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/lib/python/Screens/NetworkSetup.py), [Dienstedialoge](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/lib/python/Screens/NetworkServices.py), [22 Dienste](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/data/networkdaemons.xml).
- [Jugendschutz](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/lib/python/Components/ParentalControl.py), [CI](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/lib/python/Screens/Ci.py), [Softcam-Menüs](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/lib/python/Screens/SoftcamSetup.py).
- OpenWebif **2.4.0**, Commit `cacd3f69d065fb0eae326aebf456273dc957d2fa`, passend zum installierten Paket. Die SHA-256 der [setup.xml mit 23 Feldern](https://github.com/oe-alliance/OpenWebif/blob/cacd3f69d065fb0eae326aebf456273dc957d2fa/plugin/setup.xml) stimmt mit der Box überein.
- Der [externe Feed](../../entschluesselung/softcam-feed/) wurde nur heruntergeladen und gelesen. Der HTTP-Aufruf leitete zu SusanOV/softcamfeed auf GitHub weiter; HTTPS auf dem ursprünglichen Host ergab 404. Skriptumfang 3949 Byte, SHA-256 `022d29264ff1ed566a22b909485222852ca7484975cea3d3a3d7c6370dcc2c1b`. Ein Hash dokumentiert diesen Abruf, keine allgemeine Vertrauensbewertung.

## Aufnahmen und Grenzen

26 native DE/EN-Bilder zeigen echte Formulare mit gestoppter Wiedergabe und Bootlogo. 16 zusätzliche Browserbilder zeigen Classic/Modern, Sender, Aufnahmen, Timer, Einstellungen und die installierten Editoren. Native Beispielwerte für IP, DNS, Jugendschutz und HTTPS wurden nicht gespeichert. Die Browserbilder wurden ohne Zappen, Formularspeicherung, Paketinstallation oder Dateiveränderung erfasst.

Keine Softcam und kein externer Feed wurden installiert. CI+/CAM-Betrieb, VPN, DNSCrypt und sämtliche optionalen Server wurden nicht vollständig funktional getestet. Ein sichtbarer Menüpunkt wird nicht als Kompatibilitätsnachweis gewertet. Die [WLAN-Konfigurationsanleitung](../wlan/) wurde um native Adapter- und Profilbilder ergänzt; sie erklärt mehrere Profile, WPA3 und die Abgrenzung zu Enterprise. Für [FBC](../../tuner/fbc-sat/) gibt es ebenfalls native Konfigurationsbilder und neue Verkabelungszeichnungen. Diese Serien belegen die Einrichtung, keine RF- oder WLAN-Verbindungstests.

Nach den GUI-Sprachwechseln wurden Deutsch und die ursprünglichen Automatikeinstellungen wiederhergestellt. Netzwerkadressen, ausgewählte Konfiguration und erfasste Netzwerkpakete sind unverändert. 75 der 76 erfassten geschützten Pfadzustände (Dateihash beziehungsweise nicht vorhanden) einschließlich Timer, Senderlisten, Mounts, root-Kontodateien und e2MDB stimmen per Hash überein; nur die gesamte Enigma2-settings-Datei wurde durch die GUI neu geschrieben. Der Aufnahmehelfer hat 42 bestandene Tests. Passwörter, PINs und API-Schlüssel sind in den veröffentlichten Bildern nicht sichtbar.

Die maschinenlesbaren Quellen und Bildprüfungen liegen im Dokumentationsrepository unter `data/network-security-sources.json`, `data/network-services.json`, `data/openwebif-settings.json`, `data/captures-review.json` und `data/openwebif-captures-review.json`.
