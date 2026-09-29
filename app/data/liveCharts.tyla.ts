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
  export const liveChartsUpdated = "2026-09-29";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-09-29T22:19Z";
  
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
            "position": 11,
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 13,
            "movement": -2
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 21,
            "movement": 45
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 25,
            "movement": 8
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 31,
            "movement": 5
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 34,
            "movement": -11
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 40,
            "movement": 12
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 45,
            "movement": -3
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 50,
            "movement": -34
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 54,
            "movement": 81
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 62,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 72,
            "movement": 24
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 76,
            "movement": -18
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 85,
            "movement": 12
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 106,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 108,
            "movement": -80
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 109,
            "movement": 23
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 119,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 128,
            "movement": 1
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 132,
            "movement": 32
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 155,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 159,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 173,
            "movement": -4
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 182,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 185,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 196,
            "movement": -15
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
            "position": 22,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/5abac68deeb720d1aaea68ae179608df/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "CHANEL",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "DK",
            "name": "Denmark",
            "position": 73,
            "movement": -11
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 76,
            "movement": -45
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 80,
            "movement": -32
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 80,
            "movement": -34
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 95,
            "movement": -32
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 99,
            "movement": -34
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 99,
            "movement": -52
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 93,
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
    "title": "THAT GIRL",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NA",
            "name": "Namibia",
            "position": 126,
            "movement": -32
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 139,
            "movement": 2
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BW",
            "name": "Botswana",
            "position": 67,
            "movement": -5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 82,
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
            "position": 35,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/5abac68deeb720d1aaea68ae179608df/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "SHE DID IT AGAIN",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "RO",
            "name": "Romania",
            "position": 176,
            "movement": -15
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 187,
            "movement": 1
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 193,
            "movement": -20
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SR",
            "name": "Suriname",
            "position": 176,
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
    "title": "Water",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 35,
            "movement": 145
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "HU",
            "name": "Hungary",
            "position": 71,
            "movement": null,
            "status": "new"
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
            "position": 97,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b246276eba02e22c9e08605924395480/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "TYLA +",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "OM",
            "name": "Oman",
            "position": 97,
            "movement": null,
            "status": "new"
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 171,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 179,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/65d6063121e97ede49869ceedc250875/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "IS IT LOVE",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "US",
            "name": "United States",
            "position": 173,
            "movement": -8
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SN",
            "name": "Senegal",
            "position": 96,
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
    "title": "When I'm With You",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TH",
            "name": "Thailand",
            "position": 73,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/8e87690a458cb1629014434230b84001/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Talk to Me",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FI",
            "name": "Finland",
            "position": 173,
            "movement": -31
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/cd07d0b83bcc8a17928619b3771e42df/500x500-000000-80-0-0.jpg"
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
            "position": 141,
            "movement": 8
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/65d6063121e97ede49869ceedc250875/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "WWP - Single",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 158,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album"
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
  