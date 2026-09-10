---
title: "Umbra – Resolution, density and requirements"
description: "OpenATV 8.0+: Resolution, density and requirements. Complete Umbra instructions with settings and examples."
---

Umbra provides **HD, FHD and WQHD** layouts for OpenATV from 8.0. OSD resolution determines the user-interface rendering size; it does not automatically change HDMI video output. A 1920×1080 screenshot containing video is not proof of a 1920×1080 OSD.

| OSD resolution | Size and use |
| --- | --- |
| HD | 1280×720. A useful starting point for smaller displays or larger interface elements. |
| FHD | 1920×1080. Native-resolution interface with more list capacity than HD in supported views. Used for the new settings captures. |
| WQHD | 2560×1440. Select only when the receiver/framebuffer supports it. No live WQHD validation was performed on this test receiver. |

Style packs do not change resolution. Select it separately in Umbra and apply with Green. Keep a working skin/resolution available before making a change. Account for recordings and other activity if a GUI restart is requested.

## More content at higher resolutions

The original 0.4.10 handbook described mostly scaled HD layouts. **Since 0.4.17, separate density profiles provide the following capacities at standard text size.** This updates the earlier chapter while retaining its explanation of OSD versus video output.

| View | HD | FHD | WQHD |
| --- | ---: | ---: | ---: |
| Standard channel list | 7 | 8 | 9 |
| Compact channel list | 13 | 14 | 15 |
| Extended channel list | 5 | 6 | 6 |
| Channel gallery / plugin grid | 5×3 | 6×3 | 7×4 |
| Channel columns | 5 | 6 | 7 |
| Main menu, maximum rows | 10 | 11 | 12 |
| Standard setup | 8 | 9 | 10 |
| Timer list | 8 | 9 | 10 |
| Plugin list view | 7 | 8 | 8 |
| Upper file list in location selection | 7 | 8 | 8 |

These are XML layout capacities, not numbers of available records. Whole-row boundaries mean some views do not gain another row at every resolution step. Plugin-owned lists with fixed geometry may behave differently. Native EPG screens retain the selected entries-per-page value.

## Additional requirements

| Function | Requirement |
| --- | --- |
| Native appearance and live reload | Compatible current OpenATV, required skin/graphics functions and icon font. |
| Media options | e2MDB, E2MDBEventInfo converter, enabled metadata functions and matching data. |
| Weather | OEA weather package, valid location/coordinates and reachable provider. |
| Picons | An installed picon set correctly connected to OpenATV; downloaded separately. |
| Plugin screens | The respective plugin with a supported screen version. |

Additional language-font downloads and an RTL switch are not Umbra menu functions. Front-panel display skins, native subtitle settings and remote-control assignments are managed elsewhere.

Umbra is designed to be compact: native surfaces and shared fonts/assets support the three resolutions without duplicating all graphics. The installed package metadata reports about **5.8 MB**; actual filesystem allocation and later versions can differ. This is not a complete memory-usage measurement or a benchmark against every other skin.

[Umbra overview](../) · [All 39 style options](../optionen/)
