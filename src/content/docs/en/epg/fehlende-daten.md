---
title: Missing EPG and IPTV mapping
description: Distinguish DVB EIT, XMLTV, service references, tvg-id and channel names, and diagnose empty or time-shifted IPTV programme guides.
---

A working picture does not prove that programme information is available. **Channel lists, video streams and EPG are separate data.** An [EPG view](../ansichten/) displays only the information associated with that service in the cache.

## Which data is missing?

| Data path | Origin | Typical limitation |
| --- | --- | --- |
| DVB EIT | Programme information in the received DVB transport stream | Providers supply different numbers of days and descriptions; reception is required. |
| Now/Next | Current and following programme information | Two entries are not a multi-day schedule. |
| Provider-specific DVB methods | Additional EPG for particular offerings | Enable applicable sources; not every switch helps every service. |
| XMLTV via EPGImport | External programme file plus service mappings | Requires networking, a current source file and matching channel IDs. |
| `epg.dat` | Saved Enigma2 cache | Preserves data already loaded; does not obtain new programmes. |

EPGRefresh automates DVB collection. EPGImport loads external data. Both can populate the same cache; competing sources for the same services complicate troubleshooting. Start with one known channel and one traceable source.

## Diagnose DVB systematically

1. Tune a receivable service and wait for its data. Compare Das Erste HD and ZDF HD and a later time.
2. Check **date, time and time zone**, especially after a long shutdown.
3. Check the source and date range. Yesterday's data or only Now/Next do not indicate a broken skin.
4. For EPGRefresh check selected services and the last refresh; for EPGImport check sources, filters and the log.
5. If EPG is empty after every boot, check the cache location and whether the file can be saved and loaded.

Delete `epg.dat` or clear the live cache only for a diagnosed reason. This does not fix a bad mapping, unavailable network or incorrect clock, and initially removes existing information.

## IPTV: name, XMLTV ID and service reference

A typical XMLTV import needs three parts to match:

| Part | Example/purpose |
| --- | --- |
| XMLTV channel ID | The `channel` value in an XMLTV programme entry, such as `demo.example`. |
| Enigma2 service reference | Identifier of the bouquet entry actually used; associates the data with that service. |
| Channel name | A readable label such as “Example HD”. Matching text alone does not create this association. |

An M3U **`tvg-id`** attribute can help a bouquet generator transfer the XMLTV ID. Whether it produces the required Enigma2 mapping depends on the IPTV plugin. **`tvg-name`**, renaming a bouquet entry or adding a matching picon does not replace that mapping.

Compare programme versions and regions too: HD/SD, regional windows and time-shifted services can carry different programmes despite similar names. If a provider changes service references on every list update, mappings must also be generated consistently or updated.

## A custom XMLTV source: file templates

The checked EPGImport reads definitions under **`/etc/epgimport/`**. This example deliberately uses an unreachable documentation URL and an identifier to replace. It is **not a ready-to-use channel configuration**.

`handbook.sources.xml`:

```xml
<?xml version="1.0" encoding="utf-8"?>
<sources>
  <sourcecat sourcecatname="My guide">
    <source type="gen_xmltv" channels="handbook.channels.xml">
      <description>My XMLTV guide</description>
      <url>https://example.invalid/guide.xml.gz</url>
    </source>
  </sourcecat>
</sources>
```

`handbook.channels.xml`:

```xml
<?xml version="1.0" encoding="utf-8"?>
<channels>
  <channel id="demo.example">SERVICE_REFERENCE_FROM_YOUR_BOUQUET</channel>
</channels>
```

Replace the URL with an accessible XMLTV source you may use, `demo.example` with its actual channel ID, and the placeholder with the complete matching service reference. Escape special characters correctly for XML, for example `&amp;` for an ampersand. Copy references from your own list, not a guide for another service. IPTV references may contain stream URLs and credentials; remove private details before sharing these files.

**`custom.channels.xml`** is another location the checked plugin reads for custom mappings. Depending on configuration, **`channel_id_filter.conf`** rules can filter these entries. First test one service with a manual import and open that exact bouquet entry. Add other services afterwards. Do not randomly replace service types or numeric identifiers just to make an import appear to match.

## Successful import, but empty or shifted programmes

- **Total greater than zero, one service empty:** Compare source ID, reference, bouquet/IPTV filters and the entry actually opened.
- **Descriptions missing:** Check the source and the long-description limit; brief records may have no detailed text.
- **All services/clock displays wrong:** Check [time settings](../../system/zeit-aufwachen/).
- **Only one XMLTV source shifted:** Inspect that source's timestamps and time-zone offsets. Do not change the whole receiver's clock to compensate for a bad feed.
- **Empty again after a list update:** Check changed identifiers and generator settings.

A useful [bug report](../../hilfe/fehler-melden/) includes plugin version, affected source, time of failure, import log and a sanitised mapping example. Private stream URLs and credentials do not belong in a public forum.

Sources: [Enigma2 EPG cache](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/lib/dvb/epgcache.cpp), [EPGImport sources and channel IDs](https://github.com/oe-alliance/XMLTV-Import/blob/a32929f2d0/src/EPGImport/EPGConfig.py), [Filters and import operation](https://github.com/oe-alliance/XMLTV-Import/blob/a32929f2d0/src/EPGImport/plugin.py).
