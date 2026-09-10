---
title: "e2MDB \u2013 Skinner: covers and text"
description: "OpenATV 8.0+: Skinner: covers and text. Detailed e2MDB instructions, purpose and practical examples."
---

Place this example inside a media panel protected by the [availability condition](../skinner-panels/). Coordinates are an HD example; **Regular** must be a registered skin font.

~~~xml
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
~~~

## Show a background only when a cover exists

The normal picon can remain on a lower layer. When a cover exists, a matching solid area hides the picon, including empty image margins, and the cover is drawn above it. This keeps a meaningful fallback when no cover is available.

~~~xml
<widget source="session.Event_Now" render="FixedLabel"
    text="" position="24,417" size="132,198"
    font="Regular;17" backgroundColor="#00171d21"
    transparent="0" zPosition="2">
  <convert type="E2MDBEventInfo">HasCover</convert>
  <convert type="ConditionalShowHide" />
</widget>
~~~

The background and cover need identical geometry. Keep the normal picon underneath, for example at `zPosition="1"`. If neither image is available, allow an empty state. Never leave the previous programme's cover visible as a fallback.

## Respect image aspect ratios

Use **Cover** for portrait posters. For wide areas choose **Backdrop**, **Image** or **Preview**, according to the intended fallback. **centerScaled** preserves the aspect ratio. Stretching a portrait poster across a wide area does not create a real backdrop.

Plan HD, FHD and WQHD layouts with appropriate aspect ratios. A higher resolution may show more content instead of merely enlarging everything. Check long text, missing artwork, fast event changes and the last visible list item at each supported resolution.


[Back to e2MDB](../) · [All settings](../optionen/)
