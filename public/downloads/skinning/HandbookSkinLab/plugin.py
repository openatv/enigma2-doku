"""OpenATV handbook examples: isolated screens and opt-in native OSD capture.

SPDX-License-Identifier: GPL-3.0-only
No settings, channels, tuners, network, storage or active skin are changed.
"""
from hashlib import sha256
import json
from pathlib import Path
import subprocess
import time

from enigma import eTimer, getDesktop, getEnigmaVersionString
from Components.ActionMap import ActionMap
from Components.Label import Label
from Components.Sources.Source import Source
from Components.Sources.StaticText import StaticText
from Components.config import config
from Plugins.Plugin import PluginDescriptor
from Screens.Screen import Screen

HERE = Path(__file__).parent
ROOT = Path('/tmp/handbook-skin-lab')
SCENES = ('hello', 'coordinates', 'alignment', 'wrapping', 'fonts', 'colors',
          'layers', 'pixmaps', 'panels', 'data', 'borders', 'progress')


class ExampleDuration(Source):
    """Fixed input for ClockToText; seconds, independent of channel and clock."""
    time = 3661


class HandbookSkinExample(Screen):
    def __init__(self, session, scene='hello'):
        if scene not in SCENES:
            raise ValueError('Unknown handbook example')
        self.skin = (HERE / 'screens' / (scene + '.xml')).read_text()
        Screen.__init__(self, session)
        self.skinName = 'HandbookSkinLab_' + scene
        self.skin_path = str(HERE) + '/'
        self.scene = scene
        if scene == 'hello':
            self['greeting'] = Label('Hello from Python')
        if scene == 'data':
            self['message'] = StaticText('One source, two renderers')
            self['duration'] = ExampleDuration()
        self['actions'] = ActionMap(['OkCancelActions', 'DirectionActions'], {
            'cancel': self.close, 'ok': self.close,
            'left': lambda: self.close(-1), 'right': lambda: self.close(1),
        }, -1)


def browse(session, index=0):
    def closed(direction=None):
        if direction in (-1, 1):
            browse(session, (index + direction) % len(SCENES))
    session.openWithCallback(closed, HandbookSkinExample, SCENES[index])


class CaptureService:
    """A local, explicit allowlist; requests contain scene IDs, never Python."""
    def __init__(self, session):
        self.session = session
        self.timer = eTimer()
        self.timer.callback.append(self.tick)
        self.state = 'idle'
        self.screen = None
        self.process = None
        self.report = None
        ROOT.mkdir(mode=0o700, exist_ok=True)
        self.timer.start(500)

    def write(self, name, value):
        target = ROOT / name
        temporary = target.with_suffix('.tmp')
        temporary.write_text(json.dumps(value, indent=2))
        temporary.replace(target)

    def safe_base(self):
        return self.session.in_exec and self.session.current_dialog.__class__.__name__ in ('InfoBar', 'PluginBrowser')

    def tick(self):
        try:
            self.step()
        except Exception as error:
            if self.process is not None and self.process.poll() is None:
                self.process.kill()
                self.process.wait()
            self.process = None
            if self.report is None:
                self.report = {}
            self.report.update(status='failed', error=str(error))
            self.write('manifest.json', self.report)
            self.state = 'idle'
            if self.screen is not None and self.session.current_dialog is self.screen and self.session.in_exec:
                self.screen.close()
            self.screen = None

    def step(self):
        if self.state == 'idle':
            self.write('service.json', dict(ready=self.safe_base(), locale=config.misc.locale.value,
                                            enigma=getEnigmaVersionString()))
            request = ROOT / 'request.json'
            if not request.exists():
                return
            data = json.loads(request.read_text())
            request.unlink()
            if not self.safe_base():
                raise RuntimeError('Close other dialogs before starting the example capture')
            scenes = data.get('scenes')
            if not isinstance(scenes, list) or not scenes or len(scenes) != len(set(scenes)) or any(s not in SCENES for s in scenes):
                raise ValueError('Expected a nonempty list of unique known scene IDs')
            if not config.misc.locale.value.startswith('en_'):
                raise ValueError('English receiver locale required')
            import skin
            self.report = dict(schema=1, status='running', locale=config.misc.locale.value,
                               enigma=getEnigmaVersionString(), skin=config.skin.primary_skin.value,
                               desktop=[getDesktop(0).size().width(), getDesktop(0).size().height()],
                               attributes=[n for n in dir(skin.AttributeParser) if not n.startswith('_')],
                               captures=[])
            self.queue = list(scenes)
            self.base = self.session.current_dialog
            self.depth = len(self.session.dialog_stack)
            self.state = 'open'
        elif self.state == 'open':
            if self.session.current_dialog is not self.base or not self.session.in_exec or len(self.session.dialog_stack) != self.depth:
                raise RuntimeError('Session changed; capture stopped')
            if not self.queue:
                self.report['status'] = 'complete'
                self.write('manifest.json', self.report)
                self.state = 'idle'
                return
            self.scene = self.queue.pop(0)
            self.screen = self.session.openWithCallback(self.closed, HandbookSkinExample, self.scene)
            self.deadline = time.monotonic() + 2
            self.state = 'render'
        elif self.state == 'render' and time.monotonic() >= self.deadline:
            self.check_screen()
            self.target = ROOT / (self.scene + '.png')
            self.process = subprocess.Popen(['/usr/bin/grab', '-o', '-d', '-p', str(self.target)], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
            self.deadline = time.monotonic() + 20
            self.state = 'capture'
        elif self.state == 'capture':
            if self.process.poll() is None:
                if time.monotonic() > self.deadline:
                    raise RuntimeError('Native grab timed out')
                return
            if self.process.returncode:
                raise RuntimeError('Native grab failed')
            self.process = None
            self.check_screen()
            png = self.target.read_bytes()
            xml = (HERE / 'screens' / (self.scene + '.xml')).read_bytes()
            if png[:8] != b'\x89PNG\r\n\x1a\n':
                raise ValueError('Expected a native PNG')
            self.report['captures'].append(dict(id=self.scene, file=self.target.name,
                sha256=sha256(png).hexdigest(), xml_sha256=sha256(xml).hexdigest(),
                width=int.from_bytes(png[16:20], 'big'), height=int.from_bytes(png[20:24], 'big'),
                captured_at=time.strftime('%Y-%m-%dT%H:%M:%SZ', time.gmtime())))
            self.write('manifest.json', self.report)
            self.state = 'closing'
            self.screen.close()

    def check_screen(self):
        if self.session.current_dialog is not self.screen or not self.session.in_exec or not self.screen.execing:
            raise RuntimeError('Example screen is no longer active')

    def closed(self, *args):
        self.screen = None
        if self.state == 'closing':
            self.state = 'open'
        elif self.state != 'idle':
            self.report.update(status='failed', error='Example closed before capture finished')
            self.write('manifest.json', self.report)
            self.state = 'idle'


service = None


def session_start(reason, session=None, **kwargs):
    global service
    if reason == 0 and session is not None:
        service = CaptureService(session)


def Plugins(**kwargs):
    return [PluginDescriptor(name='Handbook Skin Lab', description='OpenATV skinning foundations: left/right to browse, EXIT to close',
                             where=PluginDescriptor.WHERE_PLUGINMENU, fnc=browse),
            PluginDescriptor(where=PluginDescriptor.WHERE_SESSIONSTART, fnc=session_start)]
