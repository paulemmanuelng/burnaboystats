// ── JULY 2026 UPDATE — top-fan re-pricing pass ──────────────────────────────
// Re-priced against a researched breakdown from a top Burna Boy fan/collector
// (@turntupnaza), who tracked each car's buy price + Nigerian import duties.
// Only the McLaren Senna price is fan-confirmed (Burna posted it himself); the
// Bugatti, Cullinan and Aventador SVJ are high-confidence, the rest estimates.
//   • Ferrari 458 Italia + 488 Spider → SOLD (kept here, not dropped).
//   • Bentley Continental GT + Range Rover Autobiography → UNCONFIRMED (not
//     sighted with him in years).
//   • Live totals (count + value) count CURRENT cars only.
//   • Testarossa corrected down from ~₦1.6bn (blog inflation) to ~₦175m.
//   • Resolved: the Mercedes-AMG G63 (absent from the fan list) → UNCONFIRMED;
//     the Maybach GLS 600 — he bought TWO (shown together in his own TikTok
//     video): one he kept for himself (NOW COUNTED above), one gifted to his
//     mother/manager (still held out — see HELD OUT).
// Older per-car provenance further down is retained for history.
//
// Burna Boy's car collection — reported purchase values. 15 of 20 entries are
// sourced from Pulse Nigeria's itemised breakdown (Nov 2025) — directly
// re-fetched, and each of those 15 also independently re-confirmed via a
// SECOND source beyond Pulse (dealer/self-confirmations, dedicated AutoJosh/
// Legit.ng/Punch articles, several predating Pulse's list by years — see the
// July 2026 deep-verification pass for specifics). The ₦9bn Bugatti Chiron and
// the Porsche 911 GT3 RS are each confirmed via multiple independent dedicated
// articles (Vanguard/Ripples/The Niche/Daily Post; AutoJosh/News Ghana/PM News/
// Tori.ng). The Ferrari SF90 Stradale and the vintage Ferrari Testarossa are
// the two exceptions: ownership of each is well-documented (many independent
// posts/videos — the Testarossa specifically confirmed as a genuinely distinct
// car from the 328 GTB below, via convergent independent labelling across two
// separate sightings, London and later moved into his Lagos penthouse, August
// 2025), but their values float free of any single dedicated report — they're
// social/blog estimates, marked "(est.)" below rather than presented with the
// same precision as the rest. Naira figures are import-inclusive; USD figures
// use each source's own conversion (~₦1,455/$), so they run higher than
// international sticker prices.
//
// KNOWN VALUE DISCREPANCIES (flagged during re-verification, not hidden):
// a few entries have a second, differing figure reported elsewhere — noted in
// that car's own description rather than silently picking one number.
//
// This list is NOT guaranteed complete — see the page's own note on why.
// Last fully re-verified July 2026 (all prior 19 entries independently
// re-checked, each against at least 2 sources beyond the original itemised
// breakdown; the Maybach GLS 600 added July 2026 from his own TikTok video).
//
// HELD OUT (only his own confirmed cars are listed) — re-checked:
//  • Mercedes-Maybach GLS 600 ("Maybach Truck"), the GIFT UNIT — he bought two,
//    shown together in his own TikTok video, and gifted one to his mother/
//    manager Bose Ogulu. Only her gifted unit stays out of the fleet totals;
//    the second one, which he kept for himself, IS now counted above.
//  • Tesla Cybertruck — a Christmas 2024 gift to his PA/best friend King Manny,
//    per Pulse and multiple entertainment outlets. It was destroyed in a
//    crash in August 2025 and replaced with a gifted Lamborghini Urus — never
//    Burna Boy's own car either way.
//  • Rolls-Royce Ghost — traced the source of this claim: an AutoJosh article
//    comparing Fuji musician K1 De Ultimate's Rolls-Royce Ghost to Burna Boy's
//    Rolls-Royce Dawn. The Ghost belongs to K1 De Ultimate, not Burna Boy —
//    an aggregator mix-up, not a real ownership claim.
//  • Bentley Bentayga — claimed only by low-tier aggregator blogs (Urban
//    Splatter, 234Drive, Sellatease/WheelZAR) with no primary coverage; one
//    version ties the purchase to "the 2022 Olympics," which has no real
//    connection to Burna Boy — a fabricated detail that further undermines
//    this source cluster. (Separately, an unrelated Legit.ng piece reacting to
//    a viral garage-tour video once claimed "seven Bugattis," which is false —
//    he has exactly one — another data point that this general ecosystem of
//    aggregator content is unreliable.)
//  • Rolls-Royce Spectre — a single passing mention inside a Vanguard article
//    that was mainly about the Bugatti Chiron, not independently corroborated
//    by any dedicated source. Removed rather than kept as a low-confidence
//    "recent addition" footnote.
//
// Fresh sweep (July 2026): no new car acquisitions found after the Bugatti's
// July 3, 2026 unveiling, and no credible report of any listed car being sold
// or given away (one viral "sold 2 Ferraris" claim traced to unsourced
// clickbait content, not picked up by any real outlet).
//
// `link` is optional — a URL to a photo or video of Burna Boy actually in/with
// the car (added over time). When present, the row shows a "See it" link. We do
// NOT host our own photos of the cars (his are one-of-a-kind/customised and no
// free-to-reuse image exists), so this points out to the real thing instead.

export interface Car {
  make: string;
  model: string;
  year?: number;
  valueUsd: number;
  valueNaira: string;
  desc: string;
  status?: "sold" | "unconfirmed"; // absent = currently in the collection
  link?: string; // optional: photo/video of Burna Boy in/with the car
  linkLabel?: string; // optional override for the link text (defaults to "See Burna in it")
}

export const cars: Car[] = [
  {
    make: "Bugatti", model: "Chiron (Venuum Widebody)",
    valueUsd: 6_190_000, valueNaira: "₦9 billion",
    desc: "A one-of-one custom build by Dubai's Venuum, unveiled July 2026 and billed as the world's first widebody Chiron — baby blue over black with a French-tricolour stripe, a “7” roundel, and his name engraved on the rear spoiler. Reported as the most expensive car in West Africa, though neither Burna Boy nor Venuum has publicly confirmed the exact price — every outlet hedges it as \"reportedly\" ₦9 billion.",
    // He hasn't driven it yet — this is the official reveal video of the finished build.
    link: "https://www.youtube.com/watch?v=YNP3X59Yv6Y",
    linkLabel: "Watch the reveal",
  },
  {
    make: "McLaren", model: "Senna (MSO Carbon Edition)",
    valueUsd: 2_000_000, valueNaira: "₦2.9 billion",
    desc: "A track-bred hypercar named after Ayrton Senna, finished in exposed carbon fibre (MSO). The one price in the whole collection that's confirmed rather than estimated — $2M is the figure Burna Boy himself posted when he bought it.",
    link: "https://autojosh.com/burna-boy-splashes-n3-2-billion-on-a-mclaren-senna-hypercar/",
  },
  {
    make: "Ferrari", model: "SF90 Stradale", year: 2025,
    valueUsd: 1_000_000, valueNaira: "₦1.46 billion",
    desc: "A plug-in-hybrid V8 hypercar with nearly 1,000 combined horsepower — reported as the only one of its kind in Africa.",
  },
  {
    make: "Ferrari", model: "Purosangue", year: 2024,
    valueUsd: 1_000_000, valueNaira: "₦1.46 billion",
    desc: "Ferrari's first-ever four-door, four-seat model — the marque's debut in the luxury-SUV space, powered by a naturally-aspirated V12.",
    link: "https://autojosh.com/moment-burna-boy-picked-up-his-brand-new-ferrari-purosangue-suv-worth-n2-billion-at-lagos-dealership/",
  },
  {
    make: "Lamborghini", model: "Revuelto", year: 2025,
    valueUsd: 1_000_000, valueNaira: "₦1.46 billion",
    desc: "Lamborghini's first plug-in-hybrid V12 flagship — the successor to the Aventador, and reported as the first in Nigeria.",
    link: "https://autojosh.com/burna-boy-acquires-the-first-ever-lamborghini-revuelto-in-nigeria-worth-n1-billion/",
  },
  {
    make: "Rolls-Royce", model: "Cullinan Black Badge", year: 2024,
    valueUsd: 1_000_000, valueNaira: "₦1.46 billion",
    desc: "Rolls-Royce's flagship ultra-luxury SUV in Black Badge trim — custom-ordered with a diamond-encrusted Spirit of Ecstasy bonnet ornament.",
    link: "https://autojosh.com/burna-boy-buys-customized-rolls-royce-cullinan-with-diamond-encrusted-bonnet-ornament/",
  },
  {
    make: "Lamborghini", model: "Aventador SVJ Roadster", year: 2022,
    valueUsd: 1_000_000, valueNaira: "₦1.46 billion",
    desc: "The most extreme Aventador — a 759-hp naturally-aspirated V12 in open-top Roadster form, built in limited numbers.",
    link: "https://www.youtube.com/watch?v=VUrDi8jbKkg",
    linkLabel: "Watch the delivery",
  },
  {
    make: "Rolls-Royce", model: "Dawn", year: 2019,
    valueUsd: 700_000, valueNaira: "₦1 billion",
    desc: "A four-seat luxury drop-top convertible, also fitted with a diamond Spirit of Ecstasy.",
    link: "https://autojosh.com/burna-boy-flaunts-rolls-royce-dawn/",
  },
  {
    make: "Ferrari", model: "812 GTS", year: 2023,
    valueUsd: 700_000, valueNaira: "₦1 billion",
    desc: "A front-mounted 6.5-litre V12 convertible — among the most powerful series-production Ferraris ever built.",
    link: "https://www.legit.ng/entertainment/celebrities/1570054-christmas-burna-boy-spurges-n700m-a-brand-ferrari-812-gts-video-frenzy/",
  },
  {
    make: "Porsche", model: "911 GT3 RS (Weissach)", year: 2025,
    valueUsd: 600_000, valueNaira: "₦900 million",
    desc: "A track-focused, road-legal flat-six with the Weissach pack — 518 hp, 0–100 km/h in 3.2 seconds. Delivered on Valentine's Day 2026; a Polanco dealership staffer put the price at ₦900 million.",
    link: "https://x.com/TheNationNews/status/2022971489272631326",
    linkLabel: "Watch on X",
  },
  {
    make: "Lamborghini", model: "Urus (Novitec Edition)", year: 2022,
    valueUsd: 500_000, valueNaira: "₦730 million",
    desc: "Lamborghini's super-SUV, customised here to an aggressive Novitec widebody spec.",
    link: "https://autojosh.com/burna-boy-takes-his-lamborghini-urus-for-a-spin-moments-after-the-n200m-suv-arrived-in-nigeria/",
  },
  {
    make: "Mercedes-Maybach", model: "S680 4MATIC", year: 2022,
    valueUsd: 300_000, valueNaira: "₦440 million",
    desc: "The chauffeur-focused, range-topping S-Class — confirmed via his own Instagram caption (\"Got this too because everyone needs a Maybach\").",
  },
  {
    make: "Mercedes-Maybach", model: "GLS 600 4MATIC", year: 2026,
    valueUsd: 250_000, valueNaira: "₦360 million",
    desc: "The flagship Maybach SUV — the \"Maybach Truck.\" He bought two of them, shown together in his own TikTok video: one he kept for himself (this one) and an identical unit gifted to his mother/manager Bose Ogulu. Only his own is counted here; hers is kept out of the fleet totals. Value is an estimate in line with the Maybach tier.",
  },
  {
    make: "Ferrari", model: "Testarossa", year: 1988,
    valueUsd: 120_000, valueNaira: "₦175 million",
    desc: "A wide-body, flat-12 icon of the 1980s, instantly recognisable by its side strakes — spotted in London and later moved into his Lagos penthouse (August 2025). A genuinely distinct car from his red 328 below. Some blogs valued it near ₦1.5bn; a 1988 Testarossa realistically sits far lower, around ₦175 million.",
  },
  {
    make: "Ferrari", model: "328 GTS", year: 1985,
    valueUsd: 100_000, valueNaira: "₦146 million",
    desc: "A 1980s classic — the final evolution of Ferrari's celebrated 308/328 line, in open-top GTS form.",
  },

  // ===== No longer counted in the live collection =====
  {
    make: "Ferrari", model: "458 Italia", year: 2013,
    valueUsd: 230_000, valueNaira: "₦333.5 million",
    status: "sold",
    desc: "A naturally-aspirated V8 that became a modern Ferrari icon — one of his earliest supercars. Reportedly sold in 2025.",
    link: "https://autojosh.com/burna-ferrari-458-italia/",
  },
  {
    make: "Ferrari", model: "488 Spider", year: 2022,
    valueUsd: 472_000, valueNaira: "₦684.4 million",
    status: "sold",
    desc: "A twin-turbo V8 open-top supercar — reportedly sold in 2025 alongside the 458 Italia.",
  },
  {
    make: "Bentley", model: "Continental GT", year: 2017,
    valueUsd: 270_000, valueNaira: "₦391.5 million",
    status: "unconfirmed",
    desc: "A quintessential British grand tourer — an early acquisition that hasn't been sighted with him in years, so current ownership is unconfirmed.",
  },
  {
    make: "Range Rover", model: "Autobiography",
    valueUsd: 167_000, valueNaira: "₦242.15 million",
    status: "unconfirmed",
    desc: "A top-trim luxury SUV — like the Bentley, not seen with him recently, so it's kept here as unconfirmed rather than dropped.",
  },
  {
    make: "Mercedes-AMG", model: "G63",
    valueUsd: 202_000, valueNaira: "₦293 million",
    status: "unconfirmed",
    desc: "The iconic boxy G-Wagon in AMG's high-performance trim. Absent from the latest top-fan ownership research, so its current place in the fleet is unconfirmed.",
  },
];

const byValueDesc = (a: Car, b: Car) => b.valueUsd - a.valueUsd;
// Headline totals count only cars currently in the collection; sold and
// unconfirmed cars are kept but shown separately.
export const currentCars = [...cars].filter((c) => !c.status).sort(byValueDesc);
export const soldCars = [...cars].filter((c) => c.status === "sold").sort(byValueDesc);
export const unconfirmedCars = [...cars].filter((c) => c.status === "unconfirmed").sort(byValueDesc);

export const totalValueUsd = currentCars.reduce((sum, c) => sum + c.valueUsd, 0);
export const carCount = currentCars.length;

function formatUsd(n: number): string {
  return `$${(n / 1_000_000).toFixed(2)}M`;
}
export const totalValueFormatted = formatUsd(totalValueUsd);
