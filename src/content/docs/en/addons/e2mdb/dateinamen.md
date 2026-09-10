---
title: "e2MDB \u2013 File and folder names"
description: "OpenATV 8.0+: File and folder names. Detailed e2MDB instructions, purpose and practical examples."
---

Clear names improve matching more than additional skin graphics. e2MDB can remove technical release suffixes, but it cannot reliably guess missing titles, incorrect years or conflicting episode numbers.

## Films

~~~text
/media/hdd/Movies/
  Film Title (2008)/
    Film Title (2008).mkv
  Another Film (2021)/
    Another Film (2021).mp4
~~~

Use title and release year together, especially for remakes and works sharing a name. Avoid names such as `film1.mkv` or release codes alone. One film per folder is a useful arrangement.

## Series

~~~text
/media/hdd/Series/
  Series Title/
    Season 01/
      Series Title - S01E01 - Episode Title.mkv
      Series Title - S01E02 - Episode Title.mkv
    Season 02/
      Series Title - S02E01 - Episode Title.mkv
~~~

Series title, season and episode belong together. **S01E02** is less ambiguous than “Episode 2”. The parser recognises other forms, but a consistent naming scheme helps. A season directory alone may not resolve unclear file names.

## Anime and specials

Anime may use absolute episode numbers, seasons or a provider-specific order. Align the path mode and numbering with the chosen provider. Check specials and multi-episode files individually first. Do not invent season numbers merely to force a match.

## Enigma2 recordings

Keep `.meta`, `.eit` and other sidecar files with their TS recording. They can supply titles, descriptions and event references. External rename/move tools must preserve these relationships.

Generic directory names such as “Movies”, “Series”, “MKV” or “1080p” are not work titles. **Ignored folder name patterns** help name interpretation; they do not exclude a folder from scanning. Use the path's **Exclude** mode for that.

Recognition of a file extension does not guarantee playback of every codec inside it. See [formats and codecs](../../../wiedergabe/formate/).


[Back to e2MDB](../) · [All settings](../optionen/)
