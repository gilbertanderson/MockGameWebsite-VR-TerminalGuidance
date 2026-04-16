import asyncio
from playwright.async_api import async_playwright

urls = [
    ("home", "https://terminalguidance.figma.site/"),
    ("features", "https://terminalguidance.figma.site/features"),
    ("gallery", "https://terminalguidance.figma.site/gallery"),
    ("roadmap", "https://terminalguidance.figma.site/roadmap"),
    ("requirements", "https://terminalguidance.figma.site/requirements"),
    ("demo", "https://terminalguidance.figma.site/demo"),
    ("community", "https://terminalguidance.figma.site/community"),
    ("faq", "https://terminalguidance.figma.site/faq"),
    ("contact", "https://terminalguidance.figma.site/contact"),
    ("pricing", "https://terminalguidance.figma.site/pricing"),
]

async def scroll_page(page):
    """Scroll down gradually to trigger lazy-loaded assets, then back to top."""
    total_height = await page.evaluate("document.body.scrollHeight")
    viewport_height = 900
    position = 0
    while position < total_height:
        await page.evaluate(f"window.scrollTo(0, {position})")
        await page.wait_for_timeout(300)
        position += viewport_height
        total_height = await page.evaluate("document.body.scrollHeight")
    await page.evaluate("window.scrollTo(0, 0)")
    await page.wait_for_timeout(1000)

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page(viewport={"width": 1440, "height": 900})
        page.set_default_timeout(60000)

        for name, url in urls:
            print(f"→ Loading {name}...")
            try:
                await page.goto(url, wait_until="load", timeout=60000)
                await page.wait_for_timeout(3000)   # let JS settle
                await scroll_page(page)              # trigger lazy assets
                await page.wait_for_timeout(2000)   # let images finish loading
                await page.screenshot(
                    path=f"screenshot_{name}.png",
                    full_page=True,
                    timeout=60000
                )
                print(f"  ✓ screenshot_{name}.png saved")
            except Exception as e:
                print(f"  ✗ Failed: {e}")

        await browser.close()

asyncio.run(main())