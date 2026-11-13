import type { ProductPage } from "@/data/types";

const miniSprinklers: ProductPage = {
  slug: "mini-sprinklers",
  name: "Mini sprinkler systems",
  title: "Mini sprinkler systems",
  lead: "Mini sprinklers spread a fine, even spray over close-growing crops. We supply the 32 mm laterals, the nozzle, raiser and tube sets, and the fittings that connect them.",
  standard: "Standard: BIS IS 12786 (32 mm laterals)",
  blocks: [
    {
      type: "features",
      items: [
        { icon: "mini", title: "Mini sprinkler set", text: "Model BD-PSS: nozzle, raiser and tube, ready to fit." },
        { icon: "hdpe", title: "32 mm plain lateral", text: "The lateral line that carries water to each sprinkler." },
        { icon: "fittings", title: "32 mm fittings", text: "End caps, tees and elbows, plus service saddles for 63, 75 and 90 mm mains." },
      ],
    },
    {
      type: "table",
      title: "Specifications",
      columns: ["Model", "Product", "Sizes"],
      rows: [
        ["—", "Plain lateral", "32 mm"],
        ["BD-PSS", "Mini sprinkler set", "Nozzle, raiser and tube set"],
        ["BD-CEC", "End cap", "32 mm"],
        ["BD-CT", "Tee", "32 mm"],
        ["BD-CE", "Elbow", "32 mm"],
        ["BD-SS", "Service saddle", "63 × 1″, 75 × 1″, 90 × 1″"],
        ["BD-BV", "PP ball valve", "20–200 mm"],
      ],
      note: "Throw radius and discharge for each nozzle: [add from data sheet]",
    },
    {
      type: "packing",
      items: [
        { label: "Packing", value: "[sets per carton, lateral coils]" },
        { label: "Per 40′ container", value: "[sets / metres]" },
        { label: "Lead time", value: "[X days from order]" },
        { label: "Shipping terms", value: "[FOB / CIF, port]" },
      ],
    },
    {
      type: "related",
      items: [
        { slug: "hdpe-pipes", title: "HDPE pipes", text: "50–200 mm, 2.5–6 kg/cm²", icon: "hdpe" },
        { slug: "valves", title: "Valves & gauges", text: "Ball, NRV, air-release, flush", icon: "valve" },
        { slug: "filters", title: "Filters", text: "Screen, disc, sand, hydrocyclone", icon: "filter" },
        { slug: "sprinklers", title: "Sprinkler systems", text: "Quick-coupled HDPE sets", icon: "mini" },
      ],
    },
  ],
  quote: {
    intro: "For mini sprinkler systems. We reply with price and dispatch time.",
    fields: [
      { id: "pr", label: "Product", type: "select", options: ["Complete mini sprinkler system", "Mini sprinkler set", "32 mm plain lateral", "32 mm fittings", "Service saddles"] },
      { id: "ar", label: "Area to cover", placeholder: "hectares or acres" },
      { id: "qty", label: "Quantity", placeholder: "sets, metres or pieces" },
      { id: "dest", label: "Destination country and port", placeholder: "e.g. Mombasa, Kenya" },
    ],
  },
};

export default miniSprinklers;
