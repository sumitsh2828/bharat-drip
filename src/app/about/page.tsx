import type { Metadata } from "next";
import { ArrowIcon, CheckIcon, WhatsAppIcon } from "@/components/icons";
import { ButtonLink, Eyebrow, H2, Lead, PageHero, Rich } from "@/components/ui";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "About, quality & exports",
  description:
    "Bharat Drip Irrigation and Agro has made drip and sprinkler irrigation systems in Rajasthan since 2012. BIS-certified product lines, exporting to the Middle East and South Asia.",
};

const facts = [
  { label: "Founded", value: "2012" },
  { label: "Factory", value: "RIICO Industrial Area, Bindayaka, Rajasthan" },
  { label: "Production capacity", value: "[e.g. km of lateral per year]" },
  { label: "Exporting to", value: "Middle East, Sri Lanka, Nepal, Bhutan" },
];

const certs = [
  { title: "Drip laterals", text: "BIS IS 13488 · CML [no.]" },
  { title: "Drippers", text: "BIS IS 13487" },
  { title: "Mini sprinkler laterals", text: "BIS IS 12786" },
  { title: "HDPE pipes", text: "BIS IS 14151 · CML 2738467" },
  { title: "PVC pipes", text: "BIS IS 4985 · CML 84002504" },
  { title: "Quality management", text: "ISO [standard] · Cert. [no.]" },
];

const ordering = [
  { title: "Send your requirement", text: "Products, sizes, quantity and destination port, by form, WhatsApp or email." },
  { title: "Receive a quotation", text: "Pricing, packing details and dispatch date for your order." },
  { title: "Confirm the order", text: "Standard items ship from stock; custom sizes are made to order." },
  { title: "Dispatch", text: "Packed for sea freight and shipped [FOB / CIF] from [port]." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        trail={[{ href: "/", label: "Home" }, { label: "About us" }]}
        title="Making irrigation systems in Rajasthan since 2012"
        lead="Bharat Drip Irrigation and Agro has made drip and sprinkler irrigation systems since 2012. From our factory in the RIICO Industrial Area at Bindayaka, we supply distributors and large farms in India and abroad."
      />

      <section aria-label="Company facts" className="pb-[clamp(64px,7vw,96px)]">
        <div className="wrap">
          <dl className="m-0 grid grid-cols-[repeat(auto-fit,minmax(min(240px,100%),1fr))] gap-3">
            {facts.map((f) => (
              <div key={f.label} className="flex flex-col gap-2 rounded-[20px] bg-paper px-[26px] py-6">
                <dt className="text-sm text-muted">{f.label}</dt>
                <dd className="m-0 font-display text-[21px] leading-[1.35] font-extrabold">
                  <Rich text={f.value} />
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section id="quality" aria-labelledby="ql-h" className="bg-wheat py-[clamp(72px,8vw,112px)]">
        <div className="wrap flex flex-col gap-10">
          <div className="flex max-w-[720px] flex-col gap-4">
            <Eyebrow>Quality</Eyebrow>
            <H2 id="ql-h">Certified to Indian and international standards</H2>
            <Lead>Our main product lines carry BIS certification, and our processes follow ISO quality management.</Lead>
          </div>
          <ul className="m-0 grid list-none grid-cols-[repeat(auto-fit,minmax(min(320px,100%),1fr))] gap-3 p-0">
            {certs.map((c) => (
              <li key={c.title} className="flex items-start gap-3.5 rounded-[18px] bg-paper px-6 py-[22px]">
                <span className="flex size-9 flex-none items-center justify-center rounded-full bg-sage text-forest">
                  <CheckIcon size={20} />
                </span>
                <div className="flex flex-col gap-1.5">
                  <p className="m-0 text-[16.5px] font-semibold">{c.title}</p>
                  <p className="m-0 text-[14.5px] leading-[1.8] text-ink">
                    <Rich text={c.text} />
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="export" aria-labelledby="ex-h" className="py-[clamp(72px,8vw,112px)]">
        <div className="wrap flex flex-col gap-12">
          <div className="flex flex-wrap gap-[clamp(32px,5vw,72px)]">
            <div className="flex min-w-0 flex-[1.2_1_420px] flex-col gap-4">
              <Eyebrow>Exports</Eyebrow>
              <H2 id="ex-h">
                Already exporting
                <br />
                Now appointing distributors
              </H2>
              <Lead>
                We ship irrigation systems to the Middle East, Sri Lanka, Nepal and Bhutan, and greenhouses to other Asian
                countries. We are now appointing distributors in Europe, the United States and Africa.
              </Lead>
            </div>
            <div className="flex min-w-0 flex-[1_1_320px] flex-col gap-4 self-start rounded-3xl bg-forest p-7 text-cream">
              <p className="m-0 font-display text-[22px] leading-[1.25] font-extrabold">Become a Bharat Drip distributor</p>
              <p className="m-0 text-[15.5px] leading-[1.6] text-mist">
                Tell us about your business and the region you cover. We’ll send the catalogue and distributor terms.
              </p>
              <div className="flex flex-wrap gap-2.5">
                <ButtonLink href="/contact?role=Distributor+or+dealer" icon={<ArrowIcon />}>
                  Apply now
                </ButtonLink>
                <ButtonLink href={site.whatsapp.href} variant="outline-light" icon={<WhatsAppIcon />}>
                  WhatsApp
                </ButtonLink>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <H2 size="sm">How ordering works</H2>
            <ol className="m-0 grid list-none grid-cols-[repeat(auto-fit,minmax(min(240px,100%),1fr))] gap-3 p-0">
              {ordering.map((s, i) => (
                <li key={s.title} className="flex flex-col gap-2.5 rounded-[20px] bg-paper p-6">
                  <span className="font-display text-2xl font-extrabold text-label">{String(i + 1).padStart(2, "0")}</span>
                  <p className="m-0 font-display text-[19px] font-extrabold">{s.title}</p>
                  <p className="m-0 text-[15px] leading-[1.6] text-ink">
                    <Rich text={s.text} />
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </>
  );
}
