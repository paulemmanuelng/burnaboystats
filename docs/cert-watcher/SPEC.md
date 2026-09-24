# Cert watcher — build spec

File: `docs/cert-watcher/SPEC.md` (worktree `~/burnaboy-sweep`, branch `feat/cert-watcher`).
Written 24 Sep 2026. Status: **spec only, nothing built.** Paul picked this as "what to build next" #1 on 24 Sep 2026.

This spec draws on four things: the monitor code in this repo, the 23 Sep sweep's saved register responses (`$SWEEP` below), the 24 Sep endpoint re-test (`$RETEST`), and the memory notes. Two paths are used throughout:

```
SWEEP=/private/tmp/claude-501/-Users-paulemmanuelng-SQL-Project/67f048ed-be83-4572-8a31-55a59d5d7dc5/scratchpad/sweep-2026-09-23
RETEST=/private/tmp/claude-501/-Users-paulemmanuelng-SQL-Project/67f048ed-be83-4572-8a31-55a59d5d7dc5/scratchpad/certwatch-retest
```

Both are scratch directories and will not last. **Step 1 copies what it needs into `tests/fixtures/cert-watch/` before anything else.**

---

## 0. What it is, and what it must never do

Once a day, a GitHub Action does the following:

- reads every certification register a machine may read, for the 16 artists (Burna Boy plus the 15 on the board);
- compares each row that names one of them with the site's own plaque data (`app/data/certifications.ts`, `app/data/afrobeats.ts`);
- keeps **one** GitHub issue up to date. That issue lists every plaque the site lacks, every tier or multiple higher than the site holds, the watchlist, each register's reachability, and the week's manual checks.

It must never:

- **Edit site data, commit, push or open a PR.** The job has `contents: read`. Every plaque is added by hand after a human confirms it at the body ([[feedback-certs-confirm-at-body]]).
- **Treat a register row as a verified plaque.** Every line in the issue is a lead.
- **Say "no new certifications" for a register it did not read cleanly.** Unreachable, format changed, held and not-yet-built are each their own status.
- **Infer absence, downgrade or removal.** A register row the site is *ahead* of is never reported. This covers overwritten SNEP rows, NVPI lag, TCSN's 500-row cap, CZ/SK and GR chart-bound badges, the frozen CO register, and the kept plaques in [[feedback-kept-plaques-paul-ruled]].
- **Solve, evade or retry around a bot challenge, log in, or spoof a browser.** The User-Agent is always `burnaboystats-cert-watch/1.0 (+https://burnaboystats.com/contact)`.
- **Put Paul's email or any personal data in a request, header, file, fixture or issue.** This is enforced by a test (§9).
- **Read a path that robots.txt disallows for this User-Agent or `*`.** That rule is why BPI, ARIA's Dropbox zip and audiogest's PDFs are manual.

### House rules for the build

- Commit only after `npx tsc --noEmit`, `npx eslint`, `npx vitest run --testTimeout=60000` and `npx next build` **all exit 0**. Capture `$?` for each. Never pipe a check into grep, and never chain a commit with `;` ([[feedback-gate-commits-on-exit-code]]).
- Commit messages are plain, with no `Co-Authored-By` and no AI lines ([[feedback-no-coauthor-trailer]]).
- Do not push, open PRs or merge. Do not use ports 3000, 3100 or 3102.
- A figure the report prints is **derived** from data, never typed ([[feedback-derive-figures-from-data]]).
- Every guard is proved with a **real** string: the literal row a register served or the line the site shipped ([[feedback-negative-controls-use-real-strings]]).

---

## 1. What already exists, and what to reuse

| Piece | Where | Reuse |
|---|---|---|
| Issue open/update | `.github/workflows/stats-monitor.yml` | The pattern: cron plus `workflow_dispatch`, `contents: read` / `issues: write`, `gh` with `GH_TOKEN`. **Fix two bugs:** `gh issue list` without `--limit` sees only 30 issues, so a tracker past that point gets duplicated; and one comment per run would be spam on a daily schedule. |
| Report shape and badges | `scripts/check-stats.mjs` | Headline form ("**N item(s) need a look.**"), the report written to stdout, `$GITHUB_STEP_SUMMARY` and a gitignored file, and `has_drift`-style outputs. Badges: `🏅 in the register — verify & add`, `⏭️ register unavailable`, `✅ not listed yet`. |
| Exit-code contract | `tests/statsPipelineHealth.test.ts` | A bad config means "REFUSING TO CONTINUE" and exit 1. An unreachable source is reported per item, with exit 0. |
| Pure lib / I/O runner split | `scripts/stats-lib.mjs` vs `check-stats.mjs` | Every parser, matcher and renderer is pure and tested by vitest. Only `index.mjs` and `http.mjs` do I/O. |
| `main()` only when called directly | `scripts/apply-stat-updates.mjs:602` | The same guard, so tests can import `index.mjs`. |
| One in-flight fetch per URL | `apply-stat-updates.mjs:129–130` | `http.mjs` memo cache. |
| Typed fetch results, 900 ms gap, served-is-requested check | `scripts/turntable-walk.mjs` (`getOnce`, `throttle`, `MIN_GAP_MS`) | `http.mjs` returns `{ok:false, kind}` and never an empty value on failure ([[feedback-curl-not-urllib-on-this-mac]]). |
| "Publish the run report" (`if: always()`, says so when there is no report) | `.github/workflows/stats-refresh.yml:79` | Copied as is. |
| Word-anchored credit regex and featured-on aliases for all 16 artists | `scripts/live-artists.mjs` (`LIVE_ARTISTS`) | Imported directly: one source of truth for who is who. |
| Existing cert-watch hook | `check-stats.mjs:198–223`, `stats-lib.mjs:831 certWatchStatus`, `watched-metrics.json certWatches[]` | **Not reused; left untouched.** It matches on title alone (`pattern: "Dai Dai"`) and hardcodes FIMI's `"Nessuna certificazione"` in a generic helper. Its only entry is resolved (2026-08-17), so it checks nothing. Two ideas carry over: the `resolved` flag and the found / not-found / unavailable split. Deleting it is a later cleanup for Paul (§11). |
| Register know-how | `docs/sourcing/cert-sourcing.js` `BODY_HINTS`, memory notes (Grammotex, RMNZ, ZPAV, RiSA, AFP, TCSN) | Encoded as adapter recipes (§3). |

---

## 2. Architecture

### 2.1 Files

```
scripts/cert-watch/
  index.mjs          runner: CLI, load config + site, run adapters, diff, state, write outputs (the only I/O besides http.mjs)
  http.mjs           fetch wrapper: honest UA, per-host throttle, robots gate, memo, conditional GET, retries, typed results, run deadline
  robots.mjs         pure robots.txt parser (group match for our UA then *, longest-match Allow/Disallow, Crawl-delay)
  site.mjs           pure: buildSiteIndex(certModule, afroModule, liveArtists, config) → holdings + release index
  load-site.mjs      Node-24 loader: module.registerHooks + import() of app/data/*.ts (used by index.mjs only, never by vitest)
  match.mjs          pure: normalise, identify artist(s), fold, locate release, ladders/rank, compare, suppress, fingerprint
  state.mjs          pure: read/write the hidden state block, ticks, merge, cursors, health streaks
  report.mjs         pure: issue body, notify comment, run report, GITHUB_OUTPUT values
  config.json        watchlist, divergences, held rows, aliases, typos, namesakes, manual checks, host politeness, adapter switches
  adapters/
    index.mjs        registry of ALL 28 register rows (built, held, manual, not-yet-built), so the report is complete from step 1
    riaa.mjs         exports two adapters: riaa (standard) and riaa-latin (programme "RIAA Latin")
    musiccanada.mjs
    bpi.mjs  snep.mjs  zpav.mjs  ifpi-sverige.mjs  ifpi-danmark.mjs  nvpi.mjs
    cns-ifpi.mjs     exports two adapters: cns-ifpi-cz (chart 30) and cns-ifpi-sk (chart 43)
    bvmi.mjs  ifpi-austria.mjs  mahasz.mjs  ifpi-greece.mjs  ifpi-norge.mjs  promusicae.mjs
    swisscharts.mjs  rmnz.mjs  promusica-co.mjs  amprofon.mjs  fimi.mjs  tcsn.mjs  promusica-br.mjs
    manual.mjs       BE / AU / PT / ZA (and UK while BPI is held): register URL + one-line human check (+ optional archive probe)
tests/certWatch*.test.ts
tests/fixtures/cert-watch/**   (+ PROVENANCE.json)
.github/workflows/cert-watch.yml
```

`.gitignore` gains `cert-watch-out/`, `.cert-watch-cache/`, `prev-body.md` and `latest-body.md`. `package.json` gains `"check:certs": "node --no-warnings scripts/cert-watch/index.mjs --dry-run"`.

### 2.2 Run flow

1. **Validate `config.json`.** A problem here means REFUSING TO CONTINUE and exit 1. Problems include unknown keys, a missing `why` or `on` on a ruling, an unknown adapter id in `--only`, or a watchlist or divergence naming a release that doesn't exist.
2. **Load site data** (`load-site.mjs`, or `--site-json` in tests), then `buildSiteIndex`. Failure means REFUSING TO CONTINUE and exit 1.
3. **Read the previous state** from `--prev-body`, the hidden block in the issue body (§6). If that is empty, use `.cert-watch-cache/state.json`. If both are missing or corrupt, start fresh: the state is marked `reset`, and the report says so.
4. **Run adapters.** Each host has its own queue. Up to 6 hosts run at once; within a host, requests are serial with the host's minimum gap. Each adapter returns `{status, rows, newest, notes, cursor}` or a typed failure. An adapter's cursor advances only when its read completes cleanly.
5. **Identify → fold → locate → compare → suppress → fingerprint** (§4).
6. **Merge with state:**
   - new vs already open vs dismissed (ticked) vs changed;
   - re-check open candidates against today's site, since the site may have caught up;
   - watchlist readings;
   - health streaks.
7. **Render** `issue-body.md`, `comment.md` (only if notify), `report.md` and `results.json`, and write to `$GITHUB_OUTPUT` (§2.6).
8. **Exit 0.** The exceptions are listed in §7.

### 2.3 Loading the plaque data in Actions

Decision: **Node 24's built-in TypeScript support, plus a resolve hook.** There is no `tsx` and no `npm ci`.

`tsx` is in neither `package.json` nor the lockfile, so `npx tsx` downloads whatever version is current on every run. The workflow pins `node-version: 24`.

```js
// load-site.mjs
import { registerHooks } from "node:module";
import { pathToFileURL } from "node:url";
import path from "node:path";
const [maj, min] = process.versions.node.split(".").map(Number);
if (maj < 22 || (maj === 22 && min < 18)) throw new ConfigError(`Node ${process.versions.node}: TypeScript loading needs ≥ 22.18 (the workflow pins 24)`);
registerHooks({
  resolve(s, c, n) {
    try { return n(s, c); }
    catch (e) { if (e.code === "ERR_MODULE_NOT_FOUND" && /^\.\.?\//.test(s)) return n(s + ".ts", c); throw e; }
  },
});
export async function loadSite(repo) {
  const certs = await import(pathToFileURL(path.join(repo, "app/data/certifications.ts")).href);
  const afro  = await import(pathToFileURL(path.join(repo, "app/data/afrobeats.ts")).href);
  return { certs, afro };
}
```

Measured on Node 24.16: `certifications.ts` gives 4 albums, 65 singles, 24 features and 248 plaques; `afrobeats.ts` gives 15 artists, 664 releases and 990 plaques, in 125 ms. `--no-warnings` silences `MODULE_TYPELESS_PACKAGE_JSON`.

`--self-test` prints these counts, **computed from the modules and not typed**, and exits 0. Every workflow run does this first.

**Vitest never loads `load-site.mjs`.** CI's `ci.yml` runs on Node 20, which cannot strip types. Tests import the TS modules through vitest, then call `buildSiteIndex` or pass a JSON dump through `--site-json`.

### 2.4 HTTP layer (`http.mjs`)

- **Headers.** Always `User-Agent: burnaboystats-cert-watch/1.0 (+https://burnaboystats.com/contact)` and `Accept-Encoding: gzip, br`. An adapter may add only the headers the register's own page sends for its XHR:
  - `Referer` for RIAA admin-ajax, olis.pl, RadioScope and FIMI;
  - `X-Requested-With: XMLHttpRequest` for RIAA load-more, olis.pl and RadioScope;
  - `HX-Request: true` for BPI, only if Paul ever enables it;
  - `Accept-Language: es-MX` for AMPROFON and `pt-BR` for Pro-Música Brasil.

  Never a browser User-Agent. RiSA shows its *real* page to the honest User-Agent and a decoy to Chrome's, so honesty is also the working recipe.
- **Politeness.** At least **1,100 ms** between requests to the same host (a margin over 1 req/s). `config.hosts` overrides this from each host's robots.txt `Crawl-delay`: musiccanada.com waits 30 s and swisscharts.com 10 s.
- **Robots gate.** Fetch `/robots.txt` once per host per run. Cache it for 24 h in `.cert-watch-cache/robots/`, and fall back to a copy up to 7 days old if a refresh fails. Then:

  | robots.txt response | Treatment |
  |---|---|
  | 404 or other 4xx | allow everything |
  | 5xx or network failure, no cached copy | host counts as `unreachable (robots.txt unreadable)` |
  | path disallowed for our UA or `*` | adapter status `held-robots`; nothing is fetched |

  The saved robots files hold real rules:
  - BPI: `User-agent: *` / `Disallow: /`
  - Dropbox: `/sh/` disallowed
  - audiogest.pt: `/uploads` disallowed
  - SNEP and MAHASZ: only `ClaudeBot` is blocked, so our User-Agent passes
  - RiSA: `ClaudeBot` and `Claude-User` are blocked, and `Content-Usage: ai=n` is set; RiSA is manual anyway
- **Typed result.** A request returns `{ok:true, status, headers, body, url, fromCache}` or `{ok:false, kind, status?, detail}`, where `kind` is one of:
  - `network`, `timeout`, `http`;
  - `challenge`: a 403 or 503 carrying `cf-mitigated: challenge`, "Just a moment", "Checking your browser", `server: hcdn`, or a Cloudflare challenge form **without** the adapter's success marker;
  - `robots`, `budget`.

  Adapters check their own success marker **before** looking for challenge markers. RIAA pages always contain a `challenge-platform` script even when they work (the `US_RIAA_Latin_site` re-test body has both the script and the Dai Dai row), so RIAA tests for `table_award_row`.
- **Retries.** Two, on `network`, `timeout`, 5xx and 429. Back off 5 s × attempt, and honour `Retry-After` up to 60 s. **Never retry** a challenge, a 403 or a robots refusal, and never change headers to get round one.
- **Memo.** One in-flight promise per `(method, url, body)` per run.
- **Conditional GET.** Store validators (`ETag` / `Last-Modified`) in `.cert-watch-cache/validators.json` for large or rarely-changing files: ifpi.gr, the CO PDF (HEAD), AMPROFON and the TCSN HTML. A 304 reuses the cached body, if the adapter opted in to caching it.
- **Deadline.** The run budget is 540 s from start. Each adapter has a soft budget: 90 s by default, 150 s for musiccanada and bvmi. An adapter that has not started when the deadline passes reports `not-reached`.
- **Timeouts.** 30 s per request; 90 s for AMPROFON's 4.56 MB page and the TCSN HTML.

### 2.5 Adapter contract

```js
export default {
  id: "riaa-latin", country: "US", body: "RIAA", programme: "RIAA Latin",   // programme null = standard
  class: "AUTOMATE",                                    // AUTOMATE | WITH-CARE | MANUAL
  step: 1,                                              // build step that delivers it
  hosts: ["www.riaa.com"],
  registerUrl: "https://www.riaa.com/gold-platinum/?tab_active=platinum-latin",  // what a human opens
  ladder: "riaa",                                       // see §4.4
  dateKind: "award",                                    // award | publication | chart-week | year
  humanCheck: "Open the RIAA Gold & Platinum page, Latin tab, search the title; read the badge.",
  async read(ctx) { /* uses ctx.http, ctx.cursor, ctx.deep, ctx.searchTerms; returns {rows, newest, notes, cursor} or throws AdapterError */ },
  parse: { /* pure functions over raw bodies — what the fixture tests call */ },
  minRows: 1,                                           // fewer parsed rows than this on a 200 = changed format
  control: { deep: true, find: (r) => r.rowId === "default_451299" },  // positive control, checked in tests always, live on deep runs
};
```

A **row**:

```
{ credit, title, format: "single"|"album"|"unknown", formatRaw,
  tierRaw, reading: {tier, x, floor?, level?} | null,
  dateRaw, rowId?, url, raw (verbatim, ≤ 300 chars), extra: {isrc?, certNo?, week?, ownerTag?} }
```

All of `credit`, `title`, `formatRaw`, `tierRaw`, `dateRaw` and `raw` are **exactly as the register printed them**.

`AdapterError.kind` is one of `unreachable`, `challenge`, `format`, `mismatch` (the page served is not the page requested), `robots` or `budget`.

### 2.6 CLI and outputs

```
node --no-warnings scripts/cert-watch/index.mjs [flags]
  --dry-run            read live, print report.md to stdout, write cert-watch-out/, set write_issue=false (never touches an issue)
  --offline            no network: adapters read tests/fixtures/cert-watch/<adapter>/ (fixture map in each adapter)
  --only=a,b           run these adapters only (validated against the registry: ^[a-z0-9-]+(,[a-z0-9-]+)*$)
  --deep               weekly deep reads (the workflow passes it on Mondays UTC)
  --prev-body FILE     previous issue body (state + ticks)
  --render-only        no reads: re-render from --results with ticks from --prev-body
  --results FILE       results.json from a previous invocation (with --render-only)
  --site-json FILE     use a pre-built site index (tests on Node 20)
  --dump-site-index F  write the site index and exit (used once to freeze tests/fixtures/cert-watch/site-index.2026-09-24.json)
  --save-raw DIR       also write every raw response body + headers to DIR (how new fixtures are captured — real responses only)
  --cache DIR          on-disk cache (robots, validators, heavy bodies, state backup); default .cert-watch-cache
  --out DIR            default cert-watch-out
  --self-test          load site data, print derived counts, exit
```

**Outputs in `--out`:**

- `issue-body.md`, which includes the hidden state block;
- `comment.md`, written only when notify is true;
- `report.md`, the issue body without the state block plus run details, for the step summary and stdout;
- `results.json`, holding the candidates, health, watchlist, next state and the notify reasons.

**`$GITHUB_OUTPUT`:**

| Output | Value |
|---|---|
| `write_issue` | true unless `--dry-run` |
| `notify` | true when there is something to notify (§6.4) |
| `open` | open candidates |
| `new` | new since the last run |
| `not_read` | automated registers not read cleanly |
| `has_drift` | alias of `notify`, kept for parity with the stats monitor |

**Local dry runs.** Paul's Mac is on Node 24.16.

```
node --no-warnings scripts/cert-watch/index.mjs --dry-run                       # everything live, no issue
node --no-warnings scripts/cert-watch/index.mjs --dry-run --only=riaa-latin     # one register
node --no-warnings scripts/cert-watch/index.mjs --offline --dry-run             # fixtures only, no network
node --no-warnings scripts/cert-watch/index.mjs --dry-run --prev-body body.md   # see what dedupe would suppress
```

---

## 3. Adapters: recipe and classification

The 24 Sep re-test ran each endpoint twice from Paul's home connection, once with a browser User-Agent and once with the site's. The site's User-Agent worked everywhere it was tested. **How GitHub's datacenter addresses will be treated is a prediction, not a test.** Step 1 therefore includes the first real Actions run, dry run only.

This spec sets its own classification. Where the research text was cut off (Sweden onward), the recipe comes from the memory notes and the 23 Sep sweep scripts, which are named per row.

| # | Adapter id | Country · body / programme | Class | Step | Daily read (requests) | Deep read (Mondays) | Tier semantics | Award date |
|---|---|---|---|---|---|---|---|---|
| 1 | `riaa` | 🇺🇸 RIAA (standard) | AUTOMATE | 1 | Newest list, then load-more pages back to the cursor minus 3 days (cap 20); award history for each matched row (cap 20) | Artist search `se=` for each search term, plus load-more | badge `DI/ST level N`: 0 = Gold, N = N× Platinum; title reads Diamond at ≥ 10 but **the level keeps the count** | certification date |
| 2 | `riaa-latin` | 🇺🇸 RIAA · **RIAA Latin** | AUTOMATE | 1 | Latin tab artist search for the 16 terms (16) | Newest list on the Latin tab, if it honours ordering (checked in step 1) | badge `LA level N`, Oro / Platino / Diamante | certification date |
| 3 | `musiccanada` | 🇨🇦 Music Canada | AUTOMATE | 1 | wp-json awards, newest id first, 100 per page, down to the last id seen (normally 1; max 3, 30 s apart) | none needed (id cursor) | `class_list` `award_cert-<word>-<format>`; **each step is its own id** | post date (publication) |
| 4 | `bpi` | 🇬🇧 BPI | MANUAL (robots) | 2 | **Not fetched.** Parser built and tested; live fetch off, because robots.txt says `Disallow: /` | — | "Most Recent Certification", Silver→Diamond with ×N | certification date |
| 5 | `snep` | 🇫🇷 SNEP | AUTOMATE | 2 | `/les-certifications/` page 1, plus `/page/2/` while the newest date ≥ cursor (1–2) | `?interprete=` for each term | Or, Platine, Double/Triple Platine, Diamant; **overwrites the old row on upgrade** | date de constat |
| 6 | `zpav` | 🇵🇱 ZPAV | WITH-CARE | 2 | POST `/api/search` with `category_id:3`, subcategory 6, 7 and 8, `limit:100`, newest first (3) | Same with `search_in:"contractor"` for each term (≤ 48) | subcategory 6/7/8 = Złota/Platynowa/Diamentowa; **step = the filled `date_N` index**, never a row count | the `date_N` value |
| 7 | `ifpi-sverige` | 🇸🇪 Ifpi Sverige | WITH-CARE | 2 | Sverigetopplistan `search/?query=` for each term and lead act (≈ 25), then a record page for each `data-sart` whose badge changed (≤ 15) | Record page for every matched sart | Record page: `Guld/Platina: <tier> - cert.nr N - YYYY-MM-DD` (**latin-1**); the badge (`SWE,Platina x7`) is only a pointer | cert date |
| 8 | `ifpi-danmark` | 🇩🇰 IFPI Danmark | WITH-CARE | 2 | `http://ifpi.dk/certificeringer-0?page=0..2`, fetched 3 times and unioned until no new rows appear (≤ 9) | none (see §3.2) | Guld, Platin, `NxPlatin`; **credit cut at about 40 characters with "..."** | dd.mm.yyyy |
| 9 | `nvpi` | 🇳🇱 NVPI | AUTOMATE | 2 | `/api/filter?skip=0&take=500` (1) | same | `status` Goud/Platina/Diamant/Zilver (any case), `amount` = multiple; **each step its own uid** | d-m-yyyy (lags about 2 months) |
| 10 | `cns-ifpi-cz` | 🇨🇿 ČNS IFPI (chart 30) | AUTOMATE | 2 | `/hitparada/30` (1) | previous week via `?weekId=` (1) | badge `Zlatý singl` / `Platinový singl`; no multiples, no albums, only titles released 2022 or later, only while charting | chart week |
| 11 | `cns-ifpi-sk` | 🇸🇰 ČNS IFPI (chart 43) | AUTOMATE | 2 | `/hitparada/43` (1) | previous week (1) | same | chart week |
| 12 | `bvmi` | 🇩🇪 BVMI | AUTOMATE | 3 | Current-year walk `?action=suche&strJahr=YYYY&intseite=N`, 20 rows a page (about 30); in January, also the previous year | `strInterpret=` for each term | `1x Gold`, `3x Gold`, `2x Platin`, `1x Diamond` | year only |
| 13 | `ifpi-austria` | 🇦🇹 IFPI Austria | AUTOMATE | 3 | `/auszeichnungen/?fwp_per_page=100`; **always send `fwp_per_page`**, since the default page is cached (1) | pages 2–3 | GOLD, PLATIN, `N-fach PLATIN` | dd.mm.yyyy |
| 14 | `mahasz` | 🇭🇺 MAHASZ | AUTOMATE | 3 | `/arany-es-platinalemezek/adatbazis/YYYY` (1) | POST `/kereso` with `eloado=` for each term | icon `fa-circle` = Arany (Gold); `fa-play` plus `arany_platina_db` N = Platina ×N | year only |
| 15 | `ifpi-greece` | 🇬🇷 IFPI Greece | AUTOMATE | 3 | `digital_ien.html` and `digital_en.html`, conditional on Last-Modified (2) | — | Award column G / P / 2P / 3P / D; key on ISRC; only titles charting that week | chart week |
| 16 | `ifpi-norge` | 🇳🇴 IFPI Norge | AUTOMATE | 3 | `/trofe/trofeoversikt/?pg=1` (100 rows, newest first) (1) | `?aar=YYYY` | Trophy image `Trofe_GULL_…` / `Trofe_PLATINA_…`; **Nivå is free text** ("1X", "x1", "X2", blank, "Gull"), so take the digits; an image that matches neither → unparsed | dd.mm.yyyy |
| 17 | `promusicae` | 🇪🇸 PROMUSICAE | AUTOMATE | 3 | `awards/index?AwardsSearch[year]=Y&AwardsSearch[week]=W` for this ISO week and last, 10 rows a page (≈ 4) | `AwardsSearch[artist]=<exact dropdown string>` for each term | "Discos de Oro" / "Discos de Platino", with the multiple as `N ×` | week |
| 18 | `swisscharts` | 🇨🇭 IFPI Schweiz, via swisscharts.com | WITH-CARE | 3 | `swisscharts.com/edelmetall/YYYY` (1, crawl-delay 10). **Never hitparade.ch**, which serves a 403 challenge | — | `div.award_item`; multiple from the image name, `award_platin_1.svg`; awards are issued by the labels and the page says "keine abschliessende Liste" (not a complete list) | year |
| 19 | `rmnz` | 🇳🇿 RMNZ via RadioScope | WITH-CARE | 3 | Singles page (scrape the per-pageload `r=` / `n=` token), then the SSP call `order[0][column]=4&order[0][dir]=desc&length=100` (2); albums table 2051 the same way (2) | `length=500` | `Gold`, `Plat xN` (plain Platinum is `Plat x1`); **rows are cumulative, so the latest row for a credit and title is the current tier** | date certified |
| 20 | `promusica-co` | 🇨🇴 Pro Música Colombia | WITH-CARE (change watch) | 3 | HEAD the register PDF (Last-Modified), GET `/certificaciones-2/` (new PDF link?) (2). **Never wp-json** (403 hcdn) | — | Reports "register changed", with no rows; frozen since 21/02/2025 | PDF date |
| 21 | `amprofon` | 🇲🇽 AMPROFON | WITH-CARE | 3 | GET `certificaciones.php`, conditional where supported (1; 4.56 MB) | — | NIVEL "4" or "3 & 1" next to CERTIFICACIÓN "PLATINO & ORO": **the first number goes with the first tier** | date column |
| 22 | `fimi` | 🇮🇹 FIMI | WITH-CARE | 3 | POST `/ajax/filter-certificazioni.php` with `formato=1` and `formato=2`, `year=Y`, `numweek=0` (2) | previous year | Oro / Platino / N× Platino / Diamante, from both cert columns; `Nessuna certificazione` means an **explicit empty** here, and only here | week/year |
| 23 | `tcsn` | 🇳🇬 TurnTable (TCSN) | WITH-CARE | 3 | `_next/data/<buildId>/certification.json`, using the build id in state (1); on a 404, fetch the HTML once for the new build id. **Hash the rows, never the build id** | Wayback CDX for new captures of `turntablecharts.com/certification` (a lead only) | `milestone` `Gold_1`, `Platinum_N` (Silver would be `Silver_1`); the live list caps at **500 rows** and shows no Silver | `certifiedDate` |
| 24 | `promusica-br` | 🇧🇷 Pro-Música Brasil | WITH-CARE (this spec's call) | 3 | GET `/home-2/certificados/?busca_artista=<term>` for each term (≈ 16) | by year for the current year | card `pmblc-img-classificacao` alt text (tier); `pmblc-ano` year | year |
| 25 | — | 🇧🇪 Ultratop (BRMA) | MANUAL | 1 | Cloudflare 403 challenge on every request: never automated | | | |
| 26 | — | 🇦🇺 ARIA | MANUAL | 1 | The accreditations page is fine, but the list is a Dropbox `/sh/` zip that robots.txt disallows | | | |
| 27 | — | 🇵🇹 AFP (Audiogest) | MANUAL | 1 | Weekly and annual PDFs sit under `/uploads`, which robots.txt disallows; monthly award cards are on social media | | | |
| 28 | — | 🇿🇦 RiSA | MANUAL (pending Paul's ruling) | 1 | See §11 | | Gold / Platinum / Double / Multi (Multi = **at least 3×**, no multiple) | |

Rows 25–28, and `bpi` while held, render as human checks (§5.2). The registry lists all 28 from step 1. An adapter not yet built shows `🧱 not built yet (step N)` together with its human check, so nothing is silently missing between steps.

**Search terms**, for query-based adapters: `LIVE_ARTISTS[*].name` plus `config.searchTerms` extras: "Wiz Kid", "Buju" (BNXN's former name) and "Burna". **Lead acts**, for adapters that search by artist and whose featured credits are indexed poorly: the distinct `artist` values in `LIVE_ARTISTS[*].aliases`, plus the lead in each Burna `features[].credit` (e.g. "Dave ft. Burna Boy" gives "Dave"), plus `config.leadAliases`.

### 3.1 Step 1 notes

- **RIAA.**
  - A row is `tr.table_award_row` with `id="default_<awardId>"`; Latin rows also use the `default_` prefix.
  - The badge is `img alt="badge <DI|ST|LA> level N"` with `title` "Gold" / "4X Platinum" / "1X Diamond". Cells: artist, title, label, format, date.
  - Load-more is `POST /wp-admin/admin-ajax.php?<window.queryParams>` with body `action=load_more_search_default&page=N`, `X-Requested-With` and `Referer: https://www.riaa.com/gold-platinum/`. It returns `{data, has_more, next_page, total}`.
  - Award history is `action=load_detail_from_recent_timeline&id=<awardId>`.
  - **The artist cell names the lead only.** Featured artists appear in the title: `DRAKE | ONE DANCE (FEAT. WIZKID & KYLA)` and `FUTURE | WAIT FOR U (FEAT. DRAKE & TEMS)`. See §4.2.
  - Search results drop older duplicate rows of a title, so current tier comes from award history when a matched row is a candidate.
  - Positive controls: `SHAKIRA & BURNA BOY | DAI DAI | badge LA level 2 | 2X Platino`, award 451299 (Latin), and `default_424119 badge DI level 11` One Dance (standard).
- **Music Canada.**
  - GET `https://musiccanada.com/wp-json/wp/v2/award?per_page=100&orderby=id&order=desc&_fields=id,date,title,content,class_list,link`. `title.rendered` is the credit; `content.rendered` (strip `<p>`) is the title.
  - `X-WP-Total` gives the size (31,858 on 24 Sep).
  - **Never** use `?_gp_search`, which is fuzzy and caps at 200. **Never** request ACF fields, which hold label contact names (personal data).
  - Tier words: `gold`, `platinum`, `double-platinum`, `triple-platinum`, `<n>-times-platinum` (e.g. `seven-times-platinum`, as served 22 Sep), `diamond`. Any other word leaves the row unparsed.
  - Positive control: id 89702, `Shakira, Burna Boy` / `<p>Dai Dai</p>` / `award_cert-double-platinum-single`.

### 3.2 Step 2 notes

- **BPI.** Build `parse.list` (list view, `?certified_date_from=`, `HX-Request: true`) and `parse.detail` ("Most Recent Certification", "Certification history"), and test them on the saved pages. `read()` must go through the robots gate. With today's robots.txt it returns `held-robots` without a request. Enabling it takes a written permission record in config (§11), never a code change.
- **SNEP.** Parse `div.certification`: categorie, titre, artiste, éditeur, certif, sortie, constat.
  - An upgrade **replaces** the earlier row and can change its credit. A disappeared row means superseded, never revoked.
  - The CSV export is partial; do not use it.
  - Positive control: `DAI DAI | SHAKIRA & BURNA BOY | Diamant | 27/08/2026`.
- **ZPAV.**
  - Headers: `Content-Type: application/json`, `X-Requested-With: XMLHttpRequest`, `Referer: https://www.olis.pl/charts/oficjalna-lista-wyroznien/zlote-plyty`. Without them, Cloudflare answers 302; the real 143-byte response is saved as a fixture.
  - Each row carries `date_1`…`date_7`, and **the filled index is the multiple**. One Dance is a single Platinum row with `date_3`, which means 3× Platinum.
  - Positive control: Dai Dai, subcategory 6, `date_1: 2026-08-26`.
- **Ifpi Sverige.**
  - The register is Ifpi Sverige's record page, `https://sys2.ifpi.se/netdata/grp006.MBR/artdata?sart=<id>`, which Ifpi Sverige links from its Guld och Platina page. It is served in **ISO-8859-1**, so decode it as latin1.
  - Grammotex (the GLF copy) is **not** used.
  - Titles that never charted have no Sverigetopplistan id. That is a coverage gap, listed in §5.2.
  - Positive controls: Dai Dai sart 15311162, `Guld/Platina: Platina - cert.nr 11317 - 2026-09-18`; Tyla "WATER" sart 12096186, `Platina - cert.nr 11312 - 2026-09-18`.
- **IFPI Danmark.**
  - Over **http only**: https fails the certificate name check (curl 60).
  - The pager shuffles rows that share a date between requests, so a single crawl drops about 7%. The daily run takes the union of three fetches.
  - Real truncation: `Major Lazer Feat. Moti Ty Dolla $ign...	Boom	Warner Music	Track	Platin` (01.08.2017).
- **NVPI.** `{count, items[]}`, newest first. `metadata.artists[]` lists featured credits, so read it alongside the headline credit. Newest award on 24 Sep: 16-7-2026.
- **ČNS IFPI.** Parse `div.chart-full-row`. The badge is the `<strong>` inside `chart-full-row__details`, and the credit reads `ARTIST - LABEL`. Check that the page's week id is the one requested. **A missing badge is not evidence of no award.**
- **Deep read for DK.** None. A full union of all 7 sort orders (13,508 rows) would break the 10-minute budget. New awards appear at the top by date, and the daily three-way union covers them.

### 3.3 Step 3 notes

These were written from the research and the sweep scripts. **Verify each against its fixture before relying on it.**

- **BVMI.** Asking for a page past the end returns the last page again, so stop when a page repeats (a `mismatch` check). The page count comes from `value="N" name="submit"`. Positive control: `Dave feat. Burna Boy | Location | 2026 | Single | 1x Gold`.
- **IFPI Austria.** Positive control: `Shakira & Burna Boy | Dai Dai | Single | PLATIN | Sony | 03.09.2026`.
- **IFPI Greece.** Positive control: `Tems, Dave | Raindance (feat. Tems) | GBUM72506029 | 2P`.
- **RMNZ.** Build the DataTables SSP query with `URLSearchParams`; hand-built strings break on `[` `]`. The server is `BitNinja-WafPro`: a block means `challenge`, and the adapter stops. Raindance's cumulative rows are the test: Gold 2026-02-05, Plat x1 2026-03-19, Plat x2 2026-08-27.
- **TCSN.**
  - A title's trailing parenthesis can be an **owner tag**: `Reason (Omah Lay)` vs Asake's `Reason` (§4.2).
  - The live cards read "Claim plaque" (`isClaimed:false`) under "Eligible Songs". The report carries TCSN's standing caveat on every NG line.
  - The register is request-based and paid, and Silver is a real tier (see the `NG` comment in `certifications.ts`).
- **FIMI.** Keep `Nessuna certificazione` inside `fimi.mjs`. The site footer forbids crawling "ai fini dell'addestramento AI" (for AI training). This watcher is a fact-check with no model in it (§11).
- **AMPROFON.** It sits on Hostinger's CDN, which served "Checking your browser" on 6 Sep. When that happens the status is `challenge`, and the adapter stops.

---

## 4. Matching and diff rules (`match.mjs`)

### 4.1 Site index (`site.mjs`)

For each of the 16 artists (`LIVE_ARTISTS` keys, which must equal `afrobeatsSlugs` plus `burna-boy`; a test checks the two sets are equal):

- **Releases.**
  - Burna: `albums` are `format: "album"`; `singles` and `features` are `single`. Keep `credit` verbatim.
  - Board: `kind: "Albums"` is `album`; the other kinds are `single`.
- **Holdings.** For each release, `(country, programme) → {tier: level, x: x ?? 1, raw: cert}`, where `programme = cert.body ?? null`. So Dai Dai US is `(US, "RIAA Latin")`, and Dai Dai CO is `(CO, "Sony Music Colombia")`. The Colombian plaque is label-issued, so it is never compared with Pro Música Colombia rows, whose programme is `null`.
- **Lead aliases per release**, used to match rows whose credit omits the artist:
  - `LIVE_ARTISTS[slug].aliases` (`{artist, title, release}`);
  - the lead parsed from each Burna `features[].credit` ("Dave ft. Burna Boy" gives lead "Dave", title "Location");
  - `config.leadAliases`, where each entry needs `why` and `on`.
- **Integrity checks, part of the index build:**
  - every plaque is indexed exactly once, so the index total equals `totalAwards()` plus the sum of `certCount` over the board (derived in the test, never typed);
  - no two releases of one artist share a normalised title and format, unless `config.titleAliases` explains it.

### 4.2 Identify: which of the 16 does a register row belong to?

Run in this order and keep every reason. The reasons become the ⚠ flags in the issue.

1. **Reject tribute and karaoke acts.** If the credit or title matches `/\b(8[- ]?bit|karaoke|tribute|made popular by|in the style of|backing track|emulation|lullaby renditions?)\b/i`, drop the row and count it in the run details. No register in the 23 Sep dumps carries one: a case-insensitive grep across the MC, DK, CH, AT and HU dumps found none. The guard is proved with the real Deezer string recorded in memory: `Be Honest (8-Bit Jorja Smith & Burna Boy Emulation)` by 8-Bit Arcade.
2. **Build the credit field.** Take the register credit, plus any **feature qualifier lifted from the title**: a parenthesis or bracket, or a ` - ` suffix, that starts with `feat.`, `ft.`, `featuring`, `with`, `con`, `avec` or `mit`. Examples: RIAA `ONE DANCE (FEAT. WIZKID & KYLA)` and GR `Raindance (feat. Tems)`. The tribute string in step 1 has no such prefix, which is why it can't come in this way.
3. **Direct match.** `LIVE_ARTISTS[slug].credit` tested against the credit field. These regexes are word-anchored; a bare `/rema/` matched "Reman" and "La Suprema Corte". Then subtract `config.namesakes`:
   - "Olamide Badoo", "Tijani Olamide", "Yusuf Olamide Olotu" for olamide (`/\bolamide\b/` alone matches them);
   - "Buju Banton" for bnxn;
   - "I Shot The Sheriff" and "SHERIFF" for black-sherif.
4. **Buju-era credit.** If the credit matches `/\bbuju\b/i` but not `/\bbuju\s+banton\b/i`, match bnxn and flag ⚠ `Buju-era credit — confirm it is BNXN`. The real negative control is RIAA's `BUJU BANTON | TIL SHILOH` row (`default_36107`, `badge ST level 0`).
5. **Register typos.** `config.creditTypos` covers TCSN's "Ayra Staar" (ayra-starr) and "Centra Cee", which is not one of ours and is documented so nobody adds it. Flag ⚠ `register misspells the credit`.
6. **Owner tag (TCSN).** A trailing parenthesis equal to an artist's display name, whether or not one of the 16, moves to `extra.ownerTag`, and the title is compared without it. If there is an owner tag, **it must name the artist**. `Reason (Omah Lay)` belongs to Omah Lay and never to Asake's `Reason`, and vice versa.
7. **Lead alias.** If the credit field names a known lead (word-anchored) **and** the title matches that alias pair, match the featured artist and flag ⚠ `credit does not name <artist> — matched on lead + title; confirm the featured credit before adding`. This is the Boom DK precedent. The flag reads ⚠ `credit truncated by the register` when the credit ends in `...` or `…`.
8. **Held rows.** `config.heldRows` holds exact `(adapter, credit, title)` triples that must never become candidates. Example: TCSN's `Asake | Bad Influence`. It is Omah Lay's song (*Get Layd*, track 4); TCSN's `artiste` field is wrong, and the plaque is HELD and published for neither ([[feedback-match-artist-with-title]]).

A row can match **more than one** artist ("Wizkid feat. Tems — Essence"). Each artist gets its own comparison, and the report groups them under one register row.

### 4.3 Fold, locate, compare

- **Normalise, for comparison only.** Apply NFKD and strip diacritics; lowercase; fold `’‘´\`` to `'`; treat `&` as "and" in titles; collapse whitespace; trim edge punctuation. **Verbatim strings are always kept alongside and are what the report prints.**
- **Title qualifiers.** Feature qualifiers are dropped on both sides. **Version qualifiers are significant:** remix, rmx, live, acoustic, sped up, slowed, edit, version, mix, instrumental, a cappella, remaster. So `Sungba` ≠ `Sungba (Remix)`. `config.titleAliases` is a list, never a rule (e.g. "Kese (Dance)" → "Kese"); each entry needs `why`.
- **Fold.** Group by `(artist, adapter, country, programme, normTitle, format)` and keep the **highest** reading, holding up to 3 verbatim rows. This covers TCSN's "Gwagwalada" filed under two credit spellings, "Bad Vibes" listed twice, and RMNZ's cumulative ladder. "On God" by two different credits stays as two records, because the credits map to different artists or releases.
- **Locate** the site release for the artist by normTitle **and** format. A known register format that disagrees (album vs single) means no match. If nothing matches, the kind is **NEW RELEASE**.
- **Compare** with the holding at `(country, programme)`:

  | Site holds | Candidate kind |
  |---|---|
  | nothing | **NEW PLAQUE** |
  | a lower rank on the adapter's ladder | **UPGRADE** |
  | an equal or higher rank | none. Never reported; "site ahead" is not evidence of anything |

  A matched row whose tier did not parse is **UNREADABLE TIER**: listed individually, never skipped.

### 4.4 Ladders: multiples read in the register's own steps

- `standard`: rank is `[tierIndex(Silver < Gold < Platinum < Diamond), x]`, compared in that order. A German `3x Gold` ranks below `1x Platin`.
- `riaa`: compared in units. Gold (level 0) = 0.5; level N = N; the site's `Diamond` = 10 × (x ?? 1); site `Platinum ×N` = N.
  - The site holds US **Diamond** for One Dance and Wait For U by an explicit modelling choice, a floor recorded in the comment above the board data in `afrobeats.ts`. The register reads level 11 for both (One Dance `default_424119`, Wait For U `default_451587`).
  - Both readings are in `config.knownDivergences` **with the exact reading**. Level 12 would reappear as a candidate for Paul.
- `risa` (for later): `Multi-Platinum` is a floor of 3 with no multiple.
- Per-adapter tier parsers turn `tierRaw` into `{tier, x}` and return `null` for anything unseen. This includes, for example, a Czech "Diamantový" badge that has never been observed: it is not guessed.

### 4.5 Suppress and fingerprint

- `config.knownDivergences` holds exact `(adapter, artist, title, readingRaw)` entries, each with `why`, `ruledBy` and `on`. A suppressed row is counted in the run details, never listed as a lead.
- The three kept plaques (AU Loved by You, AU Enjoy Yourself (Remix), UK Sungba (Remix)) cannot surface under §4.3, because the site is ahead of every register reading for them. The tests prove it with BPI's real `ASAKE | SUNGBA` detail page ("Most Recent Certification Silver", 17 January 2025).
- `key = adapter|country|programme|artist|normTitle|format`.
- `fp = sha256(key + "|" + reading.tier + "×" + reading.x (or tierRaw when unparsed)).slice(0, 16)`.

  Dates, labels and chart positions are **not** in the fingerprint, so a row reprinted with a new chart position is not new.

### 4.6 Trap register: each trap, where it is encoded, and its test

| Trap (source) | Rule | Test (real string) |
|---|---|---|
| Title-only matching gave 5 phantom upgrades on 27 Aug | artist **and** title (§4.2–4.3) | TCSN `Reason (Omah Lay)` vs `Reason`/Asake |
| TCSN owner tag in the title | §4.2.6 | same |
| TCSN `artiste` errors: Bad Influence, "Ayra Staar", Smooth Criminal repeating the title | heldRows / creditTypos / ⚠ | rows from the saved TCSN capture |
| Variant credits for one record (Gwagwalada, Bad Vibes) | fold, highest reading | saved TCSN rows |
| Tribute and karaoke acts | §4.2.1 | `Be Honest (8-Bit Jorja Smith & Burna Boy Emulation)` |
| Unanchored names (Rema / "Reman", Olamide namesakes, Sheriff, Mackay / McKay) | `LIVE_ARTISTS` regex plus namesakes | strings from `live-artists.mjs` comments (shipped) |
| BNXN ≠ Buju Banton; Buju-era filings | §4.2.4 | RIAA `BUJU BANTON` row |
| Featured artist only in the title (RIAA) | §4.2.2 | `ONE DANCE (FEAT. WIZKID & KYLA)` |
| Lead-act filing and truncated credits (BPI Sungba, DK Boom) | §4.2.7 ⚠ | DK `Major Lazer Feat. Moti Ty Dolla $ign...` |
| Case: registers print upper case, the repo sentence case | normalised compare | `DAI DAI` vs "Dai Dai" |
| Programme ≠ country (RIAA Latin; Colombia label-issued) | programme in the key | Latin `badge LA level 2` must not match a standard-programme holding |
| Multiples by step (PL `date_N`, NZ cumulative, RIAA level, MC and NVPI per-step ids, SNEP overwrite, DE `3x Gold`, NO free text, AT `N-fach`, MX "3 & 1", HU `arany_platina_db`, CZ/SK no multiples) | per-adapter parser plus ladder | one real row per form |
| RIAA Diamond held as a floor on the site | knownDivergences with the exact level | One Dance `DI level 11` suppressed; any other level surfaces |
| Absence ≠ uncertified (TCSN cap, CH incomplete, CZ/SK/GR chart-bound, NVPI lag, CO frozen) | never report site-ahead or missing rows | a row missing from the fixture produces no candidate |
| Kept plaques | never re-flagged | BPI `ASAKE SUNGBA` |
| Served page ≠ requested (BVMI past-the-end, AT cached default, TCSN build id) | `mismatch` status | BVMI repeat page; TCSN 404 then rebuild |
| Encoding (sys2.ifpi.se latin-1) | decode as latin1 | `Ljudbärare`, `Märke` read correctly from the saved record |
| http-only host (ifpi.dk) | the URL is http | the adapter test asserts the scheme |
| RIAA's harmless `challenge-platform` script | marker first, then challenge | the re-test `US_RIAA_Latin_site` body reads OK |
| Real challenges and decoys | `challenge` / `mismatch` | re-test bodies `BE_Ultratop_site`, `CO_media_API_site` (hcdn), `CH_hitparade_site`, `ZA_risa_org_za_browser` (1,099 B decoy), `PL_olis_bare_site` (302) |
| A register-specific string in a generic helper (`Nessuna certificazione`) | kept in `fimi.mjs` only | a grep test over `match.mjs` and `report.mjs` |
| A fetch that returns "nothing" on error | typed results; unreachable never counts as read | a rejected fetch appears under "not read" |

---

## 5. Issue format

**Title (exact):** `🏅 New certifications found — verify & add`.

The **body is rewritten every run**, as a complete current picture; editing a body sends no notification. A **comment is posted only for something new or changed** (§6.4), and that comment is what notifies. When there is no issue, one is created only if the run has something to notify, or it is Monday (the weekly to-do).

### 5.1 Body structure

1. **Headline.** Candidates open, how many are new since the last run, clean reads out of the automated registers, manual checks due, and watchlist size. If any automated register was not read cleanly, the headline always names it: "Not read today: … — those registers say nothing about today."
2. **Lead disclaimer.** One line: every line is a lead; confirm at the body, then add by hand. The hand-edit checklist: certifications.ts / afrobeats.ts, `/compare` pricing ([[feedback-every-plaque-on-compare]]), register link ([[feedback-link-new-certs]]), updates feed.
3. **Candidates.** One task-list item per `(artist, release, country, programme)`, newest first, 🆕 for new. Sub-bullets:
   - register reading, verbatim;
   - award date, with its kind;
   - row, verbatim, in a code span;
   - site holding now (derived);
   - check URL (human) and read URL/endpoint (bot);
   - flags;
   - first seen.

   **Ticking the box dismisses the candidate** until its reading changes.
4. **Watchlist.** Every item, every run, until it lands.
5. **Register health.** All 28 rows: class, today's status, rows parsed, newest award seen, note.
6. **Manual checks this week.** Task list; ticks reset on the next ISO week.
7. `<details>` **Run details:**
   - run link, duration and requests per host;
   - suppressed counts (divergences, held rows, tribute rejects, dismissed);
   - candidates cleared since the last notify, because the site caught up.
8. **Hidden state block** (§6.1).

**Hygiene for untrusted text.** Register strings go into inline code, with backticks escaped, control characters stripped and a 300-character cap. `@` mentions and HTML are therefore inert, and a stray `-->` cannot close the state comment. The state block itself is base64.

**Size.** Show at most 40 candidates in full; summarise the rest with counts. The whole body must stay under 60,000 characters (GitHub's limit is 65,536).

### 5.2 Rendered example: 24 Sep 2026

What this example is built from:

- **Real and current:** the watchlist and register-health lines, from the 24 Sep 06:49–06:54 UTC endpoint re-test and the RIAA Latin row read then.
- **Unknown:** today's own candidate list, because no watcher has run yet.
- **Replays:** the two candidate entries are real register rows shown **against the site as it stood before it caught up**:
  - Music Canada's Dai Dai row, added to the site in `2c7c709f` on 22 Sep;
  - Ifpi Sverige's Tyla "Water" record, added in PR #317 on 23 Sep.

They show the format; the live issue would not list them today.

````markdown
## 🏅 Certification watch — Thursday 24 September 2026

**2 candidates to verify** (2 new since the last run) · 23 of 23 automated registers read cleanly · 5 manual checks this week · 2 on the watchlist

> Every line is a **lead**, not a fact. Confirm it in the body's own register, then add it by hand: `certifications.ts` / `afrobeats.ts`, its `/compare` pricing, the country's register link, the updates feed. This bot never edits site data.

### Candidates

- [ ] 🆕 **Burna Boy — "Dai Dai"** · 🇨🇦 Canada · Music Canada · **NEW PLAQUE** — _REPLAY: site as before 2c7c709f_ <!-- fp:… -->
  - Register reads: `award_cert-double-platinum-single` (database label "Double Platinum Single")
  - Award date: `2026-09-21T15:53:40` (publication date)
  - Row: `id 89702 · title.rendered "Shakira, Burna Boy" · content.rendered "<p>Dai Dai</p>\n" · award_cert-double-platinum-single · award_type-single · https://musiccanada.com/award/shakira-burna-boy/`
  - Site holds now: nothing in CA for this release
  - Check: https://musiccanada.com/gold-platinum/ · Read via: `GET https://musiccanada.com/wp-json/wp/v2/award?per_page=100&orderby=id&order=desc&_fields=id,date,title,content,class_list,link`
  - First seen: 2026-09-21

- [ ] 🆕 **Tyla — "Water"** · 🇸🇪 Sweden · Ifpi Sverige · **UPGRADE** Gold → Platinum — _REPLAY: site as before PR #317_ <!-- fp:… -->
  - Register reads: `Guld/Platina: Platina - cert.nr 11312 - 2026-09-18`
  - Award date: `2026-09-18`
  - Row: `Artist: TYLA · Titel: WATER · Prefix/Suffix: USSM12305126 · Märke: FAX RECORDS/EPIC · Guld/Platina: Platina - cert.nr 11312 - 2026-09-18`
  - Site holds now: Gold
  - Check: https://sys2.ifpi.se/netdata/grp006.MBR/artdata?sart=12096186 · Found via: `https://sverigetopplistan.se/search/?query=tyla` (badge `SWE,Platina`)
  - First seen: 2026-09-19

### Watchlist — reported every run until it lands

- ⏳ **Dai Dai (Shakira & Burna Boy) — 🇺🇸 RIAA Latin** · register: `2X PLATINO` (`badge LA level 2`, award `default_451299`, certification date July 9, 2026) · site: Platinum ×2 (RIAA Latin) · waiting for: above 2X · lead: RIAA's Instagram (@riaa_awards) showed a "6X Latin Platinum" badge on 23 Sep 2026 · read ✅ today
- ⏸️ **Dai Dai (Shakira & Burna Boy) — 🇬🇧 BPI** · not machine-read: BPI's robots.txt says `Disallow: /` · last reading (23 Sep sweep, BPI detail page): `Most Recent Certification Silver`, `Most Recent Certification Date 07 August 2026`; the public list's newest batch was 04.09.2026 · site: Silver · waiting for: Gold (fan lead) · human check: open https://certified-awards.bpi.co.uk/, search "Dai Dai", read "Most Recent Certification"

### Register health

| Register | Class | Today | Newest seen / note |
|---|---|---|---|
| 🇺🇸 RIAA | AUTOMATE | ✅ read | newest award September 23, 2026 |
| 🇺🇸 RIAA Latin | AUTOMATE | ✅ read | 1 row for "burna boy" (Dai Dai, July 9, 2026) |
| 🇨🇦 Music Canada | AUTOMATE | ✅ read | newest id 89710, 2026-09-23 |
| 🇫🇷 SNEP | AUTOMATE | ✅ read | newest date de constat 17/09/2026 |
| 🇳🇱 NVPI | AUTOMATE | ✅ read | 6,493 rows; newest 16-7-2026 (NVPI publishes late) |
| 🇨🇿 ČNS IFPI | AUTOMATE | ✅ read | week 38/2026 · badges show only while a title charts |
| 🇸🇰 ČNS IFPI | AUTOMATE | ✅ read | week 38/2026 · badges show only while a title charts |
| 🇩🇪 BVMI | AUTOMATE | ✅ read | year only |
| 🇦🇹 IFPI Austria | AUTOMATE | ✅ read | newest 03.09.2026 |
| 🇭🇺 MAHASZ | AUTOMATE | ✅ read | 269 rows (2026) |
| 🇬🇷 IFPI Greece | AUTOMATE | ✅ read | file Last-Modified 23 Sep 2026 05:48 GMT · charting titles only |
| 🇳🇴 IFPI Norge | AUTOMATE | ✅ read | |
| 🇪🇸 PROMUSICAE | AUTOMATE | ✅ read | |
| 🇨🇭 IFPI via swisscharts.com | WITH-CARE | ✅ read | 29 cards for 2026 · not a complete list |
| 🇳🇿 RMNZ (RadioScope) | WITH-CARE | ✅ read | 24,435 rows; newest 2026-09-17 |
| 🇨🇴 Pro Música Colombia | WITH-CARE | ✅ unchanged | register PDF Last-Modified 05 Mar 2025 (frozen since 21/02/2025) |
| 🇲🇽 AMPROFON | WITH-CARE | ✅ read | 4.56 MB table, no challenge |
| 🇩🇰 IFPI Danmark | WITH-CARE | ✅ read | newest 16.09.2026 · credits cut at about 40 characters |
| 🇸🇪 Ifpi Sverige | WITH-CARE | ✅ read | uncharted titles have no record id |
| 🇵🇱 ZPAV | WITH-CARE | ✅ read | |
| 🇮🇹 FIMI | WITH-CARE | ✅ read | |
| 🇳🇬 TurnTable (TCSN) | WITH-CARE | ✅ read | 500 rows (the live cap; no Silver shown) · build ZrJg_IrMVvhD5CaQgm2Ai |
| 🇧🇷 Pro-Música Brasil | WITH-CARE | ✅ read | |
| 🇬🇧 BPI | MANUAL | ⏸️ held — robots.txt | human check below |
| 🇧🇪 Ultratop | MANUAL | 📋 human check | Cloudflare challenge (403) |
| 🇦🇺 ARIA | MANUAL | 📋 human check | list is a Dropbox zip that robots.txt disallows |
| 🇵🇹 AFP | MANUAL | 📋 human check | robots.txt disallows `/uploads` (PDFs) |
| 🇿🇦 RiSA | MANUAL | 📋 human check | awaiting Paul's ruling · newest good Wayback capture 20260818173657 |

### Manual checks this week (ticks reset Monday)

- [ ] 🇬🇧 **BPI** — open https://certified-awards.bpi.co.uk/, set "certified date from" to last Monday, search each of the 16 names plus "Buju"; for Dai Dai, open its detail page and read "Most Recent Certification".
- [ ] 🇧🇪 **Ultratop** — in a browser, open https://www.ultratop.be/nl/goud-platina/2026/singles and `/albums`, Ctrl-F the 16 names, and screenshot any row with the URL in frame.
- [ ] 🇦🇺 **ARIA** — open https://www.aria.com.au/accreditations, download the current list, and search credit **and** title. "Loved by You" and "Enjoy Yourself (Remix)" are kept plaques; don't re-flag them.
- [ ] 🇵🇹 **AFP** — open https://www.audiogest.pt/tops-semanais-2026, read the newest weekly PDF's `Gal.` column for the 16 names, then this month's award cards at instagram.com/audiogest (a frame proves only its own rows).
- [ ] 🇿🇦 **RiSA** — open https://risa.org.za/ certifications in a browser and search the 16 names; the badge is the tier (Multi-Platinum = at least 3×).
- Coverage the bot cannot close: 🇳🇬 TCSN shows only 500 rows and no Silver (check for a new Wayback capture) · 🇨🇿🇸🇰 albums and off-chart titles carry no badge · 🇬🇷 non-charting titles carry no award · 🇸🇪 never-charted titles have no record id · 🇳🇱 NVPI runs about 2 months behind.

<details><summary>Run details</summary>

Run 2026-09-24 06:17 UTC · 4 m 12 s · 118 requests across 26 hosts · suppressed: 2 known divergences (One Dance, Wait For U: RIAA level 11 vs site Diamond), 1 held row (TCSN Asake | Bad Influence), 0 tribute rejects, 0 dismissed · cleared since the last notify: none
</details>

<!-- cert-watch:state:v1
eyJ2IjoxLCJ1cGRhdGVkIjoi…
-->
````

The run-details line (duration, request count) illustrates the shape only; those figures come from the run.

An **unreachable register** renders like this. It is shown with AMPROFON's real 6 Sep failure, when Hostinger's CDN served "Checking your browser":

```markdown
**0 candidates** · 22 of 23 automated registers read cleanly · **Not read today: 🇲🇽 AMPROFON (bot challenge — "Checking your browser") — AMPROFON says nothing about today.**
| 🇲🇽 AMPROFON | WITH-CARE | ⏭️ not read — bot challenge (HTTP 403, server: hcdn) · 1st day | human check: open https://amprofon.com.mx/es/pages/certificaciones.php in a browser |
```

The phrase "No new certifications" may appear **only** as "No new certification leads in the N registers read cleanly", and only when the not-read list is empty or printed right next to it.

### 5.3 Notify comment

```markdown
### 🏅 2 new certification leads — 24 Sep 2026
- 🆕 Burna Boy — "Dai Dai" · 🇨🇦 Music Canada · `award_cert-double-platinum-single` (2026-09-21) · site: none
- 🆕 Tyla — "Water" · 🇸🇪 Ifpi Sverige · `Platina - cert.nr 11312` (2026-09-18) · site: Gold
Full detail in the issue body. Cleared since last time (the site caught up): none.
```

---

## 6. Dedupe with no repo writes

### 6.1 Where state lives

State lives in a hidden block at the end of the issue body:

```
<!-- cert-watch:state:v1
<base64(JSON)>
-->
```

It is base64 so that register text cannot close the comment. Its shape:

```json
{ "v": 1, "updated": "2026-09-24T06:21:30Z", "run": "<run id>", "reset": false,
  "open":      { "<key>": { "fp": "…", "kind": "UPGRADE", "firstSeen": "2026-09-19", "reading": {"tier":"Platinum","x":1,"raw":"Platina - cert.nr 11312 - 2026-09-18"}, "adapter": "ifpi-sverige" } },
  "dismissed": { "<fp>": "2026-09-22" },
  "watch":     { "dai-dai-riaa-latin": { "raw": "badge LA level 2", "since": "2026-09-23" } },
  "health":    { "amprofon": { "status": "challenge", "since": "2026-09-06", "fails": 1 } },
  "cursors":   { "musiccanada": { "lastId": 89710 }, "riaa": { "lastDate": "2026-09-23" },
                 "tcsn": { "buildId": "ZrJg_IrMVvhD5CaQgm2Ai", "rowsHash": "…" },
                 "promusica-co": { "pdfLastModified": "Wed, 05 Mar 2025 23:28:13 GMT", "pdfLinks": "…" },
                 "ifpi-greece": { "lastModified": "Wed, 23 Sep 2026 05:48:30 GMT" },
                 "ifpi-sverige": { "badges": { "15311162": "SWE,Platina" } } },
  "manualWeek": "2026-W39", "manualTicks": ["uk", "be"] }
```

- **Cap.** 30,000 characters of base64. Verbatim rows live only in the rendered body, never in state. If the cap is exceeded, the run posts a comment saying so, emits `::error::` and keeps the previous state. It never writes a truncated state.
- **Backup.** A copy goes to `.cert-watch-cache/state.json` through `actions/cache`, restored from the newest key. The issue body wins when both exist. The backup is what survives if the issue is deleted.
- **Recovery.** With no open issue, the workflow reads the newest **closed** issue with the exact title, so dismissals survive Paul closing it.

### 6.2 Fingerprints and life cycle

- A **new** candidate has a fingerprint (§4.5) that is not in `open` or `dismissed`. It is marked 🆕 and triggers a notify.
- If the **same key** comes back with a **different fingerprint** (a tier or multiple change), it is treated as new: the old fingerprint is replaced and a notify is sent. *A candidate reappears only if it changes.*
- If it comes back with the **same fingerprint**, it stays listed in the body, with no notify.
- **Dismissed.** When Paul ticks `- [x]` on a line carrying `<!-- fp:… -->`, that fingerprint moves to `dismissed`. It is hidden from then on, and only the count appears in the run details.
- **Resolved.** When the current site index holds at least the stored reading, the candidate is dropped and listed once as "cleared" in the next notify comment and in the run details. This is checked on **every** run, including when the adapter did not re-read the row, since cursor-based adapters only read new rows.
- **Not re-read today.** If the adapter read cleanly but the row fell outside today's window, the candidate stays open. If the adapter did not read cleanly, the candidate stays open with the note "register not read today".

### 6.3 Ticks and races

- Ticks are read from `--prev-body`. Manual-check ticks are keyed `<!-- manual:<id>:<ISO week> -->` and reset when the ISO week changes.
- The workflow **re-fetches the body just before editing** (`latest-body.md`) and re-renders offline with `--render-only`. A tick made during the run is therefore not lost.

### 6.4 When to notify (comment), and when not

**Notify when:**

- a new or changed candidate appears;
- a watchlist reading changes or lands;
- an automated register reaches **3 consecutive** runs not read cleanly, or recovers after 3 or more;
- a register's first `format` or `mismatch` status appears;
- the first run after a state reset happens, with one comment explaining the reset.

**Do not notify for:**

- unchanged open candidates;
- a change in the site holding while the candidate is still open;
- resolved candidates alone (they are listed in the next notify comment);
- a manual checklist that is due.

The Monday body refresh carries the manual checklist, and a Monday run creates the issue if none is open.

---

## 7. Failure handling

| Situation | Register status in the report | Effect |
|---|---|---|
| Network error or timeout, after retries | `⏭️ not read — network` | Named in the headline's "not read" list; its open candidates stay open; streak +1 |
| HTTP 4xx/5xx (not a challenge) | `⏭️ not read — HTTP 5xx` | same |
| Bot challenge | `⏭️ not read — bot challenge` | same; **never retried or worked around**; human check printed |
| 200 without the success marker, fewer rows than `minRows`, or more than 5% of rows unparsed | `⚠️ format changed` | same, plus a notify on first occurrence; matched rows that are unparsed are still listed individually as UNREADABLE TIER |
| Page served ≠ page requested (BVMI repeat, week id, build id) | `⚠️ served a different page` | same |
| Positive control missing on a deep run | `⚠️ format changed (control row missing)` | same |
| robots.txt disallows | `⏸️ held — robots.txt` | not counted in "automated"; human check printed |
| Adapter threw (a bug) | `⚠️ adapter error: <message>` | same as not read; stack trace in the run details |
| Run budget exhausted | `⏭️ not reached (run budget)` | same |
| All automated registers not read cleanly | headline "No register was read today — this run says nothing" | `::error::` annotation, a notify comment; exit 0 |
| `config.json` invalid, unknown `--only` id, site data won't load, Node too old | — | `REFUSING TO CONTINUE: …`, **exit 1**. The job goes red and GitHub's failed-workflow email fires |
| A bug in match, report or state (not inside an adapter) | — | exit 1, and no issue write |
| State block corrupt | "State could not be read — every open candidate is listed as new" | reset plus one notify |
| `gh` fails | — | the step goes red (`set -euo pipefail`) |

**Invariant, enforced by tests:** an adapter whose status is not `ok` contributes **zero** to "registers read cleanly". Its name appears in the headline's not-read list. The "no new certification leads" sentence cannot render without that list.

---

## 8. Workflow: `.github/workflows/cert-watch.yml`

Modelled on `stats-monitor.yml`: the same permissions, `gh` with `GITHUB_TOKEN`, and no other secrets.

```yaml
name: Cert watch

# Reads the certification registers a machine may read, compares them with the
# site's own plaque data, and keeps ONE issue current with anything the site
# lacks. It never edits site data: every plaque is added by hand after a human
# confirms it at the certifying body. Spec: docs/cert-watcher/SPEC.md

on:
  schedule:
    - cron: "17 6 * * *" # daily 06:17 UTC; Mondays (UTC) also run the deep reads
  workflow_dispatch:
    inputs:
      dry_run:
        description: "Print the report only; do not touch the issue"
        type: boolean
        default: false
      deep:
        description: "Also run the weekly deep reads"
        type: boolean
        default: false
      only:
        description: "Comma-separated adapter ids (blank = all)"
        type: string
        default: ""
  pull_request:
    paths:
      - "scripts/cert-watch/**"
      - "scripts/live-artists.mjs"
      - "tests/fixtures/cert-watch/**"
      - "app/data/certifications.ts"
      - "app/data/afrobeats.ts"
      - "app/data/charts.ts"
      - "app/lib/awardName.ts"
      - ".github/workflows/cert-watch.yml"

permissions:
  contents: read
  issues: write

concurrency:
  group: cert-watch-${{ github.event_name == 'pull_request' && github.ref || 'live' }}
  cancel-in-progress: false

jobs:
  watch:
    runs-on: ubuntu-latest
    timeout-minutes: 15
    env:
      ISSUE_TITLE: "🏅 New certifications found — verify & add"
    steps:
      - uses: actions/checkout@v4
        with:
          persist-credentials: false

      - uses: actions/setup-node@v4
        with:
          node-version: 24 # built-in TypeScript loading; no npm ci, no tsx

      - name: Load the site's plaque data
        run: node --no-warnings scripts/cert-watch/index.mjs --self-test

      - name: Offline run against the saved register responses
        if: github.event_name == 'pull_request'
        run: node --no-warnings scripts/cert-watch/index.mjs --offline --dry-run --out cert-watch-out

      - name: Restore the HTTP cache and state backup
        if: github.event_name != 'pull_request'
        uses: actions/cache/restore@v4
        with:
          path: .cert-watch-cache
          key: cert-watch-${{ github.run_id }}
          restore-keys: cert-watch-

      - name: Find the tracking issue
        id: find
        if: github.event_name != 'pull_request'
        env:
          GH_TOKEN: ${{ secrets.GITHUB_TOKEN }}
        run: |
          set -euo pipefail
          pick='[.[] | select(.title == env.ISSUE_TITLE) | .number] | sort'
          open=$(gh issue list --state open --limit 1000 --json number,title --jq "$pick | .[0] // empty")
          echo "number=$open" >> "$GITHUB_OUTPUT"
          src="$open"
          if [ -z "$src" ]; then
            src=$(gh issue list --state closed --limit 1000 --json number,title --jq "$pick | .[-1] // empty")
          fi
          if [ -n "$src" ]; then gh issue view "$src" --json body --jq .body > prev-body.md; else : > prev-body.md; fi

      - name: Read the registers
        id: watch
        if: github.event_name != 'pull_request'
        env:
          DRY_RUN: ${{ inputs.dry_run }}
          DEEP: ${{ inputs.deep }}
          ONLY: ${{ inputs.only }}
        run: |
          set -euo pipefail
          args=(--prev-body prev-body.md --out cert-watch-out --cache .cert-watch-cache)
          if [ "$(date -u +%u)" = "1" ] || [ "${DEEP:-false}" = "true" ]; then args+=(--deep); fi
          if [ "${DRY_RUN:-false}" = "true" ]; then args+=(--dry-run); fi
          if [ -n "${ONLY:-}" ]; then args+=("--only=$ONLY"); fi
          node --no-warnings scripts/cert-watch/index.mjs "${args[@]}"

      - name: Publish the run report
        if: always() && github.event_name != 'pull_request'
        run: |
          if [ -f cert-watch-out/report.md ]; then
            cat cert-watch-out/report.md >> "$GITHUB_STEP_SUMMARY"
          else
            echo "The watcher produced no report — it failed before writing one." >> "$GITHUB_STEP_SUMMARY"
          fi

      - name: Open or update the issue
        if: steps.watch.outcome == 'success' && steps.watch.outputs.write_issue == 'true'
        env:
          GH_TOKEN: ${{ secrets.GITHUB_TOKEN }}
          NUMBER: ${{ steps.find.outputs.number }}
          NOTIFY: ${{ steps.watch.outputs.notify }}
        run: |
          set -euo pipefail
          if [ -n "$NUMBER" ]; then
            gh issue view "$NUMBER" --json body --jq .body > latest-body.md
            node --no-warnings scripts/cert-watch/index.mjs --render-only \
              --results cert-watch-out/results.json --prev-body latest-body.md --out cert-watch-out
            gh issue edit "$NUMBER" --body-file cert-watch-out/issue-body.md
            if [ "$NOTIFY" = "true" ]; then
              gh issue comment "$NUMBER" --body-file cert-watch-out/comment.md
            fi
          else
            gh issue create --title "$ISSUE_TITLE" --body-file cert-watch-out/issue-body.md
          fi

      - name: Save the HTTP cache and state backup
        if: always() && github.event_name != 'pull_request'
        uses: actions/cache/save@v4
        with:
          path: .cert-watch-cache
          key: cert-watch-${{ github.run_id }}
```

Notes:

- Inputs reach the shell only through `env`, never `${{ }}` inside `run:`, and `--only` is validated against the registry.
- `write_issue` is false on `--dry-run`. With no open issue, `index.mjs` sets it only when notify is true or the run is Monday's.
- The 30-issue `gh issue list` default is fixed with `--limit 1000`.
- If there are two open issues with the title, the lowest number wins and the report says so.
- No `git` write command appears anywhere; a test checks this.

---

## 9. Test plan

Run with `npx vitest run --testTimeout=60000`. All files are `tests/certWatch*.test.ts`. Import `.mjs` the way `tests/statsMonitor.test.ts` does.

| File | What it proves |
|---|---|
| `certWatchSite.test.ts` | `buildSiteIndex` over the **real** `app/data`. Every plaque indexed once; the total equals `totalAwards()` plus Σ `certCount(board)` (derived). Dai Dai US is programme "RIAA Latin" and CO is "Sony Music Colombia". The `LIVE_ARTISTS` keys equal `afrobeatsSlugs` plus `burna-boy`. Lead aliases include (Dave, Location) from Burna's features and (Major Lazer, Boom) from config. The frozen `site-index.2026-09-24.json` has the same shape as a fresh build. |
| `certWatchMatch.test.ts` | §4.2–4.3 with real strings: `SHAKIRA & BURNA BOY`, `Shakira, Burna Boy`, `Dave feat. Tems`, `Tems, Dave` + `Raindance (feat. Tems)` all match; `DRAKE` + `ONE DANCE (FEAT. WIZKID & KYLA)` matches wizkid through the title; `BUJU BANTON` never matches bnxn; `Reason (Omah Lay)` ↔ Omah Lay only and `Reason`/Asake ↔ Asake only; the DK `Major Lazer Feat. Moti Ty Dolla $ign...` / `Boom` row matches wizkid through the alias, flagged ⚠ truncated; `Sungba` ≠ `Sungba (Remix)`; the tribute string is rejected; namesakes from the `live-artists.mjs` comments are rejected. |
| `certWatchLadders.test.ts` | Every tier form from a real row: `badge LA level 2`, `badge DI level 11`, `badge ST level 0`; `award_cert-double-platinum-single`, `award_cert-seven-times-platinum-single`; `Guld`, `Platin`, `2xPlatin`; `Platina - cert.nr 11317 - 2026-09-18`; ZPAV `date_1` / `date_3`; `Zlatý singl`, `Platinový singl`; `Diamant`; `Platinum_8`, `Gold_1`; `Plat x2`; `1x Gold`, `3x Gold`, `2x Platin`; `2-fach PLATIN`. An unseen string gives `null`. Rank order is right in `standard` and `riaa`. |
| `certWatch<Adapter>.test.ts` (one per adapter) | `parse.*` on its fixtures: row count, **positive control present verbatim**, dates and credits verbatim; the page-level checks (`format`, `mismatch`, `challenge`) using the real challenge and decoy bodies; the host is http for ifpi.dk; latin-1 decoding for sys2.ifpi.se; the BPI adapter returns `held-robots` given the real BPI robots.txt, **with zero requests** (a spy on `http`). |
| `certWatchDiff.test.ts` | Replays against the frozen site index: MC Dai Dai row vs the site without CA gives NEW PLAQUE, and vs the real site, in sync. Tyla Water SE record vs the site at Gold gives UPGRADE, and vs the real site, in sync. The Latin Dai Dai row never compares with a standard-programme holding. One Dance and Wait For U `DI level 11` are suppressed (knownDivergences), while the same row with the level edited to 12 surfaces (the edit is labelled in the test). BPI `ASAKE SUNGBA` yields no Burna candidate. TCSN `Asake | Bad Influence` is held. A site-ahead row yields nothing. |
| `certWatchState.test.ts` | State round-trips through the issue body; a verbatim row containing `-->` cannot break the block. A tick means dismissed; the same fingerprint next run means no notify; a changed reading means a new fingerprint and a notify; the site catching up means resolved; a corrupt block means a reset notice; oversize state means refusing to truncate; manual ticks reset on a new ISO week. |
| `certWatchReport.test.ts` | A golden render of an offline run (fixtures plus the frozen site index) against `tests/fixtures/cert-watch/expected-issue-body.md`. The health table has exactly one row per registry entry (derived from the registry). Every MANUAL entry has a human check. Watchlist site holdings change when the site index changes (derived, not typed). The not-read invariant (§7). Untrusted strings are escaped (`@mention`, HTML, backticks). The body stays under 60,000 characters with 100 synthetic candidates. |
| `certWatchRobots.test.ts` | The parser on the real saved robots files: BPI disallows us; Dropbox disallows `/sh/`; audiogest disallows `/uploads/…pdf`; musiccanada has Crawl-delay 30 and swisscharts 10; SNEP and MAHASZ allow our User-Agent but not `ClaudeBot`; RiSA's AI groups do not match our User-Agent. |
| `certWatchPipeline.test.ts` | Spawns `node scripts/cert-watch/index.mjs`, using `--site-json` so it runs on Node 20 too. A trailing comma in the config gives exit 1 and `REFUSING TO CONTINUE`; an unknown `--only` gives exit 1; a full offline dry run gives exit 0 and writes `issue-body.md`, `report.md` and `results.json`, with `write_issue=false` in a temp `GITHUB_OUTPUT`; an adapter whose fixture fetch rejects gives exit 0 with that register under "not read". |
| `certWatchLoader.test.ts` | Runs only when `process.versions.node` ≥ 22.18, and says so in the test name. `--self-test` counts equal the counts computed from the modules. The workflow's self-test step is the gate that always runs. |
| `certWatchConfig.test.ts` | Every watchlist, divergence, held-row, alias and typo entry names an existing artist and release, and carries `why` and `on` (`ruledBy` for rulings). Every adapter host has politeness settings. **No personal data:** the User-Agent and every file under `scripts/cert-watch/` and `tests/fixtures/cert-watch/` fail `/[\w.+-]+@[\w-]+\.[\w.]+/` (an email pattern). The fixture scan skips the known third-party addresses in real pages, such as Grammotex's `cd@grammotex.se`, **by exact string**, and the test lists them. |
| `certWatchWorkflow.test.ts` | The text of `cert-watch.yml`: `permissions` is exactly `contents: read` / `issues: write`; `node-version: 24`; `--limit` appears on every `gh issue list`; a concurrency group and `timeout-minutes` are set; there are no `git commit` / `git push`; there is no `${{ inputs.` inside a `run:` block. |

### 9.1 Fixtures: copy map (real responses only)

The rules:

- Keep bytes as served.
- Gzip anything over 300 KB as `.gz`; tests read it with `zlib`.
- Every file gets an entry in `tests/fixtures/cert-watch/PROVENANCE.json` (`{file, source, fetched, url, note}`), and a test fails on any fixture without one.
- If a needed shape isn't saved anywhere, capture it with `--save-raw` in a one-off local dry run. That is a real response, with a few polite requests, and it must be recorded as such.

| Step | Fixture (under `tests/fixtures/cert-watch/`) | Source |
|---|---|---|
| 1 | `robots/*.txt` (28 files) + `robots/risa.org.za.txt` | `$RETEST/robots/*.txt`, `$RETEST/risa-robots.txt` |
| 1 | `riaa/search-burna.html`, `riaa/load-more-end.json` | `$SWEEP/us-ca-mx/riaa/raw/burna.html`, `…/riaa/burna_p2.json` |
| 1 | `riaa/search-one-dance.html`, `riaa/search-wait-for-u.html`, `riaa/search-buju.html` | `…/riaa/raw/one_dance.html`, `wait_for_u.html`, `buju.html` |
| 1 | `riaa/latin-search-shakira.html`, `riaa/latin-search-burna-2026-09-24.html` | `…/riaa/raw_latin/shakira.html`, `$RETEST/body/US_RIAA_Latin_site` |
| 1 | `riaa/history-451299.json`, `riaa/history-451299-2026-09-24.json` | `…/riaa/timeline/451299.json`, `$RETEST/body/US_RIAA_timeline_site` |
| 1 | `riaa/newest-default.html`, `riaa/newest-latin.html` | **capture** with `--save-raw` (not saved anywhere) |
| 1 | `musiccanada/awards-p1-2026-09-23.json` | `$SWEEP/us-ca-mx/mc/dump/p1.json` (includes 89702 Dai Dai, 89706 seven-times) |
| 1 | `challenge/{be-ultratop,co-hcdn,ch-hitparade}.html`, `decoy/za-risa-browser.html`, `challenge/pl-olis-bare.txt` | `$RETEST/body/BE_Ultratop_site`, `CO_media_API_site`, `CH_hitparade_site`, `ZA_risa_org_za_browser`, `PL_olis_bare_site` |
| 1 | `site-index.2026-09-24.json` | `--dump-site-index` from the real `app/data` at build time |
| 2 | `bpi/newest-page1.html`, `bpi/detail-daidai.html`, `bpi/detail-sungba.html`, `bpi/q-burna.html` | `$SWEEP/uk-nl-be-fr/bpi/…` (saved before robots.txt was read; parse tests only) |
| 2 | `snep/page1-default.html`, `snep/q-burna.html`, `snep/page1-2026-09-24.html` | `$SWEEP/uk-nl-be-fr/snep/…`, `$RETEST/body/FR_SNEP_site` |
| 2 | `zpav/zlote-burna.json` + a Platinum row showing `date_3` | `$SWEEP/nordics-pl/pl/a_6_Burna.json`; grep `pl/l_7_*` / `ctl_*` for One Dance, else capture |
| 2 | `sverige/stl-search.html`, `sverige/record-15311162.html`, `sverige/record-12096186.html`, `sverige/record-6775561.html` | `$SWEEP/nordics-pl/se/stl.html`, `se/ifpi_sart_15311162.html`, `se/rec/gtx_12096186.html` and `gtx_6775561.html` (the byte-identical Grammotex copies; note the host in PROVENANCE) |
| 2 | `danmark/page0.html`, `danmark/boom-recheck.html` | `$SWEEP/nordics-pl/dk/p0.html`, `dk/recheck_boom_pa.html` |
| 2 | `nvpi/filter-skip0.json` + one board-artist item | `$SWEEP/uk-nl-be-fr/nvpi/filter-skip0.json`; the item verbatim from `nvpi/full-dump.json` |
| 2 | `cns/cz-w3036.html.gz`, `cns/sk-w3036.html.gz` | `$SWEEP/de-at-ch-cz-sk-hu/cz/raw/c30_w3036.html.gz`, `c43_w3036.html.gz` (Dai Dai `Zlatý singl` at 15, `Platinový singl` at 5) |
| 3 | `bvmi/q-daidai.html`, `bvmi/datenbank.html` | `$SWEEP/de-at-ch-cz-sk-hu/de/…` |
| 3 | `austria/pp100.html` | `$SWEEP/de-at-ch-cz-sk-hu/at/pp100.html` |
| 3 | `mahasz/kereso-tyla.html`, `mahasz/adatbazis-all.html.gz` | `$SWEEP/de-at-ch-cz-sk-hu/hu/…` |
| 3 | `greece/digital_ien.html` + headers | `$SWEEP/au-nz-za-gr-co/gr/digital_ien.html`, `hdr-ien.txt` |
| 3 | `norge/pg1.html` | `$SWEEP/nordics-pl/no/t.html` (check it is `?pg=1`) or `$RETEST/body/NO_ifpi_no_site` |
| 3 | `promusicae/q-shakira-burna.html`, `promusicae/index.html` | `$SWEEP/it-es-pt-br/es/…` |
| 3 | `swisscharts/edelmetall-2026.html` | `$SWEEP/de-at-ch-cz-sk-hu/ch/raw/edelmetall_2026.html` |
| 3 | `rmnz/singles-page.html`, `rmnz/singles-0.json.gz` | `$SWEEP/au-nz-za-gr-co/nz/…` |
| 3 | `promusica-co/cert.html`, `promusica-co/pdf-head.txt` | `$SWEEP/au-nz-za-gr-co/co/cert.html`, `co/hdr-pdf.txt` |
| 3 | `amprofon/cert.html.gz` | `$SWEEP/us-ca-mx/amprofon/cert.html` (4.56 MB) |
| 3 | `fimi/ajax-2026.json` | `$SWEEP/it-es-pt-br/it/t1.json` (contains Dai Dai) + a `raw_search/2026_*` page |
| 3 | `tcsn/nextdata.json`, `tcsn/live.html.gz` | `$SWEEP/ng/live-certification.json`, `ng/live-certification.html` |
| 3 | `promusica-br/q-burna.html` | `$SWEEP/it-es-pt-br/br/q_burna.html` |

### 9.2 Negative controls: the real strings, in one place

- `BUJU BANTON | TIL SHILOH` (RIAA `default_36107`)
- `Reason (Omah Lay)` / `Reason` + `Asake` (TCSN)
- `Major Lazer Feat. Moti Ty Dolla $ign...` / `Boom` (IFPI Danmark)
- `ASAKE | SUNGBA` "Most Recent Certification Silver" (BPI detail)
- `Be Honest (8-Bit Jorja Smith & Burna Boy Emulation)` (Deezer, via memory; no register carries a tribute act)
- `"Nessuna certificazione"`, which lives in `scripts/stats-lib.mjs:833` today (the generic-helper regression)
- the five challenge and decoy bodies from `$RETEST/body`

Each test first proves it **fires** on the real string, then that the fix **passes**. Then revert the fix in the working tree and watch the suite go red, before restoring.

---

## 10. Build steps (sequential; each ends green and in one local commit, not pushed)

Every step ends with the gate below. Nothing is committed unless all four exit 0.

```
npx tsc --noEmit;                    RC1=$?
npx eslint;                          RC2=$?
npx vitest run --testTimeout=60000;  RC3=$?
npx next build;                      RC4=$?
[ $RC1 -eq 0 ] && [ $RC2 -eq 0 ] && [ $RC3 -eq 0 ] && [ $RC4 -eq 0 ] || { echo "NOT COMMITTING"; exit 1; }
```

### Step 1 — core, matching, report, workflow, and the RIAA and Music Canada adapters

**Deliverables**

- **Core files:** `index.mjs`, `http.mjs`, `robots.mjs`, `load-site.mjs`, `site.mjs`, `match.mjs`, `state.mjs`, `report.mjs` and `config.json`.
- **`config.json` content:**
  - the two watchlist items;
  - the One Dance and Wait For U divergences;
  - the TCSN Bad Influence held row;
  - the Major Lazer / Boom lead alias;
  - the "Ayra Staar" typo;
  - the namesakes;
  - the manual checks;
  - host politeness;
  - `bpi.enabled=false` with its `why`.
- **Adapters:**
  - `adapters/index.mjs`, holding all 28 rows; rows not built yet show `🧱 not built yet (step N)` plus their human check;
  - `adapters/riaa.mjs` (both programmes);
  - `adapters/musiccanada.mjs`;
  - `adapters/manual.mjs`.
- **Workflow and wiring:** `.github/workflows/cert-watch.yml`, the `.gitignore` lines, and the `check:certs` script.
- **Tests:**
  - Site, Match, Ladders (the RIAA and MC forms), Riaa, MusicCanada, Diff (the MC replay plus the RIAA cases), State, Report, Robots, Pipeline, Loader, Config and Workflow;
  - fixtures for step 1 plus `PROVENANCE.json`;
  - the RIAA newest-list captures (2 requests with `--save-raw`).

**Acceptance**

- `--offline --dry-run`:
  - renders the Dai Dai RIAA Latin watchlist line with `2X PLATINO`, `badge LA level 2` and `default_451299`, and a site holding **derived** as Platinum ×2 (RIAA Latin);
  - renders the BPI watchlist line as `⏸️ held — robots.txt`;
  - suppresses One Dance;
  - produces no candidate for Dai Dai CA against the real site, and a NEW PLAQUE against the site without CA.
- **Live `--dry-run`** on Paul's Mac:
  - finishes in under 2 minutes and prints the report;
  - leaves the issue untouched.
  - Every live candidate is either a real lead or explained by a `titleAliases`/`leadAliases` entry with its `why`. List the ones found for Paul; don't decide them.
- **First Actions run:** a `workflow_dispatch` with `dry_run: true`, after merge by Paul, so the datacenter-IP behaviour is seen before any issue is written. Not done by the build agent, which does not push.

### Step 2 — BPI, SNEP, ZPAV, Ifpi Sverige, IFPI Danmark, NVPI, ČNS IFPI

**Deliverables**

- Adapters `bpi`, `snep`, `zpav`, `ifpi-sverige`, `ifpi-danmark`, `nvpi`, and `cns-ifpi` (CZ + SK), each with its test file and step-2 fixtures.
- Ladders extended with those forms.
- Diff replays: Tyla Water SE UPGRADE vs the site at Gold; Boom DK through the alias; SNEP overwrite (a superseded row yields nothing).
- `ifpi-sverige` cursors for badges.

**Acceptance**

- The BPI adapter makes **zero** requests, as the spy asserts, and the report shows it as held.
- Parse tests pass on every step-2 fixture, with positive controls: Dai Dai SNEP Diamant 27/08/2026, ZPAV `date_1` 2026-08-26, SE cert 11317, DK Raindance Platin 07.07.2026, CZ `Zlatý singl` at 15, SK `Platinový singl` at 5.
- A live dry run of just these adapters finishes within budget, and IFPI Danmark stays under 10 requests.

### Step 3 — the rest

Order: first the AUTOMATE bodies (`bvmi`, `ifpi-austria`, `mahasz`, `ifpi-greece`, `ifpi-norge`, `promusicae`), then the WITH-CARE ones (`swisscharts`, `rmnz`, `promusica-co`, `amprofon`, `fimi`, `tcsn`, `promusica-br`). This may be two commits, each gated.

**Deliverables**

- Adapters, tests and fixtures for the above.
- Conditional GET and the heavy-body cache (GR, CO, MX, TCSN).
- The TCSN build-id cursor and the Wayback CDX lead (deep).
- The TCSN caveat on NG lines.
- Swisscharts' Crawl-delay 10 in config.

**Acceptance**

- A full live `--dry-run --deep` finishes in **under 9 minutes**, with per-host gaps of at least 1.1 s (checked from `http.mjs`'s request log in the run details).
- All 23 automated rows report a status.
- The report matches §5.2's structure.
- `check-stats.mjs` and `watched-metrics.json` are **untouched**.

---

## 11. Decisions for Paul (none are needed for step 1)

1. **BPI.** robots.txt disallows every bot. This spec keeps UK as a weekly human check and the BPI adapter off. The alternative is to ask BPI for permission, which would take a written record (`config.adapters.bpi.permission = {from, on, scope}`). Dai Dai UK Gold stays a human check until then.
2. **RiSA.** The honest User-Agent gets the real page (Ninja Table **15622** plus a public nonce; the memory note says 15219, so it has changed). robots.txt allows `*` but declares `Content-Usage: ai=n` / `DisallowAITraining`, and blocks ClaudeBot and Claude-User. This watcher is a non-AI script, but the recommendation is for Paul to rule and to run the first JSON read himself. Until then ZA stays manual. A Wayback CDX probe can report "new capture available" without touching risa.org.za.
3. **FIMI's footer** forbids crawling for AI training. The watcher reads FIMI's own search endpoint for fact-checking, as the old `fimi-dai-dai` watch did. The default is enabled; one config switch turns it off.
4. **ARIA's Dropbox zip and AFP's `/uploads` PDFs** stay manual by robots.txt.
5. **Classification.** Brazil is placed in WITH-CARE here, and UK counts as MANUAL while held (13 AUTOMATE, 10 WITH-CARE, 5 MANUAL).
6. **Retire the old pieces.** Once cert-watch has run green for a week: the local scheduled task `riaa-dai-dai-6x-watch`, and the inert `certWatches` / `certWatchStatus` hook in the stats monitor (a separate cleanup PR).
7. **Monday recreation.** The issue is recreated each Monday if it has been closed, as the weekly to-do. Say if a closed issue should instead stay closed until something new appears; that is one config switch, `weeklyTodo`.

---

## Appendix A — `config.json` skeleton

```json
{
  "version": 1,
  "issueTitle": "🏅 New certifications found — verify & add",
  "userAgent": "burnaboystats-cert-watch/1.0 (+https://burnaboystats.com/contact)",
  "weeklyTodo": true,
  "budget": { "runSeconds": 540, "adapterSeconds": 90, "overrides": { "musiccanada": 150, "bvmi": 150 } },
  "hosts": {
    "*": { "minGapMs": 1100 },
    "musiccanada.com": { "minGapMs": 30000, "why": "robots.txt Crawl-delay: 30 (read 24 Sep 2026)" },
    "swisscharts.com": { "minGapMs": 10000, "why": "robots.txt Crawl-delay: 10 (read 24 Sep 2026)" }
  },
  "adapters": {
    "bpi": { "enabled": false, "why": "robots.txt User-agent: * / Disallow: / (read 24 Sep 2026); Paul to rule" }
  },
  "searchTerms": ["Wiz Kid", "Buju", "Burna"],
  "watchlist": [
    { "id": "dai-dai-riaa-latin", "artist": "burna-boy", "title": "Dai Dai", "country": "US", "programme": "RIAA Latin",
      "adapter": "riaa-latin", "rowId": "default_451299", "expect": "above 2X PLATINO",
      "lead": "RIAA's Instagram (@riaa_awards) showed a \"6X Latin Platinum\" badge on 23 Sep 2026; the database read 2X Platino (9 Jul 2026)",
      "on": "2026-09-23" },
    { "id": "dai-dai-bpi-gold", "artist": "burna-boy", "title": "Dai Dai", "country": "UK", "programme": null,
      "adapter": "bpi", "expect": "Gold",
      "lastHumanReading": { "raw": "Most Recent Certification Silver · Most Recent Certification Date 07 August 2026", "on": "2026-09-23", "source": "23 Sep sweep, BPI detail page" },
      "lead": "fan lead; the BPI's public list stopped at the 04.09.2026 batch", "on": "2026-09-23" }
  ],
  "knownDivergences": [
    { "adapter": "riaa", "artist": "wizkid", "title": "One Dance", "readingRaw": "badge DI level 11",
      "why": "site holds US Diamond as a floor by design (afrobeats.ts note, 10 Sep 2026); RIAA prints 11X", "ruledBy": "site modelling note", "on": "2026-09-10" },
    { "adapter": "riaa", "artist": "tems", "title": "Wait For U", "readingRaw": "badge DI level 11",
      "why": "same modelling note", "ruledBy": "site modelling note", "on": "2026-09-10" }
  ],
  "heldRows": [
    { "adapter": "tcsn", "credit": "Asake", "title": "Bad Influence",
      "why": "Omah Lay's song (Get Layd, track 4); TCSN's artiste field is wrong; plaque HELD, published for neither", "ruledBy": "Paul", "on": "2026-08" }
  ],
  "leadAliases": [
    { "artist": "wizkid", "lead": "Major Lazer", "title": "Boom",
      "why": "IFPI Danmark truncates the credit; Spotify and Ifpi Sverige sart 6775561 confirm Wizkid", "ruledBy": "Paul", "on": "2026-09-23" }
  ],
  "creditTypos": [
    { "register": "tcsn", "printed": "Ayra Staar", "artist": "ayra-starr", "why": "TCSN typo; Many Roads added on Paul's call", "on": "2026-09-23" }
  ],
  "namesakes": [
    { "artist": "olamide", "names": ["Olamide Badoo", "Tijani Olamide", "Yusuf Olamide Olotu"], "why": "live-artists.mjs note" },
    { "artist": "bnxn", "names": ["Buju Banton"], "why": "a different artist" },
    { "artist": "black-sherif", "names": ["I Shot The Sheriff", "SHERIFF"], "why": "live-artists.mjs note" }
  ],
  "titleAliases": [],
  "manualChecks": [
    { "id": "uk", "flag": "🇬🇧", "body": "BPI", "url": "https://certified-awards.bpi.co.uk/", "check": "set \"certified date from\" to last Monday; search the 16 names plus \"Buju\"; for Dai Dai read \"Most Recent Certification\"" }
  ]
}
```

(`manualChecks` continues with be, au, pt, za and the coverage notes exactly as rendered in §5.2.)
