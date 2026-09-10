---
title: "e2MDB – Anhang F Panels sicher einschalten"
description: "OpenATV ab 8.0: Anhang F Panels sicher einschalten. Einrichtung, Bedeutung und praktische Hinweise zu e2MDB."
---

Ein optionaler Panel wird nur eingebunden, wenn beide Module vorhanden und die benötigten Funktionen aktiviert sind. Die Prüfung berücksichtigt .py und .pyc. In einer fertigen InfoBar bleibt außerhalb des optionalen Panels die normale Picon- und Textdarstellung erhalten.

```xml
<panel name="MyE2MDBInfoBar" condition="
  (isfile('/usr/lib/enigma2/python/Plugins/Extensions/e2MDB/plugin.py')
   or isfile('/usr/lib/enigma2/python/Plugins/Extensions/e2MDB/plugin.pyc'))
  and
  (isfile('/usr/lib/enigma2/python/Components/Converter/E2MDBEventInfo.py')
   or isfile('/usr/lib/enigma2/python/Components/Converter/E2MDBEventInfo.pyc'))
  and config.plugins.e2mdb.enableDatabase.value
  and config.plugins.e2mdb.epgMetaEnabled.value
  and config.plugins.e2mdb.epgInfoBarEnabled.value
" />
```

MyE2MDBInfoBar ist hier ein vom Skin definierter Panelname. Der Panel muss unter diesem Namen existieren und kann die Widgets aus Anhang E enthalten. Das Beispiel ergänzt eine Basisansicht und benötigt keine Änderung am Plugin.

## Zwei vollständige Varianten

Wenn sich nicht nur ein Bild, sondern der ganze Aufbau ändert, kann der Skin zwei Panels definieren: MyBase_InfoBar und MyMedia_InfoBar. Der Medien-Panel erhält die positive Bedingung. Der Basis-Panel erhält dieselbe Bedingung mit dem vom Skinparser unterstützten vorangestellten Ausrufezeichen zur Umkehrung. Die vollständige Bedingung muss auf beiden Seiten übereinstimmen.

Für die Senderauswahl den letzten Schalter durch config.plugins.e2mdb.epgChannelSelectionEnabled.value ersetzen. Für andere Screens nur die tatsächlich erforderlichen Schalter verwenden. Eine Medien-EventView ist nicht automatisch eine Live-TV-InfoBar.

## Bedingung und Bildstatus trennen

| Prüfung | Zeitpunkt und Zweck |
| --- | --- |
| Plugin und Converter vorhanden | Vor dem Laden des optionalen Panels. Verhindert Abhängigkeiten auf nicht installierte Module. |
| Funktion eingeschaltet | Entscheidet, ob der Medienaufbau gewünscht und nutzbar ist. |
| HasCover oder HasBackdrop | Reagiert auf Daten des aktuellen Ereignisses; steuert zum Beispiel Flächen oder Beschriftungen. |
| Leerer Ereigniswechsel | Muss das alte Bild und den alten Text entfernen, bis neue Daten verfügbar sind. |

Ein bloßes HasMetadata ist keine Garantie für ein fertiges Bild oder eine erfolgreiche Providerzuordnung. Dafür die konkrete Bildprüfung beziehungsweise das benötigte Textfeld verwenden.

[Zur e2MDB-Übersicht](../) · [Alle Einstellungen](../optionen/)
