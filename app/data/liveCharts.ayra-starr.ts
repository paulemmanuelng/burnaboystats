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
  export const liveChartsUpdated = "2026-09-03";
  
  /** Every platform represented in the current snapshot. */
  export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","YouTube","iTunes"];
  
  export const liveCharts: LiveRelease[] = [
  {
    "title": "Heaven Baby",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 4,
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
            "country": "FJ",
            "name": "Fiji",
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
            "country": "LR",
            "name": "Liberia",
            "position": 2,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 2,
            "movement": 0
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 2,
            "movement": -1
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 2,
            "movement": 1
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 2,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
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
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 3,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
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
            "country": "KE",
            "name": "Kenya",
            "position": 4,
            "movement": -1
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 5,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 8,
            "movement": 0
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 9,
            "movement": 59
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 9,
            "movement": 0
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 9,
            "movement": 0
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 10,
            "movement": -3
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 16,
            "movement": 67
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 16,
            "movement": -2
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 18,
            "movement": 2
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 27,
            "movement": 100
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 30,
            "movement": -4
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 31,
            "movement": 29
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 32,
            "movement": 41
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 35,
            "movement": 6
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 38,
            "movement": 11
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 40,
            "movement": 22
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 40,
            "movement": -23
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 42,
            "movement": 45
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 42,
            "movement": -2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 46,
            "movement": 62
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 49,
            "movement": 87
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 66,
            "movement": -22
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 78,
            "movement": 0
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 83,
            "movement": -20
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 84,
            "movement": 34
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 118,
            "movement": -9
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 167,
            "movement": -35
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 172,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 172,
            "movement": -9
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 182,
            "movement": -34
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 185,
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
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 4,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 10,
            "movement": -5
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 13,
            "movement": -5
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 33,
            "movement": -17
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 97,
            "movement": -3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 166,
            "movement": -12
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
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 20,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 72,
            "movement": -43
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
            "position": 10,
            "movement": -2
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 66,
            "movement": -4
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
        "numberOnes": 1,
        "entries": [
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 1,
            "movement": 1
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 3,
            "movement": 1
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 3,
            "movement": 10
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 3,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 3,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 3,
            "movement": 1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 4,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 4,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 4,
            "movement": 3
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 4,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 5,
            "movement": -2
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
            "movement": 0
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 6,
            "movement": 1
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 6,
            "movement": 0
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 6,
            "movement": 8
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 7,
            "movement": -2
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 7,
            "movement": 17
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 8,
            "movement": 0
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 10,
            "movement": -2
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 11,
            "movement": -3
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 13,
            "movement": -1
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 14,
            "movement": -7
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 15,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 21,
            "movement": -4
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 21,
            "movement": 148
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 22,
            "movement": 46
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 26,
            "movement": 4
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 29,
            "movement": -3
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 31,
            "movement": -5
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 32,
            "movement": 6
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 32,
            "movement": 61
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 32,
            "movement": 54
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 35,
            "movement": -8
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 36,
            "movement": 12
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 37,
            "movement": -3
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 39,
            "movement": 4
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 48,
            "movement": -20
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 51,
            "movement": 50
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 55,
            "movement": 58
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 58,
            "movement": 76
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 60,
            "movement": -6
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 62,
            "movement": -29
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 62,
            "movement": 19
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 63,
            "movement": 2
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 73,
            "movement": -30
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 80,
            "movement": -29
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 82,
            "movement": -37
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 82,
            "movement": 20
          },
          {
            "country": "FR",
            "name": "France",
            "position": 88,
            "movement": -8
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 89,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 98,
            "movement": 19
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 101,
            "movement": -1
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 109,
            "movement": -36
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 114,
            "movement": -65
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 117,
            "movement": 64
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 118,
            "movement": -25
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 136,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 146,
            "movement": -71
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 151,
            "movement": -6
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 154,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 197,
            "movement": -133
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
            "position": 58,
            "movement": -16
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
            "position": 14,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 21,
            "movement": 2
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 25,
            "movement": 5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 44,
            "movement": -2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 49,
            "movement": -2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 63,
            "movement": 25
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 65,
            "movement": 74
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 80,
            "movement": -10
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 105,
            "movement": -16
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 142,
            "movement": 3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 182,
            "movement": -3
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
            "movement": -5
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
            "position": 110,
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
            "movement": -1
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
            "position": 11,
            "movement": 2
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
            "position": 22,
            "movement": -2
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 51,
            "movement": 1
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 62,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 87,
            "movement": 5
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
            "position": 20,
            "movement": 161
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 99,
            "movement": 0
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 123,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 175,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 189,
            "movement": -8
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
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 12,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 19,
            "movement": -5
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 78,
            "movement": 24
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 101,
            "movement": 9
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 129,
            "movement": 4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 130,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 134,
            "movement": -38
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 169,
            "movement": 19
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 172,
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
            "position": 20,
            "movement": 6
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
            "position": 27,
            "movement": -2
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
            "position": 30,
            "movement": 10
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 51,
            "movement": -7
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 94,
            "movement": -3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 96,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 104,
            "movement": -33
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 120,
            "movement": -9
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 137,
            "movement": -30
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 155,
            "movement": -18
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
            "movement": -9
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
            "position": 71,
            "movement": -31
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
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 74,
            "movement": 27
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 75,
            "movement": 24
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 87,
            "movement": 13
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 101,
            "movement": -2
          },
          {
            "country": "FR",
            "name": "France",
            "position": 105,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 118,
            "movement": -35
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 118,
            "movement": -3
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 146,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 173,
            "movement": 16
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 184,
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
            "country": "LR",
            "name": "Liberia",
            "position": 71,
            "movement": -29
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 73,
            "movement": 12
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 81,
            "movement": -6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 134,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 137,
            "movement": 56
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 147,
            "movement": 14
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 162,
            "movement": -43
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 169,
            "movement": -12
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 170,
            "movement": -1
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 191,
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
    "title": "The Year I Turned 21",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 53,
            "movement": -39
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 54,
            "movement": 4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 72,
            "movement": 13
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 75,
            "movement": 114
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 76,
            "movement": -14
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 82,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 127,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 137,
            "movement": -3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 198,
            "movement": -27
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 199,
            "movement": -9
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d096ea1c1019d1af67c0a2e434890e1e/500x500-000000-80-0-0.jpg"
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
            "country": "LU",
            "name": "Luxembourg",
            "position": 5,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 26,
            "movement": 21
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 174,
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
    "title": "Last Heartbreak Song",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 59,
            "movement": -3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 86,
            "movement": -19
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 102,
            "movement": 39
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 110,
            "movement": -5
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 118,
            "movement": 37
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 118,
            "movement": -15
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 154,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 198,
            "movement": -28
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 41,
            "movement": -9
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 63,
            "movement": 16
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 92,
            "movement": 5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 162,
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
            "position": 96,
            "movement": -10
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
            "position": 108,
            "movement": -95
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
    "title": "19 & Dangerous",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 8,
            "movement": 73
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 32,
            "movement": 1
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 120,
            "movement": -88
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 129,
            "movement": -17
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 137,
            "movement": -80
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 179,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 198,
            "movement": -13
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 199,
            "movement": -7
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
            "country": "LR",
            "name": "Liberia",
            "position": 50,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 82,
            "movement": -34
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 101,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 151,
            "movement": -81
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
            "position": 82,
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
            "country": "LR",
            "name": "Liberia",
            "position": 74,
            "movement": 15
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 99,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 115,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 151,
            "movement": -13
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 180,
            "movement": -27
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
            "movement": 25
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e61faaeb59320961cbd17a1ef7f9e6e7/500x500-000000-80-0-0.jpg"
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
            "position": 93,
            "movement": 10
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 129,
            "movement": 33
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 147,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 155,
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
            "position": 141,
            "movement": -21
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
            "position": 155,
            "movement": -11
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/fe3deba215d998d74542663a84621852/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Commas",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 32,
            "movement": 113
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 141,
            "movement": -33
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 161,
            "movement": -25
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
            "position": 146,
            "movement": -109
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
            "position": 90,
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
    "title": "Ms. Paper",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 94,
            "movement": -42
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
            "position": 119,
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
            "position": 78,
            "movement": 86
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 176,
            "movement": 4
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
            "position": 31,
            "movement": 1
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
            "country": "LR",
            "name": "Liberia",
            "position": 80,
            "movement": 48
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 178,
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
            "position": 144,
            "movement": 56
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
            "position": 97,
            "movement": 3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 132,
            "movement": -7
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 169,
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
    "title": "All The Love",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 84,
            "movement": -5
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
            "position": 56,
            "movement": -10
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d30dbeb4d445f5cc6f7f100b830731c4/500x500-000000-80-0-0.jpg"
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
            "position": 99,
            "movement": -44
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 172,
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
    "title": "Escaladizzy II",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
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
            "country": "NG",
            "name": "Nigeria",
            "position": 166,
            "movement": -115
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d47d959a99da468afdd69a8f855be482/500x500-000000-80-0-0.jpg"
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
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "VE",
            "name": "Venezuela",
            "position": 92,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/965eeb50245f3178580ac5bda885e56b/500x500-000000-80-0-0.jpg"
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
            "position": 126,
            "movement": 14
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2e52f4bf8bdb05c98002b714669ee2c2/500x500-000000-80-0-0.jpg"
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
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/fee95162ec0b1b078345831eb47b8e99/500x500-000000-80-0-0.jpg"
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
  