import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowIcon, PinIcon, ProductIcon, WhatsAppIcon, type IconName } from "@/components/icons";
import { LateralConfigurator } from "@/components/lateral-configurator";
import { ButtonLink, Eyebrow, H2, Lead, Rich } from "@/components/ui";
import { site } from "@/data/site";

const facts = [
  { title: "Since 2012", text: "Manufacturing irrigation systems in Rajasthan, India." },
  { title: "BIS & ISO", text: "BIS-certified to IS 13487, 13488, 12786, 14151 and 4985. ISO [standard]" },
  { title: "Exporting", text: "To the Middle East, Sri Lanka, Nepal and Bhutan." },
  { title: "Custom sizes", text: "Diameter, wall thickness and spacing made to your order." },
];

const featured: { slug: string; icon: IconName; title: string; text: string; spec: string }[] = [
  { slug: "drip-laterals", icon: "laterals", title: "Drip laterals", text: "Inline round, inline flat and online.", spec: "12, 16, 20 mm · 2 / 4 LPH · 20–100 cm spacing" },
  { slug: "hdpe-pipes", icon: "hdpe", title: "HDPE pipes", text: "Mainline and quick-coupled sprinkler pipe.", spec: "50–200 mm · 2.5 to 6 kg/cm²" },
  { slug: "pvc-pipes", icon: "pvc", title: "PVC pipes", text: "Mainline and distribution pipe.", spec: "20–110 mm · 2.5 to 10 kg/cm²" },
  { slug: "mini-sprinklers", icon: "mini", title: "Mini sprinkler systems", text: "32 mm laterals, nozzle-raiser sets and fittings.", spec: "32 mm · saddles 63–90 mm" },
];

const more: { slug: string; icon: IconName; title: string; text: string }[] = [
  { slug: "drippers", icon: "dripper", title: "Drippers", text: "Online drippers, 4–8 LPH" },
  { slug: "filters", icon: "filter", title: "Filters", text: "Screen, disc, hydrocyclone, sand · 2″–5″" },
  { slug: "fertigation", icon: "fertigation", title: "Fertigation", text: "Venturi injectors, 30–90 L tanks, headers" },
  { slug: "valves", icon: "valve", title: "Valves & fittings", text: "Ball, air-release, flush and non-return valves" },
  { slug: "sprinklers", icon: "sprinkler", title: "Sprinklers & rain guns", text: "Gun-metal, brass, plastic nozzles · 1¼″–3″ guns" },
  { slug: "greenhouses", icon: "greenhouse", title: "Greenhouses & films", text: "Structures, poly and mulch film, nets" },
  { slug: "pond-lining", icon: "pond", title: "Pond lining", text: "Farm pond liners, cut to size" },
];

const system = [
  { title: "Filtration", text: "Screen, disc, sand and hydrocyclone filters keep emitters clear." },
  { title: "Fertigation", text: "Venturi injectors and fertiliser tanks feed through the line." },
  { title: "Mainline", text: "HDPE and PVC pipes from 20 to 200 mm carry the water." },
  { title: "Control", text: "Valves, gauges and header assemblies manage pressure." },
  { title: "Laterals", text: "Drip and mini-sprinkler lines run along every row." },
  { title: "To the plant", text: "Drippers, sprinklers and rain guns deliver each drop." },
];

const reasons = [
  { title: "Quality you can check", text: "Product lines certified by BIS to IS 13487, 13488, 12786, 14151 and 4985, made under ISO [standard] quality management." },
  { title: "Factory-direct pricing", text: "We make what we sell, so there is no trader’s margin in your price. Quotations on request." },
  { title: "Custom sizes", text: "Wall thickness, dripper spacing, pipe class and raiser length made to your order." },
  { title: "Quick dispatch", text: "Standard items from stock; made-to-order runs in [X] days." },
  { title: "Support that answers", text: "Talk to our team directly on WhatsApp or phone, before and after your order." },
];

const heroSpecs = [
  ["Diameter", "12 · 16 · 20 mm"],
  ["Wall", "0.20–1.20 mm"],
  ["Flow", "2 or 4 LPH"],
  ["Spacing", "20–100 cm"],
];

function Pill({ children, gold }: { children: ReactNode; gold?: boolean }) {
  return (
    <span
      className={`inline-flex min-h-10 items-center gap-2 rounded-full border px-4 text-[15px] font-semibold whitespace-nowrap ${
        gold ? "border-gold bg-gold" : "border-line bg-paper-2"
      }`}
    >
      <PinIcon size={16} />
      {children}
    </span>
  );
}

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-[clamp(40px,5vw,72px)] pb-[clamp(40px,4vw,56px)]">
        <div className="wrap flex flex-wrap items-stretch gap-[clamp(32px,4vw,64px)]">
          <div className="flex min-w-0 flex-[1.15_1_500px] animate-fade-up flex-col justify-center gap-7">
            <Eyebrow>Drip · Sprinkler · Pipes · Made in India</Eyebrow>
            <h1 className="m-0 font-display text-[clamp(38px,4.5vw,66px)] leading-[1.02] font-extrabold tracking-[-0.03em] text-balance">
              Complete drip and sprinkler systems made in India to your specification
            </h1>
            <p className="m-0 max-w-[580px] text-[19px] leading-[1.6] text-ink text-pretty">
              We manufacture drip laterals, filters, fittings, sprinklers, HDPE and PVC pipes at our own factory in
              Rajasthan, and ship them to distributors and large farms abroad. Certified quality, factory-direct pricing,
              custom sizes and quick dispatch.
            </p>
            <div className="flex flex-wrap gap-3">
              <ButtonLink href="/contact" icon={<ArrowIcon />}>
                Request a quote
              </ButtonLink>
              <ButtonLink href={site.whatsapp.href} variant="outline" icon={<WhatsAppIcon />}>
                Chat on WhatsApp
              </ButtonLink>
            </div>
            <p className="m-0 text-[15px] text-muted">
              Prefer to call?{" "}
              <a href={site.phone.href} className="font-semibold text-forest underline hover:text-[#3a5a40]">
                {site.phone.display}
              </a>{" "}
              ·{" "}
              <a href={site.email.href} className="font-semibold text-forest underline hover:text-[#3a5a40]">
                {site.email.display}
              </a>
            </p>
          </div>

          <div className="relative min-h-[400px] min-w-0 flex-[1_1_420px] overflow-hidden rounded-[28px] bg-forest nav:min-h-[560px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/hero-art.svg" alt="" aria-hidden="true" className="absolute inset-0 size-full object-cover" />
            <div className="absolute inset-x-5 bottom-5 flex justify-start">
              <div className="box-border flex w-full max-w-[340px] animate-fade-up flex-col gap-3.5 rounded-[18px] bg-paper px-6 py-[22px] shadow-[0_20px_40px_-20px_rgba(0,0,0,0.5)] [animation-delay:150ms]">
                <Eyebrow>Made to order</Eyebrow>
                <p className="m-0 font-display text-[21px] leading-[1.2] font-extrabold">Inline flat drip lateral</p>
                <dl className="m-0 flex flex-col gap-2 text-[14.5px]">
                  {heroSpecs.map(([k, v]) => (
                    <div key={k} className="flex justify-between gap-4 border-t border-line pt-2">
                      <dt className="text-muted">{k}</dt>
                      <dd className="m-0 text-right font-semibold">{v}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key facts */}
      <section aria-label="Key facts" className="pb-[clamp(64px,7vw,104px)]">
        <div className="wrap">
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(160px,100%),1fr))] gap-3">
            {facts.map((f) => (
              <div key={f.title} className="flex flex-col gap-2 rounded-[20px] bg-paper px-[26px] py-6">
                <p className="m-0 font-display text-2xl font-extrabold tracking-[-0.01em]">{f.title}</p>
                <p className="m-0 text-[15px] leading-[1.55] text-muted">
                  <Rich text={f.text} />
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product range */}
      <section aria-labelledby="range-h" className="pb-[clamp(72px,8vw,112px)]">
        <div className="wrap flex flex-col gap-10">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="flex max-w-[720px] flex-col gap-4">
              <Eyebrow>Product range</Eyebrow>
              <H2 id="range-h">Every part of a drip or sprinkler system from one factory</H2>
              <Lead>Order a single product line or a complete system. Every component is made to work with the others.</Lead>
            </div>
            <ButtonLink href="/products" variant="outline" icon={<ArrowIcon />}>
              View full catalogue
            </ButtonLink>
          </div>

          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(260px,100%),1fr))] gap-4">
            {featured.map((p) => (
              <Link
                key={p.slug}
                href={`/products/${p.slug}`}
                className="group flex flex-col gap-[18px] rounded-[22px] bg-paper p-7 text-forest no-underline ring-1 ring-transparent transition-[box-shadow,transform] duration-200 hover:-translate-y-1 hover:shadow-[0_18px_40px_-24px_rgba(20,36,24,0.45)] hover:ring-line"
              >
                <span className="flex size-[68px] items-center justify-center rounded-[18px] bg-wheat transition-colors group-hover:bg-gold">
                  <ProductIcon name={p.icon} size={38} />
                </span>
                <span className="flex flex-col gap-2">
                  <span className="font-display text-[22px] leading-[1.2] font-extrabold">{p.title}</span>
                  <span className="text-[15.5px] leading-[1.55] text-ink">{p.text}</span>
                </span>
                <span className="text-sm leading-[1.5] font-semibold text-label">{p.spec}</span>
                <span className="mt-auto inline-flex items-center gap-2 text-[15px] font-semibold">
                  View range
                  <ArrowIcon size={18} className="transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>

          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(270px,100%),1fr))] gap-3">
            {more.map((p) => (
              <Link
                key={p.slug}
                href={`/products/${p.slug}`}
                className="group flex items-center gap-4 rounded-2xl border border-line px-[18px] py-4 text-forest no-underline transition-colors hover:border-forest hover:bg-paper"
              >
                <span className="flex size-[52px] flex-none items-center justify-center rounded-[14px] bg-sage-tint">
                  <ProductIcon name={p.icon} size={30} />
                </span>
                <span className="flex min-w-0 flex-col gap-0.5">
                  <span className="text-[16.5px] font-semibold">{p.title}</span>
                  <span className="text-sm leading-[1.45] text-muted">{p.text}</span>
                </span>
              </Link>
            ))}
            <Link
              href="/products"
              className="group flex items-center justify-between gap-4 rounded-2xl bg-forest px-[22px] py-4 text-cream no-underline transition-colors hover:bg-forest-hover hover:text-cream"
            >
              <span className="flex flex-col gap-0.5">
                <span className="text-[16.5px] font-semibold">Full catalogue</span>
                <span className="text-sm text-mist">Every product, size and model no.</span>
              </span>
              <ArrowIcon size={22} className="text-gold transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* From source to root */}
      <section aria-labelledby="sys-h" className="bg-wheat py-[clamp(72px,8vw,112px)]">
        <div className="wrap flex flex-col gap-12">
          <div className="flex max-w-[760px] flex-col gap-4">
            <Eyebrow>From source to root</Eyebrow>
            <H2 id="sys-h">One supplier for the whole system</H2>
            <Lead>Distributors can fill a container with everything a farm needs: one supplier, one quality standard, one shipment.</Lead>
          </div>
          <ol className="m-0 grid list-none grid-cols-[repeat(auto-fit,minmax(min(180px,100%),1fr))] gap-x-0 gap-y-8 p-0">
            {system.map((s, i) => (
              <li key={s.title} className="flex flex-col gap-4 pr-5">
                <div className="flex items-center">
                  <span className="flex size-11 flex-none items-center justify-center rounded-full bg-forest font-display text-base font-extrabold text-cream">
                    {i + 1}
                  </span>
                  {i < system.length - 1 && (
                    <span aria-hidden="true" className="mr-[-20px] ml-3 h-0 flex-1 border-t-[3px] border-dotted border-ochre" />
                  )}
                </div>
                <p className="m-0 font-display text-[19px] font-extrabold">{s.title}</p>
                <p className="m-0 text-[15px] leading-[1.55] text-ink">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Made to order */}
      <section aria-labelledby="mto-h" className="bg-forest py-[clamp(72px,8vw,112px)] text-cream">
        <div className="wrap flex flex-wrap items-center gap-[clamp(40px,5vw,72px)]">
          <div className="flex min-w-0 flex-[1_1_400px] flex-col gap-6">
            <Eyebrow className="text-gold">Made to order</Eyebrow>
            <h2
              id="mto-h"
              className="m-0 font-display text-[clamp(32px,3.8vw,52px)] leading-[1.05] font-extrabold tracking-[-0.02em] text-cream text-balance"
            >
              Tell us the field
              <br />
              We’ll make the lateral
            </h2>
            <p className="m-0 max-w-[640px] text-lg leading-[1.6] text-mist text-pretty">
              Choose the diameter, wall thickness, flow rate and dripper spacing that suit your crop, soil and budget. We
              run it on our own lines and pack it for export.
            </p>
            <div className="flex flex-wrap gap-3">
              <ButtonLink href="/contact" icon={<ArrowIcon />}>
                Send us your specification
              </ButtonLink>
              <ButtonLink href="/products/drip-laterals" variant="outline-light">
                See drip laterals
              </ButtonLink>
            </div>
          </div>
          <LateralConfigurator />
        </div>
      </section>

      {/* Why */}
      <section aria-labelledby="why-h" className="py-[clamp(72px,8vw,112px)]">
        <div className="wrap flex flex-wrap gap-[clamp(32px,5vw,80px)]">
          <div className="flex min-w-0 flex-[1_1_340px] flex-col gap-4 nav:sticky nav:top-8 nav:self-start">
            <Eyebrow>Why Bharat Drip</Eyebrow>
            <H2 id="why-h">What buyers get from us</H2>
            <Lead className="max-w-[420px]">Five reasons distributors and large farms order from Bharat Drip.</Lead>
          </div>
          <ol className="m-0 flex min-w-0 flex-[1.7_1_520px] list-none flex-col p-0">
            {reasons.map((r, i) => (
              <li key={r.title} className="flex gap-6 border-t border-line py-6">
                <span className="w-11 flex-none font-display text-2xl leading-[1.2] font-extrabold text-label">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex flex-col gap-1.5">
                  <p className="m-0 font-display text-[21px] leading-[1.25] font-extrabold">{r.title}</p>
                  <p className="m-0 text-base leading-[1.6] text-ink">
                    <Rich text={r.text} />
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Exports */}
      <section aria-labelledby="exp-h" className="pb-[clamp(72px,8vw,112px)]">
        <div className="wrap">
          <div className="flex flex-wrap gap-[clamp(32px,4vw,56px)] rounded-[28px] bg-paper p-[clamp(28px,4vw,56px)]">
            <div className="flex min-w-0 flex-[1.2_1_380px] flex-col gap-5">
              <Eyebrow>Exports</Eyebrow>
              <H2 id="exp-h">From Rajasthan to farms abroad</H2>
              <Lead>
                We already supply buyers across South Asia and the Middle East, and we are now appointing distributors in
                Europe, the United States and Africa.
              </Lead>
              <div>
                <ButtonLink href="/contact?role=Distributor+or+dealer" variant="dark" icon={<ArrowIcon />}>
                  Become a distributor
                </ButtonLink>
              </div>
            </div>
            <div className="flex min-w-0 flex-[1_1_340px] flex-col gap-7">
              <div className="flex flex-col gap-3">
                <p className="m-0 font-semibold">Already shipping to</p>
                <div className="flex flex-wrap gap-2">
                  {["Middle East", "Sri Lanka", "Nepal", "Bhutan"].map((c) => (
                    <Pill key={c}>{c}</Pill>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <p className="m-0 font-semibold">Now appointing distributors in</p>
                <div className="flex flex-wrap gap-2">
                  {["Europe", "United States", "Africa"].map((c) => (
                    <Pill key={c} gold>
                      {c}
                    </Pill>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-2.5 border-t border-line pt-6">
                <p className="m-0 font-semibold">Certifications</p>
                <p className="m-0 text-[15px] leading-[1.8]">
                  <Rich text="BIS: IS 13487, 13488, 12786, 14151, 4985 · ISO [standard & certificate no.]" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <QuoteCta />
    </>
  );
}

function QuoteCta() {
  return (
    <section aria-labelledby="cta-h" className="pb-[clamp(72px,8vw,112px)]">
      <div className="wrap">
        <div className="flex flex-wrap items-center justify-between gap-10 rounded-[28px] bg-wheat p-[clamp(32px,5vw,64px)]">
          <div className="flex min-w-0 flex-[1_1_420px] flex-col gap-4">
            <h2
              id="cta-h"
              className="m-0 font-display text-[clamp(30px,3.6vw,48px)] leading-[1.06] font-extrabold tracking-[-0.02em] text-balance"
            >
              Tell us what you need
              <br />
              We’ll send a quotation
            </h2>
            <p className="m-0 max-w-[560px] text-lg leading-[1.6] text-ink text-pretty">
              Send the products, sizes, quantity and destination port. We reply with pricing, packing details and
              dispatch time.
            </p>
          </div>
          <div className="flex flex-[0_1_360px] flex-col gap-3">
            <ButtonLink href="/contact" variant="dark" icon={<ArrowIcon />}>
              Request a quote
            </ButtonLink>
            <ButtonLink href={site.whatsapp.href} variant="outline" icon={<WhatsAppIcon />}>
              WhatsApp {site.whatsapp.display}
            </ButtonLink>
            <p className="mt-1 mb-0 text-center text-[15px] text-ink">
              or call{" "}
              <a href={site.phone.href} className="font-semibold underline">
                {site.phone.display}
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
