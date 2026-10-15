# Import source evidence only; never import or execute receiver modules.
from argparse import ArgumentParser
from ast import ClassDef, FunctionDef, literal_eval, parse, walk
from hashlib import sha256
from json import dumps
from os.path import join
from pathlib import Path
from re import DOTALL, MULTILINE, findall, finditer, search
from shutil import copyfile, which
from struct import unpack
from subprocess import check_output
from xml.etree.ElementTree import fromstring
from xml.sax.saxutils import escape


class RemoteReferenceImporter:
	def __init__(self):
		parser = ArgumentParser(description="Import the reviewed VU+ DUO 4K LITE remote source reference.")
		parser.add_argument("enigmaRoot")
		parser.add_argument("remotesRoot")
		self.args = parser.parse_args()
		self.outputRoot = Path(__file__).resolve().parent.parent
		self.git = which("git")
		if not self.git:
			raise RuntimeError("Git is required to pin and verify the source evidence.")

	def gitOutput(self, root, *arguments):
		return check_output((self.git, "-c", "core.fsmonitor=false", "-C", str(root), *arguments))

	def readSource(self, root, path, revision):
		content = Path(join(root, path)).read_bytes().replace(b"\r\n", b"\n")
		gitContent = self.gitOutput(root, "show", f"{revision}:{path}").replace(b"\r\n", b"\n")
		if content != gitContent:
			raise ValueError(f"Uncommitted source changes: {path}")
		return content

	def run(self):
		enigmaRevision = self.gitOutput(self.args.enigmaRoot, "rev-parse", "HEAD").decode().strip()
		remotesRevision = self.gitOutput(self.args.remotesRoot, "rev-parse", "HEAD").decode().strip()
		paths = (
			"configure.ac", "data/keymap.xml", "data/menu.xml", "data/setup.xml", "po/de.po", "main/enigma.cpp", "lib/driver/rcinput.cpp", "lib/driver/avcontrol.cpp", "lib/actions/action.cpp", "lib/gui/elistbox.cpp",
			"lib/python/Components/ActionMap.py", "lib/python/Components/InputDevice.py", "lib/python/Components/ConfigList.py", "lib/python/Components/Timeshift.py",
			"lib/python/StartEnigma.py", "lib/python/Screens/VolumeControl.py", "lib/python/Screens/InfoBar.py",
			"lib/python/Screens/InfoBarGenerics.py", "lib/python/Screens/ButtonSetup.py", "lib/python/Screens/Menu.py",
			"lib/python/Screens/ChannelSelection.py", "lib/python/Screens/Setup.py", "lib/python/Screens/EpgSelection.py",
			"lib/python/Screens/MovieSelection.py", "lib/python/Screens/Timers.py", "lib/python/Screens/VirtualKeyBoard.py",
			"lib/python/Components/AVSwitch.py", "lib/python/Components/UsageConfig.py", "lib/python/Screens/Screen.py", "lib/python/Screens/Satconfig.py", "lib/python/Screens/ScanSetup.py",
			"lib/python/Screens/ServiceScan.py", "lib/python/Screens/NetworkSetup.py", "lib/python/Screens/NetworkMounts.py", "lib/python/Screens/NetworkServices.py",
			"lib/python/Screens/DeviceManager.py", "lib/python/Screens/PluginBrowser.py", "lib/python/Screens/MessageBox.py", "lib/python/Screens/ChoiceBox.py"
		)
		sources = {}
		for path in paths:
			content = self.readSource(self.args.enigmaRoot, path, enigmaRevision)
			classes = {}
			if path.endswith(".py"):
				for node in walk(parse(content)):
					if isinstance(node, ClassDef):
						classes[node.name] = {"line": node.lineno, "methods": {x.name: x.lineno for x in node.body if isinstance(x, FunctionDef)}}
			sources[path] = {"sha256": sha256(content).hexdigest(), "classes": classes}
			if path.endswith(".cpp"):
				sources[path]["functions"] = {x[1]: content[:x.start()].count(b"\n") + 1 for x in finditer(rb"^\w+ ((?:\w+::)?\w+)\([^\n]*\)\s*\n\{", content, MULTILINE)}
				# JSON keys must be text, while offsets above refer to the original bytes.
				sources[path]["functions"] = {key.decode(): value for key, value in sources[path]["functions"].items()}
		configureText = self.readSource(self.args.enigmaRoot, "configure.ac", enigmaRevision).decode()
		modelBlock = search(r'if test "\$BOXTYPE" == "vuduo4klite"; then(.*?)\nfi', configureText, flags=DOTALL)
		if not modelBlock:
			raise ValueError("Model configure block not found")
		macros = findall(r"AC_DEFINE\((KEY_\w+_TO_KEY_\w+),", modelBlock[1])
		inputText = self.readSource(self.args.enigmaRoot, "lib/driver/rcinput.cpp", enigmaRevision).decode()
		remaps = []
		for macro in macros:
			block = search(rf"#if(?:def| defined\()?\s*{macro}[^\n]*\n(.*?)#endif", inputText, flags=DOTALL)
			if not block:
				raise ValueError(f"Remap block not found: {macro}")
			mapping = search(r"if \(ev->code == (KEY_\w+)\).*?ev->code = (KEY_\w+);", block[1], flags=DOTALL)
			if not mapping:
				raise ValueError(f"Review changed remap implementation: {macro}")
			remaps.append({"macro": macro, "from": mapping[1], "to": mapping[2], "line": inputText[:block.start()].count("\n") + 1})
		remaps.sort(key=lambda x: x["line"])
		remoteFiles = {}
		for path in ("remotes.xml", "xml/vu6.xml", "png/vu6.png", "LICENSE"):
			# Binary files must not be newline-normalised.
			content = self.gitOutput(self.args.remotesRoot, "show", f"{remotesRevision}:{path}")
			localContent = Path(join(self.args.remotesRoot, path)).read_bytes()
			if content != localContent and (path.endswith(".png") or content.replace(b"\r\n", b"\n") != localContent.replace(b"\r\n", b"\n")):
				raise ValueError(f"Uncommitted remote asset: {path}")
			remoteFiles[path] = {"sha256": sha256(content).hexdigest()}
		model = next(x for x in fromstring(Path(join(self.args.remotesRoot, "remotes.xml")).read_bytes()).iter("remote") if x.get("model") == "vuduo4klite")
		if model.get("codeName") != "vu6" or model.get("rcType") != "0":
			raise ValueError("Review changed model-to-remote mapping")
		imageBytes = Path(join(self.args.remotesRoot, "png/vu6.png")).read_bytes()
		width, height = unpack(">II", imageBytes[16:24])
		buttons = []
		for button in fromstring(Path(join(self.args.remotesRoot, "xml/vu6.xml")).read_bytes()).iter("button"):
			physicalKey = button.get("id")
			buttons.append({"id": physicalKey, "xmlLabel": button.get("label"), "position": [int(x) for x in button.get("pos").split(",")]})
		bindings = []
		for context in fromstring(self.readSource(self.args.enigmaRoot, "data/keymap.xml", enigmaRevision)).findall("map"):
			# Only generic remote bindings: device-specific keyboard maps are not merged.
			for key in context.findall("key"):
				action = key.get("mapto") or key.get("mapTo")
				if action:
					bindings.append({"context": context.get("context"), "key": key.get("id"), "action": action, "flags": key.get("flags")})
		avText = self.readSource(self.args.enigmaRoot, "lib/driver/avcontrol.cpp", enigmaRevision).decode()
		for expected in ('key == KEY_0', 'flags == eRCKey::flagLong', 'm_osdHidePaused = !m_osdHidePaused;', 'm_osdReplayZero = true;'):
			if expected not in avText:
				raise ValueError("Review changed native OSD zero-key handler")
		bindings.append({"context": "NativeOSD", "key": "KEY_0", "action": "toggleAutoHidePause", "flags": "l", "origin": "native", "source": "lib/driver/avcontrol.cpp", "symbol": "eAVControl::handleOSDKey"})
		menu = self.readMenu(enigmaRevision)
		result = {"schema": 2, "enigmaRevision": enigmaRevision, "remotesRevision": remotesRevision, "sources": sources, "remoteFiles": remoteFiles, "models": [{"id": "vuduo4klite", "name": "VU+ DUO 4K LITE", "aliases": ["vu duo 4k lite", "duo4klite", "vuduo4klite"], "remote": "vu6", "rcType": "0", "remaps": remaps}], "remotes": {"vu6": {"image": "remotes/vu6.png", "width": width, "height": height, "buttons": buttons}}, "bindings": bindings, "menu": menu}
		outputPath = Path(join(self.outputRoot, "data", "remote-reference.json"))
		outputPath.write_text(dumps(result, ensure_ascii=False, indent=2) + "\n", encoding="utf-8", newline="\n")
		assetRoot = Path(join(self.outputRoot, "public", "remotes"))
		assetRoot.mkdir(parents=True, exist_ok=True)
		for source, target in (("png/vu6.png", "vu6.png"), ("xml/vu6.xml", "vu6.xml"), ("LICENSE", "LICENSE.txt")):
			copyfile(join(self.args.remotesRoot, source), join(assetRoot, target))
		print(f"Imported {len(buttons)} buttons, {len(bindings) - 1} keymap bindings, 1 native binding, {len(menu)} menu entries; Enigma2 {enigmaRevision[:12]}.")

	def readMenu(self, revision):
		translations = {}
		poText = self.readSource(self.args.enigmaRoot, "po/de.po", revision).decode()
		for block in poText.split("\n\n"):
			fields = {}
			field = None
			for line in block.splitlines():
				if line.startswith(("msgid ", "msgstr ")):
					field, value = line.split(" ", 1)
					fields[field] = literal_eval(value)
				elif line.startswith('"') and field:
					fields[field] += literal_eval(line)
				elif line.startswith("msg"):
					field = None
			if fields.get("msgid") and fields.get("msgstr"):
				translations[fields["msgid"]] = fields["msgstr"]
		menuText = self.readSource(self.args.enigmaRoot, "data/menu.xml", revision).decode()
		entries = []

		def visit(element, path, ancestors):
			if element.tag not in ("menu", "item"):
				return
			key = element.get("key")
			label = element.get("text", "")
			path = [*path, {"en": label, "de": translations.get(label, label)}]
			ancestry = [*ancestors, key]
			setup = element.find("setup")
			screen = element.find("screen")
			kind = "menu" if element.tag == "menu" else "setup" if setup is not None else "screen" if screen is not None else "code"
			line = next(index + 1 for index, text in enumerate(menuText.splitlines()) if f'key="{key}"' in text and f'text="{escape(label)}"' in text)
			entries.append({"id": "/".join(ancestry), "key": key, "kind": kind, "path": path, "line": line, "level": element.get("level", "0"), "requires": element.get("requires"), "conditional": element.get("conditional"), "setup": setup.get("setupKey") if setup is not None else None, "module": screen.get("module") if screen is not None else None, "className": screen.get("screen", screen.get("module")) if screen is not None else None})
			for child in element:
				visit(child, path, ancestry)

		visit(fromstring(menuText).find("menu"), [], [])
		return entries


if __name__ == "__main__":
	remoteReferenceImporter = RemoteReferenceImporter()
	remoteReferenceImporter.run()
