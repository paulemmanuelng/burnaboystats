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
  export const liveChartsUpdated = "2026-09-16";
  
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
            "movement": 1
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 7,
            "movement": 7
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 8,
            "movement": 1
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 10,
            "movement": 0
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 12,
            "movement": 13
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 12,
            "movement": 11
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 13,
            "movement": 0
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 15,
            "movement": 2
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 17,
            "movement": 15
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 18,
            "movement": 5
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 19,
            "movement": 18
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 19,
            "movement": 5
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 19,
            "movement": 6
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 20,
            "movement": -5
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 21,
            "movement": 1
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 21,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 22,
            "movement": 1
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 23,
            "movement": -7
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 23,
            "movement": -3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 25,
            "movement": 79
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 27,
            "movement": 9
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 31,
            "movement": 8
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 32,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 32,
            "movement": 7
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 32,
            "movement": -11
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 34,
            "movement": 6
          },
          {
            "country": "MN",
            "name": "Mongolia",
            "position": 36,
            "movement": -9
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 36,
            "movement": 6
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 37,
            "movement": 36
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 39,
            "movement": 10
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 39,
            "movement": -1
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 39,
            "movement": 0
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 43,
            "movement": 7
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 45,
            "movement": -9
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 46,
            "movement": 22
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 46,
            "movement": 5
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 47,
            "movement": 16
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 47,
            "movement": 40
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 50,
            "movement": -16
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 52,
            "movement": 35
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 52,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 52,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 53,
            "movement": 14
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 56,
            "movement": -8
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 57,
            "movement": 5
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 58,
            "movement": 74
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 58,
            "movement": -9
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 58,
            "movement": 18
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 65,
            "movement": -33
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 66,
            "movement": 82
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 69,
            "movement": 79
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 70,
            "movement": -41
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 71,
            "movement": -10
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 74,
            "movement": 121
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 75,
            "movement": -7
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 76,
            "movement": 6
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 77,
            "movement": 4
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 78,
            "movement": 10
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 78,
            "movement": 35
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 79,
            "movement": 24
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 79,
            "movement": 2
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 84,
            "movement": -4
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 86,
            "movement": 28
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 90,
            "movement": -4
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 97,
            "movement": 2
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 101,
            "movement": -2
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 101,
            "movement": 16
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 103,
            "movement": 0
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 108,
            "movement": 19
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 112,
            "movement": 14
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 115,
            "movement": 26
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 122,
            "movement": 0
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 123,
            "movement": -40
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 128,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 130,
            "movement": -8
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 131,
            "movement": -12
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 131,
            "movement": 11
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 137,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 139,
            "movement": -2
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 140,
            "movement": -7
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 145,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 147,
            "movement": 1
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 148,
            "movement": 2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 151,
            "movement": -16
          },
          {
            "country": "KH",
            "name": "Cambodia",
            "position": 156,
            "movement": 4
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 171,
            "movement": 14
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 180,
            "movement": -91
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 184,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 184,
            "movement": -174
          },
          {
            "country": "FR",
            "name": "France",
            "position": 188,
            "movement": 8
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 190,
            "movement": -27
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 196,
            "movement": 0
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 199,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 200,
            "movement": 0
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
            "position": 20,
            "movement": 9
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 22,
            "movement": 1
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
            "country": "GR",
            "name": "Greece",
            "position": 49,
            "movement": -26
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 54,
            "movement": -8
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 57,
            "movement": -25
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 60,
            "movement": -19
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 65,
            "movement": 0
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 74,
            "movement": 33
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 75,
            "movement": -30
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 82,
            "movement": -6
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 91,
            "movement": -12
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 93,
            "movement": 2
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 96,
            "movement": 5
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
            "movement": 17
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 135,
            "movement": -69
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
            "country": "BE",
            "name": "Belgium",
            "position": 143,
            "movement": -47
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 143,
            "movement": 13
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
            "country": "IT",
            "name": "Italy",
            "position": 166,
            "movement": -68
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 176,
            "movement": -11
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 183,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 186,
            "movement": -71
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 187,
            "movement": -64
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 188,
            "movement": 11
          },
          {
            "country": "VN",
            "name": "Vietnam",
            "position": 190,
            "movement": null,
            "status": "new"
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
            "position": 200,
            "movement": -69
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
            "country": "LU",
            "name": "Luxembourg",
            "position": 11,
            "movement": 1
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 12,
            "movement": 2
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 22,
            "movement": 15
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 26,
            "movement": 4
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 27,
            "movement": 11
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 34,
            "movement": 7
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 39,
            "movement": 10
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 44,
            "movement": 4
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 47,
            "movement": 4
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 49,
            "movement": 49
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 50,
            "movement": -13
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 56,
            "movement": 11
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 59,
            "movement": 0
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 64,
            "movement": 14
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 64,
            "movement": -5
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 68,
            "movement": 10
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 80,
            "movement": 15
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 80,
            "movement": -4
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 81,
            "movement": 16
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 81,
            "movement": 1
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 83,
            "movement": -7
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 85,
            "movement": 17
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 86,
            "movement": 14
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 94,
            "movement": 15
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 106,
            "movement": 19
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 108,
            "movement": -9
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 136,
            "movement": 23
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 161,
            "movement": 22
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 163,
            "movement": 13
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 195,
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
            "movement": 0
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 12,
            "movement": 2
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 19,
            "movement": null,
            "status": "re"
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 28,
            "movement": 9
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 31,
            "movement": 4
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 32,
            "movement": 1
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 32,
            "movement": 8
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 32,
            "movement": 6
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 33,
            "movement": 13
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 37,
            "movement": 7
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 38,
            "movement": null,
            "status": "re"
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 41,
            "movement": null,
            "status": "re"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 44,
            "movement": null,
            "status": "re"
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 46,
            "movement": null,
            "status": "re"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 47,
            "movement": null,
            "status": "re"
          },
          {
            "country": "US",
            "name": "United States",
            "position": 86,
            "movement": null,
            "status": "re"
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 2,
        "entries": [
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 1,
            "movement": 11
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 1,
            "movement": 78
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 3,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 10,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IN",
            "name": "India",
            "position": 22,
            "movement": 51
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 27,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 35,
            "movement": -6
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 35,
            "movement": -8
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 43,
            "movement": -30
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 54,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 65,
            "movement": 109
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 86,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 113,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 115,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 118,
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
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 5,
            "movement": 49
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 20,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 35,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 88,
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
            "country": "SR",
            "name": "Suriname",
            "position": 14,
            "movement": 26
          },
          {
            "country": "US",
            "name": "United States",
            "position": 16,
            "movement": 3
          },
          {
            "country": "BT",
            "name": "Bhutan",
            "position": 20,
            "movement": 109
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 35,
            "movement": 13
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 36,
            "movement": 18
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 41,
            "movement": 7
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 42,
            "movement": -6
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 45,
            "movement": 19
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 47,
            "movement": 29
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 50,
            "movement": 2
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 54,
            "movement": 26
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 58,
            "movement": 19
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 67,
            "movement": -20
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 79,
            "movement": -40
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 80,
            "movement": 13
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 86,
            "movement": 15
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 88,
            "movement": 19
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 118,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 128,
            "movement": -65
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 133,
            "movement": -11
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 139,
            "movement": null,
            "status": "new"
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 148,
            "movement": -3
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 150,
            "movement": -4
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 151,
            "movement": 6
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 152,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 157,
            "movement": 2
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 164,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 171,
            "movement": -43
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 183,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 185,
            "movement": 6
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 193,
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
            "position": 165,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 166,
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
            "position": 150,
            "movement": -15
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
            "position": 83,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 105,
            "movement": -12
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 123,
            "movement": -4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 176,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 188,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 189,
            "movement": -74
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 190,
            "movement": -74
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 191,
            "movement": -86
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 193,
            "movement": 5
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
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 115,
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
            "position": 107,
            "movement": 64
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
            "movement": 0
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
            "country": "LY",
            "name": "Libya",
            "position": 82,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 84,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 101,
            "movement": -62
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 125,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 137,
            "movement": 46
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 139,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 142,
            "movement": 16
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 147,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 157,
            "movement": 18
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 165,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 170,
            "movement": -3
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 181,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 193,
            "movement": -16
          }
        ]
      }
    ],
    "kind": "album",
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
            "position": 26,
            "movement": -2
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 43,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 64,
            "movement": 4
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 98,
            "movement": null,
            "status": "new"
          },
          {
            "country": "US",
            "name": "United States",
            "position": 120,
            "movement": -6
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 141,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 166,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 186,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 194,
            "movement": 3
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
            "position": 7,
            "movement": -6
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
    "title": "Love Is A Kingdom",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 141,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 170,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 172,
            "movement": -11
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 177,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 193,
            "movement": -15
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 198,
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
    "title": "Born in the Wild",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 115,
            "movement": -5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 122,
            "movement": 64
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 131,
            "movement": 56
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 166,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 167,
            "movement": 30
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/66c0e3ff739ce671cee90fea6eb1047c/500x500-000000-80-0-0.jpg"
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
            "position": 133,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 166,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 185,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 195,
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
    "title": "Essence",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 14,
            "movement": 0
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 32,
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
            "position": 155,
            "movement": 9
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
            "country": "LR",
            "name": "Liberia",
            "position": 157,
            "movement": 43
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 168,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LY",
            "name": "Libya",
            "position": 177,
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
    "title": "Found",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LY",
            "name": "Libya",
            "position": 87,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 165,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b3aea8ba7c55e2eafd6672ff29668bdb/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Replay",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LY",
            "name": "Libya",
            "position": 89,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b3aea8ba7c55e2eafd6672ff29668bdb/500x500-000000-80-0-0.jpg"
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
            "position": 120,
            "movement": 7
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
            "position": 87,
            "movement": 14
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ea8f80f2edb20885ac8aed8751716794/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Crazy Tings",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 148,
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
    "title": "Ordinary People",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 182,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/1adb08918cf6abd499a3c41e2093b5d2/500x500-000000-80-0-0.jpg"
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
            "position": 106,
            "movement": -17
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/584f40f4d2b62b611a7ab8561b656ff3/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "If Orange Was A Place",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LY",
            "name": "Libya",
            "position": 42,
            "movement": null,
            "status": "new"
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
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 56,
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
            "position": 86,
            "movement": 2
          }
        ]
      }
    ],
    "kind": "album"
  },
  {
    "title": "Try Me",
    "platforms": [],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/0989302f2acc1132d8922b3f292abe4b/500x500-000000-80-0-0.jpg"
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
  