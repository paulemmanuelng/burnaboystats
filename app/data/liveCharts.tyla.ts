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
  export const liveChartsUpdated = "2026-10-15";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-10-15T21:27Z";
  
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
            "position": 9,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 18,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 19,
            "movement": -5
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 22,
            "movement": 0
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 35,
            "movement": 60
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 40,
            "movement": 141
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 54,
            "movement": -5
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 57,
            "movement": -25
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 57,
            "movement": 27
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 92,
            "movement": 9
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 93,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 96,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 104,
            "movement": 5
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 112,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 114,
            "movement": -73
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 114,
            "movement": 19
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 120,
            "movement": -54
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 123,
            "movement": 37
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 130,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 132,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 140,
            "movement": -4
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 145,
            "movement": -67
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 151,
            "movement": -43
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 151,
            "movement": 24
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 156,
            "movement": -16
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 172,
            "movement": -40
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 174,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 180,
            "movement": -23
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 187,
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
            "country": "NA",
            "name": "Namibia",
            "position": 15,
            "movement": -3
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 57,
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
            "movement": 0
          }
        ]
      }
    ],
    "kind": "album",
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
            "country": "SB",
            "name": "Solomon Islands",
            "position": 92,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 133,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 134,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 145,
            "movement": null,
            "status": "new"
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 151,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 173,
            "movement": -34
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 180,
            "movement": -70
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 190,
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
    "title": "THAT GIRL",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NA",
            "name": "Namibia",
            "position": 116,
            "movement": 48
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 128,
            "movement": 1
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 154,
            "movement": 37
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 181,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 186,
            "movement": 11
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
            "position": 42,
            "movement": -1
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
            "country": "HR",
            "name": "Croatia",
            "position": 46,
            "movement": 0
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 183,
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
            "country": "BH",
            "name": "Bahrain",
            "position": 106,
            "movement": 45
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "IN",
            "name": "India",
            "position": 26,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/5abac68deeb720d1aaea68ae179608df/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "IS IT LOVE",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 41,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 47,
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
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "DK",
            "name": "Denmark",
            "position": 121,
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
    "title": "Bliss",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 48,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6614157bd80488fdd3dbb466867ab066/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Truth or Dare",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 61,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/1ae9486180d1f50e7dbbb099b1e66825/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "CHANEL",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 12,
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
    "title": "Jump",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 16,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/373ba020e129cca1360301be7dc5701a/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "BACK to YOU",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 17,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/65d6063121e97ede49869ceedc250875/500x500-000000-80-0-0.jpg"
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
            "position": 145,
            "movement": 1
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
  