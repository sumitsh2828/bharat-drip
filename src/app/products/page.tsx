import type { Metadata } from "next";
import Link from "next/link";
import { ArrowIcon, ProductIcon, WhatsAppIcon } from "@/components/icons";
import { ButtonLink, PageHero, Rich, buttonClass } from "@/components/ui";
import { catalogue } from "@/data/catalogue";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Product catalogue",
  description:
    "Drip, sprinkler and piping products, all made for export, in standard or custom sizes and under our brand or yours (OEM). Every product, size and model number.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        trail={[{ href: "/", label: "Home" }, { label: "Products" }]}
        title="Product catalogue"
        lead="Drip, sprinkler and piping products, all made for export, in standard or custom sizes and under our brand or yours (OEM). Prices are quoted on request, since every order depends on size, quantity and destination."
      >
        <nav aria-label="Product lines" className="mt-2 flex flex-wrap gap-2">
          {catalogue.map((c) => (
            <a
              key={c.slug}
              href={`#${c.slug}`}
              className="inline-flex min-h-10 items-center rounded-full border border-line bg-paper-2 px-3.5 text-[14.5px] font-medium text-forest no-underline transition-colors hover:border-forest hover:bg-paper"
            >
              {c.title}
            </a>
          ))}
        </nav>
      </PageHero>

      <div className="pb-[clamp(72px,8vw,112px)]">
        <div className="wrap flex flex-col gap-4">
          {catalogue.map((c) => (
            <section
              key={c.slug}
              id={c.slug}
              aria-labelledby={`${c.slug}-h`}
              className="flex flex-col gap-5 rounded-3xl bg-paper px-[clamp(20px,3vw,36px)] py-7"
            >
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex min-w-0 items-center gap-4">
                  <span className="flex size-14 flex-none items-center justify-center rounded-2xl bg-wheat">
                    <ProductIcon name={c.icon} size={32} />
                  </span>
                  <div className="flex min-w-0 flex-col gap-1">
                    <h2 id={`${c.slug}-h`} className="m-0 font-display text-[26px] leading-[1.15] font-extrabold tracking-[-0.01em]">
                      {c.title}
                    </h2>
                    <p className="m-0 text-[15px] text-muted">{c.summary}</p>
                  </div>
                </div>
                <Link href={`/products/${c.slug}`} className={buttonClass("outline", "min-h-11 px-[18px] text-[15px]")}>
                  <ArrowIcon />
                  <span>View details</span>
                </Link>
              </div>

              {c.standard && (
                <p className="m-0 text-[14.5px] text-muted">
                  <Rich text={c.standard} />
                </p>
              )}

              <div role="table" aria-label={`${c.title} range`}>
                <div role="rowgroup" className="hidden nav:block">
                  <div role="row" className="flex gap-6 pb-2.5 text-[12.5px] font-semibold tracking-[0.1em] text-muted uppercase">
                    <span role="columnheader" className="flex-[1_1_240px]">Product</span>
                    <span role="columnheader" className="flex-[0_0_150px]">Model no.</span>
                    <span role="columnheader" className="flex-[2_1_320px]">Sizes &amp; details</span>
                  </div>
                </div>
                <div role="rowgroup">
                  {c.rows.map((row) => (
                    <div role="row" key={row.product + row.model} className="flex flex-wrap gap-x-6 gap-y-1 border-t border-line py-4">
                      <span role="cell" className="min-w-0 flex-[1_1_240px] font-semibold">
                        {row.product}
                      </span>
                      <span role="cell" className="flex-[0_0_150px] text-[14.5px] font-semibold text-label tabular-nums">
                        {row.model}
                      </span>
                      <span role="cell" className="min-w-0 flex-[2_1_320px] text-[15px] leading-[1.55] text-ink">
                        {row.details}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          ))}

          <div className="mt-6 flex flex-wrap items-center justify-between gap-6 rounded-[28px] bg-wheat p-[clamp(28px,4vw,48px)]">
            <div className="flex flex-[1_1_380px] flex-col gap-2.5">
              <h2 className="m-0 font-display text-[clamp(26px,3vw,36px)] leading-[1.08] font-extrabold tracking-[-0.02em] text-balance">
                Need a custom size or your own brand?
              </h2>
              <p className="m-0 max-w-[640px] text-lg leading-[1.6] text-ink text-pretty">
                Most of our range can be made to your specification and supplied under your own brand as OEM. Send us the details and we’ll confirm.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <ButtonLink href="/contact" variant="dark" icon={<ArrowIcon />}>
                Request a quote
              </ButtonLink>
              <ButtonLink href={site.whatsapp.href} variant="outline" icon={<WhatsAppIcon />}>
                WhatsApp us
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
