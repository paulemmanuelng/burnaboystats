# Design response — the Saturday digest

**Answers:** `docs/design/handoff-email-digest-2026-09-16.md` (PR #257).
**Boards:** `design_handoff_burnaboystats/designs/desktop/Saturday Digest.dc.html` — one canvas, eleven boards named exactly as §6 asks. Every board carries its theme as the site's own tokens (`--bg --soft --text --gold-ink --gold-fill …`) on its wrapper, so a value read off a light board *is* the light token.
**Date:** 16 September 2026.

The five facts hold. Every state is kept. The two-layout rule is kept — desktop and phone were designed separately and are placed differently, for reasons stated below.

---

## The open questions, answered

### 1. Desktop — the module is the hero's right column
Not a box in a box, not its own band, not "near" the hero: **in** it. `/updates`' desktop hero is a wide band with the title stack on the left and nothing on the right at 1440. The module takes that space — `grid-template-columns: minmax(0,1fr) 480px; gap 56; align-items center` — so it sits where a first-time reader is, costs the page no vertical room, and the entries start exactly where they start today. Reading order becomes *what this page is → how to get it weekly → the entries*.

**"Follow the run" keeps:** Install the app (primary), Follow on X, RSS feed, the iOS hint — and gains one text link back up, *Prefer email? The Saturday digest ↑*, because the reader who reached the foot of 270 entries is the most engaged reader on the site. Its kicker changes to `KEEP THE SITE CLOSE`; its lede drops "or get the milestones as they land", which the digest now owns. Nothing else in the panel moves.

### 2. Phone — after the third entry, as a band
On the phone everything costs vertical room, so the module pays for its place by letting the reader **see three entries first** — the site's own habit of showing the number before asking. It is a full-bleed band on `--soft` between hairlines (not a card): `padding 22px 18px 20px`, anchored `#digest-m`. The back bar's `SUBSCRIBE` link jumps to it. The slim-strip-that-expands was rejected — it hides a one-field form behind a tap.

**Exception — the landed states.** When the page opens from the confirmation link (`?subscribed=…`) the module renders **directly under the hero**, not after entry three: the reader came back for exactly that message and must not have to scroll to find it. Desktop is unaffected (the module is always in the hero).

### 3. Promise vs form — the promise leads, and it is the facts, not adjectives
```
THE SATURDAY DIGEST                              kicker · mono 700 11 · --gold-ink
The week's numbers, in one email.                Anton 28 (phone 26) · --text
SATURDAYS · 18:00 LONDON | ONLY IN WEEKS SOMETHING HAPPENED | ONE A WEEK, AT MOST
                                                 facts row · mono 11 · --muted · 1px --line separators (phone: two lines)
EMAIL ADDRESS                                    visible label · mono 700 11 · --muted
[ you@example.com            ] [ SUBSCRIBE ]     field + button, 44px (phone 48, stacked)
Confirm from your inbox first — nothing is sent until you do. Leave in one tap, from any email.
                                                 fine print · mono 11/1.5 · --muted
```
Three of the five facts are the module's third line, at label weight; the other two are the fine print. No sentence tries to sell it. The visible label replaces the hidden one (the brief's "welcome"); the placeholder stays as an example, not a label.

### 4. The confirmed state — a ticket, once
`?subscribed=1` replaces the whole module with the one gold fill on the page: `background: linear-gradient(160deg, --gold-bright, --gold-fill); color: --ink-on-gold`. Kicker `THE SATURDAY DIGEST · CONFIRMED`, Anton 40 (phone 36) **You're in.**, then the one specific sentence the site can make: *The next digest lands **Saturday 19 September at 18:00 London** — if the week gives us something to send. A quiet week sends nothing.* The date is **derived** (next Saturday from now; if today is Saturday before 18:00, today). Below: the two remaining facts at label weight and a 44px underlined link *This week's entries ↓*. **No form** — a person who just confirmed is not asked to subscribe. Invalid and error landings keep the form (their copy says "subscribe again below").

### 5. Light theme — designed, not checked
Every board exists in both themes from the same tokens. The light gold is one value (`#945e00`) for ink, fill, bright and dim, so the light button is a flat brass pill with white text (5.44:1) and the ticket is flat brass. Light `--gold-ink` on `--bg` is 4.92:1; `--muted` 6.4:1. The header stays a dark masthead in both themes (decision recorded 7 Sept).

### 6. Empty week — said three times, each in half a sentence
The module's facts row (*only in weeks something happened*), the ticket (*a quiet week sends nothing*), and every digest's footer (*sent … only in weeks something happened — this one ran 13 to 19 September. A quiet week sends nothing.*). No dedicated empty-week UI; the silence is explained wherever the promise is made.

**Proposed, not drawn:** a *See the last digest* text link under the fine print, pointing at a public render of the most recent send — the honest way to show what they'd get. Needs a route (`/digest/latest`); Paul's call. Not proposed: a subscriber count (nothing to be proud of yet, and a small number reads as a warning) or a "what you missed" teaser (the page below the module *is* what they missed).

---

## States — all eight, both layouts, both themes (sheet boards)

| state | what renders | copy |
|---|---|---|
| idle | kicker · headline · facts · label · field · button · fine | as §3 above |
| focus | field `outline: 2px solid --gold-ink; outline-offset: 2px` | — |
| sending | button `Sending…`, `opacity .7`, disabled | — |
| sent | form replaced by a status block: `--gold-wash` fill, 1px `--gold-edge`, radius 6, padding 14 16 | **Check your inbox.** (Anton 22) · *Tap the link in the email to confirm — nothing is sent until you do.* · `SENT TO you@example.com` (capture before `form.reset()`) · fine print becomes *Nothing arrived after a few minutes? Check spam — or reload and try again.* |
| error | field border `--gold-dim`; sentence under the row, 13.5/1.5 `--text`, gold mono `!` | the API's strings, unchanged: *That doesn't look like an email address.* / *Too many tries — give it an hour and try again.* / *Couldn't send the confirmation — try again in a minute.* / *Couldn't reach the site — check your connection and try again.* / *Subscriptions aren't switched on yet — check back soon.* |
| landed · confirmed | the ticket (§4) | **You're in.** · *The next digest lands Saturday {date} at 18:00 London — if the week gives us something to send. A quiet week sends nothing.* · `ONE A WEEK, AT MOST · LEAVE IN ONE TAP, FROM ANY EMAIL` · *This week's entries ↓* |
| landed · invalid | note on `--raised`, 1px `--line`, radius 6, above an idle form | **That link didn't check out.** *It may be old, or altered on the way — subscribe again below and use the newest email.* |
| landed · error | same note style, above an idle form | **The confirmation didn't go through on our side.** *Try the link once more, or subscribe again below.* |

Targets: field 44 (phone 48), button 44 (48), links 44. Field text 16px both layouts. `role="alert"` on the error, `role="status"` on sent/landed. Honeypot: no visual (unchanged).

---

## The emails (dark ground; `color-scheme: dark`; no images, no web fonts)

**Palette (the email's own, from `digestEmail.ts`):** ground `#0d0b09` · card `#16130f` · rule `#2a251f` · ink `#f5f4f0` · muted `#bdb5a8` · fine `#8a8279` · gold `#ffb627` · ink-on-gold `#14100a`. Type: Arial/Helvetica; mono role Menlo/Consolas.

### Confirmation — one job
Subject **Confirm your Saturday digest** · preheader *One tap. Nothing is sent until you do.*
Lockup → kicker `THE SATURDAY DIGEST · ONE TAP TO CONFIRM` → rule → **Confirm, and you're in.** (26/1.2, 800) → *You asked for the Saturday digest at this address: the week's chart peaks, certifications and records, sent Saturdays at 18:00 London time — only in weeks something happened, and never more than once a week.* → button `CONFIRM SUBSCRIPTION` (gold pill, mono 700 13, padding 15 26) → *Didn't ask for this? Ignore it — nothing is stored and nothing is sent without the tap.* → the raw link, mono 11 (for clients that strip buttons) → footer line with the fan-site disclaimer. Column 600; the current 560 grows to match the digest.

### Digest — lead with two, list the rest
The headliners run **in full** as cards (`#16130f`, 1px `#2a251f`, radius 6, padding 20 22; text 17/1.55; numbered `01` `02` in muted mono on the kicker row). Then a rule `ALSO THIS WEEK · 5 ENTRIES`, and the other five as a **ruled list**: kicker, the entry's **first sentence**, `SEE THE FIGURE ↗` inline. Density: ~420 words instead of ~1,100; the whole entry is one tap away on the page the link opens. The headliners earn their place by *size and position*, not a gold border — the gold-tinted border is gone. If Paul prefers the log printed whole, the card style holds for all seven; the email just gets long.

Footer, in this order: provenance sentence (with the derived window and *A quiet week sends nothing*) · `All updates · How the numbers are checked · Unsubscribe` (underlined, muted) · *You're getting this because you confirmed at burnaboystats.com/updates.* + disclaimer, 11px. Plain-text twin: same order, first sentences for the five.

**At 375:** same HTML; outer padding 20 12, card padding 16, headliner text 16px. Nothing hides, nothing reflows differently — a single column that was designed for the narrow case.

---

## Token table (the brief's, as used; **bold** = the one value the design adds)

| token | dark | light | used for |
|---|---|---|---|
| `--bg` | `#0a0a0b` | `#f7f4ee` | page; field ground |
| `--bg-soft` | `#141416` | `#ffffff` | module ground (desktop card, phone band); filter band; Follow panel |
| `--bg-raised` | `#24242a` | `#e6e0d4` | landed-invalid / landed-error note |
| `--text` / `--text-muted` | `#f5f4f0` / `#9b9ba3` | `#17140f` / `#5f584f` | copy / facts, label, fine print |
| `--line` | `rgba(245,244,240,.12)` | `rgba(23,20,15,.12)` | module border, field border, separators |
| `--gold-ink` | `#ffb627` | `#945e00` | kicker, focus ring, error `!`, back-link |
| `--gold-fill` / `--gold-bright` | `#ffb627` / `#ffd24a` | `#945e00` / `#945e00` | button gradient 120°; ticket gradient 160° |
| `--gold-dim` | `#c98a2e` | `#945e00` | error field border |
| `--gold-wash` | `rgba(255,182,39,.10)` | `rgba(148,94,0,.10)` | sent block fill |
| **`--gold-edge`** | `rgba(255,182,39,.30)` | `rgba(148,94,0,.30)` | sent block border — replaces the module's `color-mix(gold-ink 30%)` so it is a token |
| `--ink-on-gold` | `#14100a` | `#ffffff` | button text; ticket text |
| `--radius` | 6px | 6px | module, notes, sent block; pills 999 |

## Copy — every string, final
Module: `THE SATURDAY DIGEST` · *The week's numbers, in one email.* · `SATURDAYS · 18:00 LONDON` · `ONLY IN WEEKS SOMETHING HAPPENED` · `ONE A WEEK, AT MOST` · `EMAIL ADDRESS` · placeholder `you@example.com` · `SUBSCRIBE` / `SENDING…` · fine *Confirm from your inbox first — nothing is sent until you do. Leave in one tap, from any email.*
States: as the table above. Follow panel: `KEEP THE SITE CLOSE` · *Follow the run* · *The numbers here move most days. Keep the site one tap away. Prefer email? The Saturday digest ↑*
Emails: as §Emails above; digest subject as the script gives it.

## Not changed
The flow, the API strings, the honeypot, the 1.5 s timing, the state names, the desktop `/updates` entries list, the phone back bar. The Follow panel's install/X/RSS pills keep their existing sizes and gradient.
