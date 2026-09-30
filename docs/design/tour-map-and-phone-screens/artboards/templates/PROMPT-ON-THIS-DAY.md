# Paste this into Claude Code: On This Day

Open Claude Code in the `burnaboystats` repo, with `design_handoff_burnaboystats/` at the root. Paste everything below the line.

---

Build the approved On This Day redesign: the home card, `/on-this-day` (the calendar), `/on-this-day/<day>` (the day pages) and both share images. **All 22 items in the change list are approved** by Paul (26 Sep 2026). Build them, and nothing else.

**Read first, in this order:**
1. `docs/design/on-this-day/README.md`: the brief. Its house rules and scope beat your instincts.
2. `design_handoff_burnaboystats/docs-design/design-response-on-this-day.md`: the design answer. §1 is the kind system, §2 each surface, §3 interaction, §4 the longest real cases, §5 the approved change list. Every value below comes from it.
3. Open `design_handoff_burnaboystats/designs/desktop/On This Day.dc.html` in a browser. Sections A–D show every surface in both themes and at both widths.
   - It is a prototype, not code. Read it like a Figma file (`EXTRACTION-GUIDE.md` explains how).
   - Don't port `<x-dc>`, `{{ holes }}` or `otd-data.js`.
   - Dashed magenta outlines mark slots. They are annotation, not design.

**The rules that organise everything:**
- **Kinds are shape plus word, in ink.** Colour does no work: ■ Release · ▲ Charts · ◆ Streaming · ○ Certification · ★ Awards · ● **Show**.
  - No kind uses gold, cyan, silver, ember or green.
  - "Live" is renamed **"Show"** everywhere: the pill, the legend, the tally and the type union, with a migration.
  - Every mark has its word, or an `aria-label` where only the mark is drawn.
- **Gold marks what is live and what is the action.** That means today's calendar ring, links, the h1's display word, and exactly one gold button per screen. On the day page that button is "Download the card" or "Save or share". The home card adds **no** gold action.
- **No figure is typed.** Counts, spans, "N years ago", "in N days", pager neighbours and tallies are all derived from `events.json` and its rank.

## Commits, in this order (one each; each must pass `npm run verify`)

**1. Kind system.** Replace the kind colour map with a mark map (shape, word, aria label), and rename `live` to `show` in the type and the data. Add a test that fails if any kind resolves to a colour token, and one that fails if the string "Live" appears as a kind label.

**2. Day pages** (`app/on-this-day/[day]/`):
- **Group by year, newest first.** Print each year once (Anton 48 on desktop, 28 on phone) with its count. The lead goes first inside its year.
- **"On the card" tag:** add it to the event the share card uses, wherever it sits (on 11 July it's in the 2025 group).
- **Record lines:** a record sentence prints at 16px in `--text` with a `RECORD` label. Plain details stay at 13.5px in `--text-body`. Decide which is which from the data, not by hand; the response lists the patterns.
- **Rows:** the whole row is one link, with a decorative ↗. Delete "See the record →".
- **Desktop right column:** sticky, with a 280×350 card preview, the gold "Download the card ↓" and a one-line benefit.
- **Phone:** the card block comes after the list, with a 144×180 preview and a gold 48px "Save or share ↓".
- **Pager:** cards showing the neighbour's date, lead headline, year, kind and count.
- **Lede:** the one-event copy reads "One milestone is dated 8 October, from 2021…".

**3. Calendar** (`app/on-this-day/page.tsx`):
- **Hero:** add the Today panel. On an empty day it names the next dated day, its lead and "in N days". On a dated day it shows the count, the span and the lead.
- **One legend and tally strip** replaces the separate tally and legend.
- **Month grids:**
  - Days 1–31, seven columns, **no weekday header**. February always has 29 days.
  - A dated day gets a `--bg-soft` box with a `--line` edge, a 600-weight numeral, its mark bottom-left, and its count top-right when it's more than 1.
  - An undated day is a dim numeral with no box and no link.
  - Today gets a 2px gold ring.
- **Desktop:** each month lists its dated days under the grid (day, mark, lead headline, +N), cross-highlighting with the grid.
- **Phone:**
  - A selected-day panel sits under each month. It defaults to today, else the next dated day in that month, else the month's busiest day.
  - Put a 6×2 month-jump grid of 48px buttons at the top, and "Months ↑" on each month head.
  - The grid is `repeat(7, 44px)` with a 6px gap, dropping to 4px at 375 and 2px at 360.
- **Breakpoints:** 4-up from 1240, 3-up from 901 to 1239.
- **Today's date:** revalidate hourly, like home (`export const revalidate = 3600`), so the ring and the Today panel are server-rendered. Only add the `Intl` London-date script if revalidation can't be used. If so, say why.

**4. Home card** (the component under History made):
- **Title:** the Anton title becomes the **lead headline**, 40px on desktop and 28/32 at ≤1239. The date and countdown move to the kicker: `On this day · coming up in 11 days · 7 October`, or `today, 7 October`.
- **Meta:** `5th anniversary on 7 October` or `5 years ago today`.
- **Right column:**
  - "Also on 7 October": up to 2 rows, lead first then newest, each with its own age.
  - When there are **fewer than two** such rows, add a "Next on the calendar" teaser.
  - A 150×188 card preview with an outlined "The card ↓".
- **Separation:** a 2px `--rule` under the band.
- **Phone:** the same order, with a 96×120 thumbnail, an outlined 44px "Save or share ↓", and full-width 44px link rows.

**5. Share images** (the day `opengraph-image` and the `/card` route, both always dark):
- **Link preview (1200×630):**
  - The lead headline is the hero: Geist caps at 64/56/50px by length, or 54/46 beside a cover.
  - The kicker is `BURNA BOY · ON THIS DAY · 16 AUGUST`, 27px, capped at 780px.
  - Add a 300×300 cover tile when the lead has art.
  - One meta line: `2023 · CERTIFICATION · + 4 MORE ON 16 AUGUST`.
  - The calendar's card keeps four data tiles: DATES · MILESTONES · MONTHS · YEARS.
- **Post card (1080×1350):**
  - **With art:** a 420×420 cover, with the day numeral (280px, gold gradient) and the month (54px, tracked) stacked beside it.
  - **Without art:** the numeral at 360px with the month on its baseline.
  - **Headline:** Geist caps at 74/64/56px beside a cover and 84/72/62px without, balanced, and centred in the space above the rule.
  - **Record line:** 32px.
  - **Foot:** the year at 52px, then kind · "+ N more milestones on this day".
  - **Source:** only when it's a publisher (the body, or "Billboard Boxscore").
  - **Top right:** "ON THIS DAY" at 26px, tracked.
  - **Lockup:** the crown lockup replaces the typed wordmark.
  - **Remove:** the portrait, the watermark and the tone seam.
- **Fonts:** Geist Regular only. Anton and Space Mono appear only in the lockup, which is an image.
- **Art version:** bump the site-wide art version in this commit. The drawing changes but the words don't, so without a bump X and WhatsApp keep the old images.

**6. Data copy:** use curly quotes in "Burna Boy Day". Where the detail repeats the source, print it once. Keep "Xperience" and "Experience" as they are; both are the shows' own names.

## Card flow and images (§3 of the response)
- **"Save or share":** use `navigator.share` with files when it's supported. Otherwise download the PNG. Otherwise open `/card` in a new tab.
- **Previews** are served from `/card?w=560` (WebP, about 40KB), never the 725KB PNG.
  - **Desktop day page:** eager, `fetchpriority="low"`.
  - **Phone day page and home card:** `?w=320`, lazy.
- **Screen readers:** a dated calendar day reads "16 August — 5 milestones: {lead headline}". An undated day reads "26 September — no milestone".

## Do not
- Give any kind a colour, or keep "Live".
- Add a gold action to the home card.
- Put a lead headline or record line only in a tooltip.
- Add a page for an empty day, or relative ages to day pages. Neither is proposed.
- Type a count, date or span.
- Touch History made, the nav, the scoreboard, the theming architecture or the crown mark files.

## Verify
- `npm run verify` exits 0, with the new kind tests green.
- Dark, light and system themes; 1440, 1240, 1024, 390, 375 and 360 widths.
- The phone calendar grid fits at 360.
- The six boards match the artboards: 16 Aug, 8 Oct, 29 Jun, 11 Jul, 28 Apr, 16 Jan.
- Share images at full size, and at 250pt and 130pt: the headline and date read at 250, and the "16" plus the cover separate cards at 130.
- The art version bumped, so the new images appear in X's and WhatsApp's previews.
- Text passes 4.5:1 and control edges 3:1 in both themes.

---

## Follow-ups to have ready

**If it keeps kind colours "as an accent":**
> No. Kinds are shape plus word in ink (§1). Colour collided with gold, the peak bands and the LIVE green. Remove it.

**If it leaves "Live" anywhere:**
> Renamed to "Show" everywhere, including the type, with a migration. "Live" means happening now on this site.

**If it puts a gold button on the home card:**
> The home card's actions are secondaries. "View certifications" stays the screen's one gold action.

**If the calendar gets a weekday header:**
> The calendar has no year, so weekdays are false. Days 1–31 in seven columns, no header.

**If it serves the PNG as the preview:**
> Use `/card?w=560` (or `?w=320`) as WebP. The PNG is 725KB.

**If it forgets the art version bump:**
> Required: the drawing changed and the words didn't, so the previews stay stale without it.

**If it writes a client script for today's ring first:**
> Hourly revalidation first, the same model as home. Only use the script if revalidation is impossible, and say why.
