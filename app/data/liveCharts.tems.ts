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
  export const liveChartsUpdated = "2026-11-13";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-11-13T19:46Z";
  
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
            "position": 7,
            "movement": 3
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 9,
            "movement": 10
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 10,
            "movement": 27
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 11,
            "movement": 0
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 12,
            "movement": -2
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 13,
            "movement": -7
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 15,
            "movement": 39
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 18,
            "movement": 16
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 19,
            "movement": -1
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 19,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 21,
            "movement": -2
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 22,
            "movement": 5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 22,
            "movement": -4
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 23,
            "movement": 20
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 23,
            "movement": -4
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 28,
            "movement": -17
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 30,
            "movement": -7
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 31,
            "movement": -16
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 31,
            "movement": 0
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 32,
            "movement": 0
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 33,
            "movement": -4
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 34,
            "movement": -10
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 36,
            "movement": 49
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 36,
            "movement": 15
          },
          {
            "country": "MN",
            "name": "Mongolia",
            "position": 36,
            "movement": 12
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 36,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 38,
            "movement": -19
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 39,
            "movement": -20
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 39,
            "movement": -6
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 39,
            "movement": -3
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 43,
            "movement": -14
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 43,
            "movement": -6
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 43,
            "movement": -11
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 46,
            "movement": -13
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 46,
            "movement": 0
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 49,
            "movement": -27
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 50,
            "movement": 1
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 51,
            "movement": -4
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 53,
            "movement": -10
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 53,
            "movement": -21
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 56,
            "movement": -20
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 56,
            "movement": -1
          },
          {
            "country": "BN",
            "name": "Brunei Darussalam",
            "position": 57,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 57,
            "movement": -12
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 58,
            "movement": -7
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 59,
            "movement": 68
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 59,
            "movement": 137
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 60,
            "movement": -9
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 63,
            "movement": -1
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 64,
            "movement": -6
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 69,
            "movement": -18
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 69,
            "movement": 17
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 70,
            "movement": -1
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 73,
            "movement": -5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 75,
            "movement": -5
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 75,
            "movement": -32
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 76,
            "movement": -45
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 76,
            "movement": -5
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 78,
            "movement": -27
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 83,
            "movement": -21
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 89,
            "movement": -35
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 91,
            "movement": -4
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 92,
            "movement": -12
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 101,
            "movement": -37
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 101,
            "movement": -43
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 106,
            "movement": -26
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 109,
            "movement": -26
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 110,
            "movement": -21
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 110,
            "movement": 15
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 111,
            "movement": -71
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 111,
            "movement": 22
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 112,
            "movement": 12
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 113,
            "movement": 10
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 117,
            "movement": -19
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 124,
            "movement": 61
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 124,
            "movement": -47
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 125,
            "movement": -8
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 129,
            "movement": -78
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 132,
            "movement": -47
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 133,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 134,
            "movement": 36
          },
          {
            "country": "LA",
            "name": "Laos",
            "position": 135,
            "movement": 46
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 137,
            "movement": 14
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 139,
            "movement": -13
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 161,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 166,
            "movement": -15
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 168,
            "movement": -2
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 169,
            "movement": -14
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 170,
            "movement": -11
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 176,
            "movement": -35
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 178,
            "movement": -20
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 183,
            "movement": -1
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 183,
            "movement": -24
          },
          {
            "country": "KH",
            "name": "Cambodia",
            "position": 185,
            "movement": 11
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 188,
            "movement": -2
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
            "position": 25,
            "movement": 1
          },
          {
            "country": "US",
            "name": "United States",
            "position": 25,
            "movement": -1
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 27,
            "movement": -1
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 38,
            "movement": -1
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 42,
            "movement": 2
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 42,
            "movement": 0
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 46,
            "movement": 6
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 55,
            "movement": 4
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 58,
            "movement": -10
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 62,
            "movement": -2
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 62,
            "movement": 1
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 65,
            "movement": 5
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 74,
            "movement": 5
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 85,
            "movement": -2
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 95,
            "movement": 2
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 110,
            "movement": 2
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 121,
            "movement": 22
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 124,
            "movement": -26
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 135,
            "movement": 11
          },
          {
            "country": "FR",
            "name": "France",
            "position": 138,
            "movement": -5
          },
          {
            "country": "CN",
            "name": "China",
            "position": 141,
            "movement": 17
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 142,
            "movement": 6
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 155,
            "movement": 13
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 159,
            "movement": -3
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 164,
            "movement": -2
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 173,
            "movement": -24
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 174,
            "movement": 7
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 177,
            "movement": 1
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
            "position": 22,
            "movement": -4
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 22,
            "movement": 2
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 27,
            "movement": 3
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 34,
            "movement": 6
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 43,
            "movement": -3
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 50,
            "movement": 4
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 62,
            "movement": 11
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 67,
            "movement": 10
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 67,
            "movement": 2
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 72,
            "movement": 1
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 79,
            "movement": 6
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 82,
            "movement": 5
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 92,
            "movement": -5
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 102,
            "movement": -9
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 105,
            "movement": 7
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 108,
            "movement": -5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 112,
            "movement": 1
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 113,
            "movement": -35
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 118,
            "movement": 4
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 120,
            "movement": -2
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 125,
            "movement": -10
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 127,
            "movement": -2
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 137,
            "movement": 2
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 139,
            "movement": -3
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 147,
            "movement": 19
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 160,
            "movement": 7
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 169,
            "movement": -15
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
            "movement": null,
            "status": "new"
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 8,
            "movement": null,
            "status": "new"
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 8,
            "movement": 0
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 15,
            "movement": 0
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 18,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 23,
            "movement": -6
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 36,
            "movement": -7
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 51,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 68,
            "movement": -37
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 73,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IN",
            "name": "India",
            "position": 104,
            "movement": -82
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 129,
            "movement": -16
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 147,
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
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 27,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 76,
            "movement": null,
            "status": "new"
          },
          {
            "country": "JP",
            "name": "Japan",
            "position": 84,
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
            "country": "AO",
            "name": "Angola",
            "position": 20,
            "movement": -3
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
            "position": 16,
            "movement": 1
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 18,
            "movement": 41
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 34,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 35,
            "movement": 22
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 39,
            "movement": 13
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 45,
            "movement": 9
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 45,
            "movement": -20
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 46,
            "movement": 35
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 58,
            "movement": -6
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 76,
            "movement": -37
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 77,
            "movement": -33
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 79,
            "movement": 100
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 82,
            "movement": -35
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 88,
            "movement": 6
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 91,
            "movement": -32
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 96,
            "movement": 0
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 103,
            "movement": -6
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 119,
            "movement": -18
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 132,
            "movement": -14
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 139,
            "movement": 12
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 144,
            "movement": -39
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 146,
            "movement": 50
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 168,
            "movement": -37
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 169,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 170,
            "movement": -23
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 176,
            "movement": -18
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 176,
            "movement": -4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 192,
            "movement": -10
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 195,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 198,
            "movement": -75
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
            "position": 197,
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
            "movement": 1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 22,
            "movement": 1
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 53,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 59,
            "movement": -4
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 71,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 80,
            "movement": 16
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 98,
            "movement": 24
          },
          {
            "country": "US",
            "name": "United States",
            "position": 125,
            "movement": -2
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 139,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 150,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 160,
            "movement": -48
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 186,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 187,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 191,
            "movement": -14
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 196,
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
            "country": "BZ",
            "name": "Belize",
            "position": 14,
            "movement": 0
          },
          {
            "country": "US",
            "name": "United States",
            "position": 187,
            "movement": -26
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
            "position": 66,
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
            "position": 8,
            "movement": 4
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
            "position": 72,
            "movement": 36
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 96,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 146,
            "movement": 45
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 155,
            "movement": -12
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 156,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 165,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 166,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 174,
            "movement": -20
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 182,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
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
            "position": 132,
            "movement": -9
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 183,
            "movement": 11
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
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
            "position": 42,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 133,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 186,
            "movement": -36
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 188,
            "movement": -11
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
            "position": 5,
            "movement": 95
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 13,
            "movement": -9
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 56,
            "movement": -24
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
            "position": 49,
            "movement": 14
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 180,
            "movement": -1
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
            "position": 166,
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
    "title": "Love Is A Kingdom",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 102,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 105,
            "movement": -26
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 131,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 142,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 148,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 153,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 180,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 195,
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
    "title": "Born in the Wild",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 18,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 63,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 143,
            "movement": -37
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 163,
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
            "position": 83,
            "movement": -4
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 163,
            "movement": -13
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
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
            "position": 65,
            "movement": 10
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 160,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 182,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 187,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 191,
            "movement": -21
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 199,
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
    "title": "Essence",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 8,
            "movement": -1
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 28,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 77,
            "movement": 2
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ee712ec0084d50159ae6564de833ce12/500x500-000000-80-0-0.jpg"
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
            "position": 54,
            "movement": 26
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 116,
            "movement": -19
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
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
            "country": "SC",
            "name": "Seychelles",
            "position": 111,
            "movement": 51
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
            "position": 52,
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
    "title": "I'm Not Sure",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 109,
            "movement": 50
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-12",
    "cover": "https://cdn-images.dzcdn.net/images/cover/584f40f4d2b62b611a7ab8561b656ff3/500x500-000000-80-0-0.jpg"
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
            "position": 125,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-12",
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
            "position": 200,
            "movement": -8
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-20",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3d1528266cd1263f06d630c1c73376d5/500x500-000000-80-0-0.jpg"
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
            "position": 82,
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
  