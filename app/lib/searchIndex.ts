// Static, dependency-free search index of every page on the site. Kept free of
// data imports so it's safe in the client bundle (the palette + /search both
// use it). Each doc carries extra `keywords` so a query like "grammy", "net
// worth" or "ferrari" lands on the right page even when the word isn't in the
// title.

export type SearchDoc = {
  title: string;
  path: string;
  section: string;
  description: string;
  keywords: string[];
};

export const searchIndex: SearchDoc[] = [
  {
    title: "Home",
    path: "/",
    section: "Site",
    description: "The unofficial stats home of Burna Boy — every record in one place.",
    keywords: ["home", "start", "overview", "burna boy stats"],
  },
  {
    title: "Discography",
    path: "/music",
    section: "Music",
    description: "Every album, EP and single — the full Burna Boy discography.",
    keywords: ["music", "albums", "eps", "singles", "songs", "tracklist", "african giant", "twice as tall", "love damini", "i told them", "no sign of weakness"],
  },
  {
    title: "Certifications",
    path: "/certifications",
    section: "Music",
    description: "Every gold, platinum and diamond certification across the world.",
    keywords: ["certifications", "riaa", "bpi", "gold", "platinum", "diamond", "silver", "plaques"],
  },
  {
    title: "Career Records",
    path: "/records",
    section: "Records",
    description: "Charts, awards, tours and firsts — the record hub.",
    keywords: ["records", "career", "milestones", "achievements"],
  },
  {
    title: "Chart Records",
    path: "/records/charts",
    section: "Records",
    description: "Billboard Hot 100, Global 200 and worldwide chart peaks and No. 1s.",
    keywords: ["charts", "billboard", "hot 100", "global 200", "peak", "number one", "no 1", "official charts", "snep", "dai dai"],
  },
  {
    title: "Awards & Nominations",
    path: "/records/awards",
    section: "Records",
    description: "Every Grammy, BET, BRIT, MOBO and MTV win and nomination.",
    keywords: ["awards", "grammy", "grammys", "bet", "brit", "mobo", "mtv", "naacp", "soul train", "nominations", "wins", "honours"],
  },
  {
    title: "Tours & Live",
    path: "/records/tours",
    section: "Records",
    description: "World tours, sold-out arenas and the biggest African touring runs.",
    keywords: ["tours", "concerts", "live", "shows", "arena", "stadium", "world tour"],
  },
  {
    title: "Festivals & Shows",
    path: "/records/tours/festivals",
    section: "Records",
    description: "Afro Nation, Coachella and every big-stage festival billing.",
    keywords: ["festivals", "afro nation", "coachella", "glastonbury", "north sea jazz", "headline"],
  },
  {
    title: "Highest Revenue Per Show",
    path: "/records/tours/revenue",
    section: "Records",
    description: "Box-office and highest-grossing concert figures.",
    keywords: ["revenue", "box office", "grossing", "highest grossing", "boxscore", "earnings", "tour money"],
  },
  {
    title: "Where He's Performed",
    path: "/records/tours/map",
    section: "Records",
    description: "An interactive world map of every country Burna Boy has performed in.",
    keywords: ["map", "world map", "countries", "performed", "cities", "where"],
  },
  {
    title: "Car Collection",
    path: "/records/cars",
    section: "Records",
    description: "Every car in Burna Boy's collection and what it's worth.",
    keywords: ["cars", "car collection", "ferrari", "lamborghini", "rolls royce", "cullinan", "bentley", "mclaren", "garage", "net worth", "wealth", "lifestyle"],
  },
  {
    title: "Firsts & Records",
    path: "/records/firsts",
    section: "Records",
    description: "Historic firsts — the milestones no African artist reached before.",
    keywords: ["firsts", "first african artist", "history", "milestone", "record breaking"],
  },
  {
    title: "Africa's Biggest",
    path: "/records/africas-biggest",
    section: "Records",
    description: "Africa's biggest artists by Billboard and Spotify — Burna Boy in context.",
    keywords: ["africas biggest", "wizkid", "tems", "rema", "tyla", "asake", "davido", "afrobeats", "most streamed african artist", "compare"],
  },
  {
    title: "By the Numbers",
    path: "/records/by-the-numbers",
    section: "Records",
    description: "The whole career distilled into headline stats.",
    keywords: ["by the numbers", "stats", "statistics", "totals", "at a glance"],
  },
  {
    title: "Visualized",
    path: "/records/visualized",
    section: "Records",
    description: "Charts and graphs of the data behind the records.",
    keywords: ["visualized", "visualised", "data", "charts", "graphs", "infographic", "visualization"],
  },
  {
    title: "The Dai Dai Story",
    path: "/dai-dai",
    section: "Records",
    description: "How Burna Boy & Shakira's World Cup anthem became the biggest song in the world — told through the numbers.",
    keywords: ["dai dai", "dai dai story", "world cup song", "shakira burna boy", "fifa world cup 2026", "biggest song in the world", "global 200"],
  },
  {
    title: "Latest Updates",
    path: "/updates",
    section: "Site",
    description: "A running log of real Burna Boy news as it happens.",
    keywords: ["updates", "news", "latest", "new", "changelog", "recent"],
  },
  {
    title: "FAQ",
    path: "/faq",
    section: "Site",
    description: "Burna Boy's real name, net worth, Grammys and more — answered.",
    keywords: ["faq", "questions", "real name", "damini ogulu", "net worth", "how many grammys", "age", "born"],
  },
  {
    title: "Methodology & Sources",
    path: "/methodology",
    section: "Site",
    description: "How every figure is sourced, verified and kept current.",
    keywords: ["methodology", "sources", "how verified", "accuracy", "corrections", "trust"],
  },
  {
    title: "About Burna Boy",
    path: "/about",
    section: "Site",
    description: "Biography and career timeline of the African Giant.",
    keywords: ["about", "biography", "bio", "damini ebunoluwa ogulu", "port harcourt", "timeline", "born"],
  },
  {
    title: "Contact",
    path: "/contact",
    section: "Site",
    description: "Report a correction or get in touch.",
    keywords: ["contact", "email", "correction", "report", "get in touch"],
  },
];

// Score a doc against a query. Higher = better. 0 = no match.
function score(doc: SearchDoc, q: string): number {
  const title = doc.title.toLowerCase();
  const desc = doc.description.toLowerCase();
  if (title === q) return 100;
  if (title.startsWith(q)) return 80;
  if (title.includes(q)) return 60;
  if (doc.keywords.some((k) => k === q)) return 55;
  if (doc.keywords.some((k) => k.startsWith(q))) return 45;
  if (doc.keywords.some((k) => k.includes(q))) return 35;
  if (desc.includes(q)) return 20;
  return 0;
}

// Rank the index for a query. Empty query returns [] (callers show a default).
export function searchDocs(query: string, limit = 8): SearchDoc[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return searchIndex
    .map((doc) => ({ doc, s: score(doc, q) }))
    .filter((r) => r.s > 0)
    .sort((a, b) => b.s - a.s)
    .slice(0, limit)
    .map((r) => r.doc);
}
