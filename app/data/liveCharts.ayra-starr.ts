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
  export const liveChartsUpdated = "2026-08-28";
  
  /** Every platform represented in the current snapshot. */
  export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","YouTube","iTunes"];
  
  export const liveCharts: LiveRelease[] = [
  {
    "title": "Heaven Baby",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 10,
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
            "country": "GW",
            "name": "Guinea-Bissau",
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
            "country": "LR",
            "name": "Liberia",
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 1,
            "movement": 0
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
            "movement": -1
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 2,
            "movement": -1
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 2,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 2,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 2,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 3,
            "movement": -1
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 4,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 4,
            "movement": 0
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 4,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 5,
            "movement": -1
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 8,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 10,
            "movement": 2
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 10,
            "movement": 0
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 10,
            "movement": -2
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 15,
            "movement": 3
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 25,
            "movement": 15
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 28,
            "movement": 7
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 29,
            "movement": -1
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 29,
            "movement": 35
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 30,
            "movement": 18
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 30,
            "movement": 3
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 37,
            "movement": -15
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 38,
            "movement": -29
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 40,
            "movement": 10
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 41,
            "movement": 2
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 42,
            "movement": 53
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 45,
            "movement": -5
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 52,
            "movement": 19
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 60,
            "movement": -19
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 62,
            "movement": 49
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 65,
            "movement": -10
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 71,
            "movement": 99
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 87,
            "movement": 11
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 103,
            "movement": 46
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 104,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 125,
            "movement": -35
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 153,
            "movement": -70
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 160,
            "movement": 0
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 193,
            "movement": -66
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 198,
            "movement": -4
          }
        ]
      },
      {
        "platform": "Shazam",
        "numberOnes": 5,
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
            "position": 1,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 3,
            "movement": 0
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 5,
            "movement": 2
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 6,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 7,
            "movement": -1
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 9,
            "movement": 0
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 19,
            "movement": -1
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 49,
            "movement": 2
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 77,
            "movement": -7
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 83,
            "movement": 34
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 92,
            "movement": 9
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 97,
            "movement": 18
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
            "country": "UG",
            "name": "Uganda",
            "position": 2,
            "movement": 18
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 14,
            "movement": -1
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 21,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 27,
            "movement": -14
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 28,
            "movement": -7
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 38,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 44,
            "movement": -2
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 59,
            "movement": -7
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 70,
            "movement": -7
          },
          {
            "country": "UK",
            "name": "United Kingdom",
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
            "country": "NG",
            "name": "Nigeria",
            "position": 2,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 15,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 33,
            "movement": null,
            "status": "new"
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
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 67,
            "movement": null,
            "status": "new"
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
            "movement": 8
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 32,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 55,
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
            "position": 2,
            "movement": 0
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 67,
            "movement": 13
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
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 1,
            "movement": 0
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 2,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 2,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 2,
            "movement": -1
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 3,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 3,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 3,
            "movement": -2
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 3,
            "movement": -1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 4,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 4,
            "movement": -1
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 5,
            "movement": 3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 5,
            "movement": -2
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 5,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 6,
            "movement": -2
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 6,
            "movement": -3
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 7,
            "movement": -2
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 7,
            "movement": -2
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 7,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 9,
            "movement": -1
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 9,
            "movement": 2
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 11,
            "movement": -5
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 13,
            "movement": -4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 14,
            "movement": -8
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 14,
            "movement": -8
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 15,
            "movement": 1
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 16,
            "movement": -13
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 17,
            "movement": -7
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 17,
            "movement": 1
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 18,
            "movement": -9
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 18,
            "movement": 9
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 20,
            "movement": 72
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 20,
            "movement": 11
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 21,
            "movement": -10
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 21,
            "movement": 1
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 23,
            "movement": -13
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 31,
            "movement": 32
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 31,
            "movement": -9
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 32,
            "movement": 0
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 37,
            "movement": 3
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 40,
            "movement": 125
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 40,
            "movement": 7
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 41,
            "movement": -3
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 41,
            "movement": -9
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 43,
            "movement": -12
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 46,
            "movement": -28
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 46,
            "movement": -12
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 48,
            "movement": -15
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 51,
            "movement": -20
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 53,
            "movement": -7
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 56,
            "movement": -21
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 57,
            "movement": -25
          },
          {
            "country": "FR",
            "name": "France",
            "position": 61,
            "movement": -9
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 61,
            "movement": -7
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 71,
            "movement": 6
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 78,
            "movement": 6
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 79,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 83,
            "movement": 16
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 84,
            "movement": -14
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 91,
            "movement": -36
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 96,
            "movement": -30
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 106,
            "movement": -30
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 132,
            "movement": -52
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 142,
            "movement": -118
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 159,
            "movement": -47
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 179,
            "movement": -19
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
            "country": "BB",
            "name": "Barbados",
            "position": 8,
            "movement": -1
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
            "country": "LR",
            "name": "Liberia",
            "position": 11,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 20,
            "movement": 4
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 21,
            "movement": -6
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 25,
            "movement": -5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 26,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 43,
            "movement": -22
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 43,
            "movement": -5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 54,
            "movement": -4
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 56,
            "movement": 3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 150,
            "movement": -1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 160,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 173,
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 191,
            "movement": -29
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 192,
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
            "country": "CM",
            "name": "Cameroon",
            "position": 43,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 58,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 101,
            "movement": -5
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 161,
            "movement": -16
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 169,
            "movement": -6
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 179,
            "movement": -7
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
            "movement": 5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 81,
            "movement": 6
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
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4d16c0dbdfcfa22baaec4a11c3f283a/500x500-000000-80-0-0.jpg"
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
            "position": 20,
            "movement": 8
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 75,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 79,
            "movement": -31
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 79,
            "movement": -19
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 82,
            "movement": -3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 103,
            "movement": 18
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 122,
            "movement": -33
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 151,
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 164,
            "movement": 20
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 177,
            "movement": -23
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 183,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 187,
            "movement": -3
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 191,
            "movement": -115
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
            "position": 19,
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
            "position": 115,
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
            "position": 92,
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
            "position": 23,
            "movement": 18
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/faa0b0578b463b8808c25da8f594aced/500x500-000000-80-0-0.jpg"
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
            "position": 15,
            "movement": 3
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 19,
            "movement": 1
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 20,
            "movement": 0
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 56,
            "movement": -2
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 77,
            "movement": -6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 86,
            "movement": -16
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
            "position": 73,
            "movement": -1
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 87,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 102,
            "movement": -50
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 125,
            "movement": -26
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 159,
            "movement": -39
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 44,
            "movement": null,
            "status": "new"
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 82,
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
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 136,
            "movement": 1
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
            "country": "NG",
            "name": "Nigeria",
            "position": 8,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 9,
            "movement": 5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 10,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 42,
            "movement": 38
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 90,
            "movement": -23
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 101,
            "movement": -6
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
            "position": 141,
            "movement": -14
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 154,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 162,
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
            "position": 21,
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
            "position": 43,
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
            "position": 52,
            "movement": 5
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
            "position": 26,
            "movement": -4
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a88a32de107d134d181e111b3ae5f780/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Who's Dat Girl",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 102,
            "movement": -29
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 104,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 113,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 134,
            "movement": -12
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 153,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 175,
            "movement": -20
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 187,
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
            "position": 75,
            "movement": -1
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
            "position": 18,
            "movement": -13
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
            "position": 48,
            "movement": 6
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
            "position": 42,
            "movement": null,
            "status": "re"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/fe3deba215d998d74542663a84621852/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Away",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 61,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 71,
            "movement": -13
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 88,
            "movement": 1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 92,
            "movement": 21
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 96,
            "movement": 23
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 135,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 138,
            "movement": -5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 165,
            "movement": 2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 168,
            "movement": -16
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 174,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 180,
            "movement": 6
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/24407cf49fdf864463cb5ca5ad974630/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "The Year I Turned 21",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 38,
            "movement": 34
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 74,
            "movement": 22
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 105,
            "movement": -9
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 135,
            "movement": -4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 147,
            "movement": 38
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 151,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 161,
            "movement": -97
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 175,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 188,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 196,
            "movement": -67
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 198,
            "movement": -5
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d096ea1c1019d1af67c0a2e434890e1e/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Misunderstood",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 15,
            "movement": 4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 28,
            "movement": -2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 63,
            "movement": -33
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 111,
            "movement": -6
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 167,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 175,
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
            "position": 60,
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
            "position": 166,
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
            "position": 94,
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
            "position": 53,
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
    "title": "No love",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SN",
            "name": "Senegal",
            "position": 53,
            "movement": -7
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 71,
            "movement": 9
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 85,
            "movement": 13
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 91,
            "movement": 2
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 91,
            "movement": 3
          },
          {
            "country": "FR",
            "name": "France",
            "position": 99,
            "movement": -3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 107,
            "movement": 3
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 117,
            "movement": 14
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 136,
            "movement": -31
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
            "position": 46,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/7b49d51e89ff07824c8c62043775a2ab/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Amazing",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 43,
            "movement": -32
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 61,
            "movement": -40
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 61,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 82,
            "movement": -17
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 138,
            "movement": -38
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 143,
            "movement": -19
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 156,
            "movement": -33
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
            "position": 5,
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
            "position": 59,
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
    "title": "19 & Dangerous",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 23,
            "movement": 27
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 34,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 86,
            "movement": -17
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 87,
            "movement": 26
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 137,
            "movement": 31
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 169,
            "movement": -51
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 183,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 194,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 195,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b922c719d3a9901f749140e8f532a8d0/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Dangerous",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "DM",
            "name": "Dominica",
            "position": 45,
            "movement": -26
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 45,
            "movement": -10
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 49,
            "movement": -5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 69,
            "movement": -8
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 99,
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
            "position": 46,
            "movement": -3
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
            "movement": 10
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
    "title": "Ms. Paper",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 56,
            "movement": -13
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 63,
            "movement": -8
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 71,
            "movement": -38
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 90,
            "movement": -18
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 146,
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
            "position": 111,
            "movement": -7
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
            "position": 102,
            "movement": 6
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
            "position": 55,
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
    "title": "Treasure",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 29,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 72,
            "movement": -9
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 111,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 126,
            "movement": -25
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 190,
            "movement": -14
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 198,
            "movement": -161
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
            "position": 171,
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
            "position": 46,
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
    "title": "Ngozi",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 57,
            "movement": 27
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 94,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 110,
            "movement": 18
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 139,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 170,
            "movement": -8
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 197,
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
            "country": "KE",
            "name": "Kenya",
            "position": 76,
            "movement": null,
            "status": "re"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/12ca87c2ea2fa9506d6fc562bd8f5a01/500x500-000000-80-0-0.jpg"
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
            "position": 8,
            "movement": 1
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 9,
            "movement": 0
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 50,
            "movement": 6
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 61,
            "movement": -4
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 193,
            "movement": -20
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
            "position": 10,
            "movement": 15
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c4c1696f82feac0a7fa1e26379b9f7e2/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Gimme Dat",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 81,
            "movement": 12
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 108,
            "movement": -38
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 167,
            "movement": -57
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
            "movement": -17
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
            "position": 82,
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
            "position": 63,
            "movement": null,
            "status": "re"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2e52f4bf8bdb05c98002b714669ee2c2/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Last Heartbreak Song",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 62,
            "movement": 89
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 88,
            "movement": -11
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 116,
            "movement": -51
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 126,
            "movement": 11
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 136,
            "movement": -4
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 174,
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
    "title": "Midnight in New York",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 100,
            "movement": 39
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 112,
            "movement": -61
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 174,
            "movement": -78
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
            "position": 71,
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
            "position": 70,
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
    "title": "Hot Body",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 55,
            "movement": 76
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 125,
            "movement": 38
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
            "position": 72,
            "movement": -55
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
            "status": "re"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4b5a287c8f574407dc5b1b03b5ae0c58/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Dance",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 136,
            "movement": 25
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 156,
            "movement": -19
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
            "position": 72,
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
            "position": 74,
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
    "title": "Pressure",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 151,
            "movement": -59
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 184,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 196,
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
    "title": "Bad Vibes",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 127,
            "movement": -2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 128,
            "movement": 5
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 144,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 196,
            "movement": -11
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
            "country": "MR",
            "name": "Mauritania",
            "position": 61,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 138,
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
            "position": 34,
            "movement": 3
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6811d7a880826af2be69b81686f629f2/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Love Don't Cost A Dime",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 120,
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
            "position": 84,
            "movement": -19
          }
        ]
      },
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 192,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/1421f8aa54dc60efbd0ab4034f7ba7f8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Santa",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "PA",
            "name": "Panama",
            "position": 190,
            "movement": -31
          }
        ]
      },
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
            "position": 19,
            "movement": 18
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 145,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d30dbeb4d445f5cc6f7f100b830731c4/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Letter To God",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 66,
            "movement": 30
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
    "title": "Commas",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 116,
            "movement": 2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 154,
            "movement": -15
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d096ea1c1019d1af67c0a2e434890e1e/500x500-000000-80-0-0.jpg"
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
            "position": 71,
            "movement": 0
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 116,
            "movement": -39
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/fee95162ec0b1b078345831eb47b8e99/500x500-000000-80-0-0.jpg"
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
            "position": 57,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e18f46f5169476d41ff6bf5f188e1127/500x500-000000-80-0-0.jpg"
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
            "position": 89,
            "movement": -59
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/227c27e8b3db2fc1be8808745b5c9fc1/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Love Don't Cost A Dime - Re-Up",
    "platforms": [
      {
        "platform": "Spotify",
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
    "cover": "https://cdn-images.dzcdn.net/images/cover/37efb43b4704415ff51e98e357041982/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Hypé",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SR",
            "name": "Suriname",
            "position": 155,
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
    "title": "GOOD FEELiNGS",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 166,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "MON BÉBÉ",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 192,
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 199,
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
  