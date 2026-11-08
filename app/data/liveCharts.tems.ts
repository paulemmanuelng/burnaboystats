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
  export const liveChartsUpdated = "2026-11-08";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-11-08T06:07Z";
  
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
            "position": 4,
            "movement": -1
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 8,
            "movement": 34
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 9,
            "movement": 5
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 10,
            "movement": 0
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 11,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 15,
            "movement": -1
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 15,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 16,
            "movement": -5
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 16,
            "movement": 0
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 19,
            "movement": 0
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 20,
            "movement": -2
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 20,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 21,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 24,
            "movement": -6
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 25,
            "movement": 1
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 25,
            "movement": -2
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 26,
            "movement": -2
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 29,
            "movement": -4
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 31,
            "movement": 8
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 31,
            "movement": -8
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 31,
            "movement": -5
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 32,
            "movement": 16
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 32,
            "movement": -5
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 33,
            "movement": -18
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 34,
            "movement": -14
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 34,
            "movement": -13
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 35,
            "movement": -14
          },
          {
            "country": "MN",
            "name": "Mongolia",
            "position": 37,
            "movement": -3
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 37,
            "movement": -9
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 38,
            "movement": 4
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 39,
            "movement": -3
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 42,
            "movement": 8
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 42,
            "movement": -3
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 42,
            "movement": -7
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 43,
            "movement": 34
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 47,
            "movement": -8
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 47,
            "movement": -15
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 47,
            "movement": -10
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 47,
            "movement": -3
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 52,
            "movement": -23
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 52,
            "movement": 13
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 53,
            "movement": -18
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 54,
            "movement": 0
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 54,
            "movement": -9
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 55,
            "movement": -44
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 58,
            "movement": -1
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 59,
            "movement": -21
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 60,
            "movement": 8
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 61,
            "movement": -14
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 62,
            "movement": 18
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 63,
            "movement": -7
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 64,
            "movement": -32
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 65,
            "movement": -3
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 68,
            "movement": 16
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 70,
            "movement": 1
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 71,
            "movement": -17
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 74,
            "movement": -33
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 75,
            "movement": -7
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 76,
            "movement": 76
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 76,
            "movement": -25
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 78,
            "movement": -10
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 90,
            "movement": -16
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 91,
            "movement": -28
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 95,
            "movement": -89
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 97,
            "movement": -3
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 105,
            "movement": -8
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 108,
            "movement": 17
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 109,
            "movement": -13
          },
          {
            "country": "LA",
            "name": "Laos",
            "position": 112,
            "movement": 32
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 114,
            "movement": -39
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 114,
            "movement": -41
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 115,
            "movement": -27
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 118,
            "movement": -6
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 119,
            "movement": -49
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 121,
            "movement": -31
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 124,
            "movement": -14
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 138,
            "movement": null,
            "status": "new"
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 146,
            "movement": -37
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 148,
            "movement": -31
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 149,
            "movement": 14
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 153,
            "movement": -29
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 157,
            "movement": -30
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 157,
            "movement": -48
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 159,
            "movement": -30
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 159,
            "movement": -77
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 168,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 183,
            "movement": -7
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 183,
            "movement": -19
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 187,
            "movement": -40
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 187,
            "movement": -58
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
            "position": 21,
            "movement": 0
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 22,
            "movement": -1
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 27,
            "movement": 4
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 29,
            "movement": -6
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 31,
            "movement": 3
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 40,
            "movement": 0
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 44,
            "movement": 0
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 46,
            "movement": 10
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 47,
            "movement": -3
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 50,
            "movement": 2
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 60,
            "movement": 4
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 68,
            "movement": -9
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 81,
            "movement": 0
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 82,
            "movement": -6
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 89,
            "movement": -3
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 91,
            "movement": 1
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 93,
            "movement": 8
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 100,
            "movement": 14
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 100,
            "movement": 5
          },
          {
            "country": "FR",
            "name": "France",
            "position": 107,
            "movement": 38
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 123,
            "movement": -11
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 125,
            "movement": -7
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 127,
            "movement": -12
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 140,
            "movement": -7
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 144,
            "movement": -6
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 145,
            "movement": -6
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 149,
            "movement": -16
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 174,
            "movement": 10
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 176,
            "movement": -15
          },
          {
            "country": "VN",
            "name": "Vietnam",
            "position": 188,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 196,
            "movement": -14
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
            "position": 19,
            "movement": 8
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 19,
            "movement": -2
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 28,
            "movement": 3
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 43,
            "movement": -5
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 49,
            "movement": -16
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 54,
            "movement": -6
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 76,
            "movement": -6
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 79,
            "movement": 6
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 79,
            "movement": -10
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 81,
            "movement": -5
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 87,
            "movement": 6
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 91,
            "movement": -15
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 95,
            "movement": -11
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 110,
            "movement": 6
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 110,
            "movement": 7
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 115,
            "movement": -29
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 121,
            "movement": -31
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 123,
            "movement": -6
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 124,
            "movement": -35
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 135,
            "movement": -13
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 137,
            "movement": 1
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 157,
            "movement": -24
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 158,
            "movement": -40
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 165,
            "movement": -47
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 167,
            "movement": 15
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 172,
            "movement": -15
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 181,
            "movement": -14
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
            "country": "TJ",
            "name": "Tajikistan",
            "position": 1,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 6,
            "movement": 27
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 12,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IN",
            "name": "India",
            "position": 13,
            "movement": 10
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 16,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 47,
            "movement": -14
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 48,
            "movement": -6
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 49,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 93,
            "movement": -79
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 163,
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
            "position": 61,
            "movement": -20
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 68,
            "movement": 32
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
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 20,
            "movement": 2
          },
          {
            "country": "US",
            "name": "United States",
            "position": 24,
            "movement": -1
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 32,
            "movement": -7
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 36,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 44,
            "movement": -11
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 48,
            "movement": 7
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 50,
            "movement": 44
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 57,
            "movement": -1
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 58,
            "movement": -15
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 60,
            "movement": 17
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 66,
            "movement": -22
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 66,
            "movement": 9
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 72,
            "movement": -25
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 73,
            "movement": -33
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 74,
            "movement": -9
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 95,
            "movement": -25
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 115,
            "movement": -4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 126,
            "movement": -12
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 134,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 134,
            "movement": 12
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 139,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 149,
            "movement": 44
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 150,
            "movement": 33
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 156,
            "movement": -27
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 156,
            "movement": -14
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 156,
            "movement": -14
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 161,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 173,
            "movement": 12
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 182,
            "movement": 3
          },
          {
            "country": "MN",
            "name": "Mongolia",
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
    "title": "What You Need",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 28,
            "movement": -12
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 28,
            "movement": 7
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 50,
            "movement": 21
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 56,
            "movement": -1
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 68,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 80,
            "movement": 110
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 82,
            "movement": -31
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 84,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 86,
            "movement": -35
          },
          {
            "country": "US",
            "name": "United States",
            "position": 89,
            "movement": 15
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 91,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 94,
            "movement": -69
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 102,
            "movement": 78
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 109,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 113,
            "movement": 70
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 119,
            "movement": 74
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 126,
            "movement": 17
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 149,
            "movement": 22
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 163,
            "movement": -22
          },
          {
            "country": "BT",
            "name": "Bhutan",
            "position": 174,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 183,
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
            "movement": -3
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
            "country": "LR",
            "name": "Liberia",
            "position": 37,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 88,
            "movement": -60
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 138,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 147,
            "movement": -9
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 149,
            "movement": -16
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 152,
            "movement": -42
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 156,
            "movement": -37
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 167,
            "movement": -6
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 187,
            "movement": -92
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 189,
            "movement": -109
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
    "title": "Born in the Wild",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BJ",
            "name": "Benin",
            "position": 126,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 145,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 150,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 155,
            "movement": -47
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 176,
            "movement": 1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 177,
            "movement": -43
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 190,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 199,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
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
    "title": "Me & U",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 122,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 130,
            "movement": 30
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 131,
            "movement": -51
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 152,
            "movement": 16
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
            "movement": 0
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 14,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 40,
            "movement": -11
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
            "position": 189,
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
            "position": 92,
            "movement": -11
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
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 122,
            "movement": -82
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 132,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 134,
            "movement": -41
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 149,
            "movement": -112
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 154,
            "movement": -58
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 166,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 193,
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
            "position": 24,
            "movement": 0
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 33,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 77,
            "movement": -8
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
            "position": 150,
            "movement": 16
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
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 30,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 63,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-07",
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
            "country": "KE",
            "name": "Kenya",
            "position": 177,
            "movement": 18
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
            "position": 50,
            "movement": -11
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/53e9db9663c87b34723c17bcf9c2a8e8/500x500-000000-80-0-0.jpg"
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
            "position": 199,
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
            "position": 49,
            "movement": -11
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-20",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3d1528266cd1263f06d630c1c73376d5/500x500-000000-80-0-0.jpg"
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
            "position": 65,
            "movement": -10
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
            "position": 161,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-07",
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
            "position": 133,
            "movement": 4
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ea8f80f2edb20885ac8aed8751716794/500x500-000000-80-0-0.jpg"
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
            "position": 188,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-07",
    "cover": "https://cdn-images.dzcdn.net/images/cover/8e6a8bc36abf9401abf57794db386b13/500x500-000000-80-0-0.jpg"
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
  