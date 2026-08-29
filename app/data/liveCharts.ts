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
  export const liveChartsUpdated = "2026-08-29";
  
  /** Every platform represented in the current snapshot. */
  export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","YouTube","iTunes"];
  
  export const liveCharts: LiveRelease[] = [
  {
    "title": "Dai Dai",
    "platforms": [
      {
        "platform": "YouTube",
        "numberOnes": 43,
        "entries": [
          {
            "country": "AO",
            "name": "Angola",
            "position": 1,
            "movement": 0
          },
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
            "country": "BH",
            "name": "Bahrain",
            "position": 1,
            "movement": 1
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
            "country": "CR",
            "name": "Costa Rica",
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
            "country": "HN",
            "name": "Honduras",
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
            "movement": 1
          },
          {
            "country": "LT",
            "name": "Lithuania",
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
            "movement": 1
          },
          {
            "country": "PA",
            "name": "Panama",
            "position": 1,
            "movement": 0
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 1,
            "movement": 0
          },
          {
            "country": "PL",
            "name": "Poland",
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
            "country": "VE",
            "name": "Venezuela",
            "position": 1,
            "movement": 0
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 2,
            "movement": 0
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 2,
            "movement": -1
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 2,
            "movement": 1
          },
          {
            "country": "SV",
            "name": "El Salvador",
            "position": 2,
            "movement": -1
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 2,
            "movement": -1
          },
          {
            "country": "GE",
            "name": "Georgia",
            "position": 2,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 2,
            "movement": -1
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 2,
            "movement": -1
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 2,
            "movement": 0
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 2,
            "movement": -1
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 2,
            "movement": 1
          },
          {
            "country": "MA",
            "name": "Morocco",
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
            "country": "RO",
            "name": "Romania",
            "position": 2,
            "movement": 0
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 2,
            "movement": -1
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 2,
            "movement": -1
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 2,
            "movement": -1
          },
          {
            "country": "US",
            "name": "United States",
            "position": 2,
            "movement": -1
          },
          {
            "country": "BO",
            "name": "Bolivia",
            "position": 3,
            "movement": -2
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 3,
            "movement": -1
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 3,
            "movement": -1
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 3,
            "movement": -1
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 3,
            "movement": 0
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 3,
            "movement": -1
          },
          {
            "country": "MK",
            "name": "North Macedonia",
            "position": 3,
            "movement": -2
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 3,
            "movement": 0
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 3,
            "movement": 2
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 3,
            "movement": -2
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 3,
            "movement": -2
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 3,
            "movement": -1
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 3,
            "movement": -1
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 4,
            "movement": -1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 4,
            "movement": -2
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
            "movement": -1
          },
          {
            "country": "ET",
            "name": "Ethiopia",
            "position": 4,
            "movement": 1
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 4,
            "movement": 6
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 4,
            "movement": -3
          },
          {
            "country": "NG",
            "name": "Nigeria",
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
            "country": "BD",
            "name": "Bangladesh",
            "position": 5,
            "movement": -3
          },
          {
            "country": "BN",
            "name": "Brunei Darussalam",
            "position": 5,
            "movement": -1
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 5,
            "movement": -1
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 5,
            "movement": -1
          },
          {
            "country": "RS",
            "name": "Serbia",
            "position": 5,
            "movement": 0
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 5,
            "movement": -1
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 5,
            "movement": -2
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 5,
            "movement": -1
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 6,
            "movement": -1
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 6,
            "movement": -3
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 6,
            "movement": -1
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 6,
            "movement": -1
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 7,
            "movement": 0
          },
          {
            "country": "LY",
            "name": "Libya",
            "position": 7,
            "movement": 0
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 8,
            "movement": -4
          },
          {
            "country": "BA",
            "name": "Bosnia and Herzegovina",
            "position": 8,
            "movement": 0
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 8,
            "movement": 1
          },
          {
            "country": "AL",
            "name": "Albania",
            "position": 9,
            "movement": -1
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 9,
            "movement": -5
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 9,
            "movement": -2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 9,
            "movement": -2
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 10,
            "movement": -3
          },
          {
            "country": "DO",
            "name": "Dominican Republic",
            "position": 12,
            "movement": -8
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 13,
            "movement": -6
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 14,
            "movement": -4
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 15,
            "movement": -3
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 17,
            "movement": -6
          },
          {
            "country": "PR",
            "name": "Puerto Rico",
            "position": 19,
            "movement": -10
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 20,
            "movement": -10
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 43,
            "movement": -15
          },
          {
            "country": "IN",
            "name": "India",
            "position": 64,
            "movement": -24
          },
          {
            "country": "JP",
            "name": "Japan",
            "position": 71,
            "movement": -1
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
            "country": "CY",
            "name": "Cyprus",
            "position": 1,
            "movement": 1
          },
          {
            "country": "DE",
            "name": "Germany",
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
            "country": "NO",
            "name": "Norway",
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
            "country": "TM",
            "name": "Turkmenistan",
            "position": 1,
            "movement": 2
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
            "country": "NL",
            "name": "Netherlands",
            "position": 2,
            "movement": 2
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 2,
            "movement": 0
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 2,
            "movement": 2
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 2,
            "movement": 1
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 2,
            "movement": 3
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 3,
            "movement": 1
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 4,
            "movement": 1
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 4,
            "movement": 3
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 4,
            "movement": 3
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 5,
            "movement": 2
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 5,
            "movement": 9
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 6,
            "movement": 0
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 7,
            "movement": 7
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 8,
            "movement": -4
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 8,
            "movement": -3
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 8,
            "movement": -3
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 8,
            "movement": 0
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 9,
            "movement": 4
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 9,
            "movement": 2
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 10,
            "movement": 1
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 11,
            "movement": -1
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 11,
            "movement": 1
          },
          {
            "country": "FR",
            "name": "France",
            "position": 12,
            "movement": 2
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 12,
            "movement": 3
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 13,
            "movement": -1
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 13,
            "movement": -2
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 15,
            "movement": 0
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 15,
            "movement": -1
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 17,
            "movement": 1
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 20,
            "movement": 4
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 22,
            "movement": 3
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 23,
            "movement": -1
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 26,
            "movement": -6
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 26,
            "movement": 1
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 26,
            "movement": 1
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 28,
            "movement": -5
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 30,
            "movement": 1
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 32,
            "movement": -6
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 34,
            "movement": -20
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 39,
            "movement": -2
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 39,
            "movement": 0
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 40,
            "movement": 16
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 43,
            "movement": -3
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 43,
            "movement": -4
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 44,
            "movement": 11
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 49,
            "movement": -15
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 55,
            "movement": 25
          },
          {
            "country": "MK",
            "name": "North Macedonia",
            "position": 58,
            "movement": -11
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 63,
            "movement": 18
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 69,
            "movement": 3
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 71,
            "movement": -16
          },
          {
            "country": "LY",
            "name": "Libya",
            "position": 73,
            "movement": -6
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 77,
            "movement": -17
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 83,
            "movement": null,
            "status": "new"
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 94,
            "movement": -24
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 104,
            "movement": 0
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 107,
            "movement": 12
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 117,
            "movement": 47
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 121,
            "movement": -66
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 123,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 124,
            "movement": 18
          },
          {
            "country": "MM",
            "name": "Myanmar",
            "position": 124,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TW",
            "name": "Taiwan",
            "position": 130,
            "movement": -3
          },
          {
            "country": "RS",
            "name": "Serbia",
            "position": 137,
            "movement": -34
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 138,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 148,
            "movement": -62
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 154,
            "movement": 17
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 166,
            "movement": -24
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 174,
            "movement": -4
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 182,
            "movement": -3
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 189,
            "movement": -94
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 195,
            "movement": -29
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 196,
            "movement": -37
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 199,
            "movement": -46
          },
          {
            "country": "IN",
            "name": "India",
            "position": 200,
            "movement": null,
            "status": "new"
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 4,
        "entries": [
          {
            "country": "PL",
            "name": "Poland",
            "position": 1,
            "movement": 0
          },
          {
            "country": "RO",
            "name": "Romania",
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
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 1,
            "movement": 0
          },
          {
            "country": "FR",
            "name": "France",
            "position": 2,
            "movement": -1
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 2,
            "movement": 0
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 3,
            "movement": 6
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 3,
            "movement": 14
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 3,
            "movement": -1
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 4,
            "movement": 1
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 4,
            "movement": 0
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 4,
            "movement": -1
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 5,
            "movement": 2
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 5,
            "movement": -2
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 6,
            "movement": 5
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 6,
            "movement": 2
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 7,
            "movement": 1
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 12,
            "movement": 2
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
            "country": "EE",
            "name": "Estonia",
            "position": 12,
            "movement": null,
            "status": "new"
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
            "country": "CH",
            "name": "Switzerland",
            "position": 12,
            "movement": 1
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 12,
            "movement": 3
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 13,
            "movement": 10
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 14,
            "movement": 3
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 14,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BO",
            "name": "Bolivia",
            "position": 15,
            "movement": 24
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 15,
            "movement": -11
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 16,
            "movement": -11
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 17,
            "movement": 2
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 18,
            "movement": 30
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 18,
            "movement": 3
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 18,
            "movement": -12
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 19,
            "movement": -8
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 19,
            "movement": 10
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 21,
            "movement": -12
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 26,
            "movement": 65
          },
          {
            "country": "VE",
            "name": "Venezuela",
            "position": 34,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 35,
            "movement": -19
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 37,
            "movement": -6
          },
          {
            "country": "SV",
            "name": "El Salvador",
            "position": 42,
            "movement": -5
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 42,
            "movement": 37
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 43,
            "movement": -9
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 43,
            "movement": 20
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 49,
            "movement": 14
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 54,
            "movement": null,
            "status": "new"
          },
          {
            "country": "EC",
            "name": "Ecuador",
            "position": 79,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 80,
            "movement": null,
            "status": "new"
          },
          {
            "country": "US",
            "name": "United States",
            "position": 82,
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
            "movement": -1
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 8,
            "movement": -3
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 10,
            "movement": 0
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 11,
            "movement": -1
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 11,
            "movement": 2
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 11,
            "movement": -1
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 12,
            "movement": -1
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 14,
            "movement": 3
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 14,
            "movement": 0
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 14,
            "movement": 1
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 15,
            "movement": -4
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 18,
            "movement": -1
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 18,
            "movement": 0
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 18,
            "movement": 0
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 19,
            "movement": -1
          },
          {
            "country": "RU",
            "name": "Russia",
            "position": 19,
            "movement": 1
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 21,
            "movement": -2
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 21,
            "movement": -2
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 23,
            "movement": -4
          },
          {
            "country": "FR",
            "name": "France",
            "position": 23,
            "movement": 0
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 23,
            "movement": 3
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 26,
            "movement": -1
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 27,
            "movement": 2
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
            "position": 36,
            "movement": -1
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 36,
            "movement": -1
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 37,
            "movement": 0
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 46,
            "movement": 0
          },
          {
            "country": "US",
            "name": "United States",
            "position": 58,
            "movement": -2
          },
          {
            "country": "JP",
            "name": "Japan",
            "position": 60,
            "movement": -5
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 61,
            "movement": 5
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 72,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 85,
            "movement": -2
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 99,
            "movement": 7
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 103,
            "movement": -4
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 104,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 106,
            "movement": -1
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 127,
            "movement": 7
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 149,
            "movement": 20
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 161,
            "movement": -4
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 163,
            "movement": -5
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 166,
            "movement": -8
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 171,
            "movement": -7
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 183,
            "movement": -50
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 192,
            "movement": -27
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 193,
            "movement": -24
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 199,
            "movement": -17
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 199,
            "movement": -24
          }
        ]
      },
      {
        "platform": "Spotify",
        "numberOnes": 3,
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
            "country": "CH",
            "name": "Switzerland",
            "position": 1,
            "movement": 0
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 3,
            "movement": 0
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 3,
            "movement": 0
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 3,
            "movement": 1
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 3,
            "movement": 3
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 4,
            "movement": 0
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 5,
            "movement": -3
          },
          {
            "country": "FR",
            "name": "France",
            "position": 6,
            "movement": 3
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 6,
            "movement": 2
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 7,
            "movement": 0
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 8,
            "movement": 0
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 9,
            "movement": -1
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 14,
            "movement": -2
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 15,
            "movement": 1
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 16,
            "movement": 0
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 16,
            "movement": -1
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 18,
            "movement": 3
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 19,
            "movement": -3
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 19,
            "movement": -1
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 19,
            "movement": 0
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 20,
            "movement": 2
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 21,
            "movement": 4
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 24,
            "movement": 4
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 27,
            "movement": 6
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 29,
            "movement": 10
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 36,
            "movement": -9
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 41,
            "movement": -1
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 42,
            "movement": 2
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 49,
            "movement": 6
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 58,
            "movement": -10
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 70,
            "movement": -13
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 78,
            "movement": 1
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 81,
            "movement": 12
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 82,
            "movement": -10
          },
          {
            "country": "PA",
            "name": "Panama",
            "position": 84,
            "movement": -7
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 100,
            "movement": 45
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 118,
            "movement": 18
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 132,
            "movement": 9
          },
          {
            "country": "EC",
            "name": "Ecuador",
            "position": 149,
            "movement": 15
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 159,
            "movement": -29
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 163,
            "movement": -6
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 170,
            "movement": 0
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 172,
            "movement": -9
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 186,
            "movement": 4
          },
          {
            "country": "DO",
            "name": "Dominican Republic",
            "position": 196,
            "movement": null,
            "status": "new"
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 2,
        "entries": [
          {
            "country": "FI",
            "name": "Finland",
            "position": 1,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 1,
            "movement": 16
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 2,
            "movement": 3
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 2,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FR",
            "name": "France",
            "position": 2,
            "movement": 1
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 2,
            "movement": 38
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 2,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 4,
            "movement": 10
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 5,
            "movement": 13
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 6,
            "movement": 1
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 7,
            "movement": 4
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 7,
            "movement": 1
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 11,
            "movement": 3
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 12,
            "movement": -4
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 12,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 13,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 22,
            "movement": -5
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 22,
            "movement": -14
          },
          {
            "country": "HK",
            "name": "Hong Kong",
            "position": 28,
            "movement": 17
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 33,
            "movement": -13
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 41,
            "movement": -13
          },
          {
            "country": "US",
            "name": "United States",
            "position": 55,
            "movement": 18
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 56,
            "movement": 50
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 65,
            "movement": -29
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 67,
            "movement": -58
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 70,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 88,
            "movement": -52
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 104,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VN",
            "name": "Vietnam",
            "position": 107,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DO",
            "name": "Dominican Republic",
            "position": 196,
            "movement": -31
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
            "position": 9,
            "movement": 59
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 40,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 41,
            "movement": 32
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 44,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 60,
            "movement": 0
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 61,
            "movement": -11
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 69,
            "movement": -9
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 73,
            "movement": -37
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 78,
            "movement": -17
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 83,
            "movement": -21
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 83,
            "movement": 56
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 86,
            "movement": -3
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 112,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 116,
            "movement": 39
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 120,
            "movement": 45
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 122,
            "movement": -28
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 129,
            "movement": -76
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 136,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 140,
            "movement": -85
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 142,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 156,
            "movement": 32
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 157,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 182,
            "movement": -30
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 183,
            "movement": 17
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
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
    "title": "On the Low",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 25,
            "movement": 48
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 33,
            "movement": -1
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 39,
            "movement": 141
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 42,
            "movement": 7
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 69,
            "movement": 2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 71,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 102,
            "movement": -5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 112,
            "movement": 23
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 112,
            "movement": -21
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 113,
            "movement": 71
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 124,
            "movement": 21
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 129,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 135,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 137,
            "movement": -27
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 141,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 148,
            "movement": 1
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 164,
            "movement": -43
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 173,
            "movement": -24
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 187,
            "movement": -37
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 187,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 197,
            "movement": -27
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
            "position": 15,
            "movement": 0
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 68,
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
            "country": "SN",
            "name": "Senegal",
            "position": 107,
            "movement": -7
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 99,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "African Giant",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 31,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 45,
            "movement": 3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 52,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 55,
            "movement": 30
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 56,
            "movement": 30
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 72,
            "movement": -18
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 76,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 89,
            "movement": -43
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 90,
            "movement": -14
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 105,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 111,
            "movement": -9
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 112,
            "movement": 38
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 115,
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 123,
            "movement": -67
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 135,
            "movement": -44
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 140,
            "movement": 7
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 142,
            "movement": -29
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 144,
            "movement": 42
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 147,
            "movement": 37
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
            "position": 33,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 59,
            "movement": 2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 61,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 64,
            "movement": -5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 118,
            "movement": -31
          }
        ]
      }
    ],
    "kind": "album"
  },
  {
    "title": "Ye",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 42,
            "movement": 6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 44,
            "movement": 2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 49,
            "movement": 25
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 88,
            "movement": 11
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 100,
            "movement": -53
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 103,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 108,
            "movement": -1
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 111,
            "movement": 15
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 114,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 116,
            "movement": -9
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 125,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 137,
            "movement": 7
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 140,
            "movement": -49
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 155,
            "movement": -76
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 162,
            "movement": null,
            "status": "new"
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 168,
            "movement": -101
          },
          {
            "country": "MW",
            "name": "Malawi",
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
            "country": "DM",
            "name": "Dominica",
            "position": 14,
            "movement": 0
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 60,
            "movement": -2
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
            "position": 173,
            "movement": -7
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
            "country": "NG",
            "name": "Nigeria",
            "position": 19,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 32,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 32,
            "movement": -9
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 35,
            "movement": 35
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 35,
            "movement": -1
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 44,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 68,
            "movement": -22
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 74,
            "movement": -12
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 84,
            "movement": -3
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 89,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 92,
            "movement": 38
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 102,
            "movement": 31
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 113,
            "movement": -50
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 117,
            "movement": 35
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 131,
            "movement": -14
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 135,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 146,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 147,
            "movement": -6
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 198,
            "movement": null,
            "status": "new"
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
            "position": 59,
            "movement": 123
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 68,
            "movement": -3
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 91,
            "movement": 96
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 109,
            "movement": -19
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 119,
            "movement": -60
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 133,
            "movement": -35
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 152,
            "movement": -14
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 154,
            "movement": -37
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 163,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 166,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 172,
            "movement": -16
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 178,
            "movement": -49
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 179,
            "movement": 4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 182,
            "movement": -36
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 189,
            "movement": -73
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 190,
            "movement": -37
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
            "position": 161,
            "movement": -15
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 17,
            "movement": -6
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
            "position": 9,
            "movement": -3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 10,
            "movement": -2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 11,
            "movement": 11
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 14,
            "movement": 7
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 15,
            "movement": -2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 16,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 19,
            "movement": 6
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 26,
            "movement": 2
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 33,
            "movement": 16
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 57,
            "movement": -2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 62,
            "movement": -9
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 80,
            "movement": -12
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 101,
            "movement": 10
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 111,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 156,
            "movement": 4
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 173,
            "movement": -12
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 192,
            "movement": -32
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
            "country": "GH",
            "name": "Ghana",
            "position": 56,
            "movement": -13
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 75,
            "movement": -3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 93,
            "movement": 32
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 95,
            "movement": -63
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 151,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 159,
            "movement": -35
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 164,
            "movement": -78
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 168,
            "movement": -94
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 185,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 190,
            "movement": -24
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 194,
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
            "position": 20,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 28,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 53,
            "movement": -12
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
    "title": "Change Your Mind",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MW",
            "name": "Malawi",
            "position": 12,
            "movement": 12
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 15,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 22,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 24,
            "movement": 2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 26,
            "movement": 48
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 31,
            "movement": -7
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 31,
            "movement": -9
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 49,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 68,
            "movement": -19
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 115,
            "movement": 12
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 141,
            "movement": -15
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 142,
            "movement": -35
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 150,
            "movement": -23
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 186,
            "movement": null,
            "status": "new"
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
            "position": 21,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 38,
            "movement": -3
          },
          {
            "country": "BN",
            "name": "Brunei Darussalam",
            "position": 39,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 46,
            "movement": 49
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 52,
            "movement": -2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 61,
            "movement": -1
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 67,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 90,
            "movement": 22
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 96,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 106,
            "movement": -4
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 162,
            "movement": -35
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 169,
            "movement": 28
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 178,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 194,
            "movement": -102
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
            "country": "KE",
            "name": "Kenya",
            "position": 21,
            "movement": 4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 22,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 25,
            "movement": 2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 34,
            "movement": 3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 38,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 54,
            "movement": -3
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 85,
            "movement": 10
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 93,
            "movement": -64
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 110,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 115,
            "movement": 3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 125,
            "movement": -14
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 161,
            "movement": -36
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 186,
            "movement": -20
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
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 33,
            "movement": 2
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 42,
            "movement": 31
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 61,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 82,
            "movement": -48
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 122,
            "movement": -10
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 131,
            "movement": null,
            "status": "new"
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 165,
            "movement": -91
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 190,
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
            "position": 30,
            "movement": -10
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 30,
            "movement": 0
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
            "position": 17,
            "movement": 0
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 28,
            "movement": -5
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 31,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 33,
            "movement": -10
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 34,
            "movement": 1
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 77,
            "movement": 24
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 180,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 185,
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
            "position": 46,
            "movement": 4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 69,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 69,
            "movement": 106
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 89,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 112,
            "movement": -11
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 119,
            "movement": -45
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 196,
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
            "country": "ZA",
            "name": "South Africa",
            "position": 60,
            "movement": 23
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 74,
            "movement": 29
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 84,
            "movement": -47
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 88,
            "movement": 20
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 189,
            "movement": null,
            "status": "new"
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 112,
            "movement": -24
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 189,
            "movement": -35
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
            "position": 61,
            "movement": 2
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 156,
            "movement": -16
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
            "position": 70,
            "movement": -3
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 139,
            "movement": 18
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 160,
            "movement": -97
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 174,
            "movement": 20
          }
        ]
      }
    ],
    "kind": "album"
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
            "position": 46,
            "movement": -10
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 75,
            "movement": -2
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 161,
            "movement": -56
          }
        ]
      },
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
            "position": 162,
            "movement": -23
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
            "position": 119,
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
            "country": "KE",
            "name": "Kenya",
            "position": 83,
            "movement": null,
            "status": "re"
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 78,
            "movement": 23
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 115,
            "movement": 8
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 111,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 131,
            "movement": 25
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 193,
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
            "country": "NG",
            "name": "Nigeria",
            "position": 120,
            "movement": -24
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
            "position": 163,
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
            "position": 103,
            "movement": 15
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
            "country": "TD",
            "name": "Chad",
            "position": 39,
            "movement": -13
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
            "position": 92,
            "movement": -16
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Gum Body",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 107,
            "movement": null,
            "status": "new"
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
            "position": 118,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Sungba",
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
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BB",
            "name": "Barbados",
            "position": 65,
            "movement": -6
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Tested, Approved & Trusted",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 143,
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
            "position": 68,
            "movement": 2
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
            "position": 149,
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
            "position": 110,
            "movement": -96
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
            "position": 65,
            "movement": -2
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
            "position": 181,
            "movement": -17
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
            "position": 185,
            "movement": 6
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
            "position": 71,
            "movement": -12
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
            "movement": 6
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
  