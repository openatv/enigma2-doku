// Shared constructors for reviewed contracts; none execute receiver code.
export const tr = (de, en) => ({ de, en });
export const group = (file, className, context, rows) => rows.map(([action, method, de, en, extra = {}]) => ({ context, action, method, text: tr(de, en), source: { file: `lib/python/${file}.py`, className }, ...extra }));
export const conditional = (de, en) => ({ condition: tr(de, en) });
export const numbers = (file, className, method, de, en) => group(file, className, 'NumberActions', Array.from({ length: 10 }, (_, i) => [String(i), method, de, en]));
export const nav = (file, className, methods = {}) => group(file, className, 'NavigationActions', [
  ['top', methods.top === undefined ? 'keyTop' : methods.top, 'Zum Listenanfang.', 'Go to the top of the list.'],
  ['pageUp', methods.pageUp === undefined ? 'keyPageUp' : methods.pageUp, 'Eine Seite nach oben.', 'Move up one page.'],
  ['up', methods.up === undefined ? 'keyUp' : methods.up, 'Eine Zeile nach oben.', 'Move up one row.'],
  ['down', methods.down === undefined ? 'keyDown' : methods.down, 'Eine Zeile nach unten.', 'Move down one row.'],
  ['pageDown', methods.pageDown === undefined ? 'keyPageDown' : methods.pageDown, 'Eine Seite nach unten.', 'Move down one page.'],
  ['bottom', methods.bottom === undefined ? 'keyBottom' : methods.bottom, 'Zum Listenende.', 'Go to the bottom of the list.'],
]);
export const delegatedNav = (file, className) => nav(file, className, Object.fromEntries(['top', 'pageUp', 'up', 'down', 'pageDown', 'bottom'].map(key => [key, null])));
