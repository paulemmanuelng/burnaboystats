// Burna Boy's car collection — reported purchase values. Most entries (12 of
// 18) are sourced from Pulse Nigeria's itemised breakdown (Nov 2025) — directly
// re-fetched and re-verified, matching exactly. The ₦9bn Bugatti Chiron and the
// Porsche 911 GT3 RS are each confirmed via a directly-fetched dedicated
// article (Vanguard/Ripples/The Niche; AutoJosh) with consistent details
// across multiple independent outlets. The Ferrari SF90 Stradale and the
// vintage Ferrari Testarossa are the two exceptions: ownership of each is
// well-documented (many independent posts/videos — the Testarossa specifically
// via two separate sightings, London and later moved into his Lagos penthouse,
// August 2025), but their values float free of any single dedicated report —
// they're social/blog estimates, marked "(est.)" below rather than presented
// with the same precision as the rest. Naira figures are import-inclusive; USD figures use
// each source's own conversion (~₦1,455/$), so they run higher than
// international sticker prices.
//
// This list is NOT guaranteed complete — see the page's own note on why.
// Last fully re-verified July 2026 (all 18 entries independently re-checked).
//
// HELD OUT (only his own confirmed cars are listed):
//  • Mercedes-Maybach GLS 600 ("Maybach Truck") — Pulse lists it as a Mother's
//    Day GIFT to his mother/manager Bose Ogulu, not part of his own fleet.
//  • Tesla Cybertruck — a gift to a friend, per Pulse.
//  • Rolls-Royce Ghost, Bentley Bentayga — claimed only by low-tier aggregator
//    blogs (Urban Splatter, 234Drive, Sellatease) with no primary coverage;
//    one of the few sources repeating this ecosystem's claims also asserted he
//    owns "seven Bugattis," which is false (he has exactly one) — treating
//    that whole cluster of claims as unreliable until better-sourced.
//  • Rolls-Royce Spectre — a single passing mention inside a Vanguard article
//    that was mainly about the Bugatti Chiron, not independently corroborated
//    by any dedicated source. Removed rather than kept as a low-confidence
//    "recent addition" footnote.
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
  link?: string; // optional: photo/video of Burna Boy in/with the car
}

export const cars: Car[] = [
  {
    make: "Bugatti", model: "Chiron (Venuum Widebody)",
    valueUsd: 6_190_000, valueNaira: "₦9 billion",
    desc: "A one-of-one custom build by Dubai's Venuum, unveiled July 2026 and billed as the world's first widebody Chiron — baby blue over black with a French-tricolour stripe, a “7” roundel, and his name engraved on the rear spoiler. Reported as the most expensive car in West Africa.",
  },
  {
    make: "McLaren", model: "Senna (Carbon Fibre Edition)",
    valueUsd: 2_200_000, valueNaira: "₦3.2 billion",
    desc: "A track-bred hypercar named after Ayrton Senna, limited to 500 units worldwide — his finished in exposed carbon fibre.",
  },
  {
    make: "Ferrari", model: "Purosangue", year: 2024,
    valueUsd: 1_400_000, valueNaira: "₦2.1 billion",
    desc: "Ferrari's first-ever four-door, four-seat model — the marque's debut in the luxury-SUV space, powered by a naturally-aspirated V12.",
  },
  {
    make: "Ferrari", model: "Testarossa",
    valueUsd: 1_100_000, valueNaira: "~₦1.6 billion (est.)",
    desc: "A wide-body, flat-12 icon of the 1980s, instantly recognisable by its side strakes — spotted in London and later moved into his Lagos penthouse (August 2025). Ownership is well-documented on video; the value is a social/blog estimate rather than one dedicated report.",
  },
  {
    make: "Lamborghini", model: "Revuelto",
    valueUsd: 1_030_000, valueNaira: "₦1.5 billion",
    desc: "Lamborghini's first plug-in-hybrid V12 flagship — the successor to the Aventador.",
  },
  {
    make: "Ferrari", model: "SF90 Stradale", year: 2026,
    valueUsd: 894_000, valueNaira: "~₦1.3 billion (est.)",
    desc: "A plug-in-hybrid V8 hypercar with nearly 1,000 combined horsepower — reported as the only one of its kind in Africa. Delivered in 2026. Ownership is well-documented; the value is a social/blog estimate rather than one dedicated report.",
  },
  {
    make: "Lamborghini", model: "Aventador SVJ",
    valueUsd: 867_500, valueNaira: "₦1.258 billion",
    desc: "The most extreme Aventador — a 759-hp naturally-aspirated V12, built in limited numbers.",
  },
  {
    make: "Lamborghini", model: "Urus (Novitec Edition)", year: 2022,
    valueUsd: 800_000, valueNaira: "₦1.16 billion",
    desc: "Lamborghini's super-SUV, customised here to an aggressive Novitec widebody spec.",
  },
  {
    make: "Porsche", model: "911 GT3 RS", year: 2025,
    valueUsd: 690_000, valueNaira: "₦1 billion",
    desc: "A track-focused, road-legal flat-six — 518 hp, 0–100 km/h in 3.2 seconds. Delivered to him on Valentine's Day 2026.",
  },
  {
    make: "Ferrari", model: "812 GTS",
    valueUsd: 600_000, valueNaira: "₦870 million",
    desc: "A front-mounted 6.5-litre V12 convertible — among the most powerful series-production Ferraris ever built.",
  },
  {
    make: "Ferrari", model: "488 Spider",
    valueUsd: 472_000, valueNaira: "₦684.4 million",
    desc: "A twin-turbo V8 open-top supercar.",
  },
  {
    make: "Rolls-Royce", model: "Cullinan",
    valueUsd: 427_000, valueNaira: "₦619.15 million",
    desc: "Rolls-Royce's flagship ultra-luxury SUV, custom-ordered.",
  },
  {
    make: "Rolls-Royce", model: "Dawn",
    valueUsd: 350_000, valueNaira: "₦507.5 million",
    desc: "A four-seat luxury drop-top convertible.",
  },
  {
    make: "Bentley", model: "Continental GT", year: 2017,
    valueUsd: 270_000, valueNaira: "₦391.5 million",
    desc: "A quintessential British grand tourer.",
  },
  {
    make: "Ferrari", model: "458 Italia", year: 2013,
    valueUsd: 230_000, valueNaira: "₦333.5 million",
    desc: "A naturally-aspirated V8 that became a modern Ferrari icon — one of his earliest supercars.",
  },
  {
    make: "Mercedes-Maybach", model: "S650",
    valueUsd: 228_000, valueNaira: "₦330.6 million",
    desc: "The chauffeur-focused, range-topping S-Class.",
  },
  {
    make: "Mercedes-AMG", model: "G63",
    valueUsd: 202_000, valueNaira: "₦292.9 million",
    desc: "The iconic boxy G-Wagon in AMG's high-performance trim — rugged off-road capability wrapped in Mercedes luxury.",
  },
  {
    make: "Ferrari", model: "328 GTB", year: 1988,
    valueUsd: 180_000, valueNaira: "₦261 million",
    desc: "A 1980s classic — the final evolution of Ferrari's celebrated 308/328 line.",
  },
  {
    make: "Range Rover", model: "Autobiography",
    valueUsd: 167_000, valueNaira: "₦242.15 million",
    desc: "A top-trim luxury SUV — one of his everyday exotics.",
  },
];

export const totalValueUsd = cars.reduce((sum, c) => sum + c.valueUsd, 0);
export const carCount = cars.length;

function formatUsd(n: number): string {
  return `$${(n / 1_000_000).toFixed(2)}M`;
}
export const totalValueFormatted = formatUsd(totalValueUsd);
