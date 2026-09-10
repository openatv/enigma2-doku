---
title: Service references – add TV, radio and IPTV to a bouquet
description: Read Enigma2 service references, distinguish TV/radio fields from 4097, 5001 and 5002, and add IPTV examples.
---

**The first number selects the Enigma2 service. The third number describes the channel type in the entries shown here.** A leading `2:` therefore does not mean radio: service 2 is the file-system factory.

## Read the fields

```text
Service:Flags:Type:SID:TSID:ONID:Namespace:Reserved:Reserved:Reserved:Path
4097   :0    :1   :0  :0   :0   :0        :0       :0       :0       :https%3a//media.example.org/live.m3u8
```

The second line is aligned for explanation, not ready to paste. Actual entries appear below.

| Field | Meaning |
| --- | --- |
| 1: Service | Decimal: `1` DVB, `4097` ServiceMP3, `5001` gstplayer, `5002` exteplayer3. |
| 2: Flags | Decimal: `0` in the simple channel example. Other values identify directories, markers or groups. |
| 3: Type | Hexadecimal: `1` conventional TV type, `2` radio. Other DVB TV types exist, such as hexadecimal `19` for an HD type; TV is not always 1. |
| 4–7: SID, TSID, ONID, namespace | Channel/network identifiers; do not arbitrarily change DVB values. IPTV EPG and picon mapping can depend on them too. |
| 8–10 | Additional data fields; 0 in the simple example. Do not indiscriminately erase existing values. |
| Field 11 onwards | File path or stream URL. A live DVB channel normally needs no URL here. |

Fields 3–10 are hexadecimal. **4097 is decimal**, corresponding internally to `0x1001`. Write `4097` in the first bouquet field, not `1001`.

## Three players for the same example stream

The `example.org` domain is a placeholder. Replace it with a real stream address you can use; these examples do not supply a programme.

```text
#NAME IPTV Test
#SERVICE 4097:0:1:0:0:0:0:0:0:0:https%3a//media.example.org/live.m3u8
#DESCRIPTION Example TV - Enigma2
#SERVICE 5001:0:1:0:0:0:0:0:0:0:https%3a//media.example.org/live.m3u8
#DESCRIPTION Example TV - gstplayer
#SERVICE 5002:0:1:0:0:0:0:0:0:0:https%3a//media.example.org/live.m3u8
#DESCRIPTION Example TV - exteplayer3
```

5001/5002 require [ServiceApp and its players](../serviceapp/). ServiceApp may already redirect 4097: set its playback system to **original** for a real comparison with built-in GStreamer.

The URL colon is written as `%3a` here to keep it from being interpreted as a field/name separator. Additional colons, such as before a port number, must also be handled correctly in this encoded form. A bouquet editor can do this. **Do not encode a URL twice**: `%3a` must not accidentally become `%253a`. Preserve existing query parameters and credentials, but remove private information from public error reports.

The zeros are only a minimal playback example. Real IPTV channels need unique references appropriate for EPG/picon mapping. Matching names or all-zero identifiers do not establish an EPG association: [missing EPG and IPTV](../../epg/fehlende-daten/).

## Identify radio correctly

```text
#NAME IPTV Radio Test
#SERVICE 4097:0:2:0:0:0:0:0:0:0:https%3a//media.example.org/radio.mp3
#DESCRIPTION Example Radio
```

Radio is 2 in the **third** field. A native DVB radio channel can therefore start with `1:0:2:`; its remaining identifiers come from the channel scan. Whether an entry appears in the TV or radio bouquet list also depends on the bouquet file and its registration.

## Create a separate test bouquet

An editor with Enigma2 IPTV support is convenient: read existing lists from the receiver, create a separate test bouquet, choose URL and service type, transfer it back and reload. The exact interface depends on the editor.

For manual text editing:

1. Back up `/etc/enigma2/bouquets.tv` or `bouquets.radio` and the affected `userbouquet.*` files locally. A [settings backup](../../wartung/backup-restore/) is useful too.
2. At an idle time, stop the GUI over SSH with `init 4` so Enigma2 cannot overwrite the files while exiting. This interrupts playback and recordings.
3. Transfer the TV example as UTF-8 text with Unix line endings to `/etc/enigma2/userbouquet.iptvtest.tv`. Do not accidentally overwrite an existing test file.
4. Append this line to `bouquets.tv`, preserving existing content:
```text
#SERVICE 1:7:1:0:0:0:0:0:0:0:FROM BOUQUET "userbouquet.iptvtest.tv" ORDER BY bouquet
```
5. Start with `init 3` and open the new bouquet in the TV favourites list. If multiple bouquets are hidden, check the corresponding channel-list setting.

For radio, create `userbouquet.iptvtest.radio` and register it in `bouquets.radio`:
```text
#SERVICE 1:7:2:0:0:0:0:0:0:0:FROM BOUQUET "userbouquet.iptvtest.radio" ORDER BY bouquet
```

The registration line is a **bouquet reference** with flags 7; it does not select an IPTV player. Never globally replace every leading 1 in your channel lists. After testing, remove only your test bouquet and its reference, or restore the previous versions.

Syntax checked against the [Enigma2 parser](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/lib/service/service.cpp) and [bouquet handling](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/lib/dvb/db.cpp). These examples were not written to the test receiver's channel lists.
