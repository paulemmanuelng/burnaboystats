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
  export const liveChartsUpdated = "2026-09-15";
  
  /** Every platform represented in the current snapshot. */
  export const livePlatforms: string[] = ["Apple Music","Shazam","Spotify","YouTube","iTunes"];
  
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
            "movement": 14
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 51,
            "movement": 1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 61,
            "movement": 51
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 63,
            "movement": -10
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 86,
            "movement": 11
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 95,
            "movement": 6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 133,
            "movement": 2
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 144,
            "movement": -82
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 165,
            "movement": 10
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 172,
            "movement": -63
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 181,
            "movement": -24
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 181,
            "movement": -78
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 191,
            "movement": -16
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
            "position": 92,
            "movement": 9
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
            "position": 68,
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
    "title": "Laughter, Tears & Goosebumps",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 39,
            "movement": 13
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 47,
            "movement": -15
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 50,
            "movement": -3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 69,
            "movement": 32
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 79,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 97,
            "movement": 49
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 138,
            "movement": -41
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
            "country": "UG",
            "name": "Uganda",
            "position": 107,
            "movement": -7
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 115,
            "movement": 32
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 120,
            "movement": 5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 133,
            "movement": -21
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 186,
            "movement": -10
          }
        ]
      }
    ],
    "kind": "album",
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
            "country": "NG",
            "name": "Nigeria",
            "position": 71,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 85,
            "movement": 34
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 92,
            "movement": -54
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 179,
            "movement": -61
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a687087e03dff683b56b53044b52c551/500x500-000000-80-0-0.jpg"
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
            "position": 112,
            "movement": -16
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 116,
            "movement": 17
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 159,
            "movement": 9
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/20b709c21edd2d8924cf88132a94ff1e/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "So it Goes",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 45,
            "movement": -16
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 67,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3fe94d046b5097983f35fcc47037c799/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "iseoluwa",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 69,
            "movement": -23
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 161,
            "movement": 9
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a687087e03dff683b56b53044b52c551/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Vibration",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 99,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 168,
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
    "title": "APOLLO",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 118,
            "movement": -1
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 198,
            "movement": -113
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/bd9b968d69b674b887fc7e166af5ae23/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Peru",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 68,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4ab733790d692331a550d79a27e254ae/500x500-000000-80-0-0.jpg"
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
            "position": 74,
            "movement": -41
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
            "position": 89,
            "movement": 3
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a0db260ae940d4870a73c5a735408d67/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "CLAAT",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BW",
            "name": "Botswana",
            "position": 63,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/29bf5b5ad5f962997dbb7c369a8320d9/500x500-000000-80-0-0.jpg"
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
            "position": 142,
            "movement": 7
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2454c47103560319b1992920e1a866e9/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Ogaranya",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 17,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/5cb992ab2c3f0025f5c1e3c00ce25deb/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "What If I Say",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 193,
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
    "title": "FIREGUN",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LY",
            "name": "Libya",
            "position": 169,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2b530c47b3e4d511423fd52ed35b04dd/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Champion",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 193,
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
    "title": "Change",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 147,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a687087e03dff683b56b53044b52c551/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "ZUKO",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 97,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/da2c728690442570efd5b29209fca908/500x500-000000-80-0-0.jpg"
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
  