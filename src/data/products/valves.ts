import type { ProductPage } from "@/data/types";

const valves: ProductPage = {
  slug: "valves",
  name: "Valves & gauges",
  title: "Valves & gauges",
  lead: "Valves to open, close, flush and protect your lines, and gauges to keep an eye on the pressure. Sizes from ¾″ to 3″ and from 20 to 200 mm.",
  blocks: [
    {
      type: "features",
      items: [
        { icon: "valve", title: "Control", text: "PP ball valves 20–200 mm and control valves 40–140 mm." },
        { icon: "valve", title: "Protection", text: "Non-return valves 2″–3″ and air release valves ¾″ and 1″." },
        { icon: "fittings", title: "Flushing", text: "Flush valves 40–75 mm for the end of each sub-main." },
        { icon: "gauge", title: "Monitoring", text: "Pressure gauges, glycerine-filled or regular." },
      ],
    },
    {
      type: "table",
      title: "Specifications",
      minWidth: 600,
      columns: ["Model", "Product", "Sizes", "What it does"],
      rows: [
        ["BD-NRV1 – NRV3", "Non-return valve", "2″, 2½″, 3″", "Stops water flowing back towards the pump"],
        ["BD-BV", "PP ball valve", "20–200 mm", "Opens and shuts mains and sub-mains"],
        ["BD-CV", "Control valve", "40–140 mm", "Controls flow to each section of the field"],
        ["BD-FV", "Flush valve", "40–75 mm", "Flushes sediment out of the sub-main"],
        ["BD-ARV1 – ARV2", "Air release valve", "¾″, 1″", "Lets trapped air out of the line"],
        ["BD-PG1", "Pressure gauge", "Glycerine-filled", "Shows line pressure with a steady needle"],
        ["BD-PG2", "Pressure gauge", "Regular", "Shows line pressure"],
      ],
    },
    {
      type: "packing",
      items: [
        { label: "Packing", value: "[pieces per carton]" },
        { label: "Per 40′ container", value: "[pieces]" },
        { label: "Lead time", value: "[X days from order]" },
        { label: "Shipping terms", value: "[FOB / CIF, port]" },
      ],
    },
    {
      type: "related",
      items: [
        { slug: "filters", title: "Filters", text: "Screen, disc, sand, hydrocyclone", icon: "filter" },
        { slug: "hdpe-pipes", title: "HDPE pipes", text: "50–200 mm, 2.5–6 kg/cm²", icon: "hdpe" },
        { slug: "pvc-pipes", title: "PVC pipes", text: "20–110 mm, 2.5–10 kg/cm²", icon: "pvc" },
        { slug: "drip-fittings", title: "Drip fittings", text: "Takeoffs, grommets, joiners, end caps", icon: "fittings" },
      ],
    },
  ],
  quote: {
    intro: "For valves and gauges. We reply with price and dispatch time.",
    fields: [
      { id: "pr", label: "Product", type: "select", options: ["PP ball valve", "Non-return valve", "Control valve", "Flush valve", "Air release valve", "Pressure gauge"] },
      { id: "sz", label: "Size", placeholder: "e.g. 63 mm or 2″" },
      { id: "qty", label: "Quantity", placeholder: "pieces" },
      { id: "dest", label: "Destination country and port", placeholder: "e.g. Mombasa, Kenya" },
    ],
  },
};

export default valves;
