import { COUNTRIES as BURNA_COUNTRIES } from "./certifications";
import { CHART_COUNTRIES } from "./charts";

// ─────────────────────────────────────────────────────────────────────────────
//  THE AFROBEATS BOARD — /afrobeats
//
//  Burna Boy's peers, counted by the SAME rules this site applies to him, so
//  the numbers are directly comparable rather than borrowed from fan tallies:
//  one plaque per title per country at its CURRENT tier (a 5x Platinum is one
//  plaque, not five); lead AND featured artist credits both count; writer or
//  producer credits do not. Chart peaks follow charts.ts: one entry per country
//  on its principal national chart, no platform or genre charts, airplay only
//  where a country publishes nothing else.
//
//  Every figure was read in an issuing body's own register during the 15-17 Aug
//  2026 sweeps. `chartPublished` carries the sweep's verified headline; the
//  `charts` rows are the machine-extracted detail, which for two artists covers
//  slightly fewer entries than the headline (the rest sit in prose in the source
//  documents). Tests assert the detail never EXCEEDS the headline — over-count
//  means a parser bug, under-count means incomplete extraction.
//
//  COVER ART: the release's own artwork, looked up by title on Deezer's open
//  API (iTunes rate-limited out mid-sweep). Decoration, not a published figure
//  — two titles carry none, and the row draws a placeholder rather than
//  borrowing another release's art.
//
//  TITLES: stored as the release is named. The sweeps' working annotations
//  ("(new)", "(2021)", "(register-only find)") are stripped; a test keeps them out.
//
//  CADENCE: reviewed WEEKLY. Burna Boy's own pages stay daily.
// ─────────────────────────────────────────────────────────────────────────────

export type Tier = "Diamond" | "Platinum" | "Gold" | "Silver";

export interface AfroCert { c: string; level: Tier; x?: number }
export interface AfroPeak { c: string; peak: number }

export interface AfroRelease {
  title: string;
  kind: "Albums" | "Lead singles" | "Featured appearances";
  cover?: string;
  certs: AfroCert[];
}
export interface AfroChartRelease {
  title: string;
  kind: "Albums" | "Singles";
  cover?: string;
  entries: AfroPeak[];
}

export interface AfroArtist {
  slug: string;
  name: string;
  fullName: string;
  country: string;
  flag: string;
  hook: string;
  spotifyId: string;
  image: string;
  verifiedOn: string;
  /** false while the register sweep is still scheduled — the page says so. */
  swept: boolean;
  releases: AfroRelease[];
  charts: AfroChartRelease[];
  chartPublished?: { entries: number; territories: number; no1s: number };
}

export const AFROBEATS_VERIFIED_ON = "2026-08-17";

export const afrobeatsArtists: AfroArtist[] = [
  {
    slug: "wizkid",
    name: "Wizkid",
    fullName: "Ayodeji Ibrahim Balogun",
    country: "Nigeria",
    flag: "🇳🇬",
    hook: "Afrobeats' first global crossover — and the genre's most-certified artist after Burna Boy.",
    spotifyId: "3tVQdUvClmAT7URs9V3rsp",
    image: "https://i.scdn.co/image/ab6761610000e5ebe6ef803356b45ee5a9fa7a8a",
    verifiedOn: AFROBEATS_VERIFIED_ON,
    swept: true,
    chartPublished: { entries: 154, territories: 32, no1s: 24 },
    releases: [
      { title: "Made in Lagos", kind: "Albums", cover: "https://cdn-images.dzcdn.net/images/cover/ee712ec0084d50159ae6564de833ce12/500x500-000000-80-0-0.jpg", certs: [{ c: "US", level: "Gold" }, { c: "UK", level: "Gold" }, { c: "CA", level: "Gold" }, { c: "NZ", level: "Gold" }, { c: "CH", level: "Gold" }, { c: "NL", level: "Gold" }, { c: "NG", level: "Gold" }] },
      { title: "Essence", kind: "Lead singles", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/b0/09/8e/b0098ed0-ef53-f2b5-386a-c8e6181f3c8a/886448775256.jpg/300x300bb.jpg", certs: [{ c: "ZA", level: "Platinum", x: 7 }, { c: "US", level: "Platinum", x: 5 }, { c: "CA", level: "Platinum", x: 3 }, { c: "NZ", level: "Platinum", x: 3 }, { c: "NG", level: "Platinum", x: 2 }, { c: "UK", level: "Platinum" }, { c: "CH", level: "Platinum" }, { c: "FR", level: "Gold" }] },
      { title: "Come Closer", kind: "Lead singles", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/e2/dc/1c/e2dc1cb5-d0cf-04e0-0864-98b8f3e7affd/886446561912.jpg/300x300bb.jpg", certs: [{ c: "ZA", level: "Platinum", x: 3 }, { c: "CA", level: "Platinum", x: 2 }, { c: "UK", level: "Platinum" }, { c: "US", level: "Platinum" }, { c: "FR", level: "Gold" }, { c: "CH", level: "Gold" }, { c: "NG", level: "Silver" }] },
      { title: "Ginger", kind: "Lead singles", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/70/8b/e1/708be1f6-4054-ff1a-e946-887ecfbdea81/859712433503_cover.jpg/300x300bb.jpg", certs: [{ c: "ZA", level: "Platinum", x: 2 }, { c: "NG", level: "Platinum" }, { c: "US", level: "Gold" }, { c: "CA", level: "Gold" }, { c: "CH", level: "Gold" }, { c: "UK", level: "Silver" }] },
      { title: "Joro", kind: "Lead singles", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music113/v4/20/05/17/200517ab-c3a3-b833-74b3-9bb3399c780c/886447834886.jpg/300x300bb.jpg", certs: [{ c: "FR", level: "Platinum" }, { c: "CH", level: "Platinum" }, { c: "US", level: "Gold" }, { c: "CA", level: "Gold" }, { c: "UK", level: "Silver" }] },
      { title: "Mood", kind: "Lead singles", cover: "https://cdn-images.dzcdn.net/images/cover/ad33274548de3455303618bb650b6d86/500x500-000000-80-0-0.jpg", certs: [{ c: "NG", level: "Platinum" }, { c: "US", level: "Gold" }, { c: "CA", level: "Gold" }, { c: "UK", level: "Silver" }] },
      { title: "Energy", kind: "Lead singles", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/6f/e8/33/6fe83312-989e-c6ef-2cf0-e79f1c573f64/196871664691.jpg/300x300bb.jpg", certs: [{ c: "UK", level: "Platinum" }, { c: "NZ", level: "Gold" }, { c: "NG", level: "Silver" }] },
      { title: "Smile", kind: "Lead singles", cover: "https://cdn-images.dzcdn.net/images/cover/ee712ec0084d50159ae6564de833ce12/500x500-000000-80-0-0.jpg", certs: [{ c: "ZA", level: "Platinum" }, { c: "NG", level: "Silver" }] },
      { title: "2 Sugar", kind: "Lead singles", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/a9/3f/f5/a93ff5e8-5c00-607a-4851-3aae9b356a64/196589495877.jpg/300x300bb.jpg", certs: [{ c: "NG", level: "Platinum" }, { c: "CA", level: "Gold" }] },
      { title: "Longtime", kind: "Lead singles", cover: "https://cdn-images.dzcdn.net/images/cover/ee712ec0084d50159ae6564de833ce12/500x500-000000-80-0-0.jpg", certs: [{ c: "ZA", level: "Platinum" }, { c: "NG", level: "Silver" }] },
      { title: "True Love", kind: "Lead singles", cover: "https://cdn-images.dzcdn.net/images/cover/ee712ec0084d50159ae6564de833ce12/500x500-000000-80-0-0.jpg", certs: [{ c: "ZA", level: "Platinum" }, { c: "NG", level: "Silver" }] },
      { title: "No Stress", kind: "Lead singles", cover: "https://cdn-images.dzcdn.net/images/cover/ee712ec0084d50159ae6564de833ce12/500x500-000000-80-0-0.jpg", certs: [{ c: "ZA", level: "Platinum" }, { c: "NG", level: "Gold" }] },
      { title: "Ojuelegba", kind: "Lead singles", cover: "https://cdn-images.dzcdn.net/images/cover/9be0538ebbb9c6fd3dcb74844e7e2e2a/500x500-000000-80-0-0.jpg", certs: [{ c: "NG", level: "Gold" }, { c: "UK", level: "Silver" }] },
      { title: "Reckless", kind: "Lead singles", cover: "https://cdn-images.dzcdn.net/images/cover/ee712ec0084d50159ae6564de833ce12/500x500-000000-80-0-0.jpg", certs: [{ c: "ZA", level: "Gold" }, { c: "NG", level: "Gold" }] },
      { title: "Mighty Wine", kind: "Lead singles", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/b0/09/8e/b0098ed0-ef53-f2b5-386a-c8e6181f3c8a/886448775256.jpg/300x300bb.jpg", certs: [{ c: "ZA", level: "Gold" }, { c: "NG", level: "Silver" }] },
      { title: "Roma", kind: "Lead singles", cover: "https://cdn-images.dzcdn.net/images/cover/ee712ec0084d50159ae6564de833ce12/500x500-000000-80-0-0.jpg", certs: [{ c: "ZA", level: "Gold" }, { c: "NG", level: "Silver" }] },
      { title: "Sweet One", kind: "Lead singles", cover: "https://cdn-images.dzcdn.net/images/cover/ee712ec0084d50159ae6564de833ce12/500x500-000000-80-0-0.jpg", certs: [{ c: "ZA", level: "Gold" }, { c: "NG", level: "Silver" }] },
      { title: "Kese", kind: "Lead singles", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/82/60/3b/82603b3c-1aad-6e37-3b81-d5451046accf/196872637434.jpg/300x300bb.jpg", certs: [{ c: "NG", level: "Platinum", x: 3 }] },
      { title: "Bad Girl", kind: "Lead singles", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/ad/12/b9/ad12b9d8-e896-5e36-6ef9-cec448a586e0/196872578911.jpg/300x300bb.jpg", certs: [{ c: "NG", level: "Platinum", x: 2 }] },
      { title: "IDK", kind: "Lead singles", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/6f/e8/33/6fe83312-989e-c6ef-2cf0-e79f1c573f64/196871664691.jpg/300x300bb.jpg", certs: [{ c: "NG", level: "Platinum", x: 2 }] },
      { title: "Fever", kind: "Lead singles", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/19/df/4d/19df4d68-c369-f263-1485-de2e955f7293/886447346778.jpg/300x300bb.jpg", certs: [{ c: "ZA", level: "Platinum" }] },
      { title: "Piece of My Heart", kind: "Lead singles", cover: "https://cdn-images.dzcdn.net/images/cover/23dec0c82a7bb91327d048b0019004bd/500x500-000000-80-0-0.jpg", certs: [{ c: "NG", level: "Platinum" }] },
      { title: "Bad To Me", kind: "Lead singles", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/92/b6/d2/92b6d228-245b-8525-4801-bdb630c2be67/196589446022.jpg/300x300bb.jpg", certs: [{ c: "NG", level: "Platinum" }] },
      { title: "Jogodo", kind: "Lead singles", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/f0/d9/fb/f0d9fbd9-4fb2-0b9f-4178-97c2b865f22d/199316437584_cover.jpg/300x300bb.jpg", certs: [{ c: "NG", level: "Platinum" }] },
      { title: "Money & Love", kind: "Lead singles", cover: "https://cdn-images.dzcdn.net/images/cover/e4286ac8a38829b6cf5d225c311bccf7/500x500-000000-80-0-0.jpg", certs: [{ c: "NG", level: "Platinum" }] },
      { title: "Slow", kind: "Lead singles", cover: "https://cdn-images.dzcdn.net/images/cover/2538836fe7ba780c5a3a4c04aef4fac5/500x500-000000-80-0-0.jpg", certs: [{ c: "NG", level: "Platinum" }] },
      { title: "Troubled Mind", kind: "Lead singles", cover: "https://cdn-images.dzcdn.net/images/cover/2538836fe7ba780c5a3a4c04aef4fac5/500x500-000000-80-0-0.jpg", certs: [{ c: "NG", level: "Platinum" }] },
      { title: "A Million Blessings", kind: "Lead singles", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/ad/12/b9/ad12b9d8-e896-5e36-6ef9-cec448a586e0/196872578911.jpg/300x300bb.jpg", certs: [{ c: "NG", level: "Platinum" }] },
      { title: "Gyrate", kind: "Lead singles", cover: "https://cdn-images.dzcdn.net/images/cover/ee712ec0084d50159ae6564de833ce12/500x500-000000-80-0-0.jpg", certs: [{ c: "ZA", level: "Gold" }] },
      { title: "Diamonds", kind: "Lead singles", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/6f/e8/33/6fe83312-989e-c6ef-2cf0-e79f1c573f64/196871664691.jpg/300x300bb.jpg", certs: [{ c: "NG", level: "Gold" }] },
      { title: "Alaye (w/ Asake)", kind: "Lead singles", cover: "https://cdn-images.dzcdn.net/images/cover/a4c216574fd4d381c73a4df2f512f599/500x500-000000-80-0-0.jpg", certs: [{ c: "NG", level: "Gold" }] },
      { title: "Anoti", kind: "Lead singles", cover: "https://cdn-images.dzcdn.net/images/cover/0cf7716afce193c03eae344eaaa41ca7/500x500-000000-80-0-0.jpg", certs: [{ c: "NG", level: "Gold" }] },
      { title: "Après Minuit (ft. Tiakola)", kind: "Lead singles", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/ad/12/b9/ad12b9d8-e896-5e36-6ef9-cec448a586e0/196872578911.jpg/300x300bb.jpg", certs: [{ c: "NG", level: "Gold" }] },
      { title: "Bad For You (ft. Jazmine Sullivan)", kind: "Lead singles", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/ad/12/b9/ad12b9d8-e896-5e36-6ef9-cec448a586e0/196872578911.jpg/300x300bb.jpg", certs: [{ c: "NG", level: "Gold" }] },
      { title: "Bend", kind: "Lead singles", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/a9/3f/f5/a93ff5e8-5c00-607a-4851-3aae9b356a64/196589495877.jpg/300x300bb.jpg", certs: [{ c: "NG", level: "Gold" }] },
      { title: "Blessed (ft. Damian Marley)", kind: "Lead singles", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/b0/09/8e/b0098ed0-ef53-f2b5-386a-c8e6181f3c8a/886448775256.jpg/300x300bb.jpg", certs: [{ c: "NG", level: "Gold" }] },
      { title: "Break Me Down", kind: "Lead singles", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/ad/12/b9/ad12b9d8-e896-5e36-6ef9-cec448a586e0/196872578911.jpg/300x300bb.jpg", certs: [{ c: "NG", level: "Gold" }] },
      { title: "Karamo", kind: "Lead singles", cover: "https://cdn-images.dzcdn.net/images/cover/2538836fe7ba780c5a3a4c04aef4fac5/500x500-000000-80-0-0.jpg", certs: [{ c: "NG", level: "Gold" }] },
      { title: "Ololufé (ft. Wande Coal)", kind: "Lead singles", cover: "https://cdn-images.dzcdn.net/images/cover/24a4bbe1d6d25c216426e42587156a04/500x500-000000-80-0-0.jpg", certs: [{ c: "NG", level: "Gold" }] },
      { title: "Pray", kind: "Lead singles", cover: "https://cdn-images.dzcdn.net/images/cover/35938478edf094a061570298f1765f0f/500x500-000000-80-0-0.jpg", certs: [{ c: "NG", level: "Gold" }] },
      { title: "Time", kind: "Lead singles", cover: "https://cdn-images.dzcdn.net/images/cover/a0d63d53ced610d71414e99616a4c47c/500x500-000000-80-0-0.jpg", certs: [{ c: "NG", level: "Gold" }] },
      { title: "Turbulence (w/ Asake)", kind: "Lead singles", cover: "https://cdn-images.dzcdn.net/images/cover/a4c216574fd4d381c73a4df2f512f599/500x500-000000-80-0-0.jpg", certs: [{ c: "NG", level: "Gold" }] },
      { title: "Wow (ft. Skepta & Naira Marley)", kind: "Lead singles", cover: "https://cdn-images.dzcdn.net/images/cover/7d77b7f20e02f5d0d362f3c737d2ae50/500x500-000000-80-0-0.jpg", certs: [{ c: "NG", level: "Gold" }] },
      { title: "Balance", kind: "Lead singles", cover: "https://cdn-images.dzcdn.net/images/cover/e4286ac8a38829b6cf5d225c311bccf7/500x500-000000-80-0-0.jpg", certs: [{ c: "NG", level: "Silver" }] },
      { title: "Don't Care", kind: "Lead singles", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/ad/12/b9/ad12b9d8-e896-5e36-6ef9-cec448a586e0/196872578911.jpg/300x300bb.jpg", certs: [{ c: "NG", level: "Silver" }] },
      { title: "Everyday", kind: "Lead singles", cover: "https://cdn-images.dzcdn.net/images/cover/e4286ac8a38829b6cf5d225c311bccf7/500x500-000000-80-0-0.jpg", certs: [{ c: "NG", level: "Silver" }] },
      { title: "Flower Pads", kind: "Lead singles", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/a9/3f/f5/a93ff5e8-5c00-607a-4851-3aae9b356a64/196589495877.jpg/300x300bb.jpg", certs: [{ c: "NG", level: "Silver" }] },
      { title: "Frames (Who's Gonna Know)", kind: "Lead singles", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/a9/3f/f5/a93ff5e8-5c00-607a-4851-3aae9b356a64/196589495877.jpg/300x300bb.jpg", certs: [{ c: "NG", level: "Silver" }] },
      { title: "Iskolodo (w/ Asake)", kind: "Lead singles", cover: "https://cdn-images.dzcdn.net/images/cover/a4c216574fd4d381c73a4df2f512f599/500x500-000000-80-0-0.jpg", certs: [{ c: "NG", level: "Silver" }] },
      { title: "Lose", kind: "Lead singles", cover: "https://cdn-images.dzcdn.net/images/cover/2538836fe7ba780c5a3a4c04aef4fac5/500x500-000000-80-0-0.jpg", certs: [{ c: "NG", level: "Silver" }] },
      { title: "Love My Baby", kind: "Lead singles", cover: "https://cdn-images.dzcdn.net/images/cover/ee5775a4038904759fa2911ca20e4913/500x500-000000-80-0-0.jpg", certs: [{ c: "NG", level: "Silver" }] },
      { title: "Piece of Me (ft. Ella Mai)", kind: "Lead singles", cover: "https://cdn-images.dzcdn.net/images/cover/ee712ec0084d50159ae6564de833ce12/500x500-000000-80-0-0.jpg", certs: [{ c: "NG", level: "Silver" }] },
      { title: "Soji", kind: "Lead singles", cover: "https://cdn-images.dzcdn.net/images/cover/2538836fe7ba780c5a3a4c04aef4fac5/500x500-000000-80-0-0.jpg", certs: [{ c: "NG", level: "Silver" }] },
      { title: "One Dance", kind: "Featured appearances", cover: "https://cdn-images.dzcdn.net/images/cover/56bdb7a86a27fadb96332c0c8f1b8e81/500x500-000000-80-0-0.jpg", certs: [{ c: "US", level: "Diamond" }, { c: "CA", level: "Diamond" }, { c: "DE", level: "Diamond" }, { c: "FR", level: "Diamond" }, { c: "BR", level: "Diamond" }, { c: "AU", level: "Platinum", x: 17 }, { c: "NZ", level: "Platinum", x: 10 }, { c: "UK", level: "Platinum", x: 8 }, { c: "PT", level: "Platinum", x: 8 }, { c: "SE", level: "Platinum", x: 7 }, { c: "IT", level: "Platinum", x: 6 }, { c: "ES", level: "Platinum", x: 5 }, { c: "DK", level: "Platinum", x: 5 }, { c: "MX", level: "Platinum", x: 4 }, { c: "BE", level: "Platinum", x: 3 }, { c: "PL", level: "Platinum", x: 3 }, { c: "GR", level: "Platinum", x: 3 }] },
      { title: "Call Me Every Day", kind: "Featured appearances", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/45/79/f4/4579f47a-007d-eb5e-2227-00d0c1d5cf02/196589253460.jpg/300x300bb.jpg", certs: [{ c: "US", level: "Platinum" }, { c: "NG", level: "Gold" }, { c: "CA", level: "Gold" }, { c: "CH", level: "Gold" }, { c: "NZ", level: "Gold" }, { c: "UK", level: "Silver" }] },
      { title: "Brown Skin Girl", kind: "Featured appearances", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/aa/20/73/aa207387-444f-b04d-9b7e-7ea6c687c15e/886447863329.jpg/300x300bb.jpg", certs: [{ c: "US", level: "Gold" }, { c: "AU", level: "Gold" }, { c: "CA", level: "Gold" }, { c: "NZ", level: "Gold" }, { c: "UK", level: "Silver" }] },
      { title: "Soco", kind: "Featured appearances", cover: "https://cdn-images.dzcdn.net/images/cover/38518ed00d7ec413b318419d7b0fbec1/500x500-000000-80-0-0.jpg", certs: [{ c: "US", level: "Gold" }, { c: "CA", level: "Gold" }, { c: "UK", level: "Silver" }] },
      { title: "Bella", kind: "Featured appearances", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/62/56/a9/6256a949-210c-a69d-cdc6-9328622fc068/00602567919032.rgb.jpg/300x300bb.jpg", certs: [{ c: "FR", level: "Diamond" }] },
      { title: "G Love", kind: "Featured appearances", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/9e/a9/4e/9ea94e1e-4660-1d37-6296-389df09e4085/888915614945_cover.jpg/300x300bb.jpg", certs: [{ c: "UK", level: "Gold" }] },
      { title: "Mamacita", kind: "Featured appearances", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/d7/33/bb/d733bb70-e88f-cd73-2466-f8867f1e522b/0235.jpg/300x300bb.jpg", certs: [{ c: "UK", level: "Silver" }] },
      { title: "I Like", kind: "Featured appearances", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music113/v4/e0/b5/1f/e0b51fd9-77ff-5696-26c7-f2a47cd7d9d0/190295392284.jpg/300x300bb.jpg", certs: [{ c: "UK", level: "Silver" }] },
      { title: "Boom", kind: "Featured appearances", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music113/v4/20/05/17/200517ab-c3a3-b833-74b3-9bb3399c780c/886447834886.jpg/300x300bb.jpg", certs: [{ c: "FR", level: "Gold" }] },
      { title: "Can't Believe", kind: "Featured appearances", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/85/55/bc/8555bcd7-ed37-030e-2d8d-96d5c04a5514/886449132409.jpg/300x300bb.jpg", certs: [{ c: "CA", level: "Gold" }] },
      { title: "Borrowed Love", kind: "Featured appearances", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/b1/e3/27/b1e3271b-b8cb-7d80-99e5-0ddd9d6e632e/00602577303210.rgb.jpg/300x300bb.jpg", certs: [{ c: "CA", level: "Gold" }] },
      { title: "Checklist", kind: "Featured appearances", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/e3/6a/7f/e36a7feb-468a-d7d0-4431-97bc75f6455e/886447381151.jpg/300x300bb.jpg", certs: [{ c: "BR", level: "Gold" }] },
      { title: "MMS", kind: "Featured appearances", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/38/34/59/383459da-ba6a-4bee-67df-7de269764383/197342707992_cover.jpg/300x300bb.jpg", certs: [{ c: "NG", level: "Platinum", x: 6 }] },
      { title: "One Condition", kind: "Featured appearances", cover: "https://cdn-images.dzcdn.net/images/cover/e53dccb976a98d09db9a195ce84162f2/500x500-000000-80-0-0.jpg", certs: [{ c: "NG", level: "Platinum", x: 2 }] },
      { title: "Billionaires Club", kind: "Featured appearances", cover: "https://cdn-images.dzcdn.net/images/cover/3e2739afe89b70d123d223f12e6f5d92/500x500-000000-80-0-0.jpg", certs: [{ c: "NG", level: "Platinum" }] },
      { title: "Money Constant", kind: "Featured appearances", cover: "https://cdn-images.dzcdn.net/images/cover/5b290018c14b243dc3cd77ef4166ee0f/500x500-000000-80-0-0.jpg", certs: [{ c: "NG", level: "Platinum" }] },
      { title: "Abracadabra", kind: "Featured appearances", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/c7/5a/b2/c75ab2fb-785b-2ff3-34b3-24e81208a35f/13ULAIM49443.rgb.jpg/300x300bb.jpg", certs: [{ c: "NG", level: "Platinum" }] },
      { title: "Getting Paid", kind: "Featured appearances", cover: "https://cdn-images.dzcdn.net/images/cover/77fc9f281aabc0cfb5c17649afe08c8c/500x500-000000-80-0-0.jpg", certs: [{ c: "NG", level: "Platinum" }] },
      { title: "Kai!", kind: "Featured appearances", cover: "https://cdn-images.dzcdn.net/images/cover/6e7abbf5e01a1098d4c87eb7f5876232/500x500-000000-80-0-0.jpg", certs: [{ c: "NG", level: "Platinum" }] },
      { title: "Pami", kind: "Featured appearances", cover: "https://cdn-images.dzcdn.net/images/cover/bd76a1b1daca04cea85edf1c9b022a27/500x500-000000-80-0-0.jpg", certs: [{ c: "NG", level: "Platinum" }] },
      { title: "Big Time", kind: "Featured appearances", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/ad/12/b9/ad12b9d8-e896-5e36-6ef9-cec448a586e0/196872578911.jpg/300x300bb.jpg", certs: [{ c: "NG", level: "Platinum" }] },
      { title: "Forever Be Mine", kind: "Featured appearances", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/41/21/63/4121634b-1efc-95d4-7902-ff7b7a763e8f/075679606365.jpg/300x300bb.jpg", certs: [{ c: "NG", level: "Platinum" }] },
      { title: "Gimme Dat", kind: "Featured appearances", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/78/38/13/7838132f-837b-7c2c-d4ca-a69a608f6185/25UMGIM58084.rgb.jpg/300x300bb.jpg", certs: [{ c: "NG", level: "Platinum" }] },
      { title: "Apala Disco", kind: "Featured appearances", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/f6/0b/09/f60b0918-01fa-0c70-0af2-6e9b93a92fb0/8720766902814.png/300x300bb.jpg", certs: [{ c: "NG", level: "Platinum" }] },
      { title: "Cash Flow", kind: "Featured appearances", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/c7/96/76/c796763e-3db5-4208-27bd-b1683a74fdde/00602517933187.rgb.jpg/300x300bb.jpg", certs: [{ c: "NG", level: "Platinum" }] },
      { title: "B. D'Or", kind: "Featured appearances", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/91/12/99/91129929-cedb-efee-06c3-0bb82d682a72/075679760951.jpg/300x300bb.jpg", certs: [{ c: "NG", level: "Platinum" }] },
      { title: "Many Ways", kind: "Featured appearances", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/7d/df/a8/7ddfa8d5-74b2-1457-e415-f040d6468adf/cover.jpg/300x300bb.jpg", certs: [{ c: "NG", level: "Gold" }] },
      { title: "Dynamite (Tyla & Wizkid)", kind: "Featured appearances", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/8e/dc/d6/8edcd6ad-068b-b33f-0f13-44e20e07bdbe/196873431987.jpg/300x300bb.jpg", certs: [{ c: "NG", level: "Gold" }] },
      { title: "Easy With Me (DJ Tunez, Wizkid & ODUMODUBLVCK)", kind: "Featured appearances", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/4c/21/24/4c212476-f091-3358-7d86-1d7d7a2f1d3d/8721416633294.png/300x300bb.jpg", certs: [{ c: "NG", level: "Gold" }] },
      { title: "Ebelebe (Wande Coal ft. Wizkid)", kind: "Featured appearances", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/ca/fa/c4/cafac458-a388-1d36-e5b2-d4a94e677c9c/197342071253_cover.jpg/300x300bb.jpg", certs: [{ c: "NG", level: "Gold" }] },
      { title: "IDG (Asa ft. Wizkid)", kind: "Featured appearances", cover: "https://cdn-images.dzcdn.net/images/cover/5b12d64d8d1d710d3bf0abe0b3ac0fa5/500x500-000000-80-0-0.jpg", certs: [{ c: "NG", level: "Silver" }] },
      { title: "Like That (Bomboclatt) (Shallipopi ft. Wizkid)", kind: "Featured appearances", cover: "https://cdn-images.dzcdn.net/images/cover/904cf12b649b141254ed4bde749910c1/500x500-000000-80-0-0.jpg", certs: [{ c: "NG", level: "Silver" }] },
    ],
    charts: [
      { title: "One Dance", kind: "Singles", cover: "https://cdn-images.dzcdn.net/images/cover/56bdb7a86a27fadb96332c0c8f1b8e81/500x500-000000-80-0-0.jpg", entries: [{ c: "US", peak: 1 }, { c: "UK", peak: 1 }, { c: "IE", peak: 1 }, { c: "FR", peak: 1 }, { c: "BE", peak: 1 }, { c: "CH", peak: 1 }, { c: "DE", peak: 1 }, { c: "NL", peak: 1 }, { c: "SE", peak: 1 }, { c: "NO", peak: 1 }, { c: "PT", peak: 1 }, { c: "AU", peak: 1 }, { c: "NZ", peak: 1 }, { c: "CA", peak: 1 }, { c: "LB", peak: 1 }, { c: "DK", peak: 2 }, { c: "ES", peak: 2 }, { c: "FI", peak: 2 }, { c: "AT", peak: 3 }, { c: "CZ", peak: 3 }, { c: "IT", peak: 6 }, { c: "PY", peak: 12 }, { c: "HU", peak: 18 }, { c: "SK", peak: 29 }, { c: "LT", peak: 52 }] },
      { title: "Essence", kind: "Singles", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/b0/09/8e/b0098ed0-ef53-f2b5-386a-c8e6181f3c8a/886448775256.jpg/300x300bb.jpg", entries: [{ c: "NG", peak: 2 }, { c: "US", peak: 9 }, { c: "ZA", peak: 15 }, { c: "NZ", peak: 15 }, { c: "UK", peak: 16 }, { c: "GLB", peak: 28 }, { c: "CA", peak: 30 }, { c: "IE", peak: 41 }, { c: "GLBX", peak: 60 }, { c: "NL", peak: 76 }, { c: "CH", peak: 95 }, { c: "PT", peak: 108 }] },
      { title: "Boom", kind: "Singles", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music113/v4/20/05/17/200517ab-c3a3-b833-74b3-9bb3399c780c/886447834886.jpg/300x300bb.jpg", entries: [{ c: "NO", peak: 10 }, { c: "DK", peak: 17 }, { c: "NL", peak: 33 }, { c: "DE", peak: 38 }, { c: "BE", peak: 48 }, { c: "FR", peak: 53 }, { c: "AT", peak: 57 }, { c: "SE", peak: 70 }] },
      { title: "Brown Skin Girl", kind: "Singles", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/aa/20/73/aa207387-444f-b04d-9b7e-7ea6c687c15e/886447863329.jpg/300x300bb.jpg", entries: [{ c: "LT", peak: 29 }, { c: "UK", peak: 42 }, { c: "IE", peak: 50 }, { c: "CA", peak: 60 }, { c: "US", peak: 76 }, { c: "NL", peak: 82 }] },
      { title: "Forever Be Mine", kind: "Singles", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/41/21/63/4121634b-1efc-95d4-7902-ff7b7a763e8f/075679606365.jpg/300x300bb.jpg", entries: [{ c: "ZA", peak: 13 }, { c: "UK", peak: 46 }, { c: "US", peak: 68 }, { c: "GLB", peak: 111 }] },
      { title: "Call Me Every Day", kind: "Singles", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/45/79/f4/4579f47a-007d-eb5e-2227-00d0c1d5cf02/196589253460.jpg/300x300bb.jpg", entries: [{ c: "ZA", peak: 16 }, { c: "UK", peak: 53 }, { c: "US", peak: 76 }, { c: "GLB", peak: 103 }] },
      { title: "Jogodo", kind: "Singles", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/f0/d9/fb/f0d9fbd9-4fb2-0b9f-4178-97c2b865f22d/199316437584_cover.jpg/300x300bb.jpg", entries: [{ c: "NG", peak: 1 }, { c: "UK", peak: 73 }, { c: "GLBX", peak: 75 }, { c: "GLB", peak: 120 }] },
      { title: "Turbulence", kind: "Singles", cover: "https://cdn-images.dzcdn.net/images/cover/a4c216574fd4d381c73a4df2f512f599/500x500-000000-80-0-0.jpg", entries: [{ c: "NG", peak: 2 }, { c: "UK", peak: 76 }, { c: "GLBX", peak: 131 }, { c: "GLB", peak: 178 }] },
      { title: "Pongo", kind: "Singles", cover: "https://cdn-images.dzcdn.net/images/cover/a3c375742fde996cc7328543e51b42f4/500x500-000000-80-0-0.jpg", entries: [{ c: "SR", peak: 4 }, { c: "MD", peak: 15 }, { c: "RU", peak: 29 }, { c: "ES", peak: 75 }] },
      { title: "Come Closer", kind: "Singles", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/e2/dc/1c/e2dc1cb5-d0cf-04e0-0864-98b8f3e7affd/886446561912.jpg/300x300bb.jpg", entries: [{ c: "CA", peak: 54 }, { c: "UK", peak: 58 }, { c: "CH", peak: 98 }, { c: "FR", peak: 107 }] },
      { title: "Bella", kind: "Singles", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/62/56/a9/6256a949-210c-a69d-cdc6-9328622fc068/00602567919032.rgb.jpg/300x300bb.jpg", entries: [{ c: "FR", peak: 4 }, { c: "BE", peak: 38 }, { c: "CH", peak: 57 }] },
      { title: "Piece of My Heart", kind: "Singles", cover: "https://cdn-images.dzcdn.net/images/cover/23dec0c82a7bb91327d048b0019004bd/500x500-000000-80-0-0.jpg", entries: [{ c: "NG", peak: 1 }, { c: "SR", peak: 8 }, { c: "UK", peak: 61 }] },
      { title: "2 Sugar", kind: "Singles", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/a9/3f/f5/a93ff5e8-5c00-607a-4851-3aae9b356a64/196589495877.jpg/300x300bb.jpg", entries: [{ c: "NG", peak: 5 }, { c: "UK", peak: 70 }, { c: "ZA", peak: 70 }] },
      { title: "Coca Body", kind: "Singles", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/94/b6/fe/94b6fed3-960d-e756-b620-b103adec2dc0/26UMGIM77382.rgb.jpg/300x300bb.jpg", entries: [{ c: "SR", peak: 19 }, { c: "NG", peak: 22 }, { c: "NL", peak: 80 }] },
      { title: "Gimme Dat", kind: "Singles", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/78/38/13/7838132f-837b-7c2c-d4ca-a69a608f6185/25UMGIM58084.rgb.jpg/300x300bb.jpg", entries: [{ c: "NG", peak: 3 }, { c: "SR", peak: 6 }, { c: "UK", peak: 89 }] },
      { title: "Link Up", kind: "Singles", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/c9/ca/6b/c9ca6b51-87a9-4a13-d37f-24535687023d/23UMGIM63882.rgb.jpg/300x300bb.jpg", entries: [{ c: "CA", peak: 69 }, { c: "GLB", peak: 167 }] },
      { title: "Mamacita", kind: "Singles", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/d7/33/bb/d733bb70-e88f-cd73-2466-f8867f1e522b/0235.jpg/300x300bb.jpg", entries: [{ c: "UK", peak: 45 }, { c: "IE", peak: 71 }] },
      { title: "Ginger", kind: "Singles", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/70/8b/e1/708be1f6-4054-ff1a-e946-887ecfbdea81/859712433503_cover.jpg/300x300bb.jpg", entries: [{ c: "NG", peak: 1 }, { c: "UK", peak: 67 }] },
      { title: "Kese", kind: "Singles", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/82/60/3b/82603b3c-1aad-6e37-3b81-d5451046accf/196872637434.jpg/300x300bb.jpg", entries: [{ c: "NG", peak: 1 }, { c: "UK", peak: 78 }] },
      { title: "Bad to Me", kind: "Singles", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/92/b6/d2/92b6d228-245b-8525-4801-bdb630c2be67/196589446022.jpg/300x300bb.jpg", entries: [{ c: "NG", peak: 3 }, { c: "UK", peak: 98 }] },
      { title: "Checklist", kind: "Singles", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/e3/6a/7f/e36a7feb-468a-d7d0-4431-97bc75f6455e/886447381151.jpg/300x300bb.jpg", entries: [{ c: "IE", peak: 76 }, { c: "UK", peak: 98 }] },
      { title: "Dynamite", kind: "Singles", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/8e/dc/d6/8edcd6ad-068b-b33f-0f13-44e20e07bdbe/196873431987.jpg/300x300bb.jpg", entries: [{ c: "NG", peak: 13 }, { c: "ZA", peak: 45 }] },
      { title: "G Love", kind: "Singles", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/9e/a9/4e/9ea94e1e-4660-1d37-6296-389df09e4085/888915614945_cover.jpg/300x300bb.jpg", entries: [{ c: "UK", peak: 28 }] },
      { title: "Energy", kind: "Singles", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/6f/e8/33/6fe83312-989e-c6ef-2cf0-e79f1c573f64/196871664691.jpg/300x300bb.jpg", entries: [{ c: "UK", peak: 59 }] },
      { title: "I Like", kind: "Singles", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music113/v4/e0/b5/1f/e0b51fd9-77ff-5696-26c7-f2a47cd7d9d0/190295392284.jpg/300x300bb.jpg", entries: [{ c: "UK", peak: 74 }] },
      { title: "System", kind: "Singles", cover: "https://cdn-images.dzcdn.net/images/cover/fbf2218aa7d8262098c19097bd10cb21/500x500-000000-80-0-0.jpg", entries: [{ c: "GLBX", peak: 179 }] },
      { title: "Sundown", kind: "Singles", cover: "https://cdn-images.dzcdn.net/images/cover/68ef927599933cc3f45fcf8af23c5ac5/500x500-000000-80-0-0.jpg", entries: [{ c: "SE", peak: 51 }] },
      { title: "Borrowed Love", kind: "Singles", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/b1/e3/27/b1e3271b-b8cb-7d80-99e5-0ddd9d6e632e/00602577303210.rgb.jpg/300x300bb.jpg", entries: [{ c: "CA", peak: 93 }] },
      { title: "MMS", kind: "Singles", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/38/34/59/383459da-ba6a-4bee-67df-7de269764383/197342707992_cover.jpg/300x300bb.jpg", entries: [{ c: "NG", peak: 1 }] },
      { title: "Cash Flow", kind: "Singles", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/c7/96/76/c796763e-3db5-4208-27bd-b1683a74fdde/00602517933187.rgb.jpg/300x300bb.jpg", entries: [{ c: "NG", peak: 1 }] },
      { title: "B. D'OR", kind: "Singles", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/91/12/99/91129929-cedb-efee-06c3-0bb82d682a72/075679760951.jpg/300x300bb.jpg", entries: [{ c: "NG", peak: 2 }] },
      { title: "MONEY CONSTANT", kind: "Singles", cover: "https://cdn-images.dzcdn.net/images/cover/5b290018c14b243dc3cd77ef4166ee0f/500x500-000000-80-0-0.jpg", entries: [{ c: "NG", peak: 3 }] },
      { title: "One Condition", kind: "Singles", cover: "https://cdn-images.dzcdn.net/images/cover/e53dccb976a98d09db9a195ce84162f2/500x500-000000-80-0-0.jpg", entries: [{ c: "NG", peak: 4 }] },
      { title: "Bad Girl", kind: "Singles", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/ad/12/b9/ad12b9d8-e896-5e36-6ef9-cec448a586e0/196872578911.jpg/300x300bb.jpg", entries: [{ c: "NG", peak: 4 }] },
      { title: "Alive", kind: "Singles", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/d3/1f/29/d31f2992-e357-c555-2dd9-29badd615242/820233484725.jpg/300x300bb.jpg", entries: [{ c: "NG", peak: 14 }] },
      { title: "Man on a Mission", kind: "Singles", cover: "https://cdn-images.dzcdn.net/images/cover/b75fdeb32e6f3fb0760933cda2de95c8/500x500-000000-80-0-0.jpg", entries: [{ c: "NG", peak: 29 }] },
      { title: "Morayo", kind: "Albums", cover: "https://cdn-images.dzcdn.net/images/cover/2538836fe7ba780c5a3a4c04aef4fac5/500x500-000000-80-0-0.jpg", entries: [{ c: "NG", peak: 1 }, { c: "UK", peak: 14 }, { c: "CH", peak: 35 }, { c: "CA", peak: 48 }, { c: "IE", peak: 50 }, { c: "FR", peak: 84 }, { c: "NL", peak: 87 }, { c: "US", peak: 98 }, { c: "BE", peak: 148 }, { c: "PT", peak: 181 }] },
      { title: "Made in Lagos", kind: "Albums", cover: "https://cdn-images.dzcdn.net/images/cover/ee712ec0084d50159ae6564de833ce12/500x500-000000-80-0-0.jpg", entries: [{ c: "UK", peak: 15 }, { c: "NG", peak: 17 }, { c: "US", peak: 28 }, { c: "NL", peak: 33 }, { c: "IE", peak: 42 }, { c: "CA", peak: 45 }, { c: "FR", peak: 60 }, { c: "BE", peak: 69 }, { c: "CH", peak: 73 }] },
      { title: "More Love, Less Ego", kind: "Albums", cover: "https://cdn-images.dzcdn.net/images/cover/e4286ac8a38829b6cf5d225c311bccf7/500x500-000000-80-0-0.jpg", entries: [{ c: "NG", peak: 1 }, { c: "UK", peak: 16 }, { c: "NL", peak: 30 }, { c: "CA", peak: 45 }, { c: "CH", peak: 54 }, { c: "US", peak: 59 }, { c: "BE", peak: 91 }, { c: "IE", peak: 100 }, { c: "FR", peak: 135 }] },
      { title: "Sounds from the Other Side", kind: "Albums", cover: "https://cdn-images.dzcdn.net/images/cover/a8dc47ce1fd807b1814e8171a91c1fc9/500x500-000000-80-0-0.jpg", entries: [{ c: "CA", peak: 58 }, { c: "UK", peak: 91 }, { c: "NL", peak: 99 }, { c: "US", peak: 107 }, { c: "FR", peak: 140 }, { c: "BE", peak: 152 }] },
      { title: "REAL, Vol. 1 – EP", kind: "Albums", entries: [{ c: "NG", peak: 1 }] },
      { title: "Ayo", kind: "Albums", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/42/df/1a/42df1a9b-dd10-9e40-4513-420ac0cc1e1e/0.jpg/300x300bb.jpg", entries: [{ c: "NG", peak: 54 }] },
    ],
  },
  {
    slug: "davido",
    name: "Davido",
    fullName: "David Adedeji Adeleke",
    country: "Nigeria",
    flag: "🇳🇬",
    hook: "Seventeen Nigerian No. 1s — more home-chart chart-toppers than anyone else in this field.",
    spotifyId: "0Y3agQaa6g2r0YmHPOO9rh",
    image: "https://i.scdn.co/image/ab6761610000e5eb2bf250c3e92f9e7542efd95c",
    verifiedOn: AFROBEATS_VERIFIED_ON,
    swept: true,
    chartPublished: { entries: 66, territories: 13, no1s: 17 },
    releases: [
      { title: "A Good Time", kind: "Albums", cover: "https://cdn-images.dzcdn.net/images/cover/b9fd1fc1b331838b6b0ba9b2eacbf31e/500x500-000000-80-0-0.jpg", certs: [{ c: "ZA", level: "Platinum", x: 2 }, { c: "UK", level: "Silver" }] },
      { title: "Timeless", kind: "Albums", cover: "https://cdn-images.dzcdn.net/images/cover/58fc25c84a0a2596d4ba450e836785ca/500x500-000000-80-0-0.jpg", certs: [{ c: "UK", level: "Silver" }] },
      { title: "Unavailable", kind: "Lead singles", cover: "https://cdn-images.dzcdn.net/images/cover/89d5885fe38a406504224ed98c1ab605/500x500-000000-80-0-0.jpg", certs: [{ c: "NG", level: "Platinum", x: 3 }, { c: "CH", level: "Platinum", x: 2 }, { c: "CA", level: "Platinum" }, { c: "US", level: "Gold" }, { c: "FR", level: "Gold" }, { c: "NZ", level: "Gold" }, { c: "UK", level: "Silver" }] },
      { title: "Fall", kind: "Lead singles", cover: "https://cdn-images.dzcdn.net/images/cover/6f5e2eeac47abb6bf1bcc293125e0016/500x500-000000-80-0-0.jpg", certs: [{ c: "US", level: "Platinum" }, { c: "CA", level: "Platinum" }, { c: "FR", level: "Gold" }, { c: "NZ", level: "Gold" }, { c: "UK", level: "Silver" }] },
      { title: "If", kind: "Lead singles", cover: "https://cdn-images.dzcdn.net/images/cover/7de07d81ce22dcf5be4caa2b2b9faace/500x500-000000-80-0-0.jpg", certs: [{ c: "CA", level: "Platinum" }, { c: "US", level: "Gold" }, { c: "UK", level: "Silver" }] },
      { title: "Blow My Mind", kind: "Lead singles", cover: "https://cdn-images.dzcdn.net/images/cover/9b38babe761ad3914bfd843b8c199555/500x500-000000-80-0-0.jpg", certs: [{ c: "ZA", level: "Platinum" }, { c: "US", level: "Gold" }, { c: "CA", level: "Gold" }] },
      { title: "Risky / Risk", kind: "Lead singles", cover: "https://cdn-images.dzcdn.net/images/cover/da0c3e984d1fa2b9c54158ee1a02fbd1/500x500-000000-80-0-0.jpg", certs: [{ c: "ZA", level: "Platinum" }, { c: "CA", level: "Gold" }, { c: "NG", level: "Gold" }] },
      { title: "Feel", kind: "Lead singles", cover: "https://cdn-images.dzcdn.net/images/cover/89d5885fe38a406504224ed98c1ab605/500x500-000000-80-0-0.jpg", certs: [{ c: "NG", level: "Platinum", x: 4 }, { c: "CA", level: "Gold" }] },
      { title: "Jowo", kind: "Lead singles", cover: "https://cdn-images.dzcdn.net/images/cover/95ecb7f95449cc2d447857e552353218/500x500-000000-80-0-0.jpg", certs: [{ c: "ZA", level: "Platinum", x: 2 }, { c: "NG", level: "Platinum" }] },
      { title: "With You", kind: "Lead singles", cover: "https://cdn-images.dzcdn.net/images/cover/08304eb172098540c635de98530d4929/500x500-000000-80-0-0.jpg", certs: [{ c: "NG", level: "Platinum", x: 4 }] },
      { title: "Funds", kind: "Lead singles", cover: "https://cdn-images.dzcdn.net/images/cover/28cbbe0064bd5b7494523e75b6ebeb95/500x500-000000-80-0-0.jpg", certs: [{ c: "NG", level: "Platinum", x: 3 }] },
      { title: "Kante", kind: "Lead singles", cover: "https://cdn-images.dzcdn.net/images/cover/89d5885fe38a406504224ed98c1ab605/500x500-000000-80-0-0.jpg", certs: [{ c: "NG", level: "Platinum", x: 3 }] },
      { title: "No Competition", kind: "Lead singles", cover: "https://cdn-images.dzcdn.net/images/cover/89d5885fe38a406504224ed98c1ab605/500x500-000000-80-0-0.jpg", certs: [{ c: "NG", level: "Platinum", x: 2 }] },
      { title: "Away", kind: "Lead singles", cover: "https://cdn-images.dzcdn.net/images/cover/89d5885fe38a406504224ed98c1ab605/500x500-000000-80-0-0.jpg", certs: [{ c: "NG", level: "Platinum", x: 2 }] },
      { title: "Assurance", kind: "Lead singles", cover: "https://cdn-images.dzcdn.net/images/cover/a880bf2aaa27d39c446bd9b19effd22e/500x500-000000-80-0-0.jpg", certs: [{ c: "ZA", level: "Platinum" }] },
      { title: "D&G", kind: "Lead singles", cover: "https://cdn-images.dzcdn.net/images/cover/b9fd1fc1b331838b6b0ba9b2eacbf31e/500x500-000000-80-0-0.jpg", certs: [{ c: "ZA", level: "Platinum" }] },
      { title: "Awuke", kind: "Lead singles", cover: "https://cdn-images.dzcdn.net/images/cover/a087ecbb3b04710409cd98ae120c6550/500x500-000000-80-0-0.jpg", certs: [{ c: "NG", level: "Platinum" }] },
      { title: "Over Dem", kind: "Lead singles", cover: "https://cdn-images.dzcdn.net/images/cover/89d5885fe38a406504224ed98c1ab605/500x500-000000-80-0-0.jpg", certs: [{ c: "NG", level: "Platinum" }] },
      { title: "The Best", kind: "Lead singles", cover: "https://cdn-images.dzcdn.net/images/cover/95ecb7f95449cc2d447857e552353218/500x500-000000-80-0-0.jpg", certs: [{ c: "NG", level: "Platinum" }] },
      { title: "Champion Sound", kind: "Lead singles", cover: "https://cdn-images.dzcdn.net/images/cover/594be4990d2be6af325a4a0825960a9a/500x500-000000-80-0-0.jpg", certs: [{ c: "NG", level: "Platinum" }] },
      { title: "Holy Ground", kind: "Lead singles", cover: "https://cdn-images.dzcdn.net/images/cover/95ecb7f95449cc2d447857e552353218/500x500-000000-80-0-0.jpg", certs: [{ c: "NG", level: "Platinum" }] },
      { title: "Na Money", kind: "Lead singles", cover: "https://cdn-images.dzcdn.net/images/cover/89d5885fe38a406504224ed98c1ab605/500x500-000000-80-0-0.jpg", certs: [{ c: "NG", level: "Platinum" }] },
      { title: "For the Road", kind: "Lead singles", cover: "https://cdn-images.dzcdn.net/images/cover/89d5885fe38a406504224ed98c1ab605/500x500-000000-80-0-0.jpg", certs: [{ c: "NG", level: "Platinum" }] },
      { title: "Stand Strong", kind: "Lead singles", cover: "https://cdn-images.dzcdn.net/images/cover/b19dde3eb91732404d09c18e8bb07d13/500x500-000000-80-0-0.jpg", certs: [{ c: "NG", level: "Platinum" }] },
      { title: "Be There Still", kind: "Lead singles", cover: "https://cdn-images.dzcdn.net/images/cover/08304eb172098540c635de98530d4929/500x500-000000-80-0-0.jpg", certs: [{ c: "NG", level: "Platinum" }] },
      { title: "E Pain Me", kind: "Lead singles", cover: "https://cdn-images.dzcdn.net/images/cover/89d5885fe38a406504224ed98c1ab605/500x500-000000-80-0-0.jpg", certs: [{ c: "NG", level: "Gold" }] },
      { title: "10 Kilo", kind: "Lead singles", cover: "https://cdn-images.dzcdn.net/images/cover/08304eb172098540c635de98530d4929/500x500-000000-80-0-0.jpg", certs: [{ c: "NG", level: "Gold" }] },
      { title: "Fem", kind: "Lead singles", cover: "https://cdn-images.dzcdn.net/images/cover/a82c3814060993eae5776d87f7fd1b0f/500x500-000000-80-0-0.jpg", certs: [{ c: "NG", level: "Gold" }] },
      { title: "Godfather", kind: "Lead singles", cover: "https://cdn-images.dzcdn.net/images/cover/89d5885fe38a406504224ed98c1ab605/500x500-000000-80-0-0.jpg", certs: [{ c: "NG", level: "Gold" }] },
      { title: "In the Garden (ft. Morravey)", kind: "Lead singles", cover: "https://cdn-images.dzcdn.net/images/cover/89d5885fe38a406504224ed98c1ab605/500x500-000000-80-0-0.jpg", certs: [{ c: "NG", level: "Gold" }] },
      { title: "La La (ft. CKay)", kind: "Lead singles", cover: "https://cdn-images.dzcdn.net/images/cover/798485d74c5c9cd451070cd502092ea6/500x500-000000-80-0-0.jpg", certs: [{ c: "NG", level: "Gold" }] },
      { title: "Anything", kind: "Lead singles", cover: "https://cdn-images.dzcdn.net/images/cover/08304eb172098540c635de98530d4929/500x500-000000-80-0-0.jpg", certs: [{ c: "NG", level: "Silver" }] },
      { title: "Bop (ft. Dexta Daps)", kind: "Lead singles", cover: "https://cdn-images.dzcdn.net/images/cover/185788b45fcee7cf8ce90104d12f90b5/500x500-000000-80-0-0.jpg", certs: [{ c: "NG", level: "Silver" }] },
      { title: "Dodo", kind: "Lead singles", cover: "https://cdn-images.dzcdn.net/images/cover/ad799330e6b536a01e1c30f5d2d98971/500x500-000000-80-0-0.jpg", certs: [{ c: "NG", level: "Silver" }] },
      { title: "Fade (ft. Bella Shmurda)", kind: "Lead singles", cover: "https://cdn-images.dzcdn.net/images/cover/95ecb7f95449cc2d447857e552353218/500x500-000000-80-0-0.jpg", certs: [{ c: "NG", level: "Silver" }] },
      { title: "Holy Water (ft. Victony & Musa Keys)", kind: "Lead singles", cover: "https://cdn-images.dzcdn.net/images/cover/08304eb172098540c635de98530d4929/500x500-000000-80-0-0.jpg", certs: [{ c: "NG", level: "Silver" }] },
      { title: "LCND", kind: "Lead singles", cover: "https://cdn-images.dzcdn.net/images/cover/f46fc5a9e5b5ef541ebd55db2e9c3e4a/500x500-000000-80-0-0.jpg", certs: [{ c: "NG", level: "Silver" }] },
      { title: "Offa Me (ft. Victoria Monét)", kind: "Lead singles", cover: "https://cdn-images.dzcdn.net/images/cover/08304eb172098540c635de98530d4929/500x500-000000-80-0-0.jpg", certs: [{ c: "NG", level: "Silver" }] },
      { title: "Picasso (ft. Logos Olori)", kind: "Lead singles", cover: "https://cdn-images.dzcdn.net/images/cover/89d5885fe38a406504224ed98c1ab605/500x500-000000-80-0-0.jpg", certs: [{ c: "NG", level: "Silver" }] },
      { title: "Precision", kind: "Lead singles", cover: "https://cdn-images.dzcdn.net/images/cover/89d5885fe38a406504224ed98c1ab605/500x500-000000-80-0-0.jpg", certs: [{ c: "NG", level: "Silver" }] },
      { title: "Shopping Spree (ft. Chris Brown & Young Thug)", kind: "Lead singles", cover: "https://cdn-images.dzcdn.net/images/cover/95ecb7f95449cc2d447857e552353218/500x500-000000-80-0-0.jpg", certs: [{ c: "NG", level: "Silver" }] },
      { title: "So Crazy (ft. Lil Baby)", kind: "Lead singles", cover: "https://cdn-images.dzcdn.net/images/cover/95ecb7f95449cc2d447857e552353218/500x500-000000-80-0-0.jpg", certs: [{ c: "NG", level: "Silver" }] },
      { title: "Something Fishy", kind: "Lead singles", cover: "https://cdn-images.dzcdn.net/images/cover/95ecb7f95449cc2d447857e552353218/500x500-000000-80-0-0.jpg", certs: [{ c: "NG", level: "Silver" }] },
      { title: "U (Juju) (ft. Skepta)", kind: "Lead singles", cover: "https://cdn-images.dzcdn.net/images/cover/89d5885fe38a406504224ed98c1ab605/500x500-000000-80-0-0.jpg", certs: [{ c: "NG", level: "Silver" }] },
      { title: "Sensational", kind: "Featured appearances", cover: "https://cdn-images.dzcdn.net/images/cover/e8b1b523f139f23bac60bc70528f386a/500x500-000000-80-0-0.jpg", certs: [{ c: "NZ", level: "Gold" }, { c: "UK", level: "Silver" }, { c: "NG", level: "Silver" }] },
      { title: "Twe Twe", kind: "Featured appearances", cover: "https://cdn-images.dzcdn.net/images/cover/f0a8912bba25b958294948c435c99a8a/500x500-000000-80-0-0.jpg", certs: [{ c: "NG", level: "Platinum", x: 5 }] },
      { title: "Ogechi", kind: "Featured appearances", cover: "https://cdn-images.dzcdn.net/images/cover/d1cb8dda2d94d5ce2aa912b162eedfe0/500x500-000000-80-0-0.jpg", certs: [{ c: "NG", level: "Platinum", x: 4 }] },
      { title: "Eva Longoria", kind: "Featured appearances", cover: "https://cdn-images.dzcdn.net/images/cover/7e1e2f156ee027d200a2424fd3dbf776/500x500-000000-80-0-0.jpg", certs: [{ c: "ES", level: "Platinum", x: 2 }] },
      { title: "Electricity", kind: "Featured appearances", cover: "https://cdn-images.dzcdn.net/images/cover/dd374a6d185e39c6c4f847704afc827e/500x500-000000-80-0-0.jpg", certs: [{ c: "NG", level: "Platinum", x: 2 }] },
      { title: "High", kind: "Featured appearances", cover: "https://cdn-images.dzcdn.net/images/cover/05ba3ed47b0af042f38e49cb3789ec7c/500x500-000000-80-0-0.jpg", certs: [{ c: "NG", level: "Platinum", x: 2 }] },
      { title: "Baddest Boy", kind: "Featured appearances", cover: "https://cdn-images.dzcdn.net/images/cover/0c0d1ba509c2a896097f11edcc957edf/500x500-000000-80-0-0.jpg", certs: [{ c: "NG", level: "Platinum", x: 2 }] },
      { title: "Shakabulizzy", kind: "Featured appearances", cover: "https://cdn-images.dzcdn.net/images/cover/acd552a8f2ba4e9f448a876eacb65d4d/500x500-000000-80-0-0.jpg", certs: [{ c: "NG", level: "Platinum", x: 2 }] },
      { title: "For You", kind: "Featured appearances", cover: "https://cdn-images.dzcdn.net/images/cover/ed05b8ce0b7f23d98282ed515664c286/500x500-000000-80-0-0.jpg", certs: [{ c: "NG", level: "Platinum" }] },
      { title: "Dada", kind: "Featured appearances", cover: "https://cdn-images.dzcdn.net/images/cover/6f3cbf0c6e006c8e49ff6cf036d85c87/500x500-000000-80-0-0.jpg", certs: [{ c: "NG", level: "Platinum" }] },
      { title: "Hmmm", kind: "Featured appearances", cover: "https://cdn-images.dzcdn.net/images/cover/d40b73f50ac9badee18d53685c838aba/500x500-000000-80-0-0.jpg", certs: [{ c: "NG", level: "Platinum" }] },
      { title: "Ke Star", kind: "Featured appearances", cover: "https://cdn-images.dzcdn.net/images/cover/5a54ff0e04934271e7acec9af3dd55d8/500x500-000000-80-0-0.jpg", certs: [{ c: "NG", level: "Platinum" }] },
      { title: "Yebo Lapho", kind: "Featured appearances", certs: [{ c: "ZA", level: "Platinum" }] },
      { title: "Gang", kind: "Featured appearances", cover: "https://cdn-images.dzcdn.net/images/cover/41fc3e7a3430f3a5e1c1780b57c3147f/500x500-000000-80-0-0.jpg", certs: [{ c: "FR", level: "Gold" }] },
      { title: "Galorizzy (Ecool, Davido, Mora & Morravey ft. Scotts Maphuma & Iphxne DJ)", kind: "Featured appearances", cover: "https://cdn-images.dzcdn.net/images/cover/434231b43c8376a6a54dadff7316cc36/500x500-000000-80-0-0.jpg", certs: [{ c: "NG", level: "Gold" }] },
      { title: "Grooving (ODUMODUBLVCK, Davido & Seun Kuti)", kind: "Featured appearances", cover: "https://cdn-images.dzcdn.net/images/cover/0af8d1b7ecebd4fec1dbb6c048f2105f/500x500-000000-80-0-0.jpg", certs: [{ c: "NG", level: "Gold" }] },
      { title: "Like (Iyanya ft. Davido & Kizz Daniel)", kind: "Featured appearances", cover: "https://cdn-images.dzcdn.net/images/cover/d50e6c1e1ff65a58b2ae4051876d7e7e/500x500-000000-80-0-0.jpg", certs: [{ c: "NG", level: "Gold" }] },
      { title: "Money (Zlatan ft. Davido)", kind: "Featured appearances", cover: "https://cdn-images.dzcdn.net/images/cover/fbd27ba3a7f60e17a3a1f8b628ac3888/500x500-000000-80-0-0.jpg", certs: [{ c: "NG", level: "Gold" }] },
      { title: "Nakupenda (TxC, Davido, Scotts Maphuma & Shoday ft. Al Xapo & Zlatan)", kind: "Featured appearances", cover: "https://cdn-images.dzcdn.net/images/cover/86051e2caa464c95b96cef12d3ae570a/500x500-000000-80-0-0.jpg", certs: [{ c: "NG", level: "Gold" }] },
      { title: "Somebody Baby (Peruzzi ft. Davido)", kind: "Featured appearances", cover: "https://cdn-images.dzcdn.net/images/cover/aca3c337c528c1f3c6d7eee96b29d339/500x500-000000-80-0-0.jpg", certs: [{ c: "NG", level: "Gold" }] },
      { title: "Activate (Stonebwoy & Davido)", kind: "Featured appearances", cover: "https://cdn-images.dzcdn.net/images/cover/1d5dfc880396e953e316456a394d7353/500x500-000000-80-0-0.jpg", certs: [{ c: "NG", level: "Silver" }] },
      { title: "All (Rexxie ft. Davido)", kind: "Featured appearances", cover: "https://cdn-images.dzcdn.net/images/cover/798485d74c5c9cd451070cd502092ea6/500x500-000000-80-0-0.jpg", certs: [{ c: "NG", level: "Silver" }] },
      { title: "Cho Cho (Zlatan ft. Mayorkun & Davido)", kind: "Featured appearances", cover: "https://cdn-images.dzcdn.net/images/cover/a660b5ee0e40f869a94208274a7602a1/500x500-000000-80-0-0.jpg", certs: [{ c: "NG", level: "Silver" }] },
      { title: "Drift (Remix) (Teejay & Davido)", kind: "Featured appearances", cover: "https://cdn-images.dzcdn.net/images/cover/dcdf829927c65c7f7025440ea10503d6/500x500-000000-80-0-0.jpg", certs: [{ c: "NG", level: "Silver" }] },
      { title: "Maserati (Remix) (Olakira ft. Davido)", kind: "Featured appearances", cover: "https://cdn-images.dzcdn.net/images/cover/1713aad5a0a697ac1db7ce7b8a167c27/500x500-000000-80-0-0.jpg", certs: [{ c: "NG", level: "Silver" }] },
      { title: "Watawi (CKay ft. Davido, Focalistic & Abidoza)", kind: "Featured appearances", cover: "https://cdn-images.dzcdn.net/images/cover/d35686d80a19646ea2d5c3584eb1e33f/500x500-000000-80-0-0.jpg", certs: [{ c: "NG", level: "Silver" }] },
    ],
    charts: [
      { title: "With You", kind: "Singles", cover: "https://cdn-images.dzcdn.net/images/cover/08304eb172098540c635de98530d4929/500x500-000000-80-0-0.jpg", entries: [{ c: "NG", peak: 1 }, { c: "SR", peak: 7 }, { c: "UK", peak: 85 }] },
      { title: "FEM", kind: "Singles", cover: "https://cdn-images.dzcdn.net/images/cover/fa0e3368a8a8e80b32fe88a276b9e759/500x500-000000-80-0-0.jpg", entries: [{ c: "NG", peak: 1 }] },
      { title: "Holy Ground", kind: "Singles", cover: "https://cdn-images.dzcdn.net/images/cover/95ecb7f95449cc2d447857e552353218/500x500-000000-80-0-0.jpg", entries: [{ c: "NG", peak: 1 }] },
      { title: "The Best", kind: "Singles", cover: "https://cdn-images.dzcdn.net/images/cover/95ecb7f95449cc2d447857e552353218/500x500-000000-80-0-0.jpg", entries: [{ c: "NG", peak: 1 }] },
      { title: "For You", kind: "Singles", cover: "https://cdn-images.dzcdn.net/images/cover/ed05b8ce0b7f23d98282ed515664c286/500x500-000000-80-0-0.jpg", entries: [{ c: "NG", peak: 1 }] },
      { title: "Baddest Boy", kind: "Singles", cover: "https://cdn-images.dzcdn.net/images/cover/0c0d1ba509c2a896097f11edcc957edf/500x500-000000-80-0-0.jpg", entries: [{ c: "NG", peak: 1 }] },
      { title: "No Competition", kind: "Singles", cover: "https://cdn-images.dzcdn.net/images/cover/89d5885fe38a406504224ed98c1ab605/500x500-000000-80-0-0.jpg", entries: [{ c: "NG", peak: 1 }] },
      { title: "Twe Twe", kind: "Singles", cover: "https://cdn-images.dzcdn.net/images/cover/f0a8912bba25b958294948c435c99a8a/500x500-000000-80-0-0.jpg", entries: [{ c: "NG", peak: 1 }] },
      { title: "Ogechi", kind: "Singles", cover: "https://cdn-images.dzcdn.net/images/cover/d1cb8dda2d94d5ce2aa912b162eedfe0/500x500-000000-80-0-0.jpg", entries: [{ c: "NG", peak: 1 }] },
      { title: "Awuke", kind: "Singles", cover: "https://cdn-images.dzcdn.net/images/cover/a087ecbb3b04710409cd98ae120c6550/500x500-000000-80-0-0.jpg", entries: [{ c: "NG", peak: 1 }] },
      { title: "Funds", kind: "Singles", cover: "https://cdn-images.dzcdn.net/images/cover/28cbbe0064bd5b7494523e75b6ebeb95/500x500-000000-80-0-0.jpg", entries: [{ c: "NG", peak: 1 }] },
      { title: "I Know Who I Be", kind: "Singles", cover: "https://cdn-images.dzcdn.net/images/cover/9eb91a56d2af511c4024d6eb0ee97f60/500x500-000000-80-0-0.jpg", entries: [{ c: "NG", peak: 1 }] },
      { title: "B4 B4", kind: "Singles", cover: "https://cdn-images.dzcdn.net/images/cover/c1eb4ca22f60cab34fec32e24d805b0f/500x500-000000-80-0-0.jpg", entries: [{ c: "NG", peak: 1 }] },
      { title: "Hayya Hayya", kind: "Singles", cover: "https://cdn-images.dzcdn.net/images/cover/75c22492ee6fd139fd5230fea70134e1/500x500-000000-80-0-0.jpg", entries: [{ c: "SR", peak: 1 }, { c: "AR", peak: 47 }] },
      { title: "Unavailable", kind: "Singles", cover: "https://cdn-images.dzcdn.net/images/cover/89d5885fe38a406504224ed98c1ab605/500x500-000000-80-0-0.jpg", entries: [{ c: "NG", peak: 2 }, { c: "SR", peak: 4 }, { c: "CH", peak: 48 }, { c: "UK", peak: 52 }, { c: "NL", peak: 57 }, { c: "FR", peak: 134 }] },
      { title: "Over Dem", kind: "Singles", cover: "https://cdn-images.dzcdn.net/images/cover/89d5885fe38a406504224ed98c1ab605/500x500-000000-80-0-0.jpg", entries: [{ c: "NG", peak: 2 }] },
      { title: "Feel", kind: "Singles", cover: "https://cdn-images.dzcdn.net/images/cover/89d5885fe38a406504224ed98c1ab605/500x500-000000-80-0-0.jpg", entries: [{ c: "NG", peak: 3 }, { c: "UK", peak: 96 }] },
      { title: "Nakupenda", kind: "Singles", cover: "https://cdn-images.dzcdn.net/images/cover/86051e2caa464c95b96cef12d3ae570a/500x500-000000-80-0-0.jpg", entries: [{ c: "NG", peak: 3 }] },
      { title: "Gimme Dat Ting", kind: "Singles", cover: "https://cdn-images.dzcdn.net/images/cover/c1eb4ca22f60cab34fec32e24d805b0f/500x500-000000-80-0-0.jpg", entries: [{ c: "NG", peak: 5 }] },
      { title: "If It's Okay", kind: "Singles", cover: "https://cdn-images.dzcdn.net/images/cover/d18376c3bedbdcd7323453974cb46d03/500x500-000000-80-0-0.jpg", entries: [{ c: "SR", peak: 6 }] },
      { title: "Already Falling", kind: "Singles", cover: "https://cdn-images.dzcdn.net/images/cover/c1eb4ca22f60cab34fec32e24d805b0f/500x500-000000-80-0-0.jpg", entries: [{ c: "NG", peak: 9 }] },
      { title: "Eva Longoria", kind: "Singles", cover: "https://cdn-images.dzcdn.net/images/cover/7e1e2f156ee027d200a2424fd3dbf776/500x500-000000-80-0-0.jpg", entries: [{ c: "ES", peak: 10 }] },
      { title: "In the Garden", kind: "Singles", cover: "https://cdn-images.dzcdn.net/images/cover/89d5885fe38a406504224ed98c1ab605/500x500-000000-80-0-0.jpg", entries: [{ c: "NG", peak: 10 }] },
      { title: "Sensational", kind: "Singles", cover: "https://cdn-images.dzcdn.net/images/cover/e8b1b523f139f23bac60bc70528f386a/500x500-000000-80-0-0.jpg", entries: [{ c: "NG", peak: 12 }, { c: "UK", peak: 45 }, { c: "US", peak: 71 }] },
      { title: "Tell Everybody", kind: "Singles", cover: "https://cdn-images.dzcdn.net/images/cover/c1eb4ca22f60cab34fec32e24d805b0f/500x500-000000-80-0-0.jpg", entries: [{ c: "NG", peak: 16 }] },
      { title: "Alaska", kind: "Singles", cover: "https://cdn-images.dzcdn.net/images/cover/95244a84767b46a0b4f0c8961cb69690/500x500-000000-80-0-0.jpg", entries: [{ c: "IT", peak: 17 }] },
      { title: "On the Road", kind: "Singles", cover: "https://cdn-images.dzcdn.net/images/cover/c1eb4ca22f60cab34fec32e24d805b0f/500x500-000000-80-0-0.jpg", entries: [{ c: "NG", peak: 19 }] },
      { title: "Amazing Grace", kind: "Singles", cover: "https://cdn-images.dzcdn.net/images/cover/c1eb4ca22f60cab34fec32e24d805b0f/500x500-000000-80-0-0.jpg", entries: [{ c: "NG", peak: 20 }] },
      { title: "Money", kind: "Singles", cover: "https://cdn-images.dzcdn.net/images/cover/fbd27ba3a7f60e17a3a1f8b628ac3888/500x500-000000-80-0-0.jpg", entries: [{ c: "BE", peak: 22 }] },
      { title: "Yaya", kind: "Singles", cover: "https://cdn-images.dzcdn.net/images/cover/c1eb4ca22f60cab34fec32e24d805b0f/500x500-000000-80-0-0.jpg", entries: [{ c: "NG", peak: 23 }] },
      { title: "My Light", kind: "Singles", cover: "https://cdn-images.dzcdn.net/images/cover/c1eb4ca22f60cab34fec32e24d805b0f/500x500-000000-80-0-0.jpg", entries: [{ c: "NG", peak: 24 }] },
      { title: "Constantly", kind: "Singles", cover: "https://cdn-images.dzcdn.net/images/cover/c1eb4ca22f60cab34fec32e24d805b0f/500x500-000000-80-0-0.jpg", entries: [{ c: "NG", peak: 25 }] },
      { title: "Julie", kind: "Singles", cover: "https://cdn-images.dzcdn.net/images/cover/c1eb4ca22f60cab34fec32e24d805b0f/500x500-000000-80-0-0.jpg", entries: [{ c: "NG", peak: 28 }] },
      { title: "Guide", kind: "Singles", cover: "https://cdn-images.dzcdn.net/images/cover/c1eb4ca22f60cab34fec32e24d805b0f/500x500-000000-80-0-0.jpg", entries: [{ c: "NG", peak: 30 }] },
      { title: "Gang", kind: "Singles", cover: "https://cdn-images.dzcdn.net/images/cover/41fc3e7a3430f3a5e1c1780b57c3147f/500x500-000000-80-0-0.jpg", entries: [{ c: "FR", peak: 35 }] },
      { title: "Zanzibar", kind: "Singles", cover: "https://cdn-images.dzcdn.net/images/cover/c1eb4ca22f60cab34fec32e24d805b0f/500x500-000000-80-0-0.jpg", entries: [{ c: "NG", peak: 35 }] },
      { title: "Who's True", kind: "Singles", cover: "https://cdn-images.dzcdn.net/images/cover/cf18ec9d4ecd208695b09605a2fe5a10/500x500-000000-80-0-0.jpg", entries: [{ c: "UK", peak: 50 }] },
      { title: "More Pretty Girls", kind: "Singles", cover: "https://cdn-images.dzcdn.net/images/cover/14fd76b71af1029c272d6c0cbc520b4c/500x500-000000-80-0-0.jpg", entries: [{ c: "NL", peak: 78 }] },
      { title: "Timeless", kind: "Albums", cover: "https://cdn-images.dzcdn.net/images/cover/58fc25c84a0a2596d4ba450e836785ca/500x500-000000-80-0-0.jpg", entries: [{ c: "NG", peak: 1 }, { c: "UK", peak: 10 }, { c: "CA", peak: 32 }, { c: "US", peak: 37 }, { c: "IE", peak: 40 }, { c: "NL", peak: 76 }] },
      { title: "5ive", kind: "Albums", cover: "https://cdn-images.dzcdn.net/images/cover/08304eb172098540c635de98530d4929/500x500-000000-80-0-0.jpg", entries: [{ c: "NG", peak: 1 }, { c: "UK", peak: 7 }, { c: "CH", peak: 83 }, { c: "FR", peak: 173 }] },
      { title: "A Better Time", kind: "Albums", cover: "https://cdn-images.dzcdn.net/images/cover/95ecb7f95449cc2d447857e552353218/500x500-000000-80-0-0.jpg", entries: [{ c: "NG", peak: 29 }, { c: "IE", peak: 78 }, { c: "UK", peak: 88 }, { c: "US", peak: 170 }] },
      { title: "Oriade", kind: "Albums", cover: "https://cdn-images.dzcdn.net/images/cover/c1eb4ca22f60cab34fec32e24d805b0f/500x500-000000-80-0-0.jpg", entries: [{ c: "NG", peak: 1 }, { c: "UK", peak: 98 }] },
      { title: "A Good Time", kind: "Albums", cover: "https://cdn-images.dzcdn.net/images/cover/b9fd1fc1b331838b6b0ba9b2eacbf31e/500x500-000000-80-0-0.jpg", entries: [{ c: "NG", peak: 36 }] },
    ],
  },
  {
    slug: "rema",
    name: "Rema",
    fullName: "Divine Ikubor",
    country: "Nigeria",
    flag: "🇳🇬",
    hook: "“Calm Down” is the most widely certified Afrobeats record ever made.",
    spotifyId: "46pWGuE3dSwY3bMMXGBvVS",
    image: "https://i.scdn.co/image/ab6761610000e5ebe3b85a0f16eaab80965c6ef3",
    verifiedOn: AFROBEATS_VERIFIED_ON,
    swept: true,
    chartPublished: { entries: 118, territories: 52, no1s: 17 },
    releases: [
      { title: "Rave & Roses", kind: "Albums", cover: "https://cdn-images.dzcdn.net/images/cover/1d4942d3e1817e9b723eceb6dae28636/500x500-000000-80-0-0.jpg", certs: [{ c: "CA", level: "Platinum" }, { c: "CH", level: "Platinum" }, { c: "FR", level: "Platinum" }, { c: "PL", level: "Platinum" }, { c: "UK", level: "Silver" }] },
      { title: "Rave & Roses Ultra", kind: "Albums", cover: "https://cdn-images.dzcdn.net/images/cover/1d4942d3e1817e9b723eceb6dae28636/500x500-000000-80-0-0.jpg", certs: [{ c: "BR", level: "Platinum", x: 2 }, { c: "US", level: "Gold" }] },
      { title: "Calm Down", kind: "Lead singles", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/ee/f1/dc/eef1dc82-f516-fd0f-581c-3f952a0e2243/22UMGIM92113.rgb.jpg/300x300bb.jpg", certs: [{ c: "FR", level: "Diamond" }, { c: "CA", level: "Diamond" }, { c: "BR", level: "Diamond" }, { c: "PL", level: "Diamond" }, { c: "PT", level: "Platinum", x: 9 }, { c: "AU", level: "Platinum", x: 8 }, { c: "US", level: "Platinum", x: 5 }, { c: "CH", level: "Platinum", x: 4 }, { c: "ES", level: "Platinum", x: 4 }, { c: "NZ", level: "Platinum", x: 4 }, { c: "IT", level: "Platinum", x: 3 }, { c: "UK", level: "Platinum", x: 3 }, { c: "BE", level: "Platinum", x: 2 }, { c: "NG", level: "Platinum", x: 2 }, { c: "DE", level: "Platinum" }, { c: "DK", level: "Platinum" }, { c: "GR", level: "Platinum" }, { c: "NO", level: "Platinum" }, { c: "AT", level: "Gold" }, { c: "NL", level: "Gold" }] },
      { title: "Soundgasm", kind: "Lead singles", cover: "https://cdn-images.dzcdn.net/images/cover/813c9474be279f125aba17ccd6e2cea0/500x500-000000-80-0-0.jpg", certs: [{ c: "FR", level: "Platinum" }, { c: "CH", level: "Gold" }, { c: "NL", level: "Gold" }, { c: "NG", level: "Gold" }, { c: "UK", level: "Silver" }] },
      { title: "Charm", kind: "Lead singles", cover: "https://cdn-images.dzcdn.net/images/cover/1d4942d3e1817e9b723eceb6dae28636/500x500-000000-80-0-0.jpg", certs: [{ c: "NG", level: "Platinum", x: 3 }, { c: "FR", level: "Platinum" }, { c: "UK", level: "Silver" }] },
      { title: "Dumebi", kind: "Lead singles", cover: "https://cdn-images.dzcdn.net/images/cover/e01c854fc22ac6a5c685a89bd686d36d/500x500-000000-80-0-0.jpg", certs: [{ c: "FR", level: "Platinum" }, { c: "CH", level: "Gold" }, { c: "UK", level: "Silver" }] },
      { title: "Soweto", kind: "Lead singles", cover: "https://cdn-images.dzcdn.net/images/cover/a21fb655cf3e2fc8b05db68fc6eb34b1/500x500-000000-80-0-0.jpg", certs: [{ c: "NG", level: "Platinum", x: 3 }, { c: "UK", level: "Gold" }] },
      { title: "Bubalu", kind: "Lead singles", cover: "https://cdn-images.dzcdn.net/images/cover/56f2de197c8f55917c66611779ff876c/500x500-000000-80-0-0.jpg", certs: [{ c: "US", level: "Platinum", x: 2 }, { c: "ES", level: "Platinum" }] },
      { title: "Ozeba", kind: "Lead singles", cover: "https://cdn-images.dzcdn.net/images/cover/4891a944de9418f059cabda0c7699160/500x500-000000-80-0-0.jpg", certs: [{ c: "NG", level: "Platinum", x: 3 }] },
      { title: "Fun", kind: "Lead singles", cover: "https://cdn-images.dzcdn.net/images/cover/c8e5156cfb208f46ca97fd26072becce/500x500-000000-80-0-0.jpg", certs: [{ c: "NG", level: "Platinum", x: 3 }] },
      { title: "Benin Boys", kind: "Lead singles", cover: "https://cdn-images.dzcdn.net/images/cover/5e376f766f35708db51b9c3295fef2ce/500x500-000000-80-0-0.jpg", certs: [{ c: "NG", level: "Platinum", x: 2 }] },
      { title: "HeHeHe", kind: "Lead singles", cover: "https://cdn-images.dzcdn.net/images/cover/4891a944de9418f059cabda0c7699160/500x500-000000-80-0-0.jpg", certs: [{ c: "NG", level: "Platinum", x: 2 }] },
      { title: "Baby", kind: "Lead singles", cover: "https://cdn-images.dzcdn.net/images/cover/3208072ca7af2913cacf001dbb11bbec/500x500-000000-80-0-0.jpg", certs: [{ c: "NG", level: "Platinum", x: 2 }] },
      { title: "DND", kind: "Lead singles", cover: "https://cdn-images.dzcdn.net/images/cover/9f343b559a9382c0d35ba0c9eca79159/500x500-000000-80-0-0.jpg", certs: [{ c: "NG", level: "Platinum", x: 2 }] },
      { title: "Holiday", kind: "Lead singles", cover: "https://cdn-images.dzcdn.net/images/cover/d4f61945703f34bba42311d1ec703f94/500x500-000000-80-0-0.jpg", certs: [{ c: "NG", level: "Platinum", x: 2 }] },
      { title: "44", kind: "Lead singles", cover: "https://cdn-images.dzcdn.net/images/cover/951ff73f5aa148d399a8ba428a125fe6/500x500-000000-80-0-0.jpg", certs: [{ c: "ES", level: "Platinum" }] },
      { title: "Bout U", kind: "Lead singles", cover: "https://cdn-images.dzcdn.net/images/cover/6d2d72d718d4ad08f355e40b0ec94a33/500x500-000000-80-0-0.jpg", certs: [{ c: "NG", level: "Platinum" }] },
      { title: "Azaman", kind: "Lead singles", cover: "https://cdn-images.dzcdn.net/images/cover/4891a944de9418f059cabda0c7699160/500x500-000000-80-0-0.jpg", certs: [{ c: "NG", level: "Platinum" }] },
      { title: "Yayo", kind: "Lead singles", cover: "https://cdn-images.dzcdn.net/images/cover/4891a944de9418f059cabda0c7699160/500x500-000000-80-0-0.jpg", certs: [{ c: "NG", level: "Platinum" }] },
      { title: "Trouble Maker", kind: "Lead singles", cover: "https://cdn-images.dzcdn.net/images/cover/9f343b559a9382c0d35ba0c9eca79159/500x500-000000-80-0-0.jpg", certs: [{ c: "NG", level: "Gold" }] },
      { title: "Corny", kind: "Lead singles", cover: "https://cdn-images.dzcdn.net/images/cover/e01c854fc22ac6a5c685a89bd686d36d/500x500-000000-80-0-0.jpg", certs: [{ c: "FR", level: "Gold" }] },
      { title: "Fame – A COLORS ENCORE", kind: "Lead singles", cover: "https://cdn-images.dzcdn.net/images/cover/a2721518ec013b2e6c36a4bd9fa08383/500x500-000000-80-0-0.jpg", certs: [{ c: "BR", level: "Gold" }] },
      { title: "Ginger Me", kind: "Lead singles", cover: "https://cdn-images.dzcdn.net/images/cover/1232dc64734f222e05a866a61860169c/500x500-000000-80-0-0.jpg", certs: [{ c: "NG", level: "Gold" }] },
      { title: "HEIS", kind: "Lead singles", cover: "https://cdn-images.dzcdn.net/images/cover/4891a944de9418f059cabda0c7699160/500x500-000000-80-0-0.jpg", certs: [{ c: "NG", level: "Gold" }] },
      { title: "War Machine (ft. ODUMODUBLVCK)", kind: "Lead singles", cover: "https://cdn-images.dzcdn.net/images/cover/4891a944de9418f059cabda0c7699160/500x500-000000-80-0-0.jpg", certs: [{ c: "NG", level: "Gold" }] },
      { title: "Kelebu", kind: "Lead singles", cover: "https://cdn-images.dzcdn.net/images/cover/9762353430bf3c5816735dca5d916a96/500x500-000000-80-0-0.jpg", certs: [{ c: "NG", level: "Gold" }] },
      { title: "March Am", kind: "Lead singles", cover: "https://cdn-images.dzcdn.net/images/cover/4891a944de9418f059cabda0c7699160/500x500-000000-80-0-0.jpg", certs: [{ c: "NG", level: "Gold" }] },
      { title: "Reason You", kind: "Lead singles", cover: "https://cdn-images.dzcdn.net/images/cover/d4f61945703f34bba42311d1ec703f94/500x500-000000-80-0-0.jpg", certs: [{ c: "NG", level: "Gold" }] },
      { title: "Red Potion", kind: "Lead singles", cover: "https://cdn-images.dzcdn.net/images/cover/9f343b559a9382c0d35ba0c9eca79159/500x500-000000-80-0-0.jpg", certs: [{ c: "NG", level: "Gold" }] },
      { title: "Bounce", kind: "Lead singles", cover: "https://cdn-images.dzcdn.net/images/cover/e26def467fccdcadca010b8c0f00fd0f/500x500-000000-80-0-0.jpg", certs: [{ c: "NG", level: "Silver" }] },
      { title: "Don't Leave", kind: "Lead singles", cover: "https://cdn-images.dzcdn.net/images/cover/9f343b559a9382c0d35ba0c9eca79159/500x500-000000-80-0-0.jpg", certs: [{ c: "NG", level: "Silver" }] },
      { title: "Egungun", kind: "Lead singles", cover: "https://cdn-images.dzcdn.net/images/cover/4891a944de9418f059cabda0c7699160/500x500-000000-80-0-0.jpg", certs: [{ c: "NG", level: "Silver" }] },
      { title: "Hov", kind: "Lead singles", cover: "https://cdn-images.dzcdn.net/images/cover/ae4a39ae2d54495e119257e315477b0b/500x500-000000-80-0-0.jpg", certs: [{ c: "NG", level: "Silver" }] },
      { title: "Now I Know", kind: "Lead singles", cover: "https://cdn-images.dzcdn.net/images/cover/4891a944de9418f059cabda0c7699160/500x500-000000-80-0-0.jpg", certs: [{ c: "NG", level: "Silver" }] },
      { title: "Time N Affection (w/ Chris Brown)", kind: "Lead singles", cover: "https://cdn-images.dzcdn.net/images/cover/e43cc1d22a556fa87272c55c933bb4d7/500x500-000000-80-0-0.jpg", certs: [{ c: "NG", level: "Silver" }] },
      { title: "Fi Kan We Kan", kind: "Featured appearances", cover: "https://cdn-images.dzcdn.net/images/cover/e4c2c39678f951dd57f09d2e98cd4062/500x500-000000-80-0-0.jpg", certs: [{ c: "NG", level: "Platinum", x: 3 }] },
      { title: "Favourite Girl", kind: "Featured appearances", cover: "https://cdn-images.dzcdn.net/images/cover/6f7959be27296229ca33841aa07d5c79/500x500-000000-80-0-0.jpg", certs: [{ c: "NG", level: "Platinum", x: 3 }] },
      { title: "Who's Dat Girl", kind: "Featured appearances", cover: "https://cdn-images.dzcdn.net/images/cover/fe3deba215d998d74542663a84621852/500x500-000000-80-0-0.jpg", certs: [{ c: "NG", level: "Platinum" }] },
      { title: "Won Da Mo", kind: "Featured appearances", cover: "https://cdn-images.dzcdn.net/images/cover/342ebddd40c9c6b60b9d432d7e609f20/500x500-000000-80-0-0.jpg", certs: [{ c: "NG", level: "Platinum" }] },
      { title: "Secondhand", kind: "Featured appearances", cover: "https://cdn-images.dzcdn.net/images/cover/123eb0268dfea84370a28c4a2114dc28/500x500-000000-80-0-0.jpg", certs: [{ c: "CA", level: "Gold" }] },
      { title: "Toxic", kind: "Featured appearances", cover: "https://cdn-images.dzcdn.net/images/cover/1732de52d38b7e0d8cd01c52c1057ccd/500x500-000000-80-0-0.jpg", certs: [{ c: "FR", level: "Gold" }] },
      { title: "Compromise (Fireboy DML ft. Rema)", kind: "Featured appearances", cover: "https://cdn-images.dzcdn.net/images/cover/48963b4c8969105192017e3dbe543fc9/500x500-000000-80-0-0.jpg", certs: [{ c: "NG", level: "Gold" }] },
      { title: "Lalala (Young Jonn & Rema)", kind: "Featured appearances", cover: "https://cdn-images.dzcdn.net/images/cover/0dd0b79a37a28f75ab7f61b38d0dccda/500x500-000000-80-0-0.jpg", certs: [{ c: "NG", level: "Gold" }] },
      { title: "Dimension (JAE5 ft. Skepta & Rema)", kind: "Featured appearances", cover: "https://cdn-images.dzcdn.net/images/cover/1a396a54bf82fb0a7cc1eb27daaf3eea/500x500-000000-80-0-0.jpg", certs: [{ c: "NG", level: "Silver" }] },
      { title: "Mukulu (Olamide & Rema)", kind: "Featured appearances", cover: "https://cdn-images.dzcdn.net/images/cover/498d4ae81da58e1fcf5e2704a99e0ed8/500x500-000000-80-0-0.jpg", certs: [{ c: "NG", level: "Silver" }] },
      { title: "Too Correct (Crayon & Rema)", kind: "Featured appearances", cover: "https://cdn-images.dzcdn.net/images/cover/b49bdecec26f2e3007f2b2c947cd6efe/500x500-000000-80-0-0.jpg", certs: [{ c: "NG", level: "Silver" }] },
    ],
    charts: [
      { title: "Calm Down", kind: "Singles", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/ee/f1/dc/eef1dc82-f516-fd0f-581c-3f952a0e2243/22UMGIM92113.rgb.jpg/300x300bb.jpg", entries: [{ c: "GLBX", peak: 1 }, { c: "BE", peak: 1 }, { c: "CA", peak: 1 }, { c: "CH", peak: 1 }, { c: "IN", peak: 1 }, { c: "LU", peak: 1 }, { c: "NL", peak: 1 }, { c: "PT", peak: 1 }, { c: "FR", peak: 2 }, { c: "KZ", peak: 2 }, { c: "LB", peak: 2 }, { c: "MD", peak: 2 }, { c: "NG", peak: 2 }, { c: "AE", peak: 3 }, { c: "UK", peak: 3 }, { c: "US", peak: 3 }, { c: "ZA", peak: 3 }, { c: "GR", peak: 4 }, { c: "IE", peak: 5 }, { c: "HU", peak: 6 }, { c: "NI", peak: 6 }, { c: "AT", peak: 7 }, { c: "NZ", peak: 7 }, { c: "BY", peak: 8 }, { c: "MY", peak: 8 }, { c: "PA", peak: 9 }, { c: "PY", peak: 9 }, { c: "SK", peak: 10 }, { c: "AU", peak: 11 }, { c: "RO", peak: 11 }, { c: "SG", peak: 11 }, { c: "PL", peak: 14 }, { c: "DE", peak: 15 }, { c: "UY", peak: 15 }, { c: "RU", peak: 16 }, { c: "MX", peak: 16 }, { c: "LV", peak: 18 }, { c: "EE", peak: 19 }, { c: "ES", peak: 23 }, { c: "HR", peak: 23 }, { c: "LT", peak: 23 }, { c: "PE", peak: 23 }, { c: "DK", peak: 25 }, { c: "IT", peak: 26 }, { c: "IS", peak: 31 }, { c: "CZ", peak: 36 }, { c: "SE", peak: 48 }, { c: "AR", peak: 62 }, { c: "VE", peak: 65 }] },
      { title: "Secondhand", kind: "Singles", cover: "https://cdn-images.dzcdn.net/images/cover/123eb0268dfea84370a28c4a2114dc28/500x500-000000-80-0-0.jpg", entries: [{ c: "GR", peak: 18 }, { c: "US", peak: 29 }, { c: "CA", peak: 32 }, { c: "CH", peak: 33 }, { c: "GLBX", peak: 39 }, { c: "PT", peak: 40 }, { c: "UK", peak: 51 }, { c: "IE", peak: 65 }, { c: "AT", peak: 68 }, { c: "DE", peak: 80 }, { c: "SK", peak: 80 }] },
      { title: "Bubalu", kind: "Singles", cover: "https://cdn-images.dzcdn.net/images/cover/56f2de197c8f55917c66611779ff876c/500x500-000000-80-0-0.jpg", entries: [{ c: "CO", peak: 7 }, { c: "PE", peak: 14 }, { c: "EC", peak: 21 }, { c: "ES", peak: 23 }, { c: "PA", peak: 41 }, { c: "AR", peak: 61 }] },
      { title: "Baby", kind: "Singles", cover: "https://cdn-images.dzcdn.net/images/cover/3208072ca7af2913cacf001dbb11bbec/500x500-000000-80-0-0.jpg", entries: [{ c: "NG", peak: 1 }, { c: "UK", peak: 53 }, { c: "CA", peak: 98 }, { c: "GLBX", peak: 148 }, { c: "FR", peak: 196 }] },
      { title: "Soweto", kind: "Singles", cover: "https://cdn-images.dzcdn.net/images/cover/a21fb655cf3e2fc8b05db68fc6eb34b1/500x500-000000-80-0-0.jpg", entries: [{ c: "NG", peak: 4 }, { c: "LU", peak: 17 }, { c: "UK", peak: 65 }, { c: "CA", peak: 76 }, { c: "GLBX", peak: 175 }] },
      { title: "Charm", kind: "Singles", cover: "https://cdn-images.dzcdn.net/images/cover/1d4942d3e1817e9b723eceb6dae28636/500x500-000000-80-0-0.jpg", entries: [{ c: "NG", peak: 1 }, { c: "SR", peak: 10 }, { c: "FR", peak: 77 }, { c: "CH", peak: 80 }] },
      { title: "Soundgasm", kind: "Singles", cover: "https://cdn-images.dzcdn.net/images/cover/813c9474be279f125aba17ccd6e2cea0/500x500-000000-80-0-0.jpg", entries: [{ c: "NG", peak: 3 }, { c: "NL", peak: 60 }, { c: "FR", peak: 179 }] },
      { title: "Toxic", kind: "Singles", cover: "https://cdn-images.dzcdn.net/images/cover/1732de52d38b7e0d8cd01c52c1057ccd/500x500-000000-80-0-0.jpg", entries: [{ c: "FR", peak: 14 }, { c: "BE", peak: 25 }, { c: "CH", peak: 43 }] },
      { title: "Benin Boys", kind: "Singles", cover: "https://cdn-images.dzcdn.net/images/cover/5e376f766f35708db51b9c3295fef2ce/500x500-000000-80-0-0.jpg", entries: [{ c: "NG", peak: 1 }] },
      { title: "Fi Kan We Kan", kind: "Singles", cover: "https://cdn-images.dzcdn.net/images/cover/e4c2c39678f951dd57f09d2e98cd4062/500x500-000000-80-0-0.jpg", entries: [{ c: "NG", peak: 1 }] },
      { title: "FUN", kind: "Singles", cover: "https://cdn-images.dzcdn.net/images/cover/c8e5156cfb208f46ca97fd26072becce/500x500-000000-80-0-0.jpg", entries: [{ c: "NG", peak: 1 }] },
      { title: "LaLaLa", kind: "Singles", cover: "https://cdn-images.dzcdn.net/images/cover/0dd0b79a37a28f75ab7f61b38d0dccda/500x500-000000-80-0-0.jpg", entries: [{ c: "NG", peak: 1 }] },
      { title: "Won Da Mo", kind: "Singles", cover: "https://cdn-images.dzcdn.net/images/cover/342ebddd40c9c6b60b9d432d7e609f20/500x500-000000-80-0-0.jpg", entries: [{ c: "NG", peak: 1 }] },
      { title: "Bout U", kind: "Singles", cover: "https://cdn-images.dzcdn.net/images/cover/6d2d72d718d4ad08f355e40b0ec94a33/500x500-000000-80-0-0.jpg", entries: [{ c: "NG", peak: 2 }] },
      { title: "Who's Dat Girl", kind: "Singles", cover: "https://cdn-images.dzcdn.net/images/cover/fe3deba215d998d74542663a84621852/500x500-000000-80-0-0.jpg", entries: [{ c: "NG", peak: 2 }] },
      { title: "HEHEHE", kind: "Singles", cover: "https://cdn-images.dzcdn.net/images/cover/4891a944de9418f059cabda0c7699160/500x500-000000-80-0-0.jpg", entries: [{ c: "NG", peak: 3 }] },
      { title: "OZEBA", kind: "Singles", cover: "https://cdn-images.dzcdn.net/images/cover/4891a944de9418f059cabda0c7699160/500x500-000000-80-0-0.jpg", entries: [{ c: "NG", peak: 3 }] },
      { title: "Favorite Girl", kind: "Singles", cover: "https://cdn-images.dzcdn.net/images/cover/6f7959be27296229ca33841aa07d5c79/500x500-000000-80-0-0.jpg", entries: [{ c: "NG", peak: 3 }] },
      { title: "Kelebu", kind: "Singles", cover: "https://cdn-images.dzcdn.net/images/cover/9762353430bf3c5816735dca5d916a96/500x500-000000-80-0-0.jpg", entries: [{ c: "NG", peak: 5 }] },
      { title: "YAYO", kind: "Singles", cover: "https://cdn-images.dzcdn.net/images/cover/4891a944de9418f059cabda0c7699160/500x500-000000-80-0-0.jpg", entries: [{ c: "NG", peak: 6 }] },
      { title: "Goals", kind: "Singles", cover: "https://cdn-images.dzcdn.net/images/cover/8d26b51a325ab59c594708d1c8c71bf2/500x500-000000-80-0-0.jpg", entries: [{ c: "NG", peak: 62 }] },
      { title: "44", kind: "Singles", cover: "https://cdn-images.dzcdn.net/images/cover/951ff73f5aa148d399a8ba428a125fe6/500x500-000000-80-0-0.jpg", entries: [{ c: "ES", peak: 17 }] },
      { title: "Dimension", kind: "Singles", cover: "https://cdn-images.dzcdn.net/images/cover/1a396a54bf82fb0a7cc1eb27daaf3eea/500x500-000000-80-0-0.jpg", entries: [{ c: "UK", peak: 58 }] },
      { title: "One Time", kind: "Singles", cover: "https://cdn-images.dzcdn.net/images/cover/ba08c9e25ee1fcea15893d5e09706fcb/500x500-000000-80-0-0.jpg", entries: [{ c: "FR", peak: 171 }] },
      { title: "Rave & Roses / Rave & Roses", kind: "Albums", cover: "https://cdn-images.dzcdn.net/images/cover/1d4942d3e1817e9b723eceb6dae28636/500x500-000000-80-0-0.jpg", entries: [{ c: "NG", peak: 2 }, { c: "NL", peak: 13 }, { c: "CA", peak: 15 }, { c: "FR", peak: 31 }, { c: "US", peak: 81 }, { c: "BE", peak: 189 }] },
      { title: "HEIS", kind: "Albums", cover: "https://cdn-images.dzcdn.net/images/cover/4891a944de9418f059cabda0c7699160/500x500-000000-80-0-0.jpg", entries: [{ c: "NG", peak: 1 }, { c: "UK", peak: 90 }, { c: "CH", peak: 99 }, { c: "BE", peak: 131 }, { c: "FR", peak: 136 }] },
      { title: "Ravage", kind: "Albums", cover: "https://cdn-images.dzcdn.net/images/cover/9f343b559a9382c0d35ba0c9eca79159/500x500-000000-80-0-0.jpg", entries: [{ c: "NG", peak: 1 }] },
      { title: "Rema", kind: "Albums", cover: "https://cdn-images.dzcdn.net/images/cover/a8333ffad3f9910430485cdb9ae8f55e/500x500-000000-80-0-0.jpg", entries: [{ c: "NG", peak: 54 }] },
    ],
  },
  {
    slug: "tems",
    name: "Tems",
    fullName: "Temilade Openiyi",
    country: "Nigeria",
    flag: "🇳🇬",
    hook: "Holds a US Diamond — the only artist in this field who does.",
    spotifyId: "687cZJR45JO7jhk1LHIbgq",
    image: "https://i.scdn.co/image/ab6761610000e5eb22d7d6f8981c7a27bf68a382",
    verifiedOn: AFROBEATS_VERIFIED_ON,
    swept: true,
    chartPublished: { entries: 124, territories: 44, no1s: 7 },
    releases: [
      { title: "Born in the Wild", kind: "Albums", cover: "https://cdn-images.dzcdn.net/images/cover/66c0e3ff739ce671cee90fea6eb1047c/500x500-000000-80-0-0.jpg", certs: [{ c: "NZ", level: "Gold" }, { c: "UK", level: "Silver" }] },
      { title: "Me & U", kind: "Lead singles", cover: "https://cdn-images.dzcdn.net/images/cover/21ffdcad2bde4b25ba9a5a3a53193b05/500x500-000000-80-0-0.jpg", certs: [{ c: "UK", level: "Platinum" }, { c: "NG", level: "Platinum" }, { c: "NZ", level: "Platinum" }, { c: "PT", level: "Platinum" }, { c: "US", level: "Gold" }, { c: "FR", level: "Gold" }, { c: "CA", level: "Gold" }, { c: "CH", level: "Gold" }] },
      { title: "Free Mind", kind: "Lead singles", cover: "https://cdn-images.dzcdn.net/images/cover/53e9db9663c87b34723c17bcf9c2a8e8/500x500-000000-80-0-0.jpg", certs: [{ c: "US", level: "Platinum", x: 2 }, { c: "CA", level: "Platinum" }, { c: "NZ", level: "Platinum" }, { c: "UK", level: "Gold" }] },
      { title: "Higher", kind: "Lead singles", cover: "https://cdn-images.dzcdn.net/images/cover/53e9db9663c87b34723c17bcf9c2a8e8/500x500-000000-80-0-0.jpg", certs: [{ c: "US", level: "Platinum" }, { c: "NZ", level: "Platinum" }, { c: "CA", level: "Gold" }, { c: "UK", level: "Silver" }] },
      { title: "Damages", kind: "Lead singles", cover: "https://cdn-images.dzcdn.net/images/cover/3d1528266cd1263f06d630c1c73376d5/500x500-000000-80-0-0.jpg", certs: [{ c: "CA", level: "Gold" }, { c: "NG", level: "Gold" }, { c: "UK", level: "Silver" }] },
      { title: "Love Me JeJe", kind: "Lead singles", cover: "https://cdn-images.dzcdn.net/images/cover/4bfd7acfa6aaa14c1497f19aeb5a0536/500x500-000000-80-0-0.jpg", certs: [{ c: "NZ", level: "Platinum" }, { c: "UK", level: "Gold" }, { c: "NG", level: "Gold" }] },
      { title: "Found", kind: "Lead singles", cover: "https://cdn-images.dzcdn.net/images/cover/b3aea8ba7c55e2eafd6672ff29668bdb/500x500-000000-80-0-0.jpg", certs: [{ c: "US", level: "Gold" }, { c: "CA", level: "Gold" }, { c: "NZ", level: "Gold" }] },
      { title: "Isaka", kind: "Lead singles", cover: "https://cdn-images.dzcdn.net/images/cover/d015c74bed325b8928343913858fb3c2/500x500-000000-80-0-0.jpg", certs: [{ c: "NG", level: "Platinum" }] },
      { title: "Replay", kind: "Lead singles", cover: "https://cdn-images.dzcdn.net/images/cover/b3aea8ba7c55e2eafd6672ff29668bdb/500x500-000000-80-0-0.jpg", certs: [{ c: "NZ", level: "Gold" }] },
      { title: "Get It Right (ft. Asake)", kind: "Lead singles", cover: "https://cdn-images.dzcdn.net/images/cover/66c0e3ff739ce671cee90fea6eb1047c/500x500-000000-80-0-0.jpg", certs: [{ c: "NG", level: "Silver" }] },
      { title: "Raindance", kind: "Featured appearances", cover: "https://cdn-images.dzcdn.net/images/cover/02552930a9bbf685ec4f683ff0ca2029/500x500-000000-80-0-0.jpg", certs: [{ c: "UK", level: "Platinum", x: 2 }, { c: "PT", level: "Platinum", x: 2 }, { c: "BR", level: "Platinum", x: 2 }, { c: "GR", level: "Platinum", x: 2 }, { c: "FR", level: "Platinum" }, { c: "CA", level: "Platinum" }, { c: "BE", level: "Platinum" }, { c: "NL", level: "Platinum" }, { c: "NZ", level: "Platinum" }, { c: "AU", level: "Platinum" }, { c: "DK", level: "Gold" }, { c: "IT", level: "Gold" }, { c: "NG", level: "Gold" }, { c: "PL", level: "Gold" }] },
      { title: "Wait For U", kind: "Featured appearances", cover: "https://cdn-images.dzcdn.net/images/cover/d1bd3da6698dd5eafc5b4514317039c4/500x500-000000-80-0-0.jpg", certs: [{ c: "US", level: "Diamond" }, { c: "NZ", level: "Platinum", x: 4 }, { c: "UK", level: "Platinum", x: 2 }, { c: "CA", level: "Platinum", x: 2 }, { c: "NG", level: "Platinum", x: 2 }, { c: "AU", level: "Platinum", x: 2 }, { c: "PT", level: "Platinum", x: 2 }, { c: "DK", level: "Platinum" }, { c: "FR", level: "Gold" }, { c: "AT", level: "Gold" }, { c: "IT", level: "Gold" }, { c: "ES", level: "Gold" }, { c: "PL", level: "Gold" }] },
      { title: "Essence", kind: "Featured appearances", cover: "https://cdn-images.dzcdn.net/images/cover/ee712ec0084d50159ae6564de833ce12/500x500-000000-80-0-0.jpg", certs: [{ c: "US", level: "Platinum", x: 5 }, { c: "CA", level: "Platinum", x: 3 }, { c: "NZ", level: "Platinum", x: 3 }, { c: "NG", level: "Platinum", x: 2 }, { c: "ZA", level: "Platinum" }, { c: "UK", level: "Platinum" }, { c: "CH", level: "Platinum" }, { c: "FR", level: "Gold" }] },
      { title: "Fountains", kind: "Featured appearances", cover: "https://cdn-images.dzcdn.net/images/cover/ea8f80f2edb20885ac8aed8751716794/500x500-000000-80-0-0.jpg", certs: [{ c: "NZ", level: "Gold" }, { c: "AU", level: "Gold" }, { c: "UK", level: "Silver" }] },
      { title: "Move", kind: "Featured appearances", cover: "https://cdn-images.dzcdn.net/images/cover/c3e2a951678a28a3f541a69c866583d4/500x500-000000-80-0-0.jpg", certs: [{ c: "BR", level: "Platinum" }, { c: "US", level: "Gold" }] },
    ],
    charts: [
      { title: "Raindance", kind: "Singles", cover: "https://cdn-images.dzcdn.net/images/cover/02552930a9bbf685ec4f683ff0ca2029/500x500-000000-80-0-0.jpg", entries: [{ c: "UK", peak: 1 }, { c: "LU", peak: 1 }, { c: "GR", peak: 1 }, { c: "AE", peak: 1 }, { c: "SA", peak: 1 }, { c: "CH", peak: 2 }, { c: "LT", peak: 2 }, { c: "IN", peak: 2 }, { c: "LB", peak: 3 }, { c: "ZA", peak: 4 }, { c: "PT", peak: 4 }, { c: "SE", peak: 4 }, { c: "NL", peak: 5 }, { c: "DK", peak: 5 }, { c: "LV", peak: 5 }, { c: "NZ", peak: 5 }, { c: "IE", peak: 6 }, { c: "SK", peak: 6 }, { c: "NG", peak: 7 }, { c: "DE", peak: 7 }, { c: "AT", peak: 7 }, { c: "CZ", peak: 8 }, { c: "RU", peak: 8 }, { c: "AU", peak: 8 }, { c: "GLB", peak: 8 }, { c: "NO", peak: 12 }, { c: "MY", peak: 12 }, { c: "KZ", peak: 12 }, { c: "GLBX", peak: 12 }, { c: "RO", peak: 14 }, { c: "IS", peak: 15 }, { c: "SG", peak: 17 }, { c: "BE", peak: 19 }, { c: "FR", peak: 19 }, { c: "HU", peak: 25 }, { c: "CA", peak: 25 }, { c: "SR", peak: 29 }, { c: "FI", peak: 30 }, { c: "IT", peak: 40 }, { c: "US", peak: 49 }, { c: "PH", peak: 53 }, { c: "PL", peak: 65 }, { c: "MD", peak: 69 }, { c: "EE", peak: 80 }] },
      { title: "Wait For U", kind: "Singles", cover: "https://cdn-images.dzcdn.net/images/cover/d1bd3da6698dd5eafc5b4514317039c4/500x500-000000-80-0-0.jpg", entries: [{ c: "US", peak: 1 }, { c: "ZA", peak: 1 }, { c: "GLBX", peak: 2 }, { c: "CA", peak: 3 }, { c: "NZ", peak: 7 }, { c: "UK", peak: 8 }, { c: "IS", peak: 11 }, { c: "AU", peak: 12 }, { c: "LU", peak: 17 }, { c: "NG", peak: 18 }, { c: "IE", peak: 21 }, { c: "GR", peak: 21 }, { c: "LT", peak: 28 }, { c: "GLB", peak: 29 }, { c: "CH", peak: 34 }, { c: "NL", peak: 59 }, { c: "AT", peak: 65 }, { c: "PT", peak: 68 }, { c: "DE", peak: 77 }, { c: "SK", peak: 78 }, { c: "FR", peak: 135 }] },
      { title: "Essence", kind: "Singles", cover: "https://cdn-images.dzcdn.net/images/cover/ee712ec0084d50159ae6564de833ce12/500x500-000000-80-0-0.jpg", entries: [{ c: "NG", peak: 2 }, { c: "US", peak: 9 }, { c: "ZA", peak: 15 }, { c: "NZ", peak: 15 }, { c: "UK", peak: 16 }, { c: "GLBX", peak: 28 }, { c: "CA", peak: 30 }, { c: "IE", peak: 41 }, { c: "GLB", peak: 60 }, { c: "NL", peak: 76 }, { c: "CH", peak: 95 }, { c: "PT", peak: 108 }] },
      { title: "Fountains", kind: "Singles", cover: "https://cdn-images.dzcdn.net/images/cover/ea8f80f2edb20885ac8aed8751716794/500x500-000000-80-0-0.jpg", entries: [{ c: "ZA", peak: 14 }, { c: "US", peak: 26 }, { c: "GLBX", peak: 26 }, { c: "AU", peak: 36 }, { c: "CA", peak: 36 }, { c: "LT", peak: 40 }, { c: "PT", peak: 43 }, { c: "GLB", peak: 45 }, { c: "GR", peak: 57 }, { c: "FR", peak: 70 }] },
      { title: "Bunce Road Blues", kind: "Singles", cover: "https://cdn-images.dzcdn.net/images/cover/ba58221a878715b6d99912ce63ea63d5/500x500-000000-80-0-0.jpg", entries: [{ c: "ZA", peak: 10 }, { c: "US", peak: 34 }, { c: "CA", peak: 55 }, { c: "UK", peak: 59 }, { c: "NG", peak: 69 }, { c: "GLBX", peak: 75 }, { c: "PT", peak: 164 }] },
      { title: "Move", kind: "Singles", cover: "https://cdn-images.dzcdn.net/images/cover/c3e2a951678a28a3f541a69c866583d4/500x500-000000-80-0-0.jpg", entries: [{ c: "ZA", peak: 32 }, { c: "GLBX", peak: 53 }, { c: "US", peak: 55 }, { c: "CA", peak: 72 }, { c: "GLB", peak: 179 }] },
      { title: "Love Me JeJe", kind: "Singles", cover: "https://cdn-images.dzcdn.net/images/cover/4bfd7acfa6aaa14c1497f19aeb5a0536/500x500-000000-80-0-0.jpg", entries: [{ c: "NG", peak: 8 }, { c: "UK", peak: 36 }, { c: "NL", peak: 92 }, { c: "IE", peak: 94 }] },
      { title: "Me & U", kind: "Singles", cover: "https://cdn-images.dzcdn.net/images/cover/21ffdcad2bde4b25ba9a5a3a53193b05/500x500-000000-80-0-0.jpg", entries: [{ c: "NG", peak: 8 }, { c: "UK", peak: 34 }, { c: "PT", peak: 102 }] },
      { title: "What You Need", kind: "Singles", cover: "https://cdn-images.dzcdn.net/images/cover/584f40f4d2b62b611a7ab8561b656ff3/500x500-000000-80-0-0.jpg", entries: [{ c: "US", peak: 29 }, { c: "NG", peak: 78 }] },
      { title: "Free Mind", kind: "Singles", cover: "https://cdn-images.dzcdn.net/images/cover/53e9db9663c87b34723c17bcf9c2a8e8/500x500-000000-80-0-0.jpg", entries: [{ c: "US", peak: 46 }, { c: "ZA", peak: 60 }] },
      { title: "Isaka II", kind: "Singles", cover: "https://cdn-images.dzcdn.net/images/cover/d015c74bed325b8928343913858fb3c2/500x500-000000-80-0-0.jpg", entries: [{ c: "NG", peak: 10 }] },
      { title: "Big Daddy", kind: "Singles", cover: "https://cdn-images.dzcdn.net/images/cover/584f40f4d2b62b611a7ab8561b656ff3/500x500-000000-80-0-0.jpg", entries: [{ c: "NG", peak: 63 }] },
      { title: "Burning", kind: "Singles", cover: "https://cdn-images.dzcdn.net/images/cover/66c0e3ff739ce671cee90fea6eb1047c/500x500-000000-80-0-0.jpg", entries: [{ c: "NG", peak: 72 }] },
      { title: "I Think You're Special", kind: "Singles", cover: "https://cdn-images.dzcdn.net/images/cover/67541e55a567744d91f140a7d5bc1727/500x500-000000-80-0-0.jpg", entries: [{ c: "CA", peak: 80 }] },
      { title: "Born In The Wild", kind: "Albums", cover: "https://cdn-images.dzcdn.net/images/cover/66c0e3ff739ce671cee90fea6eb1047c/500x500-000000-80-0-0.jpg", entries: [{ c: "NG", peak: 3 }, { c: "CH", peak: 22 }, { c: "UK", peak: 25 }, { c: "NL", peak: 29 }, { c: "CA", peak: 52 }, { c: "US", peak: 56 }, { c: "PT", peak: 68 }, { c: "FR", peak: 74 }, { c: "BE", peak: 86 }] },
      { title: "Love Is a Kingdom", kind: "Albums", cover: "https://cdn-images.dzcdn.net/images/cover/584f40f4d2b62b611a7ab8561b656ff3/500x500-000000-80-0-0.jpg", entries: [{ c: "PT", peak: 108 }] },
    ],
  },
  {
    slug: "tyla",
    name: "Tyla",
    fullName: "Tyla Laura Seethal",
    country: "South Africa",
    flag: "🇿🇦",
    hook: "“Water” took amapiano worldwide and won the first Best African Music Performance Grammy.",
    spotifyId: "3SozjO3Lat463tQICI9LcE",
    image: "https://i.scdn.co/image/ab6761610000e5eb69719e4164b893213a525d25",
    verifiedOn: AFROBEATS_VERIFIED_ON,
    swept: true,
    chartPublished: { entries: 174, territories: 52, no1s: 3 },
    releases: [
      { title: "Tyla", kind: "Albums", cover: "https://cdn-images.dzcdn.net/images/cover/33cc78686fd6ca7863758a5408d6eabe/500x500-000000-80-0-0.jpg", certs: [{ c: "CA", level: "Platinum" }, { c: "BR", level: "Platinum" }, { c: "NL", level: "Platinum" }, { c: "NZ", level: "Platinum" }, { c: "US", level: "Gold" }, { c: "UK", level: "Gold" }, { c: "CH", level: "Gold" }, { c: "DK", level: "Gold" }] },
      { title: "Tyla +", kind: "Albums", cover: "https://cdn-images.dzcdn.net/images/cover/33cc78686fd6ca7863758a5408d6eabe/500x500-000000-80-0-0.jpg", certs: [{ c: "NO", level: "Gold" }] },
      { title: "Water", kind: "Lead singles", cover: "https://cdn-images.dzcdn.net/images/cover/b246276eba02e22c9e08605924395480/500x500-000000-80-0-0.jpg", certs: [{ c: "BR", level: "Diamond" }, { c: "FR", level: "Diamond" }, { c: "US", level: "Platinum", x: 4 }, { c: "CA", level: "Platinum", x: 4 }, { c: "PT", level: "Platinum", x: 4 }, { c: "AU", level: "Platinum", x: 4 }, { c: "NZ", level: "Platinum", x: 4 }, { c: "UK", level: "Platinum", x: 2 }, { c: "CH", level: "Platinum", x: 2 }, { c: "HU", level: "Platinum", x: 2 }, { c: "GR", level: "Platinum", x: 2 }, { c: "AT", level: "Platinum" }, { c: "DK", level: "Platinum" }, { c: "ES", level: "Platinum" }, { c: "BE", level: "Platinum" }, { c: "NL", level: "Platinum" }, { c: "NO", level: "Platinum" }, { c: "PL", level: "Platinum" }, { c: "DE", level: "Gold" }, { c: "SE", level: "Gold" }, { c: "IT", level: "Gold" }, { c: "MX", level: "Gold" }, { c: "NG", level: "Gold" }] },
      { title: "Push 2 Start", kind: "Lead singles", cover: "https://cdn-images.dzcdn.net/images/cover/65d6063121e97ede49869ceedc250875/500x500-000000-80-0-0.jpg", certs: [{ c: "US", level: "Platinum" }, { c: "BR", level: "Platinum" }, { c: "NZ", level: "Platinum" }, { c: "CA", level: "Gold" }, { c: "FR", level: "Gold" }, { c: "GR", level: "Gold" }, { c: "HU", level: "Gold" }, { c: "UK", level: "Gold" }] },
      { title: "Chanel", kind: "Lead singles", cover: "https://cdn-images.dzcdn.net/images/cover/5abac68deeb720d1aaea68ae179608df/500x500-000000-80-0-0.jpg", certs: [{ c: "US", level: "Gold" }, { c: "AU", level: "Gold" }, { c: "FR", level: "Gold" }, { c: "NZ", level: "Gold" }, { c: "PT", level: "Gold" }, { c: "CH", level: "Gold" }, { c: "UK", level: "Silver" }] },
      { title: "Truth or Dare", kind: "Lead singles", cover: "https://cdn-images.dzcdn.net/images/cover/1ae9486180d1f50e7dbbb099b1e66825/500x500-000000-80-0-0.jpg", certs: [{ c: "NZ", level: "Platinum" }, { c: "US", level: "Gold" }, { c: "BR", level: "Gold" }, { c: "CA", level: "Gold" }, { c: "PT", level: "Gold" }, { c: "UK", level: "Silver" }] },
      { title: "Jump", kind: "Lead singles", cover: "https://cdn-images.dzcdn.net/images/cover/373ba020e129cca1360301be7dc5701a/500x500-000000-80-0-0.jpg", certs: [{ c: "US", level: "Gold" }, { c: "BR", level: "Gold" }, { c: "CA", level: "Gold" }, { c: "NZ", level: "Gold" }, { c: "UK", level: "Silver" }] },
      { title: "Art", kind: "Lead singles", cover: "https://cdn-images.dzcdn.net/images/cover/373ba020e129cca1360301be7dc5701a/500x500-000000-80-0-0.jpg", certs: [{ c: "US", level: "Gold" }, { c: "NZ", level: "Gold" }] },
      { title: "Dynamite — Tyla & Wizkid", kind: "Lead singles", cover: "https://cdn-images.dzcdn.net/images/cover/b9de2c8e816295f124dd7b227f7fa668/500x500-000000-80-0-0.jpg", certs: [{ c: "NG", level: "Gold" }] },
      { title: "Show Me Love", kind: "Featured appearances", cover: "https://cdn-images.dzcdn.net/images/cover/33cc78686fd6ca7863758a5408d6eabe/500x500-000000-80-0-0.jpg", certs: [{ c: "GR", level: "Gold" }] },
    ],
    charts: [
      { title: "Water", kind: "Singles", cover: "https://cdn-images.dzcdn.net/images/cover/b246276eba02e22c9e08605924395480/500x500-000000-80-0-0.jpg", entries: [{ c: "AE", peak: 1 }, { c: "NZ", peak: 1 }, { c: "SR", peak: 1 }, { c: "BG", peak: 2 }, { c: "EE", peak: 3 }, { c: "ZA", peak: 3 }, { c: "UK", peak: 4 }, { c: "PH", peak: 4 }, { c: "GR", peak: 5 }, { c: "AU", peak: 6 }, { c: "GLB", peak: 6 }, { c: "GLBX", peak: 6 }, { c: "IE", peak: 6 }, { c: "LU", peak: 6 }, { c: "NL", peak: 6 }, { c: "US", peak: 7 }, { c: "PT", peak: 9 }, { c: "DK", peak: 10 }, { c: "PA", peak: 10 }, { c: "SE", peak: 10 }, { c: "CH", peak: 11 }, { c: "BE", peak: 12 }, { c: "NG", peak: 13 }, { c: "IS", peak: 14 }, { c: "LT", peak: 14 }, { c: "LV", peak: 14 }, { c: "NO", peak: 14 }, { c: "SG", peak: 14 }, { c: "CA", peak: 15 }, { c: "FR", peak: 22 }, { c: "DE", peak: 25 }, { c: "VE", peak: 36 }, { c: "AT", peak: 46 }, { c: "SK", peak: 57 }, { c: "BR", peak: 59 }, { c: "PL", peak: 83 }, { c: "UA", peak: 86 }] },
      { title: "Chanel", kind: "Singles", cover: "https://cdn-images.dzcdn.net/images/cover/5abac68deeb720d1aaea68ae179608df/500x500-000000-80-0-0.jpg", entries: [{ c: "IN", peak: 2 }, { c: "AE", peak: 3 }, { c: "SR", peak: 3 }, { c: "PH", peak: 4 }, { c: "MY", peak: 5 }, { c: "SG", peak: 6 }, { c: "RS", peak: 7 }, { c: "GLBX", peak: 8 }, { c: "GT", peak: 8 }, { c: "SA", peak: 11 }, { c: "GLB", peak: 11 }, { c: "LB", peak: 12 }, { c: "GR", peak: 14 }, { c: "AU", peak: 15 }, { c: "UK", peak: 15 }, { c: "MT", peak: 16 }, { c: "NZ", peak: 16 }, { c: "NL", peak: 19 }, { c: "EE", peak: 20 }, { c: "LU", peak: 20 }, { c: "CA", peak: 22 }, { c: "CH", peak: 23 }, { c: "ZA", peak: 24 }, { c: "SE", peak: 28 }, { c: "BE", peak: 29 }, { c: "NG", peak: 29 }, { c: "IE", peak: 33 }, { c: "DE", peak: 34 }, { c: "AT", peak: 39 }, { c: "US", peak: 43 }, { c: "PA", peak: 48 }, { c: "PT", peak: 49 }, { c: "FR", peak: 50 }, { c: "NO", peak: 53 }, { c: "IL", peak: 85 }, { c: "LT", peak: 85 }, { c: "KR", peak: 196 }] },
      { title: "She Did It Again", kind: "Singles", cover: "https://cdn-images.dzcdn.net/images/cover/5abac68deeb720d1aaea68ae179608df/500x500-000000-80-0-0.jpg", entries: [{ c: "SE", peak: 2 }, { c: "SR", peak: 4 }, { c: "ZA", peak: 9 }, { c: "GR", peak: 28 }, { c: "NO", peak: 32 }, { c: "CH", peak: 34 }, { c: "DE", peak: 47 }, { c: "AT", peak: 48 }, { c: "CA", peak: 55 }, { c: "US", peak: 59 }, { c: "IE", peak: 61 }, { c: "NG", peak: 62 }, { c: "NL", peak: 62 }, { c: "GLB", peak: 74 }, { c: "GLBX", peak: 79 }, { c: "AU", peak: 87 }, { c: "EE", peak: 91 }, { c: "FR", peak: 110 }, { c: "PT", peak: 125 }] },
      { title: "Push 2 Start", kind: "Singles", cover: "https://cdn-images.dzcdn.net/images/cover/65d6063121e97ede49869ceedc250875/500x500-000000-80-0-0.jpg", entries: [{ c: "SR", peak: 3 }, { c: "ZA", peak: 3 }, { c: "LB", peak: 8 }, { c: "MK", peak: 10 }, { c: "AE", peak: 16 }, { c: "GR", peak: 18 }, { c: "NZ", peak: 20 }, { c: "UK", peak: 23 }, { c: "NG", peak: 30 }, { c: "NL", peak: 38 }, { c: "LT", peak: 40 }, { c: "AU", peak: 44 }, { c: "GLBX", peak: 54 }, { c: "CH", peak: 55 }, { c: "CA", peak: 70 }, { c: "GLB", peak: 70 }, { c: "US", peak: 88 }, { c: "PT", peak: 99 }] },
      { title: "Jump", kind: "Singles", cover: "https://cdn-images.dzcdn.net/images/cover/373ba020e129cca1360301be7dc5701a/500x500-000000-80-0-0.jpg", entries: [{ c: "GR", peak: 31 }, { c: "UK", peak: 38 }, { c: "CH", peak: 49 }, { c: "NL", peak: 51 }, { c: "NG", peak: 57 }, { c: "IE", peak: 66 }, { c: "CA", peak: 87 }, { c: "PT", peak: 179 }, { c: "GLBX", peak: 190 }, { c: "GLB", peak: 195 }] },
      { title: "Talk to Me", kind: "Singles", cover: "https://cdn-images.dzcdn.net/images/cover/cd07d0b83bcc8a17928619b3771e42df/500x500-000000-80-0-0.jpg", entries: [{ c: "BG", peak: 5 }, { c: "EE", peak: 11 }, { c: "SI", peak: 14 }, { c: "NL", peak: 15 }, { c: "LB", peak: 16 }, { c: "KZ", peak: 33 }, { c: "BE", peak: 44 }] },
      { title: "Is It", kind: "Singles", cover: "https://cdn-images.dzcdn.net/images/cover/5abac68deeb720d1aaea68ae179608df/500x500-000000-80-0-0.jpg", entries: [{ c: "ZA", peak: 7 }, { c: "GR", peak: 54 }, { c: "NG", peak: 69 }, { c: "UK", peak: 99 }] },
      { title: "Art", kind: "Singles", cover: "https://cdn-images.dzcdn.net/images/cover/373ba020e129cca1360301be7dc5701a/500x500-000000-80-0-0.jpg", entries: [{ c: "NG", peak: 61 }, { c: "UK", peak: 85 }] },
      { title: "That Girl", kind: "Singles", cover: "https://cdn-images.dzcdn.net/images/cover/5abac68deeb720d1aaea68ae179608df/500x500-000000-80-0-0.jpg", entries: [{ c: "ZA", peak: 5 }, { c: "NG", peak: 48 }] },
      { title: "One Call", kind: "Singles", cover: "https://cdn-images.dzcdn.net/images/cover/a9b6e5da215b7be592fcfc2bfe966703/500x500-000000-80-0-0.jpg", entries: [{ c: "SR", peak: 8 }, { c: "NG", peak: 35 }] },
      { title: "Dynamite", kind: "Singles", cover: "https://cdn-images.dzcdn.net/images/cover/b9de2c8e816295f124dd7b227f7fa668/500x500-000000-80-0-0.jpg", entries: [{ c: "NG", peak: 13 }] },
      { title: "Bliss", kind: "Singles", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/82/9c/a9/829ca9e9-55ae-1a78-8d72-1e5d1794224d/196873111872.jpg/300x300bb.jpg", entries: [{ c: "LB", peak: 19 }] },
      { title: "Game Time", kind: "Singles", cover: "https://cdn-images.dzcdn.net/images/cover/cd9051638bd5d70e43eff9dc09faa344/500x500-000000-80-0-0.jpg", entries: [{ c: "NG", peak: 76 }] },
      { title: "When I'm with You", kind: "Singles", cover: "https://cdn-images.dzcdn.net/images/cover/8e87690a458cb1629014434230b84001/500x500-000000-80-0-0.jpg", entries: [{ c: "TH", peak: 6 }] },
      { title: "Body Go", kind: "Singles", cover: "https://cdn-images.dzcdn.net/images/cover/b6f4a2f8139b305bf9f5d0ab6ffcd01b/500x500-000000-80-0-0.jpg", entries: [{ c: "NG", peak: 31 }] },
      { title: "Memories", kind: "Singles", cover: "https://cdn-images.dzcdn.net/images/cover/78aa5e4e8f3b6c345057c0ecc236fc20/500x500-000000-80-0-0.jpg", entries: [{ c: "NG", peak: 93 }] },
      { title: "Tyla", kind: "Albums", cover: "https://cdn-images.dzcdn.net/images/cover/33cc78686fd6ca7863758a5408d6eabe/500x500-000000-80-0-0.jpg", entries: [{ c: "NL", peak: 11 }, { c: "CH", peak: 12 }, { c: "NZ", peak: 16 }, { c: "UK", peak: 19 }, { c: "NO", peak: 19 }, { c: "PT", peak: 23 }, { c: "US", peak: 24 }, { c: "NG", peak: 25 }, { c: "CA", peak: 26 }, { c: "FR", peak: 31 }, { c: "LT", peak: 36 }, { c: "BE", peak: 44 }, { c: "AT", peak: 48 }, { c: "AU", peak: 48 }, { c: "SE", peak: 57 }, { c: "IE", peak: 59 }, { c: "JP", peak: 65 }, { c: "ES", peak: 73 }, { c: "DE", peak: 86 }] },
      { title: "A\\Pop", kind: "Albums", cover: "https://cdn-images.dzcdn.net/images/cover/5abac68deeb720d1aaea68ae179608df/500x500-000000-80-0-0.jpg", entries: [{ c: "CH", peak: 19 }, { c: "NZ", peak: 21 }, { c: "AU", peak: 28 }, { c: "DE", peak: 37 }, { c: "UK", peak: 43 }, { c: "US", peak: 43 }, { c: "BE", peak: 48 }, { c: "NL", peak: 64 }, { c: "PT", peak: 64 }, { c: "NG", peak: 77 }, { c: "ES", peak: 89 }] },
    ],
  },
  {
    slug: "ayra-starr",
    name: "Ayra Starr",
    fullName: "Oyinkansola Sarah Aderibigbe",
    country: "Nigeria",
    flag: "🇳🇬",
    hook: "The youngest of the field, and the fastest-rising — “Rush” went Diamond in France.",
    spotifyId: "3ZpEKRjHaHANcpk10u6Ntq",
    image: "https://i.scdn.co/image/ab6761610000e5ebc2074e9ac0e35662936cde67",
    verifiedOn: AFROBEATS_VERIFIED_ON,
    swept: true,
    chartPublished: { entries: 78, territories: 29, no1s: 10 },
    releases: [
      { title: "Rush", kind: "Lead singles", cover: "https://cdn-images.dzcdn.net/images/cover/a73bed954d61b52564118ac926925d76/500x500-000000-80-0-0.jpg", certs: [{ c: "FR", level: "Diamond" }, { c: "NG", level: "Platinum", x: 3 }, { c: "UK", level: "Platinum" }, { c: "CA", level: "Platinum" }, { c: "NZ", level: "Platinum" }, { c: "ES", level: "Gold" }, { c: "DK", level: "Gold" }] },
      { title: "Santa", kind: "Lead singles", cover: "https://cdn-images.dzcdn.net/images/cover/965eeb50245f3178580ac5bda885e56b/500x500-000000-80-0-0.jpg", certs: [{ c: "US", level: "Platinum", x: 16 }, { c: "ES", level: "Platinum", x: 5 }, { c: "MX", level: "Platinum", x: 4 }, { c: "PT", level: "Platinum" }, { c: "FR", level: "Gold" }, { c: "IT", level: "Gold" }] },
      { title: "Bloody Samaritan", kind: "Lead singles", cover: "https://cdn-images.dzcdn.net/images/cover/6811d7a880826af2be69b81686f629f2/500x500-000000-80-0-0.jpg", certs: [{ c: "NG", level: "Platinum", x: 2 }, { c: "UK", level: "Silver" }] },
      { title: "Commas", kind: "Lead singles", cover: "https://cdn-images.dzcdn.net/images/cover/d096ea1c1019d1af67c0a2e434890e1e/500x500-000000-80-0-0.jpg", certs: [{ c: "NG", level: "Platinum", x: 2 }, { c: "CA", level: "Gold" }] },
      { title: "Bad Vibes", kind: "Lead singles", cover: "https://cdn-images.dzcdn.net/images/cover/e61faaeb59320961cbd17a1ef7f9e6e7/500x500-000000-80-0-0.jpg", certs: [{ c: "NG", level: "Platinum", x: 2 }] },
      { title: "Sability", kind: "Lead singles", cover: "https://cdn-images.dzcdn.net/images/cover/6d6d6db9d6a54f8735971b8cab496784/500x500-000000-80-0-0.jpg", certs: [{ c: "NG", level: "Platinum" }] },
      { title: "Stamina", kind: "Lead singles", cover: "https://cdn-images.dzcdn.net/images/cover/0c45088ffcfc5d0d7043c51a98d45082/500x500-000000-80-0-0.jpg", certs: [{ c: "NG", level: "Platinum" }] },
      { title: "Who's Dat Girl", kind: "Lead singles", cover: "https://cdn-images.dzcdn.net/images/cover/fe3deba215d998d74542663a84621852/500x500-000000-80-0-0.jpg", certs: [{ c: "NG", level: "Platinum" }] },
      { title: "Gimme Dat", kind: "Lead singles", cover: "https://cdn-images.dzcdn.net/images/cover/2e52f4bf8bdb05c98002b714669ee2c2/500x500-000000-80-0-0.jpg", certs: [{ c: "NG", level: "Platinum" }] },
      { title: "Hot Body", kind: "Lead singles", cover: "https://cdn-images.dzcdn.net/images/cover/4b5a287c8f574407dc5b1b03b5ae0c58/500x500-000000-80-0-0.jpg", certs: [{ c: "NG", level: "Platinum" }] },
      { title: "Away", kind: "Lead singles", cover: "https://cdn-images.dzcdn.net/images/cover/24407cf49fdf864463cb5ca5ad974630/500x500-000000-80-0-0.jpg", certs: [{ c: "NG", level: "Gold" }] },
      { title: "All the Love", kind: "Lead singles", cover: "https://cdn-images.dzcdn.net/images/cover/d30dbeb4d445f5cc6f7f100b830731c4/500x500-000000-80-0-0.jpg", certs: [{ c: "NG", level: "Gold" }] },
      { title: "Beggie Beggie (ft. CKay)", kind: "Lead singles", cover: "https://cdn-images.dzcdn.net/images/cover/b922c719d3a9901f749140e8f532a8d0/500x500-000000-80-0-0.jpg", certs: [{ c: "NG", level: "Gold" }] },
      { title: "Last Heartbreak Song (with Giveon)", kind: "Lead singles", cover: "https://cdn-images.dzcdn.net/images/cover/d096ea1c1019d1af67c0a2e434890e1e/500x500-000000-80-0-0.jpg", certs: [{ c: "NG", level: "Gold" }] },
      { title: "Rhythm & Blues", kind: "Lead singles", cover: "https://cdn-images.dzcdn.net/images/cover/4f920b01bcb9ce9949049741f8720fc7/500x500-000000-80-0-0.jpg", certs: [{ c: "NG", level: "Gold" }] },
      { title: "Fashion Killer", kind: "Lead singles", cover: "https://cdn-images.dzcdn.net/images/cover/b922c719d3a9901f749140e8f532a8d0/500x500-000000-80-0-0.jpg", certs: [{ c: "NG", level: "Silver" }] },
      { title: "Goodbye (Warm Up) (with Asake)", kind: "Lead singles", cover: "https://cdn-images.dzcdn.net/images/cover/d096ea1c1019d1af67c0a2e434890e1e/500x500-000000-80-0-0.jpg", certs: [{ c: "NG", level: "Silver" }] },
      { title: "No Love", kind: "Featured appearances", cover: "https://cdn-images.dzcdn.net/images/cover/7b49d51e89ff07824c8c62043775a2ab/500x500-000000-80-0-0.jpg", certs: [{ c: "FR", level: "Gold" }, { c: "CH", level: "Gold" }] },
      { title: "2 Sugar", kind: "Featured appearances", cover: "https://cdn-images.dzcdn.net/images/cover/e4286ac8a38829b6cf5d225c311bccf7/500x500-000000-80-0-0.jpg", certs: [{ c: "NG", level: "Platinum" }, { c: "CA", level: "Gold" }] },
      { title: "Overloading", kind: "Featured appearances", cover: "https://cdn-images.dzcdn.net/images/cover/7861d849c8157fbffc37ccebf0ee75c5/500x500-000000-80-0-0.jpg", certs: [{ c: "NG", level: "Platinum", x: 4 }] },
      { title: "Ngozi", kind: "Featured appearances", cover: "https://cdn-images.dzcdn.net/images/cover/12ca87c2ea2fa9506d6fc562bd8f5a01/500x500-000000-80-0-0.jpg", certs: [{ c: "NG", level: "Platinum", x: 2 }] },
      { title: "Hypé", kind: "Featured appearances", cover: "https://cdn-images.dzcdn.net/images/cover/c22b652917676317beb469e5bce1cd24/500x500-000000-80-0-0.jpg", certs: [{ c: "FR", level: "Diamond" }] },
      { title: "Won Da Mo", kind: "Featured appearances", cover: "https://cdn-images.dzcdn.net/images/cover/342ebddd40c9c6b60b9d432d7e609f20/500x500-000000-80-0-0.jpg", certs: [{ c: "NG", level: "Platinum" }] },
      { title: "Escaladizzy II", kind: "Featured appearances", cover: "https://cdn-images.dzcdn.net/images/cover/d47d959a99da468afdd69a8f855be482/500x500-000000-80-0-0.jpg", certs: [{ c: "NG", level: "Platinum" }] },
      { title: "Love Don't Cost a Dime", kind: "Featured appearances", cover: "https://cdn-images.dzcdn.net/images/cover/1421f8aa54dc60efbd0ab4034f7ba7f8/500x500-000000-80-0-0.jpg", certs: [{ c: "NG", level: "Platinum" }] },
      { title: "People", kind: "Featured appearances", cover: "https://cdn-images.dzcdn.net/images/cover/0dda3f7dc6c530814d51c9cb6eca57be/500x500-000000-80-0-0.jpg", certs: [{ c: "NG", level: "Gold" }] },
    ],
    charts: [
      { title: "Rush", kind: "Singles", cover: "https://cdn-images.dzcdn.net/images/cover/a73bed954d61b52564118ac926925d76/500x500-000000-80-0-0.jpg", entries: [{ c: "NG", peak: 1 }, { c: "SR", peak: 1 }, { c: "LB", peak: 3 }, { c: "FR", peak: 5 }, { c: "ZA", peak: 6 }, { c: "LU", peak: 8 }, { c: "BE", peak: 16 }, { c: "NL", peak: 17 }, { c: "CH", peak: 18 }, { c: "HU", peak: 18 }, { c: "UK", peak: 24 }, { c: "IE", peak: 56 }, { c: "SE", peak: 56 }, { c: "CA", peak: 63 }, { c: "GLB", peak: 87 }] },
      { title: "Santa", kind: "Singles", cover: "https://cdn-images.dzcdn.net/images/cover/965eeb50245f3178580ac5bda885e56b/500x500-000000-80-0-0.jpg", entries: [{ c: "ES", peak: 1 }, { c: "PE", peak: 1 }, { c: "BO", peak: 1 }, { c: "CO", peak: 2 }, { c: "EC", peak: 2 }, { c: "PA", peak: 5 }, { c: "CL", peak: 7 }, { c: "AR", peak: 11 }, { c: "GLB", peak: 14 }, { c: "MX", peak: 15 }, { c: "CH", peak: 38 }, { c: "IT", peak: 46 }, { c: "PT", peak: 50 }] },
      { title: "My Love", kind: "Singles", cover: "https://cdn-images.dzcdn.net/images/cover/7ca022ded50772370b6984e9bfa4d1fd/500x500-000000-80-0-0.jpg", entries: [{ c: "SR", peak: 5 }, { c: "UK", peak: 28 }, { c: "NG", peak: 64 }] },
      { title: "2 Sugar", kind: "Singles", cover: "https://cdn-images.dzcdn.net/images/cover/e4286ac8a38829b6cf5d225c311bccf7/500x500-000000-80-0-0.jpg", entries: [{ c: "NG", peak: 5 }, { c: "UK", peak: 70 }, { c: "ZA", peak: 70 }] },
      { title: "Gimme Dat", kind: "Singles", cover: "https://cdn-images.dzcdn.net/images/cover/2e52f4bf8bdb05c98002b714669ee2c2/500x500-000000-80-0-0.jpg", entries: [{ c: "NG", peak: 3 }, { c: "SR", peak: 6 }, { c: "UK", peak: 89 }] },
      { title: "Bloody Samaritan", kind: "Singles", cover: "https://cdn-images.dzcdn.net/images/cover/6811d7a880826af2be69b81686f629f2/500x500-000000-80-0-0.jpg", entries: [{ c: "NG", peak: 1 }, { c: "SR", peak: 34 }] },
      { title: "Sability", kind: "Singles", cover: "https://cdn-images.dzcdn.net/images/cover/6d6d6db9d6a54f8735971b8cab496784/500x500-000000-80-0-0.jpg", entries: [{ c: "NG", peak: 1 }, { c: "SR", peak: 6 }] },
      { title: "Commas", kind: "Singles", cover: "https://cdn-images.dzcdn.net/images/cover/d096ea1c1019d1af67c0a2e434890e1e/500x500-000000-80-0-0.jpg", entries: [{ c: "NG", peak: 2 }, { c: "NL", peak: 83 }] },
      { title: "All the Love", kind: "Singles", cover: "https://cdn-images.dzcdn.net/images/cover/d30dbeb4d445f5cc6f7f100b830731c4/500x500-000000-80-0-0.jpg", entries: [{ c: "NG", peak: 10 }, { c: "SR", peak: 12 }] },
      { title: "Where Do We Go", kind: "Singles", cover: "https://cdn-images.dzcdn.net/images/cover/227c27e8b3db2fc1be8808745b5c9fc1/500x500-000000-80-0-0.jpg", entries: [{ c: "NG", peak: 10 }, { c: "MT", peak: 18 }] },
      { title: "Good Feelings", kind: "Singles", cover: "https://cdn-images.dzcdn.net/images/cover/8f63a01593c329798544895109f36f8c/500x500-000000-80-0-0.jpg", entries: [{ c: "SR", peak: 17 }, { c: "RU", peak: 82 }] },
      { title: "Won Da Mo", kind: "Singles", cover: "https://cdn-images.dzcdn.net/images/cover/342ebddd40c9c6b60b9d432d7e609f20/500x500-000000-80-0-0.jpg", entries: [{ c: "NG", peak: 1 }] },
      { title: "treat u right", kind: "Singles", cover: "https://cdn-images.dzcdn.net/images/cover/a88a32de107d134d181e111b3ae5f780/500x500-000000-80-0-0.jpg", entries: [{ c: "NG", peak: 1 }] },
      { title: "Who's Dat Girl", kind: "Singles", cover: "https://cdn-images.dzcdn.net/images/cover/fe3deba215d998d74542663a84621852/500x500-000000-80-0-0.jpg", entries: [{ c: "NG", peak: 2 }] },
      { title: "Bad Vibes", kind: "Singles", cover: "https://cdn-images.dzcdn.net/images/cover/e61faaeb59320961cbd17a1ef7f9e6e7/500x500-000000-80-0-0.jpg", entries: [{ c: "NG", peak: 2 }] },
      { title: "Overloading", kind: "Singles", cover: "https://cdn-images.dzcdn.net/images/cover/7861d849c8157fbffc37ccebf0ee75c5/500x500-000000-80-0-0.jpg", entries: [{ c: "NG", peak: 2 }] },
      { title: "Bora Bora", kind: "Singles", cover: "https://cdn-images.dzcdn.net/images/cover/8161f0489096a1deadd03392a151c0bc/500x500-000000-80-0-0.jpg", entries: [{ c: "SR", peak: 3 }] },
      { title: "Stamina", kind: "Singles", cover: "https://cdn-images.dzcdn.net/images/cover/0c45088ffcfc5d0d7043c51a98d45082/500x500-000000-80-0-0.jpg", entries: [{ c: "NG", peak: 3 }] },
      { title: "Hot Body", kind: "Singles", cover: "https://cdn-images.dzcdn.net/images/cover/4b5a287c8f574407dc5b1b03b5ae0c58/500x500-000000-80-0-0.jpg", entries: [{ c: "NG", peak: 3 }] },
      { title: "Away", kind: "Singles", cover: "https://cdn-images.dzcdn.net/images/cover/24407cf49fdf864463cb5ca5ad974630/500x500-000000-80-0-0.jpg", entries: [{ c: "NG", peak: 4 }] },
      { title: "Colorado", kind: "Singles", cover: "https://cdn-images.dzcdn.net/images/cover/a4d16c0dbdfcfa22baaec4a11c3f283a/500x500-000000-80-0-0.jpg", entries: [{ c: "NG", peak: 5 }] },
      { title: "Hypé", kind: "Singles", cover: "https://cdn-images.dzcdn.net/images/cover/c22b652917676317beb469e5bce1cd24/500x500-000000-80-0-0.jpg", entries: [{ c: "FR", peak: 7 }] },
      { title: "No Love", kind: "Singles", cover: "https://cdn-images.dzcdn.net/images/cover/7b49d51e89ff07824c8c62043775a2ab/500x500-000000-80-0-0.jpg", entries: [{ c: "FR", peak: 7 }] },
      { title: "Tornado", kind: "Singles", cover: "https://cdn-images.dzcdn.net/images/cover/faa0b0578b463b8808c25da8f594aced/500x500-000000-80-0-0.jpg", entries: [{ c: "NG", peak: 7 }] },
      { title: "Goodbye", kind: "Singles", cover: "https://cdn-images.dzcdn.net/images/cover/d096ea1c1019d1af67c0a2e434890e1e/500x500-000000-80-0-0.jpg", entries: [{ c: "NG", peak: 9 }] },
      { title: "Rhythm & Blues", kind: "Singles", cover: "https://cdn-images.dzcdn.net/images/cover/4f920b01bcb9ce9949049741f8720fc7/500x500-000000-80-0-0.jpg", entries: [{ c: "NG", peak: 12 }] },
      { title: "Last Heartbreak Song", kind: "Singles", cover: "https://cdn-images.dzcdn.net/images/cover/d096ea1c1019d1af67c0a2e434890e1e/500x500-000000-80-0-0.jpg", entries: [{ c: "NG", peak: 14 }] },
      { title: "Fashion Killa", kind: "Singles", cover: "https://cdn-images.dzcdn.net/images/cover/b922c719d3a9901f749140e8f532a8d0/500x500-000000-80-0-0.jpg", entries: [{ c: "NG", peak: 18 }] },
      { title: "You're Hired", kind: "Singles", cover: "https://cdn-images.dzcdn.net/images/cover/cc0e119ad29b8403a7ba69bd6c405b32/500x500-000000-80-0-0.jpg", entries: [{ c: "SR", peak: 20 }] },
      { title: "Jazzy's Song", kind: "Singles", cover: "https://cdn-images.dzcdn.net/images/cover/d096ea1c1019d1af67c0a2e434890e1e/500x500-000000-80-0-0.jpg", entries: [{ c: "NG", peak: 24 }] },
      { title: "Aye Kan", kind: "Singles", cover: "https://cdn-images.dzcdn.net/images/cover/5b1a13631d26a3e81a34f4abdd139a28/500x500-000000-80-0-0.jpg", entries: [{ c: "NG", peak: 33 }] },
      { title: "Show Me", kind: "Singles", cover: "https://cdn-images.dzcdn.net/images/cover/bcb9403427453639027af3debbd7acdd/500x500-000000-80-0-0.jpg", entries: [{ c: "NG", peak: 54 }] },
      { title: "The Year I Turned 21", kind: "Albums", cover: "https://cdn-images.dzcdn.net/images/cover/d096ea1c1019d1af67c0a2e434890e1e/500x500-000000-80-0-0.jpg", entries: [{ c: "NG", peak: 1 }, { c: "FR", peak: 72 }, { c: "UK", peak: 80 }, { c: "CA", peak: 89 }, { c: "US", peak: 195 }] },
      { title: "19 & Dangerous", kind: "Albums", cover: "https://cdn-images.dzcdn.net/images/cover/b922c719d3a9901f749140e8f532a8d0/500x500-000000-80-0-0.jpg", entries: [{ c: "NG", peak: 7 }] },
    ],
  },
  {
    slug: "asake",
    name: "Asake",
    fullName: "Ahmed Ololade",
    country: "Nigeria",
    flag: "🇳🇬",
    hook: "Among the genre's most-streamed acts — his register sweep is scheduled.",
    spotifyId: "3a1tBryiczPAZpgoZN9Rzg",
    image: "https://i.scdn.co/image/ab6761610000e5ebff54cbafa23b728b49954587",
    verifiedOn: AFROBEATS_VERIFIED_ON,
    swept: false,
    releases: [],
    charts: [],
  },
  {
    slug: "omah-lay",
    name: "Omah Lay",
    fullName: "Stanley Omah Didia",
    country: "Nigeria",
    flag: "🇳🇬",
    hook: "A fixture of the daily African streaming top ten — sweep scheduled.",
    spotifyId: "5yOvAmpIR7hVxiS6Ls5DPO",
    image: "https://i.scdn.co/image/ab6761610000e5eb35ba3ee6067196268c5528cb",
    verifiedOn: AFROBEATS_VERIFIED_ON,
    swept: false,
    releases: [],
    charts: [],
  },
  {
    slug: "seyi-vibez",
    name: "Seyi Vibez",
    fullName: "Balogun Afolabi Oluwaloseyi",
    country: "Nigeria",
    flag: "🇳🇬",
    hook: "One of Nigeria's fastest-rising streaming forces — sweep scheduled.",
    spotifyId: "4zmZ8lVLzGc84S4v2B1rLx",
    image: "https://i.scdn.co/image/ab6761610000e5eb9902f473df31601d5938e0bd",
    verifiedOn: AFROBEATS_VERIFIED_ON,
    swept: false,
    releases: [],
    charts: [],
  },
];

/** Countries these artists are certified in that Burna Boy is NOT, so they are
 *  absent from certifications.ts's COUNTRIES map. Kept here rather than added
 *  there: that map is his ledger, and a country he holds no plaque in does not
 *  belong in it. */
const EXTRA_COUNTRIES: Record<string, { name: string; flag: string; body: string }> = {
  MX: { name: "Mexico", flag: "🇲🇽", body: "AMPROFON" },
  GLB: { name: "Global", flag: "🌐", body: "Billboard Global 200" },
  GLBX: { name: "Global (excl. US)", flag: "🌍", body: "Billboard Global 200 Excl. US" },
  MT: { name: "Malta", flag: "🇲🇹", body: "Official Malta Chart" },
  MK: { name: "North Macedonia", flag: "🇲🇰", body: "Billboard North Macedonia Songs" },
  RS: { name: "Serbia", flag: "🇷🇸", body: "Billboard Serbia Songs" },
  KR: { name: "South Korea", flag: "🇰🇷", body: "Circle Chart" },
  PH: { name: "Philippines", flag: "🇵🇭", body: "Billboard Philippines Songs" },
  TH: { name: "Thailand", flag: "🇹🇭", body: "Billboard Thailand Songs" },
  ID: { name: "Indonesia", flag: "🇮🇩", body: "Billboard Indonesia Songs" },
  SI: { name: "Slovenia", flag: "🇸🇮", body: "SloTop50" },
  BY: { name: "Belarus", flag: "🇧🇾", body: "TopHit" },
  TW: { name: "Taiwan", flag: "🇹🇼", body: "Billboard Taiwan Songs" },
};

/** Resolves a country in the order the site already defines them: the
 *  certification ledger first (it names the certifying body), then the chart
 *  map (which covers 71 chart territories Burna has entered), then this
 *  module's own extension for places none of his data reaches. */
export const countryMeta = (code: string): { name: string; flag: string; body: string } =>
  BURNA_COUNTRIES[code] ??
  CHART_COUNTRIES[code] ??
  EXTRA_COUNTRIES[code] ?? { name: code, flag: "🏳️", body: code };

// ── Derived ────────────────────────────────────────────────────────────────
export const certCount = (a: AfroArtist) => a.releases.reduce((n, r) => n + r.certs.length, 0);
export const countryCount = (a: AfroArtist) =>
  new Set(a.releases.flatMap((r) => r.certs.map((c) => c.c))).size;
export const tierCount = (a: AfroArtist, tier: Tier) =>
  a.releases.reduce((n, r) => n + r.certs.filter((c) => c.level === tier).length, 0);

/** Chart headline: the sweep's verified figure where we have it, else the
 *  extracted rows. Never silently mixes the two. */
export const chartEntries = (a: AfroArtist) =>
  a.chartPublished?.entries ?? a.charts.reduce((n, r) => n + r.entries.length, 0);
export const chartTerritories = (a: AfroArtist) =>
  a.chartPublished?.territories ?? new Set(a.charts.flatMap((r) => r.entries.map((e) => e.c))).size;
export const chartNo1s = (a: AfroArtist) =>
  a.chartPublished?.no1s ?? a.charts.reduce((n, r) => n + r.entries.filter((e) => e.peak === 1).length, 0);

export const topAward = (a: AfroArtist) => {
  const rank: Record<Tier, number> = { Diamond: 0, Platinum: 1, Gold: 2, Silver: 3 };
  let best: AfroCert | null = null;
  for (const r of a.releases)
    for (const c of r.certs)
      if (!best || rank[c.level] < rank[best.level] || (c.level === best.level && (c.x ?? 1) > (best.x ?? 1)))
        best = c;
  return best;
};

/** Plaque label in the site's own wording — "5× Platinum", "Silver". */
export const plaqueLabel = (c: AfroCert) => `${c.x && c.x > 1 ? `${c.x}× ` : ""}${c.level}`;

export const artistBySlug = (slug: string) => afrobeatsArtists.find((a) => a.slug === slug);
export const afrobeatsSlugs = afrobeatsArtists.map((a) => a.slug);
export const sweptArtists = afrobeatsArtists.filter((a) => a.swept);
export const pendingArtists = afrobeatsArtists.filter((a) => !a.swept);

export const BURNA = {
  name: "Burna Boy",
  flag: "🇳🇬",
  country: "Nigeria",
  href: "/",
  image: "https://i.scdn.co/image/ab6761610000e5ebb4e44d0f4e3e47af2cf06f3f",
  hook: "The African Giant — this site's subject, updated daily.",
};
