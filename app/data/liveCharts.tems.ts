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
  export const liveChartsUpdated = "2026-10-21";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-10-21T11:55Z";
  
  /** Every platform represented in the current snapshot. */
  export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","Spotify Albums","YouTube","iTunes"];
  
  export const liveCharts: LiveRelease[] = [
  {
    "title": "Raindance",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 1,
        "entries": [
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 1,
            "movement": 31
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 6,
            "movement": 8
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 7,
            "movement": -1
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 14,
            "movement": 9
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 16,
            "movement": 0
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 16,
            "movement": 6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 20,
            "movement": 1
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 21,
            "movement": 4
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 22,
            "movement": 0
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 22,
            "movement": 1
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 23,
            "movement": -4
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 23,
            "movement": 6
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 24,
            "movement": 5
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 25,
            "movement": 2
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 26,
            "movement": 7
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 26,
            "movement": 30
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 26,
            "movement": -10
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 26,
            "movement": 1
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 29,
            "movement": -4
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 30,
            "movement": 38
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 30,
            "movement": -4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 31,
            "movement": 4
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 32,
            "movement": 11
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 33,
            "movement": -3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 33,
            "movement": 1
          },
          {
            "country": "MN",
            "name": "Mongolia",
            "position": 36,
            "movement": 0
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 36,
            "movement": 2
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 37,
            "movement": 4
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 40,
            "movement": 35
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 49,
            "movement": -11
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 50,
            "movement": 16
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 56,
            "movement": -7
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 57,
            "movement": 9
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 59,
            "movement": 7
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 60,
            "movement": -28
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 61,
            "movement": 18
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 61,
            "movement": -2
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 62,
            "movement": -17
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 65,
            "movement": -3
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 72,
            "movement": 20
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 72,
            "movement": 5
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 74,
            "movement": 77
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 74,
            "movement": 10
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 79,
            "movement": 0
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 81,
            "movement": 2
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 82,
            "movement": 8
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 82,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 82,
            "movement": 59
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 83,
            "movement": 3
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 84,
            "movement": -32
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 84,
            "movement": 11
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 84,
            "movement": -18
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 85,
            "movement": 16
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 86,
            "movement": 5
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 88,
            "movement": -2
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 89,
            "movement": -27
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 90,
            "movement": 6
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 94,
            "movement": 8
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 97,
            "movement": 1
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 100,
            "movement": -18
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 104,
            "movement": 1
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 104,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 106,
            "movement": 68
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 106,
            "movement": -33
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 108,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 108,
            "movement": -14
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 110,
            "movement": -28
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 111,
            "movement": 71
          },
          {
            "country": "BT",
            "name": "Bhutan",
            "position": 119,
            "movement": -31
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 130,
            "movement": -9
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 136,
            "movement": 36
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 137,
            "movement": -13
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 142,
            "movement": 4
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 147,
            "movement": -48
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 152,
            "movement": -24
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 152,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 157,
            "movement": 31
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 163,
            "movement": 6
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 165,
            "movement": 5
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 165,
            "movement": -96
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 166,
            "movement": -1
          },
          {
            "country": "KH",
            "name": "Cambodia",
            "position": 167,
            "movement": -37
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 174,
            "movement": -95
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 175,
            "movement": -113
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 181,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 193,
            "movement": 0
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 196,
            "movement": -5
          }
        ]
      },
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BR",
            "name": "Brazil",
            "position": 12,
            "movement": -6
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 14,
            "movement": -1
          },
          {
            "country": "US",
            "name": "United States",
            "position": 15,
            "movement": -2
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 21,
            "movement": 0
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 27,
            "movement": -4
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 28,
            "movement": -4
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 30,
            "movement": -1
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 35,
            "movement": 0
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 43,
            "movement": -6
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 43,
            "movement": -11
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 47,
            "movement": 2
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 49,
            "movement": -7
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 50,
            "movement": -3
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 52,
            "movement": -7
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 56,
            "movement": 3
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 58,
            "movement": -4
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 71,
            "movement": -21
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 71,
            "movement": -3
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 72,
            "movement": -14
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 73,
            "movement": 1
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 77,
            "movement": -20
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 77,
            "movement": -10
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 79,
            "movement": -1
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 82,
            "movement": -4
          },
          {
            "country": "FR",
            "name": "France",
            "position": 85,
            "movement": -10
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 87,
            "movement": -6
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 90,
            "movement": -13
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 93,
            "movement": -10
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 93,
            "movement": 5
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 94,
            "movement": 5
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 96,
            "movement": -7
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 101,
            "movement": -6
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 103,
            "movement": -3
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 105,
            "movement": -1
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 113,
            "movement": 0
          },
          {
            "country": "VE",
            "name": "Venezuela",
            "position": 119,
            "movement": -21
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 123,
            "movement": -8
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 127,
            "movement": -1
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 128,
            "movement": 4
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 131,
            "movement": 20
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 132,
            "movement": -38
          },
          {
            "country": "VN",
            "name": "Vietnam",
            "position": 135,
            "movement": -2
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 144,
            "movement": 5
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 150,
            "movement": -8
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 153,
            "movement": -21
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 162,
            "movement": -22
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 166,
            "movement": -7
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 178,
            "movement": -19
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 184,
            "movement": -11
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 184,
            "movement": -13
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
            "position": 17,
            "movement": -2
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 21,
            "movement": -2
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 22,
            "movement": 16
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 28,
            "movement": 0
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 29,
            "movement": 0
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 32,
            "movement": 1
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 33,
            "movement": 4
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 47,
            "movement": -2
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 59,
            "movement": -2
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 60,
            "movement": -1
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 61,
            "movement": 7
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 61,
            "movement": -12
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 64,
            "movement": -13
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 67,
            "movement": 9
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 71,
            "movement": 33
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 79,
            "movement": 10
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 84,
            "movement": 8
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 86,
            "movement": -7
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 89,
            "movement": 5
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 97,
            "movement": 7
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 100,
            "movement": -6
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 100,
            "movement": -3
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 101,
            "movement": 18
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 111,
            "movement": 19
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 112,
            "movement": -1
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 118,
            "movement": 0
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 130,
            "movement": 22
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 140,
            "movement": 14
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 169,
            "movement": -3
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 172,
            "movement": 4
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 195,
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
            "position": 9,
            "movement": 3
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 13,
            "movement": -3
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 20,
            "movement": -3
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 27,
            "movement": -2
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 27,
            "movement": 0
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 27,
            "movement": -11
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 27,
            "movement": -4
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 30,
            "movement": -4
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 34,
            "movement": 0
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 36,
            "movement": -7
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 41,
            "movement": -7
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 42,
            "movement": -2
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 45,
            "movement": -7
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 47,
            "movement": 2
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
            "position": 3,
            "movement": 19
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 11,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 18,
            "movement": 48
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 28,
            "movement": -21
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 38,
            "movement": -9
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 40,
            "movement": -36
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 41,
            "movement": -9
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 49,
            "movement": -9
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 52,
            "movement": -17
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 90,
            "movement": -77
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 123,
            "movement": -36
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 126,
            "movement": -38
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
            "position": 24,
            "movement": 19
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 36,
            "movement": 26
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 67,
            "movement": -17
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 95,
            "movement": -40
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
            "country": "BM",
            "name": "Bermuda",
            "position": 14,
            "movement": 4
          },
          {
            "country": "US",
            "name": "United States",
            "position": 17,
            "movement": 1
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 32,
            "movement": 16
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 32,
            "movement": 17
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 34,
            "movement": 70
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 35,
            "movement": 7
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 38,
            "movement": -7
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 56,
            "movement": -1
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 63,
            "movement": -3
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 81,
            "movement": 67
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 83,
            "movement": -3
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 86,
            "movement": 14
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 96,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 97,
            "movement": -38
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 101,
            "movement": 36
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 112,
            "movement": 6
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 118,
            "movement": 18
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 134,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 135,
            "movement": 24
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 140,
            "movement": 21
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 146,
            "movement": 1
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 155,
            "movement": -24
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 156,
            "movement": -17
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 161,
            "movement": 22
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 187,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 191,
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
            "position": 129,
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
            "position": 89,
            "movement": -4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 94,
            "movement": 38
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 95,
            "movement": 38
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 100,
            "movement": -66
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 131,
            "movement": -8
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 155,
            "movement": 43
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 156,
            "movement": -9
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 173,
            "movement": -29
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 174,
            "movement": -52
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 174,
            "movement": -59
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 176,
            "movement": -2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 183,
            "movement": -6
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 185,
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
            "position": 146,
            "movement": -6
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
            "position": 97,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 116,
            "movement": 50
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 176,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 179,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 181,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 188,
            "movement": null,
            "status": "new"
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 192,
            "movement": -35
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
            "position": 44,
            "movement": 11
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 150,
            "movement": 6
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 175,
            "movement": -3
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 189,
            "movement": 1
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
            "position": 134,
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
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/21ffdcad2bde4b25ba9a5a3a53193b05/500x500-000000-80-0-0.jpg"
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
            "movement": 2
          },
          {
            "country": "BN",
            "name": "Brunei Darussalam",
            "position": 32,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 83,
            "movement": -26
          },
          {
            "country": "US",
            "name": "United States",
            "position": 159,
            "movement": -2
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 175,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
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
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 34,
            "movement": -18
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
            "movement": 1
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
            "position": 88,
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
            "movement": 2
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
            "country": "LR",
            "name": "Liberia",
            "position": 40,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 93,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 135,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 138,
            "movement": 14
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 162,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 190,
            "movement": -49
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 195,
            "movement": -107
          },
          {
            "country": "GD",
            "name": "Grenada",
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
            "position": 87,
            "movement": -1
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 162,
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
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 159,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 162,
            "movement": -8
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 179,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 182,
            "movement": -5
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
            "position": 23,
            "movement": 8
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 32,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 88,
            "movement": -3
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
            "position": 159,
            "movement": 8
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ee712ec0084d50159ae6564de833ce12/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Hold On",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 115,
            "movement": -13
          },
          {
            "country": "US",
            "name": "United States",
            "position": 164,
            "movement": -31
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 174,
            "movement": -18
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 196,
            "movement": -17
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/aeeee8ad4c59f8b6440d19006f0f06e7/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Love Is A Kingdom",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 99,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 179,
            "movement": -46
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 190,
            "movement": -55
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 191,
            "movement": -53
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
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
            "country": "GM",
            "name": "Gambia",
            "position": 182,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
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
            "country": "NG",
            "name": "Nigeria",
            "position": 166,
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
    "title": "Black Panther: Wakanda Forever - Music From and Inspired By",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 9,
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
            "position": 56,
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
    "title": "Crazy Tings",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 79,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-21",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3e59ce9bff06c58a3016b13aa83baac0/500x500-000000-80-0-0.jpg"
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
            "position": 86,
            "movement": -8
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ea8f80f2edb20885ac8aed8751716794/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Interference",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 73,
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
    "title": "Damages",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 181,
            "movement": 5
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
            "position": 83,
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
  