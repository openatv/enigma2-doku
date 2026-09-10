---
title: EMC – complete main setup reference
description: All 135 EMC main setup options with labels, setup levels, searchable keys and explanations.
---

**135 active setting definitions** from the checked EMC main setup, with editorial explanations and searchable keys. Open **EMC → MENU → EMC Setup**. Setup level controls part of their visibility: Simple, Intermediate or Expert. Dependent options also require their parent setting to be enabled. Cut-list download needs an additional extension.

“About” is an information dialog, not a setting; internal state fields and the commented-out free Green assignment are not included in these 135 options. Separate cover, movie-information and playlist dialogs are [described below](#additional-dialogs). Screenshot values are not universal recommendations. Technical keys help searching; normally change values through the interface.

## Startup and menus

| Option and search key | Meaning | Minimum level |
| --- | --- | --- |
| Disable EMC<br />`config.EMC.ml_disable` | Releases EMC's button override after a GUI restart. Disable background actions separately. | Intermediate |
| Start EMC with<br />`config.EMC.movie_launch` | Selects the button taken over by EMC, replacing its previous function. | Simple |
| Show plugin config in extensions menu<br />`config.EMC.extmenu_plugin` | Adds the setup entry to the extensions menu. | Simple |
| Show EMC in main menu<br />`config.EMC.mainmenu_list` | Adds an EMC library entry to the main menu. | Simple |
| Show EMC in extensions menu<br />`config.EMC.extmenu_list` | Adds an EMC library entry to the extensions menu. | Simple |

## Buttons

| Option and search key | Meaning | Minimum level |
| --- | --- | --- |
| Bouquet buttons behaviour<br />`config.EMC.bqt_keys` | Bouquet keys jump to start/end, skip entries or switch folders. | Simple |
| List entries to skip<br />`config.EMC.list_skip_size` | Number of entries skipped when bouquet keys use skip mode. | Simple |
| Red button function<br />`config.EMC.movie_redfunc` | Action for the named short or long colour button. Check deletion behaviour before assigning it. | Simple |
| Long Red button function<br />`config.EMC.movie_longredfunc` | Action for the named short or long colour button. Check deletion behaviour before assigning it. | Simple |
| Yellow button function<br />`config.EMC.movie_yellowfunc` | Action for the named short or long colour button. Check deletion behaviour before assigning it. | Simple |
| Long Yellow button function<br />`config.EMC.movie_longyellowfunc` | Action for the named short or long colour button. Check deletion behaviour before assigning it. | Simple |
| Blue button function<br />`config.EMC.movie_bluefunc` | Action for the named short or long colour button. Check deletion behaviour before assigning it. | Simple |
| Long Blue button function<br />`config.EMC.movie_longbluefunc` | Action for the named short or long colour button. Check deletion behaviour before assigning it. | Simple |
| LongInfo Button<br />`config.EMC.InfoLong` | Movie information provider for long INFO; may need a companion plugin and internet access. | Simple |

## Daily action

| Option and search key | Meaning | Minimum level |
| --- | --- | --- |
| daily auto-start<br />`config.EMC.restart` | Daily action: off, standby, deep standby, receiver reboot or Enigma2 restart. Not a recording timer. | Intermediate |
| auto-start window begin<br />`config.EMC.restart_begin` | Beginning of the daily EMC action window. | Intermediate |
| auto-start window end<br />`config.EMC.restart_end` | End of the daily EMC action window; coordinate with other schedules. | Intermediate |
| Force standby after auto-restart<br />`config.EMC.restart_stby` | Request standby after the automatic restart. | Intermediate |

## Starting folder and selection

| Option and search key | Meaning | Minimum level |
| --- | --- | --- |
| Movie home at start<br />`config.EMC.CoolStartHome` | Return to Movie home always, after standby or not automatically. | Simple |
| Default sort mode<br />`config.EMC.moviecenter_sort` | Default sort mode; a saved permanent folder rule can take precedence. | Simple |
| Movie home home path<br />`config.EMC.movie_homepath` | Existing library starting directory. Does not create storage or a mount. | Simple |
| EMC path access limit<br />`config.EMC.movie_pathlimit` | Limits upward browsing inside EMC; not a Linux access control. | Intermediate |
| Cursor predictive move after selection<br />`config.EMC.moviecenter_selmove` | Cursor direction after marking an entry. | Simple |

## Directories and information

| Option and search key | Meaning | Minimum level |
| --- | --- | --- |
| Show symlinks<br />`config.EMC.symlinks_show` | Display symbolic links in the list. | Simple |
| Show directories<br />`config.EMC.directories_show` | Display directories; hiding them deletes nothing. | Simple |
| Show directories within movielist<br />`config.EMC.directories_ontop` | Sort directories within the movie list rather than a separate group; follow the label. | Simple |
| Configured directories at the top of movielist<br />`config.EMC.cfgtopdir_enable` | Use emc-topdir.cfg to place configured directories at the top. | Simple |
| Show directories information<br />`config.EMC.directories_info` | Display folder count, size or both; requires additional reads. | Simple |
| Text shown for initially unknown file count<br />`config.EMC.count_default_text` | Placeholder while the file count is unknown. | Simple |
| Text shown for initially unknown count and size<br />`config.EMC.count_size_default_text` | Placeholder while count and size are unknown. | Simple |
| Text shown for initially unknown directory size<br />`config.EMC.size_default_text` | Placeholder while directory size is unknown. | Simple |
| Icon shown for initially unknown count / size<br />`config.EMC.count_size_default_icon` | Use an icon to indicate unknown count/size. | Simple |
| Show directory size in skin<br />`config.EMC.directories_size_skin` | Display directory size in a supporting skin field. | Simple |

## Aggregate views and bookmarks

| Option and search key | Meaning | Minimum level |
| --- | --- | --- |
| Show Latest Recordings directory<br />`config.EMC.latest_recordings` | Show the aggregate Latest Recordings view; it does not copy files. | Simple |
| Latest Recordings directory limit<br />`config.EMC.latest_recordings_limit` | Limit the latest-recordings selection or show it without a limit. | Simple |
| Latest Recordings directory use emc-noscan.cfg<br />`config.EMC.latest_recordings_noscan` | Respect emc-noscan.cfg exclusions in the latest-recordings view. | Simple |
| Show VLC directory<br />`config.EMC.vlc` | Offer a VLC directory when its plugin is installed; not a built-in VLC server. | Simple |
| Show Bookmarks in movielist<br />`config.EMC.bookmarks` | Display E2 bookmarks, EMC bookmarks, both or neither. | Simple |

## Cache and experimental options

| Option and search key | Meaning | Minimum level |
| --- | --- | --- |
| Use cache for files and directories<br />`config.EMC.files_cache` | Cache directory entries; reload after external changes when necessary. | Simple |
| Minimum file cache limit (0=cache everything)<br />`config.EMC.min_file_cache_limit` | Count threshold for subdirectories or files to be cached; not an MB limit. Zero includes small non-empty lists. | Simple |
| Show experimental options<br />`config.EMC.show_experimental_options` | Expose additional experimental scan/cache options. | Simple |
| Don't auto scan size of dirs from emc-noscan.cfg<br />`config.EMC.dir_info_usenoscan` | Avoid automatic size scans for paths in emc-noscan.cfg. | Simple |
| Limit file operations in dirs from emc-noscan.cfg<br />`config.EMC.limit_fileops_noscan` | Limit read-related operations for sleeping devices covered by these rules; not a general write lock. | Simple |
| After file OPs only re-scan affected dirs<br />`config.EMC.rescan_only_affected_dirs` | Rescan affected directories after file operations instead of a broader refresh. | Simple |
| Wake device when entering dir from emc-noscan.cfg<br />`config.EMC.noscan_wake_on_entry` | Try to wake a sleeping device when entering an excluded folder; not a Wake-on-LAN guarantee. | Simple |
| Check for dead links<br />`config.EMC.check_dead_links` | Choose when/how often to check for dead link targets. | Simple |

## Structure scanning and hiding

| Option and search key | Meaning | Minimum level |
| --- | --- | --- |
| Hide configured entries<br />`config.EMC.cfghide_enable` | Enable emc-hide.cfg hiding rules; files remain on storage. | Intermediate |
| Scan for DVD structures<br />`config.EMC.check_dvdstruct` | Detect DVD directory structures; not a guarantee of playback for every DVD. | Intermediate |
| Scan for movie structures<br />`config.EMC.check_moviestruct` | Scan for additional movie directory structures, requiring extra reads. | Intermediate |
| Scan for bluray structures<br />`config.EMC.check_blustruct` | Detect Blu-ray directory structures. | Intermediate |
| Scan for bluray structures in .iso<br />`config.EMC.check_blustruct_iso` | Also check ISO files for Blu-ray structures. | Simple |
| Suppress scan in selected folders<br />`config.EMC.cfgscan_suppress` | Suppress structure scanning in paths from emc-noscan.cfg. | Intermediate |
| Scan linked folders<br />`config.EMC.scan_linked` | Include linked directories in structure scans; may access NAS storage. | Intermediate |

## Titles and sidecars

| Option and search key | Meaning | Minimum level |
| --- | --- | --- |
| Try to load titles from .meta files<br />`config.EMC.movie_metaload` | Read titles from available .meta files rather than only filenames. | Simple |
| Try to load extra title and more from .meta files<br />`config.EMC.movie_metaload_all` | Read the extra title or additional information from .meta. | Simple |
| Try to load titles from .eit files<br />`config.EMC.movie_eitload` | Read titles from available .eit programme data. | Simple |
| Replace special chars in title<br />`config.EMC.replace_specialchars` | Replace special characters in displayed titles. | Expert |
| Show Movie Format<br />`config.EMC.movie_show_format` | Indicate the media format in the list. | Simple |
| Show Cut-Nr if exist<br />`config.EMC.movie_show_cutnr` | Display an available cut number. | Simple |
| Resolve links and show real path<br />`config.EMC.movie_real_path` | Resolve and display a link's actual target path. | Simple |
| Show Path if no extended description available<br />`config.EMC.show_path_extdescr` | Display the path when no extended description is available. | Simple |

## Playback and markers

| Option and search key | Meaning | Minimum level |
| --- | --- | --- |
| Show message if file added to playlist<br />`config.EMC.playlist_message` | Show a message when adding a movie to the playlist. | Simple |
| No resume below 10 seconds<br />`config.EMC.movie_ignore_firstcuts` | Do not offer resume for stored start positions under ten seconds. | Intermediate |
| Jump to first mark when playing movie<br />`config.EMC.movie_jump_first_mark` | Use a first marker at playback start, for example to skip padding. | Intermediate |
| Rewind finished movies before playing<br />`config.EMC.movie_rewind_finished` | Start movies classified as finished from the beginning. | Intermediate |
| Always save last played progress as marker<br />`config.EMC.movie_save_lastplayed` | Save the last playback position as a marker, changing position data. | Intermediate |
| Zap to channel after record EOF<br />`config.EMC.record_eof_zap` | At the current end of a growing recording, zap to its service with/without a message, or disable this. | Intermediate |
| Show real length of running records<br />`config.EMC.record_show_real_length` | Determine the length of a recording still in progress more accurately. | Intermediate |
| Download cutlist from Cutlist.at<br />`config.EMC.cutlist_at_download` | Cut-list download when CutlistDownloader is available; does not automatically rewrite the video. | Intermediate |

## Trash and automatic removal

| Option and search key | Meaning | Minimum level |
| --- | --- | --- |
| Trashcan enable<br />`config.EMC.movie_trashcan_enable` | Use trash for normal deletion. Without it, deletion can be permanent immediately. | Simple |
| Trashcan path<br />`config.EMC.movie_trashcan_path` | EMC trash destination directory; choose according to storage. | Simple |
| Show trashcan directory<br />`config.EMC.movie_trashcan_show` | Display the trash entry in the library. | Simple |
| Show trashcan information<br />`config.EMC.movie_trashcan_info` | Display trash file count/size. | Simple |
| Delete validation<br />`config.EMC.movie_delete_validation` | Ask before deletion; not a substitute for a backup. | Simple |
| Enable daily trashcan cleanup<br />`config.EMC.movie_trashcan_clean` | Enable automatic permanent removal of old trash contents. | Simple |
| Daily cleanup time<br />`config.EMC.movie_trashcan_ctime` | Automatic cleanup time; also account for plugin startup behaviour. | Simple |
| How many days files may remain in trashcan<br />`config.EMC.movie_trashcan_limit` | Trash retention days used by cleanup. | Simple |
| Move finished movies in trashcan<br />`config.EMC.movie_finished_clean` | Automatically move old finished movies into trash; later cleanup deletes them. | Expert |
| Age of finished movies in movie folder (days)<br />`config.EMC.movie_finished_limit` | Age threshold for finished movies before moving them automatically; separate from trash retention. | Expert |

## List behaviour and background functions

| Option and search key | Meaning | Minimum level |
| --- | --- | --- |
| Display directory reading text<br />`config.EMC.moviecenter_loadtext` | Display a message while reading a directory. | Intermediate |
| EMC always reload after open<br />`config.EMC.movie_reload` | Reload on opening; fresher data but potentially slower. | Intermediate |
| EMC re-open list after STOP-press<br />`config.EMC.movie_reopen` | Reopen the EMC list after STOP. | Intermediate |
| EMC re-open list after Movie end<br />`config.EMC.movie_reopenEOF` | Reopen the EMC list at the natural end of a movie. | Intermediate |
| Leave Movie with Exit<br />`config.EMC.movie_exit` | Allow EXIT to leave playback. | Simple |
| Hide movies being moved<br />`config.EMC.movie_hide_mov` | Hide movies while they are being moved. | Intermediate |
| Hide movies being deleted<br />`config.EMC.movie_hide_del` | Hide movies while they are being deleted. | Intermediate |
| Enable remote recordings<br />`config.EMC.remote_recordings` | Detect other receivers' recordings on shared storage; does not create remote timers. | Intermediate |
| Automatic timers list cleaning<br />`config.EMC.timer_autocln` | Clean completed timer entries; does not delete their video files. | Intermediate |

## Subtitles and audio

| Option and search key | Meaning | Minimum level |
| --- | --- | --- |
| Enable playback auto-subtitling<br />`config.EMC.autosubs` | Enable automatic subtitle selection during EMC playback. | Intermediate |
| Primary playback subtitle language<br />`config.EMC.sublang1` | Preferred subtitle language at the named position in the fallback order. | Intermediate |
| Secondary playback subtitle language<br />`config.EMC.sublang2` | Preferred subtitle language at the named position in the fallback order. | Intermediate |
| Tertiary playback subtitle language<br />`config.EMC.sublang3` | Preferred subtitle language at the named position in the fallback order. | Intermediate |
| Enable playback auto-language selection<br />`config.EMC.autoaudio` | Enable automatic audio-track selection during EMC playback. | Intermediate |
| Enable playback AC3-track first<br />`config.EMC.autoaudio_ac3` | Prefer an AC3 audio track; account for output and downmix settings. | Intermediate |
| Primary playback audio language<br />`config.EMC.audlang1` | Preferred audio language at the named position in the fallback order. | Intermediate |
| Secondary playback audio language<br />`config.EMC.audlang2` | Preferred audio language at the named position in the fallback order. | Intermediate |
| Tertiary playback audio language<br />`config.EMC.audlang3` | Preferred audio language at the named position in the fallback order. | Intermediate |

## Delays and input

| Option and search key | Meaning | Minimum level |
| --- | --- | --- |
| Description field update delay<br />`config.EMC.movie_descdelay` | Delay before updating details while scrolling, in milliseconds. | Expert |
| Key period value (50-900)<br />`config.EMC.key_period` | Repeat interval for held keys; adjust only for a specific input problem. | Expert |
| Key repeat value (250-900)<br />`config.EMC.key_repeat` | Delay before key repetition; affects input processing. | Expert |

## Skin and layout

| Option and search key | Meaning | Minimum level |
| --- | --- | --- |
| Use original EMC-skin (needs reopen)<br />`config.EMC.use_orig_skin` | Use EMC's own template instead of the active image skin's view; reopen EMC. | Simple |
| Style for original EMC-skin (needs reopen)<br />`config.EMC.skinstyle` | Original EMC layout: information left/bottom with or without MiniTV; reopen EMC. | Simple |
| Listbox is skin able<br />`config.EMC.skin_able` | Allow the skin to control list-row appearance. | Simple |
| Date format<br />`config.EMC.movie_date_format` | Choose the list's date format or hide dates. | Simple |
| Horizontal alignment for date<br />`config.EMC.movie_date_position` | Align the date within its display area. | Simple |
| Horizontal alignment for count / size<br />`config.EMC.count_size_position` | Align count/size information within its display area. | Simple |
| Show movie icons<br />`config.EMC.movie_icons` | Display movie/file icons in the list. | Simple |
| Show link arrow<br />`config.EMC.link_icons` | Mark links with an additional arrow. | Simple |
| Show movie picons<br />`config.EMC.movie_picons` | Show service logos in the recording list; these are not movie covers. | Simple |
| Position movie picons<br />`config.EMC.movie_picons_pos` | Choose service-logo position relative to the name. | Simple |
| Own Path to movie picons<br />`config.EMC.movie_picons_path_own` | Use a custom picon search path. | Simple |
| Path to movie picons<br />`config.EMC.movie_picons_path` | Choose the directory containing service logos. | Simple |

## Progress and colours

| Option and search key | Meaning | Minimum level |
| --- | --- | --- |
| Show movie progress<br />`config.EMC.movie_progress` | Choose or hide playback progress display. | Simple |
| Short watching percent<br />`config.EMC.movie_watching_percent` | Percentage threshold for partially watched status. | Simple |
| Finished watching percent<br />`config.EMC.movie_finished_percent` | Percentage threshold for finished status; can affect automatic removal. | Simple |
| Default color for unwatched movie<br />`config.EMC.color_unwatched` | Colour of the named playback/recording state or highlight. | Simple |
| Default color for partially watched movie<br />`config.EMC.color_watching` | Colour of the named playback/recording state or highlight. | Simple |
| Default color for watched movie<br />`config.EMC.color_finished` | Colour of the named playback/recording state or highlight. | Simple |
| Default color for recording movie<br />`config.EMC.color_recording` | Colour of the named playback/recording state or highlight. | Simple |
| Default color for highlighted movie<br />`config.EMC.color_highlight` | Colour of the named playback/recording state or highlight. | Simple |
| Mark new recordings with a star<br />`config.EMC.mark_latest_files` | Highlight new recordings with a star. | Simple |

## Covers, preview and MiniTV

| Option and search key | Meaning | Minimum level |
| --- | --- | --- |
| Show Cover<br />`config.EMC.movie_cover` | Display available movie covers; does not automatically download them. | Simple |
| Cover delay in ms<br />`config.EMC.movie_cover_delay` | Delay before loading a cover after selection, in milliseconds. | Simple |
| Show fallback cover<br />`config.EMC.movie_cover_fallback` | Use fallback presentation when no cover is available. | Simple |
| Cover background<br />`config.EMC.movie_cover_background` | Background colour for cover display. | Simple |
| Show movie preview<br />`config.EMC.movie_preview` | Automatically preview the selected movie; may wake storage and replace TV playback. | Simple |
| Movie preview delay in ms<br />`config.EMC.movie_preview_delay` | Movie-preview delay in milliseconds. | Simple |
| Start movie preview before last position<br />`config.EMC.movie_preview_offset` | Start preview this many seconds before the last position. | Simple |
| Hide MiniTV<br />`config.EMC.hide_miniTV` | Hide MiniTV according to live TV, timeshift, playback or always. | Simple |
| Hide MiniTV if Cover is shown<br />`config.EMC.hide_miniTV_cover` | Hide MiniTV when displaying a cover. | Simple |
| Method of hiding MiniTV<br />`config.EMC.hide_miniTV_method` | Stop the service or reduce it to a muted pixel; resource usage differs. | Simple |

## Audio metadata and diagnostics

| Option and search key | Meaning | Minimum level |
| --- | --- | --- |
| Show audio metadata<br />`config.EMC.mutagen_show` | Display available audio tags in supported files. | Simple |
| Enable EMC debug output<br />`config.EMC.debug` | Enable EMC diagnostic logging; turn it off after troubleshooting. | Expert |
| EMC output directory<br />`config.EMC.folder` | Choose a writable directory for EMC output. | Expert |
| Debug output file name<br />`config.EMC.debugfile` | Filename for EMC diagnostics within the chosen output directory. | Expert |

## Additional dialogs

**Movie information:** Choose download language and whether to include runtime, genre, production countries, release date and rating; configure saving covers, their size and display delay. These belong to the information dialog rather than automatically controlling every library view.

**Cover search:** Language, title matching/filter, preferred resolution, thetvdb default cover number and saving descriptions as `movie.txt`. Single search adds provider, its own filter, cover range per title, results per search site and folder-cover destination. Some entries depend on the selected provider. A menu entry does not prove that an external service currently responds successfully.

**Playlist settings:** Default path, default name and “always save current Playlist”. Automatic saving writes the playlist to storage; it does not copy all its movies.

Continue with [using EMC](../emc/), [library/covers/skin](../emc-bibliothek/), [playback](../emc-wiedergabe/) and [trash/NAS](../emc-papierkorb/).

Source revision: [`fc7fd6181e`](https://github.com/oe-mirrors/EnhancedMovieCenter/blob/fc7fd6181e/src/EnhancedMovieCenter.py), [setup.xml](https://github.com/oe-mirrors/EnhancedMovieCenter/blob/fc7fd6181e/src/setup.xml).
