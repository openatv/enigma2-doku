---
title: Tuners and channel scanning
description: Find tuner configuration, prepare reception and run an automatic channel scan in openATV.
---

Tuner configuration tells openATV how to use your reception connection. A channel scan then finds the services available through it. Installing a channel list does not replace correct tuner configuration.

## Configure a tuner

**Menu → Setup → Tuners, Scanning & Reception → Tuner Configuration**

1. Select the tuner you want to configure.
2. Press <kbd>OK</kbd> to open its configuration.
3. Choose the configuration required by your connection. The required values depend on the reception installation or provider.
4. Enter the required details, read the help for each row, and save.

| Topic | What you need to know |
| --- | --- |
| Configuration mode | How the connection is used; “not configured” does not enable reception on that connection |
| Satellite / position | Which positions your installation actually provides |
| Provider / scan parameters | Your cable or terrestrial provider's details where the dialog requires them |
| Additional tuners | Whether and how they are connected; do not copy values simply because labels look similar |

Special reception arrangements will be covered in appendices. The shared workflow uses the details of your own installation.

## Run an automatic scan

**Menu → Setup → Tuners, Scanning & Reception → Automatic Scan**

1. Check which configured reception paths or tuners should be scanned.
2. Read the options for handling existing services. Do not choose to clear existing services if you intend to keep them.
3. Start the scan using the labelled action and wait for completion.
4. Check the number of services found, then open the channel list.
5. Test an available free-to-air channel.

## Check the result

- **No channels found:** Check the reception connection and tuner configuration. Repeating a scan with the same unsuitable values will not fix it.
- **Channels listed without a picture:** Test an available free-to-air channel. A channel list entry does not prove that the service is receivable on your current connection.
- **Channels are difficult to find:** Use [channel lists and bouquets](../../settings/senderlisten/) to organise them.

General **Tuner Settings** are separate from connection configuration. [Look up these options](../../einstellungen/referenz/tuner/).

Sources: [Tuner dialogs](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/lib/python/Screens/Satconfig.py), [channel scanning](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/lib/python/Screens/ScanSetup.py).
