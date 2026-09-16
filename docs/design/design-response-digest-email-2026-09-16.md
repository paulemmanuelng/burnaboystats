# Design response — the Saturday digest email, as it lands

**Answers:** `docs/design/handoff-digest-email-2026-09-16.md`.
**Boards:** `design_handoff_burnaboystats/designs/desktop/Saturday Digest - Email.dc.html` — one canvas; the three email boards in `Saturday Digest.dc.html` are superseded. Boards render in Arial + Menlo only; every board's wrapper carries the palette as `--ground --rule --ink --body --muted --fine --gold --ink-on-gold`.
**Twin:** `docs-design/digest-2026-09-19.txt`.
**Date:** 16 September 2026.

Every value below was measured or computed; the strings are final. Nothing about how the email works changes — selection, order, subject rule, cap, headliner rule, send time, placeholder, twin order. The palette is unchanged (§4.9 → the confirmation email is not redrawn), with one role retired.

---

## The five decisions

### 4.1 Hierarchy — one list; headliners by size and position; the headline is inside the entry
Two cards then a list was an answer to 800-character entries. At ≤300 characters every entry *is* a headline with one sentence of support, so the email is **one ruled list**. Headliners are the first two entries at **19px/28px**; the rest **15px/23px**. No cards, no numerals, no `ALSO THIS WEEK` divider — the size change is the divider.

The hierarchy that matters is **inside each entry**: the opening clause — the same clause the subject rule already extracts — renders **bold**. Eight bold ledes make the email scannable in the way Anton makes the site scannable: *A 14th straight week at No. 1 in Switzerland* · *Back inside the global Top 10* · *African Giant's UK history…* · *Past 350 million plays on Audiomack.* Presentation only: `<strong>` around the clause the code already computes.

**First 300px at 375, chrome removed:** masthead (44px) → rule → kicker at y≈61 → the first fact's bold clause begins at **y≈85** and three lines of it are on screen by 166. The lockup is a one-line masthead, not a hero — the sender name in the inbox already said who this is from.

### 4.2 The entry unit — the entry is the link
```
CHARTS · 13 SEPTEMBER                         kicker · Menlo 11/16 · ls 1px · muted
A 14th straight week at No. 1 in Switzerland: the Schweizer Hitparade dated …
                                              Arial 19/28 (headliner) or 15/23 · ink · clause bold
burnaboystats.com/dai-dai ↗                    Menlo 12/18 · gold
```
- **The whole entry is one anchor** (`display:block` inside a `<td>` padded 20px 24px). Target = the text block, 69–224px tall; adjacent targets are 40px apart by cell padding. This solves the 14px `SEE THE FIGURE` target and, as a side effect, stops iOS date detection (it doesn't run inside an existing link).
- **The visible affordance is the destination itself**: `burnaboystats.com/dai-dai ↗` — computable from `href` alone, it varies (unlike eight identical `SEE THE FIGURE`s), and it is the site's own habit of saying where a figure lives. The twin prints the same URL, so the two bodies agree. The arrow keeps the existing text-presentation fix.
- **Date stays.** The entries span 13–16 September and the site's provenance is dated ("read on 14 September"). Category first, date second, one mono line.
- **Category is the word**, muted, no dot, no colour. The brief allows the category colours as an accent; I chose not to add seven hues to an email whose only accent should be "where this goes". Gold = links; muted = labels; ink = facts.
- **Corrections:** an entry opening *A correction* gains `CORRECTION · ` at the front of its kicker. Keyed on the opening, no new field.

### 4.3 The header — a masthead, then the first fact
Revised 16 Sept after review ("the top and bottom feel empty"): the ends now carry the brand; the middle is unchanged.

```
[crown 40×35]  BURNABOYSTATS                      Arial bold 24/28 · ls 1px · ink + gold STATS · → /updates
               THE SATURDAY DIGEST · 13–19 SEPTEMBER · 8 ENTRIES     Menlo 11/16 · ls 1px · muted
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  2px rule in gold
```
Cell `20px 24px 18px` (16px 16px 18px at 375); the row is ~90px. The email opens on the lockup because trust in an inbox is *sender first*; the fact still begins by y≈150 at 375 and three lines of it are on screen before 240. The digest line wraps to two lines at 375 — accepted.

**The crown is the one image**, on the brief's terms: a transparent PNG (`crown-email-2x.png`, 80×70, shown 40×35 / 36×32), HTML `width`/`height` attributes, `alt="Burnaboystats"`, self-hosted at burnaboystats.com — one request to our own domain, no third party, tracking off in Resend. With images off the alt text sits where the mark was. Under a full invert the gold crown lands on near-white at ≈1.6:1 — visible as a shape, faint; the wordmark beside it carries the identity. **If the team would rather keep the email at zero requests**, the masthead works without the crown: the wordmark and gold rule alone still carry it, and the engineer drops one `<img>`.

The 2px gold rule replaces the 1px `#2a251f` hairline under the masthead and reappears above the footer: a fill, not a tint, so it survives recolouring (brown-gold on light) where the hairlines vanish.

### 4.4 Dark ground — and why
- **Five of seven** dark-mode clients leave a dark email as drawn; a light email is recoloured by **all seven**. The design is what the reader sees in more cases.
- The reader confirmed on a dark site, the confirmation email was dark, the OG cards are dark. A light digest would be the odd one out.
- The two clients that fully invert (Gmail iOS, classic Outlook) turn `#0d0b09`/`#ffb627` into near-white and brown-gold — approximately the site's own **light theme** (`#f7f4ee` / `#945e00`). The failure mode is the brand's other mode.
- In a light pane (Gmail web, Apple Mail) a dark 600 column reads as a card from the site, not a page — the board *In the client's frame* shows it.

**What must hold** (the rule the brief sets — no meaning on a tint — is met by construction):

| pair | drawn | floor | under recolouring |
|---|---|---|---|
| ink `#f5f4f0` / ground `#0d0b09` | 17.85 | 7:1 | both ends move; holds |
| muted `#bdb5a8` / ground | 9.67 | 4.5:1 | kickers, week line, footer sentences, Unsubscribe |
| fine `#8a8279` / ground | 5.19 | 4.5:1 | the legal line — the floor case; 13px at 375 |
| gold `#ffb627` / ground | 11.20 | 4.5:1 | Gmail's flip lands ≈ `#8a5a00` on near-white = 5.40 |
| bold clause / ground | 17.85 | 7:1 | hierarchy by weight, not colour |
| rule `#2a251f` / ground | 1.29 | none | decorative; may vanish |

May shift: every colour, together. May vanish: the rules — structure is 20px cells and 19/15 type, so a rule-less render is the same email. Must not carry meaning alone: gold — links are identified by position (a URL line under every entry) and shape (Unsubscribe underlined). **No second palette**; keep `<meta name="color-scheme" content="dark">` alone — a `prefers-color-scheme` rule would be a no-op on a dark email.

### 4.5 The preheader — the second fact, then the shape of the week
Computable from category, text and window; never the subject's clause.

**N ≥ 2:** `{opening clause of entry 2, quotes removed} — {categories present, lowercase, deduplicated, in rank order, joined with commas and "and"}, {from} to {to}.` capped at 120 at a word boundary with `…`.
**N = 1:** the entry's text *after* its opening clause, first letter capitalised, capped at 120 with `…`.

- Eight: **Back inside the global Top 10 — certifications, charts and streaming, 13 to 19 September.** (89; the first 40 = *Back inside the global Top 10 — certific*)
- One: **The Schweizer Hitparade dated 13 September keeps “Dai Dai” at the top for the 14th consecutive chart since 14 June,…** (116)

Gmail desktop row: *A 14th straight week at No. 1 in Switzerland — and 7 more this week — Back inside the global Top 10 — certific…* — two facts and the categories in ~110 characters.

### 4.6 The footer — provenance, cadence, then the three links, then the small print
1. *Every figure above links to the page it lives on, read at the body that publishes it.* — Arial 13/20 muted
2. *Sent on Saturdays at 18:00 London, only in weeks something happened — this one ran 13 to 19 September. A quiet week sends nothing.* — 13/20 muted. **"A quiet week sends nothing" lives here**, closing the cadence sentence — the only place the promise is made in the email.
3–4. `ALL UPDATES ↗` · `HOW THE NUMBERS ARE CHECKED ↗` — Menlo 12/18 ls 1px gold, each its own 44px cell (13px padding), side by side; they wrap to two rows at 375 without a media query.
5. `UNSUBSCRIBE` — Menlo 12/18 ls 1px **muted, underlined**, own 44px cell. The one underlined link in the email: convention for the escape, and legible by shape under any recolour. Carries the placeholder once.
6. **The sign-off band** — the one gold field in the email, closing it the way the confirmed ticket closes the module: `background: gold`, `padding: 22px 24px`, `BURNABOYSTATS` Arial bold 20/24 ls 1px + `THE NUMBERS, VERIFIED · SATURDAYS · 18:00 LONDON` Menlo 11/16 ls 2px, both in ink-on-gold (10.8:1). Not a link. Under a full invert it becomes a brown-gold band with near-white text (≈5.4:1) — the one fill, and it holds. This is the answer to "the bottom feels empty": a brand statement, not more grey text.
7. *You're getting this because you confirmed at burnaboystats.com/updates. An unofficial fan site — not affiliated with or endorsed by Burna Boy.* — Arial **12/18** fine (13/19 at 375). One paragraph, under the band.

The footer opens with the same 2px gold rule the masthead closes with — the email is bookended.

### 4.7 Type without the site's faces
| site role | site face | email face | size / lh | ls | case |
|---|---|---|---|---|---|
| display (Anton) | H1s, big figures | **Arial bold** — the opening clause of every entry, and the lockup | 19/28 · 15/23 · 16/20 | 0 (lockup 1px) | as written (lockup upper) |
| body (Geist) | prose | Arial regular — the rest of each entry, footer sentences | 19/28 · 15/23 · 13/20 · 12/18 | 0 | — |
| label (Space Mono) | kickers, chips | **Menlo / Consolas / Droid Sans Mono** — kicker, week line, URL lines, footer links | 11/16 · 12/18 | 1px (URL line 0) | UPPER (URL line as written) |

Anton's *display* job is carried by **weight inside the sentence**, not by size on its own — 260 characters of uppercase or of 24px Arial would be a wall. Two weights exist in every stack; the design uses both and nothing in between. Android widths (Roboto) are ~4% wider than Arial: the masthead's week line is the one place it matters, and at 375 the media query drops its tracking to 0 so both fit on one row.

**Measure:** headliner ≤ 58 characters/line at 600 (552px), ≤ 36 at 375 (343px); list ≤ 74 / ≤ 46. Gmail iOS (343 → 311 content): 33 / 41.

### 4.8 Edges (boards *Digest — one entry*, *Edge — correction*, *Edge — capped subject*)
- **One entry:** masthead says `1 ENTRY`; one 19px entry; footer. Nothing to divide, nothing to count. Subject is the bare clause; preheader the N=1 rule.
- **Eight:** the 600 board.
- **Correction as headliner:** `CORRECTION · CHARTS · 2 SEPTEMBER` above the bold *A correction, twice over:*. Nothing else changes — the correction is a fact like the others.
- **Capped subject:** *A circulating 6,050,000 worldwide units for Dai Dai goes on the… — and 7 more this week* (87). A phone's 40 stop at *units* — the number is on screen and the preheader carries the second fact. A clause over 72 is also an editorial signal; a test capping the clause at 72 would catch the entry before it ships. Design cannot fix the subject rule and does not try.

### 4.9 Confirmation — not redrawn, but give it the same masthead
No hex changes, so the redraw is not required. Recommended in the same commit: the confirmation takes the digest's masthead (crown + wordmark + `THE SATURDAY DIGEST · ONE TAP TO CONFIRM` + gold rule) so the two emails are visibly one sender, and its 11px legal line becomes 12px. The button and body stay.

---

## Tokens and strings

**Palette (unchanged, `card` retired; gold now also a fill — the rules and the sign-off band — and ink-on-gold now used by the digest):** ground `#0d0b09` · rule `#2a251f` · ink `#f5f4f0` · body `#cfc7bb` (confirmation only) · muted `#bdb5a8` · fine `#8a8279` · gold `#ffb627` · ink-on-gold `#14100a` (confirmation button only).

**Structure — 600:** outer cell `padding: 24px 0`; column `width:100%; max-width:600px`; inner cells `padding-left/right: 24px` → 552 content. Masthead cell `12px 24px`, rule below. Entry cell `20px 24px`, `border-bottom: 1px solid rule`; inside the anchor: kicker → 8px → sentence → 8px → URL line. Footer cell `24px 24px 8px`; paragraphs 10px apart; link cells 13px vertical.

**`@media (max-width: 480px)` — every change:** masthead top `20 → 16` · crown `40×35 → 36×32` · wordmark `24/28 → 20/24` · outer `24px 0 → 16px 0` · inner horizontal `24 → 16` · entry vertical `20 → 16` · headliner `19/28 → 18/27` · week line ls `1 → 0` · footer top `24 → 20` · fine `12/18 → 13/19`. Nothing else. `<style>` dropped → the 600 values in a 343–375 column (board three).

**Strings on the boards:** lockup `BURNABOY` `STATS` · digest line `THE SATURDAY DIGEST · 13–19 SEPTEMBER · 8 ENTRIES` / `· 1 ENTRY` · band `BURNABOYSTATS` + `THE NUMBERS, VERIFIED · SATURDAYS · 18:00 LONDON` · kicker `{CATEGORY} · {D MONTH}` (+ `CORRECTION · `) · URL line `burnaboystats.com{href} ↗` · footer as §4.6 · `<title>` *Burna Boy Stats — the week to 19 September* (kept) · preheader as §4.5. Retired: `01 02`, `ALSO THIS WEEK · N ENTRIES`, `SEE THE FIGURE ↗`, `THE WEEK TO …` (replaced by the range).

**Twin** (`digest-2026-09-19.txt`): `BURNABOYSTATS` / `The Saturday digest · 13–19 September · 8 entries` / blank / per entry: kicker line, the whole text, the URL on its own line, blank / footer sentences / each footer link as label line + URL line, blank between / then `Burnaboystats — the numbers, verified.` / blank / the two closing sentences on two lines. No divider, no numerals — order carries the headliners.

## What changes in the code (for the engineer)
`digestEmail.ts`: masthead = crown `<img>` (self-hosted `/email/crown-email-2x.png`, width/height attrs, alt) + wordmark 24px + digest line, 2px gold rule; footer opens with a 2px gold rule and closes with the gold band before the legal line; drop `splitDigest`'s card/list rendering and `firstSentence`; one loop, `big` → 19px class; `<strong>` around the clause (reuse the subject's clause function); anchor wraps the entry; URL line from `href`; masthead range; footer per §4.6; `.fine` 12px + media query 13px. `renderDigestText` per the twin. Preheader function per §4.5. `emailChrome.ts`: remove `CARD`. Tests: strings above; `firstSentence` gone from both bodies; clause bold present on every entry; placeholder once.
