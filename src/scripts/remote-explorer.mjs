import { eventLabels, matchesSearch, normalise, readSelection } from '../lib/remote-guide.mjs';

export function initRemoteExplorers() {
  for (const root of document.querySelectorAll('[data-remote-explorer]')) {
    if (root.dataset.ready) continue;
    root.dataset.ready = 'true';
    const { models, labels, lang, base } = JSON.parse(root.querySelector('[data-remote-data]').textContent);
    const $ = selector => root.querySelector(selector);
    const modelInput = $('#remote-model-search');
    const modelSelect = $('#remote-model');
    const screenSelect = $('#remote-screen');
    const functionInput = $('#remote-function-search');
    const detail = $('[data-remote-detail]');
    const list = $('[data-remote-list]');
    let { model, screen, button } = readSelection(models, location.search);

    const element = (tag, text, className) => {
      const node = document.createElement(tag);
      if (text !== undefined) node.textContent = text;
      if (className) node.className = className;
      return node;
    };
    const selectionURL = () => {
      const url = new URL(location.href);
      url.searchParams.set('model', model.id);
      url.searchParams.set('screen', screen.id);
      url.searchParams.set('key', button.id);
      return url;
    };
    const updateURL = () => history.replaceState(null, '', selectionURL());
    const chooseButton = (id, scroll = false) => {
      button = model.buttons.find(item => item.id === id);
      renderDetail();
      for (const choice of list.querySelectorAll('[data-list-key]')) choice.setAttribute('aria-pressed', String(choice.dataset.listKey === button.id));
      updateURL();
      $('[data-selection-status]').textContent = `${labels.live}: ${button.name}, ${screen.label}`;
      if (scroll && matchMedia('(max-width: 740px)').matches) {
        detail.focus({ preventScroll: true });
        detail.scrollIntoView({ behavior: 'auto', block: 'start' });
      }
    };
    function renderDetail() {
      const entry = screen.entries.find(entry => entry.id === button.id);
      detail.replaceChildren();
      detail.append(element('small', labels.selected));
      const title = element('h3', button.name);
      title.id = 'remote-selected-title';
      detail.append(title, element('p', button.location));
      if (!button.key) detail.append(element('p', labels.unmapped));
      else {
        if (screen.powerBlocked && button.key === 'KEY_POWER') detail.append(element('p', labels.blocked));
        for (const flag of ['m', 'b', 'l', 'r', 's']) {
          const actions = entry.actions.filter(action => action.flags.includes(flag));
          if (!actions.length && ['r', 's'].includes(flag)) continue;
          const block = element('div', undefined, 'remote-event');
          block.append(element('strong', eventLabels[lang][flag]));
          if (!actions.length) block.append(element('p', labels.noAction));
          for (const action of actions) {
            block.append(element('p', action.text));
            if (action.condition) block.append(element('small', action.condition));
            if (action.global) block.append(element('small', labels.global));
          }
          detail.append(block);
        }
      }
      const technical = element('details');
      technical.append(element('summary', labels.mapping));
      if (button.key) technical.append(element('code', `${button.id} → ${button.key}`));
      const sourceList = element('ul');
      for (const action of entry.actions) {
        const item = element('li');
        const link = element('a', `${action.context} / ${action.action} (${action.flags})`);
        link.href = action.source;
        item.append(link);
        sourceList.append(item);
      }
      technical.append(sourceList);
      detail.append(technical);
      const link = element('a', labels.link);
      link.href = selectionURL().href;
      const linkParagraph = element('p');
      linkParagraph.append(link);
      detail.append(linkParagraph);
      for (const hotspot of root.querySelectorAll('[data-key]')) hotspot.setAttribute('aria-pressed', String(hotspot.dataset.key === button.id));
    }
    function renderList() {
      list.replaceChildren();
      const matching = model.buttons.filter(item => matchesSearch(item, screen.entries.find(entry => entry.id === item.id), functionInput.value));
      $('[data-function-count]').textContent = `${matching.length} ${labels.count}`;
      for (const item of matching) {
        const entry = screen.entries.find(entry => entry.id === item.id);
        const choice = element('button');
        choice.type = 'button';
        choice.dataset.listKey = item.id;
        choice.setAttribute('aria-pressed', String(item.id === button.id));
        choice.append(element('strong', item.name), element('small', entry.actions.find(action => !action.global)?.text || entry.actions[0]?.text || (screen.powerBlocked && item.key === 'KEY_POWER' ? labels.blocked : labels.noAction)));
        choice.addEventListener('click', () => chooseButton(item.id, true));
        list.append(choice);
      }
      if (!matching.length) list.append(element('p', labels.empty));
    }
    function renderScreen() {
      screenSelect.value = screen.id;
      $('[data-screen-description]').textContent = screen.description;
      const picture = $('[data-remote-picture]');
      picture.replaceChildren();
      const image = element('img');
      image.src = `${base}/${model.image}`;
      image.width = model.width;
      image.height = model.height;
      image.alt = labels.imageAlt;
      picture.append(image);
      for (const item of model.buttons) {
        const hotspot = element('button', undefined, 'remote-hotspot');
        hotspot.type = 'button';
        hotspot.dataset.key = item.id;
        hotspot.style.left = `${item.position[0] / model.width * 100}%`;
        hotspot.style.top = `${item.position[1] / model.height * 100}%`;
        hotspot.dataset.documented = String(screen.entries.find(entry => entry.id === item.id).actions.length > 0);
        hotspot.setAttribute('aria-label', `${item.name} — ${item.location}`);
        hotspot.title = `${item.name} — ${item.location}`;
        hotspot.addEventListener('click', () => chooseButton(item.id, true));
        picture.append(hotspot);
      }
      renderDetail();
      renderList();
    }
    function renderModel() {
      modelSelect.value = model.id;
      screenSelect.replaceChildren(...model.screens.map(item => {
        const option = element('option', item.label);
        option.value = item.id;
        return option;
      }));
      renderScreen();
    }
    function filterModels() {
      const query = normalise(modelInput.value).replaceAll(' ', '');
      const matching = models.filter(item => normalise([item.id, item.name, item.remote, ...item.aliases].join(' ')).replaceAll(' ', '').includes(query));
      for (const option of modelSelect.options) option.hidden = !matching.some(item => item.id === option.value);
      const found = matching.length > 0;
      modelSelect.disabled = !found;
      screenSelect.disabled = !found;
      $('[data-remote-workspace]').hidden = !found;
      $('[data-model-status]').textContent = found ? `${labels.modelCount}: ${matching.length}` : labels.noModel;
      if (found && !matching.some(item => item.id === model.id)) selectModel(matching[0].id);
    }
    function selectModel(id) {
      model = models.find(item => item.id === id);
      screen = model.screens.find(item => item.id === screen.id) || model.screens[0];
      button = model.buttons.find(item => item.id === button.id) || model.buttons[0];
      renderModel();
      updateURL();
    }
    modelInput.addEventListener('input', filterModels);
    modelSelect.addEventListener('change', () => selectModel(modelSelect.value));
    screenSelect.addEventListener('change', () => { screen = model.screens.find(item => item.id === screenSelect.value); renderScreen(); updateURL(); });
    functionInput.addEventListener('input', renderList);
    $('[data-remote-reset]').addEventListener('click', () => { functionInput.value = ''; renderList(); functionInput.focus(); });
    window.addEventListener('popstate', () => { ({ model, screen, button } = readSelection(models, location.search)); renderModel(); });
    renderModel();
    filterModels();
    $('[data-remote-ui]').hidden = false;
  }
}
