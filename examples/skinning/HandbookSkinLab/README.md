# Handbook Skin Lab

English OpenATV Enigma2 skinning examples. Copy this directory to
`/usr/lib/enigma2/python/Plugins/Extensions/HandbookSkinLab/`, restart the GUI,
then open **Plugins → Handbook Skin Lab**. LEFT/RIGHT changes examples;
OK/EXIT closes the screen. No active-skin settings are replaced.

There are 21 scenes: twelve foundations and nine advanced examples for InfoBar
data flow, classic/modern service lists, shared panels and icon fonts. The
advanced scenes need the source interfaces documented in the handbook.
`advanced.py` contains fixture sources and native list helpers; `panels.xml`
contains the shared header/footer. Modern list fixtures are explicitly playable
and unencrypted; the classic list fixes a readable teaching row height. These
states are not measurements of the receiver or its reception equipment.
The icon examples use the installed `enigma2icons` font; no font is bundled.

The XML files are re-read when opening each example. Python changes need a GUI
restart. Each screen uses a 1280×720 design grid and synthetic data.

Native screenshots: `grab -o -d -p /tmp/skin-example.png`.
The optional local request-file service under `/tmp/handbook-skin-lab/` accepts
only the IDs in `SCENES`; it does not accept shell commands or Python code.
An English receiver locale is required for batch capture.

Documentation: https://openatv.github.io/enigma2-doku/en/developers/skinning/

The plugin source is licensed under GPL-3.0-only, as indicated in the Python
files. The XML examples and original test artwork follow the handbook's
GPL-2.0 licence. No artwork or fonts from a third-party skin are included.
