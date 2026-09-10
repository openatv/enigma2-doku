---
title: "e2MDB \u2013 Skinner: lists and performance"
description: "OpenATV 8.0+: Skinner: lists and performance. Detailed e2MDB instructions, purpose and practical examples."
---

## Native ServiceList fields

The modern OpenATV ServiceList provides event-related image fields. An image-oriented template can use **ImageOrPicon1**. The **1** refers to the entry's first event. The template must belong to a native ServiceList; an arbitrary plugin listbox does not automatically understand these field names.

~~~xml
<!-- Fragment inside a native ServiceList template mode -->
<pixmap index="ImageOrPicon1"
    position="8,8" size="222,111"
    alpha="blend" scale="centerScaled" />
<text index="Title1"
    position="8,125" size="222,44"
    font="0" verticalAlignment="center" />
~~~

Fonts, item height, other fields and modes belong to the surrounding template. **Image1** supplies an image without the picon fallback in the corresponding interface. Verify the actual indices in the target Enigma2 build.

This template mechanism differs from putting an **E2MDBEventInfo** converter on a standalone widget. **CoverOrPicon** is not a valid token in that converter.

## Keep the GUI responsive

- Do not perform provider requests, recursive directory scans or SQL work in paint, converter or selection callbacks.
- Do not synchronously probe a slow NAS on every redraw. Use prepared metadata and image paths.
- Allocate large image areas only where they are visible, with appropriate aspect ratios and dimensions.
- Use native skin/graphics facilities for colours, gradients and plain surfaces instead of large background PNGs.
- Share repeated screen elements through panels and list layouts through templates.

## Check before release

- Test without the plugin, with only .pyc files, and with e2MDB disabled.
- Test empty EPG, no-match results, text without images and missing picons.
- Switch rapidly between channels/events; old covers and text must disappear.
- Test supported HD/FHD/WQHD layouts, long titles, different artwork shapes, every list mode and complete final rows.
- Test while a scan runs. An empty metadata area must neither block the interface nor trigger a skin error.


[Back to e2MDB](../) · [All settings](../optionen/)
