import type { ProductPage } from "@/data/types";

const row = (m: string, t: string, s: string, f: string) => [m, t, s, f];

const filters: ProductPage = {
  slug: "filters",
  name: "Filters",
  title: "Filters",
  lead: "Clean water keeps every emitter flowing. We make screen, disc, hydrocyclone and sand filters from 2″ to 5″, plus small ½″, 1″ and 1½″ screen and disc filters for smaller plots.",
  blocks: [
    {
      type: "features",
      items: [
        { icon: "filter", title: "Screen filters", text: "2″ to 3″, 25–50 m³/h. For water that is already fairly clean, such as from wells and tanks." },
        { icon: "filter", title: "Disc filters", text: "2″ to 3″, 25–50 m³/h. Grooved discs hold back algae and organic matter." },
        { icon: "hydrocyclone", title: "Hydrocyclone filters", text: "Plastic 2″–3″ and metal 2″–5″. Spin sand and grit out of borewell water." },
        { icon: "sandFilter", title: "Sand (gravel) filters", text: "2″ to 4″ with 18″–48″ tanks. Media filtration for open water from ponds and canals." },
      ],
    },
    {
      type: "table",
      title: "Specifications",
      minWidth: 600,
      columns: ["Model", "Type", "Size", "Flow / tank"],
      rows: [
        row("BD-SF1", "Screen filter", "2″", "25 m³/h"),
        row("BD-SF2", "Screen filter", "2½″", "30 m³/h"),
        row("BD-SF3", "Screen filter", "2½″", "40 m³/h"),
        row("BD-SF4", "Screen filter", "3″", "40 m³/h"),
        row("BD-SF5", "Screen filter", "3″", "50 m³/h"),
        row("BD-DF1", "Disc filter", "2″", "25 m³/h"),
        row("BD-DF2", "Disc filter", "2″", "30 m³/h"),
        row("BD-DF3", "Disc filter", "2½″", "30 m³/h"),
        row("BD-DF4", "Disc filter", "2½″", "40 m³/h"),
        row("BD-DF5", "Disc filter", "3″", "40 m³/h"),
        row("BD-DF6", "Disc filter", "3″", "50 m³/h"),
        row("BD-PHF1", "Plastic hydrocyclone", "2″", "—"),
        row("BD-PHF2", "Plastic hydrocyclone", "2½″", "—"),
        row("BD-PHF3", "Plastic hydrocyclone", "3″", "—"),
        row("BD-MHF1", "Metal hydrocyclone", "2″", "—"),
        row("BD-MHF2", "Metal hydrocyclone", "2½″", "—"),
        row("BD-MHF3", "Metal hydrocyclone", "3″", "—"),
        row("BD-MHF4", "Metal hydrocyclone", "4″", "—"),
        row("BD-MHF5", "Metal hydrocyclone", "5″", "—"),
        row("BD-SF1", "Sand (gravel) filter", "2″", "18″ tank"),
        row("BD-SF2", "Sand (gravel) filter", "2½″", "24″ tank"),
        row("BD-SF3", "Sand (gravel) filter", "3″", "24″ tank"),
        row("BD-SF4", "Sand (gravel) filter", "4″", "24″ tank"),
        row("BD-SF5", "Sand (gravel) filter", "4″", "48″ tank"),
      ],
      note: "Small screen and disc filters in ½″, 1″ and 1½″ are also available.",
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
        { slug: "drip-laterals", title: "Drip laterals", text: "Inline and online, 12–20 mm", icon: "laterals" },
        { slug: "fertigation", title: "Fertigation", text: "Venturi injectors, tanks, headers", icon: "manifold" },
        { slug: "valves", title: "Valves & gauges", text: "Ball, NRV, air-release, flush", icon: "valve" },
        { slug: "hdpe-pipes", title: "HDPE pipes", text: "50–200 mm, 2.5–6 kg/cm²", icon: "hdpe" },
      ],
    },
  ],
  quote: {
    intro: "For filters. We reply with price and dispatch time.",
    fields: [
      { id: "ft", label: "Filter type", type: "select", options: ["Screen filter", "Disc filter", "Plastic hydrocyclone", "Metal hydrocyclone", "Sand (gravel) filter"] },
      {
        grid: [
          { id: "sz", label: "Size", type: "select", options: ["2″", "2½″", "3″", "4″", "5″", "½″", "1″", "1½″"] },
          { id: "fl", label: "Flow (m³/h)", placeholder: "e.g. 30" },
        ],
      },
      { id: "qty", label: "Quantity", placeholder: "pieces" },
      { id: "dest", label: "Destination country and port", placeholder: "e.g. Mombasa, Kenya" },
    ],
  },
};

export default filters;
