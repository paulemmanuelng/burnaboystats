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
            "country": "CV",
            "name": "Cape Verde",
            "position": 1,
            "movement": 0
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
            "position": 3,
            "movement": 1
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 4,
            "movement": 8
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 4,
            "movement": 3
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 4,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 5,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 6,
            "movement": 1
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 9,
            "movement": 7
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 11,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 14,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 14,
            "movement": 0
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 15,
            "movement": 12
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 15,
            "movement": -3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 17,
            "movement": -5
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 19,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 19,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 21,
            "movement": 2
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 24,
            "movement": -3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 31,
            "movement": 8
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 41,
            "movement": -8
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 43,
            "movement": -14
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 46,
            "movement": 2
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 51,
            "movement": 6
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 53,
            "movement": 28
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 63,
            "movement": 25
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 82,
            "movement": 7
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 82,
            "movement": 4
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 117,
            "movement": -59
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 117,
            "movement": 3
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 123,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 126,
            "movement": 7
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 158,
            "movement": -16
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 161,
            "movement": 31
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 183,
            "movement": 13
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 198,
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
            "position": 2,
            "movement": -1
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 38,
            "movement": -20
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 48,
            "movement": 144
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 54,
            "movement": -4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 73,
            "movement": -26
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
            "position": 12,
            "movement": -3
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 190,
            "movement": -39
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
            "position": 2,
            "movement": 0
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 3,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 5,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
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
            "country": "GM",
            "name": "Gambia",
            "position": 7,
            "movement": 0
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 7,
            "movement": 13
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 7,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 8,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 8,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 9,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 9,
            "movement": -2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 9,
            "movement": -4
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 12,
            "movement": -2
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 13,
            "movement": 8
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 17,
            "movement": -4
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 18,
            "movement": -13
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 22,
            "movement": -12
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 29,
            "movement": -17
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 29,
            "movement": -2
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 32,
            "movement": -13
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 34,
            "movement": -21
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 36,
            "movement": -12
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 37,
            "movement": 5
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 42,
            "movement": -1
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 43,
            "movement": -3
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 48,
            "movement": -13
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 50,
            "movement": 4
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 51,
            "movement": -3
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 53,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 56,
            "movement": -19
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 57,
            "movement": -24
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 62,
            "movement": -1
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 66,
            "movement": 42
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 71,
            "movement": -42
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 74,
            "movement": 68
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 79,
            "movement": -46
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 80,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 95,
            "movement": -45
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 98,
            "movement": 2
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 100,
            "movement": 65
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 101,
            "movement": -9
          },
          {
            "country": "FR",
            "name": "France",
            "position": 135,
            "movement": -34
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 148,
            "movement": -109
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 153,
            "movement": -49
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 162,
            "movement": -70
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 163,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 168,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 176,
            "movement": -45
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 177,
            "movement": -124
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 188,
            "movement": -37
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 198,
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
            "country": "KE",
            "name": "Kenya",
            "position": 4,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 29,
            "movement": -12
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
            "position": 19,
            "movement": 4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 20,
            "movement": -8
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 37,
            "movement": -2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 67,
            "movement": 9
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 83,
            "movement": 82
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 103,
            "movement": 2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 118,
            "movement": -4
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 119,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 150,
            "movement": -32
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
            "position": 31,
            "movement": -7
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
    "title": "Soweto",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "OM",
            "name": "Oman",
            "position": 32,
            "movement": 58
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 90,
            "movement": 59
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 99,
            "movement": -5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 118,
            "movement": -7
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 126,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 150,
            "movement": 3
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 163,
            "movement": 21
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 186,
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
    "title": "STARLIFE",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 36,
            "movement": -5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 76,
            "movement": 30
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 115,
            "movement": -45
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 137,
            "movement": -64
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
            "position": 50,
            "movement": -11
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
            "position": 14,
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
    "title": "WHO THIS",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 25,
            "movement": -5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 36,
            "movement": 28
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 42,
            "movement": 2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 89,
            "movement": -37
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 168,
            "movement": -15
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
            "position": 52,
            "movement": -14
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
            "country": "NG",
            "name": "Nigeria",
            "position": 46,
            "movement": -8
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 60,
            "movement": -4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 79,
            "movement": -43
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 126,
            "movement": -61
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 195,
            "movement": -87
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
            "movement": -42
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 48,
            "movement": -6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 184,
            "movement": -70
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
            "position": 72,
            "movement": -19
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
    "title": "PINO",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 65,
            "movement": -13
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 152,
            "movement": -3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 186,
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
            "position": 153,
            "movement": -53
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
    "title": "Stubborn",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 130,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 138,
            "movement": -9
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 184,
            "movement": 4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 193,
            "movement": -30
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 198,
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
    "title": "TYPO",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 68,
            "movement": -4
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
            "position": 107,
            "movement": -17
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
    "title": "TOO LIT",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 83,
            "movement": -20
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 153,
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
            "position": 165,
            "movement": -40
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 110,
            "movement": -12
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 186,
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
            "position": 181,
            "movement": -51
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 142,
            "movement": -49
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 153,
            "movement": 43
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 194,
            "movement": -37
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/7c44504f57343c69b9a6e2219cb857ab/500x500-000000-80-0-0.jpg"
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
            "position": 146,
            "movement": -48
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
            "position": 87,
            "movement": -17
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
            "position": 88,
            "movement": -14
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/8ecef1fd19cf7846a2fe2cf0e3ef3532/500x500-000000-80-0-0.jpg"
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
            "position": 88,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
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
            "position": 54,
            "movement": 4
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/06fec5c27867700f0bdd8938b5ac4abd/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "FYNE",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 120,
            "movement": -14
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/720a729019b9a6c8873652d993302775/500x500-000000-80-0-0.jpg"
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
            "position": 130,
            "movement": -18
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
            "position": 132,
            "movement": -21
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4446cd79abcc87206d5e47417ba9bde7/500x500-000000-80-0-0.jpg"
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
            "position": 155,
            "movement": -38
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4446cd79abcc87206d5e47417ba9bde7/500x500-000000-80-0-0.jpg"
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
            "position": 170,
            "movement": 9
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/42248d8b06dd650f1f1f6eafcca490e0/500x500-000000-80-0-0.jpg"
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
            "position": 154,
            "movement": -47
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/92d9434341384d2ebdca52fd613a18d6/500x500-000000-80-0-0.jpg"
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
  