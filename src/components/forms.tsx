"use client";

import { Fragment, useRef } from "react";
import { useSearchParams } from "next/navigation";
import type { QuoteField, QuoteFieldRow } from "@/data/types";
import { site } from "@/data/site";
import { whatsappHref } from "@/lib/enquiry";
import { useEnquiry, type EnquiryStatus } from "@/lib/use-enquiry";
import { ArrowIcon, CheckIcon, WhatsAppIcon } from "./icons";

/* ------------------------------------------------------------------ */
/* Field                                                                */
/* ------------------------------------------------------------------ */

export function Field({
  field,
  idPrefix = "",
  required,
  defaultValue,
}: {
  field: QuoteField;
  idPrefix?: string;
  required?: boolean;
  defaultValue?: string;
}) {
  const id = idPrefix + field.id;
  return (
    <div className="flex min-w-0 flex-col gap-2">
      <label htmlFor={id} className="text-[14.5px] font-semibold">
        {field.label}
        {required && (
          <span aria-hidden="true" className="text-label">
            {" "}
            *
          </span>
        )}
      </label>
      {field.type === "select" ? (
        <select id={id} name={field.id} defaultValue={defaultValue} className="field cursor-pointer appearance-auto">
          {field.options?.map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
      ) : (
        <input
          id={id}
          name={field.id}
          type={field.type ?? "text"}
          placeholder={field.placeholder}
          required={required}
          defaultValue={defaultValue}
          autoComplete={
            field.type === "email" ? "email" : field.type === "tel" ? "tel" : field.id === "nm" ? "name" : field.id === "co" ? "organization" : undefined
          }
          className="field"
        />
      )}
    </div>
  );
}

const contactFields: QuoteField[] = [
  { id: "nm", label: "Your name" },
  { id: "co", label: "Company" },
  { id: "em", label: "Email", type: "email" },
  { id: "wa", label: "WhatsApp number", type: "tel" },
];

const brandField: QuoteField = { id: "brand", label: "Brand", type: "select", options: ["Bharat Drip", "My own brand (OEM)"] };

/* ------------------------------------------------------------------ */
/* Status message                                                       */
/* ------------------------------------------------------------------ */

function StatusNote({ status, dark }: { status: EnquiryStatus; dark?: boolean }) {
  if (status === "idle" || status === "sending") return null;
  const tone = dark ? "bg-forest-2 text-cream" : "bg-paper text-forest";
  const text =
    status === "sent"
      ? "Thank you. Your request has been sent; we usually reply within one working day."
      : status === "mailto"
        ? "Your email app should open with the request filled in. Press send there to finish."
        : `Something went wrong. Please try again, or write to ${site.email.display}.`;
  return (
    <p role="status" className={`m-0 flex items-start gap-2.5 rounded-xl px-4 py-3 text-[14.5px] leading-[1.5] ${tone}`}>
      {status !== "error" && <CheckIcon size={18} className="mt-0.5 text-sage" />}
      {text}
    </p>
  );
}

/* ------------------------------------------------------------------ */
/* Product page quote form (aside)                                      */
/* ------------------------------------------------------------------ */

export function ProductQuoteForm({
  productName,
  intro,
  fields,
}: {
  productName: string;
  intro: string;
  fields: QuoteFieldRow[];
}) {
  const formRef = useRef<HTMLFormElement>(null);
  const { status, submit, snapshot } = useEnquiry(() => `Quote request: ${productName}`);

  return (
    <form
      ref={formRef}
      noValidate={false}
      onSubmit={(e) => {
        e.preventDefault();
        submit(e.currentTarget);
      }}
      className="flex flex-col gap-[18px] rounded-3xl bg-wheat p-7"
    >
      <div className="flex flex-col gap-1.5">
        <h2 id="q-h" className="m-0 font-display text-2xl leading-[1.2] font-extrabold">
          Request a quote
        </h2>
        <p className="m-0 text-[15px] text-ink">{intro}</p>
      </div>
      <input type="hidden" name="Product" value={productName} />
      {fields.map((row, i) =>
        "grid" in row ? (
          <div key={i} className="grid grid-cols-2 gap-3">
            {row.grid.map((f) => (
              <Field key={f.id} field={f} />
            ))}
          </div>
        ) : (
          <Fragment key={row.id}>
            {row.id === "qty" && <Field field={brandField} />}
            <Field field={row} />
          </Fragment>
        ),
      )}
      {contactFields.map((f) => (
        <Field key={f.id} field={f} required={f.id === "nm" || f.id === "em"} />
      ))}
      <button
        type="submit"
        disabled={status === "sending"}
        className="min-h-[52px] cursor-pointer rounded-xl border-0 bg-forest font-sans text-base font-semibold text-cream transition-colors hover:bg-forest-hover disabled:cursor-wait disabled:opacity-70"
      >
        {status === "sending" ? "Sending…" : "Send request"}
      </button>
      <StatusNote status={status} />
      <a
        href={site.whatsapp.href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => {
          if (!formRef.current) return;
          e.currentTarget.href = whatsappHref(snapshot(formRef.current));
        }}
        className="inline-flex min-h-11 items-center justify-center gap-2 text-[15px] font-semibold text-forest no-underline hover:underline"
      >
        <WhatsAppIcon size={18} />
        Or WhatsApp {site.whatsapp.display}
      </a>
    </form>
  );
}

/* ------------------------------------------------------------------ */
/* Contact page form                                                    */
/* ------------------------------------------------------------------ */

const roles = ["Distributor or dealer", "Farm or grower", "Contractor", "Other"];
const products = [
  "Drip laterals",
  "Drippers",
  "Filters",
  "Fertigation",
  "Valves & fittings",
  "Mini sprinklers",
  "Sprinklers & rain guns",
  "HDPE pipes",
  "PVC pipes",
  "Mulch film",
];
const brands = ["Bharat Drip brand", "My own brand (OEM)", "Not sure yet"];

const chip =
  "inline-flex min-h-11 cursor-pointer items-center gap-2.5 rounded-full border-[1.5px] border-line bg-paper-2 px-4 text-[15px] font-medium transition-colors hover:border-forest has-[:checked]:border-forest has-[:checked]:bg-sage-tint";

export function ContactForm({
  initial,
}: {
  initial?: { role?: string; products?: string[]; details?: string };
}) {
  const formRef = useRef<HTMLFormElement>(null);
  const { status, submit, snapshot } = useEnquiry((entries) => {
    const prods = entries.find((e) => e.label === "Products you need")?.value;
    return prods ? `Quote request: ${prods}` : "Quote request from bharatdrip.com";
  });

  const grid: QuoteField[] = [
    { id: "ctry", label: "Destination country" },
    { id: "port", label: "Port of delivery (optional)" },
    { id: "name2", label: "Your name" },
    { id: "comp", label: "Company" },
    { id: "mail", label: "Email", type: "email" },
    { id: "tel2", label: "WhatsApp or phone", type: "tel" },
  ];

  return (
    <form
      ref={formRef}
      aria-labelledby="f-h"
      onSubmit={(e) => {
        e.preventDefault();
        submit(e.currentTarget);
      }}
      className="flex min-w-0 flex-[999_1_560px] flex-col gap-7 rounded-[28px] bg-paper p-[clamp(24px,3.5vw,40px)]"
    >
      <h2 id="f-h" className="m-0 font-display text-[26px] font-extrabold">
        Your enquiry
      </h2>

      <fieldset className="m-0 flex flex-col gap-3 border-0 p-0">
        <legend className="mb-3 p-0 text-[14.5px] font-semibold">You are a</legend>
        <div className="flex flex-wrap gap-2">
          {roles.map((r) => (
            <label key={r} className={chip}>
              <input
                type="radio"
                name="role"
                value={r}
                defaultChecked={initial?.role === r}
                className="m-0 size-[18px] accent-forest"
              />
              {r}
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset className="m-0 flex flex-col gap-3 border-0 p-0">
        <legend className="mb-3 p-0 text-[14.5px] font-semibold">Products you need</legend>
        <div className="flex flex-wrap gap-2">
          {products.map((p) => (
            <label key={p} className={chip}>
              <input
                type="checkbox"
                name="prod"
                value={p}
                defaultChecked={initial?.products?.includes(p)}
                className="m-0 size-[18px] accent-forest"
              />
              {p}
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset className="m-0 flex flex-col gap-3 border-0 p-0">
        <legend className="mb-3 p-0 text-[14.5px] font-semibold">Branding</legend>
        <div className="flex flex-wrap gap-2">
          {brands.map((b) => (
            <label key={b} className={chip}>
              <input type="radio" name="brand" value={b} className="m-0 size-[18px] accent-forest" />
              {b}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="flex min-w-0 flex-col gap-2">
        <label htmlFor="det" className="text-[14.5px] font-semibold">
          Sizes and quantities
        </label>
        <textarea
          id="det"
          name="det"
          rows={5}
          defaultValue={initial?.details}
          placeholder="e.g. 16 mm inline flat lateral, 0.40 mm wall, 4 LPH, 40 cm spacing: one 40′ container"
          className="field resize-y px-3.5 py-3 leading-[1.5]"
        />
        <span className="text-[13.5px] text-muted">Include diameters, pressure classes and quantities if you know them.</span>
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(300px,100%),1fr))] gap-4">
        {grid.map((f) => (
          <Field key={f.id} field={f} required={f.id === "name2" || f.id === "mail"} />
        ))}
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex min-h-[54px] cursor-pointer items-center gap-2.5 rounded-xl border-0 bg-gold px-7 font-sans text-base font-semibold text-forest transition-colors hover:bg-gold-hover disabled:cursor-wait disabled:opacity-70"
        >
          {status === "sending" ? "Sending…" : "Send request"}
          <ArrowIcon />
        </button>
        <a
          href={site.whatsapp.href}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => {
            if (!formRef.current) return;
            e.currentTarget.href = whatsappHref(snapshot(formRef.current));
          }}
          className="inline-flex min-h-11 items-center gap-2 text-[15px] font-semibold text-forest no-underline hover:underline"
        >
          <WhatsAppIcon size={18} />
          Send it on WhatsApp instead
        </a>
      </div>
      <StatusNote status={status} />
    </form>
  );
}

/** Reads ?role=, ?product= and ?details= so links can pre-fill the form. */
export function ContactFormFromQuery() {
  const sp = useSearchParams();
  const product = sp.get("product");
  return (
    <ContactForm
      key={sp.toString()}
      initial={{
        role: sp.get("role") ?? undefined,
        products: product ? [product] : undefined,
        details: sp.get("details") ?? undefined,
      }}
    />
  );
}
