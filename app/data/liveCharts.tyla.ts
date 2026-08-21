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
  export const liveChartsUpdated = "2026-08-21";
  
  /** Every platform represented in the current snapshot. */
  export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","iTunes"];
  
  export const liveCharts: LiveRelease[] = [
  {
    "title": "A*POP",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BW",
            "name": "Botswana",
            "position": 3,
            "movement": 0
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 3,
            "movement": 0
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 4,
            "movement": -2
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 5,
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 6,
            "movement": -3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 8,
            "movement": -4
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 8,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 8,
            "movement": 0
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 15,
            "movement": 0
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 16,
            "movement": -4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 16,
            "movement": -4
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 19,
            "movement": 16
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 22,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 24,
            "movement": 0
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 32,
            "movement": -3
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 33,
            "movement": 6
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 40,
            "movement": 0
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 42,
            "movement": -8
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 49,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 50,
            "movement": 0
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 51,
            "movement": 19
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 55,
            "movement": 0
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 56,
            "movement": 2
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 60,
            "movement": 0
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 62,
            "movement": -21
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 66,
            "movement": 0
          },
          {
            "country": "MN",
            "name": "Mongolia",
            "position": 70,
            "movement": 0
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 74,
            "movement": -43
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 76,
            "movement": -38
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 76,
            "movement": -23
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 85,
            "movement": 0
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 91,
            "movement": 0
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 91,
            "movement": 8
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 95,
            "movement": -84
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 97,
            "movement": -49
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 100,
            "movement": 0
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 106,
            "movement": -88
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 110,
            "movement": 0
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 111,
            "movement": 16
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 116,
            "movement": 0
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 116,
            "movement": 0
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 121,
            "movement": -26
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 123,
            "movement": 0
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 124,
            "movement": -32
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 131,
            "movement": -38
          },
          {
            "country": "KH",
            "name": "Cambodia",
            "position": 133,
            "movement": 5
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 135,
            "movement": -86
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 140,
            "movement": 0
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 148,
            "movement": -103
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 152,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 157,
            "movement": 32
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 159,
            "movement": 0
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 161,
            "movement": -40
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 166,
            "movement": 29
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 170,
            "movement": -59
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 171,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 186,
            "movement": -13
          },
          {
            "country": "US",
            "name": "United States",
            "position": 186,
            "movement": -34
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 190,
            "movement": 0
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 191,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 193,
            "movement": 0
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 194,
            "movement": -62
          },
          {
            "country": "DO",
            "name": "Dominican Republic",
            "position": 195,
            "movement": -24
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 198,
            "movement": -12
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SG",
            "name": "Singapore",
            "position": 80,
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
    "title": "SHE DID IT AGAIN",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SR",
            "name": "Suriname",
            "position": 10,
            "movement": 0
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 57,
            "movement": 0
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 78,
            "movement": 0
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 99,
            "movement": 0
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 119,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 135,
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 181,
            "movement": 0
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 186,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 200,
            "movement": 0
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
            "position": 37,
            "movement": -4
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 81,
            "movement": -19
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 98,
            "movement": -18
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 124,
            "movement": -5
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 167,
            "movement": -15
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 178,
            "movement": -19
          }
        ]
      },
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SE",
            "name": "Sweden",
            "position": 143,
            "movement": -13
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
            "position": 130,
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
            "position": 9,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 25,
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 27,
            "movement": 0
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 29,
            "movement": 0
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 43,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 112,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 154,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 174,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 175,
            "movement": 0
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
            "position": 123,
            "movement": 2
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 184,
            "movement": -12
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
            "position": 57,
            "movement": 2
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 66,
            "movement": -32
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
            "position": 154,
            "movement": 0
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 162,
            "movement": 28
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 164,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 166,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 181,
            "movement": -11
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 185,
            "movement": 14
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 186,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 200,
            "movement": -14
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 1,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 1,
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
    "title": "CHANEL",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "AT",
            "name": "Austria",
            "position": 57,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 58,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 64,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 93,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 99,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 100,
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
            "country": "QA",
            "name": "Qatar",
            "position": 121,
            "movement": 0
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 178,
            "movement": 0
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
            "country": "SZ",
            "name": "Swaziland",
            "position": 33,
            "movement": 0
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 43,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 92,
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 92,
            "movement": 0
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GD",
            "name": "Grenada",
            "position": 62,
            "movement": -7
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/5abac68deeb720d1aaea68ae179608df/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "FAIRYTALE",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BW",
            "name": "Botswana",
            "position": 50,
            "movement": 0
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 51,
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 61,
            "movement": 0
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 82,
            "movement": 0
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
            "country": "KE",
            "name": "Kenya",
            "position": 65,
            "movement": -32
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 173,
            "movement": -25
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 106,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/5abac68deeb720d1aaea68ae179608df/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "DOUBLE BLIND",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 119,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/5abac68deeb720d1aaea68ae179608df/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "MR. NONCHALANT",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 149,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/5abac68deeb720d1aaea68ae179608df/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "KISS",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 186,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/5abac68deeb720d1aaea68ae179608df/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "DYNAMITE",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LA",
            "name": "Laos",
            "position": 19,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b9de2c8e816295f124dd7b227f7fa668/500x500-000000-80-0-0.jpg"
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
            "position": 91,
            "movement": 14
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/cd07d0b83bcc8a17928619b3771e42df/500x500-000000-80-0-0.jpg"
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
            "position": 194,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b246276eba02e22c9e08605924395480/500x500-000000-80-0-0.jpg"
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
  