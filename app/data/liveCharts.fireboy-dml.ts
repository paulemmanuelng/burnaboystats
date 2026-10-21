// GENERATED FILE — do not edit by hand.
  // Rebuilt several times a day by scripts/build-live-charts.mjs --artist=fireboy-dml from kworb's artist page.
  //
  // PLATFORM chart data for Fireboy DML: where each release is sitting RIGHT
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
  export const liveChartsUpdated = "2026-10-21";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-10-21T04:53Z";
  
  /** Every platform represented in the current snapshot. */
  export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","Spotify Albums","iTunes"];
  
  export const liveCharts: LiveRelease[] = [
  {
    "title": "ZUKO",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 1,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 1,
            "movement": 0
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 2,
            "movement": 3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 2,
            "movement": 1
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 2,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 3,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 3,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 5,
            "movement": 14
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 5,
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 5,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 6,
            "movement": -3
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 11,
            "movement": -3
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 12,
            "movement": -4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 14,
            "movement": -2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 36,
            "movement": 3
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 41,
            "movement": 42
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 42,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 44,
            "movement": -22
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 52,
            "movement": -9
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 53,
            "movement": 9
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 53,
            "movement": -10
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 54,
            "movement": 0
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 55,
            "movement": -27
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 58,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 61,
            "movement": 55
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 62,
            "movement": -11
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 63,
            "movement": 45
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 73,
            "movement": 13
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 73,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 76,
            "movement": -29
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 79,
            "movement": 67
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 83,
            "movement": -26
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 101,
            "movement": 0
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 121,
            "movement": -13
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 124,
            "movement": -22
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 139,
            "movement": null,
            "status": "new"
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 152,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 157,
            "movement": -48
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 158,
            "movement": -75
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 159,
            "movement": 11
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 177,
            "movement": -38
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 182,
            "movement": -33
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 199,
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
            "country": "NG",
            "name": "Nigeria",
            "position": 20,
            "movement": -14
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/da2c728690442570efd5b29209fca908/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Bandana",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 34,
            "movement": 2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 48,
            "movement": 10
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 55,
            "movement": 4
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 57,
            "movement": 19
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 85,
            "movement": 11
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 107,
            "movement": 49
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 120,
            "movement": -41
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 141,
            "movement": 9
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 143,
            "movement": 8
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 155,
            "movement": -63
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 156,
            "movement": -44
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 190,
            "movement": -82
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
            "position": 113,
            "movement": 17
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BZ",
            "name": "Belize",
            "position": 22,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3a0ea8b02098effdf5ecce496d515176/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "ONE MAN REGIMENT",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 11,
            "movement": 3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 26,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 40,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 41,
            "movement": -5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 51,
            "movement": -13
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 59,
            "movement": 8
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 65,
            "movement": 17
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 66,
            "movement": -12
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 87,
            "movement": 20
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 91,
            "movement": 33
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 146,
            "movement": 12
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
            "position": 106,
            "movement": -18
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-18",
    "cover": "https://cdn-images.dzcdn.net/images/cover/169a811bba3c33c478651f1e2b250db6/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Playboy",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 76,
            "movement": -7
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 91,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 107,
            "movement": 24
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 118,
            "movement": 34
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 121,
            "movement": -14
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 169,
            "movement": -61
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 177,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 178,
            "movement": -128
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 187,
            "movement": -92
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
            "position": 56,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/20b709c21edd2d8924cf88132a94ff1e/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "IMALI",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 72,
            "movement": -3
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 94,
            "movement": 43
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 102,
            "movement": -37
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 107,
            "movement": -19
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 107,
            "movement": 8
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 139,
            "movement": -18
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
            "position": 108,
            "movement": -19
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
            "position": 187,
            "movement": 11
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
            "position": 22,
            "movement": -15
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9405ef9f7a00125ec0e7f408a7640d14/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Laughter, Tears & Goosebumps",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 26,
            "movement": -8
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 49,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 61,
            "movement": -19
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 116,
            "movement": -40
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 168,
            "movement": 17
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 177,
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
            "position": 33,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b8ce8a62a6484f053bdd2cf80818a2d/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "APOLLO",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 47,
            "movement": 55
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 60,
            "movement": -10
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 97,
            "movement": -4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 99,
            "movement": -34
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
            "position": 103,
            "movement": 6
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/bd9b968d69b674b887fc7e166af5ae23/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Playboy",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 56,
            "movement": 10
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 116,
            "movement": -5
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 135,
            "movement": -56
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 137,
            "movement": -40
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/20b709c21edd2d8924cf88132a94ff1e/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "adedamola",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 71,
            "movement": 2
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 96,
            "movement": -14
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 195,
            "movement": -75
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
            "position": 65,
            "movement": -5
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a687087e03dff683b56b53044b52c551/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "So it Goes",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 68,
            "movement": 3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 172,
            "movement": -112
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
            "position": 41,
            "movement": -37
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3fe94d046b5097983f35fcc47037c799/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "FIGHTING",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 168,
            "movement": -18
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
            "position": 134,
            "movement": -15
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
            "position": 170,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-18",
    "cover": "https://cdn-images.dzcdn.net/images/cover/169a811bba3c33c478651f1e2b250db6/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "GODDESS",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 107,
            "movement": -35
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
            "position": 98,
            "movement": -11
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/169a811bba3c33c478651f1e2b250db6/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "BY FIRE",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 139,
            "movement": -42
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
            "position": 79,
            "movement": -8
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-18",
    "cover": "https://cdn-images.dzcdn.net/images/cover/169a811bba3c33c478651f1e2b250db6/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Dopamine",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 174,
            "movement": -50
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
            "position": 36,
            "movement": -13
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-18",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2454c47103560319b1992920e1a866e9/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "C'EST LA VIE",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 148,
            "movement": -38
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
            "position": 97,
            "movement": -14
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-18",
    "cover": "https://cdn-images.dzcdn.net/images/cover/169a811bba3c33c478651f1e2b250db6/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "DEAR FATHER",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 191,
            "movement": -49
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
            "position": 89,
            "movement": -13
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-18",
    "cover": "https://cdn-images.dzcdn.net/images/cover/169a811bba3c33c478651f1e2b250db6/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "LIGHT OF DAWN",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 183,
            "movement": -25
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
            "position": 111,
            "movement": -97
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-18",
    "cover": "https://cdn-images.dzcdn.net/images/cover/169a811bba3c33c478651f1e2b250db6/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "everyday",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 14,
            "movement": 7
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-19",
    "cover": "https://cdn-images.dzcdn.net/images/cover/86d8d6db321a04e6b49342da728b2e58/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "CLAAT",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 99,
            "movement": -13
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-18",
    "cover": "https://cdn-images.dzcdn.net/images/cover/29bf5b5ad5f962997dbb7c369a8320d9/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Champion",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 128,
            "movement": 21
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-18",
    "cover": "https://cdn-images.dzcdn.net/images/cover/bd9b968d69b674b887fc7e166af5ae23/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "KILOWI",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 131,
            "movement": -22
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-18",
    "cover": "https://cdn-images.dzcdn.net/images/cover/169a811bba3c33c478651f1e2b250db6/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Airplane Mode",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 150,
            "movement": -36
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/bd9b968d69b674b887fc7e166af5ae23/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "iseoluwa",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 161,
            "movement": -68
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a687087e03dff683b56b53044b52c551/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "MIMI NAWE",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 163,
            "movement": -24
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-18",
    "cover": "https://cdn-images.dzcdn.net/images/cover/169a811bba3c33c478651f1e2b250db6/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "SEX LOVE UNDERSTANDING TRUST",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 169,
            "movement": -31
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-18",
    "cover": "https://cdn-images.dzcdn.net/images/cover/169a811bba3c33c478651f1e2b250db6/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "ONAZO",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 172,
            "movement": -31
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-18",
    "cover": "https://cdn-images.dzcdn.net/images/cover/169a811bba3c33c478651f1e2b250db6/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "History",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 147,
            "movement": -27
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a0db260ae940d4870a73c5a735408d67/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Vibration",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 191,
            "movement": -4
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-20",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b8ce8a62a6484f053bdd2cf80818a2d/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Need You",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 183,
            "movement": -13
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b8ce8a62a6484f053bdd2cf80818a2d/500x500-000000-80-0-0.jpg"
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
  