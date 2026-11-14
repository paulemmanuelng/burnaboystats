// GENERATED FILE — do not edit by hand.
  // Rebuilt several times a day by scripts/build-live-charts.mjs --artist=wizkid from kworb's artist page.
  //
  // PLATFORM chart data for Wizkid: where each release is sitting RIGHT
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
  export const liveChartsUpdated = "2026-11-14";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-11-14T18:09Z";
  
  /** Every platform represented in the current snapshot. */
  export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","Spotify Albums","YouTube","iTunes"];
  
  export const liveCharts: LiveRelease[] = [
  {
    "title": "One Dance",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 37,
            "movement": 1
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 65,
            "movement": 1
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 78,
            "movement": 7
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 92,
            "movement": 22
          },
          {
            "country": "US",
            "name": "United States",
            "position": 103,
            "movement": 11
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 108,
            "movement": 6
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 111,
            "movement": -19
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 112,
            "movement": 10
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 113,
            "movement": 5
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 124,
            "movement": -2
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 126,
            "movement": 34
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 140,
            "movement": 31
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 149,
            "movement": 19
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 152,
            "movement": 22
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 162,
            "movement": 25
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 165,
            "movement": 12
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 170,
            "movement": 30
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 185,
            "movement": 0
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MS",
            "name": "Montserrat",
            "position": 40,
            "movement": 0
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 53,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 57,
            "movement": 54
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 67,
            "movement": 1
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 86,
            "movement": 6
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 87,
            "movement": -6
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 97,
            "movement": 4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 118,
            "movement": -13
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 152,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 165,
            "movement": -75
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 169,
            "movement": -3
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 175,
            "movement": -91
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 177,
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
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 26,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/56bdb7a86a27fadb96332c0c8f1b8e81/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "MONEY CONSTANT",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 4,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 6,
            "movement": -1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 9,
            "movement": -3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 12,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 17,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 26,
            "movement": -4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 32,
            "movement": -3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 41,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 59,
            "movement": -11
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 61,
            "movement": -15
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 61,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 70,
            "movement": -16
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 82,
            "movement": -28
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 109,
            "movement": -62
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 135,
            "movement": -45
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 161,
            "movement": -3
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 162,
            "movement": -15
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 167,
            "movement": -24
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 190,
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
            "country": "GH",
            "name": "Ghana",
            "position": 87,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 95,
            "movement": -10
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 110,
            "movement": 4
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 113,
            "movement": -5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 121,
            "movement": 31
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 180,
            "movement": -11
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
            "position": 46,
            "movement": -4
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
            "position": 109,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/5b290018c14b243dc3cd77ef4166ee0f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Joro",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 7,
            "movement": -1
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 8,
            "movement": -4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 15,
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 29,
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 38,
            "movement": 33
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 45,
            "movement": 12
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 49,
            "movement": 6
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 57,
            "movement": 6
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 74,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 79,
            "movement": -12
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 80,
            "movement": 65
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 85,
            "movement": -29
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 97,
            "movement": -6
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 105,
            "movement": -19
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 112,
            "movement": 28
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 116,
            "movement": 73
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 118,
            "movement": -57
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 149,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 165,
            "movement": 30
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 178,
            "movement": -26
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 200,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b1eb19b96a5e2985053b8bef3138498f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Made In Lagos: Deluxe Edition",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 19,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 31,
            "movement": 58
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 33,
            "movement": 7
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 38,
            "movement": 3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 39,
            "movement": 10
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 41,
            "movement": -16
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 41,
            "movement": -9
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 71,
            "movement": -6
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 83,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 87,
            "movement": 4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 95,
            "movement": 84
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 105,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 144,
            "movement": -35
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 149,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 158,
            "movement": -6
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 161,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 180,
            "movement": -36
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 181,
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
            "position": 18,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ad33274548de3455303618bb650b6d86/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Jogodo",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 8,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 13,
            "movement": -10
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 17,
            "movement": -6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 19,
            "movement": 16
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 27,
            "movement": -6
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 44,
            "movement": -16
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 44,
            "movement": -6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 63,
            "movement": -3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 70,
            "movement": -4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 74,
            "movement": 1
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 75,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 81,
            "movement": -17
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 105,
            "movement": -27
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 110,
            "movement": -57
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 144,
            "movement": -65
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 188,
            "movement": -89
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
            "position": 43,
            "movement": 2
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
            "position": 19,
            "movement": 33
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4c216574fd4d381c73a4df2f512f599/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Ayo",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 60,
            "movement": 65
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 66,
            "movement": -6
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 75,
            "movement": 43
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 114,
            "movement": 6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 150,
            "movement": -7
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 159,
            "movement": -37
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 173,
            "movement": -62
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 178,
            "movement": -11
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 179,
            "movement": -69
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 188,
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
            "position": 18,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 35,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 49,
            "movement": -3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 60,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 71,
            "movement": 3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 90,
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
            "position": 50,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9be0538ebbb9c6fd3dcb74844e7e2e2a/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Come Closer",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 4,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 10,
            "movement": 14
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 10,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 21,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 36,
            "movement": -16
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 40,
            "movement": -5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 43,
            "movement": -2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 64,
            "movement": -45
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 64,
            "movement": -12
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 79,
            "movement": -6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 88,
            "movement": -16
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 92,
            "movement": -20
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 96,
            "movement": 35
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 118,
            "movement": -9
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 119,
            "movement": -27
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 177,
            "movement": 3
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/18e2a836169d9104959e633694424136/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Ojuelegba",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 33,
            "movement": -4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 95,
            "movement": -14
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 130,
            "movement": 0
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 168,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 179,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 180,
            "movement": -65
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 189,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 200,
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
            "position": 148,
            "movement": -23
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 178,
            "movement": -5
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
            "movement": -15
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
            "position": 95,
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
            "position": 72,
            "movement": null,
            "status": "re"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9be0538ebbb9c6fd3dcb74844e7e2e2a/500x500-000000-80-0-0.jpg"
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
            "position": 17,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 25,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 29,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 43,
            "movement": 19
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 46,
            "movement": 17
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 68,
            "movement": -3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 98,
            "movement": -4
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 107,
            "movement": -35
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 114,
            "movement": -6
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 129,
            "movement": -13
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 152,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 152,
            "movement": 18
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ee712ec0084d50159ae6564de833ce12/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "REAL, Vol. 1",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 43,
            "movement": -6
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 57,
            "movement": -31
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 64,
            "movement": -14
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 77,
            "movement": -6
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 97,
            "movement": 56
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 102,
            "movement": -3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 104,
            "movement": -4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 116,
            "movement": -23
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 123,
            "movement": -17
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 142,
            "movement": -10
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 143,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 149,
            "movement": -27
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-11-06",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4c216574fd4d381c73a4df2f512f599/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Morayo",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 18,
            "movement": -4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 28,
            "movement": 25
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 46,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 50,
            "movement": -25
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 58,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 95,
            "movement": 45
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 112,
            "movement": -18
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 131,
            "movement": -9
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 173,
            "movement": -31
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 182,
            "movement": 11
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
            "movement": 3
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2538836fe7ba780c5a3a4c04aef4fac5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "MMS",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 41,
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 49,
            "movement": 4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 102,
            "movement": -15
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 105,
            "movement": -11
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 113,
            "movement": -33
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 117,
            "movement": 2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 147,
            "movement": -15
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 175,
            "movement": -35
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
            "position": 96,
            "movement": 4
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
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b36905d4dcb4eb744bb219d311a52e5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Sounds From The Other Side",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 51,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 61,
            "movement": -4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 106,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 107,
            "movement": 30
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 109,
            "movement": -13
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 144,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 195,
            "movement": -78
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
            "position": 125,
            "movement": 5
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a8dc47ce1fd807b1814e8171a91c1fc9/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Final",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 24,
            "movement": -2
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 37,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 81,
            "movement": -4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 89,
            "movement": -9
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 200,
            "movement": -9
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
            "position": 22,
            "movement": 32
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 78,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3cda4cca35e5a322d6ad9e71c49dbecf/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Turbulence",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 20,
            "movement": 17
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 76,
            "movement": 114
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 93,
            "movement": -9
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 164,
            "movement": -79
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 184,
            "movement": -17
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
            "position": 101,
            "movement": 2
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4c216574fd4d381c73a4df2f512f599/500x500-000000-80-0-0.jpg"
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
            "position": 59,
            "movement": -10
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 69,
            "movement": -15
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 70,
            "movement": 12
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 74,
            "movement": -10
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 171,
            "movement": -19
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BW",
            "name": "Botswana",
            "position": 83,
            "movement": -18
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f830d11dfb6ee3025b93e60a0e15f075/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Superstar",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 37,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 46,
            "movement": -6
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 153,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 161,
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
            "position": 75,
            "movement": -5
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
            "position": 125,
            "movement": 2
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/73/bd/59/73bd5950-72b7-8758-e91f-b2a16d558c57/0.jpg/300x300bb.jpg"
  },
  {
    "title": "More Love, Less Ego",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 33,
            "movement": -8
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 105,
            "movement": 20
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 107,
            "movement": 19
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 159,
            "movement": -11
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 195,
            "movement": -78
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
            "movement": 3
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e4286ac8a38829b6cf5d225c311bccf7/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Jam",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 132,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 135,
            "movement": -13
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 160,
            "movement": -59
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 195,
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
            "country": "ZM",
            "name": "Zambia",
            "position": 184,
            "movement": -7
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/09422f55197ec57417a5742ce5801f13/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "PAMI",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 75,
            "movement": 4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 111,
            "movement": 7
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 145,
            "movement": 9
          },
          {
            "country": "KE",
            "name": "Kenya",
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
            "country": "BF",
            "name": "Burkina Faso",
            "position": 61,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-29",
    "cover": "https://cdn-images.dzcdn.net/images/cover/022426a926bc2f38da080d86e690b6be/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Made In Lagos",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 43,
            "movement": 0
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 84,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 84,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 97,
            "movement": -2
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
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ee712ec0084d50159ae6564de833ce12/500x500-000000-80-0-0.jpg"
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
            "position": 8,
            "movement": 0
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 28,
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
            "position": 200,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ee712ec0084d50159ae6564de833ce12/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "One Condition",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 177,
            "movement": -11
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
            "position": 133,
            "movement": -35
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
            "position": 122,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e53dccb976a98d09db9a195ce84162f2/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Daddy Yo",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 88,
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
            "position": 91,
            "movement": 7
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-24",
    "cover": "https://cdn-images.dzcdn.net/images/cover/bdda644ec4fca3d3c10425b7091fa74d/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Lagos to Kampala",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 87,
            "movement": 1
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
            "position": 39,
            "movement": -5
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/8f2d40ca3352120f01ae569e541c6e84/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Bad Girl",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 75,
            "movement": -44
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 112,
            "movement": -95
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-12",
    "cover": "https://cdn-images.dzcdn.net/images/cover/abc1e9a3c70d9ee2784cdefc48a3ae3b/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Tonight",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 155,
            "movement": 13
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
            "position": 110,
            "movement": 6
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/67996ba3c56f059ae5a870268c66b39f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Bend",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 1,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 1,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-13",
    "cover": "https://cdn-images.dzcdn.net/images/cover/abc1e9a3c70d9ee2784cdefc48a3ae3b/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Fever",
    "platforms": [
      {
        "platform": "YouTube",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 50,
            "movement": -21
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-24",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f4b6e3fe68fe1e1f8bcc5749bddf2955/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Show You the Money",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SN",
            "name": "Senegal",
            "position": 39,
            "movement": -8
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-18",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9be0538ebbb9c6fd3dcb74844e7e2e2a/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "BROWN SKIN GIRL",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 34,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-27",
    "cover": "https://cdn-images.dzcdn.net/images/cover/5e6885c10ca9b754020bd97ae4df040a/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Slow",
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
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2538836fe7ba780c5a3a4c04aef4fac5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Drogba",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 6,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-14",
    "cover": "https://cdn-images.dzcdn.net/images/cover/44d339bd3533e9e28f2e9b298cb9cd9c/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Après Minuit",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 52,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-14",
    "cover": "https://cdn-images.dzcdn.net/images/cover/abc1e9a3c70d9ee2784cdefc48a3ae3b/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Time",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 124,
            "movement": -8
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2538836fe7ba780c5a3a4c04aef4fac5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Stay For The Night",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 137,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-13",
    "cover": "https://cdn-images.dzcdn.net/images/cover/27ab85a0fa9ffa1c5a337c8e8ce43194/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "BIG TIME",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 160,
            "movement": -19
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/0af8d1b7ecebd4fec1dbb6c048f2105f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Kese",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 83,
            "movement": -18
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-09",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b83e12a893bcd9bca6f6e84283dbedaa/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Gimme Dat",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 166,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-13",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2e52f4bf8bdb05c98002b714669ee2c2/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Soco",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 153,
            "movement": 10
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-06",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ee712ec0084d50159ae6564de833ce12/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Holla at Your Boy",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 184,
            "movement": 8
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-13",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ee712ec0084d50159ae6564de833ce12/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Girl",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 187,
            "movement": -4
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-13",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ee712ec0084d50159ae6564de833ce12/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "U Don't Know",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
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
    "firstSeen": "2026-11-14",
    "cover": "https://cdn-images.dzcdn.net/images/cover/cbd8af17625915ac863ee340498d5d9f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "S2 - EP",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 198,
            "movement": -26
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-10-21",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b1eb19b96a5e2985053b8bef3138498f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "SoundMan, Vol. 1",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 143,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b6c9342dc0ab40a9e837ebb16a8b24dd/500x500-000000-80-0-0.jpg"
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
  