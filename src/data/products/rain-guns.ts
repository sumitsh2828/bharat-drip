import type { ProductPage } from "@/data/types";

const rg = "Rain gun, female sector sprinkler";

const rainGuns: ProductPage = {
  slug: "rain-guns",
  name: "Rain guns",
  title: "Rain guns",
  lead: "Long-throw sector sprinklers that water a large part-circle from a single point, with tripod stands to match. Connections from 1¼″ to 3″.",
  blocks: [
    {
      type: "features",
      items: [
        { icon: "sprinkler", title: "Rain guns", text: "Female-threaded sector sprinklers in 1¼″, 1½″, 2″, 2½″ and 3″." },
        { icon: "sprinkler", title: "Rain gun stands", text: "Tripod stands for 1¼″, 1½″ and 2″ guns." },
      ],
    },
    {
      type: "table",
      title: "Specifications",
      columns: ["Model", "Product", "Connection"],
      rows: [
        ["BD-RG1", rg, "1¼″"],
        ["BD-RG2", rg, "1½″"],
        ["BD-RG3", rg, "2″"],
        ["BD-RG4", rg, "2½″"],
        ["BD-RG5", rg, "3″"],
        ["BD-GS1", "Rain gun stand", "1¼″"],
        ["BD-GS2", "Rain gun stand", "1½″"],
        ["BD-GS3", "Rain gun stand", "2″"],
      ],
      note: "Throw radius and discharge for each gun and nozzle: [add from data sheet]",
    },
    {
      type: "packing",
      items: [
        { label: "Packing", value: "[boxed, stands bundled]" },
        { label: "Per 40′ container", value: "[pieces]" },
        { label: "Lead time", value: "[X days from order]" },
        { label: "Shipping terms", value: "[FOB / CIF, port]" },
      ],
    },
    {
      type: "related",
      items: [
        { slug: "sprinklers", title: "Sprinkler systems", text: "Quick-coupled HDPE sets", icon: "mini" },
        { slug: "hdpe-pipes", title: "HDPE pipes", text: "50–200 mm, 2.5–6 kg/cm²", icon: "hdpe" },
        { slug: "valves", title: "Valves & gauges", text: "Ball, NRV, air-release, flush", icon: "valve" },
        { slug: "filters", title: "Filters", text: "Screen, disc, sand, hydrocyclone", icon: "filter" },
      ],
    },
  ],
  quote: {
    intro: "For rain guns. We reply with price and dispatch time.",
    fields: [
      { id: "pr", label: "Product", type: "select", options: ["Rain gun with stand", "Rain gun", "Rain gun stand"] },
      { id: "sz", label: "Connection", type: "select", options: ["2″", "1¼″", "1½″", "2½″", "3″"] },
      { id: "qty", label: "Quantity", placeholder: "pieces" },
      { id: "dest", label: "Destination country and port", placeholder: "e.g. Mombasa, Kenya" },
    ],
  },
};

export default rainGuns;
