---
title: "e2MDB – Anhang G Converter Referenz"
description: "OpenATV ab 8.0: Anhang G Converter Referenz. Einrichtung, Bedeutung und praktische Hinweise zu e2MDB."
---

Convertername und Tokens sind exakt und einschließlich Groß-/Kleinschreibung zu schreiben. Die folgenden Namen entsprechen dem beschriebenen E2MDBEventInfo-Vertrag.

| Bildtoken | Bedeutung |
| --- | --- |
| Cover | Hochformat-Cover aus cover_path; kein automatischer Picon-Fallback. |
| Backdrop | Echter breiter Hintergrund aus backdrop_path. Kein automatischer Ersatz durch ein Episodenstandbild. |
| TitleLogo | Titelgrafik aus titlelogo_path, sofern vorhanden. |
| Image | Breites Vorschau-/Standbild aus image_path. |
| Preview | Vorschau-/Standbild, ersatzweise ein Backdrop. |
| ImageOrPicon | Geeignetes breites Bild, ersatzweise der durch die Quelle bereitgestellte Picon-Pfad. |

| Texttoken | Bedeutung |
| --- | --- |
| Title / Subtitle | Titel und Untertitel beziehungsweise Episodentitel. |
| Overview / Description | Vorhandene Kurz- oder ausführliche Beschreibung; Inhalt stammt aus dem Metadatensatz. |
| InfoLine | Vorbereitete kompakte Informationszeile. |
| Genres / Runtime / Rating / Year | Genre, Laufzeit, Bewertung und Jahr, soweit geliefert. |
| Provider / MediaType / Status | Datenquelle, Inhaltstyp und Statusinformation. |
| Cast / Crew | Kompakte Besetzungs- beziehungsweise Mitwirkendenangaben. |
| AdvDescription | Formatierter Text mit Beschreibung, Besetzung und Crew. Aliase: AdvancedDescription und ADV_DESCRIPTION. |

| Boolean | Prüfung |
| --- | --- |
| HasMetadata | Ein source_key ist vorhanden. Kein allgemeiner Fertigstatus. |
| HasCover | Ein Coverpfad ist bereitgestellt. |
| HasBackdrop | Ein geeigneter Backdroppfad ist bereitgestellt. |
| HasImage | Ein geeigneter image_path ist bereitgestellt; prüft nicht automatisch den Backdrop-Fallback. |

Bildtokens liefern eine Pixmap für render="Pixmap", Texttokens Text für Label und ähnliche Renderer, Booleans einen Zustand für ConditionalShowHide. Unbekannte Tokens sind kein stiller Fallback, sondern können einen Skinfehler auslösen.

Nicht jedes Bildformat und jeder beliebige Dateiname wird als Landscape-Artwork akzeptiert. Die vom Backend bereitgestellten Pfade verwenden. Ein selbst eingetragener beliebiger Pfad kann an der Format-/Namensprüfung vorbeigehen oder leer bleiben.

[Zur e2MDB-Übersicht](../) · [Alle Einstellungen](../optionen/)
