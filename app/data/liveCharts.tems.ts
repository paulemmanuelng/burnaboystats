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
  export const liveChartsUpdated = "2026-09-09";
  
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
            "position": 6,
            "movement": 1
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 8,
            "movement": -1
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 8,
            "movement": -2
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 9,
            "movement": 2
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 11,
            "movement": 1
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 11,
            "movement": -3
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 12,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 14,
            "movement": 2
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 15,
            "movement": -2
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 18,
            "movement": 0
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 20,
            "movement": 7
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 20,
            "movement": 3
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 20,
            "movement": 9
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 21,
            "movement": -2
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 21,
            "movement": -2
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 22,
            "movement": 3
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 22,
            "movement": -4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 23,
            "movement": 2
          },
          {
            "country": "MN",
            "name": "Mongolia",
            "position": 24,
            "movement": -1
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 26,
            "movement": 9
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 26,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 28,
            "movement": 4
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 31,
            "movement": 11
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 31,
            "movement": -2
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 32,
            "movement": 5
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 33,
            "movement": 5
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 34,
            "movement": 4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 35,
            "movement": -1
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 36,
            "movement": -6
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 37,
            "movement": 9
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 37,
            "movement": -3
          },
          {
            "country": "LY",
            "name": "Libya",
            "position": 38,
            "movement": 13
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 38,
            "movement": 11
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 40,
            "movement": 121
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 41,
            "movement": -25
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 41,
            "movement": -5
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 42,
            "movement": 15
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 42,
            "movement": -1
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 45,
            "movement": 8
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 46,
            "movement": 22
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 48,
            "movement": -10
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 48,
            "movement": 7
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 52,
            "movement": 9
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 52,
            "movement": 52
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 53,
            "movement": 36
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 54,
            "movement": 16
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 54,
            "movement": -5
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 55,
            "movement": 3
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 55,
            "movement": 4
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 56,
            "movement": 15
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 56,
            "movement": -29
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 58,
            "movement": 4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 59,
            "movement": -3
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 59,
            "movement": 6
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 60,
            "movement": -5
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 63,
            "movement": 2
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 67,
            "movement": -26
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 67,
            "movement": -34
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 67,
            "movement": -15
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 69,
            "movement": 31
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 71,
            "movement": -4
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 72,
            "movement": 2
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 73,
            "movement": -24
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 77,
            "movement": 3
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 79,
            "movement": -9
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 84,
            "movement": 49
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 85,
            "movement": 9
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 88,
            "movement": -76
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 89,
            "movement": -4
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 94,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 100,
            "movement": 3
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 101,
            "movement": 17
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 103,
            "movement": 14
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 105,
            "movement": -8
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 107,
            "movement": -56
          },
          {
            "country": "KH",
            "name": "Cambodia",
            "position": 109,
            "movement": -28
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 111,
            "movement": 5
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 122,
            "movement": -1
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 123,
            "movement": -41
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 124,
            "movement": -43
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 133,
            "movement": 50
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 135,
            "movement": 21
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 141,
            "movement": 3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 142,
            "movement": -5
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 156,
            "movement": 13
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 157,
            "movement": 2
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 160,
            "movement": 5
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 162,
            "movement": -7
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 176,
            "movement": -9
          },
          {
            "country": "FR",
            "name": "France",
            "position": 182,
            "movement": -2
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 191,
            "movement": -8
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 193,
            "movement": -18
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 193,
            "movement": 1
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 196,
            "movement": 2
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
            "position": 13,
            "movement": 0
          },
          {
            "country": "US",
            "name": "United States",
            "position": 18,
            "movement": -2
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 21,
            "movement": 11
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 21,
            "movement": -1
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
            "country": "BG",
            "name": "Bulgaria",
            "position": 33,
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
            "country": "TH",
            "name": "Thailand",
            "position": 42,
            "movement": 1
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 44,
            "movement": 1
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 45,
            "movement": -3
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
            "position": 67,
            "movement": -7
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 72,
            "movement": -17
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 83,
            "movement": 3
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 84,
            "movement": -7
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 86,
            "movement": 11
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 92,
            "movement": 3
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 93,
            "movement": 2
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 94,
            "movement": -8
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 97,
            "movement": -10
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 99,
            "movement": -4
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 101,
            "movement": -4
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 108,
            "movement": -2
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 112,
            "movement": -11
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 116,
            "movement": -4
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 122,
            "movement": -10
          },
          {
            "country": "FR",
            "name": "France",
            "position": 126,
            "movement": -6
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 127,
            "movement": -3
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 138,
            "movement": 3
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 143,
            "movement": -13
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 144,
            "movement": 0
          },
          {
            "country": "CN",
            "name": "China",
            "position": 145,
            "movement": 26
          },
          {
            "country": "IN",
            "name": "India",
            "position": 149,
            "movement": 2
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 158,
            "movement": 26
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 160,
            "movement": -27
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 160,
            "movement": -14
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 161,
            "movement": -5
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 173,
            "movement": -7
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 176,
            "movement": -11
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 183,
            "movement": -11
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 188,
            "movement": 11
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 191,
            "movement": -2
          },
          {
            "country": "VN",
            "name": "Vietnam",
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
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 7,
            "movement": 2
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 11,
            "movement": 0
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 14,
            "movement": 1
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 24,
            "movement": 5
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 26,
            "movement": 7
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 35,
            "movement": 5
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 37,
            "movement": 10
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 42,
            "movement": 14
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 51,
            "movement": 2
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 54,
            "movement": 1
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 62,
            "movement": 2
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 65,
            "movement": 1
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 68,
            "movement": 22
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 76,
            "movement": 22
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 78,
            "movement": 6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 78,
            "movement": 4
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 84,
            "movement": 4
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 84,
            "movement": -4
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 86,
            "movement": 11
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 87,
            "movement": 17
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 90,
            "movement": 27
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 91,
            "movement": 19
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 92,
            "movement": 18
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 100,
            "movement": 2
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 101,
            "movement": -7
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 111,
            "movement": 3
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 137,
            "movement": 2
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 172,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 192,
            "movement": null,
            "status": "new"
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 197,
            "movement": -1
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
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "PT",
            "name": "Portugal",
            "position": 7,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 11,
            "movement": 15
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 20,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IN",
            "name": "India",
            "position": 21,
            "movement": 21
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 23,
            "movement": -11
          },
          {
            "country": "FR",
            "name": "France",
            "position": 102,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 149,
            "movement": 19
          },
          {
            "country": "TR",
            "name": "Turkey",
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
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 35,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 36,
            "movement": null,
            "status": "new"
          },
          {
            "country": "JP",
            "name": "Japan",
            "position": 71,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 79,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 88,
            "movement": -57
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 89,
            "movement": -74
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 91,
            "movement": -38
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
            "position": 12,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 26,
            "movement": 0
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 28,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 38,
            "movement": 5
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 43,
            "movement": -1
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 48,
            "movement": -2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 58,
            "movement": -4
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 58,
            "movement": -3
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 63,
            "movement": 13
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 63,
            "movement": 5
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 67,
            "movement": -2
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 69,
            "movement": 46
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 69,
            "movement": 4
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 70,
            "movement": 89
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 70,
            "movement": 113
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 72,
            "movement": -46
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 84,
            "movement": -41
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 89,
            "movement": 12
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 94,
            "movement": 16
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 114,
            "movement": -13
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 139,
            "movement": 24
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 144,
            "movement": 28
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 144,
            "movement": 9
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 151,
            "movement": 4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 152,
            "movement": -91
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 164,
            "movement": 8
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 172,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 172,
            "movement": 11
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 180,
            "movement": 10
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 181,
            "movement": -14
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
            "position": 181,
            "movement": 10
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 187,
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
            "position": 30,
            "movement": -22
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
            "country": "MG",
            "name": "Madagascar",
            "position": 54,
            "movement": 25
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 69,
            "movement": 63
          },
          {
            "country": "LY",
            "name": "Libya",
            "position": 86,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 99,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 99,
            "movement": -21
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 123,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 137,
            "movement": -24
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 155,
            "movement": 38
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 164,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 177,
            "movement": 1
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 179,
            "movement": -43
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 184,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 186,
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
            "position": 77,
            "movement": -34
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 125,
            "movement": -103
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
            "position": 98,
            "movement": 30
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/21ffdcad2bde4b25ba9a5a3a53193b05/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Born in the Wild",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 25,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 48,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 114,
            "movement": -31
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 121,
            "movement": 45
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 128,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 132,
            "movement": 19
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 142,
            "movement": -7
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 147,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 167,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 177,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 197,
            "movement": -15
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 199,
            "movement": -10
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/66c0e3ff739ce671cee90fea6eb1047c/500x500-000000-80-0-0.jpg"
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
            "position": 12,
            "movement": -2
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 46,
            "movement": null,
            "status": "new"
          },
          {
            "country": "US",
            "name": "United States",
            "position": 83,
            "movement": -2
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 88,
            "movement": -4
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 90,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BT",
            "name": "Bhutan",
            "position": 127,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 168,
            "movement": 25
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 177,
            "movement": 13
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "US",
            "name": "United States",
            "position": 200,
            "movement": -23
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
            "position": 38,
            "movement": -1
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
    "title": "Love Is A Kingdom",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 12,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 22,
            "movement": -16
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 71,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 87,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 118,
            "movement": 27
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 121,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 155,
            "movement": -8
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 157,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 191,
            "movement": null,
            "status": "new"
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
            "country": "SR",
            "name": "Suriname",
            "position": 70,
            "movement": 66
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 85,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 86,
            "movement": 50
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 120,
            "movement": -4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 123,
            "movement": 67
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 155,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 159,
            "movement": -4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 162,
            "movement": 16
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 181,
            "movement": -17
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/53e9db9663c87b34723c17bcf9c2a8e8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Free Mind",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 118,
            "movement": 15
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 170,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 171,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 172,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 187,
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
            "position": 156,
            "movement": -120
          }
        ]
      }
    ],
    "kind": "song",
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
            "position": 11,
            "movement": 0
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 19,
            "movement": 3
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 83,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 134,
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
            "position": 173,
            "movement": 21
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 165,
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
    "title": "Isaka II",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 153,
            "movement": -26
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 178,
            "movement": -13
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
            "position": 123,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d015c74bed325b8928343913858fb3c2/500x500-000000-80-0-0.jpg"
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
            "position": 90,
            "movement": 12
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 95,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 196,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ea8f80f2edb20885ac8aed8751716794/500x500-000000-80-0-0.jpg"
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
            "position": 144,
            "movement": 54
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 156,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3d1528266cd1263f06d630c1c73376d5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Free Fall",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 27,
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
    "title": "Try Me",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 80,
            "movement": -57
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/0989302f2acc1132d8922b3f292abe4b/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "What You Need - A COLORS SHOW",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "US",
            "name": "United States",
            "position": 169,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/8e6a8bc36abf9401abf57794db386b13/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Black Panther: Wakanda Forever - Music From and Inspired By",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 57,
            "movement": -3
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6d416dc66a55cc8914425c365c1e7b74/500x500-000000-80-0-0.jpg"
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
            "position": 89,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "album"
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
  