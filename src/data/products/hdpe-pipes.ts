import type { ProductPage } from "@/data/types";

const hdpePipes: ProductPage = {
  slug: "hdpe-pipes",
  name: "HDPE pipes",
  title: "HDPE pipes",
  lead: "HDPE pipes for mainlines and sprinkler systems, from 50 to 200 mm in four pressure classes. The wall thickness for every size and class is below.",
  standard: "Standard: BIS IS 14151 · Licence CML 2738467",
  blocks: [
    {
      type: "table",
      title: "Wall thickness by pressure class (mm)",
      minWidth: 750,
      columns: ["Nominal diameter", "Class 1 · 2.5 kg/cm²", "Class 2 · 3.2 kg/cm²", "Class 3 · 4 kg/cm²", "Class 4 · 6 kg/cm²"],
      rows: [
        ["50 mm", "—", "—", "2.0–2.4", "2.9–3.4"],
        ["63 mm", "—", "2.0–2.4", "2.0–2.4", "2.9–3.4"],
        ["75 mm", "2.0–2.4", "2.5–2.9", "3.0–3.4", "4.5–5.2"],
        ["90 mm", "2.2–2.6", "2.9–3.4", "3.5–4.1", "5.3–6.1"],
        ["110 mm", "2.7–3.2", "3.4–3.9", "4.2–4.8", "6.5–7.4"],
        ["125 mm", "3.1–3.6", "3.6–4.5", "4.8–5.5", "7.4–8.1"],
        ["140 mm", "3.5–4.1", "4.1–5.0", "5.4–6.1", "8.3–9.3"],
        ["160 mm", "3.9–4.5", "4.9–5.6", "6.2–7.0", "9.4–10.6"],
        ["180 mm", "4.4–5.0", "5.5–6.1", "6.9–7.8", "10.6–11.9"],
        ["200 mm", "4.9–5.6", "6.1–7.0", "7.7–8.7", "11.8–13.2"],
      ],
      note: "— means that size is not made in that class. Length per pipe: [metres]",
    },
    {
      type: "packing",
      items: [
        { label: "Packing", value: "[lengths per bundle]" },
        { label: "Per 40′ container", value: "[metres]" },
        { label: "Lead time", value: "[X days from order]" },
        { label: "Shipping terms", value: "[FOB / CIF, port]" },
      ],
    },
    {
      type: "related",
      items: [
        { slug: "sprinklers", title: "Sprinkler systems", text: "Quick-coupled HDPE sets", icon: "mini" },
        { slug: "pvc-pipes", title: "PVC pipes", text: "20–110 mm, 2.5–10 kg/cm²", icon: "pvc" },
        { slug: "valves", title: "Valves & gauges", text: "Ball, NRV, air-release, flush", icon: "valve" },
        { slug: "drip-fittings", title: "Drip fittings", text: "Takeoffs, grommets, joiners, end caps", icon: "fittings" },
      ],
    },
  ],
  quote: {
    intro: "For HDPE pipes. We reply with price and dispatch time.",
    fields: [
      {
        grid: [
          { id: "dia", label: "Diameter", type: "select", options: ["90 mm", "50 mm", "63 mm", "75 mm", "110 mm", "125 mm", "140 mm", "160 mm", "180 mm", "200 mm"] },
          { id: "cl", label: "Class", type: "select", options: ["4 kg/cm²", "2.5 kg/cm²", "3.2 kg/cm²", "6 kg/cm²"] },
        ],
      },
      { id: "qty", label: "Quantity", placeholder: "metres or containers" },
      { id: "dest", label: "Destination country and port", placeholder: "e.g. Mombasa, Kenya" },
    ],
  },
};

export default hdpePipes;
