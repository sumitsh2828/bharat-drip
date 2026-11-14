import type { ProductPage } from "@/data/types";

const drippers: ProductPage = {
  slug: "drippers",
  name: "Drippers",
  title: "Drippers",
  metaTitle: "Drippers",
  lead: "Online drippers that punch into plain laterals, so every plant gets an emitter exactly where it needs one. Use them with our online drip laterals in 12, 16 and 20 mm.",
  standard: "Standard: BIS IS 13487:2024 · Licence CM/L-0002623753",
  blocks: [
    {
      type: "features",
      items: [
        { icon: "dripper", title: "Online dripper · BD-D", text: "Punch-in dripper with flow rates from 4 to 8 litres per hour." },
        { icon: "laterals", title: "Made for online laterals", text: "Fit into our 12, 16 or 20 mm online drip laterals at whatever spacing each plant needs." },
      ],
    },
    {
      type: "table",
      title: "Specifications",
      columns: ["Specification", "BD-D online dripper"],
      rows: [
        ["Model", "BD-D"],
        ["Type", "Online, punched into the lateral"],
        ["Flow rate", "4–8 LPH"],
        ["Use with", "Online drip laterals, 12, 16 and 20 mm"],
        ["Standard", "BIS IS 13487:2024 · Licence CM/L-0002623753"],
        ["Colour", "Red and blue"],
      ],
    },
    {
      type: "packing",
      items: [
        { label: "Packing", value: "100 per packet" },
        { label: "Per 40′ container", value: "Confirmed in your quotation" },
        { label: "Lead time", value: "From stock, or 7 days if made to order" },
        { label: "Shipping terms", value: "Ex Factory, FOB or CIF · Mundra Port" },
      ],
    },
    {
      type: "related",
      items: [
        { slug: "drip-laterals", title: "Drip laterals", text: "Inline and online, 12–20 mm", icon: "laterals" },
        { slug: "drip-fittings", title: "Drip fittings", text: "Takeoffs, grommets, joiners, end caps", icon: "fittings" },
        { slug: "filters", title: "Filters", text: "Screen, disc, sand, hydrocyclone", icon: "filter" },
        { slug: "fertigation", title: "Fertigation", text: "Venturi injectors, tanks, headers", icon: "manifold" },
      ],
    },
  ],
  quote: {
    intro: "For drippers. We reply with price and dispatch time.",
    fields: [
      { id: "flow", label: "Flow rate (LPH)", placeholder: "4–8" },
      { id: "qty", label: "Quantity", placeholder: "pieces" },
      { id: "dest", label: "Destination country and port", placeholder: "e.g. Mombasa, Kenya" },
    ],
  },
};

export default drippers;
