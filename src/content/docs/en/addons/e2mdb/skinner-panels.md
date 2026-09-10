---
title: "e2MDB \u2013 Skinner: optional panels"
description: "OpenATV 8.0+: Skinner: optional panels. Detailed e2MDB instructions, purpose and practical examples."
---

An optional panel should load only when both modules exist and the necessary functions are enabled. The example checks **.py and .pyc**. Keep ordinary picon/text presentation outside the optional panel in the complete InfoBar.

~~~xml
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
~~~

**MyE2MDBInfoBar** is a panel defined by the skin. It must exist under that name and can contain the widgets from [covers and text](../skinner-bilder/). This supplements a base view without requiring a plugin modification.

## Two complete variants

When the whole layout changes, define two panels, for example **MyBase_InfoBar** and **MyMedia_InfoBar**. Use the positive condition for the media panel and the identical condition with the skin parser's leading exclamation-mark inversion for the base panel. Both sides must use the same complete condition.

For channel selection, replace the last switch with **config.plugins.e2mdb.epgChannelSelectionEnabled.value**. For other screens, check only the switches required by their actual integration. A media EventView is not a live-TV InfoBar.

### Both panel calls in XML

Place both calls in the same InfoBar screen. Define `MyBase_InfoBar` and `MyMedia_InfoBar` in the skin; the media definition contains the widgets from [Appendix E](../skinner-bilder/). The exclamation mark is the first character of the attribute value. The base view remains active when the plugin is absent or integration is disabled.

```xml
<panel name="MyBase_InfoBar" condition="!(isfile('/usr/lib/enigma2/python/Plugins/Extensions/e2MDB/plugin.py')
   or isfile('/usr/lib/enigma2/python/Plugins/Extensions/e2MDB/plugin.pyc'))
  and (isfile('/usr/lib/enigma2/python/Components/Converter/E2MDBEventInfo.py')
   or isfile('/usr/lib/enigma2/python/Components/Converter/E2MDBEventInfo.pyc'))
  and config.plugins.e2mdb.enableDatabase.value
  and config.plugins.e2mdb.epgMetaEnabled.value
  and config.plugins.e2mdb.epgInfoBarEnabled.value" />

<panel name="MyMedia_InfoBar" condition="(isfile('/usr/lib/enigma2/python/Plugins/Extensions/e2MDB/plugin.py')
   or isfile('/usr/lib/enigma2/python/Plugins/Extensions/e2MDB/plugin.pyc'))
  and (isfile('/usr/lib/enigma2/python/Components/Converter/E2MDBEventInfo.py')
   or isfile('/usr/lib/enigma2/python/Components/Converter/E2MDBEventInfo.pyc'))
  and config.plugins.e2mdb.enableDatabase.value
  and config.plugins.e2mdb.epgMetaEnabled.value
  and config.plugins.e2mdb.epgInfoBarEnabled.value" />
```

## Availability and current artwork are different checks

| Check | Purpose |
| --- | --- |
| Plugin and converter exist | Before loading the optional panel, avoid imports of missing modules. |
| Relevant function enabled | Decide whether the media layout is wanted and available. |
| HasCover / HasBackdrop | React to the current event's actual image data, for example to show a background. |
| Event changes to an empty source | Clear the previous image and text until new data is available. |

**HasMetadata** does not guarantee that artwork is ready or provider lookup succeeded. Check the specific image or text field you intend to display.


[Back to e2MDB](../) · [All settings](../optionen/)
