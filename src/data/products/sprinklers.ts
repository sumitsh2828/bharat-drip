import type { ProductPage } from "@/data/types";

const s = "50, 63, 75, 90, 110 mm";

const sprinklers: ProductPage = {
  slug: "sprinklers",
  name: "Sprinkler systems",
  title: "Sprinkler systems",
  lead: "Portable sprinkler systems built on quick-coupled HDPE pipe: pipe from 50 to 200 mm, couplers and fittings from 50 to 110 mm, and nozzles in gun metal, brass or plastic.",
  standard: "Standard: BIS IS 14151 (HDPE pipe)",
  blocks: [
    {
      type: "features",
      items: [
        { icon: "hdpe", title: "HDPE sprinkler pipe", text: "50 to 200 mm, in four pressure classes." },
        { icon: "mini", title: "Nozzle sets", text: "Gun metal, brass or plastic nozzles." },
        { icon: "fittings", title: "Couplers & fittings", text: "Adapters, end caps, tees, bends, PCN, clamps and rubber rings, 50–110 mm." },
        { icon: "mini", title: "Raisers & foot battens", text: "Raisers in any size and length, and foot battens for 50–110 mm pipe." },
      ],
    },
    {
      type: "table",
      title: "Specifications",
      columns: ["Model", "Product", "Sizes"],
      rows: [
        ["—", "HDPE sprinkler pipe", "50, 63, 75, 90, 110, 125, 140, 160, 180, 200 mm"],
        ["BD-NS", "Nozzle set", "Gun metal, brass, plastic"],
        ["BD-HA", "HDPE adapter", s],
        ["BD-HEC", "HDPE end cap", s],
        ["BD-HT", "HDPE tee", s],
        ["BD-HB", "HDPE bend", s],
        ["BD-PCN", "HDPE PCN", s],
        ["BD-FB", "Foot batten", s],
        ["BD-C", "Clamp (C-clamp and clamp)", s],
        ["BD-RR", "Rubber ring", s],
        ["BD-R", "Raiser", "Any size and length to order"],
      ],
      note: "Throw radius and discharge for each nozzle: [add from data sheet] · HDPE pipe wall thickness by class is on the HDPE pipes page.",
    },
    {
      type: "packing",
      items: [
        { label: "Packing", value: "[pipe lengths per bundle, fittings per carton]" },
        { label: "Per 40′ container", value: "[sets / pipe lengths]" },
        { label: "Lead time", value: "[X days from order]" },
        { label: "Shipping terms", value: "[FOB / CIF, port]" },
      ],
    },
    {
      type: "related",
      items: [
        { slug: "rain-guns", title: "Rain guns", text: "1¼″–3″ guns and stands", icon: "sprinkler" },
        { slug: "hdpe-pipes", title: "HDPE pipes", text: "50–200 mm, 2.5–6 kg/cm²", icon: "hdpe" },
        { slug: "valves", title: "Valves & gauges", text: "Ball, NRV, air-release, flush", icon: "valve" },
        { slug: "mini-sprinklers", title: "Mini sprinklers", text: "32 mm laterals and sets", icon: "mini" },
      ],
    },
  ],
  quote: {
    intro: "For sprinkler systems. We reply with price and dispatch time.",
    fields: [
      { id: "pr", label: "Product", type: "select", options: ["Complete sprinkler set", "HDPE sprinkler pipe", "Nozzle sets", "Couplers and fittings", "Raisers"] },
      {
        grid: [
          { id: "sz", label: "Pipe size", type: "select", options: ["63 mm", "50 mm", "75 mm", "90 mm", "110 mm", "125 mm", "140 mm", "160 mm", "180 mm", "200 mm"] },
          { id: "nz", label: "Nozzle", type: "select", options: ["Gun metal", "Brass", "Plastic"] },
        ],
      },
      { id: "qty", label: "Quantity", placeholder: "sets, pipes or pieces" },
      { id: "dest", label: "Destination country and port", placeholder: "e.g. Mombasa, Kenya" },
    ],
  },
};

export default sprinklers;
