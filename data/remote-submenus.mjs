import { tr, group, conditional, numbers, nav, delegatedNav } from './remote-contracts.mjs';

// Only reviewed implementations are assigned a profile. Other menu items are
// deliberately not treated as Setup merely because their title says Settings.
export const menuProfiles = {
  'Satconfig.NimSelection': 'tuner-list', 'ScanSetup.ScanSetup': 'manual-scan', 'ScanSetup.ScanSimple': 'auto-scan',
  'NetworkSetup.NetworkOverview': 'network', 'NetworkSetup.DNSSettings': 'dns',
  'NetworkMounts.NetworkMountsOverview': 'mounts', 'NetworkServices.NetworkServicesSetup': 'network-services',
  'NetworkServices.NetworkPassword': 'network-password', 'DeviceManager.DeviceManager': 'storage',
  'PluginBrowser.PluginBrowser': 'plugins', 'PluginBrowser.PackageAction': 'packages',
  'Timers.RecordTimerOverview': 'timers', 'MovieSelection.MovieSelection': 'movies',
};

const nativeList = (file, owner) => group(file, owner, 'ListboxActions', [
  ['moveUp', null, 'Vorheriger Listeneintrag.', 'Previous list entry.'],
  ['moveDown', null, 'Nächster Listeneintrag.', 'Next list entry.'],
  ['moveLeft', null, 'Eine Listenseite zurück (vertikale Liste).', 'Previous page (vertical list).'],
  ['moveRight', null, 'Eine Listenseite weiter (vertikale Liste).', 'Next page (vertical list).'],
]).map(rule => ({ ...rule, source: { file: 'lib/gui/elistbox.cpp', symbol: 'eListbox::moveSelection' } }));
const legacyPages = (file, owner) => group(file, owner, 'NavigationActions', [
  ['left', null, 'Eine Seite nach oben.', 'Move up one page.'],
  ['right', null, 'Eine Seite nach unten.', 'Move down one page.'],
]).map(rule => ({ ...rule, ...conditional('Wenn Links/Rechts als Blättern aktiviert ist; automatisch durch ActionMap ergänzt.', 'When left/right paging is enabled; added automatically by ActionMap.') }));
const closeRows = (cancel = null, close = 'keyCloseRecursive') => [
  ['cancel', cancel, 'Diesen Dialog schließen.', 'Close this dialog.'],
  ['close', close, 'Dialog schließen und die darüberliegenden Menüs verlassen.', 'Close the dialog and leave the parent menus.'],
];
const profile = (id, de, en, dePath, enPath, deDescription, enDescription, rules, powerBlocked = false) => ({ id, label: tr(de, en), path: tr(dePath, enPath), description: tr(deDescription, enDescription), rules, powerBlocked });

export function createSubscreens(base) {
  const setup = base.find(screen => screen.id === 'setup').rules;
  const noDefaults = rules => rules.filter(rule => !['default', 'yellow'].includes(rule.action));
  const replaceSetup = (file, owner, rows, extra = []) => [
    ...noDefaults(setup).filter(rule => !rows.some(row => rule.context === 'ConfigListActions' && rule.action === row[0])),
    ...group(file, owner, 'ConfigListActions', rows), ...extra,
  ];
  // fullUI=False in legacy tuner/scan screens: no shared save/cancel/default map.
  const editFields = setup.filter(rule => !(rule.context === 'ConfigListActions' && ['cancel', 'close', 'save', 'select', 'default'].includes(rule.action)) && rule.context !== 'ColorActions');
  const receiver = 'Hauptmenü → Einstellungen → Empfang';
  const receiverEN = 'Main Menu → Setup → Tuners, Scanning & Reception';
  const network = 'Hauptmenü → Einstellungen → Netzwerk';
  const networkEN = 'Main Menu → Setup → Network';
  const storage = 'Hauptmenü → Einstellungen → System → Speichergeräte → Geräteverwaltung';
  const storageEN = 'Main Menu → Setup → System → Storage Devices → Device Manager';
  const pluginPath = 'Hauptmenü → Erweiterungen';
  const pluginPathEN = 'Main Menu → Plugins';
  const results = [
    profile('tuner-list', 'Tunerauswahl', 'Choose tuner', `${receiver} → Tunerkonfiguration`, `${receiverEN} → Tuner Configuration`,
      'Tuner markieren, danach dessen konkrete Konfiguration öffnen. Die Liste verwendet native Listen-Navigation.', 'Select a tuner, then open its configuration. This list uses native list navigation.', [
        ...group('Screens/Satconfig', 'NimSelection', 'SetupActions', [
          ['ok', 'okbuttonClick', 'Konfiguration des markierten Tuners öffnen.', 'Open configuration for the selected tuner.'],
          ['cancel', null, 'Tunerauswahl schließen.', 'Close tuner selection.'],
          ['info', 'extraInfo', 'Zusätzliche Informationen zum gewählten Tuner anzeigen.', 'Show additional information for the selected tuner.', conditional('Nur in der Experten-Einstellungsstufe.', 'Only at Expert setup level.')],
        ]),
        ...group('Screens/Satconfig', 'NimSelection', 'ColorActions', [['green', 'okbuttonClick', 'Tuner konfigurieren.', 'Configure tuner.']]),
        ...group('Screens/Satconfig', 'NimSelection', 'MenuActions', [['menu', 'exit', 'Menüs verlassen.', 'Leave menus.']]),
        ...nativeList('Screens/Satconfig', 'NimSelection'),
      ]),
    profile('tuner-config', 'Tuner konfigurieren', 'Configure tuner', `${receiver} → Tunerkonfiguration → Tuner → OK`, `${receiverEN} → Tuner Configuration → Tuner → OK`,
      'Konfigurationsmodus und Empfangsparameter des ausgewählten Tuners. Gelb/Blau sind spezielle Tunerfunktionen, keine allgemeinen Setup-Standards.', 'Configuration mode and reception parameters for the selected tuner. Yellow/blue are tuner-specific, not general Setup defaults.', [
        ...editFields,
        ...group('Screens/Satconfig', 'NimSetup', 'SetupActions', [
          ['ok', 'keyOk', 'Die zur markierten Zeile gehörende Auswahl öffnen, z. B. Satellitenliste.', 'Open the selection associated with this field, e.g. a satellite list.'],
          ['save', 'keySave', 'Tunerkonfiguration speichern.', 'Save tuner configuration.'],
          ['cancel', 'keyCancel', 'Abbrechen; Änderungen gegebenenfalls verwerfen.', 'Cancel; discard changes if prompted.'],
        ]),
        ...group('Screens/Satconfig', 'NimSetup', 'SatlistShortcutAction', [
          ['changetype', 'changeConfigurationMode', 'Konfigurationsmodus wechseln.', 'Change configuration mode.'],
          ['nothingconnected', 'nothingConnectedShortcut', 'Noch nicht gespeicherte Änderungen der Tunerkonfiguration zurücksetzen.', 'Reset unsaved changes to tuner configuration.'],
        ]),
      ]),
    ...['manual', 'auto'].map(kind => {
      const owner = kind === 'manual' ? 'ScanSetup' : 'ScanSimple';
      const de = kind === 'manual' ? 'Manueller Suchlauf' : 'Automatischer Suchlauf';
      const en = kind === 'manual' ? 'Manual Scan' : 'Automatic Scan';
      return profile(`${kind}-scan`, de, en, `${receiver} → ${de}`, `${receiverEN} → ${en}`,
        'Parameter bzw. Tuner wählen. OK/Grün startet den Suchlauf; MENU beendet die Menüfolge.', 'Choose parameters or tuners. OK/green starts scanning; MENU exits the menu chain.', [
          ...editFields.map(rule => rule.context === 'ConfigListActions' && rule.action === 'menu' ? { ...rule, keys: ['KEY_VIDEO', 'KEY_PVR', 'KEY_FILE', 'KEY_LIST', 'KEY_MEDIA'] } : rule),
          ...group('Screens/ScanSetup', owner, 'SetupActions', [['ok', 'keyGo', 'Suchlauf starten.', 'Start scanning.'], ['save', 'keyGo', 'Suchlauf starten.', 'Start scanning.'], ['cancel', 'keyCancel', 'Suchlaufvorbereitung schließen.', 'Close scan setup.']]),
          ...group('Screens/ScanSetup', owner, 'MenuActions', [['menu', 'doCloseRecursive', 'Suchlaufvorbereitung und übergeordnete Menüs verlassen.', 'Leave scan setup and parent menus.']]),
        ]);
    }),
    ...[false, true].map(done => profile(done ? 'scan-finished' : 'scan-running', done ? 'Suchlauf: Ergebnisliste' : 'Suchlauf: läuft', done ? 'Scan: results' : 'Scan: running', `${receiver} → Suchlauf → ${done ? 'Ergebnis' : 'Fortschritt'}`, `${receiverEN} → Scan → ${done ? 'Results' : 'Progress'}`,
      done ? 'Erst nach Abschluss werden Auswahl und Navigation in der Ergebnisliste aktiviert.' : 'Während der Suche gibt es noch keine Senderauswahl mit OK.', done ? 'Selection and result-list navigation are enabled only after scanning finishes.' : 'OK does not select a service while scanning is still running.', [
        ...group('Screens/ServiceScan', 'ServiceScan', 'CancelActions', [
          ['cancel', 'keyCancel', done ? 'Vorherigen Sender wählen und Suchlauf schließen.' : 'Suchlauf abbrechen.', done ? 'Return to the previous service and close the scanner.' : 'Cancel scanning.'],
          ['close', 'keyCloseRecursive', 'Suchlauf schließen und alle Menüs verlassen.', 'Close the scanner and exit all menus.'],
        ]),
        ...(done ? [...group('Screens/ServiceScan', 'ServiceScan', 'OkSaveActions', [['ok', 'keySave', 'Markierten gefundenen Sender einschalten und schließen.', 'Tune the selected found service and close.'], ['save', 'keySave', 'Markierten gefundenen Sender einschalten und schließen.', 'Tune the selected found service and close.']]), ...delegatedNav('Screens/ServiceScan', 'ServiceScan'), ...legacyPages('Screens/ServiceScan', 'ServiceScan')] : []),
      ])),
    profile('network', 'Netzwerkübersicht', 'Network Overview', `${network} → Netzwerkübersicht`, `${networkEN} → Network Overview`,
      'Links stehen Adapter, rechts die gespeicherten WLAN-Profile. Aktionen richten sich nach der markierten Zeile und dem Verbindungsstatus.', 'Adapters are on the left, saved Wi-Fi profiles on the right. Actions depend on the selected row and connection state.', [
        ...group('Screens/NetworkSetup', 'NetworkOverview', 'OkCancelActions', [...closeRows(), ['ok', 'keyOK', 'Markierten Adapter oder das gespeicherte WLAN-Profil bearbeiten.', 'Edit the selected adapter or saved Wi-Fi profile.']]),
        ...group('Screens/NetworkSetup', 'NetworkOverview', 'MenuActions', [['menu', 'keyMenu', 'Kontextmenü: Einstellungen, Aktivieren/Deaktivieren, Neustart, Netzwerktest; bei WLAN auch Suche/Profilverwaltung.', 'Context menu: settings, enable/disable, restart, network test; Wi-Fi also offers scanning/profile management.']]),
        ...group('Screens/NetworkSetup', 'NetworkOverview', 'InfoActions', [['info', 'keyInfo', 'Verbindungsinformationen anzeigen.', 'Show connection information.']]),
        ...group('Screens/NetworkSetup', 'NetworkOverview', 'ColorActions', [
          ['red', null, 'Übersicht schließen.', 'Close overview.'],
          ['green', 'keyGreen', 'Markierten Adapter bzw. WLAN-Eintrag aktivieren oder deaktivieren.', 'Enable or disable the selected adapter or Wi-Fi entry.'],
          ['yellow', 'keyYellow', 'Neues WLAN-Profil hinzufügen.', 'Add a new saved Wi-Fi profile.', conditional('Nur für einen WLAN-Adapter.', 'Only for a Wi-Fi adapter.')],
          ['blue', 'keyBlue', 'Mit dem gewählten WLAN-Profil verbinden.', 'Connect using the selected Wi-Fi profile.', conditional('Nur bei einem passenden gespeicherten WLAN-Profil.', 'Requires a suitable saved Wi-Fi profile.')],
        ]),
        ...nav('Screens/NetworkSetup', 'NetworkOverview'),
        ...group('Screens/NetworkSetup', 'NetworkOverview', 'NavigationActions', [
          ...['left', 'first'].map(action => [action, 'keyLeft', 'Zur Adapterliste wechseln.', 'Move to the adapter list.']),
          ...['right', 'last'].map(action => [action, 'keyRight', 'Zu gespeicherten WLAN-Profilen wechseln, falls vorhanden.', 'Move to saved Wi-Fi profiles when available.']),
        ]),
      ]),
    ...[['network-adapter', 'NetworkAdapterSetup', 'Adaptereinstellungen', 'Adapter Settings'], ['network-wifi', 'NetworkWiFiSetup', 'Gespeichertes WLAN-Profil', 'Saved Wi-Fi Profile']].map(([id, owner, de, en]) => profile(id, de, en, `${network} → Netzwerkübersicht → ${de} → OK`, `${networkEN} → Network Overview → ${en} → OK`,
      'IP/DHCP/DNS bzw. WLAN-Daten bearbeiten. Die gedruckte HELP-Taste dieser Fernbedienung liefert INFO. In einem Textfeld hat die zusätzliche INFO-Aktion Vorrang vor „Einfügen/Überschreiben“.', 'Edit IP/DHCP/DNS or Wi-Fi details. The printed HELP button on this remote sends INFO. Its additional information action takes precedence over insert/overwrite in a text field.', [
        ...replaceSetup('Screens/NetworkSetup', owner, [['save', 'keySave', 'Konfiguration speichern und anwenden.', 'Save and apply configuration.']]).filter(rule => rule.action !== 'toggleOverwrite'),
        ...group('Screens/NetworkSetup', owner, 'InfoActions', [['info', 'keyShowInfo', 'Netzwerk-Verbindungsinformationen öffnen.', 'Open network connection information.']]),
      ], true)),
    profile('wifi-scan', 'WLAN-Netze suchen', 'Scan Wi-Fi Networks', `${network} → Netzwerkübersicht → MENU → WLAN-Netze suchen`, `${networkEN} → Network Overview → MENU → Scan Wi-Fi Networks`,
      'Gefundene Zugangspunkte auswählen oder erneut suchen. Für diese Liste muss ein unterstützter WLAN-Adapter vorhanden sein.', 'Select discovered access points or scan again. Requires a supported Wi-Fi adapter.', [
        ...group('Screens/NetworkSetup', 'NetworkWiFiScan', 'OkCancelActions', [...closeRows('keyClose', 'closeRecursive'), ['ok', 'keySelect', 'Gewähltes Netz zur Konfiguration übernehmen.', 'Select this network for configuration.']]),
        ...group('Screens/NetworkSetup', 'NetworkWiFiScan', 'ColorActions', [['red', 'keyClose', 'Schließen.', 'Close.'], ['green', 'keySelect', 'Gewähltes Netz konfigurieren.', 'Configure selected network.'], ['yellow', 'keyStartScan', 'WLAN-Suche wiederholen.', 'Rescan Wi-Fi networks.']]),
        ...delegatedNav('Screens/NetworkSetup', 'NetworkWiFiScan'), ...legacyPages('Screens/NetworkSetup', 'NetworkWiFiScan'),
      ]),
    profile('network-test', 'Netzwerktest', 'Network Test', `${network} → Netzwerkübersicht → MENU → Netzwerktest`, `${networkEN} → Network Overview → MENU → Network Test`,
      'Statusanzeige für Adapter, Verbindung, IP, Gateway, Internet und DNS. Keine navigierbare Ergebnisliste.', 'Status of adapter, link, IP, gateway, Internet and DNS. The result list is not navigable.', [
        ...group('Screens/NetworkSetup', 'NetworkTest', 'CancelActions', closeRows()),
        ...group('Screens/NetworkSetup', 'NetworkTest', 'ColorActions', [['green', 'keyRestart', 'Netzwerktest neu starten.', 'Restart the network test.']]),
      ]),
    profile('dns', 'DNS-Einstellungen', 'DNS Settings', `${network} → DNS-Einstellungen`, `${networkEN} → DNS Settings`,
      'DNS-Anbieter und Adressen bearbeiten. Gelb/Blau verschiebt eine markierte DNS-Adresse innerhalb ihrer IPv4-/IPv6-Gruppe.', 'Edit DNS provider and addresses. Yellow/blue moves the selected DNS address within its IPv4/IPv6 group.', [
        ...replaceSetup('Screens/NetworkSetup', 'DNSSettings', [['save', 'keySave', 'DNS-Konfiguration speichern.', 'Save DNS configuration.']]),
        ...group('Screens/NetworkSetup', 'DNSSettings', 'ColorActions', [['yellow', 'keyMoveItemUp', 'DNS-Server nach oben verschieben.', 'Move DNS server up.'], ['blue', 'keyMoveItemDown', 'DNS-Server nach unten verschieben.', 'Move DNS server down.']]).map(rule => ({ ...rule, ...conditional('Nur auf einer DNS-Adresszeile; nicht im DHCP-/Router- oder DNSCrypt-Modus.', 'Only on a DNS address row; unavailable in DHCP/router or DNSCrypt mode.') })),
      ], true),
    profile('network-services', 'Netzwerkdienste', 'Network Services', `${network} → Netzwerkdienste`, `${networkEN} → Network Services`,
      'Dienste installieren/konfigurieren; Gelb startet oder stoppt den ausgewählten Dienst.', 'Install/configure services; yellow starts or stops the selected service.', [
        ...replaceSetup('Screens/NetworkServices', 'NetworkServicesSetup', [['save', 'keySave', 'Gewählte Dienst-/Paketänderungen anwenden.', 'Apply selected service/package changes.']]),
        ...group('Screens/NetworkServices', 'NetworkServicesSetup', 'ColorActions', [['yellow', 'toggleStartStop', 'Dienst starten oder stoppen.', 'Start or stop service.'], ['blue', 'showLog', 'Protokoll des Dienstes anzeigen.', 'Show service log.']]).map(rule => ({ ...rule, ...conditional('Wenn die Aktion für den markierten Dienst angeboten wird.', 'When offered for the selected service.') })),
      ], true),
    profile('network-password', 'Root-Passwort setzen', 'Set Root Password', `${network} → Passworteinstellungen`, `${networkEN} → Password Settings`,
      'Passwortfeld bearbeiten oder ein zufälliges Passwort erzeugen; erst Grün übernimmt es.', 'Edit the password or generate a random one; green applies it.', [
        ...replaceSetup('Screens/NetworkServices', 'NetworkPassword', [['save', 'keySave', 'Neues root-Passwort setzen.', 'Set the new root password.']]),
        ...group('Screens/NetworkServices', 'NetworkPassword', 'ColorActions', [['yellow', 'randomPassword', 'Zufälliges Passwort erzeugen.', 'Generate a random password.']]),
      ], true),
    ...[['mounts', 'NetworkMountsOverview', 'Netzwerkfreigaben-Übersicht', 'Network Mounts Overview'], ['shares', 'NetworkShares', 'Freigaben suchen', 'Browse Network Shares']].map(([id, owner, de, en]) => profile(id, de, en, `${network} → Netzwerkfreigaben-Übersicht${id === 'shares' ? ' → Grün' : ''}`, `${networkEN} → Network Mounts Overview${id === 'shares' ? ' → Green' : ''}`,
      id === 'mounts' ? 'Eingetragene Freigaben verwalten. MENU bietet weitere Aktionen zur ausgewählten Freigabe.' : 'Server aufklappen und eine Freigabe auswählen. Grün öffnet gespeicherte Zugangsdaten des Servers.', id === 'mounts' ? 'Manage configured mounts. MENU provides further actions for the selected mount.' : 'Expand a server and select a share. Green opens saved credentials for that server.', [
        ...group('Screens/NetworkMounts', owner, 'OkCancelActions', [...closeRows(), ['ok', id === 'mounts' ? 'keyEdit' : 'keySelect', id === 'mounts' ? 'Freigabe bearbeiten.' : 'Server öffnen/schließen oder Freigabe übernehmen.', id === 'mounts' ? 'Edit mount.' : 'Expand/collapse host or select share.']]),
        ...group('Screens/NetworkMounts', owner, 'MenuActions', [['menu', 'keyMenu', 'Kontextmenü öffnen.', 'Open context menu.']]),
        ...group('Screens/NetworkMounts', owner, 'ColorActions', [
          ['red', null, 'Schließen.', 'Close.'],
          ['green', 'keyGreen', id === 'mounts' ? 'Freigaben im Netzwerk suchen.' : 'Benutzername/Passwort des Servers bearbeiten.', id === 'mounts' ? 'Browse network shares.' : 'Edit the server username/password.'],
          ['yellow', id === 'mounts' ? 'keyYellow' : 'keyRescan', id === 'mounts' ? 'Freigabe ein-/aushängen, sofern angeboten.' : 'Netzwerk erneut durchsuchen.', id === 'mounts' ? 'Mount/unmount the share when offered.' : 'Rescan the network.'],
        ]), ...nativeList('Screens/NetworkMounts', owner),
      ])),
    ...[['mount-edit', 'NetworkMountSetup', 'Freigabe bearbeiten', 'Edit Mount'], ['credentials', 'NetworkCredentials', 'Server-Zugangsdaten', 'Server Credentials']].map(([id, owner, de, en]) => profile(id, de, en, `${network} → Netzwerkfreigaben → ${de}`, `${networkEN} → Network Mounts → ${en}`,
      'Eingabefelder bearbeiten, Grün speichert, Rot/EXIT verwirft nach Rückfrage.', 'Edit fields; green saves, red/EXIT discards after confirmation.', replaceSetup('Screens/NetworkMounts', owner, [['save', 'keySave', 'Eingaben speichern.', 'Save values.']]), true)),
    profile('storage', 'Geräteverwaltung', 'Device Manager', storage, storageEN,
      'Laufwerk/Partition markieren. OK betrifft den Einhängepunkt dieses Geräts; Gelb öffnet die Einhängepunkte aller Geräte.', 'Select a drive/partition. OK edits this device’s mount point; yellow opens mount points for all devices.', [
        ...group('Screens/DeviceManager', 'DeviceManager', 'OkCancelActions', [...closeRows(null, 'keyClose'), ['ok', 'keyMountPoint', 'Dauerhaften Einhängepunkt des gewählten Geräts bearbeiten.', 'Edit the selected device’s permanent mount point.']]),
        ...group('Screens/DeviceManager', 'DeviceManager', 'MenuActions', [['menu', 'keyMenu', 'Festplatteneinstellungen öffnen.', 'Open hard disk settings.']]),
        ...group('Screens/DeviceManager', 'DeviceManager', 'ColorActions', [['red', null, 'Schließen.', 'Close.'], ['green', 'keyActions', 'Geräteaktionen öffnen, z. B. Prüfen, Formatieren oder Initialisieren.', 'Open device actions, e.g. check, format or initialize.'], ['yellow', 'keyMountPoints', 'Einhängepunkte aller Geräte bearbeiten.', 'Edit mount points for all devices.'], ['blue', 'keyBlue', 'Temporär ein-/aushängen, wenn für diese Partition verfügbar.', 'Temporarily mount/unmount when available for this partition.']]),
        ...nativeList('Screens/DeviceManager', 'DeviceManager'),
      ]),
    ...[['storage-mounts', 'DeviceManagerMountPoints', 'Einhängepunkte', 'Mount Points'], ['storage-action', 'StorageDeviceAction', 'Geräteaktion vorbereiten', 'Prepare Device Action']].map(([id, owner, de, en]) => profile(id, de, en, `${storage} → ${de}`, `${storageEN} → ${en}`,
      id === 'storage-action' ? 'Parameter der gewählten Aktion bearbeiten. Grün/Start übergibt sie an die Geräteverwaltung; Bestätigungsdialoge beachten, Formatieren löscht Daten.' : 'Dauerhafte Einhängepunkte und Optionen bearbeiten.', id === 'storage-action' ? 'Edit parameters for the selected action. Green/Start submits them to Device Manager; read confirmations, formatting erases data.' : 'Edit permanent mount points and options.', replaceSetup('Screens/DeviceManager', owner, [['save', 'keySave', id === 'storage-action' ? 'Gewählte Aktion mit diesen Parametern fortsetzen.' : 'Einhängepunkte speichern/anwenden.', id === 'storage-action' ? 'Continue the selected action with these parameters.' : 'Save/apply mount points.']]), true)),
    ...[false, true].map(edit => profile(edit ? 'plugins-edit' : 'plugins', edit ? 'Plugin-Browser: Bearbeiten' : 'Plugin-Browser: Auswahl', edit ? 'Plugin Browser: Edit Mode' : 'Plugin Browser: Select', `${pluginPath}${edit ? ' → Blau' : ''}`, `${pluginPathEN}${edit ? ' → Blue' : ''}`,
      edit ? 'Farbtasten ändern nun Reihenfolge und Sichtbarkeit. Im Verschiebemodus bewegen Navigationstasten das Plugin.' : 'Plugins starten, installieren, entfernen oder aktualisieren. Listen- und Rasterdarstellung unterscheiden sich bei Links/Rechts.', edit ? 'Colour buttons now change order and visibility. In move mode navigation moves the plugin.' : 'Launch, install, remove or update plugins. Left/right differ between list and grid layouts.', [
        ...group('Screens/PluginBrowser', 'PluginBrowser', 'OkCancelActions', [...closeRows('keyCancel'), ['ok', 'keySelect', edit ? 'Markiertes Plugin gemäß Bearbeitungs-/Verschiebemodus auswählen.' : 'Markiertes Plugin starten.', edit ? 'Select the plugin according to edit/move mode.' : 'Launch the selected plugin.']]),
        ...group('Screens/PluginBrowser', 'PluginBrowser', 'MenuActions', [['menu', 'keyMenu', 'Plugin-Browser-Einstellungen öffnen.', 'Open Plugin Browser settings.']]),
        ...group('Screens/PluginBrowser', 'PluginBrowser', 'ColorActions', [
          ['red', 'keyRed', edit ? 'Sortierreihenfolge zurücksetzen.' : 'Plugin-Entfernung öffnen.', edit ? 'Reset sort order.' : 'Open plugin removal.'],
          ['green', 'keyGreen', edit ? 'Verschiebemodus umschalten.' : 'Plugin-Installation öffnen.', edit ? 'Toggle move mode.' : 'Open plugin installation.'],
          ['yellow', 'keyYellow', edit ? 'Sichtbarkeit des markierten Plugins umschalten.' : 'Plugin-Updates öffnen.', edit ? 'Toggle visibility of the selected plugin.' : 'Open plugin updates.'],
          ['blue', 'keyEditMode', edit ? 'Bearbeitungsmodus beenden.' : 'Bearbeitungsmodus starten.', edit ? 'Leave edit mode.' : 'Enter edit mode.', conditional('Bei benutzerdefinierter Plugin-Sortierung.', 'With user-defined plugin sorting.')],
        ]), ...nav('Screens/PluginBrowser', 'PluginBrowser'),
        ...group('Screens/PluginBrowser', 'PluginBrowser', 'NavigationActions', [['left', 'keyLeft', 'Vorheriges Rasterelement.', 'Previous grid item.'], ['right', 'keyRight', 'Nächstes Rasterelement.', 'Next grid item.'], ['first', 'keyFirst', 'Erstes Element der Rasterzeile.', 'First item of the grid row.'], ['last', 'keyLast', 'Letztes Element der Rasterzeile.', 'Last item of the grid row.']]).map(rule => ({ ...rule, ...conditional('Nur in der Rasterdarstellung.', 'Grid layout only.') })),
        ...legacyPages('Screens/PluginBrowser', 'PluginBrowser').map(rule => ({ ...rule, ...conditional('Nur in der Listendarstellung und bei aktivierter Links/Rechts-Blätterfunktion.', 'Only in list layout with left/right paging enabled.') })),
        ...numbers('Screens/PluginBrowser', 'PluginBrowser', 'keyNumberGlobal', 'Plugin per SMS-artiger Namenseingabe suchen.', 'Find a plugin by SMS-style name input.'),
      ])),
    profile('packages', 'Plugins / Pakete verwalten', 'Manage Plugins / Packages', `${pluginPath} → Rot / Grün / Gelb`, `${pluginPathEN} → Red / Green / Yellow`,
      'Je nach Aufruf entfernen, installieren, aktualisieren oder verwalten. OK markiert/öffnet, Grün führt die angebotene Paketaktion aus.', 'Depending on entry point: remove, install, update or manage. OK selects/opens; green performs the offered package action.', [
        ...group('Screens/PluginBrowser', 'PackageAction', 'SelectCancelActions', [['cancel', 'keyCancel', 'Paketansicht schließen.', 'Close package view.']]),
        ...group('Screens/PluginBrowser', 'PackageAction', 'OkCancelActions', [['ok', 'keySelect', 'Kategorie öffnen, Paket markieren/abwählen oder Verwaltung öffnen.', 'Open category, select/deselect package or open management.']]),
        ...group('Screens/PluginBrowser', 'PackageAction', 'ColorActions', [['green', 'keyGreen', 'Angebotene Paketaktion ausführen.', 'Perform the offered package action.', conditional('Erst bei aktiver Auswahl; Hinweise und Bestätigungen beachten.', 'Requires an active selection; read prompts and confirmations.')], ['yellow', 'keyShowLog', 'Ausgabe des letzten Paketbefehls anzeigen.', 'Show output of the last package command.', conditional('Nur wenn ein Protokoll verfügbar ist.', 'Only when a log is available.')], ['blue', 'keySearch', 'Pakete nach Namen/Beschreibung suchen.', 'Search packages by name/description.']]),
        ...group('Screens/PluginBrowser', 'PackageAction', 'MenuActions', [['menu', 'keySearch', 'Paketsuche öffnen.', 'Open package search.']]),
        ...group('Screens/PluginBrowser', 'PackageAction', 'ShowVirtualKeyboardActions', [['showVirtualKeyboard', 'keySearch', 'Paketsuche öffnen.', 'Open package search.']]),
        ...delegatedNav('Screens/PluginBrowser', 'PackageAction'),
        ...group('Screens/PluginBrowser', 'PackageAction', 'NavigationActions', [['first', 'keyPreviousCategory', 'Vorherige Kategorie.', 'Previous category.'], ['last', 'keyNextCategory', 'Nächste Kategorie.', 'Next category.'], ['left', 'keyPreviousCategory', 'Vorherige Kategorie; bei aktivierter Links/Rechts-Blätterfunktion eine Seite zurück.', 'Previous category; with left/right paging enabled, previous page.'], ['right', 'keyNextCategory', 'Nächste Kategorie; bei aktivierter Links/Rechts-Blätterfunktion eine Seite weiter.', 'Next category; with left/right paging enabled, next page.']]),
        ...group('Screens/PluginBrowser', 'PackageAction', 'PreviousNextActions', [['previous', 'keyPreviousCategory', 'Vorherige Kategorie.', 'Previous category.'], ['next', 'keyNextCategory', 'Nächste Kategorie.', 'Next category.']]),
        ...numbers('Screens/PluginBrowser', 'PackageAction', 'keyNumberGlobal', 'Paket per SMS-artiger Namenseingabe suchen.', 'Find a package by SMS-style name input.'),
      ]),
    profile('package-log', 'Paketprotokoll', 'Package Log', `${pluginPath} → Pakete → Gelb`, `${pluginPathEN} → Packages → Yellow`,
      'Ausgabe des Paketmanagers lesen und blättern.', 'Read and scroll package-manager output.', [...group('Screens/PluginBrowser', 'PackageActionLog', 'CancelActions', [['cancel', null, 'Protokoll schließen.', 'Close log.']]), ...delegatedNav('Screens/PluginBrowser', 'PackageActionLog'), ...legacyPages('Screens/PluginBrowser', 'PackageActionLog')]),
    profile('timer-edit', 'Aufnahmetimer bearbeiten', 'Edit Recording Timer', 'Hauptmenü → Timer → Aufnahmetimer → OK / Grün', 'Main Menu → Timers → Record Timers → OK / Green',
      'Typ, Sender, Zeit, Wiederholung und Ziel bearbeiten. OK öffnet beim Sender, Verzeichnis oder Tags eine weitere Auswahl.', 'Edit type, service, time, repeat and destination. OK opens a further selector for service, directory or tags.', replaceSetup('Screens/Timers', 'RecordTimerEdit', [['select', 'keySelect', 'Feld bearbeiten; Sender-, Verzeichnis- oder Tag-Auswahl öffnen.', 'Edit field; open service, directory or tag selection.'], ['save', 'keySave', 'Timer speichern; bei Konflikten folgt eine weitere Prüfung.', 'Save timer; conflicts trigger further checks.'], ['cancel', 'keyCancel', 'Timerbearbeitung abbrechen; Änderungen gegebenenfalls verwerfen.', 'Cancel timer editing; discard changes if prompted.']]), true),
    profile('timer-log', 'Timerprotokoll', 'Timer Log', 'Hauptmenü → Timer → Aufnahmetimer → HELP (INFO)', 'Main Menu → Timers → Record Timers → HELP (INFO)',
      'Protokoll des markierten Timers. Blau leert die angezeigte Kopie; Grün speichert diese Änderung.', 'Log for the selected timer. Blue clears the displayed copy; green saves that change.', [
        ...group('Screens/Timers', 'TimerLog', 'CancelSaveActions', [['cancel', 'keyCancel', 'Ohne Protokolländerung schließen.', 'Close without changing the saved log.'], ['save', 'keySave', 'Protokolländerung speichern und schließen.', 'Save log changes and close.']]),
        ...group('Screens/Timers', 'TimerLog', 'OkActions', [['ok', 'refreshLog', 'Protokoll aktualisieren.', 'Refresh log.']]),
        ...group('Screens/Timers', 'TimerLog', 'ColorActions', [['yellow', 'refreshLog', 'Protokoll aktualisieren.', 'Refresh log.'], ['blue', 'keyClearLog', 'Angezeigtes Protokoll leeren.', 'Clear displayed log.']]),
        ...delegatedNav('Screens/Timers', 'TimerLog'), ...legacyPages('Screens/Timers', 'TimerLog'),
      ]),
    profile('choice', 'Kontextmenü / weitere Auswahl', 'Context Menu / Further Choices', 'Untermenü → MENU → Kontextmenü / Auswahl', 'Submenu → MENU → Context Menu / Choices',
      'ChoiceBox, z. B. Netzwerkübersicht → MENU oder Geräteverwaltung → Grün. Ziffern und Farben werden im Python-Code aus den Einträgen dieses Dialogs zugeordnet; ihre Bedeutung steht jeweils neben dem Eintrag.', 'ChoiceBox, e.g. Network Overview → MENU or Device Manager → Green. Python assigns digits and colours from this dialog’s entries; follow the shortcut printed beside each entry.', [
        ...group('Screens/ChoiceBox', 'ChoiceBoxNew', 'OkActions', [['ok', 'keySelect', 'Markierten Eintrag auswählen.', 'Choose the highlighted entry.']]),
        ...group('Screens/ChoiceBox', 'ChoiceBoxNew', 'OkCancelActions', [['cancel', 'keyCancel', 'Auswahl abbrechen.', 'Cancel selection.', conditional('Wenn der aufrufende Dialog Abbrechen erlaubt.', 'When the calling dialog allows cancellation.')]]),
        ...numbers('Screens/ChoiceBox', 'ChoiceBoxNew', 'keyNumberGlobal', 'Den mit dieser Ziffer beschrifteten Eintrag direkt auswählen; 0 ist standardmäßig der zehnte.', 'Choose the entry labelled with this digit directly; 0 is the tenth by default.').map(rule => ({ ...rule, ...conditional('Nur wenn dieser Eintrag eine passende Ziffernzuordnung besitzt.', 'Only when an entry has this digit assigned.') })),
        ...group('Screens/ChoiceBox', 'ChoiceBoxNew', 'ColorActions', ['red', 'green', 'yellow', 'blue'].map(colour => [colour, `key${colour[0].toUpperCase()}${colour.slice(1)}`, 'Eintrag mit dieser Farbmarkierung auswählen.', 'Choose the entry with this colour marker.', conditional('Nur wenn diese Farbe einem Eintrag zugeordnet ist; Rot bedeutet hier nicht automatisch Abbrechen.', 'Only when this colour is assigned; red does not automatically mean cancel here.')])),
        ...group('Screens/ChoiceBox', 'ChoiceBoxNew', 'TextActions', [['text', 'keyText', 'Mit TEXT beschrifteten Eintrag wählen, falls vorhanden.', 'Choose the TEXT-labelled entry if present.']]),
        ...nav('Screens/ChoiceBox', 'ChoiceBoxNew', { up: 'keyLineUp', down: 'keyLineDown' }), ...legacyPages('Screens/ChoiceBox', 'ChoiceBoxNew'),
        ...group('Screens/ChoiceBox', 'ChoiceBoxNew', 'MenuActions', [['menu', 'keyResetList', 'Reihenfolge zurücksetzen.', 'Reset ordering.', conditional('Nur in sortierbaren Auswahlmenüs mit gespeicherter Reihenfolge.', 'Only in reorderable choice menus with stored ordering.')]]),
        ...group('Screens/ChoiceBox', 'ChoiceBoxNew', 'PreviousNextActions', [['previous', 'keyMoveItemUp', 'Eintrag nach oben verschieben.', 'Move entry up.'], ['next', 'keyMoveItemDown', 'Eintrag nach unten verschieben.', 'Move entry down.']]).map(rule => ({ ...rule, ...conditional('Nur in sortierbaren Auswahlmenüs.', 'Only in reorderable choice menus.') })),
      ]),
    profile('confirm', 'Ja/Nein-Rückfrage', 'Yes/No Confirmation', 'Untermenü → Aktion → Ja/Nein-Rückfrage', 'Submenu → Action → Yes/No Confirmation',
      'Normale MessageBox mit Ja/Nein-Liste. OK übernimmt die markierte Antwort; Grün bedeutet direkt Ja. Aufrufabhängige Zeitlimits und Spezialdialoge beachten.', 'Standard MessageBox with a yes/no list. OK returns the highlighted answer; green directly means yes. Timeouts and specialized dialogs depend on the caller.', [
        ...group('Screens/MessageBox', 'MessageBox', 'MsgBoxActions', [['cancel', 'cancel', 'Nein / Abbrechen.', 'No / cancel.'], ['select', 'select', 'Markierte Antwort übernehmen.', 'Confirm the highlighted answer.'], ['selectOk', 'selectOk', 'Direkt Ja bestätigen.', 'Confirm yes directly.']]),
        ...nav('Screens/MessageBox', 'MessageBox', { top: 'top', pageUp: 'pageUp', up: 'up', down: 'down', pageDown: 'pageDown', bottom: 'bottom' }), ...legacyPages('Screens/MessageBox', 'MessageBox'),
      ]),
  ];
  return results;
}
