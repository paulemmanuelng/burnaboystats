// @vitest-environment node
import { describe, it, expect } from "vitest";
import { AsyncLocalStorage } from "node:async_hooks";
import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import nextConfig from "../next.config.mjs";
import { config } from "../proxy";
import { botVerdict, EXEMPT_PATH } from "../app/lib/botBlock";
import { CLOSED_CRAWLERS } from "../app/robots";
import { href } from "../app/lib/compareUrl";

// The docs name it unstable_doesProxyMatch; this build still exports the middleware name.
(globalThis as { AsyncLocalStorage?: unknown }).AsyncLocalStorage ??= AsyncLocalStorage;
const { unstable_doesMiddlewareMatch } = await import("next/experimental/testing/server");

// Real agent strings, as each client sends them.
const UA = {
  googlebot: "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)",
  googlebotPhone:
    "Mozilla/5.0 (Linux; Android 6.0.1; Nexus 5X Build/MMB29P) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.6778.204 Mobile Safari/537.36 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)",
  bingbot:
    "Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; bingbot/2.0; +http://www.bing.com/bingbot.htm) Chrome/116.0.1938.76 Safari/537.36",
  gptbot: "Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko); compatible; GPTBot/1.1; +https://openai.com/gptbot",
  perplexitybot:
    "Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; PerplexityBot/1.0; +https://perplexity.ai/perplexitybot)",
  claudebot: "Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; ClaudeBot/1.0; +claudebot@anthropic.com)",
  whatsapp: "WhatsApp/2.23.20.0 A",
  facebook: "facebookexternalhit/1.1 (+http://www.facebook.com/externalhit_uatext.php)",
  twitterbot: "Twitterbot/1.0",
  telegram: "TelegramBot (like TwitterBot)",
  discord: "Mozilla/5.0 (compatible; Discordbot/2.0; +https://discordapp.com)",
  slack: "Slackbot-LinkExpanding 1.0 (+https://api.slack.com/robots)",
  iphoneSafari:
    "Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5 Mobile/15E148 Safari/604.1",
  androidChrome:
    "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Mobile Safari/537.36",
  // A phone whose model name ends in "bot": a reader, not a crawler.
  cubotPhone:
    "Mozilla/5.0 (Linux; Android 9; CUBOT X19) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36",
  // The disguised crawl of 11 Nov: a plain Windows Chrome. Indistinguishable
  // from a reader, so it passes; the firewall's JA4 and ASN rules are for it.
  windowsChrome153:
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/153.0.0.0 Safari/537.36",
  reflectionbot: "Reflectionbot", // as the firewall's user-agent column showed it
  lightpanda: "Lightpanda/1.0",
  headless:
    "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/120.0.6099.28 Safari/537.36",
  pythonRequests: "python-requests/2.31.0",
  curl: "curl/8.7.1",
  bytespider:
    "Mozilla/5.0 (Linux; Android 5.0) AppleWebKit/537.36 (KHTML, like Gecko) Mobile Safari/537.36 (compatible; Bytespider; spider-feedback@bytedance.com)",
  seranking: "Mozilla/5.0 (compatible; SERankingBacklinksBot/1.0; +https://seranking.com/backlinks-crawler)",
} as const;

const VARIANT = href({}, { a: "burna-boy", b: "wizkid", mode: "certs" }); // "/compare?a=…"
const split = (url: string) => {
  const i = url.indexOf("?");
  return i < 0 ? ([url, ""] as const) : ([url.slice(0, i), url.slice(i)] as const);
};
const verdict = (ua: string | null, url: string) => botVerdict(ua, ...split(url));
const matches = (url: string) => unstable_doesMiddlewareMatch({ config, nextConfig, url });

const PAGES = ["/", "/compare", "/compare/burna-boy-vs-wizkid", "/compare/in/united-kingdom", "/music", "/records/tours/revenue", "/dai-dai"];
const READERS = [UA.iphoneSafari, UA.androidChrome, UA.windowsChrome153, UA.cubotPhone];
const SEARCH_AND_AI = [UA.googlebot, UA.googlebotPhone, UA.bingbot, UA.gptbot, UA.perplexitybot, UA.claudebot];
const PREVIEWS = [UA.whatsapp, UA.facebook, UA.twitterbot, UA.telegram, UA.discord, UA.slack];
const AUTOMATION = [UA.reflectionbot, UA.lightpanda, UA.headless, UA.pythonRequests, UA.curl, UA.seranking];

describe("blocked: clients that say what they are", () => {
  it("every crawler robots.ts closes the whole site to, on every page", () => {
    expect(verdict(UA.bytespider, "/")).toBe("block");
    for (const name of CLOSED_CRAWLERS) for (const p of PAGES) expect(verdict(`Mozilla/5.0 (compatible; ${name}/2.0)`, p), name).toBe("block");
  });

  it("automation, scraping clients and headless browsers, on every page", () => {
    for (const ua of AUTOMATION) for (const p of [...PAGES, VARIANT]) expect(verdict(ua, p), `${ua} ${p}`).toBe("block");
    for (const ua of ["PhantomJS/2.1.1", "aiohttp/3.9.5", "python-httpx/0.27.0", "Python-urllib/3.12", "Go-http-client/2.0",
      "Scrapy/2.11.2 (+https://scrapy.org)", "Wget/1.21.4", "axios/1.7.2", "node-fetch/1.0 (+https://github.com/bitinn/node-fetch)",
      "undici", "okhttp/4.12.0", "Java/17.0.2", "Apache-HttpClient/4.5.14 (Java/17.0.2)", "libwww-perl/6.72"])
      expect(verdict(ua, "/music"), ua).toBe("block");
  });

  it("matches case-insensitively and as whole tokens only", () => {
    expect(verdict("CURL/8.0", "/")).toBe("block");
    expect(verdict("lightpanda/1.0", "/")).toBe("block");
    expect(verdict("Mozilla/5.0 (curly-browser)", "/")).toBe("pass");
    expect(verdict("Mozilla/5.0 Javascript-Engine", "/")).toBe("pass");
  });

  it("any self-declared crawler on a /compare query-string variant", () => {
    for (const ua of [...SEARCH_AND_AI, "Mozilla/5.0 (compatible; AhrefsBot/7.0; +http://ahrefs.com/robot/)", "Mozilla/5.0 (compatible; Amazonbot/0.1)"])
      expect(verdict(ua, VARIANT), ua).toBe("block");
  });

  it("a fake link-preview agent carrying an automation token is still blocked", () => {
    expect(verdict(`${UA.headless} WhatsApp/2.23`, VARIANT)).toBe("block");
    expect(verdict("facebookexternalhit/1.1 python-requests/2.31.0", "/")).toBe("block");
  });
});

describe("never blocked", () => {
  it("real browsers, on every page and every /compare variant (with noindex there)", () => {
    for (const ua of READERS) {
      for (const p of PAGES) expect(verdict(ua, p), `${ua} ${p}`).toBe("pass");
      expect(verdict(ua, VARIANT), ua).toBe("noindex");
    }
  });

  it("search engines and the AI allowlist, on every normal page", () => {
    for (const ua of SEARCH_AND_AI) for (const p of PAGES) expect(verdict(ua, p), `${ua} ${p}`).toBe("pass");
  });

  it("link previews, including on the exact /compare URL someone shared", () => {
    for (const ua of PREVIEWS) {
      for (const p of PAGES) expect(verdict(ua, p), ua).toBe("pass");
      expect(verdict(ua, VARIANT), ua).toBe("noindex");
    }
  });

  it("the open API, robots.txt, the sitemap, share cards, icons and static files, for anyone", () => {
    const exempt = ["/api/v1/stats", "/api/v1/awards.csv", "/api", "/robots.txt", "/sitemap.xml", "/rss.xml", "/llms.txt",
      "/opengraph-image", "/compare/opengraph-image", "/music/dai-dai/twitter-image", "/icon", "/apple-icon",
      "/favicon.ico", "/icon-192.png", "/sw.js", "/manifest.webmanifest", "/fonts/x.woff2", "/_next/static/chunks/a.js", "/_next/image"];
    for (const p of exempt) {
      expect(matches(p), p).toBe(false);
      expect(EXEMPT_PATH.test(p), p).toBe(true);
      expect(verdict(UA.curl, p), p).toBe("pass");
      expect(verdict(UA.bytespider, p), p).toBe("pass");
    }
    expect(verdict(UA.curl, "/api/v1/stats")).toBe("pass");
    expect(verdict(UA.bytespider, "/robots.txt")).toBe("pass");
  });

  it("the proxy runs on every page, and the function and matcher agree", () => {
    for (const p of [...PAGES, "/api-docs-lookalike", "/embed/latest", "/iconic"]) {
      expect(matches(p), p).toBe(true);
      expect(EXEMPT_PATH.test(p), p).toBe(false);
    }
  });

  it("our own scripts, whose agent strings name the site", () => {
    const dir = "scripts";
    const files = readdirSync(dir, { recursive: true }).map(String).filter((f) => f.endsWith(".mjs"));
    const own = files.flatMap((f) => [...readFileSync(join(dir, f), "utf8").matchAll(/"(burnaboystats[^"]*\(\+https:\/\/burnaboystats\.com[^"]*\))"/g)].map((m) => m[1]));
    expect(own.length).toBeGreaterThanOrEqual(4);
    for (const ua of own) {
      for (const p of PAGES) expect(verdict(ua, p), ua).toBe("pass");
      expect(verdict(ua, VARIANT), ua).toBe("noindex");
    }
  });

  it("an empty or missing agent passes (the firewall's Bot Protection handles it)", () => {
    expect(verdict(null, "/")).toBe("pass");
    expect(verdict("", VARIANT)).toBe("noindex");
  });
});

describe("negative control: the 10 Oct flood that robots.txt and the rate limit let through", () => {
  // Lightpanda ignores robots.txt, and the crawl came from too many IPs for a
  // per-IP limit. Its URLs were /compare query-string variants like VARIANT.
  it("the proxy runs on the flood's URLs and turns each flood agent away", () => {
    expect(VARIANT.startsWith("/compare?")).toBe(true);
    expect(matches(VARIANT)).toBe(true);
    for (const ua of [UA.lightpanda, UA.gptbot, UA.seranking, UA.perplexitybot]) expect(verdict(ua, VARIANT), ua).toBe("block");
  });

  it("GPTBot is blocked for the variant, not for being GPTBot", () => {
    expect(verdict(UA.gptbot, "/compare")).toBe("pass");
    expect(verdict(UA.gptbot, "/compare/burna-boy-vs-wizkid")).toBe("pass");
  });
});
