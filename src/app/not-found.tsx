import { ArrowIcon } from "@/components/icons";
import { ButtonLink } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="py-[clamp(72px,10vw,140px)]">
      <div className="wrap flex max-w-[720px] flex-col items-start gap-6">
        <p className="eyebrow text-label">404</p>
        <h1 className="m-0 font-display text-[clamp(38px,4.6vw,62px)] leading-[1.04] font-extrabold tracking-[-0.025em]">
          This page has run dry
        </h1>
        <p className="m-0 text-[19px] leading-[1.6] text-ink">
          The page you were looking for doesn’t exist or has moved. Try the catalogue, or send us your requirement.
        </p>
        <div className="flex flex-wrap gap-3">
          <ButtonLink href="/products" icon={<ArrowIcon />}>
            View the catalogue
          </ButtonLink>
          <ButtonLink href="/contact" variant="outline">
            Request a quote
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
