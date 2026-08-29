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
  export const liveChartsUpdated = "2026-08-29";
  
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
            "country": "GM",
            "name": "Gambia",
            "position": 1,
            "movement": 1
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
            "country": "DM",
            "name": "Dominica",
            "position": 2,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 2,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
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
            "country": "SC",
            "name": "Seychelles",
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
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 4,
            "movement": -3
          },
          {
            "country": "LY",
            "name": "Libya",
            "position": 4,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 4,
            "movement": -3
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 4,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 6,
            "movement": -3
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 7,
            "movement": -2
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 9,
            "movement": -1
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 10,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 11,
            "movement": -4
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 12,
            "movement": -2
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 14,
            "movement": 14
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 19,
            "movement": -1
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 24,
            "movement": 5
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 25,
            "movement": 4
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 28,
            "movement": 2
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 30,
            "movement": 3
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 38,
            "movement": -29
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 41,
            "movement": 2
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 46,
            "movement": 2
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 50,
            "movement": -13
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 60,
            "movement": -19
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 63,
            "movement": -18
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 74,
            "movement": -51
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 74,
            "movement": -9
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 75,
            "movement": -4
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 81,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 81,
            "movement": -29
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 88,
            "movement": -1
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 112,
            "movement": -25
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 113,
            "movement": -39
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 128,
            "movement": -103
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 151,
            "movement": null,
            "status": "new"
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
            "position": 168,
            "movement": 1
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 168,
            "movement": -43
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 181,
            "movement": -78
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 193,
            "movement": -66
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
            "movement": -1
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 3,
            "movement": 2
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
            "position": 7,
            "movement": 2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 7,
            "movement": 0
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 7,
            "movement": -1
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 22,
            "movement": -3
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 52,
            "movement": -3
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 73,
            "movement": 10
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 87,
            "movement": 10
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 88,
            "movement": -11
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 91,
            "movement": 1
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
            "position": 2,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 9,
            "movement": -7
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 24,
            "movement": -10
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 36,
            "movement": -8
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 44,
            "movement": -15
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 50,
            "movement": -6
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 54,
            "movement": -33
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 80,
            "movement": -8
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 80,
            "movement": -15
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 96,
            "movement": -58
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 120,
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
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 4,
            "movement": -3
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 47,
            "movement": null,
            "status": "new"
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 87,
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
            "position": 6,
            "movement": -4
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 120,
            "movement": -56
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
            "movement": 1
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
            "movement": 1
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 2,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
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
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 4,
            "movement": 0
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 5,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 5,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 5,
            "movement": -2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 5,
            "movement": -1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 5,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 6,
            "movement": 0
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 6,
            "movement": 0
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 7,
            "movement": 7
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 7,
            "movement": 0
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 8,
            "movement": 7
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 9,
            "movement": 0
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 9,
            "movement": 2
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 9,
            "movement": -2
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 10,
            "movement": -5
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 11,
            "movement": -5
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 15,
            "movement": -1
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 16,
            "movement": 5
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 16,
            "movement": -9
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 16,
            "movement": -13
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 17,
            "movement": -4
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 19,
            "movement": 2
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 20,
            "movement": 72
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 21,
            "movement": 2
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 21,
            "movement": -3
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 23,
            "movement": -3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 27,
            "movement": 105
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 31,
            "movement": -13
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 31,
            "movement": 1
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 31,
            "movement": 32
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 31,
            "movement": 26
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 31,
            "movement": -9
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 32,
            "movement": -15
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 33,
            "movement": -16
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 34,
            "movement": 49
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 37,
            "movement": 6
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 39,
            "movement": 32
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
            "position": 45,
            "movement": -4
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
            "country": "UK",
            "name": "United Kingdom",
            "position": 51,
            "movement": -5
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 67,
            "movement": -30
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 68,
            "movement": -15
          },
          {
            "country": "FR",
            "name": "France",
            "position": 69,
            "movement": -8
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 79,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 79,
            "movement": -1
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 81,
            "movement": 3
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 96,
            "movement": -30
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 106,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 113,
            "movement": -52
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 117,
            "movement": -11
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 118,
            "movement": -27
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 119,
            "movement": -63
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 142,
            "movement": -118
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 144,
            "movement": -104
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 147,
            "movement": -101
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 152,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 169,
            "movement": 10
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 183,
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
            "position": 7,
            "movement": -6
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 9,
            "movement": -1
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 190,
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
            "country": "LR",
            "name": "Liberia",
            "position": 19,
            "movement": -3
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 24,
            "movement": -6
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 43,
            "movement": -5
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 52,
            "movement": -27
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 54,
            "movement": -10
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 58,
            "movement": -2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 59,
            "movement": -16
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 140,
            "movement": 52
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 156,
            "movement": -39
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 167,
            "movement": -17
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 180,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 188,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 191,
            "movement": -29
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
            "movement": 4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 60,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 101,
            "movement": 0
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 171,
            "movement": -10
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 183,
            "movement": -4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 197,
            "movement": -28
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
            "position": 39,
            "movement": -5
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
            "position": 57,
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
            "position": 60,
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 34,
            "movement": 68
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 70,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 80,
            "movement": -7
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 87,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 125,
            "movement": -26
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 200,
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
            "position": 18,
            "movement": 1
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 22,
            "movement": -2
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 25,
            "movement": -10
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 55,
            "movement": 1
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 85,
            "movement": -8
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 91,
            "movement": -5
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
            "position": 20,
            "movement": 24
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 52,
            "movement": null,
            "status": "new"
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 65,
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
            "position": 129,
            "movement": 7
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
            "position": 10,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 12,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 16,
            "movement": -4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 78,
            "movement": 27
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 81,
            "movement": -7
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 102,
            "movement": -60
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 114,
            "movement": -4
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
            "position": 185,
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
            "position": 25,
            "movement": -4
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
            "movement": 0
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
            "position": 10,
            "movement": 42
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
    "title": "Tornado",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 26,
            "movement": 17
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 34,
            "movement": 9
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
            "position": 88,
            "movement": 1
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
            "position": 108,
            "movement": 14
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 153,
            "movement": 8
          },
          {
            "country": "GM",
            "name": "Gambia",
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
            "position": 28,
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
            "position": 128,
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
            "position": 47,
            "movement": 45
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
            "position": 84,
            "movement": 4
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 85,
            "movement": 13
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 90,
            "movement": null,
            "status": "new"
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
            "position": 103,
            "movement": -4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 105,
            "movement": -12
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 112,
            "movement": -16
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 119,
            "movement": -3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 188,
            "movement": -52
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 190,
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
    "title": "Misunderstood",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 27,
            "movement": -3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 35,
            "movement": -7
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 52,
            "movement": -10
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 148,
            "movement": -11
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
            "position": 96,
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
            "position": 97,
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
            "position": 155,
            "movement": 11
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
    "title": "Who's Dat Girl",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 104,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 134,
            "movement": -12
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 145,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 151,
            "movement": null,
            "status": "new"
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
            "position": 185,
            "movement": 3
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
            "position": 116,
            "movement": -23
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
            "position": 36,
            "movement": -16
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
            "country": "NG",
            "name": "Nigeria",
            "position": 130,
            "movement": 5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 130,
            "movement": -25
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 133,
            "movement": 14
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 137,
            "movement": 38
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 146,
            "movement": 42
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 166,
            "movement": 32
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 169,
            "movement": -18
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 196,
            "movement": -67
          }
        ]
      }
    ],
    "kind": "album",
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
            "country": "GM",
            "name": "Gambia",
            "position": 64,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 71,
            "movement": -13
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 83,
            "movement": 37
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 96,
            "movement": -37
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 103,
            "movement": -24
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 150,
            "movement": 18
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 154,
            "movement": 4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 165,
            "movement": 2
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 174,
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
    "title": "Dangerous",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 30,
            "movement": 26
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 58,
            "movement": 20
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 66,
            "movement": 33
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 86,
            "movement": -8
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 129,
            "movement": -84
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
            "position": 66,
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
            "position": 67,
            "movement": -59
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
    "title": "Last Heartbreak Song",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 79,
            "movement": 21
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
            "position": 105,
            "movement": -34
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 125,
            "movement": 11
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 126,
            "movement": 11
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 133,
            "movement": -7
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 147,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 194,
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
    "title": "Treasure",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 56,
            "movement": -8
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 72,
            "movement": 69
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 126,
            "movement": -25
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 142,
            "movement": -31
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 153,
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
            "position": 150,
            "movement": 19
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
    "title": "Ms. Paper",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 51,
            "movement": 25
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 83,
            "movement": 7
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 131,
            "movement": -17
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 177,
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
            "position": 128,
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
            "position": 97,
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
            "position": 35,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 93,
            "movement": -7
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 124,
            "movement": -37
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 126,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 172,
            "movement": 22
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 183,
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
            "movement": 0
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
            "position": 40,
            "movement": 21
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 45,
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
            "position": 30,
            "movement": -19
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 169,
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
    "title": "Amazing",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 55,
            "movement": 23
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 73,
            "movement": -12
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 88,
            "movement": 50
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 181,
            "movement": -39
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
            "position": 68,
            "movement": -63
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
    "title": "Ngozi",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 94,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 99,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 110,
            "movement": 18
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 135,
            "movement": 21
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 178,
            "movement": -39
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
    "title": "Gimme Dat",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 96,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 110,
            "movement": 76
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 139,
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
            "position": 138,
            "movement": -21
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
    "title": "Hot Body",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 90,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 162,
            "movement": -8
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
    "title": "Midnight in New York",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 82,
            "movement": 115
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 197,
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
            "position": 39,
            "movement": 32
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
    "title": "Bad Vibes",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BJ",
            "name": "Benin",
            "position": 127,
            "movement": 11
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 128,
            "movement": 6
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 165,
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
            "position": 188,
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
    "title": "Escaladizzy II",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 127,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 155,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 175,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 197,
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
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 135,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 154,
            "movement": -15
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 174,
            "movement": -58
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d096ea1c1019d1af67c0a2e434890e1e/500x500-000000-80-0-0.jpg"
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
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6811d7a880826af2be69b81686f629f2/500x500-000000-80-0-0.jpg"
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
            "position": 162,
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
    "title": "Letter To God",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 107,
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
    "title": "Ayra Starr - EP",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 74,
            "movement": -3
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
            "position": 19,
            "movement": 18
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d30dbeb4d445f5cc6f7f100b830731c4/500x500-000000-80-0-0.jpg"
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
            "position": 23,
            "movement": 66
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/227c27e8b3db2fc1be8808745b5c9fc1/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Dance",
    "platforms": [
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
    "title": "Love Don't Cost A Dime",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 101,
            "movement": -15
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/1421f8aa54dc60efbd0ab4034f7ba7f8/500x500-000000-80-0-0.jpg"
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
  