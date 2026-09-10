---
title: "Restart the wizard and restore your settings"
---

For a deliberate repeat of first startup, **stop Enigma2, rename `/etc/enigma2/settings`, then start Enigma2 again**. Without the previous values, Enigma2 uses its defaults, including enabled first-start flags. This was performed for the [German and English picture series](../startassistent/).

This resets far more than a welcome screen: settings include tuner, video, operating, skin and many plugin preferences. Use the regular menu when you only need to change a single option.

## 1. Prepare and back up

1. Finish recordings, timeshift and active tasks. Check existing timers and automatic plugin jobs: renaming settings does not remove their separate files.
2. Make a complete [settings backup](../../wartung/backup-restore/) and copy it to another computer. It may contain credentials and must not go into a public repository.
3. Keep the network address, mount points and reception details available. You need the remote control for the new wizard.
4. Connect over [SSH](../../netzwerk/fernzugriff/). Local Ethernet makes this test easier.

**Installed plugins remain installed.** Their defaults may enable different automatic actions after the reset. Our documentation test additionally suspended background tasks and existing timers temporarily. Renaming settings alone does not do this.

## 2. Stop Enigma2

```sh
init 4
```

Wait briefly, then check:

```sh
pidof enigma2
```

Change the file only when **no process number** is returned. A running Enigma2 keeps settings in memory and can rewrite them when exiting. The TV may retain the last picture while Enigma2 is stopped; that does not prove the process is still running.

In this OpenATV startup arrangement, `init 4` stops the GUI; Linux and the existing SSH connection normally remain available. It does not power off the receiver.

## 3. Rename the file and start again

These lines protect an existing backup filename from accidental overwriting:

```sh
if [ -e /etc/enigma2/settings.before-wizard ]; then
    echo 'settings.before-wizard exists: check the previous backup first.'
else
    mv /etc/enigma2/settings /etc/enigma2/settings.before-wizard && init 3
fi
```

If an error occurs, check the path and backup before continuing. Do not substitute an empty or guessed file. The copy **outside the receiver** remains important: `settings.before-wizard` is only one file and still resides in the configuration directory.

After `init 3`, complete the [full start wizard](../startassistent/) on the TV. Language, video output and tuners initially use image defaults. Existing bouquets, mount files and plugin packages remain; actions during the wizard can nevertheless alter them.

## 4. Restore the previous settings

Stop Enigma2 again with `init 4` and check with `pidof enigma2`. You can then retain the newly created settings as a test result and copy the original settings back:

```sh
if [ ! -f /etc/enigma2/settings.before-wizard ]; then
    echo 'Original settings are missing: stop and check your backup.'
elif [ -e /etc/enigma2/settings.wizard-result ]; then
    echo 'settings.wizard-result exists: preserve it before continuing.'
else
    cp -p /etc/enigma2/settings /etc/enigma2/settings.wizard-result &&
    cp -p /etc/enigma2/settings.before-wizard /etc/enigma2/settings &&
    init 3
fi
```

**Restoring settings alone does not undo a channel scan, mount change or package installation.** Restore affected data from the complete backup too if you performed those actions. For our captures, channel/timer files and external network/mount configuration were therefore backed up and checked afterwards as well.

The root password is not stored in this settings file. This procedure is not a password reset. The installed image and current MultiBoot slot also remain intact.

## If the wizard does not appear

| Observation | Possible cause / next step |
| --- | --- |
| The previous configuration immediately returns | Check [AutoRestore](../../wartung/autorestore/). Prepared `/media/…/images/config/settings` data can trigger restoration. Do not blindly delete a needed backup. |
| Settings were immediately rewritten | Enigma2 may still have been running. Repeat the stop and process check. |
| Only part of the wizard appears | Existing settings may already set `config.misc.firstrun`, `config.misc.videowizardenabled` or `config.misc.wizardLanguageEnabled` to `False`. Changing one flag is different from a complete repeat of first startup. |
| SSH disconnects after a network change | Find the new address in the router and reconnect; use the TV network dialog if necessary. |
| The GUI no longer starts | Restore the verified original configuration with Enigma2 stopped, then [inspect logs](../../hilfe/logs-diagnose/). |

A repeat of the wizard differs from [Factory Reset](../../system/werkseinstellungen/) and [installing a new image](../../wartung/usb-installation/). Each changes a different scope of data.
