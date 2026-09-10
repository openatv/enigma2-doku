---
title: Windows 11 für Netzwerkfreigaben vorbereiten
description: 'Windows-Ordner für OpenATV freigeben: privates Netzwerkprofil, Benutzer und Passwort, Freigabe-/NTFS-Rechte, Firewall sowie Windows als SMB-Client.'
---

Zuerst die Richtung klären: **Wenn die Box auf einen Windows-Ordner zugreift, ist Windows der SMB-Server.** Wenn du im Windows-Explorer Dateien vom NAS oder Receiver öffnest, ist Windows der Client. Eine Änderung am Windows-SMB-Client repariert nicht automatisch eine eingehende Verbindung der Box.

## Windows stellt einen Ordner für die Box bereit

Das Beispiel verwendet einen PC **`MEDIA-PC`**, den Benutzer **`e2recorder`** und die Freigabe **`Recordings`**. Die Namen sind frei gewählte Beispiele. PC und Box müssen sich im selben erreichbaren Heimnetz befinden; ein isoliertes Gast-WLAN ist ungeeignet. Der PC muss während Aufnahme und Wiedergabe eingeschaltet und wach bleiben.

### 1. Öffentlich auf Privat umstellen

Öffne **Start → Einstellungen → Netzwerk und Internet**. Bei Kabelanschluss wählst du **Ethernet**, bei WLAN **WLAN → das verbundene Netzwerk**. Stelle unter **Netzwerkprofiltyp** auf **Privates Netzwerk** um. Das gilt nur für ein eigenes, vertrauenswürdiges Netz; öffentliche Netze behalten ihr öffentliches Profil. [Microsoft: Netzwerkprofile](https://support.microsoft.com/en-us/windows/experience/connectivity-networking/essential-network-settings-and-tasks-in-windows).

Wechselt die IP-Adresse des PCs, kann eine gespeicherte Serveradresse ungültig werden. Nutze einen zuverlässig auflösbaren PC-Namen oder eine DHCP-Reservierung, wenn du mit einer festen Adresse arbeiten möchtest.

### 2. Netzwerkerkennung und Freigabe einschalten

Öffne **Einstellungen → Netzwerk und Internet → Erweiterte Netzwerkeinstellungen → Erweiterte Freigabeeinstellungen**. Alternativ suche in den Einstellungen nach „Erweiterte Freigabeeinstellungen“.

Im Bereich **Private Netzwerke** aktivierst du **Netzwerkerkennung** und **Datei- und Druckerfreigabe**. Unter **Alle Netzwerke** bleibt **Kennwortgeschütztes Freigeben eingeschaltet**. Die Bezeichnungen können mit Windows-Updates leicht variieren.

Die Netzwerkerkennung erleichtert das Auffinden. Sie erstellt noch keinen freigegebenen Ordner und vergibt keine Rechte. Microsoft beschreibt die Freigabefunktionen unter [Dateifreigabe im Netzwerk](https://support.microsoft.com/en-us/windows/experience/connectivity-networking/file-sharing-over-a-network-in-windows); dieses Handbuch verwendet dabei ausdrücklich Konten mit Passwort.

### 3. Einen eigenen Benutzer mit Passwort anlegen

Öffne **Einstellungen → Konten → Andere Benutzer → Konto hinzufügen**. Wähle **Ich kenne die Anmeldeinformationen für diese Person nicht** und anschließend **Benutzer ohne Microsoft-Konto hinzufügen**. Lege beispielsweise `e2recorder` mit eigenem Passwort an und belasse den Kontotyp bei **Standardbenutzer**. [Microsoft: Benutzerkonten verwalten](https://support.microsoft.com/en-us/windows/security/identity-signin/manage-user-accounts-in-windows).

Dieses Konto dient dem Dateizugriff; es benötigt keine Administratorrechte. Verwende ein echtes Kontopasswort, keine Windows-Hello-PIN. Die PIN der lokalen PC-Anmeldung ist nicht das Passwort für den SMB-Zugriff der Box.

### 4. Ordner und beide Berechtigungsebenen einrichten

Lege einen eigenen lokalen Ordner an, beispielsweise **`C:\E2Recordings`** auf einem geeigneten Laufwerk mit ausreichend Platz. Verwende dafür einen tatsächlich lokal verfügbaren Ordner, keinen nur online verfügbaren Cloud-Platzhalter.

1. Rechtsklick auf den Ordner → **Eigenschaften → Freigabe → Erweiterte Freigabe**.
2. **Diesen Ordner freigeben** aktivieren und als Freigabenamen **`Recordings`** verwenden.
3. Unter **Berechtigungen** das Konto `MEDIA-PC\e2recorder` hinzufügen. Für Aufnahmen **Lesen und Ändern** erlauben; Vollzugriff ist nicht nötig. Für reine Wiedergabe genügt Lesen.
4. Unter **Eigenschaften → Sicherheit** dasselbe Konto hinzufügen und für Aufnahmen **Ändern** auf diesen Ordner erlauben. Auf einem NTFS-Laufwerk ist dies die zweite, unabhängige Rechteebene.
5. Übernehmen und kontrollieren, dass keine andere Regel den Zugriff verweigert. Vermeide eine pauschale Freigabe des ganzen Laufwerks.

**Freigaberechte und Dateirechte müssen beide passen.** Schreibrecht auf nur einer Ebene reicht nicht. Löschen und Umbenennen gehören zum Aufnahmealltag, etwa beim Verwalten von Begleitdateien.

### 5. Die Firewall gezielt erlauben

Die Windows-Firewall bleibt **eingeschaltet**. Öffne bei blockierter Verbindung **Windows-Sicherheit → Firewall- und Netzwerkschutz → Erweiterte Einstellungen**, oder starte `wf.msc`.

Prüfe unter **Eingehende Regeln** die vorhandene Regel **Datei- und Druckerfreigabe (SMB eingehend / SMB-In)** für **TCP 445**. Sie muss im **privaten Profil** aktiviert sein und die Verbindung zulassen. Begrenze den Gültigkeitsbereich bei Bedarf auf die Boxadresse beziehungsweise das eigene lokale Subnetz. Aktiviere nicht wahllos Regeln für alle Profile.

Prüfe für die Suche außerdem die vorgesehenen **Netzwerkerkennungsregeln** im privaten Profil. Bei einer Firewall eines Drittanbieters müssen dieselben vorgesehenen Zugriffe dort erlaubt werden. Regeln und Profile erklärt Microsoft unter [SMB-Freigabeports](https://learn.microsoft.com/en-us/windows-server/storage/file-server/best-practices-analyzer/smb-open-file-sharing-ports) und [SMB-Verkehr absichern](https://learn.microsoft.com/en-us/windows-server/storage/file-server/smb-secure-traffic).

**Eine korrekt erlaubte SMB-Verbindung garantiert noch keine Anzeige in jeder Gerätesuche.** Windows und Enigma2 können unterschiedliche Erkennungsverfahren verwenden. Manuelles Eintragen des Servers ist ein normaler Weg und benötigt kein SMB1. Auch ein blockierter Ping allein beweist nicht, dass TCP 445 blockiert ist.

### 6. In OpenATV verbinden

Lege auf der Box einen [SMB/CIFS-Mount](../smb-cifs/) an:

| Feld | Wert für dieses Beispiel |
| --- | --- |
| Server | Erreichbarer PC-Name `MEDIA-PC` oder seine tatsächliche IP |
| Remote-Pfad | `Recordings`, nicht `C:\E2Recordings` |
| Benutzername | `e2recorder` |
| Passwort | Passwort dieses Windows-Kontos |
| Optionale Einstellungen | Falls eine Kontoqualifizierung nötig ist: `domain=MEDIA-PC` |
| SMB-Version / Modus | SMB3 / autofs |
| Lokale Freigabe | `windows-recordings` |

Öffne `/media/autofs/windows-recordings`. Prüfe Lesen, Erstellen, Umbenennen und Löschen einer entbehrlichen Testdatei. Danach erst das [Aufnahmeziel](../../speicher/nas-aufnahmen/) auswählen und eine kurze Aufnahme testen. Für einen dauerhaft ausgeschalteten oder schlafenden PC hilft kein Mount-Schalter; beachte [NAS-Ausfälle und Spinner](../autofs-fstab/).

## Windows greift als Client auf NAS oder Box zu

Öffne im Explorer **`\\SERVER\Recordings`**, wobei Server und Freigabename vom NAS beziehungsweise Samba-Server stammen. Nutze bei Bedarf **Dieser PC → … → Netzlaufwerk verbinden**, wähle einen freien Buchstaben und **Verbindung mit anderen Anmeldeinformationen herstellen**. Melde dich mit einem Konto **des Servers** an.

Ein NFS-Export allein ist keine SMB-Freigabe für den Explorer. Soll Windows Dateien einer Enigma2-Box über SMB lesen, benötigt diese einen eingerichteten Samba-Server und einen freigegebenen Ordner. **Samba kann eine eigene Passwortdatenbank verwenden**; `passwd` für den Linux-Root-Zugang richtet nicht automatisch ein Samba-Konto ein. Verwende die Kontoeinrichtung der jeweiligen Serverkonfiguration. Für reinen Dateitransfer zur Box ist [SFTP](../fernzugriff/) eine weitere Möglichkeit.

Hat Windows alte Zugangsdaten gespeichert, trenne die betroffene Netzwerkverbindung und kontrolliere den passenden Eintrag in der **Anmeldeinformationsverwaltung → Windows-Anmeldeinformationen**. Ändere nur den Eintrag für diesen Server. Andere noch offene Verbindungen zu demselben Server können die Anmeldung mit einem zweiten Konto verhindern.

## Windows 11, Signierung und alte Tipps

Windows 11 **24H2 Pro, Enterprise und Education** verlangen standardmäßig SMB-Signierung für eingehende und ausgehende Verbindungen; Home hat andere Standardvorgaben. Weitere Richtlinien können Anforderungen verändern. Stelle kompatible, aktuelle Clients/Server und Konten mit Passwort bereit. **Signierung nicht als allgemeine Fehlerbehebung abschalten und unsichere Gastanmeldung nicht freigeben.** [Microsoft: SMB-Signierung](https://learn.microsoft.com/en-us/windows-server/storage/file-server/smb-signing).

**SMB1 nicht installieren; Firewall und Kennwortschutz nicht abschalten.** Eine alte NAS-Firmware oder ein nicht kompatibler Receiver-Client wird durch diese Maßnahmen nicht zu einer guten aktuellen Konfiguration. Prüfe stattdessen Versionen, Rechte, Konto, Pfad und gezielte Firewall-Regeln. [Microsoft: SMB1 ist veraltet](https://learn.microsoft.com/en-us/windows-server/storage/file-server/troubleshoot/smbv1-not-installed-by-default-in-windows).

**Prüfstand:** Ablauf mit aktueller Microsoft-Dokumentation und dem OpenATV-Mountdialog abgeglichen. Auf dem PC des Betreibers wurden keine Benutzer, Freigaben, Netzwerkprofile oder Firewall-Regeln verändert; ein vollständiger Windows-Aufnahmetest steht aus.
