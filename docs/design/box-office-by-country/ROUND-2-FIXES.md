# Round 2 for Claude Design: gross pages + certifications phone density

Thank you. **Jobs 1 and 2 are approved in direction (ranked bars; the record night) and are being BUILT NOW** from your round-1 canvases with fixes 1–19 below applied in code, so please update those files to match for the record, but they don't block anything.

**What we need from you in this round: Job 3 and the portrait (fixes 20–36),** redrawn and re-measured, plus the owner's rulings below. Send back the same bundle and a short response listing each fix by number.

Reference: docs/design/box-office-by-country/README.md and PORTRAIT-CERTS-HERO.md on main (https://github.com/paulemmanuelng/burnaboystats/tree/main/docs/design/box-office-by-country).

**Job 1, Highest-Grossing Artists by Country**

1. **Desktop state frames S1–S6 and S8 render broken (item 3).** The country tables squeeze into a 220px column, and S6 shows no Africa or South America section. The cause is `GXCountriesDesk.dc.html:281`, which sets the two-column grid whenever the frame is wide, even when the index is hidden. Change it to `mainCols = showIndex ? '220px minmax(0,1fr)' : 'minmax(0,1fr)'` and re-shoot S1–S8 at 1440. S6 must show both "No reported box office yet" sections. Also set S8's focus to "Germany:Tems", because Davido has no row in Germany (canvas :165).
2. **The phone back bar's "12 COUNTRIES" is a gold-filled pill (items 9, 12).** It is at `GXCountriesPhone.dc.html:158`. That redraws the chrome, puts gold on a figure that isn't his, and makes a second gold beside "Every show, ranked". Draw it as live: plain `--text-muted` text with no fill and no border (`.mutedBadge`). Drop the "→" from "Every show, ranked" and the "↗" from "Make a stat card" on the shows page (:164, GXShowsPhone:95), or list them as chrome label changes.
3. **The ledes overstate the coverage (items 1, 10).** "Every reported box-office gross…" and "Every single night reported…" are false, because reported nights are held off the board: Tiwa Savage at O2 Academy Brixton, and the Ziggo Dome. Write "Every verified, reported box-office gross by an African artist, added up country by country." and "Every reported single night by an African artist we have verified, ranked by gross — from {top} to {last}."
4. **Money below $1M prints as "$0.39M" (item 1).** `bo-derive.js:10` causes it. Use the live rule: "$385K" under $1M (`revenueByCountry.ts` usdM). Use one money form per screen, so the phone block head ("$15.50M") and the row beneath it ("$15.495M") agree.
5. **The ladder names no artist but him (item 1).** Japan, the Philippines and Singapore are grey bars with nothing saying "Tyla". Add each leader's name to every ladder row, in the same position and muted ink for everyone: a 12.5px column after the country on desktop, under the country on the phone. His figures stay gold.
6. **One-artist countries break the table (S3).** The artist moves to x≈558 with no rank, the "the only artist reported" line wraps, and the rule is doubled. Give the single artist a normal row (rank 01, ARTIST column, best night, nights, total), with "the only artist reported" in the country head. Use one border per block.
7. **Phone row edge cases.** Write "1 night", not "1 nights" (GXCountriesPhone:128). His best-night figure is gold on both layouts; today it is ink on the phone. The Canada callout should name the leader ("Burna Boy's $5.684M"), not say "his" (:193).
8. **Hero tiles at 1024 collide.** "$68.87M" runs into "89", and the labels wrap to three lines. At 1024 use 2×2 tiles, or 32px figures with ≥16px gutters. Labels stay at two lines. Keep "n countries" on one line in the continent cards, and give the best-night column about 40px more at 1440.
9. **Light `--other` (#857d71) reads as the same brown as the gold (item 6).** Use a cool neutral of about #8b8d96, still ≥3:1 on paper, so the pair differs in hue as well as by the 2px gap.
10. **Countries OG card (item 8).** Add each leader's name, muted, after the country in the ladder.

**Job 2, Highest-grossing shows**

11. **The shows OG card's ladder names no artist (item 10).** Rows 03 and 04 both read "La Défense Arena", and only colour separates Fally Ipupa from Burna Boy. Label every bar "{artist} · {venue}" in a column about 230px wide, with an ellipsis rule.
12. **Multi-night runs (item 14) is not "unchanged".** The phone prints a different lede (`GXShowsPhone.dc.html:62`) and drops the tour and "tickets over N nights". Print `RUNS_LEDE` verbatim on both layouts, keep one sentence on desktop, keep the tour in the meta and "29,579 tickets over 2 nights" (the "Run · N nights" marker may stay). Put the derived "top N" sentence after `RUNS_LEDE` at the section head.
13. **Deep Pages 14 is half redrawn (item 15).** The hero says "82 … 32 are his", but the rows are still the old 41-show `REV_ROWS` (line 1331). They include the held-off Ziggo Dome, invented half-splits of the Toronto and Montreal runs, and Wizkid's O2 per-night average. They show no artist name. The chips read "All 41 / Burna Boy 27 / Others 14", the legend is "His nights", and the foot says "from Billboard Boxscore". Replace screen 14's body with the GXShowsPhone default: the same kicker and record card, chips "All 82 · Burna Boy 32 · …" with the per-artist rail, "82 of 82 shows", rows with "{artist} · {city} · {year}" meta, and the four-line source note. Or replace the screen with a pointer to GXShowsPhone. Delete `REV_ROWS` and the 41/27/14 chips.
14. **Item 16 renames.** Mobile 04's teaser does not agree. It prints "27 of the 41 biggest African shows are his" (`Mobile.dc.html:1174`); the real figure is 32 of 82. Records, Records - Tours ("27 of the 41 … as of July 2026", "See the full top 41") and Deep Pages 12 still carry the stale 41-row arrays under the new names. Point them at `bo-data.js`/`bo-derive.js`, or set "32 of the 82", "See all 82", "as of October 2026" and a top 8/10 without Ziggo or split runs. Correct item 16's "it agrees". Records - Tours lines 179 and 187 also change the tour-map and festivals card hover, which item 16 doesn't list: revert it, or list it with a reason.
15. **Hero labels (item 10).** The phone tile reads "HIS GROSS" over 65.7%, which is a share, and the caption says "his $40.28M of $61.29M". Write "His share of the board" and "Burna Boy · $40.28M of $61.29M", matching the desktop and Job 1. Relabel "130× / The smallest night" as "Top night ÷ smallest".
16. **Filtered phone states S2 (Wizkid) and S8 (Davido) hide the active chip off-screen.** Scroll the active chip into view, draw it so, and optionally echo the name in the count line ("1 of 82 shows · Wizkid").
17. **Phone top bar at 320 (item 12).** "HIGHEST-GROSSING SHOWS" has 3px spare. Specify `min-width:0; overflow:hidden; text-overflow:ellipsis` (keep #408 k3), and draw the fallback-font case. Confirm the phone rows keep #408 k2's split meta, so the year never clips.
18. **Source notes.** There are four different typed wordings. Draw each as `REVENUE_SOURCE + ', as of ' + REVENUE_AS_OF`. If the phone needs a short form, propose a named `REVENUE_SOURCE_SHORT` as a numbered change.
19. **Small copy.** "six artists hold under 3%" → "five". "12 of 175 shapes light up" → "11 of 175; Singapore has no shape at 110m". Run markers at 11px, not 10–10.5px.

**Job 3, certifications phone density**

20. **The tier splits are invented (items 17, 24, 31; every frame, including Before/After).** Burna Boy, both on: drawn 9/61/108/71, real 7/103/105/34. Both off: drawn 4/30/49/28, real 4/43/55/9. Tyla, both on: drawn 2/21/34/18, real 2/30/40/3. Tyla, both off: real 2/25/34/3. Tiwa Savage, both on: real 0/6/2/4. Drive every frame from #404's view table, redraw, and re-measure §7a and item 31 on the true bar lengths. Withdraw "tier splits are sizing examples" and correct the self-check's "none is typed". Draw the tier bars with the live GRAD fills and the percentages in Geist (mono is labels only).
21. **The desktop "both off" hero regresses the 3 Oct "labels adapt" ruling (item 30).** `CertDeskHero` keeps "Total certifications", "Albums, singles, features", "International awards" and the "…most-certified African artist in history" clause (:92), and shows New in 2026 = 31 (the real figure is 51). Draw the live adaptive strings for every view:
    - the lede `heroLede(view)` verbatim: "Burna Boy has 111 international certifications as lead artist across 23 countries — Silver, Gold, Platinum and Diamond awards from bodies including the RIAA (US), BPI (UK), SNEP (France) and Music Canada.";
    - the strip notes "Outside Nigeria · Lead credits", "Albums and singles" and "International awards, lead credits";
    - New in 2026 = 51.
    Mark the copy "unchanged from live; only the portrait geometry changes".
22. **The light theme is drawn in the dark gold (items 19, 28–30).** On paper, the on-switch track and edge, the "All N" chip, the Compare action and the desktop switches are #ffb627 (about 1.6:1). Use the light tokens: #945e00 gold fill with white ink and knob, as live. Re-shoot the light frames and re-measure §8's Job 3 pairings.
23. **Item 22 shrinks the live lede.** Live phone ledes are `var(--type-lede)` = 18px / 1.5, which tests item 71 pins. Keep `.lede` on `--type-lede` and re-measure every Job 3 frame at 18/27. The targets still hold at 390, with the switches about 30px lower and still above the fold. Drop item 22, or reword it to "unchanged". Keep `--text-body-cool` (the colour fold is an owner question).
24. **Item 26: keep the live empty state.** Live already prints `emptyViewSentence`, e.g. "Every international plaque Tiwa Savage holds is a featured appearance — turn Featured appearances back on to see them." It says why the view is empty and how to undo it, adapts per view, and is test-pinned on both layouts. "A real gap in the record" is the desktop FILTER empty state, not this. Redraw the Tiwa Savage and BNXN frames with `emptyViewSentence`.
25. **"Last verified" dates are typed and wrong (items 21, 27).** Tiwa Savage is 25 September 2026, Seyi Vibez 6 September 2026 and Omah Lay 2 October 2026; only Tyla's is right. Draw the date as a slot from `verifiedOn`.
26. **The provenance caption (item 21) can't be derived as drawn.** Specify it as `Read off-register: ${offRegisterPhrase(view,'short')}. Last verified {date}.` and draw that helper's output. Otherwise list a change to `offRegisterPhrase` as a numbered item.
27. **"…and 22 more." is typed (item 20; Mobile 02:258, CertPhone:122).** Restore the slot `{{ certCountries - 4 }}`.
28. **Kicker (item 25).** The canvas tracks 0.12em; live is 0.11em. Set 0.11em in CertPhone and Mobile 02, then re-measure "Outside South Africa · Lead credits" at 320. The canvas reads 282/284 (2px spare), not the 278/284 claimed. Draw the two mixed views ("Worldwide · Lead credits" and "Outside <home>") for Burna Boy and Tyla at 390 and 320.
29. **Unit and h1 markup (item 23).** Spell out the h1: the visible total stays the h1, with `<span class="visuallyHidden">{subject}, {viewNoun}: </span>` inside it. There must be no second h1. Visible: "Awards / {n} countries".
30. **Place the #release focus bar (item 17).** The new order has no place for it. Suggested: under the provenance caption, above the tier rail.
31. **Afrobeats - Mobile Artist (item 27).** Omah Lay needs the "Nigeria · Included" switch too (his plaques sit on both sides of it). His typed lede ("Two French Diamonds…") is false in the narrowed views; use the item-21 pattern with its narrowed forms. Correct the figures: Seyi Vibez 102 (not 103), Omah Lay 63 across 9 countries (not 61), and fix or drop the "114 chart entries" note (it is 129). Put "Last verified" in the caption under the tier bars, as items 21 and 27 say. Use `--text-body`, not the literal #cfc7bb. Mark the untouched sections (tier accordion, "Burna Boy 230", "19 August") "superseded, see CertPhone", so no builder copies an accordion. Do the same for Mobile 02's stale 221 / 6/88/97/30.
32. **The action bar at 320 truncates to "COMPA… ↗" and is drawn unlike live (left label, far-right arrow).** Draw it exactly as live (chrome not redrawn), and confirm "COMPARE ↗" fits at 320.
33. **Item 19 premise is stale.** Live already has the `--rule` edge at 3.30:1 (#408 k5), not 1.95. Restate the item, or drop it (see owner question N1).

**The portrait (items 28–32)**

34. **The slot doesn't work for every artist (items 28, 32).** Width-fit placement shows only 0–70% of the image's width, so `portraitArt.ts`'s focal X has nowhere to act. Asake (focal 70%) lands half off-screen, and even Burna Boy's face is cut at 320. Davido's emblem mode has no branch. "`top:-12%` of its own width" is not what CSS `top:%` does: it resolves against the container's height. Do one of these:
    - (a) define per-artist slot knobs (a vertical raise and an X shift, or `object-position` from focal X) for all 19 board portraits, plus an emblem branch;
    - (b) rule that only Burna Boy takes the width-fit slot and the rest keep today's cover box.
    Whichever you choose, draw Asake, Ayra Starr, Davido (emblem), Tyla and Wizkid with their real photos at 320, 360, 390 and 1440, in both themes. Write the raise as `transform: translateY(-12%)`. Set the bottom mask in px, not % of a hero whose height changes with the lede. State the light-theme opacity rule for every artist.
35. **Add the slot to Mobile 02 (item 28)**, the screen of record, or put a pointer to the density canvas there.
36. **Desktop portrait (item 30).** Express the widths relative to the rail (e.g. sharp copy `min(480px, 33vw)`; blur = rail + gutter), and draw 1024 and 1240 frames in both themes. At 901–1240 a fixed 480px copy sits over the copy column. Set dark opacity to 0.42 (the canvas has 0.40). Draw the live header (logo, theme toggle, About/FAQ/Contact), or label it "chrome not drawn".

## Owner rulings on your questions (4 Oct 2026)

- **Q1 South America:** yes, drawn like Africa ("No reported box office yet").
- **Q2 Unit under the total:** yes, "Awards / {n} countries" in every view, with the scope words in the kicker. Conditions:
  - the visible total stays the one h1, with "{subject}, {viewNoun}" visually hidden inside it;
  - the live region keeps the scoped noun.
- **Q3 Dated log lede:** leave it as it is.
- **Q4 Remove the "$6.15M" badge** from the shows phone bar: yes. The label keeps the live ellipsis rule.
- **Q5 Desktop certs switch row:** leave it.
- **Q6 Desktop tier percentages beside the counts:** yes.
- **N1 (item 18):** no settings-style rows. Keep the /compare-style toggle exactly as live, and only MOVE it under the lede (item 17). Item 19 drops; the live off-track edge already passes at 3.30:1.
- **N2 Two golds on the first certs screen:** the active tier chip's on-state becomes an ember border plus a wash with an ink label (your Job 2 chip style), wherever the certs rail appears. The gold action stays the only gold fill.
- **N3 (item 26):** keep the live empty-view sentence (emptyViewSentence). Redraw the Tiwa Savage and BNXN frames with it.
- **N4:** his name and the rank numerals go to ink on both box-office pages; his figures (grosses) stay gold.
- **N5:** keep the dark lede colour as live (no warm fold).
- **N6:** the record-night figure is gold only while the night is his; otherwise it is ink.
