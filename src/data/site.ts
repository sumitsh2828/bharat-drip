export const site = {
  name: "Bharat Drip",
  legalName: "Bharat Drip Irrigation and Agro",
  tagline: "Manufacturer, exporter & OEM supplier of drip and sprinkler irrigation systems · since 2012",
  url: "https://bharatdrip.com",
  whatsapp: {
    display: "+1 404 660 6757",
    href: "https://wa.me/14046606757",
    number: "14046606757",
  },
  phone: { display: "+91 86195 62546", href: "tel:+918619562546" },
  email: { display: "info@bharatdrip.com", href: "mailto:info@bharatdrip.com" },
  address: "G1-185, Road No. 10, RIICO Industrial Area, Bindayaka, Sirsi Road, Jaipur, Rajasthan 302012, India",
  mapsHref:
    "https://www.google.com/maps/search/?api=1&query=G1-185+Road+No+10+RIICO+Industrial+Area+Bindayaka+Sirsi+Road+Jaipur+Rajasthan+302012",
  standards: "BIS IS 4984 · 4985 · 12786 · 13487 · 13488 · 17425 · ISO 9001:2015",
};

export const mainNav = [
  { href: "/products", label: "Products" },
  { href: "/about", label: "About us" },
  { href: "/about#export", label: "Exports" },
  { href: "/contact", label: "Contact" },
];

export const footerProducts = [
  { href: "/products/drip-laterals", label: "Drip laterals" },
  { href: "/products/hdpe-pipes", label: "HDPE pipes" },
  { href: "/products/pvc-pipes", label: "PVC pipes" },
  { href: "/products/mini-sprinklers", label: "Mini sprinkler systems" },
  { href: "/products/filters", label: "Filters" },
  { href: "/products", label: "Full catalogue" },
];

export const footerCompany = [
  { href: "/about", label: "About us" },
  { href: "/about#quality", label: "Quality & certifications" },
  { href: "/about#export", label: "Exports" },
  { href: "/#oem", label: "Custom & OEM" },
  { href: "/contact", label: "Become a distributor" },
  { href: "/contact", label: "Request a quote" },
];

/** Builds a wa.me link with a pre-filled message. */
export function whatsappLink(text?: string) {
  return text
    ? `${site.whatsapp.href}?text=${encodeURIComponent(text)}`
    : site.whatsapp.href;
}
