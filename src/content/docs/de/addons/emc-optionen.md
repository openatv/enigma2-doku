---
title: EMC – Referenz aller Hauptsetup-Optionen
description: Alle 135 EMC-Hauptsetup-Optionen mit Namen, Bedienebene, Suchschlüssel und Erklärung.
---

**135 aktive Einstellungsdefinitionen** aus dem geprüften EMC-Hauptsetup, mit eigener Erklärung und Suchschlüssel. Öffne **EMC → MENÜ → EMC-Einstellungen**. Die Bedienebene bestimmt einen Teil der Sichtbarkeit: Einfach, Fortgeschritten oder Experte. Abhängige Unteroptionen erscheinen zusätzlich erst nach Aktivierung ihrer Hauptoption. Der Schnittlisten-Download benötigt eine zusätzliche Erweiterung.

Die deutschen Bezeichnungen stammen aus der installierten Übersetzung. „Über“ ist ein Informationsdialog und kein Einstellwert; interne Statusfelder sowie die auskommentierte freie Grün-Belegung gehören nicht zu diesen 135 Optionen. Die separaten Cover-, Filminformations- und Playlist-Dialoge sind [unten beschrieben](#weitere-dialoge). Beispielwerte in Bildern sind keine allgemeine Empfehlung. Technische Schlüssel sind Suchhilfen; ändere Werte normalerweise in der Oberfläche.

## Start und Menü

| Option und Suchschlüssel | Bedeutung | Ab Ebene |
| --- | --- | --- |
| EMC deaktivieren<br />`config.EMC.ml_disable` | Gibt nach GUI-Neustart den EMC-Tastenaufruf frei. Hintergrundaktionen separat abschalten. | Fortgeschritten |
| Starte EMC mit<br />`config.EMC.movie_launch` | Wählt die von EMC übernommene Starttaste; deren bisherige Funktion wird ersetzt. | Einfach |
| EMC-Einstellungen im Erweiterungsmenü anzeigen<br />`config.EMC.extmenu_plugin` | Zeigt den Konfigurationseinstieg zusätzlich im Erweiterungsmenü. | Einfach |
| EMC im Hauptmenü anzeigen<br />`config.EMC.mainmenu_list` | Zeigt die EMC-Filmliste als Einstieg im Hauptmenü. | Einfach |
| EMC im Erweiterungsmenü anzeigen<br />`config.EMC.extmenu_list` | Zeigt die EMC-Filmliste zusätzlich im Erweiterungsmenü. | Einfach |

## Tasten

| Option und Suchschlüssel | Bedeutung | Ab Ebene |
| --- | --- | --- |
| Verhalten der Bouquet-Tasten<br />`config.EMC.bqt_keys` | Bouquet-Tasten springen an Anfang/Ende, über mehrere Zeilen oder zwischen Ordnern. | Einfach |
| Listeneinträge überspringen<br />`config.EMC.list_skip_size` | Anzahl übersprungener Zeilen, wenn die Bouquet-Tasten im Sprungmodus stehen. | Einfach |
| Funktion der roten Taste<br />`config.EMC.movie_redfunc` | Aktion der bezeichneten kurzen oder langen Farbtaste. Vor Belegung mit Löschen die Wirkung prüfen. | Einfach |
| Funktion der roten Taste (lang)<br />`config.EMC.movie_longredfunc` | Aktion der bezeichneten kurzen oder langen Farbtaste. Vor Belegung mit Löschen die Wirkung prüfen. | Einfach |
| Funktion der gelben Taste<br />`config.EMC.movie_yellowfunc` | Aktion der bezeichneten kurzen oder langen Farbtaste. Vor Belegung mit Löschen die Wirkung prüfen. | Einfach |
| Funktion der gelben Taste (lang)<br />`config.EMC.movie_longyellowfunc` | Aktion der bezeichneten kurzen oder langen Farbtaste. Vor Belegung mit Löschen die Wirkung prüfen. | Einfach |
| Funktion der blauen Taste<br />`config.EMC.movie_bluefunc` | Aktion der bezeichneten kurzen oder langen Farbtaste. Vor Belegung mit Löschen die Wirkung prüfen. | Einfach |
| Funktion der blauen Taste (lang)<br />`config.EMC.movie_longbluefunc` | Aktion der bezeichneten kurzen oder langen Farbtaste. Vor Belegung mit Löschen die Wirkung prüfen. | Einfach |
| Funktion der Info-Taste (lang)<br />`config.EMC.InfoLong` | Filminformationsdienst für INFO lang; passende Erweiterung/Internet können nötig sein. | Einfach |

## Tägliche Aktion

| Option und Suchschlüssel | Bedeutung | Ab Ebene |
| --- | --- | --- |
| Täglicher Autostart<br />`config.EMC.restart` | Tägliche Aktion: aus, Standby, Deep-Standby, Neustart der Box oder Enigma2. Kein Aufnahmetimer. | Fortgeschritten |
| Beginn des Auto-Neustart-Fensters<br />`config.EMC.restart_begin` | Beginn des Zeitfensters der täglichen EMC-Aktion. | Fortgeschritten |
| Ende des Auto-Neustart-Fensters<br />`config.EMC.restart_end` | Ende des Zeitfensters der täglichen EMC-Aktion; mit anderen Zeitplänen abstimmen. | Fortgeschritten |
| Standby erzwingen nach Auto-Neustart<br />`config.EMC.restart_stby` | Standby nach dem automatischen Neustart anfordern. | Fortgeschritten |

## Startordner und Auswahl

| Option und Suchschlüssel | Bedeutung | Ab Ebene |
| --- | --- | --- |
| "Movie Home" beim Start<br />`config.EMC.CoolStartHome` | Movie Home immer, nach Standby oder nicht automatisch als Einstieg verwenden. | Einfach |
| Standardsortierung<br />`config.EMC.moviecenter_sort` | Standardsortierung; eine dauerhaft gespeicherte Ordnersortierung kann vorgehen. | Einfach |
| Movie Home: Stammverzeichnis<br />`config.EMC.movie_homepath` | Vorhandener Ausgangsordner der Bibliothek. Richtet keinen Datenträger oder Mount ein. | Einfach |
| Verzeichnis-Zugriffsbeschränkung<br />`config.EMC.movie_pathlimit` | Begrenzt das Hochblättern in EMC; keine Linux-Zugriffskontrolle. | Fortgeschritten |
| Cursor nach Auswahl weiterbewegen<br />`config.EMC.moviecenter_selmove` | Richtung des Cursors nach dem Markieren eines Eintrags. | Einfach |

## Ordner und Informationen

| Option und Suchschlüssel | Bedeutung | Ab Ebene |
| --- | --- | --- |
| Symlinks anzeigen<br />`config.EMC.symlinks_show` | Symbolische Verknüpfungen in der Liste einblenden. | Einfach |
| Verzeichnisse anzeigen<br />`config.EMC.directories_show` | Ordner in der Liste einblenden; Ausblenden löscht nichts. | Einfach |
| Verzeichnisse innerhalb der Filmliste anzeigen<br />`config.EMC.directories_ontop` | Ordner gemeinsam mit Filmen einsortieren statt als separate Gruppe; Beschriftung beachten. | Einfach |
| Konfigurierte Verzeichnisse ganz oben in der Filmliste<br />`config.EMC.cfgtopdir_enable` | Zusätzliche oberste Ordner anhand von emc-topdir.cfg berücksichtigen. | Einfach |
| Verzeichnis-Informationen anzeigen<br />`config.EMC.directories_info` | Dateianzahl, Größe oder beides für Ordner anzeigen; erzeugt zusätzliche Zugriffe. | Einfach |
| Text für anfangs unbekannte Dateianzahl<br />`config.EMC.count_default_text` | Platzhalter, solange die Dateianzahl unbekannt ist. | Einfach |
| Text für anfangs unbekannte Anzahl und Größe<br />`config.EMC.count_size_default_text` | Platzhalter, solange Anzahl und Größe unbekannt sind. | Einfach |
| Text bei anfangs unbekannter Verzeichnisgröße<br />`config.EMC.size_default_text` | Platzhalter, solange die Verzeichnisgröße unbekannt ist. | Einfach |
| Zeige Symbol bei anfangs unbekannter Anzahl und Größe<br />`config.EMC.count_size_default_icon` | Unbekannte Anzahl/Größe mit einem Symbol kennzeichnen. | Einfach |
| Verzeichnisgröße im Info-Bereich anzeigen<br />`config.EMC.directories_size_skin` | Verzeichnisgröße für ein entsprechendes Skinfeld anzeigen. | Einfach |

## Sammelansichten und Lesezeichen

| Option und Suchschlüssel | Bedeutung | Ab Ebene |
| --- | --- | --- |
| Verzeichnis "Neueste Aufnahmen" anzeigen<br />`config.EMC.latest_recordings` | Sammelansicht für neueste Aufnahmen einblenden; keine Dateikopie. | Einfach |
| Verzeichnis "Neueste Aufnahmen" Zeitlimit<br />`config.EMC.latest_recordings_limit` | Umfang der neuesten Aufnahmen begrenzen oder ohne Begrenzung anzeigen. | Einfach |
| Im Verzeichnis "Neueste Aufnahmen" die emc-noscan.cfg benutzen<br />`config.EMC.latest_recordings_noscan` | Bei der Sammelansicht die Ausschlüsse aus emc-noscan.cfg berücksichtigen. | Einfach |
| VLC-Verzeichnis anzeigen<br />`config.EMC.vlc` | VLC-Verzeichnis bei vorhandenem VLC-Plugin anbieten; ist kein integrierter VLC-Server. | Einfach |
| Lesezeichen in der Filmliste anzeigen<br />`config.EMC.bookmarks` | E2-Lesezeichen, EMC-Lesezeichen, beide oder keine in der Liste anzeigen. | Einfach |

## Cache und experimentelle Optionen

| Option und Suchschlüssel | Bedeutung | Ab Ebene |
| --- | --- | --- |
| Verwende Cache für Dateien und Verzeichnisse<br />`config.EMC.files_cache` | Verzeichniseinträge zwischenspeichern. Bei externen Änderungen gegebenenfalls neu laden. | Einfach |
| Datei Cache Begrenzung (0=alles wird zwischengespeichert)<br />`config.EMC.min_file_cache_limit` | Schwellwert für die Anzahl der Unterordner oder Dateien beim Cachen; kein MB-Limit. 0 erfasst auch kleine nichtleere Listen. | Einfach |
| Experimentelle Optionen anzeigen<br />`config.EMC.show_experimental_options` | Zusätzliche, experimentelle Scan-/Cacheoptionen sichtbar machen. | Einfach |
| Keine Größe der Verzeichnisse aus der emc-noscan.cfg ermitteln<br />`config.EMC.dir_info_usenoscan` | Automatische Größenabfragen für Pfade aus emc-noscan.cfg vermeiden. | Einfach |
| Vermeide Dateioperationen in Verzeichnissen aus der emc-noscan.cfg<br />`config.EMC.limit_fileops_noscan` | Zugriffe beim Einlesen begrenzen, wenn ein dort berücksichtigtes Laufwerk schläft; keine allgemeine Schreibsperre. | Einfach |
| Nach Dateioperationen nur betroffene Verzeichnisse scannen<br />`config.EMC.rescan_only_affected_dirs` | Nach Dateiaktionen nur betroffene Verzeichnisse neu prüfen. | Einfach |
| Wecke Geräte beim Eintritt in Verzeichnisse aus der emc-noscan.cfg<br />`config.EMC.noscan_wake_on_entry` | Beim Betreten eines entsprechend ausgeschlossenen Ordners das Laufwerk aufwecken versuchen; kein Wake-on-LAN-Versprechen. | Einfach |
| Prüfe auf tote Links<br />`config.EMC.check_dead_links` | Zeitpunkt/Häufigkeit der Prüfung nicht mehr erreichbarer Linkziele wählen. | Einfach |

## Struktursuche und Ausblendung

| Option und Suchschlüssel | Bedeutung | Ab Ebene |
| --- | --- | --- |
| Konfigurierte Dateien und Verzeichnisse ausblenden<br />`config.EMC.cfghide_enable` | Ausblendregeln aus emc-hide.cfg aktivieren; Dateien bleiben auf dem Datenträger. | Fortgeschritten |
| Suche nach DVD-Strukturen<br />`config.EMC.check_dvdstruct` | DVD-Verzeichnisstrukturen erkennen; kein Versprechen für jede DVD-Wiedergabe. | Fortgeschritten |
| Suche nach Filmstrukturen<br />`config.EMC.check_moviestruct` | Nach weiteren Film-Verzeichnisstrukturen suchen; zusätzliche Lesezugriffe. | Fortgeschritten |
| Suche nach Blu-ray Strukturen<br />`config.EMC.check_blustruct` | Blu-ray-Verzeichnisstrukturen erkennen. | Fortgeschritten |
| Suche nach Blu-ray Strukturen in .iso<br />`config.EMC.check_blustruct_iso` | Auch in ISO-Dateien nach Blu-ray-Strukturen suchen. | Einfach |
| Keine Struktursuche in ausgewählten Verzeichnissen<br />`config.EMC.cfgscan_suppress` | Struktursuche in Pfaden aus emc-noscan.cfg unterdrücken. | Fortgeschritten |
| Suche nach Medienstrukturen in Symlink-Verzeichnissen<br />`config.EMC.scan_linked` | Verlinkte Verzeichnisse in die Struktursuche einbeziehen; kann NAS-Zugriffe auslösen. | Fortgeschritten |

## Titel und Begleitdateien

| Option und Suchschlüssel | Bedeutung | Ab Ebene |
| --- | --- | --- |
| Versuche Titel aus .meta Dateien zu lesen<br />`config.EMC.movie_metaload` | Titel aus vorhandenen .meta-Dateien statt nur aus dem Dateinamen lesen. | Einfach |
| Versuche Zusatztitel und mehr aus .meta Dateien zu lesen<br />`config.EMC.movie_metaload_all` | Zusätzlichen Titel oder weitere Informationen aus .meta übernehmen. | Einfach |
| Versuche Titel aus .eit Dateien zu lesen<br />`config.EMC.movie_eitload` | Titel aus vorhandenen .eit-Sendungsdaten lesen. | Einfach |
| Ersetze spezielle Zeichen im Titel<br />`config.EMC.replace_specialchars` | Sonderzeichen in angezeigten Titeln ersetzen. | Experte |
| Filmformat anzeigen<br />`config.EMC.movie_show_format` | Medienformat zusätzlich in der Liste kennzeichnen. | Einfach |
| Schnitt-Nr. falls vorhanden anzeigen<br />`config.EMC.movie_show_cutnr` | Vorhandene Schnittnummer zusätzlich anzeigen. | Einfach |
| Löse Links auf, und zeige echten Pfad<br />`config.EMC.movie_real_path` | Bei Verknüpfungen das tatsächliche Ziel auflösen und anzeigen. | Einfach |
| Pfad anzeigen, wenn keine ausführliche Beschreibung verfügbar<br />`config.EMC.show_path_extdescr` | Pfad als Ersatz anzeigen, wenn keine ausführliche Beschreibung vorliegt. | Einfach |

## Wiedergabe und Marker

| Option und Suchschlüssel | Bedeutung | Ab Ebene |
| --- | --- | --- |
| Benachrichtigung bei "zur Wiedergabeliste hinzufügen" anzeigen<br />`config.EMC.playlist_message` | Meldung beim Hinzufügen eines Films zur Playlist anzeigen. | Einfach |
| Ignoriere Start Marker unter 10 Sekunden<br />`config.EMC.movie_ignore_firstcuts` | Gespeicherte Startpositionen unter zehn Sekunden nicht zum Fortsetzen anbieten. | Fortgeschritten |
| Automatisches Springen zur ersten Marke<br />`config.EMC.movie_jump_first_mark` | Beim Filmstart eine erste Marke zum Überspringen von Vorlauf berücksichtigen. | Fortgeschritten |
| Start am Anfang von fertig gespielten Aufnahmen<br />`config.EMC.movie_rewind_finished` | Als fertig eingestufte Filme wieder am Anfang starten. | Fortgeschritten |
| Letzte Abspielposition immer als Marker speichern<br />`config.EMC.movie_save_lastplayed` | Letzte Abspielposition als Marker speichern; verändert Positionsdaten. | Fortgeschritten |
| Springe am Ende der Aufnahme zum Sender zurück<br />`config.EMC.record_eof_zap` | Am aktuellen Ende einer laufenden Aufnahme zum Sender wechseln: mit/ohne Meldung oder aus. | Fortgeschritten |
| Tatsächliche Länge der Aufnahme anzeigen<br />`config.EMC.record_show_real_length` | Länge einer noch wachsenden Aufnahme genauer bestimmen. | Fortgeschritten |
| Downloade Schnittliste von Cutlist.at<br />`config.EMC.cutlist_at_download` | Schnittlisten-Download bei vorhandenem CutlistDownloader; kein automatisches Neuschneiden der Videodatei. | Fortgeschritten |

## Papierkorb und automatische Entfernung

| Option und Suchschlüssel | Bedeutung | Ab Ebene |
| --- | --- | --- |
| Papierkorb aktivieren<br />`config.EMC.movie_trashcan_enable` | Papierkorb für normales Löschen nutzen. Ohne ihn kann direkt endgültig gelöscht werden. | Einfach |
| Papierkorbverzeichnis<br />`config.EMC.movie_trashcan_path` | Zielverzeichnis des EMC-Papierkorbs; passend zum Speicher wählen. | Einfach |
| Papierkorbverzeichnis anzeigen<br />`config.EMC.movie_trashcan_show` | Papierkorbeintrag in der Bibliothek anzeigen. | Einfach |
| Papierkorbinformationen anzeigen<br />`config.EMC.movie_trashcan_info` | Dateianzahl/Größe des Papierkorbs anzeigen. | Einfach |
| Löschbestätigung bei aktivem Papierkorb<br />`config.EMC.movie_delete_validation` | Rückfrage vor dem Löschen; ersetzt keine Sicherung. | Einfach |
| Erlaube tägliche Papierkorbleerung<br />`config.EMC.movie_trashcan_clean` | Automatisches endgültiges Entfernen alter Papierkorbinhalte aktivieren. | Einfach |
| Tägliche Reinigungszeit Papierkorb/Aufnahmeliste<br />`config.EMC.movie_trashcan_ctime` | Uhrzeit der automatischen Reinigung; auch Startverhalten des Plugins beachten. | Einfach |
| Verbleib der Dateien im Papierkorb (Tage)<br />`config.EMC.movie_trashcan_limit` | Aufbewahrungstage im Papierkorb für die Bereinigung. | Einfach |
| Verschiebe gesehene Filme in den Papierkorb<br />`config.EMC.movie_finished_clean` | Alte fertig gesehene Filme automatisch in den Papierkorb verschieben; spätere Reinigung löscht sie. | Experte |
| Alter der gesehenen Filme im Filmverzeichnis (Tage)<br />`config.EMC.movie_finished_limit` | Altersgrenze fertiger Filme vor dem automatischen Verschieben; getrennt von Papierkorbtagen. | Experte |

## Listenverhalten und Hintergrundfunktionen

| Option und Suchschlüssel | Bedeutung | Ab Ebene |
| --- | --- | --- |
| Text beim Verzeichnis einlesen anzeigen<br />`config.EMC.moviecenter_loadtext` | Hinweis während des Verzeichniseinlesens anzeigen. | Fortgeschritten |
| Beim Öffnen von EMC immer neu einlesen<br />`config.EMC.movie_reload` | Beim Öffnen erneut einlesen; aktueller, aber gegebenenfalls langsamer. | Fortgeschritten |
| EMC nach Filmstopp wieder öffnen<br />`config.EMC.movie_reopen` | Nach STOP die EMC-Liste erneut öffnen. | Fortgeschritten |
| EMC nach Filmende wieder öffnen<br />`config.EMC.movie_reopenEOF` | Nach natürlichem Filmende die EMC-Liste erneut öffnen. | Fortgeschritten |
| Verlasse Wiedergabe mit Exit<br />`config.EMC.movie_exit` | EXIT auch zum Verlassen der Wiedergabe nutzen. | Einfach |
| Film während des Verschiebens ausblenden<br />`config.EMC.movie_hide_mov` | Gerade verschobene Filme während des Vorgangs ausblenden. | Fortgeschritten |
| Film während des Löschens ausblenden<br />`config.EMC.movie_hide_del` | Gerade gelöschte Filme während des Vorgangs ausblenden. | Fortgeschritten |
| Aktiviere Erkennung für Remote-Aufnahmen<br />`config.EMC.remote_recordings` | Laufende Aufnahmen anderer Boxen auf gemeinsamem Speicher erkennen; erstellt keinen Remote-Timer. | Fortgeschritten |
| Automatische Timerlisten-Bereinigung<br />`config.EMC.timer_autocln` | Erledigte Timer-Einträge bereinigen; die Videodateien werden dadurch nicht gelöscht. | Fortgeschritten |

## Untertitel und Ton

| Option und Suchschlüssel | Bedeutung | Ab Ebene |
| --- | --- | --- |
| Untertitel automatisch anzeigen<br />`config.EMC.autosubs` | Automatische Untertitelauswahl bei EMC-Wiedergabe einschalten. | Fortgeschritten |
| Erste Untertitel-Sprache<br />`config.EMC.sublang1` | Bevorzugte Untertitelsprache an der bezeichneten Position der Ausweichreihenfolge. | Fortgeschritten |
| Zweite Untertitel-Sprache<br />`config.EMC.sublang2` | Bevorzugte Untertitelsprache an der bezeichneten Position der Ausweichreihenfolge. | Fortgeschritten |
| Dritte Untertitel-Sprache<br />`config.EMC.sublang3` | Bevorzugte Untertitelsprache an der bezeichneten Position der Ausweichreihenfolge. | Fortgeschritten |
| Tonspur automatisch auswählen<br />`config.EMC.autoaudio` | Automatische Tonspurauswahl bei EMC-Wiedergabe einschalten. | Fortgeschritten |
| AC3-Track bevorzugen<br />`config.EMC.autoaudio_ac3` | AC3-Tonspur bevorzugen; Audioausgabe/Downmix der Anlage berücksichtigen. | Fortgeschritten |
| Erste Tonspur<br />`config.EMC.audlang1` | Bevorzugte Tonsprache an der bezeichneten Position der Ausweichreihenfolge. | Fortgeschritten |
| Zweite Tonspur<br />`config.EMC.audlang2` | Bevorzugte Tonsprache an der bezeichneten Position der Ausweichreihenfolge. | Fortgeschritten |
| Dritte Tonspur<br />`config.EMC.audlang3` | Bevorzugte Tonsprache an der bezeichneten Position der Ausweichreihenfolge. | Fortgeschritten |

## Verzögerungen und Eingabe

| Option und Suchschlüssel | Bedeutung | Ab Ebene |
| --- | --- | --- |
| Updateverzögerung Beschreibungsfeld<br />`config.EMC.movie_descdelay` | Wartezeit vor Detailaktualisierung beim Blättern, in Millisekunden. | Experte |
| Tastendauer (50-900)<br />`config.EMC.key_period` | Wiederholungsintervall gedrückter Tasten; nur bei konkreten Bedienproblemen anpassen. | Experte |
| Tastenwiederholung (250-900)<br />`config.EMC.key_repeat` | Wartezeit bis zur Tastenwiederholung; betrifft die Eingabeverarbeitung. | Experte |

## Skin und Layout

| Option und Suchschlüssel | Bedeutung | Ab Ebene |
| --- | --- | --- |
| Original EMC-Skin verwenden (muss neu gestartet werden)<br />`config.EMC.use_orig_skin` | Eigene EMC-Vorlage statt der Ansicht des aktiven Image-Skins verwenden; EMC neu öffnen. | Einfach |
| Stil für das Original EMC-Skin (muss neu gestartet werden)<br />`config.EMC.skinstyle` | Original-EMC-Layout: Informationen links/unten mit oder ohne MiniTV; EMC neu öffnen. | Einfach |
| Filmliste ist skinbar<br />`config.EMC.skin_able` | Gestaltung der Listenzeilen durch den Skin zulassen. | Einfach |
| Datumsformat<br />`config.EMC.movie_date_format` | Datumsformat der Liste wählen oder Datum ausblenden. | Einfach |
| Horizontale Ausrichtung des Datums<br />`config.EMC.movie_date_position` | Datum innerhalb seines Anzeigefelds ausrichten. | Einfach |
| Horizontale Ausrichtung von Anzahl, Größe und Beschreibung<br />`config.EMC.count_size_position` | Anzahl-/Größeninformationen im entsprechenden Feld ausrichten. | Einfach |
| Film-Icons anzeigen<br />`config.EMC.movie_icons` | Symbole für Medien/Dateien in der Liste anzeigen. | Einfach |
| Pfeil bei Symlinks anzeigen<br />`config.EMC.link_icons` | Verknüpfungen zusätzlich mit einem Pfeil kennzeichnen. | Einfach |
| Picons anzeigen<br />`config.EMC.movie_picons` | Senderlogos in der Aufnahmeliste anzeigen; keine Filmcover. | Einfach |
| Position der Picons<br />`config.EMC.movie_picons_pos` | Position der Senderlogos relativ zum Namen wählen. | Einfach |
| Eigener Pfad zu den Picons<br />`config.EMC.movie_picons_path_own` | Einen eigenen Suchpfad für Picons verwenden. | Einfach |
| Pfad zu den Picons<br />`config.EMC.movie_picons_path` | Verzeichnis vorhandener Senderlogos auswählen. | Einfach |

## Fortschritt und Farben

| Option und Suchschlüssel | Bedeutung | Ab Ebene |
| --- | --- | --- |
| Filmfortschritt anzeigen<br />`config.EMC.movie_progress` | Fortschrittsdarstellung wählen oder ausblenden. | Einfach |
| Film gilt als angespielt ab %<br />`config.EMC.movie_watching_percent` | Prozentgrenze, ab der eine Aufnahme als angespielt gilt. | Einfach |
| Film gilt als gesehen ab %<br />`config.EMC.movie_finished_percent` | Prozentgrenze für fertig gesehen; kann die automatische Entfernung beeinflussen. | Einfach |
| Standardfarbe für ungesehene Filme<br />`config.EMC.color_unwatched` | Farbe des jeweils bezeichneten Zustands beziehungsweise der Hervorhebung. | Einfach |
| Standardfarbe für angespielte Filme<br />`config.EMC.color_watching` | Farbe des jeweils bezeichneten Zustands beziehungsweise der Hervorhebung. | Einfach |
| Standardfarbe für gesehene Filme<br />`config.EMC.color_finished` | Farbe des jeweils bezeichneten Zustands beziehungsweise der Hervorhebung. | Einfach |
| Standardfarbe für laufende Aufnahmen<br />`config.EMC.color_recording` | Farbe des jeweils bezeichneten Zustands beziehungsweise der Hervorhebung. | Einfach |
| Standardfarbe für markierten Film<br />`config.EMC.color_highlight` | Farbe des jeweils bezeichneten Zustands beziehungsweise der Hervorhebung. | Einfach |
| Markieren neuer Aufnahmen mit einem Stern<br />`config.EMC.mark_latest_files` | Neue Aufnahmen mit einem Stern hervorheben. | Einfach |

## Cover, Vorschau und MiniTV

| Option und Suchschlüssel | Bedeutung | Ab Ebene |
| --- | --- | --- |
| Cover anzeigen<br />`config.EMC.movie_cover` | Vorhandene Filmcover anzeigen; startet keinen automatischen Download. | Einfach |
| Cover-Anzeige verzögern um ms<br />`config.EMC.movie_cover_delay` | Wartezeit bis zum Coverladen nach Auswahl, in Millisekunden. | Einfach |
| Cover-Hintergrund anzeigen, wenn kein Cover vorhanden<br />`config.EMC.movie_cover_fallback` | Ersatzdarstellung nutzen, wenn kein Cover vorhanden ist. | Einfach |
| Cover-Hintergrund<br />`config.EMC.movie_cover_background` | Hintergrundfarbe der Coverdarstellung. | Einfach |
| Filmvorschau anzeigen<br />`config.EMC.movie_preview` | Markierten Film automatisch als Vorschau starten; kann Speicher aufwecken und TV ersetzen. | Einfach |
| Verzögerung für Filmvorschau in Millisekunden<br />`config.EMC.movie_preview_delay` | Verzögerung der Filmvorschau in Millisekunden. | Einfach |
| Starte Filmvorschau vor der letzten Abspielposition (Sekunden)<br />`config.EMC.movie_preview_offset` | Vorschau so viele Sekunden vor der letzten Position beginnen. | Einfach |
| MiniTV ausblenden<br />`config.EMC.hide_miniTV` | MiniTV abhängig von Live-TV, Timeshift, Wiedergabe oder generell ausblenden. | Einfach |
| MiniTV ausblenden, wenn Cover sichtbar<br />`config.EMC.hide_miniTV_cover` | MiniTV ausblenden, wenn ein Cover angezeigt wird. | Einfach |
| Methode zum Ausblenden des Mini-TV<br />`config.EMC.hide_miniTV_method` | Dienst stoppen oder auf ein stummes Pixel verkleinern; Ressourcenverbrauch unterscheidet sich. | Einfach |

## Audio-Metadaten und Diagnose

| Option und Suchschlüssel | Bedeutung | Ab Ebene |
| --- | --- | --- |
| Audio Metadaten anzeigen<br />`config.EMC.mutagen_show` | Vorhandene Audio-Tags unterstützter Dateien anzeigen. | Einfach |
| Debug-Ausgabe aktivieren<br />`config.EMC.debug` | EMC-Diagnoseprotokoll aktivieren; nach Fehlersuche wieder abschalten. | Experte |
| EMC-Ausgabeverzeichnis<br />`config.EMC.folder` | Beschreibbares Verzeichnis für EMC-Ausgaben wählen. | Experte |
| Dateiname der Debug-Ausgabe<br />`config.EMC.debugfile` | Dateiname der EMC-Diagnoseausgabe innerhalb des gewählten Verzeichnisses. | Experte |

## Weitere Dialoge

**Filminformationen:** Sprache, Laufzeit, Genre, Produktionsländer, Veröffentlichungsdatum und Bewertung zum Download auswählen; Cover speichern, Covergröße und Anzeigeverzögerung einstellen. Diese Werte betreffen den Filminformationsdialog, nicht automatisch jede Bibliotheksansicht.

**Cover-Suche:** Suchsprache und Titelvergleich/Filter, bevorzugte Auflösung, thetvdb-Standardcovernummer und Beschreibung als `movie.txt`. Für die Einzelsuche zusätzlich Suchdienst, eigener Filter, Coveranzahl pro Titel, Trefferzahl pro Suchseite und Speicherpfad für Ordnercover. Manche Einträge hängen vom gewählten Suchdienst ab. Angebot im Menü ist kein Nachweis, dass ein externer Dienst derzeit erfolgreich antwortet.

**Playlist-Einstellungen:** Standardpfad, Standardname und „aktuelle Playlist immer speichern“. Automatisches Speichern schreibt die Zusammenstellung auf den Datenträger; es kopiert nicht sämtliche Filme.

Weiter: [EMC bedienen](../emc/), [Bibliothek/Cover/Skin](../emc-bibliothek/), [Wiedergabe](../emc-wiedergabe/), [Papierkorb/NAS](../emc-papierkorb/).

Quellstand: [`fc7fd6181e`](https://github.com/oe-mirrors/EnhancedMovieCenter/blob/fc7fd6181e/src/EnhancedMovieCenter.py), [setup.xml](https://github.com/oe-mirrors/EnhancedMovieCenter/blob/fc7fd6181e/src/setup.xml).
