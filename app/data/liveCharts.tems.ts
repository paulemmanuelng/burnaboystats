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
    platforms: LivePlatform[];
  }
  
  /** When this snapshot was taken (ISO date). */
  export const liveChartsUpdated = "2026-10-16";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-10-16T16:43Z";
  
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
            "movement": 5
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 8,
            "movement": 3
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 9,
            "movement": 2
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 15,
            "movement": 8
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 17,
            "movement": 1
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 17,
            "movement": -2
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 18,
            "movement": -3
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 20,
            "movement": 11
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 20,
            "movement": 10
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 20,
            "movement": 1
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 22,
            "movement": -11
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 22,
            "movement": 0
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 23,
            "movement": -2
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 23,
            "movement": 0
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 24,
            "movement": -2
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 24,
            "movement": 19
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 26,
            "movement": -2
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 28,
            "movement": 6
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 30,
            "movement": -4
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 31,
            "movement": 2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 31,
            "movement": 0
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 32,
            "movement": 4
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 34,
            "movement": -2
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 35,
            "movement": -7
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 36,
            "movement": -2
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
            "movement": 8
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 37,
            "movement": -5
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 39,
            "movement": 19
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 39,
            "movement": -19
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 40,
            "movement": -3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 40,
            "movement": -5
          },
          {
            "country": "BT",
            "name": "Bhutan",
            "position": 43,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 43,
            "movement": -5
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 43,
            "movement": 21
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 44,
            "movement": 9
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 44,
            "movement": -7
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 45,
            "movement": 4
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 46,
            "movement": -8
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 49,
            "movement": -14
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 49,
            "movement": -3
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 51,
            "movement": -11
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 52,
            "movement": 12
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 55,
            "movement": 25
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 59,
            "movement": 9
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 62,
            "movement": 75
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 63,
            "movement": 68
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 65,
            "movement": -3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 68,
            "movement": -21
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 69,
            "movement": 113
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 69,
            "movement": 4
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 70,
            "movement": 7
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 70,
            "movement": 0
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 73,
            "movement": -4
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 81,
            "movement": -14
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 82,
            "movement": -1
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 82,
            "movement": 0
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 84,
            "movement": 14
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 84,
            "movement": 6
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 85,
            "movement": -2
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 85,
            "movement": -4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 88,
            "movement": 36
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 94,
            "movement": -8
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 103,
            "movement": -3
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 108,
            "movement": 12
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 116,
            "movement": 49
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 118,
            "movement": 23
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 118,
            "movement": -3
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 121,
            "movement": -21
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 129,
            "movement": -20
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 131,
            "movement": 22
          },
          {
            "country": "KH",
            "name": "Cambodia",
            "position": 132,
            "movement": 40
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 138,
            "movement": 46
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 138,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 139,
            "movement": 40
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 140,
            "movement": -3
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 150,
            "movement": -15
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 150,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 154,
            "movement": 25
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 155,
            "movement": -22
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 155,
            "movement": -12
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 157,
            "movement": -2
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 158,
            "movement": -9
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 160,
            "movement": 27
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 165,
            "movement": -4
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 169,
            "movement": -13
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 174,
            "movement": -59
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 185,
            "movement": -102
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 188,
            "movement": null,
            "status": "new"
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 199,
            "movement": -35
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
            "position": 3,
            "movement": 0
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 11,
            "movement": 0
          },
          {
            "country": "US",
            "name": "United States",
            "position": 11,
            "movement": -4
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 13,
            "movement": -4
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 15,
            "movement": -3
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 17,
            "movement": -3
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 17,
            "movement": -1
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 19,
            "movement": -2
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 20,
            "movement": -5
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 21,
            "movement": -4
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 23,
            "movement": -5
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 23,
            "movement": -1
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 23,
            "movement": -2
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 24,
            "movement": 0
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 27,
            "movement": -4
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 28,
            "movement": -4
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 31,
            "movement": -2
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 32,
            "movement": -4
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 35,
            "movement": -11
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 38,
            "movement": -2
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 44,
            "movement": -3
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 48,
            "movement": -2
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 51,
            "movement": -5
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 52,
            "movement": -1
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 53,
            "movement": -10
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 53,
            "movement": -7
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 54,
            "movement": -4
          },
          {
            "country": "VE",
            "name": "Venezuela",
            "position": 54,
            "movement": -11
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 55,
            "movement": -15
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 56,
            "movement": 0
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 57,
            "movement": -1
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 60,
            "movement": -9
          },
          {
            "country": "FR",
            "name": "France",
            "position": 60,
            "movement": 1
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 71,
            "movement": -3
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 74,
            "movement": -9
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 81,
            "movement": -18
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 84,
            "movement": -5
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 89,
            "movement": -15
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 93,
            "movement": -15
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 95,
            "movement": -13
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 99,
            "movement": -16
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 100,
            "movement": -6
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 101,
            "movement": -14
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 111,
            "movement": 16
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 111,
            "movement": -13
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 112,
            "movement": -8
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 113,
            "movement": -14
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 114,
            "movement": -12
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 122,
            "movement": -20
          },
          {
            "country": "VN",
            "name": "Vietnam",
            "position": 125,
            "movement": -31
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 126,
            "movement": -10
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 135,
            "movement": 16
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 142,
            "movement": -7
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 146,
            "movement": -10
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 151,
            "movement": -5
          },
          {
            "country": "CN",
            "name": "China",
            "position": 154,
            "movement": -39
          },
          {
            "country": "IN",
            "name": "India",
            "position": 156,
            "movement": -28
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 172,
            "movement": -15
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
            "movement": -1
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 19,
            "movement": -5
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 20,
            "movement": 3
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 28,
            "movement": -4
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 35,
            "movement": -3
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 38,
            "movement": -4
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 44,
            "movement": -1
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 58,
            "movement": -4
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 58,
            "movement": -4
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 58,
            "movement": -1
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 61,
            "movement": -12
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 65,
            "movement": -3
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 73,
            "movement": -12
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 83,
            "movement": 2
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 88,
            "movement": 2
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 93,
            "movement": -6
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 98,
            "movement": 0
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 100,
            "movement": 3
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 101,
            "movement": -10
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 102,
            "movement": -10
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 103,
            "movement": -19
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 105,
            "movement": -8
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 107,
            "movement": -9
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 108,
            "movement": -3
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 109,
            "movement": -3
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 141,
            "movement": -2
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 141,
            "movement": 0
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 158,
            "movement": -9
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 179,
            "movement": -14
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 179,
            "movement": -3
          }
        ]
      },
      {
        "platform": "YouTube",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 10,
            "movement": 2
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 12,
            "movement": 2
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 16,
            "movement": 12
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
            "position": 23,
            "movement": 5
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 25,
            "movement": 9
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 26,
            "movement": 6
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 27,
            "movement": 6
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 29,
            "movement": 9
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 34,
            "movement": 2
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 34,
            "movement": -1
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 38,
            "movement": 5
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 39,
            "movement": null,
            "status": "re"
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 40,
            "movement": null,
            "status": "re"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 42,
            "movement": null,
            "status": "re"
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 49,
            "movement": null,
            "status": "re"
          },
          {
            "country": "US",
            "name": "United States",
            "position": 72,
            "movement": null,
            "status": "re"
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 94,
            "movement": null,
            "status": "re"
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
            "position": 6,
            "movement": 84
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 7,
            "movement": 4
          },
          {
            "country": "IN",
            "name": "India",
            "position": 15,
            "movement": -3
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 27,
            "movement": -9
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 80,
            "movement": -62
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 85,
            "movement": -76
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 93,
            "movement": -9
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 142,
            "movement": -68
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
            "position": 35,
            "movement": 28
          },
          {
            "country": "JP",
            "name": "Japan",
            "position": 74,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
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
            "movement": -1
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 17,
            "movement": 16
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 18,
            "movement": 1
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 19,
            "movement": 44
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 44,
            "movement": -6
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 45,
            "movement": 22
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 53,
            "movement": -7
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 58,
            "movement": 10
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 62,
            "movement": -14
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 69,
            "movement": -30
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 72,
            "movement": 12
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 73,
            "movement": 11
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 87,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 88,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 89,
            "movement": -2
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 91,
            "movement": -6
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 92,
            "movement": 15
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 110,
            "movement": 2
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 128,
            "movement": -3
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 146,
            "movement": -54
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 148,
            "movement": 0
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 153,
            "movement": -13
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 155,
            "movement": -7
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 159,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 182,
            "movement": 2
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 186,
            "movement": -27
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 190,
            "movement": -50
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 193,
            "movement": -26
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 195,
            "movement": -46
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 48,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d1bd3da6698dd5eafc5b4514317039c4/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Hold On",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "US",
            "name": "United States",
            "position": 31,
            "movement": -9
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 38,
            "movement": -6
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 43,
            "movement": -3
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 67,
            "movement": -16
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 71,
            "movement": -16
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 73,
            "movement": -18
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 76,
            "movement": -22
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 78,
            "movement": -16
          },
          {
            "country": "FR",
            "name": "France",
            "position": 89,
            "movement": -16
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 92,
            "movement": -11
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 109,
            "movement": -7
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 117,
            "movement": -13
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 123,
            "movement": -16
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 143,
            "movement": -41
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 145,
            "movement": -23
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 148,
            "movement": -5
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 158,
            "movement": -34
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 167,
            "movement": -50
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
            "position": 60,
            "movement": -6
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/aeeee8ad4c59f8b6440d19006f0f06e7/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Born in the Wild",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BB",
            "name": "Barbados",
            "position": 75,
            "movement": 57
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 76,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 84,
            "movement": 34
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 107,
            "movement": -79
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 109,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 157,
            "movement": -3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 166,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 168,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 169,
            "movement": -4
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 182,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 182,
            "movement": -107
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 184,
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
            "country": "LR",
            "name": "Liberia",
            "position": 90,
            "movement": -21
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 95,
            "movement": 53
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 103,
            "movement": -58
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 112,
            "movement": 13
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 135,
            "movement": 59
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 150,
            "movement": -1
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 162,
            "movement": -39
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 174,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 177,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 182,
            "movement": -30
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
            "position": 24,
            "movement": -10
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 71,
            "movement": -15
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 91,
            "movement": null,
            "status": "new"
          },
          {
            "country": "US",
            "name": "United States",
            "position": 134,
            "movement": -7
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
            "position": 8,
            "movement": -3
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
            "position": 49,
            "movement": -5
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SN",
            "name": "Senegal",
            "position": 28,
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
            "position": 10,
            "movement": 3
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/584f40f4d2b62b611a7ab8561b656ff3/500x500-000000-80-0-0.jpg"
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
            "position": 25,
            "movement": 3
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 79,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 148,
            "movement": -50
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 174,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 197,
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
            "position": 138,
            "movement": -22
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
            "position": 71,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song",
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
            "country": "GM",
            "name": "Gambia",
            "position": 32,
            "movement": -1
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 40,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 81,
            "movement": -4
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
            "position": 168,
            "movement": -1
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 25,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
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
            "country": "BS",
            "name": "The Bahamas",
            "position": 82,
            "movement": 30
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 102,
            "movement": 89
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 142,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 186,
            "movement": -106
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 197,
            "movement": -170
          }
        ]
      }
    ],
    "kind": "album",
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
            "country": "UG",
            "name": "Uganda",
            "position": 164,
            "movement": -24
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 166,
            "movement": 16
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 197,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 197,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
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
            "position": 197,
            "movement": -26
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 159,
            "movement": -102
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d015c74bed325b8928343913858fb3c2/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Mine",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SN",
            "name": "Senegal",
            "position": 23,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/584f40f4d2b62b611a7ab8561b656ff3/500x500-000000-80-0-0.jpg"
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
            "position": 36,
            "movement": -10
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/53e9db9663c87b34723c17bcf9c2a8e8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Higher",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 112,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
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
            "country": "UG",
            "name": "Uganda",
            "position": 126,
            "movement": -6
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3d1528266cd1263f06d630c1c73376d5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Love Me JeJe",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 93,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4bfd7acfa6aaa14c1497f19aeb5a0536/500x500-000000-80-0-0.jpg"
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
            "position": 102,
            "movement": 24
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ea8f80f2edb20885ac8aed8751716794/500x500-000000-80-0-0.jpg"
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
            "position": 56,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "album",
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
  