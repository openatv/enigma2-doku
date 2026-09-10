---
title: "Fallback-Tuner: Empfang von einer zweiten Box"
description: "OpenATV: Fallback-Tuner: Empfang von einer zweiten Box."
---


Ein **Fallback-Receiver** stellt einen DVB-Dienst über das Netzwerk bereit, wenn der lokale Empfang nicht verfügbar ist und die Funktion entsprechend konfiguriert wurde. Die zweite Box braucht selbst Signal, freie Ressourcen und eine erreichbare Streaming-Schnittstelle. Ein NAS-Mount ist dafür nicht erforderlich.

In den Empfangs-/Fallback-Einstellungen Remote-Fallback aktivieren und eine erkannte Box oder deren IP/URL eintragen. Der normale Enigma2-Streaming-Port ist häufig **8001**, muss aber zur Gegenstelle passen. Die genaue Form und zusätzliche Optionen stehen in der [Fallback-Referenz](../../einstellungen/referenz/fallbacktuner/).

| Einstellungsthema | Erklärung |
| --- | --- |
| Remote-Fallback aktivieren | Verwendung eines entfernten Empfangswegs erlauben |
| Boxauswahl / IP / URL / Port | Gegenstelle für den DVB-Stream festlegen |
| Alternative Gegenstellen je Empfangsart | DVB-C, DVB-T oder ATSC können von einer anderen Box kommen als der Hauptweg |
| Sender-/EPG-Import | Daten der Gegenstelle übernehmen; kann lokale Daten ändern, daher bewusst einrichten |
| Getrennte Importadresse | Eine andere Quelle für den Datenimport als für das Streaming |
| Import beim Start/Standby | Zeitpunkt der Aktualisierung steuern, soweit angeboten |

Zunächst mit einem freien Sender und stabiler LAN-Verbindung testen. Lokale und entfernte Servicereferenzen müssen zusammenpassen. Der entfernte Tuner kann durch dessen Aufnahmen belegt sein; die Netzwerkverbindung und Decoderleistung begrenzen die Übertragung zusätzlich. Einstellungen und Stromsparverhalten beider Boxen berücksichtigen.

Fallback ist nicht dasselbe wie ein fest konfigurierter SAT>IP-Client oder ein Tuner, der über Koax durchgeschleift ist. Keine Portfreigabe ins Internet für dieses lokale Beispiel einrichten. Authentifizierung nach der Konfiguration der Gegenstelle verwenden.

Quellstand: [OpenATV SetupFallbacktuner.py](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/lib/python/Screens/SetupFallbacktuner.py).
