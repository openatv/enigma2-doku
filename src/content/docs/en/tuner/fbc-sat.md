---
title: "DVB-S FBC – foundation and planned extension"
description: "OpenATV: DVB-S FBC – foundation and planned extension."
---


**FBC (Full Band Capture) can supply multiple demodulators from a broadly captured input signal.** This increases the number of concurrently usable transponders/multiplexes while retaining wiring and driver limits.

This chapter will be extended using a suitable **DVB-S FBC receiver**, with native setup captures and verified recording scenarios. The current single-tuner examples are not a complete FBC guide.

For satellite, the key distinction is between conventional planes over one/two cables and Unicable with enough allocated User Bands. A conventional cable still supplies only the selected plane; multiple demodulators can receive suitable transponders within it. Internal links, root tuners and SCR allocations will be demonstrated later.

The extension will include wiring drawings, input/tuner mapping, full option examples, parallel recordings and troubleshooting. Until then, use the [connection basics](../verkabelung/) and [single-tuner limits](../single-tuner/); do not copy invented tuner letters or model-specific values.

Source revision: [OpenATV Satconfig.py](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/lib/python/Screens/Satconfig.py).
