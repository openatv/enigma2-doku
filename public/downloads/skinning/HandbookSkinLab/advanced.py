"""Native advanced examples, with fixture data and no receiver configuration writes.

SPDX-License-Identifier: GPL-3.0-only
"""
from copy import deepcopy
from pathlib import Path
from time import time
from types import MethodType
from xml.etree.ElementTree import fromstring

from enigma import eServiceReference
from Components.Pixmap import MultiPixmap
from Components.ServiceList import ServiceList, ServiceListLegacy
from Components.Sources.Boolean import Boolean
from Components.Sources.Source import Source
from Components.Sources.StaticText import StaticText
from Components.config import config
from skin import componentTemplates, domScreens

HERE = Path(__file__).parent


class ExampleEvent:
    """Only the event methods used by this example's native converters."""
    def getEventName(self):
        return 'A journey through skinning'

    def getShortDescription(self):
        return 'Fixed example data / native EventInfo converters'

    def getDuration(self):
        return 3600

    def getBeginTime(self):
        return int(time()) - 1800


class EventSource(Source):
    event = ExampleEvent()


class SignalSource(Source):
    """The FrontendStatus interface, without accessing an RF frontend."""
    snr = 49152
    snr_db = 1320
    agc = 45876
    ber = 0
    lock = True


class UnavailableSignal(Source):
    snr = snr_db = agc = ber = lock = None


class ExampleServiceInfo:
    def __init__(self, native_info):
        self.native_info = native_info

    def getName(self, ref):
        return self.native_info.getName(ref)

    def isPlayable(self, ref, previous):
        return 1  # Explicit fixture state, not an RF availability test.

    def isCrypted(self):
        return False


class ExampleServiceCenter:
    def __init__(self, native_center):
        self.native_center = native_center

    def info(self, ref):
        return ExampleServiceInfo(self.native_center.info(ref))


class ExampleLegacyList(ServiceListLegacy):
    def setItemsPerPage(self):
        # Fixed teaching geometry, independent of the owner's saved row count.
        self.ItemHeight = 60
        self.l.setItemHeight(60)


class ExampleServiceList(ServiceList):
    """Use the real modern parser/builder with a private temporary template.

    Do not change config.channelSelection.widgetStyle or its choices. The
    registry is restored synchronously before the GUI event loop resumes.
    """
    def __init__(self, screen, template):
        self.example_template = template
        super().__init__(screen)
        self.service_center = ExampleServiceCenter(self.service_center)

    def readTemplate(self, ignored_name):
        template = deepcopy(self.example_template)
        name = template.get('name')
        original = componentTemplates.templates
        temporary = {key: value.copy() for key, value in original.items()}
        temporary.setdefault('serviceList', {})[name] = template
        componentTemplates.templates = temporary
        try:
            super().readTemplate(name)
        finally:
            componentTemplates.templates = original

    def destroy(self):
        # The lab creates short-lived lists. Release the native component's
        # external callbacks as well as its widgets when an example closes.
        self.reloadTimer.stop()
        self.reloadTimer.callback.remove(self.doReload)
        config.channelSelection.showTimers.removeNotifier(self.getRecordingList)
        if self.session and self.onTimerEntryStateChange in self.session.nav.RecordTimer.on_state_change:
            self.session.nav.RecordTimer.on_state_change.remove(self.onTimerEntryStateChange)
        super().destroy()


def populate(screen):
    component = screen['list']
    # An in-memory list. These entries are never saved, tuned or added to lamedb.
    component.setMode(component.MODE_OTHER)
    for index, name in enumerate(('Atlas HD', 'Coast Television', 'Discovery Lab', 'Evening Arts', 'Field Notes', 'Garden Radio')):
        ref = eServiceReference('1:0:1:%X:0:0:0:0:0:0:' % (0x7000 + index))
        ref.setName(name)
        component.addService(ref)
    component.fillFinished()
    component.goTop()


def refresh_sources(screen):
    for value in screen.values():
        if isinstance(value, Source):
            value.changed((value.CHANGED_ALL,))


def configure(screen, scene):
    if scene == 'infobar':
        screen['demoService'] = StaticText('101  /  OpenATV Lab')
        screen['demoEvent'] = EventSource()
        screen['demoNext'] = StaticText('Next: From widgets to reusable layouts')
        screen['demoSignal'] = SignalSource()
        screen['demoRecording'] = Boolean(fixed=True)
    elif scene == 'signals':
        screen['available'] = SignalSource()
        screen['unavailable'] = UnavailableSignal()
    elif scene in ('service-legacy', 'service-rows', 'service-grid'):
        if scene == 'service-legacy':
            screen['list'] = ExampleLegacyList(screen)
        else:
            template = fromstring(screen.skin).find('.//template')
            screen['list'] = ExampleServiceList(screen, template)
        screen.onLayoutFinish.append(MethodType(populate, screen))
    elif scene in ('panel-list', 'panel-detail'):
        # Named panels share the owning screen's component namespace. Register
        # only our own names; restore any previous entry when the screen closes.
        panels = fromstring((HERE / 'panels.xml').read_text())
        previous = {}
        for panel in panels:
            name = panel.get('name')
            previous[name] = domScreens.get(name)
            domScreens[name] = (panel, str(HERE) + '/')

        def restore_panels():
            for name, old in previous.items():
                if old is None:
                    domScreens.pop(name, None)
                else:
                    domScreens[name] = old
        screen.onClose.append(restore_panels)
        screen['pageTitle'] = StaticText('Library' if scene == 'panel-list' else 'Programme details')
        screen['keyHint'] = StaticText('OK: open  /  EXIT: close' if scene == 'panel-list' else 'GREEN: record  /  EXIT: back')
    elif scene == 'icon-states':
        for name in ('state0', 'state1', 'state2'):
            screen[name] = MultiPixmap()
        def set_states(screen):
            for index, name in enumerate(('state0', 'state1', 'state2')):
                screen[name].setPixmapNum(index)
        screen.onLayoutFinish.append(MethodType(set_states, screen))
    if scene in ('infobar', 'signals'):
        screen.onLayoutFinish.append(MethodType(refresh_sources, screen))
