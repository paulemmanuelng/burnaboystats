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
    "title": "Heaven Baby",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 11,
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
            "movement": 5
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 1,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
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
            "country": "UG",
            "name": "Uganda",
            "position": 1,
            "movement": 0
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 2,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 2,
            "movement": 2
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
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 4,
            "movement": 3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 4,
            "movement": 1
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
            "movement": -1
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 12,
            "movement": -1
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 12,
            "movement": 15
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 14,
            "movement": 13
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 14,
            "movement": 30
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 15,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 18,
            "movement": 4
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 27,
            "movement": 4
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 34,
            "movement": 34
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 35,
            "movement": 25
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 42,
            "movement": -12
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 48,
            "movement": 31
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 57,
            "movement": 35
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 61,
            "movement": 37
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 66,
            "movement": 62
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 89,
            "movement": 17
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 101,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 103,
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 109,
            "movement": 23
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 116,
            "movement": 19
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 119,
            "movement": 24
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 135,
            "movement": -3
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 141,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 145,
            "movement": -93
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 150,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 158,
            "movement": 28
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 168,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 178,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 193,
            "movement": null,
            "status": "new"
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
        "numberOnes": 1,
        "entries": [
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
            "country": "BF",
            "name": "Burkina Faso",
            "position": 8,
            "movement": -1
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 8,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 11,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 13,
            "movement": -10
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 51,
            "movement": -13
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 65,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 74,
            "movement": -9
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 139,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 199,
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
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 104,
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
    "title": "Starrgirl",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 6,
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
            "country": "NA",
            "name": "Namibia",
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
            "movement": 2
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 2,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 2,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 2,
            "movement": 2
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 2,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
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
            "country": "BB",
            "name": "Barbados",
            "position": 6,
            "movement": 2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 6,
            "movement": 1
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 7,
            "movement": -3
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 7,
            "movement": 0
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 7,
            "movement": 1
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 8,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 9,
            "movement": -1
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 9,
            "movement": -3
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 9,
            "movement": -2
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 9,
            "movement": -4
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 9,
            "movement": 2
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 11,
            "movement": 8
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 12,
            "movement": -8
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 14,
            "movement": -5
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 17,
            "movement": 4
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 20,
            "movement": -5
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 20,
            "movement": -3
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 23,
            "movement": 13
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 23,
            "movement": 3
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 24,
            "movement": -8
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 24,
            "movement": 0
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 28,
            "movement": 90
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 28,
            "movement": -1
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 30,
            "movement": 1
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 31,
            "movement": -2
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 31,
            "movement": 2
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 34,
            "movement": -9
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 35,
            "movement": -6
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 40,
            "movement": 2
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 40,
            "movement": 4
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 42,
            "movement": 1
          },
          {
            "country": "FR",
            "name": "France",
            "position": 42,
            "movement": 0
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 43,
            "movement": -22
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 47,
            "movement": null,
            "status": "new"
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 48,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 55,
            "movement": 4
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 63,
            "movement": -33
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 63,
            "movement": -33
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 64,
            "movement": -4
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 67,
            "movement": -50
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 67,
            "movement": -52
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 75,
            "movement": -26
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 94,
            "movement": -56
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 98,
            "movement": -70
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 99,
            "movement": -5
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 102,
            "movement": null,
            "status": "new"
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 105,
            "movement": -85
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 109,
            "movement": -4
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 143,
            "movement": -20
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 144,
            "movement": -6
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 151,
            "movement": -94
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 170,
            "movement": -37
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 173,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 174,
            "movement": -113
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 174,
            "movement": -46
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 181,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 186,
            "movement": -82
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 199,
            "movement": -55
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
            "country": "DM",
            "name": "Dominica",
            "position": 2,
            "movement": 0
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 5,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 18,
            "movement": -8
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 174,
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 14,
            "movement": 5
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 16,
            "movement": 21
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 17,
            "movement": -3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 27,
            "movement": 15
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 45,
            "movement": 10
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 53,
            "movement": 9
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 60,
            "movement": -2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 90,
            "movement": 59
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 111,
            "movement": -44
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 114,
            "movement": 27
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 117,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 141,
            "movement": 6
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 153,
            "movement": 14
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 174,
            "movement": 1
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
            "position": 29,
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
            "position": 11,
            "movement": 79
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
            "position": 18,
            "movement": -5
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 66,
            "movement": 2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 70,
            "movement": -13
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 96,
            "movement": -37
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 98,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 110,
            "movement": -4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 115,
            "movement": -12
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 160,
            "movement": -35
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 166,
            "movement": -46
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
            "position": 107,
            "movement": -89
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
            "position": 29,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 46,
            "movement": -5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 59,
            "movement": -6
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 62,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 79,
            "movement": 2
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 80,
            "movement": 8
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 104,
            "movement": -14
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 113,
            "movement": 38
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 133,
            "movement": 25
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 147,
            "movement": 32
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 151,
            "movement": -18
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 160,
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
            "position": 19,
            "movement": 2
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
            "movement": -5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 90,
            "movement": -15
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 100,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 117,
            "movement": 25
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 121,
            "movement": 11
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 131,
            "movement": 29
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 131,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 142,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 149,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 157,
            "movement": 15
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 161,
            "movement": -5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 178,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 180,
            "movement": -20
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 182,
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
            "country": "DM",
            "name": "Dominica",
            "position": 19,
            "movement": 51
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 27,
            "movement": -6
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 35,
            "movement": -6
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 56,
            "movement": 29
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 60,
            "movement": 0
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 96,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 115,
            "movement": 40
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 132,
            "movement": -20
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 134,
            "movement": 43
          },
          {
            "country": "NA",
            "name": "Namibia",
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
            "position": 40,
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
            "position": 13,
            "movement": 7
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
    "title": "Rush",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 37,
            "movement": 21
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 65,
            "movement": -14
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 148,
            "movement": -51
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 150,
            "movement": -61
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 184,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 186,
            "movement": 7
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
            "position": 18,
            "movement": 5
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 18,
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
            "position": 65,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 69,
            "movement": 8
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 80,
            "movement": -4
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
    "title": "Misunderstood",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 21,
            "movement": -2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 29,
            "movement": 32
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 29,
            "movement": 11
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 52,
            "movement": 126
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 77,
            "movement": 34
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 103,
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 135,
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
            "position": 69,
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
            "position": 5,
            "movement": 2
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
    "title": "Amazing",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "DM",
            "name": "Dominica",
            "position": 28,
            "movement": 141
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 32,
            "movement": -8
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 62,
            "movement": -28
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 91,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 95,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 106,
            "movement": -5
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 125,
            "movement": 20
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 139,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
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
            "position": 176,
            "movement": -1
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
    "title": "Last Heartbreak Song",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 30,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 53,
            "movement": 2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 85,
            "movement": 7
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 98,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 112,
            "movement": -63
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 118,
            "movement": -52
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 130,
            "movement": -1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 138,
            "movement": 38
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 151,
            "movement": -50
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 166,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 172,
            "movement": -3
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
            "position": 58,
            "movement": -18
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 77,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 79,
            "movement": 22
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 101,
            "movement": 42
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 120,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 130,
            "movement": -61
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 130,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 177,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 179,
            "movement": -11
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 180,
            "movement": 3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 196,
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
    "title": "Away",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 52,
            "movement": 7
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 57,
            "movement": 6
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 70,
            "movement": 43
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 109,
            "movement": -42
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 111,
            "movement": 5
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 115,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 137,
            "movement": 3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 191,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 192,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 193,
            "movement": -8
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 199,
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
    "title": "No love",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SN",
            "name": "Senegal",
            "position": 48,
            "movement": -4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 68,
            "movement": 5
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 81,
            "movement": 17
          },
          {
            "country": "FR",
            "name": "France",
            "position": 93,
            "movement": 6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 95,
            "movement": -16
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 115,
            "movement": -66
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 138,
            "movement": 0
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 170,
            "movement": 21
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 198,
            "movement": -21
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
    "title": "Treasure",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 30,
            "movement": -8
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 53,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 57,
            "movement": 1
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 65,
            "movement": 3
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 154,
            "movement": 5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 161,
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
            "position": 152,
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
            "position": 15,
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
            "position": 31,
            "movement": 32
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 71,
            "movement": -12
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 75,
            "movement": -13
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 78,
            "movement": 21
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 133,
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
            "position": 106,
            "movement": 14
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
    "title": "Who's Dat Girl",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 74,
            "movement": 9
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 88,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 102,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 107,
            "movement": 27
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 109,
            "movement": 14
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 115,
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
            "position": 81,
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
    "title": "Gimme Dat",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 81,
            "movement": 7
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 98,
            "movement": -23
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 132,
            "movement": -99
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 188,
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
            "position": 77,
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
            "position": 99,
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
    "title": "Ngozi",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 96,
            "movement": 3
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 140,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 140,
            "movement": 8
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 149,
            "movement": -16
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 153,
            "movement": 23
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 171,
            "movement": -24
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 175,
            "movement": -8
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
            "position": 18,
            "movement": -7
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 175,
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
    "title": "Hot Body",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 116,
            "movement": -19
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 132,
            "movement": -5
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 177,
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
            "position": 190,
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
            "position": 152,
            "movement": -112
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
    "title": "Bloody Samaritan",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 134,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 176,
            "movement": -30
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 186,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 197,
            "movement": -9
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
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6811d7a880826af2be69b81686f629f2/500x500-000000-80-0-0.jpg"
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
            "movement": 4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 139,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 147,
            "movement": -4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 180,
            "movement": -72
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 189,
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
    "title": "Midnight in New York",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 64,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 67,
            "movement": -5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 168,
            "movement": -15
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
    "title": "Dance",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 101,
            "movement": 11
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 130,
            "movement": -87
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 138,
            "movement": 21
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
            "position": 73,
            "movement": 8
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 97,
            "movement": -24
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
    "title": "Commas",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 65,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 122,
            "movement": 29
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 142,
            "movement": 23
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d096ea1c1019d1af67c0a2e434890e1e/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Love Don't Cost A Dime",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 185,
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
            "position": 13,
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
    "title": "Where Do We Go",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 148,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 177,
            "movement": -8
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 188,
            "movement": -143
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/227c27e8b3db2fc1be8808745b5c9fc1/500x500-000000-80-0-0.jpg"
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
            "position": 158,
            "movement": 15
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
    "title": "Overloading",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 63,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 83,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
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
            "position": 158,
            "movement": -53
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
    "title": "All The Love",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 109,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 135,
            "movement": -6
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
            "country": "LY",
            "name": "Libya",
            "position": 128,
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
    "title": "Escaladizzy II",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
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
    "title": "My Baby",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 186,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
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
  