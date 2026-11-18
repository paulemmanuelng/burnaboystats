# SEO and AI-crawler review (for Paul, 18 Nov 2026)

Paul asked on 18 Nov 2026 for the SEO issues to be fixed and for the SEO and
AI set-up to be checked against the current standard. Search Console, the live
sitemap and llms.txt were read in the browser that day. Bing's figures come
from its October report. Anthropic's and Google's crawler pages, Anthropic's
article on its hosted browsers, and Vercel's Firewall and Logs docs were read
on the web. Everything else here was checked in the code, not on the live
site, which sits behind Vercel Bot Protection.

## What the 18 Nov reads showed

**Page indexing:** 407 indexed, 1,738 not indexed.

| Group | Pages | What is in it | Verdict |
|---|---:|---|---|
| Not found (404) | 574 | Old share-card (opengraph-image, twitter-image) and `/_next` asset URLs, plus four page URLs: `/chart-peaks.csv`, `/awards.csv`, `/music/albums`, `/stats` | Assets: correct as they are. The four pages: **fixed here** |
| Blocked by robots.txt | 653 | `/compare?` query-string variants | Intended |
| Indexed, though blocked by robots.txt | 22 | `/compare?` variants | Accepted side effect |
| Excluded by noindex | 114 | 109 `/on-this-day/<day>` pages, 4 `/embed/*` widgets, `/search` | Intended |
| Crawled, currently not indexed | 369 | Mostly images, API files and favicons, plus 55 `/on-this-day` days | Expected; the days are Google's call |
| Alternate page with proper canonical tag | 16 | Not itemised | Intended |
| Page with redirect | 6 | Not itemised | Intended |

The not-indexed groups above add up to 1,732 of the 1,738. Search Console
files "Indexed, though blocked by robots.txt" under the indexed pages, and the
other 6 were in groups not itemised in the 18 Nov read.

**Enhancements:** all valid, 0 invalid. Breadcrumbs 292, Datasets 178,
Events 2, Profile page 1.

**HTTPS:** 290 pages, 0 non-HTTPS.

**Core Web Vitals:** no data. That means Chrome's field data (CrUX) does not
have enough visits per page group yet, not that a page failed.

**Sitemap:** 395 URLs live. It leaves out the noindexed pages and the
`/compare?` variants, as it should. **llms.txt** is well formed.

**Bing (October report):** 2.5K impressions (−58.1%), 14 clicks. See "Left for
Paul".

## Why each excluded group is intended

- **Blocked by robots.txt (653): `/compare?` variants.** `/compare` keeps every
  choice in its query string, and every control links to another combination,
  so a crawler that follows links never runs out of new URLs. After the bot
  flood of 9 and 10 Oct, robots.txt closed them (`COMPARE_VARIANTS` in
  `app/robots.ts`). Each variant canonicals to its clean page, and the clean
  pages (`/compare`, every pair page and country board) stay open and are in
  the sitemap.
- **Indexed, though blocked by robots.txt (22).** Google holds these variants
  in its index but can no longer fetch them to read their canonical or their
  noindex header. They fade out on their own. Unblocking them to clear the
  report would reopen the crawl the rule exists to stop.
- **Excluded by noindex (114).** On-this-day days with fewer than two events
  fail `isIndexableDay` (`app/lib/onThisDay.ts`) and are thin on purpose, so
  they stay out of the index. The four embed widgets send
  `noindex, indexifembedded`: they are meant to be read inside the page that
  embeds them. `/search` is `index: false, follow: true`, because a search
  results page is not a page to land on from Google.
- **Crawled, currently not indexed (369).** Images and favicons are fetched
  along with the pages that use them. The API files are reached through the
  site's own links to them (the Download CSV and JSON links on its data pages,
  the press page and the `/api` page) and the `/api` page's Dataset JSON-LD.
  None of them is a page, so Google files them here. No page fetches an API
  file as it loads; the live-charts snapshot waits until a reader opens a
  panel. The share cards are kept indexable on purpose (an Article's image and
  Discover's large preview need it; `next.config.mjs` explains why). The 55
  days are indexable pages that Google crawled and has not taken yet. Nothing
  in the code holds them back.
- **404 assets.** Share cards and `/_next` files from earlier deploys, replaced
  by later ones. A 404 is the right answer for a file that no longer exists,
  and Google drops them in time.
- **Alternate canonical (16) and page with redirect (6).** A page whose
  canonical names another URL, and a URL that answers with a redirect, are both
  working as built. The site redirects some URLs on purpose (`/tour`, three
  retired pages, the reverse-order `/compare` pairs, the vercel.app alias).

## What this change fixes

### 1. Permanent redirects (308) for the four stray URLs, and every CSV

| From | To |
|---|---|
| `/chart-peaks.csv` | `/api/v1/chart-peaks.csv` |
| `/awards.csv` | `/api/v1/awards.csv` |
| `/certifications.csv` | `/api/v1/certifications.csv` |
| `/tours.csv` | `/api/v1/tours.csv` |
| `/stats` | `/records/by-the-numbers` |
| `/music/albums` | `/music` |

- They sit in `redirects()` in `next.config.mjs`, beside the site's other
  retired-page redirects. That is the only place that can answer the CSV
  paths: the proxy's matcher skips any path with a file extension, and
  `redirects()` runs before the proxy in any case.
- **Every download gets one, read from the data.** `next.config.mjs` cannot
  import TypeScript, so the list is generated from `DATA_DOWNLOADS` in
  `app/lib/dataDownloads.ts` by `scripts/build-download-redirects.mjs` into
  `app/data/downloadRedirects.json`, the same pattern as the `/compare` pair
  redirects. A test fails if the file falls behind the data. Only two CSVs
  were reported. The other two are covered the same way.
- **`/stats`** goes to By the Numbers, the site's stats overview.
- **`/music/albums`** goes to `/music`, which lists the albums. Its albums
  section has no anchor on either layout. The desktop and phone layouts are
  separate trees in one page, so one id could mark only one of them. The
  redirect therefore goes to the page itself.
- **Where Google found them.** `/music/albums` came from the generated
  breadcrumb trail the album pages used to carry, which advertised it (noted
  in `app/lib/seo.ts`; the pages write their own trail now). The other three
  have no source in today's code. The API page names its endpoints and files
  by their path under `/api/v1` (`/stats`, `/awards.csv`), so a link that
  dropped that prefix, on the site once or anywhere else, would produce
  exactly these. That is a likely explanation, not a confirmed one.
- **Tests:** `tests/strayUrlRedirects.test.ts` runs Next's own matching of
  `next.config.mjs`. It covers each of the four (a 308 to a real route), every
  download, and the generated file being current. Its negative controls check
  that real pages and files are served as they are, that near-misses
  (`/streams.csv`, `/stats/2026`, `/statistics` and others) are left alone,
  and that Next's default config answers all four with no redirect.

### 2. robots.txt names Anthropic's current agents

Anthropic's own bots-and-crawlers page (read 18 Nov 2026) names three agents:
**ClaudeBot** (training), **Claude-User** (fetching a page a person asked
Claude about) and **Claude-SearchBot** (Claude's search index). It no longer
lists **Claude-Web**, so that entry is replaced by the two new names.
ClaudeBot stays.

- Every other entry stays, in the same order. Every group keeps the same
  rule: allow `/`, disallow `/compare?`. The closed Chinese crawlers are
  untouched.
- **What actually changes for access:** nothing yet. The `*` group already let
  both new agents in. Naming them keeps them in if `*` is ever tightened, which
  is why the list exists.
- One comment was corrected: `Google-Extended` governs Gemini training and
  grounding only. Google says the token has no effect on Search, so AI
  Overviews and AI Mode follow Googlebot's rules.
- `tests/robotsCompareParams.test.ts` pins the list. It checks that each of
  the three has its own open group and that Claude-Web is gone. Its negative
  control is the list main served before this change, copied word for word.

### 3. The request-layer bot block lets every allowed agent through

Checked in `app/lib/botBlock.ts`, the rules `proxy.ts` applies:

- **Normal pages (anything but a `/compare?` variant):** the `CRAWLER` rule is
  never consulted there. Only the closed crawlers (`CLOSED_CRAWLERS`) and the
  `AUTOMATION` tokens can block a request. None of the 15 names on the AI
  allowlist contains a token from either list, so none is blocked by its name.
  Googlebot, Bingbot, GPTBot, PerplexityBot and ClaudeBot pass in their real
  strings. Every name on the list passes in the shapes crawlers send.
- **`/compare?` variants:** protection unchanged. A self-declared crawler
  (a name ending in "bot", or a "+http" contact URL) gets a 403, Claude-SearchBot
  included. Claude-User, in the shape tested, reads like a person's fetch, the
  same as a link preview: it gets the page with `X-Robots-Tag: noindex`.
  robots.txt still disallows the variants for it, and Anthropic says its
  agents honour robots.txt. Nothing was loosened.
- **The one limit of a code check:** the proxy reads the whole user-agent
  string, and Anthropic's bots-and-crawlers page publishes the tokens, not the
  full strings. If the real string of an allowed agent also named an HTTP
  library or a headless browser (python-requests, node-fetch, HeadlessChrome
  and the like), the proxy would turn it away on every page. The Firewall
  would list those requests as allowed, because the 403 comes from the proxy
  after the firewall. They show in the project's Logs, filtered to status 403,
  where each request's details give its user agent (Logs keep an hour on
  Hobby, a day on Pro, 30 days with Observability Plus). The tests cover this
  case with a negative control.
- Anthropic's page also mentions **Claude-Agent**, the hosted browser Claude
  uses for tasks on a person's behalf. It is not a crawler and not on the list.
  Anthropic's article on its hosted browsers prints their user agent: Chrome's
  own, plus the token `Claude-Agent/1.0`. It does not say HeadlessChrome. The
  proxy passes it on every normal page and serves a `/compare?` variant with
  noindex, so nothing needs deciding unless that string changes.
  `tests/botBlock.test.ts` pins the string as the article prints it.
- `tests/botBlock.test.ts` now reads the allowlist from `app/robots.ts`, so a
  name added there is tested automatically.

## Left for Paul

1. **Bing's October drop** (2.5K impressions, −58.1%, 14 clicks). First check
   whether Bing's crawlers get through Vercel Bot Protection. In the Vercel
   dashboard, open the project's Firewall and its Traffic page. It keeps the
   last 24 hours on every plan, or up to 30 days with Observability Plus.
   Group that traffic by user agent, find `bingbot`, and see whether its
   requests were allowed, challenged or denied. A crawler cannot pass a
   challenge. If Bingbot was challenged or denied, it needs an allow rule
   before anything else will help. October itself is past that window, so
   Bing Webmaster Tools' own crawl reports are the record for it. The code's
   own block lets Bingbot through on every page robots.txt opens to it (the
   `/compare?` variants, which robots.txt closes to it, answer 403); it is
   tested with its real user agent.
2. **The FaveIQ noindex email.** It belongs to the FaveIQ repo. Nothing in this
   repo changes for it.
3. **Optional: IndexNow for Bing.** IndexNow lets the site tell Bing (and the
   other engines that use it) the moment a URL changes, instead of waiting for
   a recrawl. It needs a key file at the site root and a ping with the changed
   URLs after each deploy. Google does not use it. It is worth adding only if
   the Bing check shows the problem is slow crawling, not blocking.

**After the deploy:** in Search Console, run URL Inspection on the four URLs.
Each should show "Page with redirect" once Google recrawls it. Don't use
"Validate fix" on the 404 group. Its old asset URLs will rightly keep
answering 404, so the validation would fail anyway.
