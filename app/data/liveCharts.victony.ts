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
  export const liveChartsUpdated = "2026-08-26";
  
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
            "movement": 1
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
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 6,
            "movement": 9
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 6,
            "movement": -2
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 7,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 9,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 9,
            "movement": -1
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 10,
            "movement": -4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 12,
            "movement": -1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 12,
            "movement": 3
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 15,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 16,
            "movement": -6
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 19,
            "movement": 0
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 21,
            "movement": 20
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 21,
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 22,
            "movement": -7
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 24,
            "movement": -19
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 28,
            "movement": 77
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 31,
            "movement": -5
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 35,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 36,
            "movement": -28
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 37,
            "movement": 0
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 38,
            "movement": 4
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 57,
            "movement": -11
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 65,
            "movement": 10
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 66,
            "movement": 13
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 93,
            "movement": -23
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 109,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 110,
            "movement": 21
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 111,
            "movement": -62
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 129,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 134,
            "movement": 43
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 134,
            "movement": -33
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 144,
            "movement": -7
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 170,
            "movement": 0
          },
          {
            "country": "FR",
            "name": "France",
            "position": 177,
            "movement": -5
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 179,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 184,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 193,
            "movement": -40
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
            "position": 6,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 7,
            "movement": 1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 9,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 10,
            "movement": -1
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 10,
            "movement": 0
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 12,
            "movement": -2
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 18,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 23,
            "movement": -2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 23,
            "movement": -1
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 30,
            "movement": -1
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 33,
            "movement": -4
          },
          {
            "country": "FR",
            "name": "France",
            "position": 34,
            "movement": 1
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 48,
            "movement": 4
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 52,
            "movement": -2
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 58,
            "movement": -3
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 65,
            "movement": -2
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 70,
            "movement": 2
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 74,
            "movement": -2
          },
          {
            "country": "US",
            "name": "United States",
            "position": 105,
            "movement": -12
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 195,
            "movement": 5
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
            "country": "GH",
            "name": "Ghana",
            "position": 3,
            "movement": 5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 13,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 14,
            "movement": -6
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 31,
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
            "movement": 2
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 12,
            "movement": -9
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 35,
            "movement": -14
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 60,
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
            "position": 7,
            "movement": -3
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 136,
            "movement": -4
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
        "numberOnes": 2,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 1,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
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
            "country": "CV",
            "name": "Cape Verde",
            "position": 3,
            "movement": 1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 3,
            "movement": -2
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 3,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 3,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 4,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
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
            "country": "KE",
            "name": "Kenya",
            "position": 4,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 4,
            "movement": -1
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 4,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 5,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 5,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 5,
            "movement": 0
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 6,
            "movement": 1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 9,
            "movement": -2
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 11,
            "movement": -7
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 12,
            "movement": -5
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 14,
            "movement": -7
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 17,
            "movement": 0
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 18,
            "movement": 1
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 18,
            "movement": -3
          },
          {
            "country": "RS",
            "name": "Serbia",
            "position": 22,
            "movement": 36
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 22,
            "movement": -4
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 25,
            "movement": -1
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 25,
            "movement": -6
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 26,
            "movement": 1
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 28,
            "movement": -5
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 31,
            "movement": 15
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 34,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 37,
            "movement": -4
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 38,
            "movement": 4
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 39,
            "movement": 2
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 40,
            "movement": 43
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 40,
            "movement": -20
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 44,
            "movement": -22
          },
          {
            "country": "FR",
            "name": "France",
            "position": 45,
            "movement": -6
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 47,
            "movement": 3
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 51,
            "movement": -17
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 68,
            "movement": 29
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 70,
            "movement": -10
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 77,
            "movement": -21
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 90,
            "movement": -11
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 92,
            "movement": 8
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 103,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 106,
            "movement": null,
            "status": "new"
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 125,
            "movement": -22
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 142,
            "movement": -43
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 144,
            "movement": -48
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 146,
            "movement": -117
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 154,
            "movement": -90
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 182,
            "movement": -98
          },
          {
            "country": "US",
            "name": "United States",
            "position": 193,
            "movement": -38
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 195,
            "movement": -39
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
            "position": 46,
            "movement": -4
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
            "position": 12,
            "movement": 8
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 16,
            "movement": -4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 19,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 38,
            "movement": 28
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 54,
            "movement": -17
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 77,
            "movement": 4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 91,
            "movement": -28
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 121,
            "movement": 14
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 132,
            "movement": -60
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 135,
            "movement": -20
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
            "position": 145,
            "movement": 2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 153,
            "movement": -24
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
            "position": 21,
            "movement": -2
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
            "position": 78,
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
            "country": "GM",
            "name": "Gambia",
            "position": 17,
            "movement": -7
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 20,
            "movement": 12
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 22,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 23,
            "movement": -5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 74,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 98,
            "movement": -50
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 105,
            "movement": -28
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 114,
            "movement": -6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 164,
            "movement": 14
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 176,
            "movement": -60
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 187,
            "movement": -45
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 196,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 200,
            "movement": -109
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
            "position": 13,
            "movement": -2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 25,
            "movement": 14
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 32,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 58,
            "movement": -15
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 62,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 97,
            "movement": -17
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 99,
            "movement": -38
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 136,
            "movement": -14
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 137,
            "movement": -13
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
            "movement": -5
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
            "position": 42,
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
            "position": 18,
            "movement": -3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 26,
            "movement": 15
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 33,
            "movement": -4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 53,
            "movement": -19
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 84,
            "movement": -34
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 116,
            "movement": -35
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 169,
            "movement": -19
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 182,
            "movement": -29
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
            "position": 38,
            "movement": -9
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
            "movement": -21
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 39,
            "movement": -4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 51,
            "movement": 20
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 71,
            "movement": -21
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 99,
            "movement": -4
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 120,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 142,
            "movement": -26
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 173,
            "movement": -42
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
            "position": 64,
            "movement": -16
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
            "position": 34,
            "movement": -2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 39,
            "movement": 20
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 67,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 81,
            "movement": -13
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 97,
            "movement": -9
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
            "position": 54,
            "movement": -5
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
            "position": 59,
            "movement": -5
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
            "position": 77,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 102,
            "movement": 8
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 105,
            "movement": -12
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 164,
            "movement": 1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 170,
            "movement": -18
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 198,
            "movement": -57
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
            "position": 12,
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
            "movement": -2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 47,
            "movement": 42
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 110,
            "movement": 21
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 150,
            "movement": -53
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
            "movement": -1
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
    "cover": "https://cdn-images.dzcdn.net/images/cover/da22875a6742ba991e3fe3ed2a3f8bed/500x500-000000-80-0-0.jpg"
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
            "position": 54,
            "movement": -6
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 87,
            "movement": 69
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 124,
            "movement": -22
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 155,
            "movement": -66
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
            "position": 44,
            "movement": 0
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
            "position": 188,
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
    "title": "ARMED & DANGEROUS",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 44,
            "movement": -4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 52,
            "movement": 40
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 100,
            "movement": -8
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 151,
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
            "position": 59,
            "movement": -4
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
            "position": 55,
            "movement": -6
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 67,
            "movement": 86
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 138,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 139,
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
            "position": 105,
            "movement": -24
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
            "position": 62,
            "movement": -4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 63,
            "movement": 20
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 160,
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
            "position": 132,
            "movement": -32
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
            "position": 75,
            "movement": -11
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 111,
            "movement": 4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 174,
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
            "position": 122,
            "movement": -23
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
            "position": 59,
            "movement": -5
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 76,
            "movement": 0
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
            "movement": -14
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
            "position": 73,
            "movement": -10
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 83,
            "movement": 100
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
            "position": 137,
            "movement": -29
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
            "position": 127,
            "movement": -13
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 165,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/7c44504f57343c69b9a6e2219cb857ab/500x500-000000-80-0-0.jpg"
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
            "position": 142,
            "movement": 16
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
            "position": 131,
            "movement": -109
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/92d9434341384d2ebdca52fd613a18d6/500x500-000000-80-0-0.jpg"
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
            "movement": -11
          }
        ]
      }
    ],
    "kind": "song",
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
            "position": 58,
            "movement": -4
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
            "position": 141,
            "movement": -24
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/56bbf7807715d0374f6b8084268052e2/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Stubborn",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SR",
            "name": "Suriname",
            "position": 168,
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
            "country": "NG",
            "name": "Nigeria",
            "position": 192,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/42248d8b06dd650f1f1f6eafcca490e0/500x500-000000-80-0-0.jpg"
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
            "position": 114,
            "movement": -3
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
  