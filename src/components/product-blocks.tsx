import Link from "next/link";
import type { Block } from "@/data/types";
import { ProductIcon } from "./icons";
import { H2, Rich } from "./ui";

const grid = (min: number) => ({ gridTemplateColumns: `repeat(auto-fit, minmax(min(${min}px, 100%), 1fr))` });

export function ProductBlock({ block }: { block: Block }) {
  switch (block.type) {
    case "features":
      return (
        <div className="grid gap-3" style={grid(block.min ?? 190)}>
          {block.items.map((f) => (
            <div key={f.title} className="flex flex-col gap-3.5 rounded-[20px] bg-paper p-6">
              <span className="flex size-[52px] items-center justify-center rounded-[14px] bg-wheat">
                <ProductIcon name={f.icon} size={30} />
              </span>
              <p className="m-0 font-display text-xl leading-[1.25] font-extrabold">{f.title}</p>
              <p className="m-0 text-[15px] leading-[1.6] text-ink">
                <Rich text={f.text} />
              </p>
            </div>
          ))}
        </div>
      );

    case "table":
      return (
        <div className="flex flex-col gap-4">
          <H2 size="md">{block.title}</H2>
          <div className="overflow-x-auto rounded-[20px] bg-paper px-3 py-2" tabIndex={0} role="region" aria-label={block.title}>
            <table className="w-full border-collapse" style={{ minWidth: block.minWidth ?? 560 }}>
              <thead>
                <tr>
                  {block.columns.map((c, i) => (
                    <th
                      key={i}
                      scope="col"
                      className="border-b-[1.5px] border-forest px-4 py-3.5 text-left align-bottom text-[13px] font-semibold tracking-[0.06em] text-muted uppercase"
                    >
                      {c || <span className="sr-only">Specification</span>}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {block.rows.map((row, ri) => (
                  <tr key={ri} className="transition-colors hover:bg-[#f0ede0]">
                    {row.map((cell, ci) =>
                      ci === 0 ? (
                        <th
                          key={ci}
                          scope="row"
                          className="border-b border-line px-4 py-[15px] text-left align-top text-[15px] leading-[1.55] font-semibold whitespace-nowrap"
                        >
                          <Rich text={cell} />
                        </th>
                      ) : (
                        <td key={ci} className="border-b border-line px-4 py-[15px] align-top text-[15px] leading-[1.55]">
                          <Rich text={cell} />
                        </td>
                      ),
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {block.note && (
            <p className="m-0 text-[14.5px] leading-[1.6] text-muted">
              <Rich text={block.note} />
            </p>
          )}
        </div>
      );

    case "steps":
      return (
        <div className="flex flex-col gap-4">
          <H2 size="md">{block.title}</H2>
          <ol className="m-0 grid list-none gap-3 p-0" style={grid(190)}>
            {block.items.map((s, i) => (
              <li key={s.title} className="flex flex-col gap-2.5 rounded-[20px] bg-paper p-[22px]">
                <span className="font-display text-[22px] font-extrabold text-label">{String(i + 1).padStart(2, "0")}</span>
                <p className="m-0 font-display text-lg font-extrabold">{s.title}</p>
                <p className="m-0 text-[15px] leading-[1.6] text-ink">
                  <Rich text={s.text} />
                </p>
              </li>
            ))}
          </ol>
        </div>
      );

    case "packing":
      return (
        <div className="flex flex-col gap-4">
          <H2 size="md">Packing &amp; dispatch</H2>
          <dl className="m-0 grid gap-3" style={grid(190)}>
            {block.items.map((p) => (
              <div key={p.label} className="flex flex-col gap-1.5 rounded-[18px] border border-line px-[22px] py-5">
                <dt className="text-sm text-muted">{p.label}</dt>
                <dd className="m-0 leading-[1.6] font-semibold [&_.ph]:whitespace-normal [&_.ph]:[box-decoration-break:clone]">
                  <Rich text={p.value} />
                </dd>
              </div>
            ))}
          </dl>
        </div>
      );

    case "related":
      return (
        <div className="flex flex-col gap-4">
          <H2 size="md">Complete the system</H2>
          <div className="grid gap-3" style={grid(block.min ?? 300)}>
            {block.items.map((r) => (
              <Link
                key={r.slug}
                href={`/products/${r.slug}`}
                className="group flex items-center gap-3.5 rounded-2xl border border-line p-4 text-forest no-underline transition-colors hover:border-forest hover:bg-paper"
              >
                <span className="flex size-12 flex-none items-center justify-center rounded-xl bg-sage-tint">
                  <ProductIcon name={r.icon} size={28} />
                </span>
                <span className="flex min-w-0 flex-col gap-0.5">
                  <span className="font-semibold">{r.title}</span>
                  <span className="text-sm text-muted">{r.text}</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      );
  }
}
