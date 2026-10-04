# Artboards named in the brief: excerpts for reference

The artboards this brief names live in your own project, the bundle you hand off as
`design_handoff_burnaboystats/`. Edit them there. The files in this folder are
read-only copies, taken on 3 Oct 2026 from the owner's copy of the bundle (design files
dated 30 Sep 2026, after the tour-map response), so that you can check the brief's line
numbers against your version. If your copy differs, yours wins; say where in your design
response.

Each excerpt starts with a comment naming its source file and line range. The line
numbers in the file names are the source file's, not this copy's. Where an excerpt
also needs the screen's data, the script lines follow the markup under their own
`<!-- ... same file, lines N-M -->` comment.

**The figures in these artboards are a snapshot, and an old one.** They show 41 single
shows (27 of them his), "Revenue per show" as the page name and no multi-night runs. The
site now holds more nights, renames the page "Highest-grossing shows" and adds the
Multi-night runs section, and his phone rows now name him (#406). Take every figure from the brief's data section and
`research/`, never from these copies.

## Job 1: Highest-Grossing Artists by Country (`/records/tours/revenue/countries`)

The page has **no design yet**: it was built from the box-office page's parts. These are
the parts it was built from, so the new canvas extends them rather than inventing a
parallel kit.

| This folder | Source (under `design_handoff_burnaboystats/designs/`) | What happens to it |
|---|---|---|
| [`records-revenue-per-show-FULL.dc.html`](records-revenue-per-show-FULL.dc.html) | `desktop/Records - Revenue Per Show.dc.html`, all 251 lines: hero 97–108, artist chips 110–118, the ranked rows + source note + "← Tours" link 120–140, the 41 rows of data from 161 | the parts kit for the new desktop page (hero, chips, ranked rows, the link back); not edited for Job 1 (Job 2 supersedes it) |
| [`mobile-14-revenue-lines-405-453.html`](mobile-14-revenue-lines-405-453.html) | `mobile/Burna Boy Stats - Mobile Deep Pages.dc.html`, screen 14 "Revenue per show" (markup 405–453; data 1331, 1429–1440, 1662–1672) | the parts kit for the new phone page (back bar, hero, two stat tiles, chip rail, stacked rows, source note, gold action bar); not edited for Job 1 (Job 2 redraws it) |
| [`deep-pages-12-more-from-the-road-lines-284-308.html`](deep-pages-12-more-from-the-road-lines-284-308.html) | same file, screen 12 "Tours & live", the "More from the road" links (map, revenue, festivals) | entry point: a way in to the countries page, if you add one; the "Revenue per show" link (293–299) is renamed under Job 2 |
| [`records-tours-highest-grossing-lines-199-230.html`](records-tours-highest-grossing-lines-199-230.html) | `desktop/Records - Tours.dc.html`, the top-10 table and the link card to `/records/tours/revenue` | entry point (as above, desktop); the link card's line 225 says "ranked by reported revenue", reworded under Job 2 |

The brief (§4.8, §10) names the new canvas `designs/desktop/Highest-Grossing Artists by
Country.dc.html`: desktop 1440 and phone 390 on one canvas, both themes.

## Jobs 2 and 3: Highest-grossing shows (full design pass) and certifications phone density

**Job 2** is a full desktop and phone design pass on Highest-grossing shows
(`/records/tours/revenue`); **Job 3** is the certifications phone density pass. The live code
was renamed in #406 (4 Oct); these design files were not, so they still say "Revenue per show".

| This folder | Source (under `design_handoff_burnaboystats/designs/`) | What happens to it |
|---|---|---|
| [`mobile-14-revenue-lines-405-453.html`](mobile-14-revenue-lines-405-453.html) | `mobile/Burna Boy Stats - Mobile Deep Pages.dc.html`, screen 14: top-bar title 411, hero kicker/h1/lede 415–419, source note 446 | **Job 2, edited in place:** redrawn to the new default state of the design on your new canvas (hero, chips, named rows, Multi-night runs, one note, one gold action, the top bar on one line at 320), with a note pointing to the states on `designs/desktop/Highest-Grossing Shows.dc.html` (brief §5.8) |
| [`records-revenue-per-show-FULL.dc.html`](records-revenue-per-show-FULL.dc.html) | `desktop/Records - Revenue Per Show.dc.html`: breadcrumb 93, h1 102, lede 103, source note 137 | **Job 2, superseded** by the new canvas `designs/desktop/Highest-Grossing Shows.dc.html`; the old file stays, with a one-line pointer to the new canvas at its top (brief §5.8). Also the parts kit for Job 1 |
| [`mobile-02-certifications-lines-239-315.html`](mobile-02-certifications-lines-239-315.html) | `mobile/Burna Boy Stats - Mobile.dc.html`, screen 02 "Certifications" (markup 239–315; data 976–996, 1184–1210): top bar 243–250, kicker "Certified worldwide" 253, lede 258, tier chips 275–279 | **Job 3**, edited in place: the switch row ("Featured appearances" on/off, "{home country}: included/left out") placed with the chip rail, the kicker made adaptive ("Certified worldwide" / "Outside Nigeria · Lead credits"), the lede cut to scan |
| [`afrobeats-mobile-artist-lines-40-279.html`](afrobeats-mobile-artist-lines-40-279.html) | `mobile/Afrobeats - Mobile Artist.dc.html`: phone A, home-market shape (Seyi Vibez) 40–177; phone B, global shape (Omah Lay) 179–271; notes 273–279. Top bar 45–51 (title 49), kicker + hero lede 56–63, the home-market card 66–76, tier split 78–117 | **Job 3**, edited in place: the same switch row and adaptive kicker as screen 02, in both shapes (an all-home-market artist and a global one), the lede and notes cut to scan, the top-bar title on one line at 320 |
| [`certifications-hero-filters-lines-97-158.html`](certifications-hero-filters-lines-97-158.html) | `desktop/Certifications.dc.html`: hero and kicker 97–121, summary strip 123–133, filter panel (Tier and Country rows) 135–158 | reference: where the switch row and adaptive kicker sit on desktop today. Desktop is not in Job 3's scope; raise a question rather than edit it |
| [`certifications-sources-lines-218-222.html`](certifications-sources-lines-218-222.html) | `desktop/Certifications.dc.html`, the Sources paragraph at the foot | reference for the long source note (the phone versions are what Job 3 cuts) |
| [`records-tours-highest-grossing-lines-199-230.html`](records-tours-highest-grossing-lines-199-230.html) | `desktop/Records - Tours.dc.html` 199–230 | **Job 2, names only**, edited in place: the link card's title and line ("Every show on the list, ranked by reported revenue") follow the rename and say "gross", as the live page has since #406 |
| [`deep-pages-12-more-from-the-road-lines-284-308.html`](deep-pages-12-more-from-the-road-lines-284-308.html) | Deep Pages screen 12, 284–308 | **Job 2, names only**, edited in place: the "Revenue per show" link (293–299) follows the rename |
| [`records-hub-revenue-lines-144-183.html`](records-hub-revenue-lines-144-183.html) | `desktop/Records.dc.html`, the "Highest revenue per show" section (h2 149, "Full leaderboard" 152) | **Job 2, names only**, edited in place: the section title follows the rename |
| [`mobile-04-records-shows-lines-455-471.html`](mobile-04-records-shows-lines-455-471.html) | `mobile/Burna Boy Stats - Mobile.dc.html`, screen 04 "Records", the "Biggest single shows" teaser linking to `/records/tours/revenue` | **Job 2**, check only: its label and lede ("{hisShows} of the {showCount}…") must agree with the renamed page and the new counts |

## Phone chrome (both jobs; don't redraw it)

| This folder | Source | Use |
|---|---|---|
| [`phone-chrome-tab-bar-lines-227-234.html`](phone-chrome-tab-bar-lines-227-234.html) | `mobile/Burna Boy Stats - Mobile.dc.html` 227–234 (the five-tab bar on screen 01) and 1034–1040 (its tabs); `mobile/Mobile Hero and Theming.dc.html` 128–134 (frame A1, dark) and 201–207 (frame A2, light) | the five-tab bar as drawn, in both themes. The back bar is at the top of each phone excerpt above (screen 14 source lines 409–414, screen 02 lines 243–250, the artist phones 45–51); the gold action bar is screen 14 lines 448–450 and screen 02 lines 307–312. Design around all three |

## Templates

| This folder | Source | Use |
|---|---|---|
| [`templates/design-response-box-office-by-country.md`](templates/design-response-box-office-by-country.md) | written for this brief | the skeleton of `docs-design/design-response-box-office-by-country.md`, the file you write |
| [`templates/PROMPT-BOX-OFFICE-BY-COUNTRY.md`](templates/PROMPT-BOX-OFFICE-BY-COUNTRY.md) | written for this brief | the skeleton of `PROMPT-BOX-OFFICE-BY-COUNTRY.md`, written after the owner approves the change list |
| [`templates/design-response-tour-map-and-phone-screens.md`](templates/design-response-tour-map-and-phone-screens.md) | `docs-design/design-response-tour-map-and-phone-screens.md` | worked example, the closest one: several jobs, desktop and phone, numbered change lists, owner decisions at the top |
| [`templates/design-response-on-this-day.md`](templates/design-response-on-this-day.md) | `docs-design/design-response-on-this-day.md` | worked example: one job, one canvas, slots table, approved change list |
| [`templates/PROMPT-ON-THIS-DAY.md`](templates/PROMPT-ON-THIS-DAY.md) | `PROMPT-ON-THIS-DAY.md` | worked example of the Claude Code prompt: read order, rules, commits, do-nots, verify, follow-ups |
