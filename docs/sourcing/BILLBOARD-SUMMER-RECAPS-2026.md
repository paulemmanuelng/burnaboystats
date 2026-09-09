# Billboard's 2026 summer recaps — source record

**Why this file exists.** The article the site's 9 Sep 2026 feed entry rests on is
hard to re-reach, and a reader who cannot check a figure has to take it on trust.
This records what was read, where, and when — the facts and the method, not the
article. It is deliberately NOT a copy of Billboard's text.

## The source

| | |
|---|---|
| Article | "Ariana Grande, Shakira & Burna Boy Score 2026's Top Summer Songs on Billboard's Global Charts" |
| Author | Gary Trust, Billboard |
| Published | Wed 9 Sep 2026, 14:24:53 +0000 |
| URL | https://www.billboard.com/music/chart-beat/top-summer-songs-global-charts-2026-1236336221/ |
| Read | 9 Sep 2026, twice — first via Billboard's own public RSS feed (`/feed/`, HTTP 200, no token), then directly at the canonical URL above |

**Access, stated plainly so nobody later reconstructs this as a gate that was
walked through.** billboard.com's `/charts/` paths are TollBit-gated and answer
"not authorized" to a real browser; that gate was never touched and no bypass was
attempted. This article was reachable without one. It was read first through
Billboard's own RSS feed — publisher-served, unauthenticated, plain request — and
then confirmed by loading the canonical page itself, which served the full body.
The article had already rolled off the ten-item feed by the time of the second
read; the canonical page still served it. **The Wayback Machine has no capture**
(CDX empty on 9 Sep 2026), which is the reason this record exists at all.

## What Billboard published

**Global 200 Top 10 Songs, Summer 2026** — 1 "Hate That I Made You Love Me"
(Ariana Grande) · 2 "Choosin' Texas" (Ella Langley) · 3 "Billie Jean" (Michael
Jackson) · **4 "Dai Dai (FIFA World Cup Official Song 2026)" (Shakira X Burna
Boy)** · 5 "Dracula" (Tame Impala & JENNIE) · 6 "SWIM" (BTS) · 7 "Janice STFU"
(Drake) · 8 "Beauty and a Beat" (Justin Bieber feat. Nicki Minaj) · 9 "The Cure"
(Olivia Rodrigo) · 10 "Man I Need" (Olivia Dean)

**Global Excl. U.S. Top 10 Songs, Summer 2026** — **1 "Dai Dai (FIFA World Cup
Official Song 2026)" (Shakira X Burna Boy)** · 2 "SWIM" (BTS) · 3 "Beauty and a
Beat" (Justin Bieber feat. Nicki Minaj) · 4 "Billie Jean" (Michael Jackson) ·
5 "Hate That I Made You Love Me" (Ariana Grande) · 6 "Dracula" (Tame Impala &
JENNIE) · 7 "Beat It" (Michael Jackson) · 8 "The Cure" (Olivia Rodrigo) ·
9 "Babydoll" (Dominic Fike) · 10 "Self Aware" (Temper City)

Artist and title are matched together: Billboard credits **"Shakira X Burna Boy"**,
so this is the World Cup record and not Shakira & Beele's "Dai dai (Live)".

## THESE ARE RECAPS, NOT CHARTS — the load-bearing distinction

Billboard's own words, three times: **"recaps"** covering Memorial Day to Labor
Day, **"retrospectives"** reflecting performance on the weekly Global 200 and
Global Excl. U.S. from charts dated 6 June to 12 Sept, and **"season-ending
tallies"**. Method: cumulative Luminate streaming and sales over the weekly runs
of two charts Burna Boy is already on. Titles in the 2025 global summer top 10
were ineligible.

Billboard draws the line itself in its closing paragraph: the **US** Songs of the
Summer is called a *chart* (Ella Langley's, off the weekly Hot 100). The two
global lists are not. There is no chart URL, no weekly run, no chart page — they
exist only as Top 10s inside this article.

**So neither rank goes in `charts.ts`.** That file excludes recap and component
charts by design, and it already holds `{ c: "GLB", peak: 1, weeksAtPeak: 7,
weeks: 14 }` and `{ c: "GLBX", peak: 1, weeksAtPeak: 10, weeks: 15 }`. Filing the
Global 200 recap rank there would put a **4** in the same file, on the same
chart, beside an existing **peak of 1**. They are not comparable: peak 1 is the
best single week, No. 4 is a cumulative total across fifteen. That is precisely
the conflation `RETRACTIONS.md` exists to prevent.

## Two things the article corroborates or adds

1. **It independently confirms `charts.ts`.** Billboard states the song "ran up
   10 consecutive weeks atop Global Excl. U.S. (July 4–Sept. 5)" — which matches
   the repo's `GLBX weeksAtPeak: 10` exactly, from the body rather than from our
   own transcription.
2. **A first, stated by Billboard itself:** the song "became the first official
   World Cup anthem to lead the chart" (Global Excl. U.S.). Attributable and
   quotable. It is NOT yet on the site.

## What was deliberately NOT claimed

**"First African artist to win a Billboard global summer recap" — unverified, do
not publish.** The article names prior-year winners for the Global 200 only (Alex
Warren 2025, Sabrina Carpenter 2024, Jung Kook 2023) and says nothing about who
won the Excl. U.S. recap in any earlier year. Billboard is gated and Wayback
timed out on prior-year articles, so 2021–2025 are unchecked. Somebody has to
read those five years before that sentence can exist.
