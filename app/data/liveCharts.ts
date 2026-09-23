// GENERATED FILE — do not edit by hand.
  // Rebuilt several times a day by scripts/build-live-charts.mjs from kworb's artist page.
  //
  // PLATFORM chart data for Burna Boy: where each release is sitting RIGHT
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
  export const liveChartsUpdated = "2026-09-23";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-09-23T07:49Z";
  
  /** Every platform represented in the current snapshot. */
  export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","Spotify Albums","YouTube","iTunes"];
  
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
        "numberOnes": 2,
        "entries": [
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
            "country": "AT",
            "name": "Austria",
            "position": 2,
            "movement": 0
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 2,
            "movement": -1
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 3,
            "movement": -1
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 3,
            "movement": -1
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 4,
            "movement": -1
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 6,
            "movement": -2
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 6,
            "movement": -2
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 8,
            "movement": 5
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 9,
            "movement": -1
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 10,
            "movement": -5
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 10,
            "movement": 1
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 10,
            "movement": 0
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 11,
            "movement": -4
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 11,
            "movement": -3
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 12,
            "movement": 3
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 13,
            "movement": -4
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 16,
            "movement": 1
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 16,
            "movement": -3
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 17,
            "movement": -1
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 19,
            "movement": -7
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 19,
            "movement": -2
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 21,
            "movement": 1
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 22,
            "movement": -11
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 24,
            "movement": 1
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 25,
            "movement": 0
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 26,
            "movement": -1
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 28,
            "movement": 1
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 29,
            "movement": -5
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 30,
            "movement": 37
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 32,
            "movement": -1
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 33,
            "movement": -17
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 37,
            "movement": -6
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 38,
            "movement": -2
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 40,
            "movement": -21
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 41,
            "movement": -2
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 41,
            "movement": -2
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 49,
            "movement": -3
          },
          {
            "country": "FR",
            "name": "France",
            "position": 51,
            "movement": -6
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 53,
            "movement": -17
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 56,
            "movement": 20
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 64,
            "movement": -5
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 64,
            "movement": -41
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 71,
            "movement": 1
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 78,
            "movement": -9
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 82,
            "movement": -21
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 84,
            "movement": 3
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 86,
            "movement": -33
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 87,
            "movement": 17
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 87,
            "movement": -6
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 93,
            "movement": 11
          },
          {
            "country": "RS",
            "name": "Serbia",
            "position": 103,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 112,
            "movement": -11
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 123,
            "movement": 33
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 124,
            "movement": -16
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 144,
            "movement": -26
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 147,
            "movement": 9
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 151,
            "movement": -12
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 151,
            "movement": 15
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 166,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 198,
            "movement": null,
            "status": "new"
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
            "movement": 1
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 1,
            "movement": 0
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 2,
            "movement": 0
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 2,
            "movement": 1
          },
          {
            "country": "FR",
            "name": "France",
            "position": 3,
            "movement": 0
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 3,
            "movement": 1
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 4,
            "movement": 23
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 5,
            "movement": -1
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 5,
            "movement": 2
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 6,
            "movement": 11
          },
          {
            "country": "EC",
            "name": "Ecuador",
            "position": 7,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 8,
            "movement": 10
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 9,
            "movement": -3
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 11,
            "movement": 0
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 11,
            "movement": -3
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 12,
            "movement": 11
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
            "country": "IE",
            "name": "Ireland",
            "position": 12,
            "movement": 4
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 12,
            "movement": 0
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 13,
            "movement": 1
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 14,
            "movement": 10
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 14,
            "movement": 11
          },
          {
            "country": "BO",
            "name": "Bolivia",
            "position": 16,
            "movement": -5
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 17,
            "movement": 17
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 18,
            "movement": 2
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 19,
            "movement": 0
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 22,
            "movement": 37
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 24,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 28,
            "movement": -17
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 42,
            "movement": -25
          },
          {
            "country": "SV",
            "name": "El Salvador",
            "position": 46,
            "movement": -37
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 47,
            "movement": 21
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 48,
            "movement": -16
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 51,
            "movement": 6
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 54,
            "movement": -7
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 54,
            "movement": -6
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 56,
            "movement": -18
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 57,
            "movement": -53
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 60,
            "movement": -40
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 60,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 65,
            "movement": 15
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 86,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 97,
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
            "country": "AT",
            "name": "Austria",
            "position": 5,
            "movement": -3
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 5,
            "movement": 0
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 5,
            "movement": -3
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 6,
            "movement": -2
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 7,
            "movement": -5
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 10,
            "movement": -4
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 12,
            "movement": -2
          },
          {
            "country": "FR",
            "name": "France",
            "position": 17,
            "movement": -5
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 17,
            "movement": -8
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 22,
            "movement": -5
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 23,
            "movement": -9
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 24,
            "movement": -13
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 26,
            "movement": -5
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 30,
            "movement": -12
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 34,
            "movement": -4
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 42,
            "movement": -13
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 48,
            "movement": -22
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 50,
            "movement": -33
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 50,
            "movement": -7
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 52,
            "movement": -25
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 52,
            "movement": -13
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 56,
            "movement": -19
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 59,
            "movement": -22
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 63,
            "movement": 8
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 64,
            "movement": -7
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 68,
            "movement": -28
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 79,
            "movement": -20
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 90,
            "movement": -34
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 132,
            "movement": -70
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 133,
            "movement": -61
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 134,
            "movement": -36
          },
          {
            "country": "PA",
            "name": "Panama",
            "position": 141,
            "movement": -61
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 146,
            "movement": -4
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 176,
            "movement": -28
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 182,
            "movement": 5
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 189,
            "movement": -47
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 194,
            "movement": 4
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
            "position": 10,
            "movement": 1
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 18,
            "movement": -2
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 19,
            "movement": 3
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 20,
            "movement": 1
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 20,
            "movement": -2
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 24,
            "movement": 0
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 24,
            "movement": -1
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 28,
            "movement": -1
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 28,
            "movement": 2
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 28,
            "movement": -3
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 29,
            "movement": -1
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 30,
            "movement": 6
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 32,
            "movement": 1
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 34,
            "movement": -1
          },
          {
            "country": "RU",
            "name": "Russia",
            "position": 34,
            "movement": 0
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 36,
            "movement": 2
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 37,
            "movement": 0
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 38,
            "movement": 2
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 41,
            "movement": -3
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 45,
            "movement": 1
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 46,
            "movement": -2
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 50,
            "movement": 4
          },
          {
            "country": "FR",
            "name": "France",
            "position": 52,
            "movement": -8
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 61,
            "movement": -1
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 61,
            "movement": -2
          },
          {
            "country": "US",
            "name": "United States",
            "position": 73,
            "movement": 0
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 80,
            "movement": -1
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 83,
            "movement": 3
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 83,
            "movement": 2
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 110,
            "movement": 0
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 110,
            "movement": -6
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 112,
            "movement": 35
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 133,
            "movement": 2
          },
          {
            "country": "JP",
            "name": "Japan",
            "position": 160,
            "movement": -3
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "PE",
            "name": "Peru",
            "position": 5,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 5,
            "movement": 4
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 5,
            "movement": 2
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 6,
            "movement": -1
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 9,
            "movement": 0
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 11,
            "movement": 18
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 14,
            "movement": -10
          },
          {
            "country": "FR",
            "name": "France",
            "position": 16,
            "movement": -5
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 18,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 21,
            "movement": -11
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 23,
            "movement": -14
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 24,
            "movement": -18
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 26,
            "movement": -5
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 31,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 32,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 32,
            "movement": -21
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 41,
            "movement": -32
          },
          {
            "country": "BN",
            "name": "Brunei Darussalam",
            "position": 44,
            "movement": -13
          },
          {
            "country": "US",
            "name": "United States",
            "position": 52,
            "movement": -12
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 54,
            "movement": -7
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 55,
            "movement": -29
          },
          {
            "country": "PA",
            "name": "Panama",
            "position": 55,
            "movement": -27
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 62,
            "movement": -58
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 63,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 63,
            "movement": -28
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 82,
            "movement": -31
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 93,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 108,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 150,
            "movement": -145
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
            "position": 24,
            "movement": 4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 41,
            "movement": 11
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 52,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 58,
            "movement": 17
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 77,
            "movement": 25
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 88,
            "movement": -24
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 95,
            "movement": -6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 107,
            "movement": -34
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 108,
            "movement": 7
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 118,
            "movement": 57
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 124,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 125,
            "movement": 11
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 142,
            "movement": 25
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 143,
            "movement": -69
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 143,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 147,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 150,
            "movement": -98
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 167,
            "movement": -54
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 171,
            "movement": 5
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 175,
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
            "country": "NA",
            "name": "Namibia",
            "position": 39,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 60,
            "movement": -1
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 65,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 65,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 122,
            "movement": 7
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
            "position": 32,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "album"
  },
  {
    "title": "Love, Damini",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "YE",
            "name": "Yemen",
            "position": 4,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 39,
            "movement": -14
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 41,
            "movement": -1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 47,
            "movement": -3
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 47,
            "movement": 4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 56,
            "movement": 5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 60,
            "movement": -20
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 84,
            "movement": 41
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 88,
            "movement": -7
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 95,
            "movement": 26
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 104,
            "movement": 20
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 107,
            "movement": -19
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 109,
            "movement": 16
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 111,
            "movement": -22
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 118,
            "movement": 43
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 127,
            "movement": -11
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 148,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 158,
            "movement": -4
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 185,
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
            "position": 55,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
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
            "position": 29,
            "movement": -1
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
            "position": 27,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 39,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 70,
            "movement": 1
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 74,
            "movement": -14
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 103,
            "movement": 57
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 107,
            "movement": 24
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 110,
            "movement": 4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 114,
            "movement": 6
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 115,
            "movement": 8
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 132,
            "movement": -28
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 139,
            "movement": 54
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 142,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 150,
            "movement": -26
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 156,
            "movement": 1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 159,
            "movement": 10
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 174,
            "movement": 7
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 190,
            "movement": -63
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
            "position": 152,
            "movement": 21
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
            "position": 23,
            "movement": -1
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
            "position": 80,
            "movement": 4
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
            "country": "NG",
            "name": "Nigeria",
            "position": 37,
            "movement": -2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 48,
            "movement": 19
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 52,
            "movement": 8
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 61,
            "movement": -17
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 87,
            "movement": -19
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 90,
            "movement": 7
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 95,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 97,
            "movement": 25
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 100,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 106,
            "movement": 58
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 115,
            "movement": 8
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 126,
            "movement": -3
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 154,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 174,
            "movement": 6
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
            "position": 22,
            "movement": -1
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 58,
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
            "position": 115,
            "movement": 8
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
            "position": 167,
            "movement": -22
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
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 25,
            "movement": 130
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 62,
            "movement": 22
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 62,
            "movement": -10
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 82,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 125,
            "movement": 57
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 126,
            "movement": 65
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 144,
            "movement": -16
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 148,
            "movement": 11
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 150,
            "movement": 33
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 152,
            "movement": 37
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 165,
            "movement": -43
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 167,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 172,
            "movement": -38
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 185,
            "movement": -41
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 195,
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
            "position": 130,
            "movement": -5
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 176,
            "movement": null,
            "status": "new"
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
            "position": 15,
            "movement": 0
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 27,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 28,
            "movement": 6
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 37,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 51,
            "movement": -7
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 52,
            "movement": -3
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 60,
            "movement": 116
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 78,
            "movement": 13
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 88,
            "movement": 15
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 93,
            "movement": -25
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 94,
            "movement": -25
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 116,
            "movement": 5
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 133,
            "movement": 61
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 133,
            "movement": 32
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 138,
            "movement": -38
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 153,
            "movement": 25
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
            "position": 30,
            "movement": -1
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
            "country": "KE",
            "name": "Kenya",
            "position": 23,
            "movement": -4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 26,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 30,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 36,
            "movement": -21
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 36,
            "movement": 18
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 47,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 53,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 58,
            "movement": -21
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 61,
            "movement": 8
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 62,
            "movement": 2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 71,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 100,
            "movement": -17
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 104,
            "movement": 17
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 132,
            "movement": 6
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 180,
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
            "position": 20,
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
            "position": 43,
            "movement": -1
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 53,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 57,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 58,
            "movement": 11
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 79,
            "movement": 67
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 81,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 106,
            "movement": 39
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 119,
            "movement": -2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 125,
            "movement": -11
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 140,
            "movement": -10
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 151,
            "movement": -98
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 176,
            "movement": -17
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
            "position": 33,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "album"
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
            "position": 10,
            "movement": -3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 14,
            "movement": -3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 15,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 19,
            "movement": 3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 28,
            "movement": -13
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 31,
            "movement": 15
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 40,
            "movement": -2
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 41,
            "movement": 60
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 54,
            "movement": -6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 62,
            "movement": 9
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 73,
            "movement": 4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 86,
            "movement": -56
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 93,
            "movement": 11
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 94,
            "movement": -2
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
            "position": 22,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 61,
            "movement": -7
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 69,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 84,
            "movement": 13
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 91,
            "movement": -40
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 119,
            "movement": 10
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 146,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 165,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 167,
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
            "position": 21,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 28,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 162,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 175,
            "movement": 6
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
            "position": 24,
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
            "country": "KE",
            "name": "Kenya",
            "position": 21,
            "movement": 11
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 24,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 30,
            "movement": -4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 34,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 55,
            "movement": -4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 64,
            "movement": 22
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 80,
            "movement": 28
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 93,
            "movement": -39
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 118,
            "movement": -28
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 122,
            "movement": -62
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 146,
            "movement": -5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 155,
            "movement": null,
            "status": "new"
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
            "country": "FJ",
            "name": "Fiji",
            "position": 114,
            "movement": -39
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 148,
            "movement": -53
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 189,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 191,
            "movement": -143
          },
          {
            "country": "OM",
            "name": "Oman",
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
            "country": "NE",
            "name": "Niger",
            "position": 31,
            "movement": 4
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 39,
            "movement": -4
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 54,
            "movement": 7
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 94,
            "movement": null,
            "status": "new"
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
            "position": 23,
            "movement": 0
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 24,
            "movement": -2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 32,
            "movement": 4
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 42,
            "movement": -4
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 44,
            "movement": 1
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 62,
            "movement": 15
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
            "movement": 22
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
            "position": 72,
            "movement": -5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 90,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 107,
            "movement": -15
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 122,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 184,
            "movement": -46
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 190,
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
            "country": "KE",
            "name": "Kenya",
            "position": 84,
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
            "position": 45,
            "movement": -19
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 49,
            "movement": 1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 65,
            "movement": -12
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 88,
            "movement": 2
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 132,
            "movement": 9
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 166,
            "movement": 1
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
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 41,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 147,
            "movement": -21
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
            "position": 128,
            "movement": 10
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
            "position": 164,
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
            "position": 31,
            "movement": -1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 55,
            "movement": -4
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 74,
            "movement": -2
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 92,
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
            "position": 48,
            "movement": 1
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 103,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 199,
            "movement": -27
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
            "position": 106,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "album"
  },
  {
    "title": "4 Kampé II",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "DM",
            "name": "Dominica",
            "position": 118,
            "movement": -8
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
            "movement": -1
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
            "position": 80,
            "movement": -4
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
            "position": 131,
            "movement": -23
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 172,
            "movement": 13
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 173,
            "movement": -30
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
            "position": 113,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
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
            "country": "GH",
            "name": "Ghana",
            "position": 162,
            "movement": -27
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
            "position": 83,
            "movement": 8
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
            "position": 191,
            "movement": 4
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "TaTaTa",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 91,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 151,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "On a Spaceship",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 167,
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
            "position": 152,
            "movement": 8
          }
        ]
      }
    ],
    "kind": "album"
  },
  {
    "title": "Laho II",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 4,
            "movement": 6
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Kabiyesi",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 96,
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 117,
            "movement": 29
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
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 123,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Heaven's Gate",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 96,
            "movement": 99
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
            "position": 185,
            "movement": 8
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
            "position": 69,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song"
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
            "position": 83,
            "movement": -25
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Whiskey",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 166,
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
            "country": "AO",
            "name": "Angola",
            "position": 174,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Toni-Ann Singh",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 176,
            "movement": 16
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
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 112,
            "movement": 80
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Jerusalema",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 54,
            "movement": null,
            "status": "new"
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
            "position": 135,
            "movement": 3
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
            "position": 63,
            "movement": -2
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
            "position": 95,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album"
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
            "position": 123,
            "movement": 7
          }
        ]
      }
    ],
    "kind": "album"
  },
  {
    "title": "Higher",
    "platforms": [],
    "kind": "song"
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
  