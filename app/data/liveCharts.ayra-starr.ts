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
  export const liveChartsUpdated = "2026-08-27";
  
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
            "country": "FJ",
            "name": "Fiji",
            "position": 2,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 2,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 2,
            "movement": 1
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
            "movement": null,
            "status": "new"
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
            "country": "BW",
            "name": "Botswana",
            "position": 4,
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
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 8,
            "movement": 0
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 9,
            "movement": 44
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
            "movement": 6
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
            "position": 28,
            "movement": 7
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
            "position": 33,
            "movement": 22
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 37,
            "movement": -15
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 40,
            "movement": 8
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 40,
            "movement": 10
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 41,
            "movement": -4
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 42,
            "movement": 53
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 43,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 52,
            "movement": 19
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 55,
            "movement": 11
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 62,
            "movement": 49
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 71,
            "movement": 99
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 76,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 83,
            "movement": 79
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 87,
            "movement": 11
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 90,
            "movement": 21
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 104,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 127,
            "movement": 22
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 149,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 160,
            "movement": 0
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 164,
            "movement": 20
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 185,
            "movement": null,
            "status": "new"
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
            "movement": 1
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
            "movement": 1
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
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 6,
            "movement": 0
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 6,
            "movement": 1
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 7,
            "movement": 1
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 9,
            "movement": 4
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 18,
            "movement": 3
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 51,
            "movement": 2
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 70,
            "movement": 5
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 101,
            "movement": 11
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 115,
            "movement": 16
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 117,
            "movement": 40
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
            "country": "BF",
            "name": "Burkina Faso",
            "position": 13,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 17,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 20,
            "movement": -11
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 23,
            "movement": -4
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 42,
            "movement": -17
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 52,
            "movement": -9
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 63,
            "movement": -5
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 171,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 180,
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
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 9,
            "movement": -8
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
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
    "title": "Starrgirl",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 5,
        "entries": [
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
            "country": "BW",
            "name": "Botswana",
            "position": 2,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 2,
            "movement": -1
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 2,
            "movement": -1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 2,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 3,
            "movement": -2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 3,
            "movement": -2
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 3,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 3,
            "movement": 0
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 3,
            "movement": -1
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 4,
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 4,
            "movement": 0
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 5,
            "movement": 1
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 5,
            "movement": 2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 6,
            "movement": 5
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 6,
            "movement": -2
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 6,
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
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 8,
            "movement": -2
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 9,
            "movement": 57
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 9,
            "movement": -3
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 10,
            "movement": -1
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 10,
            "movement": 7
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 11,
            "movement": 12
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 11,
            "movement": 25
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 16,
            "movement": 3
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 18,
            "movement": -5
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 18,
            "movement": 10
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 22,
            "movement": 2
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 22,
            "movement": -1
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 24,
            "movement": 29
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 27,
            "movement": -1
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 31,
            "movement": -11
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 31,
            "movement": 7
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 31,
            "movement": -4
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 32,
            "movement": -1
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 32,
            "movement": 103
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 32,
            "movement": -3
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 33,
            "movement": 20
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 35,
            "movement": 98
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 36,
            "movement": -2
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 38,
            "movement": -29
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 40,
            "movement": -6
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 47,
            "movement": -19
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 50,
            "movement": -3
          },
          {
            "country": "FR",
            "name": "France",
            "position": 52,
            "movement": -8
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 54,
            "movement": 27
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 55,
            "movement": 9
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 63,
            "movement": 32
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 66,
            "movement": -41
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 70,
            "movement": -7
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 73,
            "movement": 62
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 77,
            "movement": -2
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 78,
            "movement": -24
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 80,
            "movement": 26
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 84,
            "movement": 8
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 92,
            "movement": 12
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 99,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 112,
            "movement": -10
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 138,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 160,
            "movement": -23
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 165,
            "movement": null,
            "status": "new"
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 193,
            "movement": -95
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
            "movement": 2
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 7,
            "movement": 0
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 34,
            "movement": -31
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
            "country": "TD",
            "name": "Chad",
            "position": 15,
            "movement": 142
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 24,
            "movement": -5
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
            "country": "TZ",
            "name": "Tanzania",
            "position": 38,
            "movement": 10
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 43,
            "movement": -22
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
            "position": 149,
            "movement": -9
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 160,
            "movement": -1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 162,
            "movement": 29
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 173,
            "movement": 0
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
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 58,
            "movement": -3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 96,
            "movement": -4
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 145,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 163,
            "movement": -15
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 172,
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
            "position": 34,
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
            "position": 109,
            "movement": -97
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
            "country": "UG",
            "name": "Uganda",
            "position": 60,
            "movement": 5
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
            "country": "NG",
            "name": "Nigeria",
            "position": 82,
            "movement": -3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 121,
            "movement": -19
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
            "position": 184,
            "movement": -21
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
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 126,
            "movement": -101
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
            "position": 109,
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
            "position": 114,
            "movement": -18
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 127,
            "movement": 14
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 154,
            "movement": -36
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
            "position": 44,
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
            "position": 57,
            "movement": -39
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
    "title": "Rush",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 72,
            "movement": -5
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 99,
            "movement": -57
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 102,
            "movement": -50
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 120,
            "movement": 20
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 135,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 192,
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
            "position": 18,
            "movement": -1
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 20,
            "movement": -2
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 20,
            "movement": 1
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 55,
            "movement": 8
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 70,
            "movement": 1
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 71,
            "movement": 5
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
            "position": 137,
            "movement": 17
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a73bed954d61b52564118ac926925d76/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Who's Dat Girl",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 92,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 102,
            "movement": -29
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 105,
            "movement": 10
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
            "position": 122,
            "movement": 14
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 155,
            "movement": -15
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
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 54,
            "movement": -20
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 92,
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
            "position": 7,
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
            "country": "UG",
            "name": "Uganda",
            "position": 58,
            "movement": 11
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 61,
            "movement": -2
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
            "country": "KE",
            "name": "Kenya",
            "position": 152,
            "movement": -3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 167,
            "movement": 30
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 178,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 180,
            "movement": 6
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 197,
            "movement": -33
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
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 64,
            "movement": 28
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 72,
            "movement": -6
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 96,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 96,
            "movement": -3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 129,
            "movement": -102
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 131,
            "movement": -5
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 136,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 154,
            "movement": -23
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 176,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 185,
            "movement": -36
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 187,
            "movement": -48
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 193,
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
            "position": 46,
            "movement": -2
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 71,
            "movement": 9
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
            "position": 94,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FR",
            "name": "France",
            "position": 96,
            "movement": -1
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 98,
            "movement": 3
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
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 190,
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
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 176,
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
            "position": 46,
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
            "position": 121,
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
            "position": 18,
            "movement": 22
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
            "country": "NA",
            "name": "Namibia",
            "position": 156,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 169,
            "movement": 26
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
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 107,
            "movement": 19
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
            "position": 167,
            "movement": 18
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
            "position": 108,
            "movement": 8
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
            "movement": -20
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
            "country": "BF",
            "name": "Burkina Faso",
            "position": 35,
            "movement": -1
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 50,
            "movement": -27
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 69,
            "movement": 30
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 99,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 113,
            "movement": 26
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 118,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 130,
            "movement": 39
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 168,
            "movement": -79
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
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
    "title": "Wo, man",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 9,
            "movement": 1
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 9,
            "movement": 1
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 56,
            "movement": 14
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 57,
            "movement": -3
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 173,
            "movement": 2
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
            "position": 25,
            "movement": 10
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 64,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 84,
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
            "country": "NA",
            "name": "Namibia",
            "position": 101,
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
            "position": 77,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 116,
            "movement": -51
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 136,
            "movement": -4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 137,
            "movement": 12
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 158,
            "movement": 10
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 174,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 199,
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
            "position": 92,
            "movement": -5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 128,
            "movement": 7
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
            "country": "KE",
            "name": "Kenya",
            "position": 49,
            "movement": -26
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
            "country": "SR",
            "name": "Suriname",
            "position": 128,
            "movement": null,
            "status": "new"
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
            "position": 17,
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
            "position": 69,
            "movement": -30
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
            "position": 191,
            "movement": -4
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
    "title": "All The Love",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 37,
            "movement": 55
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
    "title": "Bloody Samaritan",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
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
            "position": 37,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6811d7a880826af2be69b81686f629f2/500x500-000000-80-0-0.jpg"
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
            "position": 139,
            "movement": 36
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
            "movement": -6
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 77,
            "movement": -6
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/fee95162ec0b1b078345831eb47b8e99/500x500-000000-80-0-0.jpg"
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
            "position": 30,
            "movement": -13
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/227c27e8b3db2fc1be8808745b5c9fc1/500x500-000000-80-0-0.jpg"
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
            "position": 55,
            "movement": -12
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e18f46f5169476d41ff6bf5f188e1127/500x500-000000-80-0-0.jpg"
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
    "title": "Toxic",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 182,
            "movement": -112
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b922c719d3a9901f749140e8f532a8d0/500x500-000000-80-0-0.jpg"
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
  