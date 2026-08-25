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
  export const liveChartsUpdated = "2026-08-25";
  
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
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 4,
            "movement": 1
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 7,
            "movement": -1
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 9,
            "movement": -5
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 11,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 14,
            "movement": -1
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 23,
            "movement": -5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 26,
            "movement": 14
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 27,
            "movement": 8
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 29,
            "movement": -3
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 36,
            "movement": 105
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 38,
            "movement": -18
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 39,
            "movement": 14
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 43,
            "movement": 98
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 46,
            "movement": 70
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 49,
            "movement": 68
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 56,
            "movement": 3
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 58,
            "movement": -32
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 59,
            "movement": 14
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 62,
            "movement": 29
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 63,
            "movement": 1
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 69,
            "movement": -3
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 80,
            "movement": -4
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 80,
            "movement": -17
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 82,
            "movement": -53
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 87,
            "movement": 4
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 92,
            "movement": 18
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 98,
            "movement": 10
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 99,
            "movement": 99
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 113,
            "movement": -7
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 113,
            "movement": -13
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 114,
            "movement": -12
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 115,
            "movement": -101
          },
          {
            "country": "MN",
            "name": "Mongolia",
            "position": 120,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 123,
            "movement": 10
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 129,
            "movement": -82
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 130,
            "movement": 14
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 134,
            "movement": -7
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 135,
            "movement": 6
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 142,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 142,
            "movement": -44
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 146,
            "movement": -51
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 153,
            "movement": -5
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 154,
            "movement": -81
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 157,
            "movement": -96
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 173,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 191,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 191,
            "movement": -43
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
            "position": 42,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 68,
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
            "country": "ZA",
            "name": "South Africa",
            "position": 111,
            "movement": 16
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 123,
            "movement": -19
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 135,
            "movement": 4
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 147,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 156,
            "movement": -15
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 161,
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
            "movement": -1
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 74,
            "movement": 28
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 98,
            "movement": 17
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 121,
            "movement": 1
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 144,
            "movement": 0
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 188,
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
            "country": "UG",
            "name": "Uganda",
            "position": 4,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IN",
            "name": "India",
            "position": 45,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 73,
            "movement": -10
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
            "position": 175,
            "movement": -21
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
            "country": "SV",
            "name": "El Salvador",
            "position": 9,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 50,
            "movement": 14
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 54,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 57,
            "movement": 10
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 68,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 69,
            "movement": 0
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 75,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 76,
            "movement": 9
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 77,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 85,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 100,
            "movement": -34
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
            "position": 19,
            "movement": 5
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 36,
            "movement": 15
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 41,
            "movement": 7
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 62,
            "movement": -16
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 124,
            "movement": -1
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
            "position": 113,
            "movement": -6
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 171,
            "movement": 1
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
            "position": 106,
            "movement": -4
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
    "title": "TYLA +",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BO",
            "name": "Bolivia",
            "position": 23,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 79,
            "movement": 42
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 123,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 159,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 183,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 190,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 195,
            "movement": -15
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 196,
            "movement": null,
            "status": "new"
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
            "country": "BW",
            "name": "Botswana",
            "position": 65,
            "movement": 1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 90,
            "movement": 40
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 95,
            "movement": 0
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 122,
            "movement": -73
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
            "position": 79,
            "movement": 22
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 158,
            "movement": -75
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 182,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
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
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 93,
            "movement": null,
            "status": "new"
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 95,
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
            "country": "PL",
            "name": "Poland",
            "position": 87,
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
            "position": 105,
            "movement": 12
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
            "position": 187,
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
            "position": 85,
            "movement": -76
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b246276eba02e22c9e08605924395480/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "On My Body",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 66,
            "movement": -34
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/373ba020e129cca1360301be7dc5701a/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Truth or Dare",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TH",
            "name": "Thailand",
            "position": 134,
            "movement": 12
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/1ae9486180d1f50e7dbbb099b1e66825/500x500-000000-80-0-0.jpg"
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
  