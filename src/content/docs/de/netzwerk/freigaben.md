---
title: NAS und Netzwerkfreigaben einbinden
description: Eine Netzwerkfreigabe in openATV mounten. SMB, CIFS, NFS, autofs und lokale Speicherpfade verständlich erklärt.
---

Eine Netzwerkfreigabe macht einen Ordner auf einem NAS oder Server in openATV nutzbar. Das **Mounten** verbindet die entfernte Freigabe mit einem lokalen Verzeichnis. Dadurch können Anwendungen darauf ähnlich wie auf einen angeschlossenen Datenträger zugreifen.

## Was du benötigst

- Eine funktionierende [Netzwerkverbindung](../lan/).
- Eine auf dem NAS oder Server bereits eingerichtete Freigabe.
- Servername oder IP-Adresse, Freigabename beziehungsweise NFS-Exportpfad und die erforderlichen Zugriffsrechte.
- Bei SMB gegebenenfalls Benutzername und Passwort eines NAS-Benutzers.

Die Freigabe muss auch auf dem Server freigegeben sein. Ein Eintrag in openATV erzeugt keinen Ordner und keine Berechtigung auf dem NAS.

## Menüweg

**Menü → Einstellungen → Netzwerk → Netzwerkfreigabeübersicht**

Mit **Durchsuchen** kannst du nach angebotenen Freigaben suchen. Für einen bekannten Server lässt sich eine Freigabe auch manuell anlegen.

## Eine SMB-Freigabe manuell anlegen

1. Öffne die Netzwerkfreigabeübersicht und drücke <kbd>MENU</kbd>.
2. Wähle **Einhängepunkt manuell hinzufügen** (*Add Mount Manually*).
3. Trage die folgenden Angaben passend zu deiner Freigabe ein. `nas` und `Aufnahmen` sind hier nur Beispiele.

| Feld | Beispiel und Erklärung |
| --- | --- |
| Aktiviert | Ja – die Definition soll verwendet werden |
| Protokoll | SMB / CIFS – beide Namen beziehen sich hier auf Windows-artige Netzwerkfreigaben |
| Server | `nas` oder die tatsächliche IP-Adresse des NAS |
| Entfernter Pfad | `Aufnahmen` – der freigegebene Name auf dem NAS; Server und Freigabe getrennt eintragen |
| Lokale Freigabe | `nas-aufnahmen` – der Name des lokalen Mount-Verzeichnisses |
| Mount-Modus | Zugriff bei Bedarf (*autofs*) für den Einstieg |
| Benutzername / Passwort | Zugangsdaten des NAS-Benutzers |
| SMB-Version | SMB3, sofern der Server es unterstützt; im geprüften Dialog ist dies die Vorgabe für neue Freigaben |
| Zugriffsmodus | Lesen/Schreiben für Aufnahmen; Nur Lesen genügt zum Abspielen vorhandener Dateien |
| Als HDD-Ersatz verwenden | Für dieses erste Beispiel ausgeschaltet lassen |

4. Speichere die Definition über die angezeigte Speicheraktion.
5. Öffne den lokalen Pfad `/media/net/nas-aufnahmen` über die Dateiauswahl der Anwendung, in der du die Freigabe nutzen möchtest. Bei **autofs** löst dieser Zugriff das Einbinden aus.
6. Prüfe, ob die Dateien der Freigabe sichtbar sind. Für die Nutzung als Aufnahmeziel wähle den entsprechenden Ordner zusätzlich in den Aufnahmeeinstellungen und teste eine kurze Aufnahme.

## SMB oder NFS?

SMB verwendet üblicherweise den Freigabenamen und ein Benutzerkonto. Bei NFS gibst du den vom Server bereitgestellten Exportpfad ein. Der NFS-Server muss den Zugriff für die Box erlauben; die SMB-Anmeldefelder sind dafür nicht zuständig. Verwende den Exportpfad so, wie ihn die Serververwaltung vorgibt.

## Wichtige Optionen verstehen

- **autofs:** Bindet die Freigabe beim ersten Dateizugriff ein. Eine vorher nicht als aktiv gemountet angezeigte Freigabe muss deshalb noch kein Fehler sein.
- **fstab:** Bindet die Freigabe beim Start ein. Der Server muss dann entsprechend erreichbar sein.
- **HDD-Ersatz:** Verwendet `/media/hdd` anstelle eines eigenen Pfades unter `/media/net`. Das betrifft Anwendungen, die diesen zentralen Speicherort nutzen. Verwende es erst bewusst, wenn die Freigabe zuverlässig funktioniert.
- **Optionale Argumente:** Zusätzliche Mount-Parameter. Für den ersten Versuch leer lassen, solange keine konkrete Anforderung besteht.

## Wenn es nicht klappt

| Problem | Zuerst prüfen |
| --- | --- |
| Server wird nicht gefunden | Serveradresse und Netzwerk; bei Namensproblemen zum Test die bekannte IP-Adresse verwenden |
| Zugriff verweigert | Benutzer, Passwort und serverseitige Freigaberechte |
| Dateien sichtbar, Aufnahme scheitert | Schreibrechte, freien Speicher und den ausgewählten Aufnahmeordner |
| Manuelles Einbinden fehlt | Bei autofs stattdessen den lokalen Ordner öffnen |

[Alle Optionen der Netzwerkfreigabe](../../einstellungen/referenz/networkmounts/) · [Häufige Fragen](../../hilfe/probleme/)

Quelle: [Freigabedialog und Vorgaben für neue Mounts](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/lib/python/Screens/NetworkMounts.py). Der Ablauf ist anhand des Quellcodes beschrieben.
