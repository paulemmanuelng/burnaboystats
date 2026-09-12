// GENERATED FILE — do not edit by hand.
  // Rebuilt hourly by scripts/build-live-charts.mjs --artist=tems from kworb's artist page.
  //
  // PLATFORM chart data for Tems: where each release is sitting RIGHT
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
  export const liveChartsUpdated = "2026-09-12";
  
  /** Every platform represented in the current snapshot. */
  export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","YouTube","iTunes"];
  
  export const liveCharts: LiveRelease[] = [
  {
    "title": "Raindance",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 8,
            "movement": 1
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 9,
            "movement": 9
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 9,
            "movement": -5
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 11,
            "movement": -2
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 13,
            "movement": -5
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 13,
            "movement": -1
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 15,
            "movement": 9
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 16,
            "movement": 3
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 16,
            "movement": 0
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 17,
            "movement": -3
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 18,
            "movement": -4
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 19,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 19,
            "movement": -1
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 21,
            "movement": 4
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 22,
            "movement": -6
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 23,
            "movement": -3
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 23,
            "movement": -4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 28,
            "movement": -2
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 28,
            "movement": -11
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 28,
            "movement": -6
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 31,
            "movement": 8
          },
          {
            "country": "MN",
            "name": "Mongolia",
            "position": 31,
            "movement": -2
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 32,
            "movement": -2
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 36,
            "movement": 0
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 36,
            "movement": -12
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 37,
            "movement": -3
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 37,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 38,
            "movement": -1
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 39,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 41,
            "movement": -5
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 43,
            "movement": 7
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 44,
            "movement": 19
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 44,
            "movement": -2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 45,
            "movement": 54
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 45,
            "movement": 9
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 49,
            "movement": 146
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 53,
            "movement": 13
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 54,
            "movement": -11
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 55,
            "movement": -17
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 56,
            "movement": -11
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 62,
            "movement": -12
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 62,
            "movement": 37
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 64,
            "movement": -28
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 69,
            "movement": -6
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 69,
            "movement": 2
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 70,
            "movement": -16
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 70,
            "movement": -28
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 70,
            "movement": -24
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 71,
            "movement": 29
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 71,
            "movement": -2
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 74,
            "movement": -34
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 74,
            "movement": -13
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 77,
            "movement": -4
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 78,
            "movement": -2
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 80,
            "movement": -7
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 82,
            "movement": -6
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 88,
            "movement": 87
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 89,
            "movement": -56
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 91,
            "movement": -6
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 91,
            "movement": -4
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 92,
            "movement": 20
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 93,
            "movement": -11
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 93,
            "movement": 6
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 98,
            "movement": -18
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 102,
            "movement": -12
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 102,
            "movement": 34
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 105,
            "movement": -5
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 105,
            "movement": -17
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 108,
            "movement": -9
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 109,
            "movement": -2
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 115,
            "movement": -1
          },
          {
            "country": "KH",
            "name": "Cambodia",
            "position": 121,
            "movement": 2
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 124,
            "movement": 9
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 126,
            "movement": -36
          },
          {
            "country": "MM",
            "name": "Myanmar",
            "position": 127,
            "movement": -54
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 128,
            "movement": -13
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 132,
            "movement": -6
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 140,
            "movement": -40
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 142,
            "movement": -4
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 148,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 152,
            "movement": -5
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 161,
            "movement": 21
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 166,
            "movement": -28
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 167,
            "movement": -18
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 172,
            "movement": 6
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 180,
            "movement": -45
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 186,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 196,
            "movement": -33
          }
        ]
      },
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 11,
            "movement": -1
          },
          {
            "country": "US",
            "name": "United States",
            "position": 18,
            "movement": 0
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 19,
            "movement": 2
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 24,
            "movement": 1
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 24,
            "movement": 2
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 25,
            "movement": -1
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 25,
            "movement": 4
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 28,
            "movement": 0
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 29,
            "movement": -1
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 34,
            "movement": 4
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 34,
            "movement": 7
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 45,
            "movement": -3
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 51,
            "movement": -13
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 54,
            "movement": -8
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 54,
            "movement": -17
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 58,
            "movement": -3
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 65,
            "movement": -6
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 72,
            "movement": -17
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 74,
            "movement": 7
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 79,
            "movement": 51
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 83,
            "movement": 3
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 93,
            "movement": 2
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 99,
            "movement": -4
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 100,
            "movement": -14
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 108,
            "movement": -2
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 108,
            "movement": -18
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 112,
            "movement": -11
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 118,
            "movement": -12
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 120,
            "movement": -27
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 132,
            "movement": 33
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 138,
            "movement": 3
          },
          {
            "country": "CN",
            "name": "China",
            "position": 141,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 143,
            "movement": 13
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 153,
            "movement": -47
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 155,
            "movement": -50
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 158,
            "movement": 26
          },
          {
            "country": "FR",
            "name": "France",
            "position": 165,
            "movement": -68
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 176,
            "movement": -11
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 178,
            "movement": -45
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 183,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 183,
            "movement": -11
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 186,
            "movement": -71
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 188,
            "movement": 11
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 195,
            "movement": -96
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 197,
            "movement": -67
          }
        ]
      },
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 7,
            "movement": 0
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 9,
            "movement": 2
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 10,
            "movement": 0
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 25,
            "movement": -1
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 25,
            "movement": 2
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 29,
            "movement": -2
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 31,
            "movement": 5
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 37,
            "movement": 3
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 41,
            "movement": 7
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 47,
            "movement": 2
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 50,
            "movement": -13
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 57,
            "movement": 5
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 58,
            "movement": 4
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 60,
            "movement": 10
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 60,
            "movement": 17
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 63,
            "movement": -1
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 73,
            "movement": 5
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 76,
            "movement": 1
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 77,
            "movement": 5
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 79,
            "movement": -7
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 80,
            "movement": 1
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 81,
            "movement": 6
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 83,
            "movement": 1
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 84,
            "movement": 1
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 90,
            "movement": 0
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 99,
            "movement": 0
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 115,
            "movement": 13
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 137,
            "movement": 5
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 166,
            "movement": 8
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 186,
            "movement": 4
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "EE",
            "name": "Estonia",
            "position": 10,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 14,
            "movement": -4
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 16,
            "movement": -5
          },
          {
            "country": "IN",
            "name": "India",
            "position": 27,
            "movement": -17
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 29,
            "movement": 18
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 34,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 37,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 61,
            "movement": -5
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 71,
            "movement": -39
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 101,
            "movement": -57
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 105,
            "movement": 50
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 132,
            "movement": -118
          },
          {
            "country": "CL",
            "name": "Chile",
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
            "country": "LU",
            "name": "Luxembourg",
            "position": 11,
            "movement": 3
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 14,
            "movement": 0
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 33,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 35,
            "movement": -2
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 37,
            "movement": -9
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 38,
            "movement": 1
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 40,
            "movement": -1
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 44,
            "movement": -4
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 46,
            "movement": -8
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
            "position": 10,
            "movement": 6
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 31,
            "movement": 5
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 34,
            "movement": 21
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 52,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 67,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 69,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 83,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 86,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/02552930a9bbf685ec4f683ff0ca2029/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "WAIT FOR U",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "US",
            "name": "United States",
            "position": 20,
            "movement": -9
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 23,
            "movement": 0
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 23,
            "movement": 108
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 40,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 51,
            "movement": 16
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 54,
            "movement": 17
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 56,
            "movement": 27
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 56,
            "movement": -12
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 60,
            "movement": -45
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 65,
            "movement": -6
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 79,
            "movement": -25
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 82,
            "movement": 8
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 106,
            "movement": -35
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 110,
            "movement": -5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 116,
            "movement": -13
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 126,
            "movement": -11
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 134,
            "movement": -28
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 136,
            "movement": -51
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 140,
            "movement": -39
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 148,
            "movement": -64
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 162,
            "movement": -6
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 184,
            "movement": -23
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 188,
            "movement": -13
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 194,
            "movement": 1
          },
          {
            "country": "SZ",
            "name": "Swaziland",
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
            "country": "ZA",
            "name": "South Africa",
            "position": 154,
            "movement": 6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 168,
            "movement": 5
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
            "position": 90,
            "movement": -29
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d1bd3da6698dd5eafc5b4514317039c4/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Me & U",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 65,
            "movement": null,
            "status": "new"
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 78,
            "movement": 54
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 108,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 124,
            "movement": -68
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 136,
            "movement": -53
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 145,
            "movement": 15
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 163,
            "movement": 33
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
            "movement": 172
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 135,
            "movement": -27
          }
        ]
      },
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 112,
            "movement": 0
          }
        ]
      },
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "PH",
            "name": "Philippines",
            "position": 102,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/21ffdcad2bde4b25ba9a5a3a53193b05/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "What You Need",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 23,
            "movement": -9
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 90,
            "movement": -28
          },
          {
            "country": "US",
            "name": "United States",
            "position": 110,
            "movement": -24
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 123,
            "movement": -104
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 126,
            "movement": -105
          }
        ]
      },
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "US",
            "name": "United States",
            "position": 37,
            "movement": 1
          }
        ]
      },
      {
        "platform": "YouTube",
        "numberOnes": 0,
        "entries": [
          {
            "country": "US",
            "name": "United States",
            "position": 11,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/584f40f4d2b62b611a7ab8561b656ff3/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Born in the Wild",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 95,
            "movement": -82
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 95,
            "movement": -8
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 103,
            "movement": -43
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 156,
            "movement": 25
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 161,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 176,
            "movement": 13
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 190,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/66c0e3ff739ce671cee90fea6eb1047c/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Love Is A Kingdom",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 125,
            "movement": -63
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 126,
            "movement": 64
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 138,
            "movement": -4
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 158,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 159,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 169,
            "movement": -22
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 178,
            "movement": -147
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/584f40f4d2b62b611a7ab8561b656ff3/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "For Broken Ears",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 92,
            "movement": 41
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 111,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 129,
            "movement": -25
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 165,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 170,
            "movement": 8
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 175,
            "movement": -21
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/53e9db9663c87b34723c17bcf9c2a8e8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Essence",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 12,
            "movement": 1
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 21,
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
            "position": 167,
            "movement": 9
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 185,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ee712ec0084d50159ae6564de833ce12/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Fountains",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 111,
            "movement": 0
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 156,
            "movement": -89
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ea8f80f2edb20885ac8aed8751716794/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Black Panther: Wakanda Forever - Music From and Inspired By",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 40,
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
            "position": 56,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6d416dc66a55cc8914425c365c1e7b74/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Big Daddy",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 41,
            "movement": -29
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/584f40f4d2b62b611a7ab8561b656ff3/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Isaka II",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 112,
            "movement": -13
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d015c74bed325b8928343913858fb3c2/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Burning",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 140,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/66c0e3ff739ce671cee90fea6eb1047c/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Damages",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 154,
            "movement": -37
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3d1528266cd1263f06d630c1c73376d5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Free Mind",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 184,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/53e9db9663c87b34723c17bcf9c2a8e8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "If Orange Was A Place - EP",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GD",
            "name": "Grenada",
            "position": 87,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "album"
  },
  {
    "title": "Know Your Worth",
    "platforms": [],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6233b002023b8914609a3d879b7817a4/500x500-000000-80-0-0.jpg"
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
  