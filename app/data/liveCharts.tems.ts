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
  export const liveChartsUpdated = "2026-10-30";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-10-30T05:54Z";
  
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
            "movement": 0
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 8,
            "movement": 7
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 9,
            "movement": 3
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 11,
            "movement": 27
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 17,
            "movement": -1
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 18,
            "movement": 1
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 19,
            "movement": 14
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 19,
            "movement": 22
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 20,
            "movement": 3
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 21,
            "movement": 6
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 21,
            "movement": 0
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 22,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 24,
            "movement": -3
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 24,
            "movement": 2
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 28,
            "movement": 19
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 28,
            "movement": -1
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 28,
            "movement": 0
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 28,
            "movement": 7
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 31,
            "movement": 4
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 32,
            "movement": 10
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 33,
            "movement": 0
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 35,
            "movement": -11
          },
          {
            "country": "BT",
            "name": "Bhutan",
            "position": 35,
            "movement": null,
            "status": "new"
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 35,
            "movement": -10
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 37,
            "movement": -6
          },
          {
            "country": "MN",
            "name": "Mongolia",
            "position": 39,
            "movement": -3
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 43,
            "movement": 7
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 44,
            "movement": 17
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 44,
            "movement": 20
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 51,
            "movement": -9
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 52,
            "movement": -1
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 54,
            "movement": 4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 56,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 56,
            "movement": -11
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 58,
            "movement": -10
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 61,
            "movement": 29
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 61,
            "movement": 4
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 65,
            "movement": 92
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 66,
            "movement": -1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 67,
            "movement": 6
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 70,
            "movement": 33
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 71,
            "movement": 44
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 73,
            "movement": -31
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 73,
            "movement": -4
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 73,
            "movement": 38
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 74,
            "movement": 4
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 74,
            "movement": 8
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 77,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 79,
            "movement": 115
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 81,
            "movement": -2
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 84,
            "movement": 48
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 84,
            "movement": -5
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 85,
            "movement": -1
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 87,
            "movement": 23
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 88,
            "movement": 24
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 92,
            "movement": 23
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 93,
            "movement": -1
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 93,
            "movement": -15
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 94,
            "movement": -10
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 99,
            "movement": -64
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 106,
            "movement": 2
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 107,
            "movement": 15
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 109,
            "movement": -21
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 111,
            "movement": 17
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 111,
            "movement": 6
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 112,
            "movement": -57
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 114,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 114,
            "movement": 36
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 121,
            "movement": 48
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 122,
            "movement": -2
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 129,
            "movement": -15
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 139,
            "movement": 8
          },
          {
            "country": "KH",
            "name": "Cambodia",
            "position": 144,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 145,
            "movement": 31
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 148,
            "movement": -23
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 151,
            "movement": 28
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 155,
            "movement": 11
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 158,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 158,
            "movement": -6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 161,
            "movement": -3
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 177,
            "movement": -142
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 177,
            "movement": 14
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 179,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 191,
            "movement": -3
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 193,
            "movement": -31
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
            "position": 13,
            "movement": 1
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 25,
            "movement": -2
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 32,
            "movement": 6
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 32,
            "movement": 1
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 34,
            "movement": -3
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 36,
            "movement": 0
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 40,
            "movement": 2
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 46,
            "movement": -2
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 46,
            "movement": -4
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 48,
            "movement": 4
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 55,
            "movement": 2
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 61,
            "movement": -5
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 64,
            "movement": -1
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 74,
            "movement": -1
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 75,
            "movement": -3
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 77,
            "movement": 5
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 91,
            "movement": 4
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 94,
            "movement": -3
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 95,
            "movement": -24
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 97,
            "movement": -11
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 109,
            "movement": -4
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 111,
            "movement": 20
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 113,
            "movement": 36
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 118,
            "movement": 11
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 118,
            "movement": -2
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 121,
            "movement": -2
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 122,
            "movement": 5
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 128,
            "movement": 1
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 132,
            "movement": 3
          },
          {
            "country": "FR",
            "name": "France",
            "position": 132,
            "movement": -7
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 133,
            "movement": -5
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 148,
            "movement": 40
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 167,
            "movement": -17
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 182,
            "movement": 17
          },
          {
            "country": "CN",
            "name": "China",
            "position": 183,
            "movement": -1
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 183,
            "movement": -9
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 188,
            "movement": 0
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 189,
            "movement": -13
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 199,
            "movement": -7
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
            "position": 19,
            "movement": 1
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 20,
            "movement": 5
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 24,
            "movement": -2
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 31,
            "movement": 1
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 32,
            "movement": 3
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 33,
            "movement": 4
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 42,
            "movement": 17
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 47,
            "movement": 7
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 51,
            "movement": 19
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 51,
            "movement": 9
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 63,
            "movement": 13
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
            "position": 73,
            "movement": 0
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 78,
            "movement": 19
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 82,
            "movement": 12
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 87,
            "movement": 52
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 88,
            "movement": 45
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 90,
            "movement": 9
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 93,
            "movement": 23
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 94,
            "movement": 11
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 95,
            "movement": 22
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 100,
            "movement": 16
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 110,
            "movement": -4
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 124,
            "movement": -3
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 133,
            "movement": 17
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 134,
            "movement": 40
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 156,
            "movement": -3
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 162,
            "movement": 0
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 177,
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
            "movement": null,
            "status": "new"
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 4,
            "movement": 32
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 12,
            "movement": -10
          },
          {
            "country": "IN",
            "name": "India",
            "position": 17,
            "movement": -8
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 29,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 34,
            "movement": -32
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 38,
            "movement": -15
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 49,
            "movement": -46
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 166,
            "movement": 23
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 170,
            "movement": -151
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 181,
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
            "position": 18,
            "movement": 3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 19,
            "movement": 80
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 56,
            "movement": -5
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 59,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 78,
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
            "position": 14,
            "movement": 0
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 23,
            "movement": -6
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 25,
            "movement": 13
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 27,
            "movement": 35
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 28,
            "movement": 50
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 38,
            "movement": 48
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 49,
            "movement": -2
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 55,
            "movement": -9
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 59,
            "movement": -1
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 59,
            "movement": -9
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 83,
            "movement": -21
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 83,
            "movement": -3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 90,
            "movement": 1
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 96,
            "movement": 1
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 98,
            "movement": 50
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 109,
            "movement": 34
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 119,
            "movement": null,
            "status": "new"
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 142,
            "movement": 44
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 147,
            "movement": -1
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 154,
            "movement": -11
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 156,
            "movement": -64
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 159,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 163,
            "movement": -78
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 164,
            "movement": -16
          },
          {
            "country": "MN",
            "name": "Mongolia",
            "position": 165,
            "movement": 15
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 166,
            "movement": 32
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 171,
            "movement": -20
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 175,
            "movement": -46
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 188,
            "movement": -13
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 188,
            "movement": -16
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
            "position": 20,
            "movement": -10
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
            "country": "SB",
            "name": "Solomon Islands",
            "position": 80,
            "movement": 112
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 93,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 116,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 122,
            "movement": -42
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 138,
            "movement": -44
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 165,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 171,
            "movement": -12
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 178,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 183,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 190,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
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
    "title": "Me & U",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 51,
            "movement": 51
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 74,
            "movement": 31
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 119,
            "movement": 38
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 125,
            "movement": 2
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 183,
            "movement": 13
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 188,
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
            "position": 36,
            "movement": -1
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 173,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 182,
            "movement": -7
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 189,
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
            "position": 9,
            "movement": -3
          },
          {
            "country": "DO",
            "name": "Dominican Republic",
            "position": 172,
            "movement": -12
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
            "position": 108,
            "movement": 18
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
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
            "country": "NG",
            "name": "Nigeria",
            "position": 20,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 24,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 27,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 53,
            "movement": 12
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 189,
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
            "country": "KE",
            "name": "Kenya",
            "position": 96,
            "movement": -35
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 187,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
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
            "country": "NG",
            "name": "Nigeria",
            "position": 150,
            "movement": 4
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ee712ec0084d50159ae6564de833ce12/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "For Broken Ears",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 41,
            "movement": 111
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 65,
            "movement": 55
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 102,
            "movement": -50
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 136,
            "movement": -19
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 170,
            "movement": -17
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 186,
            "movement": -25
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 190,
            "movement": -141
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 196,
            "movement": 3
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
    "title": "What You Need",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 12,
            "movement": -2
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 81,
            "movement": 20
          },
          {
            "country": "US",
            "name": "United States",
            "position": 153,
            "movement": 2
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 192,
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
            "position": 57,
            "movement": -5
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
    "title": "Free Mind",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 101,
            "movement": 50
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 112,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 115,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 186,
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
            "position": 174,
            "movement": -114
          }
        ]
      }
    ],
    "kind": "song",
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
            "country": "CV",
            "name": "Cape Verde",
            "position": 106,
            "movement": -4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 110,
            "movement": 55
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 144,
            "movement": -111
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 150,
            "movement": 30
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 196,
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
            "movement": 5
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
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 154,
            "movement": -12
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-20",
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
            "position": 185,
            "movement": -66
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-20",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3d1528266cd1263f06d630c1c73376d5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Try Me",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 153,
            "movement": -113
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-28",
    "cover": "https://cdn-images.dzcdn.net/images/cover/0989302f2acc1132d8922b3f292abe4b/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Crazy Tings",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 168,
            "movement": -114
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-28",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3e59ce9bff06c58a3016b13aa83baac0/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Looku Looku",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 179,
            "movement": -113
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-28",
    "cover": "https://cdn-images.dzcdn.net/images/cover/8bdc17b8c3975562fbbb659adbfb1fac/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "The Key",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 181,
            "movement": -114
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-28",
    "cover": "https://cdn-images.dzcdn.net/images/cover/53e9db9663c87b34723c17bcf9c2a8e8/500x500-000000-80-0-0.jpg"
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
    "title": "If Orange Was A Place - EP",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GD",
            "name": "Grenada",
            "position": 80,
            "movement": 2
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
  