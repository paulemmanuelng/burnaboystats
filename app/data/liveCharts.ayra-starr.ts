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
  export const liveChartsUpdated = "2026-08-17";
  
  /** Every platform represented in the current snapshot. */
  export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","YouTube","iTunes"];
  
  export const liveCharts: LiveRelease[] = [
  {
    "title": "Starrgirl",
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
            "country": "NG",
            "name": "Nigeria",
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
            "country": "TZ",
            "name": "Tanzania",
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
            "country": "BW",
            "name": "Botswana",
            "position": 2,
            "movement": 0
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 2,
            "movement": 0
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 2,
            "movement": 0
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 2,
            "movement": 2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 3,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 3,
            "movement": 0
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 3,
            "movement": 0
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 4,
            "movement": 0
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 4,
            "movement": 1
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 5,
            "movement": 3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 5,
            "movement": 0
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 5,
            "movement": 1
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 6,
            "movement": -2
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 6,
            "movement": -5
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 7,
            "movement": 4
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 8,
            "movement": 0
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 8,
            "movement": -2
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 9,
            "movement": 1
          },
          {
            "country": "FR",
            "name": "France",
            "position": 9,
            "movement": -3
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 9,
            "movement": -2
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 9,
            "movement": 1
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 10,
            "movement": 43
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 10,
            "movement": 2
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 10,
            "movement": -1
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 11,
            "movement": 3
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 12,
            "movement": 1
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 13,
            "movement": 20
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 13,
            "movement": -2
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 13,
            "movement": 1
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 13,
            "movement": -8
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 14,
            "movement": -5
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 14,
            "movement": 5
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 16,
            "movement": 3
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 16,
            "movement": -7
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 18,
            "movement": -11
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 18,
            "movement": -4
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 19,
            "movement": -17
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 19,
            "movement": -3
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 20,
            "movement": 63
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 21,
            "movement": -1
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 21,
            "movement": -1
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 22,
            "movement": -6
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 23,
            "movement": -18
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 23,
            "movement": -12
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 24,
            "movement": 46
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 24,
            "movement": 0
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 25,
            "movement": -14
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 25,
            "movement": 30
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 27,
            "movement": -20
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 28,
            "movement": -4
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 29,
            "movement": -5
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 31,
            "movement": 138
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 36,
            "movement": -5
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 36,
            "movement": 76
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 37,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 38,
            "movement": 31
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 39,
            "movement": 82
          },
          {
            "country": "RS",
            "name": "Serbia",
            "position": 41,
            "movement": 113
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 47,
            "movement": 10
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 49,
            "movement": -35
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 50,
            "movement": 131
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 50,
            "movement": -12
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 51,
            "movement": -13
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 53,
            "movement": 75
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 54,
            "movement": -46
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 62,
            "movement": 25
          },
          {
            "country": "US",
            "name": "United States",
            "position": 64,
            "movement": -9
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 68,
            "movement": -11
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 75,
            "movement": -2
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 77,
            "movement": -42
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 81,
            "movement": -5
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 83,
            "movement": 116
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 84,
            "movement": 35
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 91,
            "movement": 2
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 96,
            "movement": -7
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 106,
            "movement": -28
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 111,
            "movement": 38
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 116,
            "movement": -80
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 123,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 132,
            "movement": -22
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 142,
            "movement": 20
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 146,
            "movement": 2
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 157,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 163,
            "movement": -15
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 190,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 200,
            "movement": -15
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 2,
        "entries": [
          {
            "country": "DM",
            "name": "Dominica",
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
            "country": "GH",
            "name": "Ghana",
            "position": 2,
            "movement": -1
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 5,
            "movement": -2
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 16,
            "movement": -5
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 25,
            "movement": -7
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 38,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 53,
            "movement": -42
          },
          {
            "country": "US",
            "name": "United States",
            "position": 74,
            "movement": -39
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 81,
            "movement": -43
          },
          {
            "country": "TW",
            "name": "Taiwan",
            "position": 86,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 121,
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
        "numberOnes": 6,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 1,
            "movement": 2
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
            "movement": 11
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 1,
            "movement": 1
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 1,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 1,
            "movement": 2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 2,
            "movement": 7
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 3,
            "movement": 16
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 4,
            "movement": 18
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 4,
            "movement": 6
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 6,
            "movement": 10
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 8,
            "movement": 17
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 17,
            "movement": 39
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 20,
            "movement": 29
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 20,
            "movement": 18
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 21,
            "movement": 24
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 24,
            "movement": 153
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 24,
            "movement": -23
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 28,
            "movement": 41
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 37,
            "movement": -25
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 48,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 55,
            "movement": 17
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 59,
            "movement": 103
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 67,
            "movement": 7
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 78,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 82,
            "movement": 104
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 92,
            "movement": 64
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 94,
            "movement": 46
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 95,
            "movement": 41
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 102,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 136,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 158,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 170,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 177,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 182,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 185,
            "movement": -26
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 188,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 191,
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
            "country": "NG",
            "name": "Nigeria",
            "position": 1,
            "movement": 1
          },
          {
            "country": "VE",
            "name": "Venezuela",
            "position": 6,
            "movement": -3
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 8,
            "movement": -4
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 11,
            "movement": 33
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 22,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 40,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 62,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 66,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 70,
            "movement": -43
          },
          {
            "country": "FR",
            "name": "France",
            "position": 136,
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
            "country": "ZM",
            "name": "Zambia",
            "position": 28,
            "movement": 79
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 29,
            "movement": 44
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 42,
            "movement": 64
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 59,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 87,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 101,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 112,
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
            "position": 3,
            "movement": 2
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
            "position": 13,
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
            "position": 17,
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
    "title": "Colorado",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 12,
            "movement": 4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 17,
            "movement": 14
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 22,
            "movement": -6
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 56,
            "movement": 7
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 69,
            "movement": 16
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 73,
            "movement": -11
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 84,
            "movement": 42
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 119,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 128,
            "movement": 51
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 138,
            "movement": 39
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 162,
            "movement": 3
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 190,
            "movement": -29
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 193,
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
            "position": 41,
            "movement": 0
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
            "position": 79,
            "movement": -9
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 142,
            "movement": 5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 143,
            "movement": 2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 156,
            "movement": -30
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
            "position": 38,
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
    "title": "Tornado",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 21,
            "movement": 14
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 28,
            "movement": -2
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 30,
            "movement": 47
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 35,
            "movement": 23
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 40,
            "movement": 1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 42,
            "movement": 9
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 50,
            "movement": 33
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 97,
            "movement": -12
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 101,
            "movement": 44
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 106,
            "movement": 39
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 116,
            "movement": -13
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 139,
            "movement": 13
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 181,
            "movement": null,
            "status": "new"
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
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 22,
            "movement": 11
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 55,
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
            "position": 64,
            "movement": -6
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 181,
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
            "position": 15,
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
            "position": 41,
            "movement": null,
            "status": "re"
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
            "movement": -16
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/faa0b0578b463b8808c25da8f594aced/500x500-000000-80-0-0.jpg"
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
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 8,
            "movement": 3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 10,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 58,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 65,
            "movement": 5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 67,
            "movement": -8
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 73,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 103,
            "movement": 7
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 105,
            "movement": 25
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 131,
            "movement": 17
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 148,
            "movement": 18
          },
          {
            "country": "NA",
            "name": "Namibia",
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
            "position": 20,
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
            "position": 5,
            "movement": 149
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
            "position": 33,
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
            "position": 30,
            "movement": -13
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
    "title": "Amazing",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MW",
            "name": "Malawi",
            "position": 10,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 17,
            "movement": 49
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 18,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 23,
            "movement": -5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 31,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 52,
            "movement": 14
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 60,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 67,
            "movement": 28
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 83,
            "movement": 33
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 105,
            "movement": 92
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 165,
            "movement": 14
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 196,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 197,
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
            "position": 57,
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
            "position": 17,
            "movement": 6
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
            "movement": -33
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
            "position": 18,
            "movement": -4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 20,
            "movement": 2
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 23,
            "movement": -10
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 26,
            "movement": 17
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 30,
            "movement": 10
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 96,
            "movement": 3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 99,
            "movement": -47
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 99,
            "movement": -14
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 152,
            "movement": 7
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 153,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 161,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 174,
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
            "position": 3,
            "movement": 4
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
            "movement": -35
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6dc0a8dd13e69c6b5af9c4198e926a3e/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Rush",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 20,
            "movement": -1
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 21,
            "movement": -1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 62,
            "movement": 6
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 76,
            "movement": -5
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 85,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 98,
            "movement": 0
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 146,
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
            "country": "BF",
            "name": "Burkina Faso",
            "position": 17,
            "movement": 0
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 75,
            "movement": 68
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 78,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 166,
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
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SN",
            "name": "Senegal",
            "position": 49,
            "movement": 7
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
            "country": "FM",
            "name": "Micronesia",
            "position": 5,
            "movement": 38
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 70,
            "movement": 5
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 78,
            "movement": 68
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 87,
            "movement": 20
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 110,
            "movement": 2
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 115,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 117,
            "movement": 5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 162,
            "movement": -53
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 163,
            "movement": -16
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 166,
            "movement": -108
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 169,
            "movement": -80
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 174,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 178,
            "movement": null,
            "status": "new"
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 191,
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
    "title": "Ms. Paper",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "DM",
            "name": "Dominica",
            "position": 40,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 40,
            "movement": -3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 45,
            "movement": -22
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 48,
            "movement": 0
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 55,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 78,
            "movement": 62
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 180,
            "movement": -42
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
            "position": 47,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 61,
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
            "position": 59,
            "movement": -13
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
            "movement": -5
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
            "position": 14,
            "movement": -3
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 57,
            "movement": -4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 75,
            "movement": 19
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 84,
            "movement": 7
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 96,
            "movement": -19
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 100,
            "movement": 7
          },
          {
            "country": "FR",
            "name": "France",
            "position": 108,
            "movement": 3
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 123,
            "movement": 22
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 131,
            "movement": -41
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 162,
            "movement": -10
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
            "country": "FM",
            "name": "Micronesia",
            "position": 31,
            "movement": 60
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 71,
            "movement": -25
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 88,
            "movement": 101
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 98,
            "movement": 33
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 100,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 115,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 119,
            "movement": 26
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 133,
            "movement": 32
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 135,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 170,
            "movement": -19
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 181,
            "movement": -64
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
            "position": 31,
            "movement": 8
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 34,
            "movement": 63
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 36,
            "movement": 17
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 54,
            "movement": 6
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 89,
            "movement": 85
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 108,
            "movement": 60
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 159,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
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
            "position": 53,
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
            "position": 13,
            "movement": -3
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
            "position": 34,
            "movement": 13
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 41,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 42,
            "movement": 80
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 43,
            "movement": 22
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 69,
            "movement": 20
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 147,
            "movement": -47
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 153,
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
            "position": 82,
            "movement": -21
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
            "position": 19,
            "movement": 144
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
            "position": 100,
            "movement": -55
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
            "movement": -8
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 45,
            "movement": -2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 50,
            "movement": 62
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 51,
            "movement": -17
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 122,
            "movement": -21
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 130,
            "movement": 25
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 188,
            "movement": -34
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 197,
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
            "position": 45,
            "movement": -16
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
            "position": 88,
            "movement": -81
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2e52f4bf8bdb05c98002b714669ee2c2/500x500-000000-80-0-0.jpg"
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
            "position": 58,
            "movement": 73
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 83,
            "movement": 3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 104,
            "movement": -6
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 106,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 107,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 122,
            "movement": 25
          },
          {
            "country": "GM",
            "name": "Gambia",
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
            "position": 47,
            "movement": -8
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
            "position": 137,
            "movement": -109
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
            "position": 18,
            "movement": -4
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/fe3deba215d998d74542663a84621852/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Midnight in New York",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 39,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 42,
            "movement": -12
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 46,
            "movement": 26
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 75,
            "movement": -18
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 80,
            "movement": -3
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 111,
            "movement": -47
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
            "position": 62,
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
            "position": 12,
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
            "position": 66,
            "movement": -34
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
            "position": 70,
            "movement": -5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 79,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 100,
            "movement": -3
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 118,
            "movement": -46
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 145,
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
            "country": "JM",
            "name": "Jamaica",
            "position": 28,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 58,
            "movement": -47
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
            "position": 34,
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
    "title": "Treasure",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 16,
            "movement": 53
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 43,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 58,
            "movement": 6
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 65,
            "movement": 11
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 70,
            "movement": 21
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 162,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 195,
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
            "position": 61,
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
            "position": 36,
            "movement": -33
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
            "position": 11,
            "movement": 0
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 14,
            "movement": 0
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 57,
            "movement": -1
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 153,
            "movement": -11
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 158,
            "movement": 7
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
            "position": 33,
            "movement": 27
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 129,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 163,
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
    "title": "Dance",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 55,
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 69,
            "movement": -1
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 94,
            "movement": 63
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 107,
            "movement": 66
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 164,
            "movement": -32
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 177,
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
            "position": 91,
            "movement": -24
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
            "position": 15,
            "movement": -3
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/37efb43b4704415ff51e98e357041982/500x500-000000-80-0-0.jpg"
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
            "position": 86,
            "movement": -12
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 90,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 99,
            "movement": -6
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 124,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 194,
            "movement": -29
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 69,
            "movement": -43
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 141,
            "movement": -107
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
            "position": 140,
            "movement": -60
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/227c27e8b3db2fc1be8808745b5c9fc1/500x500-000000-80-0-0.jpg"
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
            "position": 66,
            "movement": -22
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 68,
            "movement": -7
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 92,
            "movement": 11
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 114,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 147,
            "movement": 8
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 157,
            "movement": 6
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 193,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 197,
            "movement": -7
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
            "country": "BF",
            "name": "Burkina Faso",
            "position": 17,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 65,
            "movement": 23
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 94,
            "movement": -81
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 130,
            "movement": -59
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 138,
            "movement": 33
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 165,
            "movement": -4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 175,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 183,
            "movement": -17
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b922c719d3a9901f749140e8f532a8d0/500x500-000000-80-0-0.jpg"
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
            "position": 71,
            "movement": 11
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 96,
            "movement": -2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 123,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 144,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 181,
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
            "position": 142,
            "movement": -48
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
            "position": 131,
            "movement": -109
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
            "position": 95,
            "movement": 59
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 114,
            "movement": 34
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 116,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 144,
            "movement": 26
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 168,
            "movement": -46
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 174,
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
    "title": "Commas",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 30,
            "movement": 60
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 45,
            "movement": 41
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 134,
            "movement": 46
          },
          {
            "country": "TZ",
            "name": "Tanzania",
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
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 33,
            "movement": -2
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
            "position": 84,
            "movement": -19
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 140,
            "movement": 23
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 151,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
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
    "title": "Santa",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "PE",
            "name": "Peru",
            "position": 58,
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
            "country": "PE",
            "name": "Peru",
            "position": 75,
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
    "title": "Bloody Samaritan",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 104,
            "movement": 32
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 177,
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
            "position": 47,
            "movement": -1
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
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 32,
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
            "country": "GH",
            "name": "Ghana",
            "position": 76,
            "movement": -11
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/1421f8aa54dc60efbd0ab4034f7ba7f8/500x500-000000-80-0-0.jpg"
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
            "position": 149,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 174,
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
    "title": "MON BÉBÉ",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 34,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/bae1d173c270367dfe0b472d30c7305f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Rhythm & Blues",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 42,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4f920b01bcb9ce9949049741f8720fc7/500x500-000000-80-0-0.jpg"
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
            "position": 96,
            "movement": -7
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e18f46f5169476d41ff6bf5f188e1127/500x500-000000-80-0-0.jpg"
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
            "position": 39,
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
  