// Burna Boy's car collection — reported purchase values. Most entries are
// sourced from Pulse Nigeria's itemised breakdown (Nov 2025), the most detailed
// single source found; the ₦9bn Bugatti Chiron is from July 2026 coverage
// (Daily Post, Ripples, The Niche) of its unveiling. Values are reported in
// Nigerian naira import-inclusive pricing; USD figures use the source's own
// conversion (~₦1,455/$).
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
    make: "Lamborghini", model: "Revuelto",
    valueUsd: 1_030_000, valueNaira: "₦1.5 billion",
    desc: "Lamborghini's first plug-in-hybrid V12 flagship — the successor to the Aventador.",
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
    make: "Mercedes-Maybach", model: "G63",
    valueUsd: 202_000, valueNaira: "₦292.9 million",
    desc: "A luxury take on the off-road G-Wagon icon.",
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

// Reported as a more recent addition (not in the itemised Pulse Nigeria list
// above, so not folded into the total) — value not publicly disclosed.
export const recentAddition: Car = {
  make: "Rolls-Royce", model: "Spectre",
  valueUsd: 0, valueNaira: "value undisclosed",
  desc: "Rolls-Royce's first all-electric model — a two-door ultra-luxury coupe.",
};

export const totalValueUsd = cars.reduce((sum, c) => sum + c.valueUsd, 0);
export const carCount = cars.length;

function formatUsd(n: number): string {
  return `$${(n / 1_000_000).toFixed(2)}M`;
}
export const totalValueFormatted = formatUsd(totalValueUsd);
