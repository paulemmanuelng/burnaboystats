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
  export const liveChartsUpdated = "2026-09-05";
  
  /** Every platform represented in the current snapshot. */
  export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","YouTube","iTunes"];
  
  export const liveCharts: LiveRelease[] = [
  {
    "title": "Heaven Baby",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 5,
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
            "country": "NA",
            "name": "Namibia",
            "position": 1,
            "movement": 0
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 1,
            "movement": 1
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 1,
            "movement": 26
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 2,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 2,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 2,
            "movement": 0
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 3,
            "movement": -2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 3,
            "movement": -1
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 3,
            "movement": 0
          },
          {
            "country": "LC",
            "name": "St. Lucia",
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
            "country": "KE",
            "name": "Kenya",
            "position": 4,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 6,
            "movement": -1
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 9,
            "movement": 0
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 9,
            "movement": 0
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 11,
            "movement": 27
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 16,
            "movement": 2
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 17,
            "movement": -8
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 17,
            "movement": -14
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 18,
            "movement": 24
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 19,
            "movement": -3
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 19,
            "movement": -9
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 21,
            "movement": -5
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 27,
            "movement": 3
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 28,
            "movement": 3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 32,
            "movement": -24
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 32,
            "movement": 8
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 42,
            "movement": 4
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 43,
            "movement": -8
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 43,
            "movement": 40
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 48,
            "movement": -6
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 51,
            "movement": 15
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 68,
            "movement": -28
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 75,
            "movement": 3
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 77,
            "movement": 90
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 78,
            "movement": -46
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 105,
            "movement": -21
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 122,
            "movement": -120
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 138,
            "movement": 44
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 141,
            "movement": -23
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 142,
            "movement": 43
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 170,
            "movement": -121
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 174,
            "movement": null,
            "status": "new"
          }
        ]
      },
      {
        "platform": "Shazam",
        "numberOnes": 3,
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
            "movement": 1
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 4,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 5,
            "movement": -3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 10,
            "movement": 0
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 11,
            "movement": -1
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 29,
            "movement": -4
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 40,
            "movement": 0
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 41,
            "movement": -3
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 75,
            "movement": -12
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 93,
            "movement": -6
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 173,
            "movement": -45
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
            "position": 2,
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 3,
            "movement": 12
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 5,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 8,
            "movement": 25
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 9,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 14,
            "movement": 44
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 18,
            "movement": 34
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 21,
            "movement": 46
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 95,
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
            "position": 8,
            "movement": 182
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 18,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 19,
            "movement": -7
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 23,
            "movement": -3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 41,
            "movement": 1
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 9,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 27,
            "movement": -7
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 32,
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
            "position": 11,
            "movement": -2
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 91,
            "movement": -10
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
        "numberOnes": 0,
        "entries": [
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 2,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 2,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 2,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 4,
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 4,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 5,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 6,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 6,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 6,
            "movement": -3
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 7,
            "movement": -4
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 8,
            "movement": -1
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 8,
            "movement": -2
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 9,
            "movement": -3
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 9,
            "movement": -6
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 10,
            "movement": -5
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 11,
            "movement": -3
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 12,
            "movement": -8
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 13,
            "movement": -2
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 14,
            "movement": 17
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 14,
            "movement": -1
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 14,
            "movement": -4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 17,
            "movement": 4
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 17,
            "movement": 18
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 17,
            "movement": -10
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 18,
            "movement": -3
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 18,
            "movement": -12
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 23,
            "movement": 9
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 27,
            "movement": 55
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 35,
            "movement": -3
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 35,
            "movement": 20
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 39,
            "movement": -17
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 40,
            "movement": -3
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 41,
            "movement": -12
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 41,
            "movement": -20
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 42,
            "movement": -3
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 45,
            "movement": -31
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 47,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 50,
            "movement": 12
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 54,
            "movement": -6
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 55,
            "movement": -23
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 57,
            "movement": 1
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 58,
            "movement": -32
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 70,
            "movement": 10
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 73,
            "movement": 41
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 74,
            "movement": -14
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 79,
            "movement": 72
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 80,
            "movement": -16
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 88,
            "movement": -15
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 92,
            "movement": -10
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 93,
            "movement": -31
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 103,
            "movement": 15
          },
          {
            "country": "FR",
            "name": "France",
            "position": 105,
            "movement": -7
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 107,
            "movement": 39
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 115,
            "movement": -9
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 116,
            "movement": -80
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 130,
            "movement": 12
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 136,
            "movement": -47
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 197,
            "movement": -88
          },
          {
            "country": "CV",
            "name": "Cape Verde",
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
            "country": "NG",
            "name": "Nigeria",
            "position": 76,
            "movement": -14
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
            "position": 10,
            "movement": 15
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 20,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 26,
            "movement": 18
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 28,
            "movement": -14
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 40,
            "movement": 23
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 64,
            "movement": 16
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 77,
            "movement": -28
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 114,
            "movement": -49
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 116,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 131,
            "movement": -26
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 179,
            "movement": -37
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 195,
            "movement": -13
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
            "position": 40,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 68,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 120,
            "movement": -3
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 169,
            "movement": 4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 178,
            "movement": 13
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
            "position": 39,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 70,
            "movement": 11
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
            "position": 48,
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
            "position": 61,
            "movement": -22
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
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 9,
            "movement": 1
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 16,
            "movement": 0
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 18,
            "movement": 3
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 50,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 69,
            "movement": -8
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 85,
            "movement": 2
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 123,
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
            "country": "FM",
            "name": "Micronesia",
            "position": 89,
            "movement": -69
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 124,
            "movement": 51
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 125,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 178,
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
            "country": "UG",
            "name": "Uganda",
            "position": 64,
            "movement": null,
            "status": "re"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 75,
            "movement": null,
            "status": "re"
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 85,
            "movement": null,
            "status": "re"
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
            "position": 159,
            "movement": -23
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 80,
            "movement": null,
            "status": "new"
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
            "position": 6,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 13,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 20,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 77,
            "movement": 24
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 91,
            "movement": -13
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 144,
            "movement": -14
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 165,
            "movement": 4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 185,
            "movement": -51
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 188,
            "movement": -59
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 198,
            "movement": -26
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
            "position": 22,
            "movement": 0
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
            "position": 54,
            "movement": -46
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
            "position": 59,
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
            "position": 11,
            "movement": 16
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
            "position": 32,
            "movement": -6
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 38,
            "movement": -8
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 59,
            "movement": -8
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 97,
            "movement": -3
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 100,
            "movement": 4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 104,
            "movement": -8
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 108,
            "movement": 12
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 159,
            "movement": -4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 181,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 181,
            "movement": -44
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
            "movement": 0
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
            "position": 152,
            "movement": -10
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
            "movement": 47
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
            "position": 38,
            "movement": -15
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/faa0b0578b463b8808c25da8f594aced/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "The Year I Turned 21",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "DM",
            "name": "Dominica",
            "position": 76,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 84,
            "movement": -30
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 97,
            "movement": -21
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 99,
            "movement": -27
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 109,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 140,
            "movement": 59
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 154,
            "movement": -17
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 160,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 171,
            "movement": -96
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 172,
            "movement": -119
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 173,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 176,
            "movement": 22
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 176,
            "movement": -94
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 186,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d096ea1c1019d1af67c0a2e434890e1e/500x500-000000-80-0-0.jpg"
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
            "position": 43,
            "movement": 0
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 77,
            "movement": 10
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 81,
            "movement": -7
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 82,
            "movement": 64
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 89,
            "movement": -14
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 113,
            "movement": -12
          },
          {
            "country": "FR",
            "name": "France",
            "position": 113,
            "movement": -12
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 131,
            "movement": -13
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 136,
            "movement": -18
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 174,
            "movement": -1
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
            "position": 50,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/7b49d51e89ff07824c8c62043775a2ab/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Away",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 79,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 92,
            "movement": -19
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 118,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 124,
            "movement": 38
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 126,
            "movement": -55
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 126,
            "movement": 11
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 137,
            "movement": -3
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 174,
            "movement": -5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 187,
            "movement": -40
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/24407cf49fdf864463cb5ca5ad974630/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "19 & Dangerous",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 36,
            "movement": -28
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 43,
            "movement": -10
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 110,
            "movement": 27
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 147,
            "movement": -27
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 148,
            "movement": -19
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 187,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 187,
            "movement": -8
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 188,
            "movement": 11
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 200,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b922c719d3a9901f749140e8f532a8d0/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Who's Dat Girl",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 88,
            "movement": 59
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 114,
            "movement": 15
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 124,
            "movement": -31
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 146,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 191,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 196,
            "movement": -41
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
            "position": 127,
            "movement": 3
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
            "position": 191,
            "movement": -20
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/fe3deba215d998d74542663a84621852/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Wo, man",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 7,
            "movement": 2
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 7,
            "movement": -1
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 31,
            "movement": 0
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 48,
            "movement": -5
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 195,
            "movement": 5
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 195,
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
            "country": "IT",
            "name": "Italy",
            "position": 32,
            "movement": 10
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 94,
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
    "title": "Misunderstood",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 52,
            "movement": -11
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 80,
            "movement": 12
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 132,
            "movement": -69
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 160,
            "movement": 2
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
            "position": 97,
            "movement": -5
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
            "position": 153,
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
            "position": 95,
            "movement": -42
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/64f822132d39a3677d59f745a248a2ce/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Last Heartbreak Song",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 66,
            "movement": 44
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 109,
            "movement": -23
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 117,
            "movement": -15
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 125,
            "movement": -7
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 151,
            "movement": -92
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 153,
            "movement": -35
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 170,
            "movement": -16
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d096ea1c1019d1af67c0a2e434890e1e/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Dangerous",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 87,
            "movement": -37
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 100,
            "movement": -18
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 107,
            "movement": -6
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
            "position": 81,
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
            "position": 39,
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
            "position": 68,
            "movement": -47
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/64f822132d39a3677d59f745a248a2ce/500x500-000000-80-0-0.jpg"
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
            "position": 113,
            "movement": -19
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 200,
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
            "position": 110,
            "movement": -8
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
            "position": 108,
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
            "position": 50,
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
    "title": "Bad Vibes",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 110,
            "movement": 41
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 119,
            "movement": -4
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 125,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 180,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e61faaeb59320961cbd17a1ef7f9e6e7/500x500-000000-80-0-0.jpg"
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
            "position": 108,
            "movement": -11
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 126,
            "movement": 6
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 163,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 174,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/12ca87c2ea2fa9506d6fc562bd8f5a01/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Treasure",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 102,
            "movement": -22
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 158,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 183,
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
            "position": 196,
            "movement": -29
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/64f822132d39a3677d59f745a248a2ce/500x500-000000-80-0-0.jpg"
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
            "position": 130,
            "movement": -31
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 173,
            "movement": -1
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 186,
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
            "position": 66,
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
    "title": "Bloody Samaritan",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 102,
            "movement": -24
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 150,
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
            "position": 30,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6811d7a880826af2be69b81686f629f2/500x500-000000-80-0-0.jpg"
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
            "position": 90,
            "movement": -6
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 172,
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
            "position": 98,
            "movement": -25
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d30dbeb4d445f5cc6f7f100b830731c4/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Hot Body",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 171,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 177,
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
    "title": "Escaladizzy II",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 167,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 167,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d47d959a99da468afdd69a8f855be482/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Commas",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 150,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 197,
            "movement": -36
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d096ea1c1019d1af67c0a2e434890e1e/500x500-000000-80-0-0.jpg"
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
    "title": "Overloading",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 71,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/7861d849c8157fbffc37ccebf0ee75c5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "MON BÉBÉ",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 77,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ec4546dc58720d21131151a1fc6fa33e/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Gimme Dat",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 129,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2e52f4bf8bdb05c98002b714669ee2c2/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Comforter",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 179,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e18f46f5169476d41ff6bf5f188e1127/500x500-000000-80-0-0.jpg"
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
            "position": 85,
            "movement": -8
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/fee95162ec0b1b078345831eb47b8e99/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Where Do We Go",
    "kind": "song",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 59,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "cover": "https://cdn-images.dzcdn.net/images/cover/64f822132d39a3677d59f745a248a2ce/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Midnight in New York",
    "kind": "song",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 82,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "cover": "https://cdn-images.dzcdn.net/images/cover/64f822132d39a3677d59f745a248a2ce/500x500-000000-80-0-0.jpg"
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
  