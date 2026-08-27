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
  export const liveChartsUpdated = "2026-08-27";
  
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
            "country": "LR",
            "name": "Liberia",
            "position": 4,
            "movement": 0
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 4,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 5,
            "movement": 0
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 6,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 6,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 9,
            "movement": -3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 10,
            "movement": 2
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 10,
            "movement": 26
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 11,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 11,
            "movement": -2
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 15,
            "movement": -5
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 16,
            "movement": -1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 17,
            "movement": -5
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 18,
            "movement": -2
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 19,
            "movement": 3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 19,
            "movement": 0
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 22,
            "movement": 2
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 23,
            "movement": 5
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 27,
            "movement": -6
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 30,
            "movement": 7
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 34,
            "movement": 1
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 36,
            "movement": -15
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 47,
            "movement": 10
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 68,
            "movement": -3
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 73,
            "movement": -35
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 89,
            "movement": 4
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 91,
            "movement": 88
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 92,
            "movement": 92
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 98,
            "movement": -67
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 103,
            "movement": 7
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 104,
            "movement": -38
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 123,
            "movement": 11
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 127,
            "movement": -16
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 154,
            "movement": -17
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 178,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FR",
            "name": "France",
            "position": 185,
            "movement": -5
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 192,
            "movement": -48
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 196,
            "movement": -6
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 199,
            "movement": -29
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
            "position": 5,
            "movement": 0
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 7,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 9,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 9,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 10,
            "movement": 0
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 12,
            "movement": 0
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 12,
            "movement": -2
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 19,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 23,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 25,
            "movement": -2
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 29,
            "movement": 1
          },
          {
            "country": "FR",
            "name": "France",
            "position": 34,
            "movement": 0
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 35,
            "movement": -2
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 52,
            "movement": 0
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 53,
            "movement": -5
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 58,
            "movement": 0
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 60,
            "movement": 5
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 70,
            "movement": 0
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 74,
            "movement": 0
          },
          {
            "country": "US",
            "name": "United States",
            "position": 107,
            "movement": -2
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 196,
            "movement": -1
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
            "position": 8,
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 8,
            "movement": 5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 10,
            "movement": 3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 19,
            "movement": 15
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
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 50,
            "movement": -4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 58,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 74,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 85,
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
            "country": "NG",
            "name": "Nigeria",
            "position": 6,
            "movement": 13
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 22,
            "movement": -19
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 25,
            "movement": -11
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 54,
            "movement": -23
          },
          {
            "country": "FR",
            "name": "France",
            "position": 131,
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
            "position": 8,
            "movement": 0
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 12,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 23,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 71,
            "movement": -11
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
            "position": 7,
            "movement": 0
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 152,
            "movement": -3
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
        "numberOnes": 1,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 1,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 2,
            "movement": 0
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 2,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 2,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 3,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 3,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 4,
            "movement": 0
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 4,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 4,
            "movement": -1
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 4,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 5,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 5,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 6,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 6,
            "movement": -2
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 7,
            "movement": 175
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 8,
            "movement": -2
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 8,
            "movement": 6
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 12,
            "movement": -3
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 15,
            "movement": 29
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 16,
            "movement": -13
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 17,
            "movement": 23
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 17,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 18,
            "movement": -13
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 25,
            "movement": 52
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 27,
            "movement": -16
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 29,
            "movement": -7
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 31,
            "movement": -6
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 31,
            "movement": -5
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 32,
            "movement": -14
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 35,
            "movement": -23
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 36,
            "movement": -2
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 36,
            "movement": -11
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 37,
            "movement": -9
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 42,
            "movement": -24
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 43,
            "movement": -3
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 46,
            "movement": -9
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 48,
            "movement": 3
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 55,
            "movement": -16
          },
          {
            "country": "FR",
            "name": "France",
            "position": 60,
            "movement": -15
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 61,
            "movement": -23
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 64,
            "movement": -17
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 66,
            "movement": 4
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 75,
            "movement": -44
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 78,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 82,
            "movement": 10
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 84,
            "movement": -16
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 84,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 98,
            "movement": -8
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 104,
            "movement": 2
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 108,
            "movement": null,
            "status": "new"
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 113,
            "movement": 12
          },
          {
            "country": "RS",
            "name": "Serbia",
            "position": 114,
            "movement": -92
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 132,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 160,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 166,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 183,
            "movement": -29
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 188,
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
            "country": "KE",
            "name": "Kenya",
            "position": 1,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 61,
            "movement": -15
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
            "country": "LR",
            "name": "Liberia",
            "position": 10,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 16,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 23,
            "movement": -4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 45,
            "movement": -7
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 64,
            "movement": -10
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 89,
            "movement": 2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 101,
            "movement": -24
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 107,
            "movement": 28
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 178,
            "movement": -46
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 189,
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
            "position": 141,
            "movement": 4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 152,
            "movement": 1
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
            "position": 59,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 83,
            "movement": -5
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
            "position": 23,
            "movement": 1
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
            "position": 33,
            "movement": -6
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/720a729019b9a6c8873652d993302775/500x500-000000-80-0-0.jpg"
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
            "position": 15,
            "movement": 8
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 20,
            "movement": -3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 22,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 24,
            "movement": -4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 62,
            "movement": 12
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 76,
            "movement": 29
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 88,
            "movement": 10
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 139,
            "movement": -25
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 147,
            "movement": 29
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 153,
            "movement": 47
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 155,
            "movement": 9
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 199,
            "movement": -3
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
            "position": 80,
            "movement": 4
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
            "position": 16,
            "movement": -3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 39,
            "movement": -14
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 41,
            "movement": 17
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 61,
            "movement": -29
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 129,
            "movement": -30
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 149,
            "movement": -13
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 151,
            "movement": -54
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
            "position": 36,
            "movement": 6
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
            "position": 88,
            "movement": -46
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
            "position": 21,
            "movement": -3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 49,
            "movement": -16
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 52,
            "movement": -26
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 68,
            "movement": -15
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 126,
            "movement": -42
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 165,
            "movement": 17
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 165,
            "movement": -49
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
            "movement": 3
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
            "position": 43,
            "movement": 0
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 36,
            "movement": -2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 37,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 119,
            "movement": -38
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 134,
            "movement": -67
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 135,
            "movement": -38
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
            "position": 8,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 62,
            "movement": -3
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
            "position": 86,
            "movement": -1
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
            "position": 67,
            "movement": 10
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 101,
            "movement": 4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 105,
            "movement": -3
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 146,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 161,
            "movement": 9
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 162,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 165,
            "movement": -1
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
            "position": 26,
            "movement": -14
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a21fb655cf3e2fc8b05db68fc6eb34b1/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "ARMED & DANGEROUS",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 53,
            "movement": -9
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 89,
            "movement": 11
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 98,
            "movement": 53
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 114,
            "movement": -62
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 193,
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
            "position": 92,
            "movement": 5
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
            "position": 15,
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
    "title": "TWIN",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 33,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 38,
            "movement": 9
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 94,
            "movement": 56
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 140,
            "movement": -30
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
            "movement": 0
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
    "title": "TOO LIT",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 45,
            "movement": -6
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 89,
            "movement": -38
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 97,
            "movement": -26
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 173,
            "movement": -74
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
            "position": 103,
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
            "position": 87,
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
    "title": "TYPO",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 64,
            "movement": -10
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 175,
            "movement": -51
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 194,
            "movement": -107
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
            "movement": 1
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
            "position": 148,
            "movement": 40
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b7f8a994a2879ad8100aab10404627a4/500x500-000000-80-0-0.jpg"
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
            "position": 72,
            "movement": -13
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 128,
            "movement": -52
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 173,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 189,
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
            "position": 128,
            "movement": 0
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 74,
            "movement": -19
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 138,
            "movement": -71
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 176,
            "movement": -38
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 187,
            "movement": -48
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
            "position": 158,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/720a729019b9a6c8873652d993302775/500x500-000000-80-0-0.jpg"
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
            "position": 81,
            "movement": -19
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 108,
            "movement": -45
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 152,
            "movement": 8
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
            "position": 89,
            "movement": -16
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 116,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 142,
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 86,
            "movement": -11
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 150,
            "movement": 24
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 168,
            "movement": -57
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
            "position": 133,
            "movement": -6
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 155,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 158,
            "movement": 7
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
            "position": 82,
            "movement": 6
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 146,
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
    "title": "Stubborn",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 109,
            "movement": 5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 197,
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
    "title": "Jailer",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 59,
            "movement": -1
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
            "position": 116,
            "movement": -16
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
            "position": 139,
            "movement": 35
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/92d9434341384d2ebdca52fd613a18d6/500x500-000000-80-0-0.jpg"
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
            "position": 183,
            "movement": 9
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/42248d8b06dd650f1f1f6eafcca490e0/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Outlaw",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 43,
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
    "title": "Soweto",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 103,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a21fb655cf3e2fc8b05db68fc6eb34b1/500x500-000000-80-0-0.jpg"
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
  