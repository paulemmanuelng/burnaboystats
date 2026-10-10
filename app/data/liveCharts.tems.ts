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
  export const liveChartsUpdated = "2026-10-10";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-10-10T12:37Z";
  
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
            "country": "AO",
            "name": "Angola",
            "position": 8,
            "movement": -1
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 11,
            "movement": -2
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 13,
            "movement": -3
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 15,
            "movement": -1
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 16,
            "movement": 4
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 16,
            "movement": 0
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 17,
            "movement": -5
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 17,
            "movement": -1
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 18,
            "movement": -1
          },
          {
            "country": "MN",
            "name": "Mongolia",
            "position": 18,
            "movement": 0
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 19,
            "movement": 19
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 20,
            "movement": 5
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 20,
            "movement": -4
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 21,
            "movement": -2
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 22,
            "movement": 0
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 23,
            "movement": 0
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 25,
            "movement": -1
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 25,
            "movement": 119
          },
          {
            "country": "LY",
            "name": "Libya",
            "position": 26,
            "movement": -23
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 26,
            "movement": -1
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 29,
            "movement": -2
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 29,
            "movement": -2
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 30,
            "movement": -8
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 30,
            "movement": -5
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 30,
            "movement": -6
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 34,
            "movement": -4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 34,
            "movement": 1
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 34,
            "movement": -4
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 36,
            "movement": 41
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 37,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 38,
            "movement": -11
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 40,
            "movement": 3
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 40,
            "movement": -6
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 41,
            "movement": 6
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 43,
            "movement": -3
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 45,
            "movement": -16
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 47,
            "movement": 9
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 48,
            "movement": -10
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 49,
            "movement": 6
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 49,
            "movement": -13
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 51,
            "movement": -8
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 52,
            "movement": -8
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 55,
            "movement": -4
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 56,
            "movement": 5
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 56,
            "movement": -3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 58,
            "movement": -13
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 58,
            "movement": -22
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 60,
            "movement": 9
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 60,
            "movement": -2
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 65,
            "movement": -1
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 67,
            "movement": -11
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 68,
            "movement": 28
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 74,
            "movement": 22
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 75,
            "movement": -7
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 76,
            "movement": 19
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 78,
            "movement": -37
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 81,
            "movement": -21
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 82,
            "movement": -9
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 84,
            "movement": -30
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 85,
            "movement": -10
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 93,
            "movement": -12
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 94,
            "movement": -32
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 95,
            "movement": -14
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 98,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 104,
            "movement": 77
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 105,
            "movement": -5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 108,
            "movement": -3
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 109,
            "movement": -73
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 110,
            "movement": 16
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 113,
            "movement": -7
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 116,
            "movement": -22
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 116,
            "movement": 29
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 118,
            "movement": 10
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 122,
            "movement": -9
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 122,
            "movement": 8
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 123,
            "movement": 20
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 128,
            "movement": 13
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 130,
            "movement": -8
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 134,
            "movement": -16
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 135,
            "movement": 9
          },
          {
            "country": "LA",
            "name": "Laos",
            "position": 136,
            "movement": -44
          },
          {
            "country": "KH",
            "name": "Cambodia",
            "position": 139,
            "movement": -15
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 151,
            "movement": -14
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 152,
            "movement": -14
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 155,
            "movement": -80
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 171,
            "movement": -13
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 177,
            "movement": -10
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 185,
            "movement": -1
          },
          {
            "country": "MK",
            "name": "North Macedonia",
            "position": 193,
            "movement": -57
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 199,
            "movement": null,
            "status": "new"
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
            "country": "CL",
            "name": "Chile",
            "position": 4,
            "movement": -1
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 4,
            "movement": 1
          },
          {
            "country": "US",
            "name": "United States",
            "position": 4,
            "movement": -1
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 4,
            "movement": 0
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 5,
            "movement": 0
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 7,
            "movement": 0
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 7,
            "movement": -3
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 8,
            "movement": -2
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 9,
            "movement": 0
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 9,
            "movement": 0
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 10,
            "movement": 1
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 10,
            "movement": -2
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 12,
            "movement": 0
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 12,
            "movement": -1
          },
          {
            "country": "VE",
            "name": "Venezuela",
            "position": 12,
            "movement": 0
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 13,
            "movement": -2
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 14,
            "movement": -1
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 14,
            "movement": -2
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 14,
            "movement": -1
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 16,
            "movement": -1
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 18,
            "movement": -1
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 18,
            "movement": -2
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 19,
            "movement": 1
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 19,
            "movement": 1
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 20,
            "movement": -3
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 22,
            "movement": -2
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 27,
            "movement": -4
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 28,
            "movement": -4
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 28,
            "movement": -1
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 32,
            "movement": -1
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 33,
            "movement": 0
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 34,
            "movement": -4
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 37,
            "movement": -2
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 38,
            "movement": -6
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 38,
            "movement": -6
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 39,
            "movement": -2
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 44,
            "movement": 1
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 44,
            "movement": 0
          },
          {
            "country": "FR",
            "name": "France",
            "position": 45,
            "movement": -2
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 45,
            "movement": -3
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 46,
            "movement": -8
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 46,
            "movement": -1
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 46,
            "movement": -3
          },
          {
            "country": "CN",
            "name": "China",
            "position": 48,
            "movement": -3
          },
          {
            "country": "VN",
            "name": "Vietnam",
            "position": 53,
            "movement": -2
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 61,
            "movement": -8
          },
          {
            "country": "IN",
            "name": "India",
            "position": 66,
            "movement": -9
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 72,
            "movement": -1
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 77,
            "movement": -1
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 84,
            "movement": -11
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 84,
            "movement": 0
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 87,
            "movement": -12
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 89,
            "movement": -12
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 92,
            "movement": -4
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 93,
            "movement": -3
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 94,
            "movement": -4
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 111,
            "movement": -28
          },
          {
            "country": "KR",
            "name": "South Korea",
            "position": 135,
            "movement": -13
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 156,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 174,
            "movement": -24
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 177,
            "movement": -23
          },
          {
            "country": "JP",
            "name": "Japan",
            "position": 178,
            "movement": -1
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 195,
            "movement": 0
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
            "position": 12,
            "movement": 1
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 17,
            "movement": -1
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 19,
            "movement": -4
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 26,
            "movement": -4
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 28,
            "movement": -7
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 29,
            "movement": -6
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 35,
            "movement": 2
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 45,
            "movement": -8
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 47,
            "movement": -8
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 48,
            "movement": -12
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
            "position": 53,
            "movement": -4
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 58,
            "movement": -8
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 65,
            "movement": -14
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 65,
            "movement": -11
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 68,
            "movement": -8
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 71,
            "movement": -16
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 73,
            "movement": -7
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 74,
            "movement": -9
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 80,
            "movement": -11
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 90,
            "movement": -20
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 91,
            "movement": -31
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 92,
            "movement": -23
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 96,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 101,
            "movement": -6
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 109,
            "movement": -8
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 135,
            "movement": -12
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 144,
            "movement": -33
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 146,
            "movement": -22
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 147,
            "movement": -21
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 178,
            "movement": -11
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 3,
            "movement": 96
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 16,
            "movement": -13
          },
          {
            "country": "IN",
            "name": "India",
            "position": 17,
            "movement": 16
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 22,
            "movement": -9
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 23,
            "movement": -8
          },
          {
            "country": "RU",
            "name": "Russia",
            "position": 32,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 37,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 44,
            "movement": -12
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 51,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BN",
            "name": "Brunei Darussalam",
            "position": 62,
            "movement": -11
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 70,
            "movement": -68
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 89,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 131,
            "movement": 69
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 156,
            "movement": -147
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
            "country": "PT",
            "name": "Portugal",
            "position": 28,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 54,
            "movement": -23
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 81,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 88,
            "movement": -64
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
            "position": 13,
            "movement": 0
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 28,
            "movement": 7
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 28,
            "movement": -4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 41,
            "movement": -5
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 47,
            "movement": 19
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 50,
            "movement": -31
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 52,
            "movement": 40
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 58,
            "movement": 1
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 62,
            "movement": -16
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 65,
            "movement": 15
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 65,
            "movement": -19
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 85,
            "movement": 0
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 85,
            "movement": -2
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 90,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 92,
            "movement": 3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 95,
            "movement": -6
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 107,
            "movement": -9
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 112,
            "movement": 21
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 116,
            "movement": 10
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 137,
            "movement": 47
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 142,
            "movement": -22
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 142,
            "movement": 1
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 156,
            "movement": -82
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 168,
            "movement": -18
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 170,
            "movement": -7
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 170,
            "movement": -33
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 174,
            "movement": -22
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 177,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 187,
            "movement": -2
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 191,
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
            "position": 2,
            "movement": 0
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 11,
            "movement": 2
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 14,
            "movement": -2
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 15,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 16,
            "movement": -1
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 17,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 27,
            "movement": 1
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 30,
            "movement": 2
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 34,
            "movement": -1
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 41,
            "movement": 2
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 44,
            "movement": -4
          },
          {
            "country": "FR",
            "name": "France",
            "position": 44,
            "movement": 1
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 48,
            "movement": 1
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 58,
            "movement": 9
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 60,
            "movement": 6
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 67,
            "movement": -7
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 72,
            "movement": 5
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 80,
            "movement": 9
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 93,
            "movement": 10
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 96,
            "movement": 10
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 104,
            "movement": 16
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 109,
            "movement": -5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 120,
            "movement": 10
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 129,
            "movement": 33
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 152,
            "movement": 8
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 156,
            "movement": 4
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
            "position": 25,
            "movement": -5
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
            "position": 58,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/aeeee8ad4c59f8b6440d19006f0f06e7/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Me & U",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 101,
            "movement": 11
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 134,
            "movement": 14
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 139,
            "movement": 9
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 184,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 185,
            "movement": 7
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 194,
            "movement": 6
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
            "position": 20,
            "movement": -4
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 52,
            "movement": -5
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 61,
            "movement": -7
          },
          {
            "country": "KH",
            "name": "Cambodia",
            "position": 78,
            "movement": -16
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 186,
            "movement": -19
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
            "movement": 1
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 91,
            "movement": -27
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 120,
            "movement": -33
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 128,
            "movement": -31
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 177,
            "movement": -50
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 189,
            "movement": -40
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
            "position": 135,
            "movement": -16
          }
        ]
      }
    ],
    "kind": "song",
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
            "position": 30,
            "movement": 4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 53,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 106,
            "movement": -3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 132,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 133,
            "movement": -47
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 136,
            "movement": -11
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 136,
            "movement": 54
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 173,
            "movement": 0
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
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
    "title": "For Broken Ears",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 98,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 107,
            "movement": 63
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 113,
            "movement": 27
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 120,
            "movement": -11
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 129,
            "movement": -10
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 144,
            "movement": -11
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 159,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 160,
            "movement": -2
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 187,
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
            "position": 13,
            "movement": 2
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 50,
            "movement": 30
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
            "position": 118,
            "movement": 2
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 120,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 123,
            "movement": -60
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 154,
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
            "position": 45,
            "movement": -1
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
            "position": 104,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 154,
            "movement": -35
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 180,
            "movement": 3
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 191,
            "movement": -2
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 192,
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
            "position": 48,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 53,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 88,
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
            "position": 178,
            "movement": 8
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
            "country": "LR",
            "name": "Liberia",
            "position": 126,
            "movement": -88
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 180,
            "movement": 16
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 189,
            "movement": -43
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 198,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album",
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
            "country": "LR",
            "name": "Liberia",
            "position": 145,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 168,
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
            "position": 192,
            "movement": -9
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d015c74bed325b8928343913858fb3c2/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Higher",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 96,
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
            "position": 146,
            "movement": -28
          }
        ]
      }
    ],
    "kind": "song",
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
            "position": 122,
            "movement": -8
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ea8f80f2edb20885ac8aed8751716794/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Big Daddy",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 123,
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
    "title": "Black Panther: Wakanda Forever - Music From and Inspired By",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 57,
            "movement": 0
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
            "position": 85,
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
  