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
  export const liveChartsUpdated = "2026-10-18";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-10-18T15:55Z";
  
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
            "position": 9,
            "movement": -2
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 16,
            "movement": 15
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 18,
            "movement": 17
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 18,
            "movement": -4
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 20,
            "movement": 28
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 21,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 22,
            "movement": -1
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 22,
            "movement": -10
          },
          {
            "country": "BN",
            "name": "Brunei Darussalam",
            "position": 23,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 24,
            "movement": 11
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 24,
            "movement": 5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 24,
            "movement": -3
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 26,
            "movement": -3
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 27,
            "movement": -5
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 28,
            "movement": -5
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 28,
            "movement": -3
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 29,
            "movement": 1
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 34,
            "movement": 6
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 35,
            "movement": -3
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 36,
            "movement": -12
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 37,
            "movement": -14
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 38,
            "movement": -6
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 38,
            "movement": -1
          },
          {
            "country": "MN",
            "name": "Mongolia",
            "position": 40,
            "movement": -3
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 40,
            "movement": -1
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 41,
            "movement": 10
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 42,
            "movement": -9
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 42,
            "movement": -15
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 42,
            "movement": -17
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 49,
            "movement": -6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 51,
            "movement": 6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 52,
            "movement": 6
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 52,
            "movement": 5
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 52,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 52,
            "movement": -6
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 53,
            "movement": -6
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 60,
            "movement": -23
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 61,
            "movement": -17
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 65,
            "movement": 0
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 66,
            "movement": 32
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 67,
            "movement": -24
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 67,
            "movement": 11
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 71,
            "movement": -23
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 75,
            "movement": 15
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 75,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 76,
            "movement": -2
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 76,
            "movement": -6
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 78,
            "movement": 37
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 81,
            "movement": -7
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 83,
            "movement": 5
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 86,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 88,
            "movement": 69
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 92,
            "movement": -12
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 94,
            "movement": 45
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 97,
            "movement": -32
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 98,
            "movement": -23
          },
          {
            "country": "LY",
            "name": "Libya",
            "position": 99,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 102,
            "movement": -2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 102,
            "movement": -33
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 102,
            "movement": 57
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 103,
            "movement": -19
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 109,
            "movement": 23
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 109,
            "movement": -18
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 113,
            "movement": -1
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 114,
            "movement": -38
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 114,
            "movement": -10
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 115,
            "movement": -8
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 115,
            "movement": -3
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 118,
            "movement": -85
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 118,
            "movement": -19
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 123,
            "movement": 65
          },
          {
            "country": "KH",
            "name": "Cambodia",
            "position": 127,
            "movement": 36
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 134,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 146,
            "movement": -29
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 148,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 152,
            "movement": -11
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 162,
            "movement": -19
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 163,
            "movement": -28
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 165,
            "movement": -66
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 166,
            "movement": null,
            "status": "new"
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 170,
            "movement": 3
          },
          {
            "country": "LA",
            "name": "Laos",
            "position": 184,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 184,
            "movement": -85
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 184,
            "movement": 1
          },
          {
            "country": "BT",
            "name": "Bhutan",
            "position": 185,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 185,
            "movement": -40
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 187,
            "movement": -23
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 189,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 192,
            "movement": -30
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 198,
            "movement": -5
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 200,
            "movement": -7
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
            "position": 6,
            "movement": -3
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 12,
            "movement": -2
          },
          {
            "country": "US",
            "name": "United States",
            "position": 13,
            "movement": -1
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 17,
            "movement": -1
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 19,
            "movement": -2
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 24,
            "movement": -2
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 25,
            "movement": -6
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 26,
            "movement": -4
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 26,
            "movement": -2
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 27,
            "movement": -4
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 28,
            "movement": -4
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 31,
            "movement": 0
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 34,
            "movement": -7
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 34,
            "movement": 2
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 35,
            "movement": -11
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 36,
            "movement": -3
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 36,
            "movement": -8
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 37,
            "movement": -6
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 46,
            "movement": -10
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 52,
            "movement": -8
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 53,
            "movement": -1
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 57,
            "movement": 2
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 60,
            "movement": -2
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 62,
            "movement": -11
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 62,
            "movement": -4
          },
          {
            "country": "FR",
            "name": "France",
            "position": 66,
            "movement": 2
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 69,
            "movement": -4
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 72,
            "movement": -8
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 73,
            "movement": -7
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 74,
            "movement": 1
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 76,
            "movement": -5
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 76,
            "movement": -1
          },
          {
            "country": "VE",
            "name": "Venezuela",
            "position": 78,
            "movement": -18
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 82,
            "movement": -10
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 90,
            "movement": -10
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 107,
            "movement": -10
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 115,
            "movement": -15
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 118,
            "movement": -19
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 118,
            "movement": -10
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 119,
            "movement": -5
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 119,
            "movement": -10
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 124,
            "movement": -4
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 127,
            "movement": -8
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 136,
            "movement": -24
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 136,
            "movement": -7
          },
          {
            "country": "VN",
            "name": "Vietnam",
            "position": 140,
            "movement": 2
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 143,
            "movement": -3
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 144,
            "movement": -28
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 145,
            "movement": -3
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 150,
            "movement": -14
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 153,
            "movement": -29
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 172,
            "movement": -46
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 175,
            "movement": -13
          },
          {
            "country": "CN",
            "name": "China",
            "position": 179,
            "movement": -8
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 190,
            "movement": -16
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 193,
            "movement": -11
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 194,
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
            "position": 21,
            "movement": -2
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 23,
            "movement": -5
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 36,
            "movement": -16
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 43,
            "movement": -8
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 43,
            "movement": -5
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 45,
            "movement": -1
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 47,
            "movement": -19
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 61,
            "movement": -12
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 63,
            "movement": -5
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 64,
            "movement": -6
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 72,
            "movement": -7
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 82,
            "movement": -24
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 90,
            "movement": -7
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 98,
            "movement": -25
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 104,
            "movement": -2
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 108,
            "movement": 1
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 108,
            "movement": -15
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 111,
            "movement": -23
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 113,
            "movement": -10
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 129,
            "movement": -29
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 135,
            "movement": -37
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 136,
            "movement": -28
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 143,
            "movement": -36
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 147,
            "movement": -46
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 149,
            "movement": -44
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 152,
            "movement": -11
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 167,
            "movement": -26
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 196,
            "movement": -17
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 196,
            "movement": -38
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
        "numberOnes": 0,
        "entries": [
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 3,
            "movement": -2
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 4,
            "movement": 15
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 6,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 23,
            "movement": -17
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 28,
            "movement": -11
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 75,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 77,
            "movement": -11
          },
          {
            "country": "IN",
            "name": "India",
            "position": 106,
            "movement": -85
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 129,
            "movement": 17
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 166,
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
            "country": "LT",
            "name": "Lithuania",
            "position": 4,
            "movement": null,
            "status": "new"
          },
          {
            "country": "JP",
            "name": "Japan",
            "position": 38,
            "movement": 18
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 74,
            "movement": -10
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 97,
            "movement": null,
            "status": "new"
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
            "position": 15,
            "movement": 4
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 20,
            "movement": -3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 37,
            "movement": 1
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 52,
            "movement": -32
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 53,
            "movement": -7
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 69,
            "movement": 16
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 72,
            "movement": 21
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 72,
            "movement": 10
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 75,
            "movement": -27
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 77,
            "movement": 6
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 79,
            "movement": 29
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 86,
            "movement": -9
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 107,
            "movement": 1
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 110,
            "movement": -27
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 115,
            "movement": -89
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 122,
            "movement": -22
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 127,
            "movement": -50
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 130,
            "movement": -14
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 147,
            "movement": -15
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 157,
            "movement": 36
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 178,
            "movement": -35
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 182,
            "movement": -12
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 187,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 188,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 192,
            "movement": -5
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 192,
            "movement": -9
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 198,
            "movement": -9
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d1bd3da6698dd5eafc5b4514317039c4/500x500-000000-80-0-0.jpg"
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
            "position": 53,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 85,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 135,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 139,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 150,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 181,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 184,
            "movement": -24
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 185,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 187,
            "movement": -51
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
            "position": 59,
            "movement": -15
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 69,
            "movement": -19
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 81,
            "movement": -30
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 99,
            "movement": -15
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 112,
            "movement": -23
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 112,
            "movement": -20
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 116,
            "movement": -2
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 123,
            "movement": -22
          },
          {
            "country": "FR",
            "name": "France",
            "position": 136,
            "movement": -33
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 137,
            "movement": -44
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 180,
            "movement": -30
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
            "position": 13,
            "movement": 6
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 49,
            "movement": 60
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 53,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 55,
            "movement": 6
          },
          {
            "country": "US",
            "name": "United States",
            "position": 126,
            "movement": 7
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
            "position": 13,
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
            "movement": 3
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/584f40f4d2b62b611a7ab8561b656ff3/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Me & U",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "OM",
            "name": "Oman",
            "position": 112,
            "movement": 86
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 117,
            "movement": 1
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 182,
            "movement": -93
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 195,
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
            "position": 185,
            "movement": -47
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
            "movement": 2
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
            "position": 68,
            "movement": 4
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
            "position": 98,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
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
            "country": "TZ",
            "name": "Tanzania",
            "position": 96,
            "movement": 12
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 132,
            "movement": 22
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 142,
            "movement": 11
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 157,
            "movement": 5
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 164,
            "movement": -45
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 186,
            "movement": 2
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
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 156,
            "movement": -86
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
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
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 21,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 123,
            "movement": -45
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 143,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 178,
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
            "position": 38,
            "movement": 3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 83,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ee712ec0084d50159ae6564de833ce12/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Love Me JeJe",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 19,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 152,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4bfd7acfa6aaa14c1497f19aeb5a0536/500x500-000000-80-0-0.jpg"
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
            "position": 114,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 182,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
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
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 131,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 197,
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
    "title": "Interference",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 60,
            "movement": -16
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
            "position": 99,
            "movement": -5
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ea8f80f2edb20885ac8aed8751716794/500x500-000000-80-0-0.jpg"
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
            "position": 164,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d015c74bed325b8928343913858fb3c2/500x500-000000-80-0-0.jpg"
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
            "movement": -1
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
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
            "movement": -1
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
  