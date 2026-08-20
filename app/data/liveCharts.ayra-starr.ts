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
  export const liveChartsUpdated = "2026-08-20";
  
  /** Every platform represented in the current snapshot. */
  export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","YouTube","iTunes"];
  
  export const liveCharts: LiveRelease[] = [
  {
    "title": "Starrgirl",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 9,
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
            "country": "GM",
            "name": "Gambia",
            "position": 2,
            "movement": 0
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
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
            "country": "SB",
            "name": "Solomon Islands",
            "position": 2,
            "movement": 0
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 2,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 3,
            "movement": 0
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 3,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
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
            "country": "IE",
            "name": "Ireland",
            "position": 5,
            "movement": 0
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 6,
            "movement": 0
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 7,
            "movement": 0
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 7,
            "movement": 0
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 7,
            "movement": 0
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 7,
            "movement": 0
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 8,
            "movement": 0
          },
          {
            "country": "FR",
            "name": "France",
            "position": 9,
            "movement": 0
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 9,
            "movement": 0
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 9,
            "movement": 0
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 9,
            "movement": 0
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 9,
            "movement": 0
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 9,
            "movement": 0
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 10,
            "movement": 0
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 10,
            "movement": 0
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 10,
            "movement": 0
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 11,
            "movement": 0
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 11,
            "movement": 0
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 12,
            "movement": 0
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 13,
            "movement": 0
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 13,
            "movement": 0
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 13,
            "movement": 0
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 13,
            "movement": 0
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 15,
            "movement": 0
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 16,
            "movement": 0
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 17,
            "movement": 0
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 19,
            "movement": 0
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 19,
            "movement": 0
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 19,
            "movement": 0
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 19,
            "movement": 0
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 19,
            "movement": 0
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 20,
            "movement": 0
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 21,
            "movement": 0
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 21,
            "movement": 0
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 22,
            "movement": 0
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 22,
            "movement": 0
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 23,
            "movement": 0
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 24,
            "movement": 0
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 29,
            "movement": 0
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 31,
            "movement": 0
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 33,
            "movement": 0
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 34,
            "movement": 0
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 34,
            "movement": 0
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 36,
            "movement": 0
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 37,
            "movement": 0
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 40,
            "movement": 0
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 44,
            "movement": 0
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 47,
            "movement": 0
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 56,
            "movement": 0
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 59,
            "movement": 0
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 64,
            "movement": 0
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 64,
            "movement": 0
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 68,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 68,
            "movement": 0
          },
          {
            "country": "US",
            "name": "United States",
            "position": 75,
            "movement": 0
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 85,
            "movement": 0
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 104,
            "movement": 0
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 108,
            "movement": 0
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 109,
            "movement": 0
          },
          {
            "country": "RS",
            "name": "Serbia",
            "position": 116,
            "movement": 0
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 118,
            "movement": 0
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 122,
            "movement": 0
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 124,
            "movement": 0
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 142,
            "movement": 0
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 145,
            "movement": 0
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 153,
            "movement": 0
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 162,
            "movement": 0
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 167,
            "movement": 0
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 175,
            "movement": 0
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 192,
            "movement": 0
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 197,
            "movement": 0
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 2,
        "entries": [
          {
            "country": "BB",
            "name": "Barbados",
            "position": 1,
            "movement": null,
            "status": "new"
          },
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
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 3,
            "movement": -1
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 22,
            "movement": -4
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 46,
            "movement": -4
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 108,
            "movement": -96
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 177,
            "movement": -149
          },
          {
            "country": "US",
            "name": "United States",
            "position": 189,
            "movement": -123
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
            "country": "GM",
            "name": "Gambia",
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
            "country": "CM",
            "name": "Cameroon",
            "position": 2,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
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
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 3,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 6,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 6,
            "movement": 0
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 10,
            "movement": 0
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 12,
            "movement": 0
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 15,
            "movement": 0
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 17,
            "movement": 0
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 20,
            "movement": 0
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 24,
            "movement": 0
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 28,
            "movement": 0
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 34,
            "movement": 0
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 36,
            "movement": 0
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 39,
            "movement": 0
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 42,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 50,
            "movement": 0
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 56,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 63,
            "movement": 0
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 67,
            "movement": 0
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 69,
            "movement": 0
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 72,
            "movement": 0
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 99,
            "movement": 0
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 108,
            "movement": 0
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 111,
            "movement": 0
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 113,
            "movement": 0
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 117,
            "movement": 0
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 117,
            "movement": 0
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 136,
            "movement": 0
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 143,
            "movement": 0
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 164,
            "movement": 0
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 167,
            "movement": 0
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 171,
            "movement": 0
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 187,
            "movement": 0
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
            "position": 3,
            "movement": 7
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 6,
            "movement": 6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 10,
            "movement": 15
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 12,
            "movement": 13
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 14,
            "movement": 20
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 24,
            "movement": 23
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 27,
            "movement": 19
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 66,
            "movement": 27
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 71,
            "movement": 80
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 138,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 165,
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
            "position": 2,
            "movement": -1
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 5,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 7,
            "movement": -4
          },
          {
            "country": "VE",
            "name": "Venezuela",
            "position": 8,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 63,
            "movement": -23
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 86,
            "movement": -24
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 100,
            "movement": -6
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
            "position": 3,
            "movement": 6
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 12,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 19,
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
            "position": 128,
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
            "movement": 4
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
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 24,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 31,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 45,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 58,
            "movement": 0
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 65,
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 103,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 110,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 110,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 124,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 136,
            "movement": 0
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 138,
            "movement": 0
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 154,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 157,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 166,
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
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 62,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 83,
            "movement": 2
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 144,
            "movement": 4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 149,
            "movement": 2
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 167,
            "movement": 6
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 184,
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
            "position": 30,
            "movement": 0
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
            "position": 98,
            "movement": -64
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
            "position": 22,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 22,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 42,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 45,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 54,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 82,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 84,
            "movement": 0
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 88,
            "movement": 0
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 98,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 108,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 126,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 174,
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 175,
            "movement": 0
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 188,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 199,
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
            "position": 28,
            "movement": 162
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 61,
            "movement": -2
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
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 67,
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
            "position": 38,
            "movement": 39
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/faa0b0578b463b8808c25da8f594aced/500x500-000000-80-0-0.jpg"
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
            "position": 14,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 20,
            "movement": 0
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 23,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 34,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 52,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 62,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 94,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 96,
            "movement": 0
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 102,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 133,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 144,
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 148,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 187,
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
            "position": 180,
            "movement": -170
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
            "position": 154,
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
            "position": 14,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6dc0a8dd13e69c6b5af9c4198e926a3e/500x500-000000-80-0-0.jpg"
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
            "position": 10,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 10,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 51,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 61,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 90,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 102,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 121,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 127,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 136,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 149,
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 182,
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
            "position": 19,
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
            "position": 16,
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
            "position": 36,
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
            "movement": -4
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 12,
            "movement": 0
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 19,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 26,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 29,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 32,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 36,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 48,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 59,
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 70,
            "movement": 0
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 71,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 94,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 128,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 132,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 198,
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
            "position": 64,
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
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 18,
            "movement": 0
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 21,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 22,
            "movement": -1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 50,
            "movement": 4
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 61,
            "movement": 4
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 62,
            "movement": 2
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 86,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 89,
            "movement": 1
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
            "position": 14,
            "movement": 6
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 42,
            "movement": 0
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 93,
            "movement": 0
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 132,
            "movement": 0
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 164,
            "movement": 0
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
            "position": 97,
            "movement": null,
            "status": "new"
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 11,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 12,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 33,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 52,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 92,
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 98,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 104,
            "movement": 0
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 166,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 167,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 179,
            "movement": 0
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 188,
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
            "position": 45,
            "movement": 4
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
            "position": 43,
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
            "position": 12,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 29,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 51,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 54,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 69,
            "movement": 0
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 112,
            "movement": 0
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 112,
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 116,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 165,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 185,
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
            "position": 59,
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
            "position": 191,
            "movement": -165
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
            "position": 44,
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
            "position": 42,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 47,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 48,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 50,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 120,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 127,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 146,
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 163,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 167,
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
            "position": 15,
            "movement": 25
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 99,
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
            "position": 46,
            "movement": -4
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2e52f4bf8bdb05c98002b714669ee2c2/500x500-000000-80-0-0.jpg"
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
            "movement": 0
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 58,
            "movement": 0
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 66,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 78,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 105,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 106,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 113,
            "movement": 0
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 116,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 159,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 176,
            "movement": 0
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 178,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 197,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "album",
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 37,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 39,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 62,
            "movement": 0
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 73,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 102,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 113,
            "movement": 0
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 177,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 183,
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
            "position": 77,
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
            "position": 184,
            "movement": -167
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
            "position": 32,
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
    "title": "Away",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 44,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 53,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 90,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 142,
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 155,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 158,
            "movement": 0
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 160,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 165,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 168,
            "movement": 0
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 189,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 196,
            "movement": 0
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
            "country": "MR",
            "name": "Mauritania",
            "position": 5,
            "movement": 0
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 51,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 85,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 103,
            "movement": 0
          },
          {
            "country": "FR",
            "name": "France",
            "position": 104,
            "movement": 0
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 107,
            "movement": 0
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 138,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 141,
            "movement": 0
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 148,
            "movement": 0
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
    "title": "Ms. Paper",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 32,
            "movement": 0
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 47,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 51,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 70,
            "movement": 0
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 90,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 117,
            "movement": 0
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 158,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 195,
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
            "position": 62,
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
            "position": 33,
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
            "position": 33,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 49,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 58,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 63,
            "movement": 0
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 92,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 138,
            "movement": 0
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 159,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 160,
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
            "position": 105,
            "movement": -20
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
            "country": "FM",
            "name": "Micronesia",
            "position": 42,
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 66,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 85,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 95,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 112,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 125,
            "movement": 0
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 138,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 143,
            "movement": 0
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 155,
            "movement": 0
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
            "position": 44,
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
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 48,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 60,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 143,
            "movement": 0
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 146,
            "movement": 0
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 157,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 158,
            "movement": 0
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 159,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 182,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 200,
            "movement": 0
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 70,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 84,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 111,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 111,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 134,
            "movement": 0
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 176,
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
            "position": 28,
            "movement": 31
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 75,
            "movement": -19
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
            "movement": -2
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/fe3deba215d998d74542663a84621852/500x500-000000-80-0-0.jpg"
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
            "position": 61,
            "movement": 0
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 74,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 83,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 89,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 119,
            "movement": 0
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 151,
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
            "position": 80,
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
            "position": 35,
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
    "title": "Wo, man",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 10,
            "movement": 1
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
            "position": 54,
            "movement": 4
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 182,
            "movement": -10
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 195,
            "movement": -26
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FI",
            "name": "Finland",
            "position": 32,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 32,
            "movement": 86
          },
          {
            "country": "SV",
            "name": "El Salvador",
            "position": 39,
            "movement": -24
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
            "country": "DM",
            "name": "Dominica",
            "position": 28,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 52,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 76,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 172,
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
            "position": 122,
            "movement": -18
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
    "title": "Letter To God",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 56,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 96,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 100,
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
            "position": 154,
            "movement": -16
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
            "position": 29,
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 73,
            "movement": 0
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 82,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 106,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 129,
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
            "position": 146,
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
            "position": 37,
            "movement": -16
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/227c27e8b3db2fc1be8808745b5c9fc1/500x500-000000-80-0-0.jpg"
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
            "position": 72,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 99,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 128,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 141,
            "movement": 0
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 186,
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
    "title": "Bloody Samaritan",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 151,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 155,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 158,
            "movement": 0
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
            "position": 44,
            "movement": 0
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
            "position": 6,
            "movement": null,
            "status": "new"
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
            "country": "TD",
            "name": "Chad",
            "position": 20,
            "movement": 0
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 71,
            "movement": 0
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 158,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 191,
            "movement": 0
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
            "country": "BJ",
            "name": "Benin",
            "position": 144,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 147,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 195,
            "movement": 0
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
            "position": 158,
            "movement": 37
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
    "title": "Love Don't Cost A Dime",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 72,
            "movement": -23
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
            "position": 133,
            "movement": -13
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/1421f8aa54dc60efbd0ab4034f7ba7f8/500x500-000000-80-0-0.jpg"
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
            "position": 197,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 198,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d47d959a99da468afdd69a8f855be482/500x500-000000-80-0-0.jpg"
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
            "position": 132,
            "movement": 0
          },
          {
            "country": "LY",
            "name": "Libya",
            "position": 200,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e18f46f5169476d41ff6bf5f188e1127/500x500-000000-80-0-0.jpg"
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
            "position": 43,
            "movement": 0
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 146,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/fee95162ec0b1b078345831eb47b8e99/500x500-000000-80-0-0.jpg"
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
            "position": 38,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/bae1d173c270367dfe0b472d30c7305f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Sability",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SN",
            "name": "Senegal",
            "position": 59,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6d6d6db9d6a54f8735971b8cab496784/500x500-000000-80-0-0.jpg"
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
            "position": 161,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d30dbeb4d445f5cc6f7f100b830731c4/500x500-000000-80-0-0.jpg"
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
            "position": 191,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c22b652917676317beb469e5bce1cd24/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Hot Body (Remix)",
    "kind": "song",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 35,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
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
  