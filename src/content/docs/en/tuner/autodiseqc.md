---
title: "AutoDiSEqC: identify satellites on switch ports"
description: "OpenATV: AutoDiSEqC: identify satellites on switch ports."
---


**AutoDiSEqC checks known reference transponders and maps identified satellites to switch ports.** It is neither a blind scan nor an instrument that discovers every satellite position worldwide.

## Use automatic detection

1. In simple tuner configuration select the appropriate Single, A/B or A/B/C/D mode.
2. Set the satellite selection for the ports to be identified to **Automatic**.
3. If shown, select the **Auto DiSEqC search order** or satellite group appropriate for the installation. This limits candidates and shortens the check.
4. Saving invokes the detection process. It requires the tuner and may interrupt reception.
5. Check and save the resulting mapping, then perform a normal service scan.

For Astra/Hotbird, the test must identify both connected ports. Failure to identify a port does not prove that no signal is present: changed reference transponders, dish alignment or an unsuitable switch cascade can prevent detection. Enter the mapping manually when it is known.

## Limitations

The built-in list covers selected positions and reference data. The code checks network identifiers as well as lock. An outdated reference can therefore fail even when reception is possible. **Unicable User Bands, PINs and motor location data are not discovered automatically.** Obtain those from the installation operator. AutoDiSEqC is not a substitute for the connection details of a shared building system.

Source revision: [OpenATV AutoDiseqc.py](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/lib/python/Screens/AutoDiseqc.py).
