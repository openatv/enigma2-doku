---
title: "e2MDB – EPGRefresh Sender und Ablauf"
description: "OpenATV ab 8.0: EPGRefresh Sender und Ablauf. Einrichtung, Bedeutung und praktische Hinweise zu e2MDB."
---

1. In EPGRefresh Blau „Sender“ öffnen. Bei „Bearbeite“ die Liste der Sender oder Bouquets auswählen.
2. Mit Blau „Neu“ die gewünschten Einträge hinzufügen. Einzelne Sender sind präzise, Bouquets lassen sich bei vielen Programmen einfacher pflegen.
3. Mit Gelb nur nicht mehr benötigte Listeneinträge entfernen. Die Sender in der allgemeinen Enigma2-Senderliste werden damit nicht gelöscht.
4. Mit Grün bestätigen und auch die Hauptkonfiguration speichern.
5. Nach einem passenden Testlauf in der normalen EPG-Ansicht kontrollieren, ob die gewünschten Sender mehrere zukünftige Sendungen enthalten. Erst danach e2MDB-Vorbefüllung starten.

## Ein zeitlich abgestimmter Ablauf

Zuerst EPGRefresh, danach eine Reservezeit, dann e2MDB-Prefill. Der EPG muss nicht nur für den gerade laufenden Kanal vorhanden sein. Bei mehreren Empfangswegen oder verschlüsselten Sendern Tuner, Empfang und verfügbare Programmdaten gesondert prüfen.

Nicht blind jedes Bouquet aufnehmen. Eine riesige Auswahl kostet Zeit, ohne dass alle Programme später im Skin genutzt werden. Ein Sender kann Programmdaten für weitere Dienste mitbringen; die tatsächliche Abdeckung hängt aber vom Empfang und Sender ab. Maßgeblich ist das Ergebnis im EPG.

Falls bereits ein EPG-Import oder das EPG-Datenupdate eines anderen Plugins dieselben Sender zuverlässig versorgt, ist ein zusätzlicher EPGRefresh-Lauf nicht zwingend nötig. Die Metadatenquelle TVSpielfilm innerhalb von e2MDB ist von einem separaten EPG-Datenupdate zu unterscheiden.

Nach Änderungen an Bouquets sowohl die EPGRefresh-Auswahl als auch die e2MDB-Auswahl prüfen. Das Speichern einer Liste synchronisiert die andere nicht automatisch.

[Zur e2MDB-Übersicht](../) · [Alle Einstellungen](../optionen/)
