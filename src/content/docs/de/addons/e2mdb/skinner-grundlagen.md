---
title: "e2MDB – Anhang D Grundlagen für Skinner"
description: "OpenATV ab 8.0: Anhang D Grundlagen für Skinner. Einrichtung, Bedeutung und praktische Hinweise zu e2MDB."
---

Das Plugin liefert den Converter E2MDBEventInfo. Er liest bereits bereitgestellte Metadaten aus seiner Quelle. Der Skin ruft weder einen Internetanbieter noch SQL-Abfragen auf. Damit lassen sich optionale Cover-, Backdrop- und EPG-Ansichten im jeweiligen Skin aufbauen.

## Die Quelle muss zum Bildschirm passen

Die Skin-XML-Beispiele gehören ausdrücklich zu dieser Anleitung:

- [Cover und InfoLine mit `E2MDBEventInfo`](../skinner-bilder/)
- [Picon-Ersatz mit `HasCover` und `ConditionalShowHide`](../skinner-bilder/#eine-fläche-nur-bei-vorhandenem-cover-zeigen)
- [Optionale Panels und Umschaltung zwischen Basis- und Medienansicht](../skinner-panels/)
- [Native Senderlisten-Vorlage mit `ImageOrPicon1`](../skinner-listen/)

Die Beispielnamen sind frei gewählte Namen eines Skins. Die XML-Verträge und die zugehörigen Erklärungen gelten unabhängig von dessen Produktnamen.

| Kontext | Quelle oder Datenweg |
| --- | --- |
| Live-TV-InfoBar | session.Event_Now für das aktuelle Ereignis, sofern die InfoBar-Integration aktiv ist. |
| EPG oder Senderauswahl | Event, sofern der betreffende Screen diese Quelle mit e2MDB-Metadaten versorgt. |
| Medieninformationen | Die vom jeweiligen Screen angebotene Ereignis- oder Metadatenquelle. Nicht pauschal die Live-TV-Quelle verwenden. |
| Native ServiceList | Ereignisbezogene Template-Indizes wie Image1 und ImageOrPicon1. Das ist ein anderer Vertrag als ein einzelnes Converter-Widget. |
| Plugin-eigene Quellen | Direkte Pixmap- oder Textquellen nur mit den tatsächlichen Namen aus dem Screen benutzen. |

Ein source="Event" erzeugt noch keine Metadaten. Die Quelle muss getMeta bereitstellen beziehungsweise durch die e2MDB-Integration angereichert werden. Ein beliebiger StaticText oder eine reine Service-Referenz lässt sich nicht durch Umbenennen in eine vollständige Medienquelle verwandeln.

## e2MDB als optionale Skin-Erweiterung

- Plugin und Converter vor dem Einbinden prüfen. Feedpakete können nur .pyc statt .py enthalten.
- Die normale Skinansicht ohne e2MDB vollständig nutzbar lassen.
- Mediendatenbank und Live-/EPG-Grundschalter beachten; für InfoBar und Senderauswahl zusätzlich deren eigene Schalter.
- Die Verfügbarkeitsprüfung vor dem Laden des Converters ausführen. Ein ConditionalShowHide allein verhindert keinen Importfehler bei fehlendem Plugin.
- Gespeicherte Styleoptionen dürfen nach Deinstallation nicht zu einem unlesbaren Screen führen.

Ein Skin kann hierfür einen Basis- und einen Medien-Panel definieren und sie mit einer Bedingung auswählen. Wiederholte Bestandteile bleiben Panels oder Templates. Die folgenden Ausschnitte zeigen dieses Prinzip als XML; sie sind keine vollständige skin.xml.

Bei einer Portierung Quellen, Attribute und Template-Indizes gegen den verwendeten OpenATV-Stand prüfen. Insbesondere Bezeichnungen aus älteren Mediadatabase-Skins nicht ungeprüft übernehmen.

[Zur e2MDB-Übersicht](../) · [Alle Einstellungen](../optionen/)
