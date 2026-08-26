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
            "country": "SC",
            "name": "Seychelles",
            "position": 4,
            "movement": -3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 4,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 4,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 5,
            "movement": -1
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 5,
            "movement": 0
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 6,
            "movement": -2
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 6,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 7,
            "movement": 0
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 8,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 8,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 10,
            "movement": -2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 11,
            "movement": -3
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 15,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 15,
            "movement": -4
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 15,
            "movement": -10
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 15,
            "movement": 3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 19,
            "movement": -1
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 21,
            "movement": 2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 26,
            "movement": 161
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 37,
            "movement": -9
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 41,
            "movement": 30
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 42,
            "movement": 12
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 46,
            "movement": -8
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 49,
            "movement": 92
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 70,
            "movement": -4
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 75,
            "movement": -2
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 79,
            "movement": -52
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 105,
            "movement": -76
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 107,
            "movement": -6
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 121,
            "movement": -45
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 131,
            "movement": -23
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 137,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 148,
            "movement": 3
          },
          {
            "country": "FR",
            "name": "France",
            "position": 163,
            "movement": 3
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 170,
            "movement": 2
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 177,
            "movement": -8
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 187,
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
            "country": "MZ",
            "name": "Mozambique",
            "position": 5,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 5,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 8,
            "movement": 0
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
            "position": 9,
            "movement": 0
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 10,
            "movement": 4
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 10,
            "movement": -2
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 17,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 21,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 22,
            "movement": 3
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 29,
            "movement": -2
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 29,
            "movement": 0
          },
          {
            "country": "FR",
            "name": "France",
            "position": 35,
            "movement": 2
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 50,
            "movement": 1
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 52,
            "movement": -1
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 55,
            "movement": 10
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 63,
            "movement": 1
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 72,
            "movement": 11
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 72,
            "movement": 3
          },
          {
            "country": "US",
            "name": "United States",
            "position": 93,
            "movement": -8
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 200,
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
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SN",
            "name": "Senegal",
            "position": 3,
            "movement": 13
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 10,
            "movement": 8
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 21,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 38,
            "movement": -36
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
            "position": 12,
            "movement": -11
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 25,
            "movement": -21
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 68,
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
        "numberOnes": 3,
        "entries": [
          {
            "country": "MW",
            "name": "Malawi",
            "position": 1,
            "movement": 0
          },
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
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 2,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 3,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 3,
            "movement": 0
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 3,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 4,
            "movement": 0
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 4,
            "movement": -3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 4,
            "movement": -1
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 4,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 4,
            "movement": -2
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 4,
            "movement": 0
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 4,
            "movement": 11
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
            "movement": 24
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 7,
            "movement": 15
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 7,
            "movement": 2
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 7,
            "movement": 0
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 7,
            "movement": 6
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 15,
            "movement": -5
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 17,
            "movement": 11
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 18,
            "movement": -2
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 19,
            "movement": -1
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 19,
            "movement": -3
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 20,
            "movement": 11
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 22,
            "movement": -15
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 23,
            "movement": -7
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 24,
            "movement": -1
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 27,
            "movement": -4
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 29,
            "movement": -10
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 33,
            "movement": -7
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 33,
            "movement": 2
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 34,
            "movement": -1
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 39,
            "movement": -6
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 42,
            "movement": -9
          },
          {
            "country": "FR",
            "name": "France",
            "position": 44,
            "movement": -5
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 46,
            "movement": -32
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 50,
            "movement": 6
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 56,
            "movement": null,
            "status": "new"
          },
          {
            "country": "RS",
            "name": "Serbia",
            "position": 58,
            "movement": -29
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 59,
            "movement": -36
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 60,
            "movement": 8
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 64,
            "movement": -34
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 79,
            "movement": -8
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 83,
            "movement": -45
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 84,
            "movement": -67
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 94,
            "movement": 36
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 96,
            "movement": 98
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 97,
            "movement": -41
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 99,
            "movement": -23
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 100,
            "movement": -56
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 103,
            "movement": 94
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 129,
            "movement": -87
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 153,
            "movement": -63
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 167,
            "movement": -83
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 170,
            "movement": -19
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 173,
            "movement": -30
          },
          {
            "country": "US",
            "name": "United States",
            "position": 174,
            "movement": -24
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 178,
            "movement": -49
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 179,
            "movement": -115
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
            "position": 43,
            "movement": -5
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
            "position": 12,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 19,
            "movement": -3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 20,
            "movement": 8
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 37,
            "movement": 8
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 63,
            "movement": -7
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 66,
            "movement": -1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 72,
            "movement": -25
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 81,
            "movement": -13
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 115,
            "movement": 24
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 135,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 168,
            "movement": -26
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 193,
            "movement": -49
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
            "position": 129,
            "movement": -9
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 147,
            "movement": -7
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
            "position": 73,
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
            "position": 10,
            "movement": 11
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 18,
            "movement": -4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 20,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 32,
            "movement": 4
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 48,
            "movement": 22
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 74,
            "movement": -9
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 77,
            "movement": 5
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 91,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 108,
            "movement": -14
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 116,
            "movement": -28
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 142,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 178,
            "movement": -22
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
    "title": "STARLIFE",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 15,
            "movement": -2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 29,
            "movement": -7
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 34,
            "movement": -2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 41,
            "movement": 10
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 50,
            "movement": -9
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 81,
            "movement": 6
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 150,
            "movement": -24
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 153,
            "movement": 22
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 170,
            "movement": -17
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 191,
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
            "position": 22,
            "movement": 35
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
            "position": 11,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 32,
            "movement": -3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 39,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 43,
            "movement": -6
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 60,
            "movement": 12
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 61,
            "movement": -13
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 80,
            "movement": 3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 122,
            "movement": -28
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 124,
            "movement": -18
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 197,
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
            "position": 30,
            "movement": -5
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9929af7c4e10861ff55d4cb54ef96c28/500x500-000000-80-0-0.jpg"
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
            "position": 32,
            "movement": -7
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 59,
            "movement": 5
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 68,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 68,
            "movement": -16
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 88,
            "movement": -7
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 141,
            "movement": 4
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
            "position": 54,
            "movement": -45
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
            "position": 35,
            "movement": -7
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 50,
            "movement": 10
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 71,
            "movement": 42
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 95,
            "movement": 77
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 116,
            "movement": -50
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 131,
            "movement": -19
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 178,
            "movement": -34
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
    "title": "Soweto",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 53,
            "movement": null,
            "status": "new"
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 74,
            "movement": 46
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 93,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 110,
            "movement": 26
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 141,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 152,
            "movement": -47
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 165,
            "movement": 15
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
            "position": 31,
            "movement": -4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 89,
            "movement": -23
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 97,
            "movement": -13
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 131,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 196,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
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
            "country": "NG",
            "name": "Nigeria",
            "position": 41,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/da22875a6742ba991e3fe3ed2a3f8bed/500x500-000000-80-0-0.jpg"
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
            "position": 40,
            "movement": -4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 92,
            "movement": 91
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 92,
            "movement": 12
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 140,
            "movement": -2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 179,
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
    "title": "TYPO",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 48,
            "movement": -5
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 89,
            "movement": 93
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 102,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 156,
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
            "position": 44,
            "movement": 0
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
            "position": 54,
            "movement": -7
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 76,
            "movement": 39
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 161,
            "movement": -40
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 195,
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
            "movement": -14
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
            "position": 49,
            "movement": -8
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 99,
            "movement": -19
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 153,
            "movement": 39
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 170,
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
    "title": "AMAZON",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 64,
            "movement": -7
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 115,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 169,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 173,
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
    "title": "CAN JUICE",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 63,
            "movement": -10
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 134,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 134,
            "movement": -14
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 183,
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
    "title": "CLEAR",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 58,
            "movement": -12
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 83,
            "movement": 85
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 118,
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
    "title": "Holy Father",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 114,
            "movement": 10
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 165,
            "movement": 19
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 189,
            "movement": -104
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 193,
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
    "title": "Risk",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 77,
            "movement": 11
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 173,
            "movement": 10
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/8ecef1fd19cf7846a2fe2cf0e3ef3532/500x500-000000-80-0-0.jpg"
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
            "position": 42,
            "movement": null,
            "status": "new"
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
            "position": 190,
            "movement": -2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 196,
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
    "title": "Outlaw",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 108,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 190,
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
    "title": "Maria",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "YE",
            "name": "Yemen",
            "position": 172,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/36a9dae7b69639869a0aa20d0c399a1a/500x500-000000-80-0-0.jpg"
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
            "position": 111,
            "movement": 1
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
  