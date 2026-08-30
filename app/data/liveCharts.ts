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
  export const liveChartsUpdated = "2026-08-30";
  
  /** Every platform represented in the current snapshot. */
  export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","YouTube","iTunes"];
  
  export const liveCharts: LiveRelease[] = [
  {
    "title": "Dai Dai",
    "platforms": [
      {
        "platform": "YouTube",
        "numberOnes": 36,
        "entries": [
          {
            "country": "AR",
            "name": "Argentina",
            "position": 1,
            "movement": 0
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 1,
            "movement": 0
          },
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
            "country": "BZ",
            "name": "Belize",
            "position": 1,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 1,
            "movement": 0
          },
          {
            "country": "CA",
            "name": "Canada",
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
            "country": "EC",
            "name": "Ecuador",
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
            "movement": 1
          },
          {
            "country": "FR",
            "name": "France",
            "position": 1,
            "movement": 0
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 1,
            "movement": 0
          },
          {
            "country": "GR",
            "name": "Greece",
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
            "country": "MR",
            "name": "Mauritania",
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
            "country": "NI",
            "name": "Nicaragua",
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
            "country": "OM",
            "name": "Oman",
            "position": 1,
            "movement": 0
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 1,
            "movement": 0
          },
          {
            "country": "RE",
            "name": "Réunion",
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
            "country": "SI",
            "name": "Slovenia",
            "position": 1,
            "movement": 1
          },
          {
            "country": "ES",
            "name": "Spain",
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
            "country": "UK",
            "name": "United Kingdom",
            "position": 1,
            "movement": 0
          },
          {
            "country": "US",
            "name": "United States",
            "position": 1,
            "movement": 1
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 2,
            "movement": -1
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 2,
            "movement": -1
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 2,
            "movement": -1
          },
          {
            "country": "GE",
            "name": "Georgia",
            "position": 2,
            "movement": 0
          },
          {
            "country": "HN",
            "name": "Honduras",
            "position": 2,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 2,
            "movement": -1
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 2,
            "movement": -1
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 2,
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 2,
            "movement": 0
          },
          {
            "country": "PA",
            "name": "Panama",
            "position": 2,
            "movement": -1
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 2,
            "movement": -1
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 2,
            "movement": 0
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 3,
            "movement": 0
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 3,
            "movement": -1
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 3,
            "movement": -1
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 3,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
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
            "country": "MG",
            "name": "Madagascar",
            "position": 3,
            "movement": -1
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 3,
            "movement": -1
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 3,
            "movement": -1
          },
          {
            "country": "PY",
            "name": "Paraguay",
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
            "country": "ZA",
            "name": "South Africa",
            "position": 3,
            "movement": 0
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 3,
            "movement": -1
          },
          {
            "country": "VE",
            "name": "Venezuela",
            "position": 3,
            "movement": -2
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 4,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 4,
            "movement": 0
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 4,
            "movement": 0
          },
          {
            "country": "CD",
            "name": "Dem. Rep. of the Congo",
            "position": 4,
            "movement": 0
          },
          {
            "country": "SV",
            "name": "El Salvador",
            "position": 4,
            "movement": -2
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 4,
            "movement": -2
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 4,
            "movement": -1
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 4,
            "movement": 0
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 4,
            "movement": -1
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 4,
            "movement": -2
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 4,
            "movement": 1
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 4,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 4,
            "movement": -1
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 5,
            "movement": -2
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 5,
            "movement": -2
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 5,
            "movement": -1
          },
          {
            "country": "MK",
            "name": "North Macedonia",
            "position": 5,
            "movement": -2
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 5,
            "movement": 0
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 5,
            "movement": 0
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 5,
            "movement": -2
          },
          {
            "country": "BO",
            "name": "Bolivia",
            "position": 6,
            "movement": -3
          },
          {
            "country": "BN",
            "name": "Brunei Darussalam",
            "position": 6,
            "movement": -1
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 6,
            "movement": -1
          },
          {
            "country": "BD",
            "name": "Bangladesh",
            "position": 7,
            "movement": -2
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 7,
            "movement": -1
          },
          {
            "country": "ET",
            "name": "Ethiopia",
            "position": 7,
            "movement": -3
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 7,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 7,
            "movement": -3
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 7,
            "movement": -4
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 8,
            "movement": -1
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 8,
            "movement": -2
          },
          {
            "country": "LY",
            "name": "Libya",
            "position": 8,
            "movement": -1
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 8,
            "movement": 1
          },
          {
            "country": "RS",
            "name": "Serbia",
            "position": 8,
            "movement": -3
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 8,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 8,
            "movement": 1
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 8,
            "movement": -2
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 9,
            "movement": -1
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 9,
            "movement": -4
          },
          {
            "country": "AL",
            "name": "Albania",
            "position": 10,
            "movement": -1
          },
          {
            "country": "BA",
            "name": "Bosnia and Herzegovina",
            "position": 10,
            "movement": -2
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 10,
            "movement": -3
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 11,
            "movement": -2
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 11,
            "movement": 1
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 12,
            "movement": 2
          },
          {
            "country": "PR",
            "name": "Puerto Rico",
            "position": 16,
            "movement": 3
          },
          {
            "country": "DO",
            "name": "Dominican Republic",
            "position": 17,
            "movement": -5
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 18,
            "movement": -1
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 20,
            "movement": 0
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 20,
            "movement": null,
            "status": "re"
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 8,
        "entries": [
          {
            "country": "AT",
            "name": "Austria",
            "position": 1,
            "movement": 0
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 1,
            "movement": 0
          },
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
            "movement": 1
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 1,
            "movement": 0
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 1,
            "movement": 1
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 1,
            "movement": 0
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 1,
            "movement": 0
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 2,
            "movement": 0
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 2,
            "movement": -1
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 2,
            "movement": 0
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 2,
            "movement": 0
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 2,
            "movement": 0
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 2,
            "movement": 0
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 3,
            "movement": 0
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 4,
            "movement": 3
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 4,
            "movement": 2
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 4,
            "movement": 1
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 5,
            "movement": 0
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 5,
            "movement": -1
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 5,
            "movement": -1
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 6,
            "movement": -1
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 6,
            "movement": 2
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 7,
            "movement": 2
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 8,
            "movement": 2
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 8,
            "movement": -5
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 9,
            "movement": -1
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 9,
            "movement": 0
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 9,
            "movement": -2
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 10,
            "movement": -2
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 11,
            "movement": 0
          },
          {
            "country": "FR",
            "name": "France",
            "position": 12,
            "movement": 0
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 13,
            "movement": 85
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 14,
            "movement": 1
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 15,
            "movement": 8
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 15,
            "movement": -2
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 15,
            "movement": 0
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 16,
            "movement": 4
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 17,
            "movement": -5
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 18,
            "movement": 4
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 19,
            "movement": 2
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 20,
            "movement": 0
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 21,
            "movement": -4
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 24,
            "movement": 4
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 25,
            "movement": null,
            "status": "new"
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 25,
            "movement": 58
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 26,
            "movement": 0
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 26,
            "movement": -6
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 27,
            "movement": 1
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 31,
            "movement": 64
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 33,
            "movement": -3
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 34,
            "movement": 1
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 34,
            "movement": -9
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 38,
            "movement": 5
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 42,
            "movement": 3
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 47,
            "movement": 10
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 52,
            "movement": 25
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 53,
            "movement": 18
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 58,
            "movement": -3
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 64,
            "movement": -24
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 66,
            "movement": 36
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 77,
            "movement": -21
          },
          {
            "country": "MK",
            "name": "North Macedonia",
            "position": 78,
            "movement": -22
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 84,
            "movement": -50
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 86,
            "movement": 37
          },
          {
            "country": "RS",
            "name": "Serbia",
            "position": 94,
            "movement": 28
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 104,
            "movement": -10
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 104,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 106,
            "movement": 11
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 106,
            "movement": -2
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 109,
            "movement": 62
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 126,
            "movement": 73
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 131,
            "movement": 10
          },
          {
            "country": "TW",
            "name": "Taiwan",
            "position": 132,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 142,
            "movement": 54
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 152,
            "movement": -59
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 162,
            "movement": -106
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 186,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 190,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IN",
            "name": "India",
            "position": 195,
            "movement": 5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 197,
            "movement": -15
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 3,
        "entries": [
          {
            "country": "FR",
            "name": "France",
            "position": 1,
            "movement": 1
          },
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
            "country": "ES",
            "name": "Spain",
            "position": 2,
            "movement": 0
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 2,
            "movement": -1
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 3,
            "movement": 0
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 3,
            "movement": 11
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 3,
            "movement": 3
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 4,
            "movement": -1
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 4,
            "movement": 0
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 4,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 4,
            "movement": 0
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 5,
            "movement": 0
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 5,
            "movement": 0
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 6,
            "movement": 0
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 6,
            "movement": 1
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 6,
            "movement": -3
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 6,
            "movement": -5
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 9,
            "movement": 26
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 10,
            "movement": -6
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 10,
            "movement": 9
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 10,
            "movement": 2
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 10,
            "movement": 6
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 11,
            "movement": 7
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 12,
            "movement": 0
          },
          {
            "country": "DK",
            "name": "Denmark",
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
            "country": "MY",
            "name": "Malaysia",
            "position": 13,
            "movement": 67
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 13,
            "movement": 2
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 13,
            "movement": 8
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 13,
            "movement": -1
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 13,
            "movement": -1
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 14,
            "movement": -2
          },
          {
            "country": "EC",
            "name": "Ecuador",
            "position": 14,
            "movement": 65
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 14,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 14,
            "movement": 3
          },
          {
            "country": "BO",
            "name": "Bolivia",
            "position": 16,
            "movement": -1
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 16,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 17,
            "movement": null,
            "status": "new"
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 17,
            "movement": 2
          },
          {
            "country": "SV",
            "name": "El Salvador",
            "position": 18,
            "movement": 24
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 18,
            "movement": -5
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 20,
            "movement": -2
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 21,
            "movement": 5
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 26,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 28,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 32,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 38,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 41,
            "movement": 8
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 41,
            "movement": -4
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 43,
            "movement": -25
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 53,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 55,
            "movement": -12
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 67,
            "movement": -24
          },
          {
            "country": "RS",
            "name": "Serbia",
            "position": 68,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 71,
            "movement": -29
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 82,
            "movement": null,
            "status": "new"
          },
          {
            "country": "US",
            "name": "United States",
            "position": 87,
            "movement": -5
          }
        ]
      },
      {
        "platform": "Spotify",
        "numberOnes": 4,
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
            "country": "DE",
            "name": "Germany",
            "position": 1,
            "movement": 2
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
            "movement": 3
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 2,
            "movement": 2
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 2,
            "movement": 1
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 2,
            "movement": 1
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 3,
            "movement": 0
          },
          {
            "country": "FR",
            "name": "France",
            "position": 4,
            "movement": 2
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 5,
            "movement": 3
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 6,
            "movement": 1
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 6,
            "movement": 0
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 9,
            "movement": -1
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 10,
            "movement": 11
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 11,
            "movement": 7
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 11,
            "movement": 3
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 12,
            "movement": 4
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 13,
            "movement": 6
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 13,
            "movement": 3
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 13,
            "movement": 2
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 17,
            "movement": 2
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 18,
            "movement": 1
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 18,
            "movement": 11
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 20,
            "movement": 0
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 22,
            "movement": 2
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 24,
            "movement": 3
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 32,
            "movement": 9
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 39,
            "movement": 3
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 39,
            "movement": 10
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 42,
            "movement": 16
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 42,
            "movement": -6
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 52,
            "movement": 18
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 56,
            "movement": 25
          },
          {
            "country": "PA",
            "name": "Panama",
            "position": 56,
            "movement": 28
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 64,
            "movement": 54
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 68,
            "movement": 10
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 80,
            "movement": 2
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 87,
            "movement": 13
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 101,
            "movement": 31
          },
          {
            "country": "EC",
            "name": "Ecuador",
            "position": 116,
            "movement": 33
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 120,
            "movement": 39
          },
          {
            "country": "US",
            "name": "United States",
            "position": 142,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 147,
            "movement": 23
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 151,
            "movement": 12
          },
          {
            "country": "DO",
            "name": "Dominican Republic",
            "position": 164,
            "movement": 32
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 180,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 195,
            "movement": -9
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 197,
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
            "country": "UK",
            "name": "United Kingdom",
            "position": 5,
            "movement": 0
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 8,
            "movement": 0
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 11,
            "movement": 0
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 11,
            "movement": 0
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 12,
            "movement": -2
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 12,
            "movement": 0
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 12,
            "movement": -1
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 14,
            "movement": 0
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 15,
            "movement": -1
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 15,
            "movement": -1
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 16,
            "movement": -1
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 18,
            "movement": 1
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 19,
            "movement": -1
          },
          {
            "country": "RU",
            "name": "Russia",
            "position": 19,
            "movement": 0
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 20,
            "movement": -2
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 20,
            "movement": -2
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 21,
            "movement": 0
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 22,
            "movement": 1
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 22,
            "movement": -1
          },
          {
            "country": "FR",
            "name": "France",
            "position": 24,
            "movement": -1
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 26,
            "movement": -3
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 28,
            "movement": -1
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 28,
            "movement": -2
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 35,
            "movement": 0
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 37,
            "movement": -1
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 38,
            "movement": -2
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 39,
            "movement": 7
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 39,
            "movement": -2
          },
          {
            "country": "US",
            "name": "United States",
            "position": 56,
            "movement": 2
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 65,
            "movement": 7
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 65,
            "movement": -4
          },
          {
            "country": "JP",
            "name": "Japan",
            "position": 68,
            "movement": -8
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 81,
            "movement": 4
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 91,
            "movement": 8
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 107,
            "movement": -4
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 110,
            "movement": -6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 120,
            "movement": -14
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 126,
            "movement": 1
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 153,
            "movement": -4
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 164,
            "movement": 29
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 168,
            "movement": -7
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 169,
            "movement": -3
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 170,
            "movement": 1
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 184,
            "movement": 15
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 190,
            "movement": -27
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 6,
        "entries": [
          {
            "country": "DK",
            "name": "Denmark",
            "position": 1,
            "movement": 2
          },
          {
            "country": "FR",
            "name": "France",
            "position": 1,
            "movement": 1
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 1,
            "movement": 2
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 1,
            "movement": 22
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 1,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 1,
            "movement": 2
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 2,
            "movement": 0
          },
          {
            "country": "KH",
            "name": "Cambodia",
            "position": 2,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 2,
            "movement": -1
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 4,
            "movement": 2
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 4,
            "movement": 9
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 5,
            "movement": 11
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 5,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 5,
            "movement": 1
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 6,
            "movement": -2
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 8,
            "movement": -1
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 9,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 9,
            "movement": -8
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 10,
            "movement": 2
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 10,
            "movement": -6
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 12,
            "movement": 6
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 13,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 15,
            "movement": 13
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 29,
            "movement": 48
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 34,
            "movement": null,
            "status": "new"
          },
          {
            "country": "US",
            "name": "United States",
            "position": 36,
            "movement": 14
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 86,
            "movement": -25
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 88,
            "movement": -17
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 93,
            "movement": -61
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
            "country": "TD",
            "name": "Chad",
            "position": 15,
            "movement": -6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 24,
            "movement": 49
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 38,
            "movement": 48
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 42,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 43,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 46,
            "movement": -5
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 47,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 47,
            "movement": 22
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 60,
            "movement": 0
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 87,
            "movement": 4
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 94,
            "movement": 28
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 102,
            "movement": -19
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 106,
            "movement": 23
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 120,
            "movement": -45
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 126,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 134,
            "movement": 41
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 136,
            "movement": -53
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 147,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 147,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 150,
            "movement": -30
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 157,
            "movement": -1
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 158,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 159,
            "movement": -38
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 165,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 166,
            "movement": -115
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 166,
            "movement": -88
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 174,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 176,
            "movement": 6
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 176,
            "movement": -64
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 178,
            "movement": -36
          },
          {
            "country": "JM",
            "name": "Jamaica",
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
            "country": "GM",
            "name": "Gambia",
            "position": 54,
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
            "country": "MR",
            "name": "Mauritania",
            "position": 11,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 32,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 33,
            "movement": 12
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 55,
            "movement": -3
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 65,
            "movement": 25
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 65,
            "movement": -10
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 65,
            "movement": -9
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 70,
            "movement": 4
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 80,
            "movement": 25
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 93,
            "movement": 18
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 95,
            "movement": 20
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 118,
            "movement": -29
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 126,
            "movement": 9
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 129,
            "movement": 15
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 132,
            "movement": 8
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 135,
            "movement": 12
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 138,
            "movement": -15
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 155,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 171,
            "movement": -95
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 176,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 184,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 185,
            "movement": -43
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
            "position": 34,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 60,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 62,
            "movement": -3
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 67,
            "movement": -3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 136,
            "movement": -16
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
            "position": 26,
            "movement": 7
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 36,
            "movement": 2
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 61,
            "movement": -7
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 67,
            "movement": 2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 91,
            "movement": 32
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 98,
            "movement": 15
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 103,
            "movement": 2
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 121,
            "movement": -19
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 124,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 135,
            "movement": 2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 138,
            "movement": 10
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 142,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 145,
            "movement": -33
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 148,
            "movement": -19
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 158,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 159,
            "movement": 28
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 160,
            "movement": 4
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 179,
            "movement": -19
          },
          {
            "country": "CV",
            "name": "Cape Verde",
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
            "country": "DM",
            "name": "Dominica",
            "position": 13,
            "movement": 2
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 68,
            "movement": 0
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
            "position": 116,
            "movement": -9
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
            "position": 40,
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
            "country": "KE",
            "name": "Kenya",
            "position": 7,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 10,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 12,
            "movement": 4
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 13,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 17,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 18,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 23,
            "movement": 3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 28,
            "movement": -18
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 64,
            "movement": -7
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 66,
            "movement": -4
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 67,
            "movement": 5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 68,
            "movement": 11
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 70,
            "movement": 19
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 80,
            "movement": 5
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 157,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 166,
            "movement": 12
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 176,
            "movement": 8
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 188,
            "movement": -32
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 194,
            "movement": null,
            "status": "new"
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
            "country": "KE",
            "name": "Kenya",
            "position": 34,
            "movement": 15
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 44,
            "movement": 0
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 57,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 61,
            "movement": 39
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 71,
            "movement": 70
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 76,
            "movement": 27
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 84,
            "movement": 2
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 89,
            "movement": -41
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 102,
            "movement": 35
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 112,
            "movement": -4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 112,
            "movement": 4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 128,
            "movement": 12
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 130,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 135,
            "movement": 61
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 149,
            "movement": 46
          },
          {
            "country": "BZ",
            "name": "Belize",
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
            "country": "DM",
            "name": "Dominica",
            "position": 12,
            "movement": 2
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 59,
            "movement": 1
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
            "position": 160,
            "movement": 13
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
            "country": "LR",
            "name": "Liberia",
            "position": 18,
            "movement": 17
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 18,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 22,
            "movement": 10
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 32,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 34,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 40,
            "movement": 28
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 68,
            "movement": 26
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 74,
            "movement": -11
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 86,
            "movement": -2
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 99,
            "movement": 48
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 103,
            "movement": 10
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 114,
            "movement": 3
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 137,
            "movement": -45
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 141,
            "movement": -57
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 143,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 183,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 183,
            "movement": 15
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 188,
            "movement": -53
          }
        ]
      }
    ],
    "kind": "album"
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
            "position": 21,
            "movement": 0
          },
          {
            "country": "BN",
            "name": "Brunei Darussalam",
            "position": 38,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 40,
            "movement": -2
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 54,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 61,
            "movement": -15
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 67,
            "movement": -6
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 92,
            "movement": 55
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 97,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 98,
            "movement": -8
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 120,
            "movement": 74
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 138,
            "movement": -32
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 146,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 157,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 167,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 169,
            "movement": -11
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 171,
            "movement": -11
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 174,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album"
  },
  {
    "title": "Change Your Mind",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 14,
            "movement": 1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 19,
            "movement": -7
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 22,
            "movement": 2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 24,
            "movement": 7
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 24,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 29,
            "movement": 2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 47,
            "movement": 2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 50,
            "movement": -4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 55,
            "movement": 13
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 102,
            "movement": 13
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 105,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 114,
            "movement": 12
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 121,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 122,
            "movement": 7
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 128,
            "movement": 72
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 135,
            "movement": -12
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "wgft",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 65,
            "movement": 3
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 82,
            "movement": 18
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 88,
            "movement": -12
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 103,
            "movement": 76
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 108,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 123,
            "movement": 55
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 133,
            "movement": 30
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 142,
            "movement": 30
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 145,
            "movement": -12
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 152,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 186,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 194,
            "movement": -4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 198,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
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
            "position": 155,
            "movement": 6
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Ginger",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 21,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 23,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 25,
            "movement": 3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 43,
            "movement": -9
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 47,
            "movement": 7
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 64,
            "movement": -26
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 64,
            "movement": 21
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 99,
            "movement": 16
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 132,
            "movement": -51
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 143,
            "movement": -41
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 163,
            "movement": -38
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 178,
            "movement": -39
          }
        ]
      }
    ],
    "kind": "song"
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 25,
            "movement": 139
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 53,
            "movement": 3
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 77,
            "movement": -2
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 112,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 171,
            "movement": -76
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 182,
            "movement": -89
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 184,
            "movement": -25
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
            "position": 20,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 28,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 68,
            "movement": -13
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 157,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "album"
  },
  {
    "title": "It's Plenty",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 68,
            "movement": -6
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 79,
            "movement": 80
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 99,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 100,
            "movement": -58
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 110,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 151,
            "movement": -103
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 171,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GY",
            "name": "Guyana",
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
            "country": "BF",
            "name": "Burkina Faso",
            "position": 31,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 31,
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
            "position": 19,
            "movement": -1
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 26,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 32,
            "movement": -1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 34,
            "movement": 0
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 34,
            "movement": 0
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
            "position": 101,
            "movement": 84
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 107,
            "movement": 73
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 121,
            "movement": -86
          },
          {
            "country": "FJ",
            "name": "Fiji",
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
    "title": "Gbona",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 54,
            "movement": -8
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 82,
            "movement": 7
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 88,
            "movement": 31
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 105,
            "movement": 17
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 138,
            "movement": -59
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 183,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 185,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 197,
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
            "country": "SZ",
            "name": "Swaziland",
            "position": 27,
            "movement": 4
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 57,
            "movement": 3
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 78,
            "movement": -4
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 83,
            "movement": 18
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 124,
            "movement": 2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 167,
            "movement": null,
            "status": "new"
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
            "position": 27,
            "movement": 10
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 47,
            "movement": 0
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 74,
            "movement": 1
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
            "position": 125,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 195,
            "movement": null,
            "status": "new"
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
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 79,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 122,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 131,
            "movement": -20
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 141,
            "movement": 27
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
            "position": 79,
            "movement": -9
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 94,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 164,
            "movement": 10
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 188,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album"
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
            "position": 59,
            "movement": 2
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 139,
            "movement": 17
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
            "position": 177,
            "movement": null,
            "status": "new"
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 105,
            "movement": 44
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 139,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Talibans II",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 132,
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
            "position": 86,
            "movement": -18
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
            "position": 68,
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
            "position": 155,
            "movement": 7
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
            "position": 159,
            "movement": 4
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
            "position": 90,
            "movement": 13
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 167,
            "movement": -151
          }
        ]
      }
    ],
    "kind": "song"
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
            "position": 80,
            "movement": 12
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Bank On It",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 75,
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
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 53,
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
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 27,
            "movement": null,
            "status": "new"
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
            "position": 109,
            "movement": 6
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Vanilla",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 128,
            "movement": -85
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
            "position": 132,
            "movement": -14
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Loved By You",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BT",
            "name": "Bhutan",
            "position": 81,
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
            "position": 67,
            "movement": 1
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
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 198,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Normal",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 139,
            "movement": -19
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
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Good Time",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 163,
            "movement": null,
            "status": "new"
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
            "position": 166,
            "movement": -19
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
            "position": 176,
            "movement": 9
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "All Eyes On Me",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BW",
            "name": "Botswana",
            "position": 191,
            "movement": -10
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
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 88,
            "movement": -15
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
            "position": 189,
            "movement": 2
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
  