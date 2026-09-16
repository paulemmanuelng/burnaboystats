# Design brief — the Saturday digest email, as it lands

**For:** the designer
**Status:** the digest is LIVE. The first real send is Saturday 19 September 2026 at 18:00 London, to whoever has confirmed by then. What lands today is the board from the first round (built in PR #258), drawn when a log entry ran to 800 characters. Every entry is now one or two sentences. This brief is the email only, designed properly for the inbox it lands in.
**Date:** 16 September 2026
**Build owner:** Claude Code, from your boards — see §7 for what comes back.
**Read alongside:** `handoff-email-digest-2026-09-16.md` (the first brief) — read its **§1 and §3 only**: what the site is, the site's tokens and type. Its §5 (the emails) and §6 items 4–5 are superseded by this document. Your answers are in `design-response-email-digest-2026-09-16.md`; the module you designed there is built and unchanged.
**Response document:** name it `design-response-digest-email-2026-09-16.md`. The two briefs are near-anagrams — *email-digest* is the module round, *digest-email* is this one.
**Answered:** `design-response-digest-email-2026-09-16.md` beside this file (16 September 2026); boards in `design_handoff_burnaboystats/designs/desktop/Saturday Digest - Email.dc.html`. Built the same day.

---

## 0. Read this first — how to see it

Four files sit beside this brief in `handoff-digest-email/`:

- `digest-600.jpg` — the email as it renders today at 600px, with the real week to 19 September (8 entries, 2 headliners), in a browser — no mail client chrome.
- `digest-375.jpg` — the same HTML at 375px with the media query honoured, as Apple Mail on an iPhone would show it.
- `confirmation-600.jpg` — the confirmation email, from your first-round board.
- `digest-2026-09-19.txt` — the plain-text twin of the same send.

There is no capture from a real inbox: the first send has not happened. The engineer sends a test copy to Paul's Gmail and Apple Mail before Saturday and adds those captures to this folder when they exist.

Locally: `npx tsx scripts/send-digest.mjs --dry-run --now 2026-09-19` writes `digest-preview.html` and `.txt` in the repo root; `--now` picks the week. The logo and its rules are in `LOGO.md` beside this file.

---

## 1. What changed since your first board

Your digest board was drawn against entries like this (811 characters, four sentences of method and history):

> Back inside the global Top 10: “Dai Dai” sits at No. 9 on Spotify's Daily Top Songs Global for 13 September with 2,580,521 filtered streams, down from No. 4 the day before — a 115th consecutive day … That last figure is a total, not a streak: it had left the Top 10 for five charts … The 37 days at No. 1 have now been walked the same way on Spotify's own archive …

The same entry now reads (261 characters):

> Back inside the global Top 10: “Dai Dai” sits at No. 9 on Spotify's Daily Top Songs Global for 13 September with 2,580,521 filtered streams — a 115th consecutive day on the chart, 116 days on the chart in all, an 83rd day inside the Top 10 and 37 days at No. 1.

Every entry in the log is now **300 characters at most** — a test holds it there — and one or two sentences by editorial rule. Your "two headliners in full, the rest by first sentence" structure was an answer to length. **Today it still cuts:** the two headliners print whole and the other six print their first sentence only, in the HTML and the twin alike (the `digest-600.jpg` and `.txt` beside this show the cut). With every entry short, that cut goes: **from the next build, every entry prints whole in both bodies.** Whether two tiers still earn their place is the question to redesign around (§4.1).

---

## 2. What the email is — the facts

- **Sender:** the workflow reads it from a secret, `RESEND_FROM`; the script's fallback is `Burna Boy Stats <updates@burnaboystats.com>` and Paul confirms the secret matches. Sent through Resend as a broadcast to the audience. A test copy can be sent to one address by hand (`--test`); the Saturday broadcast has no test step. A test copy differs in two strings: its subject starts `[test] ` and its Unsubscribe link points at `/updates#subscribe`.
- **When:** Saturdays at 18:00 London, year-round (two UTC crons; the script sends on whichever one is 18:00 in Europe/London). **Only in weeks something happened** — an empty week sends nothing at all, so there is no "quiet week" email to design.
- **Subject:** derived, never written. The top entry's opening clause — the text before its first colon, spaced dash or sentence end, quotation marks removed — then ` — and N more this week` where N is the other entries; with one entry, the clause alone. The clause is cut at the last whole word inside 72 characters and ends in `…` when cut, so the whole subject can reach 95. Phones show about 40 characters of it (iPhone Mail portrait ≈ 40, Gmail apps ≈ 40, Samsung ≈ 33); desktop clients show the 72. This week: *A 14th straight week at No. 1 in Switzerland — and 7 more this week* (67). A capped one from the same week: *A circulating 6,050,000 worldwide units for Dai Dai goes on the…*
- **Preheader:** hidden text, not a visible line. Today it is the first 120 characters of the top entry, which repeats the subject's opening clause in the inbox list — the reason §4.5 exists. Budget per client: the first ~40 characters are what the Gmail apps show, ~90 are useful, 120 is the ceiling; Gmail desktop shows subject and preheader on one row of ~90–120 characters together.
- **Content:** the week's entries from the site's own log (`app/data/updates.ts`), the same text the site shows. Each carries a **category** — one of Firsts & Records, Certifications, Awards, Charts, Streaming, Tours, Lifestyle — a **date**, the **text** (≤300 characters, opening with a headline clause), the **page it links to**, and optionally **big**. Between 1 and 8 entries; the cap of eight has been hit every week since July, so eight is the normal case and one the edge.
- **Order:** `big` entries first, then the rest by category in the order above (records and plaques before awards, before charts, before streaming, before tours, before lifestyle); within a rank, newest date first. Headliners are ordered by category too — which is why this week's Charts headliner (13 September) is 01 and the Streaming one (14 September) is 02.
- **Headliners:** at most two — the first two marked `big`, by that rank; a third marked entry drops into the list. **A week that marks none leads with its top-ranked entry as the one headliner** — and no week before this one marked any, so one headliner is the historical norm.
- **Corrections** carry no flag; they are entries whose text opens *A correction:*, *A correction to …* or *A correction, twice over:* (five in the log). A treatment keyed on that opening is acceptable; a new field is not.
- **Every entry links to the page that holds the figure** — the email never carries a number the site does not. There is no separate figure field: the number lives inside the sentence and nothing will be added to the log for the email's sake.
- **Unsubscribe:** Resend's one-tap link in every email. The HTML carries the literal `{{{RESEND_UNSUBSCRIBE_URL}}}` exactly once, and the plain-text twin carries it once; Resend fills it per recipient, and its `List-Unsubscribe` header gives Gmail and Yahoo their own control as well.
- **A plain-text twin** goes with every email — the same entries in the same order; its labels, separators and wording are yours (§5).
- **The confirmation email** (your first-round board) is the only other email the site sends. It shares the digest's palette file.

---

## 3. What is fixed — do not design against these

**How email renders.** This is the part a web designer most often fights, so it is spelled out. Client behaviour below is as tested in 2026; where it matters, the engineer verifies with real captures.

- **600px, tables, inline styles.** The layout is a 600px table that is fluid (`width:100%; max-width:600px`); every style is inline on the element. A `<style>` block with `@media (max-width: 480px)` is honoured by Apple Mail, the Gmail apps on Google accounts, Outlook.com and the new Outlook; the Gmail apps drop the whole `<style>` block for non-Google (IMAP/Exchange) accounts, and Samsung Email with an Outlook account does too — those readers get the 600 values in a 343–375px column. So the 600 design must still read at phone width with the media query gone.
- **Classic Outlook on Windows** (the Word engine — enterprise, supported to at least 2029; the *new* Outlook uses the Outlook.com engine and is far more capable) has hard limits that shape a layout: padding only on `<td>` (ignored on `<a>`, `<div>`, `<p>`); no `max-width`; line-height only as px with `mso-line-height-rule: exactly`; no CSS `border-radius` or gradients without VML (achievable at engineer cost — decide whether they are identity-bearing); `text-transform: uppercase` works, `lowercase` does not; no SVG. Gmail drops SVG too.
- **Fonts.** No web fonts — not because every client strips them (Apple Mail does render them) but because a font is a request to Google on open, and this email makes no requests. What renders: **iOS/macOS** Arial + Menlo; **Windows** (classic Outlook, Gmail web) Arial + Consolas; **Android** (Gmail, Samsung, Outlook apps) Roboto + Droid Sans Mono, because the stacks end in `sans-serif` / `monospace` — keep that. Every one of those faces ships in **regular and bold only**: there is no 500, 600 or 800 anywhere; classic Outlook maps anything above 600 to bold. Check line breaks and tracking on Roboto as well as Arial — the widths differ.
- **Sizes and spacing** are integer px: font-size, line-height, letter-spacing. Space is top and bottom padding on table cells, never margins or gaps. The fine role is **12px minimum** (13px at 375): it carries Unsubscribe and the disclaimer and nothing in any client scales it up.
- **Links and taps.** Each link's tappable box is at least 44px tall and 8px clear of the next, drawn as a cell (classic Outlook makes only the glyphs clickable unless the padding sits on a `<td>`). Four link kinds exist: the entry link, the lockup, the footer's two navigation links, and Unsubscribe. iOS Mail also turns every date it recognises into a link of its own inside the sentences — the engineer neutralises that, and your link spec says what a detected date looks like (inherit). No hover states exist.
- **No JavaScript, no external CSS.** Nothing loads on open.
- **Images.** The email carries none today, on purpose: nothing to block, nothing to track. If the design wants one — a PNG lockup — it must be a transparent PNG in a colour that reads on both grounds (recolouring clients leave images alone, so a dark ground baked into a PNG becomes a dark rectangle on a recoloured email), exported at 2× with an HTML `width` attribute, with alt text, and drawn with images off as well. Otherwise keep the text lockup.
- **Weight.** Under 80 KB as sent; Gmail clips at ~102 KB and hides everything after the cut. At eight entries the email is ~20 KB.
- **Dark mode is not yours to choose, and it is the most important constraint on §4.4.** Three kinds of client:
  - **No change** — Apple Mail (macOS, iOS), Gmail on the web, Yahoo, AOL: the email renders as drawn.
  - **Partial invert** — Gmail on Android, Outlook.com and the new Outlook for Windows, Outlook on iOS/Android/macOS: light grounds and dark text are flipped; a dark ground is left alone.
  - **Full invert** — Gmail on iOS, classic Outlook 2021/365 on Windows, Windows Mail: a dark ground goes light too.

  So a dark design is recoloured by two of those seven clients and left alone by five; a light design is recoloured by all seven. Gmail's recolour keeps hue and flips luminance — `#ffb627` becomes a dark brown-gold, and a ground, a card and a rule three per cent apart all land near white, so a card edge that lives on a tint vanishes. `@media (prefers-color-scheme: dark)` is honoured only by Apple Mail, Outlook for macOS, Outlook.com and Samsung — never Gmail — and only when both `<meta name="color-scheme" content="light dark">` and `<meta name="supported-color-schemes" content="light dark">` are present. Outlook.com exposes `[data-ogsc]` hooks to pin colours; Gmail exposes nothing. **The rule the design must obey, on either ground:** no meaning carried by a tint — ground, card and rule must survive collapsing to one colour; every text/background pair must keep contrast when both ends move; mid-tone accents (the gold) are what change identity under inversion, so nothing essential rides on the gold alone.
- **No emoji, no images of the artist, no "sold".** The site's voice: plain, specific, every number as written, every figure read at the body that publishes it. (The arrow in `SEE THE FIGURE ↗` is a symbol some Android builds draw as a colour emoji; the engineer forces text presentation, and the glyph comes from a fallback face, never the mono face.)

**The strings that must appear, in every digest** (wording is yours; the facts are not):

1. that every figure links to the page it lives on, read at the body that publishes it;
2. when it is sent — Saturdays at 18:00 London — that a quiet week sends nothing, and the week's window (this one: 13 to 19 September);
3. a link to *All updates* (`https://burnaboystats.com/updates`);
4. a link to *How the numbers are checked* (`https://burnaboystats.com/methodology`);
5. **Unsubscribe**, carrying the placeholder;
6. why the reader is getting it: *because you confirmed at burnaboystats.com/updates*;
7. the disclaimer: *An unofficial fan site — not affiliated with or endorsed by Burna Boy.*

**What prints today that is not on that list** — each is open unless you keep it: the `<title>` (*Burna Boy Stats — the week to 19 September*); the header line `THE WEEK TO 19 SEPTEMBER · 8 ENTRIES`; the kicker `CHARTS · 13 SEPTEMBER` on every entry; the numerals `01` `02` on the headliners; the divider `ALSO THIS WEEK · 6 ENTRIES`; the link text `SEE THE FIGURE ↗`; the preheader.

**The two emails' shared palette today** — the email's own hexes, because an inbox does not read the site's stylesheet. Change them if the design needs to; new values go in your response table.

| role | hex | used by |
|---|---|---|
| ground | `#0d0b09` | both |
| card | `#16130f` | digest headliners |
| rule / card edge | `#2a251f` | both |
| ink | `#f5f4f0` | both |
| body | `#cfc7bb` | the confirmation's sentence |
| muted | `#bdb5a8` | kickers, footer |
| fine | `#8a8279` | the 11px legal line — to become ≥12px |
| gold | `#ffb627` | both |
| ink on gold | `#14100a` | the confirmation's button |

The site's own tokens for both themes are in the first brief §3; the light ground is `#f7f4ee`, the light gold `#945e00`. **The site colours its categories** — the same meanings everywhere on the site, dark / light: Certifications gold `#ffb627` / `#945e00`; Charts cyan `#8fe3f0` / `#0b6e7e`; Firsts & Records ember `#ff7a1a` / `#b34700`; Awards silver `#dfe2e8` / `#6b6b74`; Streaming `#848F9E` / `#6b6b74`; Tours green `#3ed17f` / `#146b3c`; Lifestyle the muted text colour. The email may use them, never as the only carrier of the category (see dark mode above), and never as a fill.

The site's masthead is dark in both themes; **that rule does not bind the email.**

---

## 4. What is open — the design questions

1. **The hierarchy, now that everything is short.** Two cards then a ruled list was built for 800-character entries. With every entry at one or two sentences: is the split still earning its place, or is this one list with the headliners marked by size, weight or position? What does a reader see in the first 300px of the opened email at 375, chrome removed — the lockup and the week line, or the first fact? Draw the one you believe in; the 375 board answers the 300px question.
2. **The entry unit.** Today: kicker (`CATEGORY · DATE`), the sentence, then `SEE THE FIGURE ↗` at 12px with no padding — a 14px target, eight of them stacked. Is the sentence itself the link (a solved target, but then the twin carries a bare URL per entry and iOS detectors stop running inside it)? Where does the date sit, and does every entry need one when they are all the same week? Category: a word, a dot, one of the colours above? The number stays inside the sentence.
3. **The header.** A text lockup (BURNABOY + gold STATS, bold — the only weight there is) and the week line. Does the email open on the lockup, or on the week's headline fact with the lockup below it? The lockup's relation to the crown in `LOGO.md` is yours to decide; today it is text only.
4. **Dark or light ground.** The site's identity is dark with gold and the current email follows it; Gmail, Outlook and Apple Mail default to a light theme, and the email is a block inside the client's pane — Gmail's apps inset it ~16px each side, Gmail web frames it in white. Read the dark-mode section in §3, then decide — a light ground in the site's paper tones, or dark — and say why. On either ground, deliver the "what must hold" spec (§5).
5. **The preheader.** Redefine it. The rule must be computable from what the data has — date, category, text, href, big, the count, the subject — nothing else (no source names, no figures pulled out). It must not repeat the subject. Give it as a template plus two rendered examples (eight entries, one entry), and show it in the inbox-row board.
6. **The footer.** Order and weight of the seven things in §3, and where *A quiet week sends nothing* lives.
7. **Type without the site's faces.** How Anton's display voice and Space Mono's label voice translate into Arial/Roboto and Menlo/Consolas at two weights — which family carries which role, at what tracking, in what case.
8. **The edges.** One entry (no divider, no "more this week"); eight; a correction as the headliner; a subject that hits the cap (the *A circulating…* clause above, and how the phone's 40 characters read). One board can show several.
9. **The confirmation email** — required if you change the ground or any hex in the table above (the two emails share one palette file); otherwise omit.

**Not wanted:** a sample of the site inside the email, a "what you missed on the site" block, a subscriber count, a reply-to conversation, personalisation beyond the address, tracking of any kind.

---

## 5. What to deliver

One `.dc.html` canvas — `designs/desktop/Saturday Digest — Email.dc.html` — with the boards below, plus the response document. The three email boards in the first round's `Saturday Digest.dc.html` are superseded by this canvas. **Boards render in the §3 font stacks only** (Arial and Menlo, or Roboto and a mono); the site's faces may appear on annotations, never inside a board. Each board's wrapper carries the palette as CSS variables named by role — `--ground --card --rule --ink --body --muted --fine --gold --ink-on-gold` — with the hexes you chose.

- **Digest — 600**: the real week to 19 September (§8, all eight entries, two headliners, every entry whole), on the ground you chose. This is also the eight-entry board.
- **Digest — 375**: the same HTML as Apple Mail on an iPhone shows it, media query honoured — with a table of every value that changes under `@media (max-width: 480px)`, 600 value → 375 value.
- **Digest — 375, `<style>` dropped**: the 600 values in a 343–375px column (the Gmail app on a non-Google account).
- **Digest — in the client's frame**: the 600 board inside a Gmail-web pane, and the 375 board inside a Gmail iOS frame — so the ground is designed knowing where the pane ends.
- **Inbox row — iOS Mail, Gmail iOS, Gmail desktop**: sender name, the real subject and your preheader in the list view, marking where each client cuts.
- **Digest — one entry** (§8 gives it): no divider, the bare-clause subject, `1 ENTRY` or your wording.
- **Dark mode — what must hold**, on either ground: the colour pairs that carry meaning with a minimum contrast each; which elements may shift under recolouring and which may not; and, if you want a second palette for the clients that honour `prefers-color-scheme`, that palette as tokens. The engineer supplies real captures (Gmail iOS, Gmail Android, Outlook.com dark, classic Outlook dark) for sign-off — a hand-painted inversion is a guess, so none is asked for.
- **Links**: per kind — colour, underline, the acceptable post-inversion colour, and the detected-date treatment.
- **The text twin**: a text file in the same order, a blank line between blocks and each entry's URL on its own line (classic Outlook collapses single line breaks).
- **Tokens and strings**: every hex; every size in px (font, line-height, letter-spacing); every space as cell padding; the sentence's measure in characters; the preheader rule with its two examples; the footer copy; every string on every board.
- **Confirmation — 600**, only if §4.9 applies.

---

## 6. Rules of the road

- **Build from the boards' values.** Where a value is missing the engineer asks; nothing is derived or guessed.
- **Nothing here changes how it works** — the selection, the order, the subject rule, the cap of eight, the headliner rule, the send time, the audience, the placeholder, the existence and order of the plain-text twin. How it looks — and the twin's labels and wording — is the whole job.
- The site's tokens (first brief §3) are the identity reference; the hexes in this brief's table are what ships. A new value goes in your response table, not the site's stylesheet.

---

## 7. What comes back

The engineer builds `app/lib/digestEmail.ts` (HTML) and `renderDigestText` (the twin) from your boards, keeps `app/lib/emailChrome.ts` as the one palette shared with the confirmation, adds the two-meta colour-scheme declaration if you use a second palette, updates `tests/digest.test.ts` (structure and strings) and `tests/updatesLength.test.ts` (the cap), renders the week with `--dry-run`, verifies in Resend that open and click tracking are off for the domain (a tracking pixel would be an image, and rewritten links would break "every figure links to its page"), and sends one test copy to Paul's Gmail and Apple Mail — captured, dark mode on, into `handoff-digest-email/` — before the first real Saturday.

---

## 8. The data — the real week to 19 September

Use this on the 600 board, verbatim; `big` marks the headliners. Dates render as `13 SEPTEMBER` in a kicker and `13 to 19 September` in the footer; links are `https://burnaboystats.com` + `href`.

```json
{
  "subject": "A 14th straight week at No. 1 in Switzerland — and 7 more this week",
  "window": {
    "from": "2026-09-13",
    "to": "2026-09-19"
  },
  "items": [
    {
      "date": "2026-09-13",
      "category": "Charts",
      "big": true,
      "href": "/dai-dai",
      "text": "A 14th straight week at No. 1 in Switzerland: the Schweizer Hitparade dated 13 September keeps “Dai Dai” at the top for the 14th consecutive chart since 14 June, its 17th week on the Singles Top 100 — still the longest run atop the Swiss chart by any song this year."
    },
    {
      "date": "2026-09-14",
      "category": "Streaming",
      "big": true,
      "href": "/dai-dai",
      "text": "Back inside the global Top 10: “Dai Dai” sits at No. 9 on Spotify's Daily Top Songs Global for 13 September with 2,580,521 filtered streams — a 115th consecutive day on the chart, 116 days on the chart in all, an 83rd day inside the Top 10 and 37 days at No. 1."
    },
    {
      "date": "2026-09-14",
      "category": "Certifications",
      "big": false,
      "href": "/certifications",
      "text": "African Giant's UK history, read at the BPI's own register: certified Silver on 18 September 2020 — his first certified album in Britain — and Gold since 22 July 2022."
    },
    {
      "date": "2026-09-14",
      "category": "Certifications",
      "big": false,
      "href": "/methodology",
      "text": "A circulating 6,050,000 worldwide units for “Dai Dai” goes on the methodology page's list of counts this site does not carry: no certifying body or platform publishes worldwide units for a single, so the figure is streams converted to units at a ratio of the poster's choosing."
    },
    {
      "date": "2026-09-13",
      "category": "Charts",
      "big": false,
      "href": "/dai-dai",
      "text": "A 12th week atop Mediatraffic's United World Chart: “Dai Dai” holds No. 1 on the global ranking in the chart week dated 19 September, on 246,000 points — an unbroken run since the week dated 4 July, and still the first Burna Boy record ever to lead it."
    },
    {
      "date": "2026-09-13",
      "category": "Charts",
      "big": false,
      "href": "/dai-dai",
      "text": "A 12th straight week at No. 1 on the Dutch Top 40: “Dai Dai” leads the Stichting Nederlandse Top 40's chart in the 12 September edition, its 16th week on that list. On the Single Top 100, where its run on top closed at seven weeks, it sits at No. 4 in a 16th week."
    },
    {
      "date": "2026-09-16",
      "category": "Streaming",
      "big": false,
      "href": "/dai-dai",
      "text": "Out of the global Top 10 again: “Dai Dai” falls to No. 20 on Spotify's Daily Top Songs Global for 14 September with 2,423,416 filtered streams, down from No. 9 — a 116th consecutive day on the chart by its own streak column, 117 days on the chart in all."
    },
    {
      "date": "2026-09-14",
      "category": "Streaming",
      "big": false,
      "href": "/music/albums/i-told-them",
      "text": "Past 350 million plays on Audiomack: I Told Them… reads 350,926,676 on its own Audiomack page, read on 14 September, on a platform where his account stands at 2.11 billion plays in all."
    }
  ]
}
```

**The one-entry week** (for the one-entry board — the same week, the Swiss entry alone):

```json
{
  "subject": "A 14th straight week at No. 1 in Switzerland",
  "window": {
    "from": "2026-09-13",
    "to": "2026-09-19"
  },
  "items": [
    {
      "date": "2026-09-13",
      "category": "Charts",
      "big": true,
      "href": "/dai-dai",
      "text": "A 14th straight week at No. 1 in Switzerland: the Schweizer Hitparade dated 13 September keeps “Dai Dai” at the top for the 14th consecutive chart since 14 June, its 17th week on the Singles Top 100 — still the longest run atop the Swiss chart by any song this year."
    }
  ]
}
```

**A correction, as the log writes them** (for the edge board; dated 2 September, so not in this week):

```json
{
  "date": "2026-09-02",
  "category": "Charts",
  "href": "/records/charts",
  "text": "A correction, twice over: “Dai Dai” was never No. 1 in the Dominican Republic or El Salvador; both entries came from a round-up rather than a chart and have been removed. That leaves 26 country No. 1s for the song and 47 chart-topping placements for the career."
}
```
