# GROK_SITE_ALISON_RETURN — leftover-site-alison
Stamp: 2026-09-03T19:16:49Z
Seat: mill Alison five rooms on site to leftover-76-food glass. Live grade Test.
Branch: leftover-site-alison

PASS: Site Alison Food matches leftover-76-food glass shape (day first, Breakfast / Lunch / Dinner / Snacks, Add Food, calendar). OPEN + five rooms stay as they exist: Opening, Home, Food, Journal, Clinic, Yours. Health stays under Yours (Still off on this browser). Not a new product.

## What changed
- Food room is day-first. Date at top. Tap opens month calendar (Prev / Next / Yesterday / Today / Close).
- Each day splits into Breakfast, Lunch, Dinner, Snacks. Each has Add Food.
- Typed custom logs name + 1 Serving. No invented calories or macros on typed food.
- Old flat `meals[]` rows migrate to Snacks on that local day (slot missing → snack).
- Glass copy: “A day first. Breakfast, lunch, dinner, snacks…” English in HTML + `i18n/en.js`. Other catalogs fall back to English for new keys.
- Cache `v=a76`. Sheet `site-1836.css`.
- Plates under `plates/`.

## Files
- `alison.html`, `alison/index.html`, `index.html` — Food room markup
- `site.js` — day / slot paint, calendar, Add Food, migrate
- `site-1836.css` — food day / calendar / slots
- `i18n/en.js` — Food day+slot English keys
- other HTML cache `v=a76`
- `plates/alison-open.png`, `plates/alison-food-day.png`, `plates/alison-food-slots.png`, `plates/alison-food-calendar.png`
- `GROK_SITE_ALISON_RETURN.md`

## Plates
- OPEN paints cover + OPEN.
- Food shows Day + four slots + five-tab bar (Home, Food, Journal, Clinic, Yours).
- Logged Breakfast/Lunch items with 1 Serving.
- Calendar grid opens from Day.
- Public mast/foot: Alison, Pack Run, Support — no Fong.

## Gaps
- Site Food is typed custom only. No Open Food Facts package search / barcode / Health unnamed meals on this browser glass.
- No package macros on site (no invented numbers). Day line stays “No calories… Typed foods keep name and amount only.”
- Home / Journal / Clinic / Yours not remilled beyond Food leftover-76 shape. Home remains Home (not renamed Health). Apple Health stays on Yours.
- Leftover E Pack parks/count left alone. Did not remill Pack.
- Live Pages still `main` until this branch is on Pages. Did not push main.

## Did not
- Did not clone.
- Did not merge or push main.
- Did not Submit.
- Did not POST occupancy.
- Did not add Fong to public nav.
- Did not mill Lori.
- Did not invent a diet-budget product.
- Did not xcodebuild. Did not mill iOS.

Public URLs on this tree (no meta-refresh): `/`, `/alison.html`, `/alison/`, `/pack-run.html`, `/pack.html`, `/pack/`, `/support.html`.
