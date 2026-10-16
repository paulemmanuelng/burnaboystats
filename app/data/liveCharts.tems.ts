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
  export const liveChartsUpdated = "2026-10-15";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-10-15T21:27Z";
  
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
            "country": "OM",
            "name": "Oman",
            "position": 5,
            "movement": 5
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 8,
            "movement": 3
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 9,
            "movement": 2
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 15,
            "movement": 8
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 15,
            "movement": 0
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 17,
            "movement": 1
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 18,
            "movement": -3
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 20,
            "movement": 11
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 20,
            "movement": 10
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 20,
            "movement": 1
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 22,
            "movement": -11
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 22,
            "movement": 0
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 23,
            "movement": -2
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 23,
            "movement": 0
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 24,
            "movement": -2
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 24,
            "movement": 19
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 26,
            "movement": -2
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 28,
            "movement": 6
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 30,
            "movement": -4
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 31,
            "movement": 2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 31,
            "movement": 0
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 32,
            "movement": 4
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 34,
            "movement": -2
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 35,
            "movement": -7
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 36,
            "movement": -2
          },
          {
            "country": "MN",
            "name": "Mongolia",
            "position": 36,
            "movement": 0
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 36,
            "movement": 8
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 37,
            "movement": -5
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 39,
            "movement": 19
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 39,
            "movement": -19
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 40,
            "movement": -3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 40,
            "movement": -5
          },
          {
            "country": "BT",
            "name": "Bhutan",
            "position": 43,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 43,
            "movement": -5
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 43,
            "movement": 21
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 44,
            "movement": 9
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 44,
            "movement": -7
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 45,
            "movement": 4
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 45,
            "movement": -3
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 46,
            "movement": -8
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 49,
            "movement": -14
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 51,
            "movement": -11
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 52,
            "movement": 12
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 55,
            "movement": 25
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 59,
            "movement": 9
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 62,
            "movement": 75
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 63,
            "movement": 68
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 65,
            "movement": -3
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 66,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 68,
            "movement": -8
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 68,
            "movement": -21
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 69,
            "movement": 113
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 69,
            "movement": -9
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 69,
            "movement": 4
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 70,
            "movement": 7
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 70,
            "movement": 0
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 82,
            "movement": -1
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 82,
            "movement": 0
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 84,
            "movement": 14
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 84,
            "movement": 6
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 85,
            "movement": -2
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 85,
            "movement": -4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 88,
            "movement": 36
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 94,
            "movement": -8
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 96,
            "movement": 3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 103,
            "movement": -3
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 108,
            "movement": 12
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 116,
            "movement": 49
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 118,
            "movement": 23
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 118,
            "movement": -3
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 129,
            "movement": -20
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 131,
            "movement": 22
          },
          {
            "country": "KH",
            "name": "Cambodia",
            "position": 132,
            "movement": 40
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 138,
            "movement": 46
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 138,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 140,
            "movement": -3
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 150,
            "movement": -15
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 150,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 154,
            "movement": 25
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 155,
            "movement": -22
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 155,
            "movement": -12
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 157,
            "movement": -2
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 158,
            "movement": -9
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 160,
            "movement": 27
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 162,
            "movement": 5
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 165,
            "movement": -4
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 174,
            "movement": -59
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 185,
            "movement": -102
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 188,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 192,
            "movement": -3
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 199,
            "movement": -35
          }
        ]
      },
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BR",
            "name": "Brazil",
            "position": 3,
            "movement": -1
          },
          {
            "country": "US",
            "name": "United States",
            "position": 7,
            "movement": -2
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 9,
            "movement": -1
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 11,
            "movement": -4
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 12,
            "movement": -1
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 14,
            "movement": -3
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 15,
            "movement": -2
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 16,
            "movement": 1
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 17,
            "movement": -2
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 17,
            "movement": -2
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 18,
            "movement": -1
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 21,
            "movement": -2
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 22,
            "movement": -2
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 23,
            "movement": -6
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 24,
            "movement": -2
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 24,
            "movement": -7
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 24,
            "movement": -7
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 28,
            "movement": -4
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 29,
            "movement": -3
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 36,
            "movement": -10
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 40,
            "movement": -6
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 41,
            "movement": -5
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 43,
            "movement": -11
          },
          {
            "country": "VE",
            "name": "Venezuela",
            "position": 43,
            "movement": -10
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 46,
            "movement": -2
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 46,
            "movement": -7
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 46,
            "movement": -1
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 50,
            "movement": 0
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 51,
            "movement": -2
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 51,
            "movement": -10
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 56,
            "movement": -7
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 56,
            "movement": -4
          },
          {
            "country": "FR",
            "name": "France",
            "position": 61,
            "movement": 2
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 63,
            "movement": -17
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 65,
            "movement": -5
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 68,
            "movement": -1
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 74,
            "movement": -10
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 78,
            "movement": 1
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 79,
            "movement": -10
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 82,
            "movement": -3
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 83,
            "movement": -12
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 87,
            "movement": -15
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 94,
            "movement": -14
          },
          {
            "country": "VN",
            "name": "Vietnam",
            "position": 94,
            "movement": -1
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 98,
            "movement": -20
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 99,
            "movement": -3
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 102,
            "movement": -16
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 102,
            "movement": -11
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 104,
            "movement": -1
          },
          {
            "country": "CN",
            "name": "China",
            "position": 115,
            "movement": -27
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 116,
            "movement": -6
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 127,
            "movement": -1
          },
          {
            "country": "IN",
            "name": "India",
            "position": 128,
            "movement": -24
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 135,
            "movement": -16
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 136,
            "movement": 2
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 146,
            "movement": -17
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 151,
            "movement": -24
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 157,
            "movement": -7
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 192,
            "movement": 5
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
            "movement": 2
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 17,
            "movement": -3
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 23,
            "movement": -3
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 24,
            "movement": 1
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 32,
            "movement": -3
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 34,
            "movement": -1
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 43,
            "movement": -3
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 49,
            "movement": 17
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 54,
            "movement": -5
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 54,
            "movement": -2
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 57,
            "movement": -3
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 61,
            "movement": -3
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 62,
            "movement": 0
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 84,
            "movement": -6
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 85,
            "movement": -11
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 87,
            "movement": -7
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 90,
            "movement": -8
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 91,
            "movement": -3
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 92,
            "movement": -5
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 97,
            "movement": 1
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 98,
            "movement": -9
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 98,
            "movement": 10
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 103,
            "movement": 2
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 105,
            "movement": -4
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 106,
            "movement": -7
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 139,
            "movement": -12
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 141,
            "movement": -13
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 149,
            "movement": 0
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 165,
            "movement": -14
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 176,
            "movement": -7
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 189,
            "movement": -10
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
            "position": 10,
            "movement": 2
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 12,
            "movement": 2
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 16,
            "movement": 12
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 20,
            "movement": -3
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 23,
            "movement": 5
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 25,
            "movement": 9
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 26,
            "movement": 6
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 27,
            "movement": 6
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 29,
            "movement": 9
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 34,
            "movement": 2
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 34,
            "movement": -1
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 38,
            "movement": 5
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 39,
            "movement": null,
            "status": "re"
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 40,
            "movement": null,
            "status": "re"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 42,
            "movement": null,
            "status": "re"
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 49,
            "movement": null,
            "status": "re"
          },
          {
            "country": "US",
            "name": "United States",
            "position": 72,
            "movement": null,
            "status": "re"
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 94,
            "movement": null,
            "status": "re"
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 1,
        "entries": [
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 1,
            "movement": 0
          },
          {
            "country": "IN",
            "name": "India",
            "position": 10,
            "movement": 18
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 14,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 18,
            "movement": -14
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 20,
            "movement": -10
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 47,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 92,
            "movement": -14
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 94,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 101,
            "movement": -52
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 150,
            "movement": -52
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 152,
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
            "country": "JM",
            "name": "Jamaica",
            "position": 17,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 34,
            "movement": -17
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 60,
            "movement": 3
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 84,
            "movement": -50
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
            "position": 14,
            "movement": 0
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 17,
            "movement": 16
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 18,
            "movement": 1
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 19,
            "movement": 44
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 44,
            "movement": -6
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 45,
            "movement": 22
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 53,
            "movement": -7
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 58,
            "movement": 10
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 61,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 62,
            "movement": -14
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 69,
            "movement": -30
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 72,
            "movement": 12
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 73,
            "movement": 11
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 87,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 88,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 89,
            "movement": -2
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 91,
            "movement": -6
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 92,
            "movement": 15
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 110,
            "movement": 2
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 128,
            "movement": -3
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 146,
            "movement": -54
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 148,
            "movement": 0
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 153,
            "movement": -13
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 155,
            "movement": -7
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 159,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 182,
            "movement": 2
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 186,
            "movement": -27
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 190,
            "movement": -50
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 193,
            "movement": -26
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 195,
            "movement": -46
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
            "position": 22,
            "movement": -7
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 32,
            "movement": -4
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 40,
            "movement": -4
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 51,
            "movement": -10
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 54,
            "movement": -15
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 55,
            "movement": -7
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 55,
            "movement": -14
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 62,
            "movement": -15
          },
          {
            "country": "FR",
            "name": "France",
            "position": 73,
            "movement": -15
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 81,
            "movement": -12
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 102,
            "movement": -9
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 102,
            "movement": -29
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 104,
            "movement": -8
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 107,
            "movement": -21
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 117,
            "movement": -20
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 122,
            "movement": -14
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 124,
            "movement": -26
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 143,
            "movement": -20
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 173,
            "movement": -21
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 174,
            "movement": -27
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 176,
            "movement": -30
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 197,
            "movement": -54
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
            "position": 55,
            "movement": -2
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
            "country": "BB",
            "name": "Barbados",
            "position": 75,
            "movement": 57
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 76,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 84,
            "movement": 34
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 107,
            "movement": -79
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 109,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 157,
            "movement": -3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 166,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 168,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 169,
            "movement": -4
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 182,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 182,
            "movement": -107
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 184,
            "movement": -71
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
    "title": "What You Need",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 24,
            "movement": -10
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 71,
            "movement": -15
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 90,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 91,
            "movement": null,
            "status": "new"
          },
          {
            "country": "US",
            "name": "United States",
            "position": 117,
            "movement": 1
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
            "position": 6,
            "movement": -1
          },
          {
            "country": "US",
            "name": "United States",
            "position": 197,
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
            "country": "JM",
            "name": "Jamaica",
            "position": 38,
            "movement": 13
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 87,
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
            "position": 44,
            "movement": 2
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
            "movement": 3
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
            "country": "LR",
            "name": "Liberia",
            "position": 90,
            "movement": -21
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 95,
            "movement": 53
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 103,
            "movement": -58
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 112,
            "movement": 13
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 135,
            "movement": 59
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 150,
            "movement": -1
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 162,
            "movement": -39
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 174,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 177,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 182,
            "movement": -30
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
    "title": "Me & U",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SR",
            "name": "Suriname",
            "position": 25,
            "movement": 3
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 79,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 148,
            "movement": -50
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 174,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AO",
            "name": "Angola",
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
            "position": 116,
            "movement": -14
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
            "position": 70,
            "movement": 7
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/21ffdcad2bde4b25ba9a5a3a53193b05/500x500-000000-80-0-0.jpg"
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
            "position": 31,
            "movement": 0
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 40,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 78,
            "movement": 4
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
            "movement": 7
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 25,
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
    "title": "Love Is A Kingdom",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 82,
            "movement": 30
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 102,
            "movement": 89
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 142,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 186,
            "movement": -106
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 197,
            "movement": -170
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/584f40f4d2b62b611a7ab8561b656ff3/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Free Mind",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 164,
            "movement": -24
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 166,
            "movement": 16
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 197,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 197,
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
    "title": "Isaka II",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 171,
            "movement": -2
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 159,
            "movement": -102
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d015c74bed325b8928343913858fb3c2/500x500-000000-80-0-0.jpg"
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
            "position": 31,
            "movement": -10
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/53e9db9663c87b34723c17bcf9c2a8e8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Higher",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 112,
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
    "title": "Damages",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 126,
            "movement": -6
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
            "position": 102,
            "movement": 24
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
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 56,
            "movement": -2
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
            "position": 83,
            "movement": 0
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
  