"""Network skin fixtures. No network manager, scans or configuration writes.

SPDX-License-Identifier: GPL-3.0-only
"""
import json
from pathlib import Path
from types import MethodType

from enigma import gRGB
from Components.Sources.List import List
from Components.Sources.StaticText import StaticText

CONTRACTS = json.loads((Path(__file__).parent/'assets/network-contracts.json').read_text())
OWNERS = {'network-overview':'NetworkOverview', 'network-profiles':'NetworkOverview',
          'network-wifi':'NetworkWiFiScan', 'network-shares':'NetworkShares',
          'network-mounts':'NetworkMountsOverview', 'network-test':'NetworkTest'}


def row(owner, source, **values):
    mapping = CONTRACTS[owner][source]
    unknown = values.keys() - mapping.keys()
    if unknown:
        raise ValueError('Unknown fixture fields: %s' % sorted(unknown))
    result = [None] * len(mapping)
    for name, value in values.items():
        result[mapping[name]] = value
    return tuple(result)


def configure(screen, scene):
    owner = OWNERS[scene]
    for name, mapping in CONTRACTS[owner].items():
        screen[name] = List([], indexNames=mapping)
    def item(source='list', **values):
        return row(owner, source, **values)
    green, red, gray = (gRGB(v).argb() for v in (0x0078DFAD, 0x00FF7474, 0x0099ADCA))
    if owner == 'NetworkOverview':
        screen['savedLabel'] = StaticText('Saved Wi-Fi Networks · wlan0 · 3')
        screen['adapterList'].setList([
            item('adapterList', Reserved_for_rowTemplate=0, AdapterName='Adapter', StatusText='Status', MAC='MAC', IPAddress='IP address', Gateway='Gateway', Speed='Speed'),
            item('adapterList', Reserved_for_rowTemplate=1, AdapterGlyph='\uEA5A', AdapterName='eth0', AdapterType='Ethernet Adapter', StatusText='Cable Unplugged', StatusColor=red, StatusColorSelected=red,
                 MAC='02:00:00:00:00:01', IPAddress='-', Gateway='-', Speed='-', InternetGlyph='', ConnectionText='DHCP'),
            item('adapterList', Reserved_for_rowTemplate=1, AdapterGlyph='\uE9FE', AdapterName='wlan0', AdapterType='Wi-Fi Adapter', StatusText='Connected', StatusColor=green, StatusColorSelected=0x00B5FFDA,
                 MAC='02:00:00:00:00:02', IPAddress='192.0.2.20', Gateway='192.0.2.1', Speed='866 Mbps', InternetGlyph='\uEA68', ConnectionText='Home Lab'),
        ])
        screen['savedList'].setList([
            item('savedList', Reserved_for_rowTemplate=0, SSID='SSID', StatusText='Status', BSSID='BSSID', Frequency='Frequency', Channel='Channel', Encryption='Encryption'),
            item('savedList', Reserved_for_rowTemplate=1, SSID='Home Lab', BSSID='02:00:00:00:01:01', Frequency='5.18 GHz', Channel='36', Encryption='WPA3', StatusText='Connected', StatusGlyph='\uEA77', StatusColor=green, StatusColorSelected=0x00B5FFDA),
            item('savedList', Reserved_for_rowTemplate=1, SSID='Workshop', BSSID='-', Frequency='-', Channel='-', Encryption='WPA2/WPA3', StatusText='Not Connected', StatusGlyph='\uEA78', StatusColor=gray, StatusColorSelected=0x00DAE4F2),
            item('savedList', Reserved_for_rowTemplate=1, SSID='Guest Lab', BSSID='-', Frequency='-', Channel='-', Encryption='WPA2', StatusText='Disabled', StatusGlyph='\uEA79', StatusColor=gray, StatusColorSelected=0x00DAE4F2),
        ])
    elif owner == 'NetworkWiFiScan':
        screen['list'].setList([item(Name=f'{ssid}  ({bssid})', SSID=ssid, BSSID=bssid, Glyph=glyph, Strength=pct+'%  ('+dbm+')', Percentage=pct+'%', dBm=dbm,
            Encryption=enc, ChannelFrequency=channel+' ('+freq+')', Channel=channel, Frequency=freq)
            for ssid,bssid,pct,dbm,enc,channel,freq,glyph in (
                ('Home Lab','02:00:00:00:01:01','82','-49 dBm','WPA3','Ch-36','5.18 GHz','\uEA65'),
                ('Workshop','02:00:00:00:01:02','58','-66 dBm','WPA2/WPA3','Ch-44','5.22 GHz','\uEA67'),
                ('Guest Lab','02:00:00:00:01:03','25','-79 dBm','WPA2','Ch-6','2.44 GHz','\uEA66'))])
    elif owner == 'NetworkShares':
        screen['list'].setList([
            item(Reserved_for_rowTemplate=0, Glyph='\uEA6D', IPAddress='192.0.2.50', Name='LAB-NAS', Username='(guest)', NameUsername='LAB-NAS (guest)'),
            item(Reserved_for_rowTemplate=1, Glyph='\uE914', GlyphColor=green, Type='NFS', Name='recordings', LocalPath='/media/net/recordings', Description='TV archive'),
            item(Reserved_for_rowTemplate=1, Glyph='\uE918', GlyphColor=gray, Type='CIFS', Name='photos', LocalPath='', Description='Family photos'),
            item(Reserved_for_rowTemplate=0, Glyph='\uEA6D', IPAddress='192.0.2.60', Name='LAB-PC', Username='(demo)', NameUsername='LAB-PC (demo)'),
        ])
    elif owner == 'NetworkMountsOverview':
        screen['mountList'].setList([item('mountList', ShareName=name, Server='192.0.2.50', RemotePath=path, Protocol=protocol, Mode='autofs', Mounted=mounted,
            Active=active, Description=f'192.0.2.50/{path}  ({protocol}, autofs)')
            for name,path,protocol,mounted,active in (
                ('Recordings','export/recordings','nfs','Mounted','Enabled'),
                ('Photos','photos','cifs','Not mounted','Enabled'),
                ('Old archive','archive','nfs','Not mounted','Disabled'))])
    else:
        screen['list'].setList([item(Glyph=glyph, Label=label, Result=result, Detail=detail, Color=color)
            for glyph,label,result,detail,color in (
                ('\uE914','Adapter','OK','wlan0',green), ('\uE914','Link','OK','Connected',green),
                ('\uE914','IP address','OK','192.0.2.20',green), ('\uE918','Gateway','Failed','No response',red),
                ('\uE92B','Internet','Skipped','Gateway unavailable',gray), ('\uE9F8','DNS','Checking','Please wait',gray))])
    def finish(self):
        for name in CONTRACTS[owner]:
            self[name].enableAutoNavigation(False)
        if owner == 'NetworkOverview':
            for name in ('adapterList','savedList'):
                self[name].setLockFirstRow(True)
                self[name].master.content.setSelectableFunc(lambda kind,*_: kind != 0)
            self['adapterList'].index = 2
            self['savedList'].index = 1
            self['adapterList'].selectionEnabled(scene == 'network-overview')
            self['savedList'].selectionEnabled(scene == 'network-profiles')
        elif owner == 'NetworkTest':
            self['list'].selectionEnabled(False)
    screen.onLayoutFinish.append(MethodType(finish, screen))
