---
title: "Video options explained"
description: "OpenATV: Video options explained. Settings, purpose, connection examples and troubleshooting."
---

This reference explains **59 entries and label variants** in dynamic Video Settings. A configuration key can appear differently across automatic modes; these are not 59 switches shown simultaneously.

**MENU → Setup → Video → Video Settings**. [Setup and context](../video/). Native names and configuration keys help locate a setting. Source defaults can differ from saved values or image presets.

## Video output

Selects the physical video output, such as HDMI or SCART where present. Available modes change with it. An HDMI splitter does not become an extra receiver output in this list.

Key: `config.av.videoport`.

## Automatic resolution

Disabled, simple, native, all resolutions or only HD. The selection determines the mapping fields below. Establish stable fixed output first; see the automatic-resolution chapter.

Key: `config.av.autores`.

## Mode

Select output resolution and scan type, such as 720p or 1080i/p. Use an offered mode supported by the connection chain. Higher output resolution does not create extra source detail.

Key: `config.av.videomode[config.av.videoport.value]`.

## Aspect ratio

Display aspect ratio, typically 16:9, 4:3 or automatic. Configure it together with handling of differing source ratios; it is not skin resolution.

Key: `config.av.aspect`.

## Allow unsupported modes

Allows video modes not reported as supported by the display. Use only for targeted EDID diagnosis with a known supported capability; otherwise the picture can disappear.

Key: `config.av.edid_override`.

## Color format

Analogue colour output such as RGB, CVBS, S-Video or YPbPr, depending on the connector. Separate from HDMI colour space. The destination must accept the analogue signal type.

Key: `config.av.colorformat`.

## Scaler sharpness

Sharpening during scaling. Excessive values produce edge halos and amplify noise. Check test patterns and normal material; there is no universally optimal number.

Key: `config.av.scaler_sharpness`.

## HDMI color space

Automatic or offered RGB/YCbCr variants such as 4:4:4, 4:2:2 or 4:2:0. Affects chroma sampling and link bandwidth. Start with auto; TV, AVR and mode must support a forced variant.

Key: `config.av.hdmicolorspace`.

## HDMI Colorimetry

Auto or offered colourimetry such as BT.709/BT.2020. Defines interpretation of colour values. Forcing BT.2020 does not turn SDR into correct HDR content.

Key: `config.av.hdmicolorimetry`.

## HDMI color depth

Automatic, 8, 10 or 12 bits where available. Greater depth may require more bandwidth. Consider HDR, resolution, refresh rate and chroma together; 12-bit is not a universal quality upgrade.

Key: `config.av.hdmicolordepth`.

## HDMI HDR Type

Driver choices for auto or HDR/HLG/SDR. Changes signalling or processing. Incorrect forcing can cause washed-out or overbright colours; see the HDR chapter.

Key: `config.av.hdmihdrtype`.

## HDR OSD adjustment

Adjusts the graphical interface during HDR output. Affects menus/overlays and does not replace video calibration. Available levels are driver-specific.

Key: `config.av.hdmihdrosd`.

## Bypass HDMI EDID Check

Bypasses an additional driver HDMI EDID check. Separate from exposing unreported video modes. Not a default solution for every black screen.

Key: `config.av.bypass_edid_checking`.

## Change Boxmode to control Hardware Chip Modes*

Platform-specific allocation of chip functions/resources. Can change available UHD/PiP/decoder combinations and require restart. Change only with suitable device guidance; not a normal picture-quality control.

Key: `config.av.boxmode`.

## HLG Support

Handle HLG support automatically from EDID or force an offered state. Force only when the entire HDMI chain supports it.

Key: `config.av.hlg_support`.

## HDR10 Support

Handle HDR10 support automatically from EDID or force it. The switch does not make a display HDR-capable or convert SDR material into HDR.

Key: `config.av.hdr10_support`.

## Allow 12bit

Driver-dependent depth switch. The checked code writes its Yes/No value to a path named disable_12bit. Because naming differs, do not assume universal Yes=allowed semantics; keep the default and verify for the device.

Key: `config.av.allow_12bit`.

## Allow 10bit

Equivalent switch with driver path disable_10bit. Same limitation as Allow 12bit; the separate HDMI colour-depth selection is the clearer starting point.

Key: `config.av.allow_10bit`.

## Sync mode

Platform-specific synchronisation mode, such as slow/hold/black. Controls driver behaviour during synchronisation. Not a replacement for general audio delay.

Key: `config.av.sync_mode`.

## HLG Support

Alternative platform HLG implementation: force enabled, force disabled or controlled by HDMI. These choices do not establish general HDR/SDR conversion support.

Key: `config.av.amlhlg_support`.

## HDR10 Support

Equivalent alternative HDR10 choices: force enabled, force disabled or controlled by HDMI. Test HDMI-controlled automatic handling first.

Key: `config.av.amlhdr10_support`.

## Delay time

Wait before checking source resolution: 0–3000 ms in 50 ms steps, source baseline 400 ms. Too early may read provisional values; too late delays adaptation.

Key: `config.av.autores_delay`.

## Automatic resolution label

Hide the resolution label or show it for 5–15 seconds. Changes the visible information, not the video signal.

Key: `config.av.autores_label_timeout`.

## Force de-interlace

Forces progressive output for interlaced material in relevant automatic modes. The receiver deinterlaces; compare motion and edges against TV processing.

Key: `config.av.autores_deinterlace`.

## Always use smart1080p mode

Combines a TV/TS base output with suitable film rates. Other base resolutions may be offered despite the name. Evaluate together with the remaining automatic settings.

Key: `config.av.smart1080p`.

## Show 480/576p 24fps as

Mapping for 480/576p24 material. Choose an offered output mode supported by both TV and AVR. This does not add source detail; mismatched rates can cause judder.

Key: `config.av.autores_480p24`.

## Show 720p 24fps as

Mapping for 720p24 material. Choose an offered output mode supported by both TV and AVR. This does not add source detail; mismatched rates can cause judder.

Key: `config.av.autores_720p24`.

## Show 1080p 24fps as

Mapping for 1080p24 material. Choose an offered output mode supported by both TV and AVR. This does not add source detail; mismatched rates can cause judder.

Key: `config.av.autores_1080p24`.

## Show 1080p 25fps as

Mapping for 1080p25 material. Choose an offered output mode supported by both TV and AVR. This does not add source detail; mismatched rates can cause judder.

Key: `config.av.autores_1080p25`.

## Show 1080p 30fps as

Mapping for 1080p30 material. Choose an offered output mode supported by both TV and AVR. This does not add source detail; mismatched rates can cause judder.

Key: `config.av.autores_1080p30`.

## Resolution

Refresh rate for the mode, such as 50 Hz, 60 Hz, multi or auto where offered. In PC mode this field may instead name a resolution. With multi/auto the implementation selects submodes; the TV signal display shows actual output.

Key: `config.av.videorate[config.av.videomode[config.av.videoport.value].value]`.

## Display 4:3 content as

How 4:3 material fits the selected display. Pillarbox retains proportions with side bars; pan&scan/zoom crops; non-linear/full stretching distorts. Offered variants depend on the driver.

Key: `config.av.policy_43`.

## Display &gt;16:9 content as

Handling of widescreen or wider material. Letterbox preserves the whole picture with bars; pan&scan/zoom fills by cropping. The same key can therefore be labelled 16:9 or >16:9 according to display aspect.

Key: `config.av.policy_169`.

## Display 16:9 content as

Handling of widescreen or wider material. Letterbox preserves the whole picture with bars; pan&scan/zoom fills by cropping. The same key can therefore be labelled 16:9 or >16:9 according to display aspect.

Key: `config.av.policy_169`.

## Aspect switch

Enables additional letterbox zoom/offset values for aspect switching. The extra rows belong to those picture crops.

Key: `config.av.aspectswitch.enabled`.

## WSS on 4:3

Widescreen signalling for analogue 4:3 output. Helps compatible older TVs choose aspect handling; not HDMI HDR.

Key: `config.av.wss`.

## Show SD as

Fixed output for SD when only HD switches automatically. For example an offered 720p50 mode; match the refresh rate to material and display.

Key: `config.av.autores_sd`.

## Show 2160p 24fps as

Mapping for 2160p24 material. Choose an offered output mode supported by both TV and AVR. This does not add source detail; mismatched rates can cause judder.

Key: `config.av.autores_2160p24`.

## Show 2160p 25fps as

Mapping for 2160p25 material. Choose an offered output mode supported by both TV and AVR. This does not add source detail; mismatched rates can cause judder.

Key: `config.av.autores_2160p25`.

## Show 2160p 30fps as

Mapping for 2160p30 material. Choose an offered output mode supported by both TV and AVR. This does not add source detail; mismatched rates can cause judder.

Key: `config.av.autores_2160p30`.

## Mode for SD (up to 576p)

Output mode for the SD source group up to 576p. Native mode uses the SD fields as the lowest permitted output. The shown 720p examples are not a recommendation to downscale every source.

Key: `config.av.autores_mode_sd[config.av.videoport.value]`.

## Refresh rate for SD

Refresh rate for the SD group mode. Select its resolution first, then a compatible rate. In native mode the SD rate belongs to the lowest mode.

Key: `config.av.autores_rate_sd[config.av.autores_mode_sd[config.av.videoport.value].value]`.

## Show 24p up to 720p / higher than 720p as

Two output rates for 24p: first for sources up to 720p, second for higher resolutions. Example 50p/24p: smaller sources at 50p, larger at 24p. Check both parts of the combination.

Key: `config.av.autores_24p`.

## Show 25p up to 720p / higher than 720p as

Two output rates for 25p: first for sources up to 720p, second for higher resolutions. Example 50p/24p: smaller sources at 50p, larger at 24p. Check both parts of the combination.

Key: `config.av.autores_25p`.

## Show 30p up to 720p / higher than 720p as

Two output rates for 30p: first for sources up to 720p, second for higher resolutions. Example 50p/24p: smaller sources at 50p, larger at 24p. Check both parts of the combination.

Key: `config.av.autores_30p`.

## Refresh rate

Refresh rate for the mode, such as 50 Hz, 60 Hz, multi or auto where offered. In PC mode this field may instead name a resolution. With multi/auto the implementation selects submodes; the TV signal display shows actual output.

Key: `config.av.videorate[config.av.videomode[config.av.videoport.value].value]`.

## Auto SCART switching

Automatic SCART switching with a suitable connector/signal. Not relevant to HDMI-only setups.

Key: `config.av.vcrswitch`.

## Enable preview

Preview of the current simple automatic-resolution group. Can switch HDMI output before final saving. Test only after establishing a working base mode.

Key: `config.av.autores_preview`.

## Mode for HD (up to 720p)

Output mode for the HD source group up to 720p. Native mode uses the SD fields as the lowest permitted output. The shown 720p examples are not a recommendation to downscale every source.

Key: `config.av.autores_mode_hd[config.av.videoport.value]`.

## Refresh rate for HD

Refresh rate for the HD group mode. Select its resolution first, then a compatible rate. In native mode the SD rate belongs to the lowest mode.

Key: `config.av.autores_rate_hd[config.av.autores_mode_hd[config.av.videoport.value].value]`.

## Mode for FHD (up to 1080p)

Output mode for the FHD source group up to 1080p. Native mode uses the SD fields as the lowest permitted output. The shown 720p examples are not a recommendation to downscale every source.

Key: `config.av.autores_mode_fhd[config.av.videoport.value]`.

## Refresh rate for FHD

Refresh rate for the FHD group mode. Select its resolution first, then a compatible rate. In native mode the SD rate belongs to the lowest mode.

Key: `config.av.autores_rate_fhd[config.av.autores_mode_fhd[config.av.videoport.value].value]`.

## Mode for UHD (up to 2160p)

Output mode for the UHD source group up to 2160p. Native mode uses the SD fields as the lowest permitted output. The shown 720p examples are not a recommendation to downscale every source.

Key: `config.av.autores_mode_uhd[config.av.videoport.value]`.

## Refresh rate for UHD

Refresh rate for the UHD group mode. Select its resolution first, then a compatible rate. In native mode the SD rate belongs to the lowest mode.

Key: `config.av.autores_rate_uhd[config.av.autores_mode_uhd[config.av.videoport.value].value]`.

## Lowest Mode

Output mode for the SD source group up to 576p. Native mode uses the SD fields as the lowest permitted output. The shown 720p examples are not a recommendation to downscale every source.

Key: `config.av.autores_mode_sd[config.av.videoport.value]`.

## Refresh rate for 'Lowest Mode'

Refresh rate for the SD group mode. Select its resolution first, then a compatible rate. In native mode the SD rate belongs to the lowest mode.

Key: `config.av.autores_rate_sd[config.av.autores_mode_sd[config.av.videoport.value].value]`.

## Show unknown video format as

Use the next suitable or highest offered mode for an unmapped source format. Highest does not automatically give the best motion.

Key: `config.av.autores_unknownres`.

## Letterbox offsets

Five separate offsets for the offered letterbox zoom levels. Shifts the crop; edges or burned-in subtitles may fall outside. Different from OSD calibration.

Key: `config.av.aspectswitch.offsets[str(aspect)]`.

## Show 1080i as 1080p

Output 1080i as 1080p in the relevant group. Check the supported rate and compare deinterlacing on moving edges.

Key: `config.av.autores_1080i_deinterlace`.


[Picture and sound](../) · [Sources and verification](../quellen/)
