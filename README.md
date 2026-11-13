# Bharat Drip: website

This is a Next.js (App Router) and Tailwind CSS v4 build of the Bharat Drip Irrigation & Agro website design.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start
```

## Pages

| URL | File |
| --- | --- |
| `/` | `src/app/page.tsx` |
| `/products` | `src/app/products/page.tsx` (data: `src/data/catalogue.ts`) |
| `/products/<line>` (13 pages) | `src/app/products/[slug]/page.tsx` (data: `src/data/products/*.ts`) |
| `/about` (`#quality`, `#export`) | `src/app/about/page.tsx` |
| `/contact` | `src/app/contact/page.tsx` |

Each product line page is built from one data file. You can edit the text, tables, packing details, related products and quote-form fields there without touching any markup.

## Placeholders

Any text in `[square brackets]` shows up as a dashed gold chip. It marks a fact the business still has to supply, such as an ISO certificate number, a lead time or a coil length. To find them all:

```bash
grep -rn "\[" src/data src/app --include=*.ts --include=*.tsx | grep -v "\[slug\]"
```

## Quote forms

The forms post to `src/app/api/enquiry/route.ts`, which sends the enquiry to info@bharatdrip.com through Amazon SES (ap-south-1). The domain bharatdrip.com is verified in SES, and the Amplify app's compute role `bharat-drip-amplify-compute` grants `ses:SendEmail`. To send to a different inbox or from a different address, set `ENQUIRY_TO` or `ENQUIRY_FROM`.

If the API route cannot be reached, the form opens the visitor's own email app with the enquiry already filled in, so no request is lost. Every form also has a WhatsApp link that sends the same details to wa.me/14046606757.

## Design tokens

The colours, fonts and the 900px mobile breakpoint (the `nav:` variant) are defined in `src/app/globals.css` under `@theme`. The fonts (Inter and Plus Jakarta Sans) are self-hosted through `@fontsource`, so the site makes no calls to Google Fonts.
