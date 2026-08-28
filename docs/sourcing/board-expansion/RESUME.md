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

## IN FLIGHT — three sweeps

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
