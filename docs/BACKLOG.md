# Known gaps — working backlog

Findings from the five-lens audit of 21 Aug 2026 (visitor, data coverage,
accessibility, operations, reach/credibility). 28 candidates were raised, each
one then checked by a second pass whose job was to **refute** it; 23 survived.
The five that did not are recorded at the bottom so nobody re-raises them.

Tick an item when it ships. Keep the evidence line — it is what makes the item
actionable months later, and several of these look wrong until you see the
number.

**Order is by what I would do first, not by severity.** Cheap-and-load-bearing
beats expensive-and-worthy.

---

## 1. Correctness risks — a wrong figure could ship silently

- [x] **CI never runs on the bot's commits.** `.github/workflows/stats-live.yml:69`
      commits with `[skip ci]`, and `ci.yml` triggers only on pushes it therefore
      ignores. That is ~24 pushes a day, and they are the only writes to the
      fastest-moving published figures. No typecheck, no tests, no SEO gate —
      the sole guards are the generators' own "refuse a small result" checks.
      *Done when:* the bot's pushes run at least typecheck + tests, and a red
      result stops the publish rather than being invisible.
      **DONE — Verification now runs INSIDE the bot's own job, before the push — a bad regeneration is stopped rather than reported once live.**

- [x] **The wholesale live-chart rewrite is gated by a floor set ~14× too low.**
      `scripts/build-live-charts.mjs:322` refuses to write only when total
      placements fall below `MIN_PLACEMENTS` (50 for Burna Boy, 25 for a board
      artist) against a real value in the hundreds. A sweep that loses 80% of its
      data still writes.
      *Done when:* the guard is relative to the previous run, not an absolute
      floor — refuse a drop beyond some proportion and keep the last good file.
      **DONE — Guard is now proportional: refuses a drop of more than 40% against the previous run, absolute floor kept as a backstop.**

- [x] **`continue-on-error: true` freezes all nine board live pages behind a green
      workflow.** `stats-live.yml:53-56` — Burna Boy's identical step runs bare,
      the board's does not, and nothing downstream checks board freshness, so the
      pages quietly serve the last good snapshot forever.
      *Done when:* a failed board rebuild is visible — either it fails the job or
      it trips the staleness check that already exists for his own figures.
      **DONE — The board step keeps continue-on-error so it cannot block his refresh, but a failure now fails the run at the end, after the commit publishes.**

- [x] **The generator re-parses its own output with a regex and silently falls back
      to empty.** `build-live-charts.mjs:108-111` and `:425-427` both do
      `t.match(/…/)?.[1] ?? "[]"` inside `.catch(() => [])`, with no logging on
      the empty path. Latent rather than live — no occurrence in 13 days of hourly
      runs — but it couples the writer to its own formatting.
      *Done when:* the carry-forward path reads structured data, or at minimum
      logs loudly instead of returning `[]`.
      **DONE — one `readGenerated()` helper now separates the three outcomes the old code folded together: file absent (fine, first run), unreadable, and present-but-unparseable. The last two stop the run. Both branches proven against a real file.**

## 2. The front door is broken

- [x] **Search cannot find the site's own records.** `app/lib/searchIndex.ts` is 79
      hand-written *page* docs with no data rows, and the scorer is a whole-string
      substring match with no tokenisation or punctuation folding.
      *Reproduced against the real data:* **63 of 85 certified titles return zero
      results** — including "Location", his most-certified title (Diamond in
      France, 5× Platinum UK, 14 countries). All 46 award bodies return zero.
      Collaborators ("coldplay"), countries ("Netherlands") and every multi-word
      query ("burna boy grammy") return zero. `"I Told Them..."` with three dots
      returns zero while the ellipsis character works — `app/lib/titleKey.ts`
      already folds exactly that and search does not use it.
      The placeholder says *"Songs, records, countries, awards, pages…"* and the
      empty state suggests *"a country, a song title, an award body, or a year"* —
      all four categories fail. It is also the `SearchAction` target in the
      homepage JSON-LD.
      *Done when:* typing any certified title, award body, collaborator or
      charting country finds something. Note `searchIndex.ts` is deliberately
      free of data imports for bundle size — `app/lib/searchStats.ts` shows the
      server-side pattern to follow.
      **DONE — 63 of 85 certified titles returned zero; now zero do. Also every award body, collaborator credits, charting countries, multi-word queries and three-dot ellipses. A generated index (204 docs, 5.3KB gzipped, cached once) plus a tokenised, punctuation-folding scorer. Generated docs rank below curated pages on anything short of an exact title, so records do not crowd out pages — 'billboard' still returns Chart Records. A test regenerates from the data and fails if the checked-in file has drifted.**

- [ ] **Data tables and FAQ answers never link to the pages that answer them.** 15
      song pages and 11 album pages exist and are good, but the certification
      ledger and chart tables are terminal — a reader looking at a row cannot get
      to the page about it.
      *Done when:* a ledger/chart row for a title that has its own page links to
      it.

## 3. Data model — limits on what the site can ever say

- [ ] **Chart entries carry no date and no longevity.** `ChartEntry` in
      `app/data/charts.ts:137` is `{ c, peak, note? }`; the board's `AfroPeak` is
      the same shape. No date reached, no weeks on chart, no weeks at No. 1, not
      even a chart year. So longevity lives only in prose — which is exactly how
      the "5 weeks / 8 weeks" Billboard figures drifted and had to be corrected by
      hand.
      *Done when:* longevity is a field, and the prose reads from it.
      *Effort: large — it is a schema change across two datasets and their
      consumers, so it wants its own plan.*

- [x] **Certification thresholds are never published.** The dataset records tier
      and multiplier but nowhere states what a tier means in units, so 230 unequal
      plaques are presented as equals. Grep of the rendered text of
      `/certifications`, `/methodology` and `/faq` finds no unit figure and not
      the word "threshold". The RIAA Latin plaque already proved the cost: 120,000
      units sitting beside a 1,000,000-unit Platinum with nothing saying so.
      *Done when:* each certifying body's thresholds are stated somewhere a reader
      can reach from a plaque.
      **DONE — Stated where it matters rather than as 26 threshold tables: a tier is a statement about one market, thresholds differ by body, so the totals count PLAQUES and a plaque count is never a sales figure. Uses the site's own verified example — RIAA Latin certifies 2x at 120,000 units against a standard Platinum's 1,000,000.**

- [ ] **Nigerian chart coverage is far thinner than the Nigerian certification
      data.** 63 NG-certified releases against 20 with an NG chart peak.
      *Done when:* the gap is closed from TurnTable's own register, or the
      methodology states why it cannot be.

- [ ] **Year-end charts are absent entirely.** Repo-wide grep for
      year-end/end-of-year/annual-rank returns zero chart data. Billboard,
      Official Charts and others publish them, and they are a natural question.

- [ ] **The board has no awards for any of the nine artists.** `AfroArtist` carries
      certifications and chart peaks and nothing else, so "who has the most
      Grammys/BET/Headies" — the most natural question a ten-artist comparison
      invites — cannot be asked.
      *Effort: large.* Nine artists' award histories, each primary-sourced.

- [ ] **No country view.** Three country-keyed datasets exist (230 certifications
      across 26 countries, 280 chart entries across 71 territories, 57 countries
      performed in) and no page joins them, so "what has he done in my country?"
      has no answer.

## 4. Credibility and reuse — the stated bottleneck is authority

- [x] **No outbound link to a primary source.** The site names RIAA, BPI, SNEP,
      the Official Charts Company, TurnTable and Billboard on nearly every figure
      and links none of them. `/records/cars` is the single exception, and it
      proves the pattern is acceptable here.
      *Done when:* a reader can click through from a figure to the register that
      awarded it.
      **DONE — /methodology now carries a register list linking each certifying body's own page. Derived from COUNTRIES, so it cannot name a body no plaque here came from. Ten bodies, every URL opened in a real browser and confirmed by page title first — a dead link to a primary source is worse than none, which is why the other sixteen are absent rather than guessed.**

- [ ] **No public record that a figure ever changed or was corrected.** No
      corrections log, no per-figure history. `grep -rIn "github" app/ public/`
      returns nothing — the repo is public and the site never links it, which is
      the cheapest possible proof of the site's own rigour.
      *Done when:* at minimum the repo is linked; ideally corrections are logged
      where a reader can see them.

- [ ] **The verification work is buried in code comments.** `app/data/awards.ts`
      holds six dated, body-by-body passes recording claims that were checked and
      **rejected** — ASCAP, The FABYs, That Grape Juice, Africa Golden Awards,
      Odudu PH City. That is the strongest evidence of rigour on the site and no
      reader can see any of it.

- [ ] **The API omits what journalists quote.** Four endpoints (stats, charts,
      certifications, songs); no awards, no tours/box office, no timeline, no
      board. Figures also ship as display strings rather than numbers.

- [ ] **Stat cards travel without an as-of date.** The shareable PNGs carry the
      figure and the source body but no date, and the date is rendered inches away
      on screen. A card outlives the number on it.

## 5. Accessibility

- [x] **Silver tier badge text fails WCAG AA contrast.** `--tier-silver` (#626B77)
      is used as *text* colour, ~175 instances, on the site's headline dataset.
      **DONE — #626B77 (3.66:1 on --bg, 3.14:1 on --bg-soft-2) raised to #848F9E — 5.18:1 worst case, same blue-grey, still the dimmest of the four so the tiers keep reading in order.**

- [x] **Desktop filter chips expose no selected state and filtering is never
      announced.** All 15 `.fChip` sites across `CertExplorer`, `ChartExplorer`
      and `AwardExplorer` carry selection in `className` only — no
      `aria-pressed`, no live region. WCAG 4.1.3.
      **DONE — All 15 chips across the three explorers now carry aria-pressed off the same condition that sets the class, and a polite live region announces the filtered count.**

- [x] **The contact form gives no feedback a screen reader can perceive.**
      `ContactForm.tsx` — no `autoComplete`, the error branch is a bare `<p>` with
      no `role`, and the success state is an early return with no announcement.
      This is the page the methodology names as the way to report an error.
      **DONE — autoComplete on name/email, role="alert" on the error (it was a bare <p>), and role="status" + tabIndex on the success state, which replaces the form outright and used to leave focus on a control that no longer existed.**

- [x] **Bar charts publish their numbers to sighted readers only.**
      `RankedBars.tsx:33` wraps rows in `<figure role="img">`, which hides the row
      text from assistive tech.
      **DONE — role="img" collapsed the chart into a single image, hiding every row's name and value. Dropped; the figure keeps its aria-label, the rows are read as the text they already are, and only the drawn bar is marked decorative.**

- [ ] **No accessibility statement.** Low impact, listed for completeness.

## 6. Infrastructure (found outside the audit)

- [x] **No Content-Security-Policy header.** Every other security header is set in
      `next.config.mjs` — HSTS, referrer-policy, nosniff, X-Frame-Options,
      permissions-policy. CSP is the one missing.
      **DONE — Added REPORT-ONLY, deliberately: the app ships 29 files of inline JSON-LD plus Next's bootstrap, so an enforcing policy that is slightly wrong takes the site down rather than degrading it. Verified shipping with zero violations across four pages, which is what makes enforcing it the next safe step.**

- [x] **No `global-error.tsx`.** An error in the root layout renders Next's default
      white page instead of the site's own.
      **DONE — Added. Replaces <html>/<body> with inline styles in the site's own tokens, because a global error may be the stylesheet itself failing. Uses a plain <a>, not next/link — the router is exactly what cannot be trusted in this boundary.**

---

## Checked and rejected — do not re-raise

Each of these was reported by a reviewer and refuted against the code:

1. **"Awards are never joined to the music they were won for."** The `work` field
   *is* rendered on the awards explorer.
2. **"`/music` covers only albums — no singles or features."** The guest catalogue
   exists, is credited and reachable, and `/music` links to it.
3. **"Nothing distinguishes 'never charted' from 'not checked yet'."** Mostly
   wrong — the marquee example is already stated in prose on `/music/ye`.
4. **"26 of 27 watched metrics have no alerting channel."** False:
   `tests/staleness.test.ts:70-73` runs `staleMetrics()` against the real
   `watched-metrics.json`.
5. **"You cannot cite one stat — no row can be anchored."** Substantially refuted;
   rows can be anchored and filtered views can be linked.
