import type { ProductPage } from "@/data/types";

const pondLining: ProductPage = {
  slug: "pond-lining",
  name: "Pond lining",
  title: "Pond lining",
  lead: "Liners that turn a dug farm pond into water storage for the dry months. Supplied in standard scheme sizes or cut to fit your pond.",
  blocks: [
    {
      type: "table",
      title: "Specifications",
      columns: ["Specification", "Details"],
      rows: [
        ["Sizes", "Standard scheme sizes or cut to your pond"],
        ["Thickness", "[microns / GSM]"],
        ["Roll or sheet width", "[metres]"],
        ["Colour", "[colour]"],
      ],
    },
    {
      type: "steps",
      title: "Installing a pond liner",
      items: [
        { title: "Prepare the pond", text: "Dig to size, then remove stones, roots, glass and anything sharp that could damage the liner." },
        { title: "Lay it on site", text: "Lay the liner on site for a proper fit. Hold small gaps down with heavy soil bags so wind can’t lift it." },
        { title: "Anchor the edges", text: "Dig a trench about 1 ft wide and 1 ft deep on all four sides and anchor the liner in it." },
        { title: "Inspect, then fill", text: "Check every joint before filling. Fence all four sides for extra protection." },
      ],
    },
    {
      type: "packing",
      items: [
        { label: "Packing", value: "[rolls / folded sheets]" },
        { label: "Per 40′ container", value: "[rolls / m²]" },
        { label: "Lead time", value: "[X days from order]" },
        { label: "Shipping terms", value: "[FOB / CIF, port]" },
      ],
    },
    {
      type: "related",
      items: [
        { slug: "hdpe-pipes", title: "HDPE pipes", text: "50–200 mm, 2.5–6 kg/cm²", icon: "hdpe" },
        { slug: "pvc-pipes", title: "PVC pipes", text: "20–110 mm, 2.5–10 kg/cm²", icon: "pvc" },
        { slug: "filters", title: "Filters", text: "Screen, disc, sand, hydrocyclone", icon: "filter" },
        { slug: "drip-laterals", title: "Drip laterals", text: "Inline and online, 12–20 mm", icon: "laterals" },
      ],
    },
  ],
  quote: {
    intro: "For pond lining. We reply with price and dispatch time.",
    fields: [
      {
        grid: [
          { id: "ln", label: "Length (m)", placeholder: "e.g. 30" },
          { id: "wd", label: "Width (m)", placeholder: "e.g. 30" },
        ],
      },
      {
        grid: [
          { id: "dp", label: "Depth (m)", placeholder: "e.g. 3" },
          { id: "th", label: "Thickness", placeholder: "if known" },
        ],
      },
      { id: "qty", label: "Quantity", placeholder: "number of ponds" },
      { id: "dest", label: "Destination country and port", placeholder: "e.g. Mombasa, Kenya" },
    ],
  },
};

export default pondLining;
