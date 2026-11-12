// GENERATED FILE — do not edit by hand.
  // Rebuilt several times a day by scripts/build-live-charts.mjs --artist=ruger from kworb's artist page.
  //
  // PLATFORM chart data for Ruger: where each release is sitting RIGHT
  // NOW on Spotify, Apple Music, iTunes, Deezer, Shazam and YouTube country
  // charts. This is not official-chart data — the official national peaks that
  // feed the site's headline totals live elsewhere, and the two are kept apart
  // on purpose.
  
  import { countriesOf } from "../lib/liveChartMeta";
  
  export interface LiveEntry {
    country: string; // ISO alpha-2
    name: string;
    position: number;
    // Movement against the chart's previous edition: 0 = no change, null = the
    // source flagged a new/re-entry, absent = the source reports no movement for
    // this platform at all (YouTube). Absent and null are different facts.
    movement?: number | null;
    /** Why there is no movement: the source flagged a new entry or a re-entry. */
    status?: "new" | "re";
  }
  
  export interface LivePlatform {
    platform: string;
    numberOnes: number;
    entries: LiveEntry[];
  }
  
  export interface LiveRelease {
    title: string;
    kind: "song" | "album";
    /** Release artwork, resolved at build time. Absent means unresolved — the
     *  page draws a monogram rather than borrowing another release's cover. */
    cover?: string;
    /** The snapshot date (ISO) this release first appeared on this board,
     *  carried from run to run. A new release's missing cover has a 7-day
     *  grace before it counts against the artwork floor (scripts/live-artists.mjs).
     *  "2026-01-01" means it was already here when the date began to be
     *  recorded (18 Oct 2026). Absent on a file whose covers are not resolved
     *  at build time. Bookkeeping only: the live-charts API leaves it out
     *  (withApiCountryCodes, app/lib/liveChartMeta.ts). */
    firstSeen?: string;
    platforms: LivePlatform[];
  }
  
  /** When this snapshot was taken (ISO date). */
  export const liveChartsUpdated = "2026-11-12";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-11-12T19:59Z";
  
  /** Every platform represented in the current snapshot. */
  export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","Spotify Albums","YouTube"];
  
  export const liveCharts: LiveRelease[] = [
  {
    "title": "Girlfriend",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 123,
            "movement": 60
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 152,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 154,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 196,
            "movement": null,
            "status": "new"
          }
        ]
      },
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 195,
            "movement": null,
            "status": "new"
          }
        ]
      },
      {
        "platform": "YouTube",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 74,
            "movement": null,
            "status": "re"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b42b9963b567481843c14d0f3991639c/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "POE",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 108,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 111,
            "movement": 51
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 112,
            "movement": -8
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 156,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 174,
            "movement": null,
            "status": "new"
          }
        ]
      },
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 196,
            "movement": -26
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/12b39d25fb640779483f443dcbedf748/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "RU The World",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 14,
            "movement": 126
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 84,
            "movement": 18
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 120,
            "movement": -25
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 178,
            "movement": 2
          }
        ]
      },
      {
        "platform": "Spotify Albums",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 64,
            "movement": 11
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/78b014342472081dff80a8cafe54b8ca/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "The Second Wave",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 150,
            "movement": 27
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 152,
            "movement": -120
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 168,
            "movement": -14
          }
        ]
      },
      {
        "platform": "Spotify Albums",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 46,
            "movement": 3
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b42b9963b567481843c14d0f3991639c/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Bounce",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 136,
            "movement": 29
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 194,
            "movement": null,
            "status": "new"
          }
        ]
      },
      {
        "platform": "YouTube",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 34,
            "movement": null,
            "status": "re"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-04",
    "cover": "https://cdn-images.dzcdn.net/images/cover/47ff5c26da8186dd164697a1371d48eb/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "RnB",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 67,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 149,
            "movement": 50
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 155,
            "movement": -18
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/589173416a36ce1395e49b85c4e6a9f8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Asiwaju",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 185,
            "movement": 11
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 35,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-08",
    "cover": "https://cdn-images.dzcdn.net/images/cover/78b014342472081dff80a8cafe54b8ca/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "WeWe",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 197,
            "movement": null,
            "status": "new"
          }
        ]
      },
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SN",
            "name": "Senegal",
            "position": 130,
            "movement": -29
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b42b9963b567481843c14d0f3991639c/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Bae Bae (Live)",
    "kind": "song",
    "platforms": [
      {
        "platform": "YouTube",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 36,
            "movement": null,
            "status": "re"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 37,
            "movement": null,
            "status": "re"
          }
        ]
      }
    ],
    "firstSeen": "2026-11-09",
    "cover": "https://cdn-images.dzcdn.net/images/cover/589173416a36ce1395e49b85c4e6a9f8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Blue",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 40,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-12",
    "cover": "https://cdn-images.dzcdn.net/images/cover/78b014342472081dff80a8cafe54b8ca/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Jay Jay",
    "platforms": [
      {
        "platform": "YouTube",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 65,
            "movement": null,
            "status": "re"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-09",
    "cover": "https://cdn-images.dzcdn.net/images/cover/697c596fc7ba72e1e6e81fba0246d975/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "DRTY",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 54,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-12",
    "cover": "https://cdn-images.dzcdn.net/images/cover/999de0db363b5fa9fcdd6e759f61d22c/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Bow",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 160,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-12",
    "cover": "https://cdn-images.dzcdn.net/images/cover/47ff5c26da8186dd164697a1371d48eb/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Ilashe",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 164,
            "movement": 2
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-31",
    "cover": "https://cdn-images.dzcdn.net/images/cover/589173416a36ce1395e49b85c4e6a9f8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "BlownBoy RU",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "QA",
            "name": "Qatar",
            "position": 61,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-11-06",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2011b1e1c72dec0b8e9397cd129a646a/500x500-000000-80-0-0.jpg"
  }
];
  
  /** Totals, derived so they can never disagree with the data above. */
  export const livePlacementCount = liveCharts.reduce(
    (n, r) => n + r.platforms.reduce((m, p) => m + p.entries.length, 0),
    0
  );
  export const liveNumberOnes = liveCharts.reduce(
    (n, r) => n + r.platforms.reduce((m, p) => m + p.numberOnes, 0),
    0
  );
  // Counted by the site's own rule (app/lib/liveChartMeta.ts): kworb labels
  // Britain "UK" on five platforms and "GB" on Spotify's, and emits "WW" for
  // its worldwide chart. A raw code count claimed the UK twice and the world
  // as a nation — the share card said 151 countries where the page said 149.
  export const liveCountryCount = countriesOf(
    liveCharts.flatMap((r) => r.platforms.flatMap((p) => p.entries))
  );
  
  /** Placements per platform, biggest first — powers the summary row. */
  export const livePlatformTotals: { platform: string; placements: number; numberOnes: number }[] =
    livePlatforms
      .map((platform) => {
        const blocks = liveCharts.flatMap((r) => r.platforms.filter((p) => p.platform === platform));
        return {
          platform,
          placements: blocks.reduce((n, p) => n + p.entries.length, 0),
          numberOnes: blocks.reduce((n, p) => n + p.numberOnes, 0),
        };
      })
      .sort((a, b) => b.placements - a.placements);
  