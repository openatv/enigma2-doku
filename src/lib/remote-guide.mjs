// This is a documentation resolver, not an Enigma2 action dispatcher.
export const normalise = value => value.normalize('NFKD').replace(/\p{M}/gu, '').toLowerCase().replace(/[^\p{L}\p{N}]+/gu, ' ').trim();

export function remapKey(key, remaps) {
  // Preserve rcinput.cpp order. In particular HELP must not cascade into EPG.
  for (const remap of remaps) if (key === remap.from) key = remap.to;
  return key;
}

export const eventLabels = {
  de: { m: 'Beim Drücken', b: 'Beim kurzen Loslassen', l: 'Lang drücken', r: 'Wiederholung beim Halten', s: 'Loslassen nach Langdruck' },
  en: { m: 'On press', b: 'On short release', l: 'Long press', r: 'Repeat while held', s: 'Release after long press' },
};
export const eventText = (flags, lang) => [...flags].map(flag => eventLabels[lang][flag]).join(' · ');

export function locationText([x, y], lang) {
  const zones = lang === 'de'
    ? ['Ganz oben', 'Symbolreihe unter POWER', 'Ziffernblock', 'Neben der 0', 'Farbtastenreihe', 'Oberhalb des Steuerkreuzes', 'Steuerkreuz', 'Unterhalb des Steuerkreuzes', 'Lautstärke-/Senderbereich', 'Wiedergabereihe', 'Untere Funktionstasten']
    : ['At the very top', 'Symbol row below POWER', 'Number pad', 'Beside 0', 'Colour button row', 'Above the navigation ring', 'Navigation ring', 'Below the navigation ring', 'Volume/channel area', 'Playback row', 'Bottom function row'];
  const limits = [30, 50, 115, 135, 155, 173, 228, 242, 300, 325, Infinity];
  const zone = zones[limits.findIndex(limit => y <= limit)];
  const side = x < 50 ? (lang === 'de' ? 'links' : 'left') : x > 90 ? (lang === 'de' ? 'rechts' : 'right') : (lang === 'de' ? 'mittig' : 'centre');
  return `${zone}, ${side}`;
}

export function compileGuide(reference, definitions, lang) {
  const { screens, globals, handsets } = definitions;
  const sourceURL = (path, line) => `https://github.com/openatv/enigma2/blob/${reference.enigmaRevision}/${path}#L${line}`;
  return reference.models.map(model => {
    const remote = reference.remotes[model.remote];
    const { printedLabels = {}, buttonNames = {}, unmappedButtons = [] } = handsets[model.remote] || {};
    const buttons = remote.buttons.map(button => ({ ...button, label: printedLabels[button.id] || button.xmlLabel, name: buttonNames[button.id]?.[lang] || printedLabels[button.id] || button.xmlLabel, key: remapKey(button.id, model.remaps), location: locationText(button.position, lang) }));
    buttons.push(...unmappedButtons.map(button => ({ ...button, label: button.label[lang], name: button.label[lang], key: null, location: locationText(button.position, lang) })));
    return { ...model, image: remote.image, width: remote.width, height: remote.height, buttons, screens: screens.map(screen => {
      const rules = [...screen.rules, ...globals.filter(rule => !screen.powerBlocked || rule.action !== 'power_long')];
      const entries = buttons.map(button => {
        const actions = rules.flatMap(rule => {
          const evidence = reference.sources[rule.source.file]?.classes[rule.source.className];
          if (!evidence || (rule.method && !evidence.methods[rule.method])) throw new Error(`Missing evidence: ${screen.id} / ${rule.source.className}.${rule.method}`);
          const matches = reference.bindings.filter(binding => binding.context === rule.context && binding.action === rule.action && binding.key === button.key && (!rule.keys || rule.keys.includes(binding.key)));
          return matches.map(binding => ({ flags: binding.flags, event: eventText(binding.flags, lang), text: rule.text[lang], condition: rule.condition?.[lang], global: rule.global || false, context: rule.context, action: rule.action, source: sourceURL(rule.source.file, evidence.methods[rule.method] || evidence.line) }));
        });
        return { id: button.id, actions };
      });
      return { id: screen.id, label: screen.label[lang], description: screen.description[lang], powerBlocked: screen.powerBlocked || false, entries };
    }) };
  });
}

export function matchesSearch(button, entry, query) {
  const terms = normalise(query).split(' ').filter(Boolean);
  const haystack = normalise([button.name, button.label, button.id, button.key, button.location, ...entry.actions.flatMap(action => [action.text, action.event, action.condition, action.context])].filter(Boolean).join(' '));
  return terms.every(term => haystack.includes(term));
}

export function readSelection(models, query) {
  const params = new URLSearchParams(query);
  const model = models.find(model => model.id === params.get('model')) || models[0];
  const screen = model.screens.find(screen => screen.id === params.get('screen')) || model.screens[0];
  const button = model.buttons.find(button => button.id === params.get('key')) || model.buttons.find(button => button.id === 'KEY_MENU') || model.buttons[0];
  return { model, screen, button };
}
