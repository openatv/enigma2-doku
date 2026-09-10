---
title: "Umbra – All 39 style options"
description: "All 39 style options · config.plugins.umbra · HD/FHD/WQHD"
---

This reference explains all 39 style values in **Plugins → Umbra**. Personal values take precedence over the pack. **From style pack (Vom Stilpaket)** or an empty RGB field inherits its value. The base shown below is unmodified Graphite, not a recommendation for every design.

## Colours

### Palette

Change the coordinated base colours; individual RGB overrides take precedence.

Choices: Graphite · Midnight · Carbon · Emerald · Petrol · Bordeaux · Amber

Graphite base: Graphite

`config.plugins.umbra.palette`

Explanation and examples: [Palette](../farben/).

### Progress colour

Set supported progress and accent indicators. A custom Accent RGB value overrides this choice.

Choices: Skin colour · Cyan · Blue · Green · Red · Gold · White

Graphite base: Skin colour

`config.plugins.umbra.accent`

Explanation and examples: [Progress colour](../farben/).

### TV image behind details

Adjust TV visibility behind supported channel details, not the transparency of every screen.

Choices: Off · Subtle · Medium · Clear

Graphite base: Medium

`config.plugins.umbra.tvVisibility`

Explanation and examples: [TV image behind details](../senderliste/).

### Background RGB

Large background areas.

Choices: Empty or six RGB hexadecimal digits, optionally prefixed by #.

Graphite base: Empty; colour role inherited from the pack/palette.

`config.plugins.umbra.color_background`

Explanation and examples: [Background RGB](../rgb/).

### Surface RGB

Surfaces, dialog parts and the basis of derived shading.

Choices: Empty or six RGB hexadecimal digits, optionally prefixed by #.

Graphite base: Empty; colour role inherited from the pack/palette.

`config.plugins.umbra.color_surface`

Explanation and examples: [Surface RGB](../rgb/).

### Selection RGB

Highlighted entries and derived selection gradients.

Choices: Empty or six RGB hexadecimal digits, optionally prefixed by #.

Graphite base: Empty; colour role inherited from the pack/palette.

`config.plugins.umbra.color_selection`

Explanation and examples: [Selection RGB](../rgb/).

### Main text RGB

Primary labels and central text.

Choices: Empty or six RGB hexadecimal digits, optionally prefixed by #.

Graphite base: Empty; colour role inherited from the pack/palette.

`config.plugins.umbra.color_foreground`

Explanation and examples: [Main text RGB](../rgb/).

### Secondary text RGB

Supporting text and additional information.

Choices: Empty or six RGB hexadecimal digits, optionally prefixed by #.

Graphite base: Empty; colour role inherited from the pack/palette.

`config.plugins.umbra.color_secondary`

Explanation and examples: [Secondary text RGB](../rgb/).

### Muted text RGB

Subtle information and parts of gradients.

Choices: Empty or six RGB hexadecimal digits, optionally prefixed by #.

Graphite base: Empty; colour role inherited from the pack/palette.

`config.plugins.umbra.color_muted`

Explanation and examples: [Muted text RGB](../rgb/).

### Accent RGB

Custom accent colour; takes precedence over the progress-colour selection.

Choices: Empty or six RGB hexadecimal digits, optionally prefixed by #.

Graphite base: Empty; colour role inherited from the pack/palette.

`config.plugins.umbra.color_accent`

Explanation and examples: [Accent RGB](../rgb/).

### Recording text RGB

Channel-list text for an active recording. Inherited theme colour: light gold FFE59A.

Choices: Empty or six RGB hexadecimal digits, optionally prefixed by #.

Graphite base: Empty; colour role inherited from the pack/palette.

`config.plugins.umbra.color_recording`

Explanation and examples: [Recording text RGB](../rgb/).

### Red RGB

Red role, including associated buttons and indications.

Choices: Empty or six RGB hexadecimal digits, optionally prefixed by #.

Graphite base: Empty; colour role inherited from the pack/palette.

`config.plugins.umbra.color_red`

Explanation and examples: [Red RGB](../rgb/).

### Green RGB

Green role and corresponding buttons.

Choices: Empty or six RGB hexadecimal digits, optionally prefixed by #.

Graphite base: Empty; colour role inherited from the pack/palette.

`config.plugins.umbra.color_green`

Explanation and examples: [Green RGB](../rgb/).

### Yellow RGB

Yellow role and corresponding buttons.

Choices: Empty or six RGB hexadecimal digits, optionally prefixed by #.

Graphite base: Empty; colour role inherited from the pack/palette.

`config.plugins.umbra.color_yellow`

Explanation and examples: [Yellow RGB](../rgb/).

### Blue RGB

Blue role and corresponding buttons.

Choices: Empty or six RGB hexadecimal digits, optionally prefixed by #.

Graphite base: Empty; colour role inherited from the pack/palette.

`config.plugins.umbra.color_blue`

Explanation and examples: [Blue RGB](../rgb/).

## Layout

### Gradients

Use gradients or solid fills on supported surfaces. Transparent edge transitions remain.

Choices: On · Solid

Graphite base: On

`config.plugins.umbra.gradients`

Explanation and examples: [Gradients](../layout/).

### Selection rounding

Change supported selection corners, not every dialog or image.

Choices: Square · 4 px · 8 px

Graphite base: 8 px

`config.plugins.umbra.corners`

Explanation and examples: [Selection rounding](../layout/).

### Text size

Scale Regular/Bold text and supported templates; symbols and the radio LCD font remain independent.

Choices: 90 % · 95 % · 100 % · 105 %

Graphite base: 100 %

`config.plugins.umbra.fontScale`

Explanation and examples: [Text size](../layout/).

### Menu width

Widen the normal menu without changing every plugin screen.

Choices: Standard · Wide

Graphite base: Standard

`config.plugins.umbra.menuWidth`

Explanation and examples: [Menu width](../layout/).

### Clock in menus

Show the clock in supported menus; the Infobar clock is independent.

Choices: On · Off

Graphite base: On

`config.plugins.umbra.showClock`

Explanation and examples: [Clock in menus](../layout/).

### Progress thickness

Change supported thin progress widgets, not every plugin-generated progress graphic.

Choices: Narrow · Standard · Wide

Graphite base: Standard

`config.plugins.umbra.progressHeight`

Explanation and examples: [Progress thickness](../layout/).

## Infobar

### Extended programme description

Show detailed event text where provided by EPG.

Choices: On · Off

Graphite base: On

`config.plugins.umbra.eventDescription`

Explanation and examples: [Extended programme description](../statussymbole/).

### Video and audio information

Show video format and audio-codec information independently of status icons.

Choices: On · Off

Graphite base: On

`config.plugins.umbra.technicalInfo`

Explanation and examples: [Video and audio information](../statussymbole/).

### Tuner and signal information

Display native tuner allocation and driver-reported SNR/AGC/BER, optionally with transponder details.

Choices: Off · Tuner / SNR / AGC / BER · Including transponder details

Graphite base: Off

`config.plugins.umbra.tunerInfo`

Explanation and examples: [Tuner and signal information](../statussymbole/).

### Encryption information

Show the first Infobar's CA diagnostics. OpenATV's global encryption-information permission still applies.

Choices: Off · On

Graphite base: Off

`config.plugins.umbra.cryptoInfo`

Explanation and examples: [Encryption information](../statussymbole/).

### Weather in the top left

Choose current weather, daily values or a five-day forecast. Off disables Umbra weather requests.

Choices: Off · Current · With daily values · With 5-day forecast

Graphite base: Off

`config.plugins.umbra.weatherInfo`

Explanation and examples: [Weather in the top left](../wetter/).

### Status icons

Choose all icons with inactive ones dimmed, active icons only or no status strip. Recording indication is independent.

Choices: All, inactive dimmed · Active only · Off

Graphite base: All, inactive dimmed

`config.plugins.umbra.serviceIcons`

Explanation and examples: [Status icons](../statussymbole/).

### Infobar layout

Choose the full Infobar's picon, portrait-cover or panorama layout. Requires e2MDB for media choices.

Choices: Classic · Cover · Panorama

Graphite base: Classic

`config.plugins.umbra.infobarLayout`

Explanation and examples: [Infobar layout](../infobar/).

### EPG artwork

Choose artwork in supported EPG views independently of the full Infobar layout.

Choices: Off · Cover · Panorama

Graphite base: Off

`config.plugins.umbra.epgArtwork`

Explanation and examples: [EPG artwork](../e2mdb/).

## Channel list

### Artwork in channel details

Choose artwork for the channel detail area. The gallery uses its native image provider.

Choices: Off · Cover · Panorama

Graphite base: Off

`config.plugins.umbra.channelArtwork`

Explanation and examples: [Artwork in channel details](../e2mdb/).

### Channel-list view

Choose Details, Live TV window, Full screen, Gallery or Columns.

Choices: Details · Live TV window · Full screen · Gallery · Columns

Graphite base: Details

`config.plugins.umbra.channelScreen`

Explanation and examples: [Channel-list view](../senderliste/).

### Channel rows

Choose Standard, Compact, Extended, Gallery or Columns rows. Gallery/Columns are paired with their matching views.

Choices: Standard · Compact · Extended · Gallery · Columns

Graphite base: Standard

`config.plugins.umbra.channelRows`

Explanation and examples: [Channel rows](../senderzeilen/).

### Picons

Show installed channel logos; this does not download picons.

Choices: On · Off

Graphite base: On

`config.plugins.umbra.showPicon`

Explanation and examples: [Picons](../senderzeilen/).

### Channel numbers

Show the channel number.

Choices: On · Off

Graphite base: On

`config.plugins.umbra.showNumber`

Explanation and examples: [Channel numbers](../senderzeilen/).

### Reception-type icon

Show the native reception-type symbol.

Choices: On · Off

Graphite base: On

`config.plugins.umbra.showServiceTypeIcon`

Explanation and examples: [Reception-type icon](../senderzeilen/).

### Encryption icon

Show the native encryption symbol; this does not decrypt a service.

Choices: On · Off

Graphite base: On

`config.plugins.umbra.showCryptoIcon`

Explanation and examples: [Encryption icon](../senderzeilen/).

### Picon aspect ratio

Match the picon area to your installed set without downloading or changing that set.

Choices: XPicon / ZZZPicon · ZZPicon · ZPicon

Graphite base: XPicon / ZZZPicon

`config.plugins.umbra.piconRatio`

Explanation and examples: [Picon aspect ratio](../senderzeilen/).

### Show timers

Show timer hints supplied by the native list model without creating timers.

Choices: On · Off

Graphite base: Off

`config.plugins.umbra.showTimers`

Explanation and examples: [Show timers](../aufnahmen/).

### Recording marking

Choose no marking, a native icon or dedicated text colour for an active recording.

Choices: Off · Icon · Text colour

Graphite base: Text colour

`config.plugins.umbra.recordIndicatorMode`

Explanation and examples: [Recording marking](../aufnahmen/).

## Pack selection and local settings

These seven fields are outside the 39 exported style values:

| Field | Purpose |
| --- | --- |
| `style` – Style pack | Select an included or personal pack; overrides retain precedence. |
| `section` – Section | Filter Colours, Layout, Infobar or Channel list without discarding changes elsewhere. |
| `resolution` – OSD resolution | HD, FHD or supported WQHD; not changed by a pack switch or included in an export. |
| `weatherCity` – Weather location | Local place name; shown when weather is enabled. |
| `weatherCoordinates` – Coordinates | Longitude,latitude with decimal points; Hamburg example 9.99302,53.55073. |
| `weatherProvider` – Provider | Open-Meteo or MSN; local default Open-Meteo. |
| `weatherUnit` – Unit | Celsius or Fahrenheit; local default Celsius. |

All keys belong under `config.plugins.umbra`. Weather fields are not exported. The three media style options appear only with e2MDB and its converter installed. See [weather](../wetter/) and [artwork](../e2mdb/) for requirements.
