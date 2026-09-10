---
title: "Fallback tuner: reception from another receiver"
description: "OpenATV: Fallback tuner: reception from another receiver."
---


A **fallback receiver** supplies a DVB service over the network when local reception is unavailable and the feature is configured accordingly. The other receiver needs a signal, free resources and an accessible streaming interface. No NAS mount is required.

Enable remote fallback in the reception/fallback settings and select a discovered receiver or enter its IP/URL. The ordinary Enigma2 streaming port is often **8001**, but it must match the remote configuration. See the [fallback reference](../../einstellungen/referenz/fallbacktuner/) for the form and additional options.

| Setting group | Meaning |
| --- | --- |
| Enable remote fallback | Permit use of a remote reception path |
| Receiver / IP / URL / port | Set the source of the DVB stream |
| Alternatives by reception type | DVB-C, DVB-T or ATSC can come from a receiver different from the main source |
| Service/EPG import | Copy remote data; can change local data, so configure deliberately |
| Separate import address | Use a different source for data import and streaming |
| Import on startup/standby | Control update timing where offered |

Test a free-to-air service over stable LAN first. Local and remote service references must match. Remote recordings may occupy the required tuner; network capacity and decoder performance add constraints. Account for settings and power-saving behaviour on both receivers.

Fallback differs from a dedicated SAT>IP client or a coax loop-through tuner. This local example needs no Internet port forwarding. Use authentication according to the remote receiver configuration.

Source revision: [OpenATV SetupFallbacktuner.py](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/lib/python/Screens/SetupFallbacktuner.py).
