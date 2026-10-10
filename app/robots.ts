import type { MetadataRoute } from "next";
import { siteUrl } from "./site";

// AI answer engines + their crawlers. The "*" rule below already allows these,
// but listing them explicitly documents the intent (we WANT to be indexed and
// cited by AI search) and guards against a future restrictive edit silently
// locking them out. Every page stays open to them; the one thing closed is the
// query-string variants of /compare (below).
const aiCrawlers = [
  "GPTBot", // OpenAI (training)
  "OAI-SearchBot", // ChatGPT Search
  "ChatGPT-User", // ChatGPT live browsing
  "PerplexityBot", // Perplexity index
  "Perplexity-User", // Perplexity live fetch
  "ClaudeBot", // Anthropic crawler
  "Claude-Web", // Anthropic live fetch
  "Google-Extended", // Google Gemini / AI Overviews grounding
  "Applebot-Extended", // Apple Intelligence
  "Amazonbot",
  "Bingbot", // Bing — powers Copilot & feeds ChatGPT
  // xAI / Grok. Listed for completeness, with a caveat worth keeping: xAI
  // publishes no crawler documentation and no token appears in its own
  // robots.txt, and Grok's retrieval has been reported fetching with ordinary
  // browser user-agents. So these names may govern nothing. They cost nothing
  // either, and the "*" rule above already allows Grok however it arrives —
  // which is the part that actually matters. Nothing here is ever disallowed.
  "xAI-Bot",
  "GrokBot",
  "Grok",
];

/**
 * /compare keeps every choice in its query string (a, b, sa, sb, qa, qb, mode,
 * feat, ng, all, country — lib/compareUrl.ts), and every control on the page
 * links to another combination, so a crawler that follows links never runs out
 * of "new" URLs. On 9–10 Oct 2026 the firewall logged ~927,000 requests to
 * /compare in a day: Lightpanda 652k, GPTBot 174k (one IP), SE Ranking 28.5k,
 * PerplexityBot 26.5k, Amazonbot 21.3k. Each variant already canonicals to its
 * clean page, but canonicals don't stop crawling — robots does.
 *
 * Closed: "/compare?" (any query string). Open: /compare itself, every
 * /compare/<a>-vs-<b> pair page and /compare/in/<country> board, which are the
 * canonical pages and are in the sitemap. A crawler obeys only its most
 * specific group, so the rule goes on "*" AND on every named crawler.
 */
export const COMPARE_VARIANTS = "/compare?";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: COMPARE_VARIANTS },
      ...aiCrawlers.map((userAgent) => ({ userAgent, allow: "/", disallow: COMPARE_VARIANTS })),
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
