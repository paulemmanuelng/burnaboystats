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
  export const liveChartsUpdated = "2026-09-02";
  
  /** Every platform represented in the current snapshot. */
  export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","YouTube","iTunes"];
  
  export const liveCharts: LiveRelease[] = [
  {
    "title": "Heaven Baby",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 8,
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
            "movement": 1
          },
          {
            "country": "FJ",
            "name": "Fiji",
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
            "country": "SC",
            "name": "Seychelles",
            "position": 1,
            "movement": 2
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 1,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 2,
            "movement": 0
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
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 5,
            "movement": 0
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 6,
            "movement": 5
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 6,
            "movement": -1
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 7,
            "movement": 10
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 8,
            "movement": 0
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 11,
            "movement": -4
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 12,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 14,
            "movement": -1
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 19,
            "movement": -6
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 21,
            "movement": -4
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 21,
            "movement": -6
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 40,
            "movement": -1
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 44,
            "movement": 20
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 55,
            "movement": 21
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 62,
            "movement": -14
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 63,
            "movement": -4
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 68,
            "movement": -39
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 69,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 70,
            "movement": 9
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 73,
            "movement": 25
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 76,
            "movement": 2
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 78,
            "movement": 106
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 83,
            "movement": 1
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 84,
            "movement": 34
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 103,
            "movement": 17
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 105,
            "movement": -3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 108,
            "movement": -38
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 118,
            "movement": 8
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 127,
            "movement": -28
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 139,
            "movement": 34
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 140,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 148,
            "movement": -24
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 167,
            "movement": 1
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 200,
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
            "movement": 11
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
            "country": "UG",
            "name": "Uganda",
            "position": 3,
            "movement": 22
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 7,
            "movement": -1
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 58,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 67,
            "movement": -64
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 81,
            "movement": -7
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 88,
            "movement": -58
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 145,
            "movement": -37
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
            "position": 15,
            "movement": 6
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 19,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 35,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 84,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 98,
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
            "position": 8,
            "movement": -1
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 62,
            "movement": 70
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
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 1,
            "movement": 5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 1,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 2,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 3,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 3,
            "movement": 2
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 3,
            "movement": 2
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 4,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 4,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 4,
            "movement": -1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 5,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 5,
            "movement": 0
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 5,
            "movement": -1
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 6,
            "movement": 10
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 6,
            "movement": 2
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 7,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 7,
            "movement": -4
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 7,
            "movement": 0
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 8,
            "movement": 6
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 9,
            "movement": 48
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 9,
            "movement": -1
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 10,
            "movement": -1
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 12,
            "movement": -2
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 13,
            "movement": -3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 14,
            "movement": -3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 17,
            "movement": -5
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 19,
            "movement": 14
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 24,
            "movement": -13
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 26,
            "movement": -15
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 28,
            "movement": -13
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 30,
            "movement": 39
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 34,
            "movement": 0
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 35,
            "movement": -14
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 38,
            "movement": -16
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 43,
            "movement": -34
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 43,
            "movement": -4
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 45,
            "movement": -7
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 49,
            "movement": -8
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 50,
            "movement": 53
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 51,
            "movement": -22
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 54,
            "movement": -10
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 61,
            "movement": 71
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 61,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 64,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 64,
            "movement": 0
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 66,
            "movement": 6
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 67,
            "movement": -25
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 68,
            "movement": 4
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 73,
            "movement": -2
          },
          {
            "country": "FR",
            "name": "France",
            "position": 78,
            "movement": -3
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 83,
            "movement": -27
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 86,
            "movement": -41
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 87,
            "movement": 22
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 93,
            "movement": -50
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 97,
            "movement": -5
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 112,
            "movement": 9
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 113,
            "movement": -74
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 145,
            "movement": -59
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 167,
            "movement": 17
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 169,
            "movement": -53
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 171,
            "movement": -137
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 181,
            "movement": -70
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 183,
            "movement": -26
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
            "position": 40,
            "movement": -3
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 17,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 21,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 23,
            "movement": -1
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 37,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 47,
            "movement": 2
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 48,
            "movement": 38
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 72,
            "movement": 2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 138,
            "movement": 25
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 145,
            "movement": 46
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 166,
            "movement": -77
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 179,
            "movement": 7
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
            "position": 43,
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
            "position": 29,
            "movement": null,
            "status": "new"
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
            "position": 13,
            "movement": 18
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 17,
            "movement": 0
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 20,
            "movement": -1
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 52,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 90,
            "movement": -3
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 99,
            "movement": -4
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 143,
            "movement": -81
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 168,
            "movement": -30
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 177,
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
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 40,
            "movement": 5
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a73bed954d61b52564118ac926925d76/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "The Year I Turned 21",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 14,
            "movement": -8
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 43,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 58,
            "movement": 47
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 62,
            "movement": -21
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 85,
            "movement": 5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 153,
            "movement": -15
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 160,
            "movement": 15
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 162,
            "movement": -127
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 168,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 171,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 185,
            "movement": 4
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 189,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 190,
            "movement": -29
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d096ea1c1019d1af67c0a2e434890e1e/500x500-000000-80-0-0.jpg"
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
            "position": 11,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 12,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 14,
            "movement": 5
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 39,
            "movement": 104
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 86,
            "movement": 5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 100,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 133,
            "movement": 10
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 188,
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
            "position": 26,
            "movement": -4
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
            "position": 2,
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
            "position": 19,
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
            "position": 29,
            "movement": 11
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 43,
            "movement": -13
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 91,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 107,
            "movement": -23
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 107,
            "movement": -12
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 107,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 111,
            "movement": -5
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 143,
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
            "position": 152,
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
    "title": "Misunderstood",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 33,
            "movement": -7
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 36,
            "movement": -10
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 53,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 128,
            "movement": -35
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 152,
            "movement": -11
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 177,
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
            "position": 86,
            "movement": 8
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
            "position": 10,
            "movement": 56
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
            "country": "IE",
            "name": "Ireland",
            "position": 43,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 49,
            "movement": -17
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 119,
            "movement": null,
            "status": "new"
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 149,
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
    "title": "No love",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SN",
            "name": "Senegal",
            "position": 50,
            "movement": -23
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 73,
            "movement": 19
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 99,
            "movement": 51
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 100,
            "movement": -3
          },
          {
            "country": "FR",
            "name": "France",
            "position": 102,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 103,
            "movement": 11
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 114,
            "movement": 17
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 134,
            "movement": -7
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 189,
            "movement": -14
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
            "position": 48,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/7b49d51e89ff07824c8c62043775a2ab/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Last Heartbreak Song",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 67,
            "movement": 17
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 115,
            "movement": -8
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 132,
            "movement": -85
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 132,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 141,
            "movement": 41
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 149,
            "movement": -45
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 155,
            "movement": -29
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 165,
            "movement": -4
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 171,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 190,
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
    "title": "Away",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 74,
            "movement": -28
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 85,
            "movement": -9
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 96,
            "movement": -19
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 119,
            "movement": -4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 134,
            "movement": 1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 159,
            "movement": -74
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 161,
            "movement": 14
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 163,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 169,
            "movement": -49
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
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 32,
            "movement": -21
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 33,
            "movement": 4
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 57,
            "movement": 36
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 81,
            "movement": -20
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 112,
            "movement": 32
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 185,
            "movement": -26
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 186,
            "movement": 0
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 192,
            "movement": -13
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
            "country": "TZ",
            "name": "Tanzania",
            "position": 103,
            "movement": 11
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 111,
            "movement": -19
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 124,
            "movement": -4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 162,
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
            "position": 120,
            "movement": 5
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
            "position": 134,
            "movement": -36
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
            "position": 93,
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
            "position": 112,
            "movement": -46
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 156,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 159,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 176,
            "movement": -124
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
            "position": 111,
            "movement": 16
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
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/64f822132d39a3677d59f745a248a2ce/500x500-000000-80-0-0.jpg"
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
            "position": 76,
            "movement": -25
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 100,
            "movement": -7
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 116,
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
            "position": 50,
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
    "title": "Bad Vibes",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 95,
            "movement": 60
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 114,
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 129,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 143,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
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
            "position": 158,
            "movement": 14
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e61faaeb59320961cbd17a1ef7f9e6e7/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Commas",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 100,
            "movement": 36
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 136,
            "movement": -85
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 136,
            "movement": 29
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 151,
            "movement": 31
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
            "position": 28,
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
            "country": "SG",
            "name": "Singapore",
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
    "title": "Amazing",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 84,
            "movement": -31
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 154,
            "movement": -63
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 193,
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
            "position": 64,
            "movement": -44
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/64f822132d39a3677d59f745a248a2ce/500x500-000000-80-0-0.jpg"
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
            "position": 100,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 113,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 125,
            "movement": 63
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 155,
            "movement": 21
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/12ca87c2ea2fa9506d6fc562bd8f5a01/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Bloody Samaritan",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 177,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 180,
            "movement": 12
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 198,
            "movement": -33
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
            "position": 32,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6811d7a880826af2be69b81686f629f2/500x500-000000-80-0-0.jpg"
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
            "position": 159,
            "movement": -81
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 170,
            "movement": -113
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 174,
            "movement": -31
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
            "position": 200,
            "movement": -24
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/64f822132d39a3677d59f745a248a2ce/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Comforter",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LY",
            "name": "Libya",
            "position": 121,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 152,
            "movement": -148
          }
        ]
      },
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MA",
            "name": "Morocco",
            "position": 198,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
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
            "position": 79,
            "movement": -22
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
            "position": 37,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d30dbeb4d445f5cc6f7f100b830731c4/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Overloading",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 66,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 152,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
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
            "position": 192,
            "movement": -14
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 197,
            "movement": -58
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d47d959a99da468afdd69a8f855be482/500x500-000000-80-0-0.jpg"
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
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 195,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/fee95162ec0b1b078345831eb47b8e99/500x500-000000-80-0-0.jpg"
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
            "position": 120,
            "movement": -49
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
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/64f822132d39a3677d59f745a248a2ce/500x500-000000-80-0-0.jpg"
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
            "position": 140,
            "movement": 3
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2e52f4bf8bdb05c98002b714669ee2c2/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Where Do We Go",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 94,
            "movement": -71
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
            "position": 197,
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
    "title": "People",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 179,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
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
            "position": 173,
            "movement": -36
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/64f822132d39a3677d59f745a248a2ce/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Dance",
    "platforms": [],
    "kind": "song",
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
  