import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductQuoteForm } from "@/components/forms";
import { ProductBlock } from "@/components/product-blocks";
import { PageHero, Rich } from "@/components/ui";
import { getProductPage, productPages } from "@/data/products";

export const dynamicParams = false;

export function generateStaticParams() {
  return productPages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/products/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const page = getProductPage(slug);
  if (!page) return {};
  return { title: page.metaTitle ?? page.title, description: page.lead };
}

export default async function ProductLinePage({ params }: PageProps<"/products/[slug]">) {
  const { slug } = await params;
  const page = getProductPage(slug);
  if (!page) notFound();

  return (
    <>
      <PageHero
        trail={[{ href: "/", label: "Home" }, { href: "/products", label: "Products" }, { label: page.name }]}
        title={page.title}
        lead={page.lead}
      >
        {page.standard && (
          <p className="m-0 text-[15px] text-muted">
            <Rich text={page.standard} />
          </p>
        )}
      </PageHero>

      <div className="pb-[clamp(72px,8vw,112px)]">
        <div className="wrap flex flex-wrap items-start gap-10">
          <div className="flex min-w-0 flex-[999_1_560px] flex-col gap-14">
            {page.blocks.map((block, i) => (
              <ProductBlock key={i} block={block} />
            ))}
          </div>
          <aside aria-labelledby="q-h" className="min-w-0 flex-[1_1_340px] nav:sticky nav:top-6">
            <ProductQuoteForm productName={page.name} intro={page.quote.intro} fields={page.quote.fields} />
          </aside>
        </div>
      </div>
    </>
  );
}
