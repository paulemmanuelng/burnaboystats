# /dai-dai: visual audit and design handoff

**For:** Claude Design, briefed to design a better "Dai Dai" story page.
**Pages:** https://burnaboystats.com/dai-dai and https://burnaboystats.com/dai-dai/es (both run on the same components and one CSS module).
**Read on:** 26 Sep 2026, live site, repo at `93fedb07`.
**Status:** this is a report only. Nothing in the repo was changed.

Screenshots are in `shots/` next to this file. They were taken with the repo's own CDP harness (`scripts/mobile-shot.mjs`) through `~/.local/bin/heavy`, at **390×844 (phone, dpr 2)** and **1440×900 (desktop, dpr 1)**. Before each capture the page was scrolled slowly in 70px steps and then left 1.7s to settle, so the sticky scene, the count-ups and the lazy images all paint.

There are no full-page captures. The harness's `--full` mode grows the viewport to the document height, and this page sizes its stage and steps in `vh`, so the 44vh stage inflates to about 3,800px and the result is useless. The two composites (`desktop-dark-08-lineup-takeover.png` and `phone-dark-05-lineup-takeover-outro.png`) are real viewport captures placed side by side or stacked, and the fixed bars appear in each panel because each panel is a real screen.

Every value quoted below is either measured on the live page (marked "measured") or read from the code at `file:line`. Paths are relative to `~/burnaboy-website/`.

---

## 1. The page today, in numbers

| | Desktop 1440×900 | Phone 390×844 |
|---|---|---|
| Page height | 12,479px (13.9 screens) | 8,614px (10.2 screens); **14,252px** with "Show the full breakdown" open |
| Scroll story (7 steps) | 5,796px, 46% of the page | 4,289px, 50% of the page |
| Words inside `<main>` | 2,736 | same HTML |
| Number cards | 34 cards (6 lead + 28 in 4 groups), carrying 1,156 words / 6,002 characters of labels | same, with the 28 folded behind a button |
| First step text | top at 728px, so it peeks in at the bottom of screen 1 | top at 977px, **below the fold** |
| LCP element (measured) | `h1`, then the blurred `.backdrop` div (a Spotify CDN image used as a CSS background) at 368ms | the lede, then `.backdrop` at 388ms |
| CLS (measured) | 0 | 0 |
| Horizontal overflow | none | none (every capture) |

Section order (`app/dai-dai/page.tsx`): hero (362–386), story (`DaiDaiStory`, 389), halftime lineup (391–414), world takeover (416–425), by the numbers (427–437), FAQ (462–476), outro links (478–488), and on desktop only the Keep-exploring rail (491–493), then the footer.

A comment in `page.tsx:443` calls this the site's most-trafficked page.

---

## 2. Phone (390×844)

### P1. Fixed chrome plus the stage leave a 378px reading window
`shots/phone-dark-02-story-billboard.png`

- The back bar is fixed at 0–69px (`app/components/DaiDaiStory.module.css:331-351`, z-index 45). The five-tab bar is fixed at 757–844px, 87px tall (`app/components/mobileTabBar.module.css:10-20`, z-index 60). Together they cover 156px, which is 18.5% of the screen, on every screen of the page.
- Inside the story, the sticky stage is 371px tall (`44vh`, min 300px; `DaiDaiStory.module.css:270-287`) and occupies 8–379px (measured).
- The prose therefore gets **379–757px, which is 378px or 45% of the screen**. The Billboard paragraph is 445 characters over 11 lines. It starts under the stage and its last line runs under the tab bar ("ten straight weeks at No. 1, 4 July to 5…" is cut off in the shot).

### P2. The stage slides under the back bar
`shots/phone-dark-02-story-billboard.png`, `shots/phone-dark-03-story-certs.png`

- The stage pins at `top: 8px` (`DaiDaiStory.module.css:274`), but the fixed back bar is 69px tall. **The top 61px of the stage is always hidden behind the bar.**
- The stage's top border never shows. "№1" and "17" sit hard against the bar's edge.
- As the halftime scene leaves, the bar cuts through Shakira and Burna Boy's portraits (seen at scroll 4,450; that capture is not in `shots/`).

### P3. The active step's heading sits behind the stage
`shots/phone-dark-03-story-certs.png`

- A step becomes active when it crosses the viewport's centre line (`rootMargin: "-50% 0px -50% 0px"`, `DaiDaiStory.tsx:234`), which is at 422px. The visible window only starts at 379px (P1).
- At scroll 2,900 the certifications step is active, but its index, kicker and title ("The plaques rolled in") are behind the stage. The reader meets the text mid-sentence, at "…Diamond in France, 2× Platinum…".
- The step's text top was at 263px, 116px under the stage (measured).

### P4. The step counter reads "07 / 07" for the rest of the page
`shots/phone-dark-04-numbers-hero.png` (top bar)

- `backStep` prints `active + 1` (`DaiDaiStory.tsx:253-255`) and nothing ever clears it.
- Through the lineup, takeover, numbers and FAQ, the bar still says **07 / 07**, which looks like a stuck progress indicator.

### P5. Hero: three stacked full-size pills push the story off screen 1
`shots/phone-dark-01-hero.png`

- The three pills are "▶ Watch the halftime show ↗" (297px wide), "Skip to the numbers" (225px) and "Leer en español" (189px). All are 46px tall (`.btn`, `app/globals.css:734-746`). They wrap into a ragged left-aligned stack 158px tall, at 289–447px.
- The language switch and the skip link carry the same weight as the primary action.
- The primary action leaves the site (`target="_blank"`, `page.tsx:373-380`).
- Screen 1 therefore holds the title, the lede, three pills and the top of an empty stage box. The first story sentence starts at 977px.
- The lede ends with "Scroll to follow the run" (`page.tsx:370`), but nothing on screen 1 shows what scrolling will give you.
- "Skip to the numbers" smooth-scrolls (`html { scroll-behavior: smooth }`, `globals.css:561`) about 5,400px through all seven scenes to reach `#numbers` at 5,749px.

### P6. The stage is mostly empty, and each scene is one glyph and one line
`shots/phone-dark-02-story-billboard.png`, `shots/phone-dark-03-story-certs.png`

- On a 354×371px card, each scene is a single big figure ("№1", "26", "17", three words, or two 100px portraits), a mono label and a gold note.
- The blurred cover backdrop is at `opacity: .28` (`DaiDaiStory.module.css:43`) under a scrim that reaches 82% `--bg` (`:54`). On a phone it reads as a flat dark box.
- Each step has a 66vh minimum height (557px; `:293-295`). Short steps (185–223 characters, 5 lines) leave about 280px of blank screen under the text (bottom of `phone-dark-03`).

### P7. Lineup portraits render as ovals; the tags wrap unevenly
`shots/phone-dark-05-lineup-takeover-outro.png` (left panel)

- `.lineupPhoto` is `width: 100%; max-width: 118px; aspect-ratio: 1` (`app/dai-dai/dai-dai.module.css:88-96`), but the `<img>` also has `width={128} height={128}` (`page.tsx:404`). The height attribute wins over `aspect-ratio`.
- Measured: the portraits are **106×128 on a phone and 118×128 on desktop**, which is visibly oval on a phone.
- The duo portraits in the halftime scene are sized on both axes and come out as true circles.
- The tags "“Everything Hallelujah”" and "With PS22 Chorus" wrap to two lines, so the three columns end at different heights.

### P8. The world takeover, the page's best visual, is folded by default
`shots/phone-dark-05-lineup-takeover-outro.png` (middle panel)

- On a phone the 66-cell grid is `display: none` until tapped (`app/components/DaiDaiConquest.module.css:144-147`; state at `DaiDaiConquest.tsx:75`).
- The fold bar reads "66 COUNTRIES · 26 AT NO. 1 · SHOW ALL +". The sentence directly above has just said "charted in 66 countries — and reached No. 1 in 26 of them" (`page.tsx:61`), so the reader sees the same two numbers twice in a row and no picture.

### P9. The lead number cards are 129px text columns with labels up to 22 lines long
`shots/phone-dark-04-numbers-hero.png`

- On a phone the six lead cards go two-up (`.numHeroGrid { grid-template-columns: 1fr 1fr }`, `dai-dai.module.css:196`). That gives 177px cards with 24px padding each side, so the label has 129px.
- The labels are 13.5px (`:156`) and run up to 390 characters. The Billboard card ("No. 1", `page.tsx:217`) is **22 lines at about 18 characters a line**. The card is 564px tall, and its neighbour ("473M") is half empty beside it.
- The six lead figures take 1,198px (measured).

### P10. The full breakdown adds 5,638px of identical cards
`shots/phone-dark-05-lineup-takeover-outro.png` (middle panel) shows the folded state. The opened state was measured.

- Behind the "Show the full breakdown (28 more) +" button (`app/components/DaiDaiNumbers.tsx:71-78`; fold at `dai-dai.module.css:284-305`) are 28 cards with the same two-up shape and the same long labels.
- Opening it takes the page from 8,614px to **14,252px**.
- The value line ("11 weeks", "9 weeks", "No. 1") never says which country or chart it belongs to. That is only in the label ("at No. 1 on Germany's official singles chart — and named…"), so scanning the values tells the reader nothing.

### P11. Outro: centred, glued to the FAQ, and three stacked pills again
`shots/phone-dark-05-lineup-takeover-outro.png` (right panel)

- `.outro` is `margin: 8px auto 60px; text-align: center` (`dai-dai.module.css:249-253`). It starts 8px under the last FAQ card, with no section break and no kicker.
- It is the only centred block after a left-aligned page.
- Its three pills stack at three different widths.
- The 60px bottom margin does clear the tab bar, so nothing is hidden at the foot of the page.

### P12. What already works on the phone (keep it)
- **FAQ accordion.** Eight questions, the first one open, "+/−" on the right, full answers still in the HTML (`app/components/FaqList.tsx`). The owner asked for this fold. The answers run about 41 characters a line at 15.68px, which is comfortable.
- **Story paragraph measure.** 17.28px at 354px is about 40 characters a line, which reads well once it is out from under the stage.
- **Lineup section.** Three columns of large portraits with gold rings on the two headliners.
- **No overflow and no layout shift.** No horizontal scroll in any capture, and CLS 0.

---

## 3. Desktop (1440×900)

### D1. Hero: a strong title, three equal pills, and the stage cut at the fold
`shots/desktop-dark-01-hero.png`

- What works: the Anton title at 88px (`dai-dai.module.css:18-26`) with the gold ink on "Dai Dai" (`.inkText`), the mono kicker, and the lede at a 62ch measure (`:27`). This is the brand at its best.
- The three pills sit on one row at 364–410px. As on the phone, the Spanish link and the skip link weigh the same as the primary action.
- The stage starts at 454px, so screen 1 shows its top half, with the cover and the step "01 / 07" heading squeezed into the bottom-right corner.

### D2. The sticky stage is a 572px square that is mostly empty
`shots/desktop-light-02-story-stage.png`, `shots/desktop-dark-04-story-halftime.png`

- `.scrolly` is two equal columns with a 56px gap (`DaiDaiStory.module.css:4-10`). The stage is `aspect-ratio: 1` (`:23`), 572×572, and pins at `top: 104px` (`:15`).
- The header is 69px, so there is a 35px sliver above the stage. The stage ends at 676px, leaving 224px of the 900px viewport unused below it.
- Every scene is one centred element in that square: the cover at 230px, "№1" at 176px, "26" or "17" at 136px, three words, or two 128px portraits. A label and the progress ticks sit under it.
- The Billboard scene and the Spotify scene are the same layout (№1, a label, a note), so two of the seven chapters look identical.

### D3. The blurred backdrop bleeds out of the card, most visibly in light mode
`shots/desktop-light-02-story-stage.png` (grey and pink blotches below and left of the card), and more faintly in `desktop-dark-01`, `-04`.

- `.backdrop` is `position: absolute; inset: -25%; filter: blur(46px)` (`DaiDaiStory.module.css:37-46`). Its comment says it "fills the stage".
- On desktop, though, `.sticky` has no `position` (`:22-34`; measured `static`). The backdrop is therefore positioned against `.stickyCol` and is **not clipped** by `.sticky`'s `overflow: hidden`.
- Measured: the card is 572×572 at (120, 454) and the backdrop is **858×858 at (−23, 311)**, overhanging 143px on every side.
- The result is inverted: inside the card the scrim darkens it, and outside the card the raw blur shows. On paper (light theme) it reads as dirty smudges.
- On a phone `.sticky` is `position: sticky`, so the backdrop is contained there.

### D4. Chapter rhythm: each step is 830px of scroll holding about 280px of text
`shots/desktop-dark-03-story-gap.png`

- Steps have a 92vh minimum height (828px; `DaiDaiStory.module.css:177-181`), with the text block centred inside. The text blocks are 488px wide and about 280px tall (394px for the Billboard step) (measured).
- Between steps the right column goes blank for about 550px. In the shot, the stage has already switched to "Spotify Global Top Songs" while the only text on screen is the dimmed tail of the previous step and a heading at the very bottom.
- The stage swaps because the 828px step box crosses the centre line well before its text arrives.
- Inactive steps sit at `opacity: .34` (`:186`).

### D5. The scenes carry figures without meaning
`shots/desktop-light-02-story-stage.png`, `shots/phone-dark-03-story-certs.png`

- **Certifications scene: two unlabelled dots**, one in `--tier-platinum-ink` and one in `--gold` (`DaiDaiStory.tsx:184-186`). Nothing says which is Platinum and which is Gold. The plaques themselves (Diamond, 2× Platinum, 6× Platino, eight Platinum, six Gold, one Silver) appear only as a 353-character sentence in the step body (`:125`).
- **No. 1 countries scene: a hard-coded string of 10 flags** (`DaiDaiStory.tsx:166`) under a derived count of 26. The count updates from data and the flags never will.
- **Halftime, the climax of the story, is two 128px portraits and a label** (`shots/desktop-dark-04-story-halftime.png`). There is no photo or poster of the performance, and no video.

### D6. The video content is missing from the page
- The only link to the halftime show is the hero pill. It is an external YouTube link (`HALFTIME_VIDEO`, `page.tsx:209`, used at 373-380).
- The "Dai Dai" **music video** is the subject of a whole number group (1.14B views, 80 days at No. 1; `page.tsx:278-283`), but it has **no link, thumbnail or embed anywhere** on the page. Searching `page.tsx` and `DaiDaiStory.tsx` finds no other YouTube URL and no iframe.
- The "The video" group has 2 cards in a 3-column grid, leaving a blank third cell.

### D7. Lineup: the note is centred under a left-aligned section, and the lineup is told three times
`shots/desktop-dark-08-lineup-takeover.png` (top half)

- `.lineupNote` is `margin: 0 auto` (`dai-dai.module.css:114-120`). Measured, it starts at x=437 while the heading and intro start at x=120, so it floats alone in the middle.
- The six portraits (118×128, slightly oval, see P7) in a 6-column grid are fine.
- The same bill is told in the halftime step ("alongside Madonna, BTS and Justin Bieber"), in this section, and in FAQ answer 6.

### D8. World takeover: works, with rough edges
`shots/desktop-dark-08-lineup-takeover.png` (bottom half)

- **Keep:** one cell per country, sorted by peak, so the 26 gold No. 1 cells read as a block. It replaced a map that silently dropped countries (`DaiDaiConquest.tsx:14-18`).
- The grid is 1200×634px, with 10 columns (`DaiDaiConquest.module.css:25`; 8 at ≤1239px, 5 on a phone).
- 66 cells leave a 4-cell hole in the last row.
- Countries show as 2-letter codes at 13px with 17px flags. The names are only in a `title` tooltip (`DaiDaiConquest.tsx:103`), which touch screens never show.
- The gold cells use a 30% gold wash (`:45`), which on black renders as a flat mustard-brown slab.

### D9. By the numbers: 3,008px of equal-weight cards where values do not say what they measure
`shots/desktop-dark-05-numbers-national.png`

- **Six lead cards**, three-up, 255px and 212px tall. The values are 52px gold Anton (`dai-dai.module.css:155`) and the labels are 13.5px paragraphs.
- The six values mix units: counts (68, 26, 17), a rank ("No. 1"), streams (473M) and a date (19 Jul).
- The "No. 1" label is 390 characters, 7 lines on desktop (`page.tsx:217`).
- **Twenty-eight grouped cards**, split 6, 15, 5 and 2 (`page.tsx:223-285`), all the same card in the same 3-column grid. Groups of 5 and 2 leave blank cells.
- In "The national charts" (15 cards), the eye reads "11 weeks / 15 weeks / 9 weeks / 13 weeks / 9 weeks / 7 weeks / 7 weeks / 4 weeks / No. 1 / No. 1 / No. 2 / No. 3 / No. 17…" with no country attached. This is a table rendered as tiles.
- Copy nits visible in the render:
  - `page.tsx:226`: the streaks intro prints the same date twice ("the Spotify streak through 20 September 2026, the days at No. 1 through 20 September 2026"), because two constants currently hold the same date.
  - `page.tsx:433`: "“Dai Dai”&apos;s" renders as **“Dai Dai”'s** (a closing quote followed by an apostrophe).
- Several figures are stated three or four times on the page:
  - Billboard weeks: story step 2, lead card 3 and FAQ 3.
  - The certification list: story step 5, lead card 5 and FAQ 8, with the scene note summarising it again.

### D10. FAQ on desktop: 1,200px-wide cards, about 150 characters a line
`shots/desktop-dark-06-faq.png`

- There are eight cards, all open (by design on desktop), each the full 1,200px content width. The answers are 15.68px, 1,158px wide (measured), so a full line holds about 150 characters. For example, the certifications answer wraps after "…6× Platino in the US from the RIAA's Latin".
- The heading sits directly on the first card with a 0px gap (recorded as the shipped look in `dai-dai.module.css:240-243`).
- The section is 1,065px tall.

### D11. Outro and rail: a centred block after left-aligned content, an orphan pill, and a second grid
`shots/desktop-dark-07-outro-footer.png`

- The outro starts 8px under the last FAQ card (`dai-dai.module.css:251`). It is a centred 720px block, and its three pills wrap two-plus-one, leaving "Burna Boy discography ↗" alone on the second row.
- The Keep-exploring rail starts about 16px left of the page's content edge (around x=104 against x=120 in the capture), so the foot of the page runs on two different grids.

### D12. Nothing marks the chapters apart
Visible across `desktop-dark-08-lineup-takeover.png`, `desktop-dark-05-numbers-national.png` and `desktop-dark-06-faq.png`.

- Every section after the story uses the same device: a mono kicker, an Anton h2 with its second half in flat gold (`.gold`, `dai-dai.module.css:42`), and a grey intro, with the same 56px `.section` top padding (`:30`).
- Five h2s in a row use the gold-second-half trick. Nothing separates the narrative (the story) from the reference material (numbers and FAQ), and nothing lets a section breathe or lead.

---

## 4. Light theme
`shots/desktop-light-02-story-stage.png`

- The tokens carry the page into light mode cleanly: paper `--bg #f7f4ee`, ink `#17140f`, one gold `#945e00` (`globals.css:23-67`), with shadows and washes scaled down (`:535-539`).
- Two problems are specific to light mode:
  - The backdrop bleed (D3) is at its worst here: grey and pink blotches on paper.
  - The stage becomes a pale card only slightly lighter than the page, so it loses its edge.

## 5. Spanish edition (/dai-dai/es)
`shots/es-01-hero-phone-desktop.png`

- **The phone title breaks the song's name:** "LA HISTORIA DE DAI / DAI" at 46px (`dai-dai.module.css:54`).
- **Capital accents collide with the line above.** Step titles are Anton at `line-height: 1.05` (`DaiDaiStory.module.css:215`). On desktop the "Ú" of "DÚO" touches the "N" of "UN" on the line above (right half of the shot, bottom).
- The phone page is 10,222px, against 8,614px for the English page (measured).
- The site nav stays English on the Spanish page. That is site-wide, not part of this page.
- Any design must be checked with the Spanish copy, which is longer throughout.

## 6. Loading behaviour
- **First paint is fast** on this connection: FCP about 330ms, DOMContentLoaded about 206–276ms, 54 requests on a phone and 75 on desktop. The hero is server-rendered text.
- **The LCP element is decoration.** On both widths the largest paint is the blurred `.backdrop`, a Spotify CDN image (`i.scdn.co`, `DaiDaiStory.tsx:88`) set as an inline `background-image` (`:263`). A redesign should decide what the largest meaningful paint is.
- **Every step change replays its animation.** `key={scene}` remounts the scene (`DaiDaiStory.tsx:144-147`), which replays the 0.5s entrance and the 1.1s count-up (`app/components/CountUp.tsx:12`). Scroll back up and "26" counts up from 0 again.
- The lineup portraits are `loading="lazy"` (`page.tsx:404`) and loaded fine during a normal-speed scroll.
- Reduced motion is honoured: the scene entrance and the step dimming turn off (`DaiDaiStory.module.css:314-323`).
- **The page depends on viewport height.** The stage is 44vh on a phone and steps are 66vh or 92vh, so proportions change with the height of the screen, not only its width.

---

## 7. Keep these

1. **The brand voice:** the Anton display type, the gold ink on "Dai Dai", mono kickers, dark by default with a true light theme, and one gold per theme.
2. **The story arc and its seven chapters:** release, Billboard No. 1, No. 1 in 26 countries, most-streamed song on Earth, certifications, biggest World Cup anthem, halftime show. The idea of a figure beside each chapter is right. It is the execution that under-delivers (D2, P1–P3).
3. **Big single-figure moments.** "№1" and "26" at stage size have real punch when they are actually visible.
4. **The takeover grid:** every country present, sorted by peak, No. 1s as a gold block.
5. **The lineup portraits** with gold rings on the two headliners.
6. **Lead figures first, then labelled groups with a one-line intro.** The tiering concept is right, but the cards need to carry less text.
7. **The phone FAQ accordion,** first answer open. The owner asked for it, and the answers stay in the HTML.
8. **Measure in the story prose:** about 56 characters a line on desktop and about 40 on a phone.
9. **The owner's navigation decisions:** the back bar and the five-tab bar on a phone (see constraints).
10. **Stability:** no horizontal overflow at 390px, CLS 0, and reduced-motion support.

---

## 8. Hard constraints for any new design

These come from the code and from the owner's standing rulings. A design that breaks one will be refused at implementation.

- **Every figure is data, never typed copy.** The counts, weeks and certification lists come from `app/data/charts.ts` (`weeksAtPeak`, `weeksOnChart`, `daiDaiNumberOnes`, `daiDaiChartEntryCount`), `app/data/certifications.ts` (`daiDaiCertCount`, `daiDaiPlatinumMore`), `app/data/daiDai.ts` (Spotify, YouTube and streak constants, refreshed by a bot) and `app/data/liveCharts.ts`.
  - Mark numbers in a mock-up as slots, not as final values.
  - Do not bake a number into an image.
  - The values move weekly.
- **English and Spanish share one design.** Both pages import the same components and `dai-dai.module.css`.
  - `tests/daiDaiParity.test.ts` checks that the two editions have the same lineup in the same order, the same number of stat cards, and every English figure inside the matching Spanish card.
  - `tests/daiDaiEnumeration.test.ts` checks that every certification sentence names every certified country.
  - `tests/daiDaiFigureHomes.test.ts` checks that the days-at-No. 1 figure agrees everywhere it appears.
  - Restructuring the cards, for example into a table, means those tests change too. Flag it in the design notes.
- **FAQ answers must stay in the HTML at every width.** The FAQPage JSON-LD mirrors them, and a phone-hidden FAQ was a real bug (`FaqList.tsx` comments; guarded by `tests/faqMobileVisibility.test.tsx` and `tests/faqCollapsible.test.tsx`). The Article, MusicEvent and Breadcrumb JSON-LD (`page.tsx:104-205, 346-353`) must keep matching what is visible.
- **Phone chrome stays.** The five-tab bar stays on `/dai-dai` and `/dai-dai/es` by the owner's call on 9 Aug 2026 (`app/lib/mobileScreens.ts:80-82`), and so does the back bar.
- **Don't add new folds or accordions without asking the owner.** He reverted an accordion redesign elsewhere and prefers dense, open lists. The two folds that already exist on a phone (the takeover and the full breakdown) are fair game to rethink.
- **Design three layouts, not two.** The site has a tablet band from 901 to 1239px, where the stage unsticks and each scene renders inline above its step (`DaiDaiStory.module.css:229-255`; `design_handoff_burnaboystats/RESPONSIVE-AND-STATES.md` archetype 5). Phone is ≤900px and desktop is ≥1240px. Desktop and phone are separate treatments, and a detail added to one must be drawn for the other.
- **Themes and type:**
  - Themes: dark (the default), light and system.
  - Gold: `#ffb627` in dark and `#945e00` in light (`globals.css:65-67`).
  - Fonts: Anton for display (it has no bold cut), Space Mono for labels and buttons only, and Geist for body text.
  - Type tokens (`globals.css:107-126`): body 16/1.6, lede 18/1.5, small 13.5/1.5, label 11px at .11em.
  - This page currently strays from the tokens with its own sizes (1.08rem, 0.98rem, 1.02rem, 0.92rem, 1.1rem), and the new design should return to the scale.
- **Images:**
  - The artist photos and the cover come from Spotify's CDN through `spotifyImage` / `spotifySrcSet`.
  - Anything with two layouts must not ship a hidden image that is set to eager loading.
  - A video should be a click-to-load poster: no third-party iframe until the reader taps.
- **Motion** must settle to its final state under `prefers-reduced-motion`.
- **The share cards (OG images) are out of scope** and stay gold.

---

## 9. What a better page needs (the brief; the design calls are yours)

1. **Phone story: figure and sentence together.**
   - Either follow the tablet pattern (each chapter's figure inline above its text), or keep a stage that starts below the back bar, is short enough to leave at least half the screen for the text, and activates steps on the line the reader actually sees (P1–P3).
   - The step counter must stop or disappear when the story ends (P4).
2. **Make the stage earn its space** (D2, D5). Each chapter can have its own visual, drawn from data the site already holds:
   - Billboard: the week-by-week Global 200 run, with the dip to No. 3 and the return.
   - No. 1 countries: the 26 flags or cells filling in.
   - Spotify: the 37 days at No. 1 as a strip.
   - Certifications: a plaque wall grouped by tier, with a legend.
   - Halftime: a poster of the performance that plays on tap.
3. **Hero** (P5, D1):
   - One primary action.
   - The language switch as a small EN/ES toggle rather than a peer pill.
   - "Skip to the numbers" as a quieter link, or a chapter index.
   - On a phone, the first chapter's figure visible on screen 1.
4. **Halftime as the climax** (D5, D6, D7). Bring the performance video and the lineup into the final chapter, and remove the second telling of the bill. Add the "Dai Dai" music video where its 1.14B-views figure is told.
5. **Numbers: headline versus ledger** (P9, P10, D9).
   - Each lead figure gets a value, a short caption, and an optional small detail line. The current 390-character labels become detail.
   - The 15 national-chart cards become a compact, scannable table (country, peak, weeks at No. 1, weeks on the chart). `charts.ts` already has these fields per country.
   - Partial rows should not leave empty cells.
6. **Say each thing once.** Decide where the lineup, the Billboard weeks and the certification list live, and cross-link to that place instead of repeating them (D7, D9).
7. **Rhythm.**
   - Make a clear break between the story and the reference sections, and vary section weight so the page does not read as the same kicker, h2 and grid five times (D12).
   - Put the outro and the rail on the page's grid (P11, D11).
8. **Desktop FAQ:** a readable measure, either two columns or answers capped at about 70–75 characters (D10).
9. **Spanish:** titles must not split "Dai Dai" (keep it on one line), and uppercase display lines need room for accents (section 5).

### Bugs that can be fixed without a redesign
These are for implementation later, and are listed so the design doesn't have to solve them.

| # | Bug | Where |
|---|---|---|
| 1 | The phone stage pins at `top: 8px`, underneath the 69px back bar | `DaiDaiStory.module.css:274` |
| 2 | The "07 / 07" counter persists after the story | `DaiDaiStory.tsx:253-255` |
| 3 | The desktop backdrop bleeds out of the card (`.sticky` needs `position: relative`) | `DaiDaiStory.module.css:22-34` |
| 4 | Oval lineup portraits (the height attribute overrides `aspect-ratio`) | `page.tsx:404` with `dai-dai.module.css:88-96` |
| 5 | The lineup note is centred against a left-aligned section | `dai-dai.module.css:116` |
| 6 | The same date is printed twice in the streaks intro | `page.tsx:226` |
| 7 | “Dai Dai”'s renders with a closing quote and an apostrophe | `page.tsx:433` |
| 8 | Spanish capital accents collide at `line-height: 1.05` | `DaiDaiStory.module.css:215` |
| 9 | Hard-coded 10-flag string under a derived count | `DaiDaiStory.tsx:166` |
| 10 | Unlabelled tier dots | `DaiDaiStory.tsx:184-186` |

---

## 10. Shot index

| File | Shows |
|---|---|
| `shots/desktop-dark-01-hero.png` | D1: the hero, the three pills, the stage cut at the fold |
| `shots/desktop-light-02-story-stage.png` | D2, D3, D5, section 4: an empty 572px stage and the backdrop bleeding onto paper |
| `shots/desktop-dark-03-story-gap.png` | D4: between steps, a blank right column and the scene swapped early |
| `shots/desktop-dark-04-story-halftime.png` | D5, D6: the climax chapter as two small portraits |
| `shots/desktop-dark-05-numbers-national.png` | D9: national charts as tiles, values without their countries |
| `shots/desktop-dark-06-faq.png` | D10: full-width FAQ cards at about 150 characters a line |
| `shots/desktop-dark-07-outro-footer.png` | D11: the outro 8px under the FAQ, the orphan pill, the rail off the grid |
| `shots/desktop-dark-08-lineup-takeover.png` | D7, D8: the lineup screen stacked over the takeover screen; the centred note and the 4-cell hole |
| `shots/phone-dark-01-hero.png` | P5: three stacked pills, the story below the fold |
| `shots/phone-dark-02-story-billboard.png` | P1, P2, P6: the stage under the back bar, text under the tab bar |
| `shots/phone-dark-03-story-certs.png` | P3, D5: the active step's title hidden behind the stage |
| `shots/phone-dark-04-numbers-hero.png` | P9, P4: 22-line labels in a 129px column, and the stale "07 / 07" |
| `shots/phone-dark-05-lineup-takeover-outro.png` | P7, P8, P11, P4: oval portraits, the folded takeover repeating the sentence above it, the centred outro, and "07 / 07" on every panel |
| `shots/es-01-hero-phone-desktop.png` | Section 5: "DAI / DAI" split on a phone, and the "DÚO" accent collision on desktop |
