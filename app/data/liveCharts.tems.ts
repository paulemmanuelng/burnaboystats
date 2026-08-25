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
  export const liveChartsUpdated = "2026-08-25";
  
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
            "country": "OM",
            "name": "Oman",
            "position": 3,
            "movement": 1
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 10,
            "movement": 0
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 10,
            "movement": 11
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 10,
            "movement": 1
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 11,
            "movement": 6
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 13,
            "movement": 2
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 13,
            "movement": 2
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 13,
            "movement": 4
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 13,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 13,
            "movement": 2
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 14,
            "movement": 12
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 14,
            "movement": 10
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 14,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 15,
            "movement": 1
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 16,
            "movement": 2
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 20,
            "movement": 37
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 21,
            "movement": 30
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 22,
            "movement": -4
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 24,
            "movement": -6
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 24,
            "movement": -1
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 24,
            "movement": 6
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 27,
            "movement": 37
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 28,
            "movement": -3
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 28,
            "movement": 19
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 29,
            "movement": 2
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 31,
            "movement": 3
          },
          {
            "country": "MN",
            "name": "Mongolia",
            "position": 32,
            "movement": -1
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 33,
            "movement": 27
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 34,
            "movement": 0
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 35,
            "movement": 2
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 35,
            "movement": -2
          },
          {
            "country": "LY",
            "name": "Libya",
            "position": 36,
            "movement": -9
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 39,
            "movement": -7
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 40,
            "movement": 27
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 42,
            "movement": -5
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 43,
            "movement": 6
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 45,
            "movement": 5
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 46,
            "movement": -4
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 46,
            "movement": -7
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 46,
            "movement": -5
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 47,
            "movement": -8
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 48,
            "movement": -6
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 48,
            "movement": 76
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 49,
            "movement": -23
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 52,
            "movement": 25
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 54,
            "movement": -7
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 54,
            "movement": 1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 54,
            "movement": -6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 54,
            "movement": -11
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 60,
            "movement": -24
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 60,
            "movement": -11
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 61,
            "movement": 0
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 62,
            "movement": 1
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 63,
            "movement": -11
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 67,
            "movement": 16
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 69,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 69,
            "movement": 1
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 71,
            "movement": -9
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 72,
            "movement": 9
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 73,
            "movement": 82
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 73,
            "movement": 7
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 74,
            "movement": -1
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 78,
            "movement": 18
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 79,
            "movement": -7
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 79,
            "movement": 1
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 84,
            "movement": 41
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 94,
            "movement": -17
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 101,
            "movement": 25
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 101,
            "movement": 28
          },
          {
            "country": "KH",
            "name": "Cambodia",
            "position": 102,
            "movement": -15
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 107,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 113,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BT",
            "name": "Bhutan",
            "position": 116,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 119,
            "movement": -32
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 122,
            "movement": -10
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 125,
            "movement": 2
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 126,
            "movement": -21
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 131,
            "movement": 17
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 146,
            "movement": -9
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 147,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 148,
            "movement": 7
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 148,
            "movement": 3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 156,
            "movement": 3
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 161,
            "movement": -1
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 163,
            "movement": 5
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 172,
            "movement": -63
          },
          {
            "country": "FR",
            "name": "France",
            "position": 173,
            "movement": 5
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 183,
            "movement": 10
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 192,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 194,
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
            "country": "MY",
            "name": "Malaysia",
            "position": 10,
            "movement": -1
          },
          {
            "country": "US",
            "name": "United States",
            "position": 14,
            "movement": -1
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 17,
            "movement": -1
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 20,
            "movement": -2
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 23,
            "movement": 1
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 23,
            "movement": -1
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 24,
            "movement": 0
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 26,
            "movement": -2
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 28,
            "movement": -5
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 32,
            "movement": 0
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 34,
            "movement": 0
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 37,
            "movement": -1
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 39,
            "movement": -1
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 43,
            "movement": 2
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 44,
            "movement": 1
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 49,
            "movement": -3
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 51,
            "movement": -2
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 57,
            "movement": -23
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 78,
            "movement": 5
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 86,
            "movement": 3
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 90,
            "movement": -2
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 95,
            "movement": -9
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 103,
            "movement": -1
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 108,
            "movement": -2
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 109,
            "movement": -4
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 111,
            "movement": -10
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 112,
            "movement": 1
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 113,
            "movement": -3
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 115,
            "movement": -13
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 115,
            "movement": 12
          },
          {
            "country": "FR",
            "name": "France",
            "position": 117,
            "movement": 10
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 117,
            "movement": -2
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 117,
            "movement": 4
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 117,
            "movement": -2
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 120,
            "movement": 8
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 121,
            "movement": -3
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 127,
            "movement": 11
          },
          {
            "country": "VE",
            "name": "Venezuela",
            "position": 143,
            "movement": -1
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 148,
            "movement": 2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 150,
            "movement": 9
          },
          {
            "country": "IN",
            "name": "India",
            "position": 151,
            "movement": 8
          },
          {
            "country": "VN",
            "name": "Vietnam",
            "position": 157,
            "movement": 16
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 160,
            "movement": -9
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 170,
            "movement": -12
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 171,
            "movement": -1
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 176,
            "movement": 22
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 186,
            "movement": -10
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 190,
            "movement": -2
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 193,
            "movement": 1
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 198,
            "movement": -2
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
            "position": 12,
            "movement": -1
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 16,
            "movement": 4
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 24,
            "movement": -1
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 34,
            "movement": 6
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 39,
            "movement": 7
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 43,
            "movement": 5
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 46,
            "movement": -1
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 47,
            "movement": -6
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 52,
            "movement": 3
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 57,
            "movement": 10
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 63,
            "movement": 1
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 66,
            "movement": 8
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 73,
            "movement": 2
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 85,
            "movement": -6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 85,
            "movement": -3
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 88,
            "movement": 11
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 91,
            "movement": 5
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 98,
            "movement": 6
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 99,
            "movement": 21
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 101,
            "movement": 8
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 110,
            "movement": 32
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 123,
            "movement": 12
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 133,
            "movement": 6
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 141,
            "movement": 46
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 142,
            "movement": 13
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 147,
            "movement": -2
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 162,
            "movement": 36
          }
        ]
      },
      {
        "platform": "YouTube",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 14,
            "movement": -3
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 15,
            "movement": -3
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 20,
            "movement": -4
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 24,
            "movement": 2
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 24,
            "movement": -3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 28,
            "movement": -7
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 35,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 36,
            "movement": -5
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 37,
            "movement": -7
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 37,
            "movement": -9
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 38,
            "movement": -13
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 47,
            "movement": -9
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 47,
            "movement": -7
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 50,
            "movement": -2
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 6,
            "movement": -1
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 6,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IN",
            "name": "India",
            "position": 7,
            "movement": -2
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 15,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 29,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 46,
            "movement": -11
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 80,
            "movement": -10
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 81,
            "movement": -73
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 99,
            "movement": -60
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 131,
            "movement": -38
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 147,
            "movement": null,
            "status": "new"
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 151,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 177,
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
            "position": 18,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 27,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 33,
            "movement": -3
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 37,
            "movement": -1
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 43,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 70,
            "movement": -58
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 82,
            "movement": 7
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
            "position": 15,
            "movement": 1
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 21,
            "movement": 114
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 36,
            "movement": 7
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 42,
            "movement": 94
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 44,
            "movement": -19
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 47,
            "movement": 5
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 48,
            "movement": 3
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 49,
            "movement": -2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 57,
            "movement": 43
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 67,
            "movement": 2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 83,
            "movement": 7
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 84,
            "movement": 22
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 86,
            "movement": 14
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 104,
            "movement": 12
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 107,
            "movement": -44
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 125,
            "movement": -4
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 141,
            "movement": 22
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 144,
            "movement": -31
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 171,
            "movement": 2
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 172,
            "movement": -14
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 177,
            "movement": 8
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 180,
            "movement": -36
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 190,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 191,
            "movement": -5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 197,
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
            "position": 117,
            "movement": -6
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d1bd3da6698dd5eafc5b4514317039c4/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "For Broken Ears",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 52,
            "movement": 11
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 54,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 90,
            "movement": -7
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 107,
            "movement": -19
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 122,
            "movement": -37
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 133,
            "movement": -24
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 134,
            "movement": 28
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 138,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 138,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 146,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 149,
            "movement": -41
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 167,
            "movement": 19
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 174,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 183,
            "movement": -68
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 183,
            "movement": -105
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 194,
            "movement": -27
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 194,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 197,
            "movement": -87
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/53e9db9663c87b34723c17bcf9c2a8e8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Me & U",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 31,
            "movement": 124
          },
          {
            "country": "LY",
            "name": "Libya",
            "position": 84,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 99,
            "movement": null,
            "status": "new"
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 120,
            "movement": 17
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 128,
            "movement": 15
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 164,
            "movement": 11
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 165,
            "movement": 35
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 170,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 185,
            "movement": -89
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 185,
            "movement": -24
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 187,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
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
            "country": "MU",
            "name": "Mauritius",
            "position": 51,
            "movement": -3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 187,
            "movement": -36
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
            "position": 178,
            "movement": -5
          }
        ]
      },
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "IL",
            "name": "Israel",
            "position": 142,
            "movement": -4
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/21ffdcad2bde4b25ba9a5a3a53193b05/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Free Mind",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 59,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 86,
            "movement": 33
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 101,
            "movement": -16
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 117,
            "movement": 29
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 129,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 137,
            "movement": 29
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 140,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 167,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 173,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 181,
            "movement": -5
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 195,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZA",
            "name": "South Africa",
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
            "position": 70,
            "movement": -31
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/53e9db9663c87b34723c17bcf9c2a8e8/500x500-000000-80-0-0.jpg"
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
            "position": 6,
            "movement": -1
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 66,
            "movement": 5
          },
          {
            "country": "US",
            "name": "United States",
            "position": 116,
            "movement": -8
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 149,
            "movement": 19
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 193,
            "movement": -23
          },
          {
            "country": "BB",
            "name": "Barbados",
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
            "country": "PH",
            "name": "Philippines",
            "position": 180,
            "movement": null,
            "status": "new"
          },
          {
            "country": "US",
            "name": "United States",
            "position": 190,
            "movement": -2
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
            "position": 34,
            "movement": 0
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
            "movement": 3
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
            "country": "FJ",
            "name": "Fiji",
            "position": 34,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 135,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 140,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 151,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 152,
            "movement": 25
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 169,
            "movement": -95
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 173,
            "movement": -69
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 178,
            "movement": 8
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
            "country": "DZ",
            "name": "Algeria",
            "position": 6,
            "movement": -5
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 101,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 113,
            "movement": 9
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 167,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 187,
            "movement": -19
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 198,
            "movement": -97
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/584f40f4d2b62b611a7ab8561b656ff3/500x500-000000-80-0-0.jpg"
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
            "position": 7,
            "movement": 0
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 26,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 86,
            "movement": 7
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 191,
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
            "position": 189,
            "movement": 7
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ee712ec0084d50159ae6564de833ce12/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Damages",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 139,
            "movement": -105
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 158,
            "movement": -22
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 163,
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
    "title": "Isaka II",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 132,
            "movement": 21
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
            "position": 194,
            "movement": -25
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d015c74bed325b8928343913858fb3c2/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "If Orange Was A Place",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "DM",
            "name": "Dominica",
            "position": 16,
            "movement": 18
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 192,
            "movement": -104
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b3aea8ba7c55e2eafd6672ff29668bdb/500x500-000000-80-0-0.jpg"
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
            "position": 10,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/0989302f2acc1132d8922b3f292abe4b/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Higher",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 79,
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
    "title": "Fountains",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 71,
            "movement": 2
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ea8f80f2edb20885ac8aed8751716794/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Bunce Road Blues",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 131,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Love Me JeJe",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 157,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4bfd7acfa6aaa14c1497f19aeb5a0536/500x500-000000-80-0-0.jpg"
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
            "position": 155,
            "movement": -2
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
            "position": 55,
            "movement": 0
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
            "position": 84,
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
  