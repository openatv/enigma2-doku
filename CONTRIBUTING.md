# Am Handbuch mitarbeiten

## Eine Anleitung ergänzen

1. Vorlage aus `templates/guide.de.md` bzw. `templates/guide.en.md` kopieren.
2. Die Artikel unter `src/content/docs/de/` und `src/content/docs/en/` mit identischem relativem Pfad ablegen.
3. Ziel, Voraussetzungen, Menüweg, Schritte, Ergebniskontrolle und typische Probleme beschreiben.
4. Quelle beziehungsweise geprüften E2-Stand angeben. Quellprüfung, Test auf laufendem E2 und nur angenommene Abläufe nicht gleichsetzen.
5. Den Artikel von der passenden Übersichtsseite verlinken. Neue Artikel werden beim Build automatisch durchsucht.
6. Build und Prüfungen aus der README ausführen; Suche im gebauten Ergebnis prüfen.

Die gemeinsame Anleitung bleibt modellneutral. Besonderheiten gehören in `anhaenge/`, Skin-Anleitungen in `skins/<name>/`, zusätzliche Plugins in `addons/<name>/`. Menübezeichnungen statt Bildschirmkoordinaten beschreiben. Eine kurze Voraussetzung nennen, wenn eine Option sonst nicht auffindbar wäre.

## Suchbegriffe und Sprachen

Sinnvolle Synonyme in Titel, Beschreibung oder Text einbauen: beispielsweise NAS, Freigabe, SMB/CIFS und mounten. Keine unsichtbaren Sammlungen beliebiger Suchwörter hinzufügen. Wenn eine englische Menübezeichnung zum Wiederfinden hilft, sie in Klammern nennen.

Pagefind durchsucht standardmäßig die aktuell gewählte Sprache. Starlight kann nicht übersetzte Artikel als solche kennzeichnen; für die Grundkapitel sollen beide Fassungen gepflegt werden. Identische relative Pfade halten den Sprachwechsel auf demselben Thema. Links innerhalb des Inhalts bevorzugt relativ schreiben, damit GitHub-Projektpfad und Apache-Unterordner funktionieren.

## Referenz und redaktionelle Inhalte

`src/content/docs/*/einstellungen/referenz/` wird vom Importer erzeugt. Diese Dateien nicht manuell bearbeiten. Ausführliche Erklärungen in eigenen Artikeln schreiben und mit der Referenz verknüpfen. Importe nur bewusst ausführen und den Diff prüfen; sie gehören nicht automatisch zu jedem Website-Build.

Das JSON-Inventar enthält auch `self.*`-Felder. Ihr Kontext gehört zur Identität des Feldes. Ein laufender Benutzerwert ist kein allgemeiner Standardwert. Unbekannte Auswahlmöglichkeiten oder Vorgaben als ungeprüft behandeln und nicht erfinden.

## Bilder

Für Bildserien echte OSD-Aufnahmen verwenden und Version, Sprache und Skin festhalten. Keine künstlich nachgebauten Screenshots als echte E2-Aufnahme ausgeben. Zugangsdaten, persönliche Dateinamen und unnötige Geräteinformationen vor einer Veröffentlichung vermeiden. Rohaufnahmen bleiben lokal unter `.capture-private/`; dieser Ordner wird nicht eingecheckt.

Die Anleitung [Bildserien erstellen](docs/CAPTURE.md) beschreibt den vollständigen Weg. `data/captures-review.json` legt die nach Sichtprüfung ausgewählten Bilder mit Prüfsummen fest. `scripts/import-captures.py` übernimmt nur diese Dateien nach `src/assets/captures/de/` und `en/` und schreibt `data/captures.json`. Jede Kennung benötigt ein Bild in beiden Sprachen. Geänderte Bilder erfordern eine erneute Prüfung.

In einem Artikel mit der Endung `.mdx` die Komponente `Capture.astro` importieren und mit Bildkennung, Sprache, Alternativtext und Bildunterschrift verwenden. Das Beispiel steht in der Capture-Anleitung. Beim Umbenennen von `.md` nach `.mdx` bleibt der URL-Pfad gleich. Astro erzeugt passende Bildgrößen; das Original bleibt über einen Link erreichbar. Nur Bilder aufnehmen, die einen Schritt erklären. Der Build benötigt ausschließlich die eingecheckten, geprüften Assets.

## Veröffentlichung

Änderungen lassen sich über Pull Requests prüfen. Die Pages-Veröffentlichung läuft für `main` und manuelle Workflows auf dem vorgesehenen Branch. Das Repository verwendet die vom Besitzer gewählte Sichtbarkeit; der Workflow ändert sie nicht. Auf GitHub Free muss das Repository für Pages öffentlich sein.
