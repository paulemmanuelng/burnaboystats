// GENERATED FILE — do not edit by hand.
  // Rebuilt hourly by scripts/build-live-charts.mjs --artist=tyla from kworb's artist page.
  //
  // PLATFORM chart data for Tyla: where each release is sitting RIGHT
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
  export const liveChartsUpdated = "2026-09-03";
  
  /** Every platform represented in the current snapshot. */
  export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","YouTube","iTunes"];
  
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
            "position": 4,
            "movement": 1
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 6,
            "movement": 3
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 8,
            "movement": 5
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 14,
            "movement": -6
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 17,
            "movement": -6
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 21,
            "movement": 104
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 27,
            "movement": -10
          },
          {
            "country": "MK",
            "name": "North Macedonia",
            "position": 28,
            "movement": 19
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 30,
            "movement": 31
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 31,
            "movement": -4
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 38,
            "movement": -25
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 42,
            "movement": 91
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 48,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 48,
            "movement": 1
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 54,
            "movement": 36
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 60,
            "movement": -9
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 63,
            "movement": 46
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 63,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 70,
            "movement": -2
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 73,
            "movement": -29
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 77,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 84,
            "movement": -29
          },
          {
            "country": "MN",
            "name": "Mongolia",
            "position": 88,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 95,
            "movement": -37
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 109,
            "movement": 13
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 128,
            "movement": 37
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 129,
            "movement": -15
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 129,
            "movement": 2
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 130,
            "movement": -97
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 131,
            "movement": -4
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 140,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 159,
            "movement": -11
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 166,
            "movement": -40
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 166,
            "movement": -44
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 168,
            "movement": -29
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 170,
            "movement": -44
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 174,
            "movement": -19
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 175,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 178,
            "movement": -60
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 196,
            "movement": -101
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 199,
            "movement": -36
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
            "country": "IT",
            "name": "Italy",
            "position": 31,
            "movement": 0
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 32,
            "movement": 0
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 33,
            "movement": 0
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 43,
            "movement": 0
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 46,
            "movement": 0
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 50,
            "movement": 0
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 56,
            "movement": 0
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 61,
            "movement": 0
          },
          {
            "country": "US",
            "name": "United States",
            "position": 64,
            "movement": 0
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 68,
            "movement": 0
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 72,
            "movement": 0
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 81,
            "movement": 0
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 86,
            "movement": 0
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 87,
            "movement": 0
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 88,
            "movement": 0
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "AT",
            "name": "Austria",
            "position": 195,
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
            "country": "ZA",
            "name": "South Africa",
            "position": 24,
            "movement": 1
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 43,
            "movement": 10
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 45,
            "movement": 4
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 71,
            "movement": 43
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 176,
            "movement": -22
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 176,
            "movement": -19
          }
        ]
      },
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 85,
            "movement": 9
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
            "position": 112,
            "movement": 6
          }
        ]
      },
      {
        "platform": "YouTube",
        "numberOnes": 0,
        "entries": [
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 82,
            "movement": 5
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 121,
            "movement": 8
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 145,
            "movement": -8
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 195,
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
            "country": "RO",
            "name": "Romania",
            "position": 48,
            "movement": 0
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 124,
            "movement": 24
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 141,
            "movement": -5
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 1,
        "entries": [
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 1,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 72,
            "movement": -5
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 92,
            "movement": 11
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 145,
            "movement": 3
          },
          {
            "country": "BW",
            "name": "Botswana",
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
            "country": "US",
            "name": "United States",
            "position": 189,
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
            "country": "NP",
            "name": "Nepal",
            "position": 86,
            "movement": 71
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 146,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 152,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 170,
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
    "title": "FAIRYTALE",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 140,
            "movement": -2
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 159,
            "movement": 2
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 190,
            "movement": -72
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
            "country": "GD",
            "name": "Grenada",
            "position": 30,
            "movement": -4
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 64,
            "movement": -15
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
            "position": 151,
            "movement": -40
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b246276eba02e22c9e08605924395480/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Game Time",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 40,
            "movement": -33
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/cd9051638bd5d70e43eff9dc09faa344/500x500-000000-80-0-0.jpg"
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
            "position": 86,
            "movement": 3
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/cd07d0b83bcc8a17928619b3771e42df/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "PUSH 2 START",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NP",
            "name": "Nepal",
            "position": 132,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/65d6063121e97ede49869ceedc250875/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "IS IT",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MD",
            "name": "Moldova",
            "position": 68,
            "movement": -4
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/5abac68deeb720d1aaea68ae179608df/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "ART",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "OM",
            "name": "Oman",
            "position": 77,
            "movement": -15
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/373ba020e129cca1360301be7dc5701a/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Jump",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 164,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/373ba020e129cca1360301be7dc5701a/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Show Me Love",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "RO",
            "name": "Romania",
            "position": 91,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/33cc78686fd6ca7863758a5408d6eabe/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "WWP - Single",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NO",
            "name": "Norway",
            "position": 92,
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
  