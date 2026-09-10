---
title: "Check reception: lock, SNR, BER and common faults"
description: "OpenATV: Check reception: lock, SNR, BER and common faults."
---


**A high signal level alone does not prove correct reception.** Select a known free-to-air service and open signal/transponder information or **Satfinder** from Reception where installed.

| Readout | Interpretation |
| --- | --- |
| Lock | Frontend synchronised to a suitable carrier; does not prove decryption or video-codec support |
| SNR / C/N in dB | Useful signal relative to noise; more useful for comparing one installation than inconsistent percentage scales |
| SNR percentage | Driver-specific scale; do not compare arbitrary receivers |
| AGC / signal strength | Level/gain information; higher does not automatically mean better |
| BER | Bit-error indication if supplied by the driver; absent or permanently zero readings alone do not prove quality |
| Frequency, polarisation, SR, network IDs | Confirm that the expected multiplex is being received |

Opening Satfinder can allocate a tuner or interrupt live TV. Select a suitable transponder and observe stable values. Choosing another position on a motorised installation can move the dish. Avoid experimenting during important recordings.

## Narrow down the fault

| Symptom | Check first |
| --- | --- |
| No lock anywhere | Correct input, cable, enabled tuner, LNB/system type and current reference frequency |
| Only Astra or only Hotbird | DiSEqC port mapping, alignment and switch output |
| Only H/V or only low/high | Voltage, 22 kHz, Quattro plane mapping and LNB parameters |
| Failure when another receiver zaps | Duplicate Unicable UB, unsuitable splitter or shared legacy plane |
| Cable works but aerial through TAR 5 does not | 5 V setting and actual output, correct relay socket, aerial and DC blocker |
| Aerial works but cable does not | Return to 0 V, CATV feed and cable scan data |
| Lock and service name but no picture | Encryption, service availability, [player/codec](../../wiedergabe/formate/) |
| Service missing after scan | Correct position/region, scan scope, NIT, FTA filter and frequency-list freshness |
| Weather-related or persistent breakup | Alignment, connectors, moisture, level/overload and supply |

For a report, provide reception type, wiring diagram, relevant settings, frequency parameters, signal readings and the precise failure. Redact PINs and private data. [Report faults in the forum or an issue](../../hilfe/fehler-melden/).

Source revision: [OpenATV plugin.py](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/lib/python/Plugins/SystemPlugins/Satfinder/plugin.py).
