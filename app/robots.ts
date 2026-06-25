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
