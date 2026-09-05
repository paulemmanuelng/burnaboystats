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
  export const liveChartsUpdated = "2026-09-05";
  
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
            "movement": 2
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 7,
            "movement": 5
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 7,
            "movement": 0
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 8,
            "movement": -2
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 12,
            "movement": -1
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 13,
            "movement": -2
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 14,
            "movement": 0
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 14,
            "movement": 3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 15,
            "movement": 2
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 15,
            "movement": 2
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 16,
            "movement": 3
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 17,
            "movement": -8
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 17,
            "movement": -1
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 18,
            "movement": 0
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 19,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 19,
            "movement": 8
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 20,
            "movement": 4
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 24,
            "movement": 40
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 25,
            "movement": 1
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 27,
            "movement": 36
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 28,
            "movement": 1
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 28,
            "movement": -6
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 30,
            "movement": -1
          },
          {
            "country": "MN",
            "name": "Mongolia",
            "position": 32,
            "movement": 14
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 33,
            "movement": 11
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 33,
            "movement": 70
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 36,
            "movement": -5
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 36,
            "movement": 5
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 37,
            "movement": -5
          },
          {
            "country": "BT",
            "name": "Bhutan",
            "position": 38,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 40,
            "movement": 11
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 40,
            "movement": 14
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 41,
            "movement": -9
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 42,
            "movement": 11
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 42,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 44,
            "movement": -20
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 45,
            "movement": -14
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 46,
            "movement": -2
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 46,
            "movement": 34
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 48,
            "movement": -46
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 50,
            "movement": -2
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 53,
            "movement": -28
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 54,
            "movement": -23
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 54,
            "movement": -17
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 56,
            "movement": 15
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 57,
            "movement": -24
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 58,
            "movement": 17
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 58,
            "movement": 7
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 60,
            "movement": -10
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 61,
            "movement": -3
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 62,
            "movement": -4
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 66,
            "movement": -7
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 66,
            "movement": 6
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 67,
            "movement": -18
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 76,
            "movement": 21
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 80,
            "movement": -5
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 80,
            "movement": 18
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 83,
            "movement": -42
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 84,
            "movement": 12
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 85,
            "movement": 21
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 87,
            "movement": -6
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 87,
            "movement": -43
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 89,
            "movement": -1
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 90,
            "movement": -8
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 94,
            "movement": -46
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 97,
            "movement": -9
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 101,
            "movement": -11
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 102,
            "movement": 18
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 103,
            "movement": 10
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 105,
            "movement": -37
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 110,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 110,
            "movement": -5
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 110,
            "movement": 30
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 112,
            "movement": -64
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 112,
            "movement": 57
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 113,
            "movement": -4
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 115,
            "movement": -4
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 121,
            "movement": -2
          },
          {
            "country": "LA",
            "name": "Laos",
            "position": 121,
            "movement": 36
          },
          {
            "country": "KH",
            "name": "Cambodia",
            "position": 129,
            "movement": -13
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 131,
            "movement": -11
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 137,
            "movement": -24
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 143,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 148,
            "movement": -10
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 155,
            "movement": -20
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 166,
            "movement": -46
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 167,
            "movement": -12
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 167,
            "movement": -4
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 176,
            "movement": -50
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 180,
            "movement": -134
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 182,
            "movement": 3
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 191,
            "movement": -15
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 196,
            "movement": null,
            "status": "new"
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 199,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 199,
            "movement": -27
          },
          {
            "country": "FR",
            "name": "France",
            "position": 200,
            "movement": -16
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
            "country": "BR",
            "name": "Brazil",
            "position": 30,
            "movement": 2
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
            "position": 93,
            "movement": -7
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
            "position": 179,
            "movement": -14
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
            "country": "VE",
            "name": "Venezuela",
            "position": 194,
            "movement": null,
            "status": "new"
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
            "position": 8,
            "movement": -1
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 10,
            "movement": 0
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 12,
            "movement": 0
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 28,
            "movement": 1
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 30,
            "movement": -3
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 34,
            "movement": -2
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
            "movement": 4
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 47,
            "movement": -2
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 52,
            "movement": -2
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 65,
            "movement": 1
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 71,
            "movement": -5
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 73,
            "movement": -1
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 74,
            "movement": -12
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 74,
            "movement": -14
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 77,
            "movement": -1
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 80,
            "movement": -4
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 81,
            "movement": -11
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 83,
            "movement": -13
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 86,
            "movement": -12
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 87,
            "movement": -1
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 87,
            "movement": -8
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 97,
            "movement": 0
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 99,
            "movement": -5
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 99,
            "movement": 2
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 107,
            "movement": -5
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 136,
            "movement": -21
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 170,
            "movement": -1
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 179,
            "movement": 8
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 181,
            "movement": -24
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 198,
            "movement": 1
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
            "position": 14,
            "movement": 1
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 14,
            "movement": 0
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 20,
            "movement": 0
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 28,
            "movement": -4
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 31,
            "movement": -7
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 33,
            "movement": 3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 37,
            "movement": -9
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 38,
            "movement": 0
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 39,
            "movement": -2
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 39,
            "movement": -4
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 40,
            "movement": -3
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 47,
            "movement": 0
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 48,
            "movement": 2
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 48,
            "movement": -1
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 8,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 13,
            "movement": 50
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 23,
            "movement": -20
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 24,
            "movement": -15
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 50,
            "movement": -33
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 78,
            "movement": -32
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 88,
            "movement": 48
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 91,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 135,
            "movement": -20
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 138,
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
            "country": "MY",
            "name": "Malaysia",
            "position": 19,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 38,
            "movement": 39
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 62,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 84,
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
            "position": 10,
            "movement": 4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 46,
            "movement": 3
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 47,
            "movement": 22
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 47,
            "movement": -23
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 52,
            "movement": 59
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 56,
            "movement": 90
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 58,
            "movement": -18
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 59,
            "movement": -5
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 64,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 70,
            "movement": 14
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 70,
            "movement": 44
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 77,
            "movement": -24
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 95,
            "movement": -23
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 99,
            "movement": -24
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 100,
            "movement": -38
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 101,
            "movement": -27
          },
          {
            "country": "LY",
            "name": "Libya",
            "position": 102,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 105,
            "movement": -15
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 108,
            "movement": -25
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 111,
            "movement": -16
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 114,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 124,
            "movement": -36
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 132,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 145,
            "movement": 7
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 150,
            "movement": -26
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 152,
            "movement": -30
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 159,
            "movement": -1
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 160,
            "movement": -34
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 169,
            "movement": -6
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 170,
            "movement": -15
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 180,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 181,
            "movement": -6
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 182,
            "movement": 13
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
            "movement": -13
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
            "country": "CV",
            "name": "Cape Verde",
            "position": 57,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 66,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 108,
            "movement": -22
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 115,
            "movement": 28
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 132,
            "movement": 35
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 165,
            "movement": -7
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 167,
            "movement": -7
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 177,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 186,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 188,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 199,
            "movement": -45
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
            "position": 58,
            "movement": -12
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 78,
            "movement": -19
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 118,
            "movement": -20
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
            "position": 113,
            "movement": 8
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 48,
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
    "title": "For Broken Ears",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 112,
            "movement": -19
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 118,
            "movement": -71
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 119,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 128,
            "movement": -10
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 128,
            "movement": -48
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 145,
            "movement": 44
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 147,
            "movement": -31
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 156,
            "movement": 44
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 169,
            "movement": -23
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 177,
            "movement": -9
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 181,
            "movement": -99
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 193,
            "movement": -26
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
            "country": "CV",
            "name": "Cape Verde",
            "position": 129,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 144,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 148,
            "movement": -68
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 152,
            "movement": -38
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 182,
            "movement": -41
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 186,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
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
            "country": "DO",
            "name": "Dominican Republic",
            "position": 174,
            "movement": -17
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 60,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 67,
            "movement": 35
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 75,
            "movement": -41
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 118,
            "movement": -53
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 120,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 163,
            "movement": -35
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 169,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 197,
            "movement": -39
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
            "position": 4,
            "movement": 1
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 99,
            "movement": -45
          },
          {
            "country": "US",
            "name": "United States",
            "position": 101,
            "movement": 20
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 105,
            "movement": -16
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 166,
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
            "position": 10,
            "movement": 1
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
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 11,
            "movement": -1
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 21,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 56,
            "movement": -12
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
            "position": 198,
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
            "country": "TZ",
            "name": "Tanzania",
            "position": 112,
            "movement": 26
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 164,
            "movement": -64
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 166,
            "movement": -20
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/66c0e3ff739ce671cee90fea6eb1047c/500x500-000000-80-0-0.jpg"
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
            "position": 113,
            "movement": -10
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
            "position": 76,
            "movement": 16
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d015c74bed325b8928343913858fb3c2/500x500-000000-80-0-0.jpg"
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
            "position": 145,
            "movement": -2
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 196,
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
    "title": "Fountains",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 120,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 162,
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
    "title": "Black Panther: Wakanda Forever - Music From and Inspired By",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 79,
            "movement": -73
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
            "position": 43,
            "movement": -37
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/0989302f2acc1132d8922b3f292abe4b/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Crazy Tings",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 22,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3e59ce9bff06c58a3016b13aa83baac0/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Peace",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 179,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/0ab77cedad778572561963c96c5b6bdd/500x500-000000-80-0-0.jpg"
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
    "title": "If Orange Was A Place",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 39,
            "movement": -15
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b3aea8ba7c55e2eafd6672ff29668bdb/500x500-000000-80-0-0.jpg"
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
  