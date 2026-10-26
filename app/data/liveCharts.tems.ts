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
  export const liveChartsUpdated = "2026-10-26";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-10-26T13:10Z";
  
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
            "country": "SR",
            "name": "Suriname",
            "position": 4,
            "movement": 7
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 7,
            "movement": -2
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 10,
            "movement": 35
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 12,
            "movement": -3
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 13,
            "movement": -1
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 15,
            "movement": -3
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 15,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 22,
            "movement": -2
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 22,
            "movement": -1
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 23,
            "movement": 0
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 25,
            "movement": -1
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 26,
            "movement": 3
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 30,
            "movement": 28
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 31,
            "movement": -7
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 32,
            "movement": 16
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 34,
            "movement": 79
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 34,
            "movement": -7
          },
          {
            "country": "MN",
            "name": "Mongolia",
            "position": 35,
            "movement": 3
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 35,
            "movement": 34
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 36,
            "movement": 45
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 39,
            "movement": -5
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 40,
            "movement": 18
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 40,
            "movement": -8
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 43,
            "movement": 9
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 44,
            "movement": -10
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 45,
            "movement": 2
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 51,
            "movement": -21
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 53,
            "movement": 15
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 54,
            "movement": 3
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 55,
            "movement": -38
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 55,
            "movement": -7
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 57,
            "movement": -5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 58,
            "movement": -5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 59,
            "movement": -5
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 60,
            "movement": 7
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 62,
            "movement": -10
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 68,
            "movement": -17
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 69,
            "movement": 39
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 69,
            "movement": 21
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 75,
            "movement": 2
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 77,
            "movement": -19
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 78,
            "movement": -25
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 80,
            "movement": 20
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 80,
            "movement": -5
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 82,
            "movement": 54
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 83,
            "movement": -21
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 83,
            "movement": 12
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 87,
            "movement": -35
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 90,
            "movement": -3
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 91,
            "movement": -40
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 91,
            "movement": -4
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 92,
            "movement": -9
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 92,
            "movement": 97
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 92,
            "movement": 5
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 98,
            "movement": -21
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 99,
            "movement": 42
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 99,
            "movement": 35
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 100,
            "movement": -4
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 100,
            "movement": 22
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 114,
            "movement": -6
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 114,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 116,
            "movement": -2
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 118,
            "movement": -10
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 121,
            "movement": 2
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 126,
            "movement": -35
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 128,
            "movement": -69
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 143,
            "movement": -45
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 145,
            "movement": 9
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 151,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 152,
            "movement": 18
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 155,
            "movement": -38
          },
          {
            "country": "LA",
            "name": "Laos",
            "position": 155,
            "movement": -34
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 158,
            "movement": -9
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 159,
            "movement": 1
          },
          {
            "country": "KH",
            "name": "Cambodia",
            "position": 166,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 166,
            "movement": null,
            "status": "new"
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 170,
            "movement": -10
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 173,
            "movement": -10
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 186,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 189,
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
            "position": 16,
            "movement": 0
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 20,
            "movement": 1
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 31,
            "movement": -1
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 34,
            "movement": -6
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 35,
            "movement": -3
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 39,
            "movement": -1
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 42,
            "movement": -1
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 44,
            "movement": 2
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 46,
            "movement": -4
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 50,
            "movement": 2
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 53,
            "movement": -3
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 54,
            "movement": -4
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 54,
            "movement": -2
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 63,
            "movement": -7
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 70,
            "movement": -3
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 77,
            "movement": -11
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 78,
            "movement": 2
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 81,
            "movement": 7
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 87,
            "movement": 6
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 101,
            "movement": -5
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 102,
            "movement": 2
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 103,
            "movement": 11
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 106,
            "movement": -1
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 118,
            "movement": -13
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 120,
            "movement": 9
          },
          {
            "country": "FR",
            "name": "France",
            "position": 126,
            "movement": -5
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 131,
            "movement": -16
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 132,
            "movement": 5
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 135,
            "movement": -28
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 138,
            "movement": 9
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 139,
            "movement": -6
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 144,
            "movement": -7
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 148,
            "movement": -5
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 148,
            "movement": 5
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 160,
            "movement": 10
          },
          {
            "country": "VN",
            "name": "Vietnam",
            "position": 170,
            "movement": -2
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 178,
            "movement": -3
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 178,
            "movement": 20
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 184,
            "movement": -23
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 187,
            "movement": 13
          },
          {
            "country": "VE",
            "name": "Venezuela",
            "position": 187,
            "movement": -9
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 188,
            "movement": 11
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 189,
            "movement": -3
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 197,
            "movement": -45
          }
        ]
      },
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 18,
            "movement": 8
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 21,
            "movement": 0
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 22,
            "movement": -1
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 38,
            "movement": 2
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 41,
            "movement": 6
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 44,
            "movement": 17
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 46,
            "movement": 10
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 54,
            "movement": -1
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 58,
            "movement": -6
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 67,
            "movement": -6
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 68,
            "movement": 9
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 71,
            "movement": 3
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 77,
            "movement": 20
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 78,
            "movement": 5
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 93,
            "movement": 5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 96,
            "movement": 5
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 97,
            "movement": 36
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 112,
            "movement": 12
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 116,
            "movement": 28
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 120,
            "movement": 10
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 124,
            "movement": -6
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 128,
            "movement": 2
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 129,
            "movement": 13
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 130,
            "movement": 4
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 131,
            "movement": 53
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 131,
            "movement": 8
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 153,
            "movement": 1
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 166,
            "movement": 9
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 187,
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
            "position": 14,
            "movement": -5
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 17,
            "movement": -4
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
            "movement": -3
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 30,
            "movement": -3
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 33,
            "movement": -6
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 33,
            "movement": -6
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 38,
            "movement": null,
            "status": "re"
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 39,
            "movement": -5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 40,
            "movement": 1
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 41,
            "movement": -5
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 41,
            "movement": -11
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 45,
            "movement": -3
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 49,
            "movement": -4
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 2,
            "movement": 42
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 5,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 11,
            "movement": -8
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 31,
            "movement": 47
          },
          {
            "country": "IN",
            "name": "India",
            "position": 32,
            "movement": -20
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 57,
            "movement": -11
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 64,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 78,
            "movement": -24
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
            "position": 63,
            "movement": null,
            "status": "new"
          },
          {
            "country": "HN",
            "name": "Honduras",
            "position": 80,
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
            "position": 12,
            "movement": 1
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 31,
            "movement": -5
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 41,
            "movement": -1
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 43,
            "movement": -4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 43,
            "movement": 10
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 56,
            "movement": -11
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 58,
            "movement": 36
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 68,
            "movement": -1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 83,
            "movement": -32
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 86,
            "movement": -4
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 108,
            "movement": -7
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 112,
            "movement": -39
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 124,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 130,
            "movement": 8
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 134,
            "movement": 6
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 141,
            "movement": -4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 146,
            "movement": -30
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 170,
            "movement": -51
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 172,
            "movement": 28
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 187,
            "movement": null,
            "status": "new"
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 190,
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
    "title": "For Broken Ears",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 50,
            "movement": -33
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 109,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 128,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 130,
            "movement": -62
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 146,
            "movement": -20
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 151,
            "movement": 9
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 151,
            "movement": -18
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 168,
            "movement": -47
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 190,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 197,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 199,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 200,
            "movement": -60
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
            "position": 145,
            "movement": 1
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
            "country": "SR",
            "name": "Suriname",
            "position": 6,
            "movement": 39
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 57,
            "movement": 123
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 63,
            "movement": 81
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 89,
            "movement": 28
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 162,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 172,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 197,
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
            "position": 41,
            "movement": -37
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 68,
            "movement": -17
          },
          {
            "country": "DO",
            "name": "Dominican Republic",
            "position": 88,
            "movement": -40
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
            "position": 35,
            "movement": -1
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 158,
            "movement": -4
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 25,
            "movement": -13
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 36,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 102,
            "movement": 76
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 126,
            "movement": -76
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 135,
            "movement": -89
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 141,
            "movement": 56
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 147,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 185,
            "movement": -65
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 197,
            "movement": -20
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
            "movement": 4
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 161,
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
    "title": "What You Need",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 9,
            "movement": 5
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 54,
            "movement": 11
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 85,
            "movement": -39
          },
          {
            "country": "US",
            "name": "United States",
            "position": 116,
            "movement": 5
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 147,
            "movement": -81
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 187,
            "movement": 4
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 27,
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
            "position": 51,
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
            "position": 9,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song",
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
            "position": 14,
            "movement": 15
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 20,
            "movement": 4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 77,
            "movement": 1
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
            "position": 34,
            "movement": 52
          },
          {
            "country": "GM",
            "name": "Gambia",
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
            "country": "NG",
            "name": "Nigeria",
            "position": 153,
            "movement": -3
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MA",
            "name": "Morocco",
            "position": 54,
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
            "country": "GD",
            "name": "Grenada",
            "position": 150,
            "movement": -116
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 171,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 176,
            "movement": -38
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 193,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 198,
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
    "title": "Free Mind",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 153,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 163,
            "movement": 20
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 186,
            "movement": -56
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
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
            "position": 134,
            "movement": -4
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
            "position": 125,
            "movement": null,
            "status": "new"
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
            "position": 89,
            "movement": 22
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ea8f80f2edb20885ac8aed8751716794/500x500-000000-80-0-0.jpg"
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
            "position": 157,
            "movement": -44
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-20",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3d1528266cd1263f06d630c1c73376d5/500x500-000000-80-0-0.jpg"
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
            "position": 58,
            "movement": -3
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
            "position": 83,
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
  