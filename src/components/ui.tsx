import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { ArrowIcon } from "./icons";

/* ------------------------------------------------------------------ */
/* Rich text: renders [bracketed] segments as placeholder chips         */
/* ------------------------------------------------------------------ */

export function Rich({ text }: { text: string }) {
  const parts = text.split(/(\[[^\]]+\])/g).filter(Boolean);
  return (
    <>
      {parts.map((part, i) =>
        part.startsWith("[") && part.endsWith("]") ? (
          <span key={i} className="ph" title="To be supplied">
            {part}
          </span>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </>
  );
}

/* ------------------------------------------------------------------ */
/* Buttons                                                              */
/* ------------------------------------------------------------------ */

type Variant = "gold" | "dark" | "outline" | "outline-light";

const variants: Record<Variant, string> = {
  gold: "bg-gold border-gold text-forest hover:bg-gold-hover hover:border-gold-hover hover:text-forest",
  dark: "bg-forest border-forest text-cream hover:bg-forest-hover hover:border-forest-hover hover:text-cream",
  outline: "bg-transparent border-forest text-forest hover:bg-forest hover:text-cream",
  "outline-light": "bg-transparent border-cream text-cream hover:bg-cream hover:text-forest",
};

const buttonBase =
  "inline-flex items-center justify-center gap-2.5 min-h-[52px] px-6 box-border rounded-xl border-[1.5px] font-sans font-semibold text-base leading-[1.2] no-underline whitespace-nowrap transition-[background-color,border-color,color,transform] duration-150 active:translate-y-px";

export function buttonClass(variant: Variant = "gold", extra = "") {
  return `${buttonBase} ${variants[variant]} ${extra}`;
}

export function ButtonLink({
  href,
  variant = "gold",
  icon,
  children,
  className = "",
  ...rest
}: {
  href: string;
  variant?: Variant;
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
} & Omit<ComponentProps<"a">, "href">) {
  const external = /^(https?:|mailto:|tel:)/.test(href);
  const cls = buttonClass(variant, className);
  const content = (
    <>
      {icon}
      <span>{children}</span>
    </>
  );
  if (external) {
    return (
      <a
        href={href}
        className={cls}
        {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...rest}
      >
        {content}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {content}
    </Link>
  );
}

export const Arrow = ({ size = 20 }: { size?: number }) => <ArrowIcon size={size} />;

/* ------------------------------------------------------------------ */
/* Section headings                                                     */
/* ------------------------------------------------------------------ */

export function Eyebrow({ children, className = "text-label" }: { children: ReactNode; className?: string }) {
  return <p className={`eyebrow ${className}`}>{children}</p>;
}

export function H2({
  id,
  children,
  className = "",
  size = "lg",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  size?: "lg" | "md" | "sm";
}) {
  const sizes = {
    lg: "text-[clamp(30px,3.4vw,46px)]",
    md: "text-[clamp(26px,2.8vw,34px)]",
    sm: "text-[clamp(24px,2.6vw,32px)]",
  };
  return (
    <h2
      id={id}
      className={`m-0 font-display font-extrabold leading-[1.08] tracking-[-0.02em] text-balance ${sizes[size]} ${className}`}
    >
      {children}
    </h2>
  );
}

export function Lead({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <p className={`m-0 max-w-[640px] text-lg leading-[1.6] text-ink text-pretty ${className}`}>{children}</p>;
}

/* ------------------------------------------------------------------ */
/* Breadcrumb + inner page hero                                         */
/* ------------------------------------------------------------------ */

export function Breadcrumb({ trail }: { trail: { href?: string; label: string }[] }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="m-0 flex list-none flex-wrap items-center gap-2.5 p-0 text-sm">
        {trail.map((item, i) => (
          <li key={item.label} className="flex items-center gap-2.5">
            {i > 0 && (
              <span aria-hidden="true" className="text-line">
                /
              </span>
            )}
            {item.href ? (
              <Link href={item.href} className="text-muted no-underline hover:text-forest hover:underline">
                {item.label}
              </Link>
            ) : (
              <span aria-current="page" className="font-semibold text-forest">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function PageHero({
  trail,
  title,
  lead,
  children,
}: {
  trail: { href?: string; label: string }[];
  title: string;
  lead: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="pt-14 pb-10">
      <div className="wrap flex flex-col gap-5">
        <Breadcrumb trail={trail} />
        <h1 className="m-0 font-display text-[clamp(38px,4.6vw,62px)] leading-[1.04] font-extrabold tracking-[-0.025em] text-balance">
          {title}
        </h1>
        <p className="m-0 max-w-[720px] text-[19px] leading-[1.6] text-ink text-pretty">{lead}</p>
        {children}
      </div>
    </section>
  );
}
