# The Dai Dai page: content and structure inventory

**For:** Claude Design, who is redesigning `/dai-dai` and its Spanish edition `/dai-dai/es`.
**Purpose:** this lists everything the page holds today, so a new design can keep all of it.
**Read from:** `main` at `93fedb07`, and from the live site (burnaboystats.com), on 26 Sep 2026.
**Values** marked "now" were read off the live HTML that day. Figures marked as data will change, so draw them as slots, not fixed copy.

Routes and files:

| What | File |
|---|---|
| English page | `app/dai-dai/page.tsx` (496 lines) |
| Spanish page | `app/dai-dai/es/page.tsx` (494), `app/dai-dai/es/layout.tsx`, `app/dai-dai/es/DocumentLangEs.tsx` |
| Page stylesheet (shared by both editions) | `app/dai-dai/dai-dai.module.css` |
| Scroll story + phone back bar | `app/components/DaiDaiStory.tsx`, `DaiDaiStory.module.css` |
| World takeover grid | `app/components/DaiDaiConquest.tsx`, `DaiDaiConquest.module.css` |
| By-the-numbers cards | `app/components/DaiDaiNumbers.tsx` (it uses `dai-dai.module.css`) |
| FAQ list | `app/components/FaqList.tsx`, `faqList.module.css` |
| Keep-exploring rail | `app/components/KeepExploring.tsx`, `KeepExploring.module.css`, `app/lib/links.ts:123-125` |
| Share cards | `app/dai-dai/opengraph-image.tsx`, `app/dai-dai/ogId.ts`, `app/dai-dai/es/opengraph-image.tsx`, `app/dai-dai/es/ogId.ts` |
| Dai Dai's own figures | `app/data/daiDai.ts` |
| Charts / certs / live board | `app/data/charts.ts:337-365`, `app/data/certifications.ts:189-225`, `app/data/liveCharts.ts` |
| Current design source | `design_handoff_burnaboystats/designs/desktop/Dai Dai.dc.html`; phone = screen **25** in `designs/mobile/Burna Boy Stats - Mobile Deep Pages.dc.html` |

Page length now: **12,479 px** at 1440 wide and **8,614 px** at 390 wide (measured with `scripts/mobile-shot.mjs`).

> **Important: there is no separate phone component.** Unlike most screens on this site, Dai Dai has no `Mobile*` component. It is one tree with three CSS bands:
> - **Desktop:** 1240 px and up
> - **Tablet ("archetype 5"):** 901–1239 px
> - **Phone (screen 25):** 900 px and below
>
> `app/lib/mobileScreens.ts` only decides the page chrome: a back bar instead of the site nav (line 46), and the five-tab bar instead of an action bar (lines 80-82). The owner's standing rule for design handoffs is that the PC design is for PC and the mobile design is for mobile, each built as its own component. So please **deliver the desktop and phone designs as two separate screens**, and include the 901–1239 band.

---

## 1. Sections in order

### 1A. Desktop (1240 px and up). Notes for the tablet band are inline.

**Chrome.** The global site nav is at the top and the site footer at the bottom. Neither belongs to this page. The page shows **no visible breadcrumb bar**; the trail exists only as JSON-LD (see §4).

#### S1 · Hero (`page.tsx:362-386`)

- **Kicker:** "2026 FIFA World Cup · official song". Mono 11px, 700, 0.11em, uppercase, `--text-muted` (`dai-dai.module.css:10-17`).
- **h1:** "The **Dai Dai** story". Anton 88px, line-height 0.9, uppercase (`:18-26`). "Dai Dai" uses `.inkText`, a gradient with a noise grain (`globals.css:676`).
- **Lede:** "How Shakira & Burna Boy's 2026 World Cup anthem became the biggest song in the world — and made history at the first-ever FIFA World Cup Final halftime show. Scroll to follow the run."
  - Size `--type-lede` (18px / 1.5), 62ch max width.
- **Three buttons** (`.btn`: pill, 46px tall, mono 13px, uppercase, `globals.css:734+`):
  1. `btnPrimary`: "▶ Watch the halftime show ↗". Opens `https://youtu.be/T3thHUtPdhc` in a new tab. This is the **only video link on the page**.
  2. `btnSecondary`: "Skip to the numbers". Jumps to `#numbers`.
  3. `btnSecondary`: "Leer en español". Goes to `/dai-dai/es` with `hrefLang="es"`.

#### S2 · The story: 7 chapters of scroll-driven storytelling (`DaiDaiStory.tsx`, rendered at `page.tsx:389`)

**Layout:** two columns, 56px gap (`DaiDaiStory.module.css:4-10`).
- **Left:** a square **sticky stage** with `top: 104px`, `--radius` 6px and a 1px `--line` border.
  - Behind every scene is the **blurred single cover**: `inset -25%`, `blur(46px) saturate(1.4)`, opacity 0.28.
  - Over that is a radial scrim from `--bg` 35% to 82%.
  - At the bottom are **7 progress ticks**, each 26×3px, in `--line`. The active tick is `--gold-fill`.
- **Right:** the 7 steps, each `min-height: 92vh`.
  - Inactive steps sit at `opacity .34` and `translateY(8px)`. The active step is at 1.
  - A step becomes active when it crosses a thin band at the viewport centre (IntersectionObserver, `rootMargin -50% 0 -50% 0`, `DaiDaiStory.tsx:226-238`).
  - The stage swaps to that step's scene. Each scene remounts with a `sceneIn` 0.5s rise, and its number counts up (`CountUp`, 1.1s).
  - The server renders the final number, and `prefers-reduced-motion` turns all animation off.

**Each step shows:**
- the index "01 / 07" (mono, `--gold-dim`)
- a kicker (mono, muted)
- an **h2** title: Anton, `clamp(1.8rem, 4vw, 2.8rem)`
- body text: 1.08rem / 1.65, `--text-body-cool-quiet`

| # | Step kicker | h2 title | Body: figures inside it | Stage artwork (scene) |
|---|---|---|---|---|
| 01 | 15 May 2026 | A World Cup anthem, together | prose only | **Single cover** 220×220 (eager load) + label "Dai Dai · Shakira × Burna Boy" |
| 02 | The record | No. 1 on the Billboard Global 200 | "…After four straight weeks it slipped to No. 3, then took the chart back for three weeks — the issues of 22 and 29 August and 5 September — **seven** weeks at No. 1 in all. On the Global 200 Excl. US it ran **ten** straight weeks at No. 1, 4 July to 5 September." The bold counts are **data**; the dates are typed. | "№1" (Anton, `clamp(5rem,16vw,11rem)`, `--gold-bright-ink`) + "Billboard Global 200" + note "First African artist ever · Shakira's 2nd" |
| 03 | Worldwide | No. 1 in country after country | "hit No. 1 in **26** countries — from France and Germany to the Netherlands and the UAE" | Big number **26** (count-up, `--gold`) + "countries at No. 1" + a **typed row of 10 flags** 🇫🇷 🇩🇪 🇳🇱 🇨🇭 🇦🇷 🇨🇴 🇦🇪 🇬🇷 🇱🇺 🇸🇰 + link "See every Dai Dai chart position →" to `/records/charts?song=Dai%20Dai` |
| 04 | On streaming | The most-streamed song on Earth | "…**37 days** as the single most-streamed song on the planet, a run reclaimed in August, and the first time an African artist has ever led it." | "№1" + "Spotify Global Top Songs" + note "Daily & Weekly · 37 days as Earth's most-streamed song" |
| 05 | Certified worldwide | The plaques rolled in | The full certification list (typed, see §2) + "**17** certifications … and counting." | Big number **17** + "certifications for Dai Dai" + note "6× Platinum (Latin) US · Platinum in **8** more" + **two tier dots** (platinum `--tier-platinum-ink`, gold `--gold`) + link "See the Dai Dai certifications →" to `/certifications#release=Dai%20Dai` |
| 06 | The record | The biggest World Cup anthem ever | "highest-peaking World Cup anthem in Spotify Global history" | Word block "BIGGEST / WORLD CUP / ANTHEM EVER" (Anton, `clamp(2.4rem,6.5vw,4.4rem)`) + "Highest-peaking on Spotify Global" |
| 07 | History made · 19 July | History on the World Cup Final stage | "…at MetLife Stadium on 19 July — before a global audience of billions, alongside Madonna, BTS and Justin Bieber." | **Two overlapping portraits** (Shakira, Burna Boy), round, 2px gold ring, second one offset -24px + "World Cup Final · Halftime show" + note "Shakira & Burna Boy · halftime show, 19 July" |

- The English scene words are in `EN_SCENE` (`DaiDaiStory.tsx:70-83`). The steps are built in `buildSteps` (`:95-140`).
- **Tablet (901–1239):** the sticky stage is removed.
  - Every step carries its **own inline scene card** above its text: `--bg-soft`, min-height 320, max-height 640 (`DaiDaiStory.module.css:229-255`).
  - Nothing dims in this band.
- Note: each scene is in the HTML **twice**, once in the sticky stage and once in the inline card that is hidden outside the tablet band.

#### S3 · Halftime show lineup (`page.tsx:391-414`)

- **Kicker:** "19 July 2026 · MetLife Stadium".
- **h2:** "The **halftime show** lineup". The accent word is flat `--gold`, not the ink gradient (`dai-dai.module.css:40-42`). h2 is Anton 40px.
- **Intro** (`.sectionIntro`, 60ch, muted): "The first-ever FIFA World Cup Final halftime show, produced by Global Citizen. Shakira & Burna Boy performed "Dai Dai" on a bill of global superstars."
- **Six round portraits**, 6 columns with a 22px gap. Photos are at most 118px across, with a 2px `--line` ring. The headliners get a `--gold` ring. Each shows a name (Anton) and a tag (mono, `--gold-dim`):
  - Shakira "Dai Dai" (headliner)
  - Burna Boy "Dai Dai" (headliner)
  - Madonna "Music"
  - BTS "Dynamite"
  - Justin Bieber "Everything Hallelujah"
  - Coldplay "with PS22 Chorus"
- The list is typed at `page.tsx:326-333`. Images come from Spotify's CDN at 320px with a srcset.
- **Note line:** "Also on the bill: Uganda's Triplets Ghetto Kids on stage, conductor Gustavo Dudamel and the PS22 Chorus."

#### S4 · The world takeover (`page.tsx:416-425`, `DaiDaiConquest.tsx`)

- **Kicker:** "Country by country". **h2:** "The **world takeover**".
- **Intro (data):** ""Dai Dai" has charted in **66** countries — and reached No. 1 in **26** of them. The No. 1 countries are gold; the rest charted without topping."
- **Flag grid:** one cell per country (66 now), each with flag emoji / ISO code (Anton 13px) / "#peak" (mono 11px).
  - Sorted by peak, then by code.
  - No. 1 cells get a gold wash (`--gold-wash-base` 30%), with the code and peak in `--gold-bright-ink`.
  - Other cells get a warm neutral wash (`--ink-wash-base` 7%).
  - 10 columns, or **8 at ≤1239**. 1px seams are drawn per cell.
  - Each cell has a hover tooltip, "Germany — peak #1".
  - The grid is `role="img"` with an aria-label that states the two counts.
- **Legend:** gold swatch "No. 1", neutral swatch "Charted", and a right-aligned status "66 countries · 26 at No. 1".
- **What the grid shows now.** No. 1:
  - AE AR AT BE CH CO CZ DE EC EE FR GR IN IS IT LB LU NL NO PA PL PT SE SK SR VE
- The rest:
  - ES/PR/UK/UY #2
  - BG/CA/IE/PY/SA/SG #3
  - HN #4
  - CR/DK/GT/LT/LV/MY/RO #5
  - FI/IL/NI #6
  - NG/TR #7
  - HU/KZ #8
  - AU #10
  - HR/NZ #13
  - CL/EG #14
  - US #17
  - ZA #20
  - PE #23
  - BO/JP #25
  - BR #27
  - RU #31
  - MD #34
  - UA #90
  - VN #93
- Billboard's two global charts (GLB and GLBX) are left out of the grid (`page.tsx:26-33`).
- There is **no play animation.** The desktop design file still says "Press play: the No. 1 countries light up gold first…". The live grid is static and always open on desktop. The bundle README's "24 No. 1 / 58 countries" is also out of date.

#### S5 · Dai Dai by the numbers, the `#numbers` anchor (`page.tsx:427-437`, `DaiDaiNumbers.tsx`)

- **Kicker:** "The song's own record". **h2:** "Dai Dai **by the numbers**".
- **Intro:** "These are "Dai Dai"'s own figures — not Burna Boy's career totals. Every one is the song's." Muted, 14px, 74ch.
- **Hero tier:** 6 cards in a 3-up grid.
  - All six are tinted with a 5% gold wash.
  - The value is Anton **52px** in `--gold`. The label is 13.5px / 1.6 in `--text-body`.
  - 1px `--line` ring per card, 22×24 padding.
- **Grouped tier:** 4 groups.
  - Each has a mono gold group head with a hairline running out to the right, and a one-line intro in `--text-dim-warm`.
  - Cards are 3-up. The value is Anton **40px** in `--text`.
- **Tablet:** still 3-up. **Phone:** 2-up (see 1B).
- Labels vary hugely in length. English runs from 50 to 492 characters. Spanish runs from 65 to 542 characters, and its values reach 13 characters ("1140 millones").

Every card, in order. "D" = figure comes from data; "T" = typed in the copy.

| Tier / group | Value now | D/T | Label (short form) and its source |
|---|---|---|---|
| Hero | **68** | D | official chart entries worldwide (national charts + both Billboard globals). `daiDaiChartEntryCount`, `charts.ts:566-569` |
| Hero | **26** | D | countries at No. 1 on their official singles chart. `daiDaiNumberOnes`, `charts.ts:559-562` |
| Hero | **No. 1** | T (weeks D) | on both Billboard global charts: "a **7**th week atop the Global 200 (a first for an African artist, and Shakira's 2nd)…, and **10** consecutive weeks atop the Global 200 Excl. US, 4 July to 5 September (No. 2 on the 12 September issue)". 390 characters. The dates are typed. |
| Hero | **473M** | D (bot) | Spotify streams: "his 8th song past 300 million, the most of any African act, after 37 days…". `DAI_DAI_SPOTIFY_STREAMS`, `daiDai.ts:19` |
| Hero | **17** | D | certifications, then the full country list (typed, test-guarded). `daiDaiCertCount`, `certifications.ts:1103` |
| Hero | **19 Jul** | T | performed live at the first-ever FIFA World Cup Final halftime show |
| The streaming streaks | intro | D dates | "…the Spotify streak through **20 September 2026**, the days at No. 1 through **20 September 2026**." `daiDai.ts:256-261` |
| streaks | **37 days** | T (guarded) | total days at No. 1 on Spotify Global Daily. Mentions the 2026 comparisons (Djo 32, Bieber & Minaj 31); first **30 June 2026**, last **22 August 2026** (D); **84** days in the Top 10 (D constant, `daiDai.ts:220`). 492 characters. |
| streaks | **6 weeks** | T | No. 1 on Spotify Global Weekly; closed 27 Aug; a 16-week stay through 10 Sep; peak 40.28M in a week |
| streaks | **No. 114** | T | entry position on 15 May 2026; off for **six** days (D); **122** straight days and **123** in all (D, `daiDai.ts:117-126`) |
| streaks | **58 days** | T | No. 1 on Apple Music's European chart; plus 11 days on Apple Music worldwide |
| streaks | **40 days** | T | No. 1 on worldwide iTunes; plus 15 days on European iTunes |
| streaks | **No. 1** | D (live) | "right now on the country charts of **YouTube (21 countries) and Spotify (1)** — refreshed several times a day from the live board". `page.tsx:68-81` + `LIVE_CADENCE` (`liveChartMeta.ts:34`) |
| The national charts | intro | T | "Country by country, on the official singles charts." |
| national | **11 weeks** | D | Germany; official Sommerhit 2026 (GfK); "nearly 60 million German streams" (typed) |
| national | **15 weeks** | D | Switzerland; "longest run at No. 1 by any song there so far this year" |
| national | **9 weeks** | D | France (SNEP) |
| national | **13 weeks** | D | Austria Ö3; "**17** weeks on the chart" (D) |
| national | **9 weeks** | D | Wallonia Ultratop 50; "nine straight" is **typed**; No. 1 in Flanders too |
| national | **7 weeks** | D | Dutch Single Top 100; "two in June, then five more" is typed; a **17**-week run (D) |
| national | **7 weeks** | D | Sweden; retaken in week 34; **17** weeks on the list (D) |
| national | **4 weeks** | D | Norway VG-lista; "four consecutive weeks, from week 31" is typed |
| national | **No. 1** | T | India IMI International Top 20; first Burna Boy song to top a chart in India |
| national | **No. 1** | T | Official MENA Chart Top 20, plus Billboard US World Digital Song Sales |
| national | **No. 2** | T (weeks D) | UK: **five** weeks at the peak (D), 30 Jul–27 Aug; a **16**-week stay (D) through 24 Sep (No. 31); first World Cup song in the UK Top 10; beat "Waka Waka" (No. 21) |
| national | **No. 3** | T | Billboard Canadian Hot 100; Burna Boy's first Canadian top 10 (his previous best was No. 14); Shakira's first since "She Wolf" (2009) |
| national | **No. 17** | T | Billboard Hot 100; jumped 42 to 17 on the 1 Aug chart; Luminate: 8.6M streams (+69%), 13.9M radio audience (+11%), 7,000 sold (+322%) |
| national | **4 weeks** | T | UK Big Top 40 (charts of 9–30 Aug 2026); Burna Boy was presented the No. 1 plaque |
| national | **2 weeks** | T | Billboard Rhythmic Airplay (5 and 12 Sep 2026); Shakira's first No. 1 on that chart; No. 2 on 19 Sep; No. 26 on Pop Airplay |
| The world rankings | intro | T | "The charts that rank the whole planet at once." |
| world | **13 weeks** | T | Mediatraffic United World Chart; 230,000 points (week dated 26 Sep) |
| world | **No. 1** | T | iTunes song chart in 73 countries (list of examples, "Belarus the newest") |
| world | **No. 13** | T | Deezer Worldwide Top 100 peak on 26 July 2026, "when it was charting in 57 countries" (owner ruling, §5) |
| world | **29 days** | T | at No. 1 on Spotify Global Music Video, as last counted on 23 Aug (a hand tally; the chart keeps no archive) |
| world | **No. 14** | T | Burna Boy on the Global Digital Artist ranking (1,739 points) |
| The video | intro | T | "The "Dai Dai" video, on a tear of its own." |
| video | **1.14B** | D (bot) | YouTube views; one billion in **105** days, **joint 5th** fastest (both D, from the Africa's Biggest board, `daiDai.ts:27-36`); milestones 59.4 / 67 / 74.8 days (typed) |
| video | **80 days** | D | straight days at No. 1 on YouTube's global music-video chart, 9 Jun–27 Aug (`daiDai.ts:335-338`); the 7 Sep reclaim, the 108th day and the 14 Sep end are typed, and so is "The 80 is a closed count" |

- The hero tier: `page.tsx:214-221`. The groups: `page.tsx:223-285`.
- **Tablet:** unchanged. **Phone:** see 1B.

#### S6 · FAQ (`page.tsx:462-476`, `FaqList.tsx`)

- **Kicker:** "Answered plainly". **h2:** "Frequently asked **questions**".
- **Eight cards**, stacked with a 12px gap. Each has an 18×20 inset, a 1px `--line` border, `--radius` and `--bg-soft`.
- **Question:** an **h3** in Geist 1.12rem, 700. **Answer:** 0.98rem / 1.6, muted.
- On desktop every answer is open and there is no control.

The questions, in order (`page.tsx:288-321`):
1. Who sings "Dai Dai"?
2. Is "Dai Dai" the 2026 World Cup song?
3. Did "Dai Dai" reach No. 1? The answer carries **26** (D).
4. How high did "Dai Dai" chart in the UK?
5. When was the 2026 World Cup Final halftime show?
6. Who performed at the 2026 World Cup Final halftime show?
7. Who are the Ghetto Kids who performed with Shakira and Burna Boy?
8. How many certifications does "Dai Dai" have? The answer carries **17** (D) and the country list (T).

The same eight go out as FAQPage JSON-LD (§4).

#### S7 · Outro (`page.tsx:478-488`)

- Centred, 720px max width.
- **Lead:** "One song, a world record, and an African artist at No. 1 on the planet's biggest charts. Dig into the data behind the run:"
- **Buttons:**
  - primary "Every chart position ↗" to `/records/charts?song=Dai%20Dai`
  - secondary "Africa's biggest ↗" to `/records/africas-biggest`
  - secondary "Burna Boy discography ↗" to `/music`

#### S8 · Keep exploring rail (`page.tsx:491-493`)

- Shown on **desktop and tablet only** (`.desktopOnly`, hidden at ≤900).
- **Eyebrow:** "Keep exploring".
- **Three cards:**
  - "Live Charts: Where he's charting right now" → `/live-charts`
  - "Chart Records: **351** chart entries · **46** No. 1s worldwide" (D, Burna Boy's career figures, `KeepExploring.tsx:29-33`) → `/records/charts`
  - "Stat Cards: Download a card & share the numbers" → `/share`
- Margin is 64px above and 80px below (`KeepExploring.module.css:6-8`).

### 1B. Phone (900 px and below): screen 25

The sections come in the same order and from the same markup. What changes:

| # | Section | At phone width |
|---|---|---|
| 0 | **Back bar** (fixed, top) | It lives in `DaiDaiStory.tsx:246-257`, CSS `DaiDaiStory.module.css:329-379`. Left to right: **back button** (44×44 round, `--bg-soft`, 1px `--line`; goes back in history, or to `/` when there is none, `BackLink.tsx`), label "**DAI DAI**" (mono 11px 700), **chapter counter "01 / 07"** (mono 11px, `--gold`, tabular; follows the active story step), **menu button** "Open menu" (opens the nav sheet). Background `--scrim` with a 14px blur and a `--line` bottom rule; z-index 45; padding respects the safe area. The site nav is hidden on this route (`mobileScreens.ts:46`). |
| 1 | Hero | Top padding clears the bar: `calc(56px + safe-area + 24px)` (`dai-dai.module.css:51-53`). h1 is **46px**, the lede 15px, the h2s 26px. The three buttons wrap onto three rows at 390. |
| 2 | Story | The stage **pins to the top** (`sticky; top: 8px`), is **44vh tall (min 300px)**, with `--bg-soft` and a shadow. The steps scroll beneath it (each min-height **66vh**). Inactive steps sit at opacity .45. Scene art scales down: cover `clamp(120px,32vw,160px)`, big number `clamp(3.2rem,19vw,4.8rem)`, №1 `clamp(4.4rem,26vw,6.8rem)`, portraits 74–100px (`DaiDaiStory.module.css:257-312`). At 390×844 the stage card starts about 447px down, so **no chapter text is visible on first load**. |
| 3 | Lineup | 3 columns (≤720), 2 columns (≤380). |
| 4 | World takeover | **Folded by default.** A full-width button (min-height 52px) reads "**66** countries · **26** at No. 1 … Show all +". It opens a 5-column grid plus the legend and changes to "Hide −" (`DaiDaiConquest.module.css:98-147`). |
| 5 | By the numbers | The **6 hero cards always show**, 2-up (value 36px; grouped values 30px). The 4 groups are hidden behind a full-width toggle (min-height 48px, mono gold): "**Show the full breakdown (28 more) +**", which becomes "Show fewer −". The 28 cards stay in the HTML; the fold is CSS only (`dai-dai.module.css:281-306`). |
| 6 | FAQ | Becomes an **accordion after mount**. Each question turns into a button with a gold mono **+/−**, and **only the first answer is open**. The server HTML and no-JS view keep all eight answers open. Collapsed answers use the `hidden` attribute (`FaqList.tsx`). The hit area extends into the card padding (`faqList.module.css:43-47`). |
| 7 | Outro | Same content. |
| 8 | Keep exploring | **Not shown.** |
| 9 | **Five-tab bar** (fixed, bottom) | Home / Music / Certs / Charts / Records. The owner chose this for the story pages in both languages, **instead of** an action bar (§5). |

### 1C. Interactive parts at a glance

| Control | Where | Behaviour |
|---|---|---|
| Watch the halftime show ↗ | Hero | Opens the external YouTube link in a new tab |
| Skip to the numbers | Hero | Jumps to `#numbers` |
| Leer en español / Read in English | Hero (+ ES outro) | Switches edition, with `hrefLang` |
| Story scroll | S2 | Active step at the viewport centre swaps the scene; progress ticks; count-up; step dimming; phone counter "NN / 07" |
| Scene deep links | S2 ch03, ch05 | `/records/charts?song=Dai%20Dai`, `/certifications#release=Dai%20Dai` |
| Grid cell tooltip | S4 | `title` attribute: "Name — peak #N" |
| Takeover fold | S4, phone only | Show all + / Hide − (`aria-expanded`) |
| Numbers fold | S5, phone only | Show the full breakdown (28 more) + / Show fewer − (`aria-expanded`) |
| FAQ accordion | S6, phone only | +/− per question, first open, keyboard operable |
| Outro buttons, rail cards | S7, S8 | Internal links; the rail sends a `gateway_click` analytics event |
| Back / menu | Phone bar | History back or `/`; opens the nav sheet |

There are **no video embeds, no audio, and no listen links** (Spotify, Apple, YouTube official video) anywhere on the page.

### 1D. Media

- **Single cover:** `https://i.scdn.co/image/ab67616d0000b27303cadf1b3fe324c1dc710ed4` (Spotify, 640px). Used by `DaiDaiStory.tsx:88`, and also as the blurred stage backdrop. Its alt text is in English on both editions: "Dai Dai single cover — Shakira × Burna Boy, 2026 FIFA World Cup".
- **Another cover exists in the data:** Deezer 500×500 at `certifications.ts:189`. It is not used on this page.
- **Portraits** (Spotify artist images, served at 320px with a srcset):
  - Shakira and Burna Boy: `app/lib/artistImages.ts:12-16`
  - Madonna, BTS, Justin Bieber, Coldplay: `page.tsx:329-332`
- **Flags:** system emoji from `CHART_COUNTRIES` (`charts.ts:36`).
- **Videos referenced:** the halftime show `youtu.be/T3thHUtPdhc` (linked). The official video `youtube.com/watch?v=fcnDmrtj6Sk` is the source of the 1.14B figure (`daiDai.ts:13`) but is **not linked**.

---

## 2. What is data, and what is copy

Please draw anything in the first two tables as a **slot**. It changes without a design pass.

**Rebuilt from data on every deploy.** The stats bot commits and the site redeploys, so these move on their own:

| Figure (now) | Source | Appears in |
|---|---|---|
| 68 chart entries | `daiDaiChartEntryCount` (`charts.ts:566`) | hero card, OG card |
| 26 countries at No. 1 | `daiDaiNumberOnes` (`charts.ts:559`) / `conquestNo1` (`page.tsx:35`) | story ch03 body + scene, takeover intro/fold/legend, hero card, FAQ 3, meta description, OG card |
| 66 countries charted, and every peak | `charts.ts:350-364` → `conquestCountries` (`page.tsx:25-34`) | takeover |
| Weeks at No. 1: GLB 7, GLBX 10, DE 11, CH 15, FR 9, AT 13, BE 9, NL 7, SE 7, NO 4; UK weeks at No. 2: 5 | `weeksAtPeak()` (`charts.ts:595`) | story ch02, hero card, national cards |
| Weeks on chart: UK 16, AT 17, SE 17, NL 17 | `weeksOnChart()` (`charts.ts:590`) | national cards |
| 17 certifications / "Platinum in 8 more" | `daiDaiCertCount` (`certifications.ts:1103`), `daiDaiPlatinumMore` (`:1028`) | story ch05, hero card, FAQ 8, OG card |
| **473M** Spotify streams | `DAI_DAI_SPOTIFY_STREAMS` (`daiDai.ts:19`); **bot-written** (`scripts/watched-metrics.json` "spotify-streams-dai-dai", `live: true`) | hero card |
| **1.14B** video views | `DAI_DAI_VIDEO_VIEWS` (`daiDai.ts:16`); **bot-written hourly** ("dai-dai-video-views", `live: true`) | video card |
| 1B in 105 days, "joint 5th" | `DAI_DAI_1B_DAYS` / `DAI_DAI_1B_RANK_EN` (`daiDai.ts:27-36`), read from the Africa's Biggest board | video card |
| 122 straight days / 123 total / six days off | `daiDaiSpotifyStraightDays`, `daiDaiSpotifyDaysOnChart`, `DAI_DAI_SPOTIFY_DAYS_OFF` (`daiDai.ts:109-126`) | No. 114 card |
| 84 days in the Top 10; dates 30 Jun / 22 Aug / 20 Sep 2026 | `daiDai.ts:157-261` (constants, each with its reading date) | streaks intro + 37-day card |
| 80 days at No. 1 on YouTube | `daiDaiYouTubeDaysAtNo1` (`daiDai.ts:335`) | video card |
| Live No. 1s: YouTube 21, Spotify 1 | `liveCharts.ts` via `page.tsx:68-81`; cadence text from `liveChartMeta.ts:34` | streaks card 6 |
| `dateModified` | `lastUpdated` (`lib/api`) | Article JSON-LD |
| 351 entries / 46 No. 1s (career) | `KeepExploring.tsx:29-33` | rail (desktop only) |

**Typed, but held in step by tests.** Treat these as data too: a redesign must not split or rephrase them without updating their guard.

- **"37 days"** is typed in 12+ homes across both editions, the story, the meta description, the ES share card and more.
  - Its constant is `DAI_DAI_SPOTIFY_NO1_DAYS = 37` (`daiDai.ts:157`).
  - `tests/daiDaiFigureHomes.test.ts` finds each home **by regex on its exact wording**.
  - The run is closed, so write it in the past tense.
- **The certification country list**:
  - "Diamond in France, 2× Platinum in Canada, 6× Plat(ino/inum) … Silver in the UK"
  - It appears **6 times** (EN hero card, EN FAQ 8, story ch05, ES ×3).
  - `tests/daiDaiEnumeration.test.ts` requires every certified country to be named in each copy.
  - The 17 plaques now are: US 6× Platinum (RIAA Latin), CA 2× Platinum, FR Diamond, Platinum in ES HU SK PT GR AT SE, Gold in CO CZ IT PL BE DE, and UK Silver.

**Typed copy.**
- The other card values: 6 weeks, No. 114, 58 / 40 days, No. 1 (India, MENA), No. 2 / No. 3 / No. 17, 4 weeks, 2 weeks, 13 weeks, No. 1 in 73 countries, No. 13, 29 days, No. 14, 19 Jul.
- The dates and secondary figures inside labels.
- Number words that repeat a data value: "nine straight", "four consecutive weeks", "two in June, then five more", "The 80 is a closed count", "108th day".
- The 10-flag row in scene 03.
- The lineup.
- All headings, intros and FAQ prose.

---

## 3. The Spanish edition (`/dai-dai/es`)

- **Same components and the same stylesheet.** Only the words differ.
  - Figures are imported from the same data, so they can't drift.
  - Spanish number formatting is applied on top: `millonesEs()` gives "**473 millones**" and "**1140 millones**"; `ordinalWord` gives "séptima semana"; "N.º 1"; "19 jul"; `LIVE_CADENCE_ES` "actualizado varias veces al día" (`plural.ts:48-68`, `liveChartMeta.ts:39`).
- **It must mirror the English page.** The owner ruled parity on 24 Sep 2026 (§5), and `tests/daiDaiParity.test.ts` checks it: same lineup in the same order, same number of stat cards, every English figure carried over.

Where it currently differs (verified in source and live HTML):

1. **h1:** "La historia de **Dai Dai**".
   - Kicker: "Mundial de la FIFA 2026 · canción oficial".
   - Buttons: "▶ Ver el show de medio tiempo ↗" / "Saltar a las cifras" / "**Read in English**" (`hrefLang="en"`).
2. **Section titles:**
   - "El cartel del **show de medio tiempo**"
   - "La **conquista mundial**" (kicker "País por país")
   - "Dai Dai **en cifras**" (kicker "El récord de la canción")
   - "Preguntas **frecuentes**" (kicker "Respuestas claras")
   - Group heads: "Las rachas en streaming", "Las listas nacionales", "Los rankings mundiales", "El video".
3. **Fold and label copy:**
   - "Ver el desglose completo (28 más) +" / "Ver menos −"
   - "Ver todos +" / "Ocultar −"
   - Legend "N.º 1" / "En lista"
   - Tooltip "Nombre — pico n.º N"
   - Coldplay tag "con el PS22 Chorus"
4. **The outro has a 4th button,** "Read in English ↗" (`es/page.tsx:480-482`). The English outro has three.
5. **The FAQ order differs.**
   - English 5–8: When / Who performed / Ghetto Kids / Certifications.
   - Spanish 5–8: Ghetto Kids / Certifications / When / Who performed ("¿Quiénes actuaron en el show de medio tiempo de la Final?", which drops "2026").
6. **The UK No. 2 card is shorter in Spanish.** It drops the "by far the highest-charting World Cup song in UK history" clause (`es/page.tsx:228` vs `page.tsx:256`). The Spanish FAQ 4 keeps it.
7. **Structured data:**
   - Spanish has **Article** (which carries an `image` = its share card) and **FAQPage** (`inLanguage: "es"`) only.
   - It has **no MusicEvent** and **no hand-written BreadcrumbList**. It gets the site's generated trail instead: Home › The Dai Dai Story › **Español** (`seo.ts:215-221`).
   - The English Article has **no** `image`. The English image is on its MusicEvent.
8. **Language:**
   - `<main lang="es">`, and `DocumentLangEs` sets `<html lang="es">` (the layout scopes this to the route).
   - `og:locale es_ES`.
   - The share description is shorter: "…número 1 en el mundo entero." (no halftime clause).
9. **The phone back bar is shared and not translated:** label "Dai Dai", back `aria-label="Back"`, back target `/`. The cover's alt text is also English.
10. **The Spanish share card is the generic template** (`ogImage(esCard)`): kicker "Mundial de la FIFA 2026", title "Dai Dai", sub "El himno de Shakira y Burna Boy — 37 días como la canción más escuchada del mundo" (`es/ogId.ts:18-22`). It is not the English rich card.
11. **The rail is translated** ("Sigue explorando"; "Listas en vivo", "Récords en listas", "Tarjetas de cifras") through `sectionLinksEs` (`KeepExploring.tsx:68-75`). The pages the rail links to stay in English.

Spanish line map:
- metadata `:98-108`
- Article JSON-LD `:113-138`
- story steps `:142-187`
- hero cards `:189-196`
- groups `:198-255`
- FAQ `:257-290`
- scene copy `:352-365`
- sections `:318-491`

---

## 4. SEO and structured markup that must stay

**Metadata** (`pageMetadata`, `page.tsx:88-96`):
- **title:** "Dai Dai — Shakira & Burna Boy's 2026 World Cup Anthem"
- **description:** derived; carries 37 days and 26 countries
- **canonical:** self
- **hreflang:** en `/dai-dai`, es `/dai-dai/es`, x-default `/dai-dai`
- **og:type** article, `article:published_time` 2026-07-16 (`PUBLISHED`, `:86`)
- **og / twitter titles:** "The Dai Dai Story — Shakira & Burna Boy"
- **twitter:card:** `summary_large_image`

**The h1** (one per page) and the **heading outline:**
- h2 for each of the 7 chapters and the 4 sections
- h3 for the group heads and the FAQ questions (the FAQ must stay h3, because the schema and a test read it)

**JSON-LD on the English page** (`page.tsx:357-360`):
1. **Article** (`:104-127`): headline, description, datePublished, dateModified, `about` MusicRecording (Shakira + Burna Boy, 2026-05, Afrobeats / Latin pop).
2. **FAQPage** (`:336-344`): built from the same `faqs` array as the visible list. The answers **must be visible at every width**: `tests/faqMobileVisibility.test.tsx` and `tests/faqCollapsible.test.tsx` enforce render-open-then-collapse.
3. **BreadcrumbList** (`:346-353`): Home › The Dai Dai Story. `/dai-dai` is in `OWN_BREADCRUMB` (`seo.ts:149`), so the site-wide trail stands down.
4. **MusicEvent** (`:131-205`):
   - 2026 FIFA World Cup Final Halftime Show, 19 Jul 2026, MetLife Stadium (East Rutherford NJ)
   - performers: Shakira, Burna Boy, Madonna, BTS, Justin Bieber, Coldplay
   - organizer: Global Citizen
   - `image` = the share card URL with its id
   - free `offers`, InStock, bounded 15 May–19 Jul
   - `tests/daiDaiOgImage.test.ts` guards the image and offers fields.

**Share card** (`opengraph-image.tsx`, 1200×630):
- Near-black `#0a0a0b` with a gold `#ffb627` glow.
- Kicker "Shakira × Burna Boy · 2026 World Cup Anthem".
- 300px cover and "DAI DAI" at 126px in gold.
- The sentence with 37 days.
- **4 stat tiles:** No. 1 Global 200 / **26** Country No. 1s / **68** Charts / **17** Certs.
- Footer: URL + pill "Performed · World Cup Final · 19 July".
- The URL carries an id hashed from those stats (`ogId.ts:49`), so the card re-versions itself. Share cards stay gold (owner, §5).

**Crawlability rules the current build follows:**
- `CountUp` renders the final number on the server.
- Both folds are CSS/`hidden` only, so all 34 cards and 8 answers are in the HTML.
- The conquest grid has an aria-label that states its totals.

**Other surfaces point here, so the URL and the page's name must not change:**
- sitemap (priority 0.9 / 0.7, `sitemap.ts:184-185`)
- search index entry "Dai Dai — the World Cup Anthem" (`searchIndex.ts:348-352`)
- nav groups (`links.ts:74-76`)
- the song-page picker lists Dai Dai first, pointing at `/dai-dai`
- the rails on /records/charts, /live-charts, /records/firsts and /share

---

## 5. Owner rulings that constrain the page

**From code comments:**

- **Paul, 9 Aug 2026** (`mobileScreens.ts:80-82`): story pages on phones carry the **standard five-tab footer**, in English and Spanish, **not** their own action bar. They keep the back bar.
- **Owner request** (`page.tsx:456-461`): on a phone the eight FAQs **fold, first one open**. The server must still render them open and collapse them after mount.
- **Paul, 24 Sep 2026, A-18** (`page.tsx:269-272`): Deezer "No. 1 in 23 of them" had no source and is **removed**. Keep the dated, past-tense "No. 13 … 26 July 2026 … 57 countries" (`tests/ownerRulings.test.tsx`).
- **Paul, 24 Sep 2026, A-24** (`es/page.tsx:179-180`, `KeepExploring.tsx:64-67`): **Spanish parity.** The Spanish page has the skip-to-numbers button, every English outro link, the Keep-exploring rail (translated, same three cards), and chapter 07's facts (MetLife, 19 July, the audience of billions, Madonna / BTS / Bieber). This is tested.
- **Owner, 24 Sep 2026** (`KeepExploring.tsx:90-95`): the rail's 64 / 80px spacing was restored at his request.
- **Paul, 24 Sep 2026** (`certifications.ts:186-188`): the US plaque is **6× Platino (RIAA Latin)**, from RIAA's own post: "add it".
- **Paul, 24 Sep 2026** (`ogId.ts:37-40`): the share-card pill reads "Performed · World Cup Final · 19 July" (the show is over). House style is "No. 1" with a space (`ogId.ts:27-29`).
- **Paul, 9 Sep 2026** (`daiDai.ts:162-191`): the Spotify No. 1 run has **ended**. "37 days" is a closed total and must read as past tense (`tests/liveClaims.test.ts`).

**Standing owner preferences from the project notes (not in code):**

- **Colombia Gold stays** (label-issued, Sony Music Colombia), and Dai Dai's count is 17 (24 Sep ruling 1).
- **"First African artist" claims on Spotify Global are judged on Spotify's own chart,** and Dai Dai's stands (24 Sep). Don't reword the "first African artist" lines.
- **Handoff process:** designs must be separate for desktop and phone; the mockup wins over prose; figures are verified against `app/data`.
- **Don't propose collapsing lists** into accordions without asking. Paul reverted a density-cutting accordion redesign elsewhere (20 Aug) and prefers dense screens. The phone folds that exist here (takeover, numbers, FAQ) are already approved; a **new** fold is a question for him.
- **Share cards stay on the site gold `#ffb627`.**
- **Keep the video view count current.** This is now automatic through the bot. Its one home is `DAI_DAI_VIDEO_VIEWS` in `app/data/daiDai.ts`.

**Tests that fail if a redesign drops or rewords something:**
- `daiDaiParity`
- `daiDaiFigureHomes`
- `daiDaiEnumeration`
- `daiDaiOgImage`
- `ownerRulings` (A-18, A-24)
- `faqMobileVisibility`
- `faqCollapsible`
- `liveClaims` (finds the Spotify cards by the phrases "straight days on the chart", "in total at No. 1 on Spotify", "seguidos en la lista", "en total en el número 1")
- `streakParity`
- `spanishDocumentLang`
- `siteDebugLayout` (D-03, the grid's per-cell seams)
- `siteDebugA11y` (E-08, `lang`)
- `siteDebugWording` (the card's "No. 1")
- `structuredData`
- `buttonLabelPaint`: on 9 Sep 2026 the secondary hero button labels rendered **blank on an iPhone**. Keep the `.btn` label-paint guards in `globals.css`.

---

## 6. Design tokens the page uses (dark / light, from `app/globals.css`)

| Token | Value | Line |
|---|---|---|
| `--bg` / `--bg-soft` | `#0a0a0b` / `#141416` (light `#f7f4ee` / `#ffffff`) | 23-24 |
| `--gold` (= `--gold-ink`) | `#ffb627` (light `#945e00`) | 49, 67 |
| `--gold-fill` | `#ffb627` (light `#945e00`) | 65 |
| `--gold-bright-ink` / `--gold-bright` | `#ffd24a` (light `#945e00`) | 419 / 50 |
| `--gold-dim` | `#c98a2e` (light `#945e00`) | 183 |
| `--text` | `#f5f4f0` (light `#17140f`) | 37 |
| `--text-body` | `#cfc7bb` (light `#4a443b`) | 74 |
| `--text-body-cool-quiet` | `#d3d3da` (light `#4a443b`) | 397 |
| `--text-muted` | `#9b9ba3` (light `#5f584f`) | 38 |
| `--text-dim-warm` / `--dim` | `#8a8279` / `#85858e` | 400 / 308 |
| `--line` / `--rule-soft` / `--rule` | white at .12 / .24 / .38 (dark) | 27 / 33 / 34 |
| `--scrim` | `rgba(12,10,9,0.94)` | 181 |
| `--radius` | 6px | 215 |
| `--type-lede` | 18px / 1.5 | 107-108 |
| `--ease-out` | `cubic-bezier(0.22, 1, 0.36, 1)` | 223 |
| Light-mode strengths | `--shadow-strength .31`, `--wash-strength .42` | 535-539 |

**Fonts:**
- Anton for display (no bold cut)
- Mono for kickers, labels and buttons
- Geist sans for body text and FAQ questions

The site supports dark, light and system themes, so the page must work in both.

---

## 7. Observations for the redesign

These are factual, not decisions:

1. **Phone first load:** at 390×844 the hero and its three stacked buttons fill the screen. The story stage starts at about 447px, and chapter 01's text isn't visible until you scroll (`shots/en-phone-390-top.png`).
2. **Phone pinned stage:** it pins at `top: 8px` with z-index 2 (`DaiDaiStory.module.css:274-280`). The fixed back bar (z-index 45) is 12 + 44 + 12 px of padding and button, plus the safe area and a 1px rule. Going by the CSS, the top ~61px of the pinned stage sits under the bar's 0.94 scrim. This was worked out from the code and **not confirmed on screen**: the screenshot batch couldn't get the machine lock.
3. **Two chapters use the same art:** 02 and 04 both show "№1". Chapter 03's flag row is typed (10 of the 26). Chapter 05's tier dots show only platinum and gold, although the plaques run Diamond → Silver.
4. **Wording varies within the page:** "6× Platinum (Latin)" in the story, "6× Platino" in the cards and FAQ.
5. **Card label lengths range 50–492 characters** (English) and up to 542 (Spanish). The heaviest cards are "37 days" (492), "80 days" (435), the Billboard "No. 1" (390), "2 weeks" (336), "No. 114" (332) and "No. 2" (313).
6. **No listen or watch links** for the song itself. The official video, which the 1.14B figure measures, is not linked, and nothing is embedded.
7. **The design file and bundle README are out of date on the takeover:** they show a play button with 24 / 58; live is a static grid with 26 / 66. Two code comments are also out of date: "57 cells" in `DaiDaiConquest.tsx:73`, and the "(18 more)" example in `faqList.module.css:51` (live is 28).
8. **English and Spanish are out of step in five places:** FAQ order; MusicEvent and breadcrumb nodes; share-card template; the UK card clause; the untranslated back bar and cover alt text.
9. **No visible breadcrumb bar** on either edition.

**Screenshot:** `~/burnaboy-work/daidai-handoff/shots/en-phone-390-top.png` shows the live phone first screen at 390×844 @2x, taken 26 Sep 2026.

- **Full-page captures are not included.** The stage's height is set in vh, so it stretches with a tall viewport and a full-page capture looks nothing like the real page.
- **Per-section viewport captures are not included either.** The batch script is ready at `~/burnaboy-work/daidai-handoff/dd-shots.sh`, but other agents held the machine's heavy lock for over 30 minutes. Run it through `~/.local/bin/heavy` when the lock is free.
