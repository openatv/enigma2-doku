---
title: "e2MDB \u2013 E2MDBEventInfo reference"
description: "OpenATV 8.0+: E2MDBEventInfo reference. Detailed e2MDB instructions, purpose and practical examples."
---

Write the converter name and tokens exactly, including case. These tokens refer to the reviewed **E2MDBEventInfo** interface.

## Images

| Token | Meaning |
| --- | --- |
| Cover | Portrait artwork from `cover_path`; no automatic picon fallback. |
| Backdrop | A true wide background from `backdrop_path`; no automatic episode-still replacement. |
| TitleLogo | Title artwork from `titlelogo_path`, when present. |
| Image | Landscape preview/still from `image_path`. |
| Preview | Preview/still, with a backdrop fallback. |
| ImageOrPicon | Suitable landscape artwork, falling back to the picon path supplied by the source. |

## Text

| Token | Meaning |
| --- | --- |
| Title / Subtitle | Main title and subtitle/episode title. |
| Overview / Description | Available short or extended description from the metadata record. |
| InfoLine | Prepared compact information line. |
| Genres / Runtime / Rating / Year | Genre, duration, rating and year, when supplied. |
| Provider / MediaType / Status | Source provider, content type and processing information. |
| Cast / Crew | Compact cast and contributor information. |
| AdvDescription | Formatted description including cast/crew; aliases **AdvancedDescription** and **ADV_DESCRIPTION**. |

## Boolean checks

| Token | Meaning |
| --- | --- |
| HasMetadata | A `source_key` exists. It is not a general completion indicator. |
| HasCover | A cover path has been supplied. |
| HasBackdrop | A suitable backdrop path has been supplied. |
| HasImage | A suitable `image_path` exists; this does not automatically test the backdrop fallback. |

Image tokens provide pixmaps for **render="Pixmap"**. Text tokens provide text for Label and similar renderers. Boolean tokens provide conditions for **ConditionalShowHide**. Unknown tokens can cause a skin error instead of silently falling back.

**CoverOrPicon is not a valid token** in this converter. Do not import that name from unrelated examples.

Not every arbitrary filename is accepted as landscape artwork. Use backend-provided paths; the converter examines path/name conventions to distinguish portrait and landscape images. A manually invented path can produce an empty result.

See the [pinned converter source](https://github.com/openatv/e2MDB/blob/7442e3d04aac25c741fa96b370c22994131928e2/src/Components/Converter/E2MDBEventInfo.py) when adapting these interfaces to a newer build.


[Back to e2MDB](../) · [All settings](../optionen/)
