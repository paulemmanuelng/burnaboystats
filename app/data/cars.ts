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
//   • 812 GTS: Ferrari's page DOES list the weight — "Dry weight 1600 kg"
//     under its client-rendered Technical Specifications tab (18 Sep 2026).
//     328 GTS: the 6.4 s, 263 km/h and 1,273 kg dry ARE on Ferrari's
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
// Only the McLaren Senna price is dealer-stated (Abuja Car Limited's June 2025
// sale post, ₦3.2bn / about $2M); the Bugatti, Cullinan and Aventador SVJ are
// high-confidence, the rest estimates.
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
// Tori.ng). The Ferrari SF90 Spider and the vintage Ferrari Testarossa have
// well-documented ownership (many independent posts/videos — the Testarossa
// confirmed as a genuinely distinct car from the 328 GTS below, via convergent
// independent labelling across two separate sightings) but no single dedicated
// price report; since the 13 Jul 2026 re-pricing their values, like every row
// except the Senna, Bugatti, Cullinan and SVJ, are fan/blog estimates — see
// the JULY 2026 UPDATE above. Naira figures are import-inclusive; USD figures
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
// 4 July 2026 reveal, and no credible report of any listed car being sold
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
 * either; Lamborghini's Urus brochures give weights on different bases for
 * later variants only; and the Mercedes release the GLS 600 panel cites carries no
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
  /** Model year where a body states it (the GLS 600); otherwise the year he
   *  acquired it — `yearIs` says which, and the page labels it accordingly. */
  year?: number;
  yearIs?: "model" | "acquired";
  valueUsd: number;
  valueNaira: string;
  desc: string;
  status?: "sold" | "unconfirmed"; // absent = currently in the collection
  /** "estimate" when the site, not a dated source, chose the figure — the
   *  labels say so instead of "reported". */
  valueBasis?: "reported" | "estimate";
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
  /** How many other current cars carry the same value — five sit at $1M, so
   *  "ranked 4 of 15" alone reads as a strict order that the data does not hold. */
  jointWith: number;
}

export const cars: Car[] = [
  {
    make: "Bugatti", model: "Chiron (Venuum Widebody)",
    // ₦9bn is the SOURCE figure here, not a conversion of the dollar — this is
    // the one car in the fleet reported in naira, so the dollar is derived from
    // it rather than the other way round. Converted at the CBN NFEM
    // weighted-average rate on Friday 3 July 2026, the last trading day before
    // the Saturday 4 July reveal (cbn.gov.ng/api/GetAllNFEM_Rates, read 18 Sep
    // 2026): ₦1,370.19/$ → ₦9,000,000,000 ÷ 1,370.19 = $6,568,428, carried at
    // $6.57m — the naira figure is itself a round "reportedly", so more
    // precision than that would be false confidence. (An earlier note cited
    // ₦1,370.08 "on 5 July", a Sunday with no rate; the figure is unchanged.)
    // It was $6,190,000, which implied ₦1,454/$ — a rate from no date near the
    // announcement.
    valueUsd: 6_570_000, valueNaira: "₦9 billion",
    desc: "A one-of-one custom build by Dubai's Venuum, unveiled 4 July 2026 as the Chiron VXX Special Edition and billed as the world's first widebody Chiron — baby blue over black with a French-tricolour stripe, a “7” roundel, and his name engraved on the rear spoiler. Reported as the most expensive car in West Africa — the ₦9 billion is the selling dealer's own figure (Abuja Car CEO Sadiq Aminu, in an Instagram story hours after the reveal, quoted by AutoJosh on 5 July 2026; one outlet notes he had first said about ₦2 billion). Neither Burna Boy nor Venuum has confirmed a price, and the press carries it as “reportedly”.",
    // The official reveal video (youtube.com/watch?v=YNP3X59Yv6Y) became
    // unavailable in Sep 2026, so no link — the source slot says how the list
    // is sourced instead.
    slug: "bugatti-chiron",
    subtitle: "ONE-OF-ONE WIDEBODY BY VENUUM — UNVEILED 4 JULY 2026",
    specs: { engine: "8.0L quad-turbo W16", power: "1,479 hp", zeroToHundred: "2.4 s", topSpeed: "420 km/h", drivetrain: "AWD", weight: "1,995 kg (DIN)", basis: "base model", source: "https://newsroom.bugatti.com/models/chiron", note: "Top speed is a limiter, not a measured maximum — 380 km/h in normal use, 420 km/h only with the Speed Key. 1,995 kg is Bugatti's DIN empty weight from its Chiron technical-specifications sheet (Nov 2021, in the newsroom's related documents), which also gives permanent all-wheel drive.", verified: true },
    num: { hp: 1479, kg: 1995, acc: 2.4, vmax: 420 },
    palette: ["#1968a9", "#5799ca", "#0a3c78", "#565757", "#262727"],
    heroSize: [898, 660],
    groundLine: 0.6659,
  },
  {
    make: "McLaren", model: "Senna (MSO Carbon Edition)",
    valueUsd: 2_000_000, valueNaira: "₦2.9 billion",
    desc: "A track-bred hypercar named after Ayrton Senna, finished in exposed carbon fibre (MSO). Delivered by Abuja Car Limited in June 2025, whose sale post priced it at ₦3.2 billion; press reports ran to ₦3.5 billion. The ₦2.9 billion here is the import-inclusive figure from the July 2026 fan breakdown.",
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
    specs: { engine: "4.0L twin-turbo V8", power: "789 hp", zeroToHundred: "2.8 s", topSpeed: "335 km/h", drivetrain: "RWD", weight: "1,198 kg (dry)", basis: "base model", source: "https://web.archive.org/web/20241109044020/https://cars.mclaren.com/gb-en/ultimate-models/mclaren-senna/specification", note: "1,198 kg is the dry weight McLaren quotes for the lightest specification; McLaren also lists a DIN kerb weight of 1,309 kg. McLaren has since taken the Senna's page down — the source is an archived copy. Drivetrain is not on that page; McLaren's own Senna performance page (archived 5 Dec 2024) states the gearbox delivers power to the rear wheels.", verified: true },
    num: { hp: 789, kg: 1198, acc: 2.8, vmax: 335 },
    palette: ["#e6e8eb", "#a5a6a7", "#868686", "#686868", "#373737"],
    heroSize: [898, 660],
    groundLine: 0.6568,
  },
  {
    make: "Ferrari", model: "SF90 Spider",
    valueUsd: 1_000_000, valueNaira: "₦1.46 billion",
    desc: "The open-top version of Ferrari's plug-in-hybrid V8 hypercar, with nearly 1,000 combined horsepower — reported as the only one of its kind in Africa.",
    slug: "ferrari-sf90-spider",
    subtitle: "OPEN-TOP PLUG-IN HYBRID V8 — REPORTEDLY AFRICA'S ONLY ONE",
    // Spec check 18 Sep 2026: ferrari.com's SF90 Spider technical sheet (browser
    // UA; plain curl gets 403) lists 1000 cv @ 7500 rpm, 0-100 2.5 s, 340 km/h,
    // 3990 cc V8, E4WD and Dry weight 1670 kg with an empty disclaimer field —
    // no optional-equipment footnote. Year: none stated by any body; removed.
    specs: { engine: "4.0L twin-turbo V8 plug-in hybrid", power: "986 hp", zeroToHundred: "2.5 s", topSpeed: "340 km/h", drivetrain: "AWD", weight: "1,670 kg (dry)", basis: "as built", source: "https://www.ferrari.com/en-EN/auto/sf90-spider", verified: true },
    num: { hp: 986, kg: 1670, acc: 2.5, vmax: 340 },
    palette: ["#484749", "#686669", "#868587", "#f5f6f5", "#262629"],
    heroSize: [898, 660],
    groundLine: 0.6561,
  },
  {
    // Bought new in December 2024 (AutoJosh 21/22 Dec 2024; Pulse Nov 2025).
    make: "Ferrari", model: "Purosangue", year: 2024, yearIs: "acquired",
    valueUsd: 1_000_000, valueNaira: "₦1.46 billion",
    desc: "Ferrari's first-ever four-door, four-seat model — the marque's debut in the luxury-SUV space, powered by a naturally-aspirated V12. The ₦1.46 billion here is the July 2026 fan-tracked estimate (buy price plus import duty); press put it higher — AutoJosh ₦1.5 billion (21 Dec 2024) and, in the dealership-pickup article linked below, about ₦2 billion (22 Dec 2024); Pulse Nigeria's November 2025 breakdown said ₦2.1 billion.",
    link: "https://autojosh.com/moment-burna-boy-picked-up-his-brand-new-ferrari-purosangue-suv-worth-n2-billion-at-lagos-dealership/",
    slug: "ferrari-purosangue",
    subtitle: "FERRARI'S FIRST FOUR-DOOR — A NATURALLY ASPIRATED V12",
    specs: { engine: "6.5L naturally aspirated V12", power: "715 hp", zeroToHundred: "3.3 s", topSpeed: ">310 km/h", drivetrain: "AWD", weight: "2,033 kg (dry)", basis: "as built", source: "https://www.ferrari.com/en-EN/auto/ferrari-purosangue", note: "Ferrari publishes dry weight only, and marks 2,033 kg as achieved with optional lightweight content. It is not a kerb weight. Its 725 cv (715 hp) is quoted with 98 RON petrol and includes 5 cv of ram-air effect.", verified: true },
    num: { hp: 715, kg: 2033, acc: 3.3, vmax: 310 },
    palette: ["#e6e6e8", "#949496", "#777677", "#575758", "#262627"],
    heroSize: [898, 660],
    groundLine: 0.6462,
  },
  {
    // Year: no body states the model year; removed (18 Sep 2026).
    make: "Lamborghini", model: "Revuelto",
    valueUsd: 1_000_000, valueNaira: "₦1.46 billion",
    desc: "Lamborghini's first plug-in-hybrid V12 flagship — the successor to the Aventador. Delivered by Lagos dealer Polanco Exotic Cars and reported as the first in Nigeria at about ₦1 billion by AutoJosh on 29 August 2025; the $1M here is the July 2026 fan re-pricing, import duties included.",
    link: "https://autojosh.com/burna-boy-acquires-the-first-ever-lamborghini-revuelto-in-nigeria-worth-n1-billion/",
    slug: "lamborghini-revuelto",
    subtitle: "LAMBORGHINI'S FIRST PLUG-IN V12 FLAGSHIP — REPORTED AS NIGERIA'S FIRST",
    specs: { engine: "6.5L naturally aspirated V12 plug-in hybrid", power: "1,001 hp", zeroToHundred: "2.5 s", topSpeed: ">350 km/h", drivetrain: "AWD", weight: "1,772 kg (dry)", basis: "as built", source: "https://www.lamborghini.com/en-en/models/revuelto-models/revuelto", note: "1,772 kg is Lamborghini's launch dry weight, which its page still carries in structured data; the page's own table now lists MY26 at 1,780 kg and MY27 at 1,795 kg, and the model year of his car is reported, not confirmed.", verified: true },
    num: { hp: 1001, kg: 1772, acc: 2.5, vmax: 350 },
    palette: ["#e5c806", "#f4e266", "#866a16", "#48433a", "#272625"],
    heroSize: [898, 660],
    groundLine: 0.6561,
  },
  {
    make: "Rolls-Royce", model: "Cullinan Black Badge", year: 2024, yearIs: "acquired",
    valueUsd: 1_000_000, valueNaira: "₦1.46 billion",
    desc: "Rolls-Royce's flagship ultra-luxury SUV, reported as Black Badge trim — customised with a diamond-encrusted Spirit of Ecstasy bonnet ornament, shown on his own Instagram story on 22 March 2024. AutoJosh's 23 March 2024 report gave no price — it bracketed a new Cullinan at ₦700m, the Black Badge at over ₦800m and 'over ₦1 billion' with the ornament; the $1,000,000 / ₦1.46bn here is the July 2026 import-inclusive fan-collector estimate.",
    link: "https://autojosh.com/burna-boy-buys-customized-rolls-royce-cullinan-with-diamond-encrusted-bonnet-ornament/",
    slug: "rolls-royce-cullinan-black-badge",
    subtitle: "THE FLAGSHIP SUV, REPORTED IN BLACK BADGE TRIM — DIAMOND SPIRIT OF ECSTASY",
    // Spec check 16 Sep 2026: the cited release (Series II, 7 May 2024) states
    // the V12, 600PS and 900Nm; the 2019 launch release (T0302517EN) states the
    // same power and torque and "all-wheel drive and four-wheel steering". No
    // Rolls-Royce page found that day states a 0-100 km/h time or a top speed
    // for the Black Badge — the 4.9 s that sat here is a 0-60 mph figure from
    // third-party databases (KBB lists 5.0 s to 60 mph for the 2024 car), and
    // Rolls-Royce's sheet for the STANDARD Cullinan gives 5.2 s to 100 km/h.
    // So both rows are null, the way weight already was. Series I — shown on
    // his Instagram story 22 Mar 2024, before the 7 May 2024 Series II
    // announcement (T0441739EN); power, torque and AWD are identical in both
    // releases, so the source is the Series I release.
    specs: { engine: "6.75L twin-turbo V12", power: "592 hp", zeroToHundred: null, topSpeed: null, drivetrain: "AWD", weight: null, basis: "as built", source: "https://www.press.rolls-roycemotorcars.com/rolls-royce-motor-cars-pressclub/article/detail/T0302517EN?language=en", note: "Rolls-Royce publishes no separate weight for the Black Badge (the 2,660 kg that circulates is the standard Cullinan’s DIN figure), and neither its launch release nor the Series II release states a 0–100 km/h time or a top speed for it. The 4.9 s that circulates is a 0–60 mph figure from third-party databases.", verified: true },
    num: { hp: 592, kg: null, acc: null, vmax: null },
    palette: ["#84888c", "#c4c8cb", "#646668", "#45484a", "#25272a"],
    heroSize: [898, 660],
    groundLine: 0.6371,
  },
  {
    // Announced Nov 2022 via his own story (quoted by AutoJosh, 12 Aug 2023);
    // delivered Jan 2023. The delivery video this row linked (YouTube
    // VUrDi8jbKkg) is unavailable since Sep 2026.
    make: "Lamborghini", model: "Aventador SVJ Roadster", year: 2022, yearIs: "acquired",
    valueUsd: 1_000_000, valueNaira: "₦1.46 billion",
    desc: "The most extreme Aventador — a 759-hp naturally-aspirated V12 in open-top Roadster form, built in limited numbers.",
    link: "https://autojosh.com/burna-boy-pull-up-in-1million-lamborghini-aventador-svj-at-lagos-restaurant/",
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
    // Spec check 18 Sep 2026: Rolls-Royce has withdrawn the Dawn and its
    // showroom page now redirects to the home page, so the source is the
    // Wayback copy of Rolls-Royce's own EU technical sheet (July 2019) — V12,
    // 563 bhp, 5.0 s, 250 km/h governed, 2,560 kg unladen DIN. Displacement,
    // the turbos and RWD are not on that sheet.
    make: "Rolls-Royce", model: "Dawn", year: 2019, yearIs: "acquired",
    valueUsd: 700_000, valueNaira: "₦1 billion",
    desc: "A four-seat luxury drop-top convertible — the red Dawn he showed off in July 2020, bought the previous Christmas as a gift to himself for a successful 2019. Reported at ₦200 million when he bought it (AutoJosh, July 2020) and ₦507.5m / $350,000 by Pulse Nigeria (November 2025); the ₦1 billion here is the July 2026 import-inclusive estimate the whole list is priced on.",
    link: "https://autojosh.com/burna-boy-flaunts-rolls-royce-dawn/",
    slug: "rolls-royce-dawn",
    subtitle: "FOUR-SEAT V12 DROP-TOP — A CHRISTMAS 2019 GIFT TO HIMSELF",
    specs: { engine: "6.6L twin-turbo V12", power: "563 hp", zeroToHundred: "5.0 s", topSpeed: "250 km/h (governed)", drivetrain: "RWD", weight: "2,560 kg (unladen, DIN)", basis: "as built", source: "https://web.archive.org/web/20190918010018/https://www.rolls-roycemotorcars.com/content/dam/rollsroyce-website/Brochures/2019/dawn/tech-spec/Dawn_Overview_Tech_Sheet_EU_July_19.pdf", note: "Rolls-Royce has withdrawn the Dawn and its showroom page now redirects to the home page, so the source is an archived copy of Rolls-Royce's own Dawn technical specification sheet (EU, July 2019), which states the V12, 563 bhp, 5.0 s to 100 km/h, 250 km/h governed and 2,560 kg unladen (DIN).", verified: true },
    num: { hp: 563, kg: 2560, acc: 5.0, vmax: 250 },
    palette: ["#691c23", "#9b7778", "#6a6968", "#474746", "#272727"],
    heroSize: [898, 660],
    groundLine: 0.6371,
  },
  {
    make: "Ferrari", model: "812 GTS", year: 2023, yearIs: "acquired",
    valueUsd: 700_000, valueNaira: "₦1 billion",
    desc: "A front-mounted 6.5-litre V12 convertible — among the most powerful series-production Ferraris ever built. Reported at over $700,000 (₦700 million) when it landed in Lagos in December 2023 (Legit.ng, 22 Dec 2023); the ₦1 billion is the July 2026 import-inclusive estimate from the collection's re-pricing pass.",
    link: "https://www.legit.ng/entertainment/celebrities/1570054-christmas-burna-boy-spurges-n700m-a-brand-ferrari-812-gts-video-frenzy/",
    slug: "ferrari-812-gts",
    subtitle: "FRONT-ENGINED 6.5-LITRE V12 CONVERTIBLE",
    // Spec check 18 Sep 2026: ferrari.com's 812 GTS page lists, under its
    // client-rendered Technical Specifications tab, "Dry weight 1600 kg",
    // 800 cv, 718 Nm, <3.0 sec, 8.3 sec to 200 and > 340 km/h. The 1,645 kg
    // on a dealer's technical sheet is not a Ferrari page and is not used.
    specs: { engine: "6.5L naturally aspirated V12", power: "789 hp", zeroToHundred: "<3.0 s", topSpeed: ">340 km/h", drivetrain: "RWD", weight: "1,600 kg (dry)", basis: "as built", source: "https://www.ferrari.com/en-EN/auto/812-gts", note: "Dry weight, as Ferrari's technical specifications list it. It is not a kerb weight.", verified: true },
    num: { hp: 789, kg: 1600, acc: 3.0, vmax: 340 },
    palette: ["#585958", "#767776", "#989896", "#f7f7f6", "#252729"],
    heroSize: [898, 660],
    groundLine: 0.6568,
  },
  {
    // Weissach pack: no dated source shows it (the delivery clip is at night);
    // dropped from the model name and prose 18 Sep 2026 until one does. Value:
    // the ₦900m is the July 2026 fan-collector estimate; AutoJosh (17 Feb
    // 2026) reported the car at over ₦1 billion. Year: delivered 14 Feb 2026.
    make: "Porsche", model: "911 GT3 RS", year: 2026, yearIs: "acquired",
    valueUsd: 600_000, valueNaira: "₦900 million",
    desc: "A track-focused, road-legal flat-six — 518 hp, 0–100 km/h in 3.2 seconds. Delivered on Valentine's Day 2026 by Polanco (the dealer plate is in the linked clip); the ₦900 million is a July 2026 fan-collector estimate — AutoJosh (17 February 2026) reported it at over ₦1 billion.",
    link: "https://x.com/TheNationNews/status/2022971489272631326",
    linkLabel: "Watch on X",
    slug: "porsche-911-gt3-rs",
    subtitle: "TRACK-FOCUSED FLAT-SIX — DELIVERED FEBRUARY 2026",
    specs: { engine: "4.0L naturally aspirated flat-six", power: "518 hp", zeroToHundred: "3.2 s", topSpeed: "296 km/h", drivetrain: "RWD", weight: "1,450 kg (DIN)", basis: "as built", source: "https://newsroom.porsche.com/dam/jcr:1d390f77-93c3-49c0-89c7-634f5f02b26a/S22_3515_en.pdf", note: "1,450 kg is the DIN weight without the Weissach package; Porsche publishes no separate figure for the car with it.", verified: true },
    num: { hp: 518, kg: 1450, acc: 3.2, vmax: 296 },
    palette: ["#ba4849", "#571923", "#787877", "#585858", "#252627"],
    heroSize: [898, 660],
    groundLine: 0.647,
  },
  {
    // Brochures read 18 Sep 2026: URUS S_DIGITAL_BROCHURE_WCAG_EN_2024.pdf
    // (2,350 kg curb) and URUS PERFORMANCE_DIGITAL_BROCHURE_WCAG_EN_2024.pdf
    // (2,157 kg dry) under lamborghini.com/original/DAM/…/gateway_urus/ —
    // different bases, later variants, not this 2022 car.
    make: "Lamborghini", model: "Urus (Novitec Edition)", year: 2022, yearIs: "acquired",
    valueUsd: 500_000, valueNaira: "₦730 million",
    desc: "Lamborghini's super-SUV, customised here to an aggressive Novitec widebody spec. AutoJosh put it at ₦200 million-plus when it arrived in Nigeria in March 2022 (the report linked below); the ₦730 million here is the July 2026 import-inclusive estimate from a fan collector's itemised breakdown, not a confirmed price.",
    link: "https://autojosh.com/burna-boy-takes-his-lamborghini-urus-for-a-spin-moments-after-the-n200m-suv-arrived-in-nigeria/",
    slug: "lamborghini-urus",
    subtitle: "THE SUPER-SUV IN NOVITEC WIDEBODY SPEC",
    specs: { engine: "4.0L twin-turbo V8", power: "641 hp", zeroToHundred: "3.6 s", topSpeed: "305 km/h", drivetrain: "AWD", weight: null, basis: "base model", source: "https://www.lamborghini.com/en-en/history/urus", note: "Lamborghini's Urus page publishes no weight. Its brochures give different figures on different bases — the Urus S's 2,350 kg is a curb weight, the Performante's 2,157 kg a dry weight — for variants that are not this 2022 car, so none is cited here.", verified: true },
    num: { hp: 641, kg: null, acc: 3.6, vmax: 305 },
    palette: ["#3d2352", "#836a94", "#99959b", "#696969", "#262627"],
    heroSize: [898, 660],
    groundLine: 0.6447,
  },
  {
    // OPEN: may be the previous-generation S650 — his own Instagram photo shows
    // an "S650" boot badge and a single-tone black car (handoff §5.6). Flagged,
    // not decided; the fix is this one row.
    // Value: $300,000 per the July 2026 fan-collector breakdown, matched by
    // Legit.ng (27 Aug 2026); the naira is that dollar at the list's rate.
    // Pulse Nigeria (26 Nov 2025) carries the car as an S650 at ₦330.6m
    // ($228,000). Presence and identity are Paul's pending call (18 Sep 2026).
    make: "Mercedes-Maybach", model: "S680 4MATIC", year: 2022,
    valueUsd: 300_000, valueNaira: "₦440 million",
    desc: "The chauffeur-focused, range-topping S-Class — announced by Burna Boy himself in an Instagram Story on 11 November 2022 (\"Got this too because everyone needs a Maybach\"), as reported by Pulse Nigeria; a Story carries no permalink, so none is linked.",
    slug: "mercedes-maybach-s680",
    subtitle: "THE CHAUFFEUR-FOCUSED, RANGE-TOPPING S-CLASS",
    specs: { engine: "6.0L biturbo V12", power: "603 hp", zeroToHundred: "4.5 s", topSpeed: "250 km/h (limited)", drivetrain: "AWD", weight: "2,365 kg (EU, incl. driver)", basis: "as built", source: "https://media.mercedes-benz.com/en/search/(lightbox:technical_data/ecf6fe3b-16d6-4c98-a78c-47cb39a58e0b)", note: "Read off Mercedes' technical data sheet for the S 680 Saloon (Z223), as of 22 January 2025 — the media site's model page sits behind a Mercedes me login, the data-sheet lightbox does not.", verified: true },
    num: { hp: 603, kg: 2365, acc: 4.5, vmax: 250 },
    palette: ["#6a8aa4", "#88a8c2", "#767879", "#55575a", "#262629"],
    heroSize: [898, 660],
    groundLine: 0.6379,
  },
  {
    make: "Mercedes-Maybach", model: "GLS 600", year: 2024,
    valueUsd: 250_000, valueNaira: "₦360 million",
    valueBasis: "estimate",
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
    specs: { engine: "4.0L biturbo V8 · 48V mild hybrid", power: "550 hp", zeroToHundred: "4.9 s", topSpeed: "250 km/h (limited)", drivetrain: "AWD", weight: null, basis: "as built", source: "https://media.mercedes-benz.com/article/1e4be408-e56e-4b4e-a7ff-1fcdcfc19bf5", note: "The Mercedes release this panel is read from carries no weight for the GLS 600, and whether this car is the 2023 facelift is unresolved, so none is shown.", verified: true },
    num: { hp: 550, kg: null, acc: 4.9, vmax: 250 },
    palette: ["#878687", "#d6d6d8", "#676767", "#474748", "#262628"],
    heroSize: [898, 660],
    groundLine: 0.6477,
  },
  {
    // Value: @turntupnaza's July 2026 breakdown; Legit.ng (27 Aug 2026) and
    // billionaires.africa (30 Aug 2026) repeat the same $120,000 / ₦175m —
    // downstream of this list, not independent. Year: not published anywhere;
    // the UK plate F20 TRS (an F prefix, Aug 1988–Jul 1989 issue, may not be
    // put on an older car) makes it 1988 or later — `year` stays empty until a
    // registration date is on record.
    // OPEN: the August 2025 crane-lift photographs (recirculated late Aug 2026) show a narrow-body targa
    // with no side strakes — a 328, not a Testarossa — while a Testarossa does
    // appear separately on a UK plate (handoff §5.6). Flagged, not decided.
    make: "Ferrari", model: "Testarossa",
    valueUsd: 120_000, valueNaira: "₦175 million",
    desc: "A wide-body, flat-12 icon of the 1980s, instantly recognisable by its side strakes — spotted in London on a UK plate; the Ferrari craned into his Lagos penthouse in August 2025 is reported as this Testarossa, though the lift footage has also been read as the 328 — a genuinely distinct car from his red 328 GTS. Some blogs valued it near ₦1.5bn; a top-fan breakdown of the fleet (July 2026) puts a late-1980s Testarossa around $120,000 — about ₦175 million — and this list follows it.",
    slug: "ferrari-testarossa",
    subtitle: "WIDE-BODY FLAT-12 ICON OF THE 1980s",
    specs: { engine: "4.9L flat-12", power: "385 hp", zeroToHundred: "5.8 s", topSpeed: "290 km/h", drivetrain: "RWD", weight: "1,506 kg (dry)", basis: "as built", source: "https://www.ferrari.com/en-EN/auto/testarossa", note: "Ferrari publishes one sheet for the whole 1984–1991 run and gives 287 kW (390 cv) for European cars; 385 hp is that figure in imperial horsepower. Ferrari's text gives US-market cars 380 at 5750 rpm.", verified: true },
    num: { hp: 385, kg: 1506, acc: 5.8, vmax: 290 },
    palette: ["#a72c2a", "#c57a76", "#89868a", "#3a444b", "#282528"],
    heroSize: [898, 660],
    groundLine: 0.6508,
  },
  {
    // year: none on record — 234Drive (13 Feb 2025) can only place it in the
    // 1985–1989 run; Ferrari's page title "(1985)" is the model's launch year,
    // not this car's, so `year` stays empty.
    make: "Ferrari", model: "328 GTS",
    valueUsd: 100_000, valueNaira: "₦146 million",
    desc: "A 1980s classic — the final evolution of Ferrari's celebrated 308/328 line, in open-top GTS form. Reported as the Ferrari craned into his 26th-floor Ikoyi penthouse in August 2025 — the press is split between this car and the Testarossa (see that car's note), and Burna Boy has not named the model himself.",
    slug: "ferrari-328-gts",
    subtitle: "THE FINAL 308/328 — REPORTEDLY HIS PENTHOUSE FERRARI",
    link: "https://x.com/ThatOjoBoy/status/2091566373323350385",
    linkLabel: "Crane-lift photos, 23 Aug 2026",
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
 * ₦1,370.19/$ and the note went on saying "~₦1,455/$" for the whole fleet.
 * `typical` is the median ratio across the current cars priced in dollars
 * (the press converts at roughly one rate); `exceptions` lists any car whose
 * own ratio sits more than 3% away from it, with the rate its row implies.
 */
/** The last full ownership/value sweep of the list — the index and every car
 *  page print it; it was typed on both (sixteen copies) until 18 Sep 2026.
 *  Move it only when a fresh ownership sweep is actually done. */
export const CARS_LAST_SWEEP = "July 2026";
/** The last pass that read every spec panel at its maker (the header above
 *  dates the third pass). Bump by hand on the next spec pass. */
export const CARS_SPECS_CHECKED = "16 September 2026";

/** The word the value labels use — "reported" for a dated source, "estimate"
 *  where the site chose the figure (the GLS 600 has no report behind it). */
export const valueWord = (c: Pick<Car, "valueBasis">) => (c.valueBasis === "estimate" ? "estimate" : "reported");

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
  jointWith: currentCars.filter((o) => o.valueUsd === c.valueUsd).length - 1,
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
