import type { ProductPage } from "@/data/types";

const greenhouses: ProductPage = {
  slug: "greenhouses",
  name: "Greenhouses & films",
  title: "Greenhouses & films",
  lead: "Greenhouse structures in standard sizes or built to your order, with every cover, net and fitting they need. We take on turnkey projects and have already exported greenhouses to other Asian countries.",
  blocks: [
    {
      type: "features",
      items: [
        { icon: "greenhouse", title: "Greenhouse structures", text: "Standard sizes or built to order, supplied as a turnkey project." },
        { icon: "greenhouse", title: "Films & nets", text: "Poly film, mulch film, shade net, insect net, skirting net and aluminium net." },
        { icon: "fittings", title: "Structure & fixings", text: "GI pipe structure, GI profile, coated zig-zag wire, threads and clips." },
        { icon: "dripper", title: "Climate & watering", text: "Foggers, misters and drip irrigation for protected crops." },
      ],
    },
    {
      type: "table",
      title: "Specifications",
      columns: ["Item", "Details"],
      rows: [
        ["Structure", "Standard sizes [list sizes] or built to order"],
        ["Poly film", "[thickness, width]"],
        ["Mulch film", "[thickness, width, colour]"],
        ["Shade net", "[shade %]"],
        ["Insect net", "[mesh]"],
        ["Skirting and aluminium net", "Supplied to suit the structure"],
        ["GI pipe structure and profile", "[pipe sizes, coating]"],
        ["Foggers and misters", "Supplied with the climate system"],
      ],
    },
    {
      type: "packing",
      items: [
        { label: "Packing", value: "[kits per structure, film rolls]" },
        { label: "Per 40′ container", value: "[structures / rolls]" },
        { label: "Lead time", value: "[X days from order]" },
        { label: "Shipping terms", value: "[FOB / CIF, port]" },
      ],
    },
    {
      type: "related",
      items: [
        { slug: "drip-laterals", title: "Drip laterals", text: "Inline and online, 12–20 mm", icon: "laterals" },
        { slug: "drippers", title: "Drippers", text: "BD-D, 4–8 LPH", icon: "dripper" },
        { slug: "filters", title: "Filters", text: "Screen, disc, sand, hydrocyclone", icon: "filter" },
        { slug: "fertigation", title: "Fertigation", text: "Venturi injectors, tanks, headers", icon: "manifold" },
      ],
    },
  ],
  quote: {
    intro: "For greenhouses and films. We reply with price and dispatch time.",
    fields: [
      { id: "pr", label: "Product", type: "select", options: ["Complete greenhouse (turnkey)", "Greenhouse structure", "Poly film", "Mulch film", "Shade net", "Insect net", "Other accessories"] },
      { id: "ar", label: "Area or size", placeholder: "e.g. 4,000 m² or length × width" },
      { id: "qty", label: "Quantity", placeholder: "structures, rolls or pieces" },
      { id: "dest", label: "Destination country and port", placeholder: "e.g. Mombasa, Kenya" },
    ],
  },
};

export default greenhouses;
