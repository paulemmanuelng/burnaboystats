// GENERATED FILE — do not edit by hand.
  // Rebuilt hourly by scripts/build-live-charts.mjs --artist=fireboy-dml from kworb's artist page.
  //
  // PLATFORM chart data for Fireboy DML: where each release is sitting RIGHT
  // NOW on Spotify, Apple Music, iTunes, Deezer, Shazam and YouTube country
  // charts. This is not official-chart data — the official national peaks that
  // feed the site's headline totals live elsewhere, and the two are kept apart
  // on purpose.
  
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
  export const liveChartsUpdated = "2026-08-30";
  
  /** Every platform represented in the current snapshot. */
  export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","YouTube","iTunes"];
  
  export const liveCharts: LiveRelease[] = [
  {
    "title": "Bandana",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 41,
            "movement": 12
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 53,
            "movement": 32
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 58,
            "movement": -24
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 58,
            "movement": 45
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 75,
            "movement": -14
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 77,
            "movement": -10
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 81,
            "movement": 51
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 85,
            "movement": 20
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 104,
            "movement": -34
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 130,
            "movement": 17
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 134,
            "movement": 11
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 140,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 141,
            "movement": 39
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 143,
            "movement": -25
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 151,
            "movement": -10
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 161,
            "movement": -47
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 192,
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
            "position": 115,
            "movement": -13
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 78,
            "movement": -46
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
            "position": 72,
            "movement": null,
            "status": "re"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3a0ea8b02098effdf5ecce496d515176/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Playboy",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 85,
            "movement": 33
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 108,
            "movement": -23
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 110,
            "movement": 9
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 111,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 116,
            "movement": -22
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 121,
            "movement": 28
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 186,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 186,
            "movement": -122
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/20b709c21edd2d8924cf88132a94ff1e/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Laughter, Tears & Goosebumps",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 26,
            "movement": 7
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 42,
            "movement": -7
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 50,
            "movement": -9
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 68,
            "movement": 14
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 104,
            "movement": -25
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 114,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 183,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b8ce8a62a6484f053bdd2cf80818a2d/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Playboy",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 69,
            "movement": 62
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 89,
            "movement": 48
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 107,
            "movement": -11
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 124,
            "movement": 72
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 141,
            "movement": 36
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/20b709c21edd2d8924cf88132a94ff1e/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "adedamola",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 3,
            "movement": 5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 87,
            "movement": 2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 186,
            "movement": 10
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 195,
            "movement": -7
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a687087e03dff683b56b53044b52c551/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Need You",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 33,
            "movement": -6
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 107,
            "movement": -11
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 168,
            "movement": 12
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b8ce8a62a6484f053bdd2cf80818a2d/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "APOLLO",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 112,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 141,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 163,
            "movement": 6
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/bd9b968d69b674b887fc7e166af5ae23/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "So it Goes",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 37,
            "movement": 6
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 95,
            "movement": -14
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3fe94d046b5097983f35fcc47037c799/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Peru",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 75,
            "movement": -39
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 62,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4ab733790d692331a550d79a27e254ae/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "iseoluwa",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 173,
            "movement": 4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 183,
            "movement": 10
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a687087e03dff683b56b53044b52c551/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Sofri",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 1,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 1,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/48963b4c8969105192017e3dbe543fc9/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "yawa",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 39,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e01d168e57db1df9f9ce27151aff6d23/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Lifestyle",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MT",
            "name": "Malta",
            "position": 20,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/bd9b968d69b674b887fc7e166af5ae23/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Like I Do",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 77,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b8ce8a62a6484f053bdd2cf80818a2d/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "History",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 104,
            "movement": 14
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a0db260ae940d4870a73c5a735408d67/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "everyday",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 149,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/86d8d6db321a04e6b49342da728b2e58/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Dopamine",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 182,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2454c47103560319b1992920e1a866e9/500x500-000000-80-0-0.jpg"
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
  export const liveCountryCount = new Set(
    liveCharts.flatMap((r) => r.platforms.flatMap((p) => p.entries.map((e) => e.country)))
  ).size;
  
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
  