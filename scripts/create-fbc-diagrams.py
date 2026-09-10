"""Original, reproducible DE/EN FBC wiring diagrams (SVG, no bitmap dependency)."""
from html import escape
from pathlib import Path

OUT = Path(__file__).resolve().parents[1] / 'public/diagrams/reception'
BLUE, GREEN, GOLD, GRAY = '#1263c6', '#127246', '#925300', '#69778a'

def text(x, y, s, size=18, color='#14243b', weight='400', anchor='middle'):
    return f'<text x="{x}" y="{y}" font-size="{size}" fill="{color}" font-weight="{weight}" text-anchor="{anchor}">{escape(s)}</text>'

def panel(x, y, w, title, lines=(), color=BLUE, h=110):
    return f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="12" fill="white" stroke="{color}" stroke-width="2"/>' + text(x+w/2,y+30,title,20,weight='700') + ''.join(text(x+w/2,y+57+i*23,s,16) for i,s in enumerate(lines))

def wire(points, color=BLUE):
    return f'<polyline points="{points}" stroke="{color}" stroke-width="5" stroke-linejoin="round" fill="none"/>'

def grid(x, y, letters, labels, colors=None):
    s=''
    for i,(letter,label) in enumerate(zip(letters,labels)):
        xx,yy=x+(i%2)*116,y+(i//2)*68
        c=colors[i] if colors else BLUE
        s+=f'<rect x="{xx}" y="{yy}" width="106" height="56" rx="8" fill="#fff" stroke="{c}" stroke-width="2"/>'
        s+=text(xx+53,yy+23,letter,20,c,'700')+text(xx+53,yy+44,label,14)
    return s

def save(lang, key, title, desc, body, notes):
    svg='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 980 720" role="img" aria-labelledby="title desc">'
    svg+=f'<title id="title">{escape(title)}</title><desc id="desc">{escape(desc)}</desc><rect width="980" height="720" rx="16" fill="#f3f7fc"/><g font-family="Arial, Helvetica, sans-serif">'
    svg+=text(30,32,'OpenATV | FBC',14,BLUE,'700','start')+text(30,72,title,26,weight='700',anchor='start')+body
    for i,n in enumerate(notes):svg+=text(30,600+i*28,n,17,anchor='start')
    svg+=text(30,697,'HF / RF: '+('Blau = Koax · Grün/Orange = zweite Zuführung · Innen: schematische Signalwege' if lang=='de' else 'Blue = coax · Green/orange = second feed · Inside: schematic signal paths'),14,GRAY,anchor='start')+'</g></svg>\n'
    (OUT/lang).mkdir(parents=True,exist_ok=True)
    (OUT/lang/(key+'.svg')).write_text(svg,encoding='utf8')

for lang in ('de','en'):
    tr=lambda de,en:de if lang=='de' else en
    roots=tr('2 Eingänge · 8 Demodulatoren','2 inputs · 8 demodulators')
    for two in (False,True):
        key='fbc-legacy-two' if two else 'fbc-legacy-one'
        title=tr('Universal-LNB: zwei unabhängige Kabel','Universal LNB: two independent cables') if two else tr('Universal-LNB: ein Kabel','Universal LNB: one cable')
        body=panel(30,135,265,tr('Twin / Quad / Multischalter','Twin / Quad / multiswitch') if two else 'Universal-LNB',(tr('4 mögliche SAT-Ebenen','4 available SAT planes'),'VL · HL · VH · HH'),h=120)
        body+=panel(30,300,265,tr('Ausgang 1: z. B. HL','Output 1: e.g. HL'),('18 V · 0 kHz',tr('eine gewählte Ebene','one selected plane')),h=112)
        if two:body+=panel(30,450,265,tr('Ausgang 2: z. B. VH','Output 2: e.g. VH'),('13 V · 22 kHz',tr('unabhängig gewählt','selected independently')),GREEN,h=112)
        body+=wire('295,348 345,348 345,208 410,208')
        if two:body+=wire('295,498 365,498 365,296 410,296',GREEN)
        body+=panel(410,140,530,'OpenATV FBC DVB-S',(),h=410)
        body+=panel(428,183,190,'SAT IN A',('Root A · HL',),h=74)
        body+=panel(428,273,190,'SAT IN B',('Root B · VH' if two else tr('intern von A · HL','internally from A · HL'),),GREEN if two else GRAY,h=74)
        body+=text(526,388,tr('Interne Verteilung','Internal routing'),17)
        body+=text(526,414,tr('C–H: automatisch','C–H: automatic'),18,weight='700')
        body+=grid(684,188,'ABCDEFGH',(['HL','VH']+['HL / VH']*6) if two else ['HL']*8)
        body+=text(675,514,roots,18)
        save(lang,key,title,title,body,[
            tr('Bis zu 8 Transponder aus den 2 gerade gewählten Ebenen; insgesamt weiterhin 8 Demodulatoren.','Up to 8 transponders from the 2 selected planes; still 8 demodulators in total.') if two else tr('Bis zu 8 Transponder aus EINER Ebene. Andere Ebenen sind währenddessen nicht verfügbar.','Up to 8 transponders from ONE plane. Other planes are unavailable at the same time.'),
            tr('C–H werden nach Bedarf den Eingängen zugeordnet; keine starre Aufteilung 4 + 4.','C–H are assigned to the inputs as needed; there is no fixed 4 + 4 split.'),
            tr('Die Ebenen sind Beispiele. Zwei Kabel benötigen zwei unabhängige Teilnehmerausgänge.','The planes shown are examples. Two cables require two independent subscriber outputs.')])

    body=panel(30,160,280,'Unicable / SCR / JESS',(tr('LNB oder Multischalter','LNB or multiswitch'),tr('8 exklusiv zugeteilte UBs','8 exclusively assigned UBs')),h=126)
    body+=wire('310,221 410,221')+text(360,200,tr('1 Kabel','1 cable'),16,BLUE)
    body+=panel(410,135,530,'OpenATV FBC DVB-S',(),h=415)
    body+=panel(428,186,190,'SAT IN A',(tr('Koax angeschlossen','Coax connected'),),h=80)
    body+=panel(428,297,190,'SAT IN B',(tr('Buchse bleibt frei','Socket remains free'),),GRAY,h=80)
    body+=grid(684,184,'ABCDEFGH',['UB '+str(i) for i in range(1,9)])
    body+=text(677,497,tr('B–H intern mit A verbunden','B–H internally connected to A'),18,weight='700')
    body+=text(170,369,tr('Jedes UB transportiert','Each UB carries'),19)+text(170,399,tr('einen ausgewählten','one selected'),19)+text(170,429,tr('Transponder.','transponder.'),19)
    save(lang,'fbc-unicable',tr('Unicable: ein Kabel für acht unabhängige Tuner','Unicable: one cable for eight independent tuners'),tr('SCR-Leitung an A; A bis H haben unterschiedliche User Bands.','SCR feed into A; A through H use different user bands.'),body,[
        tr('A–H jeweils eigenes User Band + passende Frequenz. Alle verwenden denselben SCR-Anschluss.','Give A–H a unique user band and matching frequency. All share the same SCR connection.'),
        tr('Logischer Tuner B bleibt nutzbar, obwohl am zweiten Eingang kein Kabel steckt.','Logical tuner B remains usable even though the second input socket has no cable.'),
        tr('UB 1–8 sind eine Beispielzuordnung. Andere Teilnehmer am selben Strang dürfen sie nicht belegen.','UB 1–8 are an example assignment. Other receivers on the same branch must not reuse them.')])

    for motor in (False,True):
        title=tr('Feste Antenne A und eigene Motorantenne B','Fixed dish A and a separate motor dish B') if motor else tr('Zwei feste SAT-Positionen ohne Umschalter','Two fixed satellite positions without a switch')
        body=panel(30,150,270,'Astra 19.2°E',(tr('eigene feste Antenne','separate fixed dish'),'Universal-LNB'),h=110)
        body+=panel(30,355,270,tr('Eigene Motorantenne','Separate motor dish') if motor else 'Hotbird 13.0°E',('LNB → Motor → REC' if motor else tr('eigene feste Antenne','separate fixed dish'),tr('gewählte Position','selected position') if motor else 'Universal-LNB'),GREEN,h=120)
        body+=wire('300,205 560,205')+wire('300,415 560,415',GREEN)
        body+=text(421,186,tr('unabhängige Leitung 1','independent feed 1'),16,BLUE)+text(421,396,tr('unabhängige Leitung 2','independent feed 2'),16,GREEN)
        body+=panel(550,128,390,'OpenATV FBC DVB-S',(),h=405)
        body+=panel(580,177,330,'SAT IN A · Root A',('Astra 19.2°E',),h=82)
        body+=panel(580,372,330,'SAT IN B · Root B',('USALS / DiSEqC 1.2' if motor else 'Hotbird 13.0°E',),GREEN,h=82)
        body+=text(744,297,tr('C–H: FBC automatisch','C–H: FBC automatic'),20,weight='700')+text(744,326,tr('8 Demodulatoren insgesamt','8 demodulators in total'),18)
        save(lang,'fbc-motor' if motor else 'fbc-two-sat',title,title,body,[
            tr('A und B beschreiben unterschiedliche Signalquellen: B daher nicht „Gleich wie A“.','A and B describe different signal sources: do not set B to “Equal to A”.'),
            tr('Eine Motorantenne steht immer nur auf EINER Position; eine Bewegung betrifft alle Nutzer davon.','A motor dish can point at only ONE position; moving it affects everyone using that dish.') if motor else tr('Ohne DiSEqC-Schalter wählt jedes Kabel genau seine fest angeschlossene SAT-Position.','Without a DiSEqC switch, each cable supplies its own fixed satellite position.'),
            tr('Bei Universal-LNBs bleiben je Leitung die Grenzen der gerade gewählten SAT-Ebene bestehen.','With universal LNBs, each feed remains limited to its currently selected satellite plane.')])

    body=panel(30,171,260,tr('Kabel-TV-Dose','Cable TV outlet'),('TV / CATV',),h=100)+wire('290,221 410,221')
    body+=panel(410,135,530,'OpenATV FBC DVB-C',(),h=415)
    body+=panel(428,186,190,'CABLE / ANT IN',(tr('ein Koaxialkabel','one coax cable'),),h=82)
    body+=panel(428,315,190,'LOOP OUT *',(tr('optional zum TV','optional to TV'),),GRAY,h=82)
    body+=grid(684,184,'12345678',['QAM']*8)
    body+=text(677,493,tr('Eine gemeinsame Konfiguration','One shared configuration'),19,weight='700')
    save(lang,'fbc-cable',tr('DVB-C FBC: ein Anschluss, acht Demodulatoren','DVB-C FBC: one feed, eight demodulators'),tr('Kabel-TV an IN, acht QAM-Multiplexe intern; OUT ist nur Durchschleifen.','Cable TV into IN, eight QAM multiplexes internally; OUT is loop-through only.'),body,[
        tr('Den ersten Tuner des Kabelblocks konfigurieren. Die weiteren Demodulatoren übernehmen dies.','Configure the first tuner in the cable block. The other demodulators inherit its settings.'),
        tr('Keine SCR-Nummern und keine SAT-Ebenen. Ein Suchlauf genügt für die gemeinsame Senderliste.','No SCR numbers and no satellite planes. One scan populates the shared channel list.'),
        tr('* Falls vorhanden: OUT schleift HF durch, liefert keinen weiteren Empfangsweg für diese Box.','* If fitted: OUT passes RF through; it does not add another reception path to this receiver.')])
print('Created 12 bilingual FBC SVG diagrams.')
