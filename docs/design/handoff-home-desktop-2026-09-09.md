# Handoff — the desktop home page

**Written 9 Sep 2026, for a design session starting cold.** Everything needed is
in this file: the repo, the rules, each finding with its exact anchor, what
"done" looks like, and which guard fires if you get it wrong. You should not
need to ask a question before starting, and you should not need to guess.

Scope is the **UPPER PART of the desktop home page at ≥1240px, and nothing
else**: the live band, the hero (copy column + "Today's number" panel), and the
scoreboard strip. That is the region in the brief screenshot — everything from
the top of the page down to the end of the five-number row.

**Out of scope, explicitly:** the history band and everything below it, the nav
bar, every other page, and mobile. Two findings that were in an earlier draft of
this file have been moved to §9 for that reason. If you think something outside
this box needs fixing, write it in §9 and raise it — do not fix it. The owner
asked for the upper part; a PR that touches more than the upper part will be
sent back.

---

## 1. The project, in one paragraph

`burnaboystats.com` is an independent Burna Boy statistics site: every
certification, chart peak, award and tour record, each one sourced. Next.js 16,
TypeScript, CSS Modules, deployed on Vercel. The repo is
`/Users/paulemmanuelng/burnaboy-website` (GitHub `paulemmanuelng/burnaboystats`).
The owner is Paul, who is a coding beginner — explain before you use something
unfamiliar, and prefer the plain version of a technique over the clever one.

```bash
npm run verify
```

That is `tsc --noEmit && eslint && vitest run && next build && node
scripts/check-seo.mjs`. **Read the exit code, not the last line of output** —
this repo has been burned by a commit made on top of a silent `exit=2`. It
should print 844 passing. To see the page: use the browser preview tooling
against the dev server, not a manual `npm run dev` in a shell.

---

## 2. House rules — these override your instincts

These are not preferences. Each one is here because breaking it cost real work.

1. **Never redesign beyond the brief.** Paul reverted a whole accordion
   redesign once. Fix the five things listed in §5 and stop. If you see a
   sixth, write it in §9 and raise it — do not fix it.
2. **Desktop and mobile are separate components and separate designs.** Never
   cross-apply. `app/page.tsx` (inside `.desktopOnly`) is desktop;
   `app/components/MobileHome.tsx` is mobile. A change to one is NOT
   automatically right for the other — but if a change *should* apply to both,
   doing only one is the bug that shipped twice this month. Decide explicitly,
   every time, and say which you chose.
3. **Read the design files; do not invent.** `docs/design/` holds the specs —
   `LOGO.md`, `theming/`, `reading/`, `rhythm/`, `ui-ux-audit.md`. If a spec
   contradicts this handoff, the spec wins and you flag it.
4. **Both themes, every change.** Dark and light both ship (`data-theme` on
   `<html>`, three states: dark / light / system). Colours are
   `light-dark(LIGHT, DARK)` — light value first. Never give a colour its only
   definition inside a media or `[data-theme]` block. Check both before you
   claim done.
5. **Never type a figure into prose.** Every number is derived from
   `app/data/`. A typed figure goes stale silently; six did in two days.
6. **Colour discipline.** One gold: `--gold` (`#945e00` light / `#ffb627`
   dark). The live dot's green is the only green. `STATS` in the wordmark is
   the only gradient text.
7. **Accessibility is not optional.** A control's boundary needs 3:1; text
   needs 4.5:1. The existing `--btn-edge` comment explains why it is
   0.55/0.42 alpha and not a hairline — do not "clean that up".

---

## 3. Design system quick reference

| thing | token / value |
|---|---|
| Display face | Anton 400 (`--font-anton`) — no bold cut exists, never `font-weight: 700` |
| Mono / labels | Space Mono (`--font-mono`) — labels, kickers, buttons, never body copy |
| Body | Geist (`--font-geist`) |
| Text | `--text` `light-dark(#17140f, #f5f4f0)` |
| Gold | `--gold` `light-dark(#945e00, #ffb627)` |
| Hairline | `--line` · Raised surface `--bg-raised` · Soft band `--bg-soft` |
| Button face/edge | `--btn-face`, `--btn-edge` |
| Motion | `--dur: 0.2s`, `--ease` |
| Measure | 62ch for body copy (see `docs/design/reading/`) |

Buttons are global classes in `app/globals.css`: `.btn` (base, line 672),
`.btnPrimary` (695), `.btnSecondary` (735), `.btnGhost` (1795).

---

## 4. FIRST — a factual bug, fix this before any styling

**The home page contradicts itself on screen.** The scoreboard strip says
**47 No. 1s worldwide / 30 countries**. The "Today's number" panel, ~400px to
its right, says **"his career total is now 45 No. 1s across 30 countries."**

Both are derived, neither is typed — but from different variables:

| surface | file | numerator | denominator |
|---|---|---|---|
| Scoreboard tile | `app/lib/homeScoreboard.ts:42` | `numberOnes` = **47** | `numberOneCountryCount` = 30 |
| Panel prose | `app/components/TodaysNumber.tsx:73` | `countryNumberOnes` = **45** | `numberOneCountryCount` = 30 |

`numberOnes` (47) includes Billboard's **Global 200** and **Global 200 Excl.
US**, which are not countries. `countryNumberOnes` (45) is country-only.

So the tile pairs a numerator that counts two non-country charts with a
denominator that counts only countries — asserting 47 country No. 1s across 30
countries. `TodaysNumber.tsx:5-10` documents this exact trap and fixes it for
the panel; the tile beside it still has the numerator half of the same bug.

**Two acceptable fixes — this is Paul's call, so ask him:**

- **(a)** tile uses `countryNumberOnes` (45) — both surfaces then agree, and
  "30 countries" is honest under it; or
- **(b)** tile keeps 47 and its `source` line stops saying "countries" —
  e.g. `30 countries + 2 global charts`.

Do **not** silently pick one. `tests/homeScoreboardParity.test.ts` guards this
tile; read it before editing, and extend it so the two surfaces can never
disagree again — a test that pins one and not the other is what let this
through.

---

## 5. The five findings

Ordered by leverage. Each is independent; ship them as separate commits.

### 5.1 — Two focal points fight in the hero — HIGH

The wordmark is `108px`; the panel figure is `142px`. The secondary panel is
physically larger than the site's own identity, so the eye lands right, tracks
back left, then returns.

- Wordmark: `app/page.module.css:103` `.title { font-size: 108px }`
  ⚠️ **There are two `.title` rules in this file** — line 20 (a
  `clamp()`, narrower viewports) and line 103 (desktop, 108px). Edit the right
  one and check the other still agrees.
- Figure: `app/components/todaysNumber.module.css:89-93` `.figure { font-size: 142px }`

**Done when:** the wordmark clearly leads. Target the figure at **≤0.85×** the
wordmark's rendered size — roughly `96–104px` against a 108px title. Check at
1280, 1440 and 1920, and confirm "BURNA BOY" still sits on one line (it broke
onto two once; that is what the comment at line 23 is about).

### 5.2 — Delete the scoreboard watermark glyphs — HIGH, best effort/reward

Five faint outline pictograms sit behind the five numbers. The labels already
say CERTIFICATIONS, NO. 1S WORLDWIDE, STUDIO ALBUMS — the glyphs carry no
meaning, and at `opacity: 0.07` they read as smudges competing with the
numerals, which are the actual content.

- CSS: `app/page.module.css:221-237` — `.scoreGlyph` (opacity `0.07`),
  `.scoreGlyphAlbum` (`0.35`), hover states `0.12` / `0.5`
- Markup: `app/page.tsx:127`
- Component: `app/components/StatGlyph.tsx`

⚠️ **`StatGlyph` is used on mobile too** (`app/components/MobileHome.tsx:128`).
Per rule 2 this is a deliberate decision, not an automatic one. **Recommend
removing from desktop only** and asking Paul about mobile — the mobile cells
are narrower and the glyph reads differently there. If desktop-only, leave
`StatGlyph.tsx` in place; just stop rendering it in `app/page.tsx`.

⚠️ The album glyph clips a real cover image and cannot be tinted by
`currentColor` — that is why it has its own opacity. Do not "unify" the two.

**Done when:** the strip is five numbers, five labels, five sources, and
nothing else. Confirm the mobile scoreboard is unchanged (or changed
deliberately, with Paul's yes).

### 5.3 — The same sentence twice, 300px apart — MEDIUM

The live band reads *"DAI DAI — NO. 1 IN 31 COUNTRIES ON STREAMING CHARTS"*.
The panel immediately right reads *"31 / countries at No. 1 on today's
streaming charts"*. Same fact, same number, same viewport — in the most
valuable space on the site.

- Band: `app/components/LiveBand.tsx:29-31`
- Panel: `app/components/TodaysNumber.tsx:64-68`
- Both derive from `liveHeadline()` in `app/lib/liveHeadline.ts`

**Done when:** the band carries a *different* live fact. It already has
`career streams 10.98B` on the right, so there is precedent. Candidates that
are already derived: the newest chart No. 1, the most recent certification, the
latest updates entry. **Keep it derived — never type a headline.**

### 5.4 — Four link weights, no visible rule — MEDIUM

Within one viewport: a filled gold button, an outlined button, a bare text link
with a `⌘K` badge, and small arrow links (`Live board ↗`, `Read the story ↗`).
Four weights doing two jobs.

- `app/page.tsx:103-107` — the hero's three
- `app/components/TodaysNumber.tsx:78-86` — `Live board ↗`

(The history band's `Read the story ↗` is the fourth instance, but that band is
out of scope — state the rule so it covers it, and leave the markup alone.)

**Done when:** there is a stated rule — write it as a comment in
`app/globals.css` above the `.btn` block — and the page follows it. A
reasonable rule: **filled = the one primary action per section; outlined =
secondary; arrow link = navigation to a sibling page; bare text = utility.**
Merging two of the four is the win; do not invent a fifth.

### 5.5 — The smartest sentence is whispered — LOW but worth it

*"On the official national charts, his career total is now 45 No. 1s across 30
countries"* draws the streaming-vs-official distinction the whole methodology
rests on — and it is small muted grey under a 142px number. That is the
sentence a sceptical reader needs.

- `app/components/TodaysNumber.tsx:70-74`, `.note` in
  `app/components/todaysNumber.module.css`

**Done when:** it is legible without dominating — a step up in size or contrast,
still clearly secondary to the figure. Must clear 4.5:1 in **both** themes;
the panel has a gold gradient ground, so check against the light end of it, not
the average.

---

## 6. Verification checklist

Before you call any of this done:

- [ ] `npm run verify` → **exit 0**, 844 passing. Read the exit code.
- [ ] Both themes checked: dark, light, and system.
- [ ] Widths checked: 1280, 1440, 1920. The 1024 band too if you touched nav —
      one breakpoint bug shipped because a control was tested at only one width.
- [ ] Mobile home visually unchanged, unless a finding said otherwise and Paul
      agreed.
- [ ] No typed figure introduced anywhere.
- [ ] Contrast: text 4.5:1, control edges 3:1, both themes.
- [ ] `git -C /Users/paulemmanuelng/burnaboy-website status` clean of stray files.

**Guards that will fire if you get it wrong** — read them before editing, they
encode rules this file only summarises:

| test | what it protects |
|---|---|
| `tests/homeScoreboardParity.test.ts` | the scoreboard tile's figures and pairing |
| `tests/daiDaiParity.test.ts` | EN/ES editions state the same figures |
| `tests/mobileLinkParity.test.ts` | mobile and desktop reach the same routes |
| `tests/cspOrigins.test.ts` | security headers stay present and restrictive |
| `tests/liveClaims.test.ts` | no figure is written as live once it has stopped |

---

## 7. Commits and PRs

- Branch off `main`. One commit per finding.
- **Never add a `Co-Authored-By` trailer.** The repo must read as solo work.
- Commit messages here explain *why*, not what — read `git log` for the house
  style. State what you did **not** do and why, when you left something out.
- Open a PR per logical group; do not merge without `verify` green in CI.
- `app/data/updates.ts` is **Burna Boy news only** — never log design or dev
  changes there. It is a public feed about the artist, not a changelog.

---

## 8. Explicitly out of scope

Do not touch these while doing the above. Two findings that ARE real but sit
outside the upper-home-page box are parked in §9 with their anchors intact.

- Anything below the history band on the home page.
- `MobileHome.tsx`, except the one glyph decision in §5.2 — and only with a yes.
- The `light-dark()` theming architecture, the crown mark (`BrandMark.tsx`,
  spec'd in `LOGO.md`), and the OG card system (37 cards; `OG_ART` is bumped
  only when the *art* changes, never for data).
- The report-only CSP. It is deliberate and staged; switching it to enforcing
  needs nonce work first, and a guard already fails if you flip it early.
- Any figure in `app/data/`, except the §4 decision once Paul has chosen.

---

## 9. Parked — real, but NOT for this pass

Both of these are real and were in an earlier draft. They are out of scope
because the brief is the upper part of the home page, and each one pulls work
outside that box. Kept here so they are not lost; raise them with the owner
rather than acting on them.

### Parked A — the nav carries ten items

`Home · Music · Certifications · Records · Live Charts · Afrobeats · Updates ·
About · FAQ · Contact`, plus theme toggle, search and the Stat card CTA. Ten
items means none is emphasised. Source of truth `app/lib/links.ts:4-14`; only
consumer `app/components/Nav.tsx:89`.

**Why it is parked, and not just "later":** cutting three items is a two-line
edit, but `FooterNav` renders the full sitemap on the HOME PAGE ONLY — other
pages get a compact bar from `footerFor` / `DEFAULT_FOOTER`. If `/about`,
`/faq` and `/contact` are not in that compact footer, removing them from the
nav orphans three routes on every page but home. That is an SEO regression
dressed as a tidy-up, and it is a site-wide change, not an upper-home-page one.

### Parked B — the history band composition

Left headline / centre paragraph / right button, `1fr 2fr` with `align-items:
center` and a 48px gap. Nothing shares a baseline and there is a lot of dead
space; for a band titled "HISTORY MADE" it reads as a footer promo. Markup
`app/page.tsx:138-155`; CSS `app/page.module.css:280-341`.

Out of scope because the band sits below the scoreboard strip — outside the
region this brief covers.
