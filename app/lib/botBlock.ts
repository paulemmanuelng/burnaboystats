import { CLOSED_CRAWLERS, COMPARE_VARIANTS } from "../robots";

/**
 * Who the request layer (proxy.ts) turns away, by user agent and path.
 *
 * 11 Nov 2026: the firewall showed 79.3k requests in a day, 63.4k of them to
 * /compare, from clients spread over so many IPs that the 60/min/IP rate
 * limit never fired. Most wear an ordinary Chrome user agent, which no code
 * can tell from a reader; those are the firewall's job
 * (docs/ops/bot-block-2026-11-11.md). What this catches is everything that
 * says what it is:
 *   1. the crawlers robots.ts closes the whole site to (CLOSED_CRAWLERS);
 *   2. scripts, scraping libraries and headless browsers (AUTOMATION);
 *   3. any self-declared crawler on a /compare query-string variant, the URLs
 *      robots.txt already disallows, except the link-preview fetchers, which
 *      fetch the exact URL someone shared.
 *
 * Never blocked: real browsers, search engines and the AI allowlist on every
 * other page, link previews, our own scripts, and the paths in EXEMPT_PATH
 * (the open API, robots.txt, the sitemap, share cards, icons, /_next and
 * files), which the proxy matcher also leaves out.
 */
export type BotVerdict = "block" | "noindex" | "pass";

const esc = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
/** Whole tokens: not inside a longer word ("Bytespider" but not "xBytespiderx"). */
const tokens = (list: readonly string[]) => new RegExp(`(?<![a-z0-9])(?:${list.join("|")})(?![a-z0-9])`, "i");

const CLOSED = tokens(CLOSED_CRAWLERS.map(esc));

/** Automation, scraping and headless clients. "java" counts only as "Java/<version>". */
export const AUTOMATION_TOKENS = [
  "HeadlessChrome", "Lightpanda", "Reflectionbot", "PhantomJS",
  "python-requests", "aiohttp", "httpx", "Python-urllib", "Go-http-client", "Scrapy",
  "curl", "Wget", "axios", "node-fetch", "undici", "okhttp", "Java/", "Apache-HttpClient", "libwww-perl",
  "SERankingBacklinksBot",
] as const;
const AUTOMATION = new RegExp(
  `(?<![a-z0-9])(?:${AUTOMATION_TOKENS.filter((t) => t !== "Java/").map(esc).join("|")})(?![a-z0-9])|(?<![a-z0-9])java/`,
  "i",
);

/** The fetchers behind a shared link's card (the firewall's "Allow link previews" plus X). */
export const PREVIEW_TOKENS = [
  "WhatsApp", "facebookexternalhit", "Facebot", "Twitterbot", "TelegramBot",
  "Discordbot", "LinkedInBot", "Slackbot", "Pinterestbot",
] as const;
const PREVIEW = tokens(PREVIEW_TOKENS.map(esc));

/**
 * A self-declared crawler. "bot" counts only at the end of a name
 * ("Googlebot/2.1", "GPTBot;"), so a phone model such as "CUBOT X19" is not
 * one; "+http" is the contact URL crawlers put in their agent string.
 */
const CRAWLER = /bot(?=[/;)+]|$)|spider|crawl|slurp|\+https?:\/\//i;

/** Our own scripts name the site in their agent string (scripts/*.mjs). */
const OWN = /burnaboystats/i;

/** Mirrors the proxy matcher's exclusions, so the rule holds however it is called. */
export const EXEMPT_PATH = /^\/(?:api(?:\/|$)|_next\/|.*(?:opengraph|twitter)-image|(?:apple-)?icon(?:$|[-/])|.*\.[^/]*$)/;

const COMPARE_PATH = COMPARE_VARIANTS.slice(0, -1); // "/compare"

/**
 * "block" → 403. "noindex" → allowed, with X-Robots-Tag: noindex (a /compare
 * query-string variant). "pass" → untouched. `search` is the URL's "?…" part,
 * or "" when it has none.
 */
export function botVerdict(userAgent: string | null | undefined, pathname: string, search: string): BotVerdict {
  if (EXEMPT_PATH.test(pathname)) return "pass";
  const ua = userAgent ?? "";
  const variant = pathname === COMPARE_PATH && search.length > 1;
  if (OWN.test(ua)) return variant ? "noindex" : "pass";
  if (CLOSED.test(ua)) return "block";
  // Ahead of AUTOMATION: LinkedIn's real agent names its HTTP library
  // ("LinkedInBot/1.0 (compatible; Mozilla/5.0; Apache-HttpClient +http://www.linkedin.com)").
  if (PREVIEW.test(ua)) return variant ? "noindex" : "pass";
  if (AUTOMATION.test(ua)) return "block";
  if (variant) return CRAWLER.test(ua) ? "block" : "noindex";
  return "pass";
}
