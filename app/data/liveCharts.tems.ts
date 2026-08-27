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
  export const liveChartsUpdated = "2026-08-27";
  
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
            "position": 5,
            "movement": 0
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 5,
            "movement": 3
          },
          {
            "country": "BT",
            "name": "Bhutan",
            "position": 12,
            "movement": -6
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 12,
            "movement": 2
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 13,
            "movement": 0
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 14,
            "movement": 6
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 14,
            "movement": 4
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 15,
            "movement": 0
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 18,
            "movement": -1
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 18,
            "movement": 0
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 18,
            "movement": 12
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 20,
            "movement": 3
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 22,
            "movement": 1
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 24,
            "movement": 0
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 24,
            "movement": 0
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 25,
            "movement": -1
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 25,
            "movement": -1
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 26,
            "movement": -5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 27,
            "movement": 0
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 28,
            "movement": 2
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 28,
            "movement": -12
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 29,
            "movement": -7
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 30,
            "movement": 2
          },
          {
            "country": "MN",
            "name": "Mongolia",
            "position": 30,
            "movement": -1
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 31,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 33,
            "movement": 8
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 33,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 34,
            "movement": 10
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 34,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 34,
            "movement": -3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 36,
            "movement": 0
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 36,
            "movement": 1
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 37,
            "movement": -5
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 40,
            "movement": 2
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 41,
            "movement": 24
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 42,
            "movement": 15
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 44,
            "movement": 1
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 46,
            "movement": -34
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 46,
            "movement": 10
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 47,
            "movement": -1
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 48,
            "movement": -8
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 50,
            "movement": -1
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 50,
            "movement": 15
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 51,
            "movement": 60
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 51,
            "movement": 25
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 52,
            "movement": 0
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 52,
            "movement": -19
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 54,
            "movement": -9
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 60,
            "movement": 8
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 60,
            "movement": 1
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 61,
            "movement": -9
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 61,
            "movement": 6
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 62,
            "movement": -2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 64,
            "movement": -10
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 66,
            "movement": -12
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 69,
            "movement": 15
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 75,
            "movement": 1
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 79,
            "movement": -56
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 79,
            "movement": 12
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 81,
            "movement": -19
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 81,
            "movement": -19
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 83,
            "movement": 20
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 87,
            "movement": 65
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 88,
            "movement": 84
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 88,
            "movement": -24
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 88,
            "movement": -20
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 89,
            "movement": 4
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 91,
            "movement": 3
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 100,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 101,
            "movement": 2
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 101,
            "movement": -29
          },
          {
            "country": "KH",
            "name": "Cambodia",
            "position": 102,
            "movement": 60
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 102,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 110,
            "movement": -5
          },
          {
            "country": "LA",
            "name": "Laos",
            "position": 114,
            "movement": 8
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 118,
            "movement": -10
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 123,
            "movement": 13
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 124,
            "movement": 45
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 126,
            "movement": -13
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 128,
            "movement": -3
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 132,
            "movement": -13
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 137,
            "movement": 11
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 139,
            "movement": -75
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 151,
            "movement": 3
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 157,
            "movement": -46
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 163,
            "movement": -19
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 172,
            "movement": -21
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 173,
            "movement": -8
          },
          {
            "country": "FR",
            "name": "France",
            "position": 176,
            "movement": -1
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 187,
            "movement": 10
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 188,
            "movement": -4
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 193,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 194,
            "movement": null,
            "status": "new"
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 196,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 199,
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
            "position": 13,
            "movement": -1
          },
          {
            "country": "US",
            "name": "United States",
            "position": 16,
            "movement": 0
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 21,
            "movement": -1
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 22,
            "movement": 2
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 22,
            "movement": 2
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 22,
            "movement": 1
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 23,
            "movement": -1
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 24,
            "movement": 4
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 24,
            "movement": -1
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 34,
            "movement": -1
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 37,
            "movement": 1
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 38,
            "movement": -1
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 39,
            "movement": -3
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 42,
            "movement": 0
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 44,
            "movement": 2
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 46,
            "movement": -1
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 54,
            "movement": 1
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 64,
            "movement": 1
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 80,
            "movement": 7
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 82,
            "movement": 5
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 84,
            "movement": -9
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 86,
            "movement": 4
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 91,
            "movement": 11
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 93,
            "movement": 14
          },
          {
            "country": "FR",
            "name": "France",
            "position": 97,
            "movement": 7
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 100,
            "movement": 15
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 101,
            "movement": 7
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 105,
            "movement": -2
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 105,
            "movement": 7
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 106,
            "movement": 7
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 112,
            "movement": 3
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 115,
            "movement": 1
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 115,
            "movement": 0
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 126,
            "movement": 3
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 127,
            "movement": -15
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 130,
            "movement": 15
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 136,
            "movement": -1
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 145,
            "movement": 22
          },
          {
            "country": "VE",
            "name": "Venezuela",
            "position": 145,
            "movement": 9
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 148,
            "movement": -5
          },
          {
            "country": "IN",
            "name": "India",
            "position": 151,
            "movement": -1
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 161,
            "movement": -5
          },
          {
            "country": "VN",
            "name": "Vietnam",
            "position": 161,
            "movement": 2
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 165,
            "movement": 7
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 166,
            "movement": 31
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 178,
            "movement": -5
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 178,
            "movement": 10
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 180,
            "movement": 10
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 185,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 189,
            "movement": 6
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
            "position": 8,
            "movement": 0
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 12,
            "movement": 2
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 24,
            "movement": -2
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 31,
            "movement": 4
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 32,
            "movement": 0
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 38,
            "movement": -4
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 44,
            "movement": 2
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 47,
            "movement": -6
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 52,
            "movement": 9
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 58,
            "movement": -2
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 59,
            "movement": 4
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 60,
            "movement": -8
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 68,
            "movement": 3
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 77,
            "movement": -2
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 81,
            "movement": -5
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 87,
            "movement": -1
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 89,
            "movement": 7
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 93,
            "movement": 5
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 94,
            "movement": -4
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 100,
            "movement": -13
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 101,
            "movement": 7
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 105,
            "movement": -4
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 106,
            "movement": -8
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 111,
            "movement": -2
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 119,
            "movement": -5
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 131,
            "movement": 5
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 160,
            "movement": -26
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 183,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 192,
            "movement": -5
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 199,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 200,
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
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 2,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 2,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 5,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 5,
            "movement": -1
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 9,
            "movement": -3
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 29,
            "movement": -16
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 114,
            "movement": -97
          },
          {
            "country": "IN",
            "name": "India",
            "position": 115,
            "movement": -89
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 179,
            "movement": -9
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 183,
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
            "country": "PT",
            "name": "Portugal",
            "position": 10,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 36,
            "movement": 11
          },
          {
            "country": "SV",
            "name": "El Salvador",
            "position": 82,
            "movement": null,
            "status": "new"
          },
          {
            "country": "JP",
            "name": "Japan",
            "position": 96,
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
            "position": 22,
            "movement": 0
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 33,
            "movement": -5
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 33,
            "movement": -14
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 42,
            "movement": 65
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 43,
            "movement": -7
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 51,
            "movement": -4
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 51,
            "movement": 2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 53,
            "movement": -2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 61,
            "movement": -20
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 62,
            "movement": -8
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 64,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 65,
            "movement": -23
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 67,
            "movement": -26
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 79,
            "movement": -5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 80,
            "movement": -3
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 96,
            "movement": 10
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 97,
            "movement": -1
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 122,
            "movement": -8
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 129,
            "movement": -27
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 129,
            "movement": 32
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 137,
            "movement": 52
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 139,
            "movement": 25
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 143,
            "movement": 5
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 165,
            "movement": 7
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 180,
            "movement": -3
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 183,
            "movement": -20
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 183,
            "movement": null,
            "status": "new"
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 188,
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
            "position": 194,
            "movement": null,
            "status": "new"
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
            "country": "UG",
            "name": "Uganda",
            "position": 44,
            "movement": 26
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 121,
            "movement": 13
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 123,
            "movement": 51
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 128,
            "movement": -12
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 129,
            "movement": 32
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 135,
            "movement": 6
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 146,
            "movement": -38
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 158,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 164,
            "movement": null,
            "status": "new"
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 179,
            "movement": -24
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 182,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 185,
            "movement": -45
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 198,
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
            "position": 46,
            "movement": 7
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 49,
            "movement": 29
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 67,
            "movement": -43
          },
          {
            "country": "LY",
            "name": "Libya",
            "position": 111,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 165,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 172,
            "movement": 28
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 193,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 196,
            "movement": 1
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 2,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 75,
            "movement": -14
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 110,
            "movement": -97
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
            "position": 159,
            "movement": -30
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
            "position": 188,
            "movement": -46
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
            "country": "LC",
            "name": "St. Lucia",
            "position": 85,
            "movement": 5
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 97,
            "movement": 38
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 109,
            "movement": 25
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 129,
            "movement": 11
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 131,
            "movement": -12
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 145,
            "movement": -34
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 153,
            "movement": -7
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 180,
            "movement": 5
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 191,
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
    "title": "Love Is A Kingdom",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BB",
            "name": "Barbados",
            "position": 38,
            "movement": 13
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 65,
            "movement": 118
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 89,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 94,
            "movement": -78
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 121,
            "movement": 28
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 144,
            "movement": -106
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 152,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 164,
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
    "title": "What You Need",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 5,
            "movement": -3
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 64,
            "movement": 0
          },
          {
            "country": "US",
            "name": "United States",
            "position": 119,
            "movement": 5
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 154,
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
            "country": "BS",
            "name": "The Bahamas",
            "position": 3,
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
            "country": "US",
            "name": "United States",
            "position": 35,
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
    "title": "Essence",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 1,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 1,
            "movement": 86
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 7,
            "movement": 0
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 28,
            "movement": -2
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
            "position": 143,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
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
            "position": 193,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ee712ec0084d50159ae6564de833ce12/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Born in the Wild",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 77,
            "movement": 111
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 174,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 184,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 193,
            "movement": -7
          }
        ]
      }
    ],
    "kind": "album",
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
            "position": 95,
            "movement": 26
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 114,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 179,
            "movement": 21
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 116,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 139,
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
            "position": 93,
            "movement": 25
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d015c74bed325b8928343913858fb3c2/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Higher",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 133,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 190,
            "movement": -4
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
            "position": 96,
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
    "title": "If Orange Was A Place",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 42,
            "movement": -17
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 157,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 167,
            "movement": -88
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b3aea8ba7c55e2eafd6672ff29668bdb/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Black Panther: Wakanda Forever - Music From and Inspired By",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 166,
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
            "position": 54,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6d416dc66a55cc8914425c365c1e7b74/500x500-000000-80-0-0.jpg"
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
            "position": 5,
            "movement": 29
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/0989302f2acc1132d8922b3f292abe4b/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Love Me JeJe",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SN",
            "name": "Senegal",
            "position": 76,
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
    "title": "Fountains",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 96,
            "movement": 2
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ea8f80f2edb20885ac8aed8751716794/500x500-000000-80-0-0.jpg"
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
            "position": 158,
            "movement": 8
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/8e6a8bc36abf9401abf57794db386b13/500x500-000000-80-0-0.jpg"
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
  