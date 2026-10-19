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
    /** The snapshot date (ISO) this release first appeared on this board,
     *  carried from run to run. A new release's missing cover has a 7-day
     *  grace before it counts against the artwork floor (scripts/live-artists.mjs).
     *  "2026-01-01" means it was already here when the date began to be
     *  recorded (18 Oct 2026). Absent on a file whose covers are not resolved
     *  at build time. Bookkeeping only: the live-charts API leaves it out
     *  (withApiCountryCodes, app/lib/liveChartMeta.ts). */
    firstSeen?: string;
    platforms: LivePlatform[];
  }
  
  /** When this snapshot was taken (ISO date). */
  export const liveChartsUpdated = "2026-10-19";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-10-19T13:23Z";
  
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
            "country": "CV",
            "name": "Cape Verde",
            "position": 7,
            "movement": 29
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 7,
            "movement": 2
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 15,
            "movement": 3
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 16,
            "movement": 6
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 20,
            "movement": -4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 22,
            "movement": 2
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 23,
            "movement": -1
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 24,
            "movement": 13
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 24,
            "movement": -6
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 24,
            "movement": 4
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 24,
            "movement": 0
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 26,
            "movement": 0
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 27,
            "movement": -7
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 27,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 28,
            "movement": 14
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 28,
            "movement": -4
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 29,
            "movement": -2
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 31,
            "movement": -3
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 32,
            "movement": 91
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 33,
            "movement": 2
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 34,
            "movement": 37
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 36,
            "movement": -9
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 37,
            "movement": 15
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 39,
            "movement": 3
          },
          {
            "country": "MN",
            "name": "Mongolia",
            "position": 40,
            "movement": 0
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 42,
            "movement": 36
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 43,
            "movement": -5
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 46,
            "movement": -8
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 46,
            "movement": -4
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 47,
            "movement": 6
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 48,
            "movement": 118
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 51,
            "movement": -11
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 52,
            "movement": -3
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 52,
            "movement": 0
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 53,
            "movement": -12
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 57,
            "movement": -5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 59,
            "movement": -8
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 60,
            "movement": 7
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 64,
            "movement": -30
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 68,
            "movement": -16
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 72,
            "movement": -5
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 77,
            "movement": -12
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 78,
            "movement": -14
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 81,
            "movement": -5
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 81,
            "movement": 0
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 85,
            "movement": -2
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 87,
            "movement": 31
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 87,
            "movement": 7
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 89,
            "movement": -28
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 90,
            "movement": 19
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 90,
            "movement": -4
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 92,
            "movement": 0
          },
          {
            "country": "BN",
            "name": "Brunei Darussalam",
            "position": 93,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 95,
            "movement": -3
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 97,
            "movement": 42
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 103,
            "movement": -6
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 104,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 105,
            "movement": -3
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 106,
            "movement": -18
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 107,
            "movement": -4
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 107,
            "movement": 78
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 112,
            "movement": 2
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 112,
            "movement": -37
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 115,
            "movement": -13
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 116,
            "movement": -18
          },
          {
            "country": "LA",
            "name": "Laos",
            "position": 117,
            "movement": 67
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 124,
            "movement": -10
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 124,
            "movement": -11
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 130,
            "movement": -12
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 132,
            "movement": 16
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 135,
            "movement": 49
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 140,
            "movement": -25
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 143,
            "movement": 14
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 143,
            "movement": 55
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 147,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 148,
            "movement": -82
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 153,
            "movement": 17
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 153,
            "movement": 9
          },
          {
            "country": "KH",
            "name": "Cambodia",
            "position": 160,
            "movement": -33
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 165,
            "movement": 19
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 175,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 190,
            "movement": -44
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 191,
            "movement": -82
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 194,
            "movement": -31
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 196,
            "movement": -7
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
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BR",
            "name": "Brazil",
            "position": 8,
            "movement": -2
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 12,
            "movement": 0
          },
          {
            "country": "US",
            "name": "United States",
            "position": 13,
            "movement": 0
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 19,
            "movement": -2
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 21,
            "movement": -2
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 24,
            "movement": 0
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 28,
            "movement": -1
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 28,
            "movement": 0
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 29,
            "movement": -3
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 32,
            "movement": -1
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 33,
            "movement": -8
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 34,
            "movement": -8
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 35,
            "movement": 1
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 38,
            "movement": -4
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 40,
            "movement": -3
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 40,
            "movement": -4
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 43,
            "movement": -9
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 45,
            "movement": -10
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 54,
            "movement": 3
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 60,
            "movement": -8
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 62,
            "movement": 11
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 63,
            "movement": -10
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 65,
            "movement": -5
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 69,
            "movement": -7
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 70,
            "movement": -1
          },
          {
            "country": "FR",
            "name": "France",
            "position": 72,
            "movement": -6
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 73,
            "movement": 3
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 75,
            "movement": -13
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 77,
            "movement": -31
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 81,
            "movement": -7
          },
          {
            "country": "VE",
            "name": "Venezuela",
            "position": 86,
            "movement": -8
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 88,
            "movement": -12
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 89,
            "movement": -17
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 90,
            "movement": -8
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 100,
            "movement": -10
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 114,
            "movement": 5
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 117,
            "movement": 2
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 120,
            "movement": 16
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 122,
            "movement": -15
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 125,
            "movement": -1
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 125,
            "movement": -7
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 125,
            "movement": -10
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 134,
            "movement": -16
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 135,
            "movement": 1
          },
          {
            "country": "VN",
            "name": "Vietnam",
            "position": 135,
            "movement": 5
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 140,
            "movement": 35
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 140,
            "movement": -13
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 140,
            "movement": 10
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 152,
            "movement": -7
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 157,
            "movement": -14
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 163,
            "movement": -10
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 166,
            "movement": -22
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 176,
            "movement": -4
          },
          {
            "country": "CN",
            "name": "China",
            "position": 196,
            "movement": -17
          }
        ]
      },
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 23,
            "movement": 0
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 25,
            "movement": -4
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 34,
            "movement": 2
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 45,
            "movement": -2
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 46,
            "movement": -3
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 47,
            "movement": 0
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 54,
            "movement": -9
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 61,
            "movement": -12
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 62,
            "movement": 2
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 68,
            "movement": -5
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 71,
            "movement": 1
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 82,
            "movement": 0
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 98,
            "movement": 0
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 106,
            "movement": -2
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 110,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 110,
            "movement": 33
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 113,
            "movement": -5
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 126,
            "movement": -15
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 134,
            "movement": 1
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 137,
            "movement": -47
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 139,
            "movement": -10
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 146,
            "movement": -33
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 151,
            "movement": -15
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 167,
            "movement": 0
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 172,
            "movement": -25
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 172,
            "movement": -20
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 178,
            "movement": -29
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
            "position": 9,
            "movement": 3
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 13,
            "movement": -3
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 20,
            "movement": -3
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 27,
            "movement": -2
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 27,
            "movement": 0
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 27,
            "movement": -11
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 27,
            "movement": -4
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 30,
            "movement": -4
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 34,
            "movement": 0
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 36,
            "movement": -7
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 41,
            "movement": -7
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 42,
            "movement": -2
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 45,
            "movement": -7
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 47,
            "movement": 2
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 2,
            "movement": 73
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 4,
            "movement": 35
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 10,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 15,
            "movement": -11
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 17,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 17,
            "movement": -14
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 32,
            "movement": -17
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 34,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 43,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 65,
            "movement": -38
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 84,
            "movement": -12
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 193,
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
            "country": "TH",
            "name": "Thailand",
            "position": 32,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 55,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 58,
            "movement": 16
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 85,
            "movement": 12
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 95,
            "movement": null,
            "status": "new"
          },
          {
            "country": "JP",
            "name": "Japan",
            "position": 100,
            "movement": -62
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
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
            "position": 18,
            "movement": -3
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 24,
            "movement": -4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 42,
            "movement": -5
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 49,
            "movement": 4
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 54,
            "movement": 25
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 62,
            "movement": -10
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 79,
            "movement": 7
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 83,
            "movement": -11
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 104,
            "movement": 6
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 108,
            "movement": 22
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 110,
            "movement": 5
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 117,
            "movement": -42
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 118,
            "movement": 4
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 118,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 124,
            "movement": -55
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 150,
            "movement": -43
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 152,
            "movement": -5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 168,
            "movement": null,
            "status": "new"
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 169,
            "movement": 13
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 174,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 175,
            "movement": -98
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 178,
            "movement": 0
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 182,
            "movement": 5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 182,
            "movement": 16
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
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
            "position": 48,
            "movement": null,
            "status": "new"
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 105,
            "movement": 7
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 174,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 183,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 193,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 195,
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
            "country": "ID",
            "name": "Indonesia",
            "position": 61,
            "movement": 7
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 180,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 193,
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
            "position": 32,
            "movement": 66
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 60,
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
            "position": 193,
            "movement": -8
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
            "movement": -2
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
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
            "country": "BB",
            "name": "Barbados",
            "position": 77,
            "movement": -24
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 102,
            "movement": -17
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 129,
            "movement": 6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 131,
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
            "country": "LC",
            "name": "St. Lucia",
            "position": 171,
            "movement": -21
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 174,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 179,
            "movement": 5
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 190,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 190,
            "movement": -3
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
            "position": 87,
            "movement": -1
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
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/66c0e3ff739ce671cee90fea6eb1047c/500x500-000000-80-0-0.jpg"
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
            "position": 85,
            "movement": -26
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 88,
            "movement": -19
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 110,
            "movement": -29
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 126,
            "movement": -27
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 141,
            "movement": -29
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 142,
            "movement": -19
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 159,
            "movement": -47
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 166,
            "movement": -50
          },
          {
            "country": "FR",
            "name": "France",
            "position": 170,
            "movement": -34
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 190,
            "movement": -53
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/aeeee8ad4c59f8b6440d19006f0f06e7/500x500-000000-80-0-0.jpg"
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
            "position": 7,
            "movement": 6
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 44,
            "movement": 5
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 79,
            "movement": -24
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 132,
            "movement": null,
            "status": "new"
          },
          {
            "country": "US",
            "name": "United States",
            "position": 143,
            "movement": -17
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 181,
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
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 15,
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
            "position": 45,
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
            "position": 8,
            "movement": 2
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
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
            "country": "TZ",
            "name": "Tanzania",
            "position": 105,
            "movement": -9
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 106,
            "movement": 58
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 109,
            "movement": 77
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 128,
            "movement": 4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 153,
            "movement": 4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 169,
            "movement": -27
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 182,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 190,
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
            "position": 146,
            "movement": -6
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
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
            "position": 32,
            "movement": 0
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 40,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 76,
            "movement": 6
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
            "position": 195,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
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
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 79,
            "movement": -58
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 91,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 108,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 139,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
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
            "position": 110,
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
            "movement": 0
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6d416dc66a55cc8914425c365c1e7b74/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Free Mind",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SR",
            "name": "Suriname",
            "position": 43,
            "movement": 71
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/53e9db9663c87b34723c17bcf9c2a8e8/500x500-000000-80-0-0.jpg"
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
            "position": 61,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
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
            "position": 120,
            "movement": -21
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ea8f80f2edb20885ac8aed8751716794/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Higher",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "PH",
            "name": "Philippines",
            "position": 200,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-19",
    "cover": "https://cdn-images.dzcdn.net/images/cover/53e9db9663c87b34723c17bcf9c2a8e8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "I THINK YOU'RE SPECIAL",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 147,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-18",
    "cover": "https://cdn-images.dzcdn.net/images/cover/67541e55a567744d91f140a7d5bc1727/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "If Orange Was A Place",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MW",
            "name": "Malawi",
            "position": 183,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-10-18",
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
            "position": 83,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
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
  