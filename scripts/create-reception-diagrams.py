"""Rebuild original bilingual wiring drawings; no external rendering dependency."""
from html import escape
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / 'public/diagrams/reception'
BLUE, GREEN, PURPLE, GRAY = '#1263c6', '#127246', '#7c3ac2', '#69778a'

def text(x, y, value, size=18, color='#14243b', anchor='middle', weight='400'):
    return f'<text x="{x}" y="{y}" font-size="{size}" fill="{color}" text-anchor="{anchor}" font-weight="{weight}">{escape(value)}</text>'

def box(x, y, w, title, lines=(), h=96, color=BLUE):
    return f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="12" fill="#fff" stroke="{color}" stroke-width="2"/>' + text(x+w/2,y+29,title,20,weight='700') + ''.join(text(x+w/2,y+55+22*i,line,16) for i,line in enumerate(lines))

def wire(points, label='', x=0, y=0, color=BLUE, dashed=False):
    return f'<polyline points="{points}" fill="none" stroke="{color}" stroke-width="5" stroke-linejoin="round" stroke-linecap="round"'+(' stroke-dasharray="10 8"' if dashed else '')+'/>' + (text(x,y,label,17,color) if label else '')

def dish(x, y, label):
    return f'<path d="M{x-36} {y-28} Q{x-34} {y+48} {x+42} {y+44} Z" fill="#dbe9fb" stroke="{BLUE}" stroke-width="3"/><path d="M{x} {y+26} L{x+34} {y-14} M{x} {y+30} v35 h-25 h50" fill="none" stroke="{BLUE}" stroke-width="4"/><circle cx="{x+34}" cy="{y-14}" r="6" fill="{BLUE}"/>' + text(x,y+94,label,18)

def antenna(x,y,label):
    return f'<path d="M{x} {y-32} v85 M{x-40} {y-20} h80 M{x-32} {y} h64 M{x-23} {y+20} h46" stroke="{GREEN}" stroke-width="4"/>' + text(x,y+79,label,18)

def drawing(lang, key, title, desc, body, notes, height=580):
    OUT.joinpath(lang).mkdir(parents=True,exist_ok=True)
    legend = ('Blau: HF-Koaxialkabel · Violett: HDMI · Gestrichelt: inaktiv' if lang=='de' else 'Blue: RF coaxial cable · Purple: HDMI · Dashed: inactive')
    if key == 'multiswitch':
        legend = ('Vier Farben links: getrennte SAT-Ebenen · Blau rechts: Teilnehmerleitungen' if lang=='de' else 'Four colours on the left: separate SAT planes · Blue on the right: subscriber feeds')
    svg = f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 980 {height}" role="img" aria-labelledby="title desc"><title id="title">{escape(title)}</title><desc id="desc">{escape(desc)}</desc><rect width="980" height="{height}" rx="16" fill="#f3f7fc"/><g font-family="Arial, Helvetica, sans-serif">' + text(30,33,'OpenATV | '+('EMPFANG' if lang=='de' else 'RECEPTION'),14,BLUE,'start','700') + text(30,68,title,26,anchor='start',weight='700') + body
    for i,note in enumerate(notes): svg += text(30,height-94+i*24,note,17,anchor='start')
    svg += text(30,height-20,legend,14,GRAY,'start')+'</g></svg>\n'
    OUT.joinpath(lang,key+'.svg').write_text(svg,encoding='utf-8')

for lang in ('de','en'):
    de=lang=='de'
    tr=lambda a,b:a if de else b
    # A house outline distinguishes the outdoor feed from the room equipment.
    body='<path d="M260 235 L505 108 L750 235 M294 217 V407 H716 V217" fill="none" stroke="#bdcde2" stroke-width="3"/>'
    body+=dish(133,160,'Astra 19.2°E')+box(42,300,182,'Universal-LNB',('SAT OUT · F',))
    body+=wire('167,146 220,146 220,278 133,278 133,300')
    body+=box(338,270,190,tr('Sat-Dose','SAT wall outlet'),('SAT · F',))+box(613,270,190,'OpenATV',('SAT IN · F',))
    body+=wire('224,348 338,348','Koax' if de else 'Coax',278,332)+wire('528,318 613,318','Koax' if de else 'Coax',570,302)
    body+=box(813,140,130,'TV',('HDMI IN',),color=PURPLE)+wire('708,270 708,188 813,188','HDMI OUT → IN',685,170,PURPLE)
    drawing(lang,'single-sat',tr('Ein Sat-Kabel ins Einfamilienhaus','One satellite cable into a house'),tr('LNB über Sat-Dose an SAT IN; HDMI verbindet die Box mit dem Fernseher.','LNB via SAT wall outlet to SAT IN; HDMI links the receiver to the television.'),body,[tr('Box: Einfach → Einzeln → Astra 19.2°E. Beispiel für einen konventionellen Anschluss.','Receiver: Simple → Single → Astra 19.2°E. Example of a conventional connection.'),tr('Der TV-Anschluss der Dose ersetzt keinen SAT-Anschluss. LAN ist ein separates Netzwerkkabel.','The TV socket is not a SAT outlet. LAN uses a separate network cable.')])
    body=dish(120,140,'Astra 19.2°E')+dish(120,310,'Hotbird 13.0°E')
    body+=box(330,195,270,'DiSEqC 2/1',('A / 1               B / 2', 'OUT → Receiver'),h=113)
    body+=wire('154,126 278,126 278,227 330,227','A / 1',256,111)+wire('154,296 267,296 267,277 330,277','B / 2',252,323)
    body+=box(730,208,195,'OpenATV',('SAT IN',))+wire('600,252 730,252',tr('ein Koaxialkabel','one coax cable'),665,232)
    drawing(lang,'diseqc',tr('Zwei Positionen über einen DiSEqC-Schalter','Two positions through a DiSEqC switch'),tr('Astra an Eingang A und Hotbird an Eingang B; Ausgang zur Box. Beispielbelegung.','Astra on input A and Hotbird on B; output to receiver. Example port assignment.'),body,[tr('Box: Einfach → DiSEqC A/B; Port A = Astra, Port B = Hotbird (Beispiel).','Receiver: Simple → DiSEqC A/B; port A = Astra, port B = Hotbird (example).'),tr('Die tatsächlichen Portnummern am Schalter entscheiden. Ein Monoblock kann anders belegt sein.','Follow the actual switch port numbers. A monoblock may have a different assignment.')])
    body=box(30,160,245,'Quattro-LNB',('VL     HL     VH     HH', '4 × OUT'),h=100)
    body+=box(445,160,235,tr('Multischalter','Multiswitch'),('VL     HL     VH     HH',tr('Teilnehmer-Ausgänge','Subscriber outputs')),h=100)
    for i in range(4): body+=wire(f'275,{177+i*23} 445,{177+i*23}',color=[BLUE,GREEN,PURPLE,'#b66b00'][i])
    body+=text(360,139,tr('4 feste Ebenen','4 fixed planes'),17)
    body+=box(740,110,205,'OpenATV A',('SAT IN',))+box(740,303,205,'OpenATV B',('SAT IN',))
    body+=wire('680,185 710,185 710,158 740,158')+wire('680,240 710,240 710,351 740,351')
    drawing(lang,'multiswitch',tr('Mehrere unabhängige Anschlüsse im Haus','Several independent connections in a house'),tr('Quattro-LNB mit vier getrennten Ebenen an passende Multischalter-Eingänge, je Teilnehmer ein Kabel.','Quattro LNB with four separate planes to matching multiswitch inputs, one cable per subscriber.'),body,[tr('VL/HL/VH/HH müssen zum beschrifteten Eingang passen; die Reihenfolge hier ist schematisch.','Match VL/HL/VH/HH to the labelled inputs; the order drawn here is schematic.'),tr('Ein Quad-LNB ist anders: Seine Teilnehmer-Ausgänge liefern jeweils eine gewählte Ebene.','A Quad LNB is different: each subscriber output supplies a selected plane.')])
    body=box(30,190,250,'Unicable / SCR',('LNB '+tr('oder Matrix','or multiswitch'),'SCR OUT'),h=106)
    body+=box(430,190,235,tr('SAT-Verteiler','SAT splitter'),('DC-Pass '+tr('nach Datenblatt','per datasheet'),tr('diodenentkoppelt','diode-isolated')),h=106)
    body+=wire('280,241 430,241','SCR',350,221)
    body+=box(730,110,215,tr('Tuner / Box A','Tuner / receiver A'),('SAT IN · UB 1','1210 MHz *'),h=110)+box(730,315,215,tr('Tuner / Box B','Tuner / receiver B'),('SAT IN · UB 2','1420 MHz *'),h=110)
    body+=wire('665,220 700,220 700,165 730,165')+wire('665,265 700,265 700,370 730,370')
    drawing(lang,'unicable',tr('Unicable: ein Kabel, getrennte User Bands','Unicable: one cable, separate User Bands'),tr('SCR-Ausgang über geeigneten Verteiler zu zwei unabhängigen Tunern mit unterschiedlichen User Bands.','SCR output via suitable splitter to two independent tuners with different User Bands.'),body,[tr('* Nur Beispielwerte! UB-Nummer und Frequenz aus der Zuteilung deiner Anlage übernehmen.','* Example values only! Use the UB number and frequency assigned for your installation.'),tr('Jeder unabhängige Tuner benötigt ein eigenes UB. Kein gewöhnliches Y-Kabel für Legacy-SAT.','Each independent tuner needs its own UB. Do not use a plain Y lead for legacy satellite.')],620)
    body=box(35,125,230,tr('Kabel-TV-Dose','Cable TV outlet'),('TV / CATV',))+antenna(152,326,'DVB-T / T2')
    body+=box(420,125,235,'OpenATV DVB-C',('CABLE / ANT IN',))+box(420,295,235,'OpenATV DVB-T2',('ANT / CABLE IN',))
    body+=wire('265,173 420,173',tr('IEC-Koax','IEC coax'),343,153)+wire('152,379 330,379 330,343 420,343')
    body+=box(765,210,155,'TV',('HDMI IN',),color=PURPLE)
    body+=wire('655,173 710,173 710,240 765,240',color=PURPLE)+wire('655,343 710,343 710,280 765,280',color=PURPLE)
    drawing(lang,'cable-terrestrial',tr('Kabel-TV oder Antenne direkt anschließen','Connect cable TV or an aerial directly'),tr('Zwei alternative Anschlussbeispiele: Kabeldose an DVB-C oder Antenne an DVB-T2.','Two alternative connections: cable outlet to DVB-C or aerial to DVB-T2.'),body,[tr('Oben und unten sind zwei Alternativen. Buchsenbezeichnungen hängen vom Gerät ab.','Top and bottom are alternatives. Connector labels depend on the receiver.'),tr('5 V nur für passende aktive Antennen; am direkten Kabel-TV-Anschluss keine Antennenspeisung.','Enable 5 V only for compatible active aerials; no aerial supply on a direct cable TV connection.')])
    for active in (False,True):
        body=antenna(126,133,'DVB-T / T2')+box(27,309,210,'CATV',('TV '+tr('aus Kabeldose','from wall outlet'),))
        body+=box(425,174,220,'SPAUN TAR 5',(),h=155)
        body+=text(438,229,'DVB-T IN',16,anchor='start')+text(438,279,'CATV IN',16,anchor='start')+text(614,245,'OUT',15)
        body+=wire('126,187 218,187',color=BLUE if active else GRAY,dashed=not active)
        body+=box(218,163,166,tr('DC-Blocker *','DC blocker *'),(),h=48)
        body+=wire('384,187 407,187 407,223 425,223',color=BLUE if active else GRAY,dashed=not active)
        body+=wire('237,357 338,357 338,273 425,273',color=GRAY if active else BLUE,dashed=active)
        body+=box(755,202,195,'OpenATV',('DVB-C / T2',tr('Hybrid-Tuner','Hybrid tuner')),h=109)+wire('645,253 755,253')
        body+=text(700,232,'5 V ←' if active else '0 V',20,GREEN,weight='700')
        body+=text(535,359,tr('Jetzt: DVB-T / T2','Now: DVB-T / T2') if active else tr('Jetzt: DVB-C','Now: DVB-C'),22,weight='700')
        body+=text(30,441,tr('* Für Antennen ohne DC-Verträglichkeit. Bei 5-V-Aktivantennen entfällt der Blocker.','* For aerials that cannot accept DC. Omit the blocker for compatible 5 V active aerials.'),17,anchor='start')
        drawing(lang,'spaun-'+('5v' if active else '0v'),tr('SPAUN: Antenne mit 5 V auswählen','SPAUN: select the aerial using 5 V') if active else tr('SPAUN: Kabel-TV ohne 5 V auswählen','SPAUN: select cable TV with 5 V off'),tr('TAR 5 verbindet bei 5 V die Antenne, bei 0 V CATV mit dem gemeinsamen Hybrid-Eingang. Bei nicht DC-tauglicher Antenne liegt ein DC-Blocker im Antennenzweig.','TAR 5 connects the aerial at 5 V, or CATV at 0 V, to the common hybrid input. An aerial that cannot accept DC requires a DC blocker on the aerial branch.'),body,[tr('Box: DVB-C und DVB-T2 konfigurieren; 5-V-Option im DVB-T-Zweig einschalten.','Receiver: configure DVB-C and DVB-T2; enable the 5 V option in the DVB-T section.'),tr('Ein gemeinsamer Tuner empfängt C oder T2 abwechselnd. Keine gleichzeitigen C/T2-Aufnahmen.','One shared tuner receives C or T2 alternately. No simultaneous C/T2 recordings.')])
    body=dish(115,140,tr('Drehbare Antenne','Motorised dish'))+box(33,288,220,'LNB',('OUT',))
    body+=box(400,210,235,tr('DiSEqC-Motor','DiSEqC motor'),('LNB        REC / RECV', 'USALS / 1.2'),h=114)
    body+=wire('253,336 320,336 320,241 400,241')+box(752,215,193,'OpenATV',('SAT IN',))
    body+=wire('635,267 752,267')+text(690,335,tr('Steuerung ←','Control ←'),17,GREEN)
    drawing(lang,'motor',tr('Motor zwischen LNB und Receiver','Motor between LNB and receiver'),tr('LNB-Ausgang an Motor-LNB-Buchse; Motor-Receiver-Buchse an SAT IN.','LNB output to motor LNB socket; motor receiver socket to SAT IN.'),body,[tr('Motor: LNB und REC nicht vertauschen. Strombedarf von Motor und LNB gemeinsam beachten.','Motor: do not swap LNB and REC. Check the combined motor and LNB current requirement.'),tr('USALS verwendet deinen Standort. Befehle bewegen die gesamte Antenne tatsächlich.','USALS uses your location. Motor commands physically move the entire dish.')])
print('Created 16 bilingual, original SVG wiring diagrams.')
