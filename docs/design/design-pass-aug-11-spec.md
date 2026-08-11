# Design pass — 11 August 2026

**Status:** reviewed and accepted by the implementing engineer. Ready to land.
**Scope:** four scoped changes to the live codebase. Not a redesign.

This is a **surgical pass on a working site**, not a rebuild. The site isn't broken — an audit found five things, an engineer reviewed the proposals and accepted four. Every value below is final and was computed, not estimated. Change only what's listed.

Source documents, both in this bundle:
- `Design Pass - Aug 2026.dc.html` — the reasoning and the before/after
- `Spec Addendum - Aug 11.dc.html` — the final values after review

---

## The four changes

| # | What | Files | Risk |
|---|---|---|---|
| 01 | Tier palette — four colours + four border values | **4 stylesheets** | Touches every deep page at once |
| 02 | Divider tokens — add two, promote four selectors | `app/globals.css` + 3 | Low, revertible in 4 places |
| 03 | Type floor — retire 10 / 10.5px, drop tracking | wherever those sizes appear | Low |
| 04 | Dai Dai intros — one class replaces two | `app/dai-dai/dai-dai.module.css` | Low, affects EN + ES |

**05 was withdrawn.** The tap-target reset already exists and is better than what was proposed. One selector to add — see the bottom of this file.

**Land 01, 02 and 04 as a single commit**, then review across several deep pages together. The tier palette and divider tokens both live in the shared deep-page grammar, so reviewing one page tells you nothing about the others.

---

## 01 — Tier palette

Replace the four tier rules. Both the `color` and the `border-color` are specified; do not derive the alphas.

```css
.diamond  { color: #31A1C0; border-color: rgba( 49, 161, 192, 0.50); }
.platinum { color: #EFEDE6; border-color: rgba(239, 237, 230, 0.29); }
.gold     { color: var(--gold); border-color: rgba(251, 180,  23, 0.37); }
.silver   { color: #626B77; border-color: rgba( 98, 107, 119, 0.73); }
```

### The four stylesheets that carry it

```
app/globals.css
app/certifications/certifications.module.css
app/records/charts/charts.module.css
app/music/[song]/song.module.css
```

All four must change together or the palette will disagree with itself across pages.

### Why these values

| Tier | Hex | CIE L* | Gap to next | vs `#0C0A09` |
|---|---|---|---|---|
| Platinum | `#EFEDE6` | 93.7 | 15.7 | 16.86:1 |
| Gold | `#FBB417` | 78.0 | 16.4 | 10.95:1 |
| Diamond | `#31A1C0` | 61.6 | 16.7 | 6.58:1 |
| Silver | `#626B77` | 44.9 | — | 3.66:1 |

The problem being solved: the previous four differed mainly in **lightness**, and three of them sat at the pale end — Diamond vs Platinum measured 1.12, so at an 8px dot they were the same colour. These four are spread across the lightness range with a minimum neighbour gap of **16.4 L\*** and distinct hue families, so they separate at 8px *and* in greyscale.

**Diamond is deliberately darker than Gold.** Gold is pinned (it's the site accent) and Platinum must stay near-white, so the bright end was occupied — the only free slot was below gold. A saturated teal against near-black also reads more like a gemstone than a pale ice chip.

**Border alphas rise as the tier darkens.** A fixed alpha gives a darker tier a fainter border; these are computed so each border lands at ≈2.4:1 against `--soft` (`#151210`), which is where a badge edge sits. That is why Silver needs 0.73 and Platinum only 0.29.

**One pre-existing bug fixed in passing:** gold's border was `rgba(255,182,39)` while `--gold` is `#FBB417` = `rgb(251,180,23)`. Now consistent.

---

## 02 — Divider tokens

`--line` is `rgba(245,240,232,0.13)` — **1.35:1**, where WCAG asks 3:1 for a boundary that carries meaning. On this site the 1px gap frequently *is* the divider, and a large share of readers are on mid-range Android phones in bright sun.

### Add two tokens; leave `--line` alone

```css
--line:      rgba(245,240,232,0.13);  /* 1.35:1 — unchanged, decorative */
--rule-soft: rgba(245,240,232,0.24);  /* 1.95:1 — secondary structure */
--rule:      rgba(245,240,232,0.38);  /* 3.22:1 — structural */
```

### Migration — promote upward, do not reclassify

`--line` has **518 call sites**. Do not audit them. Leaving the token unchanged means all 518 stay correct by definition, because the decorative weight *is* today's value.

Promote exactly these four:

| # | Where | To | Why |
|---|---|---|---|
| 01 | Count-strip grid gaps | `--rule` | The 1px gap is the only thing separating two figures |
| 02 | Hairline data grids (certifications tier grid, charts grid) | `--rule` | Same argument |
| 03 | Table header rule | `--rule` | Separates labels from data; rows below stay soft |
| 04 | Card and panel edges | `--rule-soft` | Structural, but a fill is already helping |

The rule of thumb for anything not on that list: **if the line is the only thing separating two pieces of data, it is structural.** Section breaks, list separators and anything with a fill or gap already doing the work stay on `--line`.

This makes 02 revertible in four selectors rather than 518.

**Do not change the four-up count strips' structure.** Only the gap's alpha moves. A 2×2 alternative was mocked up and explicitly rejected.

---

## 03 — Type floor

A single desktop page renders 287 elements at 11px, 98 at 10.5px and 12 at 10px. The smaller two aren't a tier — nothing uses the difference to mean anything.

```css
/* smallest mono labels */
font-size: 11px;         /* 10px and 10.5px retired */
letter-spacing: 0.11em;  /* was 0.14em */
```

**Keep 11px.** Letter-spaced uppercase mono at 11px is what makes the site read as an almanac rather than a fan page. Both halves of this are testable: the tracking reduction is the one that carries the daylight case, because letter-spacing costs more legibility outdoors than a point of size does.

---

## 04 — Dai Dai section intros

The one real defect. `app/dai-dai/dai-dai.module.css` currently has:

```css
.lineupIntro   { max-width: 60ch; margin: -8px auto 32px; }
.conquestIntro { max-width: 640px; margin: 0 auto 20px; text-align: center; }
```

Two faults with one root cause — **the intro was given its own centring instead of inheriting the heading's column**:

1. Centred paragraph beneath a full-width left-aligned heading, so at desktop widths it starts far to the right of its own heading.
2. `margin-top: -8px` pulls it into the heading's box, producing the visible collision.

### Replace both with one class

```css
.sectionIntro {
  max-width: 60ch;          /* a measure, not a centring device */
  margin: 14px 0 32px;      /* no auto, no negative top */
  text-align: left;         /* shares the heading's left edge */
  color: var(--text-muted);
}
```

Note `--text-muted`, not `--text-secondary` — the latter doesn't exist.

**No Spanish override needed.** `/dai-dai` and `/dai-dai/es` share this stylesheet and Spanish runs 15–20% longer. A `ch` measure grows with the text, the heading clamps and wraps, and with the negative margin gone a longer heading simply pushes the paragraph down instead of colliding with it. Check both editions.

---

## 05 — withdrawn

The `pointer: coarse` reset in `app/globals.css` already exists and is more careful than the replacement that was proposed: it uses `:where()` to hold specificity at zero (the mobile tab bar's stacked icon-over-label layout depends on that), and it carries a prose exemption for mid-sentence footer links.

**Do not replace it.** One selector to add:

```css
@media (pointer: coarse) {
  :where(nav, footer) a, .navLinks a, .footerCol a,
  .footerQuick a, .ui-link,
  .navToggle { min-height: 44px; }   /* ← added: it is a <button>, not an <a> */
}
```

The audit finding that prompted 05 was measured on a desktop pointer, where the `pointer: coarse` block never applies. On a real phone the wordmark already gets 44px, and `.skipLink` sits at `top: -64px` — visible only on keyboard focus, so not a touch target at all.

---

## Verification

Before calling this done:

- [ ] All four stylesheets carry the same four tier hexes and the same four border alphas
- [ ] Tier dots are distinguishable at 8px **and** with a greyscale filter applied
- [ ] Gold's border is `rgba(251,180,23,…)`, matching `--gold`
- [ ] `--line` still has its original value and its 518 call sites are untouched
- [ ] Exactly four selectors promoted to `--rule` / `--rule-soft`
- [ ] Count strips are still four-up; only the gap alpha changed
- [ ] No `font-size` below 11px anywhere; smallest labels at `0.11em` tracking
- [ ] `/dai-dai` and `/dai-dai/es` both show the intro flush-left with its heading, no collision
- [ ] `.navToggle` gets 44px under `pointer: coarse`; nothing else in that rule changed
- [ ] Review 01 and 02 across **several deep pages together**, not one

## Do not change

- **Four-up count strips** — structure was decided recently; a 2×2 alternative was rejected
- **Per-page compact footers** — deliberately not a sitemap; only home carries the five-column footer
- Anything not named in this file. The site passes WCAG AA already and all four app-level states are designed.
