---
title: "DVB-C FBC – foundation and planned extension"
description: "OpenATV: DVB-C FBC – foundation and planned extension."
---


**FBC (Full Band Capture) can supply multiple demodulators from a broadly captured input signal.** This increases the number of concurrently usable transponders/multiplexes while retaining wiring and driver limits.

This chapter will be extended using a suitable **DVB-C FBC receiver**, with native setup captures and verified recording scenarios. The current single-tuner examples are not a complete FBC guide.

For cable, one input can provide several multiplexes to the demodulators. Their number, frequency coverage, internal mapping, decryption and driver limits will be documented with the intended test receiver.

The extension will include wiring drawings, input/tuner mapping, full option examples, parallel recordings and troubleshooting. Until then, use the [connection basics](../verkabelung/) and [single-tuner limits](../single-tuner/); do not copy invented tuner letters or model-specific values.

Source revision: [OpenATV Satconfig.py](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/lib/python/Screens/Satconfig.py).
