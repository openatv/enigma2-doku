---
title: "e2MDB \u2013 Sources and glossary"
description: "OpenATV 8.0+: Sources and glossary. Detailed e2MDB instructions, purpose and practical examples."
---

This section documents the new **e2MDB add-on for OpenATV 8.0+**. It is based on the supplied German manual, the plugin/backend source and a native receiver installation. The English edition covers the same workflows and technical appendices.

## Reviewed version

- [openatv/e2MDB, commit 7442e3d](https://github.com/openatv/e2MDB/tree/7442e3d04aac25c741fa96b370c22994131928e2).
- Native receiver: **OpenATV 8.0.2-devel**, **e2MDB v1.0**, **MetrixHD**. SHA-256 checks of installed `plugin.py` and `setup.xml` match that source revision.
- Documentation review: **September 2026**.
- Common workflows are model-neutral. Hardware-specific features and later plugin versions can differ.

The native DE/EN capture series shows real controls. Credential fields use placeholders. Media files were not renamed and cleanup actions were not executed for the pictures. Screenshots show test settings, not universal recommendations.

## Official provider information

- [TMDb application authentication](https://developer.themoviedb.org/docs/authentication-application)
- [TMDb account API settings](https://www.themoviedb.org/settings/api)
- [TheTVDB API registration](https://www.thetvdb.com/api-information/signup)
- [TheTVDB access models](https://support.thetvdb.com/kb/faq.php?id=62)
- [OMDb API information](https://www.omdbapi.com/)
- [FanArt API information](https://api.fanart.tv/)
- [Request a FanArt key](https://fanart.tv/get-an-api-key/)
- [EPGRefresh in the oe-alliance plugin project](https://github.com/oe-alliance/enigma2-plugins/tree/master/epgrefresh)

Metadata and artwork remain the content of their respective providers and rights holders. Availability, supported languages and access conditions can change. For a newer version, check installed options and current provider information.

## Glossary

| Term | Meaning |
| --- | --- |
| Backend | Background service for collection, provider requests and database work. |
| Provider | Supplier of metadata or artwork. |
| Artwork | Covers, backdrops, previews and title graphics. |
| Prefill | Preparing extra information for known upcoming EPG events. |
| Queue | Work or events waiting to be processed. |
| Fallback | A deliberate substitute when preferred data is missing, such as a picon instead of programme artwork. |
| WAL | SQLite's write-ahead log alongside the main database; important for consistent backups. |
| Template / panel | Reusable list definitions / skin components. |


[Back to e2MDB](../) · [All settings](../optionen/)
