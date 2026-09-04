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
  export const liveChartsUpdated = "2026-09-04";
  
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
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 9,
            "movement": 5
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 9,
            "movement": 8
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 11,
            "movement": -3
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 12,
            "movement": -6
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 15,
            "movement": 69
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 33,
            "movement": -2
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 43,
            "movement": -1
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 44,
            "movement": -17
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 45,
            "movement": 3
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 46,
            "movement": -16
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 48,
            "movement": -10
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 49,
            "movement": 11
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 61,
            "movement": 34
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 66,
            "movement": 7
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 70,
            "movement": -16
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 74,
            "movement": -53
          },
          {
            "country": "MN",
            "name": "Mongolia",
            "position": 78,
            "movement": 10
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 89,
            "movement": 89
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 90,
            "movement": -13
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 92,
            "movement": 37
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 101,
            "movement": 65
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 104,
            "movement": -34
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 108,
            "movement": 22
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 123,
            "movement": -60
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 125,
            "movement": -77
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 130,
            "movement": -67
          },
          {
            "country": "MM",
            "name": "Myanmar",
            "position": 147,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 148,
            "movement": -20
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 148,
            "movement": -8
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 150,
            "movement": -21
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 152,
            "movement": -37
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 160,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 160,
            "movement": -31
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 187,
            "movement": -19
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SE",
            "name": "Sweden",
            "position": 54,
            "movement": null,
            "status": "new"
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
            "country": "NO",
            "name": "Norway",
            "position": 60,
            "movement": -28
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 62,
            "movement": 6
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 62,
            "movement": -31
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 64,
            "movement": -18
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 73,
            "movement": -17
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 79,
            "movement": -7
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 81,
            "movement": -20
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 88,
            "movement": -45
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 93,
            "movement": -7
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MV",
            "name": "Maldives",
            "position": 189,
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
            "country": "FI",
            "name": "Finland",
            "position": 6,
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
    "title": "SHE DID IT AGAIN",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 133,
            "movement": -12
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 142,
            "movement": 53
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 155,
            "movement": -10
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 14,
            "movement": -13
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 79,
            "movement": -7
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 93,
            "movement": 95
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
            "position": 28,
            "movement": -4
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 59,
            "movement": -16
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 59,
            "movement": -14
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 84,
            "movement": -13
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 159,
            "movement": 17
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
            "position": 83,
            "movement": 2
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
    "title": "TYLA +",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 23,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 116,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 147,
            "movement": -61
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 161,
            "movement": 9
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 181,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 200,
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 97,
            "movement": -5
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 101,
            "movement": 44
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 189,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 193,
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
    "title": "Water",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GD",
            "name": "Grenada",
            "position": 36,
            "movement": -6
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 87,
            "movement": -23
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 192,
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
            "position": 15,
            "movement": 136
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b246276eba02e22c9e08605924395480/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "FAIRYTALE",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 85,
            "movement": 105
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 151,
            "movement": -11
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 168,
            "movement": -9
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/5abac68deeb720d1aaea68ae179608df/500x500-000000-80-0-0.jpg"
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
            "position": 47,
            "movement": -7
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
    "title": "IS IT",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MD",
            "name": "Moldova",
            "position": 81,
            "movement": -13
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/5abac68deeb720d1aaea68ae179608df/500x500-000000-80-0-0.jpg"
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
  