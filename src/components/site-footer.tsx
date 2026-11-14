import Link from "next/link";
import { footerCompany, footerProducts, site } from "@/data/site";
import { MailIcon, PhoneIcon, PinIcon, WhatsAppIcon } from "./icons";
import { LeafDropMark, Wordmark } from "./logo";
import { Rich } from "./ui";

const linkCls = "inline-flex min-h-9 items-center text-[15px] text-cream no-underline hover:text-gold";

export function SiteFooter() {
  return (
    <footer className="bg-forest pt-[72px] pb-8 text-cream">
      <div className="wrap flex flex-col gap-14">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(220px,100%),1fr))] gap-10">
          <div className="flex flex-col gap-5">
            <Link href="/" aria-label="Bharat Drip Irrigation & Agro, home" className="flex items-center gap-[13px] no-underline">
              <LeafDropMark width={33} height={48} mono="#ECE8D4" />
              <Wordmark dark size="lg" />
            </Link>
            <p className="m-0 max-w-[300px] text-[15px] leading-[1.6] text-mist">
              Drip, sprinkler and pipe systems, manufactured in Rajasthan, India since 2012. Custom sizes and OEM manufacturing. Committed to a greener world.
            </p>
          </div>

          <div className="flex flex-col gap-3.5">
            <p className="eyebrow text-gold">Products</p>
            <ul className="m-0 flex list-none flex-col gap-1 p-0">
              {footerProducts.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className={linkCls}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-3.5">
            <p className="eyebrow text-gold">Company</p>
            <ul className="m-0 flex list-none flex-col gap-1 p-0">
              {footerCompany.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className={linkCls}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-3.5">
            <p className="eyebrow text-gold">Contact</p>
            <div className="flex flex-col gap-3 text-[15px]">
              <a href={site.whatsapp.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 text-cream no-underline hover:text-gold">
                <WhatsAppIcon size={18} className="text-gold" />
                WhatsApp {site.whatsapp.display}
              </a>
              <a href={site.phone.href} className="flex items-center gap-2.5 text-cream no-underline hover:text-gold">
                <PhoneIcon size={18} className="text-gold" />
                {site.phone.display}
              </a>
              <a href={site.email.href} className="flex items-center gap-2.5 text-cream no-underline hover:text-gold">
                <MailIcon size={18} className="text-gold" />
                {site.email.display}
              </a>
              <p className="m-0 flex items-start gap-2.5 leading-[1.5] text-mist">
                <PinIcon size={18} className="text-gold" />
                <span>{site.address}</span>
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-between gap-4 border-t border-forest-line pt-6 text-[13.5px] text-mist">
          <p className="m-0">© {new Date().getFullYear()} Bharat Drip Irrigation and Agro. All rights reserved.</p>
          <p className="m-0">
            <Rich text={`bharatdrip.com · ${site.standards}`} />
          </p>
        </div>
      </div>
    </footer>
  );
}
