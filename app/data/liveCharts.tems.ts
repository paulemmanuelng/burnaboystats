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
  export const liveChartsUpdated = "2026-10-29";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-10-29T13:07Z";
  
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
            "country": "CV",
            "name": "Cape Verde",
            "position": 12,
            "movement": -1
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 15,
            "movement": -3
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 16,
            "movement": 0
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 19,
            "movement": -6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 21,
            "movement": 0
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 21,
            "movement": 1
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 22,
            "movement": 0
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 23,
            "movement": -15
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 24,
            "movement": 15
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 25,
            "movement": 33
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 26,
            "movement": -9
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 27,
            "movement": 0
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 27,
            "movement": 5
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 28,
            "movement": 6
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 31,
            "movement": 10
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 33,
            "movement": -9
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 33,
            "movement": 6
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 35,
            "movement": -4
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 35,
            "movement": 16
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 35,
            "movement": 5
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 35,
            "movement": -2
          },
          {
            "country": "MN",
            "name": "Mongolia",
            "position": 36,
            "movement": 7
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 38,
            "movement": 106
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 41,
            "movement": 124
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 42,
            "movement": 15
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 42,
            "movement": 11
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 42,
            "movement": 7
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 45,
            "movement": -4
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 47,
            "movement": -16
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 48,
            "movement": 5
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 50,
            "movement": -26
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 51,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 54,
            "movement": 70
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 55,
            "movement": 18
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 61,
            "movement": -13
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 64,
            "movement": -6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 64,
            "movement": -9
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 65,
            "movement": 5
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 65,
            "movement": -17
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 69,
            "movement": 3
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 73,
            "movement": 12
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 76,
            "movement": -3
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 78,
            "movement": 24
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 78,
            "movement": 50
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 79,
            "movement": 3
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 82,
            "movement": -1
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 83,
            "movement": 3
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 84,
            "movement": -3
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 88,
            "movement": -26
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 90,
            "movement": -27
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 92,
            "movement": -4
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 99,
            "movement": -13
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 103,
            "movement": -8
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 108,
            "movement": -3
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 110,
            "movement": -14
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 111,
            "movement": 43
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 112,
            "movement": 35
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 114,
            "movement": -16
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 115,
            "movement": -25
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 115,
            "movement": 21
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 117,
            "movement": -10
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 122,
            "movement": -4
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 125,
            "movement": 1
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 125,
            "movement": -43
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 128,
            "movement": -2
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 132,
            "movement": -17
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 147,
            "movement": -12
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 150,
            "movement": -67
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 152,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 157,
            "movement": -53
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 158,
            "movement": 4
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 162,
            "movement": -50
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 165,
            "movement": 4
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 166,
            "movement": -7
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 169,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 175,
            "movement": -19
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 176,
            "movement": 18
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 179,
            "movement": 13
          },
          {
            "country": "MM",
            "name": "Myanmar",
            "position": 179,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 183,
            "movement": -36
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 188,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 189,
            "movement": 8
          },
          {
            "country": "MK",
            "name": "North Macedonia",
            "position": 189,
            "movement": -19
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 191,
            "movement": -14
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 194,
            "movement": -150
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 198,
            "movement": -138
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 199,
            "movement": -7
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
            "position": 20,
            "movement": 1
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 22,
            "movement": 3
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 25,
            "movement": 0
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 32,
            "movement": 3
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 35,
            "movement": 5
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 37,
            "movement": 5
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 54,
            "movement": -5
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 59,
            "movement": 0
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 60,
            "movement": 0
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 67,
            "movement": -6
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 70,
            "movement": 5
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 73,
            "movement": 9
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 76,
            "movement": 4
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 94,
            "movement": 3
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 97,
            "movement": 1
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 99,
            "movement": 6
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 105,
            "movement": 5
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 106,
            "movement": -8
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 116,
            "movement": 14
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 116,
            "movement": -2
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 117,
            "movement": 11
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 121,
            "movement": 27
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 133,
            "movement": 6
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 139,
            "movement": 1
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 150,
            "movement": -5
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 153,
            "movement": -3
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 162,
            "movement": 31
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 174,
            "movement": 23
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
            "country": "MD",
            "name": "Moldova",
            "position": 3,
            "movement": -2
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 4,
            "movement": -3
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 15,
            "movement": -14
          },
          {
            "country": "IN",
            "name": "India",
            "position": 16,
            "movement": 38
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 28,
            "movement": -8
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 41,
            "movement": -15
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 48,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 93,
            "movement": 4
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
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 19,
            "movement": 19
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 56,
            "movement": -9
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
            "position": 12,
            "movement": 0
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 17,
            "movement": 1
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 38,
            "movement": -4
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 46,
            "movement": -26
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 47,
            "movement": 7
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 50,
            "movement": -10
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 58,
            "movement": 6
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 62,
            "movement": -13
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 62,
            "movement": 3
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 78,
            "movement": -29
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 80,
            "movement": 30
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 85,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 86,
            "movement": 6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 91,
            "movement": 36
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 92,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 97,
            "movement": 1
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 129,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 143,
            "movement": -35
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 143,
            "movement": -11
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 146,
            "movement": 3
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 148,
            "movement": -3
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 148,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 149,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 151,
            "movement": 20
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 172,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 175,
            "movement": 9
          },
          {
            "country": "MN",
            "name": "Mongolia",
            "position": 180,
            "movement": null,
            "status": "new"
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 186,
            "movement": 5
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 198,
            "movement": -34
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
            "position": 176,
            "movement": 19
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
            "position": 12,
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
    "title": "Me & U",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 102,
            "movement": -1
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 105,
            "movement": -23
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 127,
            "movement": -6
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 146,
            "movement": 29
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 157,
            "movement": -113
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 196,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 196,
            "movement": -25
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
            "position": 27,
            "movement": -26
          },
          {
            "country": "DO",
            "name": "Dominican Republic",
            "position": 169,
            "movement": -26
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
            "position": 126,
            "movement": 7
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
            "country": "SZ",
            "name": "Eswatini",
            "position": 75,
            "movement": -29
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 80,
            "movement": 88
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 91,
            "movement": -55
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 94,
            "movement": 29
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 119,
            "movement": -58
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 159,
            "movement": 11
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 160,
            "movement": 34
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 164,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 192,
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
    "title": "For Broken Ears",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 49,
            "movement": 8
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 52,
            "movement": 9
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 117,
            "movement": -7
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 120,
            "movement": 11
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 145,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 152,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 153,
            "movement": 3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 158,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 161,
            "movement": null,
            "status": "new"
          },
          {
            "country": "JM",
            "name": "Jamaica",
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
            "position": 10,
            "movement": 0
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 74,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 100,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 101,
            "movement": -54
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 156,
            "movement": null,
            "status": "new"
          },
          {
            "country": "US",
            "name": "United States",
            "position": 162,
            "movement": 2
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
    "title": "Essence",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 61,
            "movement": -23
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 133,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 148,
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
            "country": "DM",
            "name": "Dominica",
            "position": 25,
            "movement": -6
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 27,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 65,
            "movement": 12
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
            "position": 154,
            "movement": 6
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ee712ec0084d50159ae6564de833ce12/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Free Mind",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 106,
            "movement": -70
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 151,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 157,
            "movement": 34
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 192,
            "movement": -34
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
            "position": 81,
            "movement": -49
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
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 33,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 102,
            "movement": 65
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 131,
            "movement": -19
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 165,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 180,
            "movement": 20
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
            "country": "UG",
            "name": "Uganda",
            "position": 119,
            "movement": -2
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 172,
            "movement": null,
            "status": "new"
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "DM",
            "name": "Dominica",
            "position": 176,
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
            "position": 54,
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
    "title": "Higher",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 133,
            "movement": 32
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-27",
    "cover": "https://cdn-images.dzcdn.net/images/cover/53e9db9663c87b34723c17bcf9c2a8e8/500x500-000000-80-0-0.jpg"
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
            "position": 61,
            "movement": -44
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
            "position": 75,
            "movement": -48
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-28",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3e59ce9bff06c58a3016b13aa83baac0/500x500-000000-80-0-0.jpg"
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
            "position": 142,
            "movement": 16
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-20",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d015c74bed325b8928343913858fb3c2/500x500-000000-80-0-0.jpg"
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
            "position": 87,
            "movement": -50
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
            "position": 88,
            "movement": -50
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-28",
    "cover": "https://cdn-images.dzcdn.net/images/cover/53e9db9663c87b34723c17bcf9c2a8e8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Big Daddy",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 173,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-28",
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
            "position": 111,
            "movement": 6
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
            "country": "SB",
            "name": "Solomon Islands",
            "position": 96,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-10-27",
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
  