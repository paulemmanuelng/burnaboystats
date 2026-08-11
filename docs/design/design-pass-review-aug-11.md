# Review — Design Pass, 11 August 2026

**Reviewed by:** the engineer who'll implement it, against the live codebase
**Verdict:** accept **01, 02, 04**. Drop **05**. **03** is yours to call.

Every figure below was recomputed with the WCAG formula against `#0C0A09`, the same way you did, so you can check this reply the way you invited us to check yours.

---

## What holds up

**01 — the tier palette is better reasoning than the audit asked for.** The audit said "make them separate." You identified the actual constraint: Gold is fixed at L\* 78 and Platinum has to stay near-white, so the only free slot for Diamond is *below* gold. "Diamond goes deep, not pale" is the right call, and a saturated teal against near-black does read as gemstone rather than washed-out ice chip. Accepted.

**02 — the two-weight split is better than what was asked for.** The audit said raise the hairlines. You were right to push back that blanket-raising turns the site into a boxy grid, and the decorative / secondary / structural split solves it properly. The rule of thumb — *if the line is the only thing separating two pieces of data, it is structural* — is implementable without a judgement call at every site. Accepted.

**04 — diagnosis is exactly right.** "The intro was given its own centring instead of inheriting the heading's column" is the correct root cause, and collapsing `.lineupIntro` and `.conquestIntro` into one `.sectionIntro` is the right shape. Confirmed the fix works for both language editions: with the negative margin gone, a longer Spanish heading pushes the paragraph down instead of colliding with it. Accepted.

**Your maths checks out — eight of nine.** Recomputed independently:

| figure | you | verified |
|---|---|---|
| Platinum `#EFEDE6` | L\* 93.7 · 16.86:1 | ✅ exact |
| Gold `#FBB417` | L\* 78.0 · 10.95:1 | ✅ exact |
| Silver `#626B77` | L\* 44.9 · 3.66:1 | ✅ exact |
| `--line` @ 0.13 | 1.35:1 | ✅ exact |
| `--rule-soft` @ 0.24 | 1.95:1 | ✅ exact |
| `--rule` @ 0.38 | 3.22:1 | ✅ exact |

---

## One correction: Diamond

`#2E9F8C` is **L\* 59.2 at 6.07:1**, not L\* 60.8 at 6.40:1.

That cascades into the neighbour gaps:

| pair | you claimed | actual |
|---|---|---|
| Platinum → Gold | 15.7 | **15.7** ✅ |
| Gold → Diamond | 17.2 | **18.8** |
| Diamond → Silver | 15.9 | **14.4** |

So the minimum gap is **14.4**, not 15.7.

**The recommendation still stands** — four distinct bands, every gap still clears your ≥14 promise, and Diamond still passes 3:1 with room. But the margin on the tightest pair is thinner than stated. If you want the ≥14 guarantee to hold with real headroom rather than 0.4 of a point, Diamond wants to come up slightly or Silver down slightly. Your call — flagging it rather than fixing it, since the palette is yours.

---

## Things you couldn't have known from the audit

These are codebase details, not design problems. Listed so the spec lands cleanly.

**1. `var(--text-secondary)` doesn't exist.** The token is **`--text-muted`**. One-word change in the `.sectionIntro` block.

**2. The tier palette lives in four stylesheets, not one.** You flagged the deep-page grammar risk directionally, which was the right instinct — the actual spread is wider:

- `app/globals.css`
- `app/certifications/certifications.module.css`
- `app/records/charts/charts.module.css`
- `app/music/[song]/song.module.css`

Your "land as one commit" note is therefore exactly right, and more necessary than you knew.

**3. Each tier carries a `border-color`, not just a `color`.** Current shape:

```css
.diamond  { color: #8fe3f0; border-color: rgba(143, 227, 240, 0.55); }
.platinum { color: #dfe2e8; border-color: rgba(223, 226, 232, 0.42); }
.gold     { color: var(--gold); border-color: rgba(255, 182, 39, 0.5); }
.silver   { color: #b8bcc4; border-color: rgba(184, 188, 196, 0.4); }
```

The pass supplies four text hexes; we also need the four border values. Please specify the alphas rather than leaving them to be derived — the current ones vary per tier (0.40–0.55), which looks deliberate.

**Worth sweeping up while you're in there:** Gold's border is already inconsistent with its own text. `border-color` is `rgba(255,182,39)` but `--gold` is `#FBB417` = `rgb(251,180,23)`. Pre-existing, not something you introduced.

**4. `--line` has 518 usages.** That's the real cost of 02. Splitting the token is trivial; **classifying 518 call sites** into structural / secondary / decorative is the work. Your rule of thumb makes each decision fast, but you should have the number before estimating the pass.

---

## 05 — please drop this one

**It's already implemented, and the proposed version would be a regression.**

`app/globals.css` already carries the `pointer: coarse` reset, and it's more careful than the block in the pass:

```css
:where(nav, footer) a,
.footerCol a,
.footerQuick a,
.ui-link {
  display: inline-flex;
  align-items: center;
  min-height: 24px;
}
.footerCopy a,
.footerDisclaimer a { display: inline; min-height: 0; }   /* prose exemption, 2.5.8 */

@media (pointer: coarse) {
  :where(nav, footer) a, .navLinks a, .footerCol a, .footerQuick a, .ui-link { min-height: 44px; }
  .footerCopy a, .footerDisclaimer a { min-height: 0; }
}
```

Two problems with replacing it:

- The existing rule uses **`:where()` to hold specificity at zero**, and its comment states the mobile tab bar's stacked icon-over-label layout depends on that. Bare `nav a, footer a` raises specificity and can break it.
- It drops the **prose exemption** for links sitting mid-sentence in the footer, which would grow their line boxes.
- `[data-crumb]` doesn't exist in this codebase.

**And the audit finding that prompted it was partly wrong — our error, not yours.** It was measured on a desktop pointer, where `@media (pointer: coarse)` never applies. On a real phone the wordmark already receives 44px. Of the three elements flagged, `.skipLink` is `position: absolute; top: -64px`, visible only on keyboard focus — not a touch target at all.

**The one genuine gap** is `.navToggle`, which is a `<button>`; the existing rule targets `a` only. That's one selector to add, not a reset to rewrite.

---

## 03 — the type floor

No objection. Collapsing 10px and 10.5px into 11px removes a tier that wasn't carrying meaning, and 110 elements is a contained change.

Your tracking note is the valuable part and we'd like it as a spec line rather than a caveat: **if a single change has to carry the daylight case, drop tracking from `0.14em` to `0.11em` on the smallest labels before touching size.** That's a testable instruction; "consider legibility outdoors" isn't.

---

## What we need to proceed

1. Diamond's corrected values, or a nudged hex if you want more headroom on the 14.4 gap
2. The four tier `border-color` values with their alphas
3. `--text-secondary` → `--text-muted` in the `.sectionIntro` block
4. Confirmation that 05 is withdrawn

With those, 01, 02 and 04 can be implemented as a single commit across the four stylesheets, reviewed across several deep pages together — as you recommended.

Good pass. The pushback on blanket-raising the hairlines, and the Diamond-goes-deep insight, are both better than the brief that prompted them.
