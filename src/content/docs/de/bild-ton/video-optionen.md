---
title: "Videooptionen vollständig erklärt"
description: "OpenATV: Videooptionen vollständig erklärt. Einstellungen, Bedeutung, Anschlussbeispiele und Fehlersuche."
---

Diese Referenz erklärt **59 Einträge und Beschriftungsvarianten** der dynamischen Bildeinstellungen. Derselbe Konfigurationsschlüssel kann in mehreren Automatikmodi anders erscheinen; das sind nicht 59 gleichzeitig sichtbare Schalter.

**MENÜ → Einstellungen → Bild → Bildeinstellungen**. [Einrichtung und Zusammenhänge](../video/). Die englische Originalbezeichnung und der Schlüssel helfen bei der Suche. Quellvorgaben können von gespeicherten Werten oder Image-Voreinstellungen abweichen.

## Videoausgang

Original: **Video output**.

Wählt den physischen Videoausgang, zum Beispiel HDMI oder SCART, sofern vorhanden. Danach ändern sich die angebotenen Modi. Ein HDMI-Splitter ist kein zusätzlicher Box-Ausgang in dieser Liste.

Schlüssel: `config.av.videoport`.

## Automatische Auflösung

Original: **Automatic resolution**.

Aus, einfach, nativ, alle Auflösungen oder nur HD. Die Auswahl bestimmt, welche Zuordnungsfelder darunter erscheinen. Zuerst eine stabile feste Ausgabe einrichten; Details im Kapitel zur automatischen Auflösung.

Schlüssel: `config.av.autores`.

## Modus

Original: **Mode**.

Ausgabeauflösung und Scanart wählen, etwa 720p oder 1080i/p. Nur die angebotenen, von der Anschlusskette unterstützten Modi verwenden. Eine höhere Ausgabeauflösung erzeugt keine zusätzlichen Quelldetails.

Schlüssel: `config.av.videomode[config.av.videoport.value]`.

## Seitenverhältnis

Original: **Aspect ratio**.

Bildschirmseitenverhältnis, typischerweise 16:9, 4:3 oder automatisch. Zusammen mit den Regeln für abweichendes Quellformat einstellen; nicht die Skinauflösung.

Schlüssel: `config.av.aspect`.

## Nicht unterstützte Modi erlauben

Original: **Allow unsupported modes**.

Erlaubt vom Anzeigegerät nicht als unterstützt gemeldete Videomodi. Nur für eine gezielte EDID-Diagnose bei sicher bekannter Fähigkeit nutzen; sonst kann das Bild verschwinden.

Schlüssel: `config.av.edid_override`.

## Farbformat

Original: **Color format**.

Analoge Farbausgabe wie RGB, CVBS, S-Video oder YPbPr, abhängig vom Anschluss. Nicht mit dem separaten HDMI-Farbraum verwechseln. Gegenstelle muss denselben analogen Signaltyp verarbeiten.

Schlüssel: `config.av.colorformat`.

## Skalierschärfe

Original: **Scaler sharpness**.

Schärfung beim Skalieren. Zu hohe Werte erzeugen helle Konturen und verstärken Rauschen. Mit Testbild und normalem Material prüfen; keine universelle optimale Zahl.

Schlüssel: `config.av.scaler_sharpness`.

## HDMI-Farbraum

Original: **HDMI color space**.

Automatisch oder angebotene RGB-/YCbCr-Varianten, etwa 4:4:4, 4:2:2 oder 4:2:0. Die Wahl beeinflusst Farbabtastung und benötigte Übertragungsbandbreite. Auto als Ausgangspunkt; TV, AVR und Modus müssen die erzwungene Variante unterstützen.

Schlüssel: `config.av.hdmicolorspace`.

## HDMI-Farbprofile

Original: **HDMI Colorimetry**.

Auto oder angebotene Farbmetrik, beispielsweise BT.709/BT.2020. Beschreibt die Interpretation der Farbwerte. BT.2020 erzwingen macht aus SDR keinen korrekten HDR-Inhalt.

Schlüssel: `config.av.hdmicolorimetry`.

## HDMI-Farbtiefe

Original: **HDMI color depth**.

Automatisch, 8, 10 oder 12 Bit, soweit verfügbar. Mehr Bit können mehr Bandbreite benötigen. HDR, Auflösung, Bildrate und Farbabtastung gemeinsam betrachten; 12 Bit ist kein pauschales Qualitätsupgrade.

Schlüssel: `config.av.hdmicolordepth`.

## HDMI-HDR-Modus

Original: **HDMI HDR Type**.

Treiberangebot für Auto beziehungsweise HDR/HLG/SDR. Passt die Signalisierung oder Verarbeitung an. Falsches Erzwingen kann blasse oder überhelle Farben verursachen; Details im HDR-Kapitel.

Schlüssel: `config.av.hdmihdrtype`.

## HDR-OSD-Einstellung

Original: **HDR OSD adjustment**.

Passt die grafische Bedienoberfläche bei HDR-Ausgabe an. Betrifft Menüs/Einblendungen und ersetzt keine Kalibrierung des Videobildes. Angebotene Stufen sind treiberspezifisch.

Schlüssel: `config.av.hdmihdrosd`.

## HDMI-EDID-Prüfung überspringen

Original: **Bypass HDMI EDID Check**.

Umgeht eine zusätzliche HDMI-EDID-Prüfung im Treiber. Getrennt vom Freischalten nicht gemeldeter Videomodi. Nicht als Standardlösung für jeden schwarzen Bildschirm verwenden.

Schlüssel: `config.av.bypass_edid_checking`.

## Receivermodus zur Hardwaresteuerung *

Original: **Change Boxmode to control Hardware Chip Modes***.

Plattformspezifische Aufteilung von Chipfunktionen/Ressourcen. Kann verfügbare UHD-/PiP-/Decoderkombinationen ändern und einen Neustart verlangen. Nur nach passenden Angaben zum Gerät verändern; kein normaler Bildqualitätsregler.

Schlüssel: `config.av.boxmode`.

## HLG-Unterstützung

Original: **HLG Support**.

HLG-Unterstützung anhand EDID automatisch behandeln oder den angebotenen Zustand erzwingen. Nur erzwingen, wenn die gesamte HDMI-Kette passt.

Schlüssel: `config.av.hlg_support`.

## HDR10 Unterstützung

Original: **HDR10 Support**.

HDR10-Unterstützung anhand EDID automatisch behandeln oder erzwingen. Der Schalter macht weder den Bildschirm HDR-fähig noch SDR-Material zu HDR.

Schlüssel: `config.av.hdr10_support`.

## 12 Bit erlauben

Original: **Allow 12bit**.

Treiberabhängiger Bit-Tiefen-Schalter. Im geprüften Code wird der Ja/Nein-Wert an einen Pfad namens disable_12bit geschrieben. Wegen dieser abweichenden Benennung keine universelle Ja=erlaubt-Empfehlung; Standard belassen und gerätespezifisch prüfen.

Schlüssel: `config.av.allow_12bit`.

## 10 Bit erlauben

Original: **Allow 10bit**.

Entsprechender Schalter mit Treiberpfad disable_10bit. Dieselbe Einschränkung wie bei „12 Bit erlauben“; die separate HDMI-Farbtiefe ist die verständlichere erste Anlaufstelle.

Schlüssel: `config.av.allow_10bit`.

## Synchronisierungsmodus

Original: **Sync mode**.

Plattformspezifischer Synchronisationsmodus, zum Beispiel langsam/halten/schwarz. Bestimmt das Treiberverhalten bei Synchronisation. Kein Ersatz für die allgemeine Audioverzögerung.

Schlüssel: `config.av.sync_mode`.

## HLG-Unterstützung

Original: **HLG Support**.

Alternative Plattformimplementierung für HLG: aktiviert erzwingen, deaktiviert erzwingen oder durch HDMI gesteuert. Diese Auswahl ist keine allgemeine Zusage einer HDR-/SDR-Konvertierung.

Schlüssel: `config.av.amlhlg_support`.

## HDR10 Unterstützung

Original: **HDR10 Support**.

Entsprechende alternative HDR10-Auswahl: aktiviert erzwingen, deaktiviert erzwingen oder durch HDMI gesteuert. Zuerst die HDMI-gesteuerte Automatik prüfen.

Schlüssel: `config.av.amlhdr10_support`.

## Verzögerungszeit

Original: **Delay time**.

Wartezeit vor Prüfung der Quellauflösung: 0–3000 ms in 50-ms-Schritten, Quellbasis 400 ms. Zu früh können vorläufige Werte vorliegen; zu spät verlängert den Formatwechsel.

Schlüssel: `config.av.autores_delay`.

## Bildschirmmeldung der Auflösung

Original: **Automatic resolution label**.

Auflösungsanzeige deaktivieren oder 5–15 Sekunden einblenden. Ändert die sichtbare Information, nicht das Videosignal.

Schlüssel: `config.av.autores_label_timeout`.

## Immer Deinterlacer erzwingen

Original: **Force de-interlace**.

Erzwingt in passenden Automatikmodi progressive Ausgabe aus Interlaced-Material. Die Box übernimmt Deinterlacing; Bewegung und Kanten mit der TV-Verarbeitung vergleichen.

Schlüssel: `config.av.autores_deinterlace`.

## Smart1080p-Modus verwenden

Original: **Always use smart1080p mode**.

Kombiniert TV-/TS-Grundausgabe mit passenden Filmraten. Trotz Namen können andere Basisauflösungen angeboten werden. Nur zusammen mit der übrigen Automatik sinnvoll beurteilen.

Schlüssel: `config.av.smart1080p`.

## Zeige 480/576p 24fps als

Original: **Show 480/576p 24fps as**.

Zuordnung für 480/576p24-Material. Einen angebotenen Ausgabemodus wählen, den TV und AVR durchgängig unterstützen. Die Quelle wird dadurch nicht inhaltlich höher aufgelöst; unpassende Bildraten können Ruckeln erzeugen.

Schlüssel: `config.av.autores_480p24`.

## Zeige 720p 24fps als

Original: **Show 720p 24fps as**.

Zuordnung für 720p24-Material. Einen angebotenen Ausgabemodus wählen, den TV und AVR durchgängig unterstützen. Die Quelle wird dadurch nicht inhaltlich höher aufgelöst; unpassende Bildraten können Ruckeln erzeugen.

Schlüssel: `config.av.autores_720p24`.

## Zeige 1080p 24fps als

Original: **Show 1080p 24fps as**.

Zuordnung für 1080p24-Material. Einen angebotenen Ausgabemodus wählen, den TV und AVR durchgängig unterstützen. Die Quelle wird dadurch nicht inhaltlich höher aufgelöst; unpassende Bildraten können Ruckeln erzeugen.

Schlüssel: `config.av.autores_1080p24`.

## Zeige 1080p 25fps als

Original: **Show 1080p 25fps as**.

Zuordnung für 1080p25-Material. Einen angebotenen Ausgabemodus wählen, den TV und AVR durchgängig unterstützen. Die Quelle wird dadurch nicht inhaltlich höher aufgelöst; unpassende Bildraten können Ruckeln erzeugen.

Schlüssel: `config.av.autores_1080p25`.

## Zeige 1080p 30fps als

Original: **Show 1080p 30fps as**.

Zuordnung für 1080p30-Material. Einen angebotenen Ausgabemodus wählen, den TV und AVR durchgängig unterstützen. Die Quelle wird dadurch nicht inhaltlich höher aufgelöst; unpassende Bildraten können Ruckeln erzeugen.

Schlüssel: `config.av.autores_1080p30`.

## Auflösung

Original: **Resolution**.

Bildwiederholrate zum Modus, etwa 50 Hz, 60 Hz, multi oder auto, soweit angeboten. Im PC-Modus kann das Feld stattdessen eine Auflösung nennen. Bei multi/auto wählt die Implementierung passende Teilmodi; die TV-Signalanzeige zeigt die tatsächliche Ausgabe.

Schlüssel: `config.av.videorate[config.av.videomode[config.av.videoport.value].value]`.

## 4:3-Inhalt anzeigen als

Original: **Display 4:3 content as**.

Behandlung von 4:3-Material auf dem gewählten Bildschirm. Pillarbox erhält Proportionen mit seitlichen Balken; Pan&Scan/Zoom beschneidet; nichtlineare/volle Streckung verzerrt. Die angebotenen Varianten hängen vom Treiber ab.

Schlüssel: `config.av.policy_43`.

## Inhalt &gt;16:9 anzeigen als

Original: **Display &gt;16:9 content as**.

Behandlung von Breitbild beziehungsweise noch breiterem Material. Letterbox erhält das ganze Bild mit Balken; Pan&Scan/Zoom füllt durch Beschnitt. Daher kann derselbe Schlüssel je Bildschirmformat als „16:9“ oder „>16:9“ beschriftet sein.

Schlüssel: `config.av.policy_169`.

## 16:9-Inhalt anzeigen als

Original: **Display 16:9 content as**.

Behandlung von Breitbild beziehungsweise noch breiterem Material. Letterbox erhält das ganze Bild mit Balken; Pan&Scan/Zoom füllt durch Beschnitt. Daher kann derselbe Schlüssel je Bildschirmformat als „16:9“ oder „>16:9“ beschriftet sein.

Schlüssel: `config.av.policy_169`.

## Seitenverhältnis umschalten

Original: **Aspect switch**.

Aktiviert zusätzliche Letterbox-Zoom-/Versatzwerte für die Seitenverhältnisumschaltung. Sichtbare Zusatzzeilen gehören zu diesen Bildausschnitten.

Schlüssel: `config.av.aspectswitch.enabled`.

## WSS bei 4:3

Original: **WSS on 4:3**.

Breitbild-Signalisierung für analoge 4:3-Ausgabe. Hilft passenden älteren Fernsehern bei der Formatwahl; keine HDMI-HDR-Option.

Schlüssel: `config.av.wss`.

## SD anzeigen als

Original: **Show SD as**.

Fester Ausgabemodus für SD, wenn nur HD automatisch umgeschaltet wird. Beispielsweise ein angebotener 720p50-Modus; Bildrate zum Material und zur Anzeige passend wählen.

Schlüssel: `config.av.autores_sd`.

## Zeige 2160p 24fps als

Original: **Show 2160p 24fps as**.

Zuordnung für 2160p24-Material. Einen angebotenen Ausgabemodus wählen, den TV und AVR durchgängig unterstützen. Die Quelle wird dadurch nicht inhaltlich höher aufgelöst; unpassende Bildraten können Ruckeln erzeugen.

Schlüssel: `config.av.autores_2160p24`.

## Zeige 2160p 25fps als

Original: **Show 2160p 25fps as**.

Zuordnung für 2160p25-Material. Einen angebotenen Ausgabemodus wählen, den TV und AVR durchgängig unterstützen. Die Quelle wird dadurch nicht inhaltlich höher aufgelöst; unpassende Bildraten können Ruckeln erzeugen.

Schlüssel: `config.av.autores_2160p25`.

## Zeige 2160p 30fps als

Original: **Show 2160p 30fps as**.

Zuordnung für 2160p30-Material. Einen angebotenen Ausgabemodus wählen, den TV und AVR durchgängig unterstützen. Die Quelle wird dadurch nicht inhaltlich höher aufgelöst; unpassende Bildraten können Ruckeln erzeugen.

Schlüssel: `config.av.autores_2160p30`.

## Modus für SD (bis 576p)

Original: **Mode for SD (up to 576p)**.

Ausgabemodus für die SD-Quellgruppe bis 576p. Im nativen Modus dienen die SD-Felder als unterste zulässige Ausgabe. Die sichtbaren 720p-Beispielwerte sind keine Empfehlung, alle Quellen herunterzuskalieren.

Schlüssel: `config.av.autores_mode_sd[config.av.videoport.value]`.

## Bildwiederholrate für SD

Original: **Refresh rate for SD**.

Bildwiederholrate zum SD-Gruppenmodus. Erst die zugehörige Auflösung festlegen, dann eine kompatible Rate wählen. Im nativen Modus bezeichnet die SD-Rate die Rate des untersten Modus.

Schlüssel: `config.av.autores_rate_sd[config.av.autores_mode_sd[config.av.videoport.value].value]`.

## Zeige 24p bis 720p / höher als 720p mit

Original: **Show 24p up to 720p / higher than 720p as**.

Zwei Ausgaberaten für 24p: erster Wert für Quellen bis 720p, zweiter für höhere Auflösungen. Beispiel 50p/24p: kleine Quellen auf 50p, größere auf 24p. Beide Teile der Kombination prüfen.

Schlüssel: `config.av.autores_24p`.

## Zeige 25p bis 720p / höher als 720p mit

Original: **Show 25p up to 720p / higher than 720p as**.

Zwei Ausgaberaten für 25p: erster Wert für Quellen bis 720p, zweiter für höhere Auflösungen. Beispiel 50p/24p: kleine Quellen auf 50p, größere auf 24p. Beide Teile der Kombination prüfen.

Schlüssel: `config.av.autores_25p`.

## Zeige 30p bis 720p / höher als 720p mit

Original: **Show 30p up to 720p / higher than 720p as**.

Zwei Ausgaberaten für 30p: erster Wert für Quellen bis 720p, zweiter für höhere Auflösungen. Beispiel 50p/24p: kleine Quellen auf 50p, größere auf 24p. Beide Teile der Kombination prüfen.

Schlüssel: `config.av.autores_30p`.

## Bildwiederholrate

Original: **Refresh rate**.

Bildwiederholrate zum Modus, etwa 50 Hz, 60 Hz, multi oder auto, soweit angeboten. Im PC-Modus kann das Feld stattdessen eine Auflösung nennen. Bei multi/auto wählt die Implementierung passende Teilmodi; die TV-Signalanzeige zeigt die tatsächliche Ausgabe.

Schlüssel: `config.av.videorate[config.av.videomode[config.av.videoport.value].value]`.

## Automatische Scart-Umschaltung

Original: **Auto SCART switching**.

Automatisches SCART-Umschalten bei entsprechendem Anschluss/Signal. Auf reinen HDMI-Konfigurationen nicht relevant.

Schlüssel: `config.av.vcrswitch`.

## Vorschau aktivieren

Original: **Enable preview**.

Vorschau der aktuell betroffenen einfachen Automatikgruppe. Kann schon vor dem endgültigen Speichern die HDMI-Ausgabe umschalten. Nur bei gesichertem Ausgangsmodus testen.

Schlüssel: `config.av.autores_preview`.

## Modus für HD (bis 720p)

Original: **Mode for HD (up to 720p)**.

Ausgabemodus für die HD-Quellgruppe bis 720p. Im nativen Modus dienen die SD-Felder als unterste zulässige Ausgabe. Die sichtbaren 720p-Beispielwerte sind keine Empfehlung, alle Quellen herunterzuskalieren.

Schlüssel: `config.av.autores_mode_hd[config.av.videoport.value]`.

## Bildwiederholrate für HD

Original: **Refresh rate for HD**.

Bildwiederholrate zum HD-Gruppenmodus. Erst die zugehörige Auflösung festlegen, dann eine kompatible Rate wählen. Im nativen Modus bezeichnet die SD-Rate die Rate des untersten Modus.

Schlüssel: `config.av.autores_rate_hd[config.av.autores_mode_hd[config.av.videoport.value].value]`.

## Modus für FHD (bis 1080p)

Original: **Mode for FHD (up to 1080p)**.

Ausgabemodus für die FHD-Quellgruppe bis 1080p. Im nativen Modus dienen die SD-Felder als unterste zulässige Ausgabe. Die sichtbaren 720p-Beispielwerte sind keine Empfehlung, alle Quellen herunterzuskalieren.

Schlüssel: `config.av.autores_mode_fhd[config.av.videoport.value]`.

## Bildwiederholrate für FHD

Original: **Refresh rate for FHD**.

Bildwiederholrate zum FHD-Gruppenmodus. Erst die zugehörige Auflösung festlegen, dann eine kompatible Rate wählen. Im nativen Modus bezeichnet die SD-Rate die Rate des untersten Modus.

Schlüssel: `config.av.autores_rate_fhd[config.av.autores_mode_fhd[config.av.videoport.value].value]`.

## Modus für UHD (bis 2160p)

Original: **Mode for UHD (up to 2160p)**.

Ausgabemodus für die UHD-Quellgruppe bis 2160p. Im nativen Modus dienen die SD-Felder als unterste zulässige Ausgabe. Die sichtbaren 720p-Beispielwerte sind keine Empfehlung, alle Quellen herunterzuskalieren.

Schlüssel: `config.av.autores_mode_uhd[config.av.videoport.value]`.

## Bildwiederholrate für UHD

Original: **Refresh rate for UHD**.

Bildwiederholrate zum UHD-Gruppenmodus. Erst die zugehörige Auflösung festlegen, dann eine kompatible Rate wählen. Im nativen Modus bezeichnet die SD-Rate die Rate des untersten Modus.

Schlüssel: `config.av.autores_rate_uhd[config.av.autores_mode_uhd[config.av.videoport.value].value]`.

## Niedrigster Modus

Original: **Lowest Mode**.

Ausgabemodus für die SD-Quellgruppe bis 576p. Im nativen Modus dienen die SD-Felder als unterste zulässige Ausgabe. Die sichtbaren 720p-Beispielwerte sind keine Empfehlung, alle Quellen herunterzuskalieren.

Schlüssel: `config.av.autores_mode_sd[config.av.videoport.value]`.

## Bildwiederholrate für 'Niedrigster Modus'

Original: **Refresh rate for 'Lowest Mode'**.

Bildwiederholrate zum SD-Gruppenmodus. Erst die zugehörige Auflösung festlegen, dann eine kompatible Rate wählen. Im nativen Modus bezeichnet die SD-Rate die Rate des untersten Modus.

Schlüssel: `config.av.autores_rate_sd[config.av.autores_mode_sd[config.av.videoport.value].value]`.

## Unbekannte Videoauflösung anzeigen als

Original: **Show unknown video format as**.

Bei nicht zugeordnetem Quellformat den nächsten passenden oder höchsten angebotenen Modus wählen. „Höchster“ bedeutet nicht automatisch die beste Bewegungsdarstellung.

Schlüssel: `config.av.autores_unknownres`.

## Letterbox-Versatzwerte

Fünf separate Versatzwerte für die angebotenen Letterbox-Zoomstufen. Damit den Ausschnitt verschieben; Bildränder oder eingebrannte Untertitel können außerhalb liegen. Nicht mit OSD-Kalibrierung verwechseln.

Schlüssel: `config.av.aspectswitch.offsets[str(aspect)]`.

## Zeige 1080i als 1080p

Original: **Show 1080i as 1080p**.

1080i in der betreffenden Gruppe als 1080p ausgeben. Auf unterstützte Rate achten und Deinterlacing an bewegten Kanten vergleichen.

Schlüssel: `config.av.autores_1080i_deinterlace`.


[Bild und Ton](../) · [Quellen und Prüfumfang](../quellen/)
