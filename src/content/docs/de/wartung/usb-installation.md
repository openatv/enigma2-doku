---
title: Neuinstallation mit USB-Stick vorbereiten
description: OpenATV-Image auswählen, USB-Stick vorbereiten, ZIP-Dateien richtig verwenden und nach dem Flash neu einrichten oder Einstellungen wiederherstellen.
---

Eine Neuinstallation schreibt ein vollständiges Image. Wenn Enigma2 noch läuft, ist [Flash Online](../flash-online/) oft der bequemere Weg. USB ist unter anderem für die Erstinstallation oder einen nicht mehr startenden Receiver vorgesehen. **Der eigentliche Start des Flash-Vorgangs ist gerätespezifisch.**

## Vor dem Download entscheiden

| Ziel | Vorbereitung |
| --- | --- |
| Bisherige Einrichtung übernehmen | Aktuelle [Einstellungssicherung](../backup-restore/) erstellen und zusätzlich auf den PC kopieren. [AutoRestore](../autorestore/) einschließlich Plugins planen. |
| Einen Fehler mit frischem Image eingrenzen | Sicherung aufbewahren, aber ohne automatische Rückübernahme starten. Später nur benötigte Daten zurückholen. |
| Funktionierendes Image erhalten | Geeigneten anderen [MultiBoot-Slot](../multiboot/) prüfen. Ein Recovery- oder USB-Vorgang ist nicht automatisch auf diesen Slot begrenzt. |

Notiere Imageversion, Tuneranschluss, Netzwerkdaten und benötigte Erweiterungen. Filme und NAS-Daten brauchen eine eigene Sicherungsstrategie. Ein Einstellungsarchiv sichert sie nicht mit.

## Das passende Image auswählen

Nutze die [offiziellen Downloads](https://images.mynonpublic.com/openatv/index.php?v=current) und wähle **Hersteller, genaues Modell und Imageart**. Lies vor dem Vorbereiten des Sticks die Anleitung im [Hersteller-/Modellbereich des Forums](https://www.opena.tv/viewforum.php?f=454).

Ein ZIP-Archiv für Flash Online, ein USB-Paket und ein Recovery-Paket können unterschiedliche Aufgaben haben. **Recovery kann je nach Bootsystem auch Partitionierung und weitere Slots verändern.** Wenn das aktuelle Image erhalten bleiben soll, verwende ausschließlich einen Ablauf, der einen anderen Zielslot ausdrücklich unterstützt. Keine Bootloader-Dateien und keine Dateien verschiedener Modelle oder Builds mischen.

## USB-Stick vorbereiten

1. Verwende einen eindeutig identifizierten Stick. Sichere seine noch benötigten Dateien auf dem PC. Eine Formatierung löscht den Inhalt des gewählten Datenträgers.
2. Prüfe in der Modellanleitung Dateisystem und gegebenenfalls Partitionsschema. Viele USB-Flash-Verfahren verwenden **FAT32**; daraus folgt keine allgemeine Vorgabe für jedes Gerät. **ext4** für ein Aufnahmelaufwerk ist nicht automatisch als Flash-Stick geeignet.
3. Falls FAT32 verlangt wird und Windows es anbietet: Im Explorer **Dieser PC → den USB-Stick mit Rechtsklick → Formatieren → FAT32**. Kontrolliere Laufwerksbuchstaben und Kapazität vor **Starten**. Fehlt die Option, nicht einfach NTFS oder exFAT wählen; nutze ein geeignetes kleineres Medium oder das in der Modellanleitung beschriebene Verfahren.
4. Lade das Image vollständig auf den PC und öffne das Archiv. Falls eine Prüfsumme angeboten wird, vergleiche sie mit der heruntergeladenen Datei.
5. Übertrage die Dateien entsprechend der folgenden Unterscheidung und wirf den Stick anschließend sicher aus.

### ZIP entpacken oder unverändert kopieren?

| Verfahren laut Anleitung | Umgang mit dem Download |
| --- | --- |
| Klassisches USB-Flashen mit Ordner-/Dateistruktur | ZIP entpacken und die **vorgegebene Struktur** ins Hauptverzeichnis des Sticks kopieren. Nicht versehentlich einen zusätzlichen Ordner mit dem Namen des ZIP-Archivs davor setzen. |
| Flashen online/lokal aus dem laufenden Enigma2 | Das passende ZIP normalerweise **unentpackt** auf einem erreichbaren Datenträger bereithalten; der Flash-Manager entpackt selbst. Siehe [lokale Images](../flash-online/#lokale-images-und-image-backups). |
| Bootmenü, Recovery oder besonderes Rohimage-Verfahren | Exakt der Modellanleitung folgen. Einige Verfahren erwarten ein Archiv, andere bestimmte Dateien oder ein anders vorbereitetes Medium. |

Ein OpenATV-ZIP ist nicht automatisch eine PC-Installations-ISO. Schreibe es nicht mit einem beliebigen ISO-Werkzeug roh auf den Stick. Auch Dateinamen wie `force` oder `noforce` werden nur verändert, wenn die Anleitung für dieses Modell das verlangt.

Für das klassische Verfahren kontrollierst du im Explorer, ob die erwarteten Imageordner und Dateien auf der **obersten Ebene** liegen. Lasse alte Flash-Dateien anderer Geräte oder Builds nicht daneben liegen.

## An der Box flashen

Beende Aufnahmen und Timeshift. Gehe dann Schritt für Schritt nach der Modellanleitung vor: herunterfahren, richtigen USB-Port verwenden, gegebenenfalls Taste beim Einschalten halten und die Flash-Meldung oder das Bootmenü bestätigen. Es gibt dafür keine universelle OpenATV-Tastenkombination.

Prüfe eine angebotene Zielauswahl nochmals. Warte während des Schreibens auf die eindeutige Abschlussmeldung und unterbrich die Stromversorgung nicht. Entferne den Stick beziehungsweise starte neu, wenn die Anleitung das vorsieht. Sonst kann das Gerät erneut den Installationsablauf anbieten.

## Der erste Start danach

Eine [Wiederherstellung](../autorestore/) kann bereits während des ersten Starts erfolgen, wenn Sicherungsmedium und passende Vorbereitung vorhanden sind. **Das bloße Kopieren irgendeines Backups auf einen USB-Stick garantiert noch keinen FastRestore.** Halte Sicherungsordner und Restore-Auswahl wie dort beschrieben bereit.

Für eine saubere Neueinrichtung wählst du keine Rückübernahme und folgst der [Ersteinrichtung](../../erste-schritte/ersteinrichtung/). Ein Restore-Medium mit alten Automatik-Markierungen kann dagegen schon vor dem Assistenten eine Wiederherstellung auslösen; prüfe seine Vorbereitung vorher.

Kontrolliere anschließend Version, Empfang, Senderlisten, Netzwerk, Root-Passwort, HDD-/NAS-Mounts und gegebenenfalls Plugins. Die vorhandenen Daten auf HDD oder NAS musst du dafür nicht formatieren.

## Wenn der Stick nicht erkannt wird

Prüfe Modell/Imageart, Archivvollständigkeit, Ordnerstruktur, Dateisystem, vorgesehenen USB-Port und Einschaltfolge. Ein anderer geeigneter Stick kann helfen, ersetzt aber keine korrekte Vorbereitung. Veröffentliche bei einer [Supportfrage](../../hilfe/downloads-modelle/) den genauen Dateinamen und die beobachtete Meldung.

**Prüfstand:** Der Download-Einstieg und Herstellerbereich wurden geprüft. Diese modellneutrale Anleitung behauptet keinen USB-Flash-Test auf sämtlichen Geräten. Konkrete Einschalt- und Recovery-Verfahren bleiben in den Modellanleitungen.
