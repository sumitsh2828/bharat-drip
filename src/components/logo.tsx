import { useId } from "react";

/** Leaf-drop mark: a sage/gold leaf split by a midrib, cut out with a mask. */
export function LeafDropMark({
  width = 30,
  height = 44,
  mono,
}: {
  width?: number;
  height?: number;
  /** Single colour version (used on dark backgrounds) */
  mono?: string;
}) {
  const id = useId().replace(/:/g, "");
  const mask = `ldm-${id}`;
  return (
    <svg viewBox="8 2 104 154" role="img" aria-label="Bharat Drip leaf-drop mark" width={width} height={height} className="block flex-none">
      <defs>
        <mask id={mask} maskUnits="userSpaceOnUse" x="0" y="0" width="120" height="160">
          <rect width="120" height="160" fill="#fff" />
          <g fill="none" stroke="#000" strokeLinecap="round">
            <path d="M60 4C74 38 100 120 60 152" strokeWidth="5" />
            <path d="M50 138C44 110 44 62 57 28" strokeWidth="4" />
            <path
              d="M46.8 78Q38 68 30 62M46.4 106Q35 97 25 92M46.2 92Q55 84 63 78M47.7 124Q56 116 64 111"
              strokeWidth="3.2"
            />
          </g>
        </mask>
      </defs>
      <g mask={`url(#${mask})`}>
        <path d="M60 6C50 24 12 64 12 104A48 48 0 0 0 60 152C100 120 74 38 60 6Z" fill={mono ?? "#6F9072"} />
        <path d="M60 6C74 38 100 120 60 152A48 48 0 0 0 108 104C108 64 70 24 60 6Z" fill={mono ?? "#DDB05E"} />
      </g>
    </svg>
  );
}

export function Wordmark({ dark = false, size = "md" }: { dark?: boolean; size?: "md" | "lg" }) {
  const lg = size === "lg";
  return (
    <span className={`flex flex-col ${lg ? "gap-1.5" : "gap-[5px]"}`}>
      <span
        className={`font-display font-extrabold leading-[0.95] tracking-[-0.02em] whitespace-nowrap ${
          lg ? "text-[25px]" : "text-[23px]"
        } ${dark ? "text-cream" : "text-forest"}`}
      >
        Bharat Drip
      </span>
      <span
        className={`font-display leading-none font-bold tracking-[0.44em] whitespace-nowrap ${
          lg ? "text-[9.4px]" : "text-[8.5px]"
        } ${dark ? "text-cream" : "text-label"}`}
      >
        IRRIGATION &amp; AGRO
      </span>
    </span>
  );
}
