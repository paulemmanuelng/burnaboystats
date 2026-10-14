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
  export const liveChartsUpdated = "2026-10-14";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-10-14T04:59Z";
  
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
            "country": "TM",
            "name": "Turkmenistan",
            "position": 7,
            "movement": 17
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 10,
            "movement": 3
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 10,
            "movement": 5
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 11,
            "movement": 3
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 13,
            "movement": 0
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 15,
            "movement": 2
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 15,
            "movement": 0
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 17,
            "movement": 13
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 17,
            "movement": -6
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 19,
            "movement": 0
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 21,
            "movement": 0
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 23,
            "movement": 5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 23,
            "movement": -3
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 24,
            "movement": 4
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 25,
            "movement": 1
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 25,
            "movement": -3
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 27,
            "movement": 40
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 27,
            "movement": 122
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 28,
            "movement": 7
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 28,
            "movement": 3
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 29,
            "movement": 11
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 30,
            "movement": -1
          },
          {
            "country": "MN",
            "name": "Mongolia",
            "position": 33,
            "movement": -2
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 34,
            "movement": -2
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 34,
            "movement": 3
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 35,
            "movement": -9
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 35,
            "movement": -3
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 38,
            "movement": 0
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 38,
            "movement": 3
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 40,
            "movement": 11
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 42,
            "movement": 13
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 43,
            "movement": 9
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 43,
            "movement": 20
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 45,
            "movement": -5
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 46,
            "movement": -5
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 47,
            "movement": -10
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 50,
            "movement": -8
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 50,
            "movement": 4
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 51,
            "movement": -9
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 52,
            "movement": 15
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 54,
            "movement": -17
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 59,
            "movement": -16
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 61,
            "movement": 7
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 61,
            "movement": 1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 63,
            "movement": -10
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 63,
            "movement": 5
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 65,
            "movement": 3
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 66,
            "movement": 26
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 66,
            "movement": -3
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 69,
            "movement": -3
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 71,
            "movement": -30
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 71,
            "movement": 10
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 72,
            "movement": 119
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 73,
            "movement": 6
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 76,
            "movement": 44
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 77,
            "movement": -12
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 81,
            "movement": -37
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 82,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 83,
            "movement": 102
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 88,
            "movement": 5
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 90,
            "movement": -7
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 100,
            "movement": 2
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 105,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 107,
            "movement": 7
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 110,
            "movement": 89
          },
          {
            "country": "LA",
            "name": "Laos",
            "position": 110,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 110,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 111,
            "movement": -43
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 116,
            "movement": 2
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 119,
            "movement": -73
          },
          {
            "country": "KH",
            "name": "Cambodia",
            "position": 119,
            "movement": -38
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 122,
            "movement": -17
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 123,
            "movement": -3
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 127,
            "movement": 17
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 128,
            "movement": 7
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 128,
            "movement": 12
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 129,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 129,
            "movement": -29
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 130,
            "movement": 7
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 132,
            "movement": -45
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 135,
            "movement": -10
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 136,
            "movement": 0
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 138,
            "movement": -23
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 143,
            "movement": 14
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 147,
            "movement": 27
          },
          {
            "country": "MM",
            "name": "Myanmar",
            "position": 152,
            "movement": 31
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 162,
            "movement": 7
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 162,
            "movement": -4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 167,
            "movement": 8
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 169,
            "movement": -7
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 172,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 173,
            "movement": 6
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 191,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 194,
            "movement": -9
          }
        ]
      },
      {
        "platform": "Shazam",
        "numberOnes": 1,
        "entries": [
          {
            "country": "BR",
            "name": "Brazil",
            "position": 1,
            "movement": 0
          },
          {
            "country": "US",
            "name": "United States",
            "position": 4,
            "movement": 1
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 7,
            "movement": -1
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 7,
            "movement": 0
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 8,
            "movement": -1
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 8,
            "movement": 0
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 9,
            "movement": -1
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 12,
            "movement": -1
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 13,
            "movement": 1
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 14,
            "movement": -2
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 15,
            "movement": -2
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 15,
            "movement": -1
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 16,
            "movement": 0
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 16,
            "movement": -1
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 17,
            "movement": -4
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 18,
            "movement": -3
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 20,
            "movement": 0
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 21,
            "movement": -1
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 24,
            "movement": -5
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 24,
            "movement": -4
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 27,
            "movement": -2
          },
          {
            "country": "VE",
            "name": "Venezuela",
            "position": 27,
            "movement": -8
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 28,
            "movement": -5
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 29,
            "movement": -2
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 30,
            "movement": -5
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 32,
            "movement": -6
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 36,
            "movement": 0
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 38,
            "movement": -6
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 42,
            "movement": 5
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 43,
            "movement": -4
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 45,
            "movement": -7
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 47,
            "movement": -11
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 48,
            "movement": -8
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 49,
            "movement": -9
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 52,
            "movement": -5
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 60,
            "movement": -6
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 62,
            "movement": -10
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 63,
            "movement": -7
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 64,
            "movement": -9
          },
          {
            "country": "FR",
            "name": "France",
            "position": 64,
            "movement": -4
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 65,
            "movement": -10
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 66,
            "movement": -12
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 68,
            "movement": -5
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 70,
            "movement": -8
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 74,
            "movement": -7
          },
          {
            "country": "CN",
            "name": "China",
            "position": 76,
            "movement": -5
          },
          {
            "country": "IN",
            "name": "India",
            "position": 78,
            "movement": -4
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 80,
            "movement": -6
          },
          {
            "country": "VN",
            "name": "Vietnam",
            "position": 85,
            "movement": -11
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 94,
            "movement": -5
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 102,
            "movement": 0
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 104,
            "movement": -10
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 107,
            "movement": -8
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 113,
            "movement": -2
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 113,
            "movement": -12
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 116,
            "movement": -12
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 124,
            "movement": -10
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 131,
            "movement": -14
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
            "position": 14,
            "movement": 0
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 16,
            "movement": 0
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 16,
            "movement": 3
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 24,
            "movement": 17
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 25,
            "movement": 3
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 31,
            "movement": 5
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 34,
            "movement": 9
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 39,
            "movement": 2
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 44,
            "movement": 5
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 47,
            "movement": 4
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 49,
            "movement": 17
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 56,
            "movement": 2
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 57,
            "movement": 11
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 62,
            "movement": 11
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 71,
            "movement": 15
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 72,
            "movement": 13
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 73,
            "movement": 1
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 76,
            "movement": 19
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 79,
            "movement": 10
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 83,
            "movement": 17
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 84,
            "movement": 7
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 85,
            "movement": 14
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 85,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 100,
            "movement": 4
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 103,
            "movement": -12
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 111,
            "movement": 27
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 124,
            "movement": 21
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 136,
            "movement": -3
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 143,
            "movement": 11
          },
          {
            "country": "PA",
            "name": "Panama",
            "position": 169,
            "movement": null,
            "status": "new"
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 169,
            "movement": 5
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 189,
            "movement": null,
            "status": "new"
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
            "movement": 48
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 9,
            "movement": 15
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 17,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 37,
            "movement": 45
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 55,
            "movement": -35
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 63,
            "movement": -14
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 92,
            "movement": -38
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 94,
            "movement": -15
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 98,
            "movement": -19
          },
          {
            "country": "IN",
            "name": "India",
            "position": 99,
            "movement": -46
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 167,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DK",
            "name": "Denmark",
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
            "country": "UK",
            "name": "United Kingdom",
            "position": 12,
            "movement": 0
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 14,
            "movement": 0
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
            "position": 28,
            "movement": 1
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 28,
            "movement": 6
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 32,
            "movement": 6
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 33,
            "movement": 7
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 33,
            "movement": 2
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 34,
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 36,
            "movement": 7
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 38,
            "movement": -3
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 43,
            "movement": 4
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
            "position": 19,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 31,
            "movement": 4
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 35,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 72,
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
            "position": 14,
            "movement": 0
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 19,
            "movement": 1
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 25,
            "movement": 98
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 44,
            "movement": -10
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 44,
            "movement": -8
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 49,
            "movement": 2
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 52,
            "movement": 140
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 54,
            "movement": 5
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 56,
            "movement": 24
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 67,
            "movement": 11
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 69,
            "movement": 6
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 76,
            "movement": 35
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 90,
            "movement": 5
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 94,
            "movement": 8
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 101,
            "movement": 17
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 113,
            "movement": -12
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 116,
            "movement": -22
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 120,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 121,
            "movement": null,
            "status": "new"
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 123,
            "movement": 15
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 135,
            "movement": 30
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 141,
            "movement": -18
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 145,
            "movement": 39
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 147,
            "movement": 46
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 149,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 158,
            "movement": -10
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 167,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 172,
            "movement": -94
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 180,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 184,
            "movement": -54
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 195,
            "movement": -10
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 196,
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
            "position": 12,
            "movement": -5
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 23,
            "movement": -1
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 26,
            "movement": -2
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 29,
            "movement": -8
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 32,
            "movement": -7
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 33,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 37,
            "movement": -15
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 46,
            "movement": -4
          },
          {
            "country": "FR",
            "name": "France",
            "position": 51,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 55,
            "movement": -14
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 63,
            "movement": -1
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 72,
            "movement": -7
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 74,
            "movement": -23
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 77,
            "movement": -18
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 79,
            "movement": -5
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 84,
            "movement": -4
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 102,
            "movement": -13
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 113,
            "movement": -19
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 115,
            "movement": -14
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 119,
            "movement": -32
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 120,
            "movement": -9
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 128,
            "movement": -31
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 147,
            "movement": -4
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 152,
            "movement": -18
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 169,
            "movement": -20
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
            "position": 51,
            "movement": -9
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
            "country": "BZ",
            "name": "Belize",
            "position": 13,
            "movement": -9
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 39,
            "movement": 142
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 39,
            "movement": 116
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 49,
            "movement": 63
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 109,
            "movement": -78
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 110,
            "movement": 63
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 116,
            "movement": 24
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 118,
            "movement": 76
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 119,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 137,
            "movement": -11
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 145,
            "movement": -10
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 159,
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
            "position": 86,
            "movement": -12
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 163,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "album",
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
            "country": "BZ",
            "name": "Belize",
            "position": 71,
            "movement": 98
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 76,
            "movement": -8
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 119,
            "movement": 12
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 183,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 191,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 197,
            "movement": null,
            "status": "new"
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
            "country": "BW",
            "name": "Botswana",
            "position": 57,
            "movement": -11
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 71,
            "movement": -1
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
            "position": 75,
            "movement": -2
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 178,
            "movement": -38
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
            "position": 111,
            "movement": 71
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/21ffdcad2bde4b25ba9a5a3a53193b05/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "For Broken Ears",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 68,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 87,
            "movement": 101
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 100,
            "movement": 30
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 129,
            "movement": 18
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 130,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 136,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 139,
            "movement": 13
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 144,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 145,
            "movement": -13
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 169,
            "movement": 28
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 186,
            "movement": -43
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
            "position": 140,
            "movement": -4
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
            "position": 8,
            "movement": -2
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 50,
            "movement": 51
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 62,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 78,
            "movement": -63
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 79,
            "movement": -6
          },
          {
            "country": "US",
            "name": "United States",
            "position": 126,
            "movement": -13
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
            "position": 4,
            "movement": -1
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
            "position": 45,
            "movement": -4
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 9,
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
            "position": 13,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
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
            "country": "BM",
            "name": "Bermuda",
            "position": 94,
            "movement": -39
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 139,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 154,
            "movement": 6
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 160,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 165,
            "movement": -2
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 187,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 187,
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
            "country": "LT",
            "name": "Lithuania",
            "position": 67,
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
    "title": "Love Is A Kingdom",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "AO",
            "name": "Angola",
            "position": 29,
            "movement": 115
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 32,
            "movement": -23
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 115,
            "movement": 44
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 128,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 164,
            "movement": -90
          }
        ]
      }
    ],
    "kind": "album",
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
            "position": 12,
            "movement": 0
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 41,
            "movement": 7
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 80,
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
            "position": 188,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ee712ec0084d50159ae6564de833ce12/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Higher",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "AO",
            "name": "Angola",
            "position": 195,
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
            "country": "BB",
            "name": "Barbados",
            "position": 25,
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 156,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 158,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3d1528266cd1263f06d630c1c73376d5/500x500-000000-80-0-0.jpg"
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
            "position": 194,
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 188,
            "movement": -12
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d015c74bed325b8928343913858fb3c2/500x500-000000-80-0-0.jpg"
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
            "position": 18,
            "movement": -17
          }
        ]
      }
    ],
    "kind": "song",
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
            "position": 41,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/0989302f2acc1132d8922b3f292abe4b/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Looku Looku",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 83,
            "movement": -43
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/8bdc17b8c3975562fbbb659adbfb1fac/500x500-000000-80-0-0.jpg"
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
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
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
            "country": "UG",
            "name": "Uganda",
            "position": 191,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album",
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
            "position": 54,
            "movement": 1
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
  