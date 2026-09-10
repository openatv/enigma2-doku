---
title: "e2MDB – Anhang A Backend per Terminal"
description: "OpenATV ab 8.0: Anhang A Backend per Terminal. Einrichtung, Bedeutung und praktische Hinweise zu e2MDB."
---

Diese Abfragen richten sich an erfahrene Anwender. Sie werden auf der Box ausgeführt, nicht in einer Windows-Python-Installation. SSH ist Telnet vorzuziehen; Telnet überträgt Daten unverschlüsselt und gehört ausschließlich in ein vertrauenswürdiges lokales Netz.

## Verbinden und Arbeitsverzeichnis wählen

```text
ssh root@192.168.1.50
# Alternativ, wenn auf der Box freigegeben:
# telnet 192.168.1.50

cd /usr/lib/enigma2/python/Plugins/Extensions/e2MDB
python3 e2mdbctl.py status
```

IP-Adresse und Anmeldung an die eigene Box anpassen. Das Werkzeug fragt den lokalen Unix-Socket des Backends ab. Dazu ist kein API-Key im Befehl nötig. Der Standard-Socket liegt unter /var/run/e2mdb/e2mdbd.sock.

## Schneller Gesundheitscheck

```text
python3 e2mdbctl.py status
python3 e2mdbctl.py db status
python3 e2mdbctl.py scan paths
python3 e2mdbctl.py live-queue status
python3 e2mdbctl.py jobs current
python3 e2mdbctl.py jobs history
```

Die Antworten sind JSON. „success: true“ bedeutet zunächst, dass die Anfrage erfolgreich war. Für einen laufenden Auftrag zusätzlich job.state, phase, current, total und message betrachten. Ein abgeschlossener Job kann einzelne No-match-Ergebnisse oder Anbieterfehler enthalten.

```text
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
```

Dieses gekürzte Beispiel zeigt nur die Struktur, keine vollständige Statusantwort. Bei Automatisierung nicht allein den Shell-Rückgabewert auswerten: Manche fachlich fehlgeschlagenen Antworten werden als JSON mit success=false geliefert, obwohl der Prozess regulär beendet wurde.

„scan paths“ prüft die konfigurierten Pfade. Die zusätzliche Dateizählung kann eine große oder langsame Bibliothek durchlaufen und ist kein leichtgewichtiger Standardcheck.

[Zur e2MDB-Übersicht](../) · [Alle Einstellungen](../optionen/)
