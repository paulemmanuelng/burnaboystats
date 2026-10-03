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
  export const liveChartsUpdated = "2026-10-03";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-10-03T11:43Z";
  
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
            "position": 3,
            "movement": 2
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 9,
            "movement": -5
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 12,
            "movement": 12
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 12,
            "movement": -2
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 16,
            "movement": 8
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 17,
            "movement": -1
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 18,
            "movement": 38
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 18,
            "movement": -7
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 18,
            "movement": 1
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 19,
            "movement": -1
          },
          {
            "country": "MN",
            "name": "Mongolia",
            "position": 19,
            "movement": 10
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 20,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 22,
            "movement": -4
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 23,
            "movement": 6
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 24,
            "movement": -5
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 25,
            "movement": 29
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 26,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 26,
            "movement": 3
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 27,
            "movement": 16
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 28,
            "movement": -11
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 30,
            "movement": 0
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 31,
            "movement": -5
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 31,
            "movement": -3
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 32,
            "movement": 3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 33,
            "movement": -9
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 33,
            "movement": 100
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 35,
            "movement": -4
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 37,
            "movement": 55
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 40,
            "movement": -7
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 41,
            "movement": -13
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 41,
            "movement": -8
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 41,
            "movement": -15
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 42,
            "movement": 13
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 42,
            "movement": 30
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 43,
            "movement": 6
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 44,
            "movement": 3
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 47,
            "movement": 12
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 47,
            "movement": -14
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 48,
            "movement": -10
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 51,
            "movement": 29
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 57,
            "movement": -3
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 57,
            "movement": 2
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 58,
            "movement": 18
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 59,
            "movement": 10
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 59,
            "movement": -28
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 60,
            "movement": -11
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 61,
            "movement": 1
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 63,
            "movement": 3
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 67,
            "movement": -6
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 69,
            "movement": 10
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 70,
            "movement": 3
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 71,
            "movement": -12
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 72,
            "movement": 56
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 73,
            "movement": -2
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 77,
            "movement": -62
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 81,
            "movement": -11
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 85,
            "movement": -5
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 87,
            "movement": -19
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 87,
            "movement": -20
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 91,
            "movement": -21
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 93,
            "movement": -13
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 93,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 95,
            "movement": 6
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 105,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 106,
            "movement": -5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 108,
            "movement": -1
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 108,
            "movement": 6
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 110,
            "movement": -28
          },
          {
            "country": "BT",
            "name": "Bhutan",
            "position": 113,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 114,
            "movement": 5
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 114,
            "movement": 4
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 116,
            "movement": 2
          },
          {
            "country": "KH",
            "name": "Cambodia",
            "position": 118,
            "movement": 12
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 118,
            "movement": -7
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 125,
            "movement": 15
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 128,
            "movement": -23
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 129,
            "movement": -14
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 152,
            "movement": 8
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 152,
            "movement": 13
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 153,
            "movement": -42
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 157,
            "movement": -15
          },
          {
            "country": "LA",
            "name": "Laos",
            "position": 161,
            "movement": -21
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 162,
            "movement": -1
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 165,
            "movement": -45
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 167,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 173,
            "movement": -104
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 173,
            "movement": -18
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 178,
            "movement": 0
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 194,
            "movement": -11
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 195,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 197,
            "movement": -49
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
            "country": "MY",
            "name": "Malaysia",
            "position": 6,
            "movement": 2
          },
          {
            "country": "US",
            "name": "United States",
            "position": 6,
            "movement": 5
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 8,
            "movement": 5
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 11,
            "movement": 5
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 12,
            "movement": 3
          },
          {
            "country": "VE",
            "name": "Venezuela",
            "position": 12,
            "movement": 3
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 12,
            "movement": 1
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 13,
            "movement": 2
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 14,
            "movement": 1
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 15,
            "movement": 5
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 15,
            "movement": 2
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 18,
            "movement": 2
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 18,
            "movement": 3
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 20,
            "movement": 7
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 20,
            "movement": 12
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 21,
            "movement": 7
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 22,
            "movement": 11
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 22,
            "movement": 1
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 24,
            "movement": 4
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 24,
            "movement": 13
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 27,
            "movement": 8
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 27,
            "movement": 5
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 28,
            "movement": 8
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 31,
            "movement": 0
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 33,
            "movement": 4
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 33,
            "movement": 8
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 33,
            "movement": -1
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 34,
            "movement": 4
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 35,
            "movement": 7
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 37,
            "movement": 3
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 38,
            "movement": 10
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 47,
            "movement": 5
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 48,
            "movement": 5
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 49,
            "movement": 14
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 50,
            "movement": 9
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 50,
            "movement": 4
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 51,
            "movement": 7
          },
          {
            "country": "IN",
            "name": "India",
            "position": 51,
            "movement": 5
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 54,
            "movement": 10
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 57,
            "movement": 14
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 58,
            "movement": 20
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 61,
            "movement": 10
          },
          {
            "country": "FR",
            "name": "France",
            "position": 65,
            "movement": 21
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 67,
            "movement": 27
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 72,
            "movement": 12
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 76,
            "movement": 11
          },
          {
            "country": "VN",
            "name": "Vietnam",
            "position": 76,
            "movement": 9
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 77,
            "movement": 6
          },
          {
            "country": "CN",
            "name": "China",
            "position": 85,
            "movement": 11
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 85,
            "movement": 12
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 91,
            "movement": 35
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 102,
            "movement": 2
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 108,
            "movement": 10
          },
          {
            "country": "KR",
            "name": "South Korea",
            "position": 110,
            "movement": 19
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 113,
            "movement": 20
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 116,
            "movement": 59
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 143,
            "movement": 3
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 155,
            "movement": -6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 171,
            "movement": 28
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
            "position": 9,
            "movement": -1
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 15,
            "movement": 3
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 15,
            "movement": -1
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 21,
            "movement": 3
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 23,
            "movement": 0
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 28,
            "movement": -5
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 35,
            "movement": 0
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 38,
            "movement": -5
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 41,
            "movement": -5
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 41,
            "movement": 0
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 50,
            "movement": 8
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 50,
            "movement": 7
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 51,
            "movement": 8
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 57,
            "movement": 0
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 61,
            "movement": 2
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 62,
            "movement": 0
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 66,
            "movement": 3
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 66,
            "movement": 4
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 66,
            "movement": -1
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 67,
            "movement": 4
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 68,
            "movement": 5
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 71,
            "movement": -1
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 83,
            "movement": -10
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 89,
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 92,
            "movement": -9
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 101,
            "movement": -3
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 111,
            "movement": 10
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 116,
            "movement": -5
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 125,
            "movement": 3
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 134,
            "movement": 5
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 163,
            "movement": 21
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 172,
            "movement": 5
          },
          {
            "country": "PA",
            "name": "Panama",
            "position": 186,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 196,
            "movement": -4
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "AM",
            "name": "Armenia",
            "position": 2,
            "movement": 5
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 4,
            "movement": -3
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 5,
            "movement": -4
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 8,
            "movement": -7
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 9,
            "movement": null,
            "status": "new"
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 14,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IN",
            "name": "India",
            "position": 16,
            "movement": 21
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 44,
            "movement": null,
            "status": "new"
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 51,
            "movement": -37
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 58,
            "movement": -34
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 140,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 152,
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
            "position": 12,
            "movement": -1
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 14,
            "movement": -2
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 17,
            "movement": 0
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 29,
            "movement": 4
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 34,
            "movement": -1
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 35,
            "movement": -3
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 35,
            "movement": 1
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 36,
            "movement": -4
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 38,
            "movement": -1
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 40,
            "movement": -5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 43,
            "movement": -10
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 47,
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
            "position": 33,
            "movement": 29
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 42,
            "movement": 11
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 72,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 92,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 98,
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
            "country": "DM",
            "name": "Dominica",
            "position": 13,
            "movement": 69
          },
          {
            "country": "US",
            "name": "United States",
            "position": 15,
            "movement": 0
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 27,
            "movement": -3
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 28,
            "movement": -1
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 30,
            "movement": 24
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 35,
            "movement": 14
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 39,
            "movement": 10
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 50,
            "movement": -5
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 58,
            "movement": -19
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 58,
            "movement": -15
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 59,
            "movement": -21
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 62,
            "movement": -36
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 64,
            "movement": -12
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 94,
            "movement": 106
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 94,
            "movement": -5
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 97,
            "movement": -35
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 100,
            "movement": 31
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 102,
            "movement": -13
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 102,
            "movement": -21
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 113,
            "movement": -17
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 135,
            "movement": 9
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 145,
            "movement": 20
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 152,
            "movement": -50
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 156,
            "movement": 3
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 169,
            "movement": -6
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 171,
            "movement": -17
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 172,
            "movement": -50
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 175,
            "movement": -18
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 182,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 187,
            "movement": 6
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 188,
            "movement": 3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 191,
            "movement": -24
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
            "country": "SR",
            "name": "Suriname",
            "position": 10,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 93,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 113,
            "movement": -20
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 137,
            "movement": -9
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 150,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 152,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 181,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 192,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 196,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 198,
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
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 65,
            "movement": 9
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 73,
            "movement": 25
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 124,
            "movement": 51
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 132,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 151,
            "movement": 43
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 164,
            "movement": 0
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 173,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 195,
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
            "movement": 0
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 3,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KH",
            "name": "Cambodia",
            "position": 6,
            "movement": -5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 6,
            "movement": 102
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
            "position": 156,
            "movement": -24
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
            "position": 8,
            "movement": -1
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 23,
            "movement": 23
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 55,
            "movement": 3
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 97,
            "movement": null,
            "status": "new"
          },
          {
            "country": "US",
            "name": "United States",
            "position": 108,
            "movement": -8
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 175,
            "movement": -52
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 185,
            "movement": -9
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 197,
            "movement": -93
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 45,
            "movement": -4
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 49,
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
            "position": 46,
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
            "position": 13,
            "movement": -1
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
            "country": "BF",
            "name": "Burkina Faso",
            "position": 50,
            "movement": 3
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 90,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 114,
            "movement": 2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 119,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 128,
            "movement": -21
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 132,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 168,
            "movement": -59
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 171,
            "movement": -6
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 178,
            "movement": -59
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 183,
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
            "position": 136,
            "movement": -5
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/53e9db9663c87b34723c17bcf9c2a8e8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Born in the Wild",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "ML",
            "name": "Mali",
            "position": 60,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 94,
            "movement": 27
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 111,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 122,
            "movement": 54
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 129,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 192,
            "movement": -63
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
            "position": 74,
            "movement": 8
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 162,
            "movement": 1
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
            "country": "MZ",
            "name": "Mozambique",
            "position": 116,
            "movement": 14
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 122,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 158,
            "movement": -7
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 172,
            "movement": 20
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 182,
            "movement": -26
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/53e9db9663c87b34723c17bcf9c2a8e8/500x500-000000-80-0-0.jpg"
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
            "position": 132,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 162,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 170,
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
            "position": 57,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6d416dc66a55cc8914425c365c1e7b74/500x500-000000-80-0-0.jpg"
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
            "position": 29,
            "movement": -1
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
            "position": 190,
            "movement": -12
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
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 161,
            "movement": -12
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
            "position": 90,
            "movement": null,
            "status": "new"
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
            "country": "MV",
            "name": "Maldives",
            "position": 120,
            "movement": 25
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 170,
            "movement": -44
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
            "country": "DM",
            "name": "Dominica",
            "position": 105,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 112,
            "movement": -4
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ea8f80f2edb20885ac8aed8751716794/500x500-000000-80-0-0.jpg"
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
            "position": 109,
            "movement": 10
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 189,
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
    "title": "Love Me JeJe",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MV",
            "name": "Maldives",
            "position": 94,
            "movement": 65
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4bfd7acfa6aaa14c1497f19aeb5a0536/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Burning",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 64,
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
            "movement": 1
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
  