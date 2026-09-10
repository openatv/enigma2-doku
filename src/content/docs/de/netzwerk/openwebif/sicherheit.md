---
title: "OpenWebif-Zugang absichern und prüfen"
description: "OpenWebif-Zugang absichern und prüfen – OpenATV Enigma2"
---

OpenWebif kann die Box fernbedienen und echte Konfigurationen, Timer und Dateien verändern. Verwende einen passenden Zugangsschutz auch im Heimnetz.

## Passwort und Anmeldung

1. Über **Menü → Einstellungen → Netzwerk → Passwort einrichten** ein root-Passwort setzen oder per SSH `passwd` ausführen. Die [Fernzugriffsanleitung](../../fernzugriff/) beschreibt die Schritte.
2. In OpenWebif **Authentifizierung für HTTP** einschalten. Bei aktiviertem HTTPS auch dessen **eigene Authentifizierung** prüfen.
3. In einem frischen privaten Browserfenster kontrollieren, dass ohne Anmeldung kein Zugriff möglich ist. Eine bereits angemeldete Sitzung ist kein geeigneter Test.
4. Wenn Streaming verwendet wird, **Authentifizierung für Streaming** einstellen und den tatsächlichen Player prüfen. Webport und Streamingport sind getrennte Zugangswege.

Das root-Passwort ist nicht der Enigma2-Jugendschutz-PIN und nicht automatisch das Passwort jedes Plugins. Samba, NAS, DNSCrypt-Monitoring und andere Dienste können eigene Benutzerdaten verwenden. Der Schalter **externen root-Zugriff verbieten** lässt im geprüften Code private/lokale Netze ausgenommen; er beschränkt nicht generell alle root-Zugriffe.

## HTTPS und Zertifikate

HTTPS verschlüsselt die Webverbindung. Ein korrektes Zertifikat muss zum aufgerufenen Namen passen; die Box braucht eine korrekte Uhrzeit. Die installierte Webif-Version kann eigene PEM-Dateien unter **`/etc/enigma2/cert.pem`** und **`/etc/enigma2/key.pem`** verwenden. Der private Schlüssel darf nicht öffentlich geteilt werden. **Client-Zertifikate** sind eine zusätzliche, gesondert einzurichtende Anforderung; sie sind nicht dasselbe wie das Serverzertifikat. Quelle: [OpenWebif-Zertifikate](https://github.com/oe-alliance/OpenWebif#custom-ssl-certificate).

HTTPS für OpenWebif verschlüsselt nicht automatisch FTP, Telnet oder jeden Stream. HTTP-Basic-Anmeldung allein ist keine Transportverschlüsselung. Für Zugriff von unterwegs einen verwalteten **VPN-Zugang** verwenden und keine pauschalen Router-Portfreigaben für Webif, SSH, FTP und Streaming einrichten. Eine VPN-Option im Webif ersetzt keinen VPN-Dienst.

## Jugendschutz

**Kindersicherung aktivieren / Enable Parental Control** ergänzt den [Enigma2-Jugendschutz](../../../entschluesselung/jugendschutz/) für unterstützte Webif-Funktionen. Teste gesperrte Sender, Aufnahmeverzeichnisse und die tatsächlich verwendeten Player. Ein PIN schützt nicht automatisch Samba-/NFS-Dateizugriffe. Auch Fernbedienung, Terminal und Zusatzplugins besitzen mächtige Zugangswege.

## Verbindung oder Darstellung funktioniert nicht

| Symptom | Prüfen |
| --- | --- |
| Seite nicht erreichbar | Aktuelle IP, Port, Protokoll, Adapter, Enigma2 läuft, OpenWebif eingeschaltet? Nicht versehentlich Deep Standby? |
| IP funktioniert, Name nicht | DNS/mDNS und Hostname; [DNS-Anleitung](../../dns/) |
| 401 / Anmeldung wiederholt | Benutzer/Passwort und Authentifizierung der verwendeten HTTP-/HTTPS-Verbindung. Browser-Sitzung neu beginnen. |
| 403 / Zugriff verweigert | Netzbereich, Zugriff ohne Anmeldung, VPN-Einstellung und root-Beschränkung prüfen. Nicht einfach sämtliche Schutzschalter deaktivieren. |
| Zertifikatswarnung | Name, Vertrauenskette und Uhrzeit prüfen; nicht dauerhaft Zertifikatsprüfungen abschalten. |
| Webif geht, Stream nicht | Streamport, Stream-Anmeldung, Tunerbelegung, Format und Player prüfen. |
| Nach Update fehlen Bedienelemente | Seite vollständig neu laden, Browsercache und Erweiterungen prüfen; Classic/Modern unterscheiden. |
| Pluginseite fehlt | Plugin und Webif-Integration installiert? Eine fehlende Seite ist nicht automatisch ein Netzwerkfehler. |
| Fehlerseite / Traceback | Fehler reproduzieren, bei Bedarf Debug-Traceback vorübergehend aktivieren, sensible Daten vor dem Teilen entfernen. Danach Debug wieder aus. |

Für Meldungen Version von OpenWebif und Image, Browser/Version, Classic/Modern, betroffene Funktion und genaue Schritte nennen. Logs und Bilder vor Veröffentlichung prüfen. [OpenWebif-Issues](https://github.com/oe-alliance/OpenWebif/issues) betreffen dieses Plugin; [OpenATV-Supportwege](../../../hilfe/fehler-melden/) helfen bei der Zuordnung.
