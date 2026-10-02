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
  export const liveChartsUpdated = "2026-10-02";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-10-02T05:42Z";
  
  /** Every platform represented in the current snapshot. */
  export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","Spotify Albums","YouTube","iTunes"];
  
  export const liveCharts: LiveRelease[] = [
  {
    "title": "Dai Dai",
    "platforms": [
      {
        "platform": "YouTube",
        "numberOnes": 18,
        "entries": [
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
            "country": "DK",
            "name": "Denmark",
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
            "country": "KE",
            "name": "Kenya",
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
            "country": "NO",
            "name": "Norway",
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
            "country": "UK",
            "name": "United Kingdom",
            "position": 1,
            "movement": 0
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 2,
            "movement": -1
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 2,
            "movement": 0
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 2,
            "movement": 0
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 2,
            "movement": 0
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 2,
            "movement": 0
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 2,
            "movement": 0
          },
          {
            "country": "PA",
            "name": "Panama",
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
            "country": "SI",
            "name": "Slovenia",
            "position": 2,
            "movement": 0
          },
          {
            "country": "US",
            "name": "United States",
            "position": 2,
            "movement": 0
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 3,
            "movement": -1
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 3,
            "movement": -2
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 3,
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 3,
            "movement": -1
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 3,
            "movement": 1
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 3,
            "movement": 0
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 4,
            "movement": -3
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 4,
            "movement": 0
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 5,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 5,
            "movement": -3
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 5,
            "movement": -1
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 5,
            "movement": 0
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 5,
            "movement": -2
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 6,
            "movement": 0
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 6,
            "movement": -2
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 6,
            "movement": -1
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 6,
            "movement": -2
          },
          {
            "country": "EC",
            "name": "Ecuador",
            "position": 6,
            "movement": -3
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 6,
            "movement": -2
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 6,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 6,
            "movement": -2
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 7,
            "movement": -3
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 7,
            "movement": -1
          },
          {
            "country": "GE",
            "name": "Georgia",
            "position": 7,
            "movement": 1
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 7,
            "movement": -1
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 8,
            "movement": -4
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 8,
            "movement": -2
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 8,
            "movement": -3
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 8,
            "movement": 10
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 8,
            "movement": -2
          },
          {
            "country": "VE",
            "name": "Venezuela",
            "position": 8,
            "movement": -2
          },
          {
            "country": "NI",
            "name": "Nicaragua",
            "position": 9,
            "movement": -4
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 9,
            "movement": -2
          },
          {
            "country": "RS",
            "name": "Serbia",
            "position": 9,
            "movement": -3
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 10,
            "movement": -2
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 10,
            "movement": -2
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 10,
            "movement": -3
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 10,
            "movement": -1
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 11,
            "movement": -3
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 11,
            "movement": -2
          },
          {
            "country": "BO",
            "name": "Bolivia",
            "position": 12,
            "movement": -1
          },
          {
            "country": "SV",
            "name": "El Salvador",
            "position": 12,
            "movement": -4
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 12,
            "movement": -1
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 12,
            "movement": -1
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 12,
            "movement": -1
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 12,
            "movement": -4
          },
          {
            "country": "MK",
            "name": "North Macedonia",
            "position": 12,
            "movement": -6
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 12,
            "movement": -4
          },
          {
            "country": "CD",
            "name": "Dem. Rep. of the Congo",
            "position": 13,
            "movement": -6
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 13,
            "movement": -3
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 13,
            "movement": -7
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 14,
            "movement": -1
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 14,
            "movement": -2
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 15,
            "movement": -1
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 15,
            "movement": -5
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 15,
            "movement": -6
          },
          {
            "country": "RE",
            "name": "Réunion",
            "position": 15,
            "movement": -9
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 16,
            "movement": -1
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 16,
            "movement": -2
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 16,
            "movement": -5
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 16,
            "movement": -6
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 17,
            "movement": -10
          },
          {
            "country": "HN",
            "name": "Honduras",
            "position": 18,
            "movement": -9
          },
          {
            "country": "AL",
            "name": "Albania",
            "position": 19,
            "movement": null,
            "status": "re"
          },
          {
            "country": "BD",
            "name": "Bangladesh",
            "position": 19,
            "movement": -6
          },
          {
            "country": "ET",
            "name": "Ethiopia",
            "position": 19,
            "movement": -8
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 22,
            "movement": -12
          },
          {
            "country": "DO",
            "name": "Dominican Republic",
            "position": 26,
            "movement": -9
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 30,
            "movement": -4
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 30,
            "movement": -10
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 67,
            "movement": -7
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 2,
            "movement": 1
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 4,
            "movement": 3
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 5,
            "movement": 3
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 5,
            "movement": 0
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 6,
            "movement": 1
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 7,
            "movement": 0
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 10,
            "movement": 2
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 11,
            "movement": 0
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 12,
            "movement": 1
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 13,
            "movement": -1
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 14,
            "movement": -1
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 15,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 15,
            "movement": -1
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 16,
            "movement": 0
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 16,
            "movement": 1
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 17,
            "movement": 0
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 19,
            "movement": -2
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 20,
            "movement": -1
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 20,
            "movement": 0
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 21,
            "movement": 1
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 23,
            "movement": 8
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 25,
            "movement": -7
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 26,
            "movement": -1
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 29,
            "movement": 8
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 32,
            "movement": 32
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 36,
            "movement": -18
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 45,
            "movement": 0
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 45,
            "movement": -26
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 46,
            "movement": -3
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 46,
            "movement": -1
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 46,
            "movement": 22
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 47,
            "movement": 0
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 51,
            "movement": 7
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 53,
            "movement": 36
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 53,
            "movement": -18
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 55,
            "movement": 4
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 61,
            "movement": -20
          },
          {
            "country": "FR",
            "name": "France",
            "position": 65,
            "movement": -7
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 71,
            "movement": -4
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 78,
            "movement": 13
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 79,
            "movement": 4
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 81,
            "movement": -28
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 83,
            "movement": -8
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 93,
            "movement": 2
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 98,
            "movement": 5
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 107,
            "movement": -26
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 108,
            "movement": 54
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 122,
            "movement": 19
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 126,
            "movement": -40
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 131,
            "movement": 2
          },
          {
            "country": "MK",
            "name": "North Macedonia",
            "position": 132,
            "movement": 42
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 138,
            "movement": 11
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 157,
            "movement": -11
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 160,
            "movement": -51
          },
          {
            "country": "BT",
            "name": "Bhutan",
            "position": 181,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 188,
            "movement": -27
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 195,
            "movement": -66
          },
          {
            "country": "RS",
            "name": "Serbia",
            "position": 197,
            "movement": null,
            "status": "new"
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 1,
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
            "position": 2,
            "movement": 0
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 3,
            "movement": 9
          },
          {
            "country": "FR",
            "name": "France",
            "position": 4,
            "movement": 2
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 4,
            "movement": 0
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 4,
            "movement": 1
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 8,
            "movement": -4
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 9,
            "movement": 1
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 10,
            "movement": 4
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 10,
            "movement": -1
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 12,
            "movement": 3
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 13,
            "movement": -1
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 13,
            "movement": 1
          },
          {
            "country": "SV",
            "name": "El Salvador",
            "position": 13,
            "movement": 15
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 13,
            "movement": 0
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 13,
            "movement": 0
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 14,
            "movement": 8
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 14,
            "movement": 0
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 14,
            "movement": 7
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 15,
            "movement": 11
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 16,
            "movement": 5
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 18,
            "movement": 1
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 19,
            "movement": 22
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 20,
            "movement": 67
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 22,
            "movement": -2
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 26,
            "movement": 2
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 29,
            "movement": -10
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 33,
            "movement": -12
          },
          {
            "country": "BO",
            "name": "Bolivia",
            "position": 36,
            "movement": 49
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 36,
            "movement": -7
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 38,
            "movement": -24
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 47,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 49,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 55,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 56,
            "movement": -12
          },
          {
            "country": "VE",
            "name": "Venezuela",
            "position": 60,
            "movement": null,
            "status": "new"
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 67,
            "movement": -34
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 71,
            "movement": 11
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 99,
            "movement": -21
          }
        ]
      },
      {
        "platform": "Spotify",
        "numberOnes": 1,
        "entries": [
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 1,
            "movement": 1
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 2,
            "movement": 1
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 4,
            "movement": 0
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 5,
            "movement": 1
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 5,
            "movement": -1
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 7,
            "movement": 0
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 11,
            "movement": 0
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 13,
            "movement": 2
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 13,
            "movement": 0
          },
          {
            "country": "FR",
            "name": "France",
            "position": 15,
            "movement": 6
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 15,
            "movement": 8
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 28,
            "movement": 0
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 28,
            "movement": 3
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 28,
            "movement": 3
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 30,
            "movement": 0
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 36,
            "movement": 9
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 38,
            "movement": 0
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 42,
            "movement": 8
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 51,
            "movement": -2
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 53,
            "movement": 6
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 55,
            "movement": 5
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 57,
            "movement": 12
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 57,
            "movement": -3
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 60,
            "movement": 2
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 61,
            "movement": -7
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 69,
            "movement": 13
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 75,
            "movement": 1
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 84,
            "movement": 15
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 87,
            "movement": 17
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 98,
            "movement": -29
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 138,
            "movement": 4
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 144,
            "movement": 2
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 155,
            "movement": 0
          },
          {
            "country": "PA",
            "name": "Panama",
            "position": 155,
            "movement": -20
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 158,
            "movement": 2
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 195,
            "movement": 3
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
            "position": 14,
            "movement": -2
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 17,
            "movement": 1
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 21,
            "movement": -1
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 22,
            "movement": 2
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 30,
            "movement": -2
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 32,
            "movement": 8
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 32,
            "movement": 1
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 33,
            "movement": 1
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 35,
            "movement": 1
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 37,
            "movement": -2
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 37,
            "movement": -3
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 38,
            "movement": -1
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 39,
            "movement": 0
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 40,
            "movement": -6
          },
          {
            "country": "RU",
            "name": "Russia",
            "position": 42,
            "movement": 4
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 45,
            "movement": -6
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 47,
            "movement": -5
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 50,
            "movement": -2
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 60,
            "movement": 2
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 62,
            "movement": 1
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 63,
            "movement": 1
          },
          {
            "country": "FR",
            "name": "France",
            "position": 65,
            "movement": -1
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 65,
            "movement": -4
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 65,
            "movement": -4
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 73,
            "movement": -1
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 86,
            "movement": 6
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 99,
            "movement": -2
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 109,
            "movement": -6
          },
          {
            "country": "US",
            "name": "United States",
            "position": 116,
            "movement": -3
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 121,
            "movement": -6
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 135,
            "movement": -4
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 180,
            "movement": 2
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 189,
            "movement": 1
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 2,
            "movement": 5
          },
          {
            "country": "FR",
            "name": "France",
            "position": 3,
            "movement": 2
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 7,
            "movement": 0
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 7,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 10,
            "movement": 4
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 10,
            "movement": 4
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 16,
            "movement": -1
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 16,
            "movement": 30
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 23,
            "movement": 6
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 23,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 26,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 27,
            "movement": -23
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 32,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 36,
            "movement": -27
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 43,
            "movement": -23
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 64,
            "movement": -11
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 75,
            "movement": null,
            "status": "new"
          },
          {
            "country": "US",
            "name": "United States",
            "position": 82,
            "movement": 46
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 84,
            "movement": -33
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 94,
            "movement": -43
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 116,
            "movement": -62
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 138,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 154,
            "movement": -73
          },
          {
            "country": "MY",
            "name": "Malaysia",
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
    "title": "African Giant",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 26,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 50,
            "movement": 14
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 51,
            "movement": -35
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 59,
            "movement": 11
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 71,
            "movement": -22
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 78,
            "movement": -28
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 80,
            "movement": 15
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 81,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 91,
            "movement": -1
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 100,
            "movement": 78
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 110,
            "movement": -2
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 146,
            "movement": -28
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 149,
            "movement": 19
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 167,
            "movement": -81
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 189,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 191,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 199,
            "movement": -29
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
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
            "country": "NA",
            "name": "Namibia",
            "position": 41,
            "movement": 2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 63,
            "movement": 2
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 65,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 67,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 171,
            "movement": 0
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
            "movement": 0
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
            "country": "BF",
            "name": "Burkina Faso",
            "position": 25,
            "movement": 7
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 37,
            "movement": 89
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 41,
            "movement": 0
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 45,
            "movement": 32
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 46,
            "movement": -5
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 55,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 64,
            "movement": -3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 70,
            "movement": 79
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 77,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 77,
            "movement": 5
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 84,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 85,
            "movement": -35
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 101,
            "movement": 91
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 105,
            "movement": 22
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 112,
            "movement": -8
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 121,
            "movement": -65
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 127,
            "movement": 17
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 144,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 165,
            "movement": -1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 172,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 174,
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
            "position": 26,
            "movement": 3
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
    "title": "wgft",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 53,
            "movement": 37
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 60,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 70,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 77,
            "movement": -10
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 79,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 87,
            "movement": 107
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 90,
            "movement": -12
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 112,
            "movement": 15
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 128,
            "movement": -56
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 143,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 148,
            "movement": 9
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 151,
            "movement": -4
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 153,
            "movement": -38
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 168,
            "movement": -10
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 173,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 173,
            "movement": -67
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 174,
            "movement": 0
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 180,
            "movement": -43
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 188,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 189,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 196,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
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
            "country": "NG",
            "name": "Nigeria",
            "position": 154,
            "movement": -14
          }
        ]
      }
    ],
    "kind": "song"
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
            "position": 22,
            "movement": -4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 33,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 49,
            "movement": 5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 65,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 83,
            "movement": 73
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 87,
            "movement": 41
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 106,
            "movement": 28
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 119,
            "movement": 15
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 125,
            "movement": 62
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 131,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 132,
            "movement": 25
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 140,
            "movement": 47
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 142,
            "movement": 17
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 152,
            "movement": -16
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 169,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 179,
            "movement": -22
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 188,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 190,
            "movement": 10
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
            "position": 17,
            "movement": -11
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 45,
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
            "position": 174,
            "movement": 12
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
            "position": 186,
            "movement": -27
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
            "country": "LR",
            "name": "Liberia",
            "position": 38,
            "movement": 13
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 43,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 46,
            "movement": -1
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 70,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 80,
            "movement": 11
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 95,
            "movement": -6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 96,
            "movement": -32
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 99,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 105,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 116,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 117,
            "movement": -8
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 122,
            "movement": -31
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 159,
            "movement": -10
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 167,
            "movement": -41
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 167,
            "movement": -44
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 174,
            "movement": 20
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 182,
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
            "position": 120,
            "movement": 5
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
            "position": 16,
            "movement": -11
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
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 24,
            "movement": 21
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 31,
            "movement": 2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 39,
            "movement": -3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 60,
            "movement": -36
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 63,
            "movement": 36
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 72,
            "movement": -28
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 72,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 94,
            "movement": 4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 113,
            "movement": 3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 147,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 152,
            "movement": -39
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 173,
            "movement": -12
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 178,
            "movement": -118
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 183,
            "movement": -138
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
            "movement": 0
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
            "country": "BF",
            "name": "Burkina Faso",
            "position": 16,
            "movement": -10
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 22,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 27,
            "movement": 53
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 57,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 64,
            "movement": -52
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 66,
            "movement": 1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 82,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 109,
            "movement": 81
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 110,
            "movement": -43
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 165,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 171,
            "movement": 23
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 186,
            "movement": -68
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
            "position": 31,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 161,
            "movement": 3
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
            "position": 22,
            "movement": 2
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
            "position": 5,
            "movement": 5
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 8,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 16,
            "movement": 3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 19,
            "movement": 31
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 19,
            "movement": -3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 29,
            "movement": 2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 40,
            "movement": 9
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 45,
            "movement": -2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 45,
            "movement": 6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 68,
            "movement": 19
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 69,
            "movement": -3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 80,
            "movement": 28
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 96,
            "movement": -12
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 100,
            "movement": 7
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 193,
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 35,
            "movement": -1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 39,
            "movement": -28
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 41,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 77,
            "movement": 42
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 81,
            "movement": 13
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 82,
            "movement": 15
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 92,
            "movement": 102
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 92,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 99,
            "movement": 66
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 146,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 175,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 196,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 198,
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
            "position": 31,
            "movement": 2
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
            "country": "LR",
            "name": "Liberia",
            "position": 10,
            "movement": 2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 13,
            "movement": 12
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 17,
            "movement": 7
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 27,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 30,
            "movement": 3
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 41,
            "movement": -4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 49,
            "movement": -7
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 60,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 96,
            "movement": -2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 102,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 106,
            "movement": 46
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 128,
            "movement": 22
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 132,
            "movement": -49
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 135,
            "movement": null,
            "status": "new"
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
            "position": 14,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 26,
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 33,
            "movement": 5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 36,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 56,
            "movement": -2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 61,
            "movement": 40
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 79,
            "movement": 67
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 84,
            "movement": 2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 121,
            "movement": 22
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 131,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 149,
            "movement": 41
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
            "position": 42,
            "movement": 100
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 59,
            "movement": -4
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 71,
            "movement": null,
            "status": "new"
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 136,
            "movement": -27
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 173,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 186,
            "movement": 7
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 198,
            "movement": -44
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
            "position": 22,
            "movement": 2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 30,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 88,
            "movement": -15
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
            "country": "GH",
            "name": "Ghana",
            "position": 4,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 17,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 25,
            "movement": 2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 31,
            "movement": 0
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 38,
            "movement": -11
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 54,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 65,
            "movement": -1
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
            "movement": 9
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 45,
            "movement": 27
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
            "position": 43,
            "movement": -2
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 52,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 85,
            "movement": -6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 87,
            "movement": 15
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 138,
            "movement": 34
          },
          {
            "country": "LR",
            "name": "Liberia",
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
    "title": "Sponono",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 56,
            "movement": -22
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 67,
            "movement": 2
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 78,
            "movement": -15
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 104,
            "movement": -18
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 112,
            "movement": 13
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 158,
            "movement": -30
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
            "position": 55,
            "movement": -3
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 76,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 190,
            "movement": -34
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
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
            "position": 88,
            "movement": 18
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 51,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 183,
            "movement": -6
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
            "position": 81,
            "movement": -5
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
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 139,
            "movement": 9
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 157,
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
            "country": "NG",
            "name": "Nigeria",
            "position": 75,
            "movement": 4
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
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 191,
            "movement": -31
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
            "position": 41,
            "movement": -10
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
            "position": 102,
            "movement": -6
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Be Honest",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 9,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
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
    "title": "For My Hand",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 38,
            "movement": 2
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 53,
            "movement": 10
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
            "position": 107,
            "movement": -4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 165,
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
            "country": "UG",
            "name": "Uganda",
            "position": 139,
            "movement": 55
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 142,
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
            "position": 69,
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
            "position": 134,
            "movement": -17
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
            "movement": -27
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
    "title": "Jagele",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 36,
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
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 50,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Dey Play",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 91,
            "movement": -15
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
            "position": 48,
            "movement": null,
            "status": "new"
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
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 37,
            "movement": -14
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
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 38,
            "movement": -14
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 137,
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
            "position": 66,
            "movement": 0
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
            "position": 157,
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
            "country": "TD",
            "name": "Chad",
            "position": 159,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Boshe Nlo",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 103,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Cheat On Me",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 190,
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
            "position": 149,
            "movement": -48
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Only You",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "VG",
            "name": "British Virgin Islands",
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
    "title": "Special Someone",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 143,
            "movement": -8
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
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 114,
            "movement": -44
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
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 194,
            "movement": -1
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
            "position": 146,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album"
  },
  {
    "title": "Redemption",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 172,
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
            "position": 172,
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
  