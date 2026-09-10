---
title: "Single tuner: recording and watching simultaneously"
description: "OpenATV: Single tuner: recording and watching simultaneously."
---


**One tuner receives one tuned frequency or transponder/multiplex at a time.** That multiplex may carry several television and radio services. This principle applies to satellite, cable and terrestrial DVB.

| Situation with one frontend | What is normally possible |
| --- | --- |
| Record and watch the same service | Yes, the stream can be shared |
| Two services on the same satellite transponder | Often possible simultaneously |
| Two services in the same DVB-C multiplex | Also often possible; not limited to the currently selected service |
| Two services in the same DVB-T multiplex | Often possible |
| DVB-T2 with different PLPs | Also depends on PLP, frontend and driver; the same RF frequency alone does not guarantee sharing |
| Two different frequencies/transponders | Not simultaneously with one conventional tuner |
| DVB-C and DVB-T2 on the same hybrid frontend | Alternately only, even with an external switch |
| Play an existing HDD recording | Playback does not require a reception tuner; decoder resources still matter |

**An example without ageing channel frequencies:** multiplex M contains services A, B and C. Recording A may still allow watching B. Service D belongs to multiplex N and needs another usable tuner for simultaneous reception. Find the actual multiplex parameters in the service/transponder information.

## Why is a service still greyed out?

Enigma2 considers occupied tuners, wiring and reception parameters. Decryption/CAM restrictions, demux/decoder limits, picture-in-picture and drivers can impose further limits. Being able to record two streams does not automatically mean that two pictures can be decoded simultaneously.

With a conventional satellite cable, **polarisation and band** add another constraint: looped-through tuners depend on the shared selected plane. A single tuner still cannot receive two transponders. “Equal to tuner A” copies configuration; it creates neither a cable nor additional reception hardware.

## Check in practice

Start a short recording on a free-to-air service, open the channel list and check which services remain available. Use [timer conflict checks](../../timer/aufnahmen/) for a second timer. Independent paths require suitable additional feeds or correctly allocated [Unicable bands](../unicable/). FBC extensions will cover [satellite](../fbc-sat/) and [cable](../fbc-kabel/).

Background: [DVB transport streams and multiplexes](https://dvb.org/solutions/coding-transport/).

Source revision: [OpenATV dvb.cpp](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/lib/dvb/dvb.cpp).
