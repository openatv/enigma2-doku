// Reviewed screen contracts. keymap flags and physical positions come from the
// generated reference; these descriptions deliberately do not union ActionMaps.
import { tr, group, conditional, numbers, nav } from './remote-contracts.mjs';
import { createSubscreens } from './remote-submenus.mjs';
export { menuProfiles } from './remote-submenus.mjs';
const ig = (className, context, rows) => group('Screens/InfoBarGenerics', className, context, rows);
const configurable = conditional('Abhängig von den Fernbedienungs-/OSD-Einstellungen und eigenen Hotkeys.', 'Depends on remote/OSD settings and custom hotkeys.');
const colours = ['red', 'green', 'yellow', 'blue'];

export const globals = [
  { context: 'NativeOSD', action: 'toggleAutoHidePause', text: tr('Automatisches Ausblenden des OSD pausieren; erneut lange 0 drücken zum Fortsetzen. Die Pause gilt bis zum nächsten GUI-Neustart.', 'Pause automatic OSD hiding; hold 0 again to resume. The pause lasts until the next GUI restart.'), source: { file: 'lib/driver/avcontrol.cpp', symbol: 'eAVControl::handleOSDKey' }, ...conditional('Nur bei aktiviertem „OSD automatisch ausblenden“ und unterstützter OSD-Transparenz. Der kurze 0-Befehl wird dabei nicht ausgeführt.', 'Requires Automatically hide OSD to be enabled and OSD alpha support. The short 0 action is suppressed.') },
  ...group('Screens/VolumeControl', 'VolumeControl', 'GlobalActions', [
    ['volumeUp', 'keyVolumeUp', 'Lauter; beim Halten wiederholen.', 'Increase volume; holding repeats.'],
    ['volumeDown', 'keyVolumeDown', 'Leiser; beim Halten wiederholen.', 'Decrease volume; holding repeats.'],
    ['volumeUpLong', 'keyVolumeLong', 'Auf die Schrittweite für langen Tastendruck wechseln.', 'Switch to the volume step size for a long press.'],
    ['volumeDownLong', 'keyVolumeLong', 'Auf die Schrittweite für langen Tastendruck wechseln.', 'Switch to the volume step size for a long press.'],
    ['volumeUpStop', 'keyVolumeStop', 'Normale Lautstärkeschrittweite wiederherstellen.', 'Restore the normal volume step size.'],
    ['volumeDownStop', 'keyVolumeStop', 'Normale Lautstärkeschrittweite wiederherstellen.', 'Restore the normal volume step size.'],
    ['volumeMute', 'keyVolumeMute', 'Stummschaltung ein-/ausschalten.', 'Toggle mute.'],
    ['volumeMuteLong', 'keyVolumeMuteLong', 'Bei aktiver Stummschaltung das Symbol dauerhaft einblenden.', 'Keep the mute symbol visible while muted.'],
  ]),
  ...group('StartEnigma', 'PowerKey', 'GlobalActions', [
    ['power_down', 'powerdown', 'Tastendruck vormerken; erst das Loslassen führt die kurze POWER-Aktion aus.', 'Arm the key; the short POWER action runs on release.'],
    ['power_up', 'powerup', 'Eingestellte kurze POWER-Aktion, z. B. Standby.', 'Configured short POWER action, e.g. standby.', configurable],
    ['power_long', 'powerlong', 'Eingestellte lange POWER-Aktion, z. B. Ausschaltmenü.', 'Configured long POWER action, e.g. the shutdown menu.', configurable],
  ]),
].map(rule => ({ ...rule, global: true }));

const mediaCommon = [
  ...ig('InfoBarAudioSelection', 'InfobarAudioSelectionActions', [
    ['audioSelection', 'audioSelection', 'Tonspuren und Audiooptionen öffnen.', 'Open audio tracks and options.'],
    ['yellow_key', 'audioSelection', 'Tonspuren und Audiooptionen öffnen.', 'Open audio tracks and options.'],
    ['audioSelectionLong', 'audioDownmixToggle', 'Dolby-Digital-Downmix umschalten.', 'Toggle Dolby Digital downmix.', conditional('Nur wenn der Audiotreiber AC3-Downmix unterstützt.', 'Only when the audio driver supports AC3 downmix.')],
  ]),
  ...ig('InfoBarSubtitleSupport', 'InfobarSubtitleSelectionActions', [['subtitleSelection', 'subtitleSelection', 'Untertitelauswahl öffnen.', 'Open subtitle selection.']]),
  ...ig('InfoBarTeletextPlugin', 'InfobarTeletextActions', [['startTeletext', 'startTeletext', 'Teletext öffnen.', 'Open teletext.', conditional('Benötigt ein Teletext-Plugin und einen geeigneten Dienst.', 'Requires a teletext plugin and a suitable service.')]]),
  ...ig('InfoBarExtensions', 'ColorActions', [
    ['blue', 'keyQuickMenu', 'QuickMenu öffnen; bei aktivierter Vertauschung das Erweiterungsmenü.', 'Open QuickMenu; opens Extensions when the blue-button swap is enabled.', configurable],
    ['bluelong', 'keyExtensions', 'Erweiterungsmenü öffnen; bei aktivierter Vertauschung das QuickMenu.', 'Open Extensions; opens QuickMenu when the blue-button swap is enabled.', configurable],
  ]),
  ...ig('InfoBarEPG', 'ButtonSetupActions', [
    ['info', 'InfoPressed', 'Sendungsinformationen oder die für INFO eingestellte Ansicht öffnen.', 'Open event information or the view configured for INFO.', configurable],
    ['info_long', 'showEventInfoPlugins', 'Auswahl der Sendungsinfo-Funktionen/Plugins öffnen.', 'Open the event-information functions/plugins menu.', configurable],
    ['epg', 'EPGPressed', 'Den eingestellten EPG öffnen, z. B. grafischen EPG.', 'Open the configured EPG, e.g. graphical EPG.', configurable],
    ['epg_long', 'showEventGuidePlugins', 'Auswahl der EPG-Funktionen/Plugins öffnen.', 'Open the EPG functions/plugins menu.', configurable],
  ]),
];

const baseScreens = [
  {
    id: 'tv', label: tr('Fernsehen / Infobar', 'Live TV / Infobar'),
    description: tr('Normales Fernsehen ohne geöffneten Dialog, Timeshift oder PiP-Bedienmodus. Eigene Hotkeys können die Belegung ändern.', 'Normal live TV without an open dialog, timeshift or PiP control mode. Custom hotkeys can override these assignments.'),
    rules: [
      ...mediaCommon,
      ...ig('InfoBarMenu', 'InfoBarMenuActions', [['showMenu', 'showMainMenu', 'Hauptmenü öffnen.', 'Open the main menu.']]),
      ...ig('InfoBarShowHide', 'InfobarShowHideActions', [
        ['toggleShow', 'OkPressed', 'Infobar anzeigen/weiterschalten; alternativ Senderliste, je nach OK-Einstellung.', 'Show/cycle the Infobar; alternatively open the channel list, depending on the OK setting.', configurable],
        ['LongOKPressed', 'toggleShowLong', 'Infobar-EPG öffnen, wenn dessen Aufruf auf OK lang eingestellt ist.', 'Open Infobar EPG when its activation is set to long OK.', configurable],
        ['hide', 'keyHide', 'Sichtbare Infobar ausblenden; bei bereits verborgenem OSD ggf. Infobar-EPG öffnen.', 'Hide the visible Infobar; with the OSD already hidden, may open Infobar EPG.', configurable],
      ]),
      ...group('Screens/InfoBar', 'InfoBar', 'InfobarActions', [
        ['showMovies', 'showMovies', 'Aufnahmeliste öffnen; ggf. durch EMC ersetzt.', 'Open recordings; EMC may replace the native list.', { keys: ['KEY_VIDEO', 'KEY_PVR', 'KEY_FILE', 'KEY_MEDIA', 'KEY_OPEN'] }],
        ['showMediaPlayer', 'showMediaPlayer', 'MediaPlayer öffnen, wenn installiert.', 'Open MediaPlayer if installed.'],
        ['showRadio', 'showRadioButton', 'Zum Radiomodus bzw. zur Radiosenderliste wechseln.', 'Switch to radio mode or the radio channel list.', configurable],
        ['showTv', 'showTvButton', 'Zum TV-Modus bzw. zur TV-Senderliste wechseln.', 'Switch to TV mode or the TV channel list.', configurable],
        ['openBouquetList', 'openBouquetList', 'Bouquet-/Senderliste oder Aufnahmeliste gemäß TV-Tasten-Einstellung öffnen.', 'Open bouquets/channels or recordings according to the TV-button setting.', configurable],
        ['openTimerList', 'openTimerList', 'Aufnahme-Timerübersicht öffnen.', 'Open the recording timer overview.'],
        ['openAutoTimerList', 'openAutoTimerList', 'AutoTimer-Liste öffnen, wenn das Plugin installiert ist.', 'Open the AutoTimer list if the plugin is installed.'],
      ]),
      ...ig('InfoBarChannelSelection', 'InfobarChannelSelection', [
        ['switchChannelUp', 'UpPressed', 'Senderliste öffnen oder vorwärts zappen, je nach Einstellung.', 'Open the channel list or zap forward, depending on settings.', configurable],
        ['switchChannelDown', 'DownPressed', 'Senderliste öffnen oder rückwärts zappen, je nach Einstellung.', 'Open the channel list or zap backward, depending on settings.', configurable],
        ['LeftPressed', 'LeftPressed', 'Zum vorherigen Sender; alternativ QuickEPG öffnen.', 'Previous channel; alternatively open QuickEPG.', configurable],
        ['RightPressed', 'RightPressed', 'Zum nächsten Sender; alternativ QuickEPG öffnen.', 'Next channel; alternatively open QuickEPG.', configurable],
        ['historyBack', 'historyBack', 'Im Zapping-Verlauf zurückgehen.', 'Go back through zap history.'],
        ['historyNext', 'historyNext', 'Im Zapping-Verlauf vorgehen.', 'Go forward through zap history.'],
        ['ChannelPlusPressed', 'ChannelPlusPressed', 'Vorwärts zappen oder Sender-/Favoritenliste öffnen.', 'Zap forward or open channels/favourites.', configurable],
        ['ChannelMinusPressed', 'ChannelMinusPressed', 'Rückwärts zappen oder Sender-/Favoritenliste öffnen.', 'Zap backward or open channels/favourites.', configurable],
        ['ChannelPlusPressedLong', 'openServiceList', 'Senderliste öffnen.', 'Open the channel list.'],
        ['ChannelMinusPressedLong', 'openServiceList', 'Senderliste öffnen.', 'Open the channel list.'],
      ]),
      ...ig('InfoBarInstantRecord', 'InfobarInstantRecord', [['instantRecord', 'keyInstantRecord', 'Menü für Sofortaufnahme öffnen.', 'Open the instant-recording menu.']]),
      ...group('Components/Timeshift', 'InfoBarTimeshift', 'InfobarTimeshiftActions', [['timeshiftStart', 'startTimeshift', 'Timeshift starten / Live-TV anhalten.', 'Start timeshift / pause live TV.', conditional('Nur bei verfügbarem Timeshift; benötigt einen geeigneten Speicherpfad.', 'Requires available timeshift and a suitable storage path.')]]),
      ...ig('InfoBarRedButton', 'InfobarRedButtonActions', [['activateRedButton', 'activateRedButton', 'Red-Button-/HbbTV-Angebot des Senders öffnen.', 'Open the service’s red-button / HbbTV application.', conditional('Benötigt eine passende Erweiterung und ein verfügbares Senderangebot.', 'Requires a suitable extension and a service application.')]]),
      ...ig('InfoBarSubserviceSelection', 'InfobarSubserviceSelectionActions', [['selectSubservices', 'keySelectSubservice', 'Unterkanäle wählen; ohne Unterkanäle Timerübersicht oder Plugin-Browser gemäß Einstellung.', 'Select subservices; otherwise open timers or the plugin browser according to settings.', configurable]]),
      ...numbers('Screens/InfoBarGenerics', 'InfoBarNumberZap', 'keyNumberGlobal', 'Sendernummer eingeben; 0 hat je nach Einstellung eine Rücksprung-/Sonderfunktion.', 'Enter a channel number; 0 has a recall/special function depending on settings.'),
    ],
  },
  {
    id: 'menu', label: tr('Hauptmenü / Untermenü (Liste)', 'Main menu / submenu (list)'),
    description: tr('Listenmenü. Horizontale Menüs und Plugins können andere Tasten verwenden.', 'List-style menu. Horizontal menus and plugins can use different controls.'),
    rules: [
      ...group('Screens/Menu', 'Menu', 'OkCancelActions', [
        ['ok', 'okbuttonClick', 'Markierten Menüpunkt öffnen.', 'Open the selected menu item.'],
        ['cancel', 'closeNonRecursive', 'Eine Menüebene zurück.', 'Go back one menu level.'],
        ['close', 'closeRecursive', 'Alle Menüebenen schließen.', 'Close all menu levels.'],
      ]),
      ...group('Screens/Menu', 'Menu', 'MenuActions', [['menu', 'keySetupMenu', 'OSD-Einstellungen öffnen: MENU im bereits geöffneten Menü.', 'Open OSD settings: MENU inside an already open menu.']]),
      ...group('Screens/Menu', 'Menu', 'ColorActions', [
        ['red', 'closeNonRecursive', 'Eine Menüebene zurück.', 'Go back one menu level.'],
        ['green', 'keyGreen', 'Verschieben eines Eintrags ein-/ausschalten.', 'Toggle moving a menu item.', conditional('Nur bei benutzerdefinierter Menüsortierung; ggf. erst BLAU für Bearbeiten.', 'Only with user-defined menu sorting; enter editing with BLUE if needed.')],
        ['yellow', 'keyYellow', 'Markierten Menüpunkt aus-/einblenden.', 'Hide/show the selected menu item.', conditional('Nur bei benutzerdefinierter Menüsortierung und aktivem Bearbeiten.', 'Only with user-defined menu sorting and editing enabled.')],
        ['blue', 'toggleSortMode', 'Menü bearbeiten ein-/ausschalten.', 'Toggle menu editing.', conditional('Nur bei benutzerdefinierter Menüsortierung.', 'Only with user-defined menu sorting.')],
      ]),
      ...nav('Screens/Menu', 'Menu'),
      ...group('Screens/Menu', 'Menu', 'NavigationActions', [
        ['left', 'keyPageUp', 'Eine Seite nach oben.', 'Move up one page.'],
        ['right', 'keyPageDown', 'Eine Seite nach unten.', 'Move down one page.'],
      ]).map(rule => ({ ...rule, ...conditional('Automatische LEFT/RIGHT-Seitennavigation, wenn die klassische Navigationsoption aktiv ist.', 'Automatic LEFT/RIGHT paging when the legacy navigation option is enabled.') })),
      ...numbers('Screens/Menu', 'Menu', 'keyNumberGlobal', 'Menüpunkt über seine Nummer wählen.', 'Select a menu item by number.'),
      ...group('Screens/Menu', 'Menu', 'TextActions', [['textlong', 'keyText', 'Videoausgabe auf 720p umschalten (Wiederherstellung eines sichtbaren Menüs).', 'Switch video output to 720p (recover a visible menu).']]),
    ],
  },
  {
    id: 'channels', label: tr('Senderliste', 'Channel list'),
    description: tr('Normale Senderauswahl; kein Verschiebe-, Bearbeitungs- oder PiP-Modus. Die Navigationsoption gilt unabhängig vom gewählten Listen-Skin.', 'Normal channel selection, outside move, edit or PiP mode. The navigation option is independent of the list skin.'),
    rules: [
      ...group('Screens/ChannelSelection', 'ChannelSelection', 'OkCancelActions', [
        ['ok', 'channelSelected', 'Markierten Sender auswählen / umschalten.', 'Select / zap to the highlighted channel.'],
        ['cancel', 'cancel', 'Senderliste verlassen.', 'Leave the channel list.'],
      ]),
      ...group('Screens/ChannelSelection', 'ChannelSelection', 'TvRadioActions', [
        ['keyTV', 'toogleTvRadio', 'TV-/Radiomodus der Senderliste umschalten.', 'Toggle TV/radio mode of the channel list.'],
        ['keyRadio', 'toogleTvRadio', 'TV-/Radiomodus der Senderliste umschalten.', 'Toggle TV/radio mode of the channel list.'],
      ]),
      ...group('Screens/ChannelSelection', 'ChannelSelectionEdit', 'ChannelSelectEditActions', [['contextMenu', 'doContext', 'Senderlisten-Kontextmenü öffnen (z. B. Bouquet bearbeiten).', 'Open the channel-list context menu (e.g. edit bouquets).']]),
      ...group('Screens/ChannelSelection', 'ChannelSelectionBase', 'ColorActions', [
        ['red', 'showAllServices', 'Alle Sender anzeigen.', 'Show all services.'],
        ['green', 'showSatellites', 'Satelliten-/Transponderansicht öffnen.', 'Open satellites/transponders.'],
        ['yellow', 'showProviders', 'Anbieter anzeigen.', 'Show providers.'],
        ['blue', 'showFavourites', 'Bouquets / Favoriten anzeigen.', 'Show bouquets / favourites.'],
      ]),
      ...group('Screens/ChannelSelection', 'ChannelSelectionEPG', 'ChannelSelectInfoActions', [['showEventInfo', 'showEventInfo', 'Informationen zur Sendung öffnen.', 'Open event information.']]),
      ...group('Screens/ChannelSelection', 'ChannelSelectionEPG', 'ChannelSelectEPGActions', [['showEPGList', 'showEPGList', 'EPG-Liste des markierten Senders öffnen.', 'Open the EPG list for the selected channel.', { keys: ['KEY_EPG'] }]]),
      ...group('Screens/ChannelSelection', 'ChannelSelectionBase', 'NavigationActions', [
        ['top', null, 'Zum Listenanfang.', 'Go to the top.'], ['bottom', null, 'Zum Listenende.', 'Go to the bottom.'],
        ['up', null, 'Vorherige Zeile.', 'Previous row.'], ['down', null, 'Nächste Zeile.', 'Next row.'],
        ['left', 'moveLeft', 'Moderne vertikale Liste: vorheriger Marker; sonst gemäß Listenlayout nach links. Klassisch: Seite/Eintrag zurück.', 'Modern vertical list: previous marker; otherwise move left according to list layout. Legacy: previous page/item.', configurable],
        ['right', 'moveRight', 'Moderne vertikale Liste: nächster Marker; sonst gemäß Listenlayout nach rechts. Klassisch: Seite/Eintrag vor.', 'Modern vertical list: next marker; otherwise move right according to list layout. Legacy: next page/item.', configurable],
        ['pageUp', null, 'Moderne Navigation: Seite auf. Klassische Navigation: nächstes Bouquet.', 'Modern navigation: page up. Legacy navigation: next bouquet.', configurable],
        ['pageDown', null, 'Moderne Navigation: Seite ab. Klassische Navigation: vorheriges Bouquet.', 'Modern navigation: page down. Legacy navigation: previous bouquet.', configurable],
        ['first', 'prevBouquet', 'Vorheriges Bouquet.', 'Previous bouquet.', conditional('Nur bei moderner Navigation.', 'Only with modern navigation.')],
        ['last', 'nextBouquet', 'Nächstes Bouquet.', 'Next bouquet.', conditional('Nur bei moderner Navigation.', 'Only with modern navigation.')],
      ]),
      ...group('Screens/ChannelSelection', 'ChannelSelectionBase', 'PreviousNextActions', [
        ['previous', 'prevMarker', 'Zum vorherigen Marker.', 'Go to the previous marker.', conditional('Nur bei klassischer Navigation.', 'Only with legacy navigation.')],
        ['next', 'nextMarker', 'Zum nächsten Marker.', 'Go to the next marker.', conditional('Nur bei klassischer Navigation.', 'Only with legacy navigation.')],
      ]),
      ...numbers('Screens/ChannelSelection', 'ChannelSelectionBase', 'keyNumberGlobal', 'Nummer / Buchstaben-Schnellsuche entsprechend der Senderlisten-Einstellung.', 'Number / alphabetic quick selection according to channel-list settings.'),
      ...group('Screens/ChannelSelection', 'ChannelSelectionEPG', 'InfobarInstantRecord', [
        ['ShortRecord', 'RecordTimerQuestion', 'Aufnahme-Timer für die Sendung anlegen/bearbeiten.', 'Create/edit an event recording timer.'],
        ['LongRecord', 'doZapTimer', 'Umschalt-Timer für die folgende Sendung anlegen.', 'Create a zap timer for the next event.'],
      ]),
    ],
  },
  {
    id: 'setup', label: tr('Einstellungen (Setup-Liste)', 'Settings (Setup list)'),
    description: tr('Gemeinsame Setup-Bedienung. Welche Editiertasten aktiv sind, hängt von der markierten Zeile ab; Plugins können eigene Dialoge verwenden.', 'Shared Setup controls. Editing keys depend on the selected field; plugins may use their own dialogs.'),
    powerBlocked: true,
    rules: [
      ...group('Components/ConfigList', 'ConfigListScreen', 'ConfigListActions', [
        ['cancel', 'keyCancel', 'Abbrechen; bei Änderungen ggf. Rückfrage zum Verwerfen.', 'Cancel; changed values may trigger a discard confirmation.'],
        ['save', 'keySave', 'Einstellungen speichern und schließen.', 'Save settings and close.'],
        ['close', 'closeRecursive', 'Setup-Ebenen verlassen; Änderungen ggf. bestätigen.', 'Leave Setup levels; confirm changes if prompted.'],
        ['select', 'keySelect', 'Markierten Wert umschalten / bearbeiten.', 'Toggle / edit the selected value.'],
        ['menu', 'keyMenu', 'Auswahlmenü des markierten Werts öffnen.', 'Open choices for the selected value.', conditional('Nur in einem Auswahlfeld. PVR löscht stattdessen in einem Textfeld den Text.', 'Only in a selection field. In a text field PVR instead clears the text.')],
        ['default', 'keyDefault', 'Standardwerte wiederherstellen.', 'Restore defaults.', conditional('Nur wenn dieser Setup-Dialog Standardwerte anbietet.', 'Only when this Setup dialog offers defaults.')],
      ]),
      ...group('Components/ConfigList', 'ConfigListScreen', 'ColorActions', [['yellow', 'keyDefault', 'Standardwerte wiederherstellen.', 'Restore defaults.', conditional('Nur wenn dieser Setup-Dialog Standardwerte anbietet.', 'Only when this Setup dialog offers defaults.')]]),
      ...nav('Components/ConfigList', 'ConfigListScreen'),
      ...group('Components/ConfigList', 'ConfigListScreen', 'NavigationActions', [
        ['left', 'keyLeft', 'Vorherigen Wert wählen / Textcursor nach links.', 'Previous value / move text cursor left.'],
        ['right', 'keyRight', 'Nächsten Wert wählen / Textcursor nach rechts.', 'Next value / move text cursor right.'],
        ['first', 'keyFirst', 'Erster Wert / Anfang des Textes.', 'First value / beginning of text.'],
        ['last', 'keyLast', 'Letzter Wert / Ende des Textes.', 'Last value / end of text.'],
      ]),
      ...group('Components/ConfigList', 'ConfigListScreen', 'VirtualKeyboardActions', [['showVirtualKeyboard', 'keyText', 'Bildschirmtastatur für das Textfeld öffnen.', 'Open the on-screen keyboard for the text field.', conditional('Nur bei geeigneten Textfeldern, nicht bei jeder Zahl/IP/MAC-Eingabe.', 'Only for suitable text fields, not every numeric/IP/MAC input.')]]),
      ...group('Components/ConfigList', 'ConfigListScreen', 'TextEditActions', [
        ['backspace', 'keyBackspace', 'Zeichen links vom Textcursor löschen.', 'Delete the character left of the text cursor.'],
        ['delete', 'keyDelete', 'Zeichen unter dem Textcursor löschen.', 'Delete the character at the text cursor.'],
        ['erase', 'keyErase', 'Gesamten Feldinhalt löschen.', 'Clear the whole field.'],
        ['toggleOverwrite', 'keyToggle', 'Einfügen / Überschreiben wechseln.', 'Toggle insert / overwrite.'],
      ]).map(rule => ({ ...rule, ...conditional('Nur bei einem passenden editierbaren Textfeld.', 'Only in a suitable editable text field.') })),
      ...numbers('Components/ConfigList', 'ConfigListScreen', 'keyNumberGlobal', 'Zahl / SMS-artigen Text in die aktive Eingabe schreiben.', 'Enter a digit / SMS-style text in the active input.'),
    ],
  },
  {
    id: 'epg', label: tr('Grafischer EPG', 'Graphical EPG'),
    description: tr('Fokus auf der Programmtabelle. Die Bouquet-Auswahl und andere EPG-Arten haben andere Belegungen. Farbtasten sind im EPG einstellbar.', 'Focus is on the programme grid. Bouquet selection and other EPG types have different bindings. EPG colour buttons are configurable.'),
    rules: [
      ...group('Screens/EpgSelection', 'EPGSelection', 'EPGSelectActions', [
        ['menu', 'createSetup', 'Einstellungen dieses EPG öffnen.', 'Open settings for this EPG.'],
        ['info', 'Info', 'Details zur markierten Sendung öffnen.', 'Open details for the selected event.'],
        ['infolong', 'InfoLong', 'Einzel-EPG des markierten Senders öffnen.', 'Open single-channel EPG for the selected channel.'],
        ['epg', 'epgButtonPressed', 'Einzel-EPG des markierten Senders öffnen.', 'Open single-channel EPG for the selected channel.'],
        ['input_date_time', 'enterDateTime', 'Zu Datum/Uhrzeit springen.', 'Jump to a date/time.'],
        ['nextBouquet', 'nextBouquet', 'Nächstes Bouquet.', 'Next bouquet.'],
        ['prevBouquet', 'prevBouquet', 'Vorheriges Bouquet.', 'Previous bouquet.'],
        ['nextService', 'prevPage', 'Seite auf; alternativ nächstes Bouquet oder +24 Stunden gemäß EPG-Einstellung.', 'Page up; alternatively next bouquet or +24 hours according to EPG settings.', configurable],
        ['prevService', 'nextPage', 'Seite ab; alternativ vorheriges Bouquet oder −24 Stunden gemäß EPG-Einstellung.', 'Page down; alternatively previous bouquet or −24 hours according to EPG settings.', configurable],
        ['tv', 'Bouquetlist', 'Zwischen Bouquet-Auswahl und Programmtabelle wechseln.', 'Switch between bouquet selection and the programme grid.'],
        ['tvlong', 'togglePIG', 'TV-Vorschaufenster im EPG ein-/ausschalten.', 'Toggle the TV preview in the EPG.'],
      ]),
      ...group('Screens/EpgSelection', 'EPGSelection', 'DirectionActions', [
        ['up', 'moveUp', 'Vorheriger Sender.', 'Previous channel.'], ['down', 'moveDown', 'Nächster Sender.', 'Next channel.'],
        ['left', 'leftPressed', 'Vorherige Sendung / früherer Zeitraum.', 'Previous event / earlier time.'], ['right', 'rightPressed', 'Nächste Sendung / späterer Zeitraum.', 'Next event / later time.'],
      ]),
      ...group('Screens/EpgSelection', 'EPGSelection', 'OkCancelActions', [
        ['OK', 'OK', 'Markierten Sender umschalten oder umschalten und EPG schließen.', 'Zap to the selected channel, optionally closing the EPG.', configurable],
        ['OKLong', 'OKLong', 'Eingestellte lange OK-Aktion: umschalten / umschalten und schließen.', 'Configured long OK action: zap / zap and close.', configurable],
        ['cancel', 'closeScreen', 'EPG schließen.', 'Close EPG.'],
      ]),
      ...group('Screens/EpgSelection', 'EPGSelection', 'ColorActions', [
        ['red', 'redButtonPressed', 'Eingestellte rote EPG-Funktion, z. B. IMDb, Zeitsprung oder Timer.', 'Configured red EPG action, e.g. IMDb, time jump or timer.', configurable],
        ['redlong', 'redButtonPressedLong', 'Hier keine sichtbare Sortieraktion: der Sortier-Handler ist nur für Einzel-/Enhanced-/Infobar-EPG wirksam.', 'No visible sorting action here: the sorting handler only affects single/enhanced/Infobar EPG.'],
        ['green', 'greenButtonPressed', 'Eingestellte grüne EPG-Funktion, normalerweise Aufnahme-Timer hinzufügen / bearbeiten.', 'Configured green EPG action, normally add / edit a recording timer.', configurable],
        ['greenlong', 'greenButtonPressedLong', 'Timerübersicht öffnen.', 'Open timer overview.'],
        ['yellow', 'yellowButtonPressed', 'Eingestellte gelbe EPG-Funktion, z. B. EPG-Suche oder Zeitsprung.', 'Configured yellow EPG action, e.g. EPG search or time jump.', configurable],
        ['blue', 'blueButtonPressed', 'Eingestellte blaue EPG-Funktion, z. B. AutoTimer.', 'Configured blue EPG action, e.g. AutoTimer.', configurable],
        ['bluelong', 'blueButtonPressedLong', 'AutoTimer-Liste öffnen, wenn das Plugin installiert ist.', 'Open AutoTimer list if the plugin is installed.'],
      ]),
      ...group('Screens/EpgSelection', 'EPGSelection', 'InfobarInstantRecord', [
        ['ShortRecord', 'recButtonPressed', 'Aufnahme-Timer für die markierte Sendung.', 'Recording timer for the selected event.'],
        ['LongRecord', 'recButtonPressedLong', 'Umschalt-Timer für die markierte Sendung.', 'Zap timer for the selected event.'],
      ]),
    ],
  },
  {
    id: 'movies', label: tr('Aufnahmeliste (MovieSelection)', 'Recordings (MovieSelection)'),
    description: tr('Native Aufnahmeliste, wenn EMC nicht übernimmt. Farbtasten sowie TV, RADIO und TEXT sind hier separat einstellbar.', 'Native recordings list when EMC is not taking over. Colour buttons, TV, RADIO and TEXT have their own configurable assignments here.'),
    rules: [
      ...group('Screens/MovieSelection', 'MovieSelection', 'OkCancelActions', [
        ['ok', 'itemSelected', 'Aufnahme abspielen / Ordner öffnen.', 'Play recording / open folder.'], ['cancel', 'abort', 'Aufnahmeliste verlassen.', 'Leave recordings.'],
      ]),
      ...group('Screens/MovieSelection', 'MovieSelection', 'MovieSelectionActions', [
        ['contextMenu', 'doContext', 'Datei-/Ordneraktionen und Optionen öffnen.', 'Open file/folder actions and options.'],
        ['showEventInfo', 'showEventInformation', 'Informationen zur Aufnahme anzeigen.', 'Show recording information.'],
        ['showText', 'btn_text', 'Die für TEXT eingerichtete Listenfunktion ausführen.', 'Run the configured TEXT list function.', configurable],
        ['subtitle', 'openSubsSupport', 'SubsSupport öffnen, wenn integriert und installiert.', 'Open SubsSupport if installed and integrated.'],
      ]),
      ...group('Screens/MovieSelection', 'MovieSelection', 'InfobarActions', [
        ['showMovies', 'doPathSelect', 'Aufnahmeverzeichnis / Lesezeichen auswählen.', 'Choose recording folder / bookmark.'],
        ['showRadio', 'btn_radio', 'Die für RADIO eingerichtete Listenfunktion ausführen.', 'Run the configured RADIO list function.', configurable],
        ['showTv', 'btn_tv', 'Die für TV eingerichtete Listenfunktion ausführen.', 'Run the configured TV list function.', configurable],
      ]),
      ...group('Screens/MovieSelection', 'MovieSelection', 'DirectionActions', [
        ['up', 'keyUp', 'Vorheriger Eintrag.', 'Previous item.'], ['down', 'keyDown', 'Nächster Eintrag.', 'Next item.'],
      ]),
      ...group('Screens/MovieSelection', 'MovieSelection', 'MoviePlayerActions', [
        ['leavePlayer', 'playbackStop', 'Laufende Vorschau stoppen.', 'Stop the running preview.'],
        ['movePrev', 'playPrev', 'Vorherige Aufnahme in der Vorschau.', 'Previous recording in preview.'],
        ['moveNext', 'playNext', 'Nächste Aufnahme in der Vorschau.', 'Next recording in preview.'],
        ['channelUp', 'moveToFirstOrFirstFile', 'Zum ersten Eintrag / zur ersten Datei.', 'Go to the first entry / first file.'],
        ['channelDown', 'moveToLastOrFirstFile', 'Zum letzten Eintrag / zur ersten Datei.', 'Go to the last entry / first file.'],
      ]),
      ...group('Screens/MovieSelection', 'MovieSelection', 'MovielistSeekActions', [
        ['playpauseService', 'preview', 'Vorschau starten / umschalten.', 'Start / toggle preview.', { keys: ['KEY_PLAYPAUSE'] }],
        ['seekBack', null, 'In der Vorschau um die mittlere Sprungweite zurück.', 'Skip backward by the medium skip interval in preview.'],
        ['seekFwd', null, 'In der Vorschau um die mittlere Sprungweite vor.', 'Skip forward by the medium skip interval in preview.'],
      ]),
      ...group('Screens/MovieSelection', 'MovieSelection', 'ColorActions', colours.flatMap(colour => [
        [colour, `btn_${colour}`, 'Eingestellte kurze Farbtastenfunktion; aktuelle Beschriftung am Bildschirm beachten.', 'Configured short colour-button action; check the current on-screen label.', configurable],
        [`${colour}long`, `btn_${colour}long`, 'Eingestellte lange Farbtastenfunktion der Aufnahmeliste.', 'Configured long colour-button action for recordings.', configurable],
      ])),
      ...numbers('Screens/MovieSelection', 'MovieSelection', 'keyNumberGlobal', 'SMS-artige Auswahl / Suche innerhalb der Liste.', 'SMS-style selection / search within the list.'),
    ],
  },
  {
    id: 'player', label: tr('Aufnahme abspielen (MoviePlayer)', 'Playing a recording (MoviePlayer)'),
    description: tr('Eingebauter MoviePlayer mit spulbarer Aufnahme. Andere Player und Streams können abweichen; Timeshift ist ein eigener Zustand.', 'Built-in MoviePlayer with a seekable recording. Other players and streams may differ; timeshift is a separate state.'),
    rules: [
      ...mediaCommon,
      ...group('Screens/InfoBar', 'MoviePlayer', 'MoviePlayerActions', [
        ['leavePlayer', 'leavePlayer', 'Wiedergabe beenden; je nach Einstellung mit Rückfrage / zurück zur Liste.', 'Stop playback; may ask for confirmation / return to the list according to settings.'],
        ['leavePlayerOnExit', 'leavePlayerOnExit', 'Zuerst sichtbare Infobar ausblenden; danach eingestellte EXIT-Aktion.', 'First hide a visible Infobar; then use the configured EXIT action.', configurable],
      ]),
      ...ig('InfoBarMenu', 'InfoBarMenuActions', [['showMenu', 'showMainMenu', 'Hauptmenü öffnen.', 'Open the main menu.']]),
      ...ig('InfoBarShowHide', 'InfobarShowHideActions', [['toggleShow', 'OkPressed', 'Infobar anzeigen/ausblenden.', 'Show/hide the Infobar.', configurable]]),
      ...ig('InfoBarShowMovies', 'InfobarMovieListActions', [['movieList', null, 'Aufnahmeliste öffnen.', 'Open recordings.']]),
      ...ig('InfoBarCueSheetSupport', 'InfobarCueSheetActions', [
        ['jumpPreviousMark', 'jumpPreviousMark', 'Zur vorherigen Markierung springen.', 'Jump to the previous mark.'],
        ['jumpNextMark', 'jumpNextMark', 'Zur nächsten Markierung springen.', 'Jump to the next mark.'],
        ['toggleMark', 'toggleMark', 'Markierung an der aktuellen Position setzen/entfernen.', 'Set/remove a mark at the current position.'],
      ]),
      ...ig('InfoBarSeek', 'InfobarSeekActions', [
        ['playpauseService', 'playpauseService', 'Wiedergabe / Pause umschalten.', 'Toggle playback / pause.'],
        ['pauseService', 'pauseService', 'Pausieren; weitere Betätigung abhängig vom Pause-Modus.', 'Pause; further presses depend on pause mode.'],
        ['unPauseService', 'unPauseService', 'Im Pause-/Spulzustand zur Wiedergabe zurückkehren.', 'Resume playback from pause/seeking.', conditional('Während normaler Wiedergabe kann die Aktion an die Infobar weitergegeben werden.', 'During normal playback the action can fall through to the Infobar.')],
        ['seekBack', 'seekBack', 'Rückwärts spulen / Spulgeschwindigkeit wechseln.', 'Rewind / change rewind speed.'],
        ['seekFwd', 'seekFwd', 'Vorwärts spulen / Spulgeschwindigkeit wechseln.', 'Fast-forward / change forward speed.'],
        ['SeekbarBack', 'seekBackSeekbar', 'Rückwärts-Suchleiste / manuelle Suche öffnen.', 'Open backward seek bar / manual seek.'],
        ['SeekbarFwd', 'seekFwdSeekbar', 'Vorwärts-Suchleiste / manuelle Suche öffnen.', 'Open forward seek bar / manual seek.'],
        ['left', 'seekBack', 'Rückwärts spulen.', 'Seek backward.', conditional('Nur im Spulmodus der Pfeiltasten (arrowSkipMode=t).', 'Only in arrow seek mode (arrowSkipMode=t).')],
        ['right', 'seekFwd', 'Vorwärts spulen.', 'Seek forward.', conditional('Nur im Spulmodus der Pfeiltasten (arrowSkipMode=t).', 'Only in arrow seek mode (arrowSkipMode=t).')],
        ['seekBackManual', 'seekBackManual', 'Manuelle Rückwärtssuche öffnen.', 'Open manual backward seek.'],
        ['seekFwdManual', 'seekFwdManual', 'Manuelle Vorwärtssuche öffnen.', 'Open manual forward seek.'],
      ]),
      ...ig('InfoBarSeek', 'InfobarArrowSeekActions', [
        ['left', 'seekLeft', 'Eingestellter Sprung nach links.', 'Configured left-arrow skip.'],
        ['right', 'seekRight', 'Eingestellter Sprung nach rechts.', 'Configured right-arrow skip.'],
        ['up', 'seekUp', 'Eingestellter Sprung nach oben.', 'Configured up-arrow skip.'],
        ['down', 'seekDown', 'Eingestellter Sprung nach unten.', 'Configured down-arrow skip.'],
      ]).map(rule => ({ ...rule, ...conditional('Nur im Sprungmodus der Pfeiltasten (arrowSkipMode ungleich t).', 'Only in arrow skip mode (arrowSkipMode other than t).') })),
      ...ig('InfoBarSeek', 'InfobarSeekActions', [1, 3, 4, 6, 7, 9].map(key => [`seekdef:${key}`, 'doSeekRelative', `${[1, 4, 7].includes(key) ? 'Rückwärts' : 'Vorwärts'} springen: eingestellte ${key < 4 ? 'kleine' : key < 7 ? 'mittlere' : 'große'} Sprungweite.`, `Skip ${[1, 4, 7].includes(key) ? 'backward' : 'forward'} by the configured ${key < 4 ? 'small' : key < 7 ? 'medium' : 'large'} interval.`])),
    ],
  },
  {
    id: 'timers', label: tr('Aufnahme-Timerübersicht', 'Recording timer overview'),
    description: tr('Übersicht der Aufnahme-Timer; kein Timer-Editor oder Konfliktdialog. Aktionen werden abhängig vom markierten Timer freigegeben.', 'Recording timer overview, outside the editor or conflict dialog. Available actions depend on the selected timer.'),
    rules: [
      ...group('Screens/Timers', 'TimerOverviewBase', 'TimerActions', [
        ['cancel', 'keyCancel', 'Timerübersicht verlassen.', 'Leave timer overview.'],
        ['close', 'keyClose', 'Übersicht und übergeordnete Menüs schließen.', 'Close overview and parent menus.'],
        ['add', 'addTimer', 'Neuen Timer hinzufügen.', 'Add a new timer.'],
        ['edit', 'editTimer', 'Markierten Timer bearbeiten.', 'Edit selected timer.'],
        ['delete', 'deleteTimer', 'Markierten Timer löschen (Rückfrage beachten).', 'Delete selected timer (check the confirmation).'],
        ['toggle', 'toggleTimer', 'Markierten Timer aktivieren/deaktivieren; laufende Timer bieten passende Aktionen.', 'Enable/disable selected timer; running timers offer appropriate actions.'],
        ['cleanup', 'cleanupTimers', 'Erledigte Timer aufräumen.', 'Clean up completed timers.', conditional('Nur wenn aufräumbare Einträge existieren.', 'Only when there are completed entries to clean up.')],
        ['log', 'showTimerLog', 'Protokoll des markierten Timers anzeigen.', 'Show the selected timer log.'],
      ]).map(rule => ['add', 'edit', 'delete', 'toggle'].includes(rule.action) ? { ...rule, source: { file: 'lib/python/Screens/Timers.py', className: 'RecordTimerOverview' } } : rule),
      ...nav('Screens/Timers', 'TimerOverviewBase', { top: 'keyGoTop', pageUp: 'keyGoPageUp', up: 'keyGoLineUp', down: 'keyGoLineDown', pageDown: 'keyGoPageDown', bottom: 'keyGoBottom' }),
      ...group('Screens/Timers', 'TimerOverviewBase', 'NavigationActions', [
        ['left', 'keyGoPageUp', 'Eine Seite nach oben.', 'Move up one page.'],
        ['right', 'keyGoPageDown', 'Eine Seite nach unten.', 'Move down one page.'],
      ]).map(rule => ({ ...rule, ...conditional('Automatische LEFT/RIGHT-Seitennavigation, wenn die klassische Navigationsoption aktiv ist.', 'Automatic LEFT/RIGHT paging when the legacy navigation option is enabled.') })),
      ...group('Screens/Timers', 'RecordTimerOverview', 'MenuActions', [['menu', '_sortTimers', 'Sortierung der Timerliste auswählen.', 'Choose timer list sorting.']]),
    ],
  },
  {
    id: 'keyboard', label: tr('Bildschirmtastatur', 'On-screen keyboard'),
    description: tr('Pfeile bewegen die Auswahl auf der Tastatur; Spultasten bewegen den Textcursor. Die Tasten unten auf dem Bildschirm bieten weitere Bearbeitungsaktionen.', 'Arrow keys move the keyboard selection; seek keys move the text cursor. The on-screen keyboard also offers editing actions.'),
    rules: [
      ...group('Screens/VirtualKeyBoard', 'VirtualKeyboard', 'VirtualKeyBoardActions', [
        ['cancel', 'cancel', 'Textänderungen verwerfen und schließen.', 'Discard text changes and close.'],
        ['save', 'save', 'Text übernehmen und schließen.', 'Accept text and close.'],
        ['shift', 'shiftSelected', 'Zeichensatz für das nächste Zeichen wechseln (Shift).', 'Switch character set for the next character (Shift).'],
        ['capsLock', 'capsLockSelected', 'Zeichensatz dauerhaft wechseln (Caps Lock).', 'Switch character set persistently (Caps Lock).'],
        ['select', 'processSelect', 'Markiertes Zeichen / markierte Bildschirmaktion ausführen.', 'Enter selected character / execute selected on-screen action.'],
        ['locale', 'localeMenu', 'Tastatursprache / Belegung wählen.', 'Choose keyboard language / layout.'],
        ['up', 'up', 'Tastaturauswahl nach oben.', 'Move keyboard selection up.'],
        ['down', 'down', 'Tastaturauswahl nach unten.', 'Move keyboard selection down.'],
        ['left', 'left', 'Tastaturauswahl nach links.', 'Move keyboard selection left.'],
        ['right', 'right', 'Tastaturauswahl nach rechts.', 'Move keyboard selection right.'],
        ['first', 'cursorFirst', 'Textcursor an den Anfang.', 'Move text cursor to the beginning.'],
        ['last', 'cursorLast', 'Textcursor ans Ende.', 'Move text cursor to the end.'],
        ['prev', 'cursorLeft', 'Textcursor ein Zeichen nach links.', 'Move text cursor one character left.'],
        ['next', 'cursorRight', 'Textcursor ein Zeichen nach rechts.', 'Move text cursor one character right.'],
      ]),
      // PREVIOUS/NEXT have already been consumed by first/last above. Do not
      // merge their conflicting TextEditActions backspace/delete bindings.
      ...group('Screens/VirtualKeyBoard', 'VirtualKeyboard', 'TextEditActions', [
        ['erase', 'eraseAll', 'Gesamten Text löschen.', 'Clear all text.'],
        ['toggleOverwrite', 'keyToggleOW', 'Einfügen / Überschreiben umschalten.', 'Toggle insert / overwrite.'],
      ]),
      ...numbers('Screens/VirtualKeyBoard', 'VirtualKeyboard', 'keyNumberGlobal', 'Zahl oder SMS-artiges Zeichen eingeben.', 'Enter a digit or SMS-style character.'),
    ],
  },
];

export const printedLabels = { KEY_VIDEO: 'PVR', KEY_INFO: 'EPG', KEY_HELP: 'HELP', KEY_CHANNELUP: 'CH+', KEY_CHANNELDOWN: 'CH−', KEY_VOLUMEUP: 'VOL+', KEY_VOLUMEDOWN: 'VOL−', KEY_PROGRAM: 'TIMER', KEY_POWER: 'POWER', KEY_PREVIOUS: '◀ | 0', KEY_NEXT: '0 | ▶', KEY_UP: '▲', KEY_DOWN: '▼', KEY_LEFT: '◀', KEY_RIGHT: '▶', KEY_REWIND: '◀◀', KEY_FASTFORWARD: '▶▶', KEY_PLAY: '▶ PLAY', KEY_PAUSE: 'Ⅱ PAUSE', KEY_STOP: '■ STOP', KEY_RECORD: '● REC' };
export const buttonNames = { KEY_TEXT: tr('Teletext-Symbol', 'Teletext symbol'), KEY_SUBTITLE: tr('Untertitel-Symbol', 'Subtitle symbol'), KEY_RED: tr('Rot', 'Red'), KEY_GREEN: tr('Grün', 'Green'), KEY_YELLOW: tr('Gelb', 'Yellow'), KEY_BLUE: tr('Blau', 'Blue'), KEY_MUTE: tr('Stumm-Symbol', 'Mute symbol'), KEY_PREVIOUS: tr('Pfeil links neben 0', 'Arrow left of 0'), KEY_NEXT: tr('Pfeil rechts neben 0', 'Arrow right of 0'), KEY_POWER: tr('POWER oben rechts', 'POWER at top right') };
export const unmappedButtons = [{ id: 'TV_POWER', label: tr('Rote Power-Taste oben links', 'Red power button at top left'), position: [32, 25] }, { id: 'AV', label: tr('AV', 'AV'), position: [83, 45] }];

// Printed-label corrections and extra visible controls belong to the handset.
// Another receiver may reuse vu6 with different model-specific remaps.
export const handsets = { vu6: { printedLabels, buttonNames, unmappedButtons } };

export const screens = [...baseScreens, ...createSubscreens(baseScreens)];
