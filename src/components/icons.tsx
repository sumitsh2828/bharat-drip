import type { ReactNode, SVGProps } from "react";

/* ------------------------------------------------------------------ */
/* Product line icons — 40×40 stroke drawings                          */
/* ------------------------------------------------------------------ */

const drop = (x: number) => (
  <path key={x} d={`M${x} 23.5c-1.7 2.4-2.3 3.7-2.3 4.7a2.3 2.3 0 0 0 4.6 0c0-1-.6-2.3-2.3-4.7z`} />
);

const productIcons = {
  laterals: (
    <>
      <rect x="3" y="8" width="34" height="8" rx="4" />
      <path d="M11 16v3M20 16v3M29 16v3" />
      {[11, 20, 29].map(drop)}
    </>
  ),
  lateralsFlat: (
    <>
      <rect x="3" y="10.5" width="34" height="4.5" rx="2.25" />
      <path d="M11 15v3.5M20 15v3.5M29 15v3.5" />
      {[11, 20, 29].map(drop)}
    </>
  ),
  dripper: (
    <>
      <rect x="11" y="7" width="18" height="12" rx="4" />
      <path d="M5 13h6M29 13h6" />
      <path d="M20 19v8" />
      <path d="M17 24.5l3 3 3-3" />
      <path d="M20 31c-1.5 2.1-2 3.2-2 4a2 2 0 0 0 4 0c0-.8-.5-1.9-2-4z" />
    </>
  ),
  filter: (
    <>
      <rect x="13" y="8" width="14" height="25" rx="4" />
      <path d="M16 4.5h8M20 4.5V8" />
      <path d="M3 27h10M27 27h10" />
      <path d="M17.5 13v14M20 13v14M22.5 13v14" />
    </>
  ),
  hydrocyclone: (
    <>
      <path d="M12 7h16v7l-5 15h-6l-5-15z" />
      <path d="M3 10.5h9" />
      <path d="M20 7V3" />
      <path d="M20 29v7" />
      <path d="M15 14h10" />
    </>
  ),
  sandFilter: (
    <>
      <rect x="11" y="5" width="18" height="27" rx="8" />
      <path d="M14 32v4M26 32v4" />
      <path d="M3 11h8M29 26h8" />
      <path d="M14 21c2-1.4 4-1.4 6 0s4 1.4 6 0" />
    </>
  ),
  fertigation: (
    <>
      <path d="M12 10h16v18a4 4 0 0 1-4 4h-8a4 4 0 0 1-4-4z" />
      <path d="M15 5.5h10M20 5.5V10" />
      <path d="M14.5 32v4M25.5 32v4" />
      <path d="M28 16h3.5a3 3 0 0 1 3 3v4" />
      <path d="M12 18h16" />
    </>
  ),
  manifold: (
    <>
      <path d="M3 13h10l4 4h6l4-4h10" />
      <path d="M3 25h10l4-4h6l4 4h10" />
      <path d="M20 21v9a3 3 0 0 1-3 3h-5" />
    </>
  ),
  header: (
    <>
      <rect x="4" y="16" width="32" height="8" rx="2" />
      <path d="M10 16v-6M20 16v-6M30 16v-6" />
      <path d="M10 24v6M30 24v6" />
      <path d="M7 10h6M17 10h6M27 10h6" />
    </>
  ),
  valve: (
    <>
      <path d="M3 23h8M29 23h8" />
      <rect x="11" y="16" width="18" height="14" rx="4" />
      <path d="M20 16v-5" />
      <path d="M13 11h14" />
    </>
  ),
  gauge: (
    <>
      <circle cx="20" cy="17" r="12" />
      <path d="M20 17l6-6" />
      <path d="M12 21h2M26 21h2" />
      <path d="M20 29v7M16 36h8" />
    </>
  ),
  fittings: (
    <>
      <path d="M4 14h32v11H25.5v11h-11V25H4z" />
      <path d="M9 14v11M31 14v11M14.5 31h11" />
    </>
  ),
  mini: (
    <>
      <path d="M20 36V19" />
      <rect x="17" y="15" width="6" height="4" rx="1" />
      <path d="M12.5 11.5a10.5 10.5 0 0 1 15 0" />
      <path d="M8 7a16.5 16.5 0 0 1 24 0" />
      <path d="M13 36h14" />
    </>
  ),
  sprinkler: (
    <>
      <path d="M20 24v5" />
      <path d="M20 29l-8 7M20 29l8 7M20 29v7" />
      <rect x="15" y="19.5" width="10" height="5" rx="1.5" />
      <path d="M19 19.5L31 10" />
      <path d="M33.5 6.5c1.6.5 2.8 1.6 3.5 3.2" />
      <path d="M30 4.5c3.4.4 6 2.4 7.4 5.4" />
    </>
  ),
  hdpe: (
    <>
      <ellipse cx="11" cy="20" rx="6" ry="11" />
      <ellipse cx="11" cy="20" rx="3" ry="6.5" />
      <path d="M11 9h23M11 31h23" />
      <path d="M34 9a6 11 0 0 1 0 22" />
    </>
  ),
  pvc: (
    <>
      <circle cx="12.5" cy="27" r="7.5" />
      <circle cx="27.5" cy="27" r="7.5" />
      <circle cx="20" cy="13" r="7.5" />
      <circle cx="12.5" cy="27" r="4" />
      <circle cx="27.5" cy="27" r="4" />
      <circle cx="20" cy="13" r="4" />
    </>
  ),
  mulch: (
    <>
      <path d="M2 32h36" />
      <path d="M4 32c3-8 29-8 32 0" />
      <path d="M13 26v-7M27 26v-7" />
      <path d="M13 21c-3.5-.5-5.5-3-5.5-6.5 3.5 0 5.5 2.5 5.5 6.5zM13 21c3.5-.5 5.5-3 5.5-6.5-3.5 0-5.5 2.5-5.5 6.5z" />
      <path d="M27 21c-3.5-.5-5.5-3-5.5-6.5 3.5 0 5.5 2.5 5.5 6.5zM27 21c3.5-.5 5.5-3 5.5-6.5-3.5 0-5.5 2.5-5.5 6.5z" />
    </>
  ),
  spec: (
    <>
      <rect x="7" y="5" width="26" height="30" rx="3" />
      <path d="M13 13h14M13 19h14M13 25h9" />
    </>
  ),
  tag: (
    <>
      <path d="M5 9h15l15 11-15 11H5z" />
      <circle cx="12" cy="20" r="2.6" />
    </>
  ),
  range: (
    <>
      <path d="M6 13l14-7 14 7v14l-14 7-14-7z" />
      <path d="M6 13l14 7 14-7" />
      <path d="M20 20v14" />
    </>
  ),
} satisfies Record<string, ReactNode>;

export type IconName = keyof typeof productIcons;

export function ProductIcon({
  name,
  size = 30,
  className,
}: {
  name: IconName;
  size?: number;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 40 40"
      aria-hidden="true"
      width={size}
      height={size}
      className={`block flex-none ${className ?? ""}`}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {productIcons[name]}
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Interface icons — 24×24, 1.75 stroke, currentColor                  */
/* ------------------------------------------------------------------ */

type UiProps = SVGProps<SVGSVGElement> & { size?: number };

function Ui({ size = 20, children, className, ...rest }: UiProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`block flex-none ${className ?? ""}`}
      {...rest}
    >
      {children}
    </svg>
  );
}

export const WhatsAppIcon = (p: UiProps) => (
  // Official WhatsApp glyph (Simple Icons, CC0) — filled, so it overrides the outline defaults.
  <Ui fill="currentColor" stroke="none" {...p}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
  </Ui>
);
export const PhoneIcon = (p: UiProps) => (
  <Ui {...p}>
    <path d="M5 3.5h3.6l1.8 4.6-2.3 1.4a11 11 0 0 0 6.4 6.4l1.4-2.3 4.6 1.8V19a2 2 0 0 1-2 2A16.5 16.5 0 0 1 3 5.5a2 2 0 0 1 2-2z" />
  </Ui>
);
export const MailIcon = (p: UiProps) => (
  <Ui {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2.5" />
    <path d="M3.5 7l8.5 6 8.5-6" />
  </Ui>
);
export const ArrowIcon = (p: UiProps) => (
  <Ui {...p}>
    <path d="M5 12h14" />
    <path d="M13 6l6 6-6 6" />
  </Ui>
);
export const PinIcon = (p: UiProps) => (
  <Ui {...p}>
    <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z" />
    <circle cx="12" cy="9.5" r="2.5" />
  </Ui>
);
export const MenuIcon = (p: UiProps) => (
  <Ui {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </Ui>
);
export const CloseIcon = (p: UiProps) => (
  <Ui {...p}>
    <path d="M6 6l12 12M18 6L6 18" />
  </Ui>
);
export const CheckIcon = (p: UiProps) => (
  <Ui strokeWidth={2.2} {...p}>
    <path d="M5 12.5l4.5 4.5L19 7.5" />
  </Ui>
);
