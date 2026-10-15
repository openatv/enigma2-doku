# Remote guide maintenance

The first reviewed profile is vuduo4klite / rcType 0 / vu6. Public chapter:
`/{de,en}/bedienung/fernbedienungs-finder/`. The static site still needs no server,
receiver connection, credentials or external search service.

## Files and responsibilities

- `scripts/import-remote-reference.py`: read-only source import, generic keymap
  entries, source hashes, class/method locations, model configure macros,
  rcinput.cpp remapping order, remote image positions, recursive menu.xml paths
  and de.po labels. It also records reviewed C++ symbols and the native OSD
  zero-long binding. Executes no E2 Python or menu code/conditions.
- `data/remote-reference.json`: generated source evidence; committed so GitHub
  Pages does not require adjacent source checkouts. Revision hashes pin links.
- `data/remote-guide.mjs`: bilingual, editorially reviewed screen contracts.
  Context + action selects the real flags from keymap.xml. Method links document
  the handler; null links to the owning class/constructor for delegation/lambdas.
- `data/remote-contracts.mjs`: shared constructors for reviewed rules.
- `data/remote-submenus.mjs`: subdialog contracts and an explicit allowlist of
  menu screen implementations. Never infer a Setup profile from a screen title.
- `src/lib/remote-guide.mjs`: model remapping and joins, URL selection, search.
- `src/components/RemoteExplorer.astro`: localized interface and server-rendered
  fallback tables; tables are included in Pagefind, interactive controls excluded.
- `src/scripts/remote-explorer.mjs`: local UI only; no receiver commands.
- `public/remotes/`: original PNG, XML and GPLv3 license copied from OE-Alliance.

## Re-import

```powershell
python scripts/import-remote-reference.py ../enigma2 ../remotes
node --test tests/remote-guide.test.mjs
```

Optional browser check (development machine only, Playwright Python package and
Edge installed): start the built-site preview, then run
`python scripts/check-remote-browser.py`. Set `REMOTE_GUIDE_URL` to its origin and
base path, e.g. `http://127.0.0.1:4325/enigma2-doku` for Pages or
`http://127.0.0.1:4326` for an Apache-style root. The script writes review images
and its report only to ignored `.capture-private/`. Hosting needs none of these
test tools.

The importer rejects referenced files differing from their Git revision. PNG
bytes are compared exactly; text line endings are normalized for source hashing.
It intentionally supports only the reviewed model initially. Adding a new model
requires explicit importer/profile changes rather than silently guessing macros.
Review changes to handlers, enabled states and priorities even when keymap entries
have not changed. A successful join does not prove a map is enabled at runtime.

The default path assumes no custom runtime remap table. rcinput.cpp uses an `else`
for the compile-time remaps. Keep ordered processing: INFO → EPG precedes HELP →
INFO. Never recursively normalize HELP to EPG. KEY_EDIT → KEY_TIME is configured
but vu6.xml contains no KEY_EDIT button; do not assign it to TIMER by guesswork.

## Adding a model or handset after review

1. Verify the model/rcType/codeName tuple in remotes.xml and record aliases.
   Distinguish receiver model from handset variant; one image can serve several
   models with different input remaps. Keep the model selector searchable.
2. Copy the correct original PNG/XML and retain license and source revision.
   Read dimensions and positions from that asset. Verify printed labels visually;
   XML labels can differ, as with HELP/INFO and EPG on this prototype.
3. Read that model's configure conditions and the corresponding rcinput.cpp
   branches, including platform/device conditions and custom remap precedence.
   Expand the importer deliberately if the next model needs more complex logic.
4. Reuse screen contracts only for the same standard keymap and implementation.
   Add explicit profiles/conditions for alternate keymaps, plugins, focus states,
   editing, PiP and timeshift. Do not union all contexts or assume all actions are
   enabled. Exclude bindings consumed by earlier maps (e.g. INFO in channel
   selection, PREVIOUS/NEXT in VirtualKeyboard, PLAY in MovieSelection where
   InfobarActions priority 0 consumes it before SeekActions priority 5).
5. Add DE/EN explanations, source evidence and representative regression tests.
   Keep labels visible on the handset separate from logical Linux key names.
6. Review against the actual handset. Test press, release, repeat, long and stop,
   not just OpenWebif key injection; the latter does not prove physical IR events.
7. Run the normal build/link/search/size checks and responsive browser checks for
   both language routes and both hosting base paths.

## Review coverage of this prototype

38 screen states plus 54 menu-path selections: the original nine profiles and
tuner choice/configuration, manual/automatic scan, running/completed scan,
network overview, adapter/Wi-Fi configuration, Wi-Fi scan, network test, DNS,
network services/password, mounts, share browsing, mount editing, credentials,
storage management/mount points/action preparation, plugin select/edit,
package operations/log, recording timer editor/log, ChoiceBox and confirmation.
All 44 XML-mapped controls can be selected. Two additional visible controls are
explicitly unmapped. An empty event means no action documented for that state,
not a universal assertion of no effect.

The importer records all 139 menu.xml entries for auditing, but only reviewed
screen classes, literal Setup entries and list-menu containers become choices.
Do not claim complete coverage of all plugins, wizards, modal/focus variants,
horizontal menus or unreviewed screen classes. Hardware/level/conditional
visibility is not evaluated on the documentation host. Menu paths use source
translations; custom skin menus and installed plugin contributions can differ.

Route aliases share one reviewed profile. `packModels` omits duplicate action
tables from the embedded JSON; `hydrateModels` resolves them locally. The
server-rendered route directory links to canonical fallback tables, so Pagefind
and readers without JavaScript can find deeper paths without repeated tables.
The route IDs include ancestor keys, preserving duplicate item keys in separate
branches. Existing nine screen IDs and their links remain valid.

## Native and dynamic keys

Read the input path beyond keymap.xml: rcinput.cpp, main/enigma.cpp, action.cpp, avcontrol.cpp,
native widgets and wildcard/dynamic Python handlers. Native list navigation is
linked to `eListbox::moveSelection`, including left/right paging in a vertical
list. ChoiceBox shortcuts are built from the calling screen's entries, not a
fixed global colour action. ActionMap can add legacy left/right page actions.

`main/enigma.cpp::keyEvent` creates long events after repeated input and handles
the configured long-press emulation prefix before calling the action dispatcher.
The prefix consumes its own normal action and arms the next key on the same
producer within ten seconds. Defaults disable emulation. Explain this modifier
without assigning an arbitrary prefix button to every model. UsageConfig.py
supplies its default and selectable logical codes; retain model remapping.

`eAVControl::handleOSDKey` is called before translations, modal filtering and
ActionMap dispatch. With enabled/supported OSD auto-hide, long 0 toggles the
temporary pause. A visible-OSD short 0 is deferred, then replays make/break on
release; a long 0 suppresses normal zero actions. A hidden-OSD wake key owns its
repeat/long/release events too. The special zero branch precedes that wake-key
branch. Document this globally, not as a keymap.xml entry or a TV-only shortcut.
The importer records its origin as `native` and symbol/line evidence; the UI
distinguishes this from overridable Python globals. Native keymap `b` versus
post-long `s` handling remains separate. No physical IR test is implied.

Review long keys and condition-dependent overrides after each source update:
EXIT long is explicitly implemented in many subdialogs but not automatically in
every class sharing CancelActions. DNS/password yellow is not Setup defaults;
adapter INFO consumes text overwrite at a higher priority. NimSetup's misleading
`nothingconnected` action actually cancels unsaved changes in this source.

Review especially: HELP becomes INFO, EPG stays the printed EPG key; MENU in three
screens; PVR opens recordings versus clears a text input; short/long BLUE; TIMER
short/long; Setup field-dependent actions; channel navigation setting; EPG colour
configuration; global volume repeat/long/stop; Setup ALLOW_SUSPEND restrictions.
The guide is source-verified, not claimed to be physically IR-tested.

The URL contains only model, screen and physical button IDs. Unknown IDs fall back
to safe defaults; strings render with textContent. Filtering happens in-browser.
The static tables remain usable without JavaScript and searchable via Pagefind.

Source image attribution: oe-alliance/remotes revision
`b5b834663e07f6c0ebc9fce90d0084036523044e`, `png/vu6.png`, `xml/vu6.xml`, GPLv3.
Enigma2 source snapshot: `6588fdc15f040293d212dc15ec63194e82c8269f`.
