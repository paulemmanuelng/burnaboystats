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
  export const liveChartsUpdated = "2026-09-05";
  
  /** Every platform represented in the current snapshot. */
  export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","YouTube","iTunes"];
  
  export const liveCharts: LiveRelease[] = [
  {
    "title": "SLICK",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "AO",
            "name": "Angola",
            "position": 2,
            "movement": 3
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 2,
            "movement": 1
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 3,
            "movement": 0
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 5,
            "movement": -2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 7,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 7,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 7,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 11,
            "movement": -3
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 11,
            "movement": 16
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 13,
            "movement": 14
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 15,
            "movement": 0
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 17,
            "movement": -7
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 18,
            "movement": 9
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 22,
            "movement": -2
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 26,
            "movement": -6
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 32,
            "movement": -9
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 36,
            "movement": 24
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 37,
            "movement": -22
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 37,
            "movement": -16
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 41,
            "movement": -4
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 51,
            "movement": 14
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 57,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 61,
            "movement": -45
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 79,
            "movement": -11
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 93,
            "movement": -29
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 112,
            "movement": 2
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 121,
            "movement": -13
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 152,
            "movement": -102
          },
          {
            "country": "DO",
            "name": "Dominican Republic",
            "position": 181,
            "movement": 9
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 188,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 191,
            "movement": -39
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 196,
            "movement": null,
            "status": "new"
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 200,
            "movement": -49
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
            "position": 7,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 9,
            "movement": 1
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 10,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 12,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 17,
            "movement": 0
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 17,
            "movement": 1
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 18,
            "movement": 2
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 30,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 36,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 38,
            "movement": -4
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 40,
            "movement": 0
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 49,
            "movement": 1
          },
          {
            "country": "FR",
            "name": "France",
            "position": 51,
            "movement": -2
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
            "country": "BE",
            "name": "Belgium",
            "position": 78,
            "movement": -6
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
            "country": "CH",
            "name": "Switzerland",
            "position": 137,
            "movement": -11
          },
          {
            "country": "US",
            "name": "United States",
            "position": 161,
            "movement": -5
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
            "position": 12,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 25,
            "movement": 3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 29,
            "movement": -10
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 37,
            "movement": 13
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 45,
            "movement": -5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 61,
            "movement": -3
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 66,
            "movement": 8
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 93,
            "movement": -8
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
            "position": 28,
            "movement": -4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 33,
            "movement": -7
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 58,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 152,
            "movement": -74
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 157,
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
            "position": 4,
            "movement": 3
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 7,
            "movement": 1
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 12,
            "movement": 31
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
            "position": 10,
            "movement": 1
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
            "country": "OM",
            "name": "Oman",
            "position": 5,
            "movement": 11
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 6,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 8,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 9,
            "movement": -4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 9,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 10,
            "movement": -5
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 11,
            "movement": 86
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 12,
            "movement": -4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 13,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 13,
            "movement": -2
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 15,
            "movement": -1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 18,
            "movement": -4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 23,
            "movement": -3
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 26,
            "movement": -2
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 28,
            "movement": 2
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 31,
            "movement": 107
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 43,
            "movement": -3
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 44,
            "movement": 24
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 50,
            "movement": 18
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 54,
            "movement": -14
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 56,
            "movement": -8
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 57,
            "movement": -24
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 62,
            "movement": -35
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 65,
            "movement": -13
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 75,
            "movement": -34
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 87,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 88,
            "movement": -9
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 101,
            "movement": 24
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 110,
            "movement": -7
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 112,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 112,
            "movement": -36
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 116,
            "movement": 43
          },
          {
            "country": "FR",
            "name": "France",
            "position": 153,
            "movement": 5
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 166,
            "movement": -141
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 167,
            "movement": 0
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 181,
            "movement": -124
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 184,
            "movement": -39
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
            "position": 15,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 169,
            "movement": -85
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
            "country": "OM",
            "name": "Oman",
            "position": 43,
            "movement": 68
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 90,
            "movement": -14
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 91,
            "movement": 14
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 94,
            "movement": 10
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 99,
            "movement": -7
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 109,
            "movement": 43
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 119,
            "movement": 63
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 127,
            "movement": 0
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 184,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 199,
            "movement": null,
            "status": "new"
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
            "country": "LR",
            "name": "Liberia",
            "position": 33,
            "movement": -10
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 50,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 56,
            "movement": -3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 96,
            "movement": -31
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 172,
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
            "country": "NG",
            "name": "Nigeria",
            "position": 174,
            "movement": -7
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 195,
            "movement": -8
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
            "position": 35,
            "movement": 0
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
            "position": 21,
            "movement": 12
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
            "position": 38,
            "movement": -3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 39,
            "movement": -3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 69,
            "movement": 31
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 89,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 96,
            "movement": 5
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
            "position": 34,
            "movement": 4
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
            "position": 83,
            "movement": -10
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
            "position": 24,
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
    "title": "2FRESH",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 49,
            "movement": 3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 90,
            "movement": -11
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 116,
            "movement": -2
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
            "position": 139,
            "movement": 0
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
            "position": 68,
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
            "country": "NG",
            "name": "Nigeria",
            "position": 91,
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
    "title": "TWIN",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 28,
            "movement": 0
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
            "position": 67,
            "movement": -3
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
            "position": 171,
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
            "position": 33,
            "movement": -29
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
            "position": 57,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/da22875a6742ba991e3fe3ed2a3f8bed/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "TYPO",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SN",
            "name": "Senegal",
            "position": 30,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 84,
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
            "position": 76,
            "movement": -2
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
            "position": 167,
            "movement": -19
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
            "position": 60,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b7f8a994a2879ad8100aab10404627a4/500x500-000000-80-0-0.jpg"
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
            "position": 63,
            "movement": -2
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
            "position": 54,
            "movement": -4
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
            "position": 51,
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
            "country": "NG",
            "name": "Nigeria",
            "position": 31,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4446cd79abcc87206d5e47417ba9bde7/500x500-000000-80-0-0.jpg"
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
            "position": 109,
            "movement": -11
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
            "position": 142,
            "movement": -16
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
            "position": 28,
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
            "country": "NG",
            "name": "Nigeria",
            "position": 85,
            "movement": null,
            "status": "new"
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
            "position": 59,
            "movement": 0
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
            "position": 133,
            "movement": -17
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
            "position": 54,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4446cd79abcc87206d5e47417ba9bde7/500x500-000000-80-0-0.jpg"
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
            "position": 89,
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
            "position": 99,
            "movement": -3
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
            "position": 65,
            "movement": null,
            "status": "new"
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
            "position": 187,
            "movement": -12
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
            "position": 197,
            "movement": -21
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
            "position": 97,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4446cd79abcc87206d5e47417ba9bde7/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "AMAZON",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 172,
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
            "country": "NG",
            "name": "Nigeria",
            "position": 89,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4446cd79abcc87206d5e47417ba9bde7/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Holy Father",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 70,
            "movement": 53
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 180,
            "movement": -8
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/7c44504f57343c69b9a6e2219cb857ab/500x500-000000-80-0-0.jpg"
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
            "position": 99,
            "movement": -20
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 125,
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
    "title": "Jaga Jaga",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 109,
            "movement": -13
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 131,
            "movement": 8
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/42248d8b06dd650f1f1f6eafcca490e0/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "FYNE",
    "platforms": [
      {
        "platform": "YouTube",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 75,
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
    "title": "Hello",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 72,
            "movement": -3
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/56bbf7807715d0374f6b8084268052e2/500x500-000000-80-0-0.jpg"
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
            "position": 46,
            "movement": 5
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/06fec5c27867700f0bdd8938b5ac4abd/500x500-000000-80-0-0.jpg"
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
            "position": 104,
            "movement": -5
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
            "position": 179,
            "movement": -7
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2222c3405fde64a7b5660d7d063f2971/500x500-000000-80-0-0.jpg"
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
            "position": 163,
            "movement": -6
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/8ecef1fd19cf7846a2fe2cf0e3ef3532/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Ba$Tard, Don't Be Silly",
    "kind": "song",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 22,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "cover": "https://cdn-images.dzcdn.net/images/cover/8ecef1fd19cf7846a2fe2cf0e3ef3532/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "CAN JUICE",
    "kind": "song",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 52,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "cover": "https://cdn-images.dzcdn.net/images/cover/eae1950cf642fef40ae06c76d29dc1b8/500x500-000000-80-0-0.jpg"
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
  