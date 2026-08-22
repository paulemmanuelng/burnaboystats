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
  export const liveChartsUpdated = "2026-08-22";
  
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
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 6,
            "movement": 0
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 7,
            "movement": -2
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 8,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 9,
            "movement": 11
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
            "position": 15,
            "movement": 1
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 19,
            "movement": -5
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 23,
            "movement": -4
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
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 29,
            "movement": -7
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 34,
            "movement": -1
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 40,
            "movement": -8
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 42,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 43,
            "movement": 33
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 45,
            "movement": -23
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 45,
            "movement": 61
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 46,
            "movement": 51
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 47,
            "movement": -17
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 50,
            "movement": -5
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
            "country": "GD",
            "name": "Grenada",
            "position": 58,
            "movement": 37
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 70,
            "movement": -19
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 71,
            "movement": -10
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 88,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 88,
            "movement": -14
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 88,
            "movement": -26
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 93,
            "movement": null,
            "status": "new"
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 93,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 95,
            "movement": -66
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 99,
            "movement": 95
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 99,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 100,
            "movement": -24
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 101,
            "movement": -19
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 105,
            "movement": 26
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 106,
            "movement": -22
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 109,
            "movement": -17
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 109,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 120,
            "movement": 1
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 122,
            "movement": -79
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 122,
            "movement": -4
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 128,
            "movement": -54
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 130,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 131,
            "movement": -44
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 138,
            "movement": 6
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 156,
            "movement": -90
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 160,
            "movement": 2
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 164,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 166,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 170,
            "movement": -110
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
            "country": "TH",
            "name": "Thailand",
            "position": 187,
            "movement": 11
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 195,
            "movement": -24
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
    "title": "CHANEL",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "AU",
            "name": "Australia",
            "position": 41,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 41,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 41,
            "movement": 17
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 51,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 51,
            "movement": 13
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 56,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 60,
            "movement": 33
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 61,
            "movement": -4
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 61,
            "movement": 38
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 66,
            "movement": null,
            "status": "new"
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 69,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 81,
            "movement": 19
          },
          {
            "country": "US",
            "name": "United States",
            "position": 89,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 97,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 100,
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
            "position": 12,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 100,
            "movement": 80
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 115,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 143,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 168,
            "movement": 13
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 177,
            "movement": null,
            "status": "new"
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 190,
            "movement": -28
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 191,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 193,
            "movement": -7
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 195,
            "movement": null,
            "status": "new"
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
            "position": 109,
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
            "position": 122,
            "movement": 1
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 163,
            "movement": 21
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
            "position": 115,
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
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "RO",
            "name": "Romania",
            "position": 35,
            "movement": 2
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 88,
            "movement": -7
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 114,
            "movement": 10
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 117,
            "movement": -19
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 186,
            "movement": -19
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 189,
            "movement": -11
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
            "movement": -19
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
            "country": "GD",
            "name": "Grenada",
            "position": 68,
            "movement": -6
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
    "title": "Water",
    "platforms": [
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
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "DK",
            "name": "Denmark",
            "position": 69,
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
    "title": "PUSH 2 START",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 100,
            "movement": -31
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 195,
            "movement": -22
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
    "title": "DYNAMITE",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LA",
            "name": "Laos",
            "position": 23,
            "movement": -4
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b9de2c8e816295f124dd7b227f7fa668/500x500-000000-80-0-0.jpg"
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
    "title": "Talk to Me",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FI",
            "name": "Finland",
            "position": 98,
            "movement": -7
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/cd07d0b83bcc8a17928619b3771e42df/500x500-000000-80-0-0.jpg"
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
  