"""Build isolated lab XML from the pinned network screen templates.

The list fields and child templates come from network-skin.json. Only the lab
frame, widget geometry, selection colours and overview palette are adapted.
"""
from copy import deepcopy
import json
from pathlib import Path
from xml.etree.ElementTree import Element, SubElement, fromstring, indent, tostring, Comment

root = Path(__file__).resolve().parents[1]
lab = root/'examples/skinning/HandbookSkinLab'
data = json.loads((root/'data/network-skin.json').read_text(encoding='utf-8'))
screens = {s['name']:s for s in data['screens']}
cases = {
    'network-overview': ('NetworkOverview', 'Network overview: adapter focus'),
    'network-profiles': ('NetworkOverview', 'The same layout: saved Wi-Fi focus'),
    'network-wifi': ('NetworkWiFiScan', 'Wi-Fi scan: named fields and a row panel'),
    'network-shares': ('NetworkShares', 'Share browser: host and share row templates'),
    'network-mounts': ('NetworkMountsOverview', 'Mount overview: enabled versus mounted'),
    'network-test': ('NetworkTest', 'Network test: four independent result states'),
}
contracts = {name: {k:v for k,v in s['lists'].items()} for name,s in screens.items() if s['lists']}
(lab/'assets/network-contracts.json').write_text(json.dumps(contracts,indent=2)+'\n',encoding='utf-8',newline='\n')
for scene, (owner, title) in cases.items():
    screen = Element('screen', name='HandbookSkinLab_'+scene, position='0,0', size='1280,720',
        resolution='1280,720', flags='wfNoBorder', backgroundColor='#00101928', animationMode='off')
    def label(y, text, font='Regular;23', color='#00BDCADA', height='40'):
        SubElement(screen, 'eLabel', position='48,'+str(y), size='1184,'+height,
            font=font, text=text, foregroundColor=color, transparent='1')
    label(24, 'OpenATV / Developer / Network Skin Lab', color='#005BD4EC')
    label(70, title, font='Regular;34', color='#00FFFFFF', height='52')
    label(132, 'Controlled example data. Native List source, XmlMultiContent and Listbox rendering.')
    screen.append(Comment(' example:start '))
    original = fromstring(screens[owner]['xml'])
    widgets = [deepcopy(w) for w in original.findall('widget') if w.get('source') in screens[owner]['lists'] or w.get('source')=='savedLabel']
    for widget in widgets:
        source = widget.get('source')
        if owner == 'NetworkOverview':
            pos, size = {'adapterList':('48,205','1184,150'), 'savedLabel':('48,390','1184,34'), 'savedList':('48,438','1184,140')}[source]
        else:
            pos,size = '48,205','1184,350'
        widget.set('position',pos);widget.set('size',size)
        if source == 'savedLabel':
            widget.set('font','Regular;20')
        widget.set('foregroundColor','#00FFFFFF');widget.set('backgroundColor','#001C2B40')
        widget.set('foregroundColorSelected','#00FFFFFF');widget.set('backgroundColorSelected','#00344E70')
        for template in widget.iter('template'):
            if template.get('colors'):
                template.set('colors','#0078DFAD,#00FF7474,#0099ADCA,#00B5FFDA,#00FFC5C5,#00DAE4F2')
        screen.append(widget)
    screen.append(Comment(' example:end '))
    label(602, {
        'network-overview':'Header is rowtemplate 0; data is rowtemplate 1. Selection belongs to adapterList.',
        'network-profiles':'Only savedList is selected. Connected / saved / disabled use distinct status glyphs.',
        'network-wifi':'Name includes BSSID; SSID and BSSID also exist separately. These are fictional networks.',
        'network-shares':'A host is expandable. Its share rows have protocol, local path and mount state.',
        'network-mounts':'A configured mount can be enabled while it is not currently mounted.',
        'network-test':'Result states shown here are fixtures, not a diagnosis of this receiver.',
    }[scene],font='Regular;21',color='#00F3C86A')
    label(664,'LEFT / RIGHT: examples     EXIT: close     Design grid: 1280 x 720',font='Regular;20',color='#0099ADCA')
    indent(screen,space='  ')
    (lab/'screens'/f'{scene}.xml').write_text(tostring(screen,encoding='unicode')+'\n',encoding='utf-8',newline='\n')
print(f'Built {len(cases)} network skin examples from pinned native templates.')
