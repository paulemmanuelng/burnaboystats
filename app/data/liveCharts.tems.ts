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
  export const liveChartsUpdated = "2026-11-04";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-11-04T06:29Z";
  
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
            "position": 5,
            "movement": 3
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 8,
            "movement": 4
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 10,
            "movement": 5
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 13,
            "movement": 15
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 13,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 14,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 15,
            "movement": 32
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 15,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 15,
            "movement": 9
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 16,
            "movement": 4
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 17,
            "movement": 4
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 23,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 24,
            "movement": 16
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 24,
            "movement": 7
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 24,
            "movement": 8
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 25,
            "movement": 15
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 26,
            "movement": -2
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 27,
            "movement": -16
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 27,
            "movement": 18
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 27,
            "movement": 0
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 28,
            "movement": 9
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 29,
            "movement": 20
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 30,
            "movement": 11
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 33,
            "movement": 106
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 34,
            "movement": 20
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 34,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 35,
            "movement": -14
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 35,
            "movement": -16
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 37,
            "movement": 0
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 41,
            "movement": 27
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 43,
            "movement": 89
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 43,
            "movement": 18
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 47,
            "movement": 8
          },
          {
            "country": "MN",
            "name": "Mongolia",
            "position": 47,
            "movement": -3
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 48,
            "movement": 12
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 49,
            "movement": 29
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 49,
            "movement": 23
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 51,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 52,
            "movement": -14
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 53,
            "movement": 49
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 54,
            "movement": 139
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 57,
            "movement": -16
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 58,
            "movement": 58
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 60,
            "movement": -9
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 61,
            "movement": -8
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 62,
            "movement": 22
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 69,
            "movement": 37
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 70,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 71,
            "movement": -31
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 72,
            "movement": 44
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 73,
            "movement": -6
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 75,
            "movement": -7
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 79,
            "movement": 15
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 82,
            "movement": 10
          },
          {
            "country": "BN",
            "name": "Brunei Darussalam",
            "position": 85,
            "movement": null,
            "status": "new"
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 85,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 89,
            "movement": 100
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 91,
            "movement": 15
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 91,
            "movement": 44
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 92,
            "movement": 23
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 92,
            "movement": 2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 94,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 96,
            "movement": 46
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 99,
            "movement": 37
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 102,
            "movement": -29
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 102,
            "movement": 11
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 103,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 103,
            "movement": 56
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 106,
            "movement": 67
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 111,
            "movement": 29
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 117,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 121,
            "movement": -47
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 123,
            "movement": 53
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 129,
            "movement": -13
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 130,
            "movement": 16
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 131,
            "movement": -20
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 137,
            "movement": -34
          },
          {
            "country": "LA",
            "name": "Laos",
            "position": 140,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 140,
            "movement": 53
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 145,
            "movement": -4
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 156,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KH",
            "name": "Cambodia",
            "position": 160,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 160,
            "movement": 33
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 164,
            "movement": -6
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 165,
            "movement": -44
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 177,
            "movement": 11
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 179,
            "movement": -171
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 184,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 184,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 190,
            "movement": null,
            "status": "new"
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 191,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 194,
            "movement": -8
          },
          {
            "country": "AI",
            "name": "Anguilla",
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
            "position": 22,
            "movement": 2
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 23,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 37,
            "movement": -10
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 38,
            "movement": 10
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 46,
            "movement": -9
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 46,
            "movement": -2
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 62,
            "movement": 21
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 74,
            "movement": -6
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 75,
            "movement": -3
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 76,
            "movement": -23
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 85,
            "movement": -18
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 92,
            "movement": -9
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 102,
            "movement": -13
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 104,
            "movement": -4
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 117,
            "movement": -8
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 124,
            "movement": -18
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 126,
            "movement": -35
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 136,
            "movement": -10
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 144,
            "movement": -4
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 145,
            "movement": -13
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 153,
            "movement": -12
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 154,
            "movement": -5
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 160,
            "movement": -19
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 161,
            "movement": -29
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 161,
            "movement": 23
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 169,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 184,
            "movement": -8
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
            "country": "NG",
            "name": "Nigeria",
            "position": 6,
            "movement": 17
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 20,
            "movement": 23
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 21,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IN",
            "name": "India",
            "position": 23,
            "movement": -6
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 28,
            "movement": -21
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 53,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 84,
            "movement": -9
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 106,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 119,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 134,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 199,
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
            "position": 13,
            "movement": 0
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 24,
            "movement": -4
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 25,
            "movement": 25
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 26,
            "movement": -5
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 37,
            "movement": 41
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 38,
            "movement": 3
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 41,
            "movement": 35
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 44,
            "movement": 5
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 52,
            "movement": -15
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 56,
            "movement": -6
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 68,
            "movement": 64
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 72,
            "movement": 13
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 95,
            "movement": 30
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 101,
            "movement": 15
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 108,
            "movement": 4
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 115,
            "movement": 21
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 125,
            "movement": -67
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 130,
            "movement": -5
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 135,
            "movement": 21
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 138,
            "movement": 56
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 157,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 161,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 169,
            "movement": -73
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 179,
            "movement": -53
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 184,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 184,
            "movement": -18
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 192,
            "movement": 1
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 198,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 200,
            "movement": -15
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
            "position": 51,
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
            "position": 7,
            "movement": 8
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 24,
            "movement": 48
          },
          {
            "country": "BN",
            "name": "Brunei Darussalam",
            "position": 29,
            "movement": 70
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 39,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 69,
            "movement": 21
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 82,
            "movement": null,
            "status": "new"
          },
          {
            "country": "US",
            "name": "United States",
            "position": 85,
            "movement": 16
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 86,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 104,
            "movement": 10
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 112,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 145,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 148,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 149,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 174,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
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
            "position": 84,
            "movement": null,
            "status": "new"
          },
          {
            "country": "US",
            "name": "United States",
            "position": 122,
            "movement": 16
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
    "title": "Born in the Wild",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 37,
            "movement": 43
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 48,
            "movement": 74
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 74,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 75,
            "movement": 92
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 131,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 156,
            "movement": 16
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 159,
            "movement": -78
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 170,
            "movement": 15
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 184,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 188,
            "movement": -38
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 192,
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
            "position": 86,
            "movement": -8
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 100,
            "movement": -17
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 105,
            "movement": 39
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 157,
            "movement": -63
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 160,
            "movement": 0
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 179,
            "movement": -6
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 180,
            "movement": 8
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 183,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 189,
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
    "title": "Me & U",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 58,
            "movement": -27
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 101,
            "movement": -55
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 124,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 149,
            "movement": -22
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 158,
            "movement": 29
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
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 17,
            "movement": -3
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
            "position": 109,
            "movement": 55
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
            "position": 103,
            "movement": -34
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 104,
            "movement": 36
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 113,
            "movement": -20
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 152,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 153,
            "movement": 9
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 161,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 177,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 188,
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
            "position": 27,
            "movement": -3
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
            "position": 21,
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
            "position": 67,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 200,
            "movement": -14
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
            "position": 111,
            "movement": 68
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 162,
            "movement": -28
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 143,
            "movement": 25
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 159,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 164,
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
            "position": 26,
            "movement": -3
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
            "country": "BM",
            "name": "Bermuda",
            "position": 49,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 70,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 134,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 168,
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
    "title": "Black Panther: Wakanda Forever - Music From and Inspired By",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "DM",
            "name": "Dominica",
            "position": 73,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 165,
            "movement": -50
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
    "title": "Try Me",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 30,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-04",
    "cover": "https://cdn-images.dzcdn.net/images/cover/0989302f2acc1132d8922b3f292abe4b/500x500-000000-80-0-0.jpg"
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
            "position": 36,
            "movement": -8
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-31",
    "cover": "https://cdn-images.dzcdn.net/images/cover/1adb08918cf6abd499a3c41e2093b5d2/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Higher",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 68,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-04",
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
            "position": 123,
            "movement": 20
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ea8f80f2edb20885ac8aed8751716794/500x500-000000-80-0-0.jpg"
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
  