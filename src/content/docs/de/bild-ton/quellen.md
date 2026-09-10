---
title: "Bild und Ton: Quellen und Prüfumfang"
description: "OpenATV: Bild und Ton: Quellen und Prüfumfang. Einstellungen, Bedeutung, Anschlussbeispiele und Fehlersuche."
---

Die Erklärungen wurden mit OpenATV Enigma2 **`c446c39a38`** abgeglichen, passend zum Paketstand der Testinstallation. Die vollständige Revision, SHA-256 der ausgewerteten Dateien und Feldzuordnungen stehen im Repository unter `data/av-settings.json`.

- [VideoSetup / automatische Auflösung](https://github.com/openatv/enigma2/blob/c446c39a38/lib/python/Screens/VideoMode.py)
- [AVSwitch: Auswahlwerte und Treiberanbindung](https://github.com/openatv/enigma2/blob/c446c39a38/lib/python/Components/AVSwitch.py)
- [Audio-, CEC-, OSD- und Sprachfelder](https://github.com/openatv/enigma2/blob/c446c39a38/data/setup.xml)
- [CEC-Setup](https://github.com/openatv/enigma2/blob/c446c39a38/lib/python/Screens/HDMICEC.py) und [CEC-Steuerung/Logs](https://github.com/openatv/enigma2/blob/c446c39a38/lib/python/Components/HdmiCec.py)
- [Tonspurauswahl](https://github.com/openatv/enigma2/blob/c446c39a38/lib/python/Screens/AudioSelection.py), [Lautstärke und Senderzuordnung](https://github.com/openatv/enigma2/blob/c446c39a38/lib/python/Screens/VolumeControl.py)
- [OSD-Kalibrierung](https://github.com/openatv/enigma2/blob/c446c39a38/lib/python/Screens/OSDCalibration.py), [Bildoptimierung](https://github.com/openatv/enigma2/blob/c446c39a38/lib/python/Plugins/SystemPlugins/VideoEnhancement/plugin.py)

HDMI-/Dolby-Grundlagen und die Unterscheidung des AVR-Standby-Passthrough sind in den betreffenden Kapiteln mit Hersteller-/Standardquellen verlinkt. Die dort genannten Geräte dienen als Quelle für die Begriffe, nicht als Kaufempfehlung oder Einschränkung der Anleitung auf ein Modell.

## Was praktisch geprüft wurde

26 neue native Bilder: je Sprache drei Videoansichten, Audioformate, Audiodelay, Lautstärkeanpassung, Sprachauswahl, vier CEC-Ansichten, OSD-Kalibrierung und Bildoptimierung. Die Serie verwendet MetrixHD, die jeweilige GUI-Sprache und das Bootlogo bei gestoppter Wiedergabe.

AV-/CEC-Formulare verwenden für die Aufnahme abgetrennte Werte ohne Treiber-Notifier. Aktiviertes CEC und eine Wiederholung sind **ungespeicherte Ansichtswerte**, keine Änderung des CEC-Busses. Auch die einfache Auflösungsautomatik und der Lautstärkeoffset wurden nicht angewendet. Die sichtbaren 720p-Gruppenvorgaben der Automatik sind keine Empfehlung für alle Quellen. Die HDMI-Ausgabe blieb 1080p50.

Erfasste AV-, CEC-, Skin-, OSD-, Bildregler- und Automatikwerte sowie geschützte Timer-/Mount-/e2MDB-Dateien stimmen vor/nach der Serie überein. Die deutsche GUI wurde wiederhergestellt. Die Bilder sind einzeln geprüft; einzelne hardwareabhängige Felder fehlen auf dieser Box und werden anhand des Quellcodes erklärt.

Nicht als vollständig praktisch geprüft gelten die akustische Ausgabe sämtlicher Codecs, CEC-Ein-/Ausschaltzyklen mit unterschiedlichen TVs/AVRs, ARC/eARC, HDR-Bildqualität, Bluetooth-Kopplung oder eine Kalibrierung am physischen TV. Hier liefert die Anleitung nachvollziehbare Einrichtungs- und Diagnosewege statt einer pauschalen Kompatibilitätszusage.


[Bild und Ton](../) · [Quellen und Prüfumfang](../quellen/)
