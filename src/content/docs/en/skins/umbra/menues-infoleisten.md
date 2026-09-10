---
title: Umbra – Menus, Lite Infobar and second InfoBar
description: Press MENU twice, choose horizontal menus and understand InfoBarLite, second INFO/ECM pages and Infobar EPG in Umbra.
---

**MENU → MENU again** opens general OpenATV OSD settings. With Umbra, this remains the place for menu orientation, Infobar behaviour and other controls. The Umbra plugin adds appearance settings.

## Which component controls what?

| OpenATV | Umbra |
| --- | --- |
| Vertical/horizontal menus, order and hidden entries | Colours, selection, fonts and each menu's appearance |
| Timeout, OK sequence, display on channel/event changes and fading | Classic/Cover/Panorama for the full Infobar |
| Lite Infobar and second INFO/ECM selection | Layout of the supplied screens |
| Picons, time formats and permission to display encryption information | Weather, artwork, status icons and optional diagnostic rows |

## Vertical and horizontal menus

The normal vertical menu remains available. Since Umbra 0.4.19, the horizontal menu uses a compact row of five tiles at the bottom, with a separate information/button area. Navigate to reach further entries. Native text, number, image and combined display modes, ordering and hiding remain OpenATV functions.

Umbra's **Menu width** adjusts the normal menu; it does not widen every plugin dialog. [Menu options and OSD](../../../erste-schritte/menue-anpassen/) explains operation and editing-mode colour buttons.

## Lite Infobar

Since Umbra 0.4.21, a dedicated **InfoBarLite** is available. With the native option enabled, the first OK press shows a slim bar with picon, channel, event, progress, remaining time, clock and recording indicator. Extended description, artwork, weather and tuner/CA rows belong to the full Infobar and are intentionally absent here. Their settings remain saved.

Umbra palette, text size and progress thickness still apply. Changing the native Lite option may request a GUI restart. The next OK page depends on your OpenATV configuration.

## Second INFO or ECM page

Since Umbra 0.4.20, these additional pages are styled:

- **Off:** no second page.
- **Event information:** native event details.
- **2nd InfoBar INFO:** detailed event page with picon and next programme.
- **2nd InfoBar ECM:** event page with an additional CA/ECM area.

OpenATV's global display of encryption information must permit CA details. Free-to-air services have no active decryption data. Umbra's **Encryption information** controls the first Infobar's diagnostic row and does not replace the global preference.

## Infobar EPG

Since Umbra 0.4.22, text and graphical Infobar EPG use compact lower bars with TV visible above. Navigation, colour buttons and native row selection remain available. Normal full-screen EPG views are separate. [EPG key assignments](../../../epg/tasten/) explains INFO, EPG and long presses.

These additions require matching Umbra and OpenATV versions. The full Infobar still supports [Classic, Cover and Panorama](../infobar/); those layouts do not replace the separately selected EPG key destination.
