---
title: Umbra – Menüs, schmale Infobar und zweite Infoleiste
description: MENU nochmals drücken, horizontale Menüs, InfoBarLite, zweite INFO-/ECM-Seite und Infoleisten-EPG in Umbra verstehen.
---

**MENU → nochmals MENU** öffnet die allgemeinen OpenATV-OSD-Einstellungen. Sie bleiben auch bei Umbra der Ort für Menüausrichtung, Infobar-Verhalten und weitere Bedienoptionen. Das Umbra-Plugin ergänzt die Gestaltung.

## Welche Einstellung gehört wohin?

| OpenATV | Umbra |
| --- | --- |
| Vertikale oder horizontale Menüs, Reihenfolge und ausgeblendete Einträge | Farben, Auswahl, Schriften und Gestaltung der jeweiligen Menüansicht |
| Einblenddauer, OK-Folge, Anzeige bei Sender-/Sendungswechsel und Ausblenden | Klassisch/Cover/Panorama der vollen Infobar |
| Schmale Infoleiste und zweite INFO-/ECM-Seite | Layout der bereitgestellten Screens |
| Picons, Zeitformate und Freigabe von Verschlüsselungsinformationen | Wetter, Artwork, Statussymbole und optionale Diagnosezeilen |

## Vertikale und horizontale Menüs

Das normale Menü bleibt vertikal nutzbar. Ab Umbra 0.4.19 zeigt das horizontale Menü eine kompakte Reihe aus fünf Kacheln am unteren Rand, mit eigener Informations- und Tastenleiste. Weitere Einträge werden durch Navigation erreicht. Die nativen Anzeigearten mit Text, Nummern, Bildern oder Kombinationen sowie Sortieren und Ausblenden bleiben OpenATV-Funktionen.

Die **Menübreite** im Umbra-Plugin betrifft das normale Menü. Sie ist keine globale Breitenänderung für jeden Plugin-Dialog. [Menüoptionen & OSD](../../../erste-schritte/menue-anpassen/) erklärt die Bedienung und Farbtasten im Bearbeitungsmodus.

## Schmale Infoleiste

Ab Umbra 0.4.21 steht eine eigene **InfoBarLite** bereit. Bei aktivierter nativer Option zeigt der erste OK-Druck eine schmale Leiste mit Picon, Sender, Sendung, Fortschritt, Restzeit, Uhr und Aufnahmeindikator. Die vollständige Beschreibung, Artwork, Wetter sowie Tuner-/CA-Zeilen gehören zur vollen Infobar und fehlen hier bewusst. Ihre Einstellungen bleiben gespeichert.

Farben, Textgröße und Fortschrittsstärke aus Umbra gelten weiter. Das Umschalten der nativen Lite-Option kann einen GUI-Neustart verlangen. Welche Seite der nächste OK-Druck öffnet, hängt von deiner OpenATV-Konfiguration ab.

## Zweite INFO- oder ECM-Seite

Ab Umbra 0.4.20 sind die zusätzlichen Seiten gestaltet:

- **Aus:** keine zweite Seite.
- **Sendungsinformationen:** native Ereignisdetails.
- **Zweite InfoBar INFO:** ausführliche Ereignisübersicht mit Picon und nächster Sendung.
- **Zweite InfoBar ECM:** Ereignisübersicht mit zusätzlichem CA-/ECM-Bereich.

Für CA-Details muss die globale OpenATV-Anzeige von Verschlüsselungsinformationen erlaubt sein. Frei empfangbare Sender haben keine aktiven Entschlüsselungsdaten. Die Option **Verschlüsselungsinfos** in Umbra steuert die Diagnosezeile der ersten Infobar und ersetzt diese globale Einstellung nicht.

## Infoleisten-EPG

Ab Umbra 0.4.22 erscheinen Text- und grafisches Infoleisten-EPG als kompakte Leisten unten. Das TV-Bild bleibt darüber sichtbar. Navigation, Farbtasten und die native Zeilenwahl bleiben erhalten. Normale Vollbild-EPGs sind davon unabhängig. Die Auswahl über INFO, EPG und Langdruck steht unter [EPG-Tasten](../../../epg/tasten/).

Diese Ergänzungen setzen einen passenden Umbra- und OpenATV-Stand voraus. Die vollständige Infobar funktioniert weiterhin mit [Klassisch, Cover oder Panorama](../infobar/); die Varianten sind keine Alternativen zum separat gewählten EPG-Tastenziel.
