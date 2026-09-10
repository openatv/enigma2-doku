---
title: "e2MDB \u2013 Skinner: sources and requirements"
description: "OpenATV 8.0+: Skinner: sources and requirements. Detailed e2MDB instructions, purpose and practical examples."
---

The plugin supplies the **E2MDBEventInfo** converter. It reads metadata already supplied by its source. Skin widgets do not call internet providers or perform SQL queries. The following appendices describe generic integration for a compatible OpenATV skin.

## Choose the correct source

The skin XML examples are an integral part of this handbook:

- [Cover and InfoLine with `E2MDBEventInfo`](../skinner-bilder/)
- [Picon fallback with `HasCover` and `ConditionalShowHide`](../skinner-bilder/)
- [Optional panels and switching between base and media layouts](../skinner-panels/)
- [Native service-list template with `ImageOrPicon1`](../skinner-listen/)

The example panel names are names chosen by a skin author. The XML contracts and their explanations apply independently of a skin's product name.

| Context | Source or data path |
| --- | --- |
| Live-TV InfoBar | `session.Event_Now` for the current event when InfoBar integration is enabled. |
| EPG/channel selection | `Event`, if that screen supplies e2MDB metadata through it. |
| Media information | The event/metadata source actually exposed by that screen. Do not assume the live-TV source represents a selected recording. |
| Native ServiceList | Event-related template indices such as `Image1` and `ImageOrPicon1`. This is a different contract from an individual converter widget. |
| Plugin-owned sources | Direct pixmap/text sources only with names actually provided by the screen. |

Writing `source="Event"` does not create metadata. The source needs a `getMeta` interface or enrichment by e2MDB integration. Renaming a StaticText source or a service reference does not make it a complete media source.

## Keep the integration optional

- Check for both the plugin and converter. Feed packages can contain only `.pyc` rather than `.py`.
- Keep the normal skin usable without e2MDB.
- Observe the database and live/EPG master switches, plus the relevant InfoBar or ChannelSelection switch.
- Check availability **before loading the converter**. ConditionalShowHide alone cannot prevent an import error when the plugin is absent.
- Saved style preferences must not make a screen unusable after plugin removal.

A skin can define a base panel and a media panel and select them by condition. Repeated components remain shared panels or templates. The following XML snippets demonstrate this approach; they are not complete skin.xml files.

When porting a skin, verify sources, attributes and template indices against the target OpenATV version. Do not copy names from older media-database skins without checking the current interface.


[Back to e2MDB](../) · [All settings](../optionen/)
