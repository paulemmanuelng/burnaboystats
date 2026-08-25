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
  export const liveChartsUpdated = "2026-08-25";
  
  /** Every platform represented in the current snapshot. */
  export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","YouTube","iTunes"];
  
  export const liveCharts: LiveRelease[] = [
  {
    "title": "Starrgirl",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 6,
        "entries": [
          {
            "country": "DM",
            "name": "Dominica",
            "position": 1,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 1,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
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
            "country": "CM",
            "name": "Cameroon",
            "position": 2,
            "movement": 0
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 2,
            "movement": 4
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 2,
            "movement": 1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 3,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 3,
            "movement": -1
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 4,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 4,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 4,
            "movement": -1
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 4,
            "movement": 0
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 4,
            "movement": 2
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 4,
            "movement": 0
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 5,
            "movement": 0
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 6,
            "movement": 8
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 7,
            "movement": 0
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 7,
            "movement": -1
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 7,
            "movement": 2
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 7,
            "movement": 0
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 8,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 8,
            "movement": 0
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 8,
            "movement": 27
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 9,
            "movement": -1
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 11,
            "movement": -1
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 15,
            "movement": 3
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 15,
            "movement": -9
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 16,
            "movement": -14
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 17,
            "movement": 1
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 17,
            "movement": -1
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 19,
            "movement": -12
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 20,
            "movement": 6
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 21,
            "movement": 6
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 21,
            "movement": 13
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 24,
            "movement": -16
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 25,
            "movement": -2
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 26,
            "movement": 7
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 27,
            "movement": -9
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 28,
            "movement": -1
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 29,
            "movement": 6
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 29,
            "movement": -6
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 30,
            "movement": -7
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 30,
            "movement": 32
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 30,
            "movement": 2
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 31,
            "movement": 3
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 36,
            "movement": -1
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 38,
            "movement": 31
          },
          {
            "country": "FR",
            "name": "France",
            "position": 42,
            "movement": 0
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 42,
            "movement": 78
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 43,
            "movement": -1
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 44,
            "movement": 22
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 49,
            "movement": 7
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 57,
            "movement": 95
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 60,
            "movement": -22
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 61,
            "movement": -53
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 61,
            "movement": -3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 94,
            "movement": 32
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 101,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 104,
            "movement": 64
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 105,
            "movement": -15
          },
          {
            "country": "RS",
            "name": "Serbia",
            "position": 114,
            "movement": 67
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 118,
            "movement": -90
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 123,
            "movement": -60
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 128,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 133,
            "movement": -73
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 138,
            "movement": 7
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 165,
            "movement": null,
            "status": "new"
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 179,
            "movement": -26
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 183,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 185,
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
            "position": 2,
            "movement": 0
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 5,
            "movement": -4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 6,
            "movement": 19
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 18,
            "movement": -9
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 84,
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
            "movement": 1
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
            "movement": 1
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
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
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
            "country": "KE",
            "name": "Kenya",
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
            "country": "FJ",
            "name": "Fiji",
            "position": 3,
            "movement": 1
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 3,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 4,
            "movement": 0
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 4,
            "movement": 5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 5,
            "movement": 0
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 6,
            "movement": -4
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 7,
            "movement": 9
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 11,
            "movement": 29
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 16,
            "movement": 70
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 22,
            "movement": 7
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 27,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 27,
            "movement": -6
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 30,
            "movement": 92
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 31,
            "movement": 9
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 44,
            "movement": 1
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 52,
            "movement": 35
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 60,
            "movement": 95
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 68,
            "movement": 62
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 79,
            "movement": 47
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 83,
            "movement": -38
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 92,
            "movement": 34
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 98,
            "movement": 34
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 104,
            "movement": -65
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 106,
            "movement": -23
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 110,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 128,
            "movement": 45
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 132,
            "movement": -37
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 132,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 135,
            "movement": 55
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 143,
            "movement": 16
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 165,
            "movement": 2
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 186,
            "movement": 11
          }
        ]
      },
      {
        "platform": "Shazam",
        "numberOnes": 2,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
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
            "country": "CM",
            "name": "Cameroon",
            "position": 2,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 2,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 4,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 5,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 7,
            "movement": 1
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 8,
            "movement": 2
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 14,
            "movement": 3
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 18,
            "movement": 7
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 28,
            "movement": 2
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 59,
            "movement": 6
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 86,
            "movement": 8
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 139,
            "movement": 16
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
            "movement": -1
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 3,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 6,
            "movement": -5
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 7,
            "movement": 0
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 12,
            "movement": -9
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 41,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 47,
            "movement": -11
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 70,
            "movement": -6
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 82,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 94,
            "movement": -18
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 128,
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
            "movement": 1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 4,
            "movement": 8
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 14,
            "movement": 5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 17,
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
            "country": "KE",
            "name": "Kenya",
            "position": 2,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 3,
            "movement": -1
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 14,
            "movement": 68
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
          }
        ]
      }
    ],
    "kind": "song",
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
            "country": "UG",
            "name": "Uganda",
            "position": 14,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 19,
            "movement": -3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 37,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 42,
            "movement": 5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 55,
            "movement": -5
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 58,
            "movement": 8
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 62,
            "movement": -15
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 67,
            "movement": -45
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 141,
            "movement": 52
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 147,
            "movement": -2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 149,
            "movement": -3
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 167,
            "movement": -16
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 175,
            "movement": -1
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
            "position": 44,
            "movement": -4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 55,
            "movement": -3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 89,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 145,
            "movement": 11
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 150,
            "movement": -10
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 164,
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
            "position": 43,
            "movement": 3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 87,
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
            "position": 35,
            "movement": 1
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
            "position": 8,
            "movement": 58
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
            "movement": -8
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4d16c0dbdfcfa22baaec4a11c3f283a/500x500-000000-80-0-0.jpg"
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
            "position": 9,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 10,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 13,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 57,
            "movement": -9
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 59,
            "movement": 82
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 68,
            "movement": 6
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 99,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 103,
            "movement": 15
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 106,
            "movement": 29
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 120,
            "movement": -23
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 125,
            "movement": 65
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 136,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 168,
            "movement": -58
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
            "position": 74,
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
            "position": 40,
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
            "position": 16,
            "movement": 71
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
            "position": 22,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a88a32de107d134d181e111b3ae5f780/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Rush",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 58,
            "movement": 37
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 64,
            "movement": -13
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 89,
            "movement": -76
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 97,
            "movement": 27
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 180,
            "movement": -53
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 191,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 193,
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
            "country": "BF",
            "name": "Burkina Faso",
            "position": 17,
            "movement": 6
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 18,
            "movement": -2
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 22,
            "movement": -3
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 64,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 67,
            "movement": 10
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 76,
            "movement": -3
          },
          {
            "country": "IN",
            "name": "India",
            "position": 182,
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
            "position": 49,
            "movement": null,
            "status": "re"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 95,
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
            "position": 193,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a73bed954d61b52564118ac926925d76/500x500-000000-80-0-0.jpg"
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
            "movement": -6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 41,
            "movement": -9
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 53,
            "movement": 4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 81,
            "movement": -3
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 88,
            "movement": 40
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 90,
            "movement": 16
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 94,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 133,
            "movement": 33
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 151,
            "movement": 13
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 158,
            "movement": -29
          },
          {
            "country": "TD",
            "name": "Chad",
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
            "position": 21,
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
            "position": 96,
            "movement": -9
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
            "position": 41,
            "movement": null,
            "status": "re"
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
            "country": "LR",
            "name": "Liberia",
            "position": 19,
            "movement": -3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 40,
            "movement": 3
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 61,
            "movement": -31
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 99,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 103,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 111,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 136,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 178,
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
            "movement": 5
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
            "movement": -1
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
            "position": 197,
            "movement": 3
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
            "position": 80,
            "movement": -24
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
            "country": "MR",
            "name": "Mauritania",
            "position": 37,
            "movement": 29
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 44,
            "movement": 13
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 49,
            "movement": 6
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 73,
            "movement": 29
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 79,
            "movement": 9
          },
          {
            "country": "FR",
            "name": "France",
            "position": 91,
            "movement": 5
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 98,
            "movement": -34
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 138,
            "movement": 4
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 177,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 191,
            "movement": 9
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
            "position": 49,
            "movement": 0
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
            "country": "SC",
            "name": "Seychelles",
            "position": 33,
            "movement": 5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 75,
            "movement": 30
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 132,
            "movement": -1
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 137,
            "movement": -41
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 142,
            "movement": 12
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 156,
            "movement": -23
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 158,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 160,
            "movement": -9
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 160,
            "movement": -29
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 172,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 177,
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
    "title": "Dangerous",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 21,
            "movement": 3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 29,
            "movement": 13
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 60,
            "movement": -6
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 70,
            "movement": 76
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 85,
            "movement": -12
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 112,
            "movement": -108
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 155,
            "movement": 20
          },
          {
            "country": "KE",
            "name": "Kenya",
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
            "position": 46,
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
            "position": 13,
            "movement": 7
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
            "position": 49,
            "movement": 31
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 55,
            "movement": 91
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 66,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 92,
            "movement": 19
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 101,
            "movement": 19
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 129,
            "movement": 13
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 169,
            "movement": -23
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 176,
            "movement": -51
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 199,
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
            "country": "KE",
            "name": "Kenya",
            "position": 88,
            "movement": -22
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
            "position": 22,
            "movement": 2
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 56,
            "movement": 42
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 58,
            "movement": -4
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 68,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 108,
            "movement": 75
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 159,
            "movement": -8
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 161,
            "movement": -17
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
            "position": 154,
            "movement": -12
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
            "position": 11,
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "DM",
            "name": "Dominica",
            "position": 33,
            "movement": 52
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 64,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 75,
            "movement": 13
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 88,
            "movement": 78
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 149,
            "movement": 11
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 178,
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
            "position": 79,
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
            "position": 65,
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
            "position": 97,
            "movement": -69
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
            "position": 24,
            "movement": 24
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 34,
            "movement": -6
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 94,
            "movement": -11
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 101,
            "movement": -6
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 145,
            "movement": -93
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 169,
            "movement": -45
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
            "position": 175,
            "movement": -36
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 39,
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 83,
            "movement": 8
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 103,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 104,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 123,
            "movement": 16
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 134,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 174,
            "movement": 23
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 183,
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
            "position": 80,
            "movement": -5
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 59,
            "movement": 11
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 63,
            "movement": -5
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 67,
            "movement": 61
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 113,
            "movement": -44
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 116,
            "movement": -10
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 140,
            "movement": 5
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 182,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 185,
            "movement": -10
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/24407cf49fdf864463cb5ca5ad974630/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Ms. Paper",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 59,
            "movement": 22
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 62,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 63,
            "movement": -4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 99,
            "movement": 12
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 135,
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
            "position": 120,
            "movement": -6
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
            "position": 130,
            "movement": 16
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
            "position": 9,
            "movement": 0
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 10,
            "movement": 0
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 57,
            "movement": -2
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 101,
            "movement": 33
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 164,
            "movement": 4
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
            "position": 12,
            "movement": 7
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 159,
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
    "title": "19 & Dangerous",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 34,
            "movement": -4
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 40,
            "movement": -32
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 69,
            "movement": 113
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 101,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 143,
            "movement": -14
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 168,
            "movement": -32
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 183,
            "movement": 8
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b922c719d3a9901f749140e8f532a8d0/500x500-000000-80-0-0.jpg"
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
            "position": 99,
            "movement": -9
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 133,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 147,
            "movement": 3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 148,
            "movement": 37
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 167,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 176,
            "movement": -79
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
            "position": 49,
            "movement": 8
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/12ca87c2ea2fa9506d6fc562bd8f5a01/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Hot Body",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "DM",
            "name": "Dominica",
            "position": 96,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 97,
            "movement": 27
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 127,
            "movement": -3
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
            "position": 195,
            "movement": -43
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
            "position": 120,
            "movement": -94
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
            "country": "LR",
            "name": "Liberia",
            "position": 62,
            "movement": 7
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 65,
            "movement": 7
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 153,
            "movement": -32
          },
          {
            "country": "DM",
            "name": "Dominica",
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
            "position": 200,
            "movement": -16
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
            "country": "UG",
            "name": "Uganda",
            "position": 146,
            "movement": 15
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 181,
            "movement": -39
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 186,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 188,
            "movement": -19
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
            "position": 35,
            "movement": -2
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
            "country": "LR",
            "name": "Liberia",
            "position": 73,
            "movement": 49
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 81,
            "movement": 2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 137,
            "movement": -14
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 177,
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
    "title": "Dance",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "DM",
            "name": "Dominica",
            "position": 43,
            "movement": 154
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 112,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 159,
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
    "title": "Bad Vibes",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 108,
            "movement": 17
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 131,
            "movement": 10
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 143,
            "movement": 22
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e61faaeb59320961cbd17a1ef7f9e6e7/500x500-000000-80-0-0.jpg"
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
            "position": 173,
            "movement": 3
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
      },
      {
        "platform": "YouTube",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 80,
            "movement": null,
            "status": "re"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/965eeb50245f3178580ac5bda885e56b/500x500-000000-80-0-0.jpg"
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
            "position": 105,
            "movement": 34
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 170,
            "movement": -47
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "DM",
            "name": "Dominica",
            "position": 45,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 169,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/227c27e8b3db2fc1be8808745b5c9fc1/500x500-000000-80-0-0.jpg"
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
            "position": 9,
            "movement": 182
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
            "position": 167,
            "movement": 10
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/1421f8aa54dc60efbd0ab4034f7ba7f8/500x500-000000-80-0-0.jpg"
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
            "position": 151,
            "movement": -30
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 165,
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
    "title": "Ayra Starr - EP",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 65,
            "movement": -3
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 150,
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
    "title": "All The Love",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 129,
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
    "title": "Comforter",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 99,
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
    "title": "Won Da Mo",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 184,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "My Baby",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 154,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
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
  