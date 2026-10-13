// GENERATED FILE — do not edit by hand.
  // Rebuilt several times a day by scripts/build-live-charts.mjs --artist=tems from kworb's artist page.
  //
  // PLATFORM chart data for Tems: where each release is sitting RIGHT
  // NOW on Spotify, Apple Music, iTunes, Deezer, Shazam and YouTube country
  // charts. This is not official-chart data — the official national peaks that
  // feed the site's headline totals live elsewhere, and the two are kept apart
  // on purpose.
  
  import { countriesOf } from "../lib/liveChartMeta";
  
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
  export const liveChartsUpdated = "2026-10-13";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-10-13T14:17Z";
  
  /** Every platform represented in the current snapshot. */
  export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","Spotify Albums","YouTube","iTunes"];
  
  export const liveCharts: LiveRelease[] = [
  {
    "title": "Raindance",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "QA",
            "name": "Qatar",
            "position": 11,
            "movement": 5
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 13,
            "movement": 26
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 13,
            "movement": -5
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 14,
            "movement": -3
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 15,
            "movement": 17
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 15,
            "movement": 1
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 17,
            "movement": 1
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 19,
            "movement": 6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 20,
            "movement": 3
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 21,
            "movement": -1
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 22,
            "movement": 4
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 24,
            "movement": 13
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 26,
            "movement": -1
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 26,
            "movement": -4
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 28,
            "movement": 10
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 28,
            "movement": 8
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 29,
            "movement": 12
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 30,
            "movement": -14
          },
          {
            "country": "MN",
            "name": "Mongolia",
            "position": 31,
            "movement": 0
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 31,
            "movement": 1
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 32,
            "movement": 14
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 32,
            "movement": 3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 35,
            "movement": 1
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 37,
            "movement": 52
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 37,
            "movement": 21
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 37,
            "movement": 5
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 38,
            "movement": 25
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 40,
            "movement": -15
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 40,
            "movement": -2
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 41,
            "movement": 10
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 41,
            "movement": 8
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 41,
            "movement": -13
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 42,
            "movement": -5
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 42,
            "movement": 17
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 42,
            "movement": 7
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 43,
            "movement": -16
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 44,
            "movement": -6
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 46,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 51,
            "movement": 5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 53,
            "movement": 2
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 54,
            "movement": 12
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 55,
            "movement": -1
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 62,
            "movement": 3
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 63,
            "movement": 19
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 63,
            "movement": 11
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 63,
            "movement": 20
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 65,
            "movement": 71
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 66,
            "movement": 12
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 67,
            "movement": -13
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 67,
            "movement": -15
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 68,
            "movement": 12
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 68,
            "movement": -7
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 68,
            "movement": 73
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 79,
            "movement": 0
          },
          {
            "country": "KH",
            "name": "Cambodia",
            "position": 81,
            "movement": 19
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 81,
            "movement": 3
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 83,
            "movement": -5
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 87,
            "movement": 93
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 92,
            "movement": -5
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 93,
            "movement": -8
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 100,
            "movement": 80
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 103,
            "movement": -6
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 104,
            "movement": 8
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 105,
            "movement": 61
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 114,
            "movement": 0
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 115,
            "movement": 21
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 118,
            "movement": 43
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 120,
            "movement": 8
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 120,
            "movement": -21
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 125,
            "movement": 16
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 135,
            "movement": 5
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 136,
            "movement": -2
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 137,
            "movement": 12
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 140,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 144,
            "movement": 30
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 149,
            "movement": -62
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 149,
            "movement": -93
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 157,
            "movement": 40
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 158,
            "movement": 2
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 160,
            "movement": -1
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 170,
            "movement": 7
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 170,
            "movement": -30
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 174,
            "movement": -8
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 175,
            "movement": 12
          },
          {
            "country": "MM",
            "name": "Myanmar",
            "position": 183,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 185,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 185,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 190,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 191,
            "movement": -91
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 199,
            "movement": -44
          }
        ]
      },
      {
        "platform": "Shazam",
        "numberOnes": 1,
        "entries": [
          {
            "country": "BR",
            "name": "Brazil",
            "position": 1,
            "movement": 0
          },
          {
            "country": "US",
            "name": "United States",
            "position": 4,
            "movement": 1
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 7,
            "movement": -1
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 7,
            "movement": 0
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 8,
            "movement": -1
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 8,
            "movement": 0
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 9,
            "movement": -1
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 12,
            "movement": -1
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 13,
            "movement": 1
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 14,
            "movement": -2
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 15,
            "movement": -2
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 15,
            "movement": -1
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 16,
            "movement": 0
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 16,
            "movement": -1
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 17,
            "movement": -4
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 18,
            "movement": -3
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 20,
            "movement": 0
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 21,
            "movement": -1
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 24,
            "movement": -5
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 24,
            "movement": -4
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 27,
            "movement": -2
          },
          {
            "country": "VE",
            "name": "Venezuela",
            "position": 27,
            "movement": -8
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 28,
            "movement": -5
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 29,
            "movement": -2
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 30,
            "movement": -5
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 32,
            "movement": -6
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 36,
            "movement": 0
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 38,
            "movement": -6
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 42,
            "movement": 5
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 43,
            "movement": -4
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 45,
            "movement": -7
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 47,
            "movement": -11
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 48,
            "movement": -8
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 49,
            "movement": -9
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 52,
            "movement": -5
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 60,
            "movement": -6
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 62,
            "movement": -10
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 63,
            "movement": -7
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 64,
            "movement": -9
          },
          {
            "country": "FR",
            "name": "France",
            "position": 64,
            "movement": -4
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 65,
            "movement": -10
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 66,
            "movement": -12
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 68,
            "movement": -5
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 70,
            "movement": -8
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 74,
            "movement": -7
          },
          {
            "country": "CN",
            "name": "China",
            "position": 76,
            "movement": -5
          },
          {
            "country": "IN",
            "name": "India",
            "position": 78,
            "movement": -4
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 80,
            "movement": -6
          },
          {
            "country": "VN",
            "name": "Vietnam",
            "position": 85,
            "movement": -11
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 94,
            "movement": -5
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 102,
            "movement": 0
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 104,
            "movement": -10
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 107,
            "movement": -8
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 113,
            "movement": -2
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 113,
            "movement": -12
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 116,
            "movement": -12
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 124,
            "movement": -10
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 131,
            "movement": -14
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
            "position": 14,
            "movement": 0
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 16,
            "movement": 0
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 19,
            "movement": -2
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 28,
            "movement": 1
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 36,
            "movement": -7
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 41,
            "movement": -1
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 41,
            "movement": 6
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 43,
            "movement": 0
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 49,
            "movement": 17
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 49,
            "movement": -1
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 51,
            "movement": 3
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 58,
            "movement": -5
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 68,
            "movement": 2
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 73,
            "movement": -4
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 74,
            "movement": -3
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 83,
            "movement": 6
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 85,
            "movement": -15
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 86,
            "movement": -4
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 89,
            "movement": 4
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 91,
            "movement": 2
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 91,
            "movement": 5
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 95,
            "movement": 6
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 99,
            "movement": 3
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 100,
            "movement": 7
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 104,
            "movement": -2
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 133,
            "movement": 6
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 138,
            "movement": -14
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 145,
            "movement": 4
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 154,
            "movement": -20
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 174,
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
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 8,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 8,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 37,
            "movement": 71
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 50,
            "movement": -5
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 51,
            "movement": -10
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 61,
            "movement": -40
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 69,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 87,
            "movement": -15
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 87,
            "movement": -23
          },
          {
            "country": "BN",
            "name": "Brunei Darussalam",
            "position": 97,
            "movement": -13
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 126,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IN",
            "name": "India",
            "position": 131,
            "movement": -114
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 168,
            "movement": -148
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 199,
            "movement": -121
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
            "position": 12,
            "movement": 0
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 14,
            "movement": 0
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 20,
            "movement": -3
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 28,
            "movement": 1
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 28,
            "movement": 6
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 32,
            "movement": 6
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 33,
            "movement": 7
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 33,
            "movement": 2
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 34,
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 36,
            "movement": 7
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 38,
            "movement": -3
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 43,
            "movement": 4
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
            "position": 19,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 31,
            "movement": 4
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 35,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 72,
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
            "position": 13,
            "movement": -2
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 20,
            "movement": 10
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 34,
            "movement": -14
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 36,
            "movement": 53
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 51,
            "movement": 4
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 59,
            "movement": 6
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 67,
            "movement": 44
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 75,
            "movement": 3
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 78,
            "movement": 54
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 78,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 80,
            "movement": 5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 94,
            "movement": 8
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 95,
            "movement": 30
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 101,
            "movement": 71
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 102,
            "movement": 15
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 111,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 118,
            "movement": 22
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 123,
            "movement": -8
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 123,
            "movement": 19
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 130,
            "movement": -24
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 138,
            "movement": 49
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 148,
            "movement": 19
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 165,
            "movement": 3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 184,
            "movement": 13
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 185,
            "movement": 9
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 192,
            "movement": -39
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 193,
            "movement": -25
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d1bd3da6698dd5eafc5b4514317039c4/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Hold On",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "US",
            "name": "United States",
            "position": 12,
            "movement": -5
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 23,
            "movement": -1
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 26,
            "movement": -2
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 29,
            "movement": -8
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 32,
            "movement": -7
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 33,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 37,
            "movement": -15
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 46,
            "movement": -4
          },
          {
            "country": "FR",
            "name": "France",
            "position": 51,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 55,
            "movement": -14
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 63,
            "movement": -1
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 72,
            "movement": -7
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 74,
            "movement": -23
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 77,
            "movement": -18
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 79,
            "movement": -5
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 84,
            "movement": -4
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 102,
            "movement": -13
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 113,
            "movement": -19
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 115,
            "movement": -14
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 119,
            "movement": -32
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 120,
            "movement": -9
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 128,
            "movement": -31
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 147,
            "movement": -4
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 152,
            "movement": -18
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 169,
            "movement": -20
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
            "position": 45,
            "movement": -10
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/aeeee8ad4c59f8b6440d19006f0f06e7/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Born in the Wild",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BZ",
            "name": "Belize",
            "position": 4,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 31,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 112,
            "movement": -64
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 126,
            "movement": 16
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 135,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 140,
            "movement": -54
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 150,
            "movement": -26
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 155,
            "movement": -50
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 173,
            "movement": -33
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 181,
            "movement": -41
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 186,
            "movement": 12
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 194,
            "movement": null,
            "status": "new"
          }
        ]
      },
      {
        "platform": "Spotify Albums",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 86,
            "movement": -12
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 163,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/66c0e3ff739ce671cee90fea6eb1047c/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Me & U",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 68,
            "movement": 15
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 88,
            "movement": 20
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 131,
            "movement": 50
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 169,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 169,
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
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 47,
            "movement": -6
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 70,
            "movement": -2
          }
        ]
      },
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 75,
            "movement": -2
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 178,
            "movement": -38
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
            "position": 182,
            "movement": 3
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
            "position": 6,
            "movement": 1
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 15,
            "movement": 182
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 73,
            "movement": 18
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 101,
            "movement": -7
          },
          {
            "country": "US",
            "name": "United States",
            "position": 122,
            "movement": -17
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 188,
            "movement": -13
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
            "position": 4,
            "movement": -1
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
            "position": 45,
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
            "position": 9,
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
            "country": "US",
            "name": "United States",
            "position": 13,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
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
            "position": 130,
            "movement": 13
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 131,
            "movement": 35
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 132,
            "movement": 34
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 143,
            "movement": 1
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 147,
            "movement": 30
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 152,
            "movement": -9
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 157,
            "movement": -2
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 188,
            "movement": -67
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 197,
            "movement": -11
          }
        ]
      },
      {
        "platform": "Spotify Albums",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 140,
            "movement": -4
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
            "position": 55,
            "movement": 130
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 121,
            "movement": 64
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 160,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 163,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 171,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 179,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 181,
            "movement": -10
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 67,
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
            "position": 12,
            "movement": -5
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 52,
            "movement": -4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 79,
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
            "position": 186,
            "movement": -6
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 189,
            "movement": -51
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ee712ec0084d50159ae6564de833ce12/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Love Is A Kingdom",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SR",
            "name": "Suriname",
            "position": 9,
            "movement": 148
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 74,
            "movement": -19
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 144,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 159,
            "movement": -32
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/584f40f4d2b62b611a7ab8561b656ff3/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Black Panther: Wakanda Forever - Music From and Inspired By",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "DM",
            "name": "Dominica",
            "position": 142,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FJ",
            "name": "Fiji",
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
            "country": "BF",
            "name": "Burkina Faso",
            "position": 55,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6d416dc66a55cc8914425c365c1e7b74/500x500-000000-80-0-0.jpg"
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
            "position": 106,
            "movement": 0
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 74,
            "movement": -34
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ea8f80f2edb20885ac8aed8751716794/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Interference",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 4,
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
    "title": "Looku Looku",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 55,
            "movement": -34
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/8bdc17b8c3975562fbbb659adbfb1fac/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Burning",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 67,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/aeeee8ad4c59f8b6440d19006f0f06e7/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Live Life",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 85,
            "movement": -34
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/0971ad6a3336214c0c05c92448b2af65/500x500-000000-80-0-0.jpg"
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
            "position": 176,
            "movement": -6
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
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 100,
            "movement": -91
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/53e9db9663c87b34723c17bcf9c2a8e8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Big Daddy",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 183,
            "movement": -146
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/584f40f4d2b62b611a7ab8561b656ff3/500x500-000000-80-0-0.jpg"
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
            "position": 83,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b3aea8ba7c55e2eafd6672ff29668bdb/500x500-000000-80-0-0.jpg"
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
  // Counted by the site's own rule (app/lib/liveChartMeta.ts): kworb labels
  // Britain "UK" on five platforms and "GB" on Spotify's, and emits "WW" for
  // its worldwide chart. A raw code count claimed the UK twice and the world
  // as a nation — the share card said 151 countries where the page said 149.
  export const liveCountryCount = countriesOf(
    liveCharts.flatMap((r) => r.platforms.flatMap((p) => p.entries))
  );
  
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
  