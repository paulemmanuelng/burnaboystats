// GENERATED FILE — do not edit by hand.
  // Rebuilt hourly by scripts/build-live-charts.mjs --artist=ayra-starr from kworb's artist page.
  //
  // PLATFORM chart data for Ayra Starr: where each release is sitting RIGHT
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
    "title": "Heaven Baby",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 6,
        "entries": [
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 1,
            "movement": 0
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 1,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 1,
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 1,
            "movement": 0
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 1,
            "movement": 0
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 1,
            "movement": 3
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 2,
            "movement": 2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 2,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 2,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 2,
            "movement": -1
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 2,
            "movement": 21
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 2,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 3,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 3,
            "movement": -1
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 5,
            "movement": 0
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 5,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 7,
            "movement": -1
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 8,
            "movement": 6
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 11,
            "movement": 11
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 12,
            "movement": -5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 12,
            "movement": -1
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 12,
            "movement": -3
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 14,
            "movement": -5
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 20,
            "movement": -1
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 20,
            "movement": 12
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 22,
            "movement": 20
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 24,
            "movement": -7
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 38,
            "movement": -24
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 43,
            "movement": 0
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 44,
            "movement": 13
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 48,
            "movement": -24
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 64,
            "movement": 10
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 65,
            "movement": -2
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 68,
            "movement": 44
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 75,
            "movement": -1
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 88,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 88,
            "movement": 0
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 94,
            "movement": -19
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 107,
            "movement": -15
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 122,
            "movement": -9
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 125,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 152,
            "movement": -122
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 155,
            "movement": -109
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 165,
            "movement": -17
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 173,
            "movement": -5
          }
        ]
      },
      {
        "platform": "Shazam",
        "numberOnes": 4,
        "entries": [
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 1,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
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
            "country": "ZM",
            "name": "Zambia",
            "position": 2,
            "movement": 0
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 3,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 3,
            "movement": 0
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 6,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 8,
            "movement": -1
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 10,
            "movement": -3
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 24,
            "movement": -2
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 54,
            "movement": -2
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 57,
            "movement": 30
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 59,
            "movement": 14
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 88,
            "movement": 3
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 99,
            "movement": -11
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 1,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 1,
            "movement": 0
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 5,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 13,
            "movement": -3
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 25,
            "movement": 0
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 51,
            "movement": -14
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 67,
            "movement": -15
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 73,
            "movement": -23
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 98,
            "movement": -16
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 190,
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
            "country": "NA",
            "name": "Namibia",
            "position": 3,
            "movement": 12
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 3,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 6,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 9,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 11,
            "movement": 22
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 52,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 58,
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
            "position": 5,
            "movement": 1
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 166,
            "movement": -46
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 1,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 1,
            "movement": 3
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 23,
            "movement": 24
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/64f822132d39a3677d59f745a248a2ce/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Starrgirl",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 2,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 1,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 1,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 2,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 2,
            "movement": 1
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 3,
            "movement": 0
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 3,
            "movement": 13
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 4,
            "movement": 1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 4,
            "movement": 1
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 4,
            "movement": -2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 4,
            "movement": 0
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 4,
            "movement": 5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 4,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 5,
            "movement": 2
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 5,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 5,
            "movement": 1
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 6,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 6,
            "movement": 4
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 6,
            "movement": 1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 7,
            "movement": -2
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 8,
            "movement": 0
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 8,
            "movement": 0
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 8,
            "movement": -2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 11,
            "movement": 4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 11,
            "movement": -2
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 13,
            "movement": -4
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 14,
            "movement": -7
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 14,
            "movement": 3
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 19,
            "movement": -3
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 23,
            "movement": -4
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 26,
            "movement": -5
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 32,
            "movement": -9
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 36,
            "movement": -5
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 41,
            "movement": -8
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 41,
            "movement": 32
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 43,
            "movement": -33
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 47,
            "movement": -15
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 48,
            "movement": -11
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 49,
            "movement": -28
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 53,
            "movement": -8
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 53,
            "movement": -10
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 55,
            "movement": -24
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 56,
            "movement": -4
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 57,
            "movement": -23
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 65,
            "movement": -29
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 67,
            "movement": 51
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 67,
            "movement": -32
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 78,
            "movement": -4
          },
          {
            "country": "FR",
            "name": "France",
            "position": 79,
            "movement": -5
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 79,
            "movement": -40
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 88,
            "movement": -61
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 89,
            "movement": -8
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 90,
            "movement": 1
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 95,
            "movement": 49
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 97,
            "movement": -18
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 99,
            "movement": -50
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 100,
            "movement": 19
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 105,
            "movement": -38
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 108,
            "movement": -77
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 110,
            "movement": -4
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 113,
            "movement": -63
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 135,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 139,
            "movement": 18
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 149,
            "movement": -36
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 188,
            "movement": null,
            "status": "new"
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 191,
            "movement": -39
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 198,
            "movement": -85
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
            "position": 23,
            "movement": -15
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 32,
            "movement": -23
          },
          {
            "country": "FR",
            "name": "France",
            "position": 193,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/64f822132d39a3677d59f745a248a2ce/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Colorado",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 18,
            "movement": 19
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 18,
            "movement": 6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 19,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 21,
            "movement": -2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 35,
            "movement": 81
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 48,
            "movement": 6
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 49,
            "movement": 2
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 80,
            "movement": -44
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 102,
            "movement": -31
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 133,
            "movement": 23
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 173,
            "movement": -6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 190,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 197,
            "movement": -57
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
            "position": 39,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 67,
            "movement": -7
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 107,
            "movement": -6
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 176,
            "movement": -5
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 190,
            "movement": 7
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
            "position": 37,
            "movement": 2
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
            "position": 92,
            "movement": -26
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
            "position": 66,
            "movement": -6
          }
        ]
      },
      {
        "platform": "YouTube",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 81,
            "movement": 6
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4d16c0dbdfcfa22baaec4a11c3f283a/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Rush",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 9,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 79,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 90,
            "movement": -10
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 92,
            "movement": -19
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 105,
            "movement": -22
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 105,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 113,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 199,
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
            "country": "CV",
            "name": "Cape Verde",
            "position": 17,
            "movement": 1
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 20,
            "movement": 2
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 26,
            "movement": 0
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 56,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 92,
            "movement": 0
          }
        ]
      },
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 136,
            "movement": -7
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 12,
            "movement": 40
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a73bed954d61b52564118ac926925d76/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "treat u right",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 7,
            "movement": 3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 11,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 14,
            "movement": 2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 44,
            "movement": 26
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 74,
            "movement": 7
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 95,
            "movement": -17
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 110,
            "movement": 4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 148,
            "movement": -10
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 180,
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
            "position": 23,
            "movement": 2
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
            "position": 24,
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
            "position": 49,
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
            "position": 37,
            "movement": -27
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a88a32de107d134d181e111b3ae5f780/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Tornado",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 31,
            "movement": -5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 37,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 67,
            "movement": 5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 91,
            "movement": -3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 119,
            "movement": 11
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 139,
            "movement": 4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 182,
            "movement": -29
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 185,
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
            "position": 28,
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
            "position": 133,
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
            "position": 24,
            "movement": 23
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/faa0b0578b463b8808c25da8f594aced/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "No love",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SN",
            "name": "Senegal",
            "position": 41,
            "movement": 9
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 73,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 73,
            "movement": 85
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 87,
            "movement": -3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 91,
            "movement": 14
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 103,
            "movement": -13
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 105,
            "movement": 7
          },
          {
            "country": "FR",
            "name": "France",
            "position": 109,
            "movement": -4
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 122,
            "movement": -3
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 131,
            "movement": 11
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 47,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/7b49d51e89ff07824c8c62043775a2ab/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "The Year I Turned 21",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 6,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 62,
            "movement": -8
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 104,
            "movement": 26
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 119,
            "movement": 47
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 119,
            "movement": 27
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 134,
            "movement": 3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 140,
            "movement": -10
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 147,
            "movement": -14
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 176,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 197,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 198,
            "movement": -29
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d096ea1c1019d1af67c0a2e434890e1e/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "19 & Dangerous",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 37,
            "movement": -2
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 38,
            "movement": -8
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 76,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 96,
            "movement": 30
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 109,
            "movement": -16
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 148,
            "movement": -24
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 149,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 163,
            "movement": -3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 171,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 188,
            "movement": -16
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b922c719d3a9901f749140e8f532a8d0/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Misunderstood",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 31,
            "movement": -4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 37,
            "movement": -2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 67,
            "movement": -15
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 107,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 152,
            "movement": -4
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
            "position": 85,
            "movement": 11
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
            "position": 14,
            "movement": 111
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
            "position": 99,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/64f822132d39a3677d59f745a248a2ce/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Away",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 53,
            "movement": 30
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 64,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 66,
            "movement": 37
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 82,
            "movement": 14
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 95,
            "movement": 13
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 132,
            "movement": 18
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 151,
            "movement": 3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 177,
            "movement": -5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 187,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/24407cf49fdf864463cb5ca5ad974630/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Last Heartbreak Song",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 13,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 107,
            "movement": -10
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 119,
            "movement": -14
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 122,
            "movement": 4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 133,
            "movement": 43
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 138,
            "movement": -5
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 157,
            "movement": -78
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 191,
            "movement": 0
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 197,
            "movement": -51
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d096ea1c1019d1af67c0a2e434890e1e/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Who's Dat Girl",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 97,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 107,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 124,
            "movement": 33
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 126,
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
            "position": 110,
            "movement": 6
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
            "position": 63,
            "movement": -22
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
            "position": 63,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/fe3deba215d998d74542663a84621852/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Ms. Paper",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 60,
            "movement": -9
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 150,
            "movement": -19
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 199,
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
            "position": 121,
            "movement": 7
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
            "position": 112,
            "movement": -15
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
            "position": 23,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/64f822132d39a3677d59f745a248a2ce/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Wo, man",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "IT",
            "name": "Italy",
            "position": 7,
            "movement": 1
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 9,
            "movement": 0
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 38,
            "movement": 2
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 40,
            "movement": 5
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "IT",
            "name": "Italy",
            "position": 25,
            "movement": 4
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 129,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c4c1696f82feac0a7fa1e26379b9f7e2/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Commas",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 15,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 112,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 166,
            "movement": 12
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 172,
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
            "position": 57,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d096ea1c1019d1af67c0a2e434890e1e/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Ngozi",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 110,
            "movement": -4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 129,
            "movement": -27
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 144,
            "movement": -45
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 161,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 196,
            "movement": -14
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/12ca87c2ea2fa9506d6fc562bd8f5a01/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Dangerous",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 33,
            "movement": -3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 62,
            "movement": -4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 94,
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
            "position": 71,
            "movement": -5
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/64f822132d39a3677d59f745a248a2ce/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Treasure",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 70,
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 75,
            "movement": -19
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 189,
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
            "position": 142,
            "movement": 8
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/64f822132d39a3677d59f745a248a2ce/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Gimme Dat",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 143,
            "movement": -33
          },
          {
            "country": "CV",
            "name": "Cape Verde",
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
            "position": 133,
            "movement": 5
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
            "position": 52,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2e52f4bf8bdb05c98002b714669ee2c2/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Amazing",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 50,
            "movement": 5
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 86,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 96,
            "movement": 85
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/64f822132d39a3677d59f745a248a2ce/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Hot Body",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 109,
            "movement": -19
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 166,
            "movement": -4
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
            "position": 94,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4b5a287c8f574407dc5b1b03b5ae0c58/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Bad Vibes",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BJ",
            "name": "Benin",
            "position": 114,
            "movement": 13
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 121,
            "movement": 7
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
            "position": 164,
            "movement": 24
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e61faaeb59320961cbd17a1ef7f9e6e7/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Bloody Samaritan",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 175,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 189,
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
            "country": "DM",
            "name": "Dominica",
            "position": 33,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6811d7a880826af2be69b81686f629f2/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Midnight in New York",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 73,
            "movement": 9
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/64f822132d39a3677d59f745a248a2ce/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Pressure",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 128,
            "movement": 34
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/64f822132d39a3677d59f745a248a2ce/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Dance",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 162,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/37efb43b4704415ff51e98e357041982/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Santa",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "EC",
            "name": "Ecuador",
            "position": 4,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/965eeb50245f3178580ac5bda885e56b/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "All The Love",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 53,
            "movement": -19
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d30dbeb4d445f5cc6f7f100b830731c4/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Escaladizzy II",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 155,
            "movement": -28
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d47d959a99da468afdd69a8f855be482/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Love Don't Cost A Dime",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 131,
            "movement": -24
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/1421f8aa54dc60efbd0ab4034f7ba7f8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Ayra Starr - EP",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 76,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/fee95162ec0b1b078345831eb47b8e99/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Letter To God",
    "platforms": [],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/64f822132d39a3677d59f745a248a2ce/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "People",
    "platforms": [],
    "kind": "song"
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
  