# Board expansion + cover-art pass — resume state

**Written 28 Aug 2026 so this survives a session ending mid-flight.** Everything
below is either already done, or has a precise next step.

## The task

1. Add **Olamide**, **Black Sherif** and **BNXN** (fka Buju) to the Afrobeats
   Board as artists #13, #14 and #15. Paul asked for the first two, then added
   BNXN, with the instruction "ensure nothing is missed… no mistakes".
2. **Afterwards**, fix cover art across every artist page — "some additions
   don't have cover art".

## DONE — Nigeria, deterministically

TCSN's own archived register (21 Feb 2026 capture, 2,477 rows, including the 817
Silvers the live 500-row page will not serve) was read locally and the three
artists extracted. Results are committed beside this file:

| file | artist | distinct certified titles | tiers |
|---|---|---|---|
| `tcsn_bnxn.json` | BNXN / Buju | **55** | 23 Platinum · 14 Gold · 18 Silver |
| `tcsn_olamide.json` | Olamide | **52** | 17 Platinum · 13 Gold · 22 Silver |
| `tcsn_black.json` | Black Sherif | **24** | 6 Platinum · 7 Gold · 11 Silver |

Highest tiers: Olamide *Amapiano* (with Asake) **4× Platinum**; BNXN
*Gwagwalada* **5× Platinum**; Black Sherif *Wotowoto Seasoning* (with
ODUMODUBLVCK) **3× Platinum**. All three clear the board's ~20-plaque floor on
Nigeria alone.

**To re-derive if these files are lost:** fetch
`http://web.archive.org/web/20260221224010/https://turntablecharts.com/certification`
— note **no `id_`**, which returns gzip; the plain form gives the 39 MB page —
then read `__NEXT_DATA__` → `props.pageProps.certEntries`.

## PARTIAL RESULTS — the session hit its usage limit mid-sweep (28 Aug 2026)

Raw results are committed beside this file as `partial-sweep-results.json`.
Of 18 agents across the three sweeps, **3 completed and 15 died on the limit.**

### Established, and not to be redone
**Certifications — proven zeros, each register read in full:**
- **RIAA (US)** — 0 for both. Verified by exhaustion (the endpoint reports its own
  result totals) plus a 27-name lead-act sweep. `sherif` returns only Warren G,
  SHERIFF and Clapton's "I Shot The Sheriff"; `blacko` only Blackout collisions.
- **Music Canada** — 0 for both. `sherif` returns the 1980s Canadian band SHERIFF.
- **RMNZ (NZ)** — 0 for both, singles (24,260 rows) and albums (4,040).
- **RiSA (ZA)** — 0 for both. Whole register read at the production host,
  25 pages / 599 unique rows, 01 Jul 2015 → **09 Sep 2025**. Confirms again that
  RiSA has no Diamond tier.

**Chart peaks — proven zeros:** Germany (Offizielle), Netherlands (Single Top 100
and Album Top 100), Switzerland (Hitparade), Austria (Ö3) — all nil for both
artists, singles and albums.

### TWO CANDIDATE ROWS THAT ARE **NOT** REFUTED
`partial-sweep-results.json` files these under `rejected`, which is an artefact of
the post-processing filter: their verifier agents died, so `verdict` is `null`,
and `verdict?.standsUp` reads falsy. **They were never actually tested.** Both are
BPI (UK), both read off the register with permalink detail:

- **Olamide — "Infinity"** — credit `OLAMIDE FT OMAH LAY` — **Silver**, Single,
  YBNL Nation, certified **07.08.2026**, released 09.10.2020.
- **Olamide — "Amapiano"** — credit `ASAKE FT OLAMIDE` — **Silver**, Single,
  YBNL Nation, certified **07.08.2026**, released 23.05.2023.

Re-verify both before publishing either.

### Gaps — never to be reported as zeros
- **ARIA (AU)** — publishes no searchable register. Its only public list is
  `aria.com.au/latest-accreditations`, whose own header says *"Current as of 31
  August 2020"* — before every release at issue. Post-2020 accreditations are in
  the member-gated ARIA Report.
- **RiSA post-09 Sep 2025** — the register's newest row is ~11.5 months stale, so
  the zero is proven only through that date.
- **Ghana** — GHAMRO's host never completes a connection (read only via a Jan 2020
  Wayback capture); MUSIGA has no DNS record. Whether Ghana operates a
  certification programme at all is UNRESOLVED, and it matters for Black Sherif.
- **France (SNEP) and Belgium (Ultratop)** chart archives — lescharts.com and
  ultratop.be both sit behind a Cloudflare bot check. Not bypassed. GAP.
- Egypt and other African societies — network-blocked from this environment.


## CERTIFICATION SWEEP — COMPLETE (28 Aug 2026, after the limit reset)

Full results committed as `certs-olamide-blacksherif.json`. 7/7 agents.

**Olamide holds exactly TWO international certifications, both BPI (UK) Silver
singles, both certified 07.08.2026 on YBNL Nation:**
- **"Infinity"** — credit `OLAMIDE FT OMAH LAY` — Silver, released 09.10.2020
- **"Amapiano"** — credit `ASAKE FT OLAMIDE` — Silver, released 23.05.2023

Both survived adversarial verification at high confidence, read off BPI's own
register with permalink detail. **The collision risk here was real:** BPI title
id 10277 "INFINITY" is shared by four different singles — Jaymes Young (Gold),
One Direction (Silver), Guru Josh Project (**Platinum**) and Olamide ft Omah Lay
(Silver). The register disambiguates only by artist id, so a title-only match
would have imported Guru Josh's Platinum. The row is pinned to artist id 6924.

**Note for the totals:** `omah-lay-certifications-v1.md` already carries this same
Infinity Silver on Omah Lay's side. Counting it for both artists is correct —
the board counts per artist — but it must never be double-counted in a
cross-artist total.

**Black Sherif holds ZERO international certifications** in every register read.

### Proven zeros — 19 registers, each read in full, nil for both artists
RIAA · Music Canada · RMNZ · SNEP · BVMI · IFPI Switzerland · IFPI Austria ·
NVPI · IFPI Danmark · IFPI Norge · ZPAV · MAHASZ · FIMI · PROMUSICAE ·
AMPROFON · Pro-Música Brasil · RiSA · Ghana · RIKE (Kenya)

### Gaps closed locally from corpora already on disk
- **AFP/Audiogest (Portugal) — PROVEN ZERO for all three,** including BNXN.
  Checked against this project's own 218,649-row corpus (8 annual reports + 295
  weekly PDFs): Olamide 2 chart rows, **0 badged**; BNXN 2 rows, **0 badged**;
  Black Sherif **0 rows at all**.
- **IFPI Greece — not found, but only PARTIAL coverage.** 34 archived captures of
  `digital_ien.html` spanning Jan 2025 → Mar 2026 hold zero rows for any of the
  three. Greece's Award column only exists from 2021 and these captures do not
  cover 2021–2024, so this is "absent from what was read", NOT a proven zero.
- **ČNS IFPI (CZ/SK) — not found, single current week only.** Neither artist
  appears in the current chart page for either country. The tier is printed
  inside a chart row, so only currently-charting titles are ever visible; this is
  a very weak negative and must not be written up as a proven zero.

### Running totals
| artist | Nigeria (TCSN) | international | total |
|---|---|---|---|
| Olamide | 52 | 2 (BPI Silver ×2) | **54** |
| Black Sherif | 24 | 0 | **24** |
| BNXN | 55 | sweep still running | ≥55 |

## STILL TO RUN

Resume with `Workflow({scriptPath, resumeFromRunId})` — completed agents replay
from cache, so only the dead ones re-run:

| run | script | still needed |
|---|---|---|
| `wf_60143c18-b32` | `board-13-14-certifications` | Western Europe, Nordics/East, Southern Europe+LatAm clusters, and both verifiers |
| `wf_707f9a7a-fe3` | `board-13-14-chart-peaks` | Nigeria/Africa, UK/IE/US/CA, Nordic/South, Oceania/Global |
| `wf_b2060add-8a7` | `bnxn-certs-and-peaks` | everything — all 6 agents died |

## ORIGINALLY IN FLIGHT — three sweeps

Launched as workflows; results land in this session's task output files.

- **Olamide + Black Sherif certifications** — 5 register clusters, then a refute
  pass per row.
- **Olamide + Black Sherif chart peaks** — 5 territory groups, with a verifier
  field that rejects platform charts outright.
- **BNXN certifications + chart peaks** — 3 + 3 groups, then a refute pass.

If they were lost, relaunch with the same briefs. Every brief carries the
register recipes this project has established (RMNZ TablePress token, SNEP's
trailing-slash pagination trap, AFP annuals, Greece's unlabelled Award column,
ČNS chart-row tiers, Grammotex http-only, AMPROFON, NVPI, Ultratop).

### Traps the sweeps are guarding
- **BNXN was Buju until 2022** — early records file under one name, later under
  the other. Search both. And **Buju Banton is a different person** (Jamaican);
  every verifier must answer a `notBujuBanton` field.
- Awards and chart entries are filed under the **lead act**, so both artists'
  features must be searched under Pheelz, LADIPOE, Wizkid, Timaya, Kizz Daniel,
  Asake, Burna Boy, Fireboy DML, Arrdee, Darkoo, ODUMODUBLVCK and the rest.
- **Never** a platform chart (Spotify/Apple/iTunes/Deezer/Shazam) in official
  chart data.

### Known register error, deliberately NOT counted
TCSN's *Road Runners* row is really **Blaqbonez ft. Black Sherif** — it was
removed from Seyi Vibez on 27 Aug because the register's credit is wrong. So
Black Sherif arguably holds that plaque, but TCSN's row does not name him and
counting it would assert a certification the register credits to someone else.
Note it in his doc; do not count it.

## TO DO — adding each artist to the board

Per the CKay precedent (the most recent addition), each artist needs:

1. An entry in `app/data/afrobeats.ts`: slug, name, fullName, country, flag,
   hook, spotifyId, wikipedia, image, `verifiedOn`, `swept`, `releases`,
   `charts`, optional `chartPublished`.
2. **Both** sweep docs in `docs/sweeps/` — `<slug>-certifications-v1.md` and
   `<slug>-chart-peaks-v1.md`. `tests/sweepDocs.test.ts` requires both for every
   artist *regardless of the `swept` flag*, and requires the doc's
   `## Total: **N certifications**` line to match the data exactly, plus an
   `= N chart entries` total.
3. An `EXPECTED` entry in `tests/afrobeats.test.ts` (`{ total, diamond }`).
4. A new `AFROBEATS_VERIFIED_ON_*` constant if the sweep date differs.
5. New-route checklist: own `opengraph-image.tsx`, sitemap entry, breadcrumb
   label, links, `searchIndex` regeneration (`npm run build:search`).
6. Every new certification's country must carry a register link — enforced by
   `tests/registerLinks.test.ts`.

## TO DO — cover art (AFTER the sweeps, per Paul)

Audit is already complete and committed here.

- **41 rows carry no cover at all** — see `covers-missing.txt`. Concentrated in
  **davido (28)**, almost all chart rows, which matches this session's Davido
  resweep that added 26 Nigerian peaks; then **seyi-vibez (11)**, **wizkid (1)**,
  **omah-lay (1)**.
- **1 row has a cover that resolves to a placeholder** — see
  `covers-broken.tsv`. Wizkid's *System* chart row points at a Deezer cover that
  302-redirects to `d41d8cd98f00b204e9800998ecf8427e`, which is the MD5 of the
  **empty string** — Deezer's blank-cover hash. It renders a grey square. A
  simple 200-check would pass it; the redirect target is the tell.
- The other **386** distinct cover URLs resolve correctly.
- Covers come from two hosts only: `cdn-images.dzcdn.net` (971 rows) and
  `is1-ssl.mzstatic.com` (76).

**Re-run the audit** by dumping `{artist, kind, title, cover}` for every release
and chart row, then range-requesting each distinct URL and flagging both non-200
and any 302 whose target contains `d41d8cd98f00b204e9800998ecf8427e`.
