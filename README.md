# Burna Boy Stats

An unofficial, fact-checked statistics site for the Nigerian artist Burna Boy —
tracking his certifications, official chart entries, awards, tours, streaming
records and more, all in one place and kept current. Built with the Next.js App
Router and TypeScript, deployed on Vercel.

**Live:** [burnaboystats.com](https://burnaboystats.com)

> This is an independent fan/portfolio project. It is not affiliated with,
> endorsed by, or connected to Burna Boy or his representatives. Original
> graphics and design; album artwork is provided by Spotify and remains the
> property of its owners.

---

## What it does

The site turns a large, hand-verified dataset into browsable, filterable pages:

- **Certifications** — every Gold / Platinum / Diamond award across 22 countries,
  filterable by tier, country and year.
- **Official Charts** — peak positions on each country's principal national chart
  (sales/streaming, not platform or genre charts), with a documented methodology
  and per-country hover detail.
- **Awards** — every win and nomination across 40+ award bodies, filterable by
  result, year and ceremony.
- **Tours & Live** — routed tour itineraries with box-office grosses, a
  "highest revenue per show" leaderboard, a festivals sub-page, and an
  **interactive world map of every country he's performed in** (custom SVG, no
  mapping dependency).
- **Firsts & Records**, **Africa's Biggest** (leaderboard comparisons vs. other
  African artists), a **car collection**, an **FAQ** (answer-first, for search),
  and a running **Updates** feed.

## Engineering notes

- **Typed data layer.** All facts live in typed data modules (`app/data/`);
  headline totals (certification counts, No. 1 tallies, country counts, etc.) are
  *computed* from that data rather than hard-coded, so they can't drift out of
  sync with the underlying records.
- **No heavy dependencies.** The world map is generated from pre-projected SVG
  shapes rather than a mapping library; styling is plain CSS with design tokens
  (no CSS framework).
- **SEO / structured data.** Per-page metadata, unique Open Graph images, and
  JSON-LD (`FAQPage`, `Dataset`, `MusicEvent`, `BreadcrumbList`) — Lighthouse
  SEO/Accessibility scores of 95–100.
- **Tested.** A Vitest + React Testing Library suite covers data integrity and
  interactive components (including a regression test written after a real
  duplicate-key bug was found and fixed).
- **Verification pipeline.** Every change is gated on
  `tsc --noEmit && lint && test && build` before it ships.

### Data integrity

The distinguishing feature of this project is its sourcing discipline. Figures
are cross-checked against primary sources before publishing (chart bodies,
certification agencies, Billboard, press), and where a claim can't be
independently confirmed, it's either held out or clearly flagged in-line rather
than presented with false precision. Sourcing and confidence levels are
documented in the data files themselves.

## Stack

- [Next.js 16](https://nextjs.org) (App Router) · [React 19](https://react.dev)
- TypeScript
- Plain CSS with design tokens
- [Vitest](https://vitest.dev) + React Testing Library
- Deployed on [Vercel](https://vercel.com)

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
```

Other scripts:

```bash
npm run build      # production build
npm run typecheck  # tsc --noEmit
npm run lint       # eslint
npm run test       # vitest
```

## Project structure

```
app/
  data/            # typed data modules (charts, certifications, awards, tours, …)
  components/      # reusable UI (explorers, leaderboards, the map, etc.)
  lib/             # SEO + Open Graph helpers
  <route>/page.tsx # one folder per page
tests/             # Vitest data-integrity + UI tests
```
