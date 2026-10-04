# Design response: the gross pages and certifications phone density

> **Template.** This is the shape of the file you write at
> `design_handoff_burnaboystats/docs-design/design-response-box-office-by-country.md`.
> Replace every `{…}` and delete this note. The worked examples beside it are
> `design-response-tour-map-and-phone-screens.md` (the closest: several jobs, desktop and
> phone, change lists per job) and `design-response-on-this-day.md` (one job, one canvas).

**Answers:** `docs/design/box-office-by-country/README.md` (brief of {date}, code at `main` `{sha}`).
**Status:** {Jobs 1–3 drawn. Change list for approval in §{n}; nothing is built until the owner approves it.}
**Owner decisions taken while drawing:** {none yet | dated list, one line each, with the item number}.

**Self-check (brief §2.3):** {the checklist, every line ticked, or the line that fails and why}.

**Canvases:**
- Job 1, Highest-Grossing Artists by Country (`/records/tours/revenue/countries`): `designs/desktop/{Highest-Grossing Artists by Country}.dc.html`.
  Thumbnails and rationale, full pages at desktop 1440 (+ 1024) and phone 390 (+ 320), dark and light, every state the brief names, the OG card.
- Job 2, Highest-grossing shows (`/records/tours/revenue`): `designs/desktop/{Highest-Grossing Shows}.dc.html`, the same set.
  `Records - Revenue Per Show.dc.html` superseded (pointer line at its top); Deep Pages screen 14 edited in place to the new default;
  names only in `Records - Tours.dc.html`, `Records.dc.html`, Deep Pages 12 and Mobile 04.
- Job 3, certifications phone density: edits in place in `mobile/Burna Boy Stats - Mobile.dc.html` (screen 02) and
  `mobile/Afrobeats - Mobile Artist.dc.html`, plus `designs/mobile/{Certifications Phone Density}.dc.html` for the states.

**Every figure on every board is computed from the data you were given** (`research/`), never typed. Dashed magenta marks a slot;
it is annotation only.

---

## 1. The idea in one line

{One sentence per job.}

## 2. Directions explored

{Per gross page: the two or three thumbnails, named; the one chosen and why (who it serves, what it shows first, what it costs on the phone).}

## 3. Job 1: Highest-Grossing Artists by Country, desktop

{Hero; the continent leaders; the country-by-country leaders (leader's total of the country's total, best night with venue and year,
the other artists ranked); the multi-night runs inside a country; one-artist countries; Africa's "No reported box office yet"
(and South America); jump navigation; the link back; the OG card. Measurements, tokens and type roles for each, in page order.}

## 4. Job 1: phone

{The same parts as the phone draws them. A separate design, not the desktop narrowed. The first-screen sum at 390 × 844.}

## 5. Job 2: Highest-grossing shows, desktop

{Hero; the artist chips; the ranked rows (every row names its artist, his included; his gross gold); Multi-night runs;
the source note; the link to Job 1; the OG card.}

## 6. Job 2: phone

{The same, with the top bar measured at 320 / 360 / 390, the one-gold-action decision and the first-screen sum.}

## 7. Job 3: certifications phone density

{Per screen: the lede (lines at 390 and 320), the provenance line, the switch row and its height, the adaptive kicker (one line at 320),
the unit under the total, the empty state. Before and after for each.}

## 8. Scale rules and contrast

{The scale rule for every bar or map, and why. Every new token with light and dark values; every pairing checked, hover included.}

## 9. Slots (longest real case)

| Slot | Longest real value | Where it breaks first | What happens |
|---|---|---|---|
| {venue} | {Brisbane Entertainment Centre} | {320 phone} | {wraps to two lines / …} |

## 10. Interaction notes

{Chips and the announced count, jump navigation, focus order, keyboard, reduced motion. Both themes.}

## 11. Change list (for approval), numbered once across all jobs

**Job 1**
1. {…}

**Job 2**
{n}. {…}

**Job 3**
{n}. {…}

**Gold moves** · **Renames and rewordings** (old → *"new"*) · **Phone chrome label or destination changes** · **Removals** · **Test changes** (which guard, old string → new string).

## 12. Questions for the owner

{Batched, each with your default, so a "yes" settles it. South America's treatment is one.}

## 13. Where my copy of an artboard differed from its excerpt

{None | file, lines, what differed.}
