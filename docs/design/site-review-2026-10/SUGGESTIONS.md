# burnaboystats.com: an outside designer's review, with suggestions

**Date:** 8 October 2026. **Site:** the live site, as deployed on 8 Oct (code at `e4b0afc8`).
**What was looked at:** about 56 pages plus the parts every page shares (the top bar, the phone menu, the search box, the footer and the phone tab bar). Each page was checked on a phone (390 wide), a laptop (1440 wide) and the tablet size in between (1024 wide), in light and dark. Every claim below was measured on the live pages: sizes, spacing, colour contrast, line lengths, button sizes and how far down the key content sits. The screenshots are in `shots/`, and the full notes, with the evidence for each point, are in `research/`.
**How it was judged:** as a product, not a checklist. It was looked at the way three people use it: a fan on a phone, a journalist checking a figure, and someone arriving from a Google search. The standard is the best data journalism sites (the FT, The Pudding, Bloomberg).

Every one of your rulings was respected. Where a suggestion comes close to one, it sits in the last section, "Rulings worth a second look", with the evidence.

---

## The verdict in five lines

1. **The site is in genuinely good shape.** Text passes the readability standard in both themes almost everywhere (the two small exceptions are in quick win 13; some gold text also gets too faint when you hover over a row in light mode, which the rule sheet in design job 5 settles). Nothing jumps while a page loads, no page scrolls sideways, and pages load fast.
2. **Your real edge, every number sourced and dated, shows well on a laptop but mostly disappears on phones.** That is where fans read and take their screenshots.
3. **Several important pages don't answer their own question on a phone's first screen**: Burna Boy vs Wizkid, the Dai Dai story, and every board artist's page.
4. **Long pages and long lists are hard to get around.** On a laptop, a song's single certification often sits about 1,050 pixels away from its title. Gold is used so often for decoration that it stops pointing at Burna Boy.
5. **Of the 180 issues found, about 70 are plain code or wording fixes Claude Code can make now.** The rest group into seven design jobs for Claude Design; the handoff is `README.md` in this folder.

---

## Keep: what is genuinely strong

- **Sources and dates are part of the page.** Three examples:
  - The laptop home page shows "Sources RIAA · BPI · SNEP · IFPI | Verified 7 Oct 2026" above the fold.
  - The methodology page has a "Claims checked and not published" section. Most newsrooms have nothing this honest.
  - The box-office pages show Africa as "No reported box office yet" instead of hiding it.
- **The basics are clean.**
  - Text passes the readability standard in both themes on nearly every page; the two exceptions are quick win 13.
  - Zero layout jumps on every page load.
  - A visible keyboard focus ring everywhere.
  - Fast first paint: the text shows in well under half a second in testing.
- **The compare pages are the most original thing on the site.** Pricing every plaque at its own country's threshold, and saying which registers were read and when, is something no chart site offers. The country leaderboards (for example `/compare/in/united-states`) are the best template on the site.
- **Africa's Biggest is honest.** Burna Boy's row is highlighted wherever it falls, and some boards say plainly that he doesn't lead them.
- **The phone screens are real phone designs, not shrunk laptop pages.** The back bars show live counts, the menu rows carry counts, and the On This Day calendar has no button too small to tap.
- **On This Day is original and shareable.**
- **The Dai Dai story reads as a story**, and the Spanish edition is a true parallel, not a stub.
- **The box-office pages ("Highest-grossing shows" and "by country") are the best data pages on the site**, and their share cards are the best previews.
- **Some art direction is excellent:**
  - the car pages;
  - the board's photo wall in dark mode;
  - Ayra Starr's purple, which is restrained and passes the readability standard in both themes.

---

## How to read the effort labels

- **Small:** one short Claude Code session. No design needed.
- **Medium:** a Claude Design round, then about a day of building.
- **Large:** several sessions.

The improvements below are ranked within each group by how much they help for the effort they take.

Every number in a new design is filled in from your data when the page is built, never typed in. The figures quoted below are today's values, given as examples.

---

## 1. Quick wins: Claude Code can fix these now, no design needed (15)

1. **Stop announced shows from going out of date** (T-02)
   - *Why:* from 26 October the Tours page will still list the 25 Oct Stade de France NFL show as "Announced · not yet played". Nothing checks dates against today. For a site whose value is being right, this is the most likely embarrassment in the next month.
   - *Do:* once its date passes, move a show to "Played · awaiting a box-office report" (or drop it). Add a test that fails when an announced date is in the past.
   - *Effort:* Small.

2. **Make the home page's album covers open the album's own page** (SH-02)
   - *Why:* all 16 album links on the home page (8 on a laptop, 8 on a phone) go to `/music`, not to the album. Fans land on the wrong page.
   - *Why it matters for Google too:* those links are the album pages' strongest way in. Five album pages are currently "Discovered, not indexed" in Search Console.
   - *Do:* link each cover to its album page.
   - *Effort:* Small.

3. **Phone methodology page: keep its back button and menu all the way down** (C-01)
   - *Why:* the bar with the back button and menu scrolls away after the first 27% of this 18,674-pixel page, leaving no way out but scrolling back up.
   - The five sections added for phones on 5 Oct also use the small laptop text size (13.5 pixels instead of 16).
   - *Do:* put those sections inside the phone screen, using the phone text size.
   - *Effort:* Small.

4. **Dai Dai's "by the numbers" never shows a zero** (MU-02)
   - *Why:* the count-up animation sets each figure to 0 until you scroll to it. A full-page phone screenshot, a printout or a translation tool therefore shows "0 certifications". Fans share screenshots of exactly that section.
   - *Do:* keep the real number in the page and animate over it. Print shows final values.
   - *Effort:* Small.

5. **Link the free data from the pages it describes** (CC-07, T-11)
   - *Why:* journalists are a key audience, and the CSV downloads exist. But `/certifications`, `/records/charts` and the tours pages never link to them; the only links are at the very foot of the page (about 15,000 pixels down) and are hidden on phones.
   - *Do:* add one line to each page's source note: "Download CSV ↓ · JSON · CC BY 4.0 · cite as burnaboystats.com". The tours pages need a `tours.csv` to match.
   - *Effort:* Small.

6. **Make list rows link to the pages that already exist** (CC-09, R-12, T-13, T-20, MU-27)
   - *Why:* readers hit dead ends.
     - `/records/charts` has zero links to song or album pages, though at least 9 charted songs and all 6 charted albums have one.
     - The 23 country rows on a compare page don't link to that country's leaderboard.
     - Artist names link on one of the 20 Africa's Biggest boards only.
     - A tour-map country card drops you at the top of the Tours page with every tour closed.
   - *Do:* link titles, countries and names wherever a page exists, and make the map card open the Tours page at that country's shows.
   - *Effort:* Small.

7. **Make the small phone buttons big enough to tap** (MU-05, C-02, CC-14, B-19)
   - *Why:* your own accessibility statement promises 44-pixel tap areas, and these miss it:
     - FAQ questions on song, album and Dai Dai pages: the tappable part is 26 pixels tall;
     - the 30 certifying-body links on phone methodology: 26 pixels;
     - the "+4" and "+13" pills: 28–30 pixels.
   - *Do:* enlarge the tap area. What readers see stays the same.
   - *Effort:* Small.

8. **Keep reading lines to the width you set (about 62 characters)** (MU-06, B-14, C-08, R-26, T-09, CC-12)
   - *Why:* long lines are tiring and hard to follow back. On laptops, many notes run far past that width:
     - song blurbs: 95 characters;
     - FAQ answers: 72–108;
     - tours notes: 134–182;
     - the Dai Dai map footnote: 184;
     - one gold sentence on `/certifications`: 178.
   - *Do:* cap them at the reading width.
   - *Effort:* Small.

9. **Fix the uneven word gaps on link previews** (C-03)
   - *Why:* the plain preview design, used by 33 pages, prints double gaps such as "Verified␣␣figures" on `/press` and "unverified␣␣claims" on `/methodology`. The same bug was fixed on stat cards on 6 Oct, but not on these previews.
   - *Do:* apply the same font fix and bump the preview version so X and WhatsApp fetch the new image.
   - *Effort:* Small.

10. **Three slips on the home page** (SH-01, SH-04, SH-07)
    - *What they are:*
      - "career streams11.15B" is missing its space, at the top of every laptop view.
      - When no chart changed, a lone green dot sits on the phone home with nothing beside it.
      - The footer site map has no link to Compare or the Press kit.
    - *Effort:* Small.

11. **Fix the tablet-size layouts** (SH-03, CC-23, R-14, R-10, C-22, MU-18)
    - *Why:* on screens 901–1239 pixels wide:
      - the menu panel stops 76 pixels short and cuts its last row in half;
      - four stat strips leave one figure alone on a second row;
      - the Records cards and Africa's Biggest boards drop to a single very wide column.
    - *Effort:* Small.

12. **Apply colour decisions you have already made** (B-13, T-06, T-07, MU-18, T-15, B-18)
    - Each of these goes against a decision already taken:
      - Artist pages end with two gold buttons in one row.
      - Phone tour dates print venue capacity in the colour that means "Top 10" elsewhere.
      - "Record" is a gold pill on the phone and a green outline on the laptop.
      - "At No. 1" is green in one place and gold in another on Live Charts.
      - The tour-map view buttons don't use your 5 Oct selected-chip style.
    - Ayra Starr's phone Compare bar is gold while her laptop buttons are purple. This one needs your OK.
    - *Effort:* Small.

13. **Readability slips that fail the standard** (R-08, MU-28, B-09, CC-11)
    - *What they are:*
      - The small rank numbers inside the year chips on Africa's Biggest (light mode), 26 of them.
      - The "no change" dash on Live Charts, at 2.1 : 1 contrast (the standard asks for 4.5 : 1 for text).
      - The keyboard focus ring on board photo tiles: it looks exactly like Burna Boy's "this site" frame, and in light mode it is nearly invisible (1.6 : 1).
      - Four bits of text at 9–10.5 pixels, below your 11-pixel floor.
    - *Effort:* Small.

14. **The stat-card maker loads 1.6 MB of images** (C-05)
    - *Why:* the preview loads the full 1080-pixel download file (831 KB on a phone), and each tap loads another. Every other content page loads 0 KB of images, so this page is the slowest.
    - *Do:* show a small preview and keep the full file for the download.
    - *Effort:* Small.

15. **A sweep of small leftovers** (R-06, R-07, R-09, R-22, B-16, B-17, B-20, C-15, C-16, C-19, C-20, MU-07, MU-14, MU-22, MU-30, MU-31, CC-15, CC-22, and the code part of B-01)
    - Labels sitting at the top of their pills.
    - FAQ cards with no inner padding.
    - A pill that wraps "IN / PROGRESS".
    - The car page's one-off breadcrumb.
    - The last phone board tile stretched double width.
    - Rema's share card cutting a row of chips in half.
    - The API sample box cutting lines off.
    - The contact form's error shown in grey.
    - Two song pages with duplicate tiles.
    - The listeners ranking reading across instead of down.
    - Separators ("·") starting a new line.
    - The phone tab bar lighting no tab on `/dai-dai`.
    - A shared certifications link briefly showing the wrong total before it settles.
    - Screen readers hearing a board artist's phone headline as one run of text ("159Awards21 countries").
    - Four small spacing and label slips: the board's "By the numbers" heading touching the line under it, a button gap on `/analysis`, the "8 cards" badge on `/share`, and the Dai Dai phone hero's padding.
    - *Effort:* Small, as one batch.

---

## 2. Design jobs for Claude Design (14)

Each item names the handoff job it belongs to. The handoff (`README.md`) gives the designer the measurements, screenshots, rules and pass/fail checks for each one. The designer starts with item 5, the rule sheet (Job 0), because every other job follows it; the handoff orders the jobs 0 to 6.

1. **Show the sources and dates on phones too** (Job 1: SH-08, CC-02, CC-03, CC-21, R-01, R-02, R-03, R-25, T-11, C-10, C-11)
   - *Why:* verification is the whole point of the site, and phones hide it:
     - The phone home shows no date, no sources and no way to the Updates page.
     - Phone `/certifications` has no sources, no "how we count" link and no check date.
     - Africa's Biggest on a phone tells readers that sources are "on the desktop page", which they can't reach.
     - "The dated log" on `/certifications` shows no dates, and its newest plaques sit at the very bottom.
     - The "Africa's Biggest" title sits over two boards that are Nigeria-only and three that rank the whole world, and only tiny grey text says so.
   - *Do:* one sources-and-date line, designed once and used on every page:
     - a "Latest" row on the phone home;
     - a date on each row of the dated log;
     - an AFRICA / NIGERIA / WORLD tag on each board;
     - on `/about`, the answer to the top search ("real name") first, then its sources.
   - *Effort:* Medium.

2. **Compare pages: the answer on a phone's first screen** (Job 2: CC-01, CC-17, CC-04, CC-08, CC-13, CC-20)
   - *Why:* someone who searched "burna boy vs wizkid" sees no number until they scroll 300–400 pixels. The page first shows a 6-line explanation that is identical on all 120 pair pages.
   - The country table never shows who wins each country. A reader has to compare 46 numbers one by one.
   - `/compare` itself opens on two empty pickers.
   - *Do:*
     - Put the totals and the one-line verdict near the top on phones.
     - Draw the country table as a mirrored bar chart, so the winner of each country shows at a glance.
     - Open `/compare` already set to Burna Boy.
   - *Effort:* Medium.

3. **Board artist pages on phones: say whose page it is, and link the artist's three pages** (Job 3: B-01, B-02)
   - *Why:* someone arriving from "Wizkid certifications" sees "159" in huge type, but the name "Wizkid" appears only at 11 pixels in the top bar and once inside the small intro text. The portrait is a pale wash you can't recognise.
   - Each artist also has three pages (plaques, charts, live now) that don't link to each other.
   - *Do:*
     - Add a visible name and a small sharp portrait.
     - Add a three-part switcher at the top, with each page's count, for example "Plaques 159 · Charts 240 · Live 298" for Wizkid today.
   - *Effort:* Medium.

4. **One menu that shows it has more, and a calmer top bar on laptops** (Job 4: SH-05, SH-06)
   - *Why:*
     - The phone menu shows 7 of its 30 rows and gives no sign that the list continues. It is the only way into 17 pages.
     - The laptop top bar has 13 items spaced about one word-space apart, so it reads as a run of words.
     - "Home" repeats the logo. About, FAQ and Contact take three of the ten slots, while Compare is in neither the laptop top bar nor the footer. On a laptop you can only reach it from inside `/certifications` or an artist page.
   - *Do:*
     - Show that the menu continues, or let everything scroll as one list.
     - Trim the laptop bar to 6 or 7 section links with real gaps.
   - *Effort:* Medium.

5. **A short rule sheet: what gold means, what arrows mean, where pages line up** (Job 0: R-20, T-08, MU-20, MU-15, CC-24, B-15, C-14, SH-22, SH-25, R-29, MU-21, C-12, T-10, R-17, CC-06, C-07, R-21, T-16, T-21)
   - *Why:* gold is meant to point at Burna Boy, at live figures and at the one main button. Instead:
     - It appears 94 times on Africa's Biggest and 101 times on phone Awards.
     - It is on every song page's section headings and every year on the tours page.
     - It colours 82 pieces of text on the phone listeners page, every city count included; the laptop version of that page uses gold 8 times.
   - The arrows ↗ and → mean different things on different pages.
   - A single page can have three or four different left edges.
   - *Do:* the designer writes one page of rules, and Claude Code applies them everywhere. It is small, and it makes every other job easier.
   - *Effort:* Small for the design; Medium to apply.

6. **Ledgers you can read in one line on a laptop** (Job 3: CC-10, B-03, CC-05, CC-25, CC-18, B-21, MU-16)
   - *Why:*
     - On a laptop, a song title sits on the far left and its single plaque on the far right, about 1,050 pixels apart, row after row.
     - Wizkid's page is 10,817 pixels tall, and the claim in its own hero ("One Dance is Diamond in five countries") first appears 6,690 pixels down.
     - Chart pills show only a flag, so a reader has to know Moldova's flag from Lebanon's.
   - *Do:*
     - Start the plaques right after the title.
     - Add a "Most certified" strip near the top.
     - Put a country code next to each flag.
     - Move the two certification switches next to the numbers they change.
   - *Effort:* Medium–Large.

7. **Keep your place on long pages** (Job 4: R-27, R-04, C-09, R-15, SH-10, SH-11, SH-12, MU-17)
   - *Why:*
     - Phone Updates is 64 screens of entries with no month markers.
     - On phone Awards, the Grammy is the 35th of 48 award bodies, about 19 screens down, though the page leads with it.
     - Methodology is 22 phone screens with no index.
     - Opening Dai Dai on Live Charts adds 11,000 pixels with no reminder of which song you're in.
   - *Do:* one index strip that stays at the top as you scroll (your countries page already has one), plus a sticky month label on Updates. Nothing collapses.
   - *Effort:* Medium.

8. **Dai Dai's first screen should show what it achieved** (Job 5: MU-01, MU-04; needs your OK, because it changes the design you approved on 26 Sep)
   - *Why:* the first big figure is the release date. "7 weeks at No. 1" starts below the phone's tab bar.
   - Its own link preview already does better, with four figures.
   - The week-by-week chart draws "no data" weeks as full-height bars, so it looks as though Dai Dai led from week 2. On your flagship claim, that is the one thing a careful reader must not think.
   - *Do:*
     - Add a four-figure strip under the title, today: No. 1 Global 200 · 37 days No. 1 on Spotify · No. 1 in 26 countries · 19 certifications. Each figure comes from the Dai Dai data, so it stays current.
     - Draw unknown weeks as short stubs.
   - *Effort:* Medium.

9. **Hubs that open the right page and show a figure** (Job 4: R-13, MU-10, MU-11, MU-19)
   - *Why:*
     - `/records` lists 16 "books" with no figures and no dates, mixing whole sections with four tours sub-pages.
     - The `/music` album cards show record labels ("Atlantic · Bad Habit · Spaceship" on 6 of 8 cards) instead of stats. A click opens a tracklist instead of the album page.
   - *Do:*
     - Group `/records` into four shelves, each card with one figure and a date.
     - Make album cards open the album page and show two figures, for example "Best No. 2 · 8 certifications".
   - *Effort:* Medium.

10. **Tours: show the real numbers and stop pointing at a ticket page with nothing on sale** (Job 3: T-03, T-04, T-17; Job 4: T-05)
    - *Why:*
      - The only gold button is a generic US Ticketmaster page, yet none of the three announced shows is on sale.
      - Tour date tables print venue capacity ("22,000"), which readers will take as attendance. The site already holds the real tickets and gross for 18 of those nights (for example "10,684 tickets, $1,224,617"), on another page.
      - Phones never show the 17 "Record nights & live milestones" (the World Cup Final halftime show, the Grammys stage and others).
    - *Do:*
      - Add Tickets and Gross columns.
      - Give each announced show its own ticket link only when one exists.
      - Add the milestones to the phone page.
      - You decide where the gold button points.
    - *Effort:* Medium.

11. **Charts that read on phones and don't mislead** (Job 5: R-05, R-18, R-19, MU-12, MU-13, C-23, R-11)
    - *Why:*
      - On phone `/records/visualized`, 29 of 32 chart labels are under 11 pixels, most of them about 7 pixels, which is unreadable.
      - Some charts mislead: a cut-off axis makes a climb look bigger, and a donut gives two different percentages for the same 83 wins.
      - The listeners map makes Lagos (1.44M) look only about 4 times bigger than Auckland (143K), when it is 10 times bigger.
      - The 500M-songs board shows seven artists tied at "1".
      - `/analysis` has no charts at all on a phone.
    - *Effort:* Medium–Large.

12. **The Afrobeats Board hub: a ranking you can read, and one clear next step** (Job 5: B-04, B-05, B-06, B-07, B-08)
    - *Why:*
      - The hub shows 20 photos but no ranking: no rank numbers, no stated sort order, and ties hidden.
      - It has no main button at all, and nothing on it links to Compare.
      - Each tile's best sentence shows only on mouse hover.
      - The "shape of the field" chart squeezes 18 of 20 dots into its bottom 40%, and its own key describes positions the dots don't occupy.
    - *Do:*
      - Add a Cards / Table switch (the charts pages already have one).
      - Add one gold "Compare any two" button.
      - Redraw the chart's scale.
      - Give phones their own simple version of the chart.
    - *Effort:* Medium.

13. **The stat-card maker on a phone should show the stat** (Job 6: C-04, C-06, C-24)
    - *Why:*
      - On a phone, the card's number sits under the bottom action bar, so the first screen shows a portrait and a logo.
      - On a laptop, the Download button is below the fold, next to a second gold button.
      - `/press` describes the stat cards and live boxes in words but never shows one.
    - *Effort:* Small–Medium.

14. **Link previews that show the number (optional; needs your OK)** (Job 6: SH-21, CC-19, T-01, MU-25)
    - *Why:* the picture that appears when someone shares a link often says nothing:
      - The home preview reads "by the numbers" with no numbers.
      - The tour map's preview has no map.
      - The Spanish Dai Dai preview has no cover and no figures.
      - Compare previews put the result in small grey text.
    - Your box-office previews already do this well. This job copies their approach.
    - *Rules kept:* gold, the logo lockup, and the tagline and footer you kept on 8 Sep all stay.
    - *Effort:* Medium.

---

## 3. Copy: wording fixes (7)

Claude Code can make these. They don't need a designer.

1. **`/about` should answer the question people search for** (C-10)
   - *Why:* "burna boy real name" is your top Google search, and `/about` is where it lands. Its title ("About the Giant") and opening line never say "Burna Boy" or "real name". The answer first appears in the body text.
   - *Do:* open with "Burna Boy's real name is Damini Ebunoluwa Ogulu…".
   - *Half done (8 Oct, #448):* the Google title and description now lead with the real name. The page's own heading and opening line are what's left.
   - *Effort:* Small.

2. **One word for plaques, and never "awards"** (B-10, MU-24)
   - *Why:* the same count is called "awards", "plaques", "certs" and "certifications", sometimes on one screen.
     - "251 awards across 27 countries" appears in the "Keep exploring" cards at the foot of most pages.
     - The site also has a separate Awards page for Grammys. A precise site shouldn't use one word for two things.
   - *Do:* use one word everywhere. **Your pick.** If you don't say, it will be "certifications": it is the page's name and what people search for ("wizkid certifications"), with "certs" only where space is tight.
   - *Effort:* Small.

3. **The same thing gets one name and one number** (B-11, T-12, MU-08, B-22)
   - *What clashes today:*
     - "Chart peaks" labels what is really a count of chart entries.
     - Burna Boy's share of the box office is 65.7% on one page and 65.3% on the next, with no note saying why.
     - Festival categories have three different names across the two layouts.
     - Alone's page gives three different counts of its charts.
     - Artist pages show two "last checked" dates without saying what each one means.
   - *Effort:* Small.

4. **Explain "co-lead" where it appears** (CC-16, MU-23)
   - *Why:* "Gunna ft. Burna Boy · co-lead" looks like a mistake. The explanation is a hover-only tooltip, which phones can't show.
   - *Do:* add one visible line: "co-lead: on Burna Boy's own release, counted as his lead (the rule ChartMasters uses)".
   - *Effort:* Small.

5. **The timeline says "every milestone dated", but half have only a year** (C-13)
   - *Do:* take the day from On This Day where it exists. Otherwise reword the promise.
   - *Effort:* Small.

6. **One voice and one credit line** (C-18, C-17)
   - *Why:* Contact and Press say "we", while Curator says "I built and maintain it alone". Methodology calls the site a "portfolio project".
   - There are also four different "credit us" lines and three different Copy buttons.
   - A journalist checking independence reads two stories about who runs the site.
   - *Do:* "I" everywhere, since you run the site alone; one credit line; one Copy button. Say if you want to keep the words "portfolio project" on Methodology; otherwise they go.
   - *Effort:* Small.

7. **Search: one placeholder, the same section names as the menu, and the English page first** (SH-20)
   - *Why:* search has three different placeholder texts. It also files Certifications under "Music", and ranks "Dai Dai en español" above the English Dai Dai release.
   - *Effort:* Small.

---

## 4. Rulings worth a second look (4)

These touch decisions you've made, so nothing changes unless you say so. Each has the evidence.

1. **Phones never show "An unofficial fan site — not affiliated with Burna Boy"** (SH-09)
   - *The ruling:* phone screens end at the tab bar, and the footer is hidden on phones.
   - *Evidence:* the disclaimer and the "Artwork provided by Spotify" credit live only in the laptop footer, so no phone visitor ever sees them. Phones are where fans screenshot pages, and you want the artist's team to notice the site.
   - *Ask:* one small grey line at the end of the phone home (and on `/about`), above the tab bar. Nothing else changes.

2. **Show where each box-office figure comes from** (tours R-1)
   - *The ruling:* sources are kept in the data and not printed on each row.
   - *Evidence:* every one of the 85 rows already has its own source in the data. The page gives one general paragraph after 82 rows, so a journalist checking "$1,724,853, Capital One Arena" can't trace it.
   - *Ask:* the lightest option needs no change to your ruling. Publish each row's source in the open data download (`/api/v1/tours` plus a `tours.csv`) and link it from the page. A small numbered source key per row is the next step up.
   - *Note:* some source strings mention "the owner's screenshot", so each needs a public wording first.

3. **Two phone screens still fold their lists** (R-16, T-18)
   - *The ruling:* dense lists, no accordions.
   - *Evidence:* phone Firsts hides 45 of its 54 milestones behind closed sections and drops every supporting sentence. Phone Festivals hides 26 of 58 appearances behind "+" buttons. Both came from the designer's file, and both go against your preference.
   - *Ask:* open them as full lists, like the Awards screen.

4. **Let `/share`'s link preview be a stat card** (C-25)
   - *The ruling:* the preview-card redesign was rejected on 8 Sep, and the faded portrait is for On This Day only.
   - *Evidence:* the page that makes stat cards shares as a text-only card that reads "Stat Cards — Pick a Burna Boy record…". The default stat card already exists.
   - *Ask:* use the default stat card as this one page's preview. No other page changes.

**A related question in design job 8:** Dai Dai shows the same 26 No. 1 countries in four places on a laptop. Merging two of them would shorten the page, but it changes the design you approved on 26 Sep, so it is listed as optional in the handoff.

---

## What was left out

**14 findings are not on this list**, because they were too small to be worth your time. One more, the half-empty "By the numbers" boxes on song and album pages (MU-29), is left out because you settled it on 24 Sep ("do your pick": they stay as designed):
- a dangling dash in one home heading;
- an On This Day legend line, and that page's list headlines;
- the 404 page's extras;
- the car page's sources card and its marque buttons;
- one FAQ answer's length;
- word tiles on song pages;
- the Dai Dai breadcrumb;
- "15 · 1 · 1" on Dai Dai;
- a duplicate button on phone box office;
- Nigeria's thin tour-map card, which needs research rather than design;
- Naija @ 66's repeated line;
- "right now" said twice on the home page.

They are still in `research/`, and the handoff tells the designer they're not in this round.

---

## Suggested next steps

1. **Say "go" for the quick wins.** They are 15 small code changes, and Claude Code can make them in one or two pull requests, checked the way you like.
2. **Answer the open questions**, a yes or no each. If you skip one, the default in brackets is used:
   - the four "second look" rulings in section 4 (default: no change to any of them);
   - Ayra's phone Compare button in purple, quick win 12 (default: stays gold);
   - Dai Dai's first screen, design job 8 (default: the designer draws it, and nothing ships until you approve);
   - figure-first link previews, design job 14 (default: not drawn);
   - one word for plaques, copy 2 (default: "certifications");
   - "I" everywhere and dropping "portfolio project", copy 6 (default: yes to both).
3. **Send this folder to Claude Design.** The brief, `README.md`, is written for it: it has every measurement, screenshot, rule and pass/fail check, and it tells the designer not to draw anything in the quick-win and copy lists. A few smaller design choices (the top bar on phone compare pages, Compare in the laptop top bar, a month label on phone Updates, where the tours page's gold button points) come back in the designer's change list, each with a recommendation for your yes or no.
