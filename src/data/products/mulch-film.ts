import type { ProductPage } from "@/data/types";

const thicknesses = ["20 micron", "25 micron", "30 micron", "50 micron", "75 micron", "100 micron"];

const mulchFilm: ProductPage = {
  slug: "mulch-film",
  name: "Mulch film",
  title: "Mulch film",
  lead: "Plastic mulch film for covering planting beds, to hold moisture in the soil and keep weeds down. Standard rolls in 750, 1000 and 1200 mm widths and six thicknesses from 20 to 100 micron, or made to your specification.",
  blocks: [
    {
      type: "features",
      items: [
        { icon: "mulch", title: "Standard rolls", text: "750 mm wide on 800 m rolls; 1000 and 1200 mm wide on 400 m rolls." },
        { icon: "spec", title: "Six thicknesses", text: "20, 25, 30, 50, 75 and 100 micron." },
        { icon: "tag", title: "Custom and OEM", text: "Other widths, thicknesses and roll lengths made to order, under our brand or yours." },
      ],
    },
    {
      type: "table",
      title: "Roll weight by thickness (kg per roll)",
      columns: ["Width × roll length", ...thicknesses],
      rows: [
        ["750 mm × 800 m", "11.4", "13.8", "16.6", "27.6", "41.4", "55.2"],
        ["1000 mm × 400 m", "7.5", "9.3", "11.2", "18.6", "27.9", "37.2"],
        ["1200 mm × 400 m", "9.2", "11.5", "13.8", "23.0", "34.5", "46.0"],
      ],
      minWidth: 720,
      note: "Other widths, thicknesses and roll lengths are made to order.",
    },
    {
      type: "packing",
      items: [
        { label: "Packing", value: "Rolls" },
        { label: "Per 40′ container", value: "Confirmed in your quotation" },
        { label: "Lead time", value: "From stock, or 7 days if made to order" },
        { label: "Shipping terms", value: "Ex Factory, FOB or CIF · Mundra Port" },
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
    intro: "For mulch film. We reply with price and dispatch time.",
    fields: [
      {
        grid: [
          { id: "wd", label: "Width", type: "select", options: ["1000 mm", "750 mm", "1200 mm", "Custom"] },
          { id: "th", label: "Thickness", type: "select", options: ["25 micron", "20 micron", "30 micron", "50 micron", "75 micron", "100 micron", "Custom"] },
        ],
      },
      { id: "qty", label: "Quantity", placeholder: "rolls or containers" },
      { id: "dest", label: "Destination country and port", placeholder: "e.g. Mombasa, Kenya" },
    ],
  },
};

export default mulchFilm;
