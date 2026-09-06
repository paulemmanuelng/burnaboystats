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
  export const liveChartsUpdated = "2026-09-06";
  
  /** Every platform represented in the current snapshot. */
  export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","YouTube","iTunes"];
  
  export const liveCharts: LiveRelease[] = [
  {
    "title": "Heaven Baby",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 2,
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
            "movement": 1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 2,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 2,
            "movement": 1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 2,
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 3,
            "movement": -2
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 3,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 3,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 3,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 4,
            "movement": -2
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 4,
            "movement": -1
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 4,
            "movement": 0
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 9,
            "movement": 3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 10,
            "movement": -4
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 11,
            "movement": -3
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 11,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 11,
            "movement": 2
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 12,
            "movement": -1
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 15,
            "movement": 1
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 18,
            "movement": -6
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 20,
            "movement": 55
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 21,
            "movement": -3
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 27,
            "movement": -5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 28,
            "movement": -3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 29,
            "movement": -3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 34,
            "movement": -1
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 35,
            "movement": 9
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 36,
            "movement": 18
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 39,
            "movement": 29
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 40,
            "movement": -23
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 50,
            "movement": -38
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 52,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 57,
            "movement": -17
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 72,
            "movement": -69
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 75,
            "movement": 17
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 78,
            "movement": -10
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 79,
            "movement": 3
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 80,
            "movement": -7
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 90,
            "movement": 28
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 95,
            "movement": 51
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 108,
            "movement": -3
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 109,
            "movement": -18
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 113,
            "movement": -52
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 127,
            "movement": 71
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 177,
            "movement": -5
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 195,
            "movement": -116
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
        "numberOnes": 1,
        "entries": [
          {
            "country": "GD",
            "name": "Grenada",
            "position": 1,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 2,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 8,
            "movement": -7
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 18,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 20,
            "movement": -2
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 34,
            "movement": -10
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 43,
            "movement": -26
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 52,
            "movement": -36
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
            "position": 18,
            "movement": -4
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 189,
            "movement": -59
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
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 3,
            "movement": 0
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
            "country": "LR",
            "name": "Liberia",
            "position": 5,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 5,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 6,
            "movement": 0
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 6,
            "movement": 25
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 6,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 7,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 7,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 8,
            "movement": 3
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 9,
            "movement": 8
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 9,
            "movement": 0
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 10,
            "movement": 14
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 11,
            "movement": 5
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 12,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 13,
            "movement": -4
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 13,
            "movement": 54
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 14,
            "movement": 0
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 14,
            "movement": 2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 16,
            "movement": 0
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 17,
            "movement": 1
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 20,
            "movement": -7
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 21,
            "movement": 1
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 22,
            "movement": 92
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 22,
            "movement": -14
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 29,
            "movement": 8
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 30,
            "movement": -1
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 31,
            "movement": 3
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 32,
            "movement": -11
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 34,
            "movement": -27
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 41,
            "movement": 2
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 43,
            "movement": 26
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 50,
            "movement": 5
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 53,
            "movement": -20
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 53,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 57,
            "movement": -25
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 57,
            "movement": -8
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 59,
            "movement": -24
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 60,
            "movement": 67
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 69,
            "movement": 31
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 82,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 92,
            "movement": -22
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 95,
            "movement": -13
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 96,
            "movement": 2
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 98,
            "movement": 3
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 106,
            "movement": -17
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 107,
            "movement": -10
          },
          {
            "country": "FR",
            "name": "France",
            "position": 119,
            "movement": -16
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 123,
            "movement": -11
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 123,
            "movement": 20
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 127,
            "movement": 58
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 131,
            "movement": 61
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 135,
            "movement": -15
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 142,
            "movement": 38
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 145,
            "movement": -88
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 148,
            "movement": -83
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 149,
            "movement": -45
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 178,
            "movement": -102
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 179,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 182,
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
            "position": 119,
            "movement": -40
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
            "position": 15,
            "movement": -7
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 19,
            "movement": -3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 24,
            "movement": 5
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 35,
            "movement": -7
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 42,
            "movement": 4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 50,
            "movement": 2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 85,
            "movement": 0
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 99,
            "movement": -27
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 131,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 189,
            "movement": 6
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
            "position": 50,
            "movement": 0
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
            "position": 27,
            "movement": -8
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 32,
            "movement": -11
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 39,
            "movement": -9
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 61,
            "movement": -6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 61,
            "movement": 7
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 87,
            "movement": 8
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 88,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 107,
            "movement": -10
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 136,
            "movement": -43
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 138,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 145,
            "movement": -20
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 167,
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
            "position": 38,
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
            "position": 7,
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
    "title": "Rush",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 14,
            "movement": -5
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 15,
            "movement": 1
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 22,
            "movement": 1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 36,
            "movement": -35
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 48,
            "movement": 2
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 66,
            "movement": 6
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 87,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 117,
            "movement": -4
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 119,
            "movement": -3
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
            "position": 10,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 13,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 18,
            "movement": 3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 33,
            "movement": 38
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 95,
            "movement": 8
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 98,
            "movement": 11
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 171,
            "movement": 4
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 192,
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
    "title": "Who's Dat Girl",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 33,
            "movement": 6
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 50,
            "movement": 12
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 51,
            "movement": -2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 64,
            "movement": -4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 66,
            "movement": -10
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 75,
            "movement": -14
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 133,
            "movement": 7
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 139,
            "movement": -35
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 146,
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
            "position": 141,
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
    "title": "Away",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 54,
            "movement": 6
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 73,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 82,
            "movement": 15
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 100,
            "movement": 22
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 121,
            "movement": -30
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 122,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 134,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 135,
            "movement": -17
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 151,
            "movement": 20
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 185,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 192,
            "movement": -6
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
            "country": "LR",
            "name": "Liberia",
            "position": 100,
            "movement": 30
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 103,
            "movement": -2
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 108,
            "movement": -22
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 111,
            "movement": -15
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 120,
            "movement": -30
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 169,
            "movement": -18
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 183,
            "movement": -46
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 183,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 186,
            "movement": -71
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 194,
            "movement": -21
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
            "position": 45,
            "movement": -4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 58,
            "movement": -11
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 173,
            "movement": -64
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 183,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 183,
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
            "position": 104,
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
            "position": 17,
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
    "title": "No love",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SN",
            "name": "Senegal",
            "position": 37,
            "movement": 13
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 103,
            "movement": -20
          },
          {
            "country": "FR",
            "name": "France",
            "position": 127,
            "movement": -5
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 138,
            "movement": -8
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 140,
            "movement": -88
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 144,
            "movement": -31
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 151,
            "movement": -3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 178,
            "movement": -126
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
            "position": 63,
            "movement": -10
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 86,
            "movement": 16
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 111,
            "movement": 8
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 129,
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
            "position": 89,
            "movement": 0
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
            "position": 27,
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
            "position": 55,
            "movement": 0
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
    "title": "Hot Body",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 69,
            "movement": -14
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 81,
            "movement": -35
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 87,
            "movement": -6
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 152,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 188,
            "movement": -82
          },
          {
            "country": "MW",
            "name": "Malawi",
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
            "position": 26,
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
    "title": "Last Heartbreak Song",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 55,
            "movement": 12
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 120,
            "movement": 4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 124,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 148,
            "movement": -30
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 167,
            "movement": -21
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 173,
            "movement": -42
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 188,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 199,
            "movement": -54
          }
        ]
      }
    ],
    "kind": "song",
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
            "position": 45,
            "movement": -2
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 47,
            "movement": -4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 105,
            "movement": -15
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 142,
            "movement": 31
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 168,
            "movement": 28
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 193,
            "movement": -124
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 195,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 197,
            "movement": -94
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
            "position": 7,
            "movement": 31
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c4c1696f82feac0a7fa1e26379b9f7e2/500x500-000000-80-0-0.jpg"
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
            "position": 136,
            "movement": -11
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 139,
            "movement": -42
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 151,
            "movement": -31
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 165,
            "movement": -4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 174,
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
            "position": 28,
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
    "title": "Ms. Paper",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 115,
            "movement": -3
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 126,
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
            "position": 43,
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
            "country": "SB",
            "name": "Solomon Islands",
            "position": 57,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 122,
            "movement": -51
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 131,
            "movement": -30
          },
          {
            "country": "UG",
            "name": "Uganda",
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
            "position": 145,
            "movement": -7
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2e52f4bf8bdb05c98002b714669ee2c2/500x500-000000-80-0-0.jpg"
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
    "title": "Commas",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 18,
            "movement": 59
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 186,
            "movement": -30
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d096ea1c1019d1af67c0a2e434890e1e/500x500-000000-80-0-0.jpg"
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
            "position": 73,
            "movement": 10
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 120,
            "movement": -4
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
            "country": "KE",
            "name": "Kenya",
            "position": 188,
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
            "position": 122,
            "movement": -85
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
            "position": 130,
            "movement": -24
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d30dbeb4d445f5cc6f7f100b830731c4/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Treasure",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NA",
            "name": "Namibia",
            "position": 150,
            "movement": -21
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 179,
            "movement": -100
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
            "position": 190,
            "movement": -3
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
            "position": 105,
            "movement": -91
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
            "position": 32,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b922c719d3a9901f749140e8f532a8d0/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Amazing",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 47,
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
    "title": "Where Do We Go",
    "platforms": [
      {
        "platform": "iTunes",
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
    "title": "Hypé",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 199,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c22b652917676317beb469e5bce1cd24/500x500-000000-80-0-0.jpg"
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
            "movement": -1
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
  