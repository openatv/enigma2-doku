# Dieselbe Dokumentation auf Apache2 bereitstellen

Der statische Build benötigt auf dem Webserver weder Node.js noch PHP oder eine Datenbank. Apache2 unter Ubuntu 24.04 LTS kann HTML, CSS, JavaScript, Bilder und die Pagefind-Suchdateien ausliefern.

## Für die Zieladresse bauen

Die folgenden Adressen sind Beispiele. Ersetze sie durch die tatsächliche Domain.

Linux/macOS:

```sh
SITE_URL=https://docs.example.org BASE_PATH=/ pnpm build
```

PowerShell:

```powershell
$env:SITE_URL = 'https://docs.example.org'
$env:BASE_PATH = '/'
pnpm build
Remove-Item Env:SITE_URL, Env:BASE_PATH
```

Für einen Unterordner wie `/doku/` wird `BASE_PATH=/doku` verwendet. Die Einstellungen werden beim Build gelesen. Eine `.env.example` dient nur als Dokumentation; die Werte als Umgebungsvariablen übergeben.

## Dateien ausliefern

Den vollständigen Inhalt von `dist/`, einschließlich `_astro/` und `pagefind/`, in das vorgesehene Webverzeichnis übertragen. Für den Einstieg auf einer eigenen Domain kann der DocumentRoot beispielsweise `/var/www/openatv-handbuch` sein. Ein vollständiger Release-Wechsel verhindert, dass HTML und Suchindex aus unterschiedlichen Builds gemischt werden.

Beispiel für einen bereits vorhandenen VirtualHost; Domain, TLS und Verzeichnisse an die eigene Installation anpassen:

```apache
DocumentRoot /var/www/openatv-handbuch
<Directory /var/www/openatv-handbuch>
    Require all granted
    Options -Indexes
    AllowOverride None
    DirectoryIndex index.html
</Directory>
AddType application/wasm .wasm
```

HTTPS über die vorhandene TLS-Konfiguration einrichten. Es ist keine SPA-Umschreiberegel nötig: Die Kapitel sind echte Verzeichnisse mit `index.html`. Alle generierten Suchdateien müssen erreichbar bleiben. Keine pauschale Umleitung fehlender Dateien auf die Startseite einrichten, da sie kaputte Suchdatei-URLs verschleiern würde.

Der Webserver benötigt Leserechte für die fertigen Dateien. PHP-Ausführung oder Schreibrechte des Webserver-Prozesses sind für dieses Handbuch nicht notwendig. Komprimierung und Cache-Header können über die vorhandene Apache-Konfiguration ergänzt werden. HTML und Suchindex bei Änderungen zeitnah aktualisieren; langfristige Caches nur bewusst einsetzen.

## Ergebnis prüfen

- `/de/` und `/en/` aufrufen; den Sprachwechsel prüfen.
- Einen tiefen Link direkt öffnen, beispielsweise `/de/netzwerk/freigaben/`.
- Nach `NAS`, `EPG` und `config.epg.saveepg` suchen.
- Bilder, Logo und Seitenlayout prüfen.

Mit `pnpm size` bleibt der Platzbedarf auch auf Apache sichtbar. Der allgemeine Build besitzt keine Pages-Größensperre; nur `pnpm size:pages` begrenzt eine GitHub-Pages-Veröffentlichung.

Quellen: [Astro-Bereitstellung](https://docs.astro.build/en/guides/deploy/), [Apache-Verzeichnisindex](https://httpd.apache.org/docs/2.4/mod/mod_dir.html#directoryindex).
