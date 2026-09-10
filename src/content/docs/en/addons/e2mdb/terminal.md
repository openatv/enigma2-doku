---
title: "e2MDB \u2013 Terminal and backend status"
description: "OpenATV 8.0+: Terminal and backend status. Detailed e2MDB instructions, purpose and practical examples."
---

These commands are for experienced users and run **on the receiver**, not in Windows Python. Prefer SSH. Telnet transmits unencrypted data and should only be used in a trusted local network if the receiver permits it.

## Connect and select the plugin directory

~~~sh
ssh root@192.168.1.50
# Alternative only if enabled on the receiver:
# telnet 192.168.1.50

cd /usr/lib/enigma2/python/Plugins/Extensions/e2MDB
python3 e2mdbctl.py status
~~~

Replace the IP address and login with those of your receiver. The control tool contacts the backend's local Unix socket, normally **/var/run/e2mdb/e2mdbd.sock**. No provider API key belongs in these commands.

## Quick health check

~~~sh
python3 e2mdbctl.py status
python3 e2mdbctl.py db status
python3 e2mdbctl.py scan paths
python3 e2mdbctl.py live-queue status
python3 e2mdbctl.py jobs current
python3 e2mdbctl.py jobs history
~~~

Responses are JSON. `success: true` initially means that the request succeeded. For a running job, also inspect `job.state`, `phase`, `current`, `total` and `message`. A completed job may still include individual no-match results or provider errors.

~~~json
{
  "success": true,
  "status": {
    "daemon": {"running": true},
    "job": {
      "state": "running",
      "type": "scan_and_enrich",
      "phase": "provider_lookup"
    }
  }
}
~~~

This is an abbreviated structural example, not a complete real status response. Automation should not rely only on the shell exit code: a normally exiting control process can return a JSON response with `success: false`.

**scan paths** checks configured directories. Optional file counting can traverse a large or slow collection and is not a lightweight default check. None of the commands above requests a new media scan.


[Back to e2MDB](../) · [All settings](../optionen/)
