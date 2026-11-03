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
  export const liveChartsUpdated = "2026-11-03";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-11-03T14:21Z";
  
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
            "position": 8,
            "movement": -1
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 8,
            "movement": 157
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 11,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 12,
            "movement": 4
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 13,
            "movement": 4
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 15,
            "movement": 0
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 16,
            "movement": 1
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 18,
            "movement": 5
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 20,
            "movement": 7
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 21,
            "movement": 4
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 22,
            "movement": 10
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 24,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 24,
            "movement": 0
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 27,
            "movement": 6
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 28,
            "movement": 25
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 31,
            "movement": 3
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 32,
            "movement": 18
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 37,
            "movement": -7
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 37,
            "movement": -8
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 38,
            "movement": 18
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 38,
            "movement": 44
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 40,
            "movement": 23
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 40,
            "movement": -4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 40,
            "movement": 69
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 41,
            "movement": 90
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 41,
            "movement": 5
          },
          {
            "country": "MN",
            "name": "Mongolia",
            "position": 44,
            "movement": 8
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 45,
            "movement": -4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 47,
            "movement": 7
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 49,
            "movement": 0
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 51,
            "movement": 5
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 53,
            "movement": 12
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 54,
            "movement": 7
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 55,
            "movement": 2
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 55,
            "movement": 9
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 61,
            "movement": 14
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 65,
            "movement": 115
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 67,
            "movement": 0
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 68,
            "movement": -39
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 68,
            "movement": 44
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 72,
            "movement": 56
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 73,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 74,
            "movement": 69
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 78,
            "movement": 13
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 84,
            "movement": 17
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 92,
            "movement": 9
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 93,
            "movement": 12
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 94,
            "movement": -6
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 99,
            "movement": 25
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 102,
            "movement": -12
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 103,
            "movement": 69
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 106,
            "movement": 32
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 106,
            "movement": 5
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 111,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 113,
            "movement": -5
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 115,
            "movement": 48
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 116,
            "movement": 30
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 116,
            "movement": 4
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 116,
            "movement": -39
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 121,
            "movement": -49
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 132,
            "movement": -94
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 135,
            "movement": 9
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 136,
            "movement": -14
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 139,
            "movement": -43
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 140,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 141,
            "movement": 26
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 143,
            "movement": 2
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 150,
            "movement": -101
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 158,
            "movement": 12
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 159,
            "movement": -24
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 173,
            "movement": 20
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 176,
            "movement": 7
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 186,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 187,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 188,
            "movement": 0
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 189,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 193,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 193,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 193,
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
            "position": 20,
            "movement": 2
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 26,
            "movement": -2
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 27,
            "movement": 0
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 31,
            "movement": 0
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 33,
            "movement": -3
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 33,
            "movement": -1
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 38,
            "movement": 2
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 47,
            "movement": 1
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 48,
            "movement": -1
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 51,
            "movement": 0
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 54,
            "movement": -15
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 57,
            "movement": 0
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 77,
            "movement": -2
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 78,
            "movement": -2
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 81,
            "movement": 3
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 83,
            "movement": -6
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 91,
            "movement": -7
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 101,
            "movement": -5
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 102,
            "movement": 6
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 105,
            "movement": 1
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 109,
            "movement": -9
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 115,
            "movement": -14
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 117,
            "movement": -6
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 121,
            "movement": 5
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 123,
            "movement": -5
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 137,
            "movement": -5
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 159,
            "movement": 7
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 161,
            "movement": -26
          },
          {
            "country": "FR",
            "name": "France",
            "position": 163,
            "movement": -16
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 174,
            "movement": -4
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 180,
            "movement": 20
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 181,
            "movement": -36
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 184,
            "movement": -11
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 186,
            "movement": -24
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 194,
            "movement": -3
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 196,
            "movement": -24
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
            "position": 24,
            "movement": 3
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 27,
            "movement": 20
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 37,
            "movement": 16
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 44,
            "movement": 15
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 48,
            "movement": 15
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 53,
            "movement": 15
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 68,
            "movement": 19
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 72,
            "movement": 14
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 83,
            "movement": 21
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 83,
            "movement": 37
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 85,
            "movement": -18
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 89,
            "movement": -5
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 91,
            "movement": -4
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 100,
            "movement": 37
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 106,
            "movement": 4
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 109,
            "movement": 1
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 126,
            "movement": 44
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 132,
            "movement": 25
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 132,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 140,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 141,
            "movement": 31
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 141,
            "movement": 2
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 149,
            "movement": 45
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 176,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 184,
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
            "position": 15,
            "movement": -1
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
            "position": 26,
            "movement": 4
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 29,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 31,
            "movement": 7
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 38,
            "movement": -5
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 38,
            "movement": 1
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 41,
            "movement": -8
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 44,
            "movement": -3
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 44,
            "movement": -3
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 45,
            "movement": 0
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 45,
            "movement": 4
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 1,
        "entries": [
          {
            "country": "PT",
            "name": "Portugal",
            "position": 1,
            "movement": 58
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 6,
            "movement": null,
            "status": "new"
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 10,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IN",
            "name": "India",
            "position": 19,
            "movement": 35
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 55,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 79,
            "movement": -16
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 79,
            "movement": -9
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
            "position": 20,
            "movement": 13
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 44,
            "movement": -29
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
            "position": 11,
            "movement": 6
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 20,
            "movement": 155
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 21,
            "movement": -5
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 37,
            "movement": 9
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 41,
            "movement": -4
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 49,
            "movement": 30
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 50,
            "movement": 20
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 50,
            "movement": 29
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 58,
            "movement": 99
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 76,
            "movement": 35
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 78,
            "movement": -13
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 85,
            "movement": -2
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 96,
            "movement": 86
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 112,
            "movement": 41
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 116,
            "movement": -5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 125,
            "movement": -17
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 125,
            "movement": 24
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 126,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 132,
            "movement": -57
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 135,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 136,
            "movement": 23
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 156,
            "movement": 21
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 158,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 166,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 181,
            "movement": -30
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 185,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 193,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 194,
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
            "country": "BM",
            "name": "Bermuda",
            "position": 80,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 81,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 92,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 122,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 150,
            "movement": -24
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 152,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 167,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 172,
            "movement": 13
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 185,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 186,
            "movement": -61
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 196,
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
            "position": 80,
            "movement": 3
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 151,
            "movement": 10
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/66c0e3ff739ce671cee90fea6eb1047c/500x500-000000-80-0-0.jpg"
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
            "position": 78,
            "movement": 50
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 83,
            "movement": 57
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 94,
            "movement": -54
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 118,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 144,
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 160,
            "movement": 5
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 173,
            "movement": 21
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 181,
            "movement": -61
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 188,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 191,
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
            "position": 124,
            "movement": 21
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
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
            "position": 15,
            "movement": -6
          },
          {
            "country": "BN",
            "name": "Brunei Darussalam",
            "position": 28,
            "movement": 52
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 32,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 72,
            "movement": -6
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 90,
            "movement": null,
            "status": "new"
          },
          {
            "country": "US",
            "name": "United States",
            "position": 94,
            "movement": 60
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 114,
            "movement": 43
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
            "position": 163,
            "movement": -56
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
            "position": 64,
            "movement": 8
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
            "position": 12,
            "movement": -3
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
            "country": "MR",
            "name": "Mauritania",
            "position": 31,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 46,
            "movement": 31
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 118,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 127,
            "movement": 20
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 152,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
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
            "country": "NG",
            "name": "Nigeria",
            "position": 3,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 15,
            "movement": -4
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
            "position": 164,
            "movement": 26
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
            "position": 65,
            "movement": -3
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
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
            "country": "BM",
            "name": "Bermuda",
            "position": 69,
            "movement": -26
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 93,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 103,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 106,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 140,
            "movement": 54
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 154,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 162,
            "movement": 28
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 197,
            "movement": -1
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
            "position": 25,
            "movement": -4
          }
        ]
      }
    ],
    "kind": "song",
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
            "country": "DM",
            "name": "Dominica",
            "position": 22,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 28,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 67,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 198,
            "movement": -2
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
            "position": 134,
            "movement": -9
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 179,
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
    "title": "Black Panther: Wakanda Forever - Music From and Inspired By",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 115,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 160,
            "movement": -94
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
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6d416dc66a55cc8914425c365c1e7b74/500x500-000000-80-0-0.jpg"
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
            "position": 168,
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
            "country": "UG",
            "name": "Uganda",
            "position": 24,
            "movement": -4
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-20",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3d1528266cd1263f06d630c1c73376d5/500x500-000000-80-0-0.jpg"
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
            "position": 130,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 183,
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
    "title": "Ordinary People",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 28,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-31",
    "cover": "https://cdn-images.dzcdn.net/images/cover/1adb08918cf6abd499a3c41e2093b5d2/500x500-000000-80-0-0.jpg"
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
            "position": 187,
            "movement": -69
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-20",
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
            "position": 143,
            "movement": -30
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ea8f80f2edb20885ac8aed8751716794/500x500-000000-80-0-0.jpg"
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
            "position": 124,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-11-03",
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
            "position": 81,
            "movement": 0
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
  