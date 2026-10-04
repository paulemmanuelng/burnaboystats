# Paste this into Claude Code: the gross pages and certifications phone density

> **Template.** Write this file at `design_handoff_burnaboystats/PROMPT-BOX-OFFICE-BY-COUNTRY.md`
> **only after the owner approves the change list** in your design response. Replace every `{…}` and
> delete this note. The worked example beside it is `PROMPT-ON-THIS-DAY.md`.

Open Claude Code in the `burnaboystats` repo, with `design_handoff_burnaboystats/` at the root. Paste everything below the line.

---

Build the approved design for the two gross pages, Highest-Grossing Artists by Country (`/records/tours/revenue/countries`) and
Highest-grossing shows (`/records/tours/revenue`, renamed in #406; URL unchanged), desktop and phone, and the phone density pass on
`/certifications` and the `/afrobeats/<artist>` certifications sections.
**All {N} items in the change list are approved** by Paul ({date}). Build them, and nothing else.

**Read first, in this order:**
1. `docs/design/box-office-by-country/README.md`: the brief. Its house rules and scope beat your instincts.
2. `design_handoff_burnaboystats/docs-design/design-response-box-office-by-country.md`: the design answer. {§ map.}
3. Open `design_handoff_burnaboystats/designs/desktop/{Highest-Grossing Artists by Country}.dc.html`,
   `…/designs/desktop/{Highest-Grossing Shows}.dc.html` and `…/designs/mobile/{Certifications Phone Density}.dc.html` in a browser.
   - It is a prototype, not code. Read it like a Figma file (`EXTRACTION-GUIDE.md` explains how).
   - Don't port `<x-dc>`, `{{ holes }}` or the data files.
   - Dashed magenta outlines mark slots. They are annotation, not design.

**The rules that organise everything:**
- **Every figure is derived from `app/data/tourRevenue.ts` and the certifications data**, never typed: nights, countries,
  continents, leaders, totals, shares, best nights.
- **Gross ticket sales, never "revenue"** in new copy.
- **Leading = an artist's total reported gross in that country**; the best night is shown alongside.
- **Africa is shown** ("No reported box office yet"), never hidden.
- **Gold marks Burna Boy's own figures and what is live or the action**; the h1's split word is gold, nothing else in the h1.
- **Every row on every board names its artist**, Burna Boy's included, in the same position and format; his rows keep the gold gross.
- **Desktop and phone are separate components.** A change to one is not a change to the other.
- **Dense screens, no accordions.** No list goes behind a toggle.
- **Phone chrome is not redrawn**: the back bar, the five-tab bar and the gold action bars stay as built.

## Commits, in this order (one each; each must pass `npm run verify`)

**1. Job 1, Highest-Grossing Artists by Country: {…}**

**2. Job 2, Highest-grossing shows (the full design pass, desktop and phone; the rename itself shipped in #406): {…}**

**3. Job 3, certifications phone density: {…}**

## Do not
- Rename anything outside the approved list, or change a URL.
- Print a source per row (sources stay in the data).
- Touch link-preview (OG) colours: share cards stay gold for every artist.
- Drop an artist's name from any row: `tests/revenueRowsNameArtist.test.tsx` holds every phone board row to it, and the design names every row on both pages.
- Add a `Co-Authored-By` or "Generated with" line to any commit or PR (the owner's rule).
- Run two heavy steps at once: wrap every `next build`, `vitest` and headless-browser run in `~/.local/bin/heavy` (8 GB Mac).
- {…}

## Verify
- `npm run verify` exits 0 (CI order: typecheck, then plain `vitest run`).
- Dark, light and system themes; 1440, 1240, 1024, 390, 375, 360 and 320 widths.
- Phone top-bar titles fit on one line at 320.
- Every board row names its artist, his included; his gross is gold and no other artist's figure, rank or name is.
- Africa shows "No reported box office yet"; no reader-facing string says "revenue".
- The countries page's counts match a fresh count from `tourRevenue.ts`.
- Text passes 4.5:1 and control edges 3:1 in both themes.

---

## Follow-ups to have ready

**If it types a figure:**
> Derive it from the data. A typed figure goes stale; the brief lists where each one comes from.

**If it writes "revenue" in new copy:**
> "Gross" or "ticket sales". The page names are "Highest-grossing shows" and "Highest-Grossing Artists by Country".

**If it collapses a list behind a toggle:**
> No. Dense screens over accordions is the owner's standing rule; he reverted an accordion pass once.

**{…}**
