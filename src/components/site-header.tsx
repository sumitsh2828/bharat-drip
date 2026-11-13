"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { mainNav, site } from "@/data/site";
import { CloseIcon, MailIcon, MenuIcon, PhoneIcon, WhatsAppIcon } from "./icons";
import { LeafDropMark, Wordmark } from "./logo";
import { buttonClass } from "./ui";

function isActive(pathname: string, href: string) {
  if (href.includes("#")) return false;
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close the mobile menu whenever the route changes
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="relative z-40">
      {/* Utility bar */}
      <div className="hidden bg-forest text-cream nav:block">
        <div className="wrap flex min-h-10 items-center justify-between gap-6 text-[13.5px]">
          <p className="m-0 text-mist">{site.tagline}</p>
          <div className="flex items-center gap-6">
            <a href={site.whatsapp.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-cream no-underline hover:text-gold">
              <WhatsAppIcon size={16} />
              WhatsApp {site.whatsapp.display}
            </a>
            <a href={site.phone.href} className="inline-flex items-center gap-2 text-cream no-underline hover:text-gold">
              <PhoneIcon size={16} />
              {site.phone.display}
            </a>
            <a href={site.email.href} className="inline-flex items-center gap-2 text-cream no-underline hover:text-gold">
              <MailIcon size={16} />
              {site.email.display}
            </a>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div className="border-b border-line bg-cream">
        <div className="wrap flex min-h-[84px] items-center justify-between gap-6">
          <Link href="/" aria-label="Bharat Drip Irrigation & Agro, home" className="flex items-center gap-3 no-underline">
            <LeafDropMark />
            <Wordmark />
          </Link>

          <nav aria-label="Main" className="hidden nav:block">
            <ul className="m-0 flex list-none items-center gap-9 p-0">
              {mainNav.map((item) => {
                const active = isActive(pathname, item.href);
                return (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={`box-border inline-flex min-h-11 items-center border-b-2 text-[15.5px] text-forest no-underline transition-colors hover:border-gold ${
                        active ? "border-gold font-semibold" : "border-transparent font-medium"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={site.whatsapp.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="box-border inline-flex size-12 items-center justify-center rounded-xl border-[1.5px] border-forest text-forest transition-colors hover:bg-forest hover:text-cream"
            >
              <WhatsAppIcon size={22} />
            </a>
            <div className="hidden nav:block">
              <Link href="/contact" className={buttonClass("gold")}>
                <span>Request a quote</span>
              </Link>
            </div>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((v) => !v)}
              className="flex size-12 cursor-pointer items-center justify-center rounded-xl border-[1.5px] border-line bg-transparent p-0 text-forest transition-colors hover:border-forest nav:hidden"
            >
              {open ? <CloseIcon size={22} /> : <MenuIcon size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        hidden={!open}
        className="absolute inset-x-0 top-full border-b border-line bg-cream shadow-[0_24px_40px_-24px_rgba(20,36,24,0.35)] nav:hidden"
      >
        <nav aria-label="Mobile" className="wrap flex flex-col gap-6 pt-3 pb-7">
          <ul className="m-0 flex list-none flex-col p-0">
            {mainNav.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <li key={item.label} className="border-b border-line">
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    aria-current={active ? "page" : undefined}
                    className={`flex min-h-14 items-center justify-between font-display text-xl font-extrabold text-forest no-underline ${
                      active ? "text-label" : ""
                    }`}
                  >
                    {item.label}
                    <span aria-hidden="true" className="text-ochre">
                      →
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="flex flex-col gap-3">
            <Link href="/contact" onClick={() => setOpen(false)} className={buttonClass("gold", "w-full")}>
              <span>Request a quote</span>
            </Link>
            <a href={site.whatsapp.href} target="_blank" rel="noopener noreferrer" className={buttonClass("outline", "w-full")}>
              <WhatsAppIcon />
              <span>WhatsApp {site.whatsapp.display}</span>
            </a>
          </div>
          <div className="flex flex-col gap-2 text-[15px] text-muted">
            <a href={site.phone.href} className="inline-flex items-center gap-2 font-semibold text-forest no-underline">
              <PhoneIcon size={18} />
              {site.phone.display}
            </a>
            <a href={site.email.href} className="inline-flex items-center gap-2 font-semibold text-forest no-underline">
              <MailIcon size={18} />
              {site.email.display}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
