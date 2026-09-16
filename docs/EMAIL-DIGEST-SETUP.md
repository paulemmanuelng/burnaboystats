# The Saturday digest — setup

The site has an email subscribe box and a weekly digest. Everything is built and
tested; it stays invisible until Resend is configured, because the subscribe
API answers 503 without it and a live button that says "not switched on yet"
would read as broken. Four steps, about twenty minutes, all in your own accounts.

## What it does

- **The digest module** on `/updates` — the hero's right column on desktop, a
  band after the third entry on the phone (under the hero when the reader
  lands from the confirmation link). Design: `docs/design/handoff-email-digest-2026-09-16.md`
  (the brief) and `docs/design/design-response-email-digest-2026-09-16.md`
  (the answers, every state and string).
- **Double opt-in.** A reader enters an address → the site emails a
  confirmation link → tapping it joins the Resend audience. Nothing is stored
  on the site: the link carries a signature (HMAC) of the address, so there is
  no pending-signups database.
- **The digest.** Every Saturday at 17:00 UTC (18:00 London, 18:00 Lagos) a
  GitHub Action sends one email to the audience: the week's entries from
  `app/data/updates.ts`, at most eight. The headliners (`big: true`, at most
  two) print in full; the rest print as their first sentence with a link, so
  the whole entry is one tap away. Weeks with no entries send nothing.
- **Unsubscribe** is Resend's own one-tap link in the footer of every email.

## 1. Resend account and domain

1. Create an account at resend.com (free tier: 3,000 emails/month, 100/day —
   plenty until the audience is in the thousands).
2. **Domains → Add domain → `burnaboystats.com`.** Resend shows DNS records
   to add at your registrar: a DKIM `TXT` record, an `MX` and a `TXT` (SPF)
   for the bounce subdomain, and a DMARC `TXT` if you don't have one. Add them
   and wait for "Verified" (minutes to an hour). Sending from an unverified
   domain is not possible, and sending from a verified one is what keeps the
   digest out of spam.
3. **Audiences → Create audience** (name it "Saturday digest"). Copy its ID.
4. **API Keys → Create** with *Full access* (it needs to send emails and add
   contacts). Copy the key — Resend shows it once.

## 2. Environment variables

| name | value | where |
|---|---|---|
| `RESEND_API_KEY` | the key from step 1.4 | Vercel (Production) **and** GitHub Actions secret |
| `RESEND_AUDIENCE_ID` | the audience ID from step 1.3 | Vercel (Production) **and** GitHub Actions secret |
| `RESEND_FROM` | `Burna Boy Stats <updates@burnaboystats.com>` | Vercel and GitHub (optional — this is the default) |
| `SUBSCRIBE_SECRET` | any long random string | Vercel (optional; the confirm links are signed with it — without it they are signed with the API key, which also works) |

- **Vercel:** Project → Settings → Environment Variables → add each for
  *Production*. Redeploy once (Deployments → ⋯ → Redeploy) so the running site
  picks them up. From that deploy the subscribe box appears.
- **GitHub:** repo → Settings → Secrets and variables → Actions → New
  repository secret, for `RESEND_API_KEY`, `RESEND_AUDIENCE_ID` and (optional)
  `RESEND_FROM`.

## 3. Test it before Saturday

1. On the live site, subscribe with your own address, tap the link in the
   confirmation email, and check the audience in Resend shows you.
2. GitHub → Actions → **Weekly digest → Run workflow** with your address in
   `test_to`. That sends this week's digest to you alone — the audience gets
   nothing. Or tick `dry_run` to render it into the run summary and an
   artifact without sending anything.
3. Look at it on the phone. Gmail, Apple Mail and Outlook all render this
   template (600px table, inline styles, no web fonts).

## 4. Go live

Nothing to switch: the schedule runs every Saturday once the secrets exist.
An empty week produces a green run that says "Nothing to send". The run summary
lists exactly what went out, with the subject line.

## Editing the digest

- **What goes in** is `app/data/updates.ts` — the same entries the site shows.
  Mark the week's one or two headliners `big: true` — those are the two that
  print in full; everything else is ranked by category (records and plaques,
  then awards, charts, streaming, tours, lifestyle), capped at eight, and
  printed as its first sentence. Rules and tests: `app/lib/digest.ts`,
  `tests/digest.test.ts`.
- **How it looks** is `app/lib/digestEmail.ts` (HTML and plain text) and
  `app/lib/confirmEmail.ts` (the confirmation); the palette they share is
  `app/lib/emailChrome.ts`.
- **When it sends** is the cron in `.github/workflows/weekly-digest.yml`.
- **Local preview:** `npx tsx scripts/send-digest.mjs --dry-run` writes
  `digest-preview.html` and `.txt` in the repo root (git-ignored); add
  `--now 2026-09-19` to render a particular week.

## If something goes wrong

- Module missing on the live site → the two Vercel variables aren't set on
  Production, or the site wasn't redeployed after adding them. (Without them
  the desktop hero shows its old tally column and the phone its RSS link.)
- Confirmation email never arrives → domain not verified in Resend, or the
  API key lacks sending access. Resend → Emails shows every attempt and why.
- "Too many tries" → the API allows three attempts per address and ten per IP
  per hour, per server instance. Wait an hour.
- Saturday run red → the summary says which Resend call failed; the audience
  receives nothing unless the final "send" call succeeded.
