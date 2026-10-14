# Import source evidence only; never import or execute receiver modules.
from argparse import ArgumentParser
from ast import ClassDef, FunctionDef, parse, walk
from hashlib import sha256
from json import dumps
from os.path import join
from pathlib import Path
from re import DOTALL, findall, search
from shutil import copyfile, which
from struct import unpack
from subprocess import check_output
from xml.etree.ElementTree import fromstring


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
			"configure.ac", "data/keymap.xml", "lib/driver/rcinput.cpp", "lib/actions/action.cpp",
			"lib/python/Components/ActionMap.py", "lib/python/Components/InputDevice.py", "lib/python/Components/ConfigList.py", "lib/python/Components/Timeshift.py",
			"lib/python/StartEnigma.py", "lib/python/Screens/VolumeControl.py", "lib/python/Screens/InfoBar.py",
			"lib/python/Screens/InfoBarGenerics.py", "lib/python/Screens/ButtonSetup.py", "lib/python/Screens/Menu.py",
			"lib/python/Screens/ChannelSelection.py", "lib/python/Screens/Setup.py", "lib/python/Screens/EpgSelection.py",
			"lib/python/Screens/MovieSelection.py", "lib/python/Screens/Timers.py", "lib/python/Screens/VirtualKeyBoard.py"
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
		result = {"schema": 1, "enigmaRevision": enigmaRevision, "remotesRevision": remotesRevision, "sources": sources, "remoteFiles": remoteFiles, "models": [{"id": "vuduo4klite", "name": "VU+ DUO 4K LITE", "aliases": ["vu duo 4k lite", "duo4klite", "vuduo4klite"], "remote": "vu6", "rcType": "0", "remaps": remaps}], "remotes": {"vu6": {"image": "remotes/vu6.png", "width": width, "height": height, "buttons": buttons}}, "bindings": bindings}
		outputPath = Path(join(self.outputRoot, "data", "remote-reference.json"))
		outputPath.write_text(dumps(result, ensure_ascii=False, indent=2) + "\n", encoding="utf-8", newline="\n")
		assetRoot = Path(join(self.outputRoot, "public", "remotes"))
		assetRoot.mkdir(parents=True, exist_ok=True)
		for source, target in (("png/vu6.png", "vu6.png"), ("xml/vu6.xml", "vu6.xml"), ("LICENSE", "LICENSE.txt")):
			copyfile(join(self.args.remotesRoot, source), join(assetRoot, target))
		print(f"Imported {len(buttons)} buttons, {len(bindings)} generic bindings; Enigma2 {enigmaRevision[:12]}.")


if __name__ == "__main__":
	remoteReferenceImporter = RemoteReferenceImporter()
	remoteReferenceImporter.run()
