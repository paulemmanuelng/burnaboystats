// GENERATED FILE — do not edit by hand.
  // Rebuilt several times a day by scripts/build-live-charts.mjs --artist=tyla from kworb's artist page.
  //
  // PLATFORM chart data for Tyla: where each release is sitting RIGHT
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
    platforms: LivePlatform[];
  }
  
  /** When this snapshot was taken (ISO date). */
  export const liveChartsUpdated = "2026-10-02";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-10-02T22:18Z";
  
  /** Every platform represented in the current snapshot. */
  export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify Albums","iTunes"];
  
  export const liveCharts: LiveRelease[] = [
  {
    "title": "A*POP",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 13,
            "movement": -3
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 23,
            "movement": -5
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 28,
            "movement": 1
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 38,
            "movement": 3
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 40,
            "movement": 38
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 50,
            "movement": 0
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 53,
            "movement": 76
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 70,
            "movement": -7
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 79,
            "movement": -42
          },
          {
            "country": "MK",
            "name": "North Macedonia",
            "position": 82,
            "movement": null,
            "status": "new"
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 83,
            "movement": 78
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 83,
            "movement": -43
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 105,
            "movement": 20
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 129,
            "movement": 34
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 131,
            "movement": -19
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 132,
            "movement": -90
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 132,
            "movement": -63
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 137,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 137,
            "movement": -85
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 138,
            "movement": -20
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 144,
            "movement": -35
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 156,
            "movement": -35
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 157,
            "movement": -71
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 175,
            "movement": -30
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 179,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 179,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 180,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 188,
            "movement": -139
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 189,
            "movement": null,
            "status": "new"
          }
        ]
      },
      {
        "platform": "Spotify Albums",
        "numberOnes": 0,
        "entries": [
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 28,
            "movement": -6
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/5abac68deeb720d1aaea68ae179608df/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "THAT GIRL",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NA",
            "name": "Namibia",
            "position": 138,
            "movement": 15
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 140,
            "movement": -4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 170,
            "movement": null,
            "status": "new"
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 98,
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
            "country": "MY",
            "name": "Malaysia",
            "position": 40,
            "movement": -5
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/5abac68deeb720d1aaea68ae179608df/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "CHANEL",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 90,
            "movement": null,
            "status": "new"
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 155,
            "movement": -6
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "AU",
            "name": "Australia",
            "position": 69,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 83,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/5abac68deeb720d1aaea68ae179608df/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "TYLA +",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 154,
            "movement": null,
            "status": "new"
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 167,
            "movement": -45
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 168,
            "movement": -89
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 178,
            "movement": 5
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/65d6063121e97ede49869ceedc250875/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Water",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "IT",
            "name": "Italy",
            "position": 89,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 91,
            "movement": null,
            "status": "new"
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 28,
            "movement": 89
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b246276eba02e22c9e08605924395480/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "IS IT LOVE",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 192,
            "movement": -18
          }
        ]
      },
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "US",
            "name": "United States",
            "position": 172,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/5abac68deeb720d1aaea68ae179608df/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "PUSH 2 START",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 24,
            "movement": -9
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/65d6063121e97ede49869ceedc250875/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "SHE DID IT AGAIN",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "HR",
            "name": "Croatia",
            "position": 90,
            "movement": 46
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/5abac68deeb720d1aaea68ae179608df/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "TYLA",
    "platforms": [
      {
        "platform": "Spotify Albums",
        "numberOnes": 0,
        "entries": [
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 146,
            "movement": -5
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/65d6063121e97ede49869ceedc250875/500x500-000000-80-0-0.jpg"
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
  