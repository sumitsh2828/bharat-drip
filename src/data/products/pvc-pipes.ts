import type { ProductPage } from "@/data/types";

const pvcPipes: ProductPage = {
  slug: "pvc-pipes",
  name: "PVC pipes",
  title: "PVC pipes",
  lead: "Rigid PVC pipes for mainlines and distribution, from 20 to 110 mm (½″ to 4″) in five pressure classes. The wall thickness for every size and class is below.",
  standard: "Standard: BIS IS 4985:2021 · Licence CM/L-8400002504",
  blocks: [
    {
      type: "table",
      title: "Wall thickness by pressure class (mm)",
      minWidth: 1050,
      columns: ["Nominal diameter", "Inch", "Class 1 · 2.5 kg/cm²", "Class 2 · 4 kg/cm²", "Class 3 · 6 kg/cm²", "Class 4 · 8 kg/cm²", "Class 5 · 10 kg/cm²"],
      rows: [
        ["20 mm", "½″", "—", "—", "—", "—", "1.1–1.5"],
        ["25 mm", "¾″", "—", "—", "—", "1.2–1.6", "1.4–1.8"],
        ["32 mm", "1″", "—", "—", "—", "1.5–1.9", "1.8–2.2"],
        ["40 mm", "—", "—", "—", "1.4–1.8", "1.8–2.2", "2.2–2.7"],
        ["50 mm", "1½″", "—", "—", "1.7–2.1", "2.3–2.8", "2.8–3.3"],
        ["63 mm", "2″", "—", "1.5–1.9", "2.2–2.7", "2.8–3.3", "3.5–4.1"],
        ["75 mm", "2½″", "—", "1.8–2.2", "2.6–3.1", "3.4–4.0", "4.2–4.9"],
        ["90 mm", "3″", "1.3–1.7", "2.1–2.6", "3.1–3.7", "4.0–4.6", "5.0–5.7"],
        ["110 mm", "4″", "1.6–2.0", "2.5–3.0", "3.7–4.3", "4.9–5.6", "6.1–7.1"],
      ],
      note: "— means that size is not made in that class. Length per pipe: 6 m.",
    },
    {
      type: "packing",
      items: [
        { label: "Packing", value: "In pieces, as required" },
        { label: "Per 40′ container", value: "Confirmed in your quotation" },
        { label: "Lead time", value: "From stock, or 7 days if made to order" },
        { label: "Shipping terms", value: "Ex Factory, FOB or CIF · Mundra Port" },
      ],
    },
    {
      type: "related",
      items: [
        { slug: "hdpe-pipes", title: "HDPE pipes", text: "50–200 mm, 2.5–6 kg/cm²", icon: "hdpe" },
        { slug: "drip-fittings", title: "Drip fittings", text: "Takeoffs, grommets, joiners, end caps", icon: "fittings" },
        { slug: "valves", title: "Valves & gauges", text: "Ball, NRV, air-release, flush", icon: "valve" },
        { slug: "filters", title: "Filters", text: "Screen, disc, sand, hydrocyclone", icon: "filter" },
      ],
    },
  ],
  quote: {
    intro: "For PVC pipes. We reply with price and dispatch time.",
    fields: [
      {
        grid: [
          { id: "dia", label: "Diameter", type: "select", options: ["63 mm (2″)", "20 mm (½″)", "25 mm (¾″)", "32 mm (1″)", "40 mm", "50 mm (1½″)", "75 mm (2½″)", "90 mm (3″)", "110 mm (4″)"] },
          { id: "cl", label: "Class", type: "select", options: ["6 kg/cm²", "2.5 kg/cm²", "4 kg/cm²", "8 kg/cm²", "10 kg/cm²"] },
        ],
      },
      { id: "qty", label: "Quantity", placeholder: "metres or containers" },
      { id: "dest", label: "Destination country and port", placeholder: "e.g. Mombasa, Kenya" },
    ],
  },
};

export default pvcPipes;
