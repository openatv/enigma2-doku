---
title: "e2MDB \u2013 Troubleshoot step by step"
description: "OpenATV 8.0+: Troubleshoot step by step. Detailed e2MDB instructions, purpose and practical examples."
---

## Follow the data to the screen

1. For media, does the file exist at the configured path? For live TV, does the correct event exist in the EPG?
2. Was a database record or queue entry created?
3. Is provider lookup successful, pending, failed or unmatched?
4. Are the required artwork paths and text fields present?
5. Is the skin using the correct data type and source?
6. Does reopening the view change the result, or can the issue be reproduced with a particular title?

## Useful information for support

- Receiver model, OpenATV build, e2MDB version and skin. These help diagnosis even though the handbook is model-neutral.
- The affected function and exact button sequence.
- For media, a meaningful example filename, type and path; anonymise private directories.
- For live TV, channel, programme and time, and how much EPG coverage is available.
- A relevant status excerpt, short log section and screenshot. Do not publish an entire private library or unfiltered configuration.

Use the [OpenATV forum](https://www.opena.tv/) for support and the [e2MDB project](https://github.com/openatv/e2MDB) for project-specific information. The general [bug-reporting guide](../../../hilfe/fehler-melden/) explains how to separate plugin, Enigma2 and image issues.

## Logs

The modes are **Off**, **On** (real errors) and **Verbose**. Temporarily use Verbose for a short reproduction, then return to the appropriate normal level.

The plugin can write to **e2MDB.log**, the **Enigma2 debug log**, or both. In this version the normal file is **/home/root/logs/e2MDB.log**. Size-based rotation is configurable. Before sharing, remove keys, tokens, sensitive URLs and private paths. A short error message can be enough.

Avoid direct SQL changes to a running database, mass cache deletion or edits to standard picon renderers as first troubleshooting steps. Missing information may simply be queued, unavailable from the provider or connected to the wrong skin source.

After a version change, compare commands and screenshots with the installed version. Older guides can describe different cache locations, buttons or a removed backend scheduler.


[Back to e2MDB](../) · [All settings](../optionen/)
