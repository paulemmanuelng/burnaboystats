// GENERATED FILE — do not edit by hand.
  // Rebuilt hourly by scripts/build-live-charts.mjs --artist=victony from kworb's artist page.
  //
  // PLATFORM chart data for Victony: where each release is sitting RIGHT
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
    "title": "SLICK",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 1,
        "entries": [
          {
            "country": "SR",
            "name": "Suriname",
            "position": 1,
            "movement": 3
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 2,
            "movement": 2
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 2,
            "movement": -1
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 3,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 4,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 5,
            "movement": 0
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 6,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 6,
            "movement": 0
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 8,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 11,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 11,
            "movement": 10
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 14,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 14,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 15,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 18,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 20,
            "movement": -1
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 22,
            "movement": -7
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 23,
            "movement": -4
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 28,
            "movement": -4
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 41,
            "movement": 0
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 45,
            "movement": 78
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 48,
            "movement": -5
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 71,
            "movement": -40
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 77,
            "movement": 5
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 80,
            "movement": -27
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 85,
            "movement": -39
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 91,
            "movement": 26
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 94,
            "movement": -12
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 135,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 144,
            "movement": -27
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 144,
            "movement": -81
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 144,
            "movement": -5
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 155,
            "movement": 3
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 185,
            "movement": null,
            "status": "new"
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 190,
            "movement": -139
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 191,
            "movement": -30
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 200,
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
            "country": "UG",
            "name": "Uganda",
            "position": 6,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 9,
            "movement": 0
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 9,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 12,
            "movement": -1
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 12,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 13,
            "movement": 0
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 13,
            "movement": -1
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 24,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 30,
            "movement": -2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 30,
            "movement": -2
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 37,
            "movement": -2
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 39,
            "movement": -2
          },
          {
            "country": "FR",
            "name": "France",
            "position": 41,
            "movement": -5
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 61,
            "movement": -2
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 64,
            "movement": -2
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 65,
            "movement": -8
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 73,
            "movement": 2
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 75,
            "movement": -4
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 87,
            "movement": -5
          },
          {
            "country": "US",
            "name": "United States",
            "position": 139,
            "movement": -6
          }
        ]
      },
      {
        "platform": "YouTube",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 4,
            "movement": 4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 8,
            "movement": 2
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 11,
            "movement": -3
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 13,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 28,
            "movement": 28
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 40,
            "movement": 21
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 5,
            "movement": -4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 6,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 45,
            "movement": -18
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 55,
            "movement": -3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 82,
            "movement": -23
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SN",
            "name": "Senegal",
            "position": 4,
            "movement": 14
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 19,
            "movement": -13
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 41,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 56,
            "movement": -32
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
            "position": 11,
            "movement": 1
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 195,
            "movement": -5
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3be386ed5da6f28d57ce4808d7d07802/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "STARLIFE",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 3,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 5,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 6,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 6,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 7,
            "movement": 2
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 7,
            "movement": -4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 7,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 8,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 8,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 9,
            "movement": 0
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 10,
            "movement": 8
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 12,
            "movement": -4
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 12,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 13,
            "movement": -6
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 18,
            "movement": 16
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 18,
            "movement": 130
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 22,
            "movement": -9
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 23,
            "movement": 56
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 25,
            "movement": -3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 30,
            "movement": -13
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 31,
            "movement": 1
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 34,
            "movement": 2
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 43,
            "movement": -6
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 47,
            "movement": 27
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 52,
            "movement": -9
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 53,
            "movement": -2
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 57,
            "movement": -8
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 58,
            "movement": -51
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 62,
            "movement": -5
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 63,
            "movement": -13
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 66,
            "movement": -4
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 76,
            "movement": -20
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 79,
            "movement": -13
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 83,
            "movement": -35
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 87,
            "movement": -58
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 89,
            "movement": -60
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 94,
            "movement": -41
          },
          {
            "country": "FR",
            "name": "France",
            "position": 139,
            "movement": -23
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 141,
            "movement": -70
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 156,
            "movement": -3
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 172,
            "movement": -74
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 194,
            "movement": -6
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
            "position": 4,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 35,
            "movement": -14
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4446cd79abcc87206d5e47417ba9bde7/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "FRE$H",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 21,
            "movement": -2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 25,
            "movement": -5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 43,
            "movement": -6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 65,
            "movement": 2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 111,
            "movement": -8
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 136,
            "movement": -17
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 150,
            "movement": -67
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 162,
            "movement": -44
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 170,
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
            "country": "CM",
            "name": "Cameroon",
            "position": 162,
            "movement": -7
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 168,
            "movement": -10
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
            "position": 30,
            "movement": 1
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
            "position": 36,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/720a729019b9a6c8873652d993302775/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "WHO THIS",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 29,
            "movement": -4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 33,
            "movement": 9
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 69,
            "movement": -33
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 102,
            "movement": -13
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 162,
            "movement": 6
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 184,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 190,
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
            "position": 39,
            "movement": 13
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 38,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9929af7c4e10861ff55d4cb54ef96c28/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "STARLIFE",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 41,
            "movement": -5
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 100,
            "movement": 15
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 111,
            "movement": -35
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 177,
            "movement": -40
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
            "position": 51,
            "movement": -1
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 18,
            "movement": -6
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
            "position": 46,
            "movement": -21
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4446cd79abcc87206d5e47417ba9bde7/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Soweto",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "OM",
            "name": "Oman",
            "position": 39,
            "movement": -7
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 79,
            "movement": 11
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 98,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 108,
            "movement": 10
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 126,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 146,
            "movement": 4
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
            "position": 46,
            "movement": -5
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a21fb655cf3e2fc8b05db68fc6eb34b1/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "2FRESH",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 57,
            "movement": -11
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 85,
            "movement": -6
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 114,
            "movement": -54
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 182,
            "movement": -56
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
            "position": 125,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/720a729019b9a6c8873652d993302775/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "TWIN",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 49,
            "movement": 23
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 52,
            "movement": -4
          }
        ]
      },
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 182,
            "movement": -5
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 4,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/da22875a6742ba991e3fe3ed2a3f8bed/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Holy Father",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 120,
            "movement": 22
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 125,
            "movement": 28
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 191,
            "movement": 3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 191,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/7c44504f57343c69b9a6e2219cb857ab/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "PINO",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 149,
            "movement": 4
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 81,
            "movement": -16
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 3,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4446cd79abcc87206d5e47417ba9bde7/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "TYPO",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 52,
            "movement": 16
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 134,
            "movement": -27
          }
        ]
      },
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 187,
            "movement": -27
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b7f8a994a2879ad8100aab10404627a4/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Risk",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 91,
            "movement": -3
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 150,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 159,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/8ecef1fd19cf7846a2fe2cf0e3ef3532/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "ARMED & DANGEROUS",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 132,
            "movement": 14
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 99,
            "movement": -12
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4446cd79abcc87206d5e47417ba9bde7/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "TOO LIT",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 144,
            "movement": 21
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 96,
            "movement": -13
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4446cd79abcc87206d5e47417ba9bde7/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "MISSIN PIECE",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 131,
            "movement": 50
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 147,
            "movement": -37
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4446cd79abcc87206d5e47417ba9bde7/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "FYNE",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 190,
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
            "country": "NG",
            "name": "Nigeria",
            "position": 159,
            "movement": -39
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/720a729019b9a6c8873652d993302775/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Jaga Jaga",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 165,
            "movement": 5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 182,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/42248d8b06dd650f1f1f6eafcca490e0/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Jailer",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 51,
            "movement": 3
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/06fec5c27867700f0bdd8938b5ac4abd/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Hello",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 87,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "AMAZON",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 166,
            "movement": -36
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4446cd79abcc87206d5e47417ba9bde7/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "CLEAR",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 171,
            "movement": -39
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4446cd79abcc87206d5e47417ba9bde7/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "PITY THIS BOY",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 153,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/92d9434341384d2ebdca52fd613a18d6/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "CAN JUICE",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 194,
            "movement": -39
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4446cd79abcc87206d5e47417ba9bde7/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Stubborn",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 132,
            "movement": 6
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/8ecef1fd19cf7846a2fe2cf0e3ef3532/500x500-000000-80-0-0.jpg"
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
  