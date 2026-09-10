---
title: "e2MDB – Anhang E Cover und Text einbinden"
description: "OpenATV ab 8.0: Anhang E Cover und Text einbinden. Einrichtung, Bedeutung und praktische Hinweise zu e2MDB."
---

Dieser Ausschnitt gehört in einen bereits durch eine Verfügbarkeitsbedingung geschützten Medien-Panel. Koordinaten sind ein HD-Beispiel. Die Schrift „Regular“ muss im Skin registriert sein.

```xml
<widget source="session.Event_Now" render="Pixmap"
    position="24,417" size="132,198" zPosition="3"
    transparent="1" alphatest="blend"
    scaleFlags="centerScaled">
  <convert type="E2MDBEventInfo">Cover</convert>
</widget>

<widget source="session.Event_Now" render="Label"
    position="198,440" size="1048,29"
    font="Regular;17" foregroundColor="#00ffffff"
    transparent="1" valign="center" noWrap="1">
  <convert type="E2MDBEventInfo">InfoLine</convert>
</widget>
```

## Eine Fläche nur bei vorhandenem Cover zeigen

Das normale Picon kann als untere Ebene stehen bleiben. Erst wenn ein Cover verfügbar ist, deckt eine passende Fläche das Picon einschließlich der freien Bildränder ab. Darüber wird das Cover gezeichnet. Dadurch bleibt ein sinnvoller Ersatz sichtbar, wenn kein Cover existiert.

```xml
<widget source="session.Event_Now" render="FixedLabel"
    text="" position="24,417" size="132,198"
    font="Regular;17" backgroundColor="#00171d21"
    transparent="0" zPosition="2">
  <convert type="E2MDBEventInfo">HasCover</convert>
  <convert type="ConditionalShowHide" />
</widget>
```

Die Fläche und das Cover müssen dieselbe Geometrie besitzen. Das normale Picon bleibt darunter, zum Beispiel auf zPosition=1. Fehlt es auf dieser Fläche vollständig, kann ein leerer Zustand weiterhin nötig sein. Nicht ein veraltetes Cover der vorherigen Sendung stehen lassen.

## Bildformate nicht verwechseln

Für Hochformat Cover verwenden. Für breite Motive Backdrop, Image oder Preview entsprechend dem gewünschten Fallback wählen. centerScaled hält das Seitenverhältnis. Ein Poster in einen breiten Bereich zu strecken verschlechtert die Darstellung und ist kein Ersatz für einen echten Backdrop.

HD, FHD und WQHD mit festen Seitenverhältnissen planen. Größere Auflösung kann mehr Inhalt zeigen, statt nur alles zu vergrößern. Textlängen, fehlende Bilder, schnelle Senderwechsel und den letzten sichtbaren Listeneintrag in jeder Auflösung prüfen.

[Zur e2MDB-Übersicht](../) · [Alle Einstellungen](../optionen/)
