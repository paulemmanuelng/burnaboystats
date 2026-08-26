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
  export const liveChartsUpdated = "2026-08-26";
  
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
            "country": "BW",
            "name": "Botswana",
            "position": 5,
            "movement": 1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 6,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 7,
            "movement": 4
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 8,
            "movement": -4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 9,
            "movement": 6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 14,
            "movement": 12
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 22,
            "movement": 39
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 26,
            "movement": -10
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 29,
            "movement": -6
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 31,
            "movement": 30
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 33,
            "movement": 6
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 35,
            "movement": -8
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 37,
            "movement": 1
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 47,
            "movement": 83
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 50,
            "movement": -1
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 58,
            "movement": 0
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 62,
            "movement": 67
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 62,
            "movement": -20
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 64,
            "movement": 38
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 69,
            "movement": 11
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 75,
            "movement": 79
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 80,
            "movement": 0
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 89,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 99,
            "movement": -37
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 104,
            "movement": 29
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 106,
            "movement": -4
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 107,
            "movement": -34
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 112,
            "movement": -30
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 114,
            "movement": 2
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 115,
            "movement": 27
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 119,
            "movement": -76
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 122,
            "movement": -30
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 123,
            "movement": -48
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 132,
            "movement": -34
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 140,
            "movement": -41
          },
          {
            "country": "DO",
            "name": "Dominican Republic",
            "position": 149,
            "movement": 16
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 149,
            "movement": -14
          },
          {
            "country": "MN",
            "name": "Mongolia",
            "position": 152,
            "movement": 27
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 153,
            "movement": -14
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 161,
            "movement": -114
          },
          {
            "country": "VE",
            "name": "Venezuela",
            "position": 165,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 167,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 169,
            "movement": -56
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 170,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KH",
            "name": "Cambodia",
            "position": 178,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 179,
            "movement": -143
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 183,
            "movement": -55
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 197,
            "movement": -138
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 200,
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
            "position": 48,
            "movement": -47
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 98,
            "movement": -18
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
            "country": "SB",
            "name": "Solomon Islands",
            "position": 51,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 79,
            "movement": 22
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 103,
            "movement": 4
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 106,
            "movement": -7
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 144,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 198,
            "movement": -2
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 200,
            "movement": -13
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
            "position": 42,
            "movement": -5
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 59,
            "movement": 15
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 96,
            "movement": 2
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 128,
            "movement": -7
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 140,
            "movement": 4
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 195,
            "movement": -7
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
            "position": 14,
            "movement": -6
          },
          {
            "country": "IN",
            "name": "India",
            "position": 23,
            "movement": 56
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 105,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 107,
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
            "country": "SE",
            "name": "Sweden",
            "position": 197,
            "movement": -21
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
            "position": 15,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 29,
            "movement": -3
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 59,
            "movement": -24
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 63,
            "movement": 7
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 80,
            "movement": 47
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 103,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 194,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 199,
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
            "country": "ZA",
            "name": "South Africa",
            "position": 70,
            "movement": -3
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
            "position": 99,
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
            "country": "MY",
            "name": "Malaysia",
            "position": 121,
            "movement": -8
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
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 82,
            "movement": -3
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 106,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 112,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 115,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 123,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 145,
            "movement": 50
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 182,
            "movement": -25
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
            "position": 75,
            "movement": -15
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 98,
            "movement": -2
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 116,
            "movement": -28
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 133,
            "movement": -22
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
            "position": 71,
            "movement": -2
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 122,
            "movement": -51
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 152,
            "movement": 38
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
            "position": 49,
            "movement": 97
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 161,
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
            "country": "OM",
            "name": "Oman",
            "position": 7,
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NP",
            "name": "Nepal",
            "position": 165,
            "movement": null,
            "status": "new"
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 197,
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
            "country": "EE",
            "name": "Estonia",
            "position": 65,
            "movement": 30
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/65d6063121e97ede49869ceedc250875/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "HOT TUBS",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 20,
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
    "title": "IS IT",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 170,
            "movement": 3
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
            "position": 20,
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
    "title": "CHANEL",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "IT",
            "name": "Italy",
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
    "title": "Talk to Me",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FI",
            "name": "Finland",
            "position": 88,
            "movement": 17
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/cd07d0b83bcc8a17928619b3771e42df/500x500-000000-80-0-0.jpg"
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
            "position": 117,
            "movement": 17
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/1ae9486180d1f50e7dbbb099b1e66825/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "DOUBLE BLIND",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NA",
            "name": "Namibia",
            "position": 96,
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
    "title": "On My Body",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 98,
            "movement": -28
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
  