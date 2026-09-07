# Design handoff — mobile hero, the last 1.5 points, and three-mode theming

**For:** Claude Designer
**From:** Paul (owner) via Claude Code
**Date:** 7 September 2026
**Site:** burnaboystats.com — 39 routes, Next.js 16, TypeScript, CSS Modules

---

## 0. Read this first

This is an **authorised redesign** of three specific areas. The standing rule on this
project is *never redesign, never cross-apply desktop designs to mobile*. That rule is
suspended **only** for the three tasks below, and only within the boundaries each one
names. Everything outside them stays exactly as it is.

Every number in this document was **measured on the live site**, not estimated. Where you
disagree with a judgement, say so — but check the measurement first, because several of
them are counter-intuitive.

**The site's product is credibility.** Every figure traces to the body that issued it, and
the interface says so out loud (`SOURCES: RIAA · BPI · SNEP · IFPI`, `LAST VERIFIED 6 SEPT
2026`, `REFRESHED HOURLY`). That is the most distinctive thing about the design and it is
not decoration — do not quiet it down to make room for anything else.

---

## 1. Where the design stands today

An honest external read puts it at **8.5/10** — well above what "fan site" implies, closer
to a data-journalism product.

**What already works, and must survive:**

- **A committed identity.** Anton in display caps, Space Mono for data labels, `#ffb627`
  gold on `#0a0a0b`. Nothing here is a framework default.
- **Colour carrying meaning.** Diamond cyan `#8fe3f0`, Platinum white, Gold amber, Silver
  grey. The tier bars encode value in hue *and* length at once. Gold is reserved for
  emphasis and does not leak.
- **The right editorial instinct.** The desktop homepage leads with a number — *"40 —
  countries at No. 1 on today's streaming charts"* — not a hero photo. Correct for a site
  whose product is figures.
- **Mobile that was actually designed**, not squashed. Bottom tab bar, back bar, dense list
  screens. **Zero tap targets under 44px** on the pages measured.
- **A real token system.** 76 custom properties in `:root`, and **3,787 `var()` calls**
  across 95 CSS modules.

**The four things holding it back from 10 — these are your brief:**

| # | Gap | Evidence |
|---|---|---|
| 1 | Mobile hero spends the fold on identity | 452px before the first statistic (§2) |
| 2 | Reading typography is the weak link | body 13.5px / 20.25px line-height, stack falls to `system-ui`, Arial |
| 3 | Near-monochrome across 39 routes | pages blur together; palette leaves no headroom behind imagery |
| 4 | Density peaks unmanaged | `/certifications` filter puts a tier row + 26 country flags on screen at once |

---

## 2. TASK A — the mobile hero (highest priority)

### The measurement

At **390 × 844**, the live homepage spends its fold like this:

```
  0 – 69    header (wordmark, search, menu)
 69 – 112   LIVE ticker
112 – 165   eyebrow  "— THE AFRICAN GIANT · EST. 2010"
165 – 218   H1  "BURNA BOY"          Anton 62px
233 – 278   lede
298 – 411   two full-width CTA pills  (113px + 52px)
452 – 761   "TODAY'S NUMBER" card
458         ← the number "40" finally appears
```

**452px — more than half the viewport — before a single statistic.**

On a 3× device capture cropped at ~400 CSS px, the reader sees **no data at all**: wordmark,
ticker, name, sentence, two buttons. That is the screenshot that prompted this brief.

### What is actually wrong

1. **The H1 repeats the wordmark 100px above it.** `BURNABOYSTATS` then `BURNA BOY` — two
   brand statements stacked, costing 106px of fold to say the same thing twice.
2. **The proposition is numbers and the number comes last.** Desktop leads with "40".
   Mobile — where most readers are — leads with identity.
3. **No CTA hierarchy.** Two near-full-width pills of similar weight. The gold fill says
   "primary" while the geometry says "equal". One is 113px tall, which is over-generous.
4. **The best content on screen is styled as chrome.** The LIVE ticker carries a live,
   specific, remarkable fact — *No. 1 in 40 countries* — in a thin bar a reader skims past.

### The direction

**Lead with the live number. Demote the name. The wordmark has already said it.**

You are free to solve this your way, but the brief is:

- **A statistic must be legible within the first 320 CSS px**, on a 667px-tall viewport
  (iPhone SE with browser chrome), not just on an 844px one.
- **Fold the LIVE fact into the hero** rather than stacking a ticker above a separate hero.
  It is the strongest thing the page has: current, precise, and impossible on a static site.
- **One primary action.** Demote the second to a text link or a quieter control. If both
  genuinely matter equally, that is a content problem to raise, not a layout to balance.
- **Keep the eyebrow if it earns its 53px.** "THE AFRICAN GIANT · EST. 2010" is good voice;
  it may be better attached to something than floating alone.
- The gold gradient + glow on the primary CTA is the one place the system looks dated
  against its own restraint. Worth revisiting.

### Do not

- Do not shrink the wordmark or remove the search or menu affordances.
- Do not introduce a photographic hero. The palette cannot carry it (see §4) and the site's
  authority comes from figures, not portraiture.
- Do not reduce any tap target below 44px. The current page has zero violations and that
  should stay true.

---

## 3. TASK B — the reading experience

**This is the single highest-value change after the hero, and it is currently unattended.**

Body copy computes to **13.5px with a 20.25px line-height (1.5)**, and the stack is
`Geist, "Geist Fallback", system-ui, Arial, sans-serif`. The display face does enormous
work; the reading face does almost none.

People come to this site to **read answers** — the FAQ blocks, the methodology page, the
"why it's on this list" prose, the 22 Q&As on `/faq`. That copy deserves the same care the
headlines get.

**Brief:**

- Establish a proper reading scale: body, lede, caption, and a long-form measure.
- 13.5px is small for sustained reading on a phone. Justify whatever you choose.
- Line length on `/methodology` and `/analysis` should be set deliberately, not inherited.
- Space Mono at label sizes reads as **texture rather than text** in dense tables. Decide
  where it stops being a label and starts being data a person must actually parse.

---

## 4. TASK C — visual rhythm and imagery headroom

**Two related problems.**

**Rhythm.** Across 39 routes the near-monochrome palette makes pages blur together at
speed. The car detail pages — with their gold floor ring — are one of the few screens with
their own identity. There should be more such moments, without fragmenting the system.

**Headroom.** A `#0a0a0b` ground leaves nothing behind imagery. This is not theoretical: on
3 September, four gloss-black cars were **completely invisible** on phones because the
mobile layout had no lit floor behind them (fixed in PR #147). Any dark subject on this
ground will keep producing that failure.

Propose a systematic answer — a surface ramp, a lighting treatment, a per-section accent —
rather than patching individual pages.

---

## 5. TASK D — three-mode theming (dark / light / system)

### Requirement

A control offering **exactly three states**:

1. **Dark** — today's design, unchanged, and the default
2. **Light** — a genuine light theme, not an inversion
3. **System** — follows `prefers-color-scheme`, and *keeps following it* when the OS changes

The choice must persist across navigations and reloads, and must not flash the wrong theme
on first paint.

### The good news — this is 95% done already

- **76 custom properties** in `:root` in `app/globals.css`
- **3,787 `var(--token)` calls** across 95 CSS modules
- `color-scheme: dark` is already declared, with a comment explaining that iOS Safari
  re-tints controls without it — **that comment matters, read it before touching the line**

### The actual debt — 194 hardcoded hex values

Outside `globals.css`, in CSS modules, the top offenders:

| count | value | likely role |
|---|---|---|
| 64 | `#cfc7bb` | warm body text |
| 38 | `#d8d8de` | cool body text |
| 10 | `#0a0a0b` | page ground |
| 9 | `#d3d3da` | muted text |
| 9 | `#3ed17f` | the LIVE green |
| 4 | `#f06ae0` | an accent |
| 4 | `#14100a` | warm surface |

**Every one of these must become a token before light mode can work.** `#cfc7bb` and
`#d8d8de` alone are 102 call sites and they are plainly the same semantic role reached
twice — resolving that duplication is part of the job.

### Constraints that will bite

- **Gold is the brand constant.** `#ffb627` at 4.5:1 on `#0a0a0b` does **not** carry to a
  light ground. You need a light-mode gold that stays recognisably the same brand. This is
  the hardest single decision in the task.
- **Tier colours are semantic, not decorative.** Diamond `#8fe3f0`, Platinum, Gold, Silver
  must remain distinguishable *from each other* and legible in both themes. They encode
  data.
- **OG images cannot follow the reader's theme.** All 37 `opengraph-image.tsx` routes are
  server-rendered at request or build time with no access to a user preference. They stay
  dark. Do not design a light theme that makes shared links look broken.
- **Two layouts render at once.** Desktop and mobile trees are both in the DOM, one hidden
  by media query. A token that only resolves in one of them will look correct to you and be
  wrong for half the audience. This project has shipped that bug four separate times.
- **The LIVE green `#3ed17f`** must clear contrast on a light ground too.

### Where the control goes

Your call, but it must be reachable on both layouts and must not displace anything in the
mobile hero you have just fought to reclaim (§2).

---

## 6. What must not change

- The **wordmark** and its lockup.
- **Anton** as the display face and **`#ffb627`** as the brand colour.
- **Provenance surfaced in the interface** — sources, verified dates, refresh cadence.
  This is the product's differentiator.
- **Tier colour semantics.**
- **Any tap target below 44px** — currently zero violations.
- The **bottom tab bar** on mobile and the **back bar** pattern.
- **Dense list screens.** An accordion redesign was reverted once already. The FAQ blocks
  are collapsible *by explicit request* and are the exception, not a precedent.

---

## 7. Acceptance criteria

**Task A — mobile hero**
- [ ] A statistic is legible within the first **320 CSS px** at 390×667
- [ ] The live fact is part of the hero, not a bar above it
- [ ] Exactly one primary action
- [ ] No tap target under 44px
- [ ] Desktop hero unchanged, verified by measurement

**Task B — reading**
- [ ] A stated reading scale with sizes, line-heights and measure
- [ ] Applied to `/faq`, `/methodology`, `/analysis` and the song-page FAQ blocks

**Task C — rhythm**
- [ ] A systematic proposal, not per-page patches
- [ ] A stated answer for dark subjects on a dark ground

**Task D — theming**
- [ ] Three modes, all working, choice persisted
- [ ] No wrong-theme flash on first paint
- [ ] All 194 hardcoded hexes tokenised; `#cfc7bb`/`#d8d8de` duplication resolved
- [ ] Light-mode gold decided and justified
- [ ] Tier colours legible and mutually distinguishable in both themes
- [ ] Contrast verified in **both** themes, on **both** layouts
- [ ] OG images explicitly out of scope and unaffected

---

## 8. How to deliver

Give back **annotated frames plus the token table**, in this repo under `docs/design/`.
Do not hand back prose alone — this project's implementation reads design files literally,
and anything you leave to inference will be guessed wrong.

Name every colour as a **token**, not a hex, in the frames. If a value has no token yet,
propose the token name.

Where you make a judgement call against this brief, **say so explicitly and give the
reason.** A disagreement with evidence behind it is more useful than compliance.
