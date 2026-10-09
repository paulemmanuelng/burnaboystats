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
  export const liveChartsUpdated = "2026-10-09";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-10-09T06:14Z";
  
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
            "country": "LY",
            "name": "Libya",
            "position": 3,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 7,
            "movement": 9
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 9,
            "movement": 0
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 10,
            "movement": -5
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 12,
            "movement": 22
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 14,
            "movement": -1
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 16,
            "movement": 2
          },
          {
            "country": "UK",
            "name": "United Kingdom",
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
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 17,
            "movement": -1
          },
          {
            "country": "MN",
            "name": "Mongolia",
            "position": 18,
            "movement": -4
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 19,
            "movement": -4
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 20,
            "movement": 0
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 22,
            "movement": 2
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 22,
            "movement": 5
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 23,
            "movement": 2
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 24,
            "movement": 77
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 24,
            "movement": -2
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 25,
            "movement": 1
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 25,
            "movement": 4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 25,
            "movement": -3
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 27,
            "movement": 28
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 27,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 27,
            "movement": 19
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 29,
            "movement": 20
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 30,
            "movement": -9
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 32,
            "movement": 5
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 34,
            "movement": -6
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 35,
            "movement": -18
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 35,
            "movement": -6
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 36,
            "movement": 69
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 36,
            "movement": 11
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 36,
            "movement": 99
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 38,
            "movement": 85
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 38,
            "movement": 53
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 40,
            "movement": -1
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 41,
            "movement": 61
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 43,
            "movement": 0
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 43,
            "movement": -6
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 44,
            "movement": -5
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 45,
            "movement": 11
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 47,
            "movement": 4
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 51,
            "movement": -9
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 52,
            "movement": 15
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 53,
            "movement": -2
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 53,
            "movement": 3
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 54,
            "movement": 6
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 55,
            "movement": -4
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 56,
            "movement": -9
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 56,
            "movement": 9
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 60,
            "movement": 3
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 61,
            "movement": -1
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 64,
            "movement": 18
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 68,
            "movement": -10
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 69,
            "movement": 7
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 73,
            "movement": -7
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 75,
            "movement": 47
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 75,
            "movement": -10
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 77,
            "movement": -19
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 81,
            "movement": 13
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 81,
            "movement": -23
          },
          {
            "country": "LA",
            "name": "Laos",
            "position": 92,
            "movement": 17
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 94,
            "movement": -8
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 95,
            "movement": -1
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 96,
            "movement": -47
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 96,
            "movement": 19
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 99,
            "movement": -40
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 100,
            "movement": -3
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 100,
            "movement": -13
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 105,
            "movement": 6
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 106,
            "movement": 46
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 118,
            "movement": -12
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 122,
            "movement": 0
          },
          {
            "country": "KH",
            "name": "Cambodia",
            "position": 124,
            "movement": 29
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 126,
            "movement": -68
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 128,
            "movement": 39
          },
          {
            "country": "MK",
            "name": "North Macedonia",
            "position": 136,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 137,
            "movement": -13
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 141,
            "movement": -8
          },
          {
            "country": "BT",
            "name": "Bhutan",
            "position": 143,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 143,
            "movement": -50
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 143,
            "movement": -8
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 144,
            "movement": 22
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 144,
            "movement": 51
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 145,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 151,
            "movement": 6
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 153,
            "movement": -108
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 158,
            "movement": 14
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 167,
            "movement": -12
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 169,
            "movement": -14
          },
          {
            "country": "MM",
            "name": "Myanmar",
            "position": 178,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 181,
            "movement": -86
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
            "position": 2,
            "movement": 2
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 3,
            "movement": 1
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 4,
            "movement": 1
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
            "country": "MY",
            "name": "Malaysia",
            "position": 5,
            "movement": -1
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 7,
            "movement": 2
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 8,
            "movement": 1
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 8,
            "movement": 0
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 8,
            "movement": 0
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 9,
            "movement": 2
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 9,
            "movement": 2
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 10,
            "movement": 0
          },
          {
            "country": "VE",
            "name": "Venezuela",
            "position": 10,
            "movement": -2
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 11,
            "movement": 4
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 11,
            "movement": 0
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 12,
            "movement": 1
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 12,
            "movement": -1
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 12,
            "movement": 1
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 13,
            "movement": 1
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 14,
            "movement": 0
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 14,
            "movement": 1
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 17,
            "movement": -1
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 18,
            "movement": 1
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 19,
            "movement": 1
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 20,
            "movement": -1
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 20,
            "movement": 2
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 21,
            "movement": 0
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 22,
            "movement": 1
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 24,
            "movement": 1
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 28,
            "movement": 3
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 30,
            "movement": 4
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 30,
            "movement": 1
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 30,
            "movement": 1
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 35,
            "movement": 3
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 35,
            "movement": 1
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 37,
            "movement": -3
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 38,
            "movement": 4
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 38,
            "movement": 6
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 40,
            "movement": -2
          },
          {
            "country": "FR",
            "name": "France",
            "position": 41,
            "movement": 1
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 41,
            "movement": -1
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 42,
            "movement": -2
          },
          {
            "country": "CN",
            "name": "China",
            "position": 52,
            "movement": 3
          },
          {
            "country": "IN",
            "name": "India",
            "position": 53,
            "movement": -7
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 53,
            "movement": 1
          },
          {
            "country": "VN",
            "name": "Vietnam",
            "position": 55,
            "movement": -1
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 62,
            "movement": -2
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 62,
            "movement": -4
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 66,
            "movement": -2
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 69,
            "movement": -10
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 75,
            "movement": -4
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 77,
            "movement": 0
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 79,
            "movement": 4
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 81,
            "movement": -1
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 83,
            "movement": 5
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 90,
            "movement": -8
          },
          {
            "country": "KR",
            "name": "South Korea",
            "position": 114,
            "movement": -9
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 143,
            "movement": 17
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 158,
            "movement": -5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 160,
            "movement": -2
          },
          {
            "country": "JP",
            "name": "Japan",
            "position": 177,
            "movement": 0
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 191,
            "movement": 3
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
            "position": 13,
            "movement": -3
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 15,
            "movement": 0
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 16,
            "movement": -1
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 21,
            "movement": 2
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 22,
            "movement": -1
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 23,
            "movement": 1
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 36,
            "movement": 5
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 37,
            "movement": 6
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 37,
            "movement": -6
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 39,
            "movement": -3
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 49,
            "movement": -3
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 50,
            "movement": -8
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 51,
            "movement": 3
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 54,
            "movement": 0
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 55,
            "movement": -3
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 60,
            "movement": -5
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 60,
            "movement": 13
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 65,
            "movement": -6
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 66,
            "movement": 4
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 66,
            "movement": 12
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 69,
            "movement": -3
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 69,
            "movement": 2
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 70,
            "movement": -10
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 95,
            "movement": 5
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 96,
            "movement": -2
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 101,
            "movement": -12
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 111,
            "movement": 0
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 123,
            "movement": -26
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 124,
            "movement": 6
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 126,
            "movement": -14
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 167,
            "movement": -14
          },
          {
            "country": "PA",
            "name": "Panama",
            "position": 179,
            "movement": -1
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 184,
            "movement": -1
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 199,
            "movement": 0
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 1,
        "entries": [
          {
            "country": "LV",
            "name": "Latvia",
            "position": 1,
            "movement": 14
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 2,
            "movement": 33
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 6,
            "movement": 52
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 8,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 10,
            "movement": -9
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 12,
            "movement": -10
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 13,
            "movement": -5
          },
          {
            "country": "IN",
            "name": "India",
            "position": 16,
            "movement": 35
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 25,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 28,
            "movement": -13
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 32,
            "movement": -9
          },
          {
            "country": "BN",
            "name": "Brunei Darussalam",
            "position": 50,
            "movement": -13
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 97,
            "movement": -51
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 133,
            "movement": -10
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 141,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 147,
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
            "country": "PT",
            "name": "Portugal",
            "position": 24,
            "movement": 13
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 24,
            "movement": -8
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 57,
            "movement": -25
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 92,
            "movement": -52
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 94,
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
            "position": 15,
            "movement": 0
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 19,
            "movement": 2
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 24,
            "movement": 64
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 35,
            "movement": -14
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 36,
            "movement": 0
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 46,
            "movement": 4
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 46,
            "movement": 47
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 48,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 59,
            "movement": -20
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 66,
            "movement": -28
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 74,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 80,
            "movement": -27
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 83,
            "movement": 14
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 85,
            "movement": -43
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 89,
            "movement": -39
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 90,
            "movement": -3
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 92,
            "movement": -4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 95,
            "movement": -6
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 98,
            "movement": -26
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 120,
            "movement": 35
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 126,
            "movement": 7
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 133,
            "movement": -11
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 137,
            "movement": 49
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 143,
            "movement": -43
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 144,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 149,
            "movement": -112
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 150,
            "movement": -22
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 152,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 163,
            "movement": -9
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 168,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 173,
            "movement": 12
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 184,
            "movement": -27
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 185,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 185,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 185,
            "movement": -5
          },
          {
            "country": "CA",
            "name": "Canada",
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
            "country": "ZA",
            "name": "South Africa",
            "position": 194,
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
            "position": 3,
            "movement": 3
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 15,
            "movement": 5
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 17,
            "movement": 7
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 20,
            "movement": 6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 21,
            "movement": 6
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 23,
            "movement": 9
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 36,
            "movement": 15
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 39,
            "movement": 12
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 42,
            "movement": 8
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 51,
            "movement": 15
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 53,
            "movement": 14
          },
          {
            "country": "FR",
            "name": "France",
            "position": 56,
            "movement": 21
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 70,
            "movement": 28
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 75,
            "movement": 11
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 77,
            "movement": 40
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 82,
            "movement": 20
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 95,
            "movement": 21
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 114,
            "movement": 28
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 117,
            "movement": 34
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 131,
            "movement": 57
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 148,
            "movement": 32
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 157,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 162,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 191,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 198,
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
            "position": 18,
            "movement": -8
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 152,
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
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MA",
            "name": "Morocco",
            "position": 53,
            "movement": 2
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 69,
            "movement": -12
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 79,
            "movement": 12
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 85,
            "movement": -4
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 102,
            "movement": -12
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 147,
            "movement": -4
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 157,
            "movement": 12
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 168,
            "movement": -15
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 178,
            "movement": 12
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 181,
            "movement": -12
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 112,
            "movement": -5
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 122,
            "movement": -34
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 148,
            "movement": 9
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 148,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 188,
            "movement": -7
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 192,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 200,
            "movement": -42
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
            "position": 16,
            "movement": -4
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 47,
            "movement": -18
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 54,
            "movement": -9
          },
          {
            "country": "KH",
            "name": "Cambodia",
            "position": 59,
            "movement": -7
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 167,
            "movement": -25
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
            "position": 119,
            "movement": 19
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 52,
            "movement": null,
            "status": "new"
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
            "position": 34,
            "movement": 65
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 86,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 103,
            "movement": 52
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 125,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 133,
            "movement": -48
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 142,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 153,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 173,
            "movement": -30
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 185,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 190,
            "movement": -40
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 200,
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
            "position": 74,
            "movement": 8
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
    "title": "What You Need",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 15,
            "movement": 8
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 57,
            "movement": -11
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 63,
            "movement": -10
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 80,
            "movement": -44
          },
          {
            "country": "US",
            "name": "United States",
            "position": 125,
            "movement": 3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 126,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 141,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 174,
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
    "title": "For Broken Ears",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 109,
            "movement": 55
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 119,
            "movement": 11
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 133,
            "movement": 26
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 135,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 140,
            "movement": -44
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 158,
            "movement": -27
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 170,
            "movement": -14
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 176,
            "movement": -26
          },
          {
            "country": "ML",
            "name": "Mali",
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
            "position": 136,
            "movement": -5
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/53e9db9663c87b34723c17bcf9c2a8e8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Free Mind",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 119,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 122,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 151,
            "movement": 4
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 174,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 183,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 189,
            "movement": -48
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 196,
            "movement": -46
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
            "movement": -8
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 169,
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
            "country": "TD",
            "name": "Chad",
            "position": 85,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 189,
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
            "position": 186,
            "movement": 2
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
            "position": 38,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 146,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 154,
            "movement": -129
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 166,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 196,
            "movement": -22
          }
        ]
      }
    ],
    "kind": "album",
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
            "country": "LR",
            "name": "Liberia",
            "position": 126,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 182,
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
    "title": "Isaka II",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 183,
            "movement": -24
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 172,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
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
            "position": 118,
            "movement": 31
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
            "position": 114,
            "movement": -4
          }
        ]
      }
    ],
    "kind": "song",
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
  