import type { Metadata } from "next";
import { Suspense } from "react";
import { ContactForm, ContactFormFromQuery } from "@/components/forms";
import { ArrowIcon, MailIcon, PhoneIcon, PinIcon, WhatsAppIcon } from "@/components/icons";
import { ButtonLink, PageHero, Rich } from "@/components/ui";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Request a quote",
  description:
    "Tell us what you need and where it’s going. We reply with pricing, packing details and dispatch time by email or WhatsApp.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        trail={[{ href: "/", label: "Home" }, { label: "Request a quote" }]}
        title="Request a quote"
        lead="Tell us what you need and where it’s going. We’ll reply with pricing, packing details and dispatch time by email or WhatsApp."
      />

      <div className="pb-[clamp(72px,8vw,112px)]">
        <div className="wrap flex flex-wrap items-start gap-6">
          <Suspense fallback={<ContactForm />}>
            <ContactFormFromQuery />
          </Suspense>

          <aside aria-label="Other ways to reach us" className="flex min-w-0 flex-[1_1_320px] flex-col gap-3">
            <div className="flex flex-col gap-3 rounded-[22px] bg-forest p-6 text-cream">
              <WhatsAppIcon size={28} className="text-gold" />
              <p className="m-0 font-display text-[22px] font-extrabold">Chat on WhatsApp</p>
              <p className="m-0 text-[15.5px] leading-[1.6] text-mist">
                Send photos, drawings or a quick question. {site.whatsapp.display}
              </p>
              <div>
                <ButtonLink href={site.whatsapp.href} icon={<ArrowIcon />}>
                  Open WhatsApp
                </ButtonLink>
              </div>
            </div>

            <div className="flex flex-col gap-3 rounded-[22px] bg-paper p-6">
              <PhoneIcon size={26} />
              <p className="m-0 text-[17px] font-semibold">Call us</p>
              <a href={site.phone.href} className="font-display text-[21px] font-extrabold text-forest no-underline hover:underline">
                {site.phone.display}
              </a>
              <p className="m-0 text-[14.5px] text-muted">
                <Rich text="India Standard Time (UTC+5:30), [working hours]" />
              </p>
            </div>

            <div className="flex flex-col gap-3 rounded-[22px] bg-paper p-6">
              <MailIcon size={26} />
              <p className="m-0 text-[17px] font-semibold">Email</p>
              <a
                href={site.email.href}
                className="font-display text-[19px] font-extrabold [overflow-wrap:anywhere] text-forest no-underline hover:underline"
              >
                {site.email.display}
              </a>
            </div>

            <div className="flex flex-col gap-3 rounded-[22px] bg-paper p-6">
              <PinIcon size={26} />
              <p className="m-0 text-[17px] font-semibold">Factory</p>
              <p className="m-0 text-[15.5px] leading-[1.6] text-ink">
                {site.legalName}
                <br />
                {site.address}
              </p>
              <div>
                <a
                  href={site.mapsHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex min-h-11 items-center gap-2 text-[15px] font-semibold text-forest no-underline"
                >
                  Get directions
                  <ArrowIcon size={18} className="transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
