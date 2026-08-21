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
            "country": "ZA",
            "name": "South Africa",
            "position": 4,
            "movement": -2
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 5,
            "movement": -2
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 6,
            "movement": -3
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 7,
            "movement": -4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 8,
            "movement": -4
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 8,
            "movement": -3
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 14,
            "movement": 1
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
            "country": "UG",
            "name": "Uganda",
            "position": 20,
            "movement": -12
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
            "position": 22,
            "movement": 2
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 29,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 30,
            "movement": 110
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
            "country": "LT",
            "name": "Lithuania",
            "position": 40,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 42,
            "movement": -8
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 43,
            "movement": -3
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 45,
            "movement": -37
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 51,
            "movement": 19
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 54,
            "movement": 6
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 56,
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 60,
            "movement": -10
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 62,
            "movement": -21
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 66,
            "movement": -11
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 74,
            "movement": -43
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 74,
            "movement": 11
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
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 82,
            "movement": -33
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 84,
            "movement": 7
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 91,
            "movement": 8
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 92,
            "movement": -26
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
            "country": "SR",
            "name": "Suriname",
            "position": 106,
            "movement": -88
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 111,
            "movement": 16
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 121,
            "movement": -26
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
            "country": "MV",
            "name": "Maldives",
            "position": 133,
            "movement": -17
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 135,
            "movement": -86
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
            "country": "HR",
            "name": "Croatia",
            "position": 167,
            "movement": -67
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
            "country": "KY",
            "name": "Cayman Islands",
            "position": 183,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 183,
            "movement": -67
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
            "country": "VN",
            "name": "Vietnam",
            "position": 191,
            "movement": null,
            "status": "new"
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
            "position": 90,
            "movement": -64
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
            "position": 8,
            "movement": 2
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 87,
            "movement": -30
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 96,
            "movement": -18
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 134,
            "movement": -15
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 145,
            "movement": -46
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 149,
            "movement": 32
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 164,
            "movement": 22
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
            "position": 63,
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
            "position": 21,
            "movement": -12
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 26,
            "movement": 3
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 30,
            "movement": -5
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 34,
            "movement": -7
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 79,
            "movement": 33
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 152,
            "movement": 23
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 152,
            "movement": 2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 197,
            "movement": -23
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
            "position": 68,
            "movement": -30
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
            "country": "LC",
            "name": "St. Lucia",
            "position": 86,
            "movement": null,
            "status": "new"
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
            "country": "NP",
            "name": "Nepal",
            "position": 180,
            "movement": -26
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 181,
            "movement": -11
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 184,
            "movement": null,
            "status": "new"
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
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "IE",
            "name": "Ireland",
            "position": 186,
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
    "title": "IS IT LOVE",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 62,
            "movement": -19
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 78,
            "movement": -45
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 124,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 128,
            "movement": -36
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 145,
            "movement": -53
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
            "country": "SZ",
            "name": "Swaziland",
            "position": 44,
            "movement": 38
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 72,
            "movement": -21
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 74,
            "movement": -13
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 83,
            "movement": -33
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
            "country": "TD",
            "name": "Chad",
            "position": 41,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 137,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 160,
            "movement": 34
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b246276eba02e22c9e08605924395480/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "IS IT",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 139,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 154,
            "movement": -48
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 190,
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
    "title": "PUSH 2 START",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 67,
            "movement": -30
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 173,
            "movement": -25
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "YE",
            "name": "Yemen",
            "position": 193,
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
    "title": "DOUBLE BLIND",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 190,
            "movement": -71
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
  