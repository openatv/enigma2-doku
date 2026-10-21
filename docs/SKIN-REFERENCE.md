# Skin reference maintenance

The dictionary is built from `skin-api.json`, `widget-api.json`, `skin-attribute-help.json` and `skin-xml-help.json`. It does not execute Enigma2 or skin expressions. The first two files remain source inventories, including legacy names. Presentation filters must not delete those names from the evidence.

Edit current attribute authoring help in `data/skin-attribute-help.json`: values, omission behaviour, example, context, limitations and applicable native classes. Keep the revision equal to the imported source. A no-op or an unconverted native argument needs an explicit limitation, not an invented working example. Parser error fallbacks are not universal omitted-attribute defaults. The existing summary remains in `skin-api-notes.json` / the imported catalogue.

Migration entries have a canonical replacement and a status: `deprecated` means the imported handler emits a warning, while `compatibility` means it does not. Check value semantics, especially `noWrap` and `selectionDisabled`. Do not classify a template field or a Python override as deprecated solely because the central handler shares its name. Existing attribute URL fragments redirect to the migration reference; retain the no-JavaScript links too.

Edit structural/template examples in `data/skin-xml-help.json` and worked articles in `docs/developer-content/`. The dictionary indexes every recorded direct and inherited component handler, but some component-specific entries still link to implementation contracts and need further editorial examples. Third-party plugin attributes and dynamically computed names are outside this static core inventory. Do not describe this as a universal plugin schema.

After editing, run developer sync, the Node test suite, Astro check and the full build with link/anchor/search verification. Tests should verify coverage, context distinctions, migration routing and example shape. New illustration components must be labelled as illustrations. Do not update existing capture manifests or claim hardware tests without new reviewed receiver captures.

For these source-checked recipes, a receiver test should compare short/long lists with the scrollbar hidden/visible, normal and selected rows, label and template underlining, and the supported skin resolutions. Check the Enigma2 skin log and inspect for clipping. No Enigma2 runtime code is changed by this documentation update.
