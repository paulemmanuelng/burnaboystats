// GENERATED FILE — do not edit by hand.
  // Rebuilt several times a day by scripts/build-live-charts.mjs --artist=rema from kworb's artist page.
  //
  // PLATFORM chart data for Rema: where each release is sitting RIGHT
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
  export const liveChartsUpdated = "2026-11-27";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-11-27T08:40Z";
  
  /** Every platform represented in the current snapshot. */
  export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","Spotify Albums","YouTube","iTunes"];
  
  export const liveCharts: LiveRelease[] = [
  {
    "title": "E-Mortal Boy",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 2,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 2,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 2,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 2,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 2,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 3,
            "movement": 1
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 4,
            "movement": 10
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 4,
            "movement": -1
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 5,
            "movement": 15
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 5,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 7,
            "movement": -5
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 8,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 9,
            "movement": 4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 9,
            "movement": -3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 10,
            "movement": -1
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 11,
            "movement": 8
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 15,
            "movement": 0
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 16,
            "movement": 9
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 16,
            "movement": 1
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 17,
            "movement": -3
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 19,
            "movement": -4
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 20,
            "movement": -6
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 21,
            "movement": -1
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 21,
            "movement": -6
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 24,
            "movement": 153
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 29,
            "movement": -3
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 31,
            "movement": -4
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 35,
            "movement": -16
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 35,
            "movement": -8
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 36,
            "movement": -2
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 37,
            "movement": -5
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 41,
            "movement": -2
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 44,
            "movement": -18
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 46,
            "movement": -3
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 46,
            "movement": 11
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 47,
            "movement": -6
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 48,
            "movement": -20
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 52,
            "movement": -24
          },
          {
            "country": "FR",
            "name": "France",
            "position": 54,
            "movement": -9
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 59,
            "movement": 4
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 60,
            "movement": -24
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 60,
            "movement": 42
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 62,
            "movement": 4
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 62,
            "movement": -9
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 65,
            "movement": -14
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 70,
            "movement": 26
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 73,
            "movement": -21
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 83,
            "movement": 10
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 85,
            "movement": -39
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 86,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 92,
            "movement": null,
            "status": "new"
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 92,
            "movement": -30
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 96,
            "movement": 67
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 98,
            "movement": -6
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 99,
            "movement": -30
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 111,
            "movement": -31
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 113,
            "movement": -13
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 119,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 129,
            "movement": -92
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 133,
            "movement": -59
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 136,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 145,
            "movement": 12
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 167,
            "movement": null,
            "status": "new"
          },
          {
            "country": "JO",
            "name": "Jordan",
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
            "country": "PT",
            "name": "Portugal",
            "position": 95,
            "movement": -61
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 101,
            "movement": -27
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-11-15",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4c0bef97144f51d9a3e1a188deadb4e8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Oh No",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 2,
            "movement": -1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 6,
            "movement": -2
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 6,
            "movement": 47
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 6,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 6,
            "movement": -3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 10,
            "movement": -6
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 13,
            "movement": 5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 13,
            "movement": -3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 14,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 25,
            "movement": -12
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 29,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 38,
            "movement": -3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 63,
            "movement": 2
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 71,
            "movement": -8
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 98,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 113,
            "movement": 49
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 117,
            "movement": -48
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 123,
            "movement": 40
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 142,
            "movement": -8
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 147,
            "movement": -5
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 180,
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
            "country": "UG",
            "name": "Uganda",
            "position": 11,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 12,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 35,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 52,
            "movement": -2
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 57,
            "movement": 1
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
            "position": 7,
            "movement": 2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 11,
            "movement": 17
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 20,
            "movement": 7
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
            "position": 7,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 42,
            "movement": -19
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
            "position": 7,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/fe3deba215d998d74542663a84621852/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Secondhand",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 8,
            "movement": 4
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 13,
            "movement": -8
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 30,
            "movement": -3
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 33,
            "movement": -7
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 40,
            "movement": 31
          },
          {
            "country": "BN",
            "name": "Brunei Darussalam",
            "position": 55,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 55,
            "movement": 69
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 85,
            "movement": 41
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 105,
            "movement": -16
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 115,
            "movement": 12
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 127,
            "movement": -2
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 128,
            "movement": -8
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 128,
            "movement": -4
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 133,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 182,
            "movement": 11
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
            "position": 20,
            "movement": 0
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 42,
            "movement": 4
          },
          {
            "country": "CN",
            "name": "China",
            "position": 133,
            "movement": 22
          },
          {
            "country": "VN",
            "name": "Vietnam",
            "position": 136,
            "movement": -12
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 145,
            "movement": -6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 155,
            "movement": -2
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 168,
            "movement": -4
          }
        ]
      },
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 134,
            "movement": -37
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 61,
            "movement": -37
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/123eb0268dfea84370a28c4a2114dc28/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Feel Alright",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 4,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 11,
            "movement": -2
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 12,
            "movement": 155
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 12,
            "movement": -5
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 14,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 32,
            "movement": -11
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 38,
            "movement": -12
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 39,
            "movement": -8
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 42,
            "movement": -5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 52,
            "movement": -15
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 62,
            "movement": -3
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 70,
            "movement": -8
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 73,
            "movement": -12
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 101,
            "movement": null,
            "status": "new"
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 135,
            "movement": -36
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 154,
            "movement": 4
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 156,
            "movement": 26
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
            "position": 4,
            "movement": -1
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
            "position": 197,
            "movement": -155
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
            "position": 8,
            "movement": 0
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
            "position": 29,
            "movement": -21
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-20",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4c0bef97144f51d9a3e1a188deadb4e8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "TANZANIA",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 6,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 20,
            "movement": 2
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
            "position": 28,
            "movement": -7
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 30,
            "movement": 2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 39,
            "movement": -21
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 50,
            "movement": 16
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 50,
            "movement": -17
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 87,
            "movement": -11
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 136,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 177,
            "movement": -7
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
            "position": 22,
            "movement": 8
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 38,
            "movement": 4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 47,
            "movement": 11
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 65,
            "movement": 13
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 124,
            "movement": 29
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 197,
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
            "position": 16,
            "movement": -3
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 92,
            "movement": -14
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
            "position": 45,
            "movement": -21
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-20",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4c0bef97144f51d9a3e1a188deadb4e8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "TEA",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 14,
            "movement": 16
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 19,
            "movement": -3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 24,
            "movement": 15
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 33,
            "movement": -13
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 42,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 44,
            "movement": -10
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 46,
            "movement": -4
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 82,
            "movement": 46
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 113,
            "movement": -27
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 119,
            "movement": 11
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 122,
            "movement": -74
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 168,
            "movement": -12
          }
        ]
      },
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 38,
            "movement": -7
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 46,
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
            "position": 21,
            "movement": -5
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
            "position": 11,
            "movement": 7
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
            "position": 36,
            "movement": -6
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6ad6ca24531d374241de87ca5e3211ca/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Velvet",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 17,
            "movement": -3
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 23,
            "movement": -3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 24,
            "movement": -8
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 48,
            "movement": 4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 48,
            "movement": 9
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 58,
            "movement": -53
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 65,
            "movement": -7
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 102,
            "movement": -4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 122,
            "movement": -20
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 131,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 142,
            "movement": -67
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 178,
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
            "position": 44,
            "movement": 17
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 190,
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
            "position": 9,
            "movement": -1
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 21,
            "movement": -12
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
            "movement": -12
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-20",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4c0bef97144f51d9a3e1a188deadb4e8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Rave & Roses",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 27,
            "movement": 11
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 39,
            "movement": 1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 48,
            "movement": 9
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 53,
            "movement": 9
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 79,
            "movement": 11
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 93,
            "movement": -12
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 100,
            "movement": -1
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 107,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 109,
            "movement": 51
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 122,
            "movement": 2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 126,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 133,
            "movement": 20
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 134,
            "movement": -78
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 174,
            "movement": -82
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 193,
            "movement": 7
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 197,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/1d4942d3e1817e9b723eceb6dae28636/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Rema Compilation",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 55,
            "movement": 25
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 76,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 82,
            "movement": -11
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 122,
            "movement": -23
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 129,
            "movement": 53
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 131,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 147,
            "movement": 0
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 159,
            "movement": 15
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 173,
            "movement": 5
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 179,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 194,
            "movement": -15
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
            "position": 60,
            "movement": 7
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/47d4b2f030cf6387a1f36dde2ce29e9b/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Calm Down",
    "platforms": [
      {
        "platform": "YouTube",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 73,
            "movement": 20
          },
          {
            "country": "PA",
            "name": "Panama",
            "position": 79,
            "movement": null,
            "status": "re"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 82,
            "movement": null,
            "status": "re"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 88,
            "movement": null,
            "status": "re"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 92,
            "movement": null,
            "status": "re"
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 19,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 142,
            "movement": -124
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 151,
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
            "country": "SZ",
            "name": "Eswatini",
            "position": 26,
            "movement": -5
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 27,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 48,
            "movement": -8
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/07d4291391724a969f243406cc92be66/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Soundgasm",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SR",
            "name": "Suriname",
            "position": 27,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 69,
            "movement": 16
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 76,
            "movement": 15
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 96,
            "movement": 18
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 100,
            "movement": -13
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 111,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 123,
            "movement": 5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 140,
            "movement": -4
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 172,
            "movement": 6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 183,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/813c9474be279f125aba17ccd6e2cea0/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Charm",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 60,
            "movement": -7
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 62,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 63,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 77,
            "movement": 57
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 111,
            "movement": 87
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 125,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 129,
            "movement": 2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 134,
            "movement": -1
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 176,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 190,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/1d4942d3e1817e9b723eceb6dae28636/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "HEIS",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 52,
            "movement": 29
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 60,
            "movement": 2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 110,
            "movement": -83
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 111,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 129,
            "movement": -7
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 133,
            "movement": 50
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 140,
            "movement": 4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 178,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 199,
            "movement": -12
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
            "position": 52,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4891a944de9418f059cabda0c7699160/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "SUGA",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 38,
            "movement": -8
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 58,
            "movement": 41
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 88,
            "movement": 4
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 151,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 153,
            "movement": -134
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 160,
            "movement": -12
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
            "position": 17,
            "movement": 0
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 20,
            "movement": -12
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
            "position": 37,
            "movement": 3
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-20",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4c0bef97144f51d9a3e1a188deadb4e8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Soweto",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 67,
            "movement": 76
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 69,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 110,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 117,
            "movement": 10
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 125,
            "movement": -57
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 131,
            "movement": 5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 131,
            "movement": -2
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 151,
            "movement": -42
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 157,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a21fb655cf3e2fc8b05db68fc6eb34b1/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Best",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SN",
            "name": "Senegal",
            "position": 16,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 19,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 31,
            "movement": -13
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 42,
            "movement": 17
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 50,
            "movement": 3
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 68,
            "movement": -23
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 70,
            "movement": -17
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 179,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/5e376f766f35708db51b9c3295fef2ce/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Who's Dat Girl",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 23,
            "movement": 79
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 58,
            "movement": -2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 77,
            "movement": -2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 81,
            "movement": 11
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 119,
            "movement": 26
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 164,
            "movement": -26
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 167,
            "movement": -56
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
            "position": 72,
            "movement": 5
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/fe3deba215d998d74542663a84621852/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Wine",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 55,
            "movement": 7
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 106,
            "movement": 22
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 176,
            "movement": 1
          }
        ]
      },
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 36,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 76,
            "movement": -9
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 104,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-30",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e43cc1d22a556fa87272c55c933bb4d7/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Ginger Me",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 84,
            "movement": 11
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 93,
            "movement": 51
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 143,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 144,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 176,
            "movement": -15
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/1232dc64734f222e05a866a61860169c/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Bounce",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "OM",
            "name": "Oman",
            "position": 81,
            "movement": 76
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 83,
            "movement": 36
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 88,
            "movement": 7
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 182,
            "movement": 7
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e26def467fccdcadca010b8c0f00fd0f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Beamer",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 67,
            "movement": -7
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 111,
            "movement": -15
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 124,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 143,
            "movement": 8
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3a0c90a8279dde44ce6b19d5d41875cd/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Woman",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 102,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 112,
            "movement": 17
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 149,
            "movement": 42
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 195,
            "movement": -30
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/47d4b2f030cf6387a1f36dde2ce29e9b/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Bang Bang",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 121,
            "movement": -23
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
            "position": 90,
            "movement": -9
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
            "position": 56,
            "movement": -9
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-20",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4c0bef97144f51d9a3e1a188deadb4e8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Baby",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 5,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 183,
            "movement": -155
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
            "position": 180,
            "movement": -22
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3208072ca7af2913cacf001dbb11bbec/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "FUN",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 41,
            "movement": 1
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
            "position": 152,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c8e5156cfb208f46ca97fd26072becce/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "DND",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 137,
            "movement": 34
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 185,
            "movement": 5
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-10",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9f343b559a9382c0d35ba0c9eca79159/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Fi Kan We Kan",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 133,
            "movement": -42
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
            "position": 92,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-04",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e4c2c39678f951dd57f09d2e98cd4062/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "RAVAGE - EP",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 145,
            "movement": -6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 195,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01"
  },
  {
    "title": "Dumebi",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 70,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-26",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e01c854fc22ac6a5c685a89bd686d36d/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Trouble Maker",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 169,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-26",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9f343b559a9382c0d35ba0c9eca79159/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Afro Jigga",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 142,
            "movement": 39
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-26",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ea7c00c6478e9ed0c141e739277c5f02/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Rave & Roses Ultra",
    "platforms": [
      {
        "platform": "Spotify Albums",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 16,
            "movement": 3
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/1d4942d3e1817e9b723eceb6dae28636/500x500-000000-80-0-0.jpg"
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
  