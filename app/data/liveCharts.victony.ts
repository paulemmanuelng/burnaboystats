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
  export const liveChartsUpdated = "2026-08-28";
  
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
            "movement": 3
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
            "country": "SR",
            "name": "Suriname",
            "position": 5,
            "movement": 29
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 7,
            "movement": -1
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
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 11,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 12,
            "movement": 6
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
            "country": "MZ",
            "name": "Mozambique",
            "position": 19,
            "movement": -4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 19,
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 21,
            "movement": -2
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 22,
            "movement": 2
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
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 47,
            "movement": 10
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 48,
            "movement": -12
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 57,
            "movement": -34
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 81,
            "movement": -8
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 86,
            "movement": -18
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 89,
            "movement": 4
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
            "country": "KY",
            "name": "Cayman Islands",
            "position": 132,
            "movement": -41
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 142,
            "movement": -39
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 151,
            "movement": 41
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 164,
            "movement": -10
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 180,
            "movement": null,
            "status": "new"
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
            "position": 11,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 11,
            "movement": -2
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 11,
            "movement": 1
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 11,
            "movement": 1
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 21,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 26,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 26,
            "movement": -3
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 32,
            "movement": -3
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
            "position": 37,
            "movement": -2
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 52,
            "movement": 1
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 53,
            "movement": -1
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 62,
            "movement": -4
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 68,
            "movement": -8
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 73,
            "movement": -3
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 80,
            "movement": -6
          },
          {
            "country": "US",
            "name": "United States",
            "position": 120,
            "movement": -13
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
            "movement": 2
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
            "country": "MU",
            "name": "Mauritius",
            "position": 9,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 36,
            "movement": -19
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 44,
            "movement": -19
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 62,
            "movement": -56
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 76,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 82,
            "movement": -28
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 133,
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
            "position": 2,
            "movement": 10
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 18,
            "movement": -10
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 25,
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
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 2,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 4,
            "movement": -1
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 5,
            "movement": 3
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 5,
            "movement": -1
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 5,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 5,
            "movement": -3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 6,
            "movement": -4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 6,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 7,
            "movement": -4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 7,
            "movement": -3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 7,
            "movement": -2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 8,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 8,
            "movement": -2
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 10,
            "movement": -2
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 10,
            "movement": -6
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 12,
            "movement": 15
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 13,
            "movement": 22
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 13,
            "movement": 5
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 19,
            "movement": -7
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 20,
            "movement": -3
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 21,
            "movement": 4
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 24,
            "movement": -7
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 27,
            "movement": -20
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 29,
            "movement": -14
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 33,
            "movement": -17
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 33,
            "movement": -1
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 35,
            "movement": 7
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 37,
            "movement": -5
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 37,
            "movement": 24
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 39,
            "movement": -35
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 40,
            "movement": -3
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 42,
            "movement": -11
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 44,
            "movement": -16
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 50,
            "movement": 34
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 53,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 54,
            "movement": -18
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 61,
            "movement": -15
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 71,
            "movement": 37
          },
          {
            "country": "FR",
            "name": "France",
            "position": 84,
            "movement": -26
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 92,
            "movement": -56
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 92,
            "movement": -26
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 94,
            "movement": -42
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 100,
            "movement": -18
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 100,
            "movement": -52
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 103,
            "movement": -60
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 104,
            "movement": -40
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 108,
            "movement": 5
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 142,
            "movement": -67
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 151,
            "movement": -53
          },
          {
            "country": "RS",
            "name": "Serbia",
            "position": 160,
            "movement": -46
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 165,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 182,
            "movement": 1
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
            "position": 3,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 8,
            "movement": 53
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
            "country": "GH",
            "name": "Ghana",
            "position": 105,
            "movement": -4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 107,
            "movement": 28
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 118,
            "movement": -29
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
            "position": 149,
            "movement": -8
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 153,
            "movement": -1
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
            "country": "UG",
            "name": "Uganda",
            "position": 142,
            "movement": -80
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
            "country": "GH",
            "name": "Ghana",
            "position": 194,
            "movement": -55
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
            "country": "GH",
            "name": "Ghana",
            "position": 196,
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
            "position": 36,
            "movement": 6
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
            "position": 191,
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
        "platform": "Shazam",
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
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 164,
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
            "position": 30,
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
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 199,
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
    "title": "Soweto",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "OM",
            "name": "Oman",
            "position": 90,
            "movement": -23
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 94,
            "movement": 7
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 111,
            "movement": -6
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 161,
            "movement": 9
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 165,
            "movement": -1
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 184,
            "movement": -22
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
            "position": 31,
            "movement": -5
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
            "position": 145,
            "movement": 3
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
    "title": "Stubborn",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 129,
            "movement": -20
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 146,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 163,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 188,
            "movement": 9
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/8ecef1fd19cf7846a2fe2cf0e3ef3532/500x500-000000-80-0-0.jpg"
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
            "position": 199,
            "movement": -41
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
            "position": 74,
            "movement": 8
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
    "title": "Outlaw",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 112,
            "movement": -69
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 173,
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
            "position": 58,
            "movement": 1
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
    "title": "Very Stubborn",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 140,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9006b3beadf51c1be30df723a7edc6c0/500x500-000000-80-0-0.jpg"
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
  