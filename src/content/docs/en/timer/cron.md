---
title: Linux cron and Enigma2 timers
description: Configure Cron Timers, read the five time fields, inspect crontab and understand limitations around deep standby, recordings and daylight saving time.
---

**Cron runs Linux commands on a calendar schedule.** It knows neither EPG programmes nor Enigma2's recording state automatically. Use [recording timers](../aufnahmen/) for recordings and the [Scheduler](../aufgaben/) for wakeup and coordinated power actions.

| Property | Enigma2 timers/tasks | Linux cron |
| --- | --- | --- |
| Understands services and EPG | Recording timers can take programme details | No |
| Considers Enigma2 state | Recording, standby and other checks depend on the action | Only if a custom script implements them explicitly |
| Wakes from deep standby | Supported wakeup appointments are passed to hardware at shutdown | An ordinary cronjob does not program a wakeup alarm |
| Runs with the GUI stopped | Enigma2 timers need Enigma2 | Yes, if Linux and the cron daemon keep running |
| Runs without power | No | No |

## Configure through the interface

Open **Menu → Timers → Cron Timers**. If the manager offers to install Cronie, the corresponding feed package is required. **Service started** and **autostart enabled** are separate states: a saved job will not run while the service remains stopped.

Use **Add** to choose a pattern such as daily and a time. Enter a custom command or select an offered script; the checked manager finds predefined scripts under `/usr/script`. Use absolute paths. Scripts need appropriate execute permissions and a valid interpreter.

After saving, check the overview, running service and an actual test execution. An entry displayed in the interface does not prove that cron executed it.

## The five time fields

```text
Minute Hour Day-of-month Month Weekday Command
15     5    *            *     *       /bin/date >> /tmp/e2-cron-demo.log 2>&1
```

This writes the current time to a local test file **daily at 05:15**. It does not change the clock. In the interface enter only the command beginning with `/bin/date`; the manager generates the time fields.

`*` means every allowed value in that field. `*/15` in the minute field means 0, 15, 30 and 45 each hour. `*/35` means 0 and 35, **not a continuous 35-minute interval**. A job on day 31 is absent in months without that day. A user's crontab has **no extra `root` field**; system files such as `/etc/crontab` use a different form including a username. [Cron syntax](https://www.man7.org/linux/man-pages/man5/crontab.5.html).

## Inspect and edit over SSH

Logged in as root, this displays root's table:

```sh
crontab -l
```

To edit existing entries deliberately:

```sh
crontab -e
```

Add only the desired line, save in the editor, then check with `crontab -l` again. **`crontab -r` deletes the entire user's table**, not just one test entry. Read test output with `cat /tmp/e2-cron-demo.log`; `/tmp` is not permanent storage. Remove the individual demo line after testing. [Crontab utility](https://www.man7.org/linux/man-pages/man1/crontab.1.html).

The checked OpenATV interface uses **`/etc/cron/crontabs/root`**. Installed Cronie uses `/var/spool/cron/crontabs`, which points to the same directory on this receiver. Other images may differ: start with `crontab -l` rather than guessing a directory.

**Version note:** The checked Enigma2 cron manager still invokes `-c` as a directory argument. That meaning does not match Cronie's `crontab`. The GUI save sequence is therefore not claimed as fully tested here. If it fails, use `crontab -e` and report the exact image/Cronie version; do not copy BusyBox options to Cronie without checking them.

## Why a job is missed or hangs

- **Deep standby at the scheduled time:** Linux is not running. An ordinary cronjob does not automatically catch up at boot. Anacron is a separate mechanism and does not replace minute-specific recording timers.
- **Works only in a terminal:** Cron has a different, reduced environment. Check interpreter, absolute paths, permissions and output; do not depend on an SSH session's working directory.
- **NAS offline:** File access may wait. Frequently repeated jobs can then overlap. Use a suitable lock and a clear failure path before putting regular NAS scripts into service.
- **Recording in progress:** Cron does not automatically wait for it. Do not schedule unconditional reboot/shutdown commands as substitutes for Enigma2 tasks.
- **Daylight saving or clock correction:** Behaviour depends on implementation and entry type. Cronie treats smaller clock jumps specially for certain fixed-time jobs; that does not guarantee catch-up after the receiver was off. [Cronie behaviour](https://www.man7.org/linux/man-pages/man8/crond.8.html).

**Verification:** Checked menu integration, implementation, installed Cronie and path mapping. No cronjob was created or started, and GUI saving was not exercised.

OpenATV interface source: [CronTimer](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/lib/python/Screens/CronTimer.py).
