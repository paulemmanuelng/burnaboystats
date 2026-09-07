# Task D — three-mode theming · resume notes

**State at 7 Sept 2026, paused on usage limit.** Branch `design/theming-tokens`,
pushed. Two commits landed; the third (the literal migration) is prepared but
NOT applied, because the adversarial review found 18 ways it would break dark.

## What is DONE and pushed

1. **`0a5c693` — the engine, the switch and the control.**
   - Every colour token in `globals.css` is `light-dark(<light>, <dark>)`.
   - `color-scheme` is the only thing a theme toggles.
   - Inline pre-paint script in `layout.tsx`; `ThemeToggle.tsx` (icon-only in
     the desktop bar, labelled 44px in the mobile sheet).
   - `--gold` split by role; `.btnPrimary` / `.skipLink` moved to `--gold-fill`.
   - **Verified: dark is a byte-identical no-op.** The set of computed colours
     in `<main>` on the home page is the same 34 values as production.
2. **`13f2ddb` — the masthead as a dark island.** It joins the `:root` selector
   that declares the tokens and pins its own `color-scheme: dark`, so every
   `light-dark()` resolves dark inside it without restating any value.

### Two errors in the design response, found and corrected
- Its snippet is `light-dark(<dark>, <light>)`. **CSS is `light-dark(LIGHT, DARK)`** —
  verified in a browser. Copied as written, both themes render as the other one.
- Its mechanics make "system" and "never chose" both mean *no attribute*, so a
  bare `prefers-color-scheme` query cannot also honour its stated default of
  dark. The inline script resolves all three choices to an explicit
  `data-theme`; `ThemeToggle` re-resolves while the choice is "system".

## What is NEXT — the 612-literal migration

`docs/design/theming/decisions.json` — **612 decisions for 612 sites**, produced
by 7 classifier agents (one per colour family: gold 163, body 109, tail 98,
scrim 93, shadow 63, green 44, ink-alpha 42). Full coverage, no sampling.

`docs/design/theming/review.json` — 136 problems from 21 adversarial reviewers
(3 lenses × 7 families: dark-identity, role-fit, pairing), 35 proposed new
tokens, 45 questions needing a human.

`docs/design/theming/classification-raw.json` — the unedited agent output.

### DO NOT APPLY THE MAP UNTIL THESE 18 ARE FIXED
Severity counts: **breaks-dark 18**, breaks-light 42, unreadable 35, cosmetic 41.
The dark-breaking ones, which violate the whole invariant:

- **`#35d07f` is NOT `#3ed17f`.** `liveCharts.module.css` uses a green nine
  units off `--green`. Mapping it to `--green` or `--green-dot` shifts dark.
  Needs its own `--live-dot` token. Same for `rgba(70,209,127,.5)` in
  `page.module.css:49` — a *third* green.
- **`#0a0a0b` → `--ink-on-gold` drifts** at ~7 sites (`certifications:785`,
  `StatCardMaker:76,141`, `mobileAfricasBiggest:219`, `mobileCerts:243`,
  `mobileTours:163`, `artist:493`). `--ink-on-gold` is `#14100a`. These are
  label inks on gold pills that set `color` with no `-webkit-text-fill-color`,
  so the literal IS what paints.
- **`--shadow-strength` as a bare number does not work.** The proposal never
  says how it is declared, and `--shadow`'s *geometry* changes on paper too
  (`0 20px 50px` → `0 12px 32px`), which a colour multiplier cannot express.
- **`#f5f0e8` cannot fold onto `--text` (`#f5f4f0`).** Verified by a reviewer:
  at α.045 over `#0a0a0b` the green channel rounds 20 vs 21. 22 sites. Needs
  `--ink-wash-base`. Same for `#ffffff` at α.015 (3 sites).

### Also flagged, worth acting on
- 12 `#000` label sites are text on a gold ramp — role is `--ink-on-gold`, and
  the reviewers disagree with the classifier on the surface reasoning. Re-check.
- Scope gap: colour literals **outside** `*.module.css` — inline `style` props
  in `.tsx`, SVG `fill`/`stroke`, and `GlobeCanvas.tsx` which paints from JS
  constants (`OCEAN "#0d0f14"`, `STROKE "#0a0a0b"`). Those will not theme.
- An operational warning from a reviewer: `globals.css` was being edited while
  they read it, so **locate declarations by content, never by line number**,
  and re-read immediately before patching. `scratchpad/apply_map.py` already
  refuses to patch a line whose literal is not exactly where the map says.

## Order of work when resuming
1. Fix the 18 breaks-dark entries in `decisions.json` (mostly: mint the extra
   greens, the `#0a0a0b` ink, `--ink-wash-base`, `--white-wash-base`; drop
   `--shadow-strength` in favour of an explicit light `--shadow`).
2. Declare the surviving new tokens in `globals.css`.
3. Apply with `apply_map.py --apply`, then re-run the palette comparison
   against production — dark must still be 34/34 identical.
4. Add the guard: no colour literal in `*.module.css`, no `--*:` outside
   `globals.css`. It cannot pass before step 3.
5. Then light-mode review across pages, both layouts.

## Still open from §7 of the design response
Task B (the reading scale) and Task C (the stage/rhythm) are untouched and
independent of theming.
