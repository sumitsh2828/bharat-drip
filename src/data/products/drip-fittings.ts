import type { ProductPage } from "@/data/types";

const dripFittings: ProductPage = {
  slug: "drip-fittings",
  name: "Drip fittings",
  title: "Drip fittings",
  lead: "The small parts that hold a drip system together: takeoffs, grommets, joiners, lateral cocks and end caps for 12 and 16 mm laterals, plus PCN, elbows and tees for 50–110 mm mains.",
  blocks: [
    {
      type: "features",
      items: [
        { icon: "fittings", title: "Lateral fittings", text: "Takeoffs, grommets, joiners, lateral cocks and end caps in 12 and 16 mm." },
        { icon: "fittings", title: "Mainline fittings", text: "PCN, PVC elbows and PVC tees from 50 to 110 mm." },
      ],
    },
    {
      type: "table",
      title: "Specifications",
      minWidth: 600,
      columns: ["Model", "Product", "Sizes", "What it does"],
      rows: [
        ["BD-T", "Takeoff", "12, 16 mm", "Connects a lateral to the sub-main"],
        ["BD-G", "Grommet", "12, 16 mm", "Seals the takeoff into the sub-main"],
        ["BD-J", "Joiner", "12, 16 mm", "Joins two lengths of lateral"],
        ["BD-LC", "Lateral cock", "12, 16 mm", "Opens or closes a single lateral"],
        ["BD-EC", "End cap", "12, 16 mm", "Closes the end of a lateral"],
        ["BD-PCN", "PCN", "50–110 mm", "Connects pipe to fittings on the main"],
        ["BD-PE", "PVC elbow", "50–110 mm", "Turns a PVC main through 90°"],
        ["BD-PT", "PVC tee", "50–110 mm", "Branches off a PVC main"],
      ],
    },
    {
      type: "packing",
      items: [
        { label: "Packing", value: "[pieces per bag / carton]" },
        { label: "Per 40′ container", value: "[pieces]" },
        { label: "Lead time", value: "[X days from order]" },
        { label: "Shipping terms", value: "[FOB / CIF, port]" },
      ],
    },
    {
      type: "related",
      items: [
        { slug: "drip-laterals", title: "Drip laterals", text: "Inline and online, 12–20 mm", icon: "laterals" },
        { slug: "drippers", title: "Drippers", text: "BD-D, 4–8 LPH", icon: "dripper" },
        { slug: "pvc-pipes", title: "PVC pipes", text: "20–110 mm, 2.5–10 kg/cm²", icon: "pvc" },
        { slug: "valves", title: "Valves & gauges", text: "Ball, NRV, air-release, flush", icon: "valve" },
      ],
    },
  ],
  quote: {
    intro: "For drip fittings. We reply with price and dispatch time.",
    fields: [
      { id: "pr", label: "Product", type: "select", options: ["Takeoff", "Grommet", "Joiner", "Lateral cock", "End cap", "PCN", "PVC elbow", "PVC tee"] },
      { id: "sz", label: "Size", type: "select", options: ["16 mm", "12 mm", "50 mm", "63 mm", "75 mm", "90 mm", "110 mm"] },
      { id: "qty", label: "Quantity", placeholder: "pieces" },
      { id: "dest", label: "Destination country and port", placeholder: "e.g. Mombasa, Kenya" },
    ],
  },
};

export default dripFittings;
