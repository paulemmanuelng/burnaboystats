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
  export const liveChartsUpdated = "2026-08-23";
  
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
            "position": 3,
            "movement": 1
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 4,
            "movement": 3
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 6,
            "movement": 2
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 6,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 10,
            "movement": -2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 13,
            "movement": 2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 15,
            "movement": 8
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 16,
            "movement": 3
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 27,
            "movement": -19
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 29,
            "movement": -13
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 29,
            "movement": -20
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 29,
            "movement": -7
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 30,
            "movement": 13
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 31,
            "movement": 9
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 34,
            "movement": -1
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 46,
            "movement": 51
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 55,
            "movement": -13
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 57,
            "movement": -3
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 59,
            "movement": -12
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 74,
            "movement": -4
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 75,
            "movement": 5
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 77,
            "movement": 93
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 82,
            "movement": 38
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 85,
            "movement": -35
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 88,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 88,
            "movement": -26
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 90,
            "movement": -45
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 93,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 99,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 101,
            "movement": -19
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 102,
            "movement": 7
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 108,
            "movement": -63
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 110,
            "movement": -10
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 112,
            "movement": 18
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 116,
            "movement": -58
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 116,
            "movement": -23
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 121,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 122,
            "movement": -79
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 123,
            "movement": 36
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 124,
            "movement": -3
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 128,
            "movement": -54
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 133,
            "movement": -45
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 141,
            "movement": -10
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 145,
            "movement": -46
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 146,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 153,
            "movement": -11
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 172,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 174,
            "movement": -134
          },
          {
            "country": "DO",
            "name": "Dominican Republic",
            "position": 182,
            "movement": 13
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 187,
            "movement": -25
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 190,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 195,
            "movement": -24
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 195,
            "movement": -86
          },
          {
            "country": "VN",
            "name": "Vietnam",
            "position": 199,
            "movement": -8
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
            "country": "ZA",
            "name": "South Africa",
            "position": 20,
            "movement": 1
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 41,
            "movement": -11
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 42,
            "movement": -16
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 44,
            "movement": -10
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 85,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 114,
            "movement": -35
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 159,
            "movement": -7
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 186,
            "movement": -34
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
            "position": 119,
            "movement": 3
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 182,
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
            "position": 77,
            "movement": -16
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
            "position": 36,
            "movement": 48
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
            "position": 87,
            "movement": null,
            "status": "re"
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
            "position": 34,
            "movement": 1
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 103,
            "movement": -15
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 109,
            "movement": 5
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 137,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 145,
            "movement": -28
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 192,
            "movement": -6
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SE",
            "name": "Sweden",
            "position": 76,
            "movement": 20
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 102,
            "movement": -15
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 153,
            "movement": 0
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 178,
            "movement": -33
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
            "position": 157,
            "movement": -9
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
            "position": 54,
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
    "title": "CHANEL",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "IT",
            "name": "Italy",
            "position": 70,
            "movement": -19
          },
          {
            "country": "SV",
            "name": "El Salvador",
            "position": 76,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 80,
            "movement": -39
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 88,
            "movement": -27
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 92,
            "movement": -31
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 97,
            "movement": -37
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 98,
            "movement": -32
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 98,
            "movement": -57
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 99,
            "movement": -43
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 77,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 127,
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
            "position": 80,
            "movement": -18
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 103,
            "movement": -25
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 166,
            "movement": -21
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 167,
            "movement": -39
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 182,
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
            "position": 52,
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
            "position": 53,
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
            "country": "LY",
            "name": "Libya",
            "position": 58,
            "movement": -46
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 152,
            "movement": -52
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 177,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 177,
            "movement": 4
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 199,
            "movement": -113
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
            "movement": 0
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 193,
            "movement": -99
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
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "DK",
            "name": "Denmark",
            "position": 51,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 82,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 120,
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
            "position": 30,
            "movement": 130
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
            "position": 52,
            "movement": -8
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 65,
            "movement": 18
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 74,
            "movement": -2
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 82,
            "movement": -8
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
            "country": "IL",
            "name": "Israel",
            "position": 81,
            "movement": null,
            "status": "new"
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 82,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 88,
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
    "title": "Talk to Me",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "IT",
            "name": "Italy",
            "position": 94,
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
            "country": "FI",
            "name": "Finland",
            "position": 115,
            "movement": -17
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 172,
            "movement": -18
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
            "position": 200,
            "movement": -10
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/5abac68deeb720d1aaea68ae179608df/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "CRAZY OF ME",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 178,
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
    "title": "Truth or Dare",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NP",
            "name": "Nepal",
            "position": 122,
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
    "title": "ART",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NP",
            "name": "Nepal",
            "position": 135,
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
    "title": "DYNAMITE",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LA",
            "name": "Laos",
            "position": 70,
            "movement": -47
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b9de2c8e816295f124dd7b227f7fa668/500x500-000000-80-0-0.jpg"
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
  