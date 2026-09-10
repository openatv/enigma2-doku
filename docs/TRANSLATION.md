# Weitere Sprachen

Deutsch und Englisch bleiben die redaktionell gepflegten Originalfassungen. Im Kopfbereich steht daneben **Weitere Sprachen / More languages**. Auf schmalen Bildschirmen befindet sich die Auswahl unten im aufgeklappten Navigationsmenü.

Nach Auswahl einer zusätzlichen Sprache öffnet die Website das entsprechende **englische Kapitel** und lässt dessen Text von Google Translate im Browser übersetzen. Damit erscheinen immer die englischen Bildschirmaufnahmen. Die Bilder selbst werden nicht übersetzt. Die Auswahl umfasst 102 zusätzliche Sprachen aus der bereitgestellten GTranslate-Sprachenliste; die tatsächliche Verfügbarkeit hängt vom Dienst ab.

## Bedienung

1. Ein Kapitel öffnen und **Weitere Sprachen** auswählen.
2. Die gewünschte Sprache anhand ihres Eigennamens wählen, beispielsweise **Français**, **Polski**, **Italiano** oder **العربية**.
3. Die gewählte Sprache bleibt beim Weiterlesen in diesem Tab erhalten. Links enthalten beispielsweise `?translate=fr` und können einschließlich der Sprachauswahl geteilt werden.
4. Über **Originals → Deutsch / English** oder **English original** wird die automatische Übersetzung beendet. Das gleiche Kapitel lädt dann als Original. Beim Wechsel zwischen DE und EN entfällt ein eventuell vorhandener Abschnittsanker, da übersetzte Überschriften andere IDs haben können.

Ein Hinweis über dem Text kennzeichnet die automatische Übersetzung. Die Google-Leiste bleibt sichtbar; die feste Navigation berücksichtigt deren Höhe. Bei einem Ladefehler bleiben der englische Artikel und ein **Try again**-Knopf verfügbar.

## Suche und technische Angaben

Die Suche besitzt weiterhin genau zwei Indizes: Deutsch und Englisch. Auf automatisch übersetzten Seiten werden **englische Suchbegriffe** verwendet; die Ergebnisse bleiben Englisch und öffnen die Kapitel in der ausgewählten Übersetzung. Die Suchoberfläche wird deshalb nicht automatisch übersetzt. Google Translate erzeugt keine zusätzlichen Suchindizes oder dauerhaft gespeicherten Sprachfassungen.

Codeblöcke, Inline-Code, Dateipfade und Konfigurationsschlüssel in Code-Auszeichnung sowie Tastendarstellungen (`kbd`) werden von der Übersetzung ausgenommen. Hinweise im Fließtext können automatisch übersetzt werden. Die redaktionellen Originale sind bei unklaren Formulierungen direkt erreichbar.

## Hosting und externe Verbindung

Es bleibt eine statische HTML-Website für GitHub Pages oder Apache2. Es sind **kein PHP, keine Datenbank, kein Google-API-Schlüssel und keine zusätzliche Serverinstallation** erforderlich. Die bereitgestellte phpBB-Erweiterung wird nicht installiert; verwendet werden ihre Sprachenliste und das Prinzip des Google-Widgets.

Ohne Sprachwahl werden keine Google-Skripte eingebunden. Erst eine ausgewählte oder über einen Link übernommene Zusatzsprache lädt Google Translate und übermittelt dem Dienst die für die Übersetzung nötigen Seiteninhalte. Der Browser benötigt hierfür eine Internetverbindung. Wer Google blockiert, kann weiterhin DE und EN einschließlich der lokalen Suche nutzen.

Die Auswahl steht im URL-Parameter `translate` und in `sessionStorage`, getrennt nach dem Basispfad der Website. Das Google-Widget verwendet zusätzlich das Cookie `googtrans`. Der Originalwechsel löscht die Auswahl und die zugehörigen Cookie-Varianten auf diesem Host. `?translate=off` öffnet explizit das Original; der Parameter wird anschließend entfernt. Es gibt keine automatische Wahl anhand der Browsersprache.

Die Zusatzsprachen erzeugen keine Kopien der Bilder oder Artikel in `dist/` und keine eigenen SEO-Sprachseiten. Der Dienst übersetzt zur Laufzeit; Verfügbarkeit und Übersetzungsqualität hängen von Google ab. Auf einem Apache mit zusätzlicher Content-Security-Policy müssen die tatsächlich benötigten Google-Translate-Verbindungen erlaubt sein. Die bestehende Standardbereitstellung benötigt keine Änderung.

## Pflege

- `data/translation-languages.json`: Sprachcodes und Eigennamen; DE/EN bleiben der Originalauswahl vorbehalten.
- `src/components/LanguageSelect.astro`: Kopf- und Mobilmenü.
- `src/components/TranslationPageTitle.astro`: sichtbarer Hinweis und Rückweg.
- `src/scripts/translation.ts`: Laden, Navigation, Rücksetzen, englischer Suchindex und Google-Leiste.
- `src/lib/translation.mjs`: getestete URL- und Cookie-Hilfsfunktionen für Projekt- und Root-Hosting.

Neue Kapitel in Skins, Add-ons oder Anhängen erhalten die Sprachauswahl automatisch. Voraussetzung bleiben passende DE/EN-Dateien mit demselben relativen Pfad. Der Build prüft diese Zuordnung bereits.

Zur Prüfung `pnpm check`, `pnpm test` und `pnpm build` ausführen. Im gebauten Ergebnis zusätzlich eine Google-Übersetzung, den Kapitelwechsel, eine englische Suche und die Rückkehr zu beiden Originalen testen. Diese Live-Prüfung benötigt Internet; die automatischen Prüfungen rufen Google nicht auf.

Technische Referenzen: [GTranslate: Texte ausnehmen](https://gtranslate.support/en/articles/1349930-how-to-skip-translations), [GTranslate: Sprachcookie](https://gtranslate.support/en/articles/1349939-how-to-detect-current-selected-language), [Pagefind: mehrsprachige Suche](https://pagefind.app/docs/multilingual/).

## Prüfstand vom 10. September 2026

- Live-Übersetzung DE → englisches Farbtasten-Kapitel → Französisch; englische Bilddateien bestätigt.
- Englische Suche nach `config.epg.saveepg` innerhalb der französischen Ansicht; englischer EPG-Treffer öffnet sich wieder auf Französisch. Technischer Schlüssel bleibt unverändert.
- Arabische EPG-Referenz mit Leserichtung rechts nach links und angepasster Höhe des festen Seitenkopfs.
- Mobilmenü bei 390 × 844 Pixeln einschließlich Sprachwahl; Rückkehr zu Deutsch sowie separat zu Englisch. Auf den zurückgesetzten Originalseiten werden Übersetzungsskript und Hinweis nicht geladen beziehungsweise angezeigt.
- Google durch eine restriktive CSP ausschließlich auf einem temporären lokalen Testserver blockiert: Fehlermeldung, erneuter Versuch und Rückweg zum englischen Original funktionieren. Diese Test-CSP wird nicht veröffentlicht.
- Alle 102 angebotenen Sprachcodes sind im live geladenen Widget verfügbar. Die Qualität aller Sprachen wurde nicht einzeln geprüft.
- Astro-Prüfung ohne Fehler; 11 Node-Tests erfolgreich; beide Hosting-Builds bestehen Link-, Sprachpaar- und 35 Suchprüfungen. Anschließend wurde wieder der GitHub-Pages-Build erstellt.
