// Everything the car pages compute. Nothing here is typed in — every figure is
// a fresh reduce over app/data/cars.ts, so the pages can never disagree with
// the data (CARS-HANDOFF.md §7).

import { garage, type GarageCar } from "../data/cars";

/** "Chiron (Venuum Widebody)" → "Chiron". The parenthetical is a qualifier,
 *  not part of the name, and it breaks a 54px headline. */
export const modelShort = (model: string) => model.replace(/\s*\(.*\)\s*$/, "");

export const usdFull = (n: number) => `$${n.toLocaleString("en-US")}`;
export const usdShort = (n: number) => `$${(n / 1e6).toFixed(2)}M`;
export const rankLabel = (rank: number) => String(rank).padStart(2, "0");

/** The page <title>. The SEO gate caps titles at 60 characters and the longest
 *  full model string does not fit with the collection named after it, so the
 *  qualifier is dropped and the suffix kept short. */
export const carTitle = (car: GarageCar) => `${car.make} ${modelShort(car.model)} — Burna Boy's Cars`;

/** The meta description — the gate caps it at 160 characters. */
export const carDescription = (car: GarageCar) =>
  `${car.make} ${modelShort(car.model)}: ranked ${car.rank} of ${garage.length} in Burna Boy's garage, reported at ${usdFull(car.valueUsd)}. Specs, illustration and source.`;

/** The strongest figure in the collection on each axis — the bars' 100%. */
export const garageBest = {
  powerToWeight: Math.max(...garage.map((c) => c.num.hp / c.num.kg)),
  acc: Math.min(...garage.map((c) => c.num.acc)),
  vmax: Math.max(...garage.map((c) => c.num.vmax)),
  usd: Math.max(...garage.map((c) => c.valueUsd)),
};

export interface PerformanceBar {
  key: string;
  /** Display value, or "—" while the figure behind it is unverified. */
  value: string;
  /** 0–1 share of the strongest in the collection. 0 while pending. */
  share: number;
  aria: string;
  pending: boolean;
}

// Never below 3% so the shortest bar is still visible — the width is the
// comparison, and an invisible bar reads as a missing row.
const width = (share: number) => Math.max(0.03, share);
const pct = (share: number) => Math.round(share * 100);

/**
 * Four bars, each this car's figure as a share of the strongest in the garage.
 *
 * Three of them are the specifications in another dress — power-to-weight,
 * 0–100 and top speed are `num`, the numeric twin of `specs` — so they wait on
 * the same human verification the specifications card does. Rendering the
 * spec rows as "pending" while plotting the identical figures as bars would be
 * publishing them through the side door. The value bar is site data and is
 * always drawn.
 */
export function performanceBars(car: GarageCar): PerformanceBar[] {
  const pending = !car.specs.verified;
  const pw = car.num.hp / car.num.kg;
  const pwShare = pw / garageBest.powerToWeight;
  const accShare = garageBest.acc / car.num.acc;
  const vmaxShare = car.num.vmax / garageBest.vmax;
  const usdShare = car.valueUsd / garageBest.usd;
  const wait = "pending verification";
  return [
    {
      key: "Power / weight",
      value: pending ? "—" : `${Math.round(pw * 1000)} hp/t`,
      share: pending ? 0 : width(pwShare),
      aria: pending ? `Power to weight: ${wait}` : `Power to weight ${Math.round(pw * 1000)} hp per tonne, ${pct(pwShare)}% of the strongest in the collection`,
      pending,
    },
    {
      key: "0–100 km/h",
      value: pending ? "—" : `${car.num.acc.toFixed(1)} s`,
      share: pending ? 0 : width(accShare),
      aria: pending ? `0 to 100 km/h: ${wait}` : `0 to 100 km/h in ${car.num.acc.toFixed(1)} seconds, ${pct(accShare)}% of the quickest in the collection`,
      pending,
    },
    {
      key: "Top speed",
      value: pending ? "—" : `${car.num.vmax} km/h`,
      share: pending ? 0 : width(vmaxShare),
      aria: pending ? `Top speed: ${wait}` : `Top speed ${car.num.vmax} km/h, ${pct(vmaxShare)}% of the fastest in the collection`,
      pending,
    },
    {
      key: "Reported value",
      value: usdShort(car.valueUsd),
      share: width(usdShare),
      aria: `Reported value ${usdFull(car.valueUsd)}, ${pct(usdShare)}% of the most expensive in the collection`,
      pending: false,
    },
  ];
}

/** The six specification rows, in the design's order. */
export const specRows = (car: GarageCar) => [
  { k: "Engine", v: car.specs.engine },
  { k: "Power", v: car.specs.power },
  { k: "0–100 km/h", v: car.specs.zeroToHundred },
  { k: "Top speed", v: car.specs.topSpeed },
  { k: "Drivetrain", v: car.specs.drivetrain },
  { k: "Weight", v: car.specs.weight },
];

/** Previous and next in rank order, wrapping at both ends (15 → 01, 01 → 15). */
export function neighbours(car: GarageCar) {
  const i = garage.findIndex((c) => c.slug === car.slug);
  const n = garage.length;
  return { prev: garage[(i - 1 + n) % n], next: garage[(i + 1) % n] };
}

/** Marques by count, most first, then by name — the index's tally strip. */
export function marqueTally(list: { make: string }[]) {
  const by = new Map<string, number>();
  for (const c of list) by.set(c.make, (by.get(c.make) ?? 0) + 1);
  return [...by.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
}
