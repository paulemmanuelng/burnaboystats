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
  export const liveChartsUpdated = "2026-09-07";
  
  /** Every platform represented in the current snapshot. */
  export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","YouTube","iTunes"];
  
  export const liveCharts: LiveRelease[] = [
  {
    "title": "Heaven Baby",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 3,
        "entries": [
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
            "movement": 2
          },
          {
            "country": "CM",
            "name": "Cameroon",
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
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 2,
            "movement": 1
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 2,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 2,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 3,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 3,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 5,
            "movement": -3
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 5,
            "movement": -1
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 7,
            "movement": 43
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 7,
            "movement": 3
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 8,
            "movement": 3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 8,
            "movement": 3
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 9,
            "movement": 3
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 9,
            "movement": 0
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 10,
            "movement": 47
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 12,
            "movement": 9
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 14,
            "movement": 4
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 18,
            "movement": 9
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 22,
            "movement": 18
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 23,
            "movement": 49
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 25,
            "movement": 4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 29,
            "movement": -1
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 30,
            "movement": -15
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 31,
            "movement": 4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 34,
            "movement": 0
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 34,
            "movement": 5
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 39,
            "movement": -28
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 41,
            "movement": -5
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 51,
            "movement": 44
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 59,
            "movement": 21
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 66,
            "movement": 12
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 86,
            "movement": -7
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 87,
            "movement": -12
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 89,
            "movement": 1
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 98,
            "movement": 97
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 106,
            "movement": 3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 115,
            "movement": -2
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 117,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 130,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 131,
            "movement": -23
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 158,
            "movement": -106
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 198,
            "movement": -178
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
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GD",
            "name": "Grenada",
            "position": 3,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 5,
            "movement": 13
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 8,
            "movement": -6
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 9,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 21,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 22,
            "movement": 21
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 24,
            "movement": -16
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 44,
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
            "position": 2,
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 3,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 4,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 6,
            "movement": 2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 11,
            "movement": -2
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
            "movement": -2
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 152,
            "movement": 37
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
            "position": 13,
            "movement": 0
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
            "country": "TD",
            "name": "Chad",
            "position": 1,
            "movement": 49
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 2,
            "movement": 1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 4,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
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
            "country": "NG",
            "name": "Nigeria",
            "position": 5,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 6,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 6,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 7,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 7,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 7,
            "movement": -1
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 8,
            "movement": 1
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 10,
            "movement": 3
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 11,
            "movement": 19
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 11,
            "movement": 1
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 13,
            "movement": -4
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 13,
            "movement": -2
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 14,
            "movement": -4
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 15,
            "movement": -9
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 16,
            "movement": 0
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 16,
            "movement": -2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 18,
            "movement": -4
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 23,
            "movement": -6
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 24,
            "movement": -2
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 25,
            "movement": 4
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 28,
            "movement": -6
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 29,
            "movement": -9
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 35,
            "movement": -22
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 38,
            "movement": -7
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 40,
            "movement": -19
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 45,
            "movement": -4
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 48,
            "movement": 87
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 50,
            "movement": 9
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 59,
            "movement": -2
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 60,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 62,
            "movement": -9
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 66,
            "movement": 41
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 67,
            "movement": 25
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 67,
            "movement": -35
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 81,
            "movement": 14
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 90,
            "movement": 6
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 93,
            "movement": -36
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 95,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 98,
            "movement": -38
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 100,
            "movement": -57
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 106,
            "movement": -72
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 108,
            "movement": -5
          },
          {
            "country": "FR",
            "name": "France",
            "position": 112,
            "movement": 5
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 115,
            "movement": -46
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 121,
            "movement": -68
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 122,
            "movement": 5
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 130,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 134,
            "movement": -11
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 138,
            "movement": -11
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 141,
            "movement": -43
          },
          {
            "country": "BO",
            "name": "Bolivia",
            "position": 144,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 149,
            "movement": -7
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 153,
            "movement": 8
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 154,
            "movement": -23
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 156,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 167,
            "movement": -19
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 185,
            "movement": -7
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 194,
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
            "position": 4,
            "movement": 115
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
            "position": 14,
            "movement": 10
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 21,
            "movement": -2
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 23,
            "movement": -8
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 41,
            "movement": -6
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 65,
            "movement": -15
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 72,
            "movement": 27
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 75,
            "movement": -33
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 79,
            "movement": 6
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 130,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 173,
            "movement": -42
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 185,
            "movement": 4
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
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 34,
            "movement": 0
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 61,
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
            "position": 52,
            "movement": -2
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
            "position": 70,
            "movement": 11
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
            "country": "TD",
            "name": "Chad",
            "position": 13,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 16,
            "movement": 23
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 37,
            "movement": -10
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 58,
            "movement": 78
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 59,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 60,
            "movement": 1
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 61,
            "movement": 27
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 92,
            "movement": -60
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 93,
            "movement": -6
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 103,
            "movement": 4
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 110,
            "movement": 57
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 138,
            "movement": 7
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 139,
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
            "movement": -6
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
            "position": 87,
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
            "position": 42,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/faa0b0578b463b8808c25da8f594aced/500x500-000000-80-0-0.jpg"
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
            "position": 48,
            "movement": 6
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 53,
            "movement": 68
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 61,
            "movement": 39
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 68,
            "movement": 5
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 108,
            "movement": 14
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 113,
            "movement": -31
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 132,
            "movement": 2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 142,
            "movement": -7
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 152,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 160,
            "movement": -9
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 183,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 191,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/24407cf49fdf864463cb5ca5ad974630/500x500-000000-80-0-0.jpg"
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
            "movement": -1
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 15,
            "movement": 0
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 24,
            "movement": -2
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 47,
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 58,
            "movement": -22
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 59,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 93,
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
            "position": 141,
            "movement": -22
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 156,
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
            "country": "NG",
            "name": "Nigeria",
            "position": 12,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 13,
            "movement": -3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 20,
            "movement": -2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 86,
            "movement": 12
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 92,
            "movement": 100
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 96,
            "movement": -63
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 100,
            "movement": -5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 170,
            "movement": 1
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
            "position": 37,
            "movement": 0
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 39,
            "movement": 27
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 46,
            "movement": -13
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 46,
            "movement": 5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 64,
            "movement": 0
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 72,
            "movement": -22
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 94,
            "movement": 52
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 114,
            "movement": -39
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 125,
            "movement": 14
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 144,
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
            "position": 152,
            "movement": -11
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
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/fe3deba215d998d74542663a84621852/500x500-000000-80-0-0.jpg"
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
            "movement": -4
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 42,
            "movement": 136
          },
          {
            "country": "FR",
            "name": "France",
            "position": 113,
            "movement": 11
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 121,
            "movement": 23
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 125,
            "movement": 13
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 129,
            "movement": -26
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 139,
            "movement": 12
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 160,
            "movement": -20
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
    "title": "Dangerous",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 60,
            "movement": 3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 123,
            "movement": -37
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 125,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 131,
            "movement": -2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 150,
            "movement": -39
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
            "position": 43,
            "movement": -16
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 132,
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
            "position": 108,
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
            "position": 55,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/64f822132d39a3677d59f745a248a2ce/500x500-000000-80-0-0.jpg"
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
            "position": 16,
            "movement": 87
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 75,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 75,
            "movement": 36
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 82,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 146,
            "movement": -26
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 151,
            "movement": 18
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 176,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 181,
            "movement": 13
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 193,
            "movement": -93
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
            "country": "IT",
            "name": "Italy",
            "position": 9,
            "movement": -1
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 71,
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
            "position": 44,
            "movement": 14
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 60,
            "movement": -15
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 137,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 173,
            "movement": 10
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 193,
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
            "position": 115,
            "movement": -11
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
            "position": 89,
            "movement": -72
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
            "country": "GM",
            "name": "Gambia",
            "position": 72,
            "movement": 52
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 94,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 100,
            "movement": 20
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 126,
            "movement": 41
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 138,
            "movement": 10
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 179,
            "movement": -124
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 197,
            "movement": -24
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d096ea1c1019d1af67c0a2e434890e1e/500x500-000000-80-0-0.jpg"
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
            "position": 56,
            "movement": 13
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 83,
            "movement": 4
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 85,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 105,
            "movement": -24
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 123,
            "movement": 75
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
            "position": 124,
            "movement": -98
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
            "position": 81,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4b5a287c8f574407dc5b1b03b5ae0c58/500x500-000000-80-0-0.jpg"
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
            "position": 66,
            "movement": 60
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 141,
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
            "position": 135,
            "movement": -20
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
            "position": 92,
            "movement": -49
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
            "position": 30,
            "movement": 0
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
            "position": 59,
            "movement": 63
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 79,
            "movement": -22
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 142,
            "movement": -11
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 183,
            "movement": 16
          },
          {
            "country": "TD",
            "name": "Chad",
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
            "position": 159,
            "movement": -14
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2e52f4bf8bdb05c98002b714669ee2c2/500x500-000000-80-0-0.jpg"
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
            "position": 45,
            "movement": 0
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 56,
            "movement": -9
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 100,
            "movement": 5
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 160,
            "movement": 35
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 169,
            "movement": -27
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b922c719d3a9901f749140e8f532a8d0/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Treasure",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 99,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 146,
            "movement": 33
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 172,
            "movement": -22
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 186,
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
            "position": 108,
            "movement": 28
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 176,
            "movement": -2
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 179,
            "movement": -14
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
            "position": 91,
            "movement": -63
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/12ca87c2ea2fa9506d6fc562bd8f5a01/500x500-000000-80-0-0.jpg"
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
            "position": 95,
            "movement": -22
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 110,
            "movement": 10
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 155,
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
    "title": "Amazing",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 127,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 128,
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
            "position": 145,
            "movement": -98
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/64f822132d39a3677d59f745a248a2ce/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Santa",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "EC",
            "name": "Ecuador",
            "position": 55,
            "movement": 0
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 94,
            "movement": 0
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
    "title": "Bloody Samaritan",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MW",
            "name": "Malawi",
            "position": 153,
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
            "position": 31,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6811d7a880826af2be69b81686f629f2/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Where Do We Go",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 131,
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
            "position": 150,
            "movement": -100
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/64f822132d39a3677d59f745a248a2ce/500x500-000000-80-0-0.jpg"
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
            "position": 173,
            "movement": -51
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
            "position": 153,
            "movement": -23
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d30dbeb4d445f5cc6f7f100b830731c4/500x500-000000-80-0-0.jpg"
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
            "position": 26,
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
    "title": "Pressure",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 20,
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
            "country": "NG",
            "name": "Nigeria",
            "position": 189,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d47d959a99da468afdd69a8f855be482/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Beggie Beggie",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 123,
            "movement": -91
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b922c719d3a9901f749140e8f532a8d0/500x500-000000-80-0-0.jpg"
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
            "position": 151,
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
    "title": "Midnight in New York",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 137,
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
            "position": 86,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/fee95162ec0b1b078345831eb47b8e99/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "People",
    "platforms": [],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/0dda3f7dc6c530814d51c9cb6eca57be/500x500-000000-80-0-0.jpg"
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
  