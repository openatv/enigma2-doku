---
title: "Umbra – Alle 39 Stiloptionen"
description: "Alle 39 Stiloptionen · config.plugins.umbra · HD/FHD/WQHD"
---

Die Referenz erklärt alle 39 Stilwerte aus **Erweiterungen → Umbra**. Eigene Auswahlwerte haben Vorrang vor dem Paket. **Vom Stilpaket** beziehungsweise ein leeres RGB-Feld erbt den Paketwert. Die unten genannte Basis ist der unveränderte Graphit-Stand, keine Empfehlung für jede Gestaltung.

## Farben

### Farbwelt

Ändert die zusammengehörigen Grundfarben. Eigene RGB-Werte können einzelne Rollen übersteuern.

Auswahl: Graphit · Mitternacht · Carbon · Smaragd · Petrol · Bordeaux · Bernstein

Basis Graphit: Graphit

`config.plugins.umbra.palette`

Erklärung und Beispiele: [Farbwelt](../farben/).

### Fortschrittsfarbe

Färbt die entsprechenden Fortschritts- und Akzentanzeigen. „Skinfarbe“ nutzt die Vorgabe der Farbwelt. Ein eigenes Akzent-RGB hat Vorrang.

Auswahl: Skinfarbe · Cyan · Blau · Grün · Rot · Gold · Weiß

Basis Graphit: Skinfarbe

`config.plugins.umbra.accent`

Erklärung und Beispiele: [Fortschrittsfarbe](../farben/).

### TV-Bild hinter Details

Bereich Farben: steuert die Durchsicht zum TV-Bild hinter dafür vorgesehenen Senderdetails. „Aus“ ist dort deckend. Es ist keine globale Transparenzeinstellung für jeden Screen.

Auswahl: Aus · Dezent · Mittel · Deutlich

Basis Graphit: Mittel

`config.plugins.umbra.tvVisibility`

Erklärung und Beispiele: [TV-Bild hinter Details](../senderliste/).

### Hintergrund (RGB)

Große Hintergrundbereiche.

Auswahl: Leer oder sechs RGB-Hexziffern, optional mit #.

Basis Graphit: Leer, Farbrolle aus dem Paket beziehungsweise der Farbwelt.

`config.plugins.umbra.color_background`

Erklärung und Beispiele: [Hintergrund (RGB)](../rgb/).

### Flächen (RGB)

Flächen, Dialogteile und die Basis abgeleiteter Schatten.

Auswahl: Leer oder sechs RGB-Hexziffern, optional mit #.

Basis Graphit: Leer, Farbrolle aus dem Paket beziehungsweise der Farbwelt.

`config.plugins.umbra.color_surface`

Erklärung und Beispiele: [Flächen (RGB)](../rgb/).

### Auswahl (RGB)

Markierte Einträge und ihre abgeleiteten Verlaufsfarben.

Auswahl: Leer oder sechs RGB-Hexziffern, optional mit #.

Basis Graphit: Leer, Farbrolle aus dem Paket beziehungsweise der Farbwelt.

`config.plugins.umbra.color_selection`

Erklärung und Beispiele: [Auswahl (RGB)](../rgb/).

### Haupttext (RGB)

Hauptbeschriftungen und zentrale Texte.

Auswahl: Leer oder sechs RGB-Hexziffern, optional mit #.

Basis Graphit: Leer, Farbrolle aus dem Paket beziehungsweise der Farbwelt.

`config.plugins.umbra.color_foreground`

Erklärung und Beispiele: [Haupttext (RGB)](../rgb/).

### Nebentext (RGB)

Begleittexte und zusätzliche Informationen.

Auswahl: Leer oder sechs RGB-Hexziffern, optional mit #.

Basis Graphit: Leer, Farbrolle aus dem Paket beziehungsweise der Farbwelt.

`config.plugins.umbra.color_secondary`

Erklärung und Beispiele: [Nebentext (RGB)](../rgb/).

### Dezenter Text (RGB)

Zurückhaltende Angaben und Teile von Verläufen.

Auswahl: Leer oder sechs RGB-Hexziffern, optional mit #.

Basis Graphit: Leer, Farbrolle aus dem Paket beziehungsweise der Farbwelt.

`config.plugins.umbra.color_muted`

Erklärung und Beispiele: [Dezenter Text (RGB)](../rgb/).

### Akzent (RGB)

Eigene Akzentfarbe; übersteuert auch die gewählte Fortschrittsfarbe.

Auswahl: Leer oder sechs RGB-Hexziffern, optional mit #.

Basis Graphit: Leer, Farbrolle aus dem Paket beziehungsweise der Farbwelt.

`config.plugins.umbra.color_accent`

Erklärung und Beispiele: [Akzent (RGB)](../rgb/).

### Aufnahme-Text (RGB)

Textmarkierung laufender Aufnahmen in der Senderliste. Standard: helles Gold FFE59A.

Auswahl: Leer oder sechs RGB-Hexziffern, optional mit #.

Basis Graphit: Leer, Farbrolle aus dem Paket beziehungsweise der Farbwelt.

`config.plugins.umbra.color_recording`

Erklärung und Beispiele: [Aufnahme-Text (RGB)](../rgb/).

### Rot (RGB)

Rote Farbrolle, unter anderem Farbtasten und entsprechende Hinweise.

Auswahl: Leer oder sechs RGB-Hexziffern, optional mit #.

Basis Graphit: Leer, Farbrolle aus dem Paket beziehungsweise der Farbwelt.

`config.plugins.umbra.color_red`

Erklärung und Beispiele: [Rot (RGB)](../rgb/).

### Grün (RGB)

Grüne Farbrolle und zugehörige Farbtasten.

Auswahl: Leer oder sechs RGB-Hexziffern, optional mit #.

Basis Graphit: Leer, Farbrolle aus dem Paket beziehungsweise der Farbwelt.

`config.plugins.umbra.color_green`

Erklärung und Beispiele: [Grün (RGB)](../rgb/).

### Gelb (RGB)

Gelbe Farbrolle und zugehörige Farbtasten.

Auswahl: Leer oder sechs RGB-Hexziffern, optional mit #.

Basis Graphit: Leer, Farbrolle aus dem Paket beziehungsweise der Farbwelt.

`config.plugins.umbra.color_yellow`

Erklärung und Beispiele: [Gelb (RGB)](../rgb/).

### Blau (RGB)

Blaue Farbrolle und zugehörige Farbtasten.

Auswahl: Leer oder sechs RGB-Hexziffern, optional mit #.

Basis Graphit: Leer, Farbrolle aus dem Paket beziehungsweise der Farbwelt.

`config.plugins.umbra.color_blue`

Erklärung und Beispiele: [Blau (RGB)](../rgb/).

## Layout

### Farbverläufe

Ein verwendet Farbverläufe. Einfarbig macht die entsprechenden Flächen flach; transparente Randübergänge bleiben erhalten.

Auswahl: Ein · Einfarbig

Basis Graphit: Ein

`config.plugins.umbra.gradients`

Erklärung und Beispiele: [Farbverläufe](../layout/).

### Rundung der Auswahl

Verändert die unterstützte Auswahlrundung. Keine globale Abrundung jedes Dialogs oder Bildes.

Auswahl: Eckig · 4 px · 8 px

Basis Graphit: 8 px

`config.plugins.umbra.corners`

Erklärung und Beispiele: [Rundung der Auswahl](../layout/).

### Textgröße

Skaliert Regular-/Bold-Texte, auch in unterstützten Listentemplates. Symbole und der Radio-LCD-Font bleiben unabhängig.

Auswahl: 90 % · 95 % · 100 % · 105 %

Basis Graphit: 100 %

`config.plugins.umbra.fontScale`

Erklärung und Beispiele: [Textgröße](../layout/).

### Menübreite

Verbreitert das normale Menü. Es macht nicht alle Plugin-Screens breiter.

Auswahl: Standard · Breit

Basis Graphit: Standard

`config.plugins.umbra.menuWidth`

Erklärung und Beispiele: [Menübreite](../layout/).

### Uhr in Menüs

Blendet die Uhr in den entsprechenden Menüs ein oder aus. Die Infobar-Uhr bleibt davon unabhängig.

Auswahl: Ein · Aus

Basis Graphit: Ein

`config.plugins.umbra.showClock`

Erklärung und Beispiele: [Uhr in Menüs](../layout/).

### Stärke der Fortschrittsanzeige

Verändert unterstützte schmale Fortschritts-Widgets. Nicht jede pluginseitig erzeugte Fortschrittsgrafik folgt diesem Wert.

Auswahl: Schmal · Standard · Breit

Basis Graphit: Standard

`config.plugins.umbra.progressHeight`

Erklärung und Beispiele: [Stärke der Fortschrittsanzeige](../layout/).

## Infobar

### Ausführlicher Sendungstext

Zeigt den zusätzlichen ausführlichen Sendungstext. Fehlende EPG-Texte kann der Skin nicht ergänzen.

Auswahl: Ein · Aus

Basis Graphit: Ein

`config.plugins.umbra.eventDescription`

Erklärung und Beispiele: [Ausführlicher Sendungstext](../statussymbole/).

### Video- und Audioinformationen

Zeigt Video-/Audioangaben wie Videoformat und Audiocodec. Die Statussymbole sind davon unabhängig.

Auswahl: Ein · Aus

Basis Graphit: Ein

`config.plugins.umbra.technicalInfo`

Erklärung und Beispiele: [Video- und Audioinformationen](../statussymbole/).

### Tuner- und Signalinfos

Aus, Tuner/SNR/AGC/BER oder zusätzlich Transponderdaten. Die Werte kommen von OpenATV und vom Tuner-Treiber.

Auswahl: Aus · Tuner / SNR / AGC / BER · Mit Transponderdaten

Basis Graphit: Aus

`config.plugins.umbra.tunerInfo`

Erklärung und Beispiele: [Tuner- und Signalinfos](../statussymbole/).

### Verschlüsselungsinfos

Zeigt Verschlüsselungsstatus und verfügbare CA-Angaben. Für Details muss auch die entsprechende OpenATV-Einstellung zur Anzeige von Verschlüsselungsinfos erlauben, diese Daten anzuzeigen.

Auswahl: Aus · Ein

Basis Graphit: Aus

`config.plugins.umbra.cryptoInfo`

Erklärung und Beispiele: [Verschlüsselungsinfos](../statussymbole/).

### Wetter oben links

Aus: kein Umbra-Wetterabruf. Aktuell: Symbol und Temperatur. Mit Tageswerten: zusätzliche Tagesangaben. Mit 5-Tage-Vorschau: kommende Tage mit Symbol und Min/Max.

Auswahl: Aus · Aktuell · Mit Tageswerten · Mit 5-Tage-Vorschau

Basis Graphit: Aus

`config.plugins.umbra.weatherInfo`

Erklärung und Beispiele: [Wetter oben links](../wetter/).

### Statussymbole

Alle: inaktive Symbole erscheinen dezent. Nur aktive: nur die passenden Statusanzeigen. Aus: Statussymbolleiste aus; die Aufnahmeanzeige bleibt unabhängig.

Auswahl: Alle, inaktive dezent · Nur aktive · Aus

Basis Graphit: Alle, inaktive dezent

`config.plugins.umbra.serviceIcons`

Erklärung und Beispiele: [Statussymbole](../statussymbole/).

### Infobar-Layout

Klassische Infobar mit Picon, Cover im Hochformat oder breites Panorama. Medienvarianten benötigen e2MDB und passende Daten.

Auswahl: Klassisch · Cover · Panorama

Basis Graphit: Klassisch

`config.plugins.umbra.infobarLayout`

Erklärung und Beispiele: [Infobar-Layout](../infobar/).

### EPG-Medien

Bereich Infobar: Aus, Cover oder Panorama in den unterstützten EPG-Ansichten. Es ist eine andere Option als das Infobar-Layout.

Auswahl: Aus · Cover · Panorama

Basis Graphit: Aus

`config.plugins.umbra.epgArtwork`

Erklärung und Beispiele: [EPG-Medien](../e2mdb/).

## Kanalliste

### Medien im Detailbereich

Bereich Kanalliste: Aus, Cover oder Panorama für den dafür vorgesehenen Detailbereich. Die Galerie nutzt ihren nativen Bildprovider.

Auswahl: Aus · Cover · Panorama

Basis Graphit: Aus

`config.plugins.umbra.channelArtwork`

Erklärung und Beispiele: [Medien im Detailbereich](../e2mdb/).

### Ansicht

Details: Liste und Beschreibung. Live-TV-Fenster: Liste mit kleinem laufendem TV-Bild. Vollbild: mehr Breite für die Liste. Galerie: Kacheln. Spalten: hohe Senderspalten.

Auswahl: Details · Live-TV-Fenster · Vollbild · Galerie · Spalten

Basis Graphit: Details

`config.plugins.umbra.channelScreen`

Erklärung und Beispiele: [Ansicht](../senderliste/).

### Zeilen

Standard zeigt Sender und aktuelle Sendung. Kompakt benötigt weniger Höhe. Erweitert bietet zusätzliche Angaben. Galerie/Spalten gehören zu den entsprechenden Ansichten.

Auswahl: Standard · Kompakt · Erweitert · Galerie · Spalten

Basis Graphit: Standard

`config.plugins.umbra.channelRows`

Erklärung und Beispiele: [Zeilen](../senderzeilen/).

### Picons

Ein installierter und korrekt angebundener Picon-Satz; Beschaffung separat.

Auswahl: Ein · Aus

Basis Graphit: Ein

`config.plugins.umbra.showPicon`

Erklärung und Beispiele: [Picons](../senderzeilen/).

### Kanalnummern

Zeigt die Kanalnummer an.

Auswahl: Ein · Aus

Basis Graphit: Ein

`config.plugins.umbra.showNumber`

Erklärung und Beispiele: [Kanalnummern](../senderzeilen/).

### Empfangsart

Kennzeichnet die Empfangsart mit dem nativen Symbol.

Auswahl: Ein · Aus

Basis Graphit: Ein

`config.plugins.umbra.showServiceTypeIcon`

Erklärung und Beispiele: [Empfangsart](../senderzeilen/).

### Verschlüsselung

Zeigt das native Verschlüsselungssymbol. Dies ändert nicht die Entschlüsselung.

Auswahl: Ein · Aus

Basis Graphit: Ein

`config.plugins.umbra.showCryptoIcon`

Erklärung und Beispiele: [Verschlüsselung](../senderzeilen/).

### Picon-Seitenverhältnis

Passt den vorgesehenen Platz an das Format deines Picon-Satzes an. Die Auswahl lädt keinen neuen Satz.

Auswahl: XPicon / ZZZPicon · ZZPicon · ZPicon

Basis Graphit: XPicon / ZZZPicon

`config.plugins.umbra.piconRatio`

Erklärung und Beispiele: [Picon-Seitenverhältnis](../senderzeilen/).

### Timer anzeigen

Blendet die vom nativen Senderlistenmodell gelieferten Timerhinweise ein. Es werden dadurch keine Timer erstellt oder verändert.

Auswahl: Ein · Aus

Basis Graphit: Aus

`config.plugins.umbra.showTimers`

Erklärung und Beispiele: [Timer anzeigen](../aufnahmen/).

### Aufnahme-Markierung

Aus: keine entsprechende Markierung. Symbol: natives Aufnahmesymbol. Textfarbe: laufende Aufnahme durch die dafür vorgesehene Textfarbe kennzeichnen.

Auswahl: Aus · Symbol · Textfarbe

Basis Graphit: Textfarbe

`config.plugins.umbra.recordIndicatorMode`

Erklärung und Beispiele: [Aufnahme-Markierung](../aufnahmen/).

## Paketwahl und lokale Einstellungen

Diese sieben Felder gehören nicht zu den 39 exportierten Stilwerten:

| Feld | Bedeutung |
| --- | --- |
| `style` – Stilpaket | Mitgeliefertes oder eigenes Paket auswählen; einzelne Abweichungen bleiben vorrangig. |
| `section` – Bereich | Farben, Layout, Infobar oder Kanalliste filtern, ohne Änderungen anderer Bereiche zu verwerfen. |
| `resolution` – OSD-Auflösung | HD, FHD oder unterstütztes WQHD; keine Änderung durch Paketwechsel oder Export. |
| `weatherCity` – Wetterort | Lokaler Ortsname; erscheint bei eingeschaltetem Wetter. |
| `weatherCoordinates` – Koordinaten | Längengrad,Breitengrad mit Dezimalpunkten; Beispiel Hamburg 9.99302,53.55073. |
| `weatherProvider` – Wetterdienst | Open-Meteo oder MSN; lokale Vorgabe Open-Meteo. |
| `weatherUnit` – Einheit | Celsius oder Fahrenheit; lokale Vorgabe Celsius. |

Alle Schlüssel gehören unter `config.plugins.umbra`. Die Wetterfelder werden nicht exportiert. Die drei Medien-Stiloptionen erscheinen nur bei vorhandenem e2MDB samt Converter. [Wetter](../wetter/) und [Medien](../e2mdb/) erklären die Voraussetzungen.
