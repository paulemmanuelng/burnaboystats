import type { MetadataRoute } from "next";
import { siteUrl } from "./site";

// AI answer engines + their crawlers. The "*" rule below already allows these,
// but listing them explicitly documents the intent (we WANT to be indexed and
// cited by AI search) and guards against a future restrictive edit silently
// locking them out. None are disallowed anywhere on the site.
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

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      ...aiCrawlers.map((userAgent) => ({ userAgent, allow: "/" })),
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
