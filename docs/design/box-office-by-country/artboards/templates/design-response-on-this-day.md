# Design response: On This Day

**Answers:** `docs/design/on-this-day/README.md` (PR #344, 26 Sep 2026).
**Artboards:** `designs/desktop/On This Day.dc.html`, one canvas with four sections:

| Section | What it holds |
|---|---|
| **A · Home card** | 6 states × desktop and phone in dark, plus 2 light boards per layout, each in context |
| **B · Calendar** | Desktop and phone, dark (26 Sep) and light (7 Oct); day states and the legend in both themes; tablet note |
| **C · Day pages** | 16 Aug, 8 Oct, 29 Jun, 11 Jul, 28 Apr and 16 Jan, at 1440 and 390 |
| **D · Share images** | Link previews (16 Aug, 8 Oct, calendar, 28 Apr slots); post cards (16 Aug, 8 Oct, 11 Jul, 28 Apr slots); the thumbnail sheet |

**Supporting files:** components `OTD Home Card`, `OTD Calendar`, `OTD Day Page`, `OTD Post Card` and `OTD Link Preview`, plus `otd-data.js`.

**Every board renders the 228 real events from `research/events.json`.** Counts, spans, "N years ago", "coming up in N days", pager neighbours and tallies are computed, never typed. Dashed magenta marks a slot; it's annotation only (a prop turns it off).

One data limit: the file carries `leadsItsDay` but not the full rank. So inside a year, rows after the lead follow file order. The build uses the real rank.

---

## 1. The kind system (the root fix)

The six kinds are told apart by **shape and word, in ink**. Colour does no work, so nothing collides and nothing borrows another colour's meaning.

| Kind | Mark | Why |
|---|---|---|
| Release | ■ square | A record sleeve |
| Charts | ▲ triangle | A peak |
| Streaming | ◆ diamond | Distinct from the triangle at 8px |
| Certification | ○ ring | A plaque or disc, and the only open mark |
| Awards | ★ star | |
| **Show** (was "Live") | ● small dot | The quietest mark, because shows lead 100 of the 167 days |

**What this fixes:**
- **Collisions:** the orange/gold, identical-grey and cyan collisions all disappear.
- **Borrowed colours:** brand gold, the Top 10 and Top 40 peak bands and the LIVE green are no longer used for kinds.
- **The mostly-green calendar:** it's gone, because shows are the smallest mark.
- **Hover contrast:** it's no longer a risk. Pills are `--text` on a `--line` edge, so they stay above 12:1 in both themes, hover included.
- **"Live":** it stops meaning "happening now". **"Show"** matches the updates feed's word ("Tours") without implying a tour. Needs approval.

Every mark ships with its word, or with an `aria-label` where only the mark is drawn (calendar cells, compact rows).

## 2. Surfaces

### Home card (A)

**Lead with the milestone.** The Anton title is now the **lead headline** in both states; the date moves to the kicker:
- Coming up: `On this day · coming up in 11 days · 7 October`
- Today: `On this day · today, 7 October`

The meta line says `5th anniversary on 7 October` or `5 years ago today`.

**Desktop layout (the 1fr / 2fr grid from History made):**
- **Left column:** kicker, the lead as the title, meta, and detail. A record line prints at 16px in ink; other details print at 15px in body colour. Then two arrow links:
  - `All 2 on 7 October ↗`, or `8 October, every year ↗` for a one-event day
  - `The calendar ↗`
- **Right column:**
  - "Also on 7 October": up to 2 more rows, lead first then newest, each with its own age label, so mixed years are explicit.
  - On a one-event day, a "Next on the calendar" teaser row fills the space.
  - A **150×188 card preview** with an outlined **"The card ↓"**.

**Gold:** no new gold action. "View certifications" stays the screen's one gold action. The card's buttons are secondaries, and its links follow the link rule.

**Separation:** the band gets a 2px `--rule` under it, so it stops reading as a footnote to History made.

**Phone:** the same order. The card preview is a 96×120 thumbnail with an outlined "Save or share ↓" (44px). The two links are full-width 44px rows.

### Calendar (B)

**Hero, top-aligned.** On the left: eyebrow, h1 (with "Day" in the display ramp, as before) and lede. On the right, a **Today panel**:
- **An empty day:** "Nothing is dated 26 September. Next: 7 October, in 11 days", then the next day's lead headline and "Open 7 October ↗".
- **A dated day:** its count, span and lead.

January now starts above the fold.

**One legend and tally strip** replaces the tally at the top and the legend at the bottom (**merge, needs approval**). It shows the mark, word and count, and the rule: "Mark = the day's lead milestone · number = milestones that day · no weekdays: the calendar has no year".

**Month grids:**
- Days 1–31 in seven columns with **no weekday header**. February is always 29 days.
- A **dated** day is a `--bg-soft` box in a `--line` edge, with its numeral at 600 weight, its kind mark bottom-left and **its count top-right when it's more than 1**. So 16 August (5) and 28 April (1) differ at a glance.
- An **undated** day is a dim numeral, with no box and no link.
- **Today** gets a 2px gold ring: today is live data.

**Every lead headline is in the HTML**, with no hover:
- **Desktop:** each month lists its dated days under the grid. Each row shows the day number, the mark, the headline and "+N". Selecting a cell lights its row, and the reverse.
- **Phone:** each month has a selected-day panel under its grid, showing the date, count, span, the lead headline and "Open ↗". It defaults to today, then the next day, then the month's busiest day. A tap updates it. This is a panel, not a fold.

**Phone month navigation:** a 6×2 grid of 48px month buttons at the top (with date counts), and "Months ↑" on each month head. The grid is `repeat(7, 44px)` with a 6px gap, which is 344 of 354px at 390. At 360 the gap drops to 2px, and at 375 to 4px.

### Day pages (C)

**Grouped by year, newest first.** Each year prints **once** (Anton 48 on desktop, 28 on phone) with its count. Inside a year, the lead comes first.

**Rows:**
- **"On the card" tag** on the lead, wherever it sits (on 11 July it's in the 2025 group).
- **Record lines promoted.** Details that carry a record sentence ("First African artist…", "highest-grossing…") print at 16px in ink with a `RECORD` label. Plain details stay at 13.5px in body colour.
- **"See the record →" removed.** The whole row is the link, with one small gold ↗ at the end.

**Desktop layout:**
- A sticky right column: the card preview at a legible 280×350, the gold **"Download the card ↓"** (the page's one gold action), and a benefit line instead of the spec.
- **Pager cards** preview each neighbour: date, lead headline, year and kind, and count. So a sparse day like 28 April still leads somewhere.

**Phone layout:**
- The card block comes after the list: a 144×180 preview, "Tap to see it full size", and a gold **"Save or share ↓"** (48px).
- The pager cards are stacked.
- A one-line source note.

**The lede reads correctly for one event:** "One milestone is dated 8 October, from 2021. It links to…"

### Share images (D)

Both images stay always dark and inside the family: the face gradient, the 2px gold frame, the gold pool or wash, the lockup, and the URL footer with a lowercase path.

**Link preview, 1200×630:**
- **The milestone is the hero:** Geist caps at 64, 56 or 50px, stepped by length (54/46 beside a cover).
- The date moves into the kicker (`BURNA BOY · ON THIS DAY · 16 AUGUST`, capped at 780px).
- **A 300×300 cover tile when the lead has art.**
- One meta line (`2023 · CERTIFICATION · + 4 MORE ON 16 AUGUST`) replaces the three tiles; "Leads with" is gone.
- The calendar card keeps four tiles: DATES · MILESTONES · MONTHS · YEARS (the year span). All are data.

**Post card, 1080×1350:**
- **The date is the identity.** With art: a **420×420 cover** with the day numeral (280px gradient) and the month (54px, tracked) stacked beside it. Without art (105 days): the numeral at 360px with the month set on its baseline, so the card never looks empty. The numeral is what survives in the 130pt grid, and it differs on every card.
- **The milestone is the reading hero:** Geist caps at 74, 64 or 56px beside a cover, and 84, 72 or 62px without, stepped by length and balanced across lines. The hero block is centred in the space above the rule.
- **Record line:** now printed (32px), so "First African artist to sell out…" reaches the card.
- **Foot:** the milestone's **year** (52px) replaces "AS OF 2026-09-25", with the kind and "+ N more milestones on this day" under it.
- **Source:** printed **only when it's a publisher**: the body for certifications, charts, awards and streaming, and "Billboard Boxscore" for grossed shows. A place, tour or label is left off.
- **Removed:** the portrait (it made every card identical), the watermark and the tone seam.
- **Lockup:** the crown lockup replaces the typed wordmark, so the post card and link preview carry the same brand.
- **"ON THIS DAY":** printed large (26px, tracked) at the top right.

**Renderer:** all card text is Geist Regular, with nothing bold. Anton and Space Mono appear only in the lockup, so no new font is needed.

**Thumbnail sheet (D):**
- **250pt:** the headline and date read.
- **130pt:** "16 AUG" and the cover separate cards in a grid.

## 3. Interaction notes

- **Today (home):**
  - The London date is picked once per server render, and the page revalidates hourly, as built.
  - Only earlier years count.
  - The coming-up day count is computed at render from the London date, so it's at most an hour stale.
- **Today (calendar):** the page is static. **Proposal:** an hourly revalidate on `/on-this-day`, the same model as home, so the ring and the Today panel come from the server with no client script and no flicker. The fallback is a small script that reads `Intl` London time and moves the ring.
- **Rows and days:**
  - **Hover:** `--bg-raised`, with the edge going to `--rule`.
  - **Focus:** a 2px gold ring with a 2px offset.
  - **Pressed or selected:** raised, with an ink edge.
  - The whole row is one link; the ↗ is decorative.
- **Calendar keyboard order:** month by month, days in number order.
  - **Desktop:** Enter opens the day page, and focus updates the list highlight.
  - **Phone:** a day is a button; Enter or a tap selects it and updates the month panel, and the panel's "Open ↗" is the link.
- **Phone month navigation:** the 6×2 grid jumps to `#month-<name>`. "Months ↑" returns to it, with a 69px scroll margin for the back bar.
- **Card flow:**
  1. On a phone that can share files, "Save or share ↓" opens the native share sheet (`navigator.share` with files).
  2. Otherwise it downloads the PNG.
  3. Failing both, it opens `/card` in a new tab. This is the stat-card pattern.
- **Card preview images:**
  - Serve `/on-this-day/<day>/card?w=560` (WebP, about 40KB). Never the 725KB PNG.
  - Desktop: 280 CSS px at 2×, **eager** (above the fold, `fetchpriority="low"`).
  - Phone day page: 144px (`?w=320`), lazy.
  - Home card: 150 / 96px (`?w=320`), lazy.
- **In the HTML, not a tooltip:** every lead headline (the desktop month lists, the phone panels and `aria-label`s) and every record line.
- **Screen readers:**
  - A dated calendar day reads "16 August — 5 milestones: “On the Low” was certified Platinum in Sweden".
  - An undated day reads "26 September — no milestone".
- **Reduced motion:** nothing animates. The only transitions are 0.15s background tints, which the site's global rule already cuts.

## 4. Slots (longest real case)

| Slot | Longest case |
|---|---|
| Home title (lead headline) | 70 characters, 3 lines at Anton 32 in the 1fr column |
| Home kicker | "coming up in 11 days · 10 September" (35 characters) |
| Home day link | 26 characters |
| Row headline | 70 characters |
| Row detail | 161 characters (16 January) |
| Calendar Today panel | the next day's lead headline (70 characters) |
| Day h1 | 12 characters ("10 September") |
| Post card label | 69 characters (28 April: 3 lines at 50px) |
| Post card record line | 63 characters |
| Post card source | 44 characters |
| Post card kind line | "Certification · + 4 more milestones on this day" |
| Link-preview headline | 70 characters (3 lines at 50px) |
| Link-preview kicker | 38 characters, capped at 780px |

## 5. Change list: approved by Paul, 26 Sep 2026

1. **Placement:** directly under History made on both layouts, as built. If a Latest Updates block is added to home, the card moves directly under it.
2. **Kind palette:** replaced by ink **shapes plus words**. No kind uses gold, cyan, silver, ember or green.
3. **"Live" renamed "Show"** everywhere: the pill, the legend and the tally.
4. **Gold, decided against the rule:**
   - Row years go to ink.
   - The Certification pill goes to ink.
   - The phone kicker goes to muted.
   - The h1's gold word stays (site pattern).
   - Today's calendar ring is gold (live data).
   - Links are gold.
   - The day page's "Download the card" stays the one gold action. The home card adds no gold action.
5. **Day pages grouped by year**, with the lead first inside its year, plus an **"On the card"** tag.
6. **Home card row order:** the lead first, then the rest newest first, with an age on every row. (It was rank order.)
7. **Home title copy:** the title becomes the lead headline; the date and countdown move to the kicker. "Coming up: 7 October" as a title is retired.
8. **Home card additions:** a card preview with an outlined "The card ↓". On a one-event day, a "Next on the calendar" teaser.
9. **Record lines promoted** on day pages, the home card and the post card.
10. **"See the record →" removed** from day rows; the whole row is the link.
11. **Calendar:**
    - A real 1–31 month grid on the phone.
    - A count on each dated day.
    - A dense list of the month's days under each desktop grid.
    - A selected-day panel on the phone.
    - A Today panel in the hero.
    - The legend and tally merged into one strip.
    - A month jump grid on the phone.
12. **Calendar today marker:** an hourly revalidate on `/on-this-day` (preferred) or a small London-date script.
13. **Tablet:** the calendar is 4-up from **1240** and 3-up from 901 to 1239 (fixes 1240 being 3-up). The home band steps to 28/32 at ≤1239, matching History made.
14. **Day page pager:** now cards showing the neighbour's lead headline, year, kind and count.
15. **Post card:**
    - The milestone becomes the hero, with "16 AUG" as the identity figure.
    - The cover is used when the lead has 640px art.
    - The record line prints.
    - "+ N more" is named.
    - "As of" is replaced by the milestone's full date.
    - The source prints only for a publisher.
    - The portrait, watermark and tone seam are removed.
    - **The crown lockup replaces the typed wordmark.**
16. **Link preview:**
    - The headline becomes the hero.
    - The date moves to the kicker.
    - The cover tile is used when available.
    - One meta line replaces the three tiles, and "Leads with" is removed.
    - The calendar card's tiles become DATES · MILESTONES · MONTHS · YEARS.
17. **Art version bump:** required. The drawing changes but the words don't, so the site-wide art version must bump or X and WhatsApp keep the old images.
18. **No new font on the images** (Geist Regular only).
19. **Relative ages on day pages:** **not proposed.** Day pages stay static and print the year only.
20. **New folds:** none. The phone calendar's month panel shows one day at a time by design; every day is still reachable. Say if you read it as a fold.
21. **New routes:** none. A page for an empty day (26 September) is **not** proposed; the calendar's Today panel covers that case.
22. **Data copy, flagged and not changed:**
    - "Burna Boy Xperience" (Kampala) and "Burna Boy Experience" (Kigali) are both the shows' own names. Keep them.
    - "Burna Boy Day" uses straight quotes. Proposal: curly quotes, to match the rest.
    - On 146 events the detail repeats the source. Proposal: print it once, as the design does.
