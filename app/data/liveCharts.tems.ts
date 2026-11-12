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
  export const liveChartsUpdated = "2026-11-12";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-11-12T19:58Z";
  
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
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 10,
            "movement": 0
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 11,
            "movement": 3
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 13,
            "movement": -7
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 19,
            "movement": -1
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 19,
            "movement": 1
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 20,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 21,
            "movement": -2
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 22,
            "movement": 19
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 22,
            "movement": -4
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 23,
            "movement": 0
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
            "country": "CH",
            "name": "Switzerland",
            "position": 24,
            "movement": 3
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 27,
            "movement": -5
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 28,
            "movement": -17
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 29,
            "movement": 5
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 31,
            "movement": -16
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 31,
            "movement": 40
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
            "movement": 16
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 32,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 32,
            "movement": 4
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 33,
            "movement": -9
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 33,
            "movement": -1
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 34,
            "movement": 26
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
            "country": "ZA",
            "name": "South Africa",
            "position": 36,
            "movement": 0
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 36,
            "movement": -6
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 36,
            "movement": 0
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 37,
            "movement": 9
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 37,
            "movement": 21
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
            "country": "LC",
            "name": "St. Lucia",
            "position": 40,
            "movement": 34
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 43,
            "movement": -14
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 43,
            "movement": 1
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 43,
            "movement": 0
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 45,
            "movement": 46
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 46,
            "movement": 0
          },
          {
            "country": "MN",
            "name": "Mongolia",
            "position": 48,
            "movement": -3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 50,
            "movement": 1
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 51,
            "movement": 9
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 51,
            "movement": -4
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 51,
            "movement": -41
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 54,
            "movement": -7
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 54,
            "movement": -13
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 55,
            "movement": -5
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 58,
            "movement": -7
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 58,
            "movement": -44
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
            "position": 62,
            "movement": -6
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 64,
            "movement": -6
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 64,
            "movement": -7
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 68,
            "movement": -9
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 69,
            "movement": 4
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 71,
            "movement": -3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 75,
            "movement": -5
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 77,
            "movement": 8
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 78,
            "movement": -27
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 80,
            "movement": 1
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 80,
            "movement": 18
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 83,
            "movement": -21
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 85,
            "movement": -15
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 86,
            "movement": -1
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 89,
            "movement": 3
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 91,
            "movement": -4
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 98,
            "movement": 12
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 109,
            "movement": -26
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 112,
            "movement": 12
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 117,
            "movement": -7
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 123,
            "movement": -12
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 124,
            "movement": 61
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 125,
            "movement": -43
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 126,
            "movement": -1
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 127,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 133,
            "movement": -91
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 133,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LA",
            "name": "Laos",
            "position": 135,
            "movement": 46
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 141,
            "movement": -5
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 151,
            "movement": -5
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 151,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 153,
            "movement": -28
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 155,
            "movement": -35
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 158,
            "movement": -8
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 159,
            "movement": -11
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 166,
            "movement": -3
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 170,
            "movement": -90
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 170,
            "movement": -11
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 174,
            "movement": -83
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 182,
            "movement": 16
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
            "position": 186,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 194,
            "movement": -14
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 196,
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
            "position": 24,
            "movement": 1
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 26,
            "movement": 0
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 26,
            "movement": 2
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 37,
            "movement": -4
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 42,
            "movement": -10
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 44,
            "movement": 6
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 48,
            "movement": -4
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 52,
            "movement": -1
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 59,
            "movement": -2
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 60,
            "movement": 4
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 63,
            "movement": 3
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 70,
            "movement": -3
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 79,
            "movement": -3
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 83,
            "movement": 6
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 97,
            "movement": -7
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 98,
            "movement": 0
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 112,
            "movement": -4
          },
          {
            "country": "FR",
            "name": "France",
            "position": 133,
            "movement": 3
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 143,
            "movement": -1
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 146,
            "movement": -27
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 148,
            "movement": 4
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 149,
            "movement": -8
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 156,
            "movement": -2
          },
          {
            "country": "CN",
            "name": "China",
            "position": 158,
            "movement": 7
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 162,
            "movement": 5
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 168,
            "movement": -3
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 178,
            "movement": -12
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 181,
            "movement": -10
          },
          {
            "country": "VN",
            "name": "Vietnam",
            "position": 184,
            "movement": -1
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 190,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 190,
            "movement": -2
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
            "position": 18,
            "movement": 8
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 24,
            "movement": -1
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 30,
            "movement": 3
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 40,
            "movement": -5
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 40,
            "movement": -1
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 54,
            "movement": -1
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 69,
            "movement": 0
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 73,
            "movement": -4
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 73,
            "movement": 0
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 77,
            "movement": 7
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 78,
            "movement": -1
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 79,
            "movement": 6
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 87,
            "movement": -5
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 87,
            "movement": -2
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 93,
            "movement": 0
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 103,
            "movement": -2
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 112,
            "movement": -10
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 113,
            "movement": 6
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 115,
            "movement": 3
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 118,
            "movement": 3
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 122,
            "movement": 5
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 125,
            "movement": -16
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 136,
            "movement": 4
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 139,
            "movement": -7
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 154,
            "movement": 11
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 166,
            "movement": 8
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 167,
            "movement": 15
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
            "position": 12,
            "movement": 3
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
            "position": 30,
            "movement": -1
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 30,
            "movement": -4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 35,
            "movement": -4
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 37,
            "movement": 4
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 39,
            "movement": -1
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 41,
            "movement": -3
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 44,
            "movement": 0
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 45,
            "movement": -1
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 47,
            "movement": -2
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "RO",
            "name": "Romania",
            "position": 8,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 15,
            "movement": -8
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 17,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IN",
            "name": "India",
            "position": 22,
            "movement": 55
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 29,
            "movement": -14
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 31,
            "movement": 13
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 57,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 113,
            "movement": -19
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
            "position": 48,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 90,
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
            "position": 17,
            "movement": 1
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
            "country": "MW",
            "name": "Malawi",
            "position": 39,
            "movement": -6
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 44,
            "movement": 67
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
            "country": "CV",
            "name": "Cape Verde",
            "position": 47,
            "movement": 7
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 52,
            "movement": 59
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 52,
            "movement": 23
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 59,
            "movement": 21
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 59,
            "movement": 44
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 79,
            "movement": 100
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 81,
            "movement": 9
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 88,
            "movement": 6
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
            "position": 97,
            "movement": 3
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 101,
            "movement": 1
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 118,
            "movement": 18
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 123,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 131,
            "movement": -4
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
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 172,
            "movement": -11
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 176,
            "movement": -18
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 182,
            "movement": -4
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 195,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 196,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 199,
            "movement": -7
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
            "country": "SR",
            "name": "Suriname",
            "position": 27,
            "movement": -11
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 30,
            "movement": -15
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
            "position": 69,
            "movement": 63
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
            "position": 122,
            "movement": null,
            "status": "new"
          },
          {
            "country": "US",
            "name": "United States",
            "position": 123,
            "movement": 2
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 124,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 155,
            "movement": -19
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 158,
            "movement": -43
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 158,
            "movement": -64
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 160,
            "movement": -48
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
            "movement": -8
          },
          {
            "country": "US",
            "name": "United States",
            "position": 161,
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
            "position": 65,
            "movement": -4
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
            "country": "GD",
            "name": "Grenada",
            "position": 71,
            "movement": -18
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 108,
            "movement": 15
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 124,
            "movement": 63
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 139,
            "movement": 54
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 139,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 143,
            "movement": 5
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 154,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 165,
            "movement": -58
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 165,
            "movement": 8
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 172,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 191,
            "movement": -31
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 194,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 199,
            "movement": -132
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 200,
            "movement": -96
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
            "position": 123,
            "movement": 1
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 194,
            "movement": null,
            "status": "re"
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
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 4,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 32,
            "movement": -16
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 100,
            "movement": -84
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
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
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 63,
            "movement": 7
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 179,
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
            "position": 164,
            "movement": -17
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
            "country": "MR",
            "name": "Mauritania",
            "position": 98,
            "movement": -68
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 106,
            "movement": 43
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 160,
            "movement": 39
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 194,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 200,
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
            "position": 79,
            "movement": 1
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 150,
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
            "country": "BW",
            "name": "Botswana",
            "position": 191,
            "movement": -21
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 193,
            "movement": null,
            "status": "new"
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
            "position": 7,
            "movement": 0
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 29,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 79,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 113,
            "movement": null,
            "status": "new"
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 191,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 197,
            "movement": -33
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
            "country": "BM",
            "name": "Bermuda",
            "position": 79,
            "movement": -18
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 192,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 193,
            "movement": -21
          },
          {
            "country": "KE",
            "name": "Kenya",
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
    "title": "Damages",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 35,
            "movement": null,
            "status": "new"
          },
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
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 173,
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
    "title": "Fountains",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "DM",
            "name": "Dominica",
            "position": 80,
            "movement": 42
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
            "position": 162,
            "movement": -89
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
    "title": "Peace",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 52,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-12",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2d512ab15dd17ce21431de98a62852e4/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Wickedest",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 41,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-12",
    "cover": "https://cdn-images.dzcdn.net/images/cover/aeeee8ad4c59f8b6440d19006f0f06e7/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Free Fall",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 42,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-12",
    "cover": "https://cdn-images.dzcdn.net/images/cover/aeeee8ad4c59f8b6440d19006f0f06e7/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Interference",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 96,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-12",
    "cover": "https://cdn-images.dzcdn.net/images/cover/53e9db9663c87b34723c17bcf9c2a8e8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Ice T",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 97,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-12",
    "cover": "https://cdn-images.dzcdn.net/images/cover/53e9db9663c87b34723c17bcf9c2a8e8/500x500-000000-80-0-0.jpg"
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
            "position": 159,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-12",
    "cover": "https://cdn-images.dzcdn.net/images/cover/584f40f4d2b62b611a7ab8561b656ff3/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "The Key",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SR",
            "name": "Suriname",
            "position": 161,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-12",
    "cover": "https://cdn-images.dzcdn.net/images/cover/53e9db9663c87b34723c17bcf9c2a8e8/500x500-000000-80-0-0.jpg"
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
  