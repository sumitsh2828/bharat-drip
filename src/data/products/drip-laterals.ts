import type { ProductPage } from "@/data/types";

const dripLaterals: ProductPage = {
  slug: "drip-laterals",
  name: "Drip laterals",
  title: "Drip laterals",
  lead: "Inline and online drip laterals in 12, 16 and 20 mm, made on our own lines in Rajasthan. Choose the wall thickness, flow rate and dripper spacing to suit the crop, the soil and how many seasons the line must last.",
  standard: "Standard: BIS IS 13488 · Licence CML [number]",
  blocks: [
    {
      type: "features",
      min: 230,
      items: [
        { icon: "laterals", title: "Inline round lateral", text: "Round tube with emitters built in at a fixed spacing. Available in heavier walls for multi-season use." },
        { icon: "lateralsFlat", title: "Inline flat lateral", text: "Flat emitters fused inside the tube, from thin seasonal walls up to heavy multi-season walls." },
        { icon: "dripper", title: "Online lateral", text: "Plain lateral with drippers punched in on site, so spacing can follow each plant. Pair with BD-D drippers, 4–8 LPH." },
      ],
    },
    {
      type: "table",
      title: "Specifications",
      minWidth: 640,
      columns: ["", "Inline round", "Inline flat", "Online"],
      rows: [
        ["Diameter", "12, 16 mm", "12, 16, 20 mm", "12, 16, 20 mm"],
        ["Wall thickness", "0.40, 0.50, 0.60, 0.70, 0.80, 0.90, 1.00, 1.20 mm", "0.20, 0.30, 0.40, 0.50, 0.60, 0.70, 0.80, 0.90, 1.00, 1.20 mm", "0.20, 0.30, 0.40, 0.50, 0.60, 1.00, 1.20, 1.40 mm"],
        ["Flow rate", "2 or 4 LPH", "2 or 4 LPH", "Set by dripper: 4–8 LPH"],
        ["Dripper spacing", "20–100 cm, in 10 cm steps", "20–100 cm, in 10 cm steps", "Any: punched on site"],
        ["Emitter", "Built in at the factory", "Built in at the factory", "BD-D online dripper"],
        ["Coil length", "[metres]", "[metres]", "[metres]"],
      ],
    },
    {
      type: "packing",
      items: [
        { label: "Packing", value: "[e.g. coils, shrink-wrapped]" },
        { label: "Per 40′ container", value: "[coils / metres]" },
        { label: "Lead time", value: "[X days from order]" },
        { label: "Shipping terms", value: "[FOB / CIF, port]" },
      ],
    },
    {
      type: "related",
      min: 220,
      items: [
        { slug: "drippers", title: "Drippers", text: "BD-D, 4–8 LPH", icon: "dripper" },
        { slug: "drip-fittings", title: "Drip fittings", text: "Takeoffs, grommets, joiners, end caps", icon: "fittings" },
        { slug: "filters", title: "Filters", text: "Screen, disc, sand, hydrocyclone", icon: "filter" },
        { slug: "fertigation", title: "Fertigation", text: "Venturi injectors, tanks", icon: "fertigation" },
      ],
    },
  ],
  quote: {
    intro: "For drip laterals. We reply with price and dispatch time.",
    fields: [
      { id: "lt", label: "Lateral type", type: "select", options: ["Inline flat", "Inline round", "Online"] },
      {
        grid: [
          { id: "dia", label: "Diameter", type: "select", options: ["16 mm", "12 mm", "20 mm"] },
          { id: "flow", label: "Flow rate", type: "select", options: ["4 LPH", "2 LPH"] },
          { id: "wall", label: "Wall (mm)", placeholder: "e.g. 0.40" },
          { id: "sp", label: "Spacing", type: "select", options: ["40 cm", "20 cm", "30 cm", "50 cm", "60 cm", "70 cm", "80 cm", "90 cm", "100 cm"] },
        ],
      },
      { id: "qty", label: "Quantity", placeholder: "metres, coils or containers" },
      { id: "dest", label: "Destination country and port", placeholder: "e.g. Mombasa, Kenya" },
    ],
  },
};

export default dripLaterals;
