import type { IconName } from "@/components/icons";

export type CatalogueRow = { product: string; model: string; details: string };
export type CatalogueSection = {
  slug: string;
  title: string;
  summary: string;
  icon: IconName;
  standard?: string;
  rows: CatalogueRow[];
};

const r = (product: string, model: string, details: string): CatalogueRow => ({ product, model, details });
const mm50to110 = "50–110 mm";

export const catalogue: CatalogueSection[] = [
  {
    slug: "drip-laterals",
    title: "Drip laterals",
    summary: "Inline round, inline flat and online laterals.",
    icon: "laterals",
    standard: "Standard: BIS IS 13488 · CML [no.]",
    rows: [
      r("Inline round drip lateral", "—", "Ø 12, 16 mm · wall 0.40–1.20 mm · 2 / 4 LPH · dripper spacing 20–100 cm"),
      r("Inline flat drip lateral", "—", "Ø 12, 16, 20 mm · wall 0.20–1.20 mm · 2 / 4 LPH · dripper spacing 20–100 cm"),
      r("Online drip lateral", "—", "Ø 12, 16, 20 mm · wall 0.20–1.40 mm · drippers fitted on site"),
    ],
  },
  {
    slug: "drippers",
    title: "Drippers",
    summary: "Online drippers for punching into plain laterals.",
    icon: "dripper",
    standard: "Standard: BIS IS 13487",
    rows: [r("Online dripper", "BD-D", "4–8 LPH")],
  },
  {
    slug: "filters",
    title: "Filters",
    summary: "Screen, disc, hydrocyclone and sand filtration.",
    icon: "filter",
    rows: [
      r("Screen filters", "BD-SF1 – SF5", "2″, 2½″, 3″ · 25–50 m³/h · small ½″, 1″, 1½″ also available"),
      r("Disc filters", "BD-DF1 – DF6", "2″, 2½″, 3″ · 25–50 m³/h · small ½″, 1″, 1½″ also available"),
      r("Plastic hydrocyclone filters", "BD-PHF1 – PHF3", "2″, 2½″, 3″"),
      r("Metal hydrocyclone filters", "BD-MHF1 – MHF5", "2″, 2½″, 3″, 4″, 5″"),
      r("Sand (gravel) filters", "BD-SF1 – SF5", "2″ to 4″ · 18″, 24″ and 48″ tanks"),
    ],
  },
  {
    slug: "fertigation",
    title: "Fertigation & headers",
    summary: "Feed fertiliser through the system.",
    icon: "fertigation",
    rows: [
      r("Venturi injectors", "BD-VI1 – VI3", "¾″, 1″, 2″ · with suction port and assembly"),
      r("Fertiliser tanks", "BD-FT1 – FT3", "30, 60, 90 litres"),
      r("Header assemblies", "BD-HA1 – HA3", "2″, 2½″, 3″ · 2″ ECO head unit with assembly available"),
    ],
  },
  {
    slug: "valves",
    title: "Valves & gauges",
    summary: "Control, protect and monitor the line.",
    icon: "valve",
    rows: [
      r("Non-return valves", "BD-NRV1 – NRV3", "2″, 2½″, 3″"),
      r("PP ball valves", "BD-BV", "20–200 mm"),
      r("Control valve", "BD-CV", "40–140 mm"),
      r("Flush valve", "BD-FV", "40–75 mm"),
      r("Air release valves", "BD-ARV1 – ARV2", "¾″, 1″"),
      r("Pressure gauges", "BD-PG1 – PG2", "Glycerine-filled and regular"),
    ],
  },
  {
    slug: "drip-fittings",
    title: "Drip fittings",
    summary: "Connect laterals to the mainline.",
    icon: "fittings",
    rows: [
      r("Takeoff", "BD-T", "12, 16 mm"),
      r("Grommet", "BD-G", "12, 16 mm"),
      r("Joiner", "BD-J", "12, 16 mm"),
      r("Lateral cock", "BD-LC", "12, 16 mm"),
      r("End cap", "BD-EC", "12, 16 mm"),
      r("PCN", "BD-PCN", mm50to110),
      r("PVC elbow", "BD-PE", mm50to110),
      r("PVC tee", "BD-PT", mm50to110),
    ],
  },
  {
    slug: "mini-sprinklers",
    title: "Mini sprinkler systems",
    summary: "32 mm laterals with nozzle and raiser sets.",
    icon: "mini",
    standard: "Standard: BIS IS 12786 (32 mm laterals)",
    rows: [
      r("Plain lateral", "—", "32 mm"),
      r("Mini sprinkler set", "BD-PSS", "Nozzle, raiser and tube set"),
      r("End cap", "BD-CEC", "32 mm"),
      r("Tee", "BD-CT", "32 mm"),
      r("Elbow", "BD-CE", "32 mm"),
      r("Service saddle", "BD-SS", "63 × 1″, 75 × 1″, 90 × 1″"),
    ],
  },
  {
    slug: "sprinklers",
    title: "Sprinkler systems",
    summary: "Quick-coupled HDPE sprinkler sets.",
    icon: "mini",
    standard: "Standard: BIS IS 14151 (HDPE pipe)",
    rows: [
      r("HDPE sprinkler pipe", "—", "50, 63, 75, 90, 110, 125, 140, 160, 180, 200 mm"),
      r("Nozzle sets", "BD-NS", "Gun metal, brass, plastic"),
      r("HDPE adapter", "BD-HA", mm50to110),
      r("HDPE end cap", "BD-HEC", mm50to110),
      r("HDPE tee", "BD-HT", mm50to110),
      r("HDPE bend", "BD-HB", mm50to110),
      r("HDPE PCN", "BD-PCN", mm50to110),
      r("Foot batten", "BD-FB", mm50to110),
      r("Clamps", "BD-C", "C-clamp and clamp · 50–110 mm"),
      r("Rubber rings", "BD-RR", mm50to110),
      r("Raisers", "BD-R", "Any size and length to order"),
    ],
  },
  {
    slug: "rain-guns",
    title: "Rain guns",
    summary: "Long-throw sector sprinklers and stands.",
    icon: "sprinkler",
    rows: [
      r("Rain gun (female sector sprinkler)", "BD-RG1 – RG5", "1¼″, 1½″, 2″, 2½″, 3″"),
      r("Rain gun stand", "BD-GS1 – GS3", "1¼″, 1½″, 2″"),
    ],
  },
  {
    slug: "hdpe-pipes",
    title: "HDPE pipes",
    summary: "Mainline and sprinkler pipe.",
    icon: "hdpe",
    standard: "Standard: BIS IS 14151 · CML 2738467",
    rows: [r("HDPE pipe", "—", "50–200 mm · pressure classes 2.5, 3.2, 4 and 6 kg/cm²")],
  },
  {
    slug: "pvc-pipes",
    title: "PVC pipes",
    summary: "Mainline and distribution pipe.",
    icon: "pvc",
    standard: "Standard: BIS IS 4985 · CML 84002504",
    rows: [r("PVC pipe", "—", "20–110 mm (½″–4″) · pressure classes 2.5, 4, 6, 8 and 10 kg/cm²")],
  },
  {
    slug: "greenhouses",
    title: "Greenhouses & films",
    summary: "Structures and covers, standard or built to order.",
    icon: "greenhouse",
    rows: [
      r("Greenhouse structures", "—", "Standard sizes or built to order · turnkey projects · already exported in Asia"),
      r("Films & nets", "—", "Poly film, mulch film, shade net, insect net, skirting net, aluminium net"),
      r("Structure & fixings", "—", "GI pipe structure, GI profile, coated zig-zag wire, threads and clips"),
      r("Climate & watering", "—", "Foggers, misters and drip irrigation for protected crops"),
    ],
  },
  {
    slug: "pond-lining",
    title: "Pond lining",
    summary: "Liners for farm ponds and water storage.",
    icon: "pond",
    rows: [r("Pond liner", "—", "Standard scheme sizes or cut to your pond")],
  },
];
