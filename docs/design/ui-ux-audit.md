# UI/UX audit — burnaboystats.com

**Audited:** 11 August 2026, against production and `main`
**Live site:** https://burnaboystats.com
**For:** Claude design

---

## Read this first

**Nothing on this site is broken.** This is a polish list, and that context should shape what you change.

Measured, not assumed:

- **Every text colour passes WCAG AA** against both backgrounds — the lowest is `--dim` at **5.22:1**, comfortably over the 4.5 needed.
- **All four "invisible" states are already designed**: `loading`, `error`, `not-found`, and a dedicated `FilterEmpty` component for filtered lists with no matches.
- **42 routes, zero orphans**, every page reachable in ≤2 clicks, 335 images with alt text, structured data on 100% of pages.

So please treat the existing design as load-bearing and correct unless an item below says otherwise. The five findings are ordered by how much they matter.

---

## 1. The certification tier colours don't separate — **highest value**

Four tiers are colour-coded on dots, progress bars and badges:

| tier | hex | character |
|---|---|---|
| Diamond | `#8FE3F0` | pale cyan |
| Platinum | `#DFE2E8` | near-white |
| Gold | `#FFB627` | saturated gold |
| Silver | `#B8BCC4` | mid grey |

Three of the four are pale and desaturated, differing mainly in **lightness**. Measured against each other:

| pair | ratio |
|---|---|
| Diamond vs Platinum | 1.12 |
| Platinum vs Silver | 1.47 |
| Diamond vs Silver | 1.31 |

At the size they're actually used — an 8px dot, a 3px progress bar, a small badge — Diamond, Platinum and Silver read as the same colour. **Gold is the only tier anyone can identify at a glance.**

Every one of these carries a text label too, so this is not an accessibility failure. It's that the colour system currently does no work: it looks like information but conveys none.

**Ask:** four tier colours that stay distinct at 8px and in greyscale. Note the constraint — gold is the site's primary accent, so the tier palette has to coexist with it without competing.

*Where to look:* `/certifications` (tier bars in the hero, badges throughout).

---

## 2. The hairlines are too faint — **1.35:1**

`--line` is `rgba(245,240,232,0.13)`, which composites to roughly `#2A2826` on `--bg`. That is **1.35:1**. `--border` at 0.20 alpha gives **1.70:1**. WCAG asks 3:1 for UI boundaries that carry meaning.

On this site they carry a lot of meaning. In the count strips the 1px gap **is** the divider — the cells are separated by nothing else. Same for the hairline grids on the charts and certifications pages.

Why this matters more than usual here: **Lagos, Port Harcourt and Abuja are three of Burna Boy's five biggest listening cities.** A large share of readers are on mid-range Android phones, often outdoors in bright sun. At 1.35:1 those dividers simply vanish, and the data grids lose their structure.

**Ask:** raise the divider tokens toward 3:1 without turning the design into a boxy grid — the lightness of it is part of the character. It may be that dividers need two weights: a structural one that must survive daylight, and a decorative one that can stay whisper-thin.

---

## 3. The label typography is very small

A single desktop page (`/certifications` at 1280px) renders:

- **287** elements at **11px**
- **98** at **10.5px**
- **12** at **10px**

These are the monospace uppercase kickers, stat captions and metadata labels. It's a deliberate editorial look and it does read as expensive and considered.

Flagging it not as a defect but as a decision that should be **explicitly signed off** rather than inherited. Given the mobile-heavy, daylight-heavy audience above, it's worth a designer's judgement on whether 11px letter-spaced uppercase is the right floor, or whether the smallest tier should come up a step.

---

## 4. The Dai Dai section intros read as broken — **the one real defect**

The site owner reported this himself as a bug on the Spanish page. It isn't a Spanish problem; it's the shared design, and the English page does the same thing.

In `app/dai-dai/dai-dai.module.css`:

```css
.lineupIntro {
  max-width: 60ch;
  margin: -8px auto 32px;   /* ← negative top margin */
}
.conquestIntro {
  max-width: 640px;
  margin: 0 auto 20px;
  text-align: center;
}
```

Two things combine badly:

1. The intro paragraphs are **centred blocks** (`margin: … auto`) sitting beneath **full-width, left-aligned headings**. At desktop widths the paragraph starts far to the right of its own heading, so the two don't read as related.
2. `.lineupIntro`'s **`margin-top: -8px`** pulls the paragraph up into the heading's box, producing a visible collision.

If the person who commissioned the site thought it looked broken, readers will too.

**Ask:** resolve the heading/intro relationship on the Dai Dai story page. Whatever you land on has to work for **both** language editions — `/dai-dai` and `/dai-dai/es` share one stylesheet, and Spanish text runs roughly 15–20% longer, so any fix must survive longer headings and longer paragraphs.

*Where to look:* https://burnaboystats.com/dai-dai and https://burnaboystats.com/dai-dai/es, sections "The halftime show line-up" and "The global conquest".

---

## 5. A few tap targets under 44px

Three on the home page, the smallest being the wordmark at **38px** tall. Minor, and free to correct inside a broader pass.

---

## Please don't change these

Both were decided deliberately and recently:

- **The four-up count strips** (e.g. `/music`). A 2×2 alternative was mocked up and explicitly rejected in favour of keeping the single-row structure the original design specifies. The numbers scale down together to fit; that's intended.
- **The per-page compact footers.** Every page except home gets four links chosen for where a reader of *that* page goes next. It is deliberately not a sitemap — only the home page carries the full five-column footer.

---

## Design system reference

```css
--bg:          #0C0A09;   /* page */
--soft:        #151210;   /* raised surface */
--text:        #F5F0E8;
--muted:       #9C948A;
--dim:         #8A8279;
--gold:        #FBB417;   /* primary accent */
--gold-bright: #FFC93C;
--green:       #3ED17F;   /* live/positive only */
--line:        rgba(245,240,232,0.13);
--border:      rgba(245,240,232,0.20);
```

**Type:** Anton (display and numerals), Archivo (body), JetBrains Mono (uppercase labels, kickers, captions).

**House patterns:** hairline-separated grids where the 1px gap is the divider; monospace uppercase kickers above display headings; large Anton numerals with a small mono caption beneath.

**Breakpoints:** desktop and mobile are designed as separate screens, never scaled versions of one another. Mobile deep pages share a common "deep page" grammar — changing it affects sibling pages, so call it out if a fix requires that.

Existing design files live in the handoff repo under `designs/desktop/*.dc.html` and `designs/mobile/*.dc.html`, using `{{ }}` template placeholders that map onto real data.
