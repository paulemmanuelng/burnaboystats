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
  export const liveChartsUpdated = "2026-09-15";
  
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
            "movement": 1
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 2,
            "movement": 0
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 3,
            "movement": -1
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 3,
            "movement": 0
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 5,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 6,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 8,
            "movement": -1
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 11,
            "movement": 6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 13,
            "movement": -3
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 14,
            "movement": 17
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 15,
            "movement": 4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 18,
            "movement": 1
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 21,
            "movement": 4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 34,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 38,
            "movement": 8
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 39,
            "movement": -3
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 40,
            "movement": -10
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 50,
            "movement": -3
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 71,
            "movement": -8
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 74,
            "movement": 19
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 75,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 83,
            "movement": -12
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 95,
            "movement": 14
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 100,
            "movement": 7
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 105,
            "movement": -3
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 119,
            "movement": 5
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 128,
            "movement": -26
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 129,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 149,
            "movement": -17
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 150,
            "movement": -48
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 173,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DO",
            "name": "Dominican Republic",
            "position": 184,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 188,
            "movement": 6
          }
        ]
      },
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 12,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 12,
            "movement": -7
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 13,
            "movement": -6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 14,
            "movement": -5
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 17,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 18,
            "movement": -5
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 33,
            "movement": -9
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 35,
            "movement": -3
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 40,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 49,
            "movement": -21
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 49,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 64,
            "movement": -36
          },
          {
            "country": "FR",
            "name": "France",
            "position": 67,
            "movement": -33
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 73,
            "movement": 0
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 74,
            "movement": -5
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 94,
            "movement": -10
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 94,
            "movement": -13
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 126,
            "movement": -64
          },
          {
            "country": "US",
            "name": "United States",
            "position": 129,
            "movement": 32
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 158,
            "movement": -76
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 161,
            "movement": null,
            "status": "new"
          }
        ]
      },
      {
        "platform": "YouTube",
        "numberOnes": 0,
        "entries": [
          {
            "country": "AO",
            "name": "Angola",
            "position": 6,
            "movement": 4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 6,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 11,
            "movement": -1
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 11,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 25,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 40,
            "movement": 6
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 48,
            "movement": 4
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 60,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 64,
            "movement": 15
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 66,
            "movement": 7
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
            "position": 8,
            "movement": 2
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 13,
            "movement": 23
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 18,
            "movement": -6
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 39,
            "movement": null,
            "status": "new"
          },
          {
            "country": "JP",
            "name": "Japan",
            "position": 87,
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
            "country": "GH",
            "name": "Ghana",
            "position": 24,
            "movement": -15
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 57,
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
            "position": 20,
            "movement": -1
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
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 6,
            "movement": 7
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 6,
            "movement": 3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 6,
            "movement": 2
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 10,
            "movement": 21
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 11,
            "movement": 3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 17,
            "movement": -2
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 21,
            "movement": 11
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 22,
            "movement": 2
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 25,
            "movement": 6
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 33,
            "movement": -6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 37,
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 41,
            "movement": -7
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 43,
            "movement": -10
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 44,
            "movement": -2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 46,
            "movement": -22
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 48,
            "movement": 3
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 52,
            "movement": 65
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 57,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 61,
            "movement": 18
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 75,
            "movement": -16
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 94,
            "movement": -55
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 100,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 108,
            "movement": -28
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 133,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 163,
            "movement": -58
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 164,
            "movement": -61
          },
          {
            "country": "RS",
            "name": "Serbia",
            "position": 174,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 176,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 180,
            "movement": -137
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 197,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album",
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
            "country": "GM",
            "name": "Gambia",
            "position": 34,
            "movement": 10
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 75,
            "movement": -13
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 88,
            "movement": 5
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 95,
            "movement": -54
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 97,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 113,
            "movement": 0
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 137,
            "movement": 33
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 180,
            "movement": 16
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 183,
            "movement": 10
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a21fb655cf3e2fc8b05db68fc6eb34b1/500x500-000000-80-0-0.jpg"
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
            "position": 37,
            "movement": 3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 91,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 92,
            "movement": 15
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 152,
            "movement": 15
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
            "position": 58,
            "movement": -6
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
            "position": 191,
            "movement": -38
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
            "position": 27,
            "movement": 2
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
            "position": 53,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 72,
            "movement": 17
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 185,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 190,
            "movement": -14
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
            "position": 89,
            "movement": -5
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9929af7c4e10861ff55d4cb54ef96c28/500x500-000000-80-0-0.jpg"
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
            "position": 122,
            "movement": -2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 134,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 135,
            "movement": 24
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 182,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 193,
            "movement": -14
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/7c44504f57343c69b9a6e2219cb857ab/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "TWIN",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 63,
            "movement": 5
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 177,
            "movement": -39
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
            "position": 41,
            "movement": 5
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
            "position": 46,
            "movement": 131
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/da22875a6742ba991e3fe3ed2a3f8bed/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "2FRESH",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 85,
            "movement": 65
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 140,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 172,
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
            "country": "NG",
            "name": "Nigeria",
            "position": 40,
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
    "title": "STARLIFE",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 152,
            "movement": 29
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
            "position": 98,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4446cd79abcc87206d5e47417ba9bde7/500x500-000000-80-0-0.jpg"
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
            "position": 124,
            "movement": -24
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 159,
            "movement": -63
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/8ecef1fd19cf7846a2fe2cf0e3ef3532/500x500-000000-80-0-0.jpg"
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
            "position": 171,
            "movement": 7
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 200,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/8ecef1fd19cf7846a2fe2cf0e3ef3532/500x500-000000-80-0-0.jpg"
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
            "position": 124,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/42248d8b06dd650f1f1f6eafcca490e0/500x500-000000-80-0-0.jpg"
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
            "position": 155,
            "movement": -22
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b7f8a994a2879ad8100aab10404627a4/500x500-000000-80-0-0.jpg"
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
            "position": 60,
            "movement": 0
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
            "position": 135,
            "movement": -3
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/56bbf7807715d0374f6b8084268052e2/500x500-000000-80-0-0.jpg"
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
            "position": 150,
            "movement": -26
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/92d9434341384d2ebdca52fd613a18d6/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "OHEMA",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 184,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2222c3405fde64a7b5660d7d063f2971/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Saturn - EP",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 69,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album"
  },
  {
    "title": "Soweto",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "AO",
            "name": "Angola",
            "position": 124,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a21fb655cf3e2fc8b05db68fc6eb34b1/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Very Stubborn",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 127,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9006b3beadf51c1be30df723a7edc6c0/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Outlaw",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "DM",
            "name": "Dominica",
            "position": 160,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b7f8a994a2879ad8100aab10404627a4/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Skido",
    "platforms": [],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ebd3e7b46a4d85fb7a46e4cfc3dcbf14/500x500-000000-80-0-0.jpg"
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
  