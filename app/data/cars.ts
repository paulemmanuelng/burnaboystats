// SPEC CHECK, 16 SEPTEMBER 2026 (third pass)
// All fifteen panels were re-read against manufacturer material, and the rows
// that could not be read there were resolved the way the rules below say —
// nulled with a note, never left as a comment beside a "verified" figure:
//   • Cullinan Black Badge: neither the 2019 launch release nor the 2024
//     Series II release states a 0–100 time or a top speed (they give 600 PS,
//     900 Nm and all-wheel drive). The 4.9 s that had sat here is a 0–60 mph
//     figure from third-party databases. Both rows are now null.
//   • GLS 600: the Mercedes release the panel cites carries no weight at all;
//     the 2,785 kg it showed was the pre-facelift EU figure from elsewhere, and
//     whether his 2024 car is the facelift is unresolved. Weight is now null.
//   • Senna: McLaren has taken down both the spec page and the press PDF the
//     row cited; the archived spec page (9 Nov 2024) is the source now, and
//     it gives both the 1,198 kg lightest dry weight and 1,309 kg DIN.
//   • 812 GTS: Ferrari's page no longer lists a weight; 1,600 kg dry stands
//     on Ferrari's own two statements (the spider is 75 kg over the Superfast,
//     whose sheet gives 1,525 kg dry with optional equipment) — said in the
//     note. 328 GTS: the 6.4 s, 263 km/h and 1,273 kg dry ARE on Ferrari's
//     page, under its Performance and Bodywork tabs; 270 hp there is 270 cv.
// The SVJ Roadster's 2.9 s stands: the cited page's spec table says 2.9 s,
// only its engine blurb says 2.98 s.
//
// ── SEPTEMBER 2026 — the garage gets pages ──────────────────────────────────
// Each current car now carries a route (`slug`), an editorial `subtitle`, a
// pre-filled `specs` panel, its numeric twin `num` for the performance bars,
// a `palette` sampled from its illustration, and an `image`. Design handoff:
// docs/design/car-collection-build-handoff.md and CARS-HANDOFF.md §6.
//
// Two rules the pages enforce, and a test guards:
//   • Every image is an ILLUSTRATION OF THE MODEL, not his car — an audit
//     against reference photography confirmed zero of fifteen renders as his
//     actual vehicle (handoff §5.6). `image.depicts` is "model" on all fifteen
//     and may only become "actual" alongside a `sources` entry proving it.
//   • Specifications are VERIFIED. All fifteen were read off the manufacturer's
//     own page in September 2026 and independently re-checked against a second
//     source, which caught four real errors — the Black Badge's 0-100 (5.2s was
//     the STANDARD Cullinan's), the 328 GTS's 0-100, the Senna's top speed and
//     the S680's weight — and established that weight bases were being mixed.
//     `verified: true` means someone did that reading: the panel shows
//     "pending verification" while it is false, and it must never be flipped
//     from memory. A figure the maker does not publish for that exact car is
//     `null`, shown as an em dash with the reason, never a borrowed number.
//
// Two identity questions are OPEN, flagged not decided (handoff §5.6): the
// Maybach saloon may be an S650 (previous generation — his own photo shows the
// boot badge), and the craned Ferrari may be the 328 GTS rather than the
// Testarossa. Either fix is one row here.

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
// Tori.ng). The Ferrari SF90 Spider and the vintage Ferrari Testarossa are
// the two exceptions: ownership of each is well-documented (many independent
// posts/videos — the Testarossa specifically confirmed as a genuinely distinct
// car from the 328 GTS below, via convergent independent labelling across two
// separate sightings, London and later brought to his Lagos garage, August
// 2025), but their values float free of any single dedicated report — they're
// social/blog estimates, marked "(est.)" below rather than presented with the
// same precision as the rest. Naira figures are import-inclusive; USD figures
// use each source's own conversion (~₦1,455/$), so they run higher than
// international sticker prices — except the Bugatti, whose ₦9bn is the source
// figure and is converted here at the announcement-day rate (see its row).
// The page's note derives both rates from the rows (`conversionNote` below).
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
// the car (added over time). When present, the page shows it as the SOURCE
// panel. We do NOT host photos of his cars (they are one-of-a-kind/customised
// and no free-to-reuse image exists) — the images on the pages are
// illustrations of each model, and say so.

/**
 * Six manufacturer figures, as display strings in the site's units.
 *
 * A field is `null` when the manufacturer does not publish that figure for
 * this exact car — the panel then shows an em dash and says why, because an
 * absent figure is itself a fact and a guess would be worse. Rolls-Royce
 * publishes no separate weight for the Black Badge Cullinan (the 2,660 kg that
 * circulates is the STANDARD Cullinan's) and no 0–100 time or top speed for it
 * either; Lamborghini's own brochures give three different Urus weights, all
 * labelled "curb"; and the Mercedes release the GLS 600 panel cites carries no
 * weight at all.
 *
 * POWER IS IMPERIAL (bhp/SAE) throughout. That is the convention the dataset
 * already used on all fifteen cars and what the design was drawn against: the
 * Chiron's 1,479 is 1,103 kW in SAE horsepower, where the metric figure would
 * be 1,500 PS. Do not mix the two.
 *
 * Weight always carries its basis. Dry, DIN and EU differ by 100kg+ — EU mass
 * in running order includes a statutory 75 kg driver, DIN does not, and a dry
 * weight excludes fluids — so an unlabelled figure is not comparable.
 */
export interface CarSpecs {
  engine: string;
  power: string; // imperial hp (bhp/SAE)
  /** s, one decimal — or null where the maker states none for this exact car. */
  zeroToHundred: string | null;
  /** km/h — or null, as above. */
  topSpeed: string | null;
  drivetrain: string;
  weight: string | null;
  /** "base model" on the one-off conversions — nobody has measured those. */
  basis: "as built" | "base model";
  /** The manufacturer page each row must be read off. Required. */
  source: string;
  /** Why a figure is absent or qualified, when it is. Shown under the panel. */
  note?: string;
  /** Set only after a person read each row off `source`. Never inferred. */
  verified: boolean;
}

/** Numeric twins of the specs, for the performance bars. Kept in step — and
 *  null wherever the spec itself is null, so a bar reads as unavailable rather
 *  than being computed from a figure nobody published. */
export interface CarNum {
  hp: number;
  kg: number | null;
  acc: number | null; // 0–100 km/h, seconds
  vmax: number | null; // km/h
}

export interface CarImage {
  hero: { src: string; width: number; height: number };
  preview: { src: string; width: number; height: number };
  /** "actual" only alongside a `sources` entry proving it. None exists. */
  depicts: "model" | "actual";
  caption: string;
  alt: string;
}

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

  // ── Present on every current car; absent on the five no longer counted ──
  /** Route segment under /records/cars/. Fixed — it is the page's URL. */
  slug?: string;
  /** One upper-case mono line under the headline. Editorial, copied as written. */
  subtitle?: string;
  specs?: CarSpecs;
  num?: CarNum;
  /** Five hexes sampled from the illustration, dark → light. Decorative. */
  palette?: string[];
  /** The hero canvas. One size for all fifteen; the car is pasted at native
   *  scale, centred on its own silhouette. */
  heroSize?: [width: number, height: number];
  /**
   * Where this car MEETS THE FLOOR, as a fraction of the hero's height — the
   * point the page sits on the ring.
   *
   * Per car, and it has to be. Every render is a three-quarter view, so the
   * near wheel is 80-100px lower in frame than the far one, and how far apart
   * they sit depends on the car and the camera. Aligning on the LOWEST pixel
   * put the near wheel on the ring's centre line and left the whole car in the
   * ellipse's upper half, leaning out of the ring — which is what read as "not
   * sitting properly". This is the MIDPOINT of the two wheel contact lines, so
   * the ring passes behind the far wheels and in front of the near ones, the
   * way a circle drawn on the floor actually would.
   *
   * Measured from the asset, not typed: scripts/measure-ground-line.mjs.
   */
  groundLine?: number;
  /** Evidence a render depicts HIS car. Empty everywhere; see the header. */
  sources?: string[];
}

/** A current car with its page fields present — what the routes render. */
export interface GarageCar extends Car {
  slug: string;
  subtitle: string;
  specs: CarSpecs;
  num: CarNum;
  palette: string[];
  heroSize: [width: number, height: number];
  groundLine: number;
  image: CarImage;
  rank: number;
}

export const cars: Car[] = [
  {
    make: "Bugatti", model: "Chiron (Venuum Widebody)",
    // ₦9bn is the SOURCE figure here, not a conversion of the dollar — this is
    // the one car in the fleet reported in naira, so the dollar is derived from
    // it rather than the other way round. Converted at the rate on the day the
    // purchase was announced, 5 July 2026: ₦1,370.08/$ (₦1,369.62 on the 3rd,
    // ₦1,370.28 on the 6th). ₦9,000,000,000 ÷ 1,370.08 = $6,568,942, carried at
    // $6.57m — the naira figure is itself a round "reportedly", so more
    // precision than that would be false confidence. It was $6,190,000, which
    // implied ₦1,454/$ — a rate from no date near the announcement.
    valueUsd: 6_570_000, valueNaira: "₦9 billion",
    desc: "A one-of-one custom build by Dubai's Venuum, unveiled July 2026 and billed as the world's first widebody Chiron — baby blue over black with a French-tricolour stripe, a “7” roundel, and his name engraved on the rear spoiler. Reported as the most expensive car in West Africa, though neither Burna Boy nor Venuum has publicly confirmed the exact price — every outlet hedges it as \"reportedly\" ₦9 billion.",
    // He hasn't driven it yet — this is the official reveal video of the finished build.
    link: "https://www.youtube.com/watch?v=YNP3X59Yv6Y",
    linkLabel: "Watch the reveal",
    slug: "bugatti-chiron",
    subtitle: "ONE-OF-ONE WIDEBODY BY VENUUM — UNVEILED JULY 2026",
    specs: { engine: "8.0L quad-turbo W16", power: "1,479 hp", zeroToHundred: "2.4 s", topSpeed: "420 km/h", drivetrain: "AWD", weight: "1,995 kg (DIN)", basis: "base model", source: "https://www.bugatti.com/en/models/chiron", note: "Top speed is a limiter, not a measured maximum — 380 km/h in normal use, 420 km/h only with the Speed Key. Bugatti publishes no absolute weight: 1,995 kg is the DIN figure, which excludes the 75 kg driver the EU figure of 2,070 kg includes.", verified: true },
    num: { hp: 1479, kg: 1995, acc: 2.4, vmax: 420 },
    palette: ["#1968a9", "#5799ca", "#0a3c78", "#565757", "#262727"],
    heroSize: [898, 660],
    groundLine: 0.6659,
  },
  {
    make: "McLaren", model: "Senna (MSO Carbon Edition)",
    valueUsd: 2_000_000, valueNaira: "₦2.9 billion",
    desc: "A track-bred hypercar named after Ayrton Senna, finished in exposed carbon fibre (MSO). The one price in the whole collection that's confirmed rather than estimated — $2M is the figure Burna Boy himself posted when he bought it.",
    link: "https://autojosh.com/burna-boy-splashes-n3-2-billion-on-a-mclaren-senna-hypercar/",
    slug: "mclaren-senna",
    subtitle: "TRACK-BRED HYPERCAR IN EXPOSED MSO CARBON",
    // Spec check 16 Sep 2026: McLaren's own specification page listed "Dry
    // Weight (Lightest) 1,198kg" and "DIN Kerb Weight 1,309kg" (0-100 2.8 s,
    // 335 km/h, 800 PS / 789 bhp). McLaren has since removed the Senna from
    // its site — the live page and the press PDF this row used to cite both
    // 404 — so the source is the Wayback Machine's copy of that page, read the
    // same day. Switching to the DIN figure would line up with the Chiron,
    // Dawn and GT3 RS; that is an editorial call, so it is not made here.
    specs: { engine: "4.0L twin-turbo V8", power: "789 hp", zeroToHundred: "2.8 s", topSpeed: "335 km/h", drivetrain: "RWD", weight: "1,198 kg (dry)", basis: "base model", source: "https://web.archive.org/web/20241109044020/https://cars.mclaren.com/gb-en/ultimate-models/mclaren-senna/specification", note: "1,198 kg is the dry weight McLaren quotes for the lightest specification; McLaren also lists a DIN kerb weight of 1,309 kg. McLaren has since taken the Senna's page down — the source is an archived copy.", verified: true },
    num: { hp: 789, kg: 1198, acc: 2.8, vmax: 335 },
    palette: ["#e6e8eb", "#a5a6a7", "#868686", "#686868", "#373737"],
    heroSize: [898, 660],
    groundLine: 0.6568,
  },
  {
    make: "Ferrari", model: "SF90 Spider", year: 2025,
    valueUsd: 1_000_000, valueNaira: "₦1.46 billion",
    desc: "The open-top version of Ferrari's plug-in-hybrid V8 hypercar, with nearly 1,000 combined horsepower — reported as the only one of its kind in Africa.",
    slug: "ferrari-sf90-spider",
    subtitle: "OPEN-TOP PLUG-IN HYBRID V8 — REPORTEDLY AFRICA'S ONLY ONE",
    // Spec check 16 Sep 2026: ferrari.com's SF90 Spider page shows 1,000 cv and
    // the 0-100 tile but no weight; 1,670 kg dry is Ferrari's launch figure
    // (November 2020). Ferrari's launch article for it could not be reached
    // that day (its corporate URL now 404s). TODO: find Ferrari's own sheet
    // for the Spider and, if the 1,670 kg carries the "with optional
    // equipment" footnote its other sheets do, add the note the Purosangue has.
    specs: { engine: "4.0L twin-turbo V8 plug-in hybrid", power: "986 hp", zeroToHundred: "2.5 s", topSpeed: "340 km/h", drivetrain: "AWD", weight: "1,670 kg (dry)", basis: "as built", source: "https://www.ferrari.com/en-EN/auto/sf90-spider", verified: true },
    num: { hp: 986, kg: 1670, acc: 2.5, vmax: 340 },
    palette: ["#484749", "#686669", "#868587", "#f5f6f5", "#262629"],
    heroSize: [898, 660],
    groundLine: 0.6561,
  },
  {
    make: "Ferrari", model: "Purosangue", year: 2024,
    valueUsd: 1_000_000, valueNaira: "₦1.46 billion",
    desc: "Ferrari's first-ever four-door, four-seat model — the marque's debut in the luxury-SUV space, powered by a naturally-aspirated V12.",
    link: "https://autojosh.com/moment-burna-boy-picked-up-his-brand-new-ferrari-purosangue-suv-worth-n2-billion-at-lagos-dealership/",
    slug: "ferrari-purosangue",
    subtitle: "FERRARI'S FIRST FOUR-DOOR — A NATURALLY ASPIRATED V12",
    specs: { engine: "6.5L naturally aspirated V12", power: "715 hp", zeroToHundred: "3.3 s", topSpeed: ">310 km/h", drivetrain: "AWD", weight: "2,033 kg (dry)", basis: "as built", source: "https://www.ferrari.com/en-EN/auto/ferrari-purosangue", note: "Ferrari publishes dry weight only, and marks 2,033 kg as achieved with optional lightweight content. It is not a kerb weight.", verified: true },
    num: { hp: 715, kg: 2033, acc: 3.3, vmax: 310 },
    palette: ["#e6e6e8", "#949496", "#777677", "#575758", "#262627"],
    heroSize: [898, 660],
    groundLine: 0.6462,
  },
  {
    make: "Lamborghini", model: "Revuelto", year: 2025,
    valueUsd: 1_000_000, valueNaira: "₦1.46 billion",
    desc: "Lamborghini's first plug-in-hybrid V12 flagship — the successor to the Aventador, and reported as the first in Nigeria.",
    link: "https://autojosh.com/burna-boy-acquires-the-first-ever-lamborghini-revuelto-in-nigeria-worth-n1-billion/",
    slug: "lamborghini-revuelto",
    subtitle: "LAMBORGHINI'S FIRST PLUG-IN V12 FLAGSHIP — FIRST IN NIGERIA",
    specs: { engine: "6.5L naturally aspirated V12 plug-in hybrid", power: "1,001 hp", zeroToHundred: "2.5 s", topSpeed: ">350 km/h", drivetrain: "AWD", weight: "1,772 kg (dry)", basis: "as built", source: "https://www.lamborghini.com/en-en/models/revuelto", verified: true },
    num: { hp: 1001, kg: 1772, acc: 2.5, vmax: 350 },
    palette: ["#e5c806", "#f4e266", "#866a16", "#48433a", "#272625"],
    heroSize: [898, 660],
    groundLine: 0.6561,
  },
  {
    make: "Rolls-Royce", model: "Cullinan Black Badge", year: 2024,
    valueUsd: 1_000_000, valueNaira: "₦1.46 billion",
    desc: "Rolls-Royce's flagship ultra-luxury SUV in Black Badge trim — custom-ordered with a diamond-encrusted Spirit of Ecstasy bonnet ornament.",
    link: "https://autojosh.com/burna-boy-buys-customized-rolls-royce-cullinan-with-diamond-encrusted-bonnet-ornament/",
    slug: "rolls-royce-cullinan-black-badge",
    subtitle: "THE FLAGSHIP SUV IN BLACK BADGE TRIM — DIAMOND SPIRIT OF ECSTASY",
    // Spec check 16 Sep 2026: the cited release (Series II, 7 May 2024) states
    // the V12, 600PS and 900Nm; the 2019 launch release (T0302517EN) states the
    // same power and torque and "all-wheel drive and four-wheel steering". No
    // Rolls-Royce page found that day states a 0-100 km/h time or a top speed
    // for the Black Badge — the 4.9 s that sat here is a 0-60 mph figure from
    // third-party databases (KBB lists 5.0 s to 60 mph for the 2024 car), and
    // Rolls-Royce's sheet for the STANDARD Cullinan gives 5.2 s to 100 km/h.
    // So both rows are null, the way weight already was. Still open: whether
    // his 2024 car is Series I or Series II; power and torque are the same.
    specs: { engine: "6.75L twin-turbo V12", power: "592 hp", zeroToHundred: null, topSpeed: null, drivetrain: "AWD", weight: null, basis: "as built", source: "https://www.press.rolls-roycemotorcars.com/rolls-royce-motor-cars-pressclub/article/detail/T0441739EN/rolls-royce-black-badge-cullinan-series-ii:-the-alter-ego-evolved?language=en", note: "Rolls-Royce publishes no separate weight for the Black Badge (the 2,660 kg that circulates is the standard Cullinan’s DIN figure), and neither its launch release nor the Series II release states a 0–100 km/h time or a top speed for it. The 4.9 s that circulates is a 0–60 mph figure from third-party databases.", verified: true },
    num: { hp: 592, kg: null, acc: null, vmax: null },
    palette: ["#84888c", "#c4c8cb", "#646668", "#45484a", "#25272a"],
    heroSize: [898, 660],
    groundLine: 0.6371,
  },
  {
    make: "Lamborghini", model: "Aventador SVJ Roadster", year: 2022,
    valueUsd: 1_000_000, valueNaira: "₦1.46 billion",
    desc: "The most extreme Aventador — a 759-hp naturally-aspirated V12 in open-top Roadster form, built in limited numbers.",
    link: "https://www.youtube.com/watch?v=VUrDi8jbKkg",
    linkLabel: "Watch the delivery",
    slug: "lamborghini-aventador-svj-roadster",
    subtitle: "THE MOST EXTREME AVENTADOR — 759-HP V12, OPEN TOP",
    // Spec check 16 Sep 2026: the source page's TECHNICAL SPECIFICATIONS table
    // says 2.9 s; the ENGINE blurb lower on the same page says 2.98 s. The
    // table is the figure used. Do not "correct" this to 3.0 s from the blurb.
    specs: { engine: "6.5L naturally aspirated V12", power: "759 hp", zeroToHundred: "2.9 s", topSpeed: ">350 km/h", drivetrain: "AWD", weight: "1,575 kg (dry)", basis: "as built", source: "https://www.lamborghini.com/en-en/history/aventador-svj-roadster", verified: true },
    num: { hp: 759, kg: 1575, acc: 2.9, vmax: 350 },
    palette: ["#391a57", "#583a75", "#767676", "#474748", "#262728"],
    heroSize: [898, 660],
    groundLine: 0.653,
  },
  {
    make: "Rolls-Royce", model: "Dawn", year: 2019,
    valueUsd: 700_000, valueNaira: "₦1 billion",
    desc: "A four-seat luxury drop-top convertible, also fitted with a diamond Spirit of Ecstasy.",
    link: "https://autojosh.com/burna-boy-flaunts-rolls-royce-dawn/",
    slug: "rolls-royce-dawn",
    subtitle: "FOUR-SEAT DROP-TOP — DIAMOND SPIRIT OF ECSTASY",
    specs: { engine: "6.6L twin-turbo V12", power: "563 hp", zeroToHundred: "5.0 s", topSpeed: "250 km/h (governed)", drivetrain: "RWD", weight: "2,560 kg (unladen, DIN)", basis: "as built", source: "https://www.rolls-roycemotorcars.com/en_GB/showroom/dawn.html", verified: true },
    num: { hp: 563, kg: 2560, acc: 5.0, vmax: 250 },
    palette: ["#691c23", "#9b7778", "#6a6968", "#474746", "#272727"],
    heroSize: [898, 660],
    groundLine: 0.6371,
  },
  {
    make: "Ferrari", model: "812 GTS", year: 2023,
    valueUsd: 700_000, valueNaira: "₦1 billion",
    desc: "A front-mounted 6.5-litre V12 convertible — among the most powerful series-production Ferraris ever built.",
    link: "https://www.legit.ng/entertainment/celebrities/1570054-christmas-burna-boy-spurges-n700m-a-brand-ferrari-812-gts-video-frenzy/",
    slug: "ferrari-812-gts",
    subtitle: "FRONT-ENGINED 6.5-LITRE V12 CONVERTIBLE",
    // Spec check 16 Sep 2026: ferrari.com's 812 GTS page shows 800 cv, "<3.0
    // sec" and no weight. Ferrari's own launch article (9 Sep 2019, on
    // ferrari.com/corporate) gives 800 cv, 718 Nm, 0-100 under 3 s, 0-200 in
    // 8.3 s, 340 km/h, and the spider as 75 kg heavier than the berlinetta;
    // Ferrari's 812 Superfast sheet gives 1,525 kg dry, marked "with optional
    // equipment". 1,525 + 75 = 1,600 kg dry, on that basis — the note says so.
    // The 1,645 kg on a dealer's technical sheet is not a Ferrari page and is
    // not published here.
    specs: { engine: "6.5L naturally aspirated V12", power: "789 hp", zeroToHundred: "<3.0 s", topSpeed: "340 km/h", drivetrain: "RWD", weight: "1,600 kg (dry)", basis: "as built", source: "https://www.ferrari.com/en-EN/auto/812-gts", note: "Ferrari’s 812 GTS page lists no weight. Its launch article puts the spider 75 kg over the 812 Superfast, whose Ferrari sheet gives 1,525 kg dry with optional equipment — 1,600 kg on the same basis. It is not a kerb weight.", verified: true },
    num: { hp: 789, kg: 1600, acc: 3.0, vmax: 340 },
    palette: ["#585958", "#767776", "#989896", "#f7f7f6", "#252729"],
    heroSize: [898, 660],
    groundLine: 0.6568,
  },
  {
    make: "Porsche", model: "911 GT3 RS (Weissach)", year: 2025,
    valueUsd: 600_000, valueNaira: "₦900 million",
    desc: "A track-focused, road-legal flat-six with the Weissach pack — 518 hp, 0–100 km/h in 3.2 seconds. Delivered on Valentine's Day 2026; a Polanco dealership staffer put the price at ₦900 million.",
    link: "https://x.com/TheNationNews/status/2022971489272631326",
    linkLabel: "Watch on X",
    slug: "porsche-911-gt3-rs",
    subtitle: "TRACK-FOCUSED FLAT-SIX WITH THE WEISSACH PACK — DELIVERED FEBRUARY 2026",
    specs: { engine: "4.0L naturally aspirated flat-six", power: "518 hp", zeroToHundred: "3.2 s", topSpeed: "296 km/h", drivetrain: "RWD", weight: "1,450 kg (DIN)", basis: "as built", source: "https://newsroom.porsche.com/dam/jcr:1d390f77-93c3-49c0-89c7-634f5f02b26a/S22_3515_en.pdf", note: "1,450 kg is the DIN weight without the Weissach package; Porsche publishes no separate figure for the car with it.", verified: true },
    num: { hp: 518, kg: 1450, acc: 3.2, vmax: 296 },
    palette: ["#ba4849", "#571923", "#787877", "#585858", "#252627"],
    heroSize: [898, 660],
    groundLine: 0.647,
  },
  {
    make: "Lamborghini", model: "Urus (Novitec Edition)", year: 2022,
    valueUsd: 500_000, valueNaira: "₦730 million",
    desc: "Lamborghini's super-SUV, customised here to an aggressive Novitec widebody spec.",
    link: "https://autojosh.com/burna-boy-takes-his-lamborghini-urus-for-a-spin-moments-after-the-n200m-suv-arrived-in-nigeria/",
    slug: "lamborghini-urus",
    subtitle: "THE SUPER-SUV IN NOVITEC WIDEBODY SPEC",
    specs: { engine: "4.0L twin-turbo V8", power: "641 hp", zeroToHundred: "3.6 s", topSpeed: "305 km/h", drivetrain: "AWD", weight: null, basis: "base model", source: "https://www.lamborghini.com/en-en/history/urus", note: "Lamborghini’s own brochures give three different weights for the Urus, all labelled “curb”, so no single figure can be cited here.", verified: true },
    num: { hp: 641, kg: null, acc: 3.6, vmax: 305 },
    palette: ["#3d2352", "#836a94", "#99959b", "#696969", "#262627"],
    heroSize: [898, 660],
    groundLine: 0.6447,
  },
  {
    // OPEN: may be the previous-generation S650 — his own Instagram photo shows
    // an "S650" boot badge and a single-tone black car (handoff §5.6). Flagged,
    // not decided; the fix is this one row.
    make: "Mercedes-Maybach", model: "S680 4MATIC", year: 2022,
    valueUsd: 300_000, valueNaira: "₦440 million",
    desc: "The chauffeur-focused, range-topping S-Class — confirmed via his own Instagram caption (\"Got this too because everyone needs a Maybach\").",
    slug: "mercedes-maybach-s680",
    subtitle: "THE CHAUFFEUR-FOCUSED, RANGE-TOPPING S-CLASS",
    specs: { engine: "6.0L biturbo V12", power: "603 hp", zeroToHundred: "4.5 s", topSpeed: "250 km/h (limited)", drivetrain: "AWD", weight: "2,365 kg (EU, incl. driver)", basis: "as built", source: "https://media.mercedes-benz.com/models/mercedes-maybach-s-class", verified: true },
    num: { hp: 603, kg: 2365, acc: 4.5, vmax: 250 },
    palette: ["#6a8aa4", "#88a8c2", "#767879", "#55575a", "#262629"],
    heroSize: [898, 660],
    groundLine: 0.6379,
  },
  {
    make: "Mercedes-Maybach", model: "GLS 600", year: 2024,
    valueUsd: 250_000, valueNaira: "₦360 million",
    desc: "The flagship Maybach SUV — the \"Maybach Truck\" (a 2024 GLS 600, not the 2026 model some blogs list). He bought two of them, shown together in his own TikTok video: one he kept for himself (this one) and an identical unit gifted to his mother/manager Bose Ogulu. Only his own is counted here; hers is kept out of the fleet totals. Value is an estimate in line with the Maybach tier.",
    slug: "mercedes-maybach-gls-600",
    subtitle: "THE FLAGSHIP MAYBACH SUV — THE “MAYBACH TRUCK”",
    // Spec check 16 Sep 2026: the cited release ("The new Mercedes-Maybach GLS:
    // A new form of luxury", 21 Nov 2019) states 410 kW (558 PS) plus 16 kW of
    // EQ Boost, 4.9 s and 250 km/h — and NO weight. The 2,785 kg this panel
    // showed was the pre-facelift EU figure from elsewhere, so it is null now.
    // Still open, and it decides which sheet to read: the year and the note
    // disagreed. The facelifted GLS reached US dealers from mid-September 2023
    // and European dealers from late October 2023 (Mercedes release of 4 Apr
    // 2023), and Mercedes-Benz USA sold it as the "2024 Mercedes-Maybach GLS
    // 600" — so a 2024 model year is normally the facelift. Check his TikTok
    // video (the facelift's grille carries the Maybach name); if his is the
    // facelift, read its EU weight off Mercedes' facelift data sheet and fill
    // the row; if it is pre-facelift, the year is 2023 or earlier and `desc`
    // says "a 2024 GLS 600" too.
    specs: { engine: "4.0L biturbo V8 · 48V mild hybrid", power: "550 hp", zeroToHundred: "4.9 s", topSpeed: "250 km/h (limited)", drivetrain: "AWD", weight: null, basis: "as built", source: "https://media.mercedes-benz.com/article/1e4be408-e56e-4b4e-a7ff-1fcdcfc19bf5", note: "The Mercedes release this panel is read from carries no weight for the GLS 600, and whether this car is the 2023 facelift — about 30 kg heavier than the 2,785 kg pre-facelift figure — is unresolved, so none is shown.", verified: true },
    num: { hp: 550, kg: null, acc: 4.9, vmax: 250 },
    palette: ["#878687", "#d6d6d8", "#676767", "#474748", "#262628"],
    heroSize: [898, 660],
    groundLine: 0.6477,
  },
  {
    // OPEN: the August 2026 crane-lift photographs show a narrow-body targa
    // with no side strakes — a 328, not a Testarossa — while a Testarossa does
    // appear separately on a UK plate (handoff §5.6). Flagged, not decided.
    make: "Ferrari", model: "Testarossa", year: 1988,
    valueUsd: 120_000, valueNaira: "₦175 million",
    desc: "A wide-body, flat-12 icon of the 1980s, instantly recognisable by its side strakes — spotted in London and later brought to his Lagos garage (August 2025). A genuinely distinct car from his red 328 below. Some blogs valued it near ₦1.5bn; a 1988 Testarossa realistically sits far lower, around ₦175 million.",
    slug: "ferrari-testarossa",
    subtitle: "WIDE-BODY FLAT-12 ICON OF THE 1980s",
    specs: { engine: "4.9L flat-12", power: "385 hp", zeroToHundred: "5.8 s", topSpeed: "290 km/h", drivetrain: "RWD", weight: "1,506 kg (dry)", basis: "as built", source: "https://www.ferrari.com/en-EN/auto/testarossa", note: "Ferrari publishes one sheet for the whole 1984–1991 run; these are the European non-catalyst figures. Catalyst-market cars made less power.", verified: true },
    num: { hp: 385, kg: 1506, acc: 5.8, vmax: 290 },
    palette: ["#a72c2a", "#c57a76", "#89868a", "#3a444b", "#282528"],
    heroSize: [898, 660],
    groundLine: 0.6508,
  },
  {
    make: "Ferrari", model: "328 GTS", year: 1985,
    valueUsd: 100_000, valueNaira: "₦146 million",
    desc: "A 1980s classic — the final evolution of Ferrari's celebrated 308/328 line, in open-top GTS form. This is the Ferrari kept in his Lagos penthouse.",
    slug: "ferrari-328-gts",
    subtitle: "THE FINAL 308/328 — KEPT IN HIS LAGOS PENTHOUSE",
    // Spec check 16 Sep 2026: read off ferrari.com's 328 GTS page under its
    // tabs — Engine "199 kW (270 hp) at 7000 rpm", Bodywork "1273kg (dry)",
    // Performance "263km/h" and "0-100 KM/H 6.4sec". The "270 hp" is the
    // metric 270 cv (199 kW); 266 hp is the imperial figure. The tabs render
    // client-side, which is why an earlier read found only the top speed.
    specs: { engine: "3.2L V8", power: "266 hp", zeroToHundred: "6.4 s", topSpeed: "263 km/h", drivetrain: "RWD", weight: "1,273 kg (dry)", basis: "as built", source: "https://www.ferrari.com/en-EN/auto/328-gts", note: "Ferrari’s page gives the output as 270 bhp, but that is the metric figure (270 cv). In imperial horsepower it is 266 hp.", verified: true },
    num: { hp: 266, kg: 1273, acc: 6.4, vmax: 263 },
    palette: ["#981717", "#571619", "#d59998", "#494745", "#282627"],
    heroSize: [898, 660],
    groundLine: 0.6515,
  },

  // ===== No longer counted in the live collection — no slug, no image, no route =====
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

/** "₦1.46 billion" → 1_460_000_000. Only the two units the file uses. */
const nairaToNumber = (s: string): number | null => {
  const m = /₦\s*([\d.]+)\s*(billion|million)/i.exec(s);
  if (!m) return null;
  return Math.round(parseFloat(m[1]) * (m[2].toLowerCase() === "billion" ? 1e9 : 1e6));
};

/**
 * The conversion rates the note on /records/cars states, DERIVED from the rows
 * so a re-conversion cannot leave the sentence behind — which is what happened
 * when the Bugatti moved from an implied ₦1,454/$ to the announcement-day
 * ₦1,370.08/$ and the note went on saying "~₦1,455/$" for the whole fleet.
 * `typical` is the median ratio across the current cars priced in dollars
 * (the press converts at roughly one rate); `exceptions` lists any car whose
 * own ratio sits more than 3% away from it, with the rate its row implies.
 */
export const conversionNote = (() => {
  const ratios = currentCars
    .map((c) => ({ car: c, rate: (nairaToNumber(c.valueNaira) ?? 0) / c.valueUsd }))
    .filter((r) => r.rate > 0)
    .sort((a, b) => a.rate - b.rate);
  const typical = ratios[Math.floor(ratios.length / 2)]?.rate ?? 0;
  const exceptions = ratios
    .filter((r) => Math.abs(r.rate - typical) / typical > 0.03)
    .map((r) => ({ name: `${r.car.make} ${r.car.model.split(" (")[0]}`, naira: r.car.valueNaira, rate: r.rate }));
  const fmt = (n: number) => `₦${Math.round(n).toLocaleString("en-US")}/$`;
  return { typical: fmt(typical), exceptions: exceptions.map((e) => ({ ...e, rate: fmt(e.rate) })) };
})();
export const carCount = currentCars.length;

function formatUsd(n: number): string {
  return `$${(n / 1_000_000).toFixed(2)}M`;
}
export const totalValueFormatted = formatUsd(totalValueUsd);

// The single most valuable car, and its price already formatted. It exists so
// that prose about "his most expensive car" reads the figure instead of typing
// it: the FAQ answer restated the Chiron at $6.19M and was left behind the day
// the ₦9bn was re-converted at the announcement-day rate.
export const topCar = currentCars[0];
export const topCarValueFormatted = formatUsd(topCar.valueUsd);

// ── The garage: the current cars as pages ───────────────────────────────────
// Rank is the position in the value-sorted list, so it can never disagree with
// the index. The image block is derived from the slug: one hero and one 16:10
// tile per car in public/cars/, both captioned as an illustration of the model.
const hasPageFields = (c: Car): c is Car & Required<Pick<Car, "slug" | "subtitle" | "specs" | "num" | "palette" | "heroSize" | "groundLine">> =>
  Boolean(c.slug && c.subtitle && c.specs && c.num && c.palette && c.heroSize && c.groundLine);

export const garage: GarageCar[] = currentCars.filter(hasPageFields).map((c, i) => ({
  ...c,
  rank: i + 1,
  image: {
    // The hero is the car CUT OUT of its frame, on transparency, so it sits on
    // the page's own floor ring rather than on a rectangle of the render's
    // stage. Same canvas as the JPEG it came from — only the ground is gone —
    // so nothing about the page's scale or centring changes. The tile keeps
    // the framed JPEG: it is a card, and its ground never shows.
    hero: { src: `/cars/${c.slug}.png`, width: c.heroSize[0], height: c.heroSize[1] },
    preview: { src: `/cars/${c.slug}-tile.jpg`, width: 640, height: 400 },
    depicts: "model",
    caption: "Illustration",
    alt: `Illustration of a ${c.make} ${c.model}.`,
  },
}));

export const carSlugs = garage.map((c) => c.slug);
export const carBySlug = (slug: string) => garage.find((c) => c.slug === slug);
