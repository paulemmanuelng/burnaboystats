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
  export const liveChartsUpdated = "2026-11-10";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-11-10T07:24Z";
  
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
            "position": 6,
            "movement": -3
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 8,
            "movement": 17
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 11,
            "movement": 12
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 11,
            "movement": -3
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 12,
            "movement": 0
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 12,
            "movement": -4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 13,
            "movement": 4
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 16,
            "movement": 5
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 16,
            "movement": 5
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 17,
            "movement": 2
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 18,
            "movement": 109
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 18,
            "movement": 3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 18,
            "movement": -3
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 19,
            "movement": 7
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 19,
            "movement": -2
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 21,
            "movement": 21
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 21,
            "movement": 14
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 23,
            "movement": 27
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 23,
            "movement": 30
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 25,
            "movement": 2
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 25,
            "movement": 9
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 26,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 26,
            "movement": -1
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 26,
            "movement": 86
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 26,
            "movement": 0
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 27,
            "movement": 0
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 28,
            "movement": 27
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 28,
            "movement": 6
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 29,
            "movement": 16
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 29,
            "movement": 4
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 30,
            "movement": 54
          },
          {
            "country": "MN",
            "name": "Mongolia",
            "position": 31,
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 33,
            "movement": 73
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 33,
            "movement": 10
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 37,
            "movement": -3
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 38,
            "movement": -2
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 39,
            "movement": 8
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 40,
            "movement": 22
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 40,
            "movement": -7
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 40,
            "movement": -10
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 40,
            "movement": 12
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 42,
            "movement": 19
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 42,
            "movement": 1
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 43,
            "movement": -15
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 43,
            "movement": 62
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 46,
            "movement": 3
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 48,
            "movement": 1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 48,
            "movement": 12
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 48,
            "movement": 13
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 51,
            "movement": -2
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 52,
            "movement": 8
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 54,
            "movement": 13
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 54,
            "movement": -12
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 55,
            "movement": -5
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 56,
            "movement": 15
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 57,
            "movement": 22
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 58,
            "movement": 14
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 60,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 66,
            "movement": -4
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 67,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 67,
            "movement": 8
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 69,
            "movement": -4
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 72,
            "movement": -3
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 73,
            "movement": 34
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 79,
            "movement": 16
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 82,
            "movement": 3
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 87,
            "movement": 14
          },
          {
            "country": "LY",
            "name": "Libya",
            "position": 88,
            "movement": null,
            "status": "new"
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 89,
            "movement": 39
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 89,
            "movement": 14
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 90,
            "movement": -9
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 93,
            "movement": 90
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 99,
            "movement": 10
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 103,
            "movement": 36
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 105,
            "movement": 14
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 110,
            "movement": 19
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 115,
            "movement": -12
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 118,
            "movement": 5
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 122,
            "movement": -19
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 124,
            "movement": 32
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 141,
            "movement": 54
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 144,
            "movement": 28
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 147,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 147,
            "movement": -52
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 148,
            "movement": -14
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 168,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 172,
            "movement": 17
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 172,
            "movement": -23
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 177,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 179,
            "movement": 11
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 179,
            "movement": 6
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 184,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 186,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IS",
            "name": "Iceland",
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
            "position": 19,
            "movement": 0
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 26,
            "movement": -4
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 29,
            "movement": -1
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 33,
            "movement": 0
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 33,
            "movement": -1
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 46,
            "movement": -5
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 51,
            "movement": 1
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 53,
            "movement": -2
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 53,
            "movement": -8
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 58,
            "movement": 7
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 65,
            "movement": -7
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 71,
            "movement": -1
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 85,
            "movement": 1
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 86,
            "movement": -1
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 89,
            "movement": 6
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 93,
            "movement": 0
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 104,
            "movement": 4
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 108,
            "movement": -6
          },
          {
            "country": "FR",
            "name": "France",
            "position": 117,
            "movement": -8
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 134,
            "movement": 0
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 135,
            "movement": -47
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 138,
            "movement": -6
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 140,
            "movement": -10
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 142,
            "movement": 13
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 154,
            "movement": -14
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 155,
            "movement": -8
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 167,
            "movement": -28
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 170,
            "movement": 3
          },
          {
            "country": "VN",
            "name": "Vietnam",
            "position": 170,
            "movement": 6
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 174,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 188,
            "movement": -7
          },
          {
            "country": "CN",
            "name": "China",
            "position": 200,
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
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 19,
            "movement": 5
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 31,
            "movement": 0
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 39,
            "movement": 17
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 49,
            "movement": 4
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 60,
            "movement": -4
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 72,
            "movement": 2
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 76,
            "movement": 7
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 76,
            "movement": 3
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 78,
            "movement": 5
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
            "position": 93,
            "movement": 8
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 94,
            "movement": 15
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 96,
            "movement": 0
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 107,
            "movement": 6
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 108,
            "movement": 32
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 109,
            "movement": 32
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 109,
            "movement": 12
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 123,
            "movement": -2
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 127,
            "movement": 15
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 145,
            "movement": 27
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 149,
            "movement": 30
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 153,
            "movement": 27
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 159,
            "movement": 16
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 163,
            "movement": -14
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 172,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 177,
            "movement": 0
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MD",
            "name": "Moldova",
            "position": 2,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 7,
            "movement": 0
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 14,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 20,
            "movement": -7
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 30,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 32,
            "movement": -29
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 36,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 42,
            "movement": 0
          },
          {
            "country": "IN",
            "name": "India",
            "position": 56,
            "movement": 74
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 66,
            "movement": -6
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 68,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 74,
            "movement": -8
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 84,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 144,
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
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "EE",
            "name": "Estonia",
            "position": 75,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 81,
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
            "position": 22,
            "movement": 1
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 40,
            "movement": 1
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 41,
            "movement": 10
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 48,
            "movement": -8
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 48,
            "movement": 19
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 50,
            "movement": 32
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 50,
            "movement": 6
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 54,
            "movement": -8
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 59,
            "movement": 9
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 68,
            "movement": 46
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 70,
            "movement": 1
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 80,
            "movement": 6
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 90,
            "movement": -7
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 98,
            "movement": 4
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 106,
            "movement": -74
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 112,
            "movement": 75
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 116,
            "movement": 25
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 118,
            "movement": -47
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 130,
            "movement": 40
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 130,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 135,
            "movement": 13
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 142,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 146,
            "movement": -36
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 147,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 155,
            "movement": -4
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 174,
            "movement": -18
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 181,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 183,
            "movement": -21
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 184,
            "movement": -1
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 185,
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
            "country": "BF",
            "name": "Burkina Faso",
            "position": 8,
            "movement": 20
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 18,
            "movement": 4
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 34,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BN",
            "name": "Brunei Darussalam",
            "position": 39,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 46,
            "movement": 15
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 48,
            "movement": 98
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 50,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 50,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 51,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 57,
            "movement": -2
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 60,
            "movement": 98
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 61,
            "movement": 0
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 62,
            "movement": 15
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 68,
            "movement": 63
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 74,
            "movement": 113
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 76,
            "movement": 78
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 82,
            "movement": -2
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 100,
            "movement": 14
          },
          {
            "country": "US",
            "name": "United States",
            "position": 100,
            "movement": -13
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 102,
            "movement": 34
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 126,
            "movement": 16
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 138,
            "movement": 41
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 186,
            "movement": -14
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
            "position": 6,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 22,
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
            "position": 50,
            "movement": 0
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
            "position": 22,
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
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 30,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 58,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 126,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 132,
            "movement": 5
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 133,
            "movement": 25
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 142,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 150,
            "movement": 14
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 152,
            "movement": 20
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 167,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 193,
            "movement": -30
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 198,
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 105,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 118,
            "movement": -39
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 134,
            "movement": -9
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 182,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 193,
            "movement": -46
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 198,
            "movement": -39
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
            "position": 7,
            "movement": -5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 55,
            "movement": -9
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
            "position": 191,
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
            "position": 92,
            "movement": -1
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
            "position": 39,
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
            "movement": 70
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 89,
            "movement": 30
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 135,
            "movement": 40
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 136,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 147,
            "movement": 45
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 148,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 160,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 161,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 178,
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
            "position": 28,
            "movement": 5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 81,
            "movement": 0
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 143,
            "movement": 19
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 190,
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
            "position": 59,
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
            "country": "MR",
            "name": "Mauritania",
            "position": 10,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 105,
            "movement": -7
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 142,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 152,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 162,
            "movement": 29
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 176,
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
            "country": "LC",
            "name": "St. Lucia",
            "position": 160,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 183,
            "movement": -122
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 199,
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
    "title": "Damages",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 119,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 169,
            "movement": 16
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
            "position": 87,
            "movement": -31
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-20",
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
            "position": 81,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 118,
            "movement": 13
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ea8f80f2edb20885ac8aed8751716794/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Love Me JeJe",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 16,
            "movement": 172
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-07",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4bfd7acfa6aaa14c1497f19aeb5a0536/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Unfortunate",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 56,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-10",
    "cover": "https://cdn-images.dzcdn.net/images/cover/aeeee8ad4c59f8b6440d19006f0f06e7/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Lagos Love",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 96,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-09",
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 193,
            "movement": -74
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-07",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d015c74bed325b8928343913858fb3c2/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "What You Need - A COLORS SHOW",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "US",
            "name": "United States",
            "position": 198,
            "movement": -13
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-07",
    "cover": "https://cdn-images.dzcdn.net/images/cover/8e6a8bc36abf9401abf57794db386b13/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "If Orange Was A Place",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 199,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-11-09",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b3aea8ba7c55e2eafd6672ff29668bdb/500x500-000000-80-0-0.jpg"
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
  