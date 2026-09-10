---
title: "AutoBouquetsMaker: alle 28 Formularvarianten"
description: "OpenATV: AutoBouquetsMaker: alle 28 Formularvarianten."
---


Diese Referenz erfasst die Formularvarianten des geprüften Quellstands. Abhängig von Hardware und Auswahl erscheint nur ein Teil davon. Gleich benannte Felder können an mehreren Stellen vorkommen. **Die technischen Ausdrücke sind Suchhilfen aus dem Quellcode, keine Befehle zum Einfügen in die Box.** `nim` bezeichnet einen Tuner, `currLnb` das gewählte LNB-Profil, `Sat` die Satellitenzuordnung. Konfiguriere über das Menü.

[Zur Empfangsübersicht](../) · [Verkabelungsbilder](../verkabelung/)

## ABM

<h3 id="abm-1">Geplanter Scan</h3>

**English:** Schedule scan

<p>Erlaubt es einen Zeitplan für den Scan zu erstellen </p>

`config.autobouquetsmaker.schedule`

<h3 id="abm-2">Alle nicht ABM Favoritenlisten behalten</h3>

**English:** Keep all non-ABM bouquets

<p>Wenn deaktiviert wird &#x27;Favoritenlisten behalten&#x27; im Hauptmenü aktiviert. Diese Option erlaubt es einige bestehen Favoritenlisten zu verstecken.</p>

`config.autobouquetsmaker.keepallbouquets`

<h3 id="abm-3">Füge Provider Namen in Bouquets ein</h3>

**English:** Add provider name to bouquets

<p>Diese Option setzt den Namen des Anbieters vor den Namen der Favoritenliste.</p>

`config.autobouquetsmaker.addprefix`

<h3 id="abm-4">Providermarkierungen hinzufügen</h3>

**English:** Add provider markers

<p>Diese Option platziert Markierungen im Bouquet-Index, um alle Bouquets jedes Anbieters zu gruppieren.</p>

`config.autobouquetsmaker.markersinindex`

<h3 id="abm-5">Stil des Bouquet Markers</h3>

**English:** Style of bouquet marker

<p>Wählen Sie den Stil der Markierungen, die Kanäle in den Kanallisten in Gruppen unterteilen.</p>

`config.autobouquetsmaker.bouquetmarkerstyle`

<h3 id="abm-6">Platziere Favoriten</h3>

**English:** Place bouquets at

<p>Mit dieser Option können Sie auswählen, wo die erstellten Bouquets platziert werden sollen.</p>

`config.autobouquetsmaker.placement`

<h3 id="abm-7">Überspringe nicht konfigurierte Satelliten</h3>

**English:** Skip services on not configured sats

<p>Sender von nicht konfigurierten Satelliten überspringen. &#x27;Ja&#x27; bedeutet der Sender erscheint nicht in der Favoritenliste. &#x27;Nein&#x27; bedeutet der Sender erscheint in der Favoritenliste is aber ausgegraut und kann nicht gewählt werden.</p>

`config.autobouquetsmaker.skipservices`

<h3 id="abm-8">Zusätzliches Debuggen</h3>

**English:** Extra debug

<p>Diese Funktion ist nur für die Entwicklung bestimmt. Erfordert die Aktivierung von Debug-Protokollen oder den Start von Enigma2 im Konsolenmodus.</p>

`config.autobouquetsmaker.extra_debug`

<h3 id="abm-9">DVB-T-Frequenzfinder anzeigen</h3>

**English:** Show DVB-T frequency finder

<p>Wählen Sie „Ja“, um das Tool „DVB-T-Frequenzfinder“ im Hauptmenü anzuzeigen. Dieses Tool wird verwendet, um eine funktionierende Providerdatei für schwierige Gebiete im Vereinigten Königreich zu erstellen, z.B. Bereiche, die von Repeatern usw. abgedeckt werden.</p>

`config.autobouquetsmaker.frequencyfinder`

<h3 id="abm-10">In Erweiterungen anzeigen</h3>

**English:** Show in extensions

<p>Wenn diese Option aktiviert ist, können Sie einen Scan über die Erweiterungsliste starten.</p>

`config.autobouquetsmaker.extensions`

<h3 id="abm-11">Anbieter aktivieren</h3>

**English:** Provider enabled

<p>Diese Option aktiviert den aktuell gewählten Anbieter.</p>

`self.providers_configs[provider]`

<h3 id="abm-12">Plane die Tageszeit</h3>

**English:** Schedule time of day

<p>Setze die Zeit wann der Scan durchgeführt werden soll.</p>

`config.autobouquetsmaker.scheduletime`

<h3 id="abm-13">Plane Wochentage</h3>

**English:** Schedule days of the week

<p>Drücke OK, um die Tage auszuwählen, an denen ein Scan durchgeführt werden soll.</p>

`config.autobouquetsmaker.dayscreen`

<h3 id="abm-14">Plane das Aufwecken aus dem Deep-Standby</h3>

**English:** Schedule wake from deep standby

<p>Wenn sich der Receiver zum Zeitpunkt des Zeitplans im „Deep Standby“ befindet, aktivieren Sie ihn, um einen Scan durchzuführen.</p>

`config.autobouquetsmaker.schedulewakefromdeep`

<h3 id="abm-15">Stil des Provider Markers</h3>

**English:** Style of provider marker

<p>Wähle den Stil des Markers, die im Bouquet einen Anbieter von einem anderen unterscheiden.</p>

`config.autobouquetsmaker.indexmarkerstyle`

<h3 id="abm-16">Wochentag aktivieren</h3>

**English:** Weekday enabled

<p>ABM-Suchlauf an diesem Wochentag zulassen.</p>

`self.config.days[i]`

<h3 id="abm-17">Plane die Rückkehr in den Deep-Standby</h3>

**English:** Schedule return to deep standby

<p>Wenn der Receiver aus „Deep Standby“ aufgeweckt wurde und sich derzeit im „Standby“ befindet und keine Aufnahmen laufen, schalten Sie ihn nach Abschluss des Scanvorgangs wieder in „Deep Standby“ zurück.</p>

`config.autobouquetsmaker.scheduleshutdown`

<h3 id="abm-18">Region</h3>

**English:** Region

<p>Diese Option erlaubt es die Region des Landes vorzugeben damit die korrekten Sender gewählt werden.</p>

`self.providers_area[provider]`

<h3 id="abm-19">Nur FTA</h3>

**English:** FTA only

<p>Diese Option betrifft alle Favoritenlisten. Wähle &#x27;Nein&#x27; um alle Sender zu durchsuchen. Wähle &#x27;Nein&#x27; um nur unverschlüsselte Sender zu durchsuchen.</p>

`self.providers_FTA_only[provider]`

<h3 id="abm-20">Erzeuge Haupt Kanalliste</h3>

**English:** Create main bouquet

<p>Diese Option enthält mehrere Wahlmöglichkeiten &quot;Ja&quot; (erzeuge eine Favoritenliste mit allen Sendern), &quot;Ja nur HD&quot; (erzeuge eine Favoritenliste mit allen HD Sendern), &quot;benutzerdefiniert&quot; (erlaubt es eine Favoritenliste auszuwählen), &quot;Nein&quot; (Hauptfavoritenliste nicht benutzen)</p>

`self.providers_makemain[provider]`

<h3 id="abm-21">Benutzerdefinierte Haupt Kanalliste</h3>

**English:** Custom bouquet for main

<p>Wähle deine eigene Favoritenliste aus der Liste. Bitte beachten das nur die ersten 100 Sender der Favoritenliste benutzt werden.</p>

`self.providers_custommain[provider]`

<h3 id="abm-22">Erzeuge Sektionen Kanallisten</h3>

**English:** Create sections bouquets

<p>Diese Option erzeugt eine Favoritenliste für jede Programmart wie z.B. Unterhaltung, Filme, Serien.</p>

`self.providers_makesections[provider]`

<h3 id="abm-23">Erzeuge HD Kanalliste</h3>

**English:** Create HD bouquet

<p>Diese Option erzeugt eine HighDefinition (HD) Favoritenliste. Alle HD Sender werden in einer Favoritenliste zusammen gefasst.</p>

`self.providers_makehd[provider]`

<h3 id="abm-24">Erzeuge FTA Kanalliste</h3>

**English:** Create FTA bouquet

<p>Diese Option erstellt ein FreeToAir-Bouquet und gruppiert alle freien Kanäle in diesem Bouquet.</p>

`self.providers_makefta[provider]`

<h3 id="abm-25">Erzeuge FTA HD Kanalliste</h3>

**English:** Create FTA HD bouquet

<p>Diese Option erstellt ein FreeToAir High Definition-Bouquet und gruppiert alle FTA HD-Kanäle in diesem Bouquet.</p>

`self.providers_makeftahd[provider]`

<h3 id="abm-26">Sender tauschen</h3>

**English:** Swap channels

<p>Mit dieser Option werden SD-Versionen von Kanälen durch HD-Versionen ausgetauscht. (z. B. BBC One SD mit BBC One HD, Channel Four SD mit Channel Four HD)</p>

`self.providers_swapchannels[provider]`

<h3 id="abm-27">Benutzerdefinierter Modus</h3>

**English:** Custom mode

<p>Anbieterspezifische Regeln zum Ergänzen, Entfernen oder Umbenennen von Sendern anwenden.</p>

`self.providers_custom_list[provider]`

<h3 id="abm-28">Nicht nummerierte Sender aufnehmen</h3>

**English:** Include non-indexed channels

<p>Wenn die Suche zusätzliche Kanäle findet, denen keine Kanalnummer zugeordnet ist, können sie mit &#x27;Ja&#x27; an das Ende der Liste sortiert und mit &#x27;Nein&#x27; ignoriert werden.</p>

`self.providers_extraservices[provider]`

Ergänzend: [Unicable](../unicable/), [manuelle Suche](../manueller-suchlauf/), [ABM](../autobouquetsmaker/) und [DAB+](../dabplus/).

Quellen und Prüfumfang: [Empfang](../quellen/).
