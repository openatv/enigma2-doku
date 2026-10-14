# Optional browser regression check. Requires Playwright and installed Edge.
from json import dumps
from os import environ
from os.path import join
from pathlib import Path
from playwright.sync_api import sync_playwright


class RemoteBrowserCheck:
	def run(self):
		baseUrl = environ.get("REMOTE_GUIDE_URL", "http://127.0.0.1:4321/enigma2-doku").rstrip("/")
		outputRoot = Path(join(Path(__file__).resolve().parent.parent, ".capture-private"))
		outputRoot.mkdir(exist_ok=True)
		report = []
		with sync_playwright() as playwright:
			browser = playwright.chromium.launch(channel="msedge", headless=True)
			page = browser.new_page(viewport={"width": 1440, "height": 1080})
			errors = []
			page.on("pageerror", lambda error: errors.append(str(error)))
			for lang in ("de", "en"):
				url = f"{baseUrl}/{lang}/bedienung/fernbedienungs-finder/"
				assert page.goto(url, wait_until="networkidle").status == 200
				page.locator("[data-remote-ui]").wait_for(state="visible")
				assert page.locator("[data-key]").count() == 46
				assert page.locator("#remote-screen option").count() == 9
				assert page.locator("[data-remote-picture] img").evaluate("image => image.complete && image.naturalWidth === 142")
				page.locator("#remote-model-search").fill("not-a-supported-box")
				assert not page.locator("[data-remote-workspace]").is_visible()
				page.locator("#remote-model-search").fill("VU+ DUO 4K LITE")
				assert page.locator("[data-remote-workspace]").is_visible()
				for screenId in ("tv", "menu", "channels", "setup", "epg", "movies", "player", "timers", "keyboard"):
					page.locator("#remote-screen").select_option(screenId)
					for key in ("KEY_MENU", "KEY_HELP", "KEY_INFO", "KEY_VIDEO", "KEY_BLUE", "KEY_POWER", "KEY_PLAY", "KEY_TV"):
						page.locator(f'[data-key="{key}"]').click()
						assert page.locator(f'[data-key="{key}"]').get_attribute("aria-pressed") == "true"
						assert f"screen={screenId}" in page.url and f"key={key}" in page.url
					assert page.locator("[data-remote-detail]").inner_text().strip()
					page.set_viewport_size({"width": 390, "height": 844})
					assert page.evaluate("document.documentElement.scrollWidth <= innerWidth + 1")
					page.set_viewport_size({"width": 1440, "height": 1080})
					report.append({"language": lang, "screen": screenId, "overflow": False})
				page.locator("#remote-screen").select_option("tv")
				page.locator("#remote-function-search").fill("Untertitel" if lang == "de" else "subtitle")
				assert page.locator('[data-list-key="KEY_SUBTITLE"]').count() == 1
				page.locator('[data-list-key="KEY_SUBTITLE"]').click()
				assert page.locator('[data-key="KEY_SUBTITLE"]').get_attribute("aria-pressed") == "true"
				page.locator("#remote-function-search").fill("no-such-action-291")
				assert page.locator("[data-list-key]").count() == 0
				page.locator("[data-remote-reset]").click()
				assert page.locator("[data-list-key]").count() == 46
				page.locator('[data-key="KEY_HELP"]').focus()
				page.keyboard.press("Enter")
				assert page.locator('[data-key="KEY_HELP"]').get_attribute("aria-pressed") == "true"
				page.reload(wait_until="networkidle")
				assert page.locator('[data-key="KEY_HELP"]').get_attribute("aria-pressed") == "true"
				# Every position must hit its own accessible button, not a neighbour.
				for key in page.locator("[data-key]").evaluate_all("items => items.map(item => item.dataset.key)"):
					page.locator(f'[data-key="{key}"]').scroll_into_view_if_needed()
					assert page.locator(f'[data-key="{key}"]').evaluate("item => { const r = item.getBoundingClientRect(); return document.elementFromPoint(r.x + r.width / 2, r.y + r.height / 2) === item; }")
				page.locator('[data-key="KEY_HELP"]').click()
				page.locator("[data-remote-ui]").evaluate("item => window.scrollTo(0, item.getBoundingClientRect().top + scrollY - 90)")
				page.screenshot(path=join(outputRoot, f"remote-{lang}-desktop.png"))
				page.set_viewport_size({"width": 390, "height": 844})
				page.locator('[data-key="KEY_INFO"]').click()
				assert page.locator("[data-remote-detail]").evaluate("item => item.getBoundingClientRect().top >= 0")
				page.screenshot(path=join(outputRoot, f"remote-{lang}-mobile.png"))
				page.locator(".remote-reference details").evaluate_all("items => items.forEach(item => item.open = true)")
				assert page.evaluate("document.documentElement.scrollWidth <= innerWidth + 1")
				page.set_viewport_size({"width": 1440, "height": 1080})
				noScript = browser.new_context(java_script_enabled=False)
				staticPage = noScript.new_page()
				assert staticPage.goto(url).status == 200
				assert staticPage.locator("noscript img").is_visible()
				staticPage.locator("#remote-tv summary").click()
				assert staticPage.locator("#remote-tv table").is_visible()
				assert staticPage.locator("#remote-tv table").inner_text().find("HELP") >= 0
				noScript.close()
			assert not errors, errors
			browser.close()
		Path(join(outputRoot, "remote-browser-qa.json")).write_text(dumps(report, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
		print(f"Verified {len(report)} localized screen states, remote hit targets, search, URLs, keyboard, mobile and no-JavaScript fallback.")


if __name__ == "__main__":
	remoteBrowserCheck = RemoteBrowserCheck()
	remoteBrowserCheck.run()
