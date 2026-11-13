import type { ProductPage } from "@/data/types";

const fertigation: ProductPage = {
  slug: "fertigation",
  name: "Fertigation & headers",
  title: "Fertigation & headers",
  lead: "Feed fertiliser through the irrigation system and manage the water at the head of every field. Venturi injectors, fertiliser tanks and ready-made header assemblies.",
  blocks: [
    {
      type: "features",
      items: [
        { icon: "manifold", title: "Venturi injectors", text: "¾″, 1″ and 2″, supplied with suction port and assembly." },
        { icon: "fertigation", title: "Fertiliser tanks", text: "30, 60 and 90 litre tanks." },
        { icon: "header", title: "Header assemblies", text: "2″, 2½″ and 3″ assemblies, plus a 2″ ECO head unit with assembly." },
      ],
    },
    {
      type: "table",
      title: "Specifications",
      columns: ["Model", "Product", "Size"],
      rows: [
        ["BD-VI1", "Venturi injector with suction port and assembly", "¾″"],
        ["BD-VI2", "Venturi injector with suction port and assembly", "1″"],
        ["BD-VI3", "Venturi injector with suction port and assembly", "2″"],
        ["BD-FT1", "Fertiliser tank", "30 L"],
        ["BD-FT2", "Fertiliser tank", "60 L"],
        ["BD-FT3", "Fertiliser tank", "90 L"],
        ["BD-HA1", "Header assembly", "2″"],
        ["BD-HA2", "Header assembly", "2½″"],
        ["BD-HA3", "Header assembly", "3″"],
        ["—", "ECO head unit with assembly", "2″"],
      ],
    },
    {
      type: "packing",
      items: [
        { label: "Packing", value: "[boxed / crated]" },
        { label: "Per 40′ container", value: "[pieces]" },
        { label: "Lead time", value: "[X days from order]" },
        { label: "Shipping terms", value: "[FOB / CIF, port]" },
      ],
    },
    {
      type: "related",
      items: [
        { slug: "filters", title: "Filters", text: "Screen, disc, sand, hydrocyclone", icon: "filter" },
        { slug: "valves", title: "Valves & gauges", text: "Ball, NRV, air-release, flush", icon: "valve" },
        { slug: "drip-laterals", title: "Drip laterals", text: "Inline and online, 12–20 mm", icon: "laterals" },
        { slug: "pvc-pipes", title: "PVC pipes", text: "20–110 mm, 2.5–10 kg/cm²", icon: "pvc" },
      ],
    },
  ],
  quote: {
    intro: "For fertigation and headers. We reply with price and dispatch time.",
    fields: [
      { id: "pr", label: "Product", type: "select", options: ["Venturi injector", "Fertiliser tank", "Header assembly", "ECO head unit"] },
      { id: "sz", label: "Size", type: "select", options: ["¾″", "1″", "2″", "2½″", "3″", "30 L", "60 L", "90 L"] },
      { id: "qty", label: "Quantity", placeholder: "pieces" },
      { id: "dest", label: "Destination country and port", placeholder: "e.g. Mombasa, Kenya" },
    ],
  },
};

export default fertigation;
