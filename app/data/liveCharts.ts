// GENERATED FILE — do not edit by hand.
  // Rebuilt hourly by scripts/build-live-charts.mjs from kworb's artist page.
  //
  // PLATFORM chart data for Burna Boy: where each release is sitting RIGHT
  // NOW on Spotify, Apple Music, iTunes, Deezer, Shazam and YouTube country
  // charts. This is not official-chart data — the official national peaks that
  // feed the site's headline totals live elsewhere, and the two are kept apart
  // on purpose.
  
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
  export const liveChartsUpdated = "2026-09-15";
  
  /** Every platform represented in the current snapshot. */
  export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","YouTube","iTunes"];
  
  export const liveCharts: LiveRelease[] = [
  {
    "title": "Dai Dai",
    "platforms": [
      {
        "platform": "YouTube",
        "numberOnes": 23,
        "entries": [
          {
            "country": "AT",
            "name": "Austria",
            "position": 1,
            "movement": 0
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 1,
            "movement": 0
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 1,
            "movement": 0
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 1,
            "movement": 0
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 1,
            "movement": 0
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 1,
            "movement": 0
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 1,
            "movement": 0
          },
          {
            "country": "FR",
            "name": "France",
            "position": 1,
            "movement": 0
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 1,
            "movement": 0
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 1,
            "movement": 0
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 1,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 1,
            "movement": 2
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 1,
            "movement": 0
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 1,
            "movement": 0
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 1,
            "movement": 0
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 1,
            "movement": 0
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 1,
            "movement": 0
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 1,
            "movement": 0
          },
          {
            "country": "PA",
            "name": "Panama",
            "position": 1,
            "movement": 1
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 1,
            "movement": 0
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 1,
            "movement": 0
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 1,
            "movement": 0
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 1,
            "movement": 0
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 2,
            "movement": 0
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 2,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 2,
            "movement": -1
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 2,
            "movement": -1
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 2,
            "movement": 1
          },
          {
            "country": "EC",
            "name": "Ecuador",
            "position": 2,
            "movement": -1
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 2,
            "movement": -1
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 2,
            "movement": -1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 2,
            "movement": 0
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 2,
            "movement": 0
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 2,
            "movement": -1
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 2,
            "movement": 1
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 2,
            "movement": -1
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 3,
            "movement": -1
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 3,
            "movement": 0
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 3,
            "movement": -1
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 3,
            "movement": -1
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 3,
            "movement": 0
          },
          {
            "country": "NI",
            "name": "Nicaragua",
            "position": 3,
            "movement": 0
          },
          {
            "country": "MK",
            "name": "North Macedonia",
            "position": 3,
            "movement": 2
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 3,
            "movement": -2
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 3,
            "movement": -2
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 3,
            "movement": 0
          },
          {
            "country": "RE",
            "name": "Réunion",
            "position": 3,
            "movement": -1
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 3,
            "movement": 4
          },
          {
            "country": "US",
            "name": "United States",
            "position": 3,
            "movement": -1
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 4,
            "movement": 0
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 4,
            "movement": -1
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 4,
            "movement": -1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 4,
            "movement": 1
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 4,
            "movement": 0
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 4,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 4,
            "movement": 1
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 4,
            "movement": -1
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 4,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 4,
            "movement": 1
          },
          {
            "country": "VE",
            "name": "Venezuela",
            "position": 4,
            "movement": 1
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 5,
            "movement": -2
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 5,
            "movement": -2
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 5,
            "movement": 0
          },
          {
            "country": "GE",
            "name": "Georgia",
            "position": 5,
            "movement": 0
          },
          {
            "country": "RS",
            "name": "Serbia",
            "position": 5,
            "movement": -1
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 6,
            "movement": -1
          },
          {
            "country": "SV",
            "name": "El Salvador",
            "position": 6,
            "movement": -2
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 6,
            "movement": -3
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 6,
            "movement": -2
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 6,
            "movement": 0
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 6,
            "movement": -2
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 6,
            "movement": -1
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 6,
            "movement": 0
          },
          {
            "country": "CD",
            "name": "Dem. Rep. of the Congo",
            "position": 7,
            "movement": 0
          },
          {
            "country": "ET",
            "name": "Ethiopia",
            "position": 7,
            "movement": 1
          },
          {
            "country": "HN",
            "name": "Honduras",
            "position": 7,
            "movement": -4
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 7,
            "movement": 0
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 7,
            "movement": 1
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 7,
            "movement": -3
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 7,
            "movement": 0
          },
          {
            "country": "BO",
            "name": "Bolivia",
            "position": 8,
            "movement": 0
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 8,
            "movement": -1
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 8,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 8,
            "movement": 2
          },
          {
            "country": "BD",
            "name": "Bangladesh",
            "position": 9,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 9,
            "movement": -4
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 9,
            "movement": -2
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 9,
            "movement": 0
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 10,
            "movement": -3
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 10,
            "movement": -2
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 10,
            "movement": -3
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 10,
            "movement": 1
          },
          {
            "country": "LY",
            "name": "Libya",
            "position": 11,
            "movement": 1
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 11,
            "movement": 0
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 11,
            "movement": -2
          },
          {
            "country": "BA",
            "name": "Bosnia and Herzegovina",
            "position": 12,
            "movement": 1
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 12,
            "movement": 0
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 13,
            "movement": -1
          },
          {
            "country": "BN",
            "name": "Brunei Darussalam",
            "position": 14,
            "movement": -4
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 14,
            "movement": 0
          },
          {
            "country": "AL",
            "name": "Albania",
            "position": 15,
            "movement": -3
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 15,
            "movement": -5
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 18,
            "movement": -4
          },
          {
            "country": "DO",
            "name": "Dominican Republic",
            "position": 19,
            "movement": 4
          },
          {
            "country": "PR",
            "name": "Puerto Rico",
            "position": 20,
            "movement": -1
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 25,
            "movement": -1
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 55,
            "movement": -2
          },
          {
            "country": "IN",
            "name": "India",
            "position": 91,
            "movement": -23
          },
          {
            "country": "JP",
            "name": "Japan",
            "position": 98,
            "movement": null,
            "status": "re"
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 5,
        "entries": [
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 1,
            "movement": 0
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 1,
            "movement": 0
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 1,
            "movement": 0
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 1,
            "movement": 0
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 1,
            "movement": 12
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 2,
            "movement": 0
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 2,
            "movement": 0
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 2,
            "movement": -1
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 3,
            "movement": 0
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 4,
            "movement": -1
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 4,
            "movement": -1
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 6,
            "movement": -1
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 7,
            "movement": -2
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 7,
            "movement": 0
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 7,
            "movement": 0
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 8,
            "movement": 0
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 9,
            "movement": 16
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 9,
            "movement": -1
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 9,
            "movement": 0
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 12,
            "movement": -7
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 13,
            "movement": 5
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 13,
            "movement": 2
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 15,
            "movement": -5
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 15,
            "movement": -2
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 15,
            "movement": -1
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 15,
            "movement": 5
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 20,
            "movement": -1
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 22,
            "movement": 4
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 23,
            "movement": -3
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 24,
            "movement": -1
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 25,
            "movement": -2
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 26,
            "movement": -2
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 26,
            "movement": -5
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 28,
            "movement": -4
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 29,
            "movement": -2
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 31,
            "movement": 7
          },
          {
            "country": "FR",
            "name": "France",
            "position": 32,
            "movement": -7
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 32,
            "movement": 1
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 38,
            "movement": 5
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 39,
            "movement": 6
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 40,
            "movement": -12
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 42,
            "movement": -3
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 49,
            "movement": -13
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 49,
            "movement": 20
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 50,
            "movement": 0
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 51,
            "movement": 2
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 55,
            "movement": -7
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 63,
            "movement": 0
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 67,
            "movement": -6
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 70,
            "movement": -8
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 72,
            "movement": 6
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 73,
            "movement": 3
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 78,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 86,
            "movement": -14
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 89,
            "movement": -46
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 101,
            "movement": -49
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 119,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 123,
            "movement": 3
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 127,
            "movement": -9
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 137,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MK",
            "name": "North Macedonia",
            "position": 139,
            "movement": -22
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 140,
            "movement": -25
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 145,
            "movement": -5
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 145,
            "movement": -26
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 151,
            "movement": -21
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 156,
            "movement": -10
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 190,
            "movement": -31
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 2,
        "entries": [
          {
            "country": "PL",
            "name": "Poland",
            "position": 1,
            "movement": 0
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 1,
            "movement": 0
          },
          {
            "country": "FR",
            "name": "France",
            "position": 3,
            "movement": -1
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 3,
            "movement": 6
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 3,
            "movement": 0
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 3,
            "movement": -2
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 5,
            "movement": 0
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 5,
            "movement": -2
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 5,
            "movement": -4
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 5,
            "movement": -4
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 6,
            "movement": -2
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 6,
            "movement": 57
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 7,
            "movement": -3
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 7,
            "movement": 1
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 8,
            "movement": null,
            "status": "new"
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 10,
            "movement": -5
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 10,
            "movement": -3
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 12,
            "movement": 0
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 12,
            "movement": 0
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 12,
            "movement": 0
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 13,
            "movement": -1
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 15,
            "movement": -3
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 15,
            "movement": -10
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 16,
            "movement": -1
          },
          {
            "country": "BO",
            "name": "Bolivia",
            "position": 16,
            "movement": 9
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 16,
            "movement": -3
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 17,
            "movement": null,
            "status": "new"
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 19,
            "movement": -7
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 19,
            "movement": -4
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 22,
            "movement": -1
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 22,
            "movement": 13
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 23,
            "movement": 4
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 23,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SV",
            "name": "El Salvador",
            "position": 25,
            "movement": -14
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 34,
            "movement": 32
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 35,
            "movement": 45
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 35,
            "movement": 26
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 35,
            "movement": 22
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 41,
            "movement": -11
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 42,
            "movement": -3
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 44,
            "movement": null,
            "status": "new"
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 48,
            "movement": -30
          },
          {
            "country": "KR",
            "name": "South Korea",
            "position": 49,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 52,
            "movement": -39
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 54,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 66,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 75,
            "movement": -12
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 75,
            "movement": 10
          },
          {
            "country": "EC",
            "name": "Ecuador",
            "position": 79,
            "movement": -66
          },
          {
            "country": "HN",
            "name": "Honduras",
            "position": 88,
            "movement": null,
            "status": "new"
          }
        ]
      },
      {
        "platform": "Spotify",
        "numberOnes": 2,
        "entries": [
          {
            "country": "BE",
            "name": "Belgium",
            "position": 1,
            "movement": 0
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 1,
            "movement": 0
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 2,
            "movement": 1
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 3,
            "movement": -1
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 4,
            "movement": -2
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 4,
            "movement": 0
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 5,
            "movement": -2
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 6,
            "movement": -2
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 11,
            "movement": -3
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 13,
            "movement": -4
          },
          {
            "country": "FR",
            "name": "France",
            "position": 14,
            "movement": -4
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 17,
            "movement": -7
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 17,
            "movement": -4
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 19,
            "movement": -10
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 20,
            "movement": -11
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 21,
            "movement": -10
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 26,
            "movement": -6
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 26,
            "movement": -10
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 33,
            "movement": -5
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 35,
            "movement": -7
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 37,
            "movement": -18
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 37,
            "movement": -15
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 38,
            "movement": -7
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 38,
            "movement": -17
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 51,
            "movement": -23
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 53,
            "movement": -12
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 60,
            "movement": -19
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 65,
            "movement": -10
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 79,
            "movement": -24
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 86,
            "movement": -29
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 91,
            "movement": -49
          },
          {
            "country": "PA",
            "name": "Panama",
            "position": 99,
            "movement": -34
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 112,
            "movement": -32
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 118,
            "movement": -35
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 138,
            "movement": -27
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 161,
            "movement": -56
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 185,
            "movement": -59
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 187,
            "movement": -55
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 189,
            "movement": -36
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 197,
            "movement": -32
          }
        ]
      },
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 6,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 6,
            "movement": 0
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 11,
            "movement": -1
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 11,
            "movement": 1
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 13,
            "movement": -2
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 16,
            "movement": 3
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 16,
            "movement": -6
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 16,
            "movement": -5
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 17,
            "movement": -5
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 18,
            "movement": -4
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 21,
            "movement": -10
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 21,
            "movement": 1
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 24,
            "movement": 2
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 24,
            "movement": -9
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 24,
            "movement": -6
          },
          {
            "country": "RU",
            "name": "Russia",
            "position": 25,
            "movement": -5
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 26,
            "movement": -3
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 27,
            "movement": -5
          },
          {
            "country": "FR",
            "name": "France",
            "position": 28,
            "movement": -7
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 28,
            "movement": 1
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 29,
            "movement": -10
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 31,
            "movement": -10
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 33,
            "movement": 2
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 36,
            "movement": 0
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 46,
            "movement": 1
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 58,
            "movement": -23
          },
          {
            "country": "US",
            "name": "United States",
            "position": 59,
            "movement": 5
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 65,
            "movement": -3
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 69,
            "movement": -4
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 84,
            "movement": -48
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 87,
            "movement": -51
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 102,
            "movement": -6
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 110,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 114,
            "movement": -31
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 148,
            "movement": -49
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 152,
            "movement": -57
          },
          {
            "country": "JP",
            "name": "Japan",
            "position": 153,
            "movement": -98
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 160,
            "movement": 8
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 174,
            "movement": -17
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "AT",
            "name": "Austria",
            "position": 2,
            "movement": 5
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 4,
            "movement": 80
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 4,
            "movement": 0
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 5,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 7,
            "movement": -6
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 8,
            "movement": -1
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 9,
            "movement": -4
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 11,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 13,
            "movement": -4
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 14,
            "movement": -5
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 15,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 15,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FR",
            "name": "France",
            "position": 19,
            "movement": -8
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 21,
            "movement": -10
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 27,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 32,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 33,
            "movement": -6
          },
          {
            "country": "US",
            "name": "United States",
            "position": 46,
            "movement": -17
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 59,
            "movement": -7
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 83,
            "movement": -5
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 96,
            "movement": -23
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Love, Damini",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 25,
            "movement": 77
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 41,
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 44,
            "movement": 4
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 44,
            "movement": 11
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 47,
            "movement": 38
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 57,
            "movement": 2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 62,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 76,
            "movement": 31
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 87,
            "movement": -35
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 92,
            "movement": -32
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 92,
            "movement": 19
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 100,
            "movement": -3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 103,
            "movement": 32
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 111,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 113,
            "movement": -13
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 125,
            "movement": 19
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 128,
            "movement": -14
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 138,
            "movement": -15
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 147,
            "movement": -11
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 170,
            "movement": -64
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 171,
            "movement": 20
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 180,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 191,
            "movement": -59
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 192,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 194,
            "movement": -39
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 196,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 196,
            "movement": -97
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
            "position": 55,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "album"
  },
  {
    "title": "African Giant",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 24,
            "movement": 29
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 29,
            "movement": 28
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 33,
            "movement": 3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 52,
            "movement": 27
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 54,
            "movement": 2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 55,
            "movement": 6
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 67,
            "movement": 37
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 74,
            "movement": 77
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 91,
            "movement": 11
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 121,
            "movement": 30
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 127,
            "movement": -13
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 153,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 154,
            "movement": -36
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 164,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 169,
            "movement": 27
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 174,
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
            "country": "NA",
            "name": "Namibia",
            "position": 36,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 59,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 61,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 65,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 152,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "album"
  },
  {
    "title": "On the Low",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 32,
            "movement": -4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 34,
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 45,
            "movement": 51
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 65,
            "movement": 3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 92,
            "movement": -14
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 101,
            "movement": -31
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 102,
            "movement": 36
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 102,
            "movement": 34
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 121,
            "movement": -3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 122,
            "movement": 16
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 138,
            "movement": 3
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 145,
            "movement": 11
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 152,
            "movement": 14
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 155,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 176,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 192,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 195,
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
            "position": 153,
            "movement": 7
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
            "position": 21,
            "movement": -9
          }
        ]
      },
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SN",
            "name": "Senegal",
            "position": 111,
            "movement": 6
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Ye",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 35,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 43,
            "movement": 3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 48,
            "movement": -13
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 53,
            "movement": 46
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 65,
            "movement": -21
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 71,
            "movement": 15
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 95,
            "movement": -39
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 104,
            "movement": null,
            "status": "new"
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 110,
            "movement": -19
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 113,
            "movement": -6
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 117,
            "movement": -33
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 139,
            "movement": 3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 146,
            "movement": 3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 151,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 151,
            "movement": -29
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 165,
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
            "position": 20,
            "movement": -9
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 59,
            "movement": 0
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
            "position": 123,
            "movement": 8
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "No Sign Of Weakness",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 12,
            "movement": 4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 16,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 35,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 36,
            "movement": 6
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 86,
            "movement": 5
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 86,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 89,
            "movement": -13
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 90,
            "movement": -36
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 91,
            "movement": 59
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 92,
            "movement": -14
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 100,
            "movement": -8
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 103,
            "movement": -41
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 116,
            "movement": -10
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 120,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 153,
            "movement": -24
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 157,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 169,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 173,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 199,
            "movement": -46
          }
        ]
      }
    ],
    "kind": "album"
  },
  {
    "title": "wgft",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 35,
            "movement": 5
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 70,
            "movement": 4
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 86,
            "movement": -7
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 93,
            "movement": 12
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 98,
            "movement": 57
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 111,
            "movement": -99
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 139,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 145,
            "movement": 34
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 157,
            "movement": 10
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 169,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 171,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 176,
            "movement": -9
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 182,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 186,
            "movement": -98
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 192,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 199,
            "movement": -10
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
            "position": 132,
            "movement": -2
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 173,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Dem Dey",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 9,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 13,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 14,
            "movement": -1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 19,
            "movement": 4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 23,
            "movement": -3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 28,
            "movement": -16
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 32,
            "movement": -2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 43,
            "movement": 26
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 53,
            "movement": -7
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 57,
            "movement": -4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 64,
            "movement": -2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 70,
            "movement": -18
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 97,
            "movement": 7
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 126,
            "movement": -55
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 135,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 138,
            "movement": -60
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Change Your Mind",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MW",
            "name": "Malawi",
            "position": 15,
            "movement": 12
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 16,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 27,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 28,
            "movement": -4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 28,
            "movement": 6
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 29,
            "movement": -11
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 71,
            "movement": 3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 81,
            "movement": 35
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 86,
            "movement": -2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 97,
            "movement": -60
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 99,
            "movement": -19
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 126,
            "movement": 28
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 169,
            "movement": 3
          },
          {
            "country": "SR",
            "name": "Suriname",
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
            "position": 94,
            "movement": -16
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "I Told Them...",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 19,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 27,
            "movement": 0
          },
          {
            "country": "BN",
            "name": "Brunei Darussalam",
            "position": 38,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 46,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 51,
            "movement": 2
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 103,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 117,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 127,
            "movement": -33
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 128,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 149,
            "movement": -117
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 153,
            "movement": -32
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 183,
            "movement": -60
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 184,
            "movement": -71
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 188,
            "movement": -103
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 189,
            "movement": -50
          }
        ]
      }
    ],
    "kind": "album"
  },
  {
    "title": "Twice As Tall",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 24,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 57,
            "movement": 8
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 90,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 92,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 96,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 105,
            "movement": 19
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 119,
            "movement": 7
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 144,
            "movement": -109
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 154,
            "movement": -50
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 154,
            "movement": 33
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 173,
            "movement": -123
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
            "position": 21,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 30,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 156,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 199,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "album"
  },
  {
    "title": "Ginger",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 20,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 28,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 29,
            "movement": -4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 47,
            "movement": 10
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 48,
            "movement": 3
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 57,
            "movement": 21
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 62,
            "movement": -38
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 103,
            "movement": -18
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 108,
            "movement": 29
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 112,
            "movement": 17
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 121,
            "movement": -4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 165,
            "movement": -16
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 180,
            "movement": -8
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "It's Plenty",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SR",
            "name": "Suriname",
            "position": 32,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 111,
            "movement": -51
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 116,
            "movement": -59
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 123,
            "movement": -31
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 138,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 200,
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
            "country": "NE",
            "name": "Niger",
            "position": 35,
            "movement": 2
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 36,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Last Last",
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
            "country": "SZ",
            "name": "Swaziland",
            "position": 26,
            "movement": -2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 36,
            "movement": 2
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 39,
            "movement": -1
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 43,
            "movement": -10
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 138,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 190,
            "movement": 3
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
            "position": 174,
            "movement": 3
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Gbona",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 71,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 75,
            "movement": 35
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 78,
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 121,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 135,
            "movement": 46
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
            "position": 34,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 93,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Love",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 99,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 183,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 185,
            "movement": -9
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
            "position": 125,
            "movement": 0
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
            "position": 100,
            "movement": -89
          }
        ]
      },
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 73,
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
            "country": "NG",
            "name": "Nigeria",
            "position": 82,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Sponono",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NA",
            "name": "Namibia",
            "position": 94,
            "movement": 4
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 106,
            "movement": -17
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 119,
            "movement": -6
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 130,
            "movement": -19
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 163,
            "movement": -71
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Location",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 117,
            "movement": -13
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 125,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 167,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 183,
            "movement": -33
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 192,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Common Person",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 97,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 181,
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
            "country": "SB",
            "name": "Solomon Islands",
            "position": 5,
            "movement": 4
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
            "position": 87,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Real Life",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 46,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 194,
            "movement": 2
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
            "position": 180,
            "movement": 8
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 192,
            "movement": -19
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "For My Hand",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 47,
            "movement": -1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 52,
            "movement": -1
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 75,
            "movement": 0
          }
        ]
      },
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 197,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Update",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 100,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 118,
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
            "country": "GH",
            "name": "Ghana",
            "position": 19,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Outside",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 73,
            "movement": -6
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 76,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 88,
            "movement": 94
          }
        ]
      }
    ],
    "kind": "album"
  },
  {
    "title": "23",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 87,
            "movement": -4
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 189,
            "movement": -3
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Laho II",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 181,
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
            "position": 7,
            "movement": 24
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Anybody",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SN",
            "name": "Senegal",
            "position": 55,
            "movement": -6
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 160,
            "movement": -14
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "4 Kampé II",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 67,
            "movement": 0
          }
        ]
      },
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 118,
            "movement": 44
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Kainama",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 146,
            "movement": 51
          }
        ]
      },
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 171,
            "movement": -68
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "L.I.F.E - Leaving an Impact for Eternity",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 16,
            "movement": 172
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
            "position": 153,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "album"
  },
  {
    "title": "Born Winner",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BB",
            "name": "Barbados",
            "position": 2,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Rollercoaster",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 96,
            "movement": -3
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Killin Dem",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 116,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Alone",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "EG",
            "name": "Egypt",
            "position": 91,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Kilometre",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 71,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Dangote",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 82,
            "movement": -21
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "City Boys",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 90,
            "movement": -85
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Higher",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 182,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "WE PRAY",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 163,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Baddest",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 64,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Pree Me",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 119,
            "movement": -19
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Way Too Big",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 124,
            "movement": -102
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Special Someone",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 154,
            "movement": -13
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Giddem",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 142,
            "movement": -106
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "My Oasis",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 171,
            "movement": -13
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Apple Music Live: Burna Boy",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 177,
            "movement": -139
          }
        ]
      }
    ],
    "kind": "album"
  },
  {
    "title": "On a Spaceship",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 178,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "album"
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
  export const liveCountryCount = new Set(
    liveCharts.flatMap((r) => r.platforms.flatMap((p) => p.entries.map((e) => e.country)))
  ).size;
  
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
  