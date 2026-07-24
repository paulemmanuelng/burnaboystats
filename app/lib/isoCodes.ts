// Alpha-2 chart code → ISO 3166-1 numeric, the id space the world-map shapes
// (data/worldShapes.ts) use. Shared by every map on the site so there is one
// source of truth — covers exactly the countries in data/charts.ts CHART_COUNTRIES
// (a `chart codes missing from A2_TO_ISO` check guards this in the map builders).
export const A2_TO_ISO: Record<string, number> = {
  US: 840, UK: 826, IE: 372, CA: 124, AU: 36, NZ: 554, FR: 250, DE: 276, NL: 528, SE: 752,
  BE: 56, CH: 756, AT: 40, DK: 208, IT: 380, ES: 724, PT: 620, FI: 246, HU: 348, GR: 300,
  HK: 344, IN: 356, IL: 376, IS: 352, AE: 784, SA: 682, LB: 422, RO: 642, SK: 703, CZ: 203,
  LT: 440, NO: 578, PL: 616, NG: 566, ZA: 710, SR: 740, AR: 32, CO: 170, EC: 218, VN: 704,
  BR: 76, JP: 392, SG: 702, LU: 442, PA: 591, CR: 188, LV: 428, EG: 818, MY: 458,
};
