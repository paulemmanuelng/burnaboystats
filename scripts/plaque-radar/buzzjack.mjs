// BuzzJack's "<year> BPI Certifications" threads: read the saved pages, and
// (online only) fetch the pages that are newer than the newest one saved.
//
// Every page carries a schema.org DiscussionForumPosting block (JSON-LD) with
// each post's plain text, date and id, so the radar reads that rather than
// scraping the forum's markup. Robots.txt allows topic pages; the forum's
// search is never used, and requests are spaced by net.mjs.

import { readdirSync, readFileSync, statSync, mkdirSync, writeFileSync, existsSync } from "node:fs";
import { join } from "node:path";

/** Topic ids of the yearly threads. A new year needs its id added here. */
export const THREADS = {
  2022: "251745",
  2023: "260013",
  2024: "268478",
  2025: "277147",
  2026: "284624",
};

export const threadUrl = (year, page) =>
  `https://www.buzzjack.com/forums/topic/${THREADS[year]}-${year}-bpi-certifications/${page > 1 ? `page/${page}/` : ""}`;

/** Decode the HTML entities a forum post uses. */
export function decodeEntities(s) {
  return String(s ?? "")
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)))
    .replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCodePoint(parseInt(n, 16)))
    .replace(/&nbsp;/g, " ")
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&");
}

/** The element that opens at `start`, up to its balanced closing </div>. */
function balancedDiv(html, start) {
  const re = /<\/?div\b[^>]*>/gi;
  re.lastIndex = start;
  let depth = 0;
  for (let m = re.exec(html); m; m = re.exec(html)) {
    depth += m[0][1] === "/" ? -1 : 1;
    if (depth === 0) return html.slice(start, m.index + m[0].length);
  }
  return html.slice(start);
}

/** A post body as plain text, one paragraph per line. Quoted posts are dropped:
 *  the original is on its own page, and a quote is often cut short. */
export function postHtmlToText(html) {
  let h = String(html).replace(/<(script|style)\b[\s\S]*?<\/\1>/gi, "");
  for (let prev = ""; prev !== h; ) {
    prev = h;
    h = h.replace(/<blockquote\b[^>]*>(?:(?!<blockquote\b)[\s\S])*?<\/blockquote>/gi, "");
  }
  h = h
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<\/(p|div|li|tr|h[1-6])>/gi, "\n")
    .replace(/<\/(td|th)>/gi, "\t")
    .replace(/<[^>]+>/g, "");
  return decodeEntities(h)
    .split("\n")
    .map((l) => l.replace(/\u00a0/g, " ").replace(/^[ \r]+|[ \r]+$/g, ""))
    .filter((l, i, a) => l || (i > 0 && a[i - 1]))
    .join("\n");
}

/**
 * Posts on one saved page. The page number and the thread's page count come
 * from its schema.org DiscussionForumPosting block (JSON-LD); the post TEXT
 * comes from the markup, because the JSON-LD copy of a post sometimes has its
 * line breaks flattened to spaces, and a list without its line breaks cannot be
 * split back into rows. Returns { page, pageEnd, posts }, or null when the page
 * carries no post data (a challenge page, an error page, a truncated save).
 */
export function postsFromHtml(html, year) {
  html = String(html);
  let ld = null;
  for (const m of html.matchAll(/<script type=["']application\/ld\+json["']>([\s\S]*?)<\/script>/g)) {
    try {
      const j = JSON.parse(m[1]);
      if (j?.["@type"] === "DiscussionForumPosting") {
        ld = j;
        break;
      }
    } catch {
      /* not JSON — skip */
    }
  }
  if (!ld) return null;
  const comments = Array.isArray(ld.comment) ? ld.comment : [];
  const page = Number(String(comments[0]?.["@id"] ?? "").match(/\/page\/(\d+)\//)?.[1] ?? 1);
  const wraps = [...html.matchAll(/<div id="comment-(\d+)_wrap"/g)];
  const posts = [];
  wraps.forEach((w, i) => {
    const end = i + 1 < wraps.length ? wraps[i + 1].index : html.length;
    const chunk = html.slice(w.index, end);
    const at = chunk.indexOf('data-role="commentContent"');
    if (at < 0) return;
    const open = chunk.lastIndexOf("<div", at);
    const date = chunk.match(/<time datetime=['"]([^'"]+)['"]/)?.[1] ?? "";
    posts.push({ id: w[1], date, text: postHtmlToText(balancedDiv(chunk, open)), page, year: Number(year) });
  });
  return { page, pageEnd: Number(ld.pageEnd ?? page), posts };
}

/** Every saved page under <dir>/<year>/*.html, whatever it was named. Posts
 *  are de-duplicated by id; where a page was saved twice, the later save wins
 *  (a post can be edited, and lists are often edited to add rows). */
export function loadSavedPages(dir) {
  const byId = new Map();
  const pages = {};
  if (!existsSync(dir)) return { posts: [], pages };
  for (const year of Object.keys(THREADS)) {
    const ydir = join(dir, year);
    if (!existsSync(ydir)) continue;
    const files = readdirSync(ydir)
      .filter((f) => f.endsWith(".html"))
      .map((f) => ({ f, t: statSync(join(ydir, f)).mtimeMs }))
      .sort((a, b) => a.t - b.t);
    for (const { f } of files) {
      const got = postsFromHtml(readFileSync(join(ydir, f), "utf8"), year);
      if (!got) continue;
      const seen = (pages[year] ??= { max: 0, pageEnd: 0, files: 0, postsOnMax: 0 });
      seen.files++;
      if (got.page > seen.max) {
        seen.max = got.page;
        seen.postsOnMax = got.posts.length;
      } else if (got.page === seen.max) {
        seen.postsOnMax = Math.max(seen.postsOnMax, got.posts.length);
      }
      seen.pageEnd = Math.max(seen.pageEnd, got.pageEnd);
      for (const p of got.posts) byId.set(p.id, p);
    }
  }
  const posts = [...byId.values()].sort((a, b) => a.date.localeCompare(b.date));
  return { posts, pages };
}

/**
 * Fetch the pages of the CURRENT year's thread that are newer than the newest
 * one saved — starting by re-reading that newest page, since a thread's last
 * page fills up over the week. Each fetched page is saved beside the others
 * as radar-p<n>.html, so the next run starts from it.
 *
 * `get(url)` is net.mjs's polite fetch. Returns a log of what was read.
 */
export async function fetchNewerPages({ dir, year, get, maxPages = 12 }) {
  const log = [];
  if (!THREADS[year]) {
    log.push(`no BuzzJack thread id for ${year} — add it to THREADS in scripts/plaque-radar/buzzjack.mjs`);
    return log;
  }
  const { pages } = loadSavedPages(dir);
  let page = Math.max(1, pages[year]?.max ?? 1);
  const ydir = join(dir, String(year));
  mkdirSync(ydir, { recursive: true });
  for (let i = 0; i < maxPages; i++) {
    const url = threadUrl(year, page);
    const res = await get(url);
    if (!res.ok) {
      log.push(`page ${page}: ${res.error ?? `HTTP ${res.status}`} — kept the saved pages`);
      break;
    }
    const got = postsFromHtml(res.body, year);
    if (!got) {
      log.push(`page ${page}: no post data in the response — stopped`);
      break;
    }
    if (got.page !== page) {
      log.push(`page ${page}: the forum served page ${got.page} instead — no newer pages`);
      break;
    }
    writeFileSync(join(ydir, `radar-p${page}.html`), res.body);
    log.push(`page ${page}: ${got.posts.length} posts (thread has ${got.pageEnd} pages)`);
    if (page >= got.pageEnd) break;
    page++;
  }
  return log;
}
