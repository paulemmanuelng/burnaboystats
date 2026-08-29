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
  export const liveChartsUpdated = "2026-08-29";
  
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
            "country": "SC",
            "name": "Seychelles",
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
            "country": "SR",
            "name": "Suriname",
            "position": 5,
            "movement": 29
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 7,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 7,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 11,
            "movement": 0
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 12,
            "movement": 4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 12,
            "movement": -3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 12,
            "movement": 6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 13,
            "movement": -3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 14,
            "movement": -3
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 16,
            "movement": 6
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
            "country": "MW",
            "name": "Malawi",
            "position": 23,
            "movement": -6
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 27,
            "movement": -17
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 29,
            "movement": 1
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 33,
            "movement": -6
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 39,
            "movement": 59
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
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 58,
            "movement": -11
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
            "country": "LC",
            "name": "St. Lucia",
            "position": 88,
            "movement": 4
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 89,
            "movement": 0
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 120,
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
            "country": "UK",
            "name": "United Kingdom",
            "position": 147,
            "movement": -4
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 151,
            "movement": 41
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 178,
            "movement": -55
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
            "position": 192,
            "movement": 7
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
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 6,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 15,
            "movement": -9
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 42,
            "movement": -14
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 45,
            "movement": -3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 130,
            "movement": -119
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
            "position": 9,
            "movement": -2
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 151,
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
            "position": 43,
            "movement": -13
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 47,
            "movement": -15
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
            "country": "FR",
            "name": "France",
            "position": 99,
            "movement": -37
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
            "country": "NL",
            "name": "Netherlands",
            "position": 113,
            "movement": -63
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
            "position": 4,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 14,
            "movement": -11
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
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 23,
            "movement": -7
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 35,
            "movement": -12
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 76,
            "movement": -12
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
            "position": 114,
            "movement": -7
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 118,
            "movement": -29
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 165,
            "movement": -120
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 188,
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
            "position": 24,
            "movement": -1
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
    "title": "WHO THIS",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 20,
            "movement": -4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 44,
            "movement": -5
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 52,
            "movement": 9
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 64,
            "movement": -23
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 126,
            "movement": 23
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 153,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 167,
            "movement": -38
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
            "position": 38,
            "movement": -2
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
    "title": "2FRESH",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 36,
            "movement": -21
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 38,
            "movement": -16
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 56,
            "movement": -32
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 65,
            "movement": -45
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 108,
            "movement": -32
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 142,
            "movement": -80
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
            "position": 83,
            "movement": -3
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
            "position": 31,
            "movement": -10
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 70,
            "movement": -21
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 73,
            "movement": -21
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 106,
            "movement": -38
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 187,
            "movement": -22
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 190,
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
            "position": 39,
            "movement": 2
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 126,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 149,
            "movement": 12
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 153,
            "movement": 12
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
            "position": 35,
            "movement": -7
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
            "position": 42,
            "movement": -9
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 80,
            "movement": -42
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 114,
            "movement": -20
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
            "position": 53,
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
            "position": 52,
            "movement": -16
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 92,
            "movement": -55
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 149,
            "movement": -30
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 173,
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
            "position": 100,
            "movement": -14
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
            "position": 63,
            "movement": -18
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 123,
            "movement": -34
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 127,
            "movement": 46
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 184,
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
            "movement": -22
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
            "position": 93,
            "movement": 40
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 148,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 157,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 196,
            "movement": -41
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
    "title": "TYPO",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 64,
            "movement": -6
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
            "position": 90,
            "movement": -26
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
    "title": "ARMED & DANGEROUS",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 70,
            "movement": -17
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 121,
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
            "position": 98,
            "movement": -6
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
            "position": 98,
            "movement": -26
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 197,
            "movement": -69
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
            "position": 130,
            "movement": -2
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
            "position": 106,
            "movement": -32
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 194,
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
            "position": 138,
            "movement": 20
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/720a729019b9a6c8873652d993302775/500x500-000000-80-0-0.jpg"
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
            "position": 117,
            "movement": -28
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 198,
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
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/8ecef1fd19cf7846a2fe2cf0e3ef3532/500x500-000000-80-0-0.jpg"
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
            "position": 89,
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
    "title": "CLEAR",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 111,
            "movement": -30
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4446cd79abcc87206d5e47417ba9bde7/500x500-000000-80-0-0.jpg"
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
    "title": "AMAZON",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 112,
            "movement": -26
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
            "position": 107,
            "movement": 32
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
            "position": 179,
            "movement": 4
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
  