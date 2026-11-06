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
  export const liveChartsUpdated = "2026-11-06";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-11-06T19:29Z";
  
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
            "movement": 7
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 6,
            "movement": -1
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 6,
            "movement": 26
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 7,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 10,
            "movement": -1
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 11,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 11,
            "movement": 7
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 11,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 14,
            "movement": 0
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 14,
            "movement": -8
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 17,
            "movement": 8
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 17,
            "movement": 0
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 18,
            "movement": 15
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 18,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 18,
            "movement": 5
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 19,
            "movement": 8
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 19,
            "movement": 3
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 20,
            "movement": 43
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 21,
            "movement": 9
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 21,
            "movement": 3
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 22,
            "movement": -2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 23,
            "movement": -16
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 24,
            "movement": 40
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 25,
            "movement": 5
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 26,
            "movement": -3
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 28,
            "movement": 9
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 30,
            "movement": 8
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 34,
            "movement": 14
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 35,
            "movement": 10
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 38,
            "movement": 10
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 39,
            "movement": 21
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 39,
            "movement": 41
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 39,
            "movement": 2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 41,
            "movement": 4
          },
          {
            "country": "MN",
            "name": "Mongolia",
            "position": 41,
            "movement": 14
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 41,
            "movement": 126
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 42,
            "movement": 8
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 42,
            "movement": -19
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 43,
            "movement": -21
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 45,
            "movement": -8
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 46,
            "movement": -6
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 47,
            "movement": -22
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 47,
            "movement": -22
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 48,
            "movement": -29
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 50,
            "movement": -14
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 54,
            "movement": 42
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 54,
            "movement": -35
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 56,
            "movement": 36
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 56,
            "movement": 44
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 57,
            "movement": 33
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 61,
            "movement": 31
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 62,
            "movement": 4
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 63,
            "movement": 30
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 67,
            "movement": 1
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 68,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 68,
            "movement": -14
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 68,
            "movement": -19
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 70,
            "movement": 2
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 71,
            "movement": 12
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 71,
            "movement": 40
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 74,
            "movement": -28
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 75,
            "movement": -13
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 79,
            "movement": -30
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 80,
            "movement": -45
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 80,
            "movement": 36
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 82,
            "movement": 47
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 84,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 85,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 88,
            "movement": -20
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 90,
            "movement": 11
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 92,
            "movement": -10
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 96,
            "movement": -32
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 97,
            "movement": -23
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 99,
            "movement": -7
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 100,
            "movement": 5
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 103,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 107,
            "movement": 5
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 109,
            "movement": -7
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 117,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 120,
            "movement": 55
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 120,
            "movement": 14
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 121,
            "movement": -46
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 122,
            "movement": 45
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 124,
            "movement": -18
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 136,
            "movement": 23
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 140,
            "movement": 10
          },
          {
            "country": "LA",
            "name": "Laos",
            "position": 144,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 144,
            "movement": 27
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 147,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 147,
            "movement": 19
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 152,
            "movement": -106
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 158,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 161,
            "movement": -24
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 163,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 170,
            "movement": -47
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
            "position": 21,
            "movement": 1
          },
          {
            "country": "US",
            "name": "United States",
            "position": 21,
            "movement": -1
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 23,
            "movement": 2
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 31,
            "movement": -2
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 34,
            "movement": -2
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 40,
            "movement": 2
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 44,
            "movement": -4
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 44,
            "movement": -5
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 52,
            "movement": 4
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 56,
            "movement": -3
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 59,
            "movement": -4
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 64,
            "movement": -7
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 76,
            "movement": 2
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 81,
            "movement": 2
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 86,
            "movement": -6
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 92,
            "movement": 5
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 101,
            "movement": -14
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 105,
            "movement": -4
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 112,
            "movement": -11
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 114,
            "movement": -4
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 115,
            "movement": -8
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 118,
            "movement": -12
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 133,
            "movement": -7
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 133,
            "movement": -4
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 138,
            "movement": -1
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 139,
            "movement": -1
          },
          {
            "country": "FR",
            "name": "France",
            "position": 145,
            "movement": -2
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 161,
            "movement": 11
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 173,
            "movement": -19
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 182,
            "movement": -3
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 184,
            "movement": -4
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
            "position": 15,
            "movement": 19
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 17,
            "movement": 7
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 19,
            "movement": 1
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 33,
            "movement": 13
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 34,
            "movement": 11
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 40,
            "movement": 3
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 48,
            "movement": 19
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 52,
            "movement": 12
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 52,
            "movement": 23
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 53,
            "movement": 21
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 63,
            "movement": 71
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 68,
            "movement": 19
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 74,
            "movement": 68
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 77,
            "movement": 22
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 80,
            "movement": 35
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 83,
            "movement": 70
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 85,
            "movement": -18
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 90,
            "movement": 50
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 93,
            "movement": 24
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 95,
            "movement": 4
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 96,
            "movement": 35
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 98,
            "movement": 13
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 104,
            "movement": 54
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 104,
            "movement": 19
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 148,
            "movement": 21
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 155,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 159,
            "movement": 14
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 163,
            "movement": -7
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 174,
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
        "numberOnes": 0,
        "entries": [
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 18,
            "movement": -3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 20,
            "movement": -18
          },
          {
            "country": "IN",
            "name": "India",
            "position": 38,
            "movement": 21
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 39,
            "movement": -35
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 83,
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
            "position": 41,
            "movement": 54
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 63,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 93,
            "movement": null,
            "status": "new"
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 100,
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
            "movement": -3
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 22,
            "movement": 18
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 25,
            "movement": 4
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 33,
            "movement": 22
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 37,
            "movement": 3
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 40,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LY",
            "name": "Libya",
            "position": 43,
            "movement": 5
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 43,
            "movement": 34
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 47,
            "movement": 25
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 55,
            "movement": -3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 56,
            "movement": -4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 65,
            "movement": 16
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 70,
            "movement": 39
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 73,
            "movement": -11
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 75,
            "movement": -32
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 77,
            "movement": 21
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 94,
            "movement": -59
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 111,
            "movement": -1
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 129,
            "movement": 27
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 137,
            "movement": 1
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 142,
            "movement": 12
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 143,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 147,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 173,
            "movement": 13
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 175,
            "movement": -67
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 183,
            "movement": -4
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 184,
            "movement": -39
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 185,
            "movement": -75
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 188,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 194,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 199,
            "movement": -11
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
            "position": 16,
            "movement": -6
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 25,
            "movement": 67
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 55,
            "movement": -9
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 66,
            "movement": 13
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 71,
            "movement": 14
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 85,
            "movement": null,
            "status": "new"
          },
          {
            "country": "US",
            "name": "United States",
            "position": 87,
            "movement": 5
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 141,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 151,
            "movement": -99
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 151,
            "movement": -9
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 164,
            "movement": -48
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 171,
            "movement": -16
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 182,
            "movement": null,
            "status": "new"
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
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 38,
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
            "position": 47,
            "movement": 5
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
            "position": 19,
            "movement": 24
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
    "title": "For Broken Ears",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 28,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 33,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 75,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 80,
            "movement": 116
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 110,
            "movement": -48
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 119,
            "movement": -13
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 133,
            "movement": -18
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 138,
            "movement": 23
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 155,
            "movement": -34
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 161,
            "movement": -11
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 179,
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
    "title": "Me & U",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 20,
            "movement": 32
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 94,
            "movement": 91
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 160,
            "movement": -9
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 167,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 171,
            "movement": -36
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
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 28,
            "movement": -6
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
            "position": 168,
            "movement": -45
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
            "position": 81,
            "movement": -10
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
            "country": "BM",
            "name": "Bermuda",
            "position": 61,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 93,
            "movement": 19
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 107,
            "movement": 20
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 108,
            "movement": 13
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 165,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 177,
            "movement": -25
          },
          {
            "country": "SN",
            "name": "Senegal",
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
    "title": "Free Mind",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 89,
            "movement": 8
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 104,
            "movement": -77
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 161,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 170,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 182,
            "movement": 10
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 189,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 195,
            "movement": -42
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
            "position": 38,
            "movement": -6
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 142,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 166,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 194,
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
            "country": "GM",
            "name": "Gambia",
            "position": 27,
            "movement": 0
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 33,
            "movement": -12
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 72,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ee712ec0084d50159ae6564de833ce12/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Damages",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 25,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 37,
            "movement": -6
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 135,
            "movement": 16
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
            "country": "KE",
            "name": "Kenya",
            "position": 137,
            "movement": -16
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 172,
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
            "position": 141,
            "movement": -131
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
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
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 40,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 49,
            "movement": -19
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 96,
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
    "title": "Burning",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 84,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-06",
    "cover": "https://cdn-images.dzcdn.net/images/cover/aeeee8ad4c59f8b6440d19006f0f06e7/500x500-000000-80-0-0.jpg"
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
            "position": 55,
            "movement": -13
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-31",
    "cover": "https://cdn-images.dzcdn.net/images/cover/1adb08918cf6abd499a3c41e2093b5d2/500x500-000000-80-0-0.jpg"
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
            "position": 53,
            "movement": 1
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
            "position": 82,
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
  