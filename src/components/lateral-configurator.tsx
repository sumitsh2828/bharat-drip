"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowIcon } from "./icons";
import { buttonClass } from "./ui";

const groups = [
  { key: "diameter", label: "Diameter", options: ["12 mm", "16 mm", "20 mm"] },
  {
    key: "wall",
    label: "Wall thickness",
    options: ["0.20", "0.30", "0.40", "0.50", "0.60", "0.70", "0.80", "0.90", "1.00", "1.20", "1.40 mm"],
  },
  { key: "flow", label: "Flow rate", options: ["2 LPH", "4 LPH", "Online drippers 4–8 LPH"] },
  {
    key: "spacing",
    label: "Dripper spacing",
    options: ["20", "30", "40", "50", "60", "70", "80", "90", "100 cm"],
  },
] as const;

type Key = (typeof groups)[number]["key"];

const units: Record<Key, string> = { diameter: "", wall: " mm", flow: "", spacing: " cm" };

/**
 * "Made to order" option chips. In the design these are static pills; here
 * they are selectable, and the chosen spec is carried into the quote form.
 */
export function LateralConfigurator() {
  const [sel, setSel] = useState<Partial<Record<Key, string>>>({});

  const summary = useMemo(() => {
    const parts = groups
      .filter((g) => sel[g.key])
      .map((g) => {
        const v = sel[g.key]!;
        const withUnit = /[a-z]/i.test(v) ? v : v + units[g.key];
        return `${g.label.toLowerCase()} ${withUnit}`;
      });
    return parts.length ? `Drip lateral: ${parts.join(", ")}` : "";
  }, [sel]);

  return (
    <div className="flex min-w-0 flex-[1.1_1_440px] flex-col gap-3">
      {groups.map((g) => (
        <fieldset key={g.key} className="m-0 flex flex-col gap-3.5 rounded-[18px] border-0 bg-forest-2 px-[22px] py-5">
          <legend className="float-left eyebrow p-0 text-[12.5px] text-gold">{g.label}</legend>
          <div className="clear-both flex flex-wrap gap-2">
            {g.options.map((opt) => {
              const on = sel[g.key] === opt;
              return (
                <button
                  key={opt}
                  type="button"
                  aria-pressed={on}
                  onClick={() => setSel((s) => ({ ...s, [g.key]: on ? undefined : opt }))}
                  className={`inline-flex min-h-9 cursor-pointer items-center rounded-full border px-3.5 text-[14.5px] font-medium whitespace-nowrap transition-colors ${
                    on
                      ? "border-gold bg-gold text-forest"
                      : "border-forest-line bg-transparent text-cream hover:border-mist"
                  }`}
                >
                  {opt}
                </button>
              );
            })}
          </div>
        </fieldset>
      ))}
      <div
        aria-live="polite"
        className={`flex flex-wrap items-center justify-between gap-3 overflow-hidden rounded-[18px] border border-dashed border-forest-line px-[22px] transition-all duration-300 ${
          summary ? "max-h-60 py-4 opacity-100" : "max-h-0 border-transparent py-0 opacity-0"
        }`}
      >
        <p className="m-0 min-w-0 flex-1 text-[14.5px] text-mist">
          <span className="font-semibold text-cream">Your spec · </span>
          {summary.replace("Drip lateral: ", "")}
        </p>
        <Link
          href={`/contact?product=${encodeURIComponent("Drip laterals")}&details=${encodeURIComponent(summary)}`}
          className={buttonClass("gold", "min-h-11 px-[18px] text-[15px]")}
          tabIndex={summary ? 0 : -1}
        >
          <ArrowIcon />
          <span>Quote this spec</span>
        </Link>
      </div>
    </div>
  );
}
