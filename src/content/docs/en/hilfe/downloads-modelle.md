---
title: Downloads, supported models and support
description: Find the correct OpenATV image, check available devices and locate model-specific flashing instructions and forum support.
---

Most Enigma2 controls are shared. **The image file must still match the exact receiver.** Suffixes such as Plus, SE, V2, Combo or a different hardware revision can matter.

## Where can I download OpenATV?

Open the [OpenATV image downloads](https://images.mynonpublic.com/openatv/index.php?v=current). Search for a device, filter by manufacturer and switch between available versions. Selecting a device shows its available files, build dates and image types.

1. Read the exact model from the receiver or its device information.
2. Find that model on the download page and check its manufacturer.
3. Select the intended version and read the relevant forum notices.
4. Choose the archive **for your installation method**. Labels such as USB, MMC, Multi and Recovery identify different packages; they are not interchangeable.
5. Keep a note of the filename and date for any support request.

The `v=current` link is a changing entry point. It does not mean every receiver supports every newer release series. An archived image also does not establish that the device still receives builds in all current series.

## Which models are supported?

The download site's **device search** is the maintained directory of available images. This handbook does not duplicate a fixed device count or a list that becomes outdated when another model appears. Check availability in the selected release series. If your model is missing, verify its spelling, hardware suffix and forum section. Do not install an image for a similarly named device.

These guides remain model neutral. A model name visible in a screenshot identifies the example receiver only.

## Where are the flashing instructions for my receiver?

In the [OpenATV forum](https://www.opena.tv/), follow **OpenATV Images → Hersteller → manufacturer or model**. You can open the [manufacturer section](https://www.opena.tv/viewforum.php?f=454) directly. Look for pinned guides and search for **Flashen**, **USB**, **Recovery** and the exact model name.

That section covers device-specific requirements: USB filesystem, directory name, USB port, power-on button, display message and boot/recovery menu choice. See [USB installation](../../wartung/usb-installation/) for the shared preparation steps.

## Asking a useful support question

[Report a problem in the forum or on GitHub](../fehler-melden/) helps you choose between Enigma2, OE-Alliance and a plugin project, and includes a copyable template.

Search the appropriate model or topic section first. A new question should include:

- exact model, OpenATV version and build date;
- skin and affected extension;
- steps that reproduce the problem and the expected result;
- whether this followed a clean installation, software update or Flash Online, and whether settings were restored;
- relevant reception or network connection details;
- the error message and its time in a [debug or crash log](../logs-diagnose/).

For example, **“NAS mount missing after Flash Online with AutoRestore”** describes the problem better than a general request for help. Include the device and version details above. Do not publish passwords, access tokens or complete settings backups. Review logs for personal information while preserving the error context. A text attachment is more useful for logs than a photograph of the TV.

Future device-specific additions belong in [Appendices](../../anhaenge/). The shared foundation remains the same across devices.
