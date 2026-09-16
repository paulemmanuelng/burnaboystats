# Design brief — the Saturday digest: subscribe module and two emails

**For:** the designer
**Status:** the feature is BUILT and merged (`main`, PR #256) but dormant on the live site: the subscribe box only renders once Resend is configured, which has not happened yet. Nothing you design changes how it works; you are designing how it looks and where it sits.
**Date:** 16 September 2026
**Build owner:** Claude Code, from your artboards — see §7 for what comes back.

---

## 0. Read this first — how to actually see it

You cannot see the subscribe box on burnaboystats.com today. It shows only when the server holds two Resend keys. Locally, any two placeholder values switch it on:

```bash
git clone https://github.com/paulemmanuelng/burnaboystats.git
cd burnaboystats
npm install
printf 'RESEND_API_KEY=x\nRESEND_AUDIENCE_ID=y\n' > .env.local   # placeholders — the box appears, sending fails (expected)
npm run dev            # http://localhost:3000/updates
```

Submitting an address locally will show the error state ("Couldn't send the confirmation — try again in a minute."), which is the correct outcome with placeholder keys. To see the other states, edit `app/components/SubscribeBox.tsx` and set `useState<Phase>("sent")`, or open `http://localhost:3000/updates?subscribed=1` (and `=invalid`, `=error`).

To see the digest email as it currently renders:

```bash
npx tsx scripts/send-digest.mjs --dry-run --now 2026-09-19   # writes digest-preview.html (open it) and digest-preview.txt
```

The confirmation email is inline in `app/api/subscribe/route.ts` (one `html:` block).

| route / file | what it is | layouts |
|---|---|---|
| `/updates` | the page the module lives on | desktop and phone are SEPARATE components (`UpdatesPage` desktop tree; `MobileUpdates` phone screen) |
| `app/components/FollowPanel.tsx` | the desktop "Follow the run" panel the box currently sits inside | desktop |
| `app/components/MobileUpdates.tsx` | the phone screen; back bar has a "Subscribe" link that jumps to the box | phone |
| `app/components/SubscribeBox.tsx` + `.module.css` | the box, both layouts (a `compact` flag on the phone) | both |
| `app/lib/digestEmail.ts` | the digest email, HTML + plain text | email |
| `app/api/subscribe/route.ts` | the confirmation email | email |

Screenshots of the current state (dark theme) are beside this brief: `handoff-email-digest/` — `desktop.jpg`, `phone.jpg`, `digest.jpg`.

---

## 1. What this site is, in one paragraph

burnaboystats.com is a fan-built statistics reference for Burna Boy — certifications, chart runs, awards, streaming records — whose entire value is that every figure is read at the body that publishes it and dated. It is dark by default with a light theme, gold as the single accent, Anton for display, Space Mono for labels and figures, Geist for body text. It has never had a way to reach readers: the digest is the first. The site's voice is plain and specific — it says what a number is, where it was read, and when; it never says "sold", never uses emoji, never inflates.

---

## 2. The job

Three pieces, one system:

1. **The subscribe module on `/updates`** — desktop and phone, designed separately (the site's rule: desktop and phone are different components and get their own designs; never scale one into the other).
2. **The confirmation email** — the one-tap "confirm your subscription" message.
3. **The Saturday digest email** — the weekly email, designed at 600px and shown on a phone.

What exists is a working first pass built by an engineer: a bordered box with a sentence, a field and a button, dropped inside the existing "Follow the run" panel on desktop and under the hero on the phone. It works; it has no point of view. The brief is to give the digest a presence that matches the rest of the site.

---

## 3. What is fixed — do not design against these

**The flow (double opt-in).** A reader enters an address → the site emails a confirmation link → tapping it joins the list and returns the reader to `/updates` with a "you're in" note. Nothing is stored on the site; nothing is sent until the tap.

**The form.** Exactly one visible field (email) and one button. There is a hidden honeypot field a person never sees — it has no visual. No name field, no interests, no checkboxes.

**The facts in the copy** (wording is yours; the facts are not):
- it is sent on Saturdays at 18:00 London time;
- only in weeks something happened — an empty week sends nothing;
- at most one email a week;
- unsubscribe is one tap, in every email;
- confirming is required, and nothing is sent until it is.

**The states** the module must design for:

| state | when | current copy (rewrite freely) |
|---|---|---|
| idle | first look | "The Saturday digest. The week's chart peaks, certifications and records in one email, Saturdays at 18:00 London time — only in weeks something happened." + field + "Subscribe" + fine print "One email a week at most. Unsubscribe in one tap, from any of them." |
| sending | after tap, ~1 s | button reads "Sending…", disabled |
| sent | address accepted | "Check your inbox — tap the link in the email to confirm. Nothing is sent until you do." (form replaced) |
| error | API refused | a sentence under the form, e.g. "That doesn't look like an email address." / "Too many tries — give it an hour and try again." / "Couldn't send the confirmation — try again in a minute." |
| landed: confirmed | back from the email link | "You're in. The next digest lands on Saturday evening." |
| landed: invalid link | stale/forged link | "That confirmation link didn't check out — subscribe again below and use the newest email." |
| landed: error | Resend failed on confirm | "The confirmation didn't go through on our side — try the link once more, or subscribe again below." |

**Accessibility and mechanics.**
- Every target ≥ 44px tall; visible keyboard focus (the site uses a 2px gold outline).
- The field must have a label. Today it is visually hidden with a placeholder; a visible label is welcome.
- On the phone the field's text is 16px (smaller makes iOS zoom the page).
- Error text must be adjacent to the field and readable by a screen reader (it is wired as `role="alert"`).
- Both themes. Dark is the default; the light theme is a real theme, not an inversion (tokens below).
- No new fonts. No emoji. No images in the emails (see §5).

**The tokens** (`app/globals.css`, resolved values; the site uses `light-dark()` so one token carries both):

| token | dark | light | role |
|---|---|---|---|
| `--bg` | `#0a0a0b` | `#f7f4ee` | page ground |
| `--bg-soft` | `#141416` | `#ffffff` | bands / panels |
| `--bg-raised` | `#24242a` | `#e6e0d4` | raised surface (the current box, hover) |
| `--text` | `#f5f4f0` | `#17140f` | body text |
| `--text-muted` | `#9b9ba3` | `#5f584f` | secondary text |
| `--line` | `rgba(245,244,240,.12)` | `rgba(23,20,15,.12)` | hairlines — decorative, 1.3:1 |
| `--gold-ink` (= `--gold`) | `#ffb627` | `#945e00` | text, lines, icons |
| `--gold-fill` | `#ffb627` | `#945e00` | fills: buttons, bars |
| `--gold-bright` | `#ffd24a` | `#945e00` | the bright end of button gradients |
| `--gold-dim` | `#c98a2e` | `#945e00` | hover borders |
| `--gold-wash` | `rgba(255,182,39,.10)` | `rgba(148,94,0,.10)` | tinted washes |
| `--ink-on-gold` | `#14100a` | `#ffffff` | text on a gold fill |
| `--radius` | `6px` | `6px` | cards, boxes; pills are `999px` |

Type: display **Anton**; labels, figures and fine print **Space Mono** (uppercase labels at 0.11em tracking, 11px; buttons 0.8rem mono at 0.04–0.06em); body **Geist**. Scale: lede 18/1.5, body 16/1.6, small 13.5/1.5, caption 12.5/1.45, label 11/1.2.

The existing pills the module sits beside (desktop): 44px min height, `padding: 11px 20px`, `border-radius: 999px`, Space Mono 0.8rem; primary = gradient `--gold-bright → --gold-fill` with `--ink-on-gold` text; secondary = 1px `--line` border, hover border `--gold-dim`.

---

## 4. What is open — the design questions

1. **Where the module lives on desktop.** Today it is a box inside the "Follow the run" panel (a box in a box). Options worth drawing: the digest becomes the panel's lead and the install/X actions become secondary beneath it; or the digest gets its own band on `/updates` and "Follow the run" keeps install/X only; or the module moves up the page, near the hero, where a first-time reader actually is. Draw the one you believe in and say why.
2. **Where it lives on the phone.** Today: under the hero, above the category filter, with the back bar's "Subscribe" jumping to it. Alternatives: after the first three entries (the reader has seen what they'd be subscribing to); or a slim strip that expands. Same rule — one recommendation, reasoned.
3. **Hierarchy of the promise.** "Saturday" and "only when something happened" are the two facts that make this worth a reader's address. How much of the module is the promise, how much is the form.
4. **The confirmed state.** Landing back on the page after the tap is the one moment of delight available. Currently a tinted line of text.
5. **Light theme.** The current pass was designed dark and checked light; design both.
6. **Empty week.** There is no empty-week email (by rule). But should the module say, somewhere, that silence is intentional?

Anything beyond the module — a sample digest shown on the page, a subscriber count, a "what you missed" teaser — is an addition: propose it, don't draw it as if agreed.

---

## 5. The emails

**Constraints (inbox rendering, not taste).** 600px wide, table layout, every style inline, no web fonts (Gmail strips them — the stack is Arial/Helvetica for text and Menlo/Consolas for the mono role), no images (the site's rule for now — an image-free email lands, and there is nothing to show that the words don't say better), dark ground with the site's gold, a visible **Unsubscribe** link in the footer, and a plain-text twin that says the same thing in the same order. Links are absolute to burnaboystats.com. Emoji: none.

**The confirmation email.** One job: the tap. Header lockup, one sentence on what they're confirming, the button, one line saying nothing happens if they ignore it. Currently a 560px column, Arial, gold button.

**The digest.** Real content for the artboard — this week's, as the script selects it (send day Saturday 19 September; subject "A 14th straight week at No. 1 in Switzerland — and 6 more this week"):

| | date | category | entry (opening) |
|---|---|---|---|
| headliner | 13 Sep | Charts | A 14th straight week at No. 1 in Switzerland: the Schweizer Hitparade dated 13 September keeps "Dai Dai" at the top for the 14th consecutive chart since 14 June, its 17th week on the Singles Top 100… |
| headliner | 14 Sep | Streaming | Back inside the global Top 10: "Dai Dai" sits at No. 9 on Spotify's Daily Top Songs Global for 13 September with 2,580,521 filtered streams… an 83rd day inside the Top 10… |
| | 14 Sep | Certifications | African Giant's UK history, read at the BPI's own register: certified Silver on 18 September 2020 — his first certified album in Britain — and Gold since 22 July 2022… |
| | 14 Sep | Certifications | A circulating "6,050,000 units sold worldwide" for "Dai Dai" is now on the methodology page's list of counts this site does not carry… |
| | 13 Sep | Charts | A 12th week atop Mediatraffic's United World Chart: "Dai Dai" holds No. 1 on the global ranking in the chart week dated 19 September, on 246,000 points… |
| | 13 Sep | Charts | A 12th straight week at No. 1 on the Dutch Top 40 — the Stichting Nederlandse Top 40's chart, distinct from the Single Top 100 this site tables… |
| | 14 Sep | Streaming | Past 350 million plays on Audiomack: I Told Them… reads 350,926,676 on its own Audiomack page… |

The full text of each is in `app/data/updates.ts` (the seven newest entries). Entries are long by design — they are the site's own log, and the email prints them whole. The structure the code gives you: a lockup, a week line ("THE WEEK TO 19 SEPTEMBER · 7 ENTRIES"), one card per entry (kicker of category · date, the text, a "SEE THE FIGURE ↗" link), a footer (provenance sentence, "All updates", "How the numbers are checked", "Unsubscribe"). Headliners are marked `big` in the data and currently get a gold-tinted border and 17px text against 15px.

Open here: how the headliners earn their place without shouting; whether seven full entries is the right density or the email should lead with the two and list the rest; the card rhythm; the footer's weight; how it reads at 375px in a phone mail client.

---

## 6. Deliverables

Artboards, in the site's tokens, with values I can lift (spacing, sizes, radii, colours named by token):

1. `/updates` desktop, 1440 wide — the module in context (whatever context you recommend), dark and light.
2. `/updates` phone, 390 wide — the module in context, dark and light.
3. A states sheet for the module: idle, focus, sending, sent, error, landed-confirmed, landed-invalid. Desktop and phone.
4. The confirmation email, 600 wide.
5. The digest email, 600 wide, with the seven real entries above; plus a 375-wide phone render.
6. Copy: every string, final. The facts in §3 hold; everything else is yours.

Name the artboards as above and keep those names — they become the build's checklist.

---

## 7. What comes back to the build

I build from the artboards and their values — nothing is interpreted. Where a value is missing I will ask rather than guess, so put spacing on the boards. The two-layout rule is absolute: a desktop decision is not applied to the phone unless the phone board shows it. The states in §3 are wired to the code as listed; renaming a state is fine, removing one is not. If a recommendation in §4 moves the module out of the "Follow the run" panel, say what the panel keeps.
